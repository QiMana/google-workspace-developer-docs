---
source: https://developers.google.com/workspace/drive/picker/reference/picker.pickerbuilder.setselectablemimetypes
root: workspace
fetched_at: 2026-04-23T15:28:29.130Z
---

# Method PickerBuilder.setSelectableMimeTypes

Set the list of MIME types which will be selectable. Use commas to separate MIME types if more than one is required. If you don't set MIME types, files of all MIME types are displayed in the view.

## Examples

Basic usage with multiple MIME types

```
const mimeTypes = ['image/png', 'image/jpeg'];
const builder = new google.pickerPickerBuilder()
  .setSelectableMimeTypes(mimeTypes.join(','));
```

Google Workspace MIME types

```
const mimeTypes = [
 'application/vnd.google-apps.document',
 'application/vnd.google-apps.presentation',
 'application/vnd.google-apps.spreadsheet',
];

const builder = new google.pickerPickerBuilder()
  .setSelectableMimeTypes(mimeTypes.join(','));
```

## Signature

```
setSelectableMimeTypes(type: string): PickerBuilder;
```

## Details

| Optional | No |
| --- | --- |
| Final | No |
| Protected | No |
| Static | No |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `type` | `string` | No |  |
