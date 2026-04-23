---
source: https://developers.google.com/workspace/gmail/markup/reference/types/BusReservation
root: workspace
fetched_at: 2026-04-23T15:29:21.760Z
---

# BusReservation

Type name: [BusReservation](./BusReservation.md)

Extends [Reservation](./Reservation.md)

| Name | Type | Description |
| --- | --- | --- |
| **bookingAgent** | [Person](./Person.md) or [Organization](./Organization.md) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**name** | [Text](./Text.md) | Name of the agent/service. |
| bookingAgent.**url** | [URL](./URL.md) | Website of the agent/service. |
| **bookingTime** | [DateTime](./DateTime.md) | Date the reservation was made. |
| **cancelReservationUrl** | [URL](./URL.md) | Web page where reservation can be cancelled. |
| **checkinUrl** | [URL](./URL.md) | Webpage where the passenger can check in. |
| **confirmReservationUrl** | [URL](./URL.md) | Web page where reservation can be confirmed. |
| **modifiedTime** | [DateTime](./DateTime.md) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](./URL.md) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **programMembership** | [ProgramMembership](./ProgramMembership.md) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](./Text.md) | The identifier of the membership. |
| programMembership.**program** | [Text](./Text.md) | The name of the program. |
| **reservationFor****   (Required)** | [BusTrip](./BusTrip.md) | Information about the bus trip. |
| reservationFor.**arrivalBusStop****   (Required)** | [BusStation](./BusStation.md) or [BusStop](./BusStop.md) | Where the bus arrives at. |
| reservationFor.arrivalBusStop.**address** | [PostalAddress](./PostalAddress.md) | Address of the arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.**addressCountry** | [Text](./Text.md) or [Country](./Country.md) | (recommended for Confirmation Cards/Search Answers) Country of arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.**addressLocality** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) Locality (e.g. city) of arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.**addressRegion** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) Region (e.g. State) of arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.**postalCode** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) Postal code of arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.**streetAddress** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) Street address of arrival bus stop / station. |
| reservationFor.arrivalBusStop.**directions** | [Text](./Text.md) | Directions to the bus stop. |
| reservationFor.arrivalBusStop.**name****   (Required)** | [Text](./Text.md) | Name of the BusStop. |
| reservationFor.**arrivalTime****   (Required)** | [DateTime](./DateTime.md) | Bus arrival time. |
| reservationFor.**busCompany****   (Required)** | [Organization](./Organization.md) | e.g. Bolt NYC. Also accepts a string (e.g. "Bolt NYC"). |
| reservationFor.busCompany.**name****   (Required)** | [Text](./Text.md) | Name of the Organization. |
| reservationFor.**busName** | [Text](./Text.md) | e.g. Bolt Express. |
| reservationFor.**busNumber** | [Text](./Text.md) | e.g. 101. |
| reservationFor.**departureBusStop****   (Required)** | [BusStation](./BusStation.md) or [BusStop](./BusStop.md) | Where the bus departs from. |
| reservationFor.departureBusStop.**address** | [PostalAddress](./PostalAddress.md) | Address of the departure bus stop / station. |
| reservationFor.departureBusStop.address.**addressCountry** | [Text](./Text.md) or [Country](./Country.md) | (recommended for Confirmation Cards/Search Answers) Country of departure bus stop / station. |
| reservationFor.departureBusStop.address.**addressLocality** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) Locality (e.g. city) of departure bus stop / station. |
| reservationFor.departureBusStop.address.**addressRegion** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) Region (e.g. State) of departure bus stop / station. |
| reservationFor.departureBusStop.address.**postalCode** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) Postal code of departure bus stop / station. |
| reservationFor.departureBusStop.address.**streetAddress** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) Street address of departure bus stop / station. |
| reservationFor.departureBusStop.**directions** | [Text](./Text.md) | Directions to the bus stop. |
| reservationFor.departureBusStop.**name****   (Required)** | [Text](./Text.md) | Name of the BusStop. |
| reservationFor.**departureTime****   (Required)** | [DateTime](./DateTime.md) | Bus departure time. |
| reservationFor.**name** | [Text](./Text.md) | Name of the BusTrip. |
| **reservationNumber****   (Required)** | [Text](./Text.md) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](./ReservationStatus.md) | Current status of the reservation. |
| **reservedTicket** | [Ticket](./Ticket.md) | Ticket information. |
| reservedTicket.**additionalTicketText** | [Text](./Text.md) | Additional explanatory text about the ticket. |
| reservedTicket.**downloadUrl** | [URL](./URL.md) | . |
| reservedTicket.**price** | [Text](./Text.md) | Total price of the ticket. |
| reservedTicket.**priceCurrency** | [Text](./Text.md) | The currency (in 3-letter ISO 4217 format) of the ticket's price. |
| reservedTicket.**printUrl** | [URL](./URL.md) | . |
| reservedTicket.**ticketedSeat** | [Seat](./Seat.md) | The location of the reserved seat (e.g., 27B).. |
| reservedTicket.ticketedSeat.**seatingType** | [Text](./Text.md) | The type/class of the seat. |
| reservedTicket.ticketedSeat.**seatNumber** | [Text](./Text.md) | The location of the reserved seat. |
| reservedTicket.ticketedSeat.**seatRow** | [Text](./Text.md) | The row location of the reserved seat. |
| reservedTicket.**ticketNumber** | [Text](./Text.md) | The number or id of the ticket. |
| reservedTicket.**ticketToken** | [Text](./Text.md) or [URL](./URL.md) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| reservedTicket.**underName** | [Person](./Person.md) or [Organization](./Organization.md) | The Person or organization the ticket is for. |
| reservedTicket.underName.**name** | [Text](./Text.md) | Name of the Person. |
| **underName****   (Required)** | [Person](./Person.md) or [Organization](./Organization.md) | The passenger. |
| underName.**email** | [Text](./Text.md) | Email address. |
| underName.**name****   (Required)** | [Text](./Text.md) | Name of the Person. |
| **url** | [URL](./URL.md) | Web page where reservation can be viewed. |
