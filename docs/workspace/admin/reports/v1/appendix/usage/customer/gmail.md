---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/customer/gmail
root: workspace
fetched_at: 2026-04-23T15:24:33.329Z
---

# Gmail Parameters

This document lists the parameters for various types of Gmail activity events. You can retrieve these events by calling [CustomerUsageReports.get()](https://developers.google.com/workspace/admin/reports/v1/reference/customerUsageReports/get) with `parameters=gmail:PARAMETER`.

| Name | Type | Description |
| --- | --- | --- |
| `num_1day_active_users` | integer | The number of active user Gmail accounts on the day of this report. |
| `num_1day_imap_users` | integer | The number of users who accessed IMAP the day of this report. |
| `num_1day_pop_users` | integer | The number of users who accessed POP the day of this report. |
| `num_1day_webmail_users` | integer | The number of users who accessed their web Gmail accounts the day of this report. |
| `num_30day_active_users` | integer | The number of active user Gmail accounts in the past 30 days from the date of this report. |
| `num_30day_imap_users` | integer | The number of users who accessed IMAP in the past 30 days from the date of this report. |
| `num_30day_pop_users` | integer | The number of users who accessed POP in the past 30 days from the date of this report. |
| `num_30day_webmail_users` | integer | The number of users who accessed their web Gmail accounts in the past 30 days from the date of this report. |
| `num_7day_active_users` | integer | The number of active user Gmail accounts in the past 7 days from the date of this report. |
| `num_7day_imap_users` | integer | The number of users who accessed IMAP in the past 7 days from the date of this report. |
| `num_7day_pop_users` | integer | The number of users who accessed POP in the past 7 days from the date of this report. |
| `num_7day_webmail_users` | integer | The number of users who accessed their web Gmail accounts in the past 7 days from the date of this report. |
| `num_email_accounts` | integer | Total number of email accounts |
| `num_emails_exchanged` | integer | The total number of emails exchanged. This is the total of num\_emails\_sent plus num\_emails\_received. |
| `num_emails_received` | integer | The total influx of emails received on the date of this report. |
| `num_emails_sent` | integer | The number of emails sent on the date of this report. |
| `num_inbound_delivered_emails` | integer | The number of delivered inbound emails on the date of this report, rerouted emails are not included in this report. |
| `num_inbound_encrypted_emails` | integer | The number of encrypted inbound emails on the date of this report. |
| `num_inbound_non_spam_emails` | integer | The number of inbound non-spam emails on the date of this report. |
| `num_inbound_rejected_emails` | integer | The number of rejected inbound emails on the date of this report, rerouted emails are not included in this report. |
| `num_inbound_rerouted_emails` | integer | The number of rerouted inbound emails on the date of this report. |
| `num_inbound_spam_emails` | integer | The number of inbound spam emails on the date of this report. |
| `num_inbound_unencrypted_emails` | integer | The number of unencrypted inbound emails on the date of this report. |
| `num_outbound_delivered_emails` | integer | The number of delivered outbound emails on the date of this report. Rerouted emails are not included in this report. |
| `num_outbound_encrypted_emails` | integer | The number of encrypted outbound emails on the date of this report. |
| `num_outbound_rejected_emails` | integer | The number of rejected outbound emails on the date of this report. Rerouted emails are not included in this report. |
| `num_outbound_rerouted_emails` | integer | The number of rerouted outbound emails on the date of this report. |
| `num_outbound_unencrypted_emails` | integer | The number of unencrypted outbound emails on the date of this report. |
