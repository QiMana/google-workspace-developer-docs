---
source: https://developers.google.com/apps-script/reference/forms/grid-validation
root: apps-script
fetched_at: 2026-04-23T15:20:15.248Z
---

# Class GridValidation

## Page Summary

- GridValidation is a DataValidation specifically for GridItem in Google Forms.
- It allows setting validation rules like requiring one response per column for a GridItem.
- GridValidation can include custom help text to guide user input.

A DataValidation for a `GridItem`.

```
// Add a grid item to a form and require one response per column.
const form = FormApp.create('My Form');
const gridItem = form.addGridItem();
gridItem.setTitle('Rate your interests')
    .setRows(['Cars', 'Computers', 'Celebrities'])
    .setColumns(['Boring', 'So-so', 'Interesting']);
const gridValidation = FormApp.createGridValidation()
                           .setHelpText('Select one item per column.')
                           .requireLimitOneResponsePerColumn()
                           .build();
gridItem.setValidation(gridValidation);
```
