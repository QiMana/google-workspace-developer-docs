---
source: https://developers.google.com/workspace/gmail/markup/reference/types/EventReservation
root: workspace
fetched_at: 2026-04-23T15:29:29.550Z
---

# EventReservation

Type name: [EventReservation](https://developers.google.com/workspace/gmail/markup/reference/types/EventReservation)

Extends [Reservation](https://developers.google.com/workspace/gmail/markup/reference/types/Reservation)

| Name | Type | Description |
| --- | --- | --- |
| **action** | [Action](https://developers.google.com/workspace/gmail/markup/reference/types/Action) | An action that can be taken upon this thing. |
| action.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The string shown to the user on the UI element tied to the action. |
| action.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Target url for the action. If no explicit handler field is provided the action handler is expanded into a WebActionHandler with this url as the WebActionHandler url. |
| **additionalTicketText** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Additional information about the ticket. |
| **bookingAgent** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**image** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL of an image of the Organization. |
| bookingAgent.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the agent/service. |
| bookingAgent.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Website of the agent/service. |
| **bookingTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Date the reservation was made. |
| **cancelReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be cancelled. |
| **confirmReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be confirmed. |
| **modifiedTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **numSeats** | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | The number of seats. |
| **price** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Total price of the EventReservation. |
| **priceCurrency** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency (in 3-letter ISO 4217 format) of the EventReservation's price. |
| **programMembership** | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The identifier of the membership. |
| programMembership.**program** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The name of the program. |
| **reservationFor****   (Required)** |  | Can use Event, or any of the event subtypes, including BusinessEvent, ChildrenEvent, ComedyEvent, DanceEvent, EducationEvent, Festival, FoodEvent, LiteraryEvent, MovieShowing, MusicEvent, SaleEvent, SocialEvent, SportsEvent, TheaterEvent, VisualArtsEvent. |
| reservationFor.**description** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A short description of the Event. |
| reservationFor.**doorTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The time admission will commence. |
| reservationFor.**endDate** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The end date and time of the event. |
| reservationFor.**image** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL of an image of the Event. |
| reservationFor.**location****   (Required)** | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | The event's location. |
| reservationFor.location.**address****   (Required)** | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Address of the the event's location. |
| reservationFor.location.address.**addressCountry****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) | Country of the event's location. |
| reservationFor.location.address.**addressLocality****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Locality (e.g. city) of the event's location. |
| reservationFor.location.address.**addressRegion****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Region (e.g. State) of the event's location. |
| reservationFor.location.address.**postalCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Postal code of the event's location. |
| reservationFor.location.address.**streetAddress****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Street address of the event's location. |
| reservationFor.location.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the the event's location. |
| reservationFor.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Event's name. |
| reservationFor.**performer** | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | (recommended for Confirmation Cards/Search Answers) The event's performer. Also accepts an array of objects. |
| reservationFor.performer.**image** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | (recommended for Confirmation Cards/Search Answers) URL of an image of the Person. |
| reservationFor.performer.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Name of the Person. |
| reservationFor.performer.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL of the Person. |
| reservationFor.**startDate****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The start date and time of the event. |
| reservationFor.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL of the Event. |
| **reservationNumber****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](https://developers.google.com/workspace/gmail/markup/reference/types/ReservationStatus) | Current status of the reservation. |
| **ticketDownloadUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Where the ticket can be downloaded. |
| **ticketNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the ticket. |
| **ticketPrintUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Where the ticket can be printed. |
| **ticketToken** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| **underName****   (Required)** | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The ticket holder. |
| underName.**email** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Email address. |
| underName.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
| **url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be viewed. |
| **venueRow** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The seat's row. |
| **venueSeat** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The seat number. |
| **venueSection** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The seat's section. |
