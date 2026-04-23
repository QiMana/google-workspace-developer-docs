---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Demand
root: workspace
fetched_at: 2026-04-23T15:29:26.408Z
---

# Demand

Type name: [Demand](./Demand.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| acceptedPaymentMethod | [PaymentMethod](./PaymentMethod.md) | The payment method(s) accepted by seller for this offer. |
| advanceBookingRequirement | [QuantitativeValue](./QuantitativeValue.md) | The amount of time that is required between accepting the offer and the actual usage of the resource or service. |
| availability | [ItemAvailability](./ItemAvailability.md) | The availability of this item—for example In stock, Out of stock, Pre-order, etc. |
| availabilityEnds | [DateTime](./DateTime.md) | The end of the availability of the product or service included in the offer. |
| availabilityStarts | [DateTime](./DateTime.md) | The beginning of the availability of the product or service included in the offer. |
| availableAtOrFrom | [Place](./Place.md) | The place(s) from which the offer can be obtained (e.g. store locations). |
| availableDeliveryMethod | [DeliveryMethod](./DeliveryMethod.md) | The delivery method(s) available for this offer. |
| businessFunction | [BusinessFunction](./BusinessFunction.md) | The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell. |
| deliveryLeadTime | [QuantitativeValue](./QuantitativeValue.md) | The typical delay between the receipt of the order and the goods leaving the warehouse. |
| eligibleCustomerType | [BusinessEntityType](./BusinessEntityType.md) | The type(s) of customers for which the given offer is valid. |
| eligibleDuration | [QuantitativeValue](./QuantitativeValue.md) | The duration for which the given offer is valid. |
| eligibleQuantity | [QuantitativeValue](./QuantitativeValue.md) | The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity. |
| eligibleRegion | [GeoShape](./GeoShape.md) or [Text](./Text.md) | The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid. |
| eligibleTransactionVolume | [PriceSpecification](./PriceSpecification.md) | The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount. |
| gtin13 | [Text](./Text.md) | The [13-digit Global Trade Item](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. |
| gtin14 | [Text](./Text.md) | The [14-digit Global Trade Item](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. |
| gtin8 | [Text](./Text.md) | The [8-digit Global Trade Item](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. |
| includesObject | [TypeAndQuantityNode](./TypeAndQuantityNode.md) | This links to a node or nodes indicating the exact quantity of the products included in the offer. |
| inventoryLevel | [QuantitativeValue](./QuantitativeValue.md) | The current approximate inventory level for the item or items. |
| itemCondition | [OfferItemCondition](./OfferItemCondition.md) | A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer. |
| itemOffered | [Product](./Product.md) | The item being offered. |
| mpn | [Text](./Text.md) | The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. |
| priceSpecification | [PriceSpecification](./PriceSpecification.md) | One or more detailed price specifications, indicating the unit price and delivery or payment charges. |
| seller | [Organization](./Organization.md) or [Person](./Person.md) | An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider. |
| serialNumber | [Text](./Text.md) | The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer. |
| sku | [Text](./Text.md) | The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. |
| validFrom | [DateTime](./DateTime.md) | The date when the item becomes valid. |
| validThrough | [DateTime](./DateTime.md) | The end of the validity of offer, price specification, or opening hours data. |
| warranty | [WarrantyPromise](./WarrantyPromise.md) | The warranty promise(s) included in the offer. |
