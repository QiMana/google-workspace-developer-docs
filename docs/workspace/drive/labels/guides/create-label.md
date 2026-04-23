---
source: https://developers.google.com/workspace/drive/labels/guides/create-label
root: workspace
fetched_at: 2026-04-23T15:28:07.538Z
---

# Create & publish a label

This page describes how to create and publish a label.

## Create a label

To create a label, use the [`create`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/create) method on the [`labels`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels) collection. Labels can optionally contain one or more [`Fields`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#field).

You also must specify:

- A [`LabelType`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#labeltype).
- A label `title` through the [`property`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#properties) method.
- `useAdminAccess` is `true` to use the user's administrator credentials. The server verifies that the user is an admin with the "Manage Labels" privilege before allowing access.

This example creates a standard, admin label with a specified title and one [`SelectionOptions`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#selectionoptions) `Field` with 2 [`Choices`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#choice).

### Python

```
label_body = {
'label_type': 'ADMIN',
'properties': {
    'title': 'TITLE'
},
'fields': [{
    'properties': {
        'display_name': 'DISPLAY_NAME'
    },
    'selection_options': {
        'list_options': {},
        'choices': [{
            'properties': {
                'display_name': 'CHOICE_1'
            }
        }, {
            'properties': {
                'display_name': 'CHOICE_2'
            }
        }]
    }
}]
}
response = service.labels().create(
    body=label_body, useAdminAccess=True).execute()
```

### Node.js

```
var label = {
'label_type': 'ADMIN',
'properties': {
    'title': 'TITLE'
},
'fields': [{
    'properties': {
    'display_name': 'DISPLAY_NAME'
    },
    'selection_options': {
    'list_options': {},
    'choices': [{
        'properties': {
        'display_name': 'CHOICE_1'
        }
    }, {
        'properties': {
        'display_name': 'CHOICE_2'
        }
    }]
    }
}]
};

service.labels.create({
  'resource': label,
  'use_admin_access': true
}, (err, res) => {
if (err) return console.error('The API returned an error: ' + err);
  console.log(res);
});
```

The label is created in the `UNPUBLISHED_DRAFT` [`State`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#state). It must be `PUBLISHED` for use on files and to be visible to users. For more information, see [Label lifecycle](https://developers.google.com/workspace/drive/labels/guides/label-lifecycle).

### Label limits

The following limits apply when creating and applying labels:

- Standard labels—150
- Fields per label—10
- User-applied labels per file—5

### Working with fields in labels

| `Field Type` | What users can do | Format considerations and limits |
| --- | --- | --- |
| [`SelectionOptions`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#selectionoptions) | Select one or more options from a list | Maximum number of options supported is 200   Maximum number of selections for a file is 10 as configured in [`ListOptions`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#listoptions) |
| [`IntegerOptions`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#integeroptions) | Enter a numerical value | Only whole numbers are supported |
| [`DateOptions`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#dateoptions) | Select a calendar date | (Optional) [`Date format`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#dateformat) can be set to “Long: Month DD, YYYY”, or “Short: MM/DD/YY“ |
| [`TextOptions`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#textoptions) | Enter text in a text box | Maximum character count supported is 100 |
| [`UserOptions`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#UserOptions) | Select one or more users from Google Workspace contacts. | Maximum number of user entries for a file is 10 as configured in [`ListOptions`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#listoptions) |

## Publish a label

The Labels API lets you publish a draft label once it's complete.

To publish a label, use the [`publish`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/publish) method and specify:

- A [Label resource](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#resource:-label) that represents every label. It contains a resource `Name` and `ID`, which is a globally unique identifier for the label.
- `useAdminAccess` is `true` to use the user's administrator credentials. The server verifies that the user is an admin with the "Manage Labels" privilege before allowing access.

This example uses the `ID` to identify and publish the correct label.

### Python

```
service.labels().publish(
name='labels/ID',
body={
  'use_admin_access': True
}).execute()
```

### Node.js

```
service.labels.publish({
  'resource': {
    'use_admin_access': true
},
'name': 'labels/ID'
}, (err, res) => {
  if (err) return console.error('The API returned an error: ' + err);
  console.log(res);
});
```

Once the label is published, the label moves to the `PUBLISHED` [`State`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels#state) and the label's revision ID is incremented. The label is then visible to users and can be applied to files. For more information, see [Label lifecycle](https://developers.google.com/workspace/drive/labels/guides/label-lifecycle).

### Constraints when publishing labels

- Once published, a label cannot return to its original draft state. For more information, see [Label lifecycle](https://developers.google.com/workspace/drive/labels/guides/label-lifecycle).
- Publishing a label creates a newly published revision. All previous draft revisions are deleted. Previously published revisions are kept but are subject to automated deletion as needed.
- Once published, some changes are no longer permitted. Generally, this means any change that invalidates or triggers new restrictions on existing metadata related to the label is rejected. For example, the following changes to a label aren't permitted after the label is published:
	- The label is directly deleted. (It must be disabled first, then deleted.)
		- The `Field.FieldType` is changed.
		- Updates to the Field validation options reject something previously accepted.
		- A reduction in maximum entries.
