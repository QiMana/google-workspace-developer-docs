---
source: https://developers.google.com/workspace/gmail/markup/reference/rental-car
root: workspace
fetched_at: 2026-04-23T15:29:15.957Z
---

# Rental Car Reservation

## Use cases

The following use cases show common examples of how the `RentalCarReservation` schema is used. Use these examples to ensure that your markup is properly structured.

### Basic reservation confirmation

Embed the following markup in your email when you send a car rental reservation confirmation.

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "RentalCarReservation",
  "reservationNumber": "546323",
  "reservationStatus": "http://schema.org/Confirmed",
  "underName": {
    "@type": "Person",
    "name": "John Smith"
  },
  "reservationFor": {
    "@type": "RentalCar",
    "name": "Economy Class Car",
    "model": "Civic",
    "brand": {
      "@type": "Brand",
      "name": "Honda"
    },
    "rentalCompany": {
      "@type": "Organization",
      "name": "Hertz"
    }
  },
  "pickupLocation": {
    "@type": "Place",
    "name": "Hertz San Diego Airport",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1500 Orange Avenue",
      "addressLocality": "San Diego",
      "addressRegion": "CA",
      "postalCode": "94043",
      "addressCountry": "US"
    }
  },
  "pickupTime": "2027-08-05T16:00:00-07:00",
  "dropoffLocation": {
    "@type": "Place",
    "name": "Hertz LAX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 First Street",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "94043",
      "addressCountry": "US"
    }
  },
  "potentialAction": {
    "@type": "ConfirmAction",
    "target": "http://cheapcar.com/confirm?id=546323"
  },
  "dropoffTime": "2027-08-06T20:00:00-07:00"
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/RentalCarReservation">
  <meta itemprop="reservationNumber" content="546323"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/RentalCar">
    <meta itemprop="name" content="Economy Class Car"/>
    <meta itemprop="model" content="Civic"/>
    <div itemprop="brand" itemscope itemtype="http://schema.org/Brand">
      <meta itemprop="name" content="Honda"/>
    </div>
    <div itemprop="rentalCompany" itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="Hertz"/>
    </div>
  </div>
  <div itemprop="pickupLocation" itemscope itemtype="http://schema.org/Place">
    <meta itemprop="name" content="Hertz San Diego Airport"/>
    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
      <meta itemprop="streetAddress" content="1500 Orange Avenue"/>
      <meta itemprop="addressLocality" content="San Diego"/>
      <meta itemprop="addressRegion" content="CA"/>
      <meta itemprop="postalCode" content="94043"/>
      <meta itemprop="addressCountry" content="US"/>
    </div>
  </div>
  <meta itemprop="pickupTime" content="2027-08-05T16:00:00-07:00"/>
  <div itemprop="dropoffLocation" itemscope itemtype="http://schema.org/Place">
    <meta itemprop="name" content="Hertz LAX"/>
    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
      <meta itemprop="streetAddress" content="1234 First Street"/>
      <meta itemprop="addressLocality" content="Los Angeles"/>
      <meta itemprop="addressRegion" content="CA"/>
      <meta itemprop="postalCode" content="94043"/>
      <meta itemprop="addressCountry" content="US"/>
    </div>
  </div>
  <meta itemprop="dropoffTime" content="2027-08-06T20:00:00-07:00"/>
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/ConfirmAction">
    <link itemprop="target" href="http://cheapcar.com/confirm?id=546323"/>
  </div>
