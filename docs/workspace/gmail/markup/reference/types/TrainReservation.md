---
source: https://developers.google.com/workspace/gmail/markup/reference/types/TrainReservation
root: workspace
fetched_at: 2026-04-23T15:29:55.650Z
---

# TrainReservation

Type name: [TrainReservation](./TrainReservation.md)

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
| **modifiedTime** | [DateTime](./DateTime.md) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](./URL.md) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **programMembership** | [ProgramMembership](./ProgramMembership.md) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](./Text.md) | The identifier of the membership. |
| programMembership.**program** | [Text](./Text.md) | The name of the program. |
| **reservationFor****   (Required)** | [TrainTrip](./TrainTrip.md) | Information about the train trip. |
| reservationFor.**arrivalPlatform** | [Text](./Text.md) | The platform where the train arrives. |
| reservationFor.**arrivalStation****   (Required)** | [TrainStation](./TrainStation.md) | The station where the train ends. |
| reservationFor.arrivalStation.**name****   (Required)** | [Text](./Text.md) | Name of the TrainStation. |
| reservationFor.**arrivalTime****   (Required)** | [DateTime](./DateTime.md) | The expected arrival time. |
| reservationFor.**departurePlatform** | [Text](./Text.md) | The platform where the train departs. |
| reservationFor.**departureStation****   (Required)** | [TrainStation](./TrainStation.md) | The station where the train departs. |
| reservationFor.departureStation.**name****   (Required)** | [Text](./Text.md) | Name of the TrainStation. |
| reservationFor.**departureTime****   (Required)** | [DateTime](./DateTime.md) | The expected departure time. |
| reservationFor.**trainCode** | [Text](./Text.md) | The unique identifier for the train. |
| reservationFor.**trainCompany** | [Organization](./Organization.md) | The organization that operates the train. Also accepts a string (e.g. ""). |
| reservationFor.**trainName** | [Text](./Text.md) | The name of the train. |
| reservationFor.**trainNumber** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) The number for the train. |
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
| reservedTicket.**ticketToken** | [URL](./URL.md) or [Text](./Text.md) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| reservedTicket.**underName** | [Organization](./Organization.md) or [Person](./Person.md) | The Person or organization the ticket is for. |
| reservedTicket.underName.**name** | [Text](./Text.md) | Name of the Person. |
| **underName** | [Organization](./Organization.md) or [Person](./Person.md) | The passenger. |
| underName.**email** | [Text](./Text.md) | Email address. |
| underName.**name** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) Name of the Person. |
| **url** | [URL](./URL.md) | Web page where reservation can be viewed. |
