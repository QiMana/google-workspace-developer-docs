---
source: https://developers.google.com/apps-script/reference/card-service/update-visibility-action
root: apps-script
fetched_at: 2026-04-23T15:19:14.627Z
---

# Class UpdateVisibilityAction

Updates the visibility of a card widget to make it display or to hide it.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const updateVisibilityAction = CardService.newUpdateVisibilityAction()
.setVisibility(CardService.Visibility.VISIBLE);
```

## Detailed documentation

### setVisibility(visibility)

Sets the visibility of widgets to visible or hidden.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `visibility` | `Visibility` | The visibility of the widgets. |

#### Return

`UpdateVisibilityAction` — The UpdateVisibilityAction, for chaining.
