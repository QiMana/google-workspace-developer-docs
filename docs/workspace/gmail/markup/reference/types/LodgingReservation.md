---
source: https://developers.google.com/workspace/gmail/markup/reference/types/LodgingReservation
root: workspace
fetched_at: 2026-04-23T15:29:37.133Z
---

# LodgingReservation

Type name: [LodgingReservation](./LodgingReservation.md)

Extends [Reservation](./Reservation.md)

| Name | Type | Description |
| --- | --- | --- |
| **bookingAgent** | [Person](./Person.md) or [Organization](./Organization.md) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**name** | [Text](./Text.md) | Name of the agent/service. |
| bookingAgent.**url** | [URL](./URL.md) | Website of the agent/service. |
| **bookingTime** | [DateTime](./DateTime.md) | Date the reservation was made. |
| **cancelReservationUrl** | [URL](./URL.md) | Web page where reservation can be cancelled. |
| **checkinDate****   (Required)** | [DateTime](./DateTime.md) | Checkin time. |
| **checkoutDate****   (Required)** | [DateTime](./DateTime.md) | Checkout time. |
| **checkinUrl** | [URL](./URL.md) | Web page where the lodger can check in. |
| **confirmReservationUrl** | [URL](./URL.md) | Web page where reservation can be confirmed. |
| **lodgingUnitDescription** | [Text](./Text.md) | Textual description of the unit type (including suite vs. room, size of bed, etc.). |
| **modifiedTime** | [DateTime](./DateTime.md) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](./URL.md) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **numAdults** | [Number](./Number.md) | Number of adults who will be staying in the lodging unit. |
| **numChildren** | [Number](./Number.md) | Number of children who will be staying in the lodging unit. |
| **price** | [Text](./Text.md) | Total price of the LodgingReservation. |
| **priceCurrency** | [Text](./Text.md) | The currency (in 3-letter ISO 4217 format) of the LodgingReservation's price. |
| **programMembership** | [ProgramMembership](./ProgramMembership.md) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](./Text.md) | The identifier of the membership. |
| programMembership.**program** | [Text](./Text.md) | The name of the program. |
| **reservationFor****   (Required)** | [LodgingBusiness](./LodgingBusiness.md) | The lodging the reservation is at. |
| reservationFor.**address****   (Required)** | [PostalAddress](./PostalAddress.md) | Address of the Address of lodging. |
| reservationFor.address.**addressCountry****   (Required)** | [Text](./Text.md) or [Country](./Country.md) | Country of Address of lodging. |
| reservationFor.address.**addressLocality****   (Required)** | [Text](./Text.md) | Locality (e.g. city) of Address of lodging. |
| reservationFor.address.**addressRegion****   (Required)** | [Text](./Text.md) | Region (e.g. State) of Address of lodging. |
| reservationFor.address.**postalCode****   (Required)** | [Text](./Text.md) | Postal code of Address of lodging. |
| reservationFor.address.**streetAddress****   (Required)** | [Text](./Text.md) | Street address of Address of lodging. |
| reservationFor.**image** | [URL](./URL.md) | Photo of the lodging business. |
| reservationFor.**name****   (Required)** | [Text](./Text.md) | Name of the Address of lodging. |
| reservationFor.**telephone****   (Required)** | [Text](./Text.md) | Telephone number of the LodgingBusiness. |
| reservationFor.**url** | [URL](./URL.md) | Website of the lodging business. |
| **reservationNumber****   (Required)** | [Text](./Text.md) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](./ReservationStatus.md) | Current status of the reservation. |
| **underName****   (Required)** | [Person](./Person.md) or [Organization](./Organization.md) | The guest. |
| underName.**email** | [Text](./Text.md) | Email address. |
| underName.**name****   (Required)** | [Text](./Text.md) | Name of the Person. |
| **url** | [URL](./URL.md) | Web page where reservation can be viewed. |
