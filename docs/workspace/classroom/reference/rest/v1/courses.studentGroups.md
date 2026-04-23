---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.studentGroups
root: workspace
fetched_at: 2026-04-23T15:26:00.052Z
---

# REST Resource: courses.studentGroups

## Resource: StudentGroup

A student group in a course.

JSON representation

```
{
  "courseId": string,
  "id": string,
  "title": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>The identifier of the course.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The identifier of the student group.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the student group.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a student group for a course.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a student group.</td></tr><tr><td><h3>list</h3></td><td>Returns a list of groups in a course.</td></tr><tr><td><h3>patch</h3></td><td>Updates one or more fields in a student group.</td></tr></tbody></table>
