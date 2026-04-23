---
source: https://developers.google.com/workspace/drive/labels/reference/rest/v2beta/labels/delta
root: workspace
fetched_at: 2026-04-23T15:28:17.107Z
---

# Method: labels.delta

Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.

### HTTP request

`POST https://drivelabels.googleapis.com/v2beta/{name=labels/*}:delta`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The resource name of the Label to update.</p></td></tr></tbody></table>

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>writeControl</code></td><td><p><code>object (<code>WriteControl</code>)</code></p><p>Provides control over how write requests are executed.</p></td></tr><tr><td><code>requests[]</code></td><td><p><code>object (<code>Request</code>)</code></p><p>A list of updates to apply to the Label. Requests will be applied in the order they are specified.</p></td></tr><tr><td><code>useAdminAccess</code></td><td><p><code>boolean</code></p><p>Set to <code>true</code> in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.</p></td></tr><tr><td><code>view</code></td><td><p><code>enum (<code>LabelView</code>)</code></p><p>When specified, only certain fields belonging to the indicated view will be returned.</p></td></tr><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>The BCP-47 language code to use for evaluating localized Field labels when <code>include_label_in_response</code> is <code>true</code>.</p></td></tr></tbody></table>

### Response body

Response for Label update.

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>responses[]</code></td><td><p><code>object (<code>Response</code>)</code></p><p>The reply of the updates. This maps 1:1 with the updates, although responses to some requests may be empty.</p></td></tr><tr><td><code>updatedLabel</code></td><td><p>The label after updates were applied. This is only set if [BatchUpdateLabelResponse2.include_label_in_response] is <code>true</code> and there were no errors.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive.labels`
- `           https://www.googleapis.com/auth/drive.admin.labels`

For more information, see the [Authorization guide](../../../../../../guides/configure-oauth-consent.md).

## Request

A single kind of update to apply to a Label.

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>kind</code>. The kind of update. Exactly one Field is required. <code>kind</code> can be only one of the following:</td></tr><tr><td><code>updateLabel</code></td><td><p><code>object (<code>UpdateLabelPropertiesRequest</code>)</code></p><p>Updates the Label properties.</p></td></tr><tr><td><code>createField</code></td><td><p><code>object (<code>CreateFieldRequest</code>)</code></p><p>Creates a new Field.</p></td></tr><tr><td><code>updateField</code></td><td><p><code>object (<code>UpdateFieldPropertiesRequest</code>)</code></p><p>Updates basic properties of a Field.</p></td></tr><tr><td><code>updateFieldType</code></td><td><p><code>object (<code>UpdateFieldTypeRequest</code>)</code></p><p>Update Field type and/or type options.</p></td></tr><tr><td><code>enableField</code></td><td><p><code>object (<code>EnableFieldRequest</code>)</code></p><p>Enables the Field.</p></td></tr><tr><td><code>disableField</code></td><td><p><code>object (<code>DisableFieldRequest</code>)</code></p><p>Disables the Field.</p></td></tr><tr><td><code>deleteField</code></td><td><p><code>object (<code>DeleteFieldRequest</code>)</code></p><p>Deletes a Field from the label.</p></td></tr><tr><td><code>createSelectionChoice</code></td><td><p><code>object (<code>CreateSelectionChoiceRequest</code>)</code></p><p>Creates Choice within a Selection field.</p></td></tr><tr><td><code>updateSelectionChoiceProperties</code></td><td><p><code>object (<code>UpdateSelectionChoicePropertiesRequest</code>)</code></p><p>Update a Choice properties within a Selection Field.</p></td></tr><tr><td><code>enableSelectionChoice</code></td><td><p><code>object (<code>EnableSelectionChoiceRequest</code>)</code></p><p>Enable a Choice within a Selection Field.</p></td></tr><tr><td><code>disableSelectionChoice</code></td><td><p><code>object (<code>DisableSelectionChoiceRequest</code>)</code></p><p>Disable a Choice within a Selection Field.</p></td></tr><tr><td><code>deleteSelectionChoice</code></td><td><p><code>object (<code>DeleteSelectionChoiceRequest</code>)</code></p><p>Delete a Choice within a Selection Field.</p></td></tr></tbody></table>

