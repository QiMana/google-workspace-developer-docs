---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/customer/accounts
root: workspace
fetched_at: 2026-04-23T15:24:33.829Z
---

# Account Parameters

This document lists the parameters for various types of Account activity events. You can retrieve these events by calling [CustomerUsageReports.get()](../../../../reference/rest/v1/customerUsageReports/get.md) with `parameters=accounts:PARAMETER`.

| Name | Type | Description |
| --- | --- | --- |
| `apps_total_licenses` | integer | Total number of G Suite Basic licenses purchased for the domain. |
| `apps_used_licenses` | integer | The number of G Suite Basic licenses in use in the domain. |
| `authorized_apps` | message | List of third party applications with access to users' data under any scope. Includes the number of users per application. |
| `coordinate_total_licenses` | integer | Total number of Google Maps Coordinate licenses purchased for the domain. |
| `customer_used_quota_in_mb` | integer | Total storage quota used by the domain in megabytes |
| `drive_used_quota_in_mb` | integer | Storage quota (in MB) used by the domain for data in Drive. |
| `gmail_used_quota_in_mb` | integer | Storage quota (in MB) used by the domain for data in Gmail. |
| `gplus_photos_used_quota_in_mb` | integer | Storage quota (in MB) used by the domain for data in Google Photos and Currents. |
| `gsuite_basic_total_licenses` | integer | Total number of G Suite Basic licenses purchased for the domain. |
| `gsuite_basic_used_licenses` | integer | The number of G Suite Basic licenses in use in the domain. |
| `gsuite_enterprise_total_licenses` | integer | Total number of G Suite Enterprise licenses purchased for the domain. |
| `gsuite_enterprise_used_licenses` | integer | The number of G Suite Enterprise licenses in use in the domain. |
| `gsuite_unlimited_total_licenses` | integer | Total number of G Suite Business licenses purchased for the domain. |
| `gsuite_unlimited_used_licenses` | integer | The number of G Suite Business licenses in use in the domain. |
| `num_1day_logins` | integer | The number of account users who have logged in the day of this report. These are unique logins from 00:00 PST to 23:59:59 PST on that date. |
| `num_30day_logins` | integer | The number of account users who have logged in in the past 30 days from the date of this report. |
| `num_7day_logins` | integer | The number of account users who have logged in in the past 7 days from the date of this report. |
| `num_archived_users` | integer | Number of archived users |
| `num_authorized_apps` | integer | The number of third party applications authorized to access the user's data. |
| `num_disabled_accounts` | integer | The number of disabled user accounts. |
| `num_locked_users` | integer | The number of locked user accounts. |
| `num_passkeys_enrolled` | integer | The number of passkeys enrolled by users of this customer. |
| `num_security_keys` | integer | The number of security keys enrolled by users of this customer. |
| `num_suspended_users` | integer | The number of suspended user accounts. |
| `num_users` | integer | The number of total users. |
| `num_users_2sv_enforced` | integer | The number of user accounts which are enforced for 2-step verification. |
| `num_users_2sv_enrolled` | integer | The number of user accounts which have enrolled for 2-step verification. |
| `num_users_2sv_enrolled_and_enforced` | integer | The number of user accounts which are enforced and have enrolled for 2-step verification. |
| `num_users_2sv_not_enforced` | integer | The number of user accounts which are not enforced for 2-step verification. |
| `num_users_2sv_not_enrolled` | integer | The number of user accounts which have not enrolled for 2-step verification. |
| `num_users_2sv_not_enrolled_and_not_enforced` | integer | The number of user accounts which are neither enforced nor have enrolled for 2-step verification. |
| `num_users_2sv_not_enrolled_but_enforced` | integer | The number of users accounts which have not enrolled for 2-step verification but for which it is enforced. |
| `num_users_2sv_not_protected` | integer | The number of user accounts which are not protected by 2-step verification. |
| `num_users_2sv_protected` | integer | The number of user accounts which are protected by 2-step verification. |
| `num_users_less_secure_apps_access_allowed` | integer | The number of user accounts allowed less secure apps access. |
| `num_users_less_secure_apps_access_denied` | integer | The number of user accounts denied less secure apps access. |
| `num_users_overridden_names` | integer | The number of users that have changed their Currents profile names. These users have display names that are different than the names defined by their admins. |
| `num_users_password_length_compliant` | integer | Number of users whose password length is compliant with password management policy |
| `num_users_password_length_non_compliant` | integer | Number of users whose password length is not compliant with password management policy |
| `num_users_password_length_unknown` | integer | Number of users whose password length is unknown |
| `num_users_password_strength_strong` | integer | Number of users whose password strength is strong |
| `num_users_password_strength_unknown` | integer | Number of users whose password strength is unknown |
| `num_users_password_strength_weak` | integer | Number of users whose password strength is weak |
| `num_users_used_quota_ge_50_lt_80percent` | integer | The number of users that have used between 50% to 80% of their storage quota. |
| `num_users_used_quota_ge_80percent` | integer | The number of users that have used more than 80% of their storage quota. |
| `num_users_used_quota_lt_50percent` | integer | The number of users that have used less than 50% of their storage quota. |
| `num_users_with_passkeys_enrolled` | integer | The number of users who have enrolled at least one passkey. |
| `team_drive_used_quota_in_mb` | integer | Shared drive storage quota used in megabytes |
| `total_quota_in_mb` | integer | Total storage quota (in MB) for the domain. A negative value is returned for customers that have enrolled in G Suite Business. |
| `used_quota_in_mb` | integer | Total storage quota (in MB) used by the domain. |
| `vault_total_licenses` | integer | Total number of Google Vault licenses purchased for the domain. |
