---
source: https://developers.google.com/apps-script/reference/maps/direction-finder
root: apps-script
fetched_at: 2026-04-23T15:20:53.096Z
---

# Class DirectionFinder

## Page Summary

- DirectionFinder allows you to get directions between locations.
- You can specify an origin, destination, and waypoints using addresses or coordinates.
- The class offers methods to set travel mode, language, and specify restrictions.
- The `getDirections()` method returns a JSON object containing the route details.

Allows for the retrieval of directions between locations.  
The example below shows how you can use this class to get the directions from Times Square to Central Park, stopping first at Lincoln Center, plot the locations and path on a map, and send the map in an email.

```
// Get the directions.
const directions = Maps.newDirectionFinder()
                       .setOrigin('Times Square, New York, NY')
                       .addWaypoint('Lincoln Center, New York, NY')
                       .setDestination('Central Park, New York, NY')
                       .setMode(Maps.DirectionFinder.Mode.DRIVING)
                       .getDirections();
const route = directions.routes[0];

// Set up marker styles.

let markerLetterCode = 'A'.charCodeAt();

// Add markers to the map.
const map = Maps.newStaticMap();
for (let i = 0; i < route.legs.length; i++) {
  const leg = route.legs[i];
  if (i === 0) {
    // Add a marker for the start location of the first leg only.
    map.setMarkerStyle(
        Maps.StaticMap.MarkerSize.MID,
        Maps.StaticMap.Color.GREEN,
        String.fromCharCode(markerLetterCode),
    );
    map.addMarker(leg.start_location.lat, leg.start_location.lng);
    markerLetterCode++;
  }
  map.setMarkerStyle(
      Maps.StaticMap.MarkerSize.MID,
      Maps.StaticMap.Color.GREEN,
      String.fromCharCode(markerLetterCode),
  );
  map.addMarker(leg.end_location.lat, leg.end_location.lng);
  markerLetterCode++;
}

// Add a path for the entire route.
map.addPath(route.overview_polyline.points);

// Send the map in an email.
const toAddress = Session.getActiveUser().getEmail();
MailApp.sendEmail(
    toAddress,
    'Directions',
    \`Please open: ${map.getMapUrl()}&key=YOUR_API_KEY\`,
    {
      htmlBody: 'See below.<br/><img src="cid:mapImage">',
      inlineImages: {
        mapImage: Utilities.newBlob(map.getMapImage(), 'image/png'),
      },
    },
);
```

#### See also

