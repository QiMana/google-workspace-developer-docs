---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/roleAssignments
root: workspace
fetched_at: 2026-04-23T15:23:42.865Z
---

# REST Resource: roleAssignments

## Resource: RoleAssignment

Defines an assignment of a role.

JSON representation

```
{
  "roleAssignmentId": string,
  "roleId": string,
  "kind": string,
  "etag": string,
  "assignedTo": string,
  "assigneeType": enum (AssigneeType),
  "scopeType": string,
  "orgUnitId": string,
  "condition": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>roleAssignmentId</code></td><td><p><code>string (int64 format)</code></p><p>ID of this roleAssignment.</p></td></tr><tr><td><code>roleId</code></td><td><p><code>string (int64 format)</code></p><p>The ID of the role that is assigned.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the API resource. This is always <code>admin#directory#roleAssignment</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>assignedTo</code></td><td><p><code>string</code></p><p>The unique ID of the entity this role is assigned to—either the <code>userId</code> of a user, the <code>groupId</code> of a group, or the <code>uniqueId</code> of a service account as defined in <a href="https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts">Identity and Access Management (IAM)</a>.</p></td></tr><tr><td><code>assigneeType</code></td><td><p><code>enum (<code>AssigneeType</code>)</code></p><p>Output only. The type of the assignee (<code>USER</code> or <code>GROUP</code>).</p></td></tr><tr><td><code>scopeType</code></td><td><p><code>string</code></p><p>The scope in which this role is assigned.</p><p>Acceptable values are:</p><ul><li><code>CUSTOMER</code></li><li><code>ORG_UNIT</code></li></ul></td></tr><tr><td><code>orgUnitId</code></td><td><p><code>string</code></p><p>If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.</p></td></tr><tr><td><code>condition</code></td><td><p><code>string</code></p><p>Optional. The condition associated with this role assignment.</p><p>Note: Feature is available to Enterprise Standard, Enterprise Plus, Google Workspace for Education Plus and Cloud Identity Premium customers.</p><p>A <code>RoleAssignment</code> with the <code>condition</code> field set will only take effect when the resource being accessed meets the condition. If <code>condition</code> is empty, the role (<code>roleId</code>) is applied to the actor (<code>assignedTo</code>) at the scope (<code>scopeType</code>) unconditionally.</p><p>Currently, the following conditions are supported:</p><ul><li><p>To make the <code>RoleAssignment</code> only applicable to <a href="https://cloud.google.com/identity/docs/groups#group_types">Security Groups</a>: <code>api.getAttribute('cloudidentity.googleapis.com/groups.labels',
                  []).hasAny(['groups.security']) && resource.type ==
                  'cloudidentity.googleapis.com/Group'</code></p></li><li><p>To make the <code>RoleAssignment</code> not applicable to <a href="https://cloud.google.com/identity/docs/groups#group_types">Security Groups</a>: <code>!api.getAttribute('cloudidentity.googleapis.com/groups.labels',
                  []).hasAny(['groups.security']) && resource.type ==
                  'cloudidentity.googleapis.com/Group'</code></p></li></ul><p>Currently, the condition strings have to be verbatim and they only work with the following <a href="https://support.google.com/a/answer/2405986">pre-built administrator roles</a>:</p><ul><li>Groups Editor</li><li>Groups Reader</li></ul><p>The condition follows <a href="https://cloud.google.com/iam/docs/conditions-overview">Cloud IAM condition syntax</a>.</p><ul><li>To make the <code>RoleAssignment</code> not applicable to <a href="https://cloud.google.com/identity/docs/groups#group_types">Locked Groups</a>: <code>!api.getAttribute('cloudidentity.googleapis.com/groups.labels',
                  []).hasAny(['groups.locked']) && resource.type ==
                  'cloudidentity.googleapis.com/Group'</code></li></ul><p>This condition can also be used in conjunction with a Security-related condition.</p></td></tr></tbody></table>

## AssigneeType

The type of identity to which a role is assigned.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>USER</code></td><td>An individual user within the domain.</td></tr><tr><td><code>GROUP</code></td><td>A group within the domain.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes a role assignment.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a role assignment.</td></tr><tr><td><h3>insert</h3></td><td>Creates a role assignment.</td></tr><tr><td><h3>list</h3></td><td>Retrieves a paginated list of all roleAssignments.</td></tr></tbody></table>
