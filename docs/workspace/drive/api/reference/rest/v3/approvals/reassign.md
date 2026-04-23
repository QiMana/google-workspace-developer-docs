---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/approvals/reassign
root: workspace
fetched_at: 2026-04-23T15:27:59.630Z
---

# Method: approvals.reassign

Reassigns the reviewers on an Approval. Adds or replaces reviewers in the `ReviewerResponse` of the Approval.

This can be called by any user with the `writer` permission on the file while the Approval `Status` is `IN_PROGRESS` and the `Response` for the reviewer being reassigned is `NO_RESPONSE`. A user with the `reader` permission can only reassign an approval that's assigned to themselves.

Removing a reviewer isn't allowed.

### HTTP request

`POST https://www.googleapis.com/drive/v3/files/{fileId}/approvals/{approvalId}:reassign`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>Required. The ID of the file the Approval is on.</p></td></tr><tr><td><code>approvalId</code></td><td><p><code>string</code></p><p>Required. The ID of the Approval to reassign.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "addReviewers": [
    {
      object (AddReviewer)
    }
  ],
  "replaceReviewers": [
    {
      object (ReplaceReviewer)
    }
  ],
  "message": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addReviewers[]</code></td><td><p><code>object (<code>AddReviewer</code>)</code></p><p>Optional. The list of reviewers to add.</p></td></tr><tr><td><code>replaceReviewers[]</code></td><td><p><code>object (<code>ReplaceReviewer</code>)</code></p><p>Optional. The list of reviewer replacements.</p></td></tr><tr><td><code>message</code></td><td><p><code>string</code></p><p>Optional. A message to send to the new reviewers. This message will be included in notifications for the action and in the Approval activity log.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## AddReviewer

Representation of a reviewer addition.

JSON representation

```
{
  "addedReviewerEmail": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addedReviewerEmail</code></td><td><p><code>string</code></p><p>Required. The email of the reviewer to add.</p></td></tr></tbody></table>

## ReplaceReviewer

Representation of a reviewer replacement.

JSON representation

```
{
  "addedReviewerEmail": string,
  "removedReviewerEmail": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addedReviewerEmail</code></td><td><p><code>string</code></p><p>Required. The email of the reviewer to add.</p></td></tr><tr><td><code>removedReviewerEmail</code></td><td><p><code>string</code></p><p>Required. The email of the reviewer to remove.</p></td></tr></tbody></table>
