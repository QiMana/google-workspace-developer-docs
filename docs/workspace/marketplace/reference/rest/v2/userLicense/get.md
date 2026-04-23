---
source: https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense/get
root: workspace
fetched_at: 2026-04-23T15:30:10.560Z
---

# Method: userLicense.get

## Page Summary

- Retrieves a user's licensing status for a specific application to determine their usage permission.
- Utilizes a `GET` request with the application ID and user ID specified in the URL path.
- Requires authorization with the `https://www.googleapis.com/auth/appsmarketplace.license` scope.
- Returns a `UserLicense` object containing the user's license information upon successful request.

Gets the user's licensing status to determine if they have permission to use a given app. For more information, see [Getting app installation and licensing details](../../../../example-calls-marketplace-api.md).

### HTTP request

`GET https://appsmarket.googleapis.com/appsmarket/v2/userLicense/{applicationId}/{userId}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>applicationId</code></td><td><p><code>string</code></p><p>The ID of the application.</p></td></tr><tr><td><code>userId</code></td><td><p><code>string</code></p><p>The ID of the user.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/appsmarketplace.license`

For more information, see the [Authorization guide](../../../../../guides/configure-oauth-consent.md).
