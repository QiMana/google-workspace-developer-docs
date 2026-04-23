---
source: https://developers.google.com/apps-script/reference/card-service/grid-item
root: apps-script
fetched_at: 2026-04-23T15:19:06.240Z
---

# Class GridItem

## Page Summary

- GridItems are interactive elements within a grid widget, available for Google Workspace add-ons and Google Chat apps.
- Enums like `CardService.GridItemLayout.TEXT_BELOW` are called by referencing their parent class, name, and property.
- GridItem objects can be configured using methods such as `setIdentifier`, `setImage`, `setLayout`, `setSubtitle`, `setTextAlignment`, and `setTitle`.
- The `setIdentifier` method assigns an ID that is returned in the parent grid's on\_click callback.
- Methods like `setLayout` and `setTextAlignment` have default values if not explicitly set.

The items users interact with within a grid widget.

Available for Google Workspace add-ons and Google Chat apps.

To call an enum, you call its parent class, name, and property. For example, ` CardService.GridItemLayout.TEXT_BELOW`.

```
const gridItem = CardService.newGridItem()
                     .setIdentifier('itemA')
                     .setTitle('This is a cat')
                     .setImage(CardService.newImageComponent())
                     .setLayout(CardService.GridItemLayout.TEXT_BELOW);
```

## Detailed documentation

### setIdentifier(id)

Sets the identifier for the grid item. When a user clicks this grid item, this ID is returned in the parent grid's on\_click call back parameters.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID. |

#### Return

`GridItem` — This object, for chaining.

---

### setImage(image)

Sets the image for this grid item.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `image` | `ImageComponent` | The ImageComponent object. |

#### Return

`GridItem` — This object, for chaining.

---

### setLayout(layout)

Sets the layout of text and image for the grid item. Default is TEXT\_BELOW

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `layout` | `GridItemLayout` | The layout setting. |

#### Return

`GridItem` — This object, for chaining.

---

### setSubtitle(subtitle)

Sets the subtitle of the grid item.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `subtitle` | `String` | The subtitle text. |

#### Return

`GridItem` — This object, for chaining.

---

### setTextAlignment(alignment)

Sets the horizontal alignment of the grid item. Default is START.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignment` | `HorizontalAlignment` | The alignment setting. |

#### Return

`GridItem` — This object, for chaining.

---

### setTitle(title)

Sets the title text of the grid item.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title text. |

#### Return

`GridItem` — This object, for chaining.
