---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Order
root: workspace
fetched_at: 2026-04-23T15:29:43.533Z
---

# Order

Type name: [Order](./Order.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| **acceptedOffer****   (Required)** | [Offer](./Offer.md) | The offers included in the order. |
| acceptedOffer.**itemOffered****   (Required)** | [Reservation](./Reservation.md) or [Product](./Product.md) | The item being sold. |
| acceptedOffer.itemOffered.**name****   (Required)** | [Text](./Text.md) | Name of the Product. |
| **billingAddress** | [PostalAddress](./PostalAddress.md) | The billing address for the order. |
| billingAddress.**addressCountry** | [Country](./Country.md) or [Text](./Text.md) | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| billingAddress.**addressLocality** | [Text](./Text.md) | The locality. For example, Mountain View. |
| billingAddress.**addressRegion** | [Text](./Text.md) | The region. For example, CA. |
| billingAddress.**name** | [Text](./Text.md) | Name of the PostalAddress. |
| billingAddress.**streetAddress** | [Text](./Text.md) | The street address. For example, 1600 Amphitheatre Pkwy. |
| **customer** | [Person](./Person.md) or [Organization](./Organization.md) | Party placing the order. |
| customer.**name** | [Text](./Text.md) | Name of the Person. |
| **orderDate** | [DateTime](./DateTime.md) | Date order was placed. |
| **orderNumber** | [Text](./Text.md) | The identifier of the transaction. |
| **orderStatus** | [OrderStatus](./OrderStatus.md) | The current status of the order. |
| **potentialAction****   (Required)** | [ViewAction](./ViewAction.md) | Actions supported for Order. |
| **price****   (Required)** | [Number](./Number.md) or [Text](./Text.md) | The total price of the entire transaction. |
| **priceCurrency****   (Required)** | [Text](./Text.md) | The currency (in 3-letter ISO 4217 format) of the order price. |
| **priceSpecification** | [PriceSpecification](./PriceSpecification.md) | Any more detailed alternatives to price/priceCurrency. Also used to specify tax and delivery charges. |
| priceSpecification.**name** | [Text](./Text.md) | Name of the PriceSpecification. |
| priceSpecification.**price** | [Number](./Number.md) or [Text](./Text.md) | The total price of the entire transactin. |
| priceSpecification.**priceCurrency** | [Text](./Text.md) | The currencty (in 3-letter ISO 4217 format) of the order price. |
| **seller****   (Required)** | [Person](./Person.md) or [Organization](./Organization.md) | Party selling the good or service (e.g. Acme Products may be a seller providing a good through Amazon.com). |
| seller.**name****   (Required)** | [Text](./Text.md) | Name of the Person. |
