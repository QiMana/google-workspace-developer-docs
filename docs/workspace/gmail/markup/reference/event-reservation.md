---
source: https://developers.google.com/workspace/gmail/markup/reference/event-reservation
root: workspace
fetched_at: 2026-04-23T15:29:09.444Z
---

# Event Reservation

Use this type to declare a reservation for one or more guests at an event. Tickets may be declared as well.

## Use cases

The following use cases show common examples of how the `EventReservation` schema is used. Use these examples to ensure that your markup is properly structured.

### Basic event reminder without a ticket

If you are sending out an email confirming a user’s attendance to an event, include the following markup. This is an example of the minimal amount of markup that will qualify your email as an `EventReservation`.

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "EventReservation",
  "reservationNumber": "E123456789",
  "reservationStatus": "http://schema.org/Confirmed",
  "underName": {
    "@type": "Person",
    "name": "John Smith"
  },
  "reservationFor": {
    "@type": "Event",
    "name": "Foo Fighters Concert",
    "startDate": "2027-03-06T19:30:00-08:00",
    "location": {
      "@type": "Place",
      "name": "AT&T Park",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "24 Willie Mays Plaza",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94107",
        "addressCountry": "US"
      }
    }
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/EventReservation">
  <meta itemprop="reservationNumber" content="E123456789"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Event">
    <meta itemprop="name" content="Foo Fighters Concert"/>
    <meta itemprop="startDate" content="2027-03-06T19:30:00-08:00"/>
    <div itemprop="location" itemscope itemtype="http://schema.org/Place">
      <meta itemprop="name" content="AT&T Park"/>
      <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <meta itemprop="streetAddress" content="24 Willie Mays Plaza"/>
        <meta itemprop="addressLocality" content="San Francisco"/>
        <meta itemprop="addressRegion" content="CA"/>
        <meta itemprop="postalCode" content="94107"/>
        <meta itemprop="addressCountry" content="US"/>
      </div>
    </div>
  </div>
</div>
```

### Event with ticket & no reserved seating

Include the `ticketToken`, `ticketNumber` and `numSeats` fields to add information about the tickets.

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "EventReservation",
  "reservationNumber": "E123456789",
  "reservationStatus": "http://schema.org/Confirmed",
  "underName": {
    "@type": "Person",
    "name": "John Smith"
  },
  "reservationFor": {
    "@type": "Event",
    "name": "Foo Fighters Concert",
    "performer": {
      "@type": "Organization",
      "name": "The Foo Fighters",
      "image": "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"
    },
    "startDate": "2027-03-06T19:30:00-08:00",
    "location": {
      "@type": "Place",
      "name": "AT&T Park",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "24 Willie Mays Plaza",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94107",
        "addressCountry": "US"
      }
    }
  },
  "ticketToken": "qrCode:AB34",
  "ticketNumber": "abc123",
  "numSeats": "1"
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/EventReservation">
  <meta itemprop="reservationNumber" content="E123456789"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Event">
    <meta itemprop="name" content="Foo Fighters Concert"/>
    <div itemprop="performer" itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="The Foo Fighters"/>
      <link itemprop="image" href="http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"/>
    </div>
    <meta itemprop="startDate" content="2027-03-06T19:30:00-08:00"/>
    <div itemprop="location" itemscope itemtype="http://schema.org/Place">
      <meta itemprop="name" content="AT&T Park"/>
      <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <meta itemprop="streetAddress" content="24 Willie Mays Plaza"/>
        <meta itemprop="addressLocality" content="San Francisco"/>
        <meta itemprop="addressRegion" content="CA"/>
        <meta itemprop="postalCode" content="94107"/>
        <meta itemprop="addressCountry" content="US"/>
      </div>
    </div>
  </div>
  <meta itemprop="ticketToken" content="qrCode:AB34"/>
  <meta itemprop="ticketNumber" content="abc123"/>
  <meta itemprop="numSeats" content="1"/>
</div>
```

### Sports or Music Event with ticket

