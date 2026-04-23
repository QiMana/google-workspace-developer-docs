---
source: https://developers.google.com/apps-script/reference/card-service/card-section.html
root: apps-script
fetched_at: 2026-04-23T15:19:00.776Z
---

# Class CardSection

## Page Summary

- A CardSection is used in Google Workspace add-ons and Google Chat apps to organize widgets and provide visual separation.
- You can add various widgets to a CardSection using the `addWidget()` method, with a limit of 100 widgets per section.
- CardSections can be made collapsible using `setCollapsible()`, with the option to customize the collapse control buttons and specify the number of widgets visible when collapsed.
- The section's header can be set using the `setHeader()` method.

A card section holds groups of widgets and provides visual separation between them.

Available for Google Workspace add-ons and Google Chat apps.

```
const image = CardService.newImage();
// Build image ...
const textParagraph = CardService.newTextParagraph();
// Build text paragraph ...

const cardSection = CardService.newCardSection()
                        .setHeader('Section header')
                        .addWidget(image)
                        .addWidget(textParagraph);
```

## Detailed documentation

### addWidget(widget)

Adds the given widget to this section. Widgets are shown in the order they were added. You can't add more than 100 widgets to a card section.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `widget` | `Widget` | A widget to add to the section. |

#### Return

`CardSection` — This object, for chaining.

---

### setCollapseControl(collapseControl)

Sets the customizable expand and collapse buttons of the section. These buttons are shown only if the section is collapsible. If this field isn't set, default buttons are used.

Available for Google Chat apps. In developer preview for Google Workspace add-ons.

```
const collapseButton =
    CardService.newTextButton()
        .setTextButtonStyle(CardService.TextButtonStyle.BORDERLESS)
        .setText('show less');

const expandButton =
    CardService.newImageButton()
        .setImageButtonStyle(CardService.ImageButtonStyle.FILLED)
        .setMaterialIcon(CardService.newMaterialIcon().setName('bug_report'));

const collapsibleSection =
    CardService.newCardSection()
        .setCollapsible(true)
        .setNumUncollapsibleWidgets(1)
        .setCollapseControl(
            CardService.newCollapseControl()
                .setHorizontalAlign(CardService.HorizontalAlignment.CENTER)
                .setCollapseButton(collapseButton)
                .setExpandButton(expandButton),
        );
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `collapseControl` | `CollapseControl` | The collapse control setting. |

#### Return

`CardSection` — This object, for chaining.

---

### setCollapsible(collapsible)

Sets whether the section can be collapsed.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `collapsible` | `Boolean` | The collapsible setting. |

#### Return

`CardSection` — This object, for chaining.

---

### setHeader(header)

Sets the header of the section. Optional.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `header` | `String` | The header text. |

#### Return

`CardSection` — This object, for chaining.

---

### setId(id)

Sets the unique ID assigned that's used to identify the section to be mutated. Section mutation is only supported in Add-Ons.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The id of the section, with a limit of 64 characters and in format of \`\[a-zA-Z0-9-\]+\`. |

#### Return

`CardSection` — This object, for chaining.

---

### setNumUncollapsibleWidgets(numUncollapsibleWidgets)

Sets the number of widgets that are still shown when this section is collapsed. The widgets shown are always the first ones that were added.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `numUncollapsibleWidgets` | `Integer` | The number of widgets to show. |

#### Return

`CardSection` — This object, for chaining.
