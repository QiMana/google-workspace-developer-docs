---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork
root: workspace
fetched_at: 2026-04-23T15:25:55.004Z
---

# REST Resource: courses.courseWork

## Resource: CourseWork

Course work created by a teacher for students of the course.

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
  "state": enum (CourseWorkState),
  "alternateLink": string,
  "creationTime": string,
  "updateTime": string,
  "dueDate": {
    object (Date)
  },
  "dueTime": {
    object (TimeOfDay)
  },
  "scheduledTime": string,
  "maxPoints": number,
  "workType": enum (CourseWorkType),
  "associatedWithDeveloper": boolean,
  "assigneeMode": enum (AssigneeMode),
  "individualStudentsOptions": {
    object (IndividualStudentsOptions)
  },
  "submissionModificationMode": enum (SubmissionModificationMode),
  "creatorUserId": string,
  "topicId": string,
  "gradeCategory": {
    object (GradeCategory)
  },
  "previewVersion": enum (PreviewVersion),

  "assignment": {
    object (Assignment)
  },
  "multipleChoiceQuestion": {
    object (MultipleChoiceQuestion)
  }
  "gradingPeriodId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course.</p><p>Read-only.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Classroom-assigned identifier of this course work, unique per course.</p><p>Read-only.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than 30,000 characters.</p></td></tr><tr><td><code>materials[]</code></td><td><p><code>object (<code>Material</code>)</code></p><p>Additional materials.</p><p>CourseWork must have no more than 20 material items.</p></td></tr><tr><td><code>state</code></td><td><p><code>enum (<code>CourseWorkState</code>)</code></p><p>Status of this course work. If unspecified, the default state is <code>DRAFT</code>.</p></td></tr><tr><td><code>alternateLink</code></td><td><p><code>string</code></p><p>Absolute link to this course work in the Classroom web UI. This is only populated if <code>state</code> is <code>PUBLISHED</code>.</p><p>Read-only.</p></td></tr><tr><td><code>creationTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Timestamp when this course work was created.</p><p>Read-only.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Timestamp of the most recent change to this course work.</p><p>Read-only.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>dueDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Optional date, in UTC, that submissions for this course work are due. This must be specified if <code>dueTime</code> is specified.</p></td></tr><tr><td><code>dueTime</code></td><td><p><code>object (<code>TimeOfDay</code>)</code></p><p>Optional time of day, in UTC, that submissions for this course work are due. This must be specified if <code>dueDate</code> is specified.</p></td></tr><tr><td><code>scheduledTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional timestamp when this course work is scheduled to be published.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>maxPoints</code></td><td><p><code>number</code></p><p>Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded. This must be a non-negative integer value.</p></td></tr><tr><td><code>workType</code></td><td><p><code>enum (<code>CourseWorkType</code>)</code></p><p>Type of this course work.</p><p>The type is set when the course work is created and cannot be changed.</p></td></tr><tr><td><code>associatedWithDeveloper</code></td><td><p><code>boolean</code></p><p>Whether this course work item is associated with the Developer Console project making the request.</p><p>See <code>courseWork.create</code> for more details.</p><p>Read-only.</p></td></tr><tr><td><code>assigneeMode</code></td><td><p><code>enum (<code>AssigneeMode</code>)</code></p><p>Assignee mode of the coursework. If unspecified, the default value is <code>ALL_STUDENTS</code>.</p></td></tr><tr><td><code>individualStudentsOptions</code></td><td><p><code>object (<code>IndividualStudentsOptions</code>)</code></p><p>Identifiers of students with access to the coursework. This field is set only if <code>assigneeMode</code> is <code>INDIVIDUAL_STUDENTS</code>. If the <code>assigneeMode</code> is <code>INDIVIDUAL_STUDENTS</code>, then only students specified in this field are assigned the coursework.</p></td></tr><tr><td><code>submissionModificationMode</code></td><td><p><code>enum (<code>SubmissionModificationMode</code>)</code></p><p>Setting to determine when students are allowed to modify submissions. If unspecified, the default value is <code>MODIFIABLE_UNTIL_TURNED_IN</code>.</p></td></tr><tr><td><code>creatorUserId</code></td><td><p><code>string</code></p><p>Identifier for the user that created the coursework.</p><p>Read-only.</p></td></tr><tr><td><code>topicId</code></td><td><p><code>string</code></p><p>Identifier for the topic that this coursework is associated with. Must match an existing topic in the course.</p></td></tr><tr><td><code>gradeCategory</code></td><td><p><code>object (<code>GradeCategory</code>)</code></p><p>The category that this coursework's grade contributes to. Present only when a category has been chosen for the coursework. May be used in calculating the overall grade.</p><p>Read-only.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Output only. The preview version of the API used to retrieve this resource.</p></td></tr><tr><td colspan="2">Union field <code>details</code>. Additional details that are specific to a type of course work. <code>details</code> can be only one of the following:</td></tr><tr><td><code>assignment</code></td><td><p><code>object (<code>Assignment</code>)</code></p><p>Assignment details. This is populated only when <code>workType</code> is <code>ASSIGNMENT</code>.</p><p>Read-only.</p></td></tr><tr><td><code>multipleChoiceQuestion</code></td><td><p><code>object (<code>MultipleChoiceQuestion</code>)</code></p><p>Multiple choice question details. For read operations, this field is populated only when <code>workType</code> is <code>MULTIPLE_CHOICE_QUESTION</code>. For write operations, this field must be specified when creating course work with a <code>workType</code> of <code>MULTIPLE_CHOICE_QUESTION</code>, and it must not be set otherwise.</p></td></tr><tr><td><code>gradingPeriodId</code></td><td><p><code>string</code></p><p>Identifier of the grading period associated with the coursework.</p><ul><li>At creation, if unspecified, the grading period ID will be set based on the <code>dueDate</code> (or <code>scheduledTime</code> if no <code>dueDate</code> is set).</li><li>To indicate no association to any grading period, set this field to an empty string ("").</li><li>If specified, it must match an existing grading period ID in the course.</li></ul></td></tr></tbody></table>

