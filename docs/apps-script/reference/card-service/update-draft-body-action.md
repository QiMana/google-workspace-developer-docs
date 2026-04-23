---
source: https://developers.google.com/apps-script/reference/card-service/update-draft-body-action
root: apps-script
fetched_at: 2026-04-23T15:19:13.452Z
---

# Class UpdateDraftBodyAction

## Page Summary

- UpdateDraftBodyAction is used to update the body of an email draft.
- The `addUpdateContent` method adds specified content to the draft body with a defined content type.
- The `setUpdateType` method determines how the content update is applied to the draft body, such as inserting at the start, end, or cursor.

Updates the email draft body.

## Detailed documentation

### addUpdateContent(content, contentType)

Adds the specified content to the draft body. The type of the `content` is specified by `ContentType`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `content` | `String` | The content to insert to the email draft. |
| `contentType` | `ContentType` | The content type of the content to be inserted. |

#### Return

`UpdateDraftBodyAction` — This object, for chaining.

---

### setUpdateType(updateType)

Sets the `UpdateDraftBodyType` of this update action on the draft body. For example, inserting content at the start, end, or cursor position of the draft body.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `updateType` | `UpdateDraftBodyType` | The type of update to be performed on an email draft. |

#### Return

`UpdateDraftBodyAction` — This object, for chaining.
