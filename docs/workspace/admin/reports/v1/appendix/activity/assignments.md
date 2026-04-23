---
source: https://developers.google.com/workspace/admin/reports/v1/appendix/activity/assignments
root: workspace
fetched_at: 2026-04-23T15:24:11.323Z
---

# Assignments Audit Activity Events

This document lists the events and parameters for various types of Assignments Audit activity events. You can retrieve these events by calling [Activities.list()](../../../reference/rest/v1/activities/list.md) with `applicationName=assignments`.

## Course content changes

A type of event where a user makes changes to course work and submissions in a course. Events of this type are returned with `type=course_work_update`.

### Course work published

Event where a user publishes a piece of coursework.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>published_course_work</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>course_id</code></td><td><p><code>string</code></p><p>The identifier of a course.</p></td></tr><tr><td><code>course_title</code></td><td><p><code>string</code></p><p>The name of a course.</p></td></tr><tr><td><code>course_work_title</code></td><td><p><code>string</code></p><p>The title of a piece of coursework.</p></td></tr><tr><td><code>course_work_type</code></td><td><p><code>string</code></p><p>The type of a piece of coursework. Possible values:</p><ul><li><code>assignment</code><br>Column value indicating that the type of this coursework is an assignment.</li></ul></td></tr><tr><td><code>post_id</code></td><td><p><code>string</code></p><p>The identifier of a piece of coursework.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>assignments</b>?eventName=<b>published_course_work</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> published course work '<var>{course_work_title}</var>' in <var>{course_title}</var></code></div></td></tr></tbody></table>

### Submission graded

Event where a user sets the grade for a submission.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>set_grade</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>course_id</code></td><td><p><code>string</code></p><p>The identifier of a course.</p></td></tr><tr><td><code>course_title</code></td><td><p><code>string</code></p><p>The name of a course.</p></td></tr><tr><td><code>course_work_title</code></td><td><p><code>string</code></p><p>The title of a piece of coursework.</p></td></tr><tr><td><code>impacted_users</code></td><td><p><code>string</code></p><p>The email of one or more users.</p></td></tr><tr><td><code>post_id</code></td><td><p><code>string</code></p><p>The identifier of a piece of coursework.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>assignments</b>?eventName=<b>set_grade</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> graded submission(s) for course work '<var>{course_work_title}</var>' in <var>{course_title}</var>. New state: <var>{submission_state}</var></code></div></td></tr></tbody></table>

### Submission state changed

Event where a user changes the state of a submission.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>changed_submission_state</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>course_id</code></td><td><p><code>string</code></p><p>The identifier of a course.</p></td></tr><tr><td><code>course_title</code></td><td><p><code>string</code></p><p>The name of a course.</p></td></tr><tr><td><code>course_work_title</code></td><td><p><code>string</code></p><p>The title of a piece of coursework.</p></td></tr><tr><td><code>has_grade</code></td><td><p><code>boolean</code></p><p>Indicates whether or not a submission has a grade.</p></td></tr><tr><td><code>impacted_users</code></td><td><p><code>string</code></p><p>The email of one or more users.</p></td></tr><tr><td><code>is_late</code></td><td><p><code>boolean</code></p><p>Indicates whether or not a submission is late.</p></td></tr><tr><td><code>post_id</code></td><td><p><code>string</code></p><p>The identifier of a piece of coursework.</p></td></tr><tr><td><code>submission_state</code></td><td><p><code>string</code></p><p>The state of a submission. Possible values:</p><ul><li><code>reclaimed_by_student</code><br>Indicates that a submission was reclaimed by a student.</li><li><code>returned</code><br>Indicates that the submission state was changed to returned.</li><li><code>student_edited_after_turn_in</code><br>Indicates that the student edited their submission after having turned it in.</li><li><code>turned_in</code><br>Indicates the submission state was changed to turned in.</li></ul></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>assignments</b>?eventName=<b>changed_submission_state</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> changed the state of submission(s) for course work '<var>{course_work_title}</var>' in <var>{course_title}</var>. New state: <var>{submission_state}</var></code></div></td></tr></tbody></table>

## Course membership changes

A type of event including changes to course membership. Events of this type are returned with `type=course_membership_change`.

### User joined course

Event where a user joins a course.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>user_joined_course</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>course_id</code></td><td><p><code>string</code></p><p>The identifier of a course.</p></td></tr><tr><td><code>course_join_method</code></td><td><p><code>string</code></p><p>The way a user joined a course (i.e., using a course code or from an invitation).</p></td></tr><tr><td><code>course_role</code></td><td><p><code>string</code></p><p>The role a user plays in a course. Possible values:</p><ul><li><code>student</code><br>Indicates that the user is a student.</li><li><code>teacher</code><br>Indicates that the user is a teacher.</li></ul></td></tr><tr><td><code>course_title</code></td><td><p><code>string</code></p><p>The name of a course.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>assignments</b>?eventName=<b>user_joined_course</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> joined <var>{course_title}</var> in role: <var>{course_role}</var></code></div></td></tr></tbody></table>

### User removed from course

Event where a user removes another user from a course.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>user_removed_from_course</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>course_id</code></td><td><p><code>string</code></p><p>The identifier of a course.</p></td></tr><tr><td><code>course_role</code></td><td><p><code>string</code></p><p>The role a user plays in a course. Possible values:</p><ul><li><code>student</code><br>Indicates that the user is a student.</li><li><code>teacher</code><br>Indicates that the user is a teacher.</li></ul></td></tr><tr><td><code>course_title</code></td><td><p><code>string</code></p><p>The name of a course.</p></td></tr><tr><td><code>impacted_users</code></td><td><p><code>string</code></p><p>The email of one or more users.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>assignments</b>?eventName=<b>user_removed_from_course</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> removed user(s) from <var>{course_title}</var> (previous role: <var>{course_role}</var>)</code></div></td></tr></tbody></table>

## Course updates

A type of event including changes to a course itself. Events of this type are returned with `type=course_update`.

### Course created

Event where a user creates a course.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>created_course</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>course_id</code></td><td><p><code>string</code></p><p>The identifier of a course.</p></td></tr><tr><td><code>course_title</code></td><td><p><code>string</code></p><p>The name of a course.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>assignments</b>?eventName=<b>created_course</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> created <var>{course_title}</var></code></div></td></tr></tbody></table>

### Course deleted

Event where a user deletes a course.

<table><thead><tr><th colspan="2">Event details</th></tr></thead><tbody><tr><td>Event name</td><td><code>deleted_course</code></td></tr><tr><td>Parameters</td><td><table><tbody><tr><td><code>course_id</code></td><td><p><code>string</code></p><p>The identifier of a course.</p></td></tr><tr><td><code>course_title</code></td><td><p><code>string</code></p><p>The name of a course.</p></td></tr></tbody></table></td></tr><tr><td>Sample request</td><td><div><code>GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/<b>assignments</b>?eventName=<b>deleted_course</b>&maxResults=10&access_token=<var>YOUR_ACCESS_TOKEN</var></code></div></td></tr><tr><td>Admin Console message format</td><td><div><code><var>{actor}</var> deleted <var>{course_title}</var></code></div></td></tr></tbody></table>
