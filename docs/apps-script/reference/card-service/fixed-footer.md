---
source: https://developers.google.com/apps-script/reference/card-service/fixed-footer
root: apps-script
fetched_at: 2026-04-23T15:19:06.143Z
---

# Class FixedFooter

## Page Summary

- A FixedFooter is a component shown at the bottom of a Card, available for Google Workspace add-ons and Google Chat apps.
- It can have a primary button, which must be a filled text button, and optionally a secondary button, which must be an outlined text button and is only shown if a primary button is set.

The fixed footer shown at the bottom of a `Card`.

Available for Google Workspace add-ons and Google Chat apps.

```
const fixedFooter = CardService.newFixedFooter().setPrimaryButton(
    CardService.newTextButton().setText('help').setOpenLink(
        CardService.newOpenLink().setUrl('http://www.google.com')),
);
```

## Detailed documentation

### setPrimaryButton(button)

Set the primary button in the fixed footer. The primary button must be a `TextButtonStyle.FILLED` button. If the background color is unset for the primary button, the button uses the primary color defined in the add-on [manifest](https://developers.google.com/gmail/add-ons/concepts/manifests#manifest_structure_for_gmail_add-ons).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `button` | `TextButton` | The button to add. |

#### Return

`FixedFooter` — This object, for chaining.

---

### setSecondaryButton(button)

Set the secondary button in the fixed footer. The secondary button must be a `TextButtonStyle.OUTLINED` button. This method does nothing if `setPrimaryButton(button)` isn't called to set the primary button.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `button` | `TextButton` | The button to add. |

#### Return

`FixedFooter` — This object, for chaining.
