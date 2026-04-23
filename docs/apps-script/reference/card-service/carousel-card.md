---
source: https://developers.google.com/apps-script/reference/card-service/carousel-card
root: apps-script
fetched_at: 2026-04-23T15:19:02.076Z
---

# Class CarouselCard

## Page Summary

- A CarouselCard is a card that can be displayed as a carousel item.
- CarouselCard is available for Google Workspace add-ons and Google Chat apps.
- You can add widgets to the footer or the main body of the CarouselCard using the `addFooterWidget` and `addWidget` methods respectively.
- Both `addFooterWidget` and `addWidget` methods return the CarouselCard object for chaining.

A card that can be displayed as a carousel item.

Available for Google Workspace add-ons and Google Chat apps.

```
const carouselCard = CardService.newCarouselCard()
    .addWidget(
        CardService.newTextParagraph().setText('a text paragraph in the carousel card'))
    .addFooterWidget(
        CardService.newTextParagraph().setText('a text paragraph in the carousel card footer'));
```

## Detailed documentation

### addFooterWidget(widget)

Adds the given widget to the footer of this carousel card. Widgets are shown in the order they were added.

```
const carouselCard = CardService.newCarouselCard()
    .addFooterWidget(
        CardService.newTextParagraph().setText('a text paragraph in the carousel card footer'));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `widget` | `Widget` | A widget to add to the footer of the carousel card. |

#### Return

`CarouselCard` — This object, for chaining.

---

### addWidget(widget)

Adds the given widget to this carousel card. Widgets are shown in the order they were added.

```
const carouselCard = CardService.newCarouselCard()
    .addWidget(
        CardService.newTextParagraph().setText('a text paragraph in the carousel card'));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `widget` | `Widget` | A widget to add to the carousel card. |

#### Return

`CarouselCard` — This object, for chaining.
