---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/comments/get
root: workspace
fetched_at: 2026-04-23T15:28:01.712Z
---

# Method: comments.get

## Method: comments.get

Gets a comment by ID. For more information, see [Manage comments and replies](../../../../guides/manage-comments.md).

Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](../../../../guides/fields-parameter.md).

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file.</p></td></tr><tr><td><code>commentId</code></td><td><p><code>string</code></p><p>The ID of the comment.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>includeDeleted</code></td><td><p><code>boolean</code></p><p>Whether to return deleted comments. Deleted comments will not include their original content.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.meet.readonly`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
