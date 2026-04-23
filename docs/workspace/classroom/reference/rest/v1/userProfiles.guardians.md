---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardians
root: workspace
fetched_at: 2026-04-23T15:26:04.878Z
---

# REST Resource: userProfiles.guardians

## Resource: Guardian

Association between a student and a guardian of that student. The guardian may receive information about the student's course work.

JSON representation

```
{
  "studentId": string,
  "guardianId": string,
  "guardianProfile": {
    
  },
  "invitedEmailAddress": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>studentId</code></td><td><p><code>string</code></p><p>Identifier for the student to whom the guardian relationship applies.</p></td></tr><tr><td><code>guardianId</code></td><td><p><code>string</code></p><p>Identifier for the guardian.</p></td></tr><tr><td><code>invitedEmailAddress</code></td><td><p><code>string</code></p><p>The email address to which the initial guardian invitation was sent. This field is only visible to domain administrators.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes a guardian.</td></tr><tr><td><h3>get</h3></td><td>Returns a specific guardian.</td></tr><tr><td><h3>list</h3></td><td>Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request.</td></tr></tbody></table>
