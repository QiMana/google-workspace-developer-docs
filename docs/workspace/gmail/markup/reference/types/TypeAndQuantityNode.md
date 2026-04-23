---
source: https://developers.google.com/workspace/gmail/markup/reference/types/TypeAndQuantityNode
root: workspace
fetched_at: 2026-04-23T15:29:56.351Z
---

# TypeAndQuantityNode

Type name: [TypeAndQuantityNode](https://developers.google.com/workspace/gmail/markup/reference/types/TypeAndQuantityNode)

Extends [StructuredValue](https://developers.google.com/workspace/gmail/markup/reference/types/StructuredValue)

| Name | Type | Description |
| --- | --- | --- |
| amountOfThisGood | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | The quantity of the goods included in the offer. |
| businessFunction | [BusinessFunction](https://developers.google.com/workspace/gmail/markup/reference/types/BusinessFunction) | The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. |
| typeOfGood | [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product) | The product that this structured value is referring to. |
| unitCode | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The unit of measurement given using the UN/CEFACT Common Code (3 characters). |
