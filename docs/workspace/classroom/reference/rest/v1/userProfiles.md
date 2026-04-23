---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles
root: workspace
fetched_at: 2026-04-23T15:26:03.210Z
---

# REST Resource: userProfiles

Google Classroom add-ons are now generally available to developers! Please see the [add-ons documentation](../../../add-ons.md) for more information.

## REST Resource: userProfiles

## Resource: UserProfile

Global information for a user.

JSON representation

```
{
  "id": string,
  "name": {
    object (Name)
  },
  "emailAddress": string,
  "photoUrl": string,
  "permissions": [
    {
      object (GlobalPermission)
    }
  ],
  "verifiedTeacher": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the user.</p><p>Read-only.</p></td></tr><tr><td><code>name</code></td><td><p><code>object (<code>Name</code>)</code></p><p>Name of the user.</p><p>Read-only.</p></td></tr><tr><td><code>emailAddress</code></td><td><p><code>string</code></p><p>Email address of the user.</p><p>Must request <code>https://www.googleapis.com/auth/classroom.profile.emails</code> scope for this field to be populated in a response body.</p><p>Read-only.</p></td></tr><tr><td><code>photoUrl</code></td><td><p><code>string</code></p><p>URL of user's profile photo.</p><p>Must request <code>https://www.googleapis.com/auth/classroom.profile.photos</code> scope for this field to be populated in a response body.</p><p>Read-only.</p></td></tr><tr><td><code>permissions[]</code></td><td><p><code>object (<code>GlobalPermission</code>)</code></p><p>Global permissions of the user.</p><p>Read-only.</p></td></tr><tr><td><code>verifiedTeacher</code></td><td><p><code>boolean</code></p><p>Represents whether a Google Workspace for Education user's domain administrator has explicitly verified them as being a teacher. This field is always false if the user is not a member of a Google Workspace for Education domain.</p><p>Read-only</p></td></tr></tbody></table>

### Name

Details of the user's name.

JSON representation

```
{
  "givenName": string,
  "familyName": string,
  "fullName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>givenName</code></td><td><p><code>string</code></p><p>The user's first name.</p><p>Read-only.</p></td></tr><tr><td><code>familyName</code></td><td><p><code>string</code></p><p>The user's last name.</p><p>Read-only.</p></td></tr><tr><td><code>fullName</code></td><td><p><code>string</code></p><p>The user's full name formed by concatenating the first and last name values.</p><p>Read-only.</p></td></tr></tbody></table>

### GlobalPermission

Global user permission description.

JSON representation

```
{
  "permission": enum (Permission)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>permission</code></td><td><p><code>enum (<code>Permission</code>)</code></p><p>Permission value.</p></td></tr></tbody></table>

### Permission

Possible permissions that a user may have.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>PERMISSION_UNSPECIFIED</code></td><td>No permission is specified. This is not returned and is not a valid value.</td></tr><tr><td><code>CREATE_COURSE</code></td><td>User is permitted to create a course.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>checkUserCapability</h3></td><td>Returns whether a user may use the specified Classroom capability.</td></tr><tr><td><h3>get</h3></td><td>Returns a user profile.</td></tr></tbody></table>
