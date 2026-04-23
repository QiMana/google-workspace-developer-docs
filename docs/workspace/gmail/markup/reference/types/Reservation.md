---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Reservation
root: workspace
fetched_at: 2026-04-23T15:29:49.726Z
---

# Reservation

Type name: [Reservation](https://developers.google.com/workspace/gmail/markup/reference/types/Reservation)

Extends [Intangible](https://developers.google.com/workspace/gmail/markup/reference/types/Intangible) or [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing)

| Name | Type | Description |
| --- | --- | --- |
| additionalTicketText | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Any additional text to appear on a ticket, such as additional privileges or identifiers. |
| bookingAgent | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Who made the reservation. |
| bookingDate | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Date the reservation was made. |
| bookingTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Date the reservation was made. |
| broker | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. |
| cancelReservationUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be cancelled. |
| checkinUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where the passenger can check in. |
| confirmReservationUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be confirmed. |
| creator | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The person / organization that made the reservation. |
| dateModified | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) or [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Time the reservation was last modified. |
| loyaltyProgram | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | . |
| modifiedTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Time the reservation was last modified. |
| modifyReservationUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be modified. |
| numSeats | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Number of seats if unreserved seating. |
| price | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Total price of the Reservation. |
| priceCurrency | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency (in 3-letter ISO 4217 format) of the Reservation's price. |
| programMembership | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembershipUsed | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| provider | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The organization providing the reservation. |
| reservationFor | [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing) | The thing -- restaurant, movie, event, flight, etc. -- the reservation is for. |
| reservationId | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A unique identifier for the reservation. |
| reservationNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number, code or id of the reservation. |
| reservationStatus | [ReservationStatus](https://developers.google.com/workspace/gmail/markup/reference/types/ReservationStatus) or [ReservationStatusType](https://developers.google.com/workspace/gmail/markup/reference/types/ReservationStatusType) | Current status of the reservation. |
| reservedTicket | [Ticket](https://developers.google.com/workspace/gmail/markup/reference/types/Ticket) | A ticket associated with the reservation. |
| seat | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The location of the reserved seat (e.g., 27B). |
| seatingType | [QualitativeValue](https://developers.google.com/workspace/gmail/markup/reference/types/QualitativeValue) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The cabin/class of the seat. |
| seatRow | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The row location of the reserved seat (e.g., B). |
| seatSection | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The section location of the reserved seat (e.g. Orchestra). |
| ticketDownloadUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | . |
| ticketNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the ticket. |
| ticketPrintUrl | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | . |
| ticketToken | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| totalPrice | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number), [PriceSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/PriceSpecification) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The total price for the reservation or ticket, including applicable taxes, shipping, etc. |
| underName | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The person or organization the reservation is for. |
