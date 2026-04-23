---
source: https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder
root: apps-script
fetched_at: 2026-04-23T15:19:12.809Z
---

# Class UpdateDraftActionResponseBuilder

## Page Summary

- UpdateDraftActionResponseBuilder is used to build UpdateDraftActionResponse objects.
- This builder allows setting actions to update the Bcc, body, Cc, subject, and To recipients of an email draft.
- The `build()` method finalizes and validates the constructed response.

## Detailed documentation

### build()

Builds the current update draft action response and validates it.

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the constructed UpdateDraftActionResponse isn't valid.

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
