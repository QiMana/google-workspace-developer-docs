---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/user/gmail
root: workspace
fetched_at: 2026-04-23T15:24:37.151Z
---

# Gmail Parameters

This document lists the parameters for various types of Gmail activity events. You can retrieve these events by calling [UserUsageReport.get()](https://developers.google.com/workspace/admin/reports/v1/reference/userUsageReport/get) with `parameters=gmail:PARAMETER`.

| Name | Type | Description |
| --- | --- | --- |
| `is_gmail_enabled` | boolean | If true, the user's Gmail service is enabled. |
| `num_emails_exchanged` | integer | The total number of emails exchanged. This is the total of num\_emails\_sent plus num\_emails\_received. |
| `num_emails_received` | integer | The number of emails received by the user. |
| `num_emails_sent` | integer | The number of emails sent by the user. |
| `num_spam_emails_received` | integer | The number of emails received by the user's marked as spam mail. |
| `timestamp_last_access` | integer | The time of the most recent access to the user's account within last 30 days. This can be triggered by non-user events requiring access, such as receiving mail. |
| `timestamp_last_imap` | integer | The time of user's most recent IMAP interaction within last 30 days. |
| `timestamp_last_interaction` | integer | The time of the user's most recent interaction within last 30 days. |
| `timestamp_last_pop` | integer | The time of user's most recent POP interaction within last 30 days. |
| `timestamp_last_webmail` | integer | The time of user's most recent interaction from web Gmail within last 30 days. |