</div>
```

### Example with all supported fields

For reference, here is an example with all supported fields populated:

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "RentalCarReservation",
  "reservationNumber": "546323",
  "reservationStatus": "http://schema.org/Confirmed",
  "url": "http://carrentals.com/view/546323",
  "underName": {
    "@type": "Person",
    "name": "John Smith",
    "email": "john@mail.com"
  },
  "programMembership": {
    "@type": "ProgramMembership",
    "memberNumber": "1234567",
    "program": "AAA"
  },
  "bookingAgent": {
    "@type": "Organization",
    "name": "Car Rentals Internationaly",
    "url": "http://carrentals.com/"
  },
  "bookingTime": "2027-01-14T13:05:00-05:00",
  "modifiedTime": "2027-03-14T13:05:00-05:00",
  "confirmReservationUrl": "http://carrentals.com/confirm?id=546323",
  "cancelReservationUrl": "http://carrentals.com/cancel?id=546323",
  "checkinUrl": "http://carrentals.com/checkin?id=546323",
  "modifyReservationUrl": "http://carrentals.com/edit?id=546323",
  "potentialAction": [
    {
      "@type": "ConfirmAction",
      "target": "http://carrentals.com/confirm?id=546323"
    },
    {
      "@type": "CancelAction",
      "target": "http://carrentals.com/cancel?id=546323"
    },
    {
      "@type": "EditAction",
      "target": "http://carrentals.com/edit?id=546323"
    },
    {
      "@type": "CheckInAction",
      "target": "http://carrentals.com/checkin?id=546323"
    }
  ],
  "reservationFor": {
    "@type": "RentalCar",
    "name": "Economy Class Car",
    "model": "Civic",
    "brand": {
      "@type": "Brand",
      "name": "Honda"
    },
    "description": "Sedan 4 Door, 5 Seatbelts, Automatic transmission",
    "rentalCompany": {
      "@type": "Organization",
      "name": "Hertz"
    }
  },
  "pickupLocation": {
    "@type": "Place",
    "name": "Hertz San Diego Airport",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1500 Orange Avenue",
      "addressLocality": "San Diego",
      "addressRegion": "CA",
      "postalCode": "94043",
      "addressCountry": "US"
    },
    "telephone": "+1-800-123-4567"
  },
  "pickupTime": "2027-08-05T16:00:00-07:00",
  "dropoffLocation": {
    "@type": "Place",
    "name": "Hertz LAX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 First Street",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "94043",
      "addressCountry": "US"
    },
    "telephone": "+1-800-123-4567"
  },
  "dropoffTime": "2027-08-06T20:00:00-07:00",
  "price": "119.00",
  "priceCurrency": "USD"
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/RentalCarReservation">
  <meta itemprop="reservationNumber" content="546323"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <link itemprop="url" href="http://carrentals.com/view/546323"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
    <meta itemprop="email" content="john@mail.com"/>
  </div>
  <div itemprop="programMembership" itemscope itemtype="http://schema.org/ProgramMembership">
    <meta itemprop="memberNumber" content="1234567"/>
    <meta itemprop="program" content="AAA"/>
  </div>
  <div itemprop="bookingAgent" itemscope itemtype="http://schema.org/Organization">
    <meta itemprop="name" content="Car Rentals Internationaly"/>
    <link itemprop="url" href="http://carrentals.com/"/>
  </div>
  <meta itemprop="bookingTime" content="2027-01-14T13:05:00-05:00"/>
  <meta itemprop="modifiedTime" content="2027-03-14T13:05:00-05:00"/>
  <link itemprop="confirmReservationUrl" href="http://carrentals.com/confirm?id=546323"/>
  <link itemprop="cancelReservationUrl" href="http://carrentals.com/cancel?id=546323"/>
  <link itemprop="modifyReservationUrl" href="http://carrentals.com/edit?id=546323"/>
  <link itemprop="checkinUrl" href="http://carrentals.com/checkin?id=546323"/>
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/ConfirmAction">
    <link itemprop="target" href="http://carrentals.com/confirm?id=546323"/>
  </div>
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/CancelAction">
    <link itemprop="target" href="http://carrentals.com/cancel?id=546323"/>
  </div>
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/EditAction">
    <link itemprop="target" href="http://carrentals.com/edit?id=546323"/>
  </div>
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/CheckInAction">
    <link itemprop="target" href="http://carrentals.com/checkin?id=546323"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/RentalCar">
    <meta itemprop="name" content="Economy Class Car"/>
    <meta itemprop="model" content="Civic"/>
    <div itemprop="brand" itemscope itemtype="http://schema.org/Brand">
      <meta itemprop="name" content="Honda"/>
    </div>
    <meta itemprop="description" content="Sedan 4 Door, 5 Seatbelts, Automatic transmission"/>
    <div itemprop="rentalCompany" itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="Hertz"/>
    </div>
  </div>
  <div itemprop="pickupLocation" itemscope itemtype="http://schema.org/Place">
    <meta itemprop="name" content="Hertz San Diego Airport"/>
    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
      <meta itemprop="streetAddress" content="1500 Orange Avenue"/>
      <meta itemprop="addressLocality" content="San Diego"/>
      <meta itemprop="addressRegion" content="CA"/>
      <meta itemprop="postalCode" content="94043"/>
      <meta itemprop="addressCountry" content="US"/>
    </div>
    <meta itemprop="telephone" content="+1-800-123-4567"/>
  </div>
  <meta itemprop="pickupTime" content="2027-08-05T16:00:00-07:00"/>
  <div itemprop="dropoffLocation" itemscope itemtype="http://schema.org/Place">
    <meta itemprop="name" content="Hertz LAX"/>
    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
      <meta itemprop="streetAddress" content="1234 First Street"/>
      <meta itemprop="addressLocality" content="Los Angeles"/>
      <meta itemprop="addressRegion" content="CA"/>
      <meta itemprop="postalCode" content="94043"/>
      <meta itemprop="addressCountry" content="US"/>
    </div>
    <meta itemprop="telephone" content="+1-800-123-4567"/>
  </div>
  <meta itemprop="dropoffTime" content="2027-08-06T20:00:00-07:00"/>
  <meta itemprop="price" content="119.00"/>
  <meta itemprop="priceCurrency" content="USD"/>
</div>
```