Set the `reservationFor` type to either `MusicEvent` or `SportsEvent`. If the event is a `MusicEvent` (e.g. a concert) you should include `performer.name` and `performer.image`. If the event is a `SportsEvent` (e.g. a basket ball game) where there are two competing teams or players include the two teams as performers.

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "EventReservation",
  "reservationNumber": "E123456789",
  "reservationStatus": "http://schema.org/Confirmed",
  "underName": {
    "@type": "Person",
    "name": "John Smith"
  },
  "reservationFor": {
    "@type": "MusicEvent",
    "name": "Foo Fighters Concert",
    "url": "http://foofighterstour.com/SFO",
    "performer": {
      "@type": "Organization",
      "name": "The Foo Fighters",
      "image": "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"
    },
    "startDate": "2027-03-06T19:30:00-08:00",
    "endDate": "2027-03-06T23:00:00-08:00",
    "doorTime": "2027-03-06T16:30:00-08:00",
    "location": {
      "@type": "Place",
      "name": "AT&T Park",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "AT&T Park",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94107",
        "addressCountry": "US"
      }
    }
  },
  "ticketToken": "qrCode:AB34",
  "ticketNumber": "abc123",
  "numSeats": "1"
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/EventReservation">
  <meta itemprop="reservationNumber" content="E123456789"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/MusicEvent">
    <meta itemprop="name" content="Foo Fighters Concert"/>
    <link itemprop="url" href="http://foofighterstour.com/SFO"/>
    <div itemprop="performer" itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="The Foo Fighters"/>
      <link itemprop="image" href="http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"/>
    </div>
    <meta itemprop="startDate" content="2027-03-06T19:30:00-08:00"/>
    <meta itemprop="endDate" content="2027-03-06T23:00:00-08:00"/>
    <meta itemprop="doorTime" content="2027-03-06T16:30:00-08:00"/>
    <div itemprop="location" itemscope itemtype="http://schema.org/Place">
      <meta itemprop="name" content="AT&T Park"/>
      <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <meta itemprop="streetAddress" content="AT&T Park"/>
        <meta itemprop="addressLocality" content="San Francisco"/>
        <meta itemprop="addressRegion" content="CA"/>
        <meta itemprop="postalCode" content="94107"/>
        <meta itemprop="addressCountry" content="US"/>
      </div>
    </div>
  </div>
  <meta itemprop="ticketToken" content="qrCode:AB34"/>
  <meta itemprop="ticketNumber" content="abc123"/>
  <meta itemprop="numSeats" content="1"/>
</div>
```

### Event with ticket & reserved seating

For a single ticket with reserved seating, include `ticketToken`, `ticketNumber`, `venueSeat`, `venueRow` and `venueSection`. You only need to include whichever of `venueSeat`, `venueRow`, and `venueSection` is needed to describe the location of the seat.

Do not include `numSeats`.

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "EventReservation",
  "reservationNumber": "E123456789",
  "reservationStatus": "http://schema.org/Confirmed",
  "underName": {
    "@type": "Person",
    "name": "John Smith"
  },
  "reservationFor": {
    "@type": "Event",
    "name": "Foo Fighters Concert",
    "performer": {
      "@type": "Organization",
      "name": "The Foo Fighters",
      "image": "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"
    },
    "startDate": "2027-03-06T19:30:00-08:00",
    "location": {
      "@type": "Place",
      "name": "AT&T Park",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "24 Willie Mays Plaza",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "postalCode": "94107",
        "addressCountry": "US"
      }
    }
  },
  "venueSeat": "12",
  "venueRow": "A",
  "venueSection": "101",
  "ticketToken": "qrCode:AB34",
  "ticketNumber": "abc123"
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/EventReservation">
  <meta itemprop="reservationNumber" content="E123456789"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Event">
    <meta itemprop="name" content="Foo Fighters Concert"/>
    <div itemprop="performer" itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="The Foo Fighters"/>
      <link itemprop="image" href="http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"/>
    </div>
    <meta itemprop="startDate" content="2027-03-06T19:30:00-08:00"/>
    <div itemprop="location" itemscope itemtype="http://schema.org/Place">
      <meta itemprop="name" content="AT&T Park"/>
      <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <meta itemprop="streetAddress" content="24 Willie Mays Plaza"/>
        <meta itemprop="addressLocality" content="San Francisco"/>
        <meta itemprop="addressRegion" content="CA"/>
        <meta itemprop="postalCode" content="94107"/>
        <meta itemprop="addressCountry" content="US"/>
      </div>
    </div>
  </div>
  <meta itemprop="venueSeat" content="12"/>
  <meta itemprop="venueRow" content="A"/>
  <meta itemprop="venueSection" content="101"/>
  <meta itemprop="ticketToken" content="qrCode:AB34"/>
  <meta itemprop="ticketNumber" content="abc123"/>
</div>
```

### Multiple tickets

There are two options to do multiple tickets:

