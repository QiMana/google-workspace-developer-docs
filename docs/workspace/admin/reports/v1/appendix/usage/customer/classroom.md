---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/usage/customer/classroom
root: workspace
fetched_at: 2026-04-23T15:24:33.383Z
---

# Classroom Parameters

This document lists the parameters for various types of Classroom activity events. You can retrieve these events by calling [CustomerUsageReports.get()](https://developers.google.com/workspace/admin/reports/v1/reference/customerUsageReports/get) with `parameters=classroom:PARAMETER`.

| Name | Type | Description |
| --- | --- | --- |
| `num_14day_active_courses` | integer | Courses with any activity in the last 14 days. |
| `num_1day_active_students` | integer | Students who have interacted with Classroom in the last day. |
| `num_1day_active_teachers` | integer | Teachers who have interacted with Classroom in the last day. |
| `num_1day_active_users` | integer | Users who have interacted with Classroom in the last day. |
| `num_1day_students` | integer | Students who accessed Classroom in the last day. |
| `num_1day_teachers` | integer | Teachers who accessed Classroom on the provided date. |
| `num_30day_active_students` | integer | Students who have interacted with Classroom in the last 30 days. |
| `num_30day_active_teachers` | integer | Teachers who have interacted with Classroom in the last 30 days. |
| `num_30day_active_users` | integer | Users who have interacted with Classroom in the last 30 days. |
| `num_30day_students` | integer | Students who accessed Classroom in the last 30 days. |
| `num_30day_teachers` | integer | Teachers who accessed Classroom in the last 30 days. |
| `num_7day_active_students` | integer | Students who have interacted with Classroom in the last 7 days. |
| `num_7day_active_teachers` | integer | Teachers who have interacted with Classroom in the last 7 days. |
| `num_7day_active_users` | integer | Users who have interacted with Classroom in the last 7 days. |
| `num_7day_students` | integer | Students who accessed Classroom in the last 7 days. |
| `num_7day_teachers` | integer | Teachers who accessed Classroom in the last 7 days. |
| `num_classroom_1day_active_users` | integer | Parameter to indicate the total number of users who have accessed Classroom in the last 1 day for a customer |
| `num_classroom_30day_active_users` | integer | Parameter to indicate the total number of users who have accessed Classroom in the last 30 days for a customer |
| `num_classroom_7day_active_users` | integer | Parameter to indicate the total number of users who have accessed Classroom in the last 7 days for a customer |
| `num_courses_created` | integer | Courses created on the provided date. |
| `num_student_posts_created` | integer | Posts created by students on the provided date. |
| `num_teacher_posts_created` | integer | Posts created by teachers on the provided date. |
