---
source: https://developers.google.com/workspace/gmail/markup/reference/train-reservation
root: workspace
fetched_at: 2026-04-23T15:29:15.068Z
---

# Train Reservation

## Use cases

The following use cases show common examples of how the `TrainReservation` schema is used. Use these examples to ensure that your markup is properly structured.

### Basic reservation confirmation

Embed the following markup in your email when you send a reservation confirmation.

The Google app will display the reservation details on the day of the journey and will notify the user of the time to leave to get to the train station on time (taking into account the transport mode, traffic etc). If you provide a check-in URL like in the example below, the Google app will display this to the user 24 hours prior to the trip to the user.

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "TrainReservation",
  "reservationNumber": "AB3XY2",
  "reservationStatus": "http://schema.org/ReservationConfirmed",
  "reservationFor": {
    "@type": "TrainTrip",
    "departureStation": {
      "@type": "TrainStation",
      "name": "Munich Central"
    },
    "departureTime": "2017-01-04T10:30:00+01:00",
    "arrivalStation": {
      "@type": "TrainStation",
      "name": "Paris Gare De Lyon"
    },
    "arrivalTime": "2017-01-04T03:10:00+01:00"
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/TrainReservation">
  <meta itemprop="reservationNumber" content="AB3XY2"/>
  <link itemprop="reservationStatus" href="http://schema.org/ReservationConfirmed"/>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/TrainTrip">
    <div itemprop="departureStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Munich Central"/>
    </div>
    <meta itemprop="departureTime" content="2017-01-04T10:30:00+01:00"/>
    <div itemprop="arrivalStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Paris Gare De Lyon"/>
    </div>
    <meta itemprop="arrivalTime" content="2017-01-04T03:10:00+01:00"/>
  </div>
</div>
```

### Boarding pass and ticket

In addition to a reservation confirmation you may trigger a Confirmation Card boarding pass in a separate email.

Confirmation cards can not only help the user get to the train station on time, but also surface the ticket to the user during the journey. For this, some additional fields need to be included in the markup. If there are additional fields required to board passengers, include them in the `additionalTicketText` field.

For tickets with no reserved seating, these fields are: `numSeats`, `ticketNumber`, `ticketToken`

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "TrainReservation",
  "reservationNumber": "AB3XY2",
  "underName": {
    "@type": "Person",
    "name": "Eva Green"
  },
  "reservationStatus": "http://schema.org/ReservationConfirmed",
  "reservationFor": {
    "@type": "TrainTrip",
    "departureStation": {
      "@type": "TrainStation",
      "name": "Munich Central"
    },
    "departureTime": "2017-01-04T10:30:00+01:00",
    "arrivalStation": {
      "@type": "TrainStation",
      "name": "Paris Gare De Lyon"
    },
    "arrivalTime": "2017-01-04T03:10:00+01:00"
  },
  "reservedTicket": {
    "@type": "Ticket",
    "underName": "Eva Green",
    "ticketNumber": "123XYZ",
    "ticketToken": "aztecCode:AB34",
    "additionalTicketText": "We recommend that you arrive at the station at least 30 minutes prior to your scheduled departure. Allow additional time if you need help with baggage or tickets."
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/TrainReservation">
  <meta itemprop="reservationNumber" content="AB3XY2"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="Eva Green"/>
  </div>
  <link itemprop="reservationStatus" href="http://schema.org/ReservationConfirmed"/>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/TrainTrip">
    <div itemprop="departureStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Munich Central"/>
    </div>
    <meta itemprop="departureTime" content="2017-01-04T10:30:00+01:00"/>
    <div itemprop="arrivalStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Paris Gare De Lyon"/>
    </div>
    <meta itemprop="arrivalTime" content="2017-01-04T03:10:00+01:00"/>
  </div>
  <div itemprop="reservedTicket" itemscope itemtype="http://schema.org/Ticket">
    <meta itemprop="underName" content="Eva Green"/>
    <meta itemprop="ticketNumber" content="123XYZ"/>
    <meta itemprop="ticketToken" content="aztecCode:AB34"/>
    <meta itemprop="additionalTicketText" content="We recommend that you arrive at the station at least 30 minutes prior to your scheduled departure. Allow additional time if you need help with baggage or tickets."/>
  </div>
</div>
```

For tickets with reserved seating, these fields are: `seatNumber`, `seatingType`, `ticketNumber`, `ticketToken`

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "TrainReservation",
  "reservationNumber": "AB3XY2",
  "underName": {
    "@type": "Person",
    "name": "Eva Green"
  },
  "reservationStatus": "http://schema.org/ReservationConfirmed",
  "reservationFor": {
    "@type": "TrainTrip",
    "departureStation": {
      "@type": "TrainStation",
      "name": "Munich Central"
    },
    "departureTime": "2017-01-04T10:30:00+01:00",
    "arrivalStation": {
      "@type": "TrainStation",
      "name": "Paris Gare De Lyon"
    },
    "arrivalTime": "2017-01-04T03:10:00+01:00"
  },
  "reservedTicket": {
    "@type": "Ticket",
    "underName": "Eva Green",
    "ticketedSeat": {
      "@type": "Seat",
      "seatNumber": "27B",
      "seatingType": "1st Class"
    },
    "ticketNumber": "123XYZ",
    "ticketToken": "aztecCode:AB34",
    "additionalTicketText": "We recommend that you arrive at the station at least 30 minutes prior to your scheduled departure. Allow additional time if you need help with baggage or tickets."
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/TrainReservation">
  <meta itemprop="reservationNumber" content="AB3XY2"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="Eva Green"/>
  </div>
  <link itemprop="reservationStatus" href="http://schema.org/ReservationConfirmed"/>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/TrainTrip">
    <div itemprop="departureStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Munich Central"/>
    </div>
    <meta itemprop="departureTime" content="2017-01-04T10:30:00+01:00"/>
    <div itemprop="arrivalStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Paris Gare De Lyon"/>
    </div>
    <meta itemprop="arrivalTime" content="2017-01-04T03:10:00+01:00"/>
  </div>
  <div itemprop="reservedTicket" itemscope itemtype="http://schema.org/Ticket">
    <meta itemprop="underName" content="Eva Green"/>
    <div itemprop="ticketedSeat" itemscope itemtype="http://schema.org/Seat">
      <meta itemprop="seatNumber" content="27B"/>
      <meta itemprop="seatingType" content="1st Class"/>
    </div>
    <meta itemprop="ticketNumber" content="123XYZ"/>
    <meta itemprop="ticketToken" content="aztecCode:AB34"/>
    <meta itemprop="additionalTicketText" content="We recommend that you arrive at the station at least 30 minutes prior to your scheduled departure. Allow additional time if you need help with baggage or tickets."/>
  </div>
</div>
```

### Multiple passengers

To describe a booking involving multiple passengers, use one `TrainReservation` per passenger per leg.

### JSON-LD

```
<script type="application/ld+json">
[
  {
    "@context": "http://schema.org",
    "@type": "TrainReservation",
    "reservationNumber": "AB3XY2",
    "reservationStatus": "http://schema.org/ReservationConfirmed",
    "reservationFor": {
      "@type": "TrainTrip",
      "departureStation": {
        "@type": "TrainStation",
        "name": "Munich Central"
      },
      "departureTime": "2017-01-04T10:30:00+01:00",
      "arrivalStation": {
        "@type": "TrainStation",
        "name": "Paris Gare De Lyon"
      },
      "arrivalTime": "2017-01-04T03:10:00+01:00"
    },
    "reservedTicket": {
      "@type": "Ticket",
      "underName": {
        "@type": "Person",
        "name": "Eva Green"
      }
    }
  },
  {
    "@context": "http://schema.org",
    "@type": "TrainReservation",
    "reservationNumber": "AB3XY2",
    "reservationStatus": "http://schema.org/ReservationConfirmed",
    "reservationFor": {
      "@type": "TrainTrip",
      "departureStation": {
        "@type": "TrainStation",
        "name": "Munich Central"
      },
      "departureTime": "2017-01-04T10:30:00+01:00",
      "arrivalStation": {
        "@type": "TrainStation",
        "name": "Paris Gare De Lyon"
      },
      "arrivalTime": "2017-01-04T03:10:00+01:00"
    },
    "reservedTicket": {
      "@type": "Ticket",
      "underName": {
        "@type": "Person",
        "name": "John Green"
      }
    }
  },
  {
    "@context": "http://schema.org",
    "@type": "TrainReservation",
    "reservationNumber": "AB3XY2",
    "reservationStatus": "http://schema.org/ReservationConfirmed",
    "reservationFor": {
      "@type": "TrainTrip",
      "departureStation": {
        "@type": "TrainStation",
        "name": "Munich Central"
      },
      "departureTime": "2017-01-04T10:30:00+01:00",
      "arrivalStation": {
        "@type": "TrainStation",
        "name": "Paris Gare De Lyon"
      },
      "arrivalTime": "2017-01-04T03:10:00+01:00"
    },
    "reservedTicket": {
      "@type": "Ticket",
      "underName": {
        "@type": "Person",
        "name": "Carol Green"
      }
    }
  },
  {
    "@context": "http://schema.org",
    "@type": "TrainReservation",
    "reservationNumber": "AB3XY2",
    "reservationStatus": "http://schema.org/ReservationConfirmed",
    "reservationFor": {
      "@type": "TrainTrip",
      "departureStation": {
        "@type": "TrainStation",
        "name": "Munich Central"
      },
      "departureTime": "2017-01-04T10:30:00+01:00",
      "arrivalStation": {
        "@type": "TrainStation",
        "name": "Paris Gare De Lyon"
      },
      "arrivalTime": "2017-01-04T03:10:00+01:00"
    },
    "reservedTicket": {
      "@type": "Ticket",
      "underName": {
        "@type": "Person",
        "name": "Daniel Green"
      }
    }
  }
]
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/TrainReservation">
  <meta itemprop="reservationNumber" content="AB3XY2"/>
  <link itemprop="reservationStatus" href="http://schema.org/ReservationConfirmed"/>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/TrainTrip">
    <div itemprop="departureStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Munich Central"/>
    </div>
    <meta itemprop="departureTime" content="2017-01-04T10:30:00+01:00"/>
    <div itemprop="arrivalStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Paris Gare De Lyon"/>
    </div>
    <meta itemprop="arrivalTime" content="2017-01-04T03:10:00+01:00"/>
  </div>
  <div itemprop="reservedTicket" itemscope itemtype="http://schema.org/Ticket">
    <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
      <meta itemprop="name" content="Eva Green"/>
    </div>
  </div>
</div>
<div itemscope itemtype="http://schema.org/TrainReservation">
  <meta itemprop="reservationNumber" content="AB3XY2"/>
  <link itemprop="reservationStatus" href="http://schema.org/ReservationConfirmed"/>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/TrainTrip">
    <div itemprop="departureStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Munich Central"/>
    </div>
    <meta itemprop="departureTime" content="2017-01-04T10:30:00+01:00"/>
    <div itemprop="arrivalStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Paris Gare De Lyon"/>
    </div>
    <meta itemprop="arrivalTime" content="2017-01-04T03:10:00+01:00"/>
  </div>
  <div itemprop="reservedTicket" itemscope itemtype="http://schema.org/Ticket">
    <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
      <meta itemprop="name" content="John Green"/>
    </div>
  </div>
</div>
<div itemscope itemtype="http://schema.org/TrainReservation">
  <meta itemprop="reservationNumber" content="AB3XY2"/>
  <link itemprop="reservationStatus" href="http://schema.org/ReservationConfirmed"/>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/TrainTrip">
    <div itemprop="departureStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Munich Central"/>
    </div>
    <meta itemprop="departureTime" content="2017-01-04T10:30:00+01:00"/>
    <div itemprop="arrivalStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Paris Gare De Lyon"/>
    </div>
    <meta itemprop="arrivalTime" content="2017-01-04T03:10:00+01:00"/>
  </div>
  <div itemprop="reservedTicket" itemscope itemtype="http://schema.org/Ticket">
    <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
      <meta itemprop="name" content="Carol Green"/>
    </div>
  </div>
</div>
<div itemscope itemtype="http://schema.org/TrainReservation">
  <meta itemprop="reservationNumber" content="AB3XY2"/>
  <link itemprop="reservationStatus" href="http://schema.org/ReservationConfirmed"/>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/TrainTrip">
    <div itemprop="departureStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Munich Central"/>
    </div>
    <meta itemprop="departureTime" content="2017-01-04T10:30:00+01:00"/>
    <div itemprop="arrivalStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Paris Gare De Lyon"/>
    </div>
    <meta itemprop="arrivalTime" content="2017-01-04T03:10:00+01:00"/>
  </div>
  <div itemprop="reservedTicket" itemscope itemtype="http://schema.org/Ticket">
    <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
      <meta itemprop="name" content="Daniel Green"/>
    </div>
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
  "@type": "TrainReservation",
  "reservationNumber": "AB3XY2",
  "url": "http://eurotravel/view/AB3XY2",
  "underName": {
    "@type": "Person",
    "name": "John Smith",
    "email": "john@mail.com"
  },
  "programMembership": {
    "@type": "ProgramMembership",
    "memberNumber": "12345",
    "program": "STA"
  },
  "bookingAgent": {
    "@type": "Organization",
    "name": "European Vacations",
    "url": "http://eurotravel/"
  },
  "bookingTime": "2013-01-14T13:05:00-05:00",
  "modifiedTime": "2013-03-14T13:05:00-05:00",
  "confirmReservationUrl": "http://eurotravel/confirm?id=AB3XY2",
  "cancelReservationUrl": "http://eurotravel/cancel?id=AB3XY2",
  "modifyReservationUrl": "http://eurotravel/edit?id=AB3XY2",
  "reservationStatus": "http://schema.org/ReservationConfirmed",
  "checkinUrl": "http://train.com/checkin?id=AB3XY2",
  "reservationFor": {
    "@type": "TrainTrip",
    "trainNumber": "9203",
    "trainName": "Orient Express",
    "trainCode": "iGTV",
    "trainCompany": {
      "@type": "Organization"
    },
    "departureStation": {
      "@type": "TrainStation",
      "name": "Munich Central"
    },
    "departurePlatform": "64",
    "departureTime": "2017-01-04T10:30:00+01:00",
    "arrivalStation": {
      "@type": "TrainStation",
      "name": "Paris Gare De Lyon"
    },
    "arrivalPlatform": "101B",
    "arrivalTime": "2017-01-04T03:10:00+01:00"
  },
  "reservedTicket": {
    "@type": "Ticket",
    "ticketNumber": "123XYZ",
    "downloadUrl": "?",
    "printUrl": "?",
    "ticketToken": "qrCode:123456789",
    "additionalTicketText": "?",
    "price": "135.00",
    "priceCurrency": "EUR",
    "underName": {
      "@type": "Person",
      "name": "Mary Smith"
    },
    "ticketedSeat": {
      "@type": "Seat",
      "seatingType": "1st Class",
      "seatNumber": "27",
      "seatRow": "A"
    }
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/TrainReservation">
  <meta itemprop="reservationNumber" content="AB3XY2"/>
  <link itemprop="url" href="http://eurotravel/view/AB3XY2"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
    <meta itemprop="email" content="john@mail.com"/>
  </div>
  <div itemprop="programMembership" itemscope itemtype="http://schema.org/ProgramMembership">
    <meta itemprop="memberNumber" content="12345"/>
    <meta itemprop="program" content="STA"/>
  </div>
  <div itemprop="bookingAgent" itemscope itemtype="http://schema.org/Organization">
    <meta itemprop="name" content="European Vacations"/>
    <link itemprop="url" href="http://eurotravel/"/>
  </div>
  <meta itemprop="bookingTime" content="2013-01-14T13:05:00-05:00"/>
  <meta itemprop="modifiedTime" content="2013-03-14T13:05:00-05:00"/>
  <link itemprop="confirmReservationUrl" href="http://eurotravel/confirm?id=AB3XY2"/>
  <link itemprop="cancelReservationUrl" href="http://eurotravel/cancel?id=AB3XY2"/>
  <link itemprop="modifyReservationUrl" href="http://eurotravel/edit?id=AB3XY2"/>
  <link itemprop="reservationStatus" href="http://schema.org/ReservationConfirmed"/>
  <link itemprop="checkinUrl" href="http://train.com/checkin?id=AB3XY2"/>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/TrainTrip">
    <meta itemprop="trainNumber" content="9203"/>
    <meta itemprop="trainName" content="Orient Express"/>
    <meta itemprop="trainCode" content="iGTV"/>
    <div itemprop="trainCompany" itemscope itemtype="http://schema.org/Organization">
    </div>
    <div itemprop="departureStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Munich Central"/>
    </div>
    <meta itemprop="departurePlatform" content="64"/>
    <meta itemprop="departureTime" content="2017-01-04T10:30:00+01:00"/>
    <div itemprop="arrivalStation" itemscope itemtype="http://schema.org/TrainStation">
      <meta itemprop="name" content="Paris Gare De Lyon"/>
    </div>
    <meta itemprop="arrivalPlatform" content="101B"/>
    <meta itemprop="arrivalTime" content="2017-01-04T03:10:00+01:00"/>
  </div>
  <div itemprop="reservedTicket" itemscope itemtype="http://schema.org/Ticket">
    <meta itemprop="ticketNumber" content="123XYZ"/>
    <meta itemprop="downloadUrl" content="?"/>
    <meta itemprop="printUrl" content="?"/>
    <meta itemprop="ticketToken" content="qrCode:123456789"/>
    <meta itemprop="additionalTicketText" content="?"/>
    <meta itemprop="price" content="135.00"/>
    <meta itemprop="priceCurrency" content="EUR"/>
    <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
      <meta itemprop="name" content="Mary Smith"/>
    </div>
    <div itemprop="ticketedSeat" itemscope itemtype="http://schema.org/Seat">
      <meta itemprop="seatingType" content="1st Class"/>
      <meta itemprop="seatNumber" content="27"/>
      <meta itemprop="seatRow" content="A"/>
    </div>
  </div>
</div>
```

## Test your markup

You can validate your markup using the [Email Markup Tester Tool](https://www.google.com/webmasters/markup-tester/). Paste in your markup code and click the **Validate** button to scan the content and receive a report on any errors present.

## Specification

Review the details of your email to see if any of these properties apply to your train reservation. By marking up these additional properties you allow Google to display a much richer description of the train reservation to the user.

| Property | Type | Description |
| --- | --- | --- |
| reservationNumber | Text | (**required**) The number or id of the reservation. |
| url | URL | Web page where reservation can be viewed. |
| underName | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The passenger. |
| underName.name | Text | (**recommended for confirmation cards/Search Answers**) Name of the Person. |
| underName.email | Text | Email address. |
| programMembership | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.memberNumber | Text | The identifier of the membership. |
| programMembership.program | Text | The name of the program. |
| bookingAgent | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.name | Text | Name of the agent/service. |
| bookingAgent.url | URL | Website of the agent/service. |
| bookingTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Date the reservation was made. |
| modifiedTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | (**recommended for confirmation cards/Search Answers**) Time the reservation was last modified. |
| confirmReservationUrl | URL | Web page where reservation can be confirmed. |
| cancelReservationUrl | URL | Web page where reservation can be cancelled. |
| modifyReservationUrl | URL | (**recommended for confirmation cards/Search Answers**) Web page where reservation can be modified. |
| reservationStatus | [ReservationStatus](https://developers.google.com/workspace/gmail/markup/reference/types/ReservationStatus) | (**required**) Current status of the reservation. |
| checkinUrl | URL | Webpage where the passenger can check in. |
| reservationFor | [TrainTrip](https://developers.google.com/workspace/gmail/markup/reference/types/TrainTrip) | (**required**) Information about the train trip. |
| reservationFor.trainNumber | Text | (**recommended for confirmation cards/Search Answers**) The number for the train. |
| reservationFor.trainName | Text | The name of the train. |
| reservationFor.trainCode | Text | The unique identifier for the train. |
| reservationFor.trainCompany | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The organization that operates the train. Also accepts a string (e.g. ""). |
| reservationFor.departureStation | [TrainStation](https://developers.google.com/workspace/gmail/markup/reference/types/TrainStation) | (**required**) The station where the train departs. |
| reservationFor.departureStation.name | Text | (**required**) Name of the TrainStation. |
| reservationFor.departurePlatform | Text | The platform where the train departs. |
| reservationFor.departureTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | (**required**) The expected departure time. |
| reservationFor.arrivalStation | [TrainStation](https://developers.google.com/workspace/gmail/markup/reference/types/TrainStation) | (**required**) The station where the train ends. |
| reservationFor.arrivalStation.name | Text | (**required**) Name of the TrainStation. |
| reservationFor.arrivalPlatform | Text | The platform where the train arrives. |
| reservationFor.arrivalTime | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | (**required**) The expected arrival time. |
| reservedTicket | [Ticket](https://developers.google.com/workspace/gmail/markup/reference/types/Ticket) | Ticket information. |
| reservedTicket.ticketNumber | Text | The number or id of the ticket. |
| reservedTicket.downloadUrl | URL | . |
| reservedTicket.printUrl | URL | . |
| reservedTicket.ticketToken | Text or URL | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| reservedTicket.additionalTicketText | Text | Additional explanatory text about the ticket. |
| reservedTicket.price | Text | Total price of the ticket. |
| reservedTicket.priceCurrency | Text | The currency (in 3-letter ISO 4217 format) of the ticket's price. |
| reservedTicket.underName | [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) or [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) | The Person or Organization the ticket is for. |
| reservedTicket.underName.name | Text | Name of the Person. |
| reservedTicket.ticketedSeat | [Seat](https://developers.google.com/workspace/gmail/markup/reference/types/Seat) | The location of the reserved seat (e.g., 27B).. |
| reservedTicket.ticketedSeat.seatingType | Text | The type/class of the seat. |
| reservedTicket.ticketedSeat.seatNumber | Text | The location of the reserved seat. |
| reservedTicket.ticketedSeat.seatRow | Text | The row location of the reserved seat. |
