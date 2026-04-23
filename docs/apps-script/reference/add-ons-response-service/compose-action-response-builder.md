---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/compose-action-response-builder
root: apps-script
fetched_at: 2026-04-23T15:18:38.549Z
---

# Class ComposeActionResponseBuilder

## Detailed documentation

### build()

Builds the current compose action response and validates it.

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the constructed compose action response isn't valid.

---

### setGmailDraft(draft)

Sets the draft `GmailMessage` created using `GmailMessage.createDraftReply(body)` or similar functions.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `draft` | `GmailDraft` | The `GmailDraft` to use. |

#### Return

`ComposeActionResponseBuilder` — This object, for chaining.
