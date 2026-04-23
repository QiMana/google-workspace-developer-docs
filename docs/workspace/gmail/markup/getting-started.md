---
source: https://developers.google.com/workspace/gmail/markup/getting-started
root: workspace
fetched_at: 2026-04-23T15:29:08.264Z
---

# Get Started

Email markup uses structured data in emails to work. Gmail supports both [JSON-LD](./reference/formats/json-ld.md) and [Microdata](./reference/formats/microdata.md) and you can use either of them to markup information in email. This lets Google understand the fields and provide the user with relevant search results, actions, and cards. For example, if the email is about an event reservation, you might want to annotate the start time, venue, number of tickets, and all other information that defines the reservation.

## Your first markup

Let's say you are responsible for sending out Google I/O 2013 tickets to participants and you want to use markup semantic information in these emails. At the very least, your ticket confirmation email will contain HTML like the following:

```
<html>
  <body>
    <p>
      Dear John, thanks for booking your Google I/O ticket with us.
    </p>
    <p>
      BOOKING DETAILS<br/>
      Order for: John Smith<br/>
      Event: Google I/O 2013<br/>
      When: May 15th 2013 8:30am PST<br/>
      Venue: Moscone Center, 800 Howard St., San Francisco, CA 94103<br/>
      Reservation number: IO12345<br/>
    </p>
  </body>
</html>
```

Marking up this email is very easy. Relevant pieces of information in the email body can be added anywhere inside the `body` of the email's HTML in a structured form corresponding to one of the supported formats. The following code block shows what the marked-up email looks like:

### JSON-LD

```
<html>
  <body>
    <script type="application/ld+json">
    {
      "@context":              "http://schema.org",
      "@type":                 "EventReservation",
      "reservationNumber":     "IO12345",
      "underName": {
        "@type":               "Person",
        "name":                "John Smith"
      },
      "reservationFor": {
        "@type":               "Event",
        "name":                "Google I/O 2013",
        "startDate":           "2013-05-15T08:30:00-08:00",
        "location": {
          "@type":             "Place",
          "name":              "Moscone Center",
          "address": {
            "@type":           "PostalAddress",
            "streetAddress":   "800 Howard St.",
            "addressLocality": "San Francisco",
            "addressRegion":   "CA",
            "postalCode":      "94103",
            "addressCountry":  "US"
          }
        }
      }
    }
    </script>
    <p>
      Dear John, thanks for booking your Google I/O ticket with us.
    </p>
    <p>
      BOOKING DETAILS<br/>
      Reservation number: IO12345<br/>
      Order for: John Smith<br/>
      Event: Google I/O 2013<br/>
      Start time: May 15th 2013 8:00am PST<br/>
      Venue: Moscone Center, 800 Howard St., San Francisco, CA 94103<br/>
    </p>
  </body>
</html>
```

### Microdata

```
<html>
  <body>
    <div itemscope itemtype="http://schema.org/EventReservation">
      <meta itemprop="reservationNumber" content="IO12345"/>
      <div itemprop="underName" itemscope itemtype="http://schema.org/Person">
        <meta itemprop="name" content="John Smith"/>
      </div>
      <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Event">
        <meta itemprop="name" content="Google I/O 2013"/>
        <time itemprop="startDate" datetime="2013-05-15T08:30:00-08:00"/>
        <div itemprop="location" itemscope itemtype="http://schema.org/Place">
          <meta itemprop="name" content="Moscone Center"/>
          <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            <meta itemprop="streetAddress" content="800 Howard St."/>
            <meta itemprop="addressLocality" content="San Francisco"/>
            <meta itemprop="addressRegion" content="CA"/>
            <meta itemprop="postalCode" content="94103"/>
            <meta itemprop="addressCountry" content="US"/>
          </div>
        </div>
      </div>
    </div>
    <p>
      Dear John, thanks for booking your Google I/O ticket with us.
    </p>
    <p>
      BOOKING DETAILS<br/>
      Reservation number: IO12345<br/>
      Order for: John Smith<br/>
      Event: Google I/O 2013<br/>
      Start time: May 15th 2013 8:00am PST<br/>
      Venue: Moscone Center, 800 Howard St., San Francisco, CA 94103<br/>
    </p>
  </body>
</html>
```

### Microdata (inline)

```
<html>
  <body>
    <p>
      Dear John, thanks for booking your Google I/O ticket with us.
    </p>
    <p itemscope itemtype="http://schema.org/EventReservation">
      BOOKING DETAILS<br/>
      Reservation number: <span itemprop="reservationNumber">IO12345</span><br/>
      Order for: <span itemprop="underName" itemscope itemtype="http://schema.org/Person">
        <span itemprop="name">John Smith</span>
      </span><br/>
      <div itemprop="reservationFor" itemscope itemtype="http://schema.org/Event">
        Event: <span itemprop="name">Google I/O 2013</span><br/>
        <time itemprop="startDate" datetime="2013-05-15T08:30:00-08:00">Start time: May 15th 2013 8:00am PST</time><br/>
        Venue: <span itemprop="location" itemscope itemtype="http://schema.org/Place">
          <span itemprop="name">Moscone Center</span>
          <span itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            <span itemprop="streetAddress">800 Howard St.</span>,
            <span itemprop="addressLocality">San Francisco</span>,
            <span itemprop="addressRegion">CA</span>,
            <span itemprop="postalCode">94103</span>,
            <span itemprop="addressCountry">US</span>
          </span>
        </span>
      </div>
    </p>
  </body>
</html>
```

The above email contains the minimal set of information to define an event reservation. You can markup other pieces of information in your emails to improve the user experience. For instance, the `ticketToken` property of the [`FlightReservation`](./reference/flight-reservation.md) object lets you add a barcode image, such as a QR code, that can be included in a boarding pass card.

To learn about all of the supported types and their properties, see the [Reference guide](./reference.md).
