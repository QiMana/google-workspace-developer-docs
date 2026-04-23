---
source: https://developers.google.com/apps-script/reference/forms/grid-validation-builder
root: apps-script
fetched_at: 2026-04-23T15:20:14.937Z
---

# Class GridValidationBuilder

## Page Summary

- GridValidationBuilder is a DataValidationBuilder for a GridValidation in Google Apps Script forms.
- It can be used to set validation rules for grid items, such as requiring a limit of one response per column.
- The `requireLimitOneResponsePerColumn()` method is available to enforce this rule.

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

## Detailed documentation

### requireLimitOneResponsePerColumn()

Requires limit of one response per column for a grid item.

#### Return

`GridValidationBuilder` — this validation builder, for chaining
