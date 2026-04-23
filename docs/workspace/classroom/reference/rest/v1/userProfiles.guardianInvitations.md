---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardianInvitations
root: workspace
fetched_at: 2026-04-23T15:26:04.653Z
---

# REST Resource: userProfiles.guardianInvitations

## Resource: GuardianInvitation

An invitation to become the guardian of a specified user, sent to a specified email address.

JSON representation

```
{
  "studentId": string,
  "invitationId": string,
  "invitedEmailAddress": string,
  "state": enum (GuardianInvitationState),
  "creationTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>studentId</code></td><td><p><code>string</code></p><p>ID of the student (in standard format)</p></td></tr><tr><td><code>invitationId</code></td><td><p><code>string</code></p><p>Unique identifier for this invitation.</p><p>Read-only.</p></td></tr><tr><td><code>invitedEmailAddress</code></td><td><p><code>string</code></p><p>Email address that the invitation was sent to. This field is only visible to domain administrators.</p></td></tr><tr><td><code>state</code></td><td><p><code>enum (<code>GuardianInvitationState</code>)</code></p><p>The state that this invitation is in.</p></td></tr><tr><td><code>creationTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The time that this invitation was created.</p><p>Read-only.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr></tbody></table>

## GuardianInvitationState

State of a guardian invitation.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>GUARDIAN_INVITATION_STATE_UNSPECIFIED</code></td><td>Should never be returned.</td></tr><tr><td><code>PENDING</code></td><td>The invitation is active and awaiting a response.</td></tr><tr><td><code>COMPLETE</code></td><td>The invitation is no longer active. It may have been accepted, declined, withdrawn or it may have expired.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian.</td></tr><tr><td><h3>get</h3></td><td>Returns a specific guardian invitation.</td></tr><tr><td><h3>list</h3></td><td>Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided.</td></tr><tr><td><h3>patch</h3></td><td>Modifies a guardian invitation.</td></tr></tbody></table>
