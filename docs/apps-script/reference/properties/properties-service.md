---
source: https://developers.google.com/apps-script/reference/properties/properties-service
root: apps-script
fetched_at: 2026-04-23T15:20:56.533Z
---

# Class PropertiesService

## Page Summary

- PropertiesService allows scripts to store simple data in key-value pairs with different scopes.
- Properties can be scoped to one script, one user of a script, or one document in which an add-on is used, but cannot be shared between scripts.
- There are three types of property stores: document properties (accessible by all users within a document/spreadsheet/form), script properties (accessible by all users within a script), and user properties (accessible only by the current user within a script).
- The methods `getDocumentProperties()`, `getScriptProperties()`, and `getUserProperties()` are used to access these different property stores.
- Document properties are only available for scripts published as add-ons or bound to a Google file type.

Allows scripts to store simple data in key-value pairs scoped to one script, one user of a script, or one document in which an add-on is used. Properties cannot be shared between scripts. For more information about when to use each type of property, see the [guide to the Properties service](../../guides/properties.md).

```
// Sets three properties of different types.
const documentProperties = PropertiesService.getDocumentProperties();
const scriptProperties = PropertiesService.getScriptProperties();
const userProperties = PropertiesService.getUserProperties();

documentProperties.setProperty('DAYS_TO_FETCH', '5');
scriptProperties.setProperty(
    'SERVER_URL',
    'http://www.example.com/MyWeatherService/',
);
userProperties.setProperty('DISPLAY_UNITS', 'metric');
```

## Detailed documentation

### getDocumentProperties()

Gets a property store (for this script only) that all users can access within the open document, spreadsheet, or form. It is only available if the script is published and executing as an add-on or if it is [bound](../../guides/bound.md) to a Google file type. When document properties are not available this method returns `null`. Document properties created by a script are not accessible outside that script, even by other scripts accessing the same document.

#### Return

— A property store for this script only that all users of the current document can access, or `null` if the script is not either an add-on or bound to a Google Workspace file.

---

### getScriptProperties()

Gets a property store that all users can access, but only within this script.

#### Return

— A property store that all users of the script can access.

---

### getUserProperties()

Gets a property store that only the current or effective user can access, and only within this script.

#### Return

— A property store that only the current or effective user of the script can access.
