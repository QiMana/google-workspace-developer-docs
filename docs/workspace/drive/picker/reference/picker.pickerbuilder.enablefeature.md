---
source: https://developers.google.com/workspace/drive/picker/reference/picker.pickerbuilder.enablefeature
root: workspace
fetched_at: 2026-04-23T15:28:27.837Z
---

# Method PickerBuilder.enableFeature

## Method PickerBuilder.enableFeature

Enable a picker feature.

## Examples

Basic usage

```
const builder = new google.pickerPickerBuilder()
  .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
  .enableFeature(google.picker.Feature.MINE_ONLY);
```

## Signature

```
enableFeature(feature: Feature): PickerBuilder;
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
| `feature` | `Feature` | No |  |

## Returns

`PickerBuilder`
