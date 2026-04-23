---
source: https://developers.google.com/apps-script/reference/card-service/button-set
root: apps-script
fetched_at: 2026-04-23T15:18:59.260Z
---

# Class ButtonSet

## Page Summary

- ButtonSet holds a set of Button objects displayed in a row.
- ButtonSet is available for Google Workspace add-ons and Google Chat apps.
- You can add a button to a ButtonSet using the `addButton()` method.

Holds a set of objects that are displayed in a row.

Available for Google Workspace add-ons and Google Chat apps.

```
const textButton = CardService.newTextButton();
// Finish building the text button...

const imageButton = CardService.newImageButton();
// Finish building the image button...

const buttonSet =
    CardService.newButtonSet().addButton(textButton).addButton(imageButton);
```

## Detailed documentation

### addButton(button)

Adds a button.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `button` |  | The button to add. |

#### Return

`ButtonSet` — This object, for chaining.

---

### addEventAction(eventAction)

Adds the event action that can be performed on the widget.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `eventAction` | `EventAction` | The `EventAction` to be added. |

#### Return

`Widget` — The Object, for chaining.

---

### setId(id)

Sets the unique ID assigned that's used to identify the widget to be mutated. Widget mutation is only supported in Add-Ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The id of the widget, with a limit of 64 characters and in format of \`\[a-zA-Z0-9-\]+\`. |

#### Return

`Widget` — This object, for chaining.

---

### setVisibility(visibility)

Sets the visibility of the widget. The default value is \`VISIBLE\`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The `Visibility` of the widget. |

#### Return

`Widget` — The Object, for chaining.
