---
source: https://developers.google.com/apps-script/reference/card-service/suggestions
root: apps-script
fetched_at: 2026-04-23T15:19:10.343Z
---

# Class Suggestions

## Page Summary

- Suggestions provide autocomplete suggestions for TextInput widgets in Google Workspace add-ons and Google Chat apps.
- You can add individual text suggestions using `addSuggestion(suggestion)` or a list of text suggestions using `addSuggestions(suggestions)`.

Autocomplete suggestions to supplement a `TextInput` widget.

Available for Google Workspace add-ons and Google Chat apps.

```
const textInput = CardService.newTextInput().setSuggestions(
    CardService.newSuggestions()
        .addSuggestion('First suggestion')
        .addSuggestion('Second suggestion'),
);
```

## Detailed documentation

### addSuggestion(suggestion)

Add a text suggestion.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `suggestion` | `String` | The suggestion text. |

#### Return

`Suggestions` — This object, for chaining.

---

### addSuggestions(suggestions)

Add a list of text suggestions.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `suggestions` | `Object[]` | An array of string suggestions. |

#### Return

`Suggestions` — This object, for chaining.
