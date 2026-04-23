---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/AddOnContext
root: workspace
fetched_at: 2026-04-23T15:25:51.836Z
---

# AddOnContext

Attachment-relevant metadata for Classroom add-ons in the context of a specific post.

JSON representation

```
{
  "courseId": string,
  "postId": string,
  "itemId": string,
  "supportsStudentWork": boolean,

  "studentContext": {
    object (StudentContext)
  },
  "teacherContext": {
    object (TeacherContext)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Immutable. Identifier of the course.</p></td></tr><tr><td><code>postId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Immutable. Deprecated, use <code>itemId</code> instead.</p></td></tr><tr><td><code>itemId</code></td><td><p><code>string</code></p><p>Immutable. Identifier of the <code>Announcement</code>, <code>CourseWork</code>, or <code>CourseWorkMaterial</code> under which the attachment is attached.</p></td></tr><tr><td><code>supportsStudentWork</code></td><td><p><code>boolean</code></p><p>Optional. Whether the post allows the teacher to see student work and passback grades.</p></td></tr><tr><td colspan="2"><p>Union field <code>context</code>.</p><p><code>context</code> can be only one of the following:</p></td></tr><tr><td><code>studentContext</code></td><td><p><code>object (<code>StudentContext</code>)</code></p><p>Add-on context corresponding to the requesting user's role as a student. Its presence implies that the requesting user is a student in the course.</p></td></tr><tr><td><code>teacherContext</code></td><td><p><code>object (<code>TeacherContext</code>)</code></p><p>Add-on context corresponding to the requesting user's role as a teacher. Its presence implies that the requesting user is a teacher in the course.</p></td></tr></tbody></table>

## StudentContext

Role-specific context if the requesting user is a student.

JSON representation

```
{
  "submissionId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>submissionId</code></td><td><p><code>string</code></p><p>Requesting user's submission id to be used for grade passback and to identify the student when showing student work to the teacher. This is set exactly when <code>supportsStudentWork</code> is <code>true</code>.</p></td></tr></tbody></table>

## TeacherContext

This type has no fields.

Role-specific context if the requesting user is a teacher.
