---
source: https://developers.google.com/workspace/gmail/markup/reference/types/ParcelDelivery
root: workspace
fetched_at: 2026-04-23T15:29:44.430Z
---

# ParcelDelivery

Type name: [ParcelDelivery](https://developers.google.com/workspace/gmail/markup/reference/types/ParcelDelivery)

Extends [Intangible](https://developers.google.com/workspace/gmail/markup/reference/types/Intangible)

| Name | Type | Description |
| --- | --- | --- |
| **carrier****   (Required)** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The party responsible for the parcel delivery. Also accepts a string (e.g. "FedEx"). |
| carrier.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Organization. |
| carrier.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL of the Organization. |
| **deliveryAddress****   (Required)** | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Destination address. |
| deliveryAddress.**addressCountry****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| deliveryAddress.**addressLocality****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The locality. For example, Mountain View. |
| deliveryAddress.**addressRegion****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The region. For example, CA. |
| deliveryAddress.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the PostalAddress. |
| deliveryAddress.**postalCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The postal code. For example, 94043. |
| deliveryAddress.**streetAddress****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The street address. For example, 1600 Amphitheatre Pkwy. |
| **expectedArrival****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Expected delivery date. |
| **itemShipped****   (Required)** | [Product](https://developers.google.com/workspace/gmail/markup/reference/types/Product) or [Reservation](https://developers.google.com/workspace/gmail/markup/reference/types/Reservation) | Items being shipped. |
| itemShipped.**brand** | [Brand](https://developers.google.com/workspace/gmail/markup/reference/types/Brand) | The brand associated with the Product. |
| itemShipped.brand.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Brand. |
| itemShipped.**description** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A short description of the Product. |
| itemShipped.**image** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL of an image of the Product. |
| itemShipped.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Product. |
| itemShipped.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL of the Product. |
| **originAddress** | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Shipper's address. |
| originAddress.**addressCountry** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| originAddress.**addressLocality** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The locality. For example, Mountain View. |
| originAddress.**addressRegion** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The region. For example, CA. |
| originAddress.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the PostalAddress. |
| originAddress.**postalCode** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The postal code. For example, 94043. |
| originAddress.**streetAddress** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The street address. For example, 1600 Amphitheatre Pkwy. |
| **partOfOrder****   (Required)** | [Order](https://developers.google.com/workspace/gmail/markup/reference/types/Order) | The overall order the items in this delivery were included in. |
| partOfOrder.**orderNumber****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The identifier of the transaction. |
| partOfOrder.**seller****   (Required)** | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | Party selling the good or service (e.g. Acme Products may be a seller providing a good through Amazon.com). |
| partOfOrder.seller.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
| **potentialAction** | [TrackAction](https://developers.google.com/workspace/gmail/markup/reference/types/TrackAction) | Actions supported for ParcelDelivery. |
| **trackingNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Shipper tracking number. |
| **trackingUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Webpage where the package can be tracked. |
