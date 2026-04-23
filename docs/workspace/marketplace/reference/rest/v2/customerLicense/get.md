---
source: https://developers.google.com/workspace/marketplace/reference/rest/v2/customerLicense/get
root: workspace
fetched_at: 2026-04-23T15:30:10.775Z
---

# Method: customerLicense.get

## Page Summary

- Retrieves the license status for a specific customer to check if they have access to a particular application.
- The request is made using an HTTP GET method to a designated URL with parameters for application ID and customer ID.
- The response provides details regarding the customer's license through the `CustomerLicense` object if the request is successful.
- Authorization is needed using the `https://www.googleapis.com/auth/appsmarketplace.license` scope.

Gets the customer's licensing status to determine if they have access to a given app. For more information, see [Getting app installation and licensing details](https://developers.google.com/workspace/marketplace/example-calls-marketplace-api).

### HTTP request

`GET https://appsmarket.googleapis.com/appsmarket/v2/customerLicense/{applicationId}/{customerId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>applicationId</code></td><td><p><code>string</code></p><p>The ID of the application.</p></td></tr><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The ID of the customer.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/appsmarketplace.license`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