## Test your markup

You can validate your markup using the [Email Markup Tester Tool](https://www.google.com/webmasters/markup-tester/). Paste in your markup code and click the **Validate** button to scan the content and receive a report on any errors present.

## Specification

Review the details of your email to see if any of these properties apply to your reservation. By marking up these additional properties you allow Google to display a much richer description of the reservation to the user.

Type name: [RentalCarReservation](https://developers.google.com/workspace/gmail/markup/reference/types/RentalCarReservation)

Extends [Reservation](https://developers.google.com/workspace/gmail/markup/reference/types/Reservation)

| Name | Type | Description |
| --- | --- | --- |
| **bookingAgent** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the agent/service. |
| bookingAgent.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Website of the agent/service. |
| **bookingTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Date the reservation was made. |
| **cancelReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be cancelled. |
| **checkinUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Webpage where the passenger can check in. |
| **confirmReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be confirmed. |
| **dropoffLocation****   (Required)** | [AutoRental](https://developers.google.com/workspace/gmail/markup/reference/types/AutoRental) or [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | Where the car is returned. |
| dropoffLocation.**address****   (Required)** | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Address of the dropoff location. |
| dropoffLocation.address.**addressCountry****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) | Country of dropoff location. |
| dropoffLocation.address.**addressLocality****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Locality (e.g. city) of dropoff location. |
| dropoffLocation.address.**addressRegion****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Region (e.g. State) of dropoff location. |
| dropoffLocation.address.**postalCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Postal code of dropoff location. |
| dropoffLocation.address.**streetAddress****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Street address of dropoff location. |
| dropoffLocation.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the dropoff location. |
| dropoffLocation.**telephone** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Telephone number of the Place. |
| **dropoffTime****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | When the car is returned. |
| **modifiedTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **pickupLocation****   (Required)** | [AutoRental](https://developers.google.com/workspace/gmail/markup/reference/types/AutoRental) or [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | Where the car is picked up. |
| pickupLocation.**address****   (Required)** | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Address of the pickup location. |
| pickupLocation.address.**addressCountry****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) | Country of pickup location. |
| pickupLocation.address.**addressLocality****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Locality (e.g. city) of pickup location. |
| pickupLocation.address.**addressRegion****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Region (e.g. State) of pickup location. |
| pickupLocation.address.**postalCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Postal code of pickup location. |
| pickupLocation.address.**streetAddress****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Street address of pickup location. |
| pickupLocation.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the pickup location. |
| pickupLocation.**telephone** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Telephone number of the Place. |
| **pickupTime****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | When the car is picked up. |
| **potentialAction****   (Required)** | [CheckInAction](https://developers.google.com/workspace/gmail/markup/reference/types/CheckInAction), [ConfirmAction](https://developers.google.com/workspace/gmail/markup/reference/types/ConfirmAction), [CancelAction](https://developers.google.com/workspace/gmail/markup/reference/types/CancelAction) or | Actions supported for RentalCarReservation. |
| **price** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Total price of the RentalCarReservation. |
| **priceCurrency** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency (in 3-letter ISO 4217 format) of the RentalCarReservation's price. |
| **programMembership** | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The identifier of the membership. |
| programMembership.**program** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The name of the program. |
| **reservationFor****   (Required)** |  | The car that is reserved. |
| reservationFor.**brand****   (Required)** | [Brand](https://developers.google.com/workspace/gmail/markup/reference/types/Brand) | The brand associated with the RentalCar. |
| reservationFor.brand.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Brand. |
| reservationFor.**description** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A short description of the RentalCar. |
| reservationFor.**model****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | RentalCar's model. |
| reservationFor.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the RentalCar. |
| reservationFor.**rentalCompany****   (Required)** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The company renting the car. Also accepts a string (e.g. "Hertz"). |
| reservationFor.rentalCompany.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the rental company. |
| **reservationNumber****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](https://developers.google.com/workspace/gmail/markup/reference/types/ReservationStatus) | Current status of the reservation. |
| **underName****   (Required)** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The driver. |
| underName.**email** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Email address. |
| underName.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
| **url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be viewed. |
