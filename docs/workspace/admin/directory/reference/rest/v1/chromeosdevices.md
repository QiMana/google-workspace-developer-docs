---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices
root: workspace
fetched_at: 2026-04-23T15:23:34.753Z
---

# REST Resource: chromeosdevices

## Resource: ChromeOsDevice

Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](../../../v1/guides/manage-chrome-devices.md).

JSON representation

```
{
  "deviceId": string,
  "serialNumber": string,
  "status": string,
  "lastSync": string,
  "supportEndDate": string,
  "annotatedUser": string,
  "annotatedLocation": string,
  "notes": string,
  "model": string,
  "meid": string,
  "orderNumber": string,
  "willAutoRenew": boolean,
  "osVersion": string,
  "platformVersion": string,
  "firmwareVersion": string,
  "macAddress": string,
  "bootMode": string,
  "lastEnrollmentTime": string,
  "kind": string,
  "recentUsers": [
    {
      "type": string,
      "email": string
    }
  ],
  "activeTimeRanges": [
    {
      "activeTime": integer,
      "date": string
    }
  ],
  "ethernetMacAddress": string,
  "annotatedAssetId": string,
  "etag": string,
  "diskVolumeReports": [
    {
      "volumeInfo": [
        {
          "volumeId": string,
          "storageTotal": string,
          "storageFree": string
        }
      ]
    }
  ],
  "systemRamTotal": string,
  "cpuStatusReports": [
    {
      "reportTime": string,
      "cpuUtilizationPercentageInfo": [
        integer
      ],
      "cpuTemperatureInfo": [
        {
          "temperature": integer,
          "label": string
        }
      ]
    }
  ],
  "cpuInfo": [
    {
      "model": string,
      "architecture": string,
      "maxClockSpeedKhz": integer,
      "logicalCpus": [
        {
          "maxScalingFrequencyKhz": integer,
          "currentScalingFrequencyKhz": integer,
          "idleDuration": string,
          "cStates": [
            {
              "displayName": string,
              "sessionDuration": string
            }
          ]
        }
      ]
    }
  ],
  "deviceFiles": [
    {
      "name": string,
      "type": string,
      "downloadUrl": string,
      "createTime": string
    }
  ],
  "systemRamFreeReports": [
    {
      "reportTime": string,
      "systemRamFreeInfo": [
        string
      ]
    }
  ],
  "lastKnownNetwork": [
    {
      "ipAddress": string,
      "wanIpAddress": string
    }
  ],
  "autoUpdateExpiration": string,
  "ethernetMacAddress0": string,
  "dockMacAddress": string,
  "manufactureDate": string,
  "orgUnitPath": string,
  "tpmVersionInfo": {
    "family": string,
    "specLevel": string,
    "manufacturer": string,
    "tpmModel": string,
    "firmwareVersion": string,
    "vendorSpecific": string
  },
  "screenshotFiles": [
    {
      "name": string,
      "type": string,
      "downloadUrl": string,
      "createTime": string
    }
  ],
  "orgUnitId": string,
  "osUpdateStatus": {
    object (OsUpdateStatus)
  },
  "firstEnrollmentTime": string,
  "lastDeprovisionTimestamp": string,
  "deprovisionReason": enum (DeprovisionReason),
  "deviceLicenseType": enum (DeviceLicenseType),
  "backlightInfo": [
    {
      object (BacklightInfo)
    }
  ],
  "autoUpdateThrough": string,
  "extendedSupportEligible": boolean,
  "extendedSupportStart": string,
  "extendedSupportEnabled": boolean,
  "fanInfo": [
    {
      object (FanInfo)
    }
  ],
  "chromeOsType": enum (ChromeOsType),
  "diskSpaceUsage": {
    object (ByteUsage)
  },
  "osVersionCompliance": enum (Compliance),
  "bluetoothAdapterInfo": [
    {
      object (BluetoothAdapterInfo)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>deviceId</code></td><td><p><code>string</code></p><p>The unique ID of the Chrome device.</p></td></tr><tr><td><code>serialNumber</code></td><td><p><code>string</code></p><p>The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's <strong>Serial Number</strong> in the <strong>Chrome OS Devices</strong> tab.</p></td></tr><tr><td><code>status</code></td><td><p><code>string</code></p><p>The status of the device.</p><p>Acceptable values are:</p><ul><li><code>ACTIVE</code>: The device is enrolled into the domain.</li><li><code>DELINQUENT</code>: The annual license for the domain has expired and the device no longer receives policies and settings. When a new license is purchased, the device will return to <code>ACTIVE</code> state.</li><li><code>PRE_PROVISIONED</code>: The device has been registered for <a href="https://support.google.com/chrome/a/answer/10130175?zippy=%2Cmanage-devices-in-pre-provisioned-status">zero-touch enrollment</a>. A <code>PRE_PROVISIONED</code> device can be moved to a different organizational unit or deleted. Once enrollment is complete the device will be <code>ACTIVE</code>.</li><li><code>DEPROVISIONED</code>: The device is no longer eligible to be enrolled into the domain. The order has been cancelled. The device's settings have been cached on the device. If the device is activated again, the latest system settings are applied to this newly activated device.</li><li><code>DISABLED</code>: The device has been disabled by the administrator and cannot be used.</li><li><code>INACTIVE</code>: The device is not enrolled into the domain.</li><li><code>RETURN_ARRIVED</code>: The request to replace this device has arrived.</li><li><code>RETURN_REQUESTED</code>: A request has been made to replace this device.</li><li><code>SHIPPED</code>: The device is shipped from Google inventory. (Deprecated)</li><li><code>UNKNOWN</code>: The status of the device cannot be determined.</li></ul></td></tr><tr><td><code>lastSync</code></td><td><p><code>string</code></p><p>The date and time the device was last synchronized with the policy settings in the Admin console. The value is in <a href="https://www.w3.org/TR/NOTE-datetime">ISO 8601</a> date and time format. The time is the complete date plus hours, minutes, and seconds in the form <code>YYYY-MM-DDThh:mm:ssTZD</code>. For example, <code>2010-04-05T17:30:04+01:00</code>.</p></td></tr><tr><td><code>supportEndDate</code></td><td><p><code>string</code></p><p>The final date the device will be supported. This is applicable only for those devices purchased directly from Google. The value is in <a href="https://www.w3.org/TR/NOTE-datetime">ISO 8601</a> date and time format. The time is the complete date plus hours, minutes, and seconds in the form <code>YYYY-MM-DDThh:mm:ssTZD</code>. For example, <code>2010-04-05T17:30:04+01:00</code>.</p></td></tr><tr><td><code>annotatedUser</code></td><td><p><code>string</code></p><p>The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed.</p></td></tr><tr><td><code>annotatedLocation</code></td><td><p><code>string</code></p><p>The address or location of the device as noted by the administrator. Maximum length is <code>200</code> characters. Empty values are allowed.</p></td></tr><tr><td><code>notes</code></td><td><p><code>string</code></p><p>Notes about this device added by the administrator. This property can be <a href="https://support.google.com/chrome/a/answer/1698333">searched</a> with the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list">list</a> method's <code>query</code> parameter. Maximum length is 500 characters. Empty values are allowed.</p></td></tr><tr><td><code>model</code></td><td><p><code>string</code></p><p>The device's model information. If the device does not have this information, this property is not included in the response.</p></td></tr><tr><td><code>meid</code></td><td><p><code>string</code></p><p>The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices.html#export_meid">Developer's Guide</a>.</p></td></tr><tr><td><code>orderNumber</code></td><td><p><code>string</code></p><p>The device's order number. Only devices directly purchased from Google have an order number.</p></td></tr><tr><td><code>willAutoRenew</code></td><td><p><code>boolean</code></p><p>Determines if the device will auto renew its support after the support end date. This is a read-only property.</p></td></tr><tr><td><code>osVersion</code></td><td><p><code>string</code></p><p>The Chrome device's operating system version.</p></td></tr><tr><td><code>platformVersion</code></td><td><p><code>string</code></p><p>The Chrome device's platform version.</p></td></tr><tr><td><code>firmwareVersion</code></td><td><p><code>string</code></p><p>The Chrome device's firmware version.</p></td></tr><tr><td><code>macAddress</code></td><td><p><code>string</code></p><p>The device's wireless MAC address. If the device does not have this information, it is not included in the response.</p></td></tr><tr><td><code>bootMode</code></td><td><p><code>string</code></p><p>The boot mode for the device. The possible values are:</p><ul><li><code>Verified</code>: The device is running a valid version of the Chrome OS.</li><li><code>Dev</code>: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the <a href="https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch">Chromebook developer information</a>.</li></ul></td></tr><tr><td><code>lastEnrollmentTime</code></td><td><p><code>string</code></p><p>The date and time the device was last enrolled. The value is in <a href="https://www.w3.org/TR/NOTE-datetime">ISO 8601</a> date and time format. The time is the complete date plus hours, minutes, and seconds in the form <code>YYYY-MM-DDThh:mm:ssTZD</code>. For example, <code>2010-04-05T17:30:04+01:00</code>. For more information about automatic and manual enrollment, see the <a href="https://support.google.com/chrome/a/answer/1360534">Chrome help center</a>.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of resource. For the Chromeosdevices resource, the value is <code>admin#directory#chromeosdevice</code>.</p></td></tr><tr><td><code>recentUsers[]</code></td><td><p><code>object</code></p><p>A list of recent device users, in descending order, by last login time.</p></td></tr><tr><td><code>recentUsers[].type</code></td><td><p><code>string</code></p><p>The type of the user.</p><p>Acceptable values are:</p><ul><li><code>USER_TYPE_MANAGED</code>: The user is managed by the domain.</li><li><code>USER_TYPE_UNMANAGED</code>: The user is not managed by the domain.</li></ul></td></tr><tr><td><code>recentUsers[].email</code></td><td><p><code>string</code></p><p>The user's email address. This is only present if the user type is <code>USER_TYPE_MANAGED</code>.</p></td></tr><tr><td><code>activeTimeRanges[]</code></td><td><p><code>object</code></p><p>A list of active time ranges (Read-only).</p></td></tr><tr><td><code>activeTimeRanges[].activeTime</code></td><td><p><code>integer</code></p><p>Duration of usage in milliseconds.</p></td></tr><tr><td><code>activeTimeRanges[].date</code></td><td><p><code>string</code></p><p>Date of usage.</p></td></tr><tr><td><code>ethernetMacAddress</code></td><td><p><code>string</code></p><p>The device's MAC address on the ethernet network interface.</p></td></tr><tr><td><code>annotatedAssetId</code></td><td><p><code>string</code></p><p>The asset identifier as noted by an administrator or specified during enrollment.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>diskVolumeReports[]</code></td><td><p><code>object</code></p><p>Reports of disk space and other info about mounted/connected volumes.</p></td></tr><tr><td><code>diskVolumeReports[].volumeInfo[]</code></td><td><p><code>object</code></p><p>Disk volumes</p></td></tr><tr><td><code>diskVolumeReports[].volumeInfo[].volumeId</code></td><td><p><code>string</code></p><p>Volume id</p></td></tr><tr><td><code>diskVolumeReports[].volumeInfo[].storageTotal</code></td><td><p><code>string (int64 format)</code></p><p>Total disk space [in bytes]</p></td></tr><tr><td><code>diskVolumeReports[].volumeInfo[].storageFree</code></td><td><p><code>string (int64 format)</code></p><p>Free disk space [in bytes]</p></td></tr><tr><td><code>systemRamTotal</code></td><td><p><code>string (int64 format)</code></p><p>Total RAM on the device <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/Read-only">in bytes</a></p></td></tr><tr><td><code>cpuStatusReports[]</code></td><td><p><code>object</code></p><p>Reports of CPU utilization and temperature (Read-only)</p></td></tr><tr><td><code>cpuStatusReports[].reportTime</code></td><td><p><code>string</code></p><p>Date and time the report was received.</p></td></tr><tr><td><code>cpuStatusReports[].cpuUtilizationPercentageInfo[]</code></td><td><p><code>integer</code></p></td></tr><tr><td><code>cpuStatusReports[].cpuTemperatureInfo[]</code></td><td><p><code>object</code></p><p>A list of CPU temperature samples.</p></td></tr><tr><td><code>cpuStatusReports[].cpuTemperatureInfo[].temperature</code></td><td><p><code>integer</code></p><p>Temperature in Celsius degrees.</p></td></tr><tr><td><code>cpuStatusReports[].cpuTemperatureInfo[].label</code></td><td><p><code>string</code></p><p>CPU label</p></td></tr><tr><td><code>cpuInfo[]</code></td><td><p><code>object</code></p><p>Information regarding CPU specs in the device.</p></td></tr><tr><td><code>cpuInfo[].model</code></td><td><p><code>string</code></p><p>The CPU model name.</p></td></tr><tr><td><code>cpuInfo[].architecture</code></td><td><p><code>string</code></p><p>The CPU architecture.</p></td></tr><tr><td><code>cpuInfo[].maxClockSpeedKhz</code></td><td><p><code>integer</code></p><p>The max CPU clock speed in kHz.</p></td></tr><tr><td><code>cpuInfo[].logicalCpus[]</code></td><td><p><code>object</code></p><p>Information for the Logical CPUs</p></td></tr><tr><td><code>cpuInfo[].logicalCpus[].maxScalingFrequencyKhz</code></td><td><p><code>integer</code></p><p>Maximum frequency the CPU is allowed to run at, by policy.</p></td></tr><tr><td><code>cpuInfo[].logicalCpus[].currentScalingFrequencyKhz</code></td><td><p><code>integer</code></p><p>Current frequency the CPU is running at.</p></td></tr><tr><td><code>cpuInfo[].logicalCpus[].idleDuration</code></td><td><p><code>string (<code>Duration</code> format)</code></p><p>Idle time since last boot.</p><p>A duration in seconds with up to nine fractional digits, ending with ' <code>s</code> '. Example: <code>"3.5s"</code>.</p></td></tr><tr><td><code>cpuInfo[].logicalCpus[].cStates[]</code></td><td><p><code>object</code></p><p>C-States indicate the power consumption state of the CPU. For more information look at documentation published by the CPU maker.</p></td></tr><tr><td><code>cpuInfo[].logicalCpus[].cStates[].displayName</code></td><td><p><code>string</code></p><p>Name of the state.</p></td></tr><tr><td><code>cpuInfo[].logicalCpus[].cStates[].sessionDuration</code></td><td><p><code>string (<code>Duration</code> format)</code></p><p>Time spent in the state since the last reboot.</p><p>A duration in seconds with up to nine fractional digits, ending with ' <code>s</code> '. Example: <code>"3.5s"</code>.</p></td></tr><tr><td><code>deviceFiles[]</code></td><td><p><code>object</code></p><p>A list of device files to download (Read-only)</p></td></tr><tr><td><code>deviceFiles[].name</code></td><td><p><code>string</code></p><p>File name</p></td></tr><tr><td><code>deviceFiles[].type</code></td><td><p><code>string</code></p><p>File type</p></td></tr><tr><td><code>deviceFiles[].downloadUrl</code></td><td><p><code>string</code></p><p>File download URL</p></td></tr><tr><td><code>deviceFiles[].createTime</code></td><td><p><code>string</code></p><p>Date and time the file was created</p></td></tr><tr><td><code>systemRamFreeReports[]</code></td><td><p><code>object</code></p><p>Reports of amounts of available RAM memory (Read-only)</p></td></tr><tr><td><code>systemRamFreeReports[].reportTime</code></td><td><p><code>string</code></p><p>Date and time the report was received.</p></td></tr><tr><td><code>systemRamFreeReports[].systemRamFreeInfo[]</code></td><td><p><code>string (int64 format)</code></p></td></tr><tr><td><code>lastKnownNetwork[]</code></td><td><p><code>object</code></p><p>Contains last known network (Read-only)</p></td></tr><tr><td><code>lastKnownNetwork[].ipAddress</code></td><td><p><code>string</code></p><p>The IP address.</p></td></tr><tr><td><code>lastKnownNetwork[].wanIpAddress</code></td><td><p><code>string</code></p><p>The WAN IP address.</p></td></tr><tr><td><code>autoUpdateExpiration<br><b>(deprecated)</b></code></td><td><p><code>string (int64 format)</code></p><p>(Read-only) The timestamp after which the device will stop receiving Chrome updates or support. Please use "autoUpdateThrough" instead.</p></td></tr><tr><td><code>ethernetMacAddress0</code></td><td><p><code>string</code></p><p>(Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.</p></td></tr><tr><td><code>dockMacAddress</code></td><td><p><code>string</code></p><p>(Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.</p></td></tr><tr><td><code>manufactureDate</code></td><td><p><code>string</code></p><p>(Read-only) The date the device was manufactured in yyyy-mm-dd format.</p></td></tr><tr><td><code>orgUnitPath</code></td><td><p><code>string</code></p><p>The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, <code>/</code>. This property can be <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou">updated</a> using the API. For more information about how to create an organizational structure for your device, see the <a href="https://support.google.com/a/answer/182433">administration help center</a>.</p></td></tr><tr><td><code>tpmVersionInfo</code></td><td><p><code>object</code></p><p>Trusted Platform Module (TPM) (Read-only)</p></td></tr><tr><td><code>tpmVersionInfo.family</code></td><td><p><code>string</code></p><p>TPM family. We use the TPM 2.0 style encoding, e.g.:<br>TPM 1.2: "1.2" -> 312e3200<br>TPM 2.0: "2.0" -> 322e3000</p></td></tr><tr><td><code>tpmVersionInfo.specLevel</code></td><td><p><code>string</code></p><p>TPM specification level. See Library Specification for TPM 2.0 and Main Specification for TPM 1.2.</p></td></tr><tr><td><code>tpmVersionInfo.manufacturer</code></td><td><p><code>string</code></p><p>TPM manufacturer code.</p></td></tr><tr><td><code>tpmVersionInfo.tpmModel</code></td><td><p><code>string</code></p><p>TPM model number.</p></td></tr><tr><td><code>tpmVersionInfo.firmwareVersion</code></td><td><p><code>string</code></p><p>TPM firmware version.</p></td></tr><tr><td><code>tpmVersionInfo.vendorSpecific</code></td><td><p><code>string</code></p><p>Vendor-specific information such as Vendor ID.</p></td></tr><tr><td><code>screenshotFiles[]</code></td><td><p><code>object</code></p><p>A list of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only)</p></td></tr><tr><td><code>screenshotFiles[].name</code></td><td><p><code>string</code></p><p>File name</p></td></tr><tr><td><code>screenshotFiles[].type</code></td><td><p><code>string</code></p><p>File type</p></td></tr><tr><td><code>screenshotFiles[].downloadUrl</code></td><td><p><code>string</code></p><p>File download URL</p></td></tr><tr><td><code>screenshotFiles[].createTime</code></td><td><p><code>string</code></p><p>Date and time the file was created</p></td></tr><tr><td><code>orgUnitId</code></td><td><p><code>string</code></p><p>The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou">updated</a> using the API. For more information about how to create an organizational structure for your device, see the <a href="https://support.google.com/a/answer/182433">administration help center</a>.</p></td></tr><tr><td><code>osUpdateStatus</code></td><td><p><code>object (<code>OsUpdateStatus</code>)</code></p><p>The status of the OS updates for the device.</p></td></tr><tr><td><code>firstEnrollmentTime</code></td><td><p><code>string</code></p><p>Date and time for the first time the device was enrolled.</p></td></tr><tr><td><code>deprovisionReason</code></td><td><p><code>enum (<code>DeprovisionReason</code>)</code></p><p>(Read-only) Deprovision reason.</p></td></tr><tr><td><code>deviceLicenseType</code></td><td><p><code>enum (<code>DeviceLicenseType</code>)</code></p><p>Output only. Device license type.</p></td></tr><tr><td><code>backlightInfo[]</code></td><td><p><code>object (<code>BacklightInfo</code>)</code></p><p>Output only. Contains backlight information for the device.</p></td></tr><tr><td><code>autoUpdateThrough</code></td><td><p><code>string</code></p><p>Output only. The timestamp after which the device will stop receiving Chrome updates or support.</p></td></tr><tr><td><code>extendedSupportEligible</code></td><td><p><code>boolean</code></p><p>Output only. Whether or not the device requires the extended support opt in.</p></td></tr><tr><td><code>extendedSupportStart</code></td><td><p><code>string</code></p><p>Output only. Date of the device when extended support policy for automatic updates starts.</p></td></tr><tr><td><code>extendedSupportEnabled</code></td><td><p><code>boolean</code></p><p>Output only. Whether extended support policy is enabled on the device.</p></td></tr><tr><td><code>fanInfo[]</code></td><td><p><code>object (<code>FanInfo</code>)</code></p><p>Output only. Fan information for the device.</p></td></tr><tr><td><code>chromeOsType</code></td><td><p><code>enum (<code>ChromeOsType</code>)</code></p><p>Output only. Chrome OS type of the device.</p></td></tr><tr><td><code>diskSpaceUsage</code></td><td><p><code>object (<code>ByteUsage</code>)</code></p><p>Output only. How much disk space the device has available and is currently using.</p></td></tr><tr><td><code>osVersionCompliance</code></td><td><p><code>enum (<code>Compliance</code>)</code></p><p>Output only. Device policy compliance status of the OS version.</p></td></tr><tr><td><code>bluetoothAdapterInfo[]</code></td><td><p><code>object (<code>BluetoothAdapterInfo</code>)</code></p><p>Output only. Information about Bluetooth adapters of the device.</p></td></tr></tbody></table>

## OsUpdateStatus

Contains information regarding the current OS update status.

JSON representation

```
{
  "state": enum (UpdateState),
  "targetOsVersion": string,
  "targetKioskAppVersion": string,
  "updateTime": string,
  "updateCheckTime": string,
  "rebootTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>state</code></td><td><p><code>enum (<code>UpdateState</code>)</code></p><p>The update state of an OS update.</p></td></tr><tr><td><code>targetOsVersion</code></td><td><p><code>string</code></p><p>New platform version of the OS image being downloaded and applied. It is only set when update status is UPDATE_STATUS_DOWNLOAD_IN_PROGRESS or UPDATE_STATUS_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for UPDATE_STATUS_NEED_REBOOT for some edge cases, e.g. update engine is restarted without a reboot.</p></td></tr><tr><td><code>targetKioskAppVersion</code></td><td><p><code>string</code></p><p>New required platform version from the pending updated kiosk app.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string</code></p><p>Date and time of the last successful OS update.</p></td></tr><tr><td><code>updateCheckTime</code></td><td><p><code>string</code></p><p>Date and time of the last update check.</p></td></tr><tr><td><code>rebootTime</code></td><td><p><code>string</code></p><p>Date and time of the last reboot.</p></td></tr></tbody></table>

## UpdateState

The update state of an OS update.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UPDATE_STATE_UNSPECIFIED</code></td><td>The update state is unspecified.</td></tr><tr><td><code>UPDATE_STATE_NOT_STARTED</code></td><td>There is an update pending but it hasn't started.</td></tr><tr><td><code>UPDATE_STATE_DOWNLOAD_IN_PROGRESS</code></td><td>The pending update is being downloaded.</td></tr><tr><td><code>UPDATE_STATE_NEED_REBOOT</code></td><td>The device is ready to install the update, but must reboot.</td></tr></tbody></table>

## DeprovisionReason

The reason for the deprovision of a ChromeOS device.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DEPROVISION_REASON_UNSPECIFIED</code></td><td>The deprovision reason is unknown.</td></tr><tr><td><code>DEPROVISION_REASON_SAME_MODEL_REPLACEMENT</code></td><td>Same model replacement. You have return materials authorization (RMA) or you are replacing a malfunctioning device under warranty with the same device model.</td></tr><tr><td><code>DEPROVISION_REASON_UPGRADE</code></td><td><p>The device was upgraded.</p></td></tr><tr><td><code>DEPROVISION_REASON_DOMAIN_MOVE</code></td><td><p>The device's domain was changed.</p></td></tr><tr><td><code>DEPROVISION_REASON_SERVICE_EXPIRATION</code></td><td><p>Service expired for the device.</p></td></tr><tr><td><code>DEPROVISION_REASON_OTHER</code></td><td><p>The device was deprovisioned for a legacy reason that is no longer supported.</p></td></tr><tr><td><code>DEPROVISION_REASON_DIFFERENT_MODEL_REPLACEMENT</code></td><td>Different model replacement. You are replacing this device with an upgraded or newer device model.</td></tr><tr><td><code>DEPROVISION_REASON_RETIRING_DEVICE</code></td><td>Retiring from fleet. You are donating, discarding, or otherwise removing the device from use.</td></tr><tr><td><code>DEPROVISION_REASON_UPGRADE_TRANSFER</code></td><td>ChromeOS Flex upgrade transfer. This is a ChromeOS Flex device that you are replacing with a Chromebook within a year.</td></tr><tr><td><code>DEPROVISION_REASON_NOT_REQUIRED</code></td><td>A reason was not required. For example, the licenses were returned to the customer's license pool.</td></tr><tr><td><code>DEPROVISION_REASON_REPAIR_CENTER</code></td><td>The device was deprovisioned by the Repair Service Center. Can only be set by Repair Service Center during RMA.</td></tr></tbody></table>

## DeviceLicenseType

The license type of this device.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DEVICE_LICENSE_TYPE_UNSPECIFIED</code></td><td>The license type is unknown.</td></tr><tr><td><code>ENTERPRISE</code></td><td>The device is bundled with a perpetual Chrome Enterprise Upgrade.</td></tr><tr><td><code>ENTERPRISE_UPGRADE</code></td><td><p>The device has an annual standalone Chrome Enterprise Upgrade.</p></td></tr><tr><td><code>EDUCATION_UPGRADE</code></td><td><p>The device has a perpetual standalone Chrome Education Upgrade.</p></td></tr><tr><td><code>EDUCATION</code></td><td>The device is bundled with a perpetual Chrome Education Upgrade.</td></tr><tr><td><code>KIOSK_UPGRADE</code></td><td>The device has an annual Kiosk Upgrade.</td></tr><tr><td><code>ENTERPRISE_UPGRADE_PERPETUAL</code></td><td>Indicates that the device is consuming a standalone, perpetual Chrome Enterprise Upgrade, a Chrome Enterprise license.</td></tr><tr><td><code>ENTERPRISE_UPGRADE_FIXED_TERM</code></td><td>Indicates that the device is consuming a standalone, fixed-term Chrome Enterprise Upgrade, a Chrome Enterprise license.</td></tr><tr><td><code>EDUCATION_UPGRADE_PERPETUAL</code></td><td>Indicates that the device is consuming a standalone, perpetual Chrome Education Upgrade(AKA Chrome EDU perpetual license).</td></tr><tr><td><code>EDUCATION_UPGRADE_FIXED_TERM</code></td><td>Indicates that the device is consuming a standalone, fixed-term Chrome Education Upgrade(AKA Chrome EDU fixed-term license).</td></tr></tbody></table>

## BacklightInfo

Information about the device's backlights.

JSON representation

```
{
  "path": string,
  "maxBrightness": integer,
  "brightness": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>path</code></td><td><p><code>string</code></p><p>Output only. Path to this backlight on the system. Useful if the caller needs to correlate with other information.</p></td></tr><tr><td><code>maxBrightness</code></td><td><p><code>integer</code></p><p>Output only. Maximum brightness for the backlight.</p></td></tr><tr><td><code>brightness</code></td><td><p><code>integer</code></p><p>Output only. Current brightness of the backlight, between 0 and maxBrightness.</p></td></tr></tbody></table>

## FanInfo

Information about the device's fan.

JSON representation

```
{
  "speedRpm": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>speedRpm</code></td><td><p><code>integer</code></p><p>Output only. Fan speed in RPM.</p></td></tr></tbody></table>

## ChromeOsType

Chrome OS type of the device.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CHROME_OS_TYPE_UNSPECIFIED</code></td><td>Chrome OS Type unspecified.</td></tr><tr><td><code>CHROME_OS_FLEX</code></td><td>Chrome OS Type Chrome OS Flex.</td></tr><tr><td><code>CHROME_OS</code></td><td>Chrome OS Type Chrome OS.</td></tr></tbody></table>

## ByteUsage

Represents a data capacity with some amount of current usage in bytes.

JSON representation

```
{
  "capacityBytes": string,
  "usedBytes": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>capacityBytes</code></td><td><p><code>string (int64 format)</code></p><p>Output only. The total capacity value, in bytes.</p></td></tr><tr><td><code>usedBytes</code></td><td><p><code>string (int64 format)</code></p><p>Output only. The current usage value, in bytes.</p></td></tr></tbody></table>

## Compliance

Device policy compliance status of the OS version.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COMPLIANCE_UNSPECIFIED</code></td><td>Compliance status unspecified.</td></tr><tr><td><code>COMPLIANT</code></td><td>Compliance status compliant.</td></tr><tr><td><code>PENDING</code></td><td>Compliance status pending.</td></tr><tr><td><code>NOT_COMPLIANT</code></td><td>Compliance status not compliant.</td></tr></tbody></table>

## BluetoothAdapterInfo

Information about a device's Bluetooth adapter.

JSON representation

```
{
  "address": string,
  "numConnectedDevices": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>address</code></td><td><p><code>string</code></p><p>Output only. The MAC address of the adapter.</p></td></tr><tr><td><code>numConnectedDevices</code></td><td><p><code>integer</code></p><p>Output only. The number of devices connected to this adapter.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>action (deprecated)</h3></td><td>Use <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus">BatchChangeChromeOsDeviceStatus</a> instead.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a Chrome OS device's properties.</td></tr><tr><td><h3>list</h3></td><td>Retrieves a paginated list of Chrome OS devices within an account.</td></tr><tr><td><h3>moveDevicesToOu</h3></td><td>Moves or inserts multiple Chrome OS devices to an organizational unit.</td></tr><tr><td><h3>patch</h3></td><td>Updates a device's updatable properties, such as <code>annotatedUser</code>, <code>annotatedLocation</code>, <code>notes</code>, <code>orgUnitPath</code>, or <code>annotatedAssetId</code>.</td></tr><tr><td><h3>update</h3></td><td>Updates a device's updatable properties, such as <code>annotatedUser</code>, <code>annotatedLocation</code>, <code>notes</code>, <code>orgUnitPath</code>, or <code>annotatedAssetId</code>.</td></tr></tbody></table>
