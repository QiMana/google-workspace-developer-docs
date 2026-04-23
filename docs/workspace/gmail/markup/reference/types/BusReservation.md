---
source: https://developers.google.com/workspace/gmail/markup/reference/types/BusReservation
root: workspace
fetched_at: 2026-04-23T15:29:21.760Z
---

# BusReservation

Type name: [BusReservation](https://developers.google.com/workspace/gmail/markup/reference/types/BusReservation)

Extends [Reservation](https://developers.google.com/workspace/gmail/markup/reference/types/Reservation)

| Name | Type | Description |
| --- | --- | --- |
| **bookingAgent** | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the agent/service. |
| bookingAgent.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Website of the agent/service. |
| **bookingTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Date the reservation was made. |
| **cancelReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be cancelled. |
| **checkinUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Webpage where the passenger can check in. |
| **confirmReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be confirmed. |
| **modifiedTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **programMembership** | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The identifier of the membership. |
| programMembership.**program** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The name of the program. |
| **reservationFor****   (Required)** | [BusTrip](https://developers.google.com/workspace/gmail/markup/reference/types/BusTrip) | Information about the bus trip. |
| reservationFor.**arrivalBusStop****   (Required)** | [BusStation](https://developers.google.com/workspace/gmail/markup/reference/types/BusStation) or [BusStop](https://developers.google.com/workspace/gmail/markup/reference/types/BusStop) | Where the bus arrives at. |
| reservationFor.arrivalBusStop.**address** | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Address of the arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.**addressCountry** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) | (recommended for Confirmation Cards/Search Answers) Country of arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.**addressLocality** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Locality (e.g. city) of arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.**addressRegion** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Region (e.g. State) of arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.**postalCode** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Postal code of arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.**streetAddress** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Street address of arrival bus stop / station. |
| reservationFor.arrivalBusStop.**directions** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Directions to the bus stop. |
| reservationFor.arrivalBusStop.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the BusStop. |
| reservationFor.**arrivalTime****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Bus arrival time. |
| reservationFor.**busCompany****   (Required)** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | e.g. Bolt NYC. Also accepts a string (e.g. "Bolt NYC"). |
| reservationFor.busCompany.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Organization. |
| reservationFor.**busName** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | e.g. Bolt Express. |
| reservationFor.**busNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | e.g. 101. |
| reservationFor.**departureBusStop****   (Required)** | [BusStation](https://developers.google.com/workspace/gmail/markup/reference/types/BusStation) or [BusStop](https://developers.google.com/workspace/gmail/markup/reference/types/BusStop) | Where the bus departs from. |
| reservationFor.departureBusStop.**address** | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Address of the departure bus stop / station. |
| reservationFor.departureBusStop.address.**addressCountry** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) | (recommended for Confirmation Cards/Search Answers) Country of departure bus stop / station. |
| reservationFor.departureBusStop.address.**addressLocality** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Locality (e.g. city) of departure bus stop / station. |
| reservationFor.departureBusStop.address.**addressRegion** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Region (e.g. State) of departure bus stop / station. |
| reservationFor.departureBusStop.address.**postalCode** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Postal code of departure bus stop / station. |
| reservationFor.departureBusStop.address.**streetAddress** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Street address of departure bus stop / station. |
| reservationFor.departureBusStop.**directions** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Directions to the bus stop. |
| reservationFor.departureBusStop.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the BusStop. |
| reservationFor.**departureTime****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Bus departure time. |
| reservationFor.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the BusTrip. |
| **reservationNumber****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](https://developers.google.com/workspace/gmail/markup/reference/types/ReservationStatus) | Current status of the reservation. |
| **reservedTicket** | [Ticket](https://developers.google.com/workspace/gmail/markup/reference/types/Ticket) | Ticket information. |
| reservedTicket.**additionalTicketText** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Additional explanatory text about the ticket. |
| reservedTicket.**downloadUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | . |
| reservedTicket.**price** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Total price of the ticket. |
| reservedTicket.**priceCurrency** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency (in 3-letter ISO 4217 format) of the ticket's price. |
| reservedTicket.**printUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | . |
| reservedTicket.**ticketedSeat** | [Seat](https://developers.google.com/workspace/gmail/markup/reference/types/Seat) | The location of the reserved seat (e.g., 27B).. |
| reservedTicket.ticketedSeat.**seatingType** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The type/class of the seat. |
| reservedTicket.ticketedSeat.**seatNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The location of the reserved seat. |
| reservedTicket.ticketedSeat.**seatRow** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The row location of the reserved seat. |
| reservedTicket.**ticketNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the ticket. |
| reservedTicket.**ticketToken** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| reservedTicket.**underName** | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The Person or organization the ticket is for. |
| reservedTicket.underName.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
| **underName****   (Required)** | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The passenger. |
| underName.**email** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Email address. |
| underName.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
| **url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be viewed. |
