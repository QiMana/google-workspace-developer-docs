---
source: https://developers.google.com/workspace/admin/reseller/reference/rest/v1/subscriptions/list
root: workspace
fetched_at: 2026-04-23T15:24:41.377Z
---

# Method: subscriptions.list

Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions.

Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](https://developers.google.com/workspace/admin/reseller/v1/how-tos/manage_subscriptions).

### HTTP request

`GET https://reseller.googleapis.com/apps/reseller/v1/subscriptions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerAuthToken</code></td><td><p><code>string</code></p><p>The <code>customerAuthToken</code> query string is required when creating a resold account that transfers a direct customer's subscription or transfers another reseller customer's subscription to your reseller management. This is a hexadecimal authentication token needed to complete the subscription transfer. For more information, see the <a href="https://support.google.com/a/bin/answer.py?answer=142336">administrator help center</a>.</p></td></tr><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>This can be either the customer's primary domain name or the customer's unique identifier. If the domain name for a customer changes, the old domain name cannot be used to access the customer, but the customer's unique identifier (as returned by the API) can always be used. We recommend storing the unique identifier in your systems where applicable.</p></td></tr><tr><td><code>customerNamePrefix</code></td><td><p><code>string</code></p><p>When retrieving all of your subscriptions and filtering for specific customers, you can enter a prefix for a customer name. Using an example customer group that includes <code>exam.com</code>, <code>example20.com</code> and <code>example.com</code>:</p><ul><li><code>exa</code> -- Returns all customer names that start with 'exa' which could include <code>exam.com</code>, <code>example20.com</code>, and <code>example.com</code>. A name prefix is similar to using a regular expression's asterisk, exa*.</li><li><code>example</code> -- Returns <code>example20.com</code> and <code>example.com</code>.</li></ul></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer (uint32 format)</code></p><p>When retrieving a large list, the <code>maxResults</code> is the maximum number of results per page. The <code>nextPageToken</code> value takes you to the next page. The default is 20.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify next page in the list</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A subscription manages the relationship of a Google customer's payment plan with a product's SKU, user licenses, 30-day free trial status, and renewal options. A primary role of a reseller is to manage the Google customer's subscriptions.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "subscriptions": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies the resource as a collection of subscriptions. Value: reseller#subscriptions</p></td></tr><tr><td><code>subscriptions[]</code></td><td><p>The subscriptions in this page of results.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/apps.order`
- `           https://www.googleapis.com/auth/apps.order.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
