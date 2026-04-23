---
source: https://developers.google.com/workspace/gmail/markup/reference/types/FoodEstablishmentReservation
root: workspace
fetched_at: 2026-04-23T15:29:30.851Z
---

# FoodEstablishmentReservation

Type name: [FoodEstablishmentReservation](./FoodEstablishmentReservation.md)

Extends [Reservation](./Reservation.md)

| Name | Type | Description |
| --- | --- | --- |
| **bookingAgent** | [Organization](./Organization.md) or [Person](./Person.md) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**name** | [Text](./Text.md) | Name of the agent/service. |
| bookingAgent.**url** | [URL](./URL.md) | Website of the agent/service. |
| **bookingTime** | [DateTime](./DateTime.md) | Date the reservation was made. |
| **cancelReservationUrl** | [URL](./URL.md) | Web page where reservation can be cancelled. |
| **confirmReservationUrl** | [URL](./URL.md) | Web page where reservation can be confirmed. |
| **modifiedTime** | [DateTime](./DateTime.md) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](./URL.md) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **partySize****   (Required)** | [Number](./Number.md) | Number of people in the party. |
| **price** | [Text](./Text.md) | Total price of the FoodEstablishmentReservation. |
| **priceCurrency** | [Text](./Text.md) | The currency (in 3-letter ISO 4217 format) of the FoodEstablishmentReservation's price.'' |
| **programMembership** | [ProgramMembership](./ProgramMembership.md) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](./Text.md) | The identifier of the membership. |
| programMembership.**program** | [Text](./Text.md) | The name of the program. |
| **reservationFor****   (Required)** |  | The food establishment the reservation is for. |
| reservationFor.**address****   (Required)** | [PostalAddress](./PostalAddress.md) | Address of the restaurant. |
| reservationFor.address.**addressCountry****   (Required)** | [Country](./Country.md) or [Text](./Text.md) | Country of restaurant. |
| reservationFor.address.**addressLocality****   (Required)** | [Text](./Text.md) | Locality (e.g. city) of restaurant. |
| reservationFor.address.**addressRegion****   (Required)** | [Text](./Text.md) | Region (e.g. State) of restaurant. |
| reservationFor.address.**postalCode****   (Required)** | [Text](./Text.md) | Postal code of restaurant. |
| reservationFor.address.**streetAddress****   (Required)** | [Text](./Text.md) | Street address of restaurant. |
| reservationFor.**image** | [URL](./URL.md) | Image of the restaurant. |
| reservationFor.**name****   (Required)** | [Text](./Text.md) | Name of the restaurant. |
| reservationFor.**telephone** | [Text](./Text.md) | Telephone number of the FoodEstablishment. |
| reservationFor.**url** | [URL](./URL.md) | Restaurant's website. |
| **reservationNumber****   (Required)** | [Text](./Text.md) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](./ReservationStatus.md) | Current status of the reservation. |
| **startTime****   (Required)** | [DateTime](./DateTime.md) | Reservation date and time. |
| **underName****   (Required)** | [Organization](./Organization.md) or [Person](./Person.md) | The person the table is for. |
| underName.**email** | [Text](./Text.md) | Email address. |
| underName.**name****   (Required)** | [Text](./Text.md) | Name of the Person. |
| **url** | [URL](./URL.md) | Web page where reservation can be viewed. |
