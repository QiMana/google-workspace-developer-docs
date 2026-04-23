---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta
root: workspace
fetched_at: 2026-04-23T15:28:11.733Z
---

# Method: labels.delta

Updates a single label by applying a set of update requests resulting in a new draft revision. For more information, see [Update a label](../../../../guides/update-label.md).

The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive items.

### HTTP request

`POST https://drivelabels.googleapis.com/v2/{name=labels/*}:delta`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the label to update.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "writeControl": {
    object (WriteControl)
  },
  "requests": [
    {
      object (Request)
    }
  ],
  "useAdminAccess": boolean,
  "view": enum (LabelView),
  "languageCode": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>writeControl</code></td><td><p><code>object (<code>WriteControl</code>)</code></p><p>Provides control over how write requests are executed.</p></td></tr><tr><td><code>requests[]</code></td><td><p><code>object (<code>Request</code>)</code></p><p>A list of updates to apply to the label. Requests will be applied in the order they are specified.</p></td></tr><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Set to <code>true</code> in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access.</p></td></tr><tr><td><code>view</code></td><td><p><code>enum (<code>LabelView</code>)</code></p><p>When specified, only certain fields belonging to the indicated view will be returned.</p></td></tr><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>The BCP-47 language code to use for evaluating localized field labels when <code>include_label_in_response</code> is <code>true</code>.</p></td></tr></tbody></table>

### Response body

Response for label update.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "responses": [
    {
      object (Response)
    }
  ],
  "updatedLabel": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>responses[]</code></td><td><p><code>object (<code>Response</code>)</code></p><p>The reply of the updates. This maps 1:1 with the updates, although responses to some requests may be empty.</p></td></tr><tr><td><code>updatedLabel</code></td><td><p>The label after updates were applied. This is only set if <code>include_label_in_response</code> is <code>true</code> and there were no errors.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## Request

A single kind of update to apply to a label.

JSON representation

