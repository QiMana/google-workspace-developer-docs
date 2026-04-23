---
source: https://developers.google.com/workspace/gmail/markup/reference/hotel-reservation
root: workspace
fetched_at: 2026-04-23T15:29:12.169Z
---

# Hotel Reservation

Use this type to declare a reservation for one or more guests at a hotel or place of lodging.

## Use cases

The following use cases show common examples of how the `LodgingReservation` schema is used. Use these examples to ensure that your markup is properly structured.

### Basic Hotel Reservation

This is an example of the minimal amount of markup that will qualify your email as an LodgingReservation.

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "LodgingReservation",
  "reservationNumber": "abc456",
  "reservationStatus": "http://schema.org/Confirmed",
  "underName": {
    "@type": "Person",
    "name": "John Smith"
  },
  "reservationFor": {
    "@type": "LodgingBusiness",
    "name": "Hilton San Francisco Union Square",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "333 O'Farrell St",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94102",
      "addressCountry": "US"
    },
    "telephone": "415-771-1400"
  },
  "checkinDate": "2027-04-11T16:00:00-08:00",
  "checkoutDate": "2027-04-13T11:00:00-08:00"
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/LodgingReservation">
  <meta itemprop="reservationNumber" content="abc456"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/LodgingBusiness">
    <meta itemprop="name" content="Hilton San Francisco Union Square"/>
    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
      <meta itemprop="streetAddress" content="333 O'Farrell St"/>
      <meta itemprop="addressLocality" content="San Francisco"/>
      <meta itemprop="addressRegion" content="CA"/>
      <meta itemprop="postalCode" content="94102"/>
      <meta itemprop="addressCountry" content="US"/>
    </div>
    <meta itemprop="telephone" content="415-771-1400"/>
  </div>
  <meta itemprop="checkinDate" content="2027-04-11T16:00:00-08:00"/>
  <meta itemprop="checkoutDate" content="2027-04-13T11:00:00-08:00"/>
</div>
```

## Test your markup

You can validate your markup using the [Email Markup Tester Tool](https://www.google.com/webmasters/markup-tester/). Paste in your markup code and click the **Validate** button to scan the content and receive a report on any errors present.

## Specification

Review the details of your email to see if any of these additional properties apply to your reservation. By marking up these additional properties you allow Google to display a much richer description of the lodging reservation to the user.

Type name: [LodgingReservation](https://developers.google.com/workspace/gmail/markup/reference/types/LodgingReservation)

Extends [Reservation](https://developers.google.com/workspace/gmail/markup/reference/types/Reservation)

| Name | Type | Description |
| --- | --- | --- |
| **bookingAgent** | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the agent/service. |
| bookingAgent.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Website of the agent/service. |
| **bookingTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Date the reservation was made. |
| **cancelReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be cancelled. |
| **checkinDate****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Checkin time. |
| **checkoutDate****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Checkout time. |
| **checkinUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where the lodger can check in. |
| **confirmReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be confirmed. |
| **lodgingUnitDescription** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Textual description of the unit type (including suite vs. room, size of bed, etc.). |
| **modifiedTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **numAdults** | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | Number of adults who will be staying in the lodging unit. |
| **numChildren** | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | Number of children who will be staying in the lodging unit. |
| **price** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Total price of the LodgingReservation. |
| **priceCurrency** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency (in 3-letter ISO 4217 format) of the LodgingReservation's price. |
| **programMembership** | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The identifier of the membership. |
| programMembership.**program** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The name of the program. |
| **reservationFor****   (Required)** | [LodgingBusiness](https://developers.google.com/workspace/gmail/markup/reference/types/LodgingBusiness) | The lodging the reservation is at. |
| reservationFor.**address****   (Required)** | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Address of the Address of lodging. |
| reservationFor.address.**addressCountry****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) | Country of Address of lodging. |
| reservationFor.address.**addressLocality****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Locality (e.g. city) of Address of lodging. |
| reservationFor.address.**addressRegion****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Region (e.g. State) of Address of lodging. |
| reservationFor.address.**postalCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Postal code of Address of lodging. |
| reservationFor.address.**streetAddress****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Street address of Address of lodging. |
| reservationFor.**image** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Photo of the lodging business. |
| reservationFor.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Address of lodging. |
| reservationFor.**telephone****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Telephone number of the LodgingBusiness. |
| reservationFor.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Website of the lodging business. |
| **reservationNumber****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](https://developers.google.com/workspace/gmail/markup/reference/types/ReservationStatus) | Current status of the reservation. |
| **underName****   (Required)** | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The guest. |
| underName.**email** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Email address. |
| underName.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
| **url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be viewed. |
