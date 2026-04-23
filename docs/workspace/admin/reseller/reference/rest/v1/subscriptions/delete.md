---
source: https://developers.google.com/workspace/admin/reseller/reference/rest/v1/subscriptions/delete
root: workspace
fetched_at: 2026-04-23T15:24:40.340Z
---

# Method: subscriptions.delete

Cancels, suspends, or transfers a subscription to direct.

### HTTP request

`DELETE https://reseller.googleapis.com/apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.</p></td></tr><tr><td><code>subscriptionId</code></td><td><p><code>string</code></p><p>This is a required property. The <code>subscriptionId</code> is the subscription identifier and is unique for each customer. Since a <code>subscriptionId</code> changes when a subscription is updated, we recommend to not use this ID as a key for persistent data. And the <code>subscriptionId</code> can be found using the <a href="https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions">retrieve all reseller subscriptions</a> method.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>deletionType</code></td><td><p><code>enum (<code>DeletionType</code>)</code></p><p>The <code>deletionType</code> query string enables the cancellation, downgrade, or suspension of a subscription.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page.

This message can be used both in streaming and non-streaming API methods in the request as well as the response.

It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body.

Example:

```
message GetResourceRequest {
  // A unique request id.
  string requestId = 1;

  // The raw HTTP body is bound to this field.
  google.api.HttpBody http_body = 2;

}

service ResourceService {
  rpc GetResource(GetResourceRequest)
    returns (google.api.HttpBody);
  rpc UpdateResource(google.api.HttpBody)
    returns (google.protobuf.Empty);

}
```

Example with streaming methods:

```
service CaldavService {
  rpc GetCalendar(stream google.api.HttpBody)
    returns (stream google.api.HttpBody);
  rpc UpdateCalendar(stream google.api.HttpBody)
    returns (stream google.api.HttpBody);

}
```

Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.

If successful, the response is a generic HTTP response whose format is defined by the method.

JSON representation

```
{
  "contentType": string,
  "data": string,
  "extensions": [
    {
      "@type": string,
      field1: ...,
      ...
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>contentType</code></td><td><p><code>string</code></p><p>The HTTP Content-Type header value specifying the content type of the body.</p></td></tr><tr><td><code>data</code></td><td><p><code>string (bytes format)</code></p><p>The HTTP request/response body as raw binary.</p><p>A base64-encoded string.</p></td></tr><tr><td><code>extensions[]</code></td><td><p><code>object</code></p><p>Application specific response metadata. Must be set in the first response for streaming APIs.</p><p>An object containing fields of an arbitrary type. An additional field <code>"@type"</code> contains a URI identifying the type. Example: <code>{ "id": 1234, "@type": "types.example.com/standard/id" }</code>.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/apps.order`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## DeletionType

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>deletion_type_undefined</code></td><td></td></tr><tr><td><code>cancel</code></td><td>Cancels the subscription immediately. This does not apply to a G Suite subscription.</td></tr><tr><td><code>transfer_to_direct</code></td><td><p>Transfers a subscription directly to Google. The customer is immediately transferred to a direct billing relationship with Google and is given a short amount of time with no service interruption. The customer can then choose to set up billing directly with Google by using a credit card, or they can transfer to another reseller.</p></td></tr></tbody></table>
