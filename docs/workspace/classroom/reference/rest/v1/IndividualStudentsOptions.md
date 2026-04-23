---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/IndividualStudentsOptions
root: workspace
fetched_at: 2026-04-23T15:25:52.015Z
---

# IndividualStudentsOptions

Google Classroom add-ons are now generally available to developers! Please see the [add-ons documentation](https://developers.google.com/workspace/classroom/add-ons) for more information.

## IndividualStudentsOptions

Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.

JSON representation

```
{
  "studentIds": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>studentIds[]</code></td><td><p><code>string</code></p><p>Identifiers for the students that have access to the coursework/announcement.</p></td></tr></tbody></table>
