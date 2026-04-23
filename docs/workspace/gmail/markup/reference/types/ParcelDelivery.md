---
source: https://developers.google.com/workspace/gmail/markup/reference/types/ParcelDelivery
root: workspace
fetched_at: 2026-04-23T15:29:44.430Z
---

# ParcelDelivery

Type name: [ParcelDelivery](./ParcelDelivery.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| **carrier****   (Required)** | [Organization](./Organization.md) | The party responsible for the parcel delivery. Also accepts a string (e.g. "FedEx"). |
| carrier.**name****   (Required)** | [Text](./Text.md) | Name of the Organization. |
| carrier.**url** | [URL](./URL.md) | URL of the Organization. |
| **deliveryAddress****   (Required)** | [PostalAddress](./PostalAddress.md) | Destination address. |
| deliveryAddress.**addressCountry****   (Required)** | [Text](./Text.md) or [Country](./Country.md) | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| deliveryAddress.**addressLocality****   (Required)** | [Text](./Text.md) | The locality. For example, Mountain View. |
| deliveryAddress.**addressRegion****   (Required)** | [Text](./Text.md) | The region. For example, CA. |
| deliveryAddress.**name** | [Text](./Text.md) | Name of the PostalAddress. |
| deliveryAddress.**postalCode****   (Required)** | [Text](./Text.md) | The postal code. For example, 94043. |
| deliveryAddress.**streetAddress****   (Required)** | [Text](./Text.md) | The street address. For example, 1600 Amphitheatre Pkwy. |
| **expectedArrival****   (Required)** | [DateTime](./DateTime.md) | Expected delivery date. |
| **itemShipped****   (Required)** | [Product](./Product.md) or [Reservation](./Reservation.md) | Items being shipped. |
| itemShipped.**brand** | [Brand](./Brand.md) | The brand associated with the Product. |
| itemShipped.brand.**name** | [Text](./Text.md) | Name of the Brand. |
| itemShipped.**description** | [Text](./Text.md) | A short description of the Product. |
| itemShipped.**image** | [URL](./URL.md) | URL of an image of the Product. |
| itemShipped.**name****   (Required)** | [Text](./Text.md) | Name of the Product. |
| itemShipped.**url** | [URL](./URL.md) | URL of the Product. |
| **originAddress** | [PostalAddress](./PostalAddress.md) | Shipper's address. |
| originAddress.**addressCountry** | [Text](./Text.md) or [Country](./Country.md) | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
| originAddress.**addressLocality** | [Text](./Text.md) | The locality. For example, Mountain View. |
| originAddress.**addressRegion** | [Text](./Text.md) | The region. For example, CA. |
| originAddress.**name** | [Text](./Text.md) | Name of the PostalAddress. |
| originAddress.**postalCode** | [Text](./Text.md) | The postal code. For example, 94043. |
| originAddress.**streetAddress** | [Text](./Text.md) | The street address. For example, 1600 Amphitheatre Pkwy. |
| **partOfOrder****   (Required)** | [Order](./Order.md) | The overall order the items in this delivery were included in. |
| partOfOrder.**orderNumber****   (Required)** | [Text](./Text.md) | The identifier of the transaction. |
| partOfOrder.**seller****   (Required)** | [Person](./Person.md) or [Organization](./Organization.md) | Party selling the good or service (e.g. Acme Products may be a seller providing a good through Amazon.com). |
| partOfOrder.seller.**name****   (Required)** | [Text](./Text.md) | Name of the Person. |
| **potentialAction** | [TrackAction](./TrackAction.md) | Actions supported for ParcelDelivery. |
| **trackingNumber** | [Text](./Text.md) | Shipper tracking number. |
| **trackingUrl** | [URL](./URL.md) | Webpage where the package can be tracked. |
