---
source: https://developers.google.com/workspace/gmail/markup/reference/types/FlightReservation
root: workspace
fetched_at: 2026-04-23T15:29:31.108Z
---

# FlightReservation

Type name: [FlightReservation](./FlightReservation.md)

Extends [Reservation](./Reservation.md)

| Name | Type | Description |
| --- | --- | --- |
| **additionalTicketText** | [Text](./Text.md) | Additional information about the boarding pass. |
| **airplaneSeat** | [Text](./Text.md) | The location of the reserved seat (e.g., 27B). |
| **airplaneSeatClass** |  | The cabin/class of the airplaneSeat. |
| airplaneSeatClass.**name** | [Text](./Text.md) | Name of the AirplaneSeatClass. |
| **boardingGroup** | [Text](./Text.md) | The airline-specific indicator of boarding order / preference. |
| **bookingAgent** | [Organization](./Organization.md) or [Person](./Person.md) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**name** | [Text](./Text.md) | Name of the agent/service. |
| bookingAgent.**url** | [URL](./URL.md) | Website of the agent/service. |
| **bookingTime** | [DateTime](./DateTime.md) | Date the reservation was made. |
| **modifiedTime** | [DateTime](./DateTime.md) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **potentialAction** | , [ConfirmAction](./ConfirmAction.md), [CancelAction](./CancelAction.md) or [CheckInAction](./CheckInAction.md) | Action that can be performed on the reservation. |
| potentialAction.**target** | [EntryPoint](./EntryPoint.md) | Specifies a handler to process the action, typically a simple URL. |
| **programMembership** | [ProgramMembership](./ProgramMembership.md) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](./Text.md) | The identifier of the membership. |
| programMembership.**program** | [Text](./Text.md) | The name of the program. |
| **reservationFor****   (Required)** |  | The flight the reservation is for. |
| reservationFor.**airline****   (Required)** | [Airline](./Airline.md) | The airline providing the flight. |
| reservationFor.airline.**iataCode****   (Required)** | [Text](./Text.md) | The IATA code for the airline. |
| reservationFor.airline.**name****   (Required)** | [Text](./Text.md) | Name of the Airline. |
| reservationFor.**arrivalAirport****   (Required)** | [Airport](./Airport.md) | The final destination of the flight. Also accepts a string (e.g. "John F. Kennedy International Airport JFK"). |
| reservationFor.arrivalAirport.**iataCode****   (Required)** | [Text](./Text.md) | The IATA code for the airport (e.g. 'UA'). |
| reservationFor.arrivalAirport.**name****   (Required)** | [Text](./Text.md) | Name of the Airport. |
| reservationFor.**arrivalGate** | [Text](./Text.md) | Identifier of the airport arrival gate of the flight. |
| reservationFor.**arrivalTerminal** | [Text](./Text.md) | The airport terminal of the arrivalGate. |
| reservationFor.**arrivalTime****   (Required)** | [DateTime](./DateTime.md) | Expected time of arrival. |
| reservationFor.**boardingTime** | [DateTime](./DateTime.md) | Time when boarding will commence. |
| reservationFor.**departureAirport****   (Required)** | [Airport](./Airport.md) | The departure airport for the flight. Also accepts a string (e.g. "San Francisco Airport SFO"). |
| reservationFor.departureAirport.**iataCode****   (Required)** | [Text](./Text.md) | The IATA code for the airport (e.g. 'UA'). |
| reservationFor.departureAirport.**name****   (Required)** | [Text](./Text.md) | Name of the Airport. |
| reservationFor.**departureGate** | [Text](./Text.md) | Identifier of the airport departure gate of the flight. |
| reservationFor.**departureTerminal** | [Text](./Text.md) | The airport terminal of the departureGate. |
| reservationFor.**departureTime****   (Required)** | [DateTime](./DateTime.md) | Expected time of departure. |
| reservationFor.**flightNumber****   (Required)** | [Text](./Text.md) | Flight identifier. |
| reservationFor.**operatedBy** | [Airline](./Airline.md) | The airline operating the flight. |
| reservationFor.operatedBy.**iataCode** | [Text](./Text.md) | The IATA code for the airline. |
| reservationFor.operatedBy.**name** | [Text](./Text.md) | Name of the Airline. |
| reservationFor.**webCheckinTime** | [DateTime](./DateTime.md) | Earliest time for web checking. |
| **reservationNumber****   (Required)** | [Text](./Text.md) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](./ReservationStatus.md) | Current status of the reservation. |
| **ticketDownloadUrl** | [URL](./URL.md) | Where the boarding pass can be downloaded. |
| **ticketNumber** | [Text](./Text.md) | The number or id of the ticket. |
| **ticketPrintUrl** | [URL](./URL.md) | Where the boarding pass can be printed. |
| **ticketToken** | [Text](./Text.md) or [URL](./URL.md) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| **underName****   (Required)** | [Organization](./Organization.md) or [Person](./Person.md) | The passenger. |
| underName.**email** | [Text](./Text.md) | Email address. |
| underName.**name****   (Required)** | [Text](./Text.md) | Name of the Person. |
| **url** | [URL](./URL.md) | Web page where reservation can be viewed. |
