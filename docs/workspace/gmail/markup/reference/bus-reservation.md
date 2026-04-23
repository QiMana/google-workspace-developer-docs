---
source: https://developers.google.com/workspace/gmail/markup/reference/bus-reservation
root: workspace
fetched_at: 2026-04-23T15:29:10.087Z
---

# Bus Reservation

## Use cases

The following use cases show common examples of how the `BusReservation` schema is used. Use these examples to ensure that your markup is properly structured.

### Basic reservation confirmation

Embed the following markup in your email when you send a reservation confirmation.

The Google app will display the reservation details on the day of the journey and will notify the user of the time to leave to get to the bus stop on time (taking into account the transport mode, traffic etc). If you provide a check-in URL like in the example below, the Google app will display this to the user 24 hours prior to the trip to the user.

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "BusReservation",
  "reservationNumber": "123456",
  "underName": {
    "@type": "Person",
    "name": "John Smith"
  },
  "reservationStatus": "http://schema.org/ReservationConfirmed",
  "reservationFor": {
    "@type": "BusTrip",
    "busCompany": {
      "@type": "Organization",
      "name": "Bolt NYC"
    },
    "departureBusStop": {
      "@type": "BusStop",
      "name": "Port Authority, NYC"
    },
    "departureTime": "2017-01-04T12:30:00-05:00",
    "arrivalBusStop": {
      "@type": "BusStop",
      "name": "Boston South Station"
    },
    "arrivalTime": "2017-01-04T17:10:00-05:00"
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/BusReservation">
  <meta itemprop="reservationNumber" content="123456"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
  </div>
  <link itemprop="reservationStatus" href="http://schema.org/ReservationConfirmed"/>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/BusTrip">
    <div itemprop="busCompany" itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="Bolt NYC"/>
    </div>
    <div itemprop="departureBusStop" itemscope itemtype="http://schema.org/BusStop">
      <meta itemprop="name" content="Port Authority, NYC"/>
    </div>
    <meta itemprop="departureTime" content="2017-01-04T12:30:00-05:00"/>
    <div itemprop="arrivalBusStop" itemscope itemtype="http://schema.org/BusStop">
      <meta itemprop="name" content="Boston South Station"/>
    </div>
    <meta itemprop="arrivalTime" content="2017-01-04T17:10:00-05:00"/>
  </div>
</div>
```

### Boarding pass and ticket

In addition to a reservation confirmation you may trigger a Confirmation Card boarding pass in a separate email.

Confirmation cards can not only help the user get to the bus stop on time, but also surface the ticket to the user during the journey. For this, some additional fields need to be included in the markup. If there are additional fields required to board passengers, include them in the `additionalTicketText` field.

For tickets with no reserved seating, these fields are: `numSeats`, `ticketNumber`, `ticketToken`

### JSON-LD

```
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "BusReservation",
  "reservationNumber": "123456",
  "underName": {
    "@type": "Person",
    "name": "John Smith"
  },
  "reservationStatus": "http://schema.org/ReservationConfirmed",
  "reservationFor": {
    "@type": "BusTrip",
    "busCompany": "Bolt NYC",
    "departureBusStop": {
      "@type": "BusStop",
      "name": "Port Authority, NYC"
    },
    "departureTime": "2017-01-04T12:30:00-05:00",
    "arrivalBusStop": {
      "@type": "BusStop",
      "name": "Boston South Station"
    },
    "arrivalTime": "2017-01-04T17:10:00-05:00"
  },
  "reservedTicket": {
    "@type": "Ticket",
    "underName": "John Smith",
    "ticketNumber": "123XYZ",
    "ticketToken": "aztecCode:AB34",
    "additionalTicketText": "We recommend that you arrive at the station at least 30 minutes prior to your scheduled departure. Allow additional time if you need help with baggage or tickets."
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/BusReservation">
  <meta itemprop="reservationNumber" content="123456"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
  </div>
  <link itemprop="reservationStatus" href="http://schema.org/ReservationConfirmed"/>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/BusTrip">
    <meta itemprop="busCompany" content="Bolt NYC"/>
    <div itemprop="departureBusStop" itemscope itemtype="http://schema.org/BusStop">
      <meta itemprop="name" content="Port Authority, NYC"/>
    </div>
    <meta itemprop="departureTime" content="2017-01-04T12:30:00-05:00"/>
    <div itemprop="arrivalBusStop" itemscope itemtype="http://schema.org/BusStop">
      <meta itemprop="name" content="Boston South Station"/>
    </div>
    <meta itemprop="arrivalTime" content="2017-01-04T17:10:00-05:00"/>
  </div>
  <div itemprop="reservedTicket" itemscope itemtype="http://schema.org/Ticket">
    <meta itemprop="underName" content="John Smith"/>
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
  "@type": "BusReservation",
  "reservationNumber": "123456",
  "underName": {
    "@type": "Person",
    "name": "John Smith"
  },
  "reservationStatus": "http://schema.org/ReservationConfirmed",
  "reservationFor": {
    "@type": "BusTrip",
    "busCompany": "Bolt NYC",
    "departureBusStop": {
      "@type": "BusStop",
      "name": "Port Authority, NYC"
    },
    "departureTime": "2017-01-04T12:30:00-05:00",
    "arrivalBusStop": {
      "@type": "BusStop",
      "name": "Boston South Station"
    },
    "arrivalTime": "2017-01-04T17:10:00-05:00"
  },
  "reservedTicket": {
    "@type": "Ticket",
    "underName": "John Smith",
    "ticketedSeat": {
      "@type": "Seat",
      "seatNumber": "27B",
      "seatingType": "Coach"
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
<div itemscope itemtype="http://schema.org/BusReservation">
  <meta itemprop="reservationNumber" content="123456"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
  </div>
  <link itemprop="reservationStatus" href="http://schema.org/ReservationConfirmed"/>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/BusTrip">
    <meta itemprop="busCompany" content="Bolt NYC"/>
    <div itemprop="departureBusStop" itemscope itemtype="http://schema.org/BusStop">
      <meta itemprop="name" content="Port Authority, NYC"/>
    </div>
    <meta itemprop="departureTime" content="2017-01-04T12:30:00-05:00"/>
    <div itemprop="arrivalBusStop" itemscope itemtype="http://schema.org/BusStop">
      <meta itemprop="name" content="Boston South Station"/>
    </div>
    <meta itemprop="arrivalTime" content="2017-01-04T17:10:00-05:00"/>
  </div>
  <div itemprop="reservedTicket" itemscope itemtype="http://schema.org/Ticket">
    <meta itemprop="underName" content="John Smith"/>
    <div itemprop="ticketedSeat" itemscope itemtype="http://schema.org/Seat">
      <meta itemprop="seatNumber" content="27B"/>
      <meta itemprop="seatingType" content="Coach"/>
    </div>
    <meta itemprop="ticketNumber" content="123XYZ"/>
    <meta itemprop="ticketToken" content="aztecCode:AB34"/>
    <meta itemprop="additionalTicketText" content="We recommend that you arrive at the station at least 30 minutes prior to your scheduled departure. Allow additional time if you need help with baggage or tickets."/>
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
  "@type": "BusReservation",
  "reservationNumber": "123456",
  "url": "http://boltbus.com/view/123456",
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
    "name": "Bolt Bus NYC",
    "url": "http://boltbus.com/"
  },
  "bookingTime": "2013-01-14T13:05:00-05:00",
  "modifiedTime": "2013-03-14T13:05:00-05:00",
  "confirmReservationUrl": "http://boltbus.com/confirm?id=123456",
  "cancelReservationUrl": "http://boltbus.com/cancel?id=123456",
  "modifyReservationUrl": "http://boltbus.com/edit?id=123456",
  "checkinUrl": "http://boltbus.com/checkin?id=AB3XY2",
  "reservationStatus": "http://schema.org/ReservationConfirmed",
  "reservationFor": {
    "@type": "BusTrip",
    "name": "?",
    "busNumber": "63",
    "busName": "Bolt Bus NY:Boston",
    "busCompany": {
      "@type": "Organization",
      "name": "Bolt NYC"
    },
    "departureBusStop": {
      "@type": "BusStop",
      "name": "Port Authority, NYC",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "625 8th Avenue",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10018",
        "addressCountry": "USA"
      },
      "directions": "Bus terminals are at floors 2-4 of the Port Authority building"
    },
    "departureTime": "2017-01-04T12:30:00-05:00",
    "arrivalBusStop": {
      "@type": "BusStop",
      "name": "Boston South Station",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Summer St.",
        "addressLocality": "Boston",
        "addressRegion": "MA",
        "postalCode": "02111",
        "addressCountry": "USA"
      },
      "directions": "Bus stops are at thewest side of the train station."
    },
    "arrivalTime": "2017-01-04T17:10:00-05:00"
  },
  "reservedTicket": {
    "@type": "Ticket",
    "ticketNumber": "123XYZ",
    "downloadUrl": "?",
    "printUrl": "?",
    "ticketToken": "qrCode:123456789",
    "additionalTicketText": "?",
    "price": "45.00",
    "priceCurrency": "USD",
    "underName": {
      "@type": "Person",
      "name": "Mary Smith"
    },
    "ticketedSeat": {
      "@type": "Seat",
      "seatingType": "Coach",
      "seatNumber": "27",
      "seatRow": "A"
    }
  }
}
</script>
```

### Microdata

```
<div itemscope itemtype="http://schema.org/BusReservation">
  <meta itemprop="reservationNumber" content="123456"/>
  <link itemprop="url" href="http://boltbus.com/view/123456"/>
  <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
    <meta itemprop="name" content="John Smith"/>
    <meta itemprop="email" content="john@mail.com"/>
  </div>
  <div itemprop="programMembership" itemscope itemtype="http://schema.org/ProgramMembership">
    <meta itemprop="memberNumber" content="12345"/>
    <meta itemprop="program" content="STA"/>
  </div>
  <div itemprop="bookingAgent" itemscope itemtype="http://schema.org/Organization">
    <meta itemprop="name" content="Bolt Bus NYC"/>
    <link itemprop="url" href="http://boltbus.com/"/>
  </div>
  <meta itemprop="bookingTime" content="2013-01-14T13:05:00-05:00"/>
  <meta itemprop="modifiedTime" content="2013-03-14T13:05:00-05:00"/>
  <link itemprop="confirmReservationUrl" href="http://boltbus.com/confirm?id=123456"/>
  <link itemprop="cancelReservationUrl" href="http://boltbus.com/cancel?id=123456"/>
  <link itemprop="modifyReservationUrl" href="http://boltbus.com/edit?id=123456"/>
  <link itemprop="checkinUrl" href="http://boltbus.com/checkin?id=AB3XY2"/>
  <link itemprop="reservationStatus" href="http://schema.org/ReservationConfirmed"/>
  <div itemprop="reservationFor" itemscope itemtype="http://schema.org/BusTrip">
    <meta itemprop="name" content="?"/>
    <meta itemprop="busNumber" content="63"/>
    <meta itemprop="busName" content="Bolt Bus NY:Boston"/>
    <div itemprop="busCompany" itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" content="Bolt NYC"/>
    </div>
    <div itemprop="departureBusStop" itemscope itemtype="http://schema.org/BusStop">
      <meta itemprop="name" content="Port Authority, NYC"/>
      <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <meta itemprop="streetAddress" content="625 8th Avenue"/>
        <meta itemprop="addressLocality" content="New York"/>
        <meta itemprop="addressRegion" content="NY"/>
        <meta itemprop="postalCode" content="10018"/>
        <meta itemprop="addressCountry" content="USA"/>
      </div>
      <meta itemprop="directions" content="Bus terminals are at floors 2-4 of the Port Authority building"/>
    </div>
    <meta itemprop="departureTime" content="2017-01-04T12:30:00-05:00"/>
    <div itemprop="arrivalBusStop" itemscope itemtype="http://schema.org/BusStop">
      <meta itemprop="name" content="Boston South Station"/>
      <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <meta itemprop="streetAddress" content="Summer St."/>
        <meta itemprop="addressLocality" content="Boston"/>
        <meta itemprop="addressRegion" content="MA"/>
        <meta itemprop="postalCode" content="02111"/>
        <meta itemprop="addressCountry" content="USA"/>
      </div>
      <meta itemprop="directions" content="Bus stops are at thewest side of the train station."/>
    </div>
    <meta itemprop="arrivalTime" content="2017-01-04T17:10:00-05:00"/>
  </div>
  <div itemprop="reservedTicket" itemscope itemtype="http://schema.org/Ticket">
    <meta itemprop="ticketNumber" content="123XYZ"/>
    <meta itemprop="downloadUrl" content="?"/>
    <meta itemprop="printUrl" content="?"/>
    <meta itemprop="ticketToken" content="qrCode:123456789"/>
    <meta itemprop="additionalTicketText" content="?"/>
    <meta itemprop="price" content="45.00"/>
    <meta itemprop="priceCurrency" content="USD"/>
    <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
      <meta itemprop="name" content="Mary Smith"/>
    </div>
    <div itemprop="ticketedSeat" itemscope itemtype="http://schema.org/Seat">
      <meta itemprop="seatingType" content="Coach"/>
      <meta itemprop="seatNumber" content="27"/>
      <meta itemprop="seatRow" content="A"/>
    </div>
  </div>