## UpdateLabelPropertiesRequest

Updates basic properties of a Label.

JSON representation

```
{
  "updateMask": string,
  "properties": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>label_properties</code> is implied and should not be specified. A single <code>*</code> can be used as short-hand for updating every field.</p></td></tr><tr><td><code>properties</code></td><td><p>Required. Label properties to update.</p></td></tr></tbody></table>

## CreateFieldRequest

Request to create a Field within a Label.

JSON representation

```
{
  "field": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>field</code></td><td><p>Required. Field to create.</p></td></tr></tbody></table>

## UpdateFieldPropertiesRequest

Request to update Field properties.

JSON representation

```
{
  "updateMask": string,
  "id": string,
  "properties": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>properties</code> is implied and should not be specified. A single <code>*</code> can be used as short-hand for updating every field.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. The Field to update.</p></td></tr><tr><td><code>properties</code></td><td><p>Required. Basic Field properties.</p></td></tr></tbody></table>

## UpdateFieldTypeRequest

Request to change the type of a Field.

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root of <code>type_options</code> is implied and should not be specified. A single <code>*</code> can be used as short-hand for updating every field.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. The Field to update.</p></td></tr><tr><td colspan="2"><p>Union field <code>type_options</code>.</p><p><code>type_options</code> can be only one of the following:</p></td></tr><tr><td><code>textOptions</code></td><td><p>Update field to Text.</p></td></tr><tr><td><code>integerOptions</code></td><td><p>Update field to Integer.</p></td></tr><tr><td><code>dateOptions</code></td><td><p>Update field to Date.</p></td></tr><tr><td><code>selectionOptions</code></td><td><p>Update field to Selection.</p></td></tr><tr><td><code>userOptions</code></td><td><p>Update field to User.</p></td></tr></tbody></table>

## EnableFieldRequest

Request to enable the Field.

JSON representation

```
{
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. ID of the Field to enable.</p></td></tr></tbody></table>

## DisableFieldRequest

Request to disable the Field.

JSON representation

```
{
  "updateMask": string,
  "id": string,
  "disabledPolicy": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>disabledPolicy</code> is implied and should not be specified. A single <code>*</code> can be used as short-hand for updating every field.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. Key of the Field to disable.</p></td></tr><tr><td><code>disabledPolicy</code></td><td><p>Required. Field Disabled Policy.</p></td></tr></tbody></table>

## DeleteFieldRequest

Request to delete the Field.

JSON representation

```
{
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. ID of the Field to delete.</p></td></tr></tbody></table>

## CreateSelectionChoiceRequest

Request to create a Selection Choice.

JSON representation

```
{
  "fieldId": string,
  "choice": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>Required. The Selection Field in which a Choice will be created.</p></td></tr><tr><td><code>choice</code></td><td><p>Required. The Choice to create.</p></td></tr></tbody></table>

## UpdateSelectionChoicePropertiesRequest

Request to update a Choice properties.

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>properties</code> is implied and should not be specified. A single <code>*</code> can be used as short-hand for updating every field.</p></td></tr><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>Required. The Selection Field to update.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. The Choice to update.</p></td></tr><tr><td><code>properties</code></td><td><p>Required. The Choice properties to update.</p></td></tr></tbody></table>

## EnableSelectionChoiceRequest

Request to enable a Choice.

JSON representation

```
{
  "fieldId": string,
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>Required. The Selection Field in which a Choice will be enabled.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. Choice to enable.</p></td></tr></tbody></table>

## DisableSelectionChoiceRequest

Request to disable a Choice.

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>updateMask</code></td><td><p><code>string (<code>FieldMask</code> format)</code></p><p>The fields that should be updated. At least one field must be specified. The root <code>disabledPolicy</code> is implied and should not be specified. A single <code>*</code> can be used as short-hand for updating every field.</p></td></tr><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>Required. The Selection Field in which a Choice will be disabled.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. Choice to disable.</p></td></tr><tr><td><code>disabledPolicy</code></td><td><p>Required. The disabled policy to update.</p></td></tr></tbody></table>

## DeleteSelectionChoiceRequest

Request to delete a Choice.

JSON representation

```
{
  "fieldId": string,
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>Required. The Selection Field from which a Choice will be deleted.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Required. Choice to delete.</p></td></tr></tbody></table>

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

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>response</code>. The response for the corresponding request. <code>response</code> can be only one of the following:</td></tr><tr><td><code>updateLabel</code></td><td><p><code>object (<code>UpdateLabelPropertiesResponse</code>)</code></p><p>Updated basic properties of a Label.</p></td></tr><tr><td><code>createField</code></td><td><p><code>object (<code>CreateFieldResponse</code>)</code></p><p>Creates a new Field.</p></td></tr><tr><td><code>updateField</code></td><td><p><code>object (<code>UpdateFieldPropertiesResponse</code>)</code></p><p>Updates basic properties of a Field.</p></td></tr><tr><td><code>updateFieldType</code></td><td><p><code>object (<code>UpdateFieldTypeResponse</code>)</code></p><p>Update Field type and/or type options.</p></td></tr><tr><td><code>enableField</code></td><td><p><code>object (<code>EnableFieldResponse</code>)</code></p><p>Enables Field.</p></td></tr><tr><td><code>disableField</code></td><td><p><code>object (<code>DisableFieldResponse</code>)</code></p><p>Disables Field.</p></td></tr><tr><td><code>deleteField</code></td><td><p><code>object (<code>DeleteFieldResponse</code>)</code></p><p>Deletes a Field from the label.</p></td></tr><tr><td><code>createSelectionChoice</code></td><td><p><code>object (<code>CreateSelectionChoiceResponse</code>)</code></p><p>Creates a new selection list option to add to a Selection Field.</p></td></tr><tr><td><code>updateSelectionChoiceProperties</code></td><td><p><code>object (<code>UpdateSelectionChoicePropertiesResponse</code>)</code></p><p>Updates a Choice within a Selection Field.</p></td></tr><tr><td><code>enableSelectionChoice</code></td><td><p><code>object (<code>EnableSelectionChoiceResponse</code>)</code></p><p>Enables a Choice within a Selection Field.</p></td></tr><tr><td><code>disableSelectionChoice</code></td><td><p><code>object (<code>DisableSelectionChoiceResponse</code>)</code></p><p>Disables a Choice within a Selection Field.</p></td></tr><tr><td><code>deleteSelectionChoice</code></td><td><p><code>object (<code>DeleteSelectionChoiceResponse</code>)</code></p><p>Deletes a Choice from a Selection Field.</p></td></tr></tbody></table>

## UpdateLabelPropertiesResponse

This type has no fields.

Response following update to Label properties.

## CreateFieldResponse

Response following Field create.

JSON representation

```
{
  "id": string,
  "priority": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The field of the created field. When left blank in a create request, a key will be autogenerated and can be identified here.</p></td></tr><tr><td><code>priority</code></td><td><p><code>integer</code></p><p>The priority of the created field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).</p></td></tr></tbody></table>

## UpdateFieldPropertiesResponse

Response following update to Field properties.

JSON representation

```
{
  "priority": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>priority</code></td><td><p><code>integer</code></p><p>The priority of the updated field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).</p></td></tr></tbody></table>

## UpdateFieldTypeResponse

This type has no fields.

Response following update to Field type.

## EnableFieldResponse

This type has no fields.

Response following Field enable.

## DisableFieldResponse

This type has no fields.

Response following Field disable.

## DeleteFieldResponse

This type has no fields.

Response following Field delete.

## CreateSelectionChoiceResponse

Response following Selection Choice create.

JSON representation

```
{
  "fieldId": string,
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>fieldId</code></td><td><p><code>string</code></p><p>The server-generated id of the field.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>The server-generated ID of the created choice within the Field</p></td></tr></tbody></table>

## UpdateSelectionChoicePropertiesResponse

Response following update to Selection Choice properties.

JSON representation

```
{
  "priority": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>priority</code></td><td><p><code>integer</code></p><p>The priority of the updated choice. The priority may change from what was specified to assure contiguous priorities between choices (1-n).</p></td></tr></tbody></table>

## EnableSelectionChoiceResponse

This type has no fields.

Response following Choice enable.

## DisableSelectionChoiceResponse

This type has no fields.

Response following Choice disable.

## DeleteSelectionChoiceResponse

This type has no fields.

Response following Choice delete.
