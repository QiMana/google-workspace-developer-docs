---
source: https://developers.google.com/apps-script/reference/card-service/link-preview
root: apps-script
fetched_at: 2026-04-23T15:19:08.602Z
---

# Class LinkPreview

## Page Summary

- Card action that displays a link preview card and smart chip in the host app.
- Methods include printing JSON, setting the link preview title, setting the preview card, and setting the smart chip title.
- `setLinkPreviewTitle` sets the title above the preview card, or defaults to the preview card header if unset.
- `setPreviewCard` sets the card displaying information about a third-party or non-Google link.
- `setTitle` sets the title in the smart chip for the link preview, or defaults to the preview card header if unset.

Card action that displays a link preview card and smart chip in the host app. To use link previews, you must build and return a `LinkPreview` object in your script. For more information, refer to [Preview links with smart chips](../../../workspace/add-ons/guides/preview-links-smart-chips.md).

```
const decoratedText =
    CardService.newDecoratedText().setTopLabel('Hello').setText('Hi!');

const cardSection = CardService.newCardSection().addWidget(decoratedText);

const card = CardService.newCardBuilder().addSection(cardSection).build();

return CardService.newLinkPreview().setPreviewCard(card).setTitle(
    'Smart chip title');
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`

---

### setLinkPreviewTitle(title)

Sets the title that displays in the link preview above the preview card. If unset, the link preview displays the header of the `PreviewCard`.

```
return CardService.newLinkPreview().setLinkPreviewTitle('Link preview title');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title of the link preview. |

#### Return

`LinkPreview` — This object, for chaining.

---

### setPreviewCard(previewCard)

Sets the card that displays information about a link from a third-party or non-Google service.

```
const decoratedText =
    CardService.newDecoratedText().setTopLabel('Hello').setText('Hi!');

const cardSection = CardService.newCardSection().addWidget(decoratedText);

const card = CardService.newCardBuilder().addSection(cardSection).build();

return CardService.newLinkPreview().setPreviewCard(card).setTitle(
    'Smart chip title');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `previewCard` | `Card` | The preview card. |

#### Return

`LinkPreview` — This object, for chaining.

---

### setTitle(title)

Sets the title that displays in the smart chip for the link preview. If unset, the smart chip displays the header of the `PreviewCard`.

```
return CardService.newLinkPreview().setTitle('Smart chip title');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title of the smart chip. |

#### Return

`LinkPreview` — This object, for chaining.
