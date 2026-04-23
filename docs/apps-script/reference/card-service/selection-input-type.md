---
source: https://developers.google.com/apps-script/reference/card-service/selection-input-type
root: apps-script
fetched_at: 2026-04-23T15:19:10.665Z
---

# Enum SelectionInputType

## Page Summary

- SelectionInputType defines the format of selectable items in user interfaces, like checkboxes or dropdowns.
- You cannot mix different selection input types, such as checkboxes and switches, within the same group.
- SelectionInputType is available for Google Chat apps and Google Workspace add-ons.
- To use an enum, you call its parent class, name, and property, like `CardService.SelectionInput.CHECK_BOX`.

The format of the items that users can select. Different options support different types of interactions. For example, users can select multiple checkboxes, but can only select one item from a dropdown menu.

Each selection input supports one type of selection. Mixing checkboxes and switches, for example, isn't supported.

Available for Google Chat apps and Google Workspace add-ons.

To call an enum, you call its parent class, name, and property. For example, ` CardService.SelectionInput.CHECK_BOX`.
