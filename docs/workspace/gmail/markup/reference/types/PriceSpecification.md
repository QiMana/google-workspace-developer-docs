---
source: https://developers.google.com/workspace/gmail/markup/reference/types/PriceSpecification
root: workspace
fetched_at: 2026-04-23T15:29:47.007Z
---

# PriceSpecification

Type name: [PriceSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/PriceSpecification)

Extends [StructuredValue](https://developers.google.com/workspace/gmail/markup/reference/types/StructuredValue)

| Name | Type | Description |
| --- | --- | --- |
| eligibleQuantity | [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity. |
| eligibleTransactionVolume | [PriceSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/PriceSpecification) | The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount. |
| maxPrice | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | The highest price if the price is a range. |
| minPrice | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | The lowest price if the price is a range. |
| price | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Total price of the Reservation. |
| priceCurrency | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency (in 3-letter ISO 4217 format) of the Reservation's price. |
| validFrom | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The date when the item becomes valid. |
| validThrough | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The end of the validity of offer, price specification, or opening hours data. |
| valueAddedTaxIncluded | [Boolean](https://developers.google.com/workspace/gmail/markup/reference/types/Boolean) | Specifies whether the applicable value-added tax (VAT) is included in the price specification or not. |
