---
source: https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue
root: workspace
fetched_at: 2026-04-23T15:29:47.975Z
---

# QuantitativeValue

Type name: [QuantitativeValue](./QuantitativeValue.md)

Extends [StructuredValue](./StructuredValue.md)

| Name | Type | Description |
| --- | --- | --- |
| maxValue | [Number](./Number.md) | The upper value of some characteristic or property. |
| minValue | [Number](./Number.md) | The lower value of some characteristic or property. |
| unitCode | [Text](./Text.md) | The unit of measurement given using the UN/CEFACT Common Code (3 characters). |
| value | [Number](./Number.md) | The value of the product characteristic. |
| valueReference | [Enumeration](./Enumeration.md) or [StructuredValue](./StructuredValue.md) | A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature. |
