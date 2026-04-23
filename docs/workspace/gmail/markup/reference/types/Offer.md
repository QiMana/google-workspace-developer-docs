---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Offer
root: workspace
fetched_at: 2026-04-23T15:29:43.269Z
---

# Offer

Type name: [Offer](https://developers.google.com/workspace/gmail/markup/reference/types/Offer)

Extends [Intangible](https://developers.google.com/workspace/gmail/markup/reference/types/Intangible)

| Name | Type | Description |
| --- | --- | --- |
| acceptedPaymentMethod | [PaymentMethod](https://developers.google.com/workspace/gmail/markup/reference/types/PaymentMethod) | The payment method(s) accepted by seller for this offer. |
| addOn | [Offer](https://developers.google.com/workspace/gmail/markup/reference/types/Offer) | An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge). |
| advanceBookingRequirement | [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The amount of time that is required between accepting the offer and the actual usage of the resource or service. |
| aggregateRating | [AggregateRating](https://developers.google.com/workspace/gmail/markup/reference/types/AggregateRating) | The overall rating, based on a collection of reviews or ratings, of the item. |
| availability | [ItemAvailability](https://developers.google.com/workspace/gmail/markup/reference/types/ItemAvailability) | The availability of this item—for example In stock, Out of stock, Pre-order, etc. |
| availabilityEnds | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The end of the availability of the product or service included in the offer. |
| availabilityStarts | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The beginning of the availability of the product or service included in the offer. |
| availableAtOrFrom | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | The place(s) from which the offer can be obtained (e.g. store locations). |
| availableDeliveryMethod | [DeliveryMethod](https://developers.google.com/workspace/gmail/markup/reference/types/DeliveryMethod) | The delivery method(s) available for this offer. |
| businessFunction | [BusinessFunction](https://developers.google.com/workspace/gmail/markup/reference/types/BusinessFunction) | The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. |
| category | [PhysicalActivityCategory](https://developers.google.com/workspace/gmail/markup/reference/types/PhysicalActivityCategory), [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing) | A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. |
| deliveryLeadTime | [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The typical delay between the receipt of the order and the goods leaving the warehouse. |
| eligibleCustomerType | [BusinessEntityType](https://developers.google.com/workspace/gmail/markup/reference/types/BusinessEntityType) | The type(s) of customers for which the given offer is valid. |
| eligibleDuration | [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The duration for which the given offer is valid. |
| eligibleQuantity | [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity. |
| eligibleRegion | [GeoShape](https://developers.google.com/workspace/gmail/markup/reference/types/GeoShape) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid. |
| eligibleTransactionVolume | [PriceSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/PriceSpecification) | The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount. |
| gtin13 | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The [GTIN-13](http://apps.gs1.org/GDD/glossary/Pages/GTIN-13.aspx) code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceeding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. |
| gtin14 | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The [GTIN-14](http://apps.gs1.org/GDD/glossary/Pages/GTIN-14.aspx) code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. |
| gtin8 | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The [GTIN-8](http://apps.gs1.org/GDD/glossary/Pages/GTIN-8.aspx) code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. |
| includesObject | [TypeAndQuantityNode](https://developers.google.com/workspace/gmail/markup/reference/types/TypeAndQuantityNode) | This links to a node or nodes indicating the exact quantity of the products included in the offer. |
| ineligibleRegion | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | The place(s) from which the offer cannot be obtained (e.g. a region where the transaction is not allowed). |
| inventoryLevel | [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The current approximate inventory level for the item or items. |
| itemCondition | [OfferItemCondition](https://developers.google.com/workspace/gmail/markup/reference/types/OfferItemCondition) | A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer. |
| itemOffered | [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product) | The item being offered. |
| mpn | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. |
| price | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Total price of the Reservation. |
| priceCurrency | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency (in 3-letter ISO 4217 format) of the Reservation's price. |
| priceSpecification | [PriceSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/PriceSpecification) | One or more detailed price specifications, indicating the unit price and delivery or payment charges. |
| priceValidUntil | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | The date after which the price is no longer available. |
| review | [Review](https://developers.google.com/workspace/gmail/markup/reference/types/Review) | The review. |
| reviews | [Review](https://developers.google.com/workspace/gmail/markup/reference/types/Review) | Review of the item. |
| seller | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. |
| serialNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer. |
| sku | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. |
| validFrom | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The date when the item becomes valid. |
| validThrough | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The end of the validity of offer, price specification, or opening hours data. |
| warranty | [WarrantyPromise](https://developers.google.com/workspace/gmail/markup/reference/types/WarrantyPromise) | The warranty promise(s) included in the offer. |
