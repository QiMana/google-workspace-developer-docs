---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/files/modifyLabels
root: workspace
fetched_at: 2026-04-23T15:28:04.173Z
---

# Method: files.modifyLabels

Modifies the set of labels applied to a file. For more information, see [Set a label field on a file](https://developers.google.com/workspace/drive/api/guides/set-label).

Returns a list of the labels that were added or modified.

### HTTP request

`POST https://www.googleapis.com/drive/v3/files/{fileId}/modifyLabels`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>fileId</code></td><td><p><code>string</code></p><p>The ID of the file to which the labels belong.</p></td></tr></tbody></table>

### Request body

The request body contains an instance of `ModifyLabelsRequest`.

### Response body

Response to a `files.modifyLabels` request. This contains only those labels which were added or updated by the request.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "modifiedLabels": [
    {
      object (Label)
    }
  ],
  "kind": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>modifiedLabels[]</code></td><td><p><code>object (<code>Label</code>)</code></p><p>The list of labels which were added or updated by the request.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always <code>"drive#modifyLabelsResponse"</code>.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/drive.metadata`

Some scopes are restricted and require a security assessment for your app to use them. For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## ModifyLabelsRequest

A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail atomically.

JSON representation

```
{
  "labelModifications": [
    {
      object (LabelModification)
    }
  ],
  "kind": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>labelModifications[]</code></td><td><p><code>object (<code>LabelModification</code>)</code></p><p>The list of modifications to apply to the labels on the file.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always <code>"drive#modifyLabelsRequest"</code>.</p></td></tr></tbody></table>

## LabelModification

A modification to a label on a file. A `LabelModification` can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.

JSON representation

```
{
  "fieldModifications": [
    {
      object (FieldModification)
    }
  ],
  "labelId": string,
  "removeLabel": boolean,
  "kind": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fieldModifications[]</code></td><td><p><code>object (<code>FieldModification</code>)</code></p><p>The list of modifications to this label's fields.</p></td></tr><tr><td><code>labelId</code></td><td><p><code>string</code></p><p>The ID of the label to modify.</p></td></tr><tr><td><code>removeLabel</code></td><td><p><code>boolean</code></p><p>If true, the label will be removed from the file.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always <code>"drive#labelModification"</code>.</p></td></tr></tbody></table>

## FieldModification

A modification to a label's field.

JSON representation

```
{
  "setDateValues": [
    string
  ],
  "setTextValues": [
    string
  ],
  "setSelectionValues": [
    string
  ],
  "setIntegerValues": [
    string
  ],
  "setUserValues": [
    string
  ],
  "fieldId": string,
  "kind": string,
  "unsetValues": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>setDateValues[]</code></td><td><p><code>string</code></p><p>Replaces the value of a <code>date</code> field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD.</p></td></tr><tr><td><code>setTextValues[]</code></td><td><p><code>string</code></p><p>Sets the value of a <code>text</code> field.</p></td></tr><tr><td><code>setSelectionValues[]</code></td><td><p><code>string</code></p><p>Replaces a <code>selection</code> field with these new values.</p></td></tr><tr><td><code>setIntegerValues[]</code></td><td><p><code>string (int64 format)</code></p><p>Replaces the value of an <code>integer</code> field with these new values.</p></td></tr><tr><td><code>setUserValues[]</code></td><td><p><code>string</code></p><p>Replaces a <code>user</code> field with these new values. The values must be a valid email addresses.</p></td></tr><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>The ID of the field to be modified.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>This is always <code>"drive#labelFieldModification"</code>.</p></td></tr><tr><td><code>unsetValues</code></td><td><p><code>boolean</code></p><p>Unsets the values for this field.</p></td></tr></tbody></table>
