---
source: https://developers.google.com/apps-script/reference/card-service/suggestions-response
root: apps-script
fetched_at: 2026-04-23T15:19:09.917Z
---

# Class SuggestionsResponse

## Page Summary

- SuggestionsResponse is a response object used with TextInput widgets that implement autocomplete in Google Workspace add-ons and Google Chat apps.
- It can be created using `CardService.newSuggestionsResponseBuilder()` and allows adding multiple suggestions via `CardService.newSuggestions().addSuggestion()`.
- The `printJson()` method is available for debugging and prints the JSON representation of the object as a string.

A response object that can be returned from a suggestions callback function. This is used with `TextInput` widgets that implement autocomplete.

Available for Google Workspace add-ons and Google Chat apps.

```
const suggestionsResponse = CardService.newSuggestionsResponseBuilder()
                                .setSuggestions(
                                    CardService.newSuggestions()
                                        .addSuggestion('First suggestion')
                                        .addSuggestion('Second suggestion'),
                                    )
                                .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
