---
source: https://developers.google.com/workspace/gmail/markup/reference/types/RentalCarReservation
root: workspace
fetched_at: 2026-04-23T15:29:50.463Z
---

# RentalCarReservation

Type name: [RentalCarReservation](./RentalCarReservation.md)

Extends [Reservation](./Reservation.md)

| Name | Type | Description |
| --- | --- | --- |
| **bookingAgent** | [Organization](./Organization.md) or [Person](./Person.md) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**name** | [Text](./Text.md) | Name of the agent/service. |
| bookingAgent.**url** | [URL](./URL.md) | Website of the agent/service. |
| **bookingTime** | [DateTime](./DateTime.md) | Date the reservation was made. |
| **cancelReservationUrl** | [URL](./URL.md) | Web page where reservation can be cancelled. |
| **checkinUrl** | [URL](./URL.md) | Webpage where the passenger can check in. |
| **confirmReservationUrl** | [URL](./URL.md) | Web page where reservation can be confirmed. |
| **dropoffLocation****   (Required)** | [AutoRental](./AutoRental.md) or [Place](./Place.md) | Where the car is returned. |
| dropoffLocation.**address****   (Required)** | [PostalAddress](./PostalAddress.md) | Address of the dropoff location. |
| dropoffLocation.address.**addressCountry****   (Required)** | [Text](./Text.md) or [Country](./Country.md) | Country of dropoff location. |
| dropoffLocation.address.**addressLocality****   (Required)** | [Text](./Text.md) | Locality (e.g. city) of dropoff location. |
| dropoffLocation.address.**addressRegion****   (Required)** | [Text](./Text.md) | Region (e.g. State) of dropoff location. |
| dropoffLocation.address.**postalCode****   (Required)** | [Text](./Text.md) | Postal code of dropoff location. |
| dropoffLocation.address.**streetAddress****   (Required)** | [Text](./Text.md) | Street address of dropoff location. |
| dropoffLocation.**name****   (Required)** | [Text](./Text.md) | Name of the dropoff location. |
| dropoffLocation.**telephone** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) Telephone number of the Place. |
| **dropoffTime****   (Required)** | [DateTime](./DateTime.md) | When the car is returned. |
| **modifiedTime** | [DateTime](./DateTime.md) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](./URL.md) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **pickupLocation****   (Required)** | [AutoRental](./AutoRental.md) or [Place](./Place.md) | Where the car is picked up. |
| pickupLocation.**address****   (Required)** | [PostalAddress](./PostalAddress.md) | Address of the pickup location. |
| pickupLocation.address.**addressCountry****   (Required)** | [Text](./Text.md) or [Country](./Country.md) | Country of pickup location. |
| pickupLocation.address.**addressLocality****   (Required)** | [Text](./Text.md) | Locality (e.g. city) of pickup location. |
| pickupLocation.address.**addressRegion****   (Required)** | [Text](./Text.md) | Region (e.g. State) of pickup location. |
| pickupLocation.address.**postalCode****   (Required)** | [Text](./Text.md) | Postal code of pickup location. |
| pickupLocation.address.**streetAddress****   (Required)** | [Text](./Text.md) | Street address of pickup location. |
| pickupLocation.**name****   (Required)** | [Text](./Text.md) | Name of the pickup location. |
| pickupLocation.**telephone** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) Telephone number of the Place. |
| **pickupTime****   (Required)** | [DateTime](./DateTime.md) | When the car is picked up. |
| **potentialAction****   (Required)** | [CheckInAction](./CheckInAction.md), [ConfirmAction](./ConfirmAction.md), [CancelAction](./CancelAction.md) or | Actions supported for RentalCarReservation. |
| **price** | [Text](./Text.md) | Total price of the RentalCarReservation. |
| **priceCurrency** | [Text](./Text.md) | The currency (in 3-letter ISO 4217 format) of the RentalCarReservation's price. |
| **programMembership** | [ProgramMembership](./ProgramMembership.md) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](./Text.md) | The identifier of the membership. |
| programMembership.**program** | [Text](./Text.md) | The name of the program. |
| **reservationFor****   (Required)** |  | The car that is reserved. |
| reservationFor.**brand****   (Required)** | [Brand](./Brand.md) | The brand associated with the RentalCar. |
| reservationFor.brand.**name****   (Required)** | [Text](./Text.md) | Name of the Brand. |
| reservationFor.**description** | [Text](./Text.md) | A short description of the RentalCar. |
| reservationFor.**model****   (Required)** | [Text](./Text.md) | RentalCar's model. |
| reservationFor.**name****   (Required)** | [Text](./Text.md) | Name of the RentalCar. |
| reservationFor.**rentalCompany****   (Required)** | [Organization](./Organization.md) | The company renting the car. Also accepts a string (e.g. "Hertz"). |
| reservationFor.rentalCompany.**name****   (Required)** | [Text](./Text.md) | Name of the rental company. |
| **reservationNumber****   (Required)** | [Text](./Text.md) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](./ReservationStatus.md) | Current status of the reservation. |
| **underName****   (Required)** | [Organization](./Organization.md) or [Person](./Person.md) | The driver. |
| underName.**email** | [Text](./Text.md) | Email address. |
| underName.**name****   (Required)** | [Text](./Text.md) | Name of the Person. |
| **url** | [URL](./URL.md) | Web page where reservation can be viewed. |
