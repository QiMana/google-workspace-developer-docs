---
source: https://developers.google.com/workspace/gmail/markup/reference/types/TypeAndQuantityNode
root: workspace
fetched_at: 2026-04-23T15:29:56.351Z
---

# TypeAndQuantityNode

Type name: [TypeAndQuantityNode](./TypeAndQuantityNode.md)

Extends [StructuredValue](./StructuredValue.md)

| Name | Type | Description |
| --- | --- | --- |
| amountOfThisGood | [Number](./Number.md) | The quantity of the goods included in the offer. |
| businessFunction | [BusinessFunction](./BusinessFunction.md) | The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. |
| typeOfGood | [Product](./Product.md) | The product that this structured value is referring to. |
| unitCode | [Text](./Text.md) | The unit of measurement given using the UN/CEFACT Common Code (3 characters). |
