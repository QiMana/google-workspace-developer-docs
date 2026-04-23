---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions
root: workspace
fetched_at: 2026-04-23T15:25:56.754Z
---

# REST Resource: courses.courseWork.studentSubmissions

## Resource: StudentSubmission

Student submission for course work.

`StudentSubmission` items are generated when a `CourseWork` item is created.

Student submissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.

JSON representation

```
{
  "courseId": string,
  "courseWorkId": string,
  "id": string,
  "userId": string,
  "creationTime": string,
  "updateTime": string,
  "state": enum (SubmissionState),
  "late": boolean,
  "draftGrade": number,
  "assignedGrade": number,
  "rubricId": string,
  "draftRubricGrades": {
    string: {
      object (RubricGrade)
    },
    ...
  },
  "assignedRubricGrades": {
    string: {
      object (RubricGrade)
    },
    ...
  },
  "alternateLink": string,
  "courseWorkType": enum (CourseWorkType),
  "associatedWithDeveloper": boolean,
  "submissionHistory": [
    {
      object (SubmissionHistory)
    }
  ],
  "previewVersion": enum (PreviewVersion),

  "assignmentSubmission": {
    object (AssignmentSubmission)
  },
  "shortAnswerSubmission": {
    object (ShortAnswerSubmission)
  },
  "multipleChoiceSubmission": {
    object (MultipleChoiceSubmission)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course.</p><p>Read-only.</p></td></tr><tr><td><code>courseWorkId</code></td><td><p><code>string</code></p><p>Identifier for the course work this corresponds to.</p><p>Read-only.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Classroom-assigned Identifier for the student submission. This is unique among submissions for the relevant course work.</p><p>Read-only.</p></td></tr><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Identifier for the student that owns this submission.</p><p>Read-only.</p></td></tr><tr><td><code>creationTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Creation time of this submission. This may be unset if the student has not accessed this item.</p><p>Read-only.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Last update time of this submission. This may be unset if the student has not accessed this item.</p><p>Read-only.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>state</code></td><td><p><code>enum (<code>SubmissionState</code>)</code></p><p>State of this submission.</p><p>Read-only.</p></td></tr><tr><td><code>late</code></td><td><p><code>boolean</code></p><p>Whether this submission is late.</p><p>Read-only.</p></td></tr><tr><td><code>draftGrade</code></td><td><p><code>number</code></p><p>Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places.</p><p>This is only visible to and modifiable by course teachers.</p></td></tr><tr><td><code>assignedGrade</code></td><td><p><code>number</code></p><p>Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places.</p><p>This may be modified only by course teachers.</p></td></tr><tr><td><code>rubricId</code></td><td><p><code>string</code></p><p>Output only. Identifier of the rubric currently attached to this course work and used for grading this student submission.</p><p>This ID is empty if there is no rubric. This ID reflects the currently active rubric; it changes if teachers delete and recreate the rubric.</p><p>Read-only.</p></td></tr><tr><td><code>draftRubricGrades</code></td><td><p><code>map (key: string, value: object (<code>RubricGrade</code>))</code></p><p>Pending rubric grades based on the rubric's criteria.</p><p>This map is empty if there is no rubric attached to this course work or if a rubric is attached, but no grades have been set on any criteria. Entries are only populated for grades that have been set. Key: The rubric's criterion ID.</p><p>Read-only.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>assignedRubricGrades</code></td><td><p><code>map (key: string, value: object (<code>RubricGrade</code>))</code></p><p>Assigned rubric grades based on the rubric's Criteria.</p><p>This map is empty if there is no rubric attached to this course work or if a rubric is attached, but no grades have been set on any Criteria. Entries are only populated for grades that have been set. Key: The rubric's criterion ID.</p><p>Read-only.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>alternateLink</code></td><td><p><code>string</code></p><p>Absolute link to the submission in the Classroom web UI.</p><p>Read-only.</p></td></tr><tr><td><code>courseWorkType</code></td><td><p><code>enum (<code>CourseWorkType</code>)</code></p><p>Type of course work this submission is for.</p><p>Read-only.</p></td></tr><tr><td><code>associatedWithDeveloper</code></td><td><p><code>boolean</code></p><p>Whether this student submission is associated with the Developer Console project making the request.</p><p>See <code>courseWork.create</code> for more details.</p><p>Read-only.</p></td></tr><tr><td><code>submissionHistory[]</code></td><td><p><code>object (<code>SubmissionHistory</code>)</code></p><p>The history of the submission (includes state and grade histories).</p><p>Read-only.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Output only. The preview version of the API. This must be set in order to access new API capabilities made available to developers in the Preview Program.</p></td></tr><tr><td colspan="2">Union field <code>content</code>. Submission content. The specific type depends on the value of <code>course_work_type</code>. <code>content</code> can be only one of the following:</td></tr><tr><td><code>assignmentSubmission</code></td><td><p><code>object (<code>AssignmentSubmission</code>)</code></p><p>Submission content when courseWorkType is ASSIGNMENT.</p><p>Students can modify this content using <code>studentSubmissions.modifyAttachments</code>.</p></td></tr><tr><td><code>shortAnswerSubmission</code></td><td><p><code>object (<code>ShortAnswerSubmission</code>)</code></p><p>Submission content when courseWorkType is SHORT_ANSWER_QUESTION.</p></td></tr><tr><td><code>multipleChoiceSubmission</code></td><td><p><code>object (<code>MultipleChoiceSubmission</code>)</code></p><p>Submission content when courseWorkType is MULTIPLE_CHOICE_QUESTION.</p></td></tr></tbody></table>

## RubricGrade

A rubric grade set for the student submission. There is at most one entry per rubric criterion.

JSON representation

```
{
  "criterionId": string,
  "levelId": string,
  "points": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>criterionId</code></td><td><p><code>string</code></p><p>Optional. Criterion ID.</p></td></tr><tr><td><code>levelId</code></td><td><p><code>string</code></p><p>Optional. Optional level ID of the selected level. If empty, no level was selected.</p></td></tr><tr><td><code>points</code></td><td><p><code>number</code></p><p>Optional. Optional points assigned for this criterion, typically based on the level. Levels might or might not have points. If unset, no points were set for this criterion.</p></td></tr></tbody></table>

## AssignmentSubmission

Student work for an assignment.

JSON representation

```
{
  "attachments": [
    {
      object (Attachment)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>attachments[]</code></td><td><p><code>object (<code>Attachment</code>)</code></p><p>Attachments added by the student. Drive files that correspond to materials with a share mode of STUDENT_COPY may not exist yet if the student has not accessed the assignment in Classroom.</p><p>Some attachment metadata is only populated if the requesting user has permission to access it. Identifier and alternateLink fields are always available, but others (for example, title) may not be.</p></td></tr></tbody></table>

## Attachment

Attachment added to student assignment work.

When creating attachments, setting the `form` field is not supported.

JSON representation

```
{

  "driveFile": {
    object (DriveFile)
  },
  "youTubeVideo": {
    object (YouTubeVideo)
  },
  "link": {
    object (Link)
  },
  "form": {
    object (Form)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>attachment</code>. Attachment data. <code>attachment</code> can be only one of the following:</td></tr><tr><td><code>driveFile</code></td><td><p><code>object (<code>DriveFile</code>)</code></p><p>Google Drive file attachment.</p></td></tr><tr><td><code>youTubeVideo</code></td><td><p><code>object (<code>YouTubeVideo</code>)</code></p><p>Youtube video attachment.</p></td></tr><tr><td><code>link</code></td><td><p><code>object (<code>Link</code>)</code></p><p>Link attachment.</p></td></tr><tr><td><code>form</code></td><td><p><code>object (<code>Form</code>)</code></p><p>Google Forms attachment.</p></td></tr></tbody></table>

## ShortAnswerSubmission

Student work for a short answer question.

JSON representation

```
{
  "answer": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>answer</code></td><td><p><code>string</code></p><p>Student response to a short-answer question.</p></td></tr></tbody></table>

## MultipleChoiceSubmission

Student work for a multiple-choice question.

JSON representation

```
{
  "answer": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>answer</code></td><td><p><code>string</code></p><p>Student's select choice.</p></td></tr></tbody></table>

## SubmissionHistory

The history of the submission. This currently includes state and grade histories.

JSON representation

```
{

  "stateHistory": {
    object (StateHistory)
  },
  "gradeHistory": {
    object (GradeHistory)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>type</code>. Type of SubmissionHistory, can be one of StateHistory, GradeHistory. <code>type</code> can be only one of the following:</td></tr><tr><td><code>stateHistory</code></td><td><p><code>object (<code>StateHistory</code>)</code></p><p>The state history information of the submission, if present.</p></td></tr><tr><td><code>gradeHistory</code></td><td><p><code>object (<code>GradeHistory</code>)</code></p><p>The grade history information of the submission, if present.</p></td></tr></tbody></table>

## StateHistory

The history of each state this submission has been in.

JSON representation

```
{
  "state": enum (State),
  "stateTimestamp": string,
  "actorUserId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>state</code></td><td><p><code>enum (<code>State</code>)</code></p><p>The workflow pipeline stage.</p></td></tr><tr><td><code>actorUserId</code></td><td><p><code>string</code></p><p>The teacher or student who made the change.</p></td></tr></tbody></table>

## State

Possible states for a submission to be in.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATE_UNSPECIFIED</code></td><td>No state specified. This should never be returned.</td></tr><tr><td><code>CREATED</code></td><td>The Submission has been created.</td></tr><tr><td><code>TURNED_IN</code></td><td>The student has turned in an assigned document, which may or may not be a template.</td></tr><tr><td><code>RETURNED</code></td><td>The teacher has returned the assigned document to the student.</td></tr><tr><td><code>RECLAIMED_BY_STUDENT</code></td><td>The student turned in the assigned document, and then chose to "unsubmit" the assignment, giving the student control again as the owner.</td></tr><tr><td><code>STUDENT_EDITED_AFTER_TURN_IN</code></td><td>The student edited their submission after turning it in. Currently, only used by Questions, when the student edits their answer.</td></tr></tbody></table>

## GradeHistory

The history of each grade on this submission.

JSON representation

```
{
  "pointsEarned": number,
  "maxPoints": number,
  "gradeTimestamp": string,
  "actorUserId": string,
  "gradeChangeType": enum (GradeChangeType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>pointsEarned</code></td><td><p><code>number</code></p><p>The numerator of the grade at this time in the submission grade history.</p></td></tr><tr><td><code>maxPoints</code></td><td><p><code>number</code></p><p>The denominator of the grade at this time in the submission grade history.</p></td></tr><tr><td><code>actorUserId</code></td><td><p><code>string</code></p><p>The teacher who made the grade change.</p></td></tr><tr><td><code>gradeChangeType</code></td><td><p><code>enum (<code>GradeChangeType</code>)</code></p><p>The type of grade change at this time in the submission grade history.</p></td></tr></tbody></table>

## GradeChangeType

Possible grade change types.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNKNOWN_GRADE_CHANGE_TYPE</code></td><td>No grade change type specified. This should never be returned.</td></tr><tr><td><code>DRAFT_GRADE_POINTS_EARNED_CHANGE</code></td><td>A change in the numerator of the draft grade.</td></tr><tr><td><code>ASSIGNED_GRADE_POINTS_EARNED_CHANGE</code></td><td>A change in the numerator of the assigned grade.</td></tr><tr><td><code>MAX_POINTS_CHANGE</code></td><td>A change in the denominator of the grade.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Returns a student submission.</td></tr><tr><td><h3>list</h3></td><td>Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request.</td></tr><tr><td><h3>modifyAttachments</h3></td><td>Modifies attachments of student submission.</td></tr><tr><td><h3>patch</h3></td><td>Updates one or more fields of a student submission.</td></tr><tr><td><h3>reclaim</h3></td><td>Reclaims a student submission on behalf of the student that owns it.</td></tr><tr><td><h3>return</h3></td><td>Returns a student submission.</td></tr><tr><td><h3>turnIn</h3></td><td>Turns in a student submission.</td></tr></tbody></table>
