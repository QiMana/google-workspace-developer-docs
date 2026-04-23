---
source: https://developers.google.com/workspace/gmail/markup/reference/restaurant-reservation
root: workspace
fetched_at: 2026-04-23T15:29:13.777Z
---

# Restaurant Reservation

Use this type to declare a reservation for one or more guests at a restaurant or other food establishment.

## Use cases

The following use cases show common examples of how the `FoodEstablishmentReservation` schema is used. Use these examples to ensure that your markup is properly structured.

### Basic restaurant reservation

This is an example of the minimal amount of markup that will qualify your email as a `FoodEstablishmentReservation`.

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "FoodEstablishmentReservation",
  "reservationNumber": "OT12345",
  "reservationStatus": "http://schema.org/Confirmed",
  "underName": {
    "@type": "Person",
    "name": "John Smith"
  },
  "reservationFor": {
    "@type": "FoodEstablishment",
    "name": "Wagamama",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Tavistock Street",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "WC2E 7PG",
      "addressCountry": "United Kingdom"
    }
  },
  "startTime": "2027-04-10T08:00:00+00:00",
  "partySize": "2"
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/FoodEstablishmentReservation">
  <meta itemprop="reservationNumber" content="OT12345"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/FoodEstablishment">
    <meta itemprop="name" content="Wagamama"/>
    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
      <meta itemprop="streetAddress" content="1 Tavistock Street"/>
      <meta itemprop="addressLocality" content="London"/>
      <meta itemprop="addressRegion" content="Greater London"/>
      <meta itemprop="postalCode" content="WC2E 7PG"/>
      <meta itemprop="addressCountry" content="United Kingdom"/>
    </div>
  </div>
  <meta itemprop="startTime" content="2027-04-10T08:00:00+00:00"/>
  <meta itemprop="partySize" content="2"/>
</div>
```

## Test your markup

You can validate your markup using the [Email Markup Tester Tool](https://www.google.com/webmasters/markup-tester/). Paste in your markup code and click the **Validate** button to scan the content and receive a report on any errors present.

## Specification

Review the details of your email to see if any of these additional properties apply to your reservation. By marking up these additional properties you allow Google to display a much richer description of the reservation to the user.

Type name: [FoodEstablishmentReservation](./types/FoodEstablishmentReservation.md)

Extends [Reservation](./types/Reservation.md)

| Name | Type | Description |
| --- | --- | --- |
| **bookingAgent** | [Organization](./types/Organization.md) or [Person](./types/Person.md) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**name** | [Text](./types/Text.md) | Name of the agent/service. |
| bookingAgent.**url** | [URL](./types/URL.md) | Website of the agent/service. |
| **bookingTime** | [DateTime](./types/DateTime.md) | Date the reservation was made. |
| **cancelReservationUrl** | [URL](./types/URL.md) | Web page where reservation can be cancelled. |
| **confirmReservationUrl** | [URL](./types/URL.md) | Web page where reservation can be confirmed. |
| **modifiedTime** | [DateTime](./types/DateTime.md) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](./types/URL.md) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **partySize****   (Required)** | [Number](./types/Number.md) | Number of people in the party. |
| **price** | [Text](./types/Text.md) | Total price of the FoodEstablishmentReservation. |
| **priceCurrency** | [Text](./types/Text.md) | The currency (in 3-letter ISO 4217 format) of the FoodEstablishmentReservation's price.'' |
| **programMembership** | [ProgramMembership](./types/ProgramMembership.md) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](./types/Text.md) | The identifier of the membership. |
| programMembership.**program** | [Text](./types/Text.md) | The name of the program. |
| **reservationFor****   (Required)** | [FoodEstablishment](./types/FoodEstablishment.md) | The food establishment the reservation is for. |
| reservationFor.**address****   (Required)** | [PostalAddress](./types/PostalAddress.md) | Address of the restaurant. |
| reservationFor.address.**addressCountry****   (Required)** | [Country](./types/Country.md) or [Text](./types/Text.md) | Country of restaurant. |
| reservationFor.address.**addressLocality****   (Required)** | [Text](./types/Text.md) | Locality (e.g. city) of restaurant. |
| reservationFor.address.**addressRegion****   (Required)** | [Text](./types/Text.md) | Region (e.g. State) of restaurant. |
| reservationFor.address.**postalCode****   (Required)** | [Text](./types/Text.md) | Postal code of restaurant. |
| reservationFor.address.**streetAddress****   (Required)** | [Text](./types/Text.md) | Street address of restaurant. |
| reservationFor.**image** | [URL](./types/URL.md) | Image of the restaurant. |
| reservationFor.**name****   (Required)** | [Text](./types/Text.md) | Name of the restaurant. |
| reservationFor.**telephone** | [Text](./types/Text.md) | Telephone number of the FoodEstablishment. |
| reservationFor.**url** | [URL](./types/URL.md) | Restaurant's website. |
| **reservationNumber****   (Required)** | [Text](./types/Text.md) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](./types/ReservationStatus.md) | Current status of the reservation. |
| **startTime****   (Required)** | [DateTime](./types/DateTime.md) | Reservation date and time. |
| **underName****   (Required)** | [Organization](./types/Organization.md) or [Person](./types/Person.md) | The person the table is for. |
| underName.**email** | [Text](./types/Text.md) | Email address. |
| underName.**name****   (Required)** | [Text](./types/Text.md) | Name of the Person. |
| **url** | [URL](./types/URL.md) | Web page where reservation can be viewed. |
