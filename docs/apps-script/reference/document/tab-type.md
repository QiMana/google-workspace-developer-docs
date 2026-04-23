---
source: https://developers.google.com/apps-script/reference/document/tab-type
root: apps-script
fetched_at: 2026-04-23T15:20:00.726Z
---

# Enum TabType

## Page Summary

- TabType is an enumeration of all the tab types available in DocumentApp.
- You can access TabType enum values by calling its parent class (DocumentApp), the enum name (TabType), and the property name.
- The `getType()` method can be used with a tab element to check its type against the TabType enumeration before casting.
- Currently, the only available TabType is `DOCUMENT_TAB`.

An enumeration of all the tab types.

To call an enum, you call its parent class, name, and property. For example, ` DocumentApp.TabType.TAB`.

Use the `TabType` enumeration to check the type of a given element, for instance:

```
const tab = DocumentApp.getActiveDocument().getActiveTab();
// Use getType() to determine the tab's type before casting.
if (tab.getType() === DocumentApp.TabType.DOCUMENT_TAB) {
  // It's a document tab, write some text to it.
  tab.asDocumentTab().setText('Hello World!');
} else {
  // There are currently no types other than DOCUMENT_TAB.
}
```
