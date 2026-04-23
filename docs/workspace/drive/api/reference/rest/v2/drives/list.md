---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/drives/list
root: workspace
fetched_at: 2026-04-23T15:27:52.588Z
---

# Method: drives.list

Lists the user's shared drives.

This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](../../../../guides/search-shareddrives.md) guide.

### HTTP request

`GET https://www.googleapis.com/drive/v2/drives`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Maximum number of shared drives to return per page.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>Page token for shared drives.</p></td></tr><tr><td><code>q</code></td><td><p><code>string</code></p><p>Query string for searching shared drives.</p></td></tr><tr><td><code>useDomainAdminAccess</code></td><td><p><code>boolean</code></p><p>Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A list of shared drives.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "items": [
    {
      
    }
  ],
  "nextPageToken": string,
  "kind": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>items[]</code></td><td><p>The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always <code>drive#driveList</code></p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
