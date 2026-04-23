---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/ModifyIndividualStudentsOptions
root: workspace
fetched_at: 2026-04-23T15:25:53.312Z
---

# ModifyIndividualStudentsOptions

Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.

JSON representation

```
{
  "addStudentIds": [
    string
  ],
  "removeStudentIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addStudentIds[]</code></td><td><p><code>string</code></p><p>IDs of students to be added as having access to this coursework/announcement.</p></td></tr><tr><td><code>removeStudentIds[]</code></td><td><p><code>string</code></p><p>IDs of students to be removed from having access to this coursework/announcement.</p></td></tr></tbody></table>
