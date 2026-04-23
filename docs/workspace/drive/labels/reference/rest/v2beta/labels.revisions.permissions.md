---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2beta/labels.revisions.permissions
root: workspace
fetched_at: 2026-04-23T15:28:15.336Z
---

# REST Resource: labels.revisions.permissions

## Resource: LabelPermission

The permission that applies to a principal (user, group, audience) on a label.

JSON representation

```
{
  "name": string,
  "email": string,
  "role": enum (LabelRole),

  "person": string,
  "group": string,
  "audience": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Resource name of this permission.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>Specifies the email address for a user or group pricinpal. Not populated for audience principals. User and Group permissions may only be inserted using email address. On update requests, if email address is specified, no principal should be specified.</p></td></tr><tr><td><code>role</code></td><td><p><code>enum (<code>LabelRole</code>)</code></p><p>The role the principal should have.</p></td></tr><tr><td colspan="2">Union field <code>principal</code>. The principal this permission applies to. Must be either an email, user, group, or audience. Example: * people/12345 * groups/45678 * audiences/default <code>principal</code> can be only one of the following:</td></tr><tr><td><code>person</code></td><td><p><code>string</code></p><p>Person resource name.</p></td></tr><tr><td><code>group</code></td><td><p><code>string</code></p><p>Group resource name.</p></td></tr><tr><td><code>audience</code></td><td><p><code>string</code></p><p>Audience to grant a role to. The magic value of <code>audiences/default</code> may be used to apply the role to the default audience in the context of the organization that owns the Label.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>batchDelete</h3></td><td>Deletes Label permissions.</td></tr><tr><td><h3>batchUpdate</h3></td><td>Updates Label permissions.</td></tr><tr><td><h3>create</h3></td><td>Updates a Label's permissions.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a Label's permission.</td></tr><tr><td><h3>list</h3></td><td>Lists a Label's permissions.</td></tr></tbody></table>