```
{

  "updateLabel": {
    object (UpdateLabelPropertiesRequest)
  },
  "createField": {
    object (CreateFieldRequest)
  },
  "updateField": {
    object (UpdateFieldPropertiesRequest)
  },
  "updateFieldType": {
    object (UpdateFieldTypeRequest)
  },
  "enableField": {
    object (EnableFieldRequest)
  },
  "disableField": {
    object (DisableFieldRequest)
  },
  "deleteField": {
    object (DeleteFieldRequest)
  },
  "createSelectionChoice": {
    object (CreateSelectionChoiceRequest)
  },
  "updateSelectionChoiceProperties": {
    object (UpdateSelectionChoicePropertiesRequest)
  },
  "enableSelectionChoice": {
    object (EnableSelectionChoiceRequest)
  },
  "disableSelectionChoice": {
    object (DisableSelectionChoiceRequest)
  },
  "deleteSelectionChoice": {
    object (DeleteSelectionChoiceRequest)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of update. Exactly one field is required. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>updateLabel</code></td><td><p><code>object (<code>UpdateLabelPropertiesRequest</code>)</code></p><p>Updates the label properties.</p></td></tr><tr><td><code>createField</code></td><td><p><code>object (<code>CreateFieldRequest</code>)</code></p><p>Creates a field.</p></td></tr><tr><td><code>updateField</code></td><td><p><code>object (<code>UpdateFieldPropertiesRequest</code>)</code></p><p>Updates basic properties of a field.</p></td></tr><tr><td><code>updateFieldType</code></td><td><p><code>object (<code>UpdateFieldTypeRequest</code>)</code></p><p>Update field type and/or type options.</p></td></tr><tr><td><code>enableField</code></td><td><p><code>object (<code>EnableFieldRequest</code>)</code></p><p>Enables the field.</p></td></tr><tr><td><code>disableField</code></td><td><p><code>object (<code>DisableFieldRequest</code>)</code></p><p>Disables the field.</p></td></tr><tr><td><code>deleteField</code></td><td><p><code>object (<code>DeleteFieldRequest</code>)</code></p><p>Deletes a field from the label.</p></td></tr><tr><td><code>createSelectionChoice</code></td><td><p><code>object (<code>CreateSelectionChoiceRequest</code>)</code></p><p>Create a choice within a selection field.</p></td></tr><tr><td><code>updateSelectionChoiceProperties</code></td><td><p><code>object (<code>UpdateSelectionChoicePropertiesRequest</code>)</code></p><p>Update a choice property within a selection field.</p></td></tr><tr><td><code>enableSelectionChoice</code></td><td><p><code>object (<code>EnableSelectionChoiceRequest</code>)</code></p><p>Enable a choice within a selection field.</p></td></tr><tr><td><code>disableSelectionChoice</code></td><td><p><code>object (<code>DisableSelectionChoiceRequest</code>)</code></p><p>Disable a choice within a selection field.</p></td></tr><tr><td><code>deleteSelectionChoice</code></td><td><p><code>object (<code>DeleteSelectionChoiceRequest</code>)</code></p><p>Delete a choice within a selection field.</p></td></tr></tbody></table>

## UpdateLabelPropertiesRequest

Updates basic properties of a label.

JSON representation

```
{
  "updateMask": string,
  "properties": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>label_properties</code> is implied and should not be specified. A single <code>*</code> can be used as a short-hand for updating every field.</p></td></tr><tr><td><code>properties</code></td><td><p>Required. Label properties to update.</p></td></tr></tbody></table>

## CreateFieldRequest

Request to create a field within a label.

JSON representation

```
{
  "field": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>field</code></td><td><p>Required. Field to create.</p></td></tr></tbody></table>

## UpdateFieldPropertiesRequest

Request to update field properties.

JSON representation

```
{
  "updateMask": string,
  "id": string,
  "properties": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>properties</code> is implied and should not be specified. A single <code>*</code> can be used as a short-hand for updating every field.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. The field to update.</p></td></tr><tr><td><code>properties</code></td><td><p>Required. Basic field properties.</p></td></tr></tbody></table>

## UpdateFieldTypeRequest

Request to change the type of a field.

JSON representation

```
{
  "updateMask": string,
  "id": string,

  "textOptions": {
    
  },
  "integerOptions": {
    
  },
  "dateOptions": {
    
  },
  "selectionOptions": {
    
  },
  "userOptions": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root of <code>type_options</code> is implied and should not be specified. A single <code>*</code> can be used as a short-hand for updating every field.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. The field to update.</p></td></tr><tr><td colspan="2"><p>Union field <code>type_options</code>.</p><p><code>type_options</code> can be only one of the following:</p></td></tr><tr><td><code>textOptions</code></td><td><p>Update field to Text.</p></td></tr><tr><td><code>integerOptions</code></td><td><p>Update field to Integer.</p></td></tr><tr><td><code>dateOptions</code></td><td><p>Update field to Date.</p></td></tr><tr><td><code>selectionOptions</code></td><td><p>Update field to Selection.</p></td></tr><tr><td><code>userOptions</code></td><td><p>Update field to User.</p></td></tr></tbody></table>

## EnableFieldRequest

Request to enable the field.

JSON representation

```
{
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. ID of the field to enable.</p></td></tr></tbody></table>

## DisableFieldRequest

Request to disable the field.

JSON representation

```
{
  "updateMask": string,
  "id": string,
  "disabledPolicy": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>disabledPolicy</code> is implied and should not be specified. A single <code>*</code> can be used as a short-hand for updating every field.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. Key of the field to disable.</p></td></tr><tr><td><code>disabledPolicy</code></td><td><p>Required. Field disabled policy.</p></td></tr></tbody></table>

## DeleteFieldRequest

Request to delete the field.

JSON representation

```
{
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. ID of the field to delete.</p></td></tr></tbody></table>

## CreateSelectionChoiceRequest

Request to create a selection choice.

JSON representation

```
{
  "fieldId": string,
  "choice": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>Required. The selection field in which a choice will be created.</p></td></tr><tr><td><code>choice</code></td><td><p>Required. The choice to create.</p></td></tr></tbody></table>

## UpdateSelectionChoicePropertiesRequest

Request to update a choice property.

JSON representation

```
{
  "updateMask": string,
  "fieldId": string,
  "id": string,
  "properties": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>properties</code> is implied and should not be specified. A single <code>*</code> can be used as a short-hand for updating every field.</p></td></tr><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>Required. The selection field to update.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. The choice to update.</p></td></tr><tr><td><code>properties</code></td><td><p>Required. The choice properties to update.</p></td></tr></tbody></table>

## EnableSelectionChoiceRequest

Request to enable a choice.

JSON representation

```
{
  "fieldId": string,
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>Required. The selection field in which a choice will be enabled.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. Choice to enable.</p></td></tr></tbody></table>

## DisableSelectionChoiceRequest

Request to disable a choice.

JSON representation

```
{
  "updateMask": string,
  "fieldId": string,
  "id": string,
  "disabledPolicy": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>disabledPolicy</code> is implied and should not be specified. A single <code>*</code> can be used as a short-hand for updating every field.</p></td></tr><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>Required. The selection field in which a choice will be disabled.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. Choice to disable.</p></td></tr><tr><td><code>disabledPolicy</code></td><td><p>Required. The disabled policy to update.</p></td></tr></tbody></table>

## DeleteSelectionChoiceRequest

Request to delete a choice.

JSON representation

```
{
  "fieldId": string,
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>Required. The selection field from which a choice will be deleted.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. Choice to delete.</p></td></tr></tbody></table>

## Response

A single response from an update.

JSON representation

```
{

  "updateLabel": {
    object (UpdateLabelPropertiesResponse)
  },
  "createField": {
    object (CreateFieldResponse)
  },
  "updateField": {
    object (UpdateFieldPropertiesResponse)
  },
  "updateFieldType": {
    object (UpdateFieldTypeResponse)
  },
  "enableField": {
    object (EnableFieldResponse)
  },
  "disableField": {
    object (DisableFieldResponse)
  },
  "deleteField": {
    object (DeleteFieldResponse)
  },
  "createSelectionChoice": {
    object (CreateSelectionChoiceResponse)
  },
  "updateSelectionChoiceProperties": {
    object (UpdateSelectionChoicePropertiesResponse)
  },
  "enableSelectionChoice": {
    object (EnableSelectionChoiceResponse)
  },
  "disableSelectionChoice": {
    object (DisableSelectionChoiceResponse)
  },
  "deleteSelectionChoice": {
    object (DeleteSelectionChoiceResponse)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>response</code>. The response for the corresponding request. <code>response</code> can be only one of the following:</td></tr><tr><td><code>updateLabel</code></td><td><p><code>object (<code>UpdateLabelPropertiesResponse</code>)</code></p><p>Updates basic properties of a label.</p></td></tr><tr><td><code>createField</code></td><td><p><code>object (<code>CreateFieldResponse</code>)</code></p><p>Creates a field.</p></td></tr><tr><td><code>updateField</code></td><td><p><code>object (<code>UpdateFieldPropertiesResponse</code>)</code></p><p>Updates basic properties of a field.</p></td></tr><tr><td><code>updateFieldType</code></td><td><p><code>object (<code>UpdateFieldTypeResponse</code>)</code></p><p>Updates field type and/or type options.</p></td></tr><tr><td><code>enableField</code></td><td><p><code>object (<code>EnableFieldResponse</code>)</code></p><p>Enables field.</p></td></tr><tr><td><code>disableField</code></td><td><p><code>object (<code>DisableFieldResponse</code>)</code></p><p>Disables field.</p></td></tr><tr><td><code>deleteField</code></td><td><p><code>object (<code>DeleteFieldResponse</code>)</code></p><p>Deletes a field from the label.</p></td></tr><tr><td><code>createSelectionChoice</code></td><td><p><code>object (<code>CreateSelectionChoiceResponse</code>)</code></p><p>Creates a selection list option to add to a selection field.</p></td></tr><tr><td><code>updateSelectionChoiceProperties</code></td><td><p><code>object (<code>UpdateSelectionChoicePropertiesResponse</code>)</code></p><p>Updates a choice within a selection field.</p></td></tr><tr><td><code>enableSelectionChoice</code></td><td><p><code>object (<code>EnableSelectionChoiceResponse</code>)</code></p><p>Enables a choice within a selection field.</p></td></tr><tr><td><code>disableSelectionChoice</code></td><td><p><code>object (<code>DisableSelectionChoiceResponse</code>)</code></p><p>Disables a choice within a selection field.</p></td></tr><tr><td><code>deleteSelectionChoice</code></td><td><p><code>object (<code>DeleteSelectionChoiceResponse</code>)</code></p><p>Deletes a choice from a selection field.</p></td></tr></tbody></table>

## UpdateLabelPropertiesResponse

This type has no fields.

Response following update to label properties.

## CreateFieldResponse

Response following field create.

JSON representation

```
{
  "id": string,
  "priority": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The field of the created field. When left blank in a create request, a key will be autogenerated and can be identified here.</p></td></tr><tr><td><code>priority</code></td><td><p><code>integer</code></p><p>The priority of the created field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).</p></td></tr></tbody></table>

## UpdateFieldPropertiesResponse

Response following update to field properties.

JSON representation

```
{
  "priority": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>priority</code></td><td><p><code>integer</code></p><p>The priority of the updated field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).</p></td></tr></tbody></table>

## UpdateFieldTypeResponse

This type has no fields.

Response following update to field type.

## EnableFieldResponse

This type has no fields.

Response following field enable.

## DisableFieldResponse

This type has no fields.

Response following field disable.

## DeleteFieldResponse

This type has no fields.

Response following field delete.

## CreateSelectionChoiceResponse

Response following selection choice create.

JSON representation

```
{
  "fieldId": string,
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>The server-generated ID of the field.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The server-generated ID of the created choice within the field.</p></td></tr></tbody></table>

## UpdateSelectionChoicePropertiesResponse

Response following update to selection choice properties.

JSON representation

```
{
  "priority": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>priority</code></td><td><p><code>integer</code></p><p>The priority of the updated choice. The priority may change from what was specified to assure contiguous priorities between choices (1-n).</p></td></tr></tbody></table>

## EnableSelectionChoiceResponse

This type has no fields.

Response following choice enable.

## DisableSelectionChoiceResponse

This type has no fields.

Response following choice disable.

## DeleteSelectionChoiceResponse

This type has no fields.

Response following choice delete.
