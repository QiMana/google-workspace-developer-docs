---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Ticket
root: workspace
fetched_at: 2026-04-23T15:29:55.304Z
---

# Ticket

Type name: [Ticket](https://developers.google.com/workspace/gmail/markup/reference/types/Ticket)

Extends [Intangible](https://developers.google.com/workspace/gmail/markup/reference/types/Intangible)

| Name | Type | Description |
| --- | --- | --- |
| dateIssued | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The date the ticket was issued. |
| issuedBy | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The organization issuing the ticket or permit. |
| priceCurrency | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency (in 3-letter ISO 4217 format) of the Reservation's price. |
| ticketedSeat | [Seat](https://developers.google.com/workspace/gmail/markup/reference/types/Seat) | The seat associated with the ticket. |
| ticketNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the ticket. |
| ticketToken | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| totalPrice | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number), [PriceSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/PriceSpecification) or [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The total price for the reservation or ticket, including applicable taxes, shipping, etc. |
| underName | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The person or organization the reservation is for. |