</div>
```

## Test your markup

You can validate your markup using the [Email Markup Tester Tool](https://www.google.com/webmasters/markup-tester/). Paste in your markup code and click the **Validate** button to scan the content and receive a report on any errors present.

## Specification

Review the details of your email to see if any of these properties apply to your bus reservation. By marking up these additional properties you allow Google to display a much richer description of the bus reservation to the user.

| Property | Type | Description |
| --- | --- | --- |
| reservationNumber | Text | (**required**) The number or id of the reservation. |
| url | URL | Web page where reservation can be viewed. |
| underName | [Person](./types/Person.md) or [Organization](./types/Organization.md) | (**required**) The passenger. |
| underName.name | Text | (**required**) Name of the Person. |
| underName.email | Text | Email address. |
| programMembership | [ProgramMembership](./types/ProgramMembership.md) | Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation. |
| programMembership.memberNumber | Text | The identifier of the membership. |
| programMembership.program | Text | The name of the program. |
| bookingAgent | [Organization](./types/Organization.md) or [Person](./types/Person.md) | Booking agent or agency. Also accepts a string (e.g. ""). |
| bookingAgent.name | Text | Name of the agent/service. |
| bookingAgent.url | URL | Website of the agent/service. |
| bookingTime | [DateTime](./types/DateTime.md) | Date the reservation was made. |
| modifiedTime | [DateTime](./types/DateTime.md) | (**recommended for confirmation cards/Search Answers**) Time the reservation was last modified. |
| confirmReservationUrl | URL | Web page where reservation can be confirmed. |
| cancelReservationUrl | URL | Web page where reservation can be cancelled. |
| modifyReservationUrl | URL | (**recommended for confirmation cards/Search Answers**) Web page where reservation can be modified. |
| checkinUrl | URL | Webpage where the passenger can check in. |
| reservationStatus | [ReservationStatus](./types/ReservationStatus.md) | (**required**) Current status of the reservation. |
| reservationFor | [BusTrip](./types/BusTrip.md) | (**required**) Information about the bus trip. |
| reservationFor.name | Text | Name of the BusTrip. |
| reservationFor.busNumber | Text | e.g. 101. |
| reservationFor.busName | Text | e.g. Bolt Express. |
| reservationFor.busCompany | [Organization](./types/Organization.md) | (**required**) e.g. Bolt NYC. Also accepts a string (e.g. "Bolt NYC"). |
| reservationFor.busCompany.name | Text | (**required**) Name of the Organization. |
| reservationFor.departureBusStop | [BusStop](./types/BusStop.md) or [BusStation](./types/BusStation.md) | (**required**) Where the bus departs from. |
| reservationFor.departureBusStop.name | Text | (**required**) Name of the BusStop. |
| reservationFor.departureBusStop.address | [PostalAddress](./types/PostalAddress.md) | Address of the departure bus stop / station. |
| reservationFor.departureBusStop.address.streetAddress | Text | (**recommended for confirmation cards/Search Answers**) Street address of departure bus stop / station. |
| reservationFor.departureBusStop.address.addressLocality | Text | (**recommended for confirmation cards/Search Answers**) Locality (e.g. city) of departure bus stop / station. |
| reservationFor.departureBusStop.address.addressRegion | Text | (**recommended for confirmation cards/Search Answers**) Region (e.g. State) of departure bus stop / station. |
| reservationFor.departureBusStop.address.postalCode | Text | (**recommended for confirmation cards/Search Answers**) Postal code of departure bus stop / station. |
| reservationFor.departureBusStop.address.addressCountry | Text or [Country](./types/Country.md) | (**recommended for confirmation cards/Search Answers**) Country of departure bus stop / station. |
| reservationFor.departureBusStop.directions | Text | Directions to the bus stop. |
| reservationFor.departureTime | [DateTime](./types/DateTime.md) | (**required**) Bus departure time. |
| reservationFor.arrivalBusStop | [BusStop](./types/BusStop.md) or [BusStation](./types/BusStation.md) | (**required**) Where the bus arrives at. |
| reservationFor.arrivalBusStop.name | Text | (**required**) Name of the BusStop. |
| reservationFor.arrivalBusStop.address | [PostalAddress](./types/PostalAddress.md) | Address of the arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.streetAddress | Text | (**recommended for confirmation cards/Search Answers**) Street address of arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.addressLocality | Text | (**recommended for confirmation cards/Search Answers**) Locality (e.g. city) of arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.addressRegion | Text | (**recommended for confirmation cards/Search Answers**) Region (e.g. State) of arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.postalCode | Text | (**recommended for confirmation cards/Search Answers**) Postal code of arrival bus stop / station. |
| reservationFor.arrivalBusStop.address.addressCountry | Text or [Country](./types/Country.md) | (**recommended for confirmation cards/Search Answers**) Country of arrival bus stop / station. |
| reservationFor.arrivalBusStop.directions | Text | Directions to the bus stop. |
| reservationFor.arrivalTime | [DateTime](./types/DateTime.md) | (**required**) Bus arrival time. |
| reservedTicket | [Ticket](./types/Ticket.md) | Ticket information. |
| reservedTicket.ticketNumber | Text | The number or id of the ticket. |
| reservedTicket.downloadUrl | URL | . |
| reservedTicket.printUrl | URL | . |
| reservedTicket.ticketToken | Text or URL | If the barcode image is hosted on your site, the value of the field is URL of the image, or a barcode or QR URI, such as "barcode128:AB34" (ISO-15417 barcodes), "qrCode:AB34" (QR codes), "aztecCode:AB34" (Aztec codes), "barcodeEAN:1234" (EAN codes) and "barcodeUPCA:1234" (UPCA codes). |
| reservedTicket.additionalTicketText | Text | Additional explanatory text about the ticket. |
| reservedTicket.price | Text | Total price of the ticket. |
| reservedTicket.priceCurrency | Text | The currency (in 3-letter ISO 4217 format) of the ticket's price. |
| reservedTicket.underName | [Person](./types/Person.md) or [Organization](./types/Organization.md) | The Person or Organization the ticket is for. |
| reservedTicket.underName.name | Text | Name of the Person. |
| reservedTicket.ticketedSeat | [Seat](./types/Seat.md) | The location of the reserved seat (e.g., 27B).. |
| reservedTicket.ticketedSeat.seatingType | Text | The type/class of the seat. |
| reservedTicket.ticketedSeat.seatNumber | Text | The location of the reserved seat. |
| reservedTicket.ticketedSeat.seatRow | Text | The row location of the reserved seat. |
