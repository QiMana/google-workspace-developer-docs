---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/accessproposals
root: workspace
fetched_at: 2026-04-23T15:27:59.504Z
---

# REST Resource: accessproposals

## Resource: AccessProposal

Manage outstanding access proposals on a file.

JSON representation

```
{
  "fileId": string,
  "proposalId": string,
  "requesterEmailAddress": string,
  "recipientEmailAddress": string,
  "rolesAndViews": [
    {
      object (RoleAndView)
    }
  ],
  "requestMessage": string,
  "createTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The file ID that the proposal for access is on.</p></td></tr><tr><td><code>proposalId</code></td><td><p><code>string</code></p><p>The ID of the access proposal.</p></td></tr><tr><td><code>requesterEmailAddress</code></td><td><p><code>string</code></p><p>The email address of the requesting user.</p></td></tr><tr><td><code>recipientEmailAddress</code></td><td><p><code>string</code></p><p>The email address of the user that will receive permissions, if accepted.</p></td></tr><tr><td><code>rolesAndViews[]</code></td><td><p><code>object (<code>RoleAndView</code>)</code></p><p>A wrapper for the role and view of an access proposal. For more information, see <a href="https://developers.google.com/workspace/drive/api/guides/ref-roles">Roles and permissions</a>.</p></td></tr><tr><td><code>requestMessage</code></td><td><p><code>string</code></p><p>The message that the requester added to the proposal.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The creation time.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr></tbody></table>

## RoleAndView

A wrapper for the role and view of an access proposal. For more information, see [Roles and permissions](../../../guides/ref-roles.md).

JSON representation

```
{
  "role": string,
  "view": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>role</code></td><td><p><code>string</code></p><p>The role that was proposed by the requester. The supported values are:</p><ul><li><code>writer</code></li><li><code>commenter</code></li><li><code>reader</code></li></ul></td></tr><tr><td><code>view</code></td><td><p><code>string</code></p><p>Indicates the view for this access proposal. Only populated for proposals that belong to a view. Only <code>published</code> is supported.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Retrieves an access proposal by ID.</td></tr><tr><td><h3>list</h3></td><td>List the access proposals on a file.</td></tr><tr><td><h3>resolve</h3></td><td>Approves or denies an access proposal.</td></tr></tbody></table>
