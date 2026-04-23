---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Invoice
root: workspace
fetched_at: 2026-04-23T15:29:35.461Z
---

# Invoice

Type name: [Invoice](https://developers.google.com/workspace/gmail/markup/reference/types/Invoice)

Extends [Intangible](https://developers.google.com/workspace/gmail/markup/reference/types/Intangible)

| Name | Type | Description |
| --- | --- | --- |
| accountId | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The identifier for the account the payment will be applied to. |
| billingPeriod | [Duration](https://developers.google.com/workspace/gmail/markup/reference/types/Duration) | The time interval used to compute the invoice. |
| broker | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. |
| category | [PhysicalActivityCategory](https://developers.google.com/workspace/gmail/markup/reference/types/PhysicalActivityCategory), [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Thing](https://developers.google.com/workspace/gmail/markup/reference/types/Thing) | A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. |
| confirmationNumber | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A number that confirms the given order or payment has been received. |
| customer | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Party placing the order or paying the invoice. |
| minimumPaymentDue | [PriceSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/PriceSpecification) | The minimum payment required at this time. |
| paymentDue | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The date that payment is due. |
| paymentMethod | [PaymentMethod](https://developers.google.com/workspace/gmail/markup/reference/types/PaymentMethod) | The name of the credit card or other method of payment for the order. |
| paymentMethodId | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | An identifier for the method of payment used (e.g. the last 4 digits of the credit card). |
| paymentStatus | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The status of payment; whether the invoice has been paid or not. |
| provider | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The organization providing the reservation. |
| referencesOrder | [Order](https://developers.google.com/workspace/gmail/markup/reference/types/Order) | The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice. |
| scheduledPaymentDate | [Date](https://developers.google.com/workspace/gmail/markup/reference/types/Date) | The date the invoice is scheduled to be paid. |
| totalPaymentDue | [PriceSpecification](https://developers.google.com/workspace/gmail/markup/reference/types/PriceSpecification) | The total amount due. |
