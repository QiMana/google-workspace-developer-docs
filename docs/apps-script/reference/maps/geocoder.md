---
source: https://developers.google.com/apps-script/reference/maps/geocoder
root: apps-script
fetched_at: 2026-04-23T15:20:52.250Z
---

# Class Geocoder

## Page Summary

- Geocoder converts between addresses and geographical coordinates.
- The `geocode(address)` method gets geographic points for an address.
- The `reverseGeocode(latitude, longitude)` method gets addresses for a geographic point.
- Methods like `setBounds`, `setLanguage`, and `setRegion` can refine geocoding results.

Allows for the conversion between an address and geographical coordinates.  
The example below shows how you can use this class find the top nine matches for the location "Main St" in Colorado, add them to a map, and then embed it in a new Google Doc.

```
// Find the best matches for "Main St" in Colorado.
const response = Maps.newGeocoder()
                     // The latitudes and longitudes of southwest and northeast
                     // corners of Colorado, respectively.
                     .setBounds(36.998166, -109.045486, 41.001666, -102.052002)
                     .geocode('Main St');

// Create a Google Doc and map.
const doc = DocumentApp.create('My Map');
const map = Maps.newStaticMap();

// Add each result to the map and doc.
for (let i = 0; i < response.results.length && i < 9; i++) {
  const result = response.results[i];
  map.setMarkerStyle(null, null, i + 1);
  map.addMarker(result.geometry.location.lat, result.geometry.location.lng);
  doc.appendListItem(result.formatted_address);
}

// Add the finished map to the doc.
doc.appendImage(Utilities.newBlob(map.getMapImage(), 'image/png'));
```

#### See also

- [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding)

## Detailed documentation

### geocode(address)

Gets the approximate geographic points for a given address.

```
// Gets the geographic coordinates for Times Square.
const response = Maps.newGeocoder().geocode('Times Square, New York, NY');
for (let i = 0; i < response.results.length; i++) {
  const result = response.results[i];
  Logger.log(
      '%s: %s, %s',
      result.formatted_address,
      result.geometry.location.lat,
      result.geometry.location.lng,
  );
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `address` | `String` | An address. |

#### Return

`Object` — A JSON Object containing the geocoding data, as described [here](https://developers.google.com/maps/documentation/geocoding/requests-geocoding#GeocodingResponses).

---

### reverseGeocode(latitude, longitude)

Gets the approximate addresses for a given geographic point.

```
// Gets the address of a point in Times Square.
const response = Maps.newGeocoder().reverseGeocode(40.758577, -73.984464);
for (let i = 0; i < response.results.length; i++) {
  const result = response.results[i];
  Logger.log(
      '%s: %s, %s',
      result.formatted_address,
      result.geometry.location.lat,
      result.geometry.location.lng,
  );
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `latitude` | `Number` | The latitude of the point. |
| `longitude` | `Number` | The longitude of the point. |

#### Return

`Object` — A JSON Object containing the reverse geocoding data, as described [here](https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding).

#### See also

- [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding#JSON)

---

### setBounds(swLatitude, swLongitude, neLatitude, neLongitude)

Sets the bounds of an area that should be given extra preference in the results.

```
// Creates a Geocoder that prefers points in the area of Manhattan.
const geocoder = Maps.newGeocoder().setBounds(
    40.699642,
    -74.021072,
    40.877569,
    -73.908548,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `swLatitude` | `Number` | The latitude of the south west corner of the bounds. |
| `swLongitude` | `Number` | The longitude of the south west corner of the bounds. |
| `neLatitude` | `Number` | The latitude of the north east corner of the bounds. |
| `neLongitude` | `Number` | The longitude of the north east corner of the bounds. |

#### Return

`Geocoder` — The Geocoder object to facilitate chaining of calls.

#### See also

- [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding#Viewports)

---

### setLanguage(language)

Sets the language to be used in the results.

```
// Creates a Geocoder with the language set to French.
const geocoder = Maps.newGeocoder().setLanguage('fr');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `language` | `String` | A BCP-47 language identifier. |

#### Return

`Geocoder` — The Geocoder object to facilitate chaining of calls.

#### See also

- [Encoded Polyline Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)

---

### setRegion(region)

Sets a region to use when interpreting location names. The supported region codes correspond to the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to "maps.google.co.uk".

```
// Creates a Geocoder with the region set to France.
const geocoder = Maps.newGeocoder().setRegion('fr');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `region` | `String` | The region code to use. |

#### Return

`Geocoder` — The Geocoder object to facilitate chaining of calls.

#### See also

- [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding#RegionCodes)
