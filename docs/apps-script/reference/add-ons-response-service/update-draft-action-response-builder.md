---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/update-draft-action-response-builder
root: apps-script
fetched_at: 2026-04-23T15:18:42.741Z
---

# Class UpdateDraftActionResponseBuilder

## Detailed documentation

### build()

Builds the current update draft action response and validates it.

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the constructed UpdateDraftActionResponse isn't valid.

---

### setSendStatus(sendStatus)

Sets the enum field that determines whether or not the email sends after the update action.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sendStatus` | `SendStatus` | The enum that indicates whether or not the email sends after the update action. |

#### Return

`UpdateDraftActionResponseBuilder` — This object, for chaining.

---

### setUpdateDraftBccRecipientsAction(updateDraftBccRecipientsAction)

Sets an action that updates the email Bcc recipients of a draft.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `updateDraftBccRecipientsAction` | `UpdateDraftBccRecipientsAction` | The action that updates the draft Bcc recipients. |

#### Return

`UpdateDraftActionResponseBuilder` — This object, for chaining.

---

### setUpdateDraftBodyAction(updateDraftBodyAction)

Set an action that updates the email body of a draft.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `updateDraftBodyAction` | `UpdateDraftBodyAction` | The action that updates the draft body. |

#### Return

`UpdateDraftActionResponseBuilder` — This object, for chaining.

---

### setUpdateDraftCcRecipientsAction(updateDraftCcRecipientsAction)

Sets an action that updates the Cc recipients of a draft.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `updateDraftCcRecipientsAction` | `UpdateDraftCcRecipientsAction` | The action that updates the draft Cc recipients. |

#### Return

`UpdateDraftActionResponseBuilder` — This object, for chaining.

---

### setUpdateDraftSubjectAction(updateDraftSubjectAction)

Sets an action that updates the subject line of a draft.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `updateDraftSubjectAction` | `UpdateDraftSubjectAction` | The action that updates the subject line. |

#### Return

`UpdateDraftActionResponseBuilder` — This object, for chaining.

---

### setUpdateDraftToRecipientsAction(updateDraftToRecipientsAction)

Sets an action that updates the To recipients of a draft.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `updateDraftToRecipientsAction` | `UpdateDraftToRecipientsAction` | The action that updates the To recipients. |

#### Return

`UpdateDraftActionResponseBuilder` — This object, for chaining.
