---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/user/classroom
root: workspace
fetched_at: 2026-04-23T15:24:36.839Z
---

# Classroom Parameters

This document lists the parameters for various types of Classroom activity events. You can retrieve these events by calling [UserUsageReport.get()](../../../../reference/rest/v1/userUsageReport/get.md) with `parameters=classroom:PARAMETER`.

| Name | Type | Description |
| --- | --- | --- |
| `classroom_last_usage_date_usec` | integer | The time of the user's most recent interaction within Classroom. |
| `num_courses_created` | integer | The number of courses the user created on this report date. |
| `num_posts_created` | integer | The number of posts the user created on this report date. |
| `role` | string | The user's role, which can be either 'student' or 'teacher', depending on whether the user taught a course active in the last 30 days. |
| `timestamp_last_interaction` | integer | The timestamp of the last time the user took an action on Classroom. |
