---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/user/chat
root: workspace
fetched_at: 2026-04-23T15:24:36.753Z
---

# Google Chat Parameters

This document lists the parameters for various types of Google Chat activity events. You can retrieve these events by calling [UserUsageReport.get()](https://developers.google.com/workspace/admin/reports/v1/reference/userUsageReport/get) with `parameters=chat:PARAMETER`.

| Name | Type | Description |
| --- | --- | --- |
| `num_28day_attachments_uploaded` | integer | The number of attachments uploaded in the last 28 days. |
| `num_28day_conversations_read` | integer | The number of conversations read in the last 28 days. |
| `num_28day_messages_and_reactions_sent` | integer | The number of messages and reactions sent in the last 28 days. |
| `num_28day_spaces_created` | integer | The number of spaces created in the last 28 days. |
