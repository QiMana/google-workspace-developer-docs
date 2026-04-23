---
source: https://developers.google.com/workspace/gmail/markup/reference/order
root: workspace
fetched_at: 2026-04-23T15:29:12.943Z
---

# Order

An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.

## Use cases

### Basic Order

Minimal example for an order

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Order",
  "merchant": {
    "@type": "Organization",
    "name": "Amazon.com"
  },
  "orderNumber": "123-4567890-1234567",
  "priceCurrency": "USD",
  "price": "29.99",
  "acceptedOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "Google Chromecast"
    },
    "price": "29.99",
    "priceCurrency": "USD",
    "eligibleQuantity": {
      "@type": "QuantitativeValue",
      "value": "1"
    }
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/Order">
  <div itemprop="merchant" itemscope itemtype="http://schema.org/Organization">
    <meta itemprop="name" content="Amazon.com"/>
  </div>
  <meta itemprop="orderNumber" content="123-4567890-1234567"/>
  <meta itemprop="priceCurrency" content="USD"/>
  <meta itemprop="price" content="29.99"/>
  <div itemprop="acceptedOffer" itemscope itemtype="http://schema.org/Offer">
    <div itemprop="itemOffered" itemscope itemtype="http://schema.org/Product">
      <meta itemprop="name" content="Google Chromecast"/>
    </div>
    <meta itemprop="price" content="29.99"/>
    <meta itemprop="priceCurrency" content="USD"/>
    <div itemprop="eligibleQuantity" itemscope itemtype="http://schema.org/QuantitativeValue">
      <meta itemprop="value" content="1"/>
    </div>
  </div>
</div>
```

### View Order action

You may add a [`View Order`](./go-to-action.md#view_action) button to your orders by setting the `url` property. To link directly to a mobile application, also add a `ViewAction`:

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Order",
  "merchant": {
    "@type": "Organization",
    "name": "Amazon.com"
  },
  "orderNumber": "123-4567890-1234567",
  "orderStatus": "http://schema.org/OrderProcessing",
  "priceCurrency": "USD",
  "price": "29.99",
  "priceSpecification": {
    "@type": "PriceSpecification",
    "validFrom": "2027-12-07T23:30:00-08:00"
  },
  "acceptedOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": "Google Chromecast",
      "sku": "B00DR0PDNE",
      "url": "http://www.amazon.com/Google-Chromecast-Streaming-Media-Player/dp/B00DR0PDNE/",
      "image": "http://ecx.images-amazon.com/images/I/811nvG%2BLgML._SY550_.jpg"
    },
    "price": "29.99",
    "priceCurrency": "USD",
    "eligibleQuantity": {
      "@type": "QuantitativeValue",
      "value": "1"
    }
  },
  "url": "https://www.amazon.ca/gp/css/summary/edit.html/orderID=123-4567890-1234567",
  "potentialAction": {
    "@type": "ViewAction",
    "url": "https://www.amazon.ca/gp/css/summary/edit.html/orderID=123-4567890-1234567"
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/Order">
  <div itemprop="merchant" itemscope itemtype="http://schema.org/Organization">
    <meta itemprop="name" content="Amazon.com"/>
  </div>
  <link itemprop="orderStatus" href="http://schema.org/OrderProcessing"/>
  <meta itemprop="orderNumber" content="123-4567890-1234567"/>
  <meta itemprop="priceCurrency" content="USD"/>
  <meta itemprop="price" content="29.99"/>
  <div itemprop="acceptedOffer" itemscope itemtype="http://schema.org/Offer">
    <div itemprop="itemOffered" itemscope itemtype="http://schema.org/Product">
      <meta itemprop="name" content="Google Chromecast"/>
      <link itemprop="url" href="http://www.amazon.com/Google-Chromecast-Streaming-Media-Player/dp/B00DR0PDNE/"/>
      <link itemprop="image" href="http://ecx.images-amazon.com/images/I/811nvG%2BLgML._SY550_.jpg"/>
      <meta itemprop="sku" content="B00DR0PDNE"/>
    </div>
    <meta itemprop="price" content="29.99"/>
    <meta itemprop="priceCurrency" content="USD"/>
    <div itemprop="eligibleQuantity" itemscope itemtype="http://schema.org/QuantitativeValue">
      <meta itemprop="value" content="1"/>
    </div>
  </div>
  <link itemprop="url" href="https://www.amazon.ca/gp/css/summary/edit.html/orderID=123-4567890-1234567"/>
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/ViewAction">
    <link itemprop="url" href="https://www.amazon.ca/gp/css/summary/edit.html/orderID=123-4567890-1234567"/>
  </div>
  <div itemprop="priceSpecification" itemscope itemtype="http://schema.org/PriceSpecification">
    <meta itemprop="validFrom" content="2027-12-07T23:30:00-08:00"/>
  </div>
</div>
```

