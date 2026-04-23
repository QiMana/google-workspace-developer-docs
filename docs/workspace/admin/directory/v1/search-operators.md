---
source: https://developers.google.com/workspace/admin/directory/v1/search-operators
root: workspace
fetched_at: 2026-04-23T15:23:52.605Z
---

# Mobile device search fields

When you search for devices, you can include fields with a value to narrow your search results.

You can perform some searches without a field to perform a global search. For example, you can search for the serial number with or without the `serial` field, and the results are similar.

When you use search fields, keep the following in mind:

- Always include a colon (:) immediately after the field.
- Make sure there are no spaces between the colon and the value, such as `status:pending`.
- To use multiple filters, separate each `field:value` pair with a space, not a comma. For example, `status:approved type:android`.
- Enter dates and times using the formats in the following table:

| Form | Searches | Sample searches |
| --- | --- | --- |
| `datetime` | Exactly on the given date or time | `2016-03-23` `2016-04-26T14:23:05` |
| `datetime..datetime` | Within (inclusive) the given interval of date or time | `2016-03-23..2011-04-26` |
| `datetime..` | On or after the given date or time | `2016-04-26T14:23:05..` |
| `..datetime` | On or before the given date or time | `..2016-04-26T14:23:05` |

## Fields

| Field | Value type | Operator | Description | Example(s) |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
| `apps` | `string` | : | Apps on users' Android devices if application auditing is turned on (see Android settings page > General settings) | - `apps:Calendar` - `apps:com.android.mms` - `apps:4.0.4-253145` |
| `bootloader_version` | `string` | : | Bootloader version on Android devices. | `bootloader_version:BHZ11e` |
| `brand` | `string` | : | Brand name of mobile device. | `brand:google` |
| `build_number` | `string` | : | Build number of operating system. | `build_number:6.7.2_EDEM-18` |
| `carrier` | `string` | : | Name of the mobile operator of the given device. | `carrier:Airtel` |
| `compromised_status` | `string` | : | Compromised device status. | `compromised_status:compromised` `compromised_status:uncompromised` `compromised_status:undetected` |
| `default_language` | `string` | : | Language settings on the device. | `default_language:English` |
|  |  |  |  |  |
| `email` | `string` | : | Email address. | `email:joe@example.com` (matches `joe.sabia@example.com` and `joe.sciarrillo@example.org`) |
| `encryption_status` | `string` | : | Encryption status of an Android device. | - `encryption_status:encrypted` - `encryption_status:not_encrypted` - `encryption_status:unsupported` |
| `endpoint_verification_cert_fingerprint` | `string` | : | Fingerprint of a certificate reported by the Endpoint Verification client. Fingerprint refers to the unpadded Base64 value of the SHA-256 hash of the DER encoded certificate. | Example: `endpoint_verification_cert_fingerprint:3dputW0W79tfvdGY4HD6fPm6VNzlG+x0TRVFvtQnWik` |
| `endpoint_verification_cert_thumbprint` | `string` | : | Thumbprint of a certificate reported by the Endpoint Verification client. Thumbprint refers to the SHA-1 hash of the DER encoded certificate written as a hexadecimal string. | Example: `endpoint_verification_cert_thumbprint:0484c31611dbb49d394d7cf3750ed70edf664fbb` |
| `hardware` | `string` | : | Hardware for an Android device. | Example: `hardware:bullhead` |
| `hid` | `string` | : | Hardware ID. | `hid:A0000292789YD` |
| `id` | `string` | : | Alphanumeric string (with numbers and alphabetic characters) that identifies this device for mobile device management. | `id:12345ABCDEFXYZ` |
| `imei` | `string` | : | International Mobile Equipment Identity (IMEI) number of the device. | `imei:353020051574987` |
| `kernel_version` | `string` | : | Kernel version. | `kernel_version:3.1.10-g1e42d16` |
| `mac_address` | `string` | : | WiFi MAC address of the device. | `mac_address:30:85:a9:59:d5:ed` |
| `management_type` | `string` | : | Devices managed by the specified management type. | - `management_type:advanced` - `management_type:basic` |
| `manufacturer` | `string` | : | Manufacturer of an Android device. | `manufacturer:LGE` |
| `meid` | `string` | : | Mobile Equipment Identifier (MEID) of the device; only for Code Division Multiple Access (CDMA) devices. | `meid:A0954742789012` |
| `model` | `string` | : | Name of the device model | `model:nexus s` |
| `name` | `string` | : | Given words in usernames. | - `name:joe` (matches name `Joe Sabia` but not `Joel Ortiz`) - `name:Joe Sabia` (matches name `Joe Sabia` and `Joe Sabia Daniels` but not `Joey Sabia` or `Joe The Pun Champ Sabia`) |
| `os` | `string` | : | Name of the mobile operating system. | - `os:Android` - `os:ios 9` |
| `owner` | `string` | : | Owner of the device. | `owner:company`, for corporate owned devices, or `owner:byod` for all devices owned by the end-user. |
| `privilege` | `string` | : | Android devices that have a work profile set up. | - `privilege:device_owner` - Find corporate-owned devices configured to recognize the company as the device owner. - `privilege:profile_owner` - Find users' personal devices configured with managed work profiles that are separate from their personal space. - `privilege:device_admin` - Find users' personal devices configured with managed accounts within their personal space. |
| `register` | `date` | : | Devices that were registered in the given time range. | - `register:2017-03-23` - `register:2017-04-05T13:42:00` |
| `security_patch_level` | `date` | : | Date of the last OS security update for an Android 6.0+ Marshmallow device. | - `security_patch_level:2017-08-05` - `security_patch_level:2017-08-05..2017-09-05` |
| `serial` | `string` | : | Device serial number. | `serial:015d3fb66e241807` |
| `status` | `string` | : | Devices with the given Google Workspace provisioning status.  Supported values: `account_wiped`, |
| `sync` | `date` | : | Devices whose last policy sync was in the given time range. |
| `type` | `string` | : | Type of device. |
