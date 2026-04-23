---
source: https://developers.google.com/workspace/gmail/markup/reference/types/EventReservation
root: workspace
fetched_at: 2026-04-23T15:29:29.550Z
---

# EventReservation

Type name: [EventReservation](./EventReservation.md)

Extends [Reservation](./Reservation.md)

| Name | Type | Description |
| --- | --- | --- |
| **action** | [Action](./Action.md) | An action that can be taken upon this thing. |
| action.**name** | [Text](./Text.md) | The string shown to the user on the UI element tied to the action. |
| action.**url** | [URL](./URL.md) | Target url for the action. If no explicit handler field is provided the action handler is expanded into a WebActionHandler with this url as the WebActionHandler url. |
| **additionalTicketText** | [Text](./Text.md) | Additional information about the ticket. |
| **bookingAgent** | [Organization](./Organization.md) or [Person](./Person.md) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**image** | [URL](./URL.md) | URL of an image of the Organization. |
| bookingAgent.**name** | [Text](./Text.md) | Name of the agent/service. |
| bookingAgent.**url** | [URL](./URL.md) | Website of the agent/service. |
| **bookingTime** | [DateTime](./DateTime.md) | Date the reservation was made. |
| **cancelReservationUrl** | [URL](./URL.md) | Web page where reservation can be cancelled. |
| **confirmReservationUrl** | [URL](./URL.md) | Web page where reservation can be confirmed. |
| **modifiedTime** | [DateTime](./DateTime.md) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](./URL.md) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **numSeats** | [Number](./Number.md) | The number of seats. |
| **price** | [Text](./Text.md) | Total price of the EventReservation. |
| **priceCurrency** | [Text](./Text.md) | The currency (in 3-letter ISO 4217 format) of the EventReservation's price. |
| **programMembership** | [ProgramMembership](./ProgramMembership.md) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](./Text.md) | The identifier of the membership. |
| programMembership.**program** | [Text](./Text.md) | The name of the program. |
| **reservationFor****   (Required)** |  | Can use Event, or any of the event subtypes, including BusinessEvent, ChildrenEvent, ComedyEvent, DanceEvent, EducationEvent, Festival, FoodEvent, LiteraryEvent, MovieShowing, MusicEvent, SaleEvent, SocialEvent, SportsEvent, TheaterEvent, VisualArtsEvent. |
| reservationFor.**description** | [Text](./Text.md) | A short description of the Event. |
| reservationFor.**doorTime** | [DateTime](./DateTime.md) | The time admission will commence. |
| reservationFor.**endDate** | [DateTime](./DateTime.md) | The end date and time of the event. |
| reservationFor.**image** | [URL](./URL.md) | URL of an image of the Event. |
| reservationFor.**location****   (Required)** | [Place](./Place.md) | The event's location. |
| reservationFor.location.**address****   (Required)** | [PostalAddress](./PostalAddress.md) | Address of the the event's location. |
| reservationFor.location.address.**addressCountry****   (Required)** | [Text](./Text.md) or [Country](./Country.md) | Country of the event's location. |
| reservationFor.location.address.**addressLocality****   (Required)** | [Text](./Text.md) | Locality (e.g. city) of the event's location. |
| reservationFor.location.address.**addressRegion****   (Required)** | [Text](./Text.md) | Region (e.g. State) of the event's location. |
| reservationFor.location.address.**postalCode****   (Required)** | [Text](./Text.md) | Postal code of the event's location. |
| reservationFor.location.address.**streetAddress****   (Required)** | [Text](./Text.md) | Street address of the event's location. |
| reservationFor.location.**name****   (Required)** | [Text](./Text.md) | Name of the the event's location. |
| reservationFor.**name****   (Required)** | [Text](./Text.md) | Event's name. |
| reservationFor.**performer** | [Person](./Person.md) or [Organization](./Organization.md) | (recommended for Confirmation Cards/Search Answers) The event's performer. Also accepts an array of objects. |
| reservationFor.performer.**image** | [URL](./URL.md) | (recommended for Confirmation Cards/Search Answers) URL of an image of the Person. |
| reservationFor.performer.**name** | [Text](./Text.md) | (recommended for Confirmation Cards/Search Answers) Name of the Person. |
| reservationFor.performer.**url** | [URL](./URL.md) | URL of the Person. |
| reservationFor.**startDate****   (Required)** | [DateTime](./DateTime.md) | The start date and time of the event. |
| reservationFor.**url** | [URL](./URL.md) | URL of the Event. |
| **reservationNumber****   (Required)** | [Text](./Text.md) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](./ReservationStatus.md) | Current status of the reservation. |
| **ticketDownloadUrl** | [URL](./URL.md) | Where the ticket can be downloaded. |
| **ticketNumber** | [Text](./Text.md) | The number or id of the ticket. |
| **ticketPrintUrl** | [URL](./URL.md) | Where the ticket can be printed. |
| **ticketToken** | [Text](./Text.md) or [URL](./URL.md) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| **underName****   (Required)** | [Person](./Person.md) or [Organization](./Organization.md) | The ticket holder. |
| underName.**email** | [Text](./Text.md) | Email address. |
| underName.**name****   (Required)** | [Text](./Text.md) | Name of the Person. |
| **url** | [URL](./URL.md) | Web page where reservation can be viewed. |
| **venueRow** | [Text](./Text.md) | The seat's row. |
| **venueSeat** | [Text](./Text.md) | The seat number. |
| **venueSection** | [Text](./Text.md) | The seat's section. |
