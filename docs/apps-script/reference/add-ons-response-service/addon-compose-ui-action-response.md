---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/addon-compose-ui-action-response
root: apps-script
fetched_at: 2026-04-23T15:18:36.301Z
---

# Class AddonComposeUiActionResponse

## Class AddonComposeUiActionResponse

Represents an action on the addon compose ui.

```
// An AddonComposeUiActionResponse that dismiss the addon compose ui.
const addonComposeUiActionResponse =
    AddOnsResponseService.newAddonComposeUiActionResponseBuilder()
        .setType(AddOnsResponseService.AddonComposeUiActionType.DISMISS)
        .build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
