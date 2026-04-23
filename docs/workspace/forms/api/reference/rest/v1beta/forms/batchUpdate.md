---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1beta/forms/batchUpdate
root: workspace
fetched_at: 2026-04-23T15:28:47.674Z
---

# Method: forms.batchUpdate

Change the form with a batch of updates.

### HTTP request

`POST https://forms.googleapis.com/v1beta/forms/{formId}:batchUpdate`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>formId</code></td><td><p><code>string</code></p><p>Required. The form ID.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "includeFormInResponse": boolean,
  "requests": [
    {
      object (Request)
    }
  ],
  "writeControl": {
    object (WriteControl)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>includeFormInResponse</code></td><td><p><code>boolean</code></p><p>Whether to return an updated version of the model in the response.</p></td></tr><tr><td><code>requests[]</code></td><td><p><code>object (<code>Request</code>)</code></p><p>Required. The update requests of this batch.</p></td></tr><tr><td><code>writeControl</code></td><td><p><code>object (<code>WriteControl</code>)</code></p><p>Provides control over how write requests are executed.</p></td></tr></tbody></table>

### Response body

If successful, the response body contains data with the following structure:

Response to a BatchUpdateFormRequest.

JSON representation

```
{
  "form": {
    object (Form)
  },
  "replies": [
    {
      object (Response)
    }
  ],
  "writeControl": {
    object (WriteControl)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>form</code></td><td><p><code>object (<code>Form</code>)</code></p><p>Based on the bool request field <code>includeFormInResponse</code>, a form with all applied mutations/updates is returned or not. This may be later than the revision ID created by these changes.</p></td></tr><tr><td><code>replies[]</code></td><td><p><code>object (<code>Response</code>)</code></p><p>The reply of the updates. This maps 1:1 with the update requests, although replies to some requests may be empty.</p></td></tr><tr><td><code>writeControl</code></td><td><p><code>object (<code>WriteControl</code>)</code></p><p>The updated write control after applying the request.</p></td></tr></tbody></table>

### Authorization Scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/forms.body`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## Request

The kinds of update requests that can be made.

JSON representation

```
{

  "updateFormInfo": {
    object (UpdateFormInfoRequest)
  },
  "updateSettings": {
    object (UpdateSettingsRequest)
  },
  "createItem": {
    object (CreateItemRequest)
  },
  "moveItem": {
    object (MoveItemRequest)
  },
  "deleteItem": {
    object (DeleteItemRequest)
  },
  "updateItem": {
    object (UpdateItemRequest)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="3">Union field <code>kind</code>. The kind of request. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>updateFormInfo</code></td><td><p><code>object (<code>UpdateFormInfoRequest</code>)</code></p><p>Update Form's Info.</p></td></tr><tr><td><code>updateSettings</code></td><td><p><code>object (<code>UpdateSettingsRequest</code>)</code></p><p>Updates the Form's settings.</p></td></tr><tr><td><code>createItem</code></td><td><p><code>object (<code>CreateItemRequest</code>)</code></p><p>Create a new item.</p></td></tr><tr><td><code>moveItem</code></td><td><p><code>object (<code>MoveItemRequest</code>)</code></p><p>Move an item to a specified location.</p></td></tr><tr><td><code>deleteItem</code></td><td><p><code>object (<code>DeleteItemRequest</code>)</code></p><p>Delete an item.</p></td></tr><tr><td><code>updateItem</code></td><td><p><code>object (<code>UpdateItemRequest</code>)</code></p><p>Update an item.</p></td></tr></tbody></table>

## UpdateFormInfoRequest

Update Form's Info.

JSON representation

```
{
  "info": {
    object (Info)
  },
  "updateMask": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>info</code></td><td><p><code>object (<code>Info</code>)</code></p><p>The info to update.</p></td></tr><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. Only values named in this mask are changed. At least one field must be specified. The root <code>info</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for updating every field.</p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

## UpdateSettingsRequest

Update Form's `FormSettings`.

JSON representation

```
{
  "settings": {
    object (FormSettings)
  },
  "updateMask": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>settings</code></td><td><p><code>object (<code>FormSettings</code>)</code></p><p>Required. The settings to update with.</p></td></tr><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. Only values named in this mask are changed. At least one field must be specified. The root <code>settings</code> is implied and should not be specified. A single <code>"*"</code> can be used as short-hand for updating every field.</p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

## CreateItemRequest

Create an item in a form.

JSON representation

```
{
  "item": {
    object (Item)
  },
  "location": {
    object (Location)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>item</code></td><td><p><code>object (<code>Item</code>)</code></p><p>Required. The item to create.</p></td></tr><tr><td><code>location</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Required. Where to place the new item.</p></td></tr></tbody></table>

## Location

A specific location in a form.

JSON representation

```
{
  "index": integer
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>index</code></td><td><p><code>integer</code></p><p>The index of an item in the form. This must be in the range</p><p><code>[0..<i>N</i>)</code></p><p>, where <i>N</i> is the number of items in the form.</p></td></tr></tbody></table>

## MoveItemRequest

Move an item in a form.

JSON representation

```
{
  "originalLocation": {
    object (Location)
  },
  "newLocation": {
    object (Location)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>originalLocation</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Required. The location of the item to move.</p></td></tr><tr><td><code>newLocation</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Required. The new location for the item.</p></td></tr></tbody></table>

## DeleteItemRequest

Delete an item in a form.

JSON representation

```
{
  "location": {
    object (Location)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>location</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Required. The location of the item to delete.</p></td></tr></tbody></table>

## UpdateItemRequest

Update an item in a form.

JSON representation

```
{
  "item": {
    object (Item)
  },
  "location": {
    object (Location)
  },
  "updateMask": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>item</code></td><td><p><code>object (<code>Item</code>)</code></p><p>Required. New values for the item. Note that item and question IDs are used if they are provided (and are in the field mask). If an ID is blank (and in the field mask) a new ID is generated. This means you can modify an item by getting the form via <code>forms.get</code>, modifying your local copy of that item to be how you want it, and using <code>UpdateItemRequest</code> to write it back, with the IDs being the same (or not in the field mask).</p></td></tr><tr><td><code>location</code></td><td><p><code>object (<code>Location</code>)</code></p><p>Required. The location identifying the item to update.</p></td></tr><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>Required. Only values named in this mask are changed.</p><p>This is a comma-separated list of fully qualified names of fields. Example: <code>"user.displayName,photo"</code>.</p></td></tr></tbody></table>

## WriteControl

Provides control over how write requests are executed.

JSON representation

```
{

  "requiredRevisionId": string,
  "targetRevisionId": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="3">Union field <code>control</code>. Determines the revision of the form from which changes are to be applied, and how the request should behave if that revision is not the current revision of the form. <code>control</code> can be only one of the following:</td></tr><tr><td><code>requiredRevisionId</code></td><td><p><code>string</code></p><p>The revision ID of the form that the write request is applied to. If this is not the latest revision of the form, the request is not processed and returns a 400 bad request error.</p></td></tr><tr><td><code>targetRevisionId</code></td><td><p><code>string</code></p><p>The target revision ID of the form that the write request is applied to.</p><p>If changes have occurred after this revision, the changes in this update request are transformed against those changes. This results in a new revision of the form that incorporates both the changes in the request and the intervening changes, with the server resolving conflicting changes.</p><p>The target revision ID may only be used to write to recent versions of a form. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 (Bad Request Error). The request may be retried after reading the latest version of the form. In most cases a target revision ID remains valid for several minutes after it is read, but for frequently-edited forms this window may be shorter.</p></td></tr></tbody></table>

## Response

A single response from an update.

JSON representation

```
{
  "createItem": {
    object (CreateItemResponse)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>createItem</code></td><td><p><code>object (<code>CreateItemResponse</code>)</code></p><p>The result of creating an item.</p></td></tr></tbody></table>

## CreateItemResponse

The result of creating an item.

JSON representation

```
{
  "itemId": string,
  "questionId": [
    string
  ]
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>itemId</code></td><td><p><code>string</code></p><p>The ID of the created item.</p></td></tr><tr><td><code>questionId[]</code></td><td><p><code>string</code></p><p>The ID of the question created as part of this item, for a question group it lists IDs of all the questions created for this item.</p></td></tr></tbody></table>
