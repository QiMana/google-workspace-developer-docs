---
source: https://developers.google.com/apps-script/reference/card-service/suggestions-response-builder
root: apps-script
fetched_at: 2026-04-23T15:19:11.436Z
---

# Class SuggestionsResponseBuilder

## Page Summary

- SuggestionsResponseBuilder is used to build SuggestionsResponse objects.
- It is available for Google Workspace add-ons and Google Chat apps.
- It has methods to build the suggestions response and set the suggestions used in autocomplete in text fields.

Available for Google Workspace add-ons and Google Chat apps.

## Detailed documentation

### build()

Builds the current suggestions response and validates it.

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the constructed suggestions response isn't valid.

---

### setSuggestions(suggestions)

Sets the suggestions used in auto complete in text fields.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `suggestions` |  | The to use. |

#### Return

`SuggestionsResponseBuilder` — This object.
