---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/customer/cros
root: workspace
fetched_at: 2026-04-23T15:24:33.567Z
---

# ChromeOS Devices Parameters

This document lists the parameters for various types of ChromeOS Devices activity events. You can retrieve these events by calling [CustomerUsageReports.get()](../../../../reference/rest/v1/customerUsageReports/get.md) with `parameters=cros:PARAMETER`.

| Name | Type | Description |
| --- | --- | --- |
| `num_30day_active_devices` | integer | The number of 30 day active Chrome OS devices. |
| `num_7day_active_devices` | integer | The number of 7 day active Chrome OS devices. |
| `num_beta_channel_devices` | integer | The number of Chrome OS devices enrolled in the beta release channel. |
| `num_dev_boot_devices` | integer | The number of Chrome OS devices booting in dev mode. |
| `num_dev_channel_devices` | integer | The number of Chrome OS devices enrolled in the dev release channel. |
| `num_other_channel_devices` | integer | The number of Chrome OS devices not enrolled in a standard release channel. |
| `num_stable_channel_devices` | integer | The number of Chrome OS devices enrolled in the stable release channel. |
| `num_unreported_boot_devices` | integer | The number of Chrome OS devices that haven't recently reported their boot mode. |
| `num_unreported_channel_devices` | integer | The number of Chrome OS devices that haven't recently reported their release channel. |
| `num_verified_boot_devices` | integer | The number of Chrome OS devices booting in verified mode. |
