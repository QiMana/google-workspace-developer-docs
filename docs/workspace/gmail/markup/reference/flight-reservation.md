---
source: https://developers.google.com/workspace/gmail/markup/reference/flight-reservation
root: workspace
fetched_at: 2026-04-23T15:29:11.891Z
---

# Flight Reservation

Use this type to declare a reservation for air travel.

## Use cases

The following use cases show common examples of how the FlightReservation schema is used. Use these examples to ensure that your markup is properly structured.

### Basic flight confirmation

Embed the following markup in your email when you send a flight confirmation email. This example is for a one-way flight:

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "FlightReservation",
  "reservationNumber": "RXJ34P",
  "reservationStatus": "http://schema.org/Confirmed",
  "underName": {
    "@type": "Person",
    "name": "Eva Green"
  },
  "reservationFor": {
    "@type": "Flight",
    "flightNumber": "110",
    "airline": {
      "@type": "Airline",
      "name": "United",
      "iataCode": "UA"
    },
    "departureAirport": {
      "@type": "Airport",
      "name": "San Francisco Airport",
      "iataCode": "SFO"
    },
    "departureTime": "2027-03-04T20:15:00-08:00",
    "arrivalAirport": {
      "@type": "Airport",
      "name": "John F. Kennedy International Airport",
      "iataCode": "JFK"
    },
    "arrivalTime": "2027-03-05T06:30:00-05:00"
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/FlightReservation">
  <meta itemprop="reservationNumber" content="RXJ34P"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="Eva Green"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Flight">
    <meta itemprop="flightNumber" content="110"/>
    <div itemprop="airline" itemscope itemtype="http://schema.org/Airline">
      <meta itemprop="name" content="United"/>
      <meta itemprop="iataCode" content="UA"/>
    </div>
    <div itemprop="departureAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="San Francisco Airport"/>
      <meta itemprop="iataCode" content="SFO"/>
    </div>
    <meta itemprop="departureTime" content="2027-03-04T20:15:00-08:00"/>
    <div itemprop="arrivalAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="John F. Kennedy International Airport"/>
      <meta itemprop="iataCode" content="JFK"/>
    </div>
    <meta itemprop="arrivalTime" content="2027-03-05T06:30:00-05:00"/>
  </div>
</div>
```

### Boarding pass

In addition to a flight confirmation you may markup the boarding pass details.

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "FlightReservation",
  "reservationNumber": "RXJ34P",
  "reservationStatus": "http://schema.org/Confirmed",
  "underName": {
    "@type": "Person",
    "name": "Eva Green"
  },
  "reservationFor": {
    "@type": "Flight",
    "flightNumber": "110",
    "airline": {
      "@type": "Airline",
      "name": "United",
      "iataCode": "UA"
    },
    "departureAirport": {
      "@type": "Airport",
      "name": "San Francisco Airport",
      "iataCode": "SFO"
    },
    "departureTime": "2027-03-04T20:15:00-08:00",
    "arrivalAirport": {
      "@type": "Airport",
      "name": "John F. Kennedy International Airport",
      "iataCode": "JFK"
    },
    "arrivalTime": "2027-03-05T06:30:00-05:00"
  },
  "airplaneSeat": "9A",
  "airplaneSeatClass": {
    "@type": "AirplaneSeatClass",
    "name": "Business"
  },
  "ticketNumber": "ABC1234",
  "ticketToken": "qrCode:AB34",
  "checkinUrl": "http://united.com/onlinecheckin.html"
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/FlightReservation">
  <meta itemprop="reservationNumber" content="RXJ34P"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="Eva Green"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Flight">
    <meta itemprop="flightNumber" content="110"/>
    <div itemprop="airline" itemscope itemtype="http://schema.org/Airline">
      <meta itemprop="name" content="United"/>
      <meta itemprop="iataCode" content="UA"/>
    </div>
    <div itemprop="departureAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="San Francisco Airport"/>
      <meta itemprop="iataCode" content="SFO"/>
    </div>
    <meta itemprop="departureTime" content="2027-03-04T20:15:00-08:00"/>
    <div itemprop="arrivalAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="John F. Kennedy International Airport"/>
      <meta itemprop="iataCode" content="JFK"/>
    </div>
    <meta itemprop="arrivalTime" content="2027-03-05T06:30:00-05:00"/>
  </div>
  <meta itemprop="airplaneSeat" content="9A"/>
  <div itemprop="airplaneSeatClass" itemscope itemtype="http://schema.org/AirplaneSeatClass">
    <meta itemprop="name" content="Business"/>
  </div>
  <meta itemprop="ticketNumber" content="ABC1234"/>
  <meta itemprop="ticketToken" content="qrCode:AB34"/>
  <link itemprop="checkInUrl" href="http://united.com/onlinecheckin.html"/>
</div>
```

### Check-In button

In Gmail you may add a checking button to the flight confirmation by adding the `checkinUrl` property. Also supply a `CheckInAction` if linking directly to a mobile app:

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "FlightReservation",
  "reservationNumber": "RXJ34P",
  "reservationStatus": "http://schema.org/Confirmed",
  "underName": {
    "@type": "Person",
    "name": "Eva Green"
  },
  "reservationFor": {
    "@type": "Flight",
    "flightNumber": "110",
    "airline": {
      "@type": "Airline",
      "name": "United",
      "iataCode": "UA"
    },
    "departureAirport": {
      "@type": "Airport",
      "name": "San Francisco Airport",
      "iataCode": "SFO"
    },
    "departureTime": "2027-03-04T20:15:00-08:00",
    "arrivalAirport": {
      "@type": "Airport",
      "name": "John F. Kennedy International Airport",
      "iataCode": "JFK"
    },
    "arrivalTime": "2027-03-05T06:30:00-05:00"
  },
  "checkinUrl": "http://united.com/onlinecheckin.html",
  "potentialAction": {
    "@type": "CheckInAction",
    "target": "http://united.com/onlinecheckin.html"
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/FlightReservation">
  <meta itemprop="reservationNumber" content="RXJ34P"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="Eva Green"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Flight">
    <meta itemprop="flightNumber" content="110"/>
    <div itemprop="airline" itemscope itemtype="http://schema.org/Airline">
      <meta itemprop="name" content="United"/>
      <meta itemprop="iataCode" content="UA"/>
    </div>
    <div itemprop="departureAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="San Francisco Airport"/>
      <meta itemprop="iataCode" content="SFO"/>
    </div>
    <meta itemprop="departureTime" content="2027-03-04T20:15:00-08:00"/>
    <div itemprop="arrivalAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="John F. Kennedy International Airport"/>
      <meta itemprop="iataCode" content="JFK"/>
    </div>
    <meta itemprop="arrivalTime" content="2027-03-05T06:30:00-05:00"/>
  </div>
  <link itemprop="checkinUrl" href="http://united.com/onlinecheckin.html"/>
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/CheckInAction">
    <link itemprop="target" href="http://united.com/onlinecheckin.html"/>
  </div>
</div>
```

### Multiple flight segments

To describe flights with multiple segments use multiple `FlightReservation` items:

### JSON-LD

```
<script type="application/ld+json">
[
  {
    "@context": "http://schema.org",
    "@type": "FlightReservation",
    "reservationNumber": "RXJ34P",
    "reservationStatus": "http://schema.org/Confirmed",
    "underName": {
      "@type": "Person",
      "name": "Eva Green"
    },
    "reservationFor": {
      "@type": "Flight",
      "flightNumber": "201",
      "airline": {
        "@type": "Airline",
        "name": "United",
        "iataCode": "UA"
      },
      "departureAirport": {
        "@type": "Airport",
        "name": "San Francisco Airport",
        "iataCode": "JFK"
      },
      "departureTime": "2027-03-04T11:00:00-05:00",
      "arrivalAirport": {
        "@type": "Airport",
        "name": "John F. Kennedy International Airport",
        "iataCode": "ORD"
      },
      "arrivalTime": "2027-03-05T13:25:00-06:00"
    },
    "checkinUrl": "http://united.com/onlinecheckin.html"
  },
  {
    "@context": "http://schema.org",
    "@type": "FlightReservation",
    "reservationNumber": "RXJ34P",
    "reservationStatus": "http://schema.org/Confirmed",
    "underName": {
      "@type": "Person",
      "name": "Eva Green"
    },
    "reservationFor": {
      "@type": "Flight",
      "flightNumber": "1050",
      "airline": {
        "@type": "Airline",
        "name": "United",
        "iataCode": "UA"
      },
      "departureAirport": {
        "@type": "Airport",
        "name": "San Francisco Airport",
        "iataCode": "ORD"
      },
      "departureTime": "2027-03-05T14:55:00-06:00",
      "arrivalAirport": {
        "@type": "Airport",
        "name": "John F. Kennedy International Airport",
        "iataCode": "SFO"
      },
      "arrivalTime": "2027-03-05T15:15:00-08:00"
    },
    "checkinUrl": "http://united.com/onlinecheckin.html"
  }
]
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/FlightReservation">
  <meta itemprop="reservationNumber" content="RXJ34P"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="Eva Green"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Flight">
    <meta itemprop="flightNumber" content="201"/>
    <div itemprop="airline" itemscope itemtype="http://schema.org/Airline">
      <meta itemprop="name" content="United"/>
      <meta itemprop="iataCode" content="UA"/>
    </div>
    <div itemprop="departureAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="San Francisco Airport"/>
      <meta itemprop="iataCode" content="JFK"/>
    </div>
    <meta itemprop="departureTime" content="2027-03-04T11:00:00-05:00"/>
    <div itemprop="arrivalAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="John F. Kennedy International Airport"/>
      <meta itemprop="iataCode" content="ORD"/>
    </div>
    <meta itemprop="arrivalTime" content="2027-03-05T13:25:00-06:00"/>
  </div>
  <meta itemprop="modifiedTime" content="2027-03-01T08:30:00-08:00"/>
</div>
<div itemscope itemtype="http://schema.org/FlightReservation">
  <meta itemprop="reservationNumber" content="RXJ34P"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="Eva Green"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Flight">
    <meta itemprop="flightNumber" content="1050"/>
    <div itemprop="airline" itemscope itemtype="http://schema.org/Airline">
      <meta itemprop="name" content="United"/>
      <meta itemprop="iataCode" content="UA"/>
    </div>
    <div itemprop="departureAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="San Francisco Airport"/>
      <meta itemprop="iataCode" content="ORD"/>
    </div>
    <meta itemprop="departureTime" content="2027-03-05T14:55:00-06:00"/>
    <div itemprop="arrivalAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="John F. Kennedy International Airport"/>
      <meta itemprop="iataCode" content="SFO"/>
    </div>
    <meta itemprop="arrivalTime" content="2027-03-05T15:15:00-08:00"/>
  </div>
  <meta itemprop="modifiedTime" content="2027-03-01T08:30:00-08:00"/>
</div>
```

### Multiple passengers

To describe flights with multiple passengers use multiple `FlightReservation` items:

### JSON-LD

```
<script type="application/ld+json">
[
  {
    "@context": "http://schema.org",
    "@type": "FlightReservation",
    "reservationNumber": "RXJ34P",
    "reservationStatus": "http://schema.org/Confirmed",
    "underName": {
      "@type": "Person",
      "name": "John Green"
    },
    "reservationFor": {
      "@type": "Flight",
      "flightNumber": "201",
      "airline": {
        "@type": "Airline",
        "name": "United",
        "iataCode": "UA"
      },
      "departureAirport": {
        "@type": "Airport",
        "name": "John F. Kennedy International Airport",
        "iataCode": "JFK"
      },
      "departureTime": "2027-03-04T11:00:00-05:00",
      "arrivalAirport": {
        "@type": "Airport",
        "name": "O'Hare International Airport",
        "iataCode": "ORD"
      },
      "arrivalTime": "2027-03-05T13:25:00-06:00"
    },
    "checkinUrl": "http://united.com/onlinecheckin.html"
  },
  {
    "@context": "http://schema.org",
    "@type": "FlightReservation",
    "reservationNumber": "RXJ34P",
    "reservationStatus": "http://schema.org/Confirmed",
    "underName": {
      "@type": "Person",
      "name": "John Green"
    },
    "reservationFor": {
      "@type": "Flight",
      "flightNumber": "1050",
      "airline": {
        "@type": "Airline",
        "name": "United",
        "iataCode": "UA"
      },
      "departureAirport": {
        "@type": "Airport",
        "name": "O'Hare International Airport",
        "iataCode": "ORD"
      },
      "departureTime": "2027-03-05T14:55:00-06:00",
      "arrivalAirport": {
        "@type": "Airport",
        "name": "San Francisco Airport",
        "iataCode": "SFO"
      },
      "arrivalTime": "2027-03-05T15:15:00-08:00"
    },
    "checkinUrl": "http://united.com/onlinecheckin.html"
  },
  {
    "@context": "http://schema.org",
    "@type": "FlightReservation",
    "reservationNumber": "RXJ34P",
    "reservationStatus": "http://schema.org/Confirmed",
    "underName": {
      "@type": "Person",
      "name": "Eva Green"
    },
    "reservationFor": {
      "@type": "Flight",
      "flightNumber": "201",
      "airline": {
        "@type": "Airline",
        "name": "United",
        "iataCode": "UA"
      },
      "departureAirport": {
        "@type": "Airport",
        "name": "John F. Kennedy International Airport",
        "iataCode": "JFK"
      },
      "departureTime": "2027-03-04T11:00:00-05:00",
      "arrivalAirport": {
        "@type": "Airport",
        "name": "O'Hare International Airport",
        "iataCode": "ORD"
      },
      "arrivalTime": "2027-03-05T13:25:00-06:00"
    },
    "checkinUrl": "http://united.com/onlinecheckin.html"
  },
  {
    "@context": "http://schema.org",
    "@type": "FlightReservation",
    "reservationNumber": "RXJ34P",
    "reservationStatus": "http://schema.org/Confirmed",
    "underName": {
      "@type": "Person",
      "name": "Eva Green"
    },
    "reservationFor": {
      "@type": "Flight",
      "flightNumber": "1050",
      "airline": {
        "@type": "Airline",
        "name": "United",
        "iataCode": "UA"
      },
      "departureAirport": {
        "@type": "Airport",
        "name": "O'Hare International Airport",
        "iataCode": "ORD"
      },
      "departureTime": "2027-03-05T14:55:00-06:00",
      "arrivalAirport": {
        "@type": "Airport",
        "name": "San Francisco Airport",
        "iataCode": "SFO"
      },
      "arrivalTime": "2027-03-05T15:15:00-08:00"
    },
    "checkinUrl": "http://united.com/onlinecheckin.html"
  }
]
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/FlightReservation">
  <meta itemprop="reservationNumber" content="RXJ34P"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Green"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Flight">
    <meta itemprop="flightNumber" content="201"/>
    <div itemprop="airline" itemscope itemtype="http://schema.org/Airline">
      <meta itemprop="name" content="United"/>
      <meta itemprop="iataCode" content="UA"/>
    </div>
    <div itemprop="departureAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="John F. Kennedy International Airport"/>
      <meta itemprop="iataCode" content="JFK"/>
    </div>
    <meta itemprop="departureTime" content="2027-03-04T11:00:00-05:00"/>
    <div itemprop="arrivalAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="O'Hare International Airport"/>
      <meta itemprop="iataCode" content="ORD"/>
    </div>
    <meta itemprop="arrivalTime" content="2027-03-05T13:25:00-06:00"/>
  </div>
  <meta itemprop="modifiedTime" content="2027-03-01T08:30:00-08:00"/>
</div>
<div itemscope itemtype="http://schema.org/FlightReservation">
  <meta itemprop="reservationNumber" content="RXJ34P"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Green"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Flight">
    <meta itemprop="flightNumber" content="1050"/>
    <div itemprop="airline" itemscope itemtype="http://schema.org/Airline">
      <meta itemprop="name" content="United"/>
      <meta itemprop="iataCode" content="UA"/>
    </div>
    <div itemprop="departureAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="O'Hare International Airport"/>
      <meta itemprop="iataCode" content="ORD"/>
    </div>
    <meta itemprop="departureTime" content="2027-03-05T14:55:00-06:00"/>
    <div itemprop="arrivalAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="San Francisco Airport"/>
      <meta itemprop="iataCode" content="SFO"/>
    </div>
    <meta itemprop="arrivalTime" content="2027-03-05T15:15:00-08:00"/>
  </div>
  <meta itemprop="modifiedTime" content="2027-03-01T08:30:00-08:00"/>
</div>
<div itemscope itemtype="http://schema.org/FlightReservation">
  <meta itemprop="reservationNumber" content="RXJ34P"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="Eva Green"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Flight">
    <meta itemprop="flightNumber" content="201"/>
    <div itemprop="airline" itemscope itemtype="http://schema.org/Airline">
      <meta itemprop="name" content="United"/>
      <meta itemprop="iataCode" content="UA"/>
    </div>
    <div itemprop="departureAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="John F. Kennedy International Airport"/>
      <meta itemprop="iataCode" content="JFK"/>
    </div>
    <meta itemprop="departureTime" content="2027-03-04T11:00:00-05:00"/>
    <div itemprop="arrivalAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="O'Hare International Airport"/>
      <meta itemprop="iataCode" content="ORD"/>
    </div>
    <meta itemprop="arrivalTime" content="2027-03-05T13:25:00-06:00"/>
  </div>
  <meta itemprop="modifiedTime" content="2027-03-01T08:30:00-08:00"/>
</div>
<div itemscope itemtype="http://schema.org/FlightReservation">
  <meta itemprop="reservationNumber" content="RXJ34P"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="Eva Green"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Flight">
    <meta itemprop="flightNumber" content="1050"/>
    <div itemprop="airline" itemscope itemtype="http://schema.org/Airline">
      <meta itemprop="name" content="United"/>
      <meta itemprop="iataCode" content="UA"/>
    </div>
    <div itemprop="departureAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="O'Hare International Airport"/>
      <meta itemprop="iataCode" content="ORD"/>
    </div>
    <meta itemprop="departureTime" content="2027-03-05T14:55:00-06:00"/>
    <div itemprop="arrivalAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="San Francisco Airport"/>
      <meta itemprop="iataCode" content="SFO"/>
    </div>
    <meta itemprop="arrivalTime" content="2027-03-05T15:15:00-08:00"/>
  </div>
  <meta itemprop="modifiedTime" content="2027-03-01T08:30:00-08:00"/>
</div>
```

### Example with all supported fields

For reference, here is a example with all supported fields populated:

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "FlightReservation",
  "reservationNumber": "RXJ34P",
  "reservationStatus": "http://schema.org/Confirmed",
  "url": "http://cheapair.com/view/RXJ34P",
  "underName": {
    "@type": "Person",
    "name": "Eva Green",
    "email": "eva@mail.com"
  },
  "bookingAgent": {
    "@type": "Organization",
    "name": "Cheap Air Travel",
    "url": "http://cheapair.com/"
  },
  "bookingTime": "2027-01-14T13:05:00-05:00",
  "modifiedTime": "2027-03-14T13:05:00-05:00",
  "programMembership": {
    "@type": "ProgramMembership",
    "memberNumber": "4BY123111",
    "program": "StarAlliance"
  },
  "confirmReservationUrl": "http://cheapair.com/confirm?id=RXJ34P",
  "cancelReservationUrl": "http://cheapair.com/cancel?id=RXJ34P",
  "modifyReservationUrl": "http://cheapair.com/edit?id=RXJ34P",
  "checkinUrl": "http://united.com/onlinecheckin.html",
  "potentialAction": [
    {
      "@type": "ConfirmAction",
      "target": "http://cheapair.com/confirm?id=RXJ34P"
    },
    {
      "@type": "CancelAction",
      "target": "http://cheapair.com/cancel?id=RXJ34P"
    },
    {
      "@type": "EditAction",
      "target": "http://cheapair.com/edit?id=RXJ34P"
    },
    {
      "@type": "CheckInAction",
      "target": "http://united.com/onlinecheckin.html"
    }
  ],
  "reservationFor": {
    "@type": "Flight",
    "flightNumber": "110",
    "airline": {
      "@type": "Airline",
      "name": "United",
      "iataCode": "UA"
    },
    "operatedBy": {
      "@type": "Airline",
      "name": "Continental Airlines",
      "iataCode": "CO"
    },
    "departureAirport": {
      "@type": "Airport",
      "name": "San Francisco Airport",
      "iataCode": "SFO"
    },
    "departureTime": "2027-03-04T20:15:00-08:00",
    "departureGate": "11",
    "departureTerminal": "B",
    "arrivalAirport": {
      "@type": "Airport",
      "name": "John F. Kennedy International Airport",
      "iataCode": "JFK"
    },
    "arrivalTime": "2027-03-05T06:30:00-05:00",
    "arrivalGate": "32",
    "arrivalTerminal": "B",
    "webCheckinTime": "2027-03-03T20:00:00-08:00",
    "boardingTime": "2027-03-04T19:15:00-08:00"
  },
  "ticketNumber": "123XYZ",
  "ticketDownloadUrl": "http://cheapair.com/download/RXJ34P.pdf",
  "ticketPrintUrl": "http://cheapair.com/print/RXJ34P.html",
  "ticketToken": "qrCode:123456789",
  "additionalTicketText": "Some ticket details, terms and conditions...",
  "airplaneSeat": "9A",
  "airplaneSeatClass": {
    "@type": "AirplaneSeatClass",
    "name": "Business"
  },
  "boardingGroup": "B"
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/FlightReservation">
  <meta itemprop="reservationNumber" content="RXJ34P"/>
  <link itemprop="reservationStatus" href="http://schema.org/Confirmed"/>
  <link itemprop="url" href="http://cheapair.com/view/RXJ34P"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="Eva Green"/>
    <meta itemprop="email" content="eva@mail.com"/>
  </div>
  <div itemprop="bookingAgent" itemscope itemtype="http://schema.org/Organization">
    <meta itemprop="name" content="Cheap Air Travel"/>
    <link itemprop="url" href="http://cheapair.com/"/>
  </div>
  <meta itemprop="bookingTime" content="2027-01-14T13:05:00-05:00"/>
  <meta itemprop="modifiedTime" content="2027-03-14T13:05:00-05:00"/>
  <div itemprop="programMembership" itemscope itemtype="http://schema.org/ProgramMembership">
    <meta itemprop="memberNumber" content="4BY123111"/>
    <meta itemprop="program" content="StarAlliance"/>
  </div>
  <link itemprop="confirmReservationUrl" href="http://cheapair.com/confirm?id=RXJ34P"/>
  <link itemprop="cancelReservationUrl" href="http://cheapair.com/cancel?id=RXJ34P"/>
  <link itemprop="modifyReservationUrl" href="http://cheapair.com/edit?id=RXJ34P"/>
  <link itemprop="checkinUrl" href="http://united.com/onlinecheckin.html"/>
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/ConfirmAction">
    <link itemprop="target" href="http://cheapair.com/confirm?id=RXJ34P"/>
  </div>
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/CancelAction"> 
    <link itemprop="target" href="http://cheapair.com/cancel?id=RXJ34P"/>
  </div>
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/EditAction"> 
    <link itemprop="target" href="http://cheapair.com/edit?id=RXJ34P"/>
  </div>
  <div itemprop="potentialAction" itemscope itemtype="http://schema.org/CheckInAction"> 
    <link itemprop="target" href="http://united.com/onlinecheckin.html"/>
  </div>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Flight">
    <meta itemprop="flightNumber" content="110"/>
    <div itemprop="airline" itemscope itemtype="http://schema.org/Airline">
      <meta itemprop="name" content="United"/>
      <meta itemprop="iataCode" content="UA"/>
    </div>
    <div itemprop="operatedBy" itemscope itemtype="http://schema.org/Airline">
      <meta itemprop="name" content="Continental Airlines"/>
      <meta itemprop="iataCode" content="CO"/>
    </div>
    <div itemprop="departureAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="San Francisco Airport"/>
      <meta itemprop="iataCode" content="SFO"/>
    </div>
    <meta itemprop="departureTime" content="2027-03-04T20:15:00-08:00"/>
    <meta itemprop="departureGate" content="11"/>
    <meta itemprop="departureTerminal" content="B"/>
    <div itemprop="arrivalAirport" itemscope itemtype="http://schema.org/Airport">
      <meta itemprop="name" content="John F. Kennedy International Airport"/>
      <meta itemprop="iataCode" content="JFK"/>
    </div>
    <meta itemprop="arrivalTime" content="2027-03-05T06:30:00-05:00"/>
    <meta itemprop="arrivalGate" content="32"/>
    <meta itemprop="arrivalTerminal" content="B"/>
    <meta itemprop="webCheckinTime" content="2027-03-03T20:00:00-08:00"/>
    <meta itemprop="boardingTime" content="2027-03-04T19:15:00-08:00"/>
  </div>
  <meta itemprop="ticketNumber" content="123XYZ"/>
  <link itemprop="ticketDownloadUrl" href="http://cheapair.com/download/RXJ34P.pdf"/>
  <link itemprop="ticketPrintUrl" href="http://cheapair.com/print/RXJ34P.html"/>
  <meta itemprop="ticketToken" content="qrCode:123456789"/>
  <meta itemprop="additionalTicketText" content="Some ticket details, terms and conditions..."/>
  <meta itemprop="airplaneSeat" content="9A"/>
  <div itemprop="airplaneSeatClass" itemscope itemtype="http://schema.org/AirplaneSeatClass">
    <meta itemprop="name" content="Business"/>
  </div>
  <meta itemprop="boardingGroup" content="B"/>
</div>
```

## Test your markup

You can validate your markup using the [Email Markup Tester Tool](https://www.google.com/webmasters/markup-tester/). Paste in your markup code and click the **Validate** button to scan the content and receive a report on any errors present.

## Specification

Review the details of your email to see if any of these properties apply to your flight reservation. By marking up these additional properties you allow Google to display a much richer description of the flight reservation to the user.

Type name: [FlightReservation](https://developers.google.com/workspace/gmail/markup/reference/types/FlightReservation)

Extends [Reservation](https://developers.google.com/workspace/gmail/markup/reference/types/Reservation)

| Name | Type | Description |
| --- | --- | --- |
| **additionalTicketText** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Additional information about the boarding pass. |
| **airplaneSeat** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The location of the reserved seat (e.g., 27B). |
| **airplaneSeatClass** |  | The cabin/class of the airplaneSeat. |
| airplaneSeatClass.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the AirplaneSeatClass. |
| **boardingGroup** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The airline-specific indicator of boarding order / preference. |
| **bookingAgent** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the agent/service. |
| bookingAgent.**url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Website of the agent/service. |
| **bookingTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Date the reservation was made. |
| **modifiedTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | (recommended for Confirmation Cards/Search Answers) Time the reservation was last modified. |
| **potentialAction** | , [ConfirmAction](https://developers.google.com/workspace/gmail/markup/reference/types/ConfirmAction), [CancelAction](https://developers.google.com/workspace/gmail/markup/reference/types/CancelAction) or [CheckInAction](https://developers.google.com/workspace/gmail/markup/reference/types/CheckInAction) | Action that can be performed on the reservation. |
| potentialAction.**target** | [EntryPoint](https://developers.google.com/workspace/gmail/markup/reference/types/EntryPoint) | Specifies a handler to process the action, typically a simple URL. |
| **programMembership** | [ProgramMembership](https://developers.google.com/workspace/gmail/markup/reference/types/ProgramMembership) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.**memberNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The identifier of the membership. |
| programMembership.**program** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The name of the program. |
| **reservationFor****   (Required)** | [Flight](https://developers.google.com/workspace/gmail/markup/reference/types/Flight) | The flight the reservation is for. |
| reservationFor.**airline****   (Required)** | [Airline](https://developers.google.com/workspace/gmail/markup/reference/types/Airline) | The airline providing the flight. |
| reservationFor.airline.**iataCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The IATA code for the airline. |
| reservationFor.airline.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Airline. |
| reservationFor.**arrivalAirport****   (Required)** | [Airport](https://developers.google.com/workspace/gmail/markup/reference/types/Airport) | The final destination of the flight. Also accepts a string (e.g. "John F. Kennedy International Airport JFK"). |
| reservationFor.arrivalAirport.**iataCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The IATA code for the airport (e.g. 'UA'). |
| reservationFor.arrivalAirport.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Airport. |
| reservationFor.**arrivalGate** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Identifier of the airport arrival gate of the flight. |
| reservationFor.**arrivalTerminal** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The airport terminal of the arrivalGate. |
| reservationFor.**arrivalTime****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Expected time of arrival. |
| reservationFor.**boardingTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Time when boarding will commence. |
| reservationFor.**departureAirport****   (Required)** | [Airport](https://developers.google.com/workspace/gmail/markup/reference/types/Airport) | The departure airport for the flight. Also accepts a string (e.g. "San Francisco Airport SFO"). |
| reservationFor.departureAirport.**iataCode****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The IATA code for the airport (e.g. 'UA'). |
| reservationFor.departureAirport.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Airport. |
| reservationFor.**departureGate** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Identifier of the airport departure gate of the flight. |
| reservationFor.**departureTerminal** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The airport terminal of the departureGate. |
| reservationFor.**departureTime****   (Required)** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Expected time of departure. |
| reservationFor.**flightNumber****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Flight identifier. |
| reservationFor.**operatedBy** | [Airline](https://developers.google.com/workspace/gmail/markup/reference/types/Airline) | The airline operating the flight. |
| reservationFor.operatedBy.**iataCode** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The IATA code for the airline. |
| reservationFor.operatedBy.**name** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Airline. |
| reservationFor.**webCheckinTime** | [DateTime](https://developers.google.com/workspace/gmail/markup/reference/types/DateTime) | Earliest time for web checking. |
| **reservationNumber****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the reservation. |
| **reservationStatus****   (Required)** | [ReservationStatus](https://developers.google.com/workspace/gmail/markup/reference/types/ReservationStatus) | Current status of the reservation. |
| **ticketDownloadUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Where the boarding pass can be downloaded. |
| **ticketNumber** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | The number or id of the ticket. |
| **ticketPrintUrl** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Where the boarding pass can be printed. |
| **ticketToken** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) or [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| **underName****   (Required)** | [Organization](https://developers.google.com/workspace/gmail/markup/reference/types/Organization) or [Person](https://developers.google.com/workspace/gmail/markup/reference/types/Person) | The passenger. |
| underName.**email** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Email address. |
| underName.**name****   (Required)** | [Text](https://developers.google.com/workspace/gmail/markup/reference/types/Text) | Name of the Person. |
| **url** | [URL](https://developers.google.com/workspace/gmail/markup/reference/types/URL) | Web page where reservation can be viewed. |
