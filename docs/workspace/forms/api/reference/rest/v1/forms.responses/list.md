---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.responses/list
root: workspace
fetched_at: 2026-04-23T15:28:43.395Z
---

# Method: forms.responses.list

### HTTP request

`GET https://forms.googleapis.com/v1/forms/{formId}/responses`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>formId</code></td><td><p><code>string</code></p><p>Required. ID of the Form whose responses to list.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Which form responses to return. Currently, the only supported filters are:</p><p><code>timestamp > <i>N</i></code></p><p>which means to get all form responses submitted after (but not at) timestamp <i>N</i>. *</p><p><code>timestamp >= <i>N</i></code></p><p>which means to get all form responses submitted at and after timestamp <i>N</i>.</p><p>For both supported filters, timestamp must be formatted in RFC3339 UTC "Zulu" format. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".</p></td></tr><tr><td><code>pageSize</code></td><td><p><code>integer</code></p><p>The maximum number of responses to return. The service may return fewer than this value. If unspecified or zero, at most 5000 responses are returned.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>A page token returned by a previous list response. If this field is set, the form and the values of the filter must be the same as for the original request.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Response to a ListFormResponsesRequest.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "responses": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>responses[]</code></td><td><p>The returned form responses. Note: The <code>formId</code> field is not returned in the <code>FormResponse</code> object for list requests.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>If set, there are more responses. To get the next page of responses, provide this as <code>pageToken</code> in a future request.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/forms.responses.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
