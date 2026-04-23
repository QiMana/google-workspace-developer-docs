---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.students
root: workspace
fetched_at: 2026-04-23T15:26:00.900Z
---

# REST Resource: courses.students

## Resource: Student

Student in a course.

JSON representation

```
{
  "courseId": string,
  "userId": string,
  "profile": {
    object (UserProfile)
  },
  "studentWorkFolder": {
    object (DriveFolder)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course.</p><p>Read-only.</p></td></tr><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Identifier of the user.</p><p>When specified as a parameter of a request, this identifier can be one of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul></td></tr><tr><td><code>studentWorkFolder</code></td><td><p><code>object (<code>DriveFolder</code>)</code></p><p>Information about a Drive Folder for this student's work in this course. Only visible to the student and domain administrators.</p><p>Read-only.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Adds a user as a student of a course.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a student of a course.</td></tr><tr><td><h3>get</h3></td><td>Returns a student of a course.</td></tr><tr><td><h3>list</h3></td><td>Returns a list of students of this course that the requester is permitted to view.</td></tr></tbody></table>
