---
source: https://developers.google.com/apps-script/reference/card-service/carousel
root: apps-script
fetched_at: 2026-04-23T15:19:00.282Z
---

# Class Carousel

## Page Summary

- Carousel displays a list of widgets in a slideshow format with navigation buttons.
- Carousels are available for Google Workspace add-ons and Google Chat apps.
- The `addCarouselCard(card)` method is used to add a card to the carousel.

Carousel, also known as slider, rotates and displays a list of widgets in a slideshow format, with buttons navigating to the previous or next widget.

Available for Google Workspace add-ons and Google Chat apps.

```
const carousel =
    CardService.newCarousel()
        .addCarouselCard(CardService.newCarouselCard().addWidget(
            CardService.newTextParagraph().setText('The first text paragraph in carousel')))
        .addCarouselCard(CardService.newCarouselCard().addWidget(
            CardService.newTextParagraph().setText('The second text paragraph in carousel')))
        .addCarouselCard(CardService.newCarouselCard().addWidget(
            CardService.newTextParagraph().setText('The third text paragraph in carousel')))
```

## Detailed documentation

### addCarouselCard(card)

Adds a carousel card.

```
const carousel =
    CardService.newCarousel()
        .addCarouselCard(CardService.newCarouselCard().addWidget(
            CardService.newTextParagraph().setText('The first text paragraph in carousel')));
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `card` | `CarouselCard` | The carousel card to add. |

#### Return

`Carousel` — This object, for chaining.

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
