---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/link-preview
root: apps-script
fetched_at: 2026-04-23T15:18:39.494Z
---

# Class LinkPreview

Card action that displays a link preview card and smart chip in the host app. For more information, refer to [Preview links with smart chips](https://developers.google.com/apps-script/add-ons/editors/gsao/preview-links).

```
const decoratedText =
    CardService.newDecoratedText().setTopLabel('Hello').setText('Hi!');

const cardSection = CardService.newCardSection().addWidget(decoratedText);

const card = CardService.newCardBuilder().addSection(cardSection).build();

const linkPreview =
    AddOnsResponseService.newLinkPreview().setPreviewCard(card).setTitle(
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
const linkPreview = AddOnsResponseService.newLinkPreview().setLinkPreviewTitle(
    'Link preview title',
);
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

const linkPreview =
    AddOnsResponseService.newLinkPreview().setPreviewCard(card).setTitle(
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
const linkPreview =
    AddOnsResponseService.newLinkPreview().setTitle('Smart chip title');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | The title of the smart chip. |

#### Return

`LinkPreview` — This object, for chaining.
