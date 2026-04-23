---
source: https://developers.google.com/workspace/drive/picker/reference/picker.pickerbuilder.setcallback
root: workspace
fetched_at: 2026-04-23T15:28:28.557Z
---

# Method PickerBuilder.setCallback

Set the callback method. This method is called when the user selects items or cancels. The callback method receives a single callback object. The structure of the callback object is described in the [`JSON Guide`](./picker.responseobject.md).

## Signature

```
setCallback(method: (result: ResponseObject) => void): PickerBuilder;
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
| `method` | `(result: ResponseObject) => void` | No |  |
