---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.posts.addOnAttachments
root: workspace
fetched_at: 2026-04-23T15:25:59.010Z
---

# REST Resource: courses.posts.addOnAttachments

## Resource: AddOnAttachment

An add-on attachment on a post.

JSON representation

```
{
  "courseId": string,
  "postId": string,
  "itemId": string,
  "id": string,
  "title": string,
  "teacherViewUri": {
    object (EmbedUri)
  },
  "studentViewUri": {
    object (EmbedUri)
  },
  "studentWorkReviewUri": {
    object (EmbedUri)
  },
  "dueDate": {
    object (Date)
  },
  "dueTime": {
    object (TimeOfDay)
  },
  "maxPoints": number,
  "copyHistory": [
    {
      object (CopyHistory)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Immutable. Identifier of the course.</p></td></tr><tr><td><code>postId<br><b>(deprecated)</b></code></td><td><p><code>string</code></p><p>Immutable. Deprecated, use <code>itemId</code> instead.</p></td></tr><tr><td><code>itemId</code></td><td><p><code>string</code></p><p>Immutable. Identifier of the <code>Announcement</code>, <code>CourseWork</code>, or <code>CourseWorkMaterial</code> under which the attachment is attached. Unique per course.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Immutable. Classroom-assigned identifier for this attachment, unique per post.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Required. Title of this attachment. The title must be between 1 and 1000 characters.</p></td></tr><tr><td><code>teacherViewUri</code></td><td><p><code>object (<code>EmbedUri</code>)</code></p><p>Required. URI to show the teacher view of the attachment. The URI will be opened in an iframe with the <code>courseId</code>, <code>itemId</code>, <code>itemType</code>, and <code>attachmentId</code> query parameters set.</p></td></tr><tr><td><code>studentViewUri</code></td><td><p><code>object (<code>EmbedUri</code>)</code></p><p>Required. URI to show the student view of the attachment. The URI will be opened in an iframe with the <code>courseId</code>, <code>itemId</code>, <code>itemType</code>, and <code>attachmentId</code> query parameters set.</p></td></tr><tr><td><code>studentWorkReviewUri</code></td><td><p><code>object (<code>EmbedUri</code>)</code></p><p>URI for the teacher to see student work on the attachment, if applicable. The URI will be opened in an iframe with the <code>courseId</code>, <code>itemId</code>, <code>itemType</code>, <code>attachmentId</code>, and <code>submissionId</code> query parameters set. This is the same <code>submissionId</code> returned in the <a href="https://devsite.google.com/classroom/reference/rest/v1/AddOnContext#StudentContext"><code>AddOnContext.studentContext</code></a> field when a student views the attachment. If the URI is omitted or removed, <code>maxPoints</code> will also be discarded.</p></td></tr><tr><td><code>dueDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Date, in UTC, that work on this attachment is due. This must be specified if <code>dueTime</code> is specified.</p></td></tr><tr><td><code>dueTime</code></td><td><p><code>object (<code>TimeOfDay</code>)</code></p><p>Time of day, in UTC, that work on this attachment is due. This must be specified if <code>dueDate</code> is specified.</p></td></tr><tr><td><code>maxPoints</code></td><td><p><code>number</code></p><p>Maximum grade for this attachment. Can only be set if <code>studentWorkReviewUri</code> is set. Set to a non-zero value to indicate that the attachment supports grade passback. If set, this must be a non-negative integer value. When set to zero, the attachment will not support grade passback.</p></td></tr><tr><td><code>copyHistory[]</code></td><td><p><code>object (<code>CopyHistory</code>)</code></p><p>Output only. Identifiers of attachments that were previous copies of this attachment.</p><p>If the attachment was previously copied by virtue of its parent post being copied, this enumerates the identifiers of attachments that were its previous copies in ascending chronological order of copy.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates an add-on attachment under a post.</td></tr><tr><td><h3>delete</h3></td><td>Deletes an add-on attachment.</td></tr><tr><td><h3>get</h3></td><td>Returns an add-on attachment.</td></tr><tr><td><h3>list</h3></td><td>Returns all attachments created by an add-on under the post.</td></tr><tr><td><h3>patch</h3></td><td>Updates an add-on attachment.</td></tr></tbody></table>
