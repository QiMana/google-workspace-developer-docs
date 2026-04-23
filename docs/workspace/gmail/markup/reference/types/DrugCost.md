---
source: https://developers.google.com/workspace/gmail/markup/reference/types/DrugCost
root: workspace
fetched_at: 2026-04-23T15:29:27.878Z
---

# DrugCost

Type name: [DrugCost](./DrugCost.md)

Extends [MedicalIntangible](./MedicalIntangible.md)

| Name | Type | Description |
| --- | --- | --- |
| applicableLocation | [AdministrativeArea](./AdministrativeArea.md) | The location in which the status applies. |
| costCategory | [DrugCostCategory](./DrugCostCategory.md) | The category of cost, such as wholesale, retail, reimbursement cap, etc. |
| costCurrency | [Text](./Text.md) | The currency (in 3-letter [ISO 4217 format](http://en.wikipedia.org/wiki/ISO_4217)) of the drug cost. |
| costOrigin | [Text](./Text.md) | Additional details to capture the origin of the cost data. For example, 'Medicare Part B'. |
| costPerUnit | [Number](./Number.md) or [Text](./Text.md) | The cost per unit of the drug. |
| drugUnit | [Text](./Text.md) | The unit in which the drug is measured, e.g. '5 mg tablet'. |
