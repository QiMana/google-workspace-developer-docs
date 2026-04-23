---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/approvals
root: workspace
fetched_at: 2026-04-23T15:27:59.239Z
---

# REST Resource: approvals

## Resource: Approval

Metadata for an approval. An approval is a review/approve process for a Drive item.

JSON representation

```
{
  "kind": string,
  "approvalId": string,
  "targetFileId": string,
  "createTime": string,
  "modifyTime": string,
  "completeTime": string,
  "dueTime": string,
  "status": enum (Status),
  "initiator": {
    object (User)
  },
  "reviewerResponses": [
    {
      object (ReviewerResponse)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always drive#approval.</p></td></tr><tr><td><code>approvalId</code></td><td><p><code>string</code></p><p>The Approval ID.</p></td></tr><tr><td><code>targetFileId</code></td><td><p><code>string</code></p><p>Target file id of the approval.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time the approval was created.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>modifyTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The most recent time the approval was modified.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>completeTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time the approval was completed.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>dueTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The time that the approval is due.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>status</code></td><td><p><code>enum (<code>Status</code>)</code></p><p>Output only. The status of the approval at the time this resource was requested.</p></td></tr><tr><td><code>initiator</code></td><td><p><code>object (<code>User</code>)</code></p><p>The user that requested the Approval.</p></td></tr><tr><td><code>reviewerResponses[]</code></td><td><p><code>object (<code>ReviewerResponse</code>)</code></p><p>The responses made on the Approval by reviewers.</p></td></tr></tbody></table>

## Status

Possible statuses of an Approval.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STATUS_UNSPECIFIED</code></td><td>Approval status has not been set or was set to an invalid value.</td></tr><tr><td><code>IN_PROGRESS</code></td><td>The approval process has started and not finished.</td></tr><tr><td><code>APPROVED</code></td><td>The approval process is finished and the target was approved.</td></tr><tr><td><code>CANCELLED</code></td><td>The approval process was cancelled before it finished.</td></tr><tr><td><code>DECLINED</code></td><td>The approval process is finished and the target was declined.</td></tr></tbody></table>

## ReviewerResponse

A response on an Approval made by a specific Reviewer.

JSON representation

```
{
  "kind": string,
  "reviewer": {
    object (User)
  },
  "response": enum (Response)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always drive#reviewerResponse.</p></td></tr><tr><td><code>reviewer</code></td><td><p><code>object (<code>User</code>)</code></p><p>The user that is responsible for this response.</p></td></tr><tr><td><code>response</code></td><td><p><code>enum (<code>Response</code>)</code></p><p>A Reviewer’s Response for the Approval.</p></td></tr></tbody></table>

## Response

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>RESPONSE_UNSPECIFIED</code></td><td>Response was set to an unrecognized value.</td></tr><tr><td><code>NO_RESPONSE</code></td><td>The reviewer has not yet responded</td></tr><tr><td><code>APPROVED</code></td><td>The Reviewer has approved the item.</td></tr><tr><td><code>DECLINED</code></td><td>The Reviewer has declined the item.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>approve</h3></td><td>Approves an Approval.</td></tr><tr><td><h3>cancel</h3></td><td>Cancels an Approval.</td></tr><tr><td></td><td>Comments on an Approval.</td></tr><tr><td><h3>decline</h3></td><td>Declines an Approval.</td></tr><tr><td><h3>get</h3></td><td>Gets an Approval by ID.</td></tr><tr><td><h3>list</h3></td><td>Lists the Approvals on a file.</td></tr><tr><td><h3>reassign</h3></td><td>Reassigns the reviewers on an Approval.</td></tr><tr><td><h3>start</h3></td><td>Starts an Approval on a file.</td></tr></tbody></table>
