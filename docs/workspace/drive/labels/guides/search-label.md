---
source: https://developers.google.com/workspace/drive/labels/guides/search-label
root: workspace
fetched_at: 2026-04-23T15:28:07.127Z
---

# Search for labels

Your organization can have multiple labels, with labels having several fields. The Labels API provides the [`labels`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels) collection to enable the reading of labels.

This page describes how to search for and retrieve labels.

## Methods

The [`labels`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels) collection provides the following methods for reading label values, each with a specific task in mind:

| Range | Reading |
| --- | --- |
| Single label by resource name | `labels.get</>` |
| All labels | `labels.list` |

## Get label by resource name

To get a single label by its resource name, use the [`labels.get`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/get) method.

A label resource name is required and can be structured as:

- `labels/{id}` or `labels/{id}@latest` —Gets the latest label revision.
- `labels/{id}@published` —Gets the current published label revision.
- `labels/{id}@{revisionId}` —Gets the label at the specified revision ID.

You also must specify:

- [`LabelView`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/LabelView) is `LABEL_VIEW_FULL` to set the Resource view applied to label responses. `LABEL_VIEW_FULL` returns all possible fields.

This example uses the `Name` to get a single label by its resource name.

### Python

```
# Label name, with or without revision:
#
# Revision specified:
# labels/LABEL_ID@published
# labels/LABEL_ID@latest
# labels/LABEL_ID@1
#
# No revision specified, returns latest revision:
# labels/LABEL_ID

name = "labels/NAME@published"

# Label view controls level of data in response
view = 'LABEL_VIEW_FULL'

label = service.labels().get(name=name, view=view).execute()
```

### Node.js

```
# Label name, with or without revision:
#
# Revision specified:
# labels/LABEL_ID@published
# labels/LABEL_ID@latest
# labels/LABEL_ID@1
#
# No revision specified, returns latest revision:
# labels/LABEL_ID

name = "labels/NAME@published"

# Label view controls level of data in response
view = 'LABEL_VIEW_FULL'

service.labels.get({
  'name': name,
  'view': view
}, (err, res) => {
  if (err) return console.error('The API returned an error: ' + err);
  console.log(res);
});
```

## List all labels

To get a list of labels, use the [`labels.list`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/list) method.

You also must specify:

- A [`customer`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/labels/list) to scope this list request to. If `customer` is unset, all labels within the current customer are returned.
- [`LabelView`](https://developers.google.com/workspace/drive/labels/reference/rest/v2/LabelView) is `LABEL_VIEW_FULL` to set the Resource view applied to label responses. `LABEL_VIEW_FULL` returns all possible fields.

This example uses the `CUSTOMER` to retrieve the label list.

### Python

```
response = service.labels().list(
  customer='customers/CUSTOMER', view='LABEL_VIEW_FULL').execute()
```

### Node.js

```
const params = {
  'customer': 'customers/CUSTOMER',
  'view': 'LABEL_VIEW_FULL'
};

service.labels.list(params, (err, res) => {
if (err) return console.error('The API returned an error: ' + err);
const labels = res.data.labels;
if (labels) {
  labels.forEach((label) => {
    const name = label.name;
    const title = label.properties.title;
    console.log(\`${name}\t${title}\`);
  });
} else {
  console.log('No Labels');
  }
});
```
