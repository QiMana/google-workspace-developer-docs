---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/chromeosdevices/list
root: workspace
fetched_at: 2026-04-23T15:23:35.113Z
---

# Method: chromeosdevices.list

Retrieves a paginated list of Chrome OS devices within an account.

### HTTP request

`GET https://admin.googleapis.com/admin/directory/v1/customer/{customerId}/devices/chromeos`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the <code>my_customer</code> alias to represent your account's <code>customerId</code>. The <code>customerId</code> is also returned as part of the <a href="https://developers.google.com/workspace/admin/directory/v1/reference/users">Users resource</a>.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of results to return. Value should not exceed 300.</p></td></tr><tr><td><code>orderBy</code></td><td><p><code>enum (<code>OrderBy</code>)</code></p><p>Device property to use for sorting results.</p></td></tr><tr><td><code>orgUnitPath</code></td><td><p><code>string</code></p><p>The full path of the organizational unit (minus the leading <code>/</code>) or its unique ID.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The <code>pageToken</code> query parameter is used to request the next page of query results. The follow-on request's <code>pageToken</code> query parameter is the <code>nextPageToken</code> from your previous response.</p></td></tr><tr><td><code>projection</code></td><td><p><code>enum (<code>Projection</code>)</code></p><p>Determines whether the response contains the full list of properties or only a subset.</p></td></tr><tr><td><code>query</code></td><td><p><code>string</code></p><p>Search string in the format given at <a href="https://developers.google.com/workspace/admin/directory/v1/list-query-operators">chromeosdevices.list query operators</a>.</p></td></tr><tr><td><code>sortOrder</code></td><td><p><code>enum (<code>SortOrder</code>)</code></p><p>Whether to return results in ascending or descending order. Must be used with the <code>orderBy</code> parameter.</p></td></tr><tr><td><code>includeChildOrgunits</code></td><td><p><code>boolean</code></p><p>Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "chromeosdevices": [
    {
      
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Kind of resource this is.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>chromeosdevices[]</code></td><td><p>A list of Chrome OS Device objects.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token used to access the next page of this result. To access the next page, use this token's value in the <code>pageToken</code> query string of this request.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/admin.directory.device.chromeos`
- `           https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## OrderBy

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ANNOTATED_LOCATION</code></td><td>Chrome device location as annotated by the administrator.</td></tr><tr><td><code>ANNOTATED_USER</code></td><td>Chromebook user as annotated by administrator.</td></tr><tr><td><code>LAST_SYNC</code></td><td>The date and time the Chrome device was last synchronized with the policy settings in the Admin console.</td></tr><tr><td><code>NOTES</code></td><td>Chrome device notes as annotated by the administrator.</td></tr><tr><td><code>SERIAL_NUMBER</code></td><td>The Chrome device serial number entered when the device was enabled.</td></tr><tr><td><code>STATUS</code></td><td>Chrome device status. For more information, see the <a <a href="https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices.html">chromeosdevices</a>.</td></tr></tbody></table>

## Projection

The type of projection to show for the devices.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>BASIC</code></td><td>Includes only the basic metadata fields (e.g., deviceId, serialNumber, status, and user)</td></tr><tr><td><code>FULL</code></td><td>Includes all metadata fields</td></tr></tbody></table>

## SortOrder

The sorting order that should be applied to the device list.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ASCENDING</code></td><td>Ascending order.</td></tr><tr><td><code>DESCENDING</code></td><td>Descending order.</td></tr></tbody></table>
