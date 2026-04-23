---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2/ListLabelLocksResponse
root: workspace
fetched_at: 2026-04-23T15:28:08.614Z
---

# ListLabelLocksResponse

The response to a `ListLabelLocksRequest`.

JSON representation

```
{
  "labelLocks": [
    {
      object (LabelLock)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labelLocks[]</code></td><td><p><code>object (<code>LabelLock</code>)</code></p><p>Label locks.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The token of the next page in the response.</p></td></tr></tbody></table>

## LabelLock

A lock that can be applied to a label, field, or choice.

JSON representation

```
{
  "name": string,
  "fieldId": string,
  "choiceId": string,
  "createTime": string,
  "creator": {
    object (UserInfo)
  },
  "deleteTime": string,
  "capabilities": {
    object (Capabilities)
  },
  "state": enum (State)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. Resource name of this label lock.</p></td></tr><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>The ID of the field that should be locked. Empty if the whole label should be locked.</p></td></tr><tr><td><code>choiceId</code></td><td><p><code>string</code></p><p>The ID of the selection field choice that should be locked. If present, <code>fieldId</code> must also be present.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this label lock was created.</p></td></tr><tr><td><code>creator</code></td><td><p><code>object (<code>UserInfo</code>)</code></p><p>Output only. The user whose credentials were used to create the label lock. Not present if no user was responsible for creating the label lock.</p></td></tr><tr><td><code>deleteTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. A timestamp indicating when this label lock was scheduled for deletion. Present only if this label lock is in the <code>DELETING</code> state.</p></td></tr><tr><td><code>capabilities</code></td><td><p><code>object (<code>Capabilities</code>)</code></p><p>Output only. The user's capabilities on this label lock.</p></td></tr><tr><td><code>state</code></td><td><p><code>enum (<code>State</code>)</code></p><p>Output only. This label lock's state.</p></td></tr></tbody></table>

## Capabilities

A description of a user's capabilities on a label lock.

JSON representation

```
{
  "canViewPolicy": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>canViewPolicy</code></td><td><p><code>boolean</code></p><p>True if the user is authorized to view the policy.</p></td></tr></tbody></table>

## State

A description of a label lock's state.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATE_UNSPECIFIED</code></td><td>Unknown state.</td></tr><tr><td><code>ACTIVE</code></td><td>The label lock is active and is being enforced by the server.</td></tr><tr><td><code>DELETING</code></td><td>The label lock is being deleted. The label lock will continue to be enforced by the server until it has been fully removed.</td></tr></tbody></table>
