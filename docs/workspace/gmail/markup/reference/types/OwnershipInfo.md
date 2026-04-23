---
source: https://developers.google.com/workspace/gmail/markup/reference/types/OwnershipInfo
root: workspace
fetched_at: 2026-04-23T15:29:44.306Z
---

# OwnershipInfo

Type name: [OwnershipInfo](https://developers.google.com/workspace/gmail/markup/reference/types/OwnershipInfo)

Extends [StructuredValue](https://developers.google.com/workspace/gmail/markup/reference/types/StructuredValue)

| Name | Type | Description |
| --- | --- | --- |
| acquiredFrom | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The organization or person from which the product was acquired. |
| ownedFrom | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The date and time of obtaining the product. |
| ownedThrough | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The date and time of giving up ownership on the product. |
| typeOfGood | [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product) | The product that this structured value is referring to. |