- The first is the change `numSeats`. This means a single reservation will represent tickets for `numSeats` number of individuals.
- If you want to have one ticket (i.e. barcode) per individual and have names for each individual on the ticket, create multiple `EventReservations` (one per individual) with `numSeats` set to 1. The example below shows what this looks like.

### JSON-LD

```
<script type="application/ld+json">
[
  {
    "@context": "http://schema.org",
    "@type": "EventReservation",
    "reservationNumber": "E123456789",
    "reservationStatus": "http://schema.org/Confirmed",
    "underName": {
      "@type": "Person",
      "name": "John Smith"
    },
    "reservationFor": {
      "@type": "Event",
      "name": "Foo Fighters Concert",
      "performer": {
        "@type": "Person",
        "name": "The Foo Fighters",
        "image": "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"
      },
      "startDate": "2027-03-06T19:30:00-08:00",
      "location": {
        "@type": "Place",
        "name": "AT&T Park",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "24 Willie Mays Plaza",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "postalCode": "94107",
          "addressCountry": "US"
        }
      }
    },
    "venueSeat": "12",
    "venueRow": "A",
    "venueSection": "101",
    "ticketToken": "qrCode:AB34",
    "ticketNumber": "abc123"
  },
  {
    "@context": "http://schema.org",
    "@type": "EventReservation",
    "reservationNumber": "E123456789",
    "reservationStatus": "http://schema.org/Confirmed",
    "underName": {
      "@type": "Person",
      "name": "Eva Green"
    },
    "reservationFor": {
      "@type": "Event",
      "name": "Foo Fighters Concert",
      "performer": {
        "@type": "Organization",
        "name": "The Foo Fighters",
        "image": "http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"
      },
      "startDate": "2027-03-06T19:30:00-08:00",
      "location": {
        "@type": "Place",
        "name": "AT&T Park",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "24 Willie Mays Plaza",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "postalCode": "94107",
          "addressCountry": "US"
        }
      }
    },
    "venueSeat": "13",
    "venueRow": "A",
    "venueSection": "101",
    "ticketToken": "qrCode:AB34",
    "ticketNumber": "abc456"
  }
]
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/EventReservation">
  <meta itemprop="reservationNumber" content="E123456789"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Event">
    <meta itemprop="name" content="Foo Fighters Concert"/>
   <div itemprop="performer" itemscope itemtype="http://schema.org/Person">
      <meta itemprop="name" content="The Foo Fighters"/>
      <link itemprop="image" href="http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"/>
    </div>
    <meta itemprop="startDate" content="2027-03-06T19:30:00-08:00"/>
    <div itemprop="location" itemscope itemtype="http://schema.org/Place">
      <meta itemprop="name" content="AT&T Park"/>
      <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <meta itemprop="streetAddress" content="24 Willie Mays Plaza"/>
        <meta itemprop="addressLocality" content="San Francisco"/>
        <meta itemprop="addressRegion" content="CA"/>
        <meta itemprop="postalCode" content="94107"/>
        <meta itemprop="addressCountry" content="US"/>
      </div>
    </div>
  </div>
  <meta itemprop="venueSeat" content="12"/>
  <meta itemprop="venueRow" content="A"/>
  <meta itemprop="venueSection" content="101"/>
  <meta itemprop="ticketToken" content="qrCode:AB34"/>
  <meta itemprop="ticketNumber" content="abc123"/>
</div>
<div itemscope itemtype="http://schema.org/EventReservation">
  <meta itemprop="reservationNumber" content="E123456789"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="Eva Green"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Event">
    <meta itemprop="name" content="Foo Fighters Concert"/>
    <div itemprop="performer" itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="The Foo Fighters"/>
      <link itemprop="image" href="http://www.amprocktv.com/wp-content/uploads/2027/01/foo-fighters-1-680x383.jpg"/>
    </div>
    <meta itemprop="startDate" content="2027-03-06T19:30:00-08:00"/>
    <div itemprop="location" itemscope itemtype="http://schema.org/Place">
      <meta itemprop="name" content="AT&T Park"/>
      <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <meta itemprop="streetAddress" content="24 Willie Mays Plaza"/>
        <meta itemprop="addressLocality" content="San Francisco"/>
        <meta itemprop="addressRegion" content="CA"/>
        <meta itemprop="postalCode" content="94107"/>
        <meta itemprop="addressCountry" content="US"/>
      </div>
    </div>
  </div>
  <meta itemprop="venueSeat" content="13"/>
  <meta itemprop="venueRow" content="A"/>
  <meta itemprop="venueSection" content="101"/>
  <meta itemprop="ticketToken" content="qrCode:AB34"/>
  <meta itemprop="ticketNumber" content="abc456"/>
</div>
```

