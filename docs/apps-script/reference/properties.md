---
source: https://developers.google.com/apps-script/reference/properties
root: apps-script
fetched_at: 2026-04-23T15:20:56.688Z
---

# Properties Service

## Page Summary

- The Properties service allows scripts to store key-value pairs with different scopes: script, user, or document.
- The `Properties` object provides methods for accessing and managing key-value pairs within a specific property store.
- The `PropertiesService` provides methods to get property stores for the document, script, or user.
- `ScriptProperties` and `UserProperties` are types of persistent key-value stores with script-wide or user-specific scopes respectively.

This service allows scripts to store strings as key-value pairs scoped to one script, one user of a script, or one document in which an [editor add-on](../../workspace/add-ons/concepts/types.md#editor_add-ons) is used. For more information about when to use each type of property, see the [guide to the Properties service](../guides/properties.md).