- [Google Directions API](https://developers.google.com/maps/documentation/directions)

## Detailed documentation

### addWaypoint(latitude, longitude)

Adds a waypoint that the route must pass through, using a point (lat/lng).

```
// Creates a DirectionFinder with a wapoint at Lincoln Center.
const directionFinder = Maps.newDirectionFinder().addWaypoint(
    40.772628,
    -73.984243,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `latitude` | `Number` | Latitude of the waypoint. |
| `longitude` | `Number` | Longitude of the waypoint. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

---

### addWaypoint(address)

Adds a waypoint that the route must pass through, using an address.

```
// Creates a DirectionFinder with a wapoint at Lincoln Center.
const directionFinder = Maps.newDirectionFinder().addWaypoint(
    'Lincoln Center, New York, NY',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `address` | `String` | An address. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

---

### clearWaypoints()

Clears the current set of waypoints.

```
const directionFinder = Maps.newDirectionFinder();
// ...
// Do something interesting here ...
// ...
// Remove all waypoints added with addWaypoint().
directionFinder.clearWaypoints();
```

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

---

### getDirections()

Gets the directions using the origin, destination, and other options that were set.

```
// Logs how long it takes to walk from Times Square to Central Park.
const directions = Maps.newDirectionFinder()
                       .setOrigin('Times Square, New York, NY')
                       .setDestination('Central Park, New York, NY')
                       .setMode(Maps.DirectionFinder.Mode.WALKING)
                       .getDirections();
Logger.log(directions.routes[0].legs[0].duration.text);
```

#### Return

`Object` — A JSON object containing the set of routes for the directions, as described [here](https://developers.google.com/maps/documentation/directions#JSON).

#### See also

- [Google Directions API](https://developers.google.com/maps/documentation/directions#JSON)

---

### setAlternatives(useAlternatives)

Sets whether or not alternative routes should be returned, instead of just the highest ranked route (defaults to `false`). If `true`, the resulting object's `routes` array may contain multiple entries.

```
// Creates a DirectionFinder with alternative routes enabled.
const directionFinder = Maps.newDirectionFinder().setAlternatives(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `useAlternatives` | `Boolean` | `true` to return alternative routes, `false` otherwise. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

---

### setArrive(time)

Sets the desired time of arrival (when applicable).

```
// Creates a DirectionFinder with an arrival time of 2 hours from now.
const now = new Date();
const arrive = new Date(now.getTime() + 2 * 60 * 60 * 1000);
const directionFinder = Maps.newDirectionFinder().setArrive(arrive);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `time` | `Date` | The time of arrival. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

#### See also

- [Google Directions API](https://developers.google.com/maps/documentation/directions#RequestParameters)

---

### setAvoid(avoid)

Sets whether to avoid certain types of restrictions.

```
// Creates a DirectionFinder that avoid highways.
const directionFinder = Maps.newDirectionFinder().setAvoid(
    Maps.DirectionFinder.Avoid.HIGHWAYS,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `avoid` | `String` | A constant value from `Avoid`. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

#### See also

- [Google Directions API](https://developers.google.com/maps/documentation/directions#Restrictions)

---

### setDepart(time)

Sets the desired time of departure (when applicable).

```
// Creates a DirectionFinder with a departure time of 1 hour from now.
const now = new Date();
const depart = new Date(now.getTime() + 1 * 60 * 60 * 1000);
const directionFinder = Maps.newDirectionFinder().setDepart(depart);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `time` | `Date` | The time of departure. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

#### See also

- [Google Directions API](https://developers.google.com/maps/documentation/directions#RequestParameters)

---

### setDestination(latitude, longitude)

Sets the ending location for which to calculate directions to, using a point (lat/lng).

```
// Creates a DirectionFinder with the destination set to Central Park.
const directionFinder = Maps.newDirectionFinder().setDestination(
    40.777052,
    -73.975464,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `latitude` | `Number` | The latitude of the ending location. |
| `longitude` | `Number` | The longitude of the ending location. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

---

### setDestination(address)

Sets the ending location for which to calculate directions to, using an address.

```
// Creates a DirectionFinder with the destination set to Central Park.
const directionFinder = Maps.newDirectionFinder().setDestination(
    'Central Park, New York, NY',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `address` | `String` | The ending address. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

---

### setLanguage(language)

Sets the language to be used for the directions.

```
// Creates a DirectionFinder with the language set to French.
const directionFinder = Maps.newDirectionFinder().setLanguage('fr');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `language` | `String` | A BCP-47 language identifier. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

#### See also

- [Language Support in Google Maps APIs](https://developers.google.com/maps/faq#languagesupport)

---

### setMode(mode)

Sets the mode of travel (defaults to driving).

```
// Creates a DirectionFinder with the mode set to walking.
const directionFinder = Maps.newDirectionFinder().setMode(
    Maps.DirectionFinder.Mode.WALKING,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `mode` | `String` | A constant value from `Mode`. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

#### See also

- [Google Directions API](https://developers.google.com/maps/documentation/directions#TravelModes)

---

### setOptimizeWaypoints(optimizeOrder)

Sets whether or not to optimize the provided route by rearranging the waypoints in a more efficient order (defaults to `false`).

```
// Creates a DirectionFinder with wapoint optimization enabled.
const directionFinder = Maps.newDirectionFinder().setOptimizeWaypoints(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `optimizeOrder` | `Boolean` | `true` to optimize the order, or `false` otherwise. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

#### See also

- [Google Directions API](https://developers.google.com/maps/documentation/directions#Waypoints)

---

### setOrigin(latitude, longitude)

Sets the starting location from which to calculate directions, using a point (lat/lng).

```
// Creates a DirectionFinder with the origin set to Times Square.
const directionFinder = Maps.newDirectionFinder().setOrigin(
    40.759011,
    -73.984472,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `latitude` | `Number` | The latitude of the starting location. |
| `longitude` | `Number` | The longitude of the starting location. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

---

### setOrigin(address)

Sets the starting location from which to calculate directions, using an address.

```
// Creates a DirectionFinder with the origin set to Times Square.
const directionFinder = Maps.newDirectionFinder().setOrigin(
    'Times Square, New York, NY',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `address` | `String` | The starting address. |

#### Return

`DirectionFinder` — The DirectionFinder instance to facilitate chaining of calls.

---

### setRegion(region)

Sets a region to use when interpreting location names. The supported region codes correspond to the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to "maps.google.co.uk".

```
// Creates a DirectionFinder with the region set to France.
const directionFinder = Maps.newDirectionFinder().setRegion('fr');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `region` | `String` | The region code to use. |

#### Return

`DirectionFinder` — The DirectionFinder object to facilitate chaining of calls.

#### See also

- [Google Directions API](https://developers.google.com/maps/documentation/directions#region-biasing)
