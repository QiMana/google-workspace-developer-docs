---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses
root: workspace
fetched_at: 2026-04-23T15:25:53.613Z
---

# REST Resource: courses

## Resource: Course

A Course in Classroom.

JSON representation

```
{
  "id": string,
  "name": string,
  "section": string,
  "descriptionHeading": string,
  "description": string,
  "room": string,
  "ownerId": string,
  "creationTime": string,
  "updateTime": string,
  "enrollmentCode": string,
  "courseState": enum (CourseState),
  "alternateLink": string,
  "teacherGroupEmail": string,
  "courseGroupEmail": string,
  "teacherFolder": {
    object (DriveFolder)
  },
  "courseMaterialSets": [
    {
      object (CourseMaterialSet)
    }
  ],
  "guardiansEnabled": boolean,
  "calendarId": string,
  "gradebookSettings": {
    object (GradebookSettings)
  },
  "subject": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier for this course assigned by Classroom.</p><p>When <code>creating a course</code>, you may optionally set this identifier to an <code>alias string</code> in the request to create a corresponding alias. The <code>id</code> is still assigned by Classroom and cannot be updated after the course is created.</p><p>Specifying this field in a course update mask results in an error.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and a valid UTF-8 string.</p></td></tr><tr><td><code>section</code></td><td><p><code>string</code></p><p>Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800 characters.</p></td></tr><tr><td><code>descriptionHeading</code></td><td><p><code>string</code></p><p>Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid UTF-8 string and no longer than 3600 characters.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Optional description. For example, "We'll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no longer than 30,000 characters.</p></td></tr><tr><td><code>room</code></td><td><p><code>string</code></p><p>Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650 characters.</p></td></tr><tr><td><code>ownerId</code></td><td><p><code>string</code></p><p>The identifier of the owner of a course.</p><p>When specified as a parameter of a <code>create course request</code>, this field is required. The identifier can be one of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul><p>This must be set in a create request. Admins can also specify this field in a <code>patch course request</code> to transfer ownership. In other contexts, it is read-only.</p></td></tr><tr><td><code>creationTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Creation time of the course. Specifying this field in a course update mask results in an error.</p><p>Read-only.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Time of the most recent update to this course. Specifying this field in a course update mask results in an error.</p><p>Read-only.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>enrollmentCode</code></td><td><p><code>string</code></p><p>Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error.</p><p>Read-only.</p></td></tr><tr><td><code>courseState</code></td><td><p><code>enum (<code>CourseState</code>)</code></p><p>State of the course. If unspecified, the default state is <code>PROVISIONED</code>.</p></td></tr><tr><td><code>alternateLink</code></td><td><p><code>string</code></p><p>Absolute link to this course in the Classroom web UI.</p><p>Read-only.</p></td></tr><tr><td><code>teacherGroupEmail</code></td><td><p><code>string</code></p><p>The email address of a Google group containing all teachers of the course. This group does not accept email and can only be used for permissions.</p><p>Read-only.</p></td></tr><tr><td><code>courseGroupEmail</code></td><td><p><code>string</code></p><p>The email address of a Google group containing all members of the course. This group does not accept email and can only be used for permissions.</p><p>Read-only.</p></td></tr><tr><td><code>teacherFolder</code></td><td><p><code>object (<code>DriveFolder</code>)</code></p><p>Information about a Drive Folder that is shared with all teachers of the course.</p><p>This field will only be set for teachers of the course and domain administrators.</p><p>Read-only.</p></td></tr><tr><td><code>courseMaterialSets[]<br><b>(deprecated)</b></code></td><td><p><code>object (<code>CourseMaterialSet</code>)</code></p><p>Sets of materials that appear on the "about" page of this course.</p><p>Read-only.</p></td></tr><tr><td><code>guardiansEnabled</code></td><td><p><code>boolean</code></p><p>Whether or not guardian notifications are enabled for this course.</p><p>Read-only.</p></td></tr><tr><td><code>calendarId</code></td><td><p><code>string</code></p><p>The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and announcements in the course.</p><p>The Calendar for a course is created asynchronously when the course is set to <code>CourseState.ACTIVE</code> for the first time (at creation time or when it is updated to <code>ACTIVE</code> through the UI or the API). The Calendar ID will not be populated until the creation process is completed.</p><p>Read-only.</p></td></tr><tr><td><code>gradebookSettings</code></td><td><p><code>object (<code>GradebookSettings</code>)</code></p><p>The gradebook settings that specify how a student's overall grade for the course will be calculated and who it will be displayed to.</p><p>Read-only.</p></td></tr><tr><td><code>subject</code></td><td><p><code>string</code></p><p>Optional. The subject of the course.</p></td></tr></tbody></table>

## CourseState

Possible states a course can be in.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COURSE_STATE_UNSPECIFIED</code></td><td>No course state. No returned Course message will use this value.</td></tr><tr><td><code>ACTIVE</code></td><td>The course is active.</td></tr><tr><td><code>ARCHIVED</code></td><td>The course has been archived. You cannot modify it except to change it to a different state.</td></tr><tr><td><code>PROVISIONED</code></td><td>The course has been created, but not yet activated. It is accessible by the primary teacher and domain administrators, who may modify it or change it to the <code>ACTIVE</code> or <code>DECLINED</code> states. A course may only be changed to <code>PROVISIONED</code> if it is in the <code>DECLINED</code> state.</td></tr><tr><td><code>DECLINED</code></td><td>The course has been created, but declined. It is accessible by the course owner and domain administrators, though it will not be displayed in the web UI. You cannot modify the course except to change it to the <code>PROVISIONED</code> state. A course may only be changed to <code>DECLINED</code> if it is in the <code>PROVISIONED</code> state.</td></tr><tr><td><code>SUSPENDED</code></td><td>The course has been suspended. You cannot modify the course, and only the user identified by the <code>ownerId</code> can view the course. A course may be placed in this state if it potentially violates the Terms of Service.</td></tr></tbody></table>

## CourseMaterialSet

A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.

JSON representation

```
{
  "title": string,
  "materials": [
    {
      object (CourseMaterial)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>Title for this set.</p></td></tr><tr><td><code>materials[]</code></td><td><p><code>object (<code>CourseMaterial</code>)</code></p><p>Materials attached to this set.</p></td></tr></tbody></table>

## CourseMaterial

A material attached to a course as part of a material set.

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>material</code>. Material data. <code>material</code> can be only one of the following:</td></tr><tr><td><code>driveFile</code></td><td><p><code>object (<code>DriveFile</code>)</code></p><p>Google Drive file attachment.</p></td></tr><tr><td><code>youTubeVideo</code></td><td><p><code>object (<code>YouTubeVideo</code>)</code></p><p>Youtube video attachment.</p></td></tr><tr><td><code>link</code></td><td><p><code>object (<code>Link</code>)</code></p><p>Link atatchment.</p></td></tr><tr><td><code>form</code></td><td><p><code>object (<code>Form</code>)</code></p><p>Google Forms attachment.</p></td></tr></tbody></table>

## GradebookSettings

The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.

JSON representation

```
{
  "calculationType": enum (CalculationType),
  "displaySetting": enum (DisplaySetting),
  "gradeCategories": [
    {
      object (GradeCategory)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>calculationType</code></td><td><p><code>enum (<code>CalculationType</code>)</code></p><p>Indicates how the overall grade is calculated.</p></td></tr><tr><td><code>displaySetting</code></td><td><p><code>enum (<code>DisplaySetting</code>)</code></p><p>Indicates who can see the overall grade..</p></td></tr></tbody></table>

## CalculationType

Possible methods of overall grade calculation.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CALCULATION_TYPE_UNSPECIFIED</code></td><td>No method specified. This is never returned.</td></tr><tr><td><code>TOTAL_POINTS</code></td><td>Overall grade is the sum of grades divided by the sum of total points regardless of category.</td></tr></tbody></table>

## DisplaySetting

Possible settings for displaying the overall grade.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DISPLAY_SETTING_UNSPECIFIED</code></td><td>No setting specified. This is never returned.</td></tr><tr><td><code>SHOW_OVERALL_GRADE</code></td><td>Shows overall grade in the gradebook and student profile to both teachers and students.</td></tr><tr><td><code>HIDE_OVERALL_GRADE</code></td><td>Does not show overall grade in the gradebook or student profile.</td></tr><tr><td><code>SHOW_TEACHERS_ONLY</code></td><td>Shows the overall grade to teachers in the gradebook and student profile. Hides from students in their student profile.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>checkAddOnCreationEligibility (deprecated)</h3></td><td>Returns whether a user is eligible to create add-on attachments in a given course.</td></tr><tr><td><h3>checkGradingPeriodsSetupEligibility (deprecated)</h3></td><td>Returns whether a user is eligible to update GradingPeriodSettings in a given course.</td></tr><tr><td><h3>create</h3></td><td>Creates a course.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a course.</td></tr><tr><td><h3>get</h3></td><td>Returns a course.</td></tr><tr><td><h3>getGradingPeriodSettings</h3></td><td>Returns the grading period settings in a course.</td></tr><tr><td><h3>list</h3></td><td>Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request.</td></tr><tr><td><h3>patch</h3></td><td>Updates one or more fields in a course.</td></tr><tr><td><h3>update</h3></td><td>Updates a course.</td></tr><tr><td><h3>updateGradingPeriodSettings</h3></td><td>Updates grading period settings of a course.</td></tr></tbody></table>
