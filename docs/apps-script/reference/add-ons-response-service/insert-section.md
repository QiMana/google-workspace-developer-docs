---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/insert-section
root: apps-script
fetched_at: 2026-04-23T15:18:38.934Z
---

# Class InsertSection

A builder for InsertSection objects. Developers can insert a new section to the card by passing a `InsertSection` to `ModifyCard`

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const insertSection = AddOnsResponseService.newInsertSection().insertBelowSection('sample_id')
.setSection(CardService.newCardSection().setHeader('New Section'));

const modifyCard = AddOnsResponseService.newModifyCard()
.setInsertSection(insertSection);
```

## Detailed documentation

### insertAtTop(onCardTop)

Sets the onCardTop flag, which indicates whether the new section should be inserted at the top of the card.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `onCardTop` | `Boolean` | The onCardTop flag. |

#### Return

`InsertSection` — The insert section object, for chaining.

---

### insertBelowSection(sectionId)

Sets the section ID, and the new section is inserted below it. If the section ID is not found, then the new section is inserted at the end of the card.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `sectionId` | `String` | The ID of the section to insert below. |

#### Return

`InsertSection` — The insert section object, for chaining.

---

### setSection(section)

Sets the card section to be inserted.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `section` | `CardSection` | The `CardSection` to be inserted. |

#### Return

`InsertSection` — The insert section object, for chaining.
