---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/orgunits
root: workspace
fetched_at: 2026-04-23T15:23:39.329Z
---

# REST Resource: orgunits

## Resource: OrgUnit

Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](../../../v1/guides/manage-org-units.html.md). The customer's organizational unit hierarchy is limited to 35 levels of depth.

JSON representation

```
{
  "kind": string,
  "name": string,
  "description": string,
  "etag": string,
  "blockInheritance": boolean,
  "orgUnitId": string,
  "orgUnitPath": string,
  "parentOrgUnitId": string,
  "parentOrgUnitPath": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. For Orgunits resources, the value is <code>admin#directory#orgUnit</code>.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>Description of the organizational unit.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>blockInheritance<br><b>(deprecated)</b></code></td><td><p><code>boolean</code></p><p>This field is deprecated and setting its value has no effect.</p></td></tr><tr><td><code>orgUnitId</code></td><td><p><code>string</code></p><p>The unique ID of the organizational unit.</p></td></tr><tr><td><code>orgUnitPath</code></td><td><p><code>string</code></p><p>The full path to the organizational unit. The <code>orgUnitPath</code> is a derived property. When listed, it is derived from <code>parentOrgunitPath</code> and organizational unit's <code>name</code>. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an <code>orgUnitPath</code>, either update the name of the organization or the <code>parentOrgunitPath</code>.<br>A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the <a href="https://support.google.com/a/answer/4352075">administration help center</a>. For more information about moving a user to a different organization, see <a href="https://developers.google.com/workspace/admin/directory/v1/guides/manage-users.html#update_user">orgunits.update a user</a>.</p></td></tr><tr><td><code>parentOrgUnitId</code></td><td><p><code>string</code></p><p>The unique ID of the parent organizational unit. Required, unless <code>parentOrgUnitPath</code> is set.</p></td></tr><tr><td><code>parentOrgUnitPath</code></td><td><p><code>string</code></p><p>The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless <code>parentOrgUnitId</code> is set.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Removes an organizational unit.</td></tr><tr><td><h3>get</h3></td><td>Retrieves an organizational unit.</td></tr><tr><td><h3>insert</h3></td><td>Adds an organizational unit.</td></tr><tr><td><h3>list</h3></td><td>Retrieves a list of all organizational units for an account.</td></tr><tr><td><h3>patch</h3></td><td>Updates an organizational unit.</td></tr><tr><td><h3>update</h3></td><td>Updates an organizational unit.</td></tr></tbody></table>
