---
source: https://developers.google.com/apps-script/reference/forms/item-type
root: apps-script
fetched_at: 2026-04-23T15:20:24.585Z
---

# Enum ItemType

## Page Summary

- ItemType is an enum representing the supported types of form items in Google Forms.
- Item types can be accessed using `FormApp.ItemType`.
- The available Item Types include various question types like CHECKBOX, MULTIPLE\_CHOICE, TEXT, and layout items like IMAGE, SECTION\_HEADER, and VIDEO.

An enum representing the supported types of form items. Item types can be accessed from `FormApp.ItemType`.

To call an enum, you call its parent class, name, and property. For example, ` FormApp.ItemType.CHECKBOX`.

```
// Open a form by ID and add a new section header.
const form = FormApp.create('Form Name');
const item = form.addSectionHeaderItem();
item.setTitle('Title of new section');

// Check the item type.
if (item.getType() === FormApp.ItemType.SECTION_HEADER) {
  item.setHelpText('Description of new section.');
}
```
