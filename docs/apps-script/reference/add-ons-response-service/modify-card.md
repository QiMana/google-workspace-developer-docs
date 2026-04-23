---
source: https://developers.google.com/apps-script/reference/add-ons-response-service/modify-card
root: apps-script
fetched_at: 2026-04-23T15:18:40.654Z
---

# Class ModifyCard

A builder for `ModifyCard` objects that changes and updates an existing card's interface by passing the `ModifyCard` object to a `Action`. For usage, see [Update configuration cards](../../../workspace/add-ons/studio/update-cards.md).

Only available for Google Workspace add-ons that extend Google Workspace Studio.

Sample usage:

```
const insertSection = AddOnsResponseService.newInsertSection().insertBelowSection('sample_id')
.setSection(CardService.newCardSection().setHeader('New Section'));

const modifyCard = AddOnsResponseService.newModifyCard().setInsertSection(insertSection);

const navigation = AddOnsResponseService.newNavigation().addModifyCard(modifyCard);
```

## Detailed documentation

### setInsertSection(insertSection)

Sets the `InsertSection` for this modify card object.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `insertSection` | `InsertSection` | The insert section to apply to the card. |

#### Return

`ModifyCard` — This modify card object, for chaining.

---

### setInsertWidget(insertWidget)

Sets the `InsertWidget` for this modify card object.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `insertWidget` | `InsertWidget` | The `InsertWidget` to apply to the card. |

#### Return

`ModifyCard` — This modify card object, for chaining.

---

### setRemoveSection(removeSection)

Sets the `RemoveSection` for this modify card object.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `removeSection` | `RemoveSection` | The `RemoveSection` to apply to the card. |

#### Return

`ModifyCard` — This modify card object, for chaining.

---

### setRemoveWidget(removeWidget)

Sets the `RemoveWidget` for this modify card object.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `removeWidget` | `RemoveWidget` | The `RemoveWidget` to apply to the card. |

#### Return

`ModifyCard` — This modify card object, for chaining.

---

### setReplaceSection(replacementSection)

Sets the replacement `CardSection` for this modify card object, the replacement section should have the same id as an existing card section.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `replacementSection` | `CardSection` | The replacement section to overwrite an existing card section. |

#### Return

`ModifyCard` — This modify card object, for chaining.

---

### setReplaceWidget(replacementWidget)

Sets the replacement widget for this modify card object, the replacement widget should have the same id as an existing widget.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `replacementWidget` | `Widget` | The replacement widget to overwrite an existing widget. |

#### Return

`ModifyCard` — This modify card object, for chaining.

---

### setUpdateWidget(updateWidget)

Sets the `UpdateWidget` for this modify card object.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `updateWidget` | `UpdateWidget` | The `UpdateWidget` to apply to the card. |

#### Return

`ModifyCard` — This modify card object, for chaining.
