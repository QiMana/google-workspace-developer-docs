---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.posts.addOnAttachments.studentSubmissions
root: workspace
fetched_at: 2026-04-23T15:25:58.845Z
---

# REST Resource: courses.posts.addOnAttachments.studentSubmissions

## Resource: AddOnAttachmentStudentSubmission

Payload for grade update requests.

JSON representation

```
{
  "pointsEarned": number,
  "postSubmissionState": enum (SubmissionState),
  "userId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>pointsEarned</code></td><td><p><code>number</code></p><p>Student grade on this attachment. If unset, no grade was set.</p></td></tr><tr><td><code>postSubmissionState</code></td><td><p><code>enum (<code>SubmissionState</code>)</code></p><p>Submission state of add-on attachment's parent post (i.e. assignment).</p></td></tr><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Identifier for the student that owns this submission.</p><p>This field is part of an experimental API change and is populated only if sufficient scopes are granted.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Returns a student submission for an add-on attachment.</td></tr><tr><td><h3>patch</h3></td><td>Updates data associated with an add-on attachment submission.</td></tr></tbody></table>
