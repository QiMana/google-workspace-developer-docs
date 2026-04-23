---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/render-action
root: apps-script
fetched_at: 2026-04-23T15:18:41.993Z
---

# Class RenderAction

Renders or updates a card by performing an `Action` in response to a user interaction.

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const renderAction = AddOnsResponseService.newRenderActionBuilder()
.setAction(AddOnsResponseService.newAction().setLink(AddOnsResponseService.newLink().setUrl('https://www.google.com')))
.build();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`
