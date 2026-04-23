---
source: https://developers.google.com/apps-script/reference/card-service/collapse-control
root: apps-script
fetched_at: 2026-04-23T15:19:02.857Z
---

# Class CollapseControl

## Page Summary

- CollapseControl is a customizable control for collapsing and expanding content, available for Google Chat apps and in developer preview for Google Workspace add-ons.
- Key methods for CollapseControl include setting the collapse and expand buttons and setting the horizontal alignment.
- The `setCollapseButton` and `setExpandButton` methods require a Button object and return the CollapseControl object for chaining.
- The `setHorizontalAlign` method requires a HorizontalAlignment value and returns the CollapseControl object for chaining.

A customizable collapse and expand control.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const collapseButton =
    CardService.newTextButton()
        .setTextButtonStyle(CardService.TextButtonStyle.BORDERLESS)
        .setText('Collapse');

const expandButton =
    CardService.newImageButton()
        .setImageButtonStyle(CardService.ImageButtonStyle.FILLED);

const collapseControl =
    CardService.newCollapseControl()
        .setHorizontalAlign(CardService.HorizontalAlignment.END)
        .setExpandButton(expandButton)
        .setCollapseButton(collapseButton);
```

## Detailed documentation

### setCollapseButton(button)

Sets the `Button` that is displayed for "show less" button. Optional.  
Must be set together with collapse button.

```
const collapseButton =
    CardService.newTextButton().setText('Collapse');

const collapseControl =
    CardService.newCollapseControl()
        .setCollapseButton(collapseButton);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `button` | `Button` | The collapse button to set. |

#### Return

`CollapseControl` — This object, for chaining.

---

### setExpandButton(button)

Sets the `Button` that is displayed for "show more" button. Optional.  
Must be set together with collapse button.

```
const expandButton =
    CardService.newTextButton().setText('Expand');

const collapseControl =
    CardService.newCollapseControl()
        .setExpandButton(expandButton);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `button` | `Button` | The expand button to set. |

#### Return

`CollapseControl` — This object, for chaining.

---

### setHorizontalAlign(horizontalAlignment)

Sets the `HorizontalAlignment` of the `CollapseControl`. Optional. \*

```
const collapseControl = CardService.newCollapseControl().setHorizontalAlign(
    CardService.HorizontalAlignment.START,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `horizontalAlignment` | `HorizontalAlignment` | The horizontal alignment of the CollapseControl widget. |

#### Return

`CollapseControl` — This object, for chaining.
