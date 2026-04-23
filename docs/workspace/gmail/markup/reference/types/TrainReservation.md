---
source: https://developers.google.com/workspace/gmail/markup/reference/types/TrainReservation
root: workspace
fetched_at: 2026-04-23T15:29:55.650Z
---

# TrainReservation

Type name: [TrainReservation](https://developers.google.com/workspace/gmail/markup/reference/types/TrainReservation)

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
| **modifiedTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **programMembership** | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The identifier of the membership. |
| programMembership.**program** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The name of the program. |
| **reservationFor****   (Required)** | [TrainTrip](https://developers.google.com/workspace/gmail/markup/reference/types/TrainTrip) | Information about the train trip. |
| reservationFor.**arrivalPlatform** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The platform where the train arrives. |
| reservationFor.**arrivalStation****   (Required)** | [TrainStation](https://developers.google.com/workspace/gmail/markup/reference/types/TrainStation) | The station where the train ends. |
| reservationFor.arrivalStation.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the TrainStation. |
| reservationFor.**arrivalTime****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The expected arrival time. |
| reservationFor.**departurePlatform** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The platform where the train departs. |
| reservationFor.**departureStation****   (Required)** | [TrainStation](https://developers.google.com/workspace/gmail/markup/reference/types/TrainStation) | The station where the train departs. |
| reservationFor.departureStation.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the TrainStation. |
| reservationFor.**departureTime****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The expected departure time. |
| reservationFor.**trainCode** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The unique identifier for the train. |
| reservationFor.**trainCompany** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The organization that operates the train. Also accepts a string (e.g. ""). |
| reservationFor.**trainName** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The name of the train. |
| reservationFor.**trainNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) The number for the train. |
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
| reservedTicket.**ticketToken** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| reservedTicket.**underName** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The Person or organization the ticket is for. |
| reservedTicket.underName.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
| **underName** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The passenger. |
| underName.**email** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Email address. |
| underName.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Name of the Person. |
| **url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be viewed. |
