---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.watches/list
root: workspace
fetched_at: 2026-04-23T15:28:46.048Z
---

# Method: forms.watches.list

Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.

### HTTP request

`GET https://forms.googleapis.com/v1/forms/{formId}/watches`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>formId</code></td><td><p><code>string</code></p><p>Required. ID of the Form whose watches to list.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The response of a ListWatchesRequest.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "watches": [
    {
      
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>watches[]</code></td><td><p>The returned watches.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.readonly`
- `           https://www.googleapis.com/auth/forms.body`
- `           https://www.googleapis.com/auth/forms.body.readonly`
- `           https://www.googleapis.com/auth/forms.responses.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
