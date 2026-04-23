---
source: https://developers.google.com/workspace/gmail/markup/reference/types/DrugCost
root: workspace
fetched_at: 2026-04-23T15:29:27.878Z
---

# DrugCost

Type name: [DrugCost](https://developers.google.com/workspace/gmail/markup/reference/types/DrugCost)

Extends [MedicalIntangible](https://developers.google.com/workspace/gmail/markup/reference/types/MedicalIntangible)

| Name | Type | Description |
| --- | --- | --- |
| applicableLocation | [AdministrativeArea](https://developers.google.com/workspace/gmail/markup/reference/types/AdministrativeArea) | The location in which the status applies. |
| costCategory | [DrugCostCategory](https://developers.google.com/workspace/gmail/markup/reference/types/DrugCostCategory) | The category of cost, such as wholesale, retail, reimbursement cap, etc. |
| costCurrency | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency (in 3-letter [ISO 4217 format](http://en.wikipedia.org/wiki/ISO_4217)) of the drug cost. |
| costOrigin | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Additional details to capture the origin of the cost data. For example, 'Medicare Part B'. |
| costPerUnit | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The cost per unit of the drug. |
| drugUnit | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The unit in which the drug is measured, e.g. '5 mg tablet'. |
