---
source: https://developers.google.com/workspace/admin/email-audit/reference/export
root: workspace
fetched_at: 2026-04-23T15:23:55.420Z
---

# Resource: export

## Resource: export

This page documents the parameters that are available for the `export` resource of the Email Audit API when [downloading a mailbox](../download-mailbox.md).

| Fields | Description |
| --- | --- |
| `beginDate` | Optional.  The date for the first email included in the exported mailbox. If you want all emails starting from when the account was created, don't enter a value for this field.The date format is `YYYY-MM-dd HH:mm` where the `HH` is the hour of the day using 0 - 23, and the `mm` is the minutes of the hour using 0 - 59.  The time zone is in Coordinate Universal Time (UTC) format. [Convert your time to UTC format](https://www.timeanddate.com/worldclock/converter.html) before starting a mailbox export. |
| `endDate` | Optional.  The date for the last email included in the exported mailbox. If this value isn't specified, the exported emails go to the current date. The date format is `YYYY-MM-dd HH:mm` where the `HH` is the hour of the day using 0 - 23, and the `mm` is the minutes of the hour using 0 - 59.  The time zone is in Coordinate Universal Time (UTC) format. [Convert your time to UTC format](https://www.timeanddate.com/worldclock/converter.html) before starting a mailbox export. |
| `searchQuery` | Optional.  The mailbox is filtered by using the `searchQuery` value and only the filtered search results are available for download. These queries follow the same search rules as the [advanced search in Gmail](https://support.google.com/mail/answer/7190).  The `searchQuery` and `includeDeleted` parameters are mutually exclusive. A search query isn't possible if `includeDeleted = "true"`. |
| `includeDeleted` | Optional.  Determines whether or not deleted messages are include in the mailbox export file. By default, the value is `"false"` and deleted messages aren't included.  The `searchQuery` and `includeDeleted` parameters are mutually exclusive. A search query isn't possible if `includeDeleted = "true"`. |
| `packageContent` | Required.  Determines whether the full email or the email's header are used in the mailbox export file.  - `FULL_MESSAGE`: The full email text, including attachments, is copied to the export file. This is the default setting. - `HEADER_ONLY`: Only the email's header is copied to the export file. |
