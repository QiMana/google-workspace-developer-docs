---
source: https://developers.google.com/workspace/gmail/markup/reference/types/RentalCarReservation
root: workspace
fetched_at: 2026-04-23T15:29:50.463Z
---

# RentalCarReservation

Type name: [RentalCarReservation](https://developers.google.com/workspace/gmail/markup/reference/types/RentalCarReservation)

Extends [Reservation](https://developers.google.com/workspace/gmail/markup/reference/types/Reservation)

| Name | Type | Description |
| --- | --- | --- |
| **bookingAgent** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the agent/service. |
| bookingAgent.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Website of the agent/service. |
| **bookingTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Date the reservation was made. |
| **cancelReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be cancelled. |
| **checkinUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Webpage where the passenger can check in. |
| **confirmReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be confirmed. |
| **dropoffLocation****   (Required)** | [AutoRental](https://developers.google.com/workspace/gmail/markup/reference/types/AutoRental) or [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | Where the car is returned. |
| dropoffLocation.**address****   (Required)** | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Address of the dropoff location. |
| dropoffLocation.address.**addressCountry****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) | Country of dropoff location. |
| dropoffLocation.address.**addressLocality****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Locality (e.g. city) of dropoff location. |
| dropoffLocation.address.**addressRegion****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Region (e.g. State) of dropoff location. |
| dropoffLocation.address.**postalCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Postal code of dropoff location. |
| dropoffLocation.address.**streetAddress****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Street address of dropoff location. |
| dropoffLocation.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the dropoff location. |
| dropoffLocation.**telephone** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Telephone number of the Place. |
| **dropoffTime****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | When the car is returned. |
| **modifiedTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **pickupLocation****   (Required)** | [AutoRental](https://developers.google.com/workspace/gmail/markup/reference/types/AutoRental) or [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | Where the car is picked up. |
| pickupLocation.**address****   (Required)** | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Address of the pickup location. |
| pickupLocation.address.**addressCountry****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) | Country of pickup location. |
| pickupLocation.address.**addressLocality****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Locality (e.g. city) of pickup location. |
| pickupLocation.address.**addressRegion****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Region (e.g. State) of pickup location. |
| pickupLocation.address.**postalCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Postal code of pickup location. |
| pickupLocation.address.**streetAddress****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Street address of pickup location. |
| pickupLocation.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the pickup location. |
| pickupLocation.**telephone** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Telephone number of the Place. |
| **pickupTime****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | When the car is picked up. |
| **potentialAction****   (Required)** | [CheckInAction](https://developers.google.com/workspace/gmail/markup/reference/types/CheckInAction), [ConfirmAction](https://developers.google.com/workspace/gmail/markup/reference/types/ConfirmAction), [CancelAction](https://developers.google.com/workspace/gmail/markup/reference/types/CancelAction) or | Actions supported for RentalCarReservation. |
| **price** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Total price of the RentalCarReservation. |
| **priceCurrency** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency (in 3-letter ISO 4217 format) of the RentalCarReservation's price. |
| **programMembership** | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The identifier of the membership. |
| programMembership.**program** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The name of the program. |
| **reservationFor****   (Required)** |  | The car that is reserved. |
| reservationFor.**brand****   (Required)** | [Brand](https://developers.google.com/workspace/gmail/markup/reference/types/Brand) | The brand associated with the RentalCar. |
| reservationFor.brand.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Brand. |
| reservationFor.**description** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A short description of the RentalCar. |
| reservationFor.**model****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | RentalCar's model. |
| reservationFor.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the RentalCar. |
| reservationFor.**rentalCompany****   (Required)** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The company renting the car. Also accepts a string (e.g. "Hertz"). |
| reservationFor.rentalCompany.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the rental company. |
| **reservationNumber****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](https://developers.google.com/workspace/gmail/markup/reference/types/ReservationStatus) | Current status of the reservation. |
| **underName****   (Required)** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The driver. |
| underName.**email** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Email address. |
| underName.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
| **url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be viewed. |
