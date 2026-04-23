---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Reservation
root: workspace
fetched_at: 2026-04-23T15:29:49.726Z
---

# Reservation

Type name: [Reservation](./Reservation.md)

Extends [Intangible](./Intangible.md) or [Thing](./Thing.md)

| Name | Type | Description |
| --- | --- | --- |
| additionalTicketText | [Text](./Text.md) | Any additional text to appear on a ticket, such as additional privileges or identifiers. |
| bookingAgent | [Organization](./Organization.md) or [Person](./Person.md) | Who made the reservation. |
| bookingDate | [DateTime](./DateTime.md) | Date the reservation was made. |
| bookingTime | [DateTime](./DateTime.md) | Date the reservation was made. |
| broker | [Organization](./Organization.md) or [Person](./Person.md) | An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. |
| cancelReservationUrl | [URL](./URL.md) | Web page where reservation can be cancelled. |
| checkinUrl | [URL](./URL.md) | Web page where the passenger can check in. |
| confirmReservationUrl | [URL](./URL.md) | Web page where reservation can be confirmed. |
| creator | [Organization](./Organization.md) or [Person](./Person.md) | The person / organization that made the reservation. |
| dateModified | [Date](./Date.md) or [DateTime](./DateTime.md) | Time the reservation was last modified. |
| loyaltyProgram | [ProgramMembership](./ProgramMembership.md) | . |
| modifiedTime | [DateTime](./DateTime.md) | Time the reservation was last modified. |
| modifyReservationUrl | [URL](./URL.md) | Web page where reservation can be modified. |
| numSeats | [Text](./Text.md) | Number of seats if unreserved seating. |
| price | [Number](./Number.md) or [Text](./Text.md) | Total price of the Reservation. |
| priceCurrency | [Text](./Text.md) | The currency (in 3-letter ISO 4217 format) of the Reservation's price. |
| programMembership | [ProgramMembership](./ProgramMembership.md) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembershipUsed | [ProgramMembership](./ProgramMembership.md) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| provider | [Organization](./Organization.md) or [Person](./Person.md) | The organization providing the reservation. |
| reservationFor | [Thing](./Thing.md) | The thing -- restaurant, movie, event, flight, etc. -- the reservation is for. |
| reservationId | [Text](./Text.md) | A unique identifier for the reservation. |
| reservationNumber | [Text](./Text.md) | The number, code or id of the reservation. |
| reservationStatus | [ReservationStatus](./ReservationStatus.md) or [ReservationStatusType](./ReservationStatusType.md) | Current status of the reservation. |
| reservedTicket | [Ticket](./Ticket.md) | A ticket associated with the reservation. |
| seat | [Text](./Text.md) | The location of the reserved seat (e.g., 27B). |
| seatingType | [QualitativeValue](./QualitativeValue.md) or [Text](./Text.md) | The cabin/class of the seat. |
| seatRow | [Text](./Text.md) | The row location of the reserved seat (e.g., B). |
| seatSection | [Text](./Text.md) | The section location of the reserved seat (e.g. Orchestra). |
| ticketDownloadUrl | [URL](./URL.md) | . |
| ticketNumber | [Text](./Text.md) | The number or id of the ticket. |
| ticketPrintUrl | [URL](./URL.md) | . |
| ticketToken | [Text](./Text.md) or [URL](./URL.md) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| totalPrice | [Number](./Number.md), [PriceSpecification](./PriceSpecification.md) or [Text](./Text.md) | The total price for the reservation or ticket, including applicable taxes, shipping, etc. |
| underName | [Organization](./Organization.md) or [Person](./Person.md) | The person or organization the reservation is for. |
