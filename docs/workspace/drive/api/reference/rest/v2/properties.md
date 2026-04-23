---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/properties
root: workspace
fetched_at: 2026-04-23T15:27:57.081Z
---

# REST Resource: properties

## Resource: Property

A key-value pair attached to a file that is either public or private to an application.

The following limits apply to file properties:

- Maximum of 100 properties total per file
- Maximum of 30 private properties per app
- Maximum of 30 public properties
- Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property

Some resource methods (such as `properties.update`) require a `propertyKey`. Use the `properties.list` method to retrieve the key for a property.

JSON representation

```
{
  "selfLink": string,
  "value": string,
  "visibility": string,
  "kind": string,
  "etag": string,
  "key": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>selfLink</code></td><td><p><code>string</code></p><p>Output only. The link back to this property.</p></td></tr><tr><td><code>value</code></td><td><p><code>string</code></p><p>The value of this property.</p></td></tr><tr><td><code>visibility</code></td><td><p><code>string</code></p><p>The visibility of this property. Allowed values are PRIVATE (default) and PUBLIC. Private properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. This is always <code>drive#property</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>Output only. ETag of the property.</p></td></tr><tr><td><code>key</code></td><td><p><code>string</code></p><p>The key of this property.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes a property.</td></tr><tr><td><h3>get</h3></td><td>Gets a property by its key.</td></tr><tr><td><h3>insert</h3></td><td>Adds a property to a file, or updates it if it already exists.</td></tr><tr><td><h3>list</h3></td><td>Lists a file's properties.</td></tr><tr><td><h3>patch</h3></td><td>Updates a property.</td></tr><tr><td><h3>update</h3></td><td>Updates a property.</td></tr></tbody></table>
