---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Order
root: workspace
fetched_at: 2026-04-23T15:29:43.533Z
---

# Order

Type name: [Order](https://developers.google.com/workspace/gmail/markup/reference/types/Order)

Extends [Intangible](https://developers.google.com/workspace/gmail/markup/reference/types/Intangible)

| Name | Type | Description |
| --- | --- | --- |
| **acceptedOffer****   (Required)** | [Offer](https://developers.google.com/workspace/gmail/markup/reference/types/Offer) | The offers included in the order. |
| acceptedOffer.**itemOffered****   (Required)** | [Reservation](https://developers.google.com/workspace/gmail/markup/reference/types/Reservation) or [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product) | The item being sold. |
| acceptedOffer.itemOffered.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Product. |
| **billingAddress** | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | The billing address for the order. |
| billingAddress.**addressCountry** | [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| billingAddress.**addressLocality** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The locality. For example, Mountain View. |
| billingAddress.**addressRegion** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The region. For example, CA. |
| billingAddress.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the PostalAddress. |
| billingAddress.**streetAddress** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The street address. For example, 1600 Amphitheatre Pkwy. |
| **customer** | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | Party placing the order. |
| customer.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
| **orderDate** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Date order was placed. |
| **orderNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The identifier of the transaction. |
| **orderStatus** | [OrderStatus](https://developers.google.com/workspace/gmail/markup/reference/types/OrderStatus) | The current status of the order. |
| **potentialAction****   (Required)** | [ViewAction](https://developers.google.com/workspace/gmail/markup/reference/types/ViewAction) | Actions supported for Order. |
| **price****   (Required)** | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The total price of the entire transaction. |
| **priceCurrency****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency (in 3-letter ISO 4217 format) of the order price. |
| **priceSpecification** | [PriceSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/PriceSpecification) | Any more detailed alternatives to price/priceCurrency. Also used to specify tax and delivery charges. |
| priceSpecification.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the PriceSpecification. |
| priceSpecification.**price** | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The total price of the entire transactin. |
| priceSpecification.**priceCurrency** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currencty (in 3-letter ISO 4217 format) of the order price. |
| **seller****   (Required)** | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | Party selling the good or service (e.g. Acme Products may be a seller providing a good through Amazon.com). |
| seller.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
