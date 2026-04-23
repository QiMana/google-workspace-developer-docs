---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/invitations
root: workspace
fetched_at: 2026-04-23T15:26:03.766Z
---

# REST Resource: invitations

## Resource: Invitation

An invitation to join a course.

JSON representation

```
{
  "id": string,
  "userId": string,
  "courseId": string,
  "role": enum (CourseRole)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier assigned by Classroom.</p><p>Read-only.</p></td></tr><tr><td><code>userId</code></td><td><p><code>string</code></p><p>Identifier of the invited user.</p><p>When specified as a parameter of a request, this identifier can be set to one of the following:</p><ul><li>the numeric identifier for the user</li><li>the email address of the user</li><li>the string literal <code>"me"</code>, indicating the requesting user</li></ul></td></tr><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course to invite the user to.</p></td></tr><tr><td><code>role</code></td><td><p><code>enum (<code>CourseRole</code>)</code></p><p>Role to invite the user to have. Must not be <code>COURSE_ROLE_UNSPECIFIED</code>.</p></td></tr></tbody></table>

## CourseRole

Possible roles a user may be invite to have.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>COURSE_ROLE_UNSPECIFIED</code></td><td>No course role.</td></tr><tr><td><code>STUDENT</code></td><td>Student in the course.</td></tr><tr><td><code>TEACHER</code></td><td>Teacher of the course.</td></tr><tr><td><code>OWNER</code></td><td>Owner of the course.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>accept</h3></td><td>Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course.</td></tr><tr><td><h3>create</h3></td><td>Creates an invitation.</td></tr><tr><td><h3>delete</h3></td><td>Deletes an invitation.</td></tr><tr><td><h3>get</h3></td><td>Returns an invitation.</td></tr><tr><td><h3>list</h3></td><td>Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request.</td></tr></tbody></table>
