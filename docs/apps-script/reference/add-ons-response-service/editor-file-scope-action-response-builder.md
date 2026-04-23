---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/editor-file-scope-action-response-builder
root: apps-script
fetched_at: 2026-04-23T15:18:38.365Z
---

# Class EditorFileScopeActionResponseBuilder

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
AddOnsResponseService.newEditorFileScopeActionResponseBuilder()
    .requestFileScopeForActiveDocument()
    .build();
```

Note: To call this method, you must add the `drive.file` scope to the add-on's manifest.

#### Return

`EditorFileScopeActionResponseBuilder` — This object, for chaining.
