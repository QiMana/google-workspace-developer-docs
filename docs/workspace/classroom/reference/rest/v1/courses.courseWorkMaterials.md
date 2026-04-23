---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWorkMaterials
root: workspace
fetched_at: 2026-04-23T15:25:57.871Z
---

# REST Resource: courses.courseWorkMaterials

## Resource: CourseWorkMaterial

Course work material created by a teacher for students of the course

JSON representation

```
{
  "courseId": string,
  "id": string,
  "title": string,
  "description": string,
  "materials": [
    {
      object (Material)
    }
  ],
  "state": enum (CourseWorkMaterialState),
  "alternateLink": string,
  "creationTime": string,
  "updateTime": string,
  "scheduledTime": string,
  "assigneeMode": enum (AssigneeMode),
  "individualStudentsOptions": {
    object (IndividualStudentsOptions)
  },
  "creatorUserId": string,
  "topicId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course.</p><p>Read-only.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Classroom-assigned identifier of this course work material, unique per course.</p><p>Read-only.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters.</p></td></tr><tr><td><code>materials[]</code></td><td><p><code>object (<code>Material</code>)</code></p><p>Additional materials.</p><p>A course work material must have no more than 20 material items.</p></td></tr><tr><td><code>state</code></td><td><p><code>enum (<code>CourseWorkMaterialState</code>)</code></p><p>Status of this course work material. If unspecified, the default state is <code>DRAFT</code>.</p></td></tr><tr><td><code>alternateLink</code></td><td><p><code>string</code></p><p>Absolute link to this course work material in the Classroom web UI. This is only populated if <code>state</code> is <code>PUBLISHED</code>.</p><p>Read-only.</p></td></tr><tr><td><code>creationTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Timestamp when this course work material was created.</p><p>Read-only.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Timestamp of the most recent change to this course work material.</p><p>Read-only.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>scheduledTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional timestamp when this course work material is scheduled to be published.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>assigneeMode</code></td><td><p><code>enum (<code>AssigneeMode</code>)</code></p><p>Assignee mode of the course work material. If unspecified, the default value is <code>ALL_STUDENTS</code>.</p></td></tr><tr><td><code>individualStudentsOptions</code></td><td><p><code>object (<code>IndividualStudentsOptions</code>)</code></p><p>Identifiers of students with access to the course work material. This field is set only if <code>assigneeMode</code> is <code>INDIVIDUAL_STUDENTS</code>. If the <code>assigneeMode</code> is <code>INDIVIDUAL_STUDENTS</code>, then only students specified in this field can see the course work material.</p></td></tr><tr><td><code>creatorUserId</code></td><td><p><code>string</code></p><p>Identifier for the user that created the course work material.</p><p>Read-only.</p></td></tr><tr><td><code>topicId</code></td><td><p><code>string</code></p><p>Identifier for the topic that this course work material is associated with. Must match an existing topic in the course.</p></td></tr></tbody></table>

## CourseWorkMaterialState

Possible states of course work material

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COURSEWORK_MATERIAL_STATE_UNSPECIFIED</code></td><td>No state specified. This is never returned.</td></tr><tr><td><code>PUBLISHED</code></td><td>Status for course work material that has been published. This is the default state.</td></tr><tr><td><code>DRAFT</code></td><td>Status for a course work material that is not yet published. Course work material in this state is visible only to course teachers and domain administrators.</td></tr><tr><td><code>DELETED</code></td><td>Status for course work material that was published but is now deleted. Course work material in this state is visible only to course teachers and domain administrators. Course work material in this state is deleted after some time.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a course work material.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a course work material.</td></tr><tr><td><h3>get</h3></td><td>Returns a course work material.</td></tr><tr><td><h3>getAddOnContext</h3></td><td>Gets metadata for Classroom add-ons in the context of a specific post.</td></tr><tr><td><h3>list</h3></td><td>Returns a list of course work material that the requester is permitted to view.</td></tr><tr><td><h3>patch</h3></td><td>Updates one or more fields of a course work material.</td></tr></tbody></table>
