---
source: https://developers.google.com/apps-script/manifest/sheets
root: apps-script
fetched_at: 2026-04-23T15:18:31.274Z
---

# Sheets macro manifest resource

## Page Summary

- To define Sheets macros, you must use a specific configuration within a manifest, ensuring all required fields are included.
- The top-level Sheets configuration in the manifest is exclusively used for defining Sheets macros and contains a required list of macro objects.
- Each individual Macro object within the manifest configuration requires defining a function name and a menu name.
- Macros can optionally have a unique default keyboard shortcut defined using the format "Ctrl+Alt+Shift+Number".

The configuration used to define [Sheets macros](https://developers.google.com/apps-script/guides/sheets/macros#manifest_structure_for_macros). Manifests defining macros must include all fields marked as **Required**.

## Sheets

The top-level of the Sheets macro manifest configuration. This is only used to define Sheets macros.

JSON representation

```
{
  "macros": [
    {
      object (Macro)
    }
  ]
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>macros[]</code></td><td><p><code>object (Macro)</code></p><p><b>Required.</b> A list of defined macros and their associated properties.</p></td></tr></tbody></table>

### Macro

The configuration for a single macro. Definitions must include all fields marked as **Required**.

JSON representation

```
{
  "defaultShortcut": string,
  "functionName": string,
  "menuName": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>defaultShortcut</code></td><td><p><code>string</code></p>The keyboard shortcut that executes the macro. It must be in the form <code>Ctrl+Alt+Shift+*Number*</code>. Macros without shortcuts can only be executed from the **Tools** > **Macros** menu.</td></tr><tr><td><code>functionName</code></td><td><p><code>string</code></p><b>Required.</b> The name of the Apps Script function that executes the macro. By default, this matches the <code>menuName</code> for functions automatically created, but this is not a requirement.</td></tr><tr><td><code>menuName</code></td><td><p><code>string</code></p><b>Required.</b> The name of the macro as it appears in the Google Sheets UI.</td></tr></tbody></table>
