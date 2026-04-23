---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Ticket
root: workspace
fetched_at: 2026-04-23T15:29:55.304Z
---

# Ticket

Type name: [Ticket](./Ticket.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| dateIssued | [DateTime](./DateTime.md) | The date the ticket was issued. |
| issuedBy | [Organization](./Organization.md) | The organization issuing the ticket or permit. |
| priceCurrency | [Text](./Text.md) | The currency (in 3-letter ISO 4217 format) of the Reservation's price. |
| ticketedSeat | [Seat](./Seat.md) | The seat associated with the ticket. |
| ticketNumber | [Text](./Text.md) | The number or id of the ticket. |
| ticketToken | [Text](./Text.md) or [URL](./URL.md) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| totalPrice | [Number](./Number.md), [PriceSpecification](./PriceSpecification.md) or [Text](./Text.md) | The total price for the reservation or ticket, including applicable taxes, shipping, etc. |
| underName | [Organization](./Organization.md) or [Person](./Person.md) | The person or organization the reservation is for. |