### Order with billing details

Example order with detailed billing information

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Order",
  "merchant": {
    "@type": "Organization",
    "name": "Amazon.com"
  },
  "orderNumber": "123-4567890-1234567",
  "priceCurrency": "USD",
  "price": "539.00",
  "priceSpecification": {
    "@type": "PriceSpecification",
    "validFrom": "2027-12-07T23:30:00-08:00"
  },
  "acceptedOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Samsung Chromebook",
        "sku": "B009LL9VDG",
        "url": "http://www.amazon.com/Samsung-XE303C12-A01US-Chromebook-Wi-Fi-11-6-Inch/dp/B009LL9VDG/",
        "image": "http://ecx.images-amazon.com/images/I/81H-DO3qX0L._SX522_.jpg"
      },
      "price": "249.99",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "2"
      },
      "seller": {
        "@type": "Organization",
        "name": "Samsung Marketplace Store"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Google Chromecast",
        "sku": "B00DR0PDNE",
        "url": "http://www.amazon.com/Google-Chromecast-Streaming-Media-Player/dp/B00DR0PDNE/",
        "image": "http://ecx.images-amazon.com/images/I/811nvG%2BLgML._SY550_.jpg"
      },
      "price": "29.99",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": "1"
      },
      "seller": {
        "@type": "Organization",
        "name": "Google Store @ Amazon"
      }
    }
  ],
  "url": "https://www.amazon.ca/gp/css/summary/edit.html/orderID=123-4567890-1234567",
  "potentialAction": {
    "@type": "ViewAction",
    "url": "https://www.amazon.ca/gp/css/summary/edit.html/orderID=123-4567890-1234567"
  },
  "orderStatus": "http://schema.org/OrderProcessing",
  "paymentMethod": {
    "@type": "PaymentMethod",
    "name": "http://schema.org/CreditCard"
  },
  "paymentMethodId": "**** **** **** 1234",
  "orderDate": "2027-11-07T23:30:00-08:00",
  "isGift": "false",
  "discount": "0.97",
  "discountCurrency": "USD",
  "customer": {
    "@type": "Person",
    "name": "John Smith"
  },
  "billingAddress": {
    "@type": "PostalAddress",
    "name": "Google",
    "streetAddress": "1600 Amphitheatre Pkwy",
    "addressLocality": "Mountain View",
    "addressRegion": "CA",
    "addressCountry": "USA"
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/Order">
  <div itemprop="merchant" itemscope itemtype="http://schema.org/Organization">
    <meta itemprop="name" content="Amazon.com"/>
  </div>
  <meta itemprop="orderNumber" content="123-4567890-1234567"/>
  <meta itemprop="priceCurrency" content="USD"/>
  <meta itemprop="price" content="539.00"/>
  <div itemprop="acceptedOffer" itemscope itemtype="http://schema.org/Offer">
    <div itemprop="itemOffered" itemscope itemtype="http://schema.org/Product">
      <meta itemprop="name" content="Samsung Chromebook"/>
      <meta itemprop="sku" content="B009LL9VDG"/>
      <link itemprop="url" href="http://www.amazon.com/Samsung-XE303C12-A01US-Chromebook-Wi-Fi-11-6-Inch/dp/B009LL9VDG/"/>
      <link itemprop="image" href="http://ecx.images-amazon.com/images/I/81H-DO3qX0L._SX522_.jpg"/>
    </div>
    <meta itemprop="price" content="249.99"/>
    <meta itemprop="priceCurrency" content="USD"/>
    <div itemprop="eligibleQuantity" itemscope itemtype="http://schema.org/QuantitativeValue">
      <meta itemprop="value" content="2"/>
    </div>
    <div itemprop="seller" itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="Samsung Marketplace Store"/>
    </div>
  </div>
  <div itemprop="acceptedOffer" itemscope itemtype="http://schema.org/Offer">
    <div itemprop="itemOffered" itemscope itemtype="http://schema.org/Product">
      <meta itemprop="name" content="Google Chromecast"/>
      <meta itemprop="sku" content="B00DR0PDNE"/>
      <link itemprop="url" href="http://www.amazon.com/Google-Chromecast-Streaming-Media-Player/dp/B00DR0PDNE/"/>
      <link itemprop="image" href="http://ecx.images-amazon.com/images/I/811nvG%2BLgML._SY550_.jpg"/>
    </div>
    <meta itemprop="price" content="29.99"/>
    <meta itemprop="priceCurrency" content="USD"/>
    <div itemprop="eligibleQuantity" itemscope itemtype="http://schema.org/QuantitativeValue">
      <meta itemprop="value" content="1"/>
    </div>
    <div itemprop="seller" itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="Google Store @ Amazon"/>
    </div>
  </div>
  <link itemprop="url" href="https://www.amazon.ca/gp/css/summary/edit.html/orderID=123-4567890-1234567"/>
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/ViewAction">
    <link itemprop="url" href="https://www.amazon.ca/gp/css/summary/edit.html/orderID=123-4567890-1234567"/>
  </div>
  <link itemprop="orderStatus" href="http://schema.org/OrderProcessing"/>
  <div itemprop="paymentMethod" itemscope itemtype="http://schema.org/PaymentMethod">
    <meta itemprop="name" content="http://schema.org/CreditCard"/>
  </div>
  <meta itemprop="paymentMethodId" content="**** **** **** 1234"/>
  <meta itemprop="orderDate" content="2027-11-07T23:30:00-08:00"/>
  <meta itemprop="isGift" content="false"/>
  <meta itemprop="discount" content="0.97"/>
  <meta itemprop="discountCurrency" content="USD"/>
  <div itemprop="customer" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
  </div>
  <div itemprop="billingAddress" itemscope itemtype="http://schema.org/PostalAddress">
    <meta itemprop="name" content="Google"/>
    <meta itemprop="streetAddress" content="1600 Amphitheatre Pkwy"/>
    <meta itemprop="addressLocality" content="Mountain View"/>
    <meta itemprop="addressRegion" content="CA"/>
    <meta itemprop="addressCountry" content="USA"/>
  </div>
  <div itemprop="priceSpecification" itemscope itemtype="http://schema.org/PriceSpecification">
    <meta itemprop="validFrom" content="2027-12-07T23:30:00-08:00"/>
  </div>
</div>
```

## Test your markup

You can validate your markup using the [Email Markup Tester Tool](https://www.google.com/webmasters/markup-tester/). Paste in your markup code and click the **Validate** button to scan the content and receive a report on any errors present.

## Specification

The following table lists all available properties for this type:

| Property | Type | Description |
| --- | --- | --- |
| merchant | [Organization](./types/Organization.md) or [Person](./types/Person.md) | (**required**) The party taking the order (e.g. Amazon.com is a merchant for many sellers). Also accepts a string (e.g. "Amazon.com"). |
| merchant.name | Text | (**required**) Name of the Organization. |
| merchant.sameAs | URL | The Freebase URL for the merchant. |
| orderNumber | Text | (**required**) The merchant-specific identifier for the transaction. |
| priceCurrency | Text | (**required**) The currency (in 3-letter ISO 4217 format) of the order price. |
| price | Number or Text | (**required**) The total price of the entire transaction. |
| acceptedOffer | [Offer](./types/Offer.md) | (**required**) The offers included in the order. Also accepts an array of objects. |
| acceptedOffer.itemOffered | [Product](./types/Product.md) or [Reservation](./types/Reservation.md) | (**required**) The item being sold. |
| acceptedOffer.itemOffered.name | Text | (**required**) Name of the Product. |
| acceptedOffer.itemOffered.sku | Text | (**recommended for confirmation cards/Search Answers**) The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. |
| acceptedOffer.itemOffered.url | URL | (**recommended for confirmation cards/Search Answers**) URL of the Product, typically the product landing page on the merchant's website. |
| acceptedOffer.itemOffered.image | URL | (**recommended for confirmation cards/Search Answers**) URL of an image of the Product, typically an image on the merchant's website. |
| acceptedOffer.itemOffered.color | Text | The color of the product. |
| acceptedOffer.price | Number or Text | (**required**) The unit price for the Product. |
| acceptedOffer.priceCurrency | Text | (**required**) The currency (in 3-letter ISO 4217 format) of the price. |
| acceptedOffer.eligibleQuantity | [QuantitativeValue](./types/QuantitativeValue.md) | (**required**) The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. |
| acceptedOffer.eligibleQuantity.value | Number | (**required**) The value of the product characteristic. |
| acceptedOffer.priceSpecification | [PriceSpecification](./types/PriceSpecification.md) | One or more detailed price specifications, indicating the unit price and delivery or payment charges. |
| acceptedOffer.priceSpecification.price | Number or Text | The total price of the entire transaction. |
| acceptedOffer.priceSpecification.priceCurrency | Text | The currency (in 3-letter ISO 4217 format) of the order price. |
| acceptedOffer.itemCondition | [OfferItemCondition](./types/OfferItemCondition.md) | A textual description of the condition of the product or service, or the products or services included in the offer. |
| acceptedOffer.seller | [Organization](./types/Organization.md) or [Person](./types/Person.md) | Party with whom the order was placed. Also accepts a string (e.g. ""). |
| acceptedOffer.seller.name | Text | Name of the Organization. |
| priceSpecification | [PriceSpecification](./types/PriceSpecification.md) | (**recommended for confirmation cards/Search Answers**) Any more detailed alternatives to price/priceCurrency. Also used to specify tax and delivery charges. Also accepts an array of objects. |
| url | URL | (**recommended for confirmation cards/Search Answers**) URL of the Order, typically a link to the merchant's website where the user can retrieve further details about an order. |
| orderStatus | [OrderStatus](./types/OrderStatus.md) | (**recommended for confirmation cards/Search Answers**) The current status of the order. |
| paymentMethod | [PaymentMethod](./types/PaymentMethod.md) | The name of the credit card or other method of payment for the order. |
| paymentMethodId | Text | An identifier for the method of payment used (e.g. the last 4 digits of the credit card). |
| orderDate | [DateTime](./types/DateTime.md) | Date order was placed. |
| isGift | Boolean | Was the offer accepted as a gift for someone other than the buyer. |
| discount | Number or Text | Any discount applied. |
| discountCurrency | Text | The currency (in 3-letter ISO 4217 format) of the discount. |
| customer | [Person](./types/Person.md) or [Organization](./types/Organization.md) | Party placing the order. |
| customer.name | Text | Name of the Person. |
| billingAddress | [PostalAddress](./types/PostalAddress.md) | The billing address for the order. |
| billingAddress.name | Text | Name of the PostalAddress. |
| billingAddress.streetAddress | Text | The street address. For example, 1600 Amphitheatre Pkwy. |
| billingAddress.addressLocality | Text | The locality. For example, Mountain View. |
| billingAddress.addressRegion | Text | The region. For example, CA. |
| billingAddress.addressCountry | Text or [Country](./types/Country.md) | The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code. |
