---
source: https://developers.google.com/workspace/drive/picker/reference/picker.pickerbuilder.setappid
root: workspace
fetched_at: 2026-04-23T15:28:28.213Z
---

# Method PickerBuilder.setAppId

Sets the Id of the application needing to access the user's files via the [Drive API](../../api/guides/about-sdk.md).

This is required for the `https://www.googleapis.com/auth/drive.file` scope.

## Examples

Basic usage

```
const builder = new google.pickerPickerBuilder()
  .setAppId('1234567890');
```

## Signature

```
setAppId(appId: string): PickerBuilder;
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
| `appId` | `string` | No | The Cloud project number. |
