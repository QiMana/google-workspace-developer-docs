---
source: https://developers.google.com/apps-script/reference/document/named-range
root: apps-script
fetched_at: 2026-04-23T15:19:44.919Z
---

# Class NamedRange

## Page Summary

- A NamedRange is a Range with a name and ID for later retrieval; names are not unique, but IDs are unique within the tab.
- Once added to a tab, a NamedRange cannot be modified, only removed.
- NamedRanges can be accessed by any script accessing the tab, and prefixing names with a unique string can help avoid conflicts.
- The available methods for a NamedRange are getId(), getName(), getRange(), and remove().

A `Range` that has a name and ID to allow later retrieval. Names are not necessarily unique; several different ranges in the same tab may share the same name, much like a class in HTML. By contrast, IDs are unique within the tab, like an ID in HTML. Once a `NamedRange` has been added to a tab, it cannot be modified, only removed.

A `NamedRange` can be accessed by any script that accesses the tab. To avoid unintended conflicts between scripts, consider prefixing range names with a unique string.

```
// Create a named range that includes every table in the active tab.
const documentTab =
    DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
const rangeBuilder = documentTab.newRange();
const tables = documentTab.getBody().getTables();
for (let i = 0; i < tables.length; i++) {
  rangeBuilder.addElement(tables[i]);
}
documentTab.addNamedRange('myUniquePrefix-tables', rangeBuilder.build());
```

## Detailed documentation

### getId()

Gets the ID of this `NamedRange`. The ID is unique within the tab.

#### Return

`String` — The range's ID, which is unique within the tab.

---

### getName()

Gets the name of this `NamedRange`. The name is not necessarily unique.

#### Return

`String` — The range's name, which is not necessarily unique.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### getRange()

Gets the range of elements associated with this `NamedRange`.

#### Return

`Range` — The range of elements associated with the name and ID.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`

---

### remove()

Removes this `NamedRange` from the tab. This method doesn't delete the contents of the range; it merely the removes the reference. Calling this method on a `NamedRange` that has already been removed has no effect.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/documents.currentonly`
- `https://www.googleapis.com/auth/documents`
