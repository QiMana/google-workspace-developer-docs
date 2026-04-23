---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/roles
root: workspace
fetched_at: 2026-04-23T15:23:43.068Z
---

# REST Resource: roles

## Resource: Role

JSON representation

```
{
  "roleId": string,
  "roleName": string,
  "roleDescription": string,
  "rolePrivileges": [
    {
      "serviceId": string,
      "privilegeName": string
    }
  ],
  "isSystemRole": boolean,
  "isSuperAdminRole": boolean,
  "kind": string,
  "etag": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>roleId</code></td><td><p><code>string (int64 format)</code></p><p>ID of the role.</p></td></tr><tr><td><code>roleName</code></td><td><p><code>string</code></p><p>Name of the role.</p></td></tr><tr><td><code>roleDescription</code></td><td><p><code>string</code></p><p>A short description of the role.</p></td></tr><tr><td><code>rolePrivileges[]</code></td><td><p><code>object</code></p><p>The set of privileges that are granted to this role.</p></td></tr><tr><td><code>rolePrivileges[].serviceId</code></td><td><p><code>string</code></p><p>The obfuscated ID of the service this privilege is for. This value is returned with <a href="https://developers.google.com/workspace/admin/directory/v1/reference/privileges/list"><code>Privileges.list()</code></a>.</p></td></tr><tr><td><code>rolePrivileges[].privilegeName</code></td><td><p><code>string</code></p><p>The name of the privilege.</p></td></tr><tr><td><code>isSystemRole</code></td><td><p><code>boolean</code></p><p>Returns <code>true</code> if this is a pre-defined system role.</p></td></tr><tr><td><code>isSuperAdminRole</code></td><td><p><code>boolean</code></p><p>Returns <code>true</code> if the role is a super admin role.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. This is always <code>admin#directory#role</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes a role.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a role.</td></tr><tr><td><h3>insert</h3></td><td>Creates a role.</td></tr><tr><td><h3>list</h3></td><td>Retrieves a paginated list of all the roles in a domain.</td></tr><tr><td><h3>patch</h3></td><td>Patches a role.</td></tr><tr><td><h3>update</h3></td><td>Updates a role.</td></tr></tbody></table>
