---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/user/gplus
root: workspace
fetched_at: 2026-04-23T15:24:37.257Z
---

# Currents Parameters

This document lists the parameters for various types of Currents activity events. You can retrieve these events by calling [UserUsageReport.get()](https://developers.google.com/workspace/admin/reports/v1/reference/userUsageReport/get) with `parameters=gplus:PARAMETER`.

.

| Name | Type | Description |
| --- | --- | --- |
| num\_plusones | integer | The number of likes performed by the user in a day. |
| num\_plusones\_received | integer | The number of likes user's content received in a day. |
| num\_replies | integer | The number of comments made by the user in a day. |
| num\_replies\_received | integer | The number of comments user's content received in a day. |
| num\_reshares | integer | The number of reshares made by the user in a day. |
| num\_reshares\_received | integer | The number of reshares user's posts received in a day. |
| num\_shares | integer | The number of posts made by the user in a day, including reshares. |
