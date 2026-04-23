---
source: https://developers.google.com/apps-script/reference/card-service/open-link
root: apps-script
fetched_at: 2026-04-23T15:19:09.999Z
---

# Class OpenLink

## Page Summary

- OpenLink represents an action to open a link with options.
- It is available for Google Workspace add-ons and Google Chat apps.
- OpenLink can be configured to open links in an overlay or full screen, and to reload the add-on or do nothing when closed.
- Add-ons cannot detect window state or update if a link has the Cross-Origin-Opener-Policy (COOP) header enabled when trying to reload.
- Key methods for OpenLink include `setOnClose`, `setOpenAs`, and `setUrl`.

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
const actionResponse = CardService.newActionResponseBuilder()
                           .setOpenLink(
                               CardService.newOpenLink()
                                   .setUrl('https://www.google.com')
                                   .setOpenAs(CardService.OpenAs.FULL_SIZE)
                                   .setOnClose(CardService.OnClose.NOTHING),
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

`OpenLink` — This object, for chaining.

---

### setOpenAs(openAs)

Sets the behavior of URL when it is opened.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `openAs` | `OpenAs` | The opening setting. |

#### Return

`OpenLink` — This object, for chaining.

---

### setUrl(url)

Sets the URL to be opened. The URL must match a prefix [in the manifest allowlist](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests#allowlist).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `url` | `String` | The URL to open. |

#### Return

`OpenLink` — This object, for chaining.
