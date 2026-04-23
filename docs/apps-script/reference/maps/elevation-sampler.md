---
source: https://developers.google.com/apps-script/reference/maps/elevation-sampler
root: apps-script
fetched_at: 2026-04-23T15:20:53.363Z
---

# Class ElevationSampler

## Page Summary

- ElevationSampler allows you to sample elevations at specific locations.
- You can use ElevationSampler to find the highest point along a route and plot it on a map.
- Methods are available to sample elevation for single points, multiple points, or along a path defined by points or an encoded polyline.
- The sample methods return a JSON object containing elevation data.

Allows for the sampling of elevations at particular locations.  
The example below shows how you can use this class to determine the highest point along the route from Denver to Grand Junction in Colorado, plot it on a map, and save the map to Google Drive.

```
// Get directions from Denver to Grand Junction.
const directions = Maps.newDirectionFinder()
                       .setOrigin('Denver, CO')
                       .setDestination('Grand Junction, CO')
                       .setMode(Maps.DirectionFinder.Mode.DRIVING)
                       .getDirections();
const route = directions.routes[0];

// Get elevation samples along the route.
const numberOfSamples = 30;
const response = Maps.newElevationSampler().samplePath(
    route.overview_polyline.points,
    numberOfSamples,
);

// Determine highest point.

let highestLocation = null;
let highestElevation = Number.MIN_VALUE;
for (const sample of response.results) {
  if (sample.elevation > highestElevation) {
    highestElevation = sample.elevation;
    highestLocation = sample.location;
  }
}

// Add the path and marker to a map.
const map = Maps.newStaticMap()
                .addPath(route.overview_polyline.points)
                .addMarker(highestLocation.lat, highestLocation.lng);

// Save the map to your drive
DriveApp.createFile(
    Utilities.newBlob(map.getMapImage(), 'image/png', 'map.png'),
);
```

#### See also

- [Google Elevation API](https://developers.google.com/maps/documentation/elevation)

## Detailed documentation

### sampleLocation(latitude, longitude)

Returns elevation data for a single point (lat/lng).

```
// Gets the elevation of Times Square using a point.
const data = Maps.newElevationSampler().sampleLocation(40.759011, -73.984472);
Logger.log(data.results[0].elevation);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `latitude` | `Number` | The latitude of the point to sample. |
| `longitude` | `Number` | The longitude of the point to sample. |

#### Return

`Object` — A JSON Object containing the elevation data, as described [here](https://developers.google.com/maps/documentation/elevation#ElevationResponses).

---

### sampleLocations(points)

Returns elevation data for a series of points (lat/lng).

```
// Gets the elevation of Times Square and Central Park using points.
const data = Maps.newElevationSampler().sampleLocations([
  // Times Square
  40.759011,
  -73.984472,
  // Central Park
  40.777052,
  -73.975464,
]);
Logger.log(\`Times Square: ${data.results[0].elevation}\`);
Logger.log(\`Central Park: ${data.results[1].elevation}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `points` | `Number[]` | An array of latitude/longitude pairs. |

#### Return

`Object` — A JSON Object containing the elevation data, as described [here](https://developers.google.com/maps/documentation/elevation#ElevationResponses).

---

### sampleLocations(encodedPolyline)

Returns elevation data for the points in an encoded polyline.

```
// Gets the elevation of Times Square and Central Park using a polyline.
const data = Maps.newElevationSampler().sampleLocations('yvwwF|aqbMwoBiw@');
Logger.log(\`Times Square: ${data.results[0].elevation}\`);
Logger.log(\`Central Park: ${data.results[1].elevation}\`);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `encodedPolyline` | `String` | An encoded polyline of points to sample. |

#### Return

`Object` — A JSON Object containing the elevation data, as described [here](https://developers.google.com/maps/documentation/elevation#ElevationResponses).

---

### samplePath(points, numSamples)

Returns elevation data for a number of samples along a line, defined using a series of points.

```
// Gets the elevation of five points between Times Square and Central Park.
const data = Maps.newElevationSampler().samplePath(
    [
      // Times Square
      40.759011,
      -73.984472,
      // Central Park
      40.777052,
      -73.975464,
    ],
    5,
);
for (let i = 0; i < data.results.length; i++) {
  Logger.log(data.results[i].elevation);
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `points` | `Number[]` | An array of latitude/longitude pairs defining a path to sample over. |
| `numSamples` | `Integer` | The number of points to sample along the path of points. |

#### Return

`Object` — A JSON Object containing the elevation data, as described [here](https://developers.google.com/maps/documentation/elevation#ElevationResponses).

---

### samplePath(encodedPolyline, numSamples)

Returns elevation data for a number of samples along a line, defined using an encoded polyline.

```
// Gets the elevation of five points between Times Square and Central Park.
const data = Maps.newElevationSampler().samplePath('yvwwF|aqbMwoBiw@', 5);
for (let i = 0; i < data.results.length; i++) {
  Logger.log(data.results[i].elevation);
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `encodedPolyline` | `String` | An encoded polyline of points defining a path to sample over. |
| `numSamples` | `Integer` | The number of points to sample along the path of points. |

#### Return

`Object` — A JSON Object containing the elevation data, as described [here](https://developers.google.com/maps/documentation/elevation#ElevationResponses).
