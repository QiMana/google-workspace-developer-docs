---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/customer/device-management
root: workspace
fetched_at: 2026-04-23T15:24:33.750Z
---

# Mobile Devices Parameters

This document lists the parameters for various types of Mobile Devices activity events. You can retrieve these events by calling [CustomerUsageReports.get()](https://developers.google.com/workspace/admin/reports/v1/reference/customerUsageReports/get) with `parameters=device_management:PARAMETER`.

The X and Y in the parameters are only placeholders and **must** be replaced by the correct Android or iOS version you are targeting.

Example:

- if you are targeting Android 7.0, `num_7day_android_X_Y_managed_devices` must become `num_7day_android_7_0_managed_devices`
- if you are targeting iOS 10 `num_7day_ios_X_managed_devices` must become `num_7day_ios_10_managed_devices`

In addition, you must prepend the prefix `device_management:` to all parameters.

Finally, all metrics indicate the time range for device activity in their name: the current report day, the past 7 days from the day of this report, and the past 30 days from the date of this report.

.

| Name | Type | Description |
| --- | --- | --- |
| num\_1day\_android\_ X \_ Y \_managed\_devices | integer | The number of active managed devices running Android OS version X.Y over the last day. |
| num\_1day\_android\_ X \_ Y \_managed\_users | integer | The number of users with active managed devices running Android OS version X.Y over the last day. |
| num\_1day\_android\_managed\_devices | integer | The number of active managed devices running Android OS over the last day. |
| num\_1day\_android\_managed\_users | integer | The number of users with active managed devices running Android OS over the last day. |
| num\_1day\_assistant\_managed\_devices | integer | This is a common display name that is used for all the MDM reports parameters |
| num\_1day\_assistant\_managed\_users | integer | This is a common display name that is used for all the MDM reports parameters |
| num\_1day\_desktop\_chrome\_managed\_devices | integer | The number of active managed devices running Chrome OS over the last day. |
| num\_1day\_desktop\_chrome\_managed\_users | integer | The number of users with active managed devices running Chrome OS over the last day. |
| num\_1day\_desktop\_linux\_managed\_devices | integer | The number of active managed devices running Linux over the last day. |
| num\_1day\_desktop\_linux\_managed\_users | integer | The number of users with active managed devices running Linux over the last day. |
| num\_1day\_desktop\_mac\_managed\_devices | integer | The number of active managed devices running macOS over the last day. |
| num\_1day\_desktop\_mac\_managed\_users | integer | The number of users with active managed devices running macOS over the last day. |
| num\_1day\_desktop\_windows\_managed\_devices | integer | The number of active managed devices running Windows over the last day. |
| num\_1day\_desktop\_windows\_managed\_users | integer | The number of users with active managed devices running Windows over the last day. |
| num\_1day\_google\_sync\_managed\_devices | integer | The number of active managed devices running [Google Sync](https://support.google.com/a/answer/135937) over the last day. |
| num\_1day\_google\_sync\_managed\_users | integer | The number of users with active managed devices running [Google Sync](https://support.google.com/a/answer/135937) over the last day. |
| num\_1day\_ios\_ X \_managed\_devices | integer | The number of active managed devices running [iOS](https://support.google.com/a/answer/6328699) version X over the last day. |
| num\_1day\_ios\_ X \_managed\_users | integer | The number of users with active managed devices running [iOS](https://support.google.com/a/answer/6328699) version X over the last day. |
| num\_1day\_ios\_managed\_devices | integer | The number of active managed devices running [iOS](https://support.google.com/a/answer/6328699) over the last day. |
| num\_1day\_ios\_managed\_users | integer | The number of users with active managed devices running [iOS](https://support.google.com/a/answer/6328699) over the last day. |
| num\_1day\_total\_managed\_devices | integer | The number of active managed devices over the last day. |
| num\_1day\_total\_managed\_users | integer | The number of users with active managed devices over the last day. |
| num\_30day\_android\_ X \_ Y \_managed\_devices | integer | The number of active managed devices running Android OS version X.Y over the last thirty days. |
| num\_30day\_android\_ X \_ Y \_managed\_users | integer | The number of users with active managed devices running Android OS version X.Y over the last thirty days. |
| num\_30day\_android\_managed\_devices | integer | The number of active managed devices running Android OS over the last thirty days. |
| num\_30day\_android\_managed\_users | integer | The number of users with active managed devices running Android OS over the last thirty days. |
| num\_30day\_assistant\_managed\_devices | integer | This is a common display name that is used for all the MDM reports parameters |
| num\_30day\_assistant\_managed\_users | integer | This is a common display name that is used for all the MDM reports parameters |
| num\_30day\_desktop\_chrome\_managed\_devices | integer | The number of active managed devices running Chrome OS over the last thirty days. |
| num\_30day\_desktop\_chrome\_managed\_users | integer | The number of users with active managed devices running Chrome OS over the last thirty days. |
| num\_30day\_desktop\_linux\_managed\_devices | integer | The number of active managed devices running Linux over the last thirty days. |
| num\_30day\_desktop\_linux\_managed\_users | integer | The number of users with active managed devices running Linux over the last thirty days. |
| num\_30day\_desktop\_mac\_managed\_devices | integer | The number of active managed devices running macOS over the last thirty days. |
| num\_30day\_desktop\_mac\_managed\_users | integer | The number of users with active managed devices running macOS over the last thirty days. |
| num\_30day\_desktop\_windows\_managed\_devices | integer | The number of active managed devices running Windows over the last thirty days. |
| num\_30day\_desktop\_windows\_managed\_users | integer | The number of users with active managed devices running Windows over the last thirty days. |
| num\_30day\_google\_sync\_managed\_devices | integer | The number of active managed devices running [Google Sync](https://support.google.com/a/answer/135937) over the last thirty days. |
| num\_30day\_google\_sync\_managed\_users | integer | The number of users with active managed devices running [Google Sync](https://support.google.com/a/answer/135937) over the last thirty days. |
| num\_30day\_ios\_ X \_managed\_devices | integer | The number of active managed devices running [iOS](https://support.google.com/a/answer/6328699) version X over the last thirty days. |
| num\_30day\_ios\_ X \_managed\_users | integer | The number of users with active managed devices running [iOS](https://support.google.com/a/answer/6328699) version X over the last thirty days. |
| num\_30day\_ios\_managed\_devices | integer | The number of active managed devices running [iOS](https://support.google.com/a/answer/6328699) over the last thirty days. |
| num\_30day\_ios\_managed\_users | integer | The number of users with active managed devices running [iOS](https://support.google.com/a/answer/6328699) over the last thirty days. |
| num\_30day\_total\_managed\_devices | integer | The number of active managed devices over the last thirty days. |
| num\_30day\_total\_managed\_users | integer | The number of users with active managed devices over the last thirty days. |
| num\_7day\_android\_ X \_ Y \_managed\_devices | integer | The number of active managed devices running Android OS version X.Y over the last seven days. |
| num\_7day\_android\_ X \_ Y \_managed\_users | integer | The number of users with active managed devices running Android OS version X.Y over the last seven days. |
| num\_7day\_android\_managed\_devices | integer | The number of active managed devices running Android OS over the last seven days. |
| num\_7day\_android\_managed\_users | integer | The number of users with active managed devices running Android OS over the last seven days. |
| num\_7day\_assistant\_managed\_devices | integer | This is a common display name that is used for all the MDM reports parameters |
| num\_7day\_assistant\_managed\_users | integer | This is a common display name that is used for all the MDM reports parameters |
| num\_7day\_desktop\_chrome\_managed\_devices | integer | The number of active managed devices running Chrome OS version over the last seven days. |
| num\_7day\_desktop\_chrome\_managed\_users | integer | The number of users with active managed devices running Chrome OS over the last seven days. |
| num\_7day\_desktop\_linux\_managed\_devices | integer | The number of active managed devices running Linux over the last seven days. |
| num\_7day\_desktop\_linux\_managed\_users | integer | The number of users with active managed devices running Linux over the last seven days. |
| num\_7day\_desktop\_mac\_managed\_devices | integer | The number of active managed devices running macOS over the last seven days. |
| num\_7day\_desktop\_mac\_managed\_users | integer | The number of users with active managed devices running macOS over the last seven days. |
| num\_7day\_desktop\_windows\_managed\_devices | integer | The number of active managed devices running Windows over the last seven days. |
| num\_7day\_desktop\_windows\_managed\_users | integer | The number of users with active managed devices running Windows over the last seven days. |
| num\_7day\_google\_sync\_managed\_devices | integer | The number of active managed devices running [Google Sync](https://support.google.com/a/answer/135937) over the last seven days. |
| num\_7day\_google\_sync\_managed\_users | integer | The number of users with active managed devices running [Google Sync](https://support.google.com/a/answer/135937) over the last seven days. |
| num\_7day\_ios\_ X \_managed\_devices | integer | The number of active managed devices running [iOS](https://support.google.com/a/answer/6328699) version X over the last seven days. |
| num\_7day\_ios\_ X \_managed\_users | integer | The number of users with active managed devices running [iOS](https://support.google.com/a/answer/6328699) version X over the last seven days. |
| num\_7day\_ios\_managed\_devices | integer | The number of active managed devices running [iOS](https://support.google.com/a/answer/6328699) over the last seven days. |
| num\_7day\_ios\_managed\_users | integer | The number of users with active managed devices running [iOS](https://support.google.com/a/answer/6328699) over the last seven days. |
| num\_7day\_total\_managed\_devices | integer | The number of active managed devices version over the last seven days. |
| num\_7day\_total\_managed\_users | integer | The number of users with active managed devices over the last seven days. |
| num\_total\_unmanaged\_users | integer | The total number of unmanaged users. |
| num\_total\_users | integer | The total number of users. |
