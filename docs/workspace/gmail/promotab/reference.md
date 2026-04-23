---
source: https://developers.google.com/workspace/gmail/promotab/reference
root: workspace
fetched_at: 2026-04-23T15:30:05.876Z
---

# Email promotions reference

This page describes the types used to annotate promotional email and their associated properties. These types and properties are included in a promotional email's header as [JSON-LD](https://developers.google.com/workspace/gmail/markup/reference/formats/json-ld).

To learn more, review the [Email Markup Getting Started](https://developers.google.com/workspace/gmail/markup/getting-started) guide.

## Organization

The `Organization` type lets you specify a logo to include in the promotion.

| Name | Type | Description |
| --- | --- | --- |
| `logo` | [ImageObject](https://developers.google.com/workspace/gmail/markup/reference/types/ImageObject) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | The logo that displays as an icon for the sender. Recommended to use an HTTPS URL. See [best practices for Logo URL](https://developers.google.com/workspace/gmail/promotab/best-practices#logo_url). |

## DiscountOffer

The `DiscountOffer` type lets you create [deal annotations](https://developers.google.com/workspace/gmail/promotab/overview#deal-annotation), which promote the details of an offer such as the discount code or expiration date.

| Name | Type | Description |
| --- | --- | --- |
| `description` | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Optional. A short text that displays next to the deal badge icon, such as `Free shipping` or `20% off`. See [best practices for the deal badge](https://developers.google.com/workspace/gmail/promotab/best-practices#deal_badge). |
| `discountCode` | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Optional. The discount or promotion code of the offer, such as `20PROMO`. See [best practices for discount codes](https://developers.google.com/workspace/gmail/promotab/best-practices#discount_code). |
| `availabilityStarts` | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/datetime-formatting) | Optional. The date and time when the offer begins in [ISO 8601](https://support.google.com/merchants/answer/7055760) format, such as `2023-09-25T18:44:37-07:00`. |
| `availabilityEnds` | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/datetime-formatting) | Optional. The end date and time of the promotion in [ISO 8601](https://support.google.com/merchants/answer/7055760) format, such as `2023-10-25T18:44:37-07:00`. See [best practices for Expiration Date](https://developers.google.com/workspace/gmail/promotab/best-practices#expiration_date). |

## PromotionCard

The `PromotionCard` type lets you include a visual preview of your promotion.

| Name | Type | Description |
| --- | --- | --- |
| `image` | [ImageObject](https://developers.google.com/workspace/gmail/markup/reference/types/ImageObject) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Required. The image preview of the email in PNG or JPEG format.  The supported aspect ratios are 4:5, 1:1, and 1.91:1. Images are center-cropped automatically. See [best practices for images](https://developers.google.com/workspace/gmail/promotab/best-practices#images).  For product carousels, each `PromotionCard` must have a unique image and use the same aspect ratio. |
| `url` | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Required. The URL for the promotion. When users click on the email's `image`, they are directed to this URL. |
| `headline` | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Optional. A 1 to 2-line description of the promotion that is displayed under the `image`. |
| `price` | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Optional. The price of the promotion. If you set a `discountValue`, the `price` displays as the original price of the promotion before the discount is applied. |
| `priceCurrency` | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Optional. The currency of the price in 3-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, such as `USD`. Determines the currency symbol displayed with the price. |
| `discountValue` | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Optional. The amount subtracted from the `price` to display an adjusted price. The adjusted price is displayed next to the original price.  For example, if the `discountValue` is set to `25`, the `price` is set to `100`, and the `priceCurrency` is `USD`, the adjusted price is displayed as `$75`. |
| `position` | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Optional. The position of the card in the carousel. |
