---
source: https://developers.google.com/workspace/drive/labels/guides/update-label
root: workspace
fetched_at: 2026-04-23T15:28:08.356Z
---

# Update a label

You can update a single label by applying a set of update requests resulting in a new draft revision. For example, you can update an existing label [property](../reference/rest/v2/labels.md#properties_1) (the label description) or you can add a new [`Field`](../reference/rest/v2/labels.md#field) to the label.

The label update acts as a batch update as the method takes a list of update [`Request`](../reference/rest/v2/labels/delta.md#request) objects. It makes updates according to the same order specified in the batch request. The updates in the batch update are applied atomically. That is, if any request in the batch is unsuccessful, then the entire update is unsuccessful and none of the (potentially dependent) changes are applied. The label is left unchanged.

If the update is successful, the resulting draft revision must be published before the changes can be used with any Drive item.

## Update label objects

A label includes many other object types that can be updated, such as:

- Label Properties
- Fields and Field Types
- Selection Choices and Selection Choice Properties

These are some of the many objects that control the appearance and operation of a label.

### Categories of operation

The following operations supported by the [`labels.delta`](../reference/rest/v2/labels/delta.md) method can be grouped into the following broad categories:

| Category | Description |
| --- | --- |
| *Create* | Add objects. |
| *Update* | Update certain properties of an object. |
| *Enable* | Enable objects. |
| *Disable* | Disable objects. |
| *Delete* | Remove objects. |

These categories are used in the next section to describe the behavior of specific operations.

### Update requests

The [`labels.delta`](../reference/rest/v2/labels/delta.md) method works by taking one or more [Request](../reference/rest/v2/labels/delta.md#request) objects, each one specifying a single type of request to perform. There are many different kinds of requests. Here's a breakdown on the types of requests, grouped into different categories.

<table><thead><tr><th colspan="2">Request type</th></tr></thead><tbody><tr><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#resource:-label">Label Properties</a></td><td><table><tbody><tr><td><i>Update</i></td><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta#UpdateLabelPropertiesRequest">UpdateLabelPropertiesRequest</a></td></tr></tbody></table></td></tr><tr><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#field">Field</a></td><td><table><tbody><tr><td><i>Create</i></td><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta#createfieldrequest">CreateFieldRequest</a></td></tr><tr><td><i>Update</i></td><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta#updatefieldpropertiesrequest">UpdateFieldPropertiesRequest</a><br><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta#updatefieldtyperequest">UpdateFieldTypeRequest</a></td></tr><tr><td><i>Enable</i></td><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta#enablefieldrequest">EnableFieldRequest</a></td></tr><tr><td><i>Disable</i></td><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta#disablefieldrequest">DisableFieldRequest</a></td></tr><tr><td><i>Delete</i></td><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta#deletefieldrequest">DeleteFieldRequest</a></td></tr></tbody></table></td></tr><tr><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#choice">Selection Choice</a></td><td><table><tbody><tr><td><i>Create</i></td><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta#createselectionchoicerequest">CreateSelectionChoiceRequest</a></td></tr><tr><td><i>Update</i></td><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta#updateselectionchoicepropertiesrequest">UpdateSelectionChoicePropertiesRequest</a></td></tr><tr><td><i>Enable</i></td><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta#enableselectionchoicerequest">EnableSelectionChoiceRequest</a></td></tr><tr><td><i>Disable</i></td><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta#disableselectionchoicerequest">DisableSelectionChoiceRequest</a></td></tr><tr><td><i>Delete</i></td><td><a href="https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/delta#deleteselectionchoicerequest">DeleteSelectionChoiceRequest</a></td></tr></tbody></table></td></tr></tbody></table>

### Field masks

Many of the "Update" and "Disable" type requests require a [`FieldMask`](https://protobuf.dev/reference/protobuf/google.protobuf/#field-mask). This is a comma-delimited list of fields you want to update while leaving the other fields unchanged. The mask is required to make sure only the fields you want to edit are updated. You must specify at least one field.

## Example

To update a label, use the [`delta`](../reference/rest/v2/labels/delta.md) method on the [`labels`](../reference/rest/v2/labels.md) collection.

You also must specify:

- `useAdminAccess` is `true` to use the user's administrator credentials. The server verifies that the user is an admin for the label before allowing access.
- A [`Request`](../reference/rest/v2/labels/delta.md#Request) that specifies the applicable updates to the label.
- A label `title` through the [`property`](../reference/rest/v2/labels.md#properties) method.
- One or more [`Field`](../reference/rest/v2/labels.md#field).
- A [Label resource](../reference/rest/v2/labels.md#resource:-label) that represents every label. It contains a resource `Name` and `ID`, which is a globally unique identifier for the label.
- [`LabelView`](../reference/rest/v2/LabelView.md) is `LABEL_VIEW_FULL` to set the Resource view applied to label responses. `LABEL_VIEW_FULL` returns all possible fields.

This example uses the `ID` to update the correct label.

### Python

```
body = {
'use_admin_access': True,
'requests': [{
  'update_label': {
    'properties': {
      'title': 'TITLE'
    },
    'update_mask': {
      'paths': ['title']
    }
  },
}, {
  'create_field': {
    'field': {
      'properties': {
        'display_name': 'DISPLAY_NAME'
      },
      'text_options': {}
    }
  }
}],
'view': 'LABEL_VIEW_FULL'
}
response = service.labels().delta(
  body=body,
  name='labels/ID').execute()
```

### Node.js

```
var body = {
  'use_admin_access': true,
  'requests': [{
    'update_label': {
      'properties': {
        'title': 'TITLE'
      },
      'update_mask': {
        'paths': ['title']
      }
    },
  }, {
    'create_field': {
      'field': {
        'properties': {
          'display_name': 'DISPLAY_NAME'
        },
        'text_options': {}
      }
    }
  }],
  'view': 'LABEL_VIEW_FULL'
};
service.labels.delta({
  'resource': body,
  'name': 'labels/ID'
}, (err, res) => {
  if (err) return console.error('The API returned an error: ' + err);
  console.log(res);
});
```

The label, field, or choice is updated, the label's revision ID is incremented, and the label is stored in a database as a draft label. The label has the [`State`](../reference/rest/v2/labels.md#state) of `PUBLISHED` with `hasUnpublishedChanges=true` meaning there are draft changes, but they aren't available to users. The updated label must be `PUBLISHED` before the changes become visible to users. For more information, see [Label lifecycle](./label-lifecycle.md).
