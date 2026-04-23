---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/open-link
root: apps-script
fetched_at: 2026-04-23T15:18:40.452Z
---

# Class OpenLink

Represents an action to open a link with some options.

Available for Google Workspace add-ons and Google Chat apps.

```
// A button that opens as a link in an overlay and
// requires a reload when closed.
const button = CardService.newTextButton()
                   .setText('This button opens a link in an overlay window')
                   .setOpenLink(
                       CardService.newOpenLink()
                           .setUrl('https://www.google.com')
                           .setOpenAs(CardService.OpenAs.OVERLAY)
                           .setOnClose(CardService.OnClose.RELOAD_ADD_ON),
                   );

// An action response that opens a link in full screen and
// requires no action when closed.
const actionResponse =
    AddOnsResponseService.newActionResponseBuilder()
        .setOpenLink(
            AddOnsResponseService.newOpenLink()
                .setUrl('https://www.google.com')
                .setOpenAs(AddOnsResponseService.OpenAs.FULL_SIZE)
                .setOnClose(AddOnsResponseService.OnClose.NOTHING),
            )
        .build();
```

**Note:** To reload add-ons after closing a link, don't use a link with Cross-Origin-Opener-Policy (COOP) header enabled. If COOP is enabled in a link, add-ons can't detect the window state, and the add-on card doesn't update.

## Detailed documentation

### setOnClose(onClose)

Sets the behavior of the URL action when the URL window or tab is closed.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `onClose` | `OnClose` | The closing setting. |

#### Return

`OpenLink` — This open link object, for chaining.

---

### setOpenAs(openAs)

Sets the behavior of URL when it is opened.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `openAs` | `OpenAs` | The opening setting. |

#### Return

`OpenLink` — This open link object, for chaining.

---

### setUrl(url)

Sets the URL to be opened. The URL must match a prefix [whitelisted in the manifest](../../../workspace/add-ons/concepts/workspace-manifests.md#manifest_structure_for_gmail_add-ons).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The destination URL to open. |

#### Return

`OpenLink` — This open link object, for chaining.
