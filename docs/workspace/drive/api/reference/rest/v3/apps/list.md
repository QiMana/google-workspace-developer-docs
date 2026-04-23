---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/apps/list
root: workspace
fetched_at: 2026-04-23T15:28:00.648Z
---

# Method: apps.list

Lists a user's installed apps. For more information, see [Return user info](../../../../guides/user-info.md).

### HTTP request

`GET https://www.googleapis.com/drive/v3/apps`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>appFilterExtensions</code></td><td><p><code>string</code></p><p>A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given file extensions are included in the response. If <code>appFilterMimeTypes</code> are provided as well, the result is a union of the two resulting app lists.</p></td></tr><tr><td><code>appFilterMimeTypes</code></td><td><p><code>string</code></p><p>A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given MIME types will be included in the response. If <code>appFilterExtensions</code> are provided as well, the result is a union of the two resulting app lists.</p></td></tr><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (<a href="http://www.unicode.org/reports/tr35/)">http://www.unicode.org/reports/tr35/)</a>.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

A list of third-party applications which the user has installed or given access to Google Drive.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "defaultAppIds": [
    string
  ],
  "items": [
    {
      
    }
  ],
  "kind": string,
  "selfLink": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>defaultAppIds[]</code></td><td><p><code>string</code></p><p>The list of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).</p></td></tr><tr><td><code>items[]</code></td><td><p>The list of apps.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. Identifies what kind of resource this is. Value: the fixed string "drive#appList".</p></td></tr><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>A link back to this list.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/drive.apps.readonly`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).
