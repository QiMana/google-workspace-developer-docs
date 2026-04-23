---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Product
root: workspace
fetched_at: 2026-04-23T15:29:47.072Z
---

# Product

Type name: [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product)

Extends [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing)

| Name | Type | Description |
| --- | --- | --- |
| aggregateRating | [AggregateRating](https://developers.google.com/workspace/gmail/markup/reference/types/AggregateRating) | The overall rating, based on a collection of reviews or ratings, of the item. |
| audience | [Audience](https://developers.google.com/workspace/gmail/markup/reference/types/Audience) | The intended audience of the item, i.e. the group for whom the item was created. |
| brand | [Brand](https://developers.google.com/workspace/gmail/markup/reference/types/Brand) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. |
| color | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The color of the product. |
| depth | [Distance](https://developers.google.com/workspace/gmail/markup/reference/types/Distance) or [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The depth of the item. |
| gtin13 | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The [GTIN-13](http://apps.gs1.org/GDD/glossary/Pages/GTIN-13.aspx) code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceeding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. |
| gtin14 | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The [GTIN-14](http://apps.gs1.org/GDD/glossary/Pages/GTIN-14.aspx) code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. |
| gtin8 | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The [GTIN-8](http://apps.gs1.org/GDD/glossary/Pages/GTIN-8.aspx) code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details. |
| height | [Distance](https://developers.google.com/workspace/gmail/markup/reference/types/Distance) or [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The height of the item. |
| isAccessoryOrSparePartFor | [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product) | A pointer to another product (or multiple products) for which this product is an accessory or spare part. |
| isConsumableFor | [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product) | A pointer to another product (or multiple products) for which this product is a consumable. |
| isRelatedTo | [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product) | A pointer to another, somehow related product (or multiple products). |
| isSimilarTo | [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product) | A pointer to another, functionally similar product (or multiple products). |
| itemCondition | [OfferItemCondition](https://developers.google.com/workspace/gmail/markup/reference/types/OfferItemCondition) | A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer. |
| logo | [ImageObject](https://developers.google.com/workspace/gmail/markup/reference/types/ImageObject) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | An associated logo. |
| manufacturer | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The manufacturer of the product. |
| model | [ProductModel](https://developers.google.com/workspace/gmail/markup/reference/types/ProductModel) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties. |
| mpn | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers. |
| offers | [Offer](https://developers.google.com/workspace/gmail/markup/reference/types/Offer) | An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, or give away tickets to an event. |
| productID | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The product identifier, such as ISBN. For example: `<meta itemprop='productID' content='isbn:123-456-789'/>`. |
| releaseDate | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | The release date of a product or product model. This can be used to distinguish the exact variant of a product. |
| review | [Review](https://developers.google.com/workspace/gmail/markup/reference/types/Review) | The review. |
| reviews | [Review](https://developers.google.com/workspace/gmail/markup/reference/types/Review) | Review of the item. |
| sku | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. |
| weight | [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The weight of the product or person. |
| width | [Distance](https://developers.google.com/workspace/gmail/markup/reference/types/Distance) or [QuantitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QuantitativeValue) | The width of the item. |
