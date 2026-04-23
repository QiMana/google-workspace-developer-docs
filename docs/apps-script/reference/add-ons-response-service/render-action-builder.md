---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/render-action-builder
root: apps-script
fetched_at: 2026-04-23T15:18:40.892Z
---

# Class RenderActionBuilder

Only available for Google Workspace add-ons that extend Google Workspace Studio.

## Detailed documentation

### build()

Builds the current render action and validates it.

#### Return

---

### setAction(action)

Sets the action that add-ons can use to update the UI to the render action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `Action` | The action to use. |

#### Return

`RenderActionBuilder` — This render action builder, for chaining.

---

### setHostAppAction(hostAppAction)

Sets the `HostAppAction` handled by individual host apps to the render action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `hostAppAction` | `HostAppAction` | The `HostAppAction` to send to the host app. |

#### Return

`RenderActionBuilder` — This render action builder, for chaining.
