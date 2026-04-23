---
source: https://developers.google.com/apps-script/reference/language
root: apps-script
fetched_at: 2026-04-23T15:20:50.811Z
---

# Language Service

## Page Summary

- The Language service enables scripts to automatically translate text.
- The `LanguageApp` class provides methods for translating text.
- The `translate` method is used to translate text from a source language to a target language.

This service allows scripts to automatically translate text.

```
// The code below will write 'Esta es una prueba' to the log.
var spanish = LanguageApp.translate('This is a test', 'en', 'es');
Logger.log(spanish);
```
