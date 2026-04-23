---
source: https://developers.google.com/workspace/gmail/markup/reference/types/Invoice
root: workspace
fetched_at: 2026-04-23T15:29:35.461Z
---

# Invoice

Type name: [Invoice](./Invoice.md)

Extends [Intangible](./Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| accountId | [Text](./Text.md) | The identifier for the account the payment will be applied to. |
| billingPeriod | [Duration](./Duration.md) | The time interval used to compute the invoice. |
| broker | [Organization](./Organization.md) or [Person](./Person.md) | An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. |
| category | [PhysicalActivityCategory](./PhysicalActivityCategory.md), [Text](./Text.md) or [Thing](./Thing.md) | A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. |
| confirmationNumber | [Text](./Text.md) | A number that confirms the given order or payment has been received. |
| customer | [Organization](./Organization.md) or [Person](./Person.md) | Party placing the order or paying the invoice. |
| minimumPaymentDue | [PriceSpecification](./PriceSpecification.md) | The minimum payment required at this time. |
| paymentDue | [DateTime](./DateTime.md) | The date that payment is due. |
| paymentMethod | [PaymentMethod](./PaymentMethod.md) | The name of the credit card or other method of payment for the order. |
| paymentMethodId | [Text](./Text.md) | An identifier for the method of payment used (e.g. the last 4 digits of the credit card). |
| paymentStatus | [Text](./Text.md) | The status of payment; whether the invoice has been paid or not. |
| provider | [Organization](./Organization.md) or [Person](./Person.md) | The organization providing the reservation. |
| referencesOrder | [Order](./Order.md) | The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice. |
| scheduledPaymentDate | [Date](./Date.md) | The date the invoice is scheduled to be paid. |
| totalPaymentDue | [PriceSpecification](./PriceSpecification.md) | The total amount due. |
