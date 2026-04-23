---
source: https://developers.google.com/workspace/admin/email-audit/reference/monitor
root: workspace
fetched_at: 2026-04-23T15:23:55.481Z
---

# Resource: monitor

## Resource: monitor

This page documents the parameters that are available for the `monitor` resource of the Email Audit API when [monitoring emails](../monitor-email.md).

| Fields | Description |
| --- | --- |
| `destUserName` | Required.  The destination user, the username (not the full email address) who receives copies of the messages. This is the user auditing the messages. For example, in the example.com domain, to make kai@example.com the destination user, use `name='destUserName' value='kai'`.  Only one monitor exists for a unique 'destination user - source user' pair. If more than one monitor is created for the same 'destination user - source user' pair, the settings of the last monitor are retained. This is how you update the audited email configuration. For information about updating, see [Update an email monitor](../monitor-email.md#update_an_email_monitor). |
| `beginDate` | Optional.  The date when the audit starts. If this element is an empty string, the email auditing begins with the current date. This date must be the current date or a future date. The date format is `YYYY-MM-dd HH:mm` where the `HH` is the hour of the day using 0 - 23, and the `mm` is the minutes of the hour using 0 - 59.  The time zone is in Coordinate Universal Time (UTC) format. [Convert your time to UTC format](https://www.timeanddate.com/worldclock/converter.html) before creating a new monitor. |
| `endDate` | Required.  The date when the audit stops. This value must be greater than the `beginDate` parameter. The date format is `YYYY-MM-dd HH:mm` where the `HH` is the hour of the day using 0 - 23, and the `mm` is the minutes of the hour using 0 - 59.  The time zone is in Coordinate Universal Time (UTC) format. [Convert your time to UTC format](https://www.timeanddate.com/worldclock/converter.html) before creating a new monitor. |
| `incomingEmailMonitorLevel` | Optional.  The amount of audited information captured for incoming emails. If no value is entered, the default is `FULL_MESSAGE`. The following values are accepted:  - `FULL_MESSAGE`: The full incoming email body is sent to the destination user. - `HEADER_ONLY`: Only the incoming email's header information is sent to the destination user. |
| `outgoingEmailMonitorLevel` | Optional.  The amount of monitored information captured for outgoing emails. If no value is entered, the default is `FULL_MESSAGE`. The following values are accepted:  - `FULL_MESSAGE`: The full outgoing email body is sent to the destination user. - `HEADER_ONLY`: Only the outgoing email's header information is sent to the destination user. |
| `draftMonitorLevel` | Optional.  The amount of audit information captured for draft emails. If no value or the empty string is provided for this element, no email drafts are audited.`NONE` is the default.  - `FULL_MESSAGE`: The full draft email body is sent to the destination user. - `HEADER_ONLY`: Only the draft email's headers is sent to the destination user. - `NONE`: No email draft is sent to the destination user. |
| `chatMonitorLevel` | Optional.  The amount of audit information captured for archived Hangouts chats. This setting only applies to classic Hangouts Chat, not Google Chat. Hangouts Chat is deprecated. For information about archiving Chat messages, see Archive Chat messages. If no value or the empty string is provided for this element, no chats are audited. This is the default.  - `FULL_MESSAGE`: The full chat text is sent to the destination user. - `HEADER_ONLY`: Only the chat's header is sent to the destination user. |
