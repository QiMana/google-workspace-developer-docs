---
source: https://developers.google.com/workspace/admin/reseller/reference/rest/v1/resellernotify/getwatchdetails
root: workspace
fetched_at: 2026-04-23T15:24:40.562Z
---

# Method: resellernotify.getwatchdetails

Returns all the details of the watch corresponding to the reseller.

### HTTP request

`GET https://reseller.googleapis.com/apps/reseller/v1/resellernotify/getwatchdetails`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body must be empty.

### Response body

JSON template for resellernotify getwatchdetails response.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "topicName": string,
  "serviceAccountEmailAddresses": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>topicName</code></td><td><p><code>string</code></p><p>Topic name of the PubSub</p></td></tr><tr><td><code>serviceAccountEmailAddresses[]</code></td><td><p><code>string</code></p><p>List of registered service accounts.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/apps.order`
- `           https://www.googleapis.com/auth/apps.order.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
