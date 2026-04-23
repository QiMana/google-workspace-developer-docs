---
source: https://developers.google.com/apps-script/reference/card-service/editor-file-scope-action-response-builder
root: apps-script
fetched_at: 2026-04-23T15:19:05.771Z
---

# Class EditorFileScopeActionResponseBuilder

## Page Summary

- `EditorFileScopeActionResponseBuilder` is used to build `EditorFileScopeActionResponse` objects.
- The `build()` method constructs the `EditorFileScopeActionResponse`.
- The `requestFileScopeForActiveDocument()` method requests the `drive.file` scope for the active Editor document.
- Requesting the `drive.file` scope requires adding it to the add-on's manifest.

## Detailed documentation

### build()

Builds the current Editor action response.

#### Return

---

### requestFileScopeForActiveDocument()

Requests the `drive.file` scope for the current active Editor document.

```
// Display a permissions dialog to the user, requesting \`drive.file\` scope for
// the current document on behalf of this add-on.
CardService.newEditorFileScopeActionResponseBuilder()
    .requestFileScopeForActiveDocument()
    .build();
```

Note: To call this method, you must add the `drive.file` scope to the add-on's manifest.

#### Return

`EditorFileScopeActionResponseBuilder` — This object, for chaining.
