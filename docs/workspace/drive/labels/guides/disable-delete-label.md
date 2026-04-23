---
source: https://developers.google.com/workspace/drive/labels/guides/disable-delete-label
root: workspace
fetched_at: 2026-04-23T15:28:07.258Z
---

# Disable, enable & delete a label

This page describes how to perform these tasks involving labels:

- Disable a label
- Enable a label
- Delete a label

## Disable a label

Disabling a label results in a new disabled published revision based on the current published revision. If there's a draft revision, a new disabled draft revision is created based on the latest draft revision. Older draft revisions are deleted. For more information, see [Label lifecycle](./label-lifecycle.md).

Once disabled, users can still apply this label through the API. The label still appears where it's already been applied and in your search results. A disabled label can be [deleted](#delete).

To disable a published label, use the [`disable`](../reference/rest/v2/labels/disable.md) method on the [`labels`](../reference/rest/v2/labels.md) collection.

You also must specify:

- A [Label resource](../reference/rest/v2/labels.md#resource:-label) that represents every label. It contains a resource `Name` and `ID`, which is a globally unique identifier for the label.
- `useAdminAccess` is `true` to use the user's administrator credentials. The server verifies that the user is an admin for the label before allowing access.

This example uses the `ID` to disable the correct label.

### Python

```
service.labels().disable(
name='labels/ID',
body={
  'use_admin_access': True
}).execute()
```

### Node.js

```
service.labels.disable({
  'resource': {
    'use_admin_access': true
},
'name': 'labels/ID'
}, (err, res) => {
  if (err) return console.error('The API returned an error: ' + err);
  console.log(res);
});
```

The label has the [`State`](../reference/rest/v2/labels.md#state) of `DISABLED` and the label's revision ID is incremented. Users can apply the label through the API. However, a disabled label is not shown in a UI unless the `showInApply` property of the [`disabledPolicy`](../reference/rest/v2/labels.md#DisabledPolicy) method is configured.

## Enable a label

Enabling a disabled label restores it to its published state. It results in a new published revision based on the current disabled published revision. If there's an existing disabled draft revision, a new revision is created based on that draft and is enabled. For more information, see [Label lifecycle](./label-lifecycle.md).

To enable a disabled label, use the [`enable`](../reference/rest/v2/labels/enable.md) method.

You also must specify:

- A [Label resource](../reference/rest/v2/labels.md#resource:-label) that represents every label. It contains a resource `Name` and `ID`, which is a globally unique identifier for the label.
- `useAdminAccess` is `true` to use the user's administrator credentials. The server verifies that the user is an admin for the label before allowing access.

This example uses the `ID` to enable the correct label.

### Python

```
service.labels().enable(
name='labels/ID',
body={
  'use_admin_access': True
}).execute()
```

### Node.js

```
service.labels.enable({
  'resource': {
    'use_admin_access': true
},
'name': 'labels/ID'
}, (err, res) => {
  if (err) return console.error('The API returned an error: ' + err);
  console.log(res);
});
```

The label has the [`State`](../reference/rest/v2/labels.md#state) of `PUBLISHED` and the label's revision ID is incremented. Users can view and apply the label to files through the API.

## Delete a label

Only draft and disabled labels can be deleted. When a label is deleted, all instances where the label was previously applied, including any corresponding field values entered by users, are permanently deleted and removed from those Drive files.

To delete a label, you must first disable it and then use the [`delete`](../reference/rest/v2/labels/delete.md) method.

You also must specify:

- A [Label resource](../reference/rest/v2/labels.md#resource:-label) that represents every label. It contains a resource `Name` and `ID`, which is a globally unique identifier for the label.
- `useAdminAccess` is `true` to use the user's administrator credentials. The server verifies that the user is an admin for the label before allowing access.

This example uses the `ID` to delete the correct label.

### Python

```
response = service.labels().delete(
  name='labels/ID',
  useAdminAccess=True).execute()
```

### Node.js

```
service.labels.delete({
  'name': 'labels/ID',
  'use_admin_access': true
}, (err, res) => {
  if (err) return console.error('The API returned an error: ' + err);
  console.log(res);
});
```

The label has the [`State`](../reference/rest/v2/labels.md#state) of `DELETED` and the label's revision ID is incremented. The label cannot be applied and deleted labels are eventually purged. For more information, see [Label lifecycle](./label-lifecycle.md).
