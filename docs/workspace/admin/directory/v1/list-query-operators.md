---
source: https://developers.google.com/workspace/admin/directory/v1/list-query-operators
root: workspace
fetched_at: 2026-04-23T15:23:52.275Z
---

# List query operators

The [`Chromeosdevices.list`](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list) and [`Mobiledevices.list`](https://developers.google.com/workspace/admin/directory/v1/reference/mobiledevices/list) methods support the following operators for the `query` parameter so you can filter your device search.

| Field | Examples |
| --- | --- |
| Status | Provisioned devices: `status:provisioned`   Disabled devices: `status:disabled`   Deprovisioned devices: `status:deprovisioned`   Managed devices (non-deprovisioned): `status:managed` |
| Serial number | `id:12345abcdefg`   Partial serial number searches are supported, as long as you enter at least three characters in the serial number. |
| Asset ID | `asset_id:1234` |
| Date registered | This field is not displayed on the ChromeOS settings page. However, you can search for devices that were registered on a given date, or within a given time range. Refer to [Date and time formats](#date_and_time_formats) for more info about formatting date queries.      `register:2013-03-23` |
| Last sync | `sync:2013-10-12`   Refer to [Date and time formats](#date_and_time_formats) for more info about formatting date queries. |
| User | `user:joe`   `user:"tom sawyer"` |
| Location | `location:seattle` |
| Notes | `note:"loaned from john"` |
| Model | `public_model_name:"Google Pixelbook Go"`   Partial model name searches are supported. |
| MEID or IMEI | `meid:123456789`   Partial MEID or IMEI searches are supported. |
| Last user activity | `last_user_activity:2023-06-12..2023-06-30`   Refer to [Date and time formats](#date_and_time_formats) for more info about formatting date queries. |
| OS update status | Up to date: `update_status:default_os_up_to_date`   Updating: `update_status:pending_update`   Updating (download not started): `update_status:os_image_download_not_started`   Updating (download in progress): `update_status:os_image_download_in_progress`   Updating (pending reboot): `update_status:os_update_need_reboot` |
| OS version compliance | Compliant: `compliance:compliant`   Pending update: `compliance:pending_update`   Not compliant: `compliance:not_compliant` |
| OS policy support status | All policies supported: `policy_status:true`   Policies not supported: `policy_status:false` |
| Device type | Enterprise Upgrade: `sku:enterprise`   Education Upgrade: `sku:education` |
| Upgrade type | Enterprise or EDU Upgrade (Standalone): `license_sku:standalone_chrome_enterprise_upgrade`   Enterprise or EDU Upgrade (Bundled): `license_sku:chrome_enterprise_upgrade_bundled`   Kiosk & Signage Upgrade (Standalone): `license_sku:standalone_kiosk_and_signage_upgrade` |
| Chrome version | `chrome_version:111.012`   Partial Chrome version searches are supported. |
| Chrome version (prefix) | `chrome_version:111;prefix`   Search by Chrome version prefix. |
| Auto-update Expiration | `aue:2023-1-1..2023-12-31`   Refer to [Date and time formats](#date_and_time_formats) for more info about formatting date queries. |
| Most recent user | `recent_user:user@mydomain.com`   Argument must be an email address. |
| Wi-Fi MAC address | Address should be entered without spaces or colons. Partial address matching is not supported. Be aware that multiple devices may report the same address to the Admin console, and more than one result may be returned.   `wifi_mac:6c2995724c50` |
| Ethernet MAC address | Address should be entered without spaces or colons. Partial address matching is not supported. Be aware that multiple devices may report the same address to the Admin console, and more than one result may be returned.   `ethernet_mac:e8ea6a157981` |
| CPU model name | `cpu_model_name:Intel`   Partial CPU model name searches are supported. |
| System storage | `storage:68719476736..69793218560`   System storage in bytes. Refer to [Number range formats](#number_range_formats) for more info about formatting number queries. |
| Total RAM | `ram:3221225472..5368709120`   Total RAM in bytes. Refer to [Number range formats](#number_range_formats) for more info about formatting number queries. |
| Boot mode | Verified: `boot_mode:Verified`   Developer: `boot_mode:Dev` |

## Date and time formats

- **Basic date or time:** `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ss`
- **Before a date:** `..YYYY-MM-DD`
- **After a date:** `YYYY-MM-DD..`
- **Within a date range:** `YYYY-MM-DD..YYYY-MM-DD`

## Number range formats

- **Less than:** `..222222`
- **Greater than:** `111111..`
- **Between:** `111111..222222`
