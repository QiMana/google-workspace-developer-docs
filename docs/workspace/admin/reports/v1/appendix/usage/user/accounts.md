---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/user/accounts
root: workspace
fetched_at: 2026-04-23T15:24:36.574Z
---

# Accounts Parameters

This document lists the parameters for various types of Accounts activity events. You can retrieve these events by calling [UserUsageReport.get()](../../../../reference/rest/v1/userUsageReport/get.md) with `parameters=accounts:PARAMETER`.

| Name | Type | Description |
| --- | --- | --- |
| `admin_set_name` | string | The user's name as it was defined by the admin in the Admin console. |
| `disabled` | boolean | If `true`, the user account is disabled. |
| `disabled_reason` | string | The reason a user account is disabled, given by the administrator or by Google at the time of disabling. |
| `domain_name` | string | The name of the domain. |
| `drive_used_quota_in_mb` | integer | The storage (in MB) used by the user for data in Drive. |
| `first_name` | string | The user's first name. |
| `gmail_used_quota_in_mb` | integer | The storage (in MB) used by the user for data in Gmail. |
| `gplus_photos_used_quota_in_mb` | integer | The storage (in MB) used by the user for data in Google Photos and Currents. |
| `is_2sv_enforced` | boolean | If `true`, the user account has been enforced for 2-step verification. |
| `is_2sv_enrolled` | boolean | If `true`, the user account is enrolled for 2-step verification. |
| `is_2sv_protected` | boolean | If `true`, the user account is protected by 2-step verification. |
| `is_archived` | boolean | If `true`, the user account is archived. |
| `is_less_secure_apps_access_allowed` | boolean | Identifies whether the user is allowed access to less secure apps. |
| `is_suspended` | boolean | If `true`, the user account is suspended. |
| `last_name` | string | The user's last name. |
| `num_authorized_apps` | integer | The number of third party applications authorized to access the user's data. |
| `num_passkeys_enrolled` | integer | The number of passkeys enrolled by the user. |
| `num_roles_assigned` | integer | The number of administrator roles assigned to the user. |
| `num_security_keys` | integer | The number of security keys enrolled by the user. |
| `password_length_compliance` | string | User's password length compliance |
| `password_strength` | string | User's password strength |
| `timestamp_creation` | integer | Timestamp when the account was created. |
| `timestamp_last_login` | integer | The time when the user last logged into the user's account. The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. |
| `timestamp_last_sso` | integer | The time when the user last logged into the user's account using Single Sign-On (SSO). The date is in the RFC 3339 format, for example 2010-10-28T10:26:35.000Z. |
| `total_quota_in_mb` | integer | The total storage (in MB) for the user. |
| `used_quota_in_mb` | integer | The total storage (in MB) used by the user. |
| `used_quota_in_percentage` | integer | The percentage of the user's total storage quota that is used. |
| `user_has_overridden_name` | boolean | If `true`, the user has changed their Currents profile name. This user has a display name that is different than the name defined by their admin. |
