---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/remove-section
root: apps-script
fetched_at: 2026-04-23T15:18:40.518Z
---

# Class RemoveSection

A builder for `RemoveSection` objects. Developers can remove a section from the card by passing a `RemoveSection` to `ModifyCard`

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const removeSection = AddOnsResponseService.newRemoveSection().setSectionId('sample_id');

const modifyCard = AddOnsResponseService.newModifyCard().setRemoveSection(removeSection);
```

## Detailed documentation

### setSectionId(sectionId)

Sets the section ID of the section to be removed.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sectionId` | `String` | The ID of the section to be removed. |

#### Return

`RemoveSection` — This remove section object, for chaining.
