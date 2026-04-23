---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.studentGroups.studentGroupMembers
root: workspace
fetched_at: 2026-04-23T15:26:00.617Z
---

# REST Resource: courses.studentGroups.studentGroupMembers

## Resource: StudentGroupMember

A student member in a student group.

JSON representation

```
{
  "courseId": string,
  "studentGroupId": string,
  "userId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>The identifier of the course.</p></td></tr><tr><td><code>studentGroupId</code></td><td><p><code>string</code></p><p>The identifier of the student group.</p></td></tr><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Identifier of the student.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a student group member for a student group.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a student group member.</td></tr><tr><td><h3>list</h3></td><td>Returns a list of students in a group.</td></tr></tbody></table>
