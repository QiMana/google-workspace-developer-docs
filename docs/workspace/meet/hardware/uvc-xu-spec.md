---
source: https://developers.google.com/workspace/meet/hardware/uvc-xu-spec
root: workspace
fetched_at: 2026-04-23T15:30:31.948Z
---

# Google Meet hardware USB Video Class Extension Unit APIs

This document outlines the supported USB Video Class Extension Unit (XU) APIs used by Google Meet conference systems to enable intelligent camera features. The purpose of creating this specification is to influence practices to enable these features and to allow for better asynchronous scalability and testing for our partners.

For details about the latest changes to this document, go to [Release notes](#release-notes).

## Test facility

To help partners validate compliance with this specification, we provide a test facility in Chromebox-for-Meetings devices set in [developer mode](https://www.chromium.org/chromium-os/developer-library/guides/device/developer-mode/). Enable [writing to the filesystem](https://www.chromium.org/chromium-os/developer-library/guides/device/developer-mode/#making-changes-to-the-filesystem). Add the following lines to [`/etc/chrome_dev.conf`](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/#chrome-os):

```
--enable-logging
--log-level=0
```

Restart the device, connect the camera and a USB keyboard, press `Ctrl-Alt-X`, and the active camera's spec compliance will be exercised and logged to `/var/log/chrome/chrome` (if using a signed image then `/home/chronos/user/log/chrome`).

## Little-endian convention

USB is a little-endian standard. Within this document:

- Multi-byte numbers appear big-endian (and are transmitted little-endian).
- Byte arrays are in the little-endian memory layout.

For example, `0x12345678` is the same as `[0x78, 0x56, 0x34, 0x12]`.

## Extension unit GUID

Extension units supporting this Meet XU control specification must use this GUID.

| Extension Unit | GUID |
| --- | --- |
| Peripheral Control XU | {74D7E924-49C9-4A45-98A3-8A9F60061E83} |

## Peripheral control XU selectors

These are the defined peripheral control XU selectors.

| Control selectors | Value |
| --- | --- |
| `GOOGXU_FRAME_STRATEGY` | 0x01 |
| `GOOGXU_REFRAME` | 0x02 |
| `GOOGXU_OCCUPANCY_COUNTING_TOGGLE` | 0x03 |
| `GOOGXU_OCCUPANCY_COUNTING_READ` | 0x04 |
| `GOOGXU_STATUS_INFO` | 0x05 |
| `GOOGXU_STATUS_RESET` | 0x06 |
| `GOOGXU_PRESETS` | 0x07 |
| `GOOGXU_PAN_TILT_ABSOLUTE` | 0x08 |
| `GOOGXU_PAN_TILT_RELATIVE` | 0x09 |
| `GOOGXU_SATELLITE_INFO` | 0x0A |

## Control request type

Control request types are defined in Chapter 4: Class Specific Requests of the [UVC 1.5 Class Specification](https://www.usb.org/document-library/video-class-v15-document-set).

| Operation | UVC control |
| --- | --- |
| `GET` | `GET_CUR`, `GET_MIN`, `GET_MAX`, `GET_RES`, `GET_LEN`, `GET_INFO`, `GET_DEF` |
| `SET` | `SET_CUR` |

## Camera modes

Camera modes are used to frame individuals in a meeting room and are a `tuple` of:

- Strategy (camera view)
- Bias (speaker or room)
- Feeds (single or multiple streams)

Each dimension can take values described in the following sections.

### Auto-framing strategy

In all automatic framing modes besides "None", manual pan, tilt, and zoom are disabled.

| Feature | Description |
| --- | --- |
| None | The camera disables all intelligent framing features and allows the client to freely control the PTZ values.   **Note:** When set to this framing strategy, the camera remains in its current pan, tilt, and zoom position. |
| Continuous Framing (CAZ) | Based on the framing bias, the camera continually tracks people in the room. |
| Split Frames | The camera creates as many video views as needed. Based on the [Auto-framing feeds](#feeds) option, it either composes them into tiles in a single stream or creates separate video streams for each view. |
| Dynamic View | One or more cameras attempt to provide the best view of the room. It can decide whether or not to composite multiple feeds into one or provide an "interesting" view of the current room.   The purpose of this view is to provide the most equitable view of in-room participants to the call. |
| Vendor-preferred | The camera system uses its own logic to determine the best view of the room. The underlying framing strategy is subject to change without notice. For example, if the number of people in the room changes, or the camera can detect the difference between a "High-stakes Presenter" versus a "Collaboration" meeting, the system is free to adapt or change framing strategy as it sees fit in this mode. When in this mode, calling `getCur` should return VENDOR\_PREFERRED, and not the underlying framing mode that has been selected by the system. |

### Auto-framing bias

| Feature | Description |
| --- | --- |
| High-stakes Presenter (Speaker Tracking) | The camera attempts to best frame the person actively speaking in the room.   In this scenario, the camera should bias toward the presenter. For example, the CEO in a boardroom giving a presentation. |
| Collaboration   (Room Tracking) | The camera attempts to best frame all participants in the room. In this scenario, the camera should treat every participant equitably. |

### Auto-framing feeds

| Feature | Description |
| --- | --- |
| Single-Stream | The camera sends a single video stream to the host device. |
| Multi-Stream   (Work-In-Progress) | The camera splits the stream and creates multiple video streams to send to the host.   **Note:** The full specification and expected behavior of this feature is pending review and **isn't supported** until later revisions of this document. |

### Auto-framing mode bitmap values

Except for the default state of `None` that's represented by an empty byte array, each bit in the byte array represents a different camera mode which is a specific combination of the [Auto-framing strategy](#strategy), [Auto-framing bias](#bias), and the [Auto-framing feeds](#feeds).

| Auto-framing feeds | CAZ | Split-Frame | Dynamic | Vendor-preferred | Auto-framing bias |
| --- | --- | --- | --- | --- | --- |
| **Single-Stream** | D1   D2 | \-   D3 | D5   D7 | D9 (speaker or room) | **Speaker**   **Room** |
| **Multi-Stream** | \-   \- | \-   D4 | D6   D8 | \- | **Speaker**   **Room** |

| Frame modes | Frame mode value (least significant byte) |
| --- | --- |
| `None` | 0x0000 |
| `CAZ, Speaker, Single-Stream` | 0x0001 |
| `CAZ, Room, Single-Stream` | 0x0002 |
| `Split-Frame, Room, Single-Stream` | 0x0004 |
| `Split-Frame, Room, Multi-Stream` | 0x0008 |
| `Dynamic, Speaker, Single-Stream` | 0x0010 |
| `Dynamic, Speaker, Multi-Stream` | 0x0020 |
| `Dynamic, Room, Single-Stream` | 0x0040 |
| `Dynamic, Room, Multi-Stream` | 0x0080 |
| `Vendor-preferred, Single-Stream` | 0x0100 |

### Control: GOOGXU\_FRAME\_STRATEGY

This control is used to get or set the framing modes of the camera as listed in [Auto-framing mode bitmap values](#bitmap-values). Each mode is represented as a bit in their respective bitmap. The command `GET_RES` returns an 8-byte long bitmask with a value of zero (0) or one (1) to respectively indicate if the feature is unsupported or supported by the device. For example, if a camera supports `CAZ, Speaker, Single-Stream`, `Split-Frame, Room, Single-Stream`, and `Dynamic, Room, Multi-Stream` but no other modes, then `GET_RES` should return 0x000000000000000085 (i.e. `0b10000101` followed by seven zero bytes).

The command `SET_CUR` is used to send bitmaps to tell the camera which **SINGLE** camera mode to enable.

<table><tbody><tr><th>Control selector</th><th>1</th><th></th><th></th><th></th></tr><tr><td>Operation</td><td><code>GET / SET</code></td></tr><tr><td><code>wLength</code></td><td>8</td></tr><tr><th>Offset</th><th>Field</th><th>Size</th><th>Value</th><th>Description</th></tr><tr><td>0</td><td><code>bActiveMode</code></td><td>8</td><td>Bitmap</td><td>Set or return Active Camera Mode</td></tr><tr><td colspan="4"><b>Notes:</b><ul><li>Bitmap values are discussed in section <a href="#bitmap-values">Auto-framing mode bitmap values</a>.</li><li>D9-D64: Reserved, set to zero.</li></ul></td></tr></tbody></table>

The behavior of the supported request types is as follows:

| Offset | 0 | Description |
| --- | --- | --- |
| `GET_CUR` |  | Get Active Framing Camera Mode |
| `GET_MIN` |  | Camera-dependent |
| `GET_MAX` |  | Camera-dependent |
| `GET_RES` |  | Returns an 8-byte long bitmask of supported camera modes |
| `GET_LEN` | 0x0008 | Length |
| `GET_INFO` | 0x0B | AutoUpdate / Write / Read |
| `GET_DEF` | 0x00 0x00 0x00 0x00   0x00 0x00 0x00 0x00 | Default value |
| `SET_CUR` |  | Set Active Framing Camera mode |

### Control: GOOGXU\_REFRAME

This control is used to trigger One-Shot Framing, also known as OTAZ. When OTAZ is triggered, the camera view snaps to the best view of the room. Afterwards, the client regains the ability to control the PTZ values. If one-shot framing isn't supported, the camera shouldn't define this control.

| Control selector | 2 |  |  |  |
| --- | --- | --- | --- | --- |
| Operation | `SET` |
| `wLength` | 1 |
| Offset | Field | Size | Value | Description |
| 0 | `bReframe` | 1 | Number | 0x01 Execute Reframe Request |

The behavior of the supported request types is as follows:

| Offset | 0 | Description |
| --- | --- | --- |
| `GET_MIN` | 0x00 |  |
| `GET_MAX` | 0x01 |  |
| `GET_RES` | 0x01 |  |
| `GET_LEN` | 0x0001 |  |
| `GET_INFO` | 0x02 | Write Only |
| `GET_DEF` | 0x00 |  |
| `SET_CUR` |  | Set request for One-Shot Framing |

## Occupancy counting

Occupancy counting (OC) is a feature used to estimate the number of participants in a meeting room, despite the camera's cropped view.

This table shows the expected behavior of the OC controls and their interactions with the camera video stream and the camera LED indicator.

| When Occupancy Counting is | & the camera video stream is: | The camera LED indicator should be | `GOOGXU_OCCUPANCY_COUNTING_TOGGLE` `GET_CUR` should be | `GOOGXU_OCCUPANCY_COUNTING_READ` `GET_CUR` should be |
| --- | --- | --- | --- | --- |
| Turned on | Not streaming and not muted | On | `0x01` | The count of persons in the camera's full field of view. |
| Turned on | Streaming | On | `0x01` | The count of persons in the camera's full field of view. |
| Turned on | Muted | Off | `0x01` | Turned off |
| Turned off | Not streaming and not muted | Off | `0x00` | Turned off |
| Turned off | Streaming | On | `0x00` | Turned off |
| Turned off | Muted | Off | `0x00` | Turned off |

### Control: GOOGXU\_OCCUPANCY\_COUNTING\_TOGGLE

This control is used to enable or disable the feature to count occupants in a room. Setting a value of zero (0) disables this feature and one (1) enables this feature. If this feature is unsupported, the camera shouldn't define this control.

| Control selector | 3 |  |  |  |
| --- | --- | --- | --- | --- |
| Operation | `GET / SET` |
| `wLength` | 1 |
| Offset | Field | Size | Value | Description |
| 0 | `bOccupancy` | 1 | Boolean | Set occupancy counting function   0x00 Turn off function   0x01 Turn on function |

The behavior of the supported request types is as follows:

| Offset | 0 | Description |
| --- | --- | --- |
| `GET_CUR` |  | Return if occupancy counting is turned on |
| `GET_MIN` | 0x00 |  |
| `GET_MAX` | 0x01 |  |
| `GET_RES` | 0x01 |  |
| `GET_LEN` | 0x0001 |  |
| `GET_INFO` | 0x0B | AutoUpdate / Write / Read |
| `GET_DEF` | 0x00 |  |
| `SET_CUR` |  | Enable or disable occupancy counting feature |

### Control: GOOGXU\_OCCUPANCY\_COUNTING\_READ

This control is used to read the number of participants in a room reported by the camera when occupancy counting is enabled. When occupancy counting is disabled, the camera should disable this control. If occupancy counting isn't supported, the camera shouldn't define this control.

| Control selector | 4 |  |  |  |
| --- | --- | --- | --- | --- |
| Operation | `GET` |
| `wLength` | 2 |
| Offset | Field | Size | Value | Description |
| 0 | `bNumPeople` | 2 | Number | The number of detected occupants in view. (Read Only) |

The behavior of the supported request types is as follows:

| Offset | 0 | Description |
| --- | --- | --- |
| `GET_CUR` |  | Return number of detected occupants |
| `GET_MIN` | 0x0000 |  |
| `GET_MAX` | 0x00FF |  |
| `GET_RES` | 0x0001 |  |
| `GET_LEN` | 0x0002 |  |
| `GET_INFO` | 0x09 | AutoUpdate / Read |
| `GET_DEF` | 0x0000 |  |

## Device telemetry & diagnostics

These controls are meant to encourage better debugging practices with Meet hardware and are usually not user facing.

### Control: GOOGXU\_STATUS\_INFO

This control is used to query information from the host camera to share with partners for debugging.

| Control selector | 5 |  |  |  |
| --- | --- | --- | --- | --- |
| Operation | `GET` |
| `wLength` | 8 |
| Offset | Field | Size | Value | Description |
| 0 | `bNumCameras` | 1 | Number | The number of additional satellites attached to the main camera that may affect the camera stream returned to the host. |
| 1 | `bIsMoving` | 1 | Bitmap | 0 when the camera is idle, and non-zero when its PTZ values are changing. Vendors are free to map different axes or motors to different bits. |
| 2 | `Undef` | 6 | Undef | To be extended in the future. |

The behavior of the supported request types is as follows:

| Offset | 0 | 1 | 2 | Description |
| --- | --- | --- | --- | --- |
| `GET_MIN` | 0x00 | 0x00 | 0x00 0x00 0x00   0x00 0x00 0x00 |  |
| `GET_MAX` | 0xFF | 0xFF | 0xFF 0xFF 0xFF   0xFF 0xFF 0xFF |  |
| `GET_RES` | 0x01 | 0x01 | 0x01 0x00 0x00   0x00 0x00 0x00 |  |
| `GET_LEN` | 0x08 | 0x00 |  | 0x0008 |
| `GET_INFO` | 0x09 |  |  | AutoUpdate / Read |
| `GET_DEF` | 0x00 | 0x00 | 0x00 0x00 0x00   0x00 0x00 0x00 |  |

### Control: GOOGXU\_SATELLITE\_INFO

This control is used to query the satellite devices that are connected to this camera system.

| Control selector | 0x0A |  |  |  |
| --- | --- | --- | --- | --- |
| Operation | `GET` |
| `wLength` | 20 |
| Offset | Field | Size | Value | Description |
| 0 | `bSatelliteList` | 20 | Bitmap | The list of satellite types attached to the system. Includes four separate 5-byte slots. Each of the slots is described as follows:    \| Offset \| Description \| \| --- \| --- \| \| 0 \| Quantity for this satellite type. \| \| 1-2 \| Vendor ID of this satellite type. \| \| 3-4 \| Product ID for this satellite type. \| | Offset | Description | 0 | Quantity for this satellite type. | 1-2 | Vendor ID of this satellite type. | 3-4 | Product ID for this satellite type. |
| Offset | Description |
| 0 | Quantity for this satellite type. |
| 1-2 | Vendor ID of this satellite type. |
| 3-4 | Product ID for this satellite type. |

The behavior of the supported request types is as follows:

| Offset | 0 | Description |
| --- | --- | --- |
| `GET_MIN` | 0x00 0x00 0x00 0x00 0x00   0x00 0x00 0x00 0x00 0x00   0x00 0x00 0x00 0x00 0x00   0x00 0x00 0x00 0x00 0x00 |  |
| `GET_MAX` | 0xFF 0xFF 0xFF 0xFF 0xFF   0xFF 0xFF 0xFF 0xFF 0xFF   0xFF 0xFF 0xFF 0xFF 0xFF   0xFF 0xFF 0xFF 0xFF 0xFF |  |
| `GET_RES` | 0x00 0x00 0x00 0x00 0x00   0x00 0x00 0x00 0x00 0x00   0x00 0x00 0x00 0x00 0x00   0x00 0x00 0x00 0x00 0x00 |  |
| `GET_LEN` | 0x14 | 20 bytes |
| `GET_INFO` | 0x09 | AutoUpdate / Read |
| `GET_DEF` | 0x00 0x00 0x00 0x00 0x00   0x00 0x00 0x00 0x00 0x00   0x00 0x00 0x00 0x00 0x00   0x00 0x00 0x00 0x00 0x00 |  |

### Control: GOOGXU\_STATUS\_RESET

This control is used to issue a reset request to the camera. Setting a value of one (1) requests the camera to reset. The camera returns zero (0) if there's been no request to restart the camera since the last reset and one (1) if it's resetting. The reset must trigger a camera reboot. (This is needed for self-powered devices where forcing a USB-disconnect to emulate a hotplug isn't useful.)

| Control selector | 6 |  |  |  |
| --- | --- | --- | --- | --- |
| Operation | `GET / SET` |
| `wLength` | 1 |
| Offset | Field | Size | Value | Description |
| 0 | `bResetRequest` | 1 | Boolean | Issue a reset request to the host and connected cameras.   Returns 0x01 if reset request issued since last reset, else 0x00. |

The behavior of the supported request types is as follows:

| Offset | 0 | Description |
| --- | --- | --- |
| `GET_MIN` | 0x00 |  |
| `GET_MAX` | 0x01 |  |
| `GET_RES` | 0x01 |  |
| `GET_LEN` | 0x0001 |  |
| `GET_INFO` | 0x03 | Write / Read |
| `GET_DEF` | 0x00 |  |

## PTZ presets

Used to configure and restore the camera's field of view into a preset position.

### Control: GOOGXU\_PRESETS

This control is used to set the camera's pan, tilt, and zoom (PTZ) values to a preset configuration.

The `Preset Action` is used to state the intended action of the command. Setting a value of one (1) is used to map the current pan, tilt, and zoom values to a provided preset index. Setting a value of two (2) should transition the pan, tilt, and zoom of the camera to the previously mapped values for the provided index, or the default factory coordinates (if not previously mapped). Setting a value of three (3) resets the index to the factory default coordinates.

The `Preset Index` is used to specify the PTZ coordinates mapped to the index. The `Preset index` of zero (0) is mapped to the home coordinates and should be the camera's default position on wake when the `GOOGXU_FRAME_STRATEGY` is set to `NONE`.

| Control selector | 7 |  |  |  |
| --- | --- | --- | --- | --- |
| Operation | `SET` |
| `wLength` | 2 |
| Offset | Field | Size | Value | Description |
| 0 | `bPresetAction` | 1 | Number | 0x01: Save preset   0x02: Restore preset   0x03: Reset preset to default. (Default should be a valid preset coordinate.) |
| 1 | `bPresetIndex` | 1 | Number | The Active Preset index. 0~N-1   Where 0 is considered the default camera start position and N-1 is a vendor-defined constant for the number of presets. |

The behavior of the supported request types is as follows:

| Offset | 0 | 1 | Description |
| --- | --- | --- | --- |
| `GET_MIN` | 0x00 | 0x00 |  |
| `GET_MAX` | 0x03 | N-1 | N max presets supported |
| `GET_RES` | 0x01 | 0x01 |  |
| `GET_LEN` | 0x02 | 0x00 | 0x0002 |
| `GET_INFO` | 0x02 |  | Write only |
| `GET_DEF` | 0x00 | 0x00 |  |

## Pan & tilt auxiliary mapping

Some cameras have special components, such as the motors for mechanical cameras, or digital PTZ capabilities. For these, use the standard V4L2 controls for pan, tilt, and zoom.

### Control: GOOGXU\_PAN\_TILT\_ABSOLUTE (deprecated)

Pan and tilt auxiliary mapping controls are defined in Chapter 4: Class Specific Requests Section 4.2.2.1.14 PanTilt (Absolute) Control of the [UVC 1.5 Class Specification](https://www.usb.org/document-library/video-class-v15-document-set).

### Control: GOOGXU\_PAN\_TILT\_RELATIVE (deprecated)

Pan and tilt auxiliary mapping controls are defined in Chapter 4: Class Specific Requests Section 4.2.2.1.15 PanTilt (Relative) Control of the [UVC 1.5 Class Specification](https://www.usb.org/document-library/video-class-v15-document-set).

## Related topics

- [Linux USB Video Class (UVC) driver](https://www.kernel.org/doc/html/latest/userspace-api/media/drivers/uvcvideo.html)
- [Video Class v1.5 document set](https://www.usb.org/document-library/video-class-v15-document-set)
- [USB 2.0 specification](https://www.usb.org/document-library/usb-20-specification)
- [Google Meet Hardware help center](https://support.google.com/meethardware#topic=12027873)
- [Google Meet Hardware section of the Google Workspace Admin help center](https://support.google.com/a/topic/12188755)

## Release notes

These release notes reflect improvements and new features in each revision of this document.

### Aug 13, 2025

- Corrected [test facility](./uvc-xu-spec.md#test-facility) details.

### Jan 27, 2025

- Added `Vendor-preferred` framing strategy to [`GOOGXU_FRAME_STRATEGY`](./uvc-xu-spec.md#control_googxu_frame_strategy).
- Added new control: [`GOOGXU_SATELLITE_INFO`](./uvc-xu-spec.md#control_googxu_satellite_info).

### May 21, 2024

- Removed test script in favor of the new [CfM test facility](#test-facility), which exercises `SET` and also supports validation of Series One cameras.
- Clarified fields in [`GOOGXU_STATUS_INFO`](./uvc-xu-spec.md#control_googxu_status_info).
- Clarified behavior of [`GOOGXU_STATUS_RESET`](./uvc-xu-spec.md#control_googxu_status_reset).
- Deprecated [`GOOGXU_PAN_TILT_ABSOLUTE`](./uvc-xu-spec.md#control_googxu_pan_tilt_absolute) and [`GOOGXU_PAN_TILT_RELATIVE`](./uvc-xu-spec.md#control_googxu_pan_tilt_relative).

### November 15, 2023

Updated test script to check and interpret valid framing modes. Clarified byte representations.

### July 21, 2023

Added test script for partners to validate implementations for compliance with this specification.

### May 25, 2023

Corrected [`GOOGXU_PRESETS`](./uvc-xu-spec.md#control_googxu_presets) note regarding the number of presets. It should be N, not N-1.

### April 17, 2023

Initial release.
