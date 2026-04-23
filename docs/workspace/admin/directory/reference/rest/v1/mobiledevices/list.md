---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/mobiledevices/list
root: workspace
fetched_at: 2026-04-23T15:23:39.930Z
---

# Method: mobiledevices.list

Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](../../../../v1/guides/troubleshoot-error-codes.md).

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/mobile`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users resource</a>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of results to return. Max allowed value is 100.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>enum (<code>OrderBy</code>)</code></p><p>Device property to use for sorting results.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Token to specify next page in the list</p></td></tr><tr><td><code>projection</code></td><td><p><code>enum (<code>Projection</code>)</code></p><p>Restrict information returned to a set of selected fields.</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>Search string in the format given at <a href="https://developers.google.com/workspace/admin/directory/v1/search-operators">https://developers.google.com/workspace/admin/directory/v1/search-operators</a></p></td></tr><tr><td><code>sortOrder</code></td><td><p><code>enum (<code>SortOrder</code>)</code></p><p>Whether to return results in ascending or descending order. Must be used with the <code>orderBy</code> parameter.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "mobiledevices": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Kind of resource this is.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>mobiledevices[]</code></td><td><p>A list of Mobile Device objects.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token used to access next page of this result.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.device.mobile`
- `           https://www.googleapis.com/auth/admin.directory.device.mobile.action`
- `           https://www.googleapis.com/auth/admin.directory.device.mobile.readonly`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## OrderBy

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>DEVICE_ID</code></td><td>The serial number for a Google Sync mobile device. For Android devices, this is a software generated unique identifier.</td></tr><tr><td><code>EMAIL</code></td><td>The device owner's email address.</td></tr><tr><td><code>LAST_SYNC</code></td><td>Last policy settings sync date time of the device.</td></tr><tr><td><code>MODEL</code></td><td>The mobile device's model.</td></tr><tr><td><code>NAME</code></td><td>The device owner's user name.</td></tr><tr><td><code>OS</code></td><td>The device's operating system.</td></tr><tr><td><code>STATUS</code></td><td>The device status.</td></tr><tr><td><code>TYPE</code></td><td>Type of the device.</td></tr></tbody></table>

## Projection

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASIC</code></td><td>Includes only the basic metadata fields (e.g., deviceId, model, status, type, and status)</td></tr><tr><td><code>FULL</code></td><td>Includes all metadata fields</td></tr></tbody></table>

## SortOrder

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ASCENDING</code></td><td>Ascending order.</td></tr><tr><td><code>DESCENDING</code></td><td>Descending order.</td></tr></tbody></table>
