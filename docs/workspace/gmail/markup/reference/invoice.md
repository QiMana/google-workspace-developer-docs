---
source: https://developers.google.com/workspace/gmail/markup/reference/invoice
root: workspace
fetched_at: 2026-04-23T15:29:12.014Z
---

# Invoice

Use this type to embed information about an Invoice for payment.

## Use cases

The following use cases show common examples of how the `Invoice` schema is used. Use these examples to ensure that your markup is properly structured.

### Invoice for automatic payment

This is an example of markup using the Invoice type, in this case with automatic payment specified.

### JSON-LD

```
<script type='application/ld+json'>
{
  "@context": "http://schema.org",
  "@type": "Invoice",
  "accountId": "123-456-789",
  "minimumPaymentDue": {
    "@type": "PriceSpecification",
    "price": "$70.00"
  },
  "paymentDue": "2015-11-22T08:00:00+00:00",
  "paymentStatus": "PaymentAutomaticallyApplied",
  "provider": {
    "@type": "Organization",
    "name": "Mountain View Utilities"
  },
  "totalPaymentDue": {
    "@type": "PriceSpecification",
    "price": "$70.00"
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/Invoice">
  <span itemprop="accountId">123-456-789</span>
  <div itemprop="minimumPaymentDue" itemscope itemtype="http://schema.org/PriceSpecification">
    <span itemprop="price">$70.00</span>
  </div>
  <span itemprop="paymentDue">2015-11-22T08:00:00+00:00</span>
  <span itemprop="paymentStatus">PaymentAutomaticallyApplied</span>
  <div itemprop="provider" itemscope itemtype="http://schema.org/Organization">
    <span itemprop="name">Mountain View Utilities</span>
  </div>
  <div itemprop="totalPaymentDue" itemscope itemtype="http://schema.org/PriceSpecification">
    <span itemprop="price">$70.00</span>
  </div>
</div>
```

## Test your markup

You can validate your markup using the [Email Markup Tester Tool](https://www.google.com/webmasters/markup-tester/). Paste in your markup code and click the **Validate** button to scan the content and receive a report on any errors present.

## Specification

Review the details of your email to see if any of these additional properties apply to your invoice. By marking up these additional properties you allow Google to display a richer description of the invoice.

Type name: [Invoice](./types/Invoice.md)

Extends [Intangible](./types/Intangible.md)

| Name | Type | Description |
| --- | --- | --- |
| accountId | [Text](./types/Text.md) | The identifier for the account the payment will be applied to. |
| billingPeriod | [Duration](./types/Duration.md) | The time interval used to compute the invoice. |
| broker | [Organization](./types/Organization.md) or [Person](./types/Person.md) | An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred. |
| category | [PhysicalActivityCategory](./types/PhysicalActivityCategory.md), [Text](./types/Text.md) or [Thing](./types/Thing.md) | A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. |
| confirmationNumber | [Text](./types/Text.md) | A number that confirms the given order or payment has been received. |
| customer | [Organization](./types/Organization.md) or [Person](./types/Person.md) | Party placing the order or paying the invoice. |
| minimumPaymentDue | [PriceSpecification](./types/PriceSpecification.md) | The minimum payment required at this time. |
| paymentDue | [DateTime](./types/DateTime.md) | The date that payment is due. |
| paymentMethod | [PaymentMethod](./types/PaymentMethod.md) | The name of the credit card or other method of payment for the order. |
| paymentMethodId | [Text](./types/Text.md) | An identifier for the method of payment used (e.g. the last 4 digits of the credit card). |
| paymentStatus | [Text](./types/Text.md) | The status of payment; whether the invoice has been paid or not. |
| provider | [Organization](./types/Organization.md) or [Person](./types/Person.md) | The organization providing the reservation. |
| referencesOrder | [Order](./types/Order.md) | The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice. |
| scheduledPaymentDate | [Date](./types/Date.md) | The date the invoice is scheduled to be paid. |
| totalPaymentDue | [PriceSpecification](./types/PriceSpecification.md) | The total amount due. |
