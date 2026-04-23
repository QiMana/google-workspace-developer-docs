---
source: https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder
root: apps-script
fetched_at: 2026-04-23T15:19:02.571Z
---

# Class ComposeActionResponseBuilder

## Page Summary

- The `ComposeActionResponseBuilder` is used to build `ComposeActionResponse` objects, which are responses to Actions that compose draft messages.
- This builder is not related to compose actions used for extending the Gmail compose UI.
- The `build()` method validates and returns the constructed `ComposeActionResponse`.
- The `setGmailDraft(draft)` method sets the Gmail draft to be used in the response.

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
