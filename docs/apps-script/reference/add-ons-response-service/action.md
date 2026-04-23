---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/action
root: apps-script
fetched_at: 2026-04-23T15:18:34.796Z
---

# Class Action

An action that Google Workspace add-ons that extend Google Workspace Studio can use to render a new card.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

```
const link = AddOnsResponseService.newLink().setUrl('https://www.google.com');
const action =
    AddOnsResponseService.newAction()
        .setLink(link);

const renderAction = AddOnsResponseService.newRenderActionBuilder().setAction(action).build();
```

## Detailed documentation

### addModifyCard(modifyCard)

Adds a ModifyCard operation to the action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `modifyCard` | `ModifyCard` | The `ModifyCard` to use. |

#### Return

`Action` — This action object, for chaining.

---

### addNavigation(navigation)

Adds a card navigation to the action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `navigation` | `Navigation` | The `Navigation` to use. |

#### Return

`Action` — This action object, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the navigation argument is invalid.