## CourseWorkState

Possible states of course work.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COURSE_WORK_STATE_UNSPECIFIED</code></td><td>No state specified. This is never returned.</td></tr><tr><td><code>PUBLISHED</code></td><td>Status for work that has been published. This is the default state.</td></tr><tr><td><code>DRAFT</code></td><td>Status for work that is not yet published. Work in this state is visible only to course teachers and domain administrators.</td></tr><tr><td><code>DELETED</code></td><td>Status for work that was published but is now deleted. Work in this state is visible only to course teachers and domain administrators. Work in this state is deleted after some time.</td></tr></tbody></table>

## SubmissionModificationMode

Possible modification modes for student submissions.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SUBMISSION_MODIFICATION_MODE_UNSPECIFIED</code></td><td>No modification mode specified. This is never returned.</td></tr><tr><td><code>MODIFIABLE_UNTIL_TURNED_IN</code></td><td>Submissions can be modified before being turned in.</td></tr><tr><td><code>MODIFIABLE</code></td><td>Submissions can be modified at any time.</td></tr></tbody></table>

## Assignment

Additional details for assignments.

JSON representation

```
{
  "studentWorkFolder": {
    object (DriveFolder)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>studentWorkFolder</code></td><td><p><code>object (<code>DriveFolder</code>)</code></p><p>Drive folder where attachments from student submissions are placed. This is only populated for course teachers and administrators.</p></td></tr></tbody></table>

## MultipleChoiceQuestion

Additional details for multiple-choice questions.

JSON representation

```
{
  "choices": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>choices[]</code></td><td><p><code>string</code></p><p>Possible choices.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates course work.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a course work.</td></tr><tr><td><h3>get</h3></td><td>Returns course work.</td></tr><tr><td><h3>getAddOnContext</h3></td><td>Gets metadata for Classroom add-ons in the context of a specific post.</td></tr><tr><td><h3>list</h3></td><td>Returns a list of course work that the requester is permitted to view.</td></tr><tr><td><h3>modifyAssignees</h3></td><td>Modifies assignee mode and options of a coursework.</td></tr><tr><td><h3>patch</h3></td><td>Updates one or more fields of a course work.</td></tr></tbody></table>
