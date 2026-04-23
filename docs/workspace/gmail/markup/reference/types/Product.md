---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Product
root: workspace
fetched_at: 2026-04-23T15:29:47.072Z
---

# Product

Type name: [Product](./Product.md)

Extends [Thing](./Thing.md)

| Name | Type | Description |
| --- | --- | --- |
| aggregateRating | [AggregateRating](./AggregateRating.md) | The overall rating, based on a collection of reviews or ratings, of the item. |
| audience | [Audience](./Audience.md) | The intended audience of the item, i.e. the group for whom the item was created. |
| brand | [Brand](./Brand.md) or [Organization](./Organization.md) | The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. |
| color | [Text](./Text.md) | The color of the product. |
| depth | [Distance](./Distance.md) or [QuantitativeValue](./QuantitativeValue.md) | The depth of the item. |
| gtin13 | [Text](./Text.md) | The [GTIN-13](http://apps.gs1.org/GDD/glossary/Pages/GTIN-13.aspx) code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceeding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. |
| gtin14 | [Text](./Text.md) | The [GTIN-14](http://apps.gs1.org/GDD/glossary/Pages/GTIN-14.aspx) code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. |
| gtin8 | [Text](./Text.md) | The [GTIN-8](http://apps.gs1.org/GDD/glossary/Pages/GTIN-8.aspx) code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. |
| height | [Distance](./Distance.md) or [QuantitativeValue](./QuantitativeValue.md) | The height of the item. |
| isAccessoryOrSparePartFor | [Product](./Product.md) | A pointer to another product (or multiple products) for which this product is an accessory or spare part. |
| isConsumableFor | [Product](./Product.md) | A pointer to another product (or multiple products) for which this product is a consumable. |
| isRelatedTo | [Product](./Product.md) | A pointer to another, somehow related product (or multiple products). |
| isSimilarTo | [Product](./Product.md) | A pointer to another, functionally similar product (or multiple products). |
| itemCondition | [OfferItemCondition](./OfferItemCondition.md) | A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer. |
| logo | [ImageObject](./ImageObject.md) or [URL](./URL.md) | An associated logo. |
| manufacturer | [Organization](./Organization.md) | The manufacturer of the product. |
| model | [ProductModel](./ProductModel.md) or [Text](./Text.md) | The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties. |
| mpn | [Text](./Text.md) | The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. |
| offers | [Offer](./Offer.md) | An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, or give away tickets to an event. |
| productID | [Text](./Text.md) | The product identifier, such as ISBN. For example: `<meta itemprop='productID' content='isbn:123-456-789'/>`. |
| releaseDate | [Date](./Date.md) | The release date of a product or product model. This can be used to distinguish the exact variant of a product. |
| review | [Review](../../reference.md) | The review. |
| reviews | [Review](../../reference.md) | Review of the item. |
| sku | [Text](./Text.md) | The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. |
| weight | [QuantitativeValue](./QuantitativeValue.md) | The weight of the product or person. |
| width | [Distance](./Distance.md) or [QuantitativeValue](./QuantitativeValue.md) | The width of the item. |
