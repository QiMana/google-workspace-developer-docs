---
source: https://developers.google.com/apps-script/reference/card-service/action-response-builder
root: apps-script
fetched_at: 2026-04-23T15:18:57.649Z
---

# Class ActionResponseBuilder

## Page Summary

- ActionResponseBuilder is used to build ActionResponse objects.
- The `build()` method constructs and validates the ActionResponse.
- Methods like `setNavigation`, `setNotification`, `setOpenLink`, and `setStateChanged` configure the behavior of the action response.

## Detailed documentation

### build()

Builds the current action response and validates it.

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the constructed action response isn't valid.

---

### setNavigation(navigation)

Sets the response to a `Navigation` action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `navigation` | `Navigation` | The `Navigation` to use. |

#### Return

`ActionResponseBuilder` — This object, for chaining.

---

### setNotification(notification)

Sets the notification to display when the action is activated.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `notification` | `Notification` | The `Notification` to use. |

#### Return

`ActionResponseBuilder` — This object, for chaining.

---

### setOpenLink(openLink)

Sets the URL to navigate to when the action is activated.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `openLink` | `OpenLink` | The `OpenLink` to use. |

#### Return

`ActionResponseBuilder` — This object, for chaining.

---

### setStateChanged(stateChanged)

Sets a flag to indicate that this action changed the existing data state. For example, if the action created a task or updated contact information. When this flag is set to true, services such as Gmail can attempt to clear any cached state data associated with this action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `stateChanged` | `Boolean` | Whether this action has changed the existing state data. Defaults to false. |

#### Return

`ActionResponseBuilder` — This object, for chaining.
