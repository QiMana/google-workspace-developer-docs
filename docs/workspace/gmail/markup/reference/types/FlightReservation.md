---
source: https://developers.google.com/workspace/gmail/markup/reference/types/FlightReservation
root: workspace
fetched_at: 2026-04-23T15:29:31.108Z
---

# FlightReservation

Type name: [FlightReservation](https://developers.google.com/workspace/gmail/markup/reference/types/FlightReservation)

Extends [Reservation](https://developers.google.com/workspace/gmail/markup/reference/types/Reservation)

| Name | Type | Description |
| --- | --- | --- |
| **additionalTicketText** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Additional information about the boarding pass. |
| **airplaneSeat** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The location of the reserved seat (e.g., 27B). |
| **airplaneSeatClass** |  | The cabin/class of the airplaneSeat. |
| airplaneSeatClass.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the AirplaneSeatClass. |
| **boardingGroup** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The airline-specific indicator of boarding order / preference. |
| **bookingAgent** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the agent/service. |
| bookingAgent.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Website of the agent/service. |
| **bookingTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Date the reservation was made. |
| **modifiedTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **potentialAction** | , [ConfirmAction](https://developers.google.com/workspace/gmail/markup/reference/types/ConfirmAction), [CancelAction](https://developers.google.com/workspace/gmail/markup/reference/types/CancelAction) or [CheckInAction](https://developers.google.com/workspace/gmail/markup/reference/types/CheckInAction) | Action that can be performed on the reservation. |
| potentialAction.**target** | [EntryPoint](https://developers.google.com/workspace/gmail/markup/reference/types/EntryPoint) | Specifies a handler to process the action, typically a simple URL. |
| **programMembership** | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The identifier of the membership. |
| programMembership.**program** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The name of the program. |
| **reservationFor****   (Required)** |  | The flight the reservation is for. |
| reservationFor.**airline****   (Required)** | [Airline](https://developers.google.com/workspace/gmail/markup/reference/types/Airline) | The airline providing the flight. |
| reservationFor.airline.**iataCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The IATA code for the airline. |
| reservationFor.airline.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Airline. |
| reservationFor.**arrivalAirport****   (Required)** | [Airport](https://developers.google.com/workspace/gmail/markup/reference/types/Airport) | The final destination of the flight. Also accepts a string (e.g. "John F. Kennedy International Airport JFK"). |
| reservationFor.arrivalAirport.**iataCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The IATA code for the airport (e.g. 'UA'). |
| reservationFor.arrivalAirport.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Airport. |
| reservationFor.**arrivalGate** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Identifier of the airport arrival gate of the flight. |
| reservationFor.**arrivalTerminal** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The airport terminal of the arrivalGate. |
| reservationFor.**arrivalTime****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Expected time of arrival. |
| reservationFor.**boardingTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Time when boarding will commence. |
| reservationFor.**departureAirport****   (Required)** | [Airport](https://developers.google.com/workspace/gmail/markup/reference/types/Airport) | The departure airport for the flight. Also accepts a string (e.g. "San Francisco Airport SFO"). |
| reservationFor.departureAirport.**iataCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The IATA code for the airport (e.g. 'UA'). |
| reservationFor.departureAirport.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Airport. |
| reservationFor.**departureGate** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Identifier of the airport departure gate of the flight. |
| reservationFor.**departureTerminal** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The airport terminal of the departureGate. |
| reservationFor.**departureTime****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Expected time of departure. |
| reservationFor.**flightNumber****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Flight identifier. |
| reservationFor.**operatedBy** | [Airline](https://developers.google.com/workspace/gmail/markup/reference/types/Airline) | The airline operating the flight. |
| reservationFor.operatedBy.**iataCode** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The IATA code for the airline. |
| reservationFor.operatedBy.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Airline. |
| reservationFor.**webCheckinTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Earliest time for web checking. |
| **reservationNumber****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](https://developers.google.com/workspace/gmail/markup/reference/types/ReservationStatus) | Current status of the reservation. |
| **ticketDownloadUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Where the boarding pass can be downloaded. |
| **ticketNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the ticket. |
| **ticketPrintUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Where the boarding pass can be printed. |
| **ticketToken** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| **underName****   (Required)** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The passenger. |
| underName.**email** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Email address. |
| underName.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
| **url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be viewed. |
