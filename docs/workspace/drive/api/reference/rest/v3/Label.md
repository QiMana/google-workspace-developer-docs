---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/Label
root: workspace
fetched_at: 2026-04-23T15:27:58.591Z
---

# Label

Representation of label and label fields.

JSON representation

```
{
  "id": string,
  "revisionId": string,
  "kind": string,
  "fields": {
    string: {
      object (Field)
    },
    ...
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The ID of the label.</p></td></tr><tr><td><code>revisionId</code></td><td><p><code>string</code></p><p>The revision ID of the label.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always drive#label</p></td></tr><tr><td><code>fields</code></td><td><p><code>map (key: string, value: object (<code>Field</code>))</code></p><p>A map of the fields on the label, keyed by the field's ID.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr></tbody></table>

## Field

Representation of field, which is a typed key-value pair.

JSON representation

```
{
  "kind": string,
  "id": string,
  "valueType": string,
  "dateString": [
    string
  ],
  "integer": [
    string
  ],
  "selection": [
    string
  ],
  "text": [
    string
  ],
  "user": [
    {
      object (User)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always drive#labelField.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The identifier of this label field.</p></td></tr><tr><td><code>valueType</code></td><td><p><code>string</code></p><p>The field type. While new values may be supported in the future, the following are currently allowed:</p><ul><li><code>dateString</code></li><li><code>integer</code></li><li><code>selection</code></li><li><code>text</code></li><li><code>user</code></li></ul></td></tr><tr><td><code>dateString[]</code></td><td><p><code>string</code></p><p>Only present if <code>valueType</code> is <code>dateString</code>. RFC 3339 formatted date: YYYY-MM-DD.</p></td></tr><tr><td><code>integer[]</code></td><td><p><code>string (int64 format)</code></p><p>Only present if <code>valueType</code> is <code>integer</code>.</p></td></tr><tr><td><code>selection[]</code></td><td><p><code>string</code></p><p>Only present if <code>valueType</code> is <code>selection</code></p></td></tr><tr><td><code>text[]</code></td><td><p><code>string</code></p><p>Only present if <code>valueType</code> is <code>text</code>.</p></td></tr><tr><td><code>user[]</code></td><td><p><code>object (<code>User</code>)</code></p><p>Only present if <code>valueType</code> is <code>user</code>.</p></td></tr></tbody></table>
