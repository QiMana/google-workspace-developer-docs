---
source: https://developers.google.com/workspace/gmail/markup/reference/types/UnitPriceSpecification
root: workspace
fetched_at: 2026-04-23T15:29:56.305Z
---

# UnitPriceSpecification

Type name: [UnitPriceSpecification](./UnitPriceSpecification.md)

Extends [PriceSpecification](./PriceSpecification.md)

| Name | Type | Description |
| --- | --- | --- |
| billingIncrement | [Number](./Number.md) | This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property. |
| priceType | [Text](./Text.md) | A short text or acronym indicating multiple price specifications for the same offer, e.g. SRP for the suggested retail price or INVOICE for the invoice price, mostly used in the car industry. |
| unitCode | [Text](./Text.md) | The unit of measurement given using the UN/CEFACT Common Code (3 characters). |
