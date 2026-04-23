---
source: https://developers.google.com/workspace/drive/picker/reference/picker.pickerbuilder.setlocale
root: workspace
fetched_at: 2026-04-23T15:28:28.277Z
---

# Method PickerBuilder.setLocale

Set the locale for the picker. The locale is an ISO 639 language code. If the language is not supported, en-US is used.

## Examples

Basic usage

```
const builder = new google.pickerPickerBuilder()
  .setLocale('ES_419');
```

Set locale from navigator languages

```
const builder = new google.pickerPickerBuilder()
  .setLocale(navigator.languages[0]);
```

See [Navigator.languages](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages) for more information.

## Signature

```
setLocale(locale: Locales): PickerBuilder;
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
| `locale` | `Locales` | No |  |