## Test your markup

You can validate your markup using the [Email Markup Tester Tool](https://www.google.com/webmasters/markup-tester/). Paste in your markup code and click the **Validate** button to scan the content and receive a report on any errors present.

## Specification

Review the details of your email to see if any of these properties apply to your event reservation. By marking up these additional properties you allow Google to display a much richer description of the event reservation to the user.

Type name: [EventReservation](https://developers.google.com/workspace/gmail/markup/reference/types/EventReservation)

Extends [Reservation](https://developers.google.com/workspace/gmail/markup/reference/types/Reservation)

| Name | Type | Description |
| --- | --- | --- |
| **action** | [Action](https://developers.google.com/workspace/gmail/markup/reference/types/Action) | An action that can be taken upon this thing. |
| action.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The string shown to the user on the UI element tied to the action. |
| action.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Target url for the action. If no explicit handler field is provided the action handler is expanded into a WebActionHandler with this url as the WebActionHandler url. |
| **additionalTicketText** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Additional information about the ticket. |
| **bookingAgent** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**image** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL of an image of the Organization. |
| bookingAgent.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the agent/service. |
| bookingAgent.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Website of the agent/service. |
| **bookingTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Date the reservation was made. |
| **cancelReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be cancelled. |
| **confirmReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be confirmed. |
| **modifiedTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **modifyReservationUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | (recommended for Confirmation Cards/Search Answers) Web page where reservation can be modified. |
| **numSeats** | [Number](https://developers.google.com/workspace/gmail/markup/reference/types/Number) | The number of seats. |
| **price** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Total price of the EventReservation. |
| **priceCurrency** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The currency (in 3-letter ISO 4217 format) of the EventReservation's price. |
| **programMembership** | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The identifier of the membership. |
| programMembership.**program** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The name of the program. |
| **reservationFor****   (Required)** | [Event](https://developers.google.com/workspace/gmail/markup/reference/types/Event) | Can use Event, or any of the event subtypes, including BusinessEvent, ChildrenEvent, ComedyEvent, DanceEvent, EducationEvent, Festival, FoodEvent, LiteraryEvent, MovieShowing, MusicEvent, SaleEvent, SocialEvent, SportsEvent, TheaterEvent, VisualArtsEvent. |
| reservationFor.**description** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | A short description of the Event. |
| reservationFor.**doorTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The time admission will commence. |
| reservationFor.**endDate** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The end date and time of the event. |
| reservationFor.**image** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL of an image of the Event. |
| reservationFor.**location****   (Required)** | [Place](https://developers.google.com/workspace/gmail/markup/reference/types/Place) | The event's location. |
| reservationFor.location.**address****   (Required)** | [PostalAddress](https://developers.google.com/workspace/gmail/markup/reference/types/PostalAddress) | Address of the the event's location. |
| reservationFor.location.address.**addressCountry****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [Country](https://developers.google.com/workspace/gmail/markup/reference/types/Country) | Country of the event's location. |
| reservationFor.location.address.**addressLocality****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Locality (e.g. city) of the event's location. |
| reservationFor.location.address.**addressRegion****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Region (e.g. State) of the event's location. |
| reservationFor.location.address.**postalCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Postal code of the event's location. |
| reservationFor.location.address.**streetAddress****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Street address of the event's location. |
| reservationFor.location.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the the event's location. |
| reservationFor.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Event's name. |
| reservationFor.**performer** | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | (recommended for Confirmation Cards/Search Answers) The event's performer. Also accepts an array of objects. |
| reservationFor.performer.**image** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | (recommended for Confirmation Cards/Search Answers) URL of an image of the Person. |
| reservationFor.performer.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | (recommended for Confirmation Cards/Search Answers) Name of the Person. |
| reservationFor.performer.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL of the Person. |
| reservationFor.**startDate****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | The start date and time of the event. |
| reservationFor.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | URL of the Event. |
| **reservationNumber****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](https://developers.google.com/workspace/gmail/markup/reference/types/ReservationStatus) | Current status of the reservation. |
| **ticketDownloadUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Where the ticket can be downloaded. |
| **ticketNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the ticket. |
| **ticketPrintUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Where the ticket can be printed. |
| **ticketToken** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| **underName****   (Required)** | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The ticket holder. |
| underName.**email** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Email address. |
| underName.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
| **url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be viewed. |
| **venueRow** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The seat's row. |
| **venueSeat** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The seat number. |
| **venueSection** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The seat's section. |
