---
source: https://developers.google.com/apps-script/reference/maps/maps
root: apps-script
fetched_at: 2026-04-23T15:20:53.586Z
---

# Class Maps

## Page Summary

- The Maps service allows for finding directions, geocoding, sampling elevation, and creating static map images.
- It includes properties for DirectionFinder and StaticMap enums.
- Key methods include decoding and encoding polylines, creating new instances of DirectionFinder, ElevationSampler, Geocoder, and StaticMap, and setting authentication for Google Maps APIs Premium Plan accounts.

Allows for direction finding, geocoding, elevation sampling and the creation of static map images.

## Detailed documentation

### decodePolyline(polyline)

Decodes an encoded polyline string back into an array of points.

```
// Decodes a string representation of the latitudes and longitudes of
// Minneapolis and Milwaukee respectively.
const polyline = 'qvkpG\`qhxPbgyI_zq_@';
const points = Maps.decodePolyline(polyline);
for (let i = 0; i < points.length; i += 2) {
  Logger.log('%s, %s', points[i], points[i + 1]);
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `polyline` | `String` | An encoded polyline to decode. |

#### Return

`Number[]` — An array of latitude longitude pairs (lat0, long0, lat1, long1,...).

#### See also

- [Encoded Polyline Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)

---

### encodePolyline(points)

Encodes an array of points into a string.

```
// The latitudes and longitudes of New York and Boston respectively.
const points = [40.77, -73.97, 42.34, -71.04];
const polyline = Maps.encodePolyline(points);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `points` | `Number[]` | An array of latitude/longitude pairs to encode. |

#### Return

`String` — An encoded string representing those points.

#### See also

- [Encoded Polyline Format](https://developers.google.com/maps/documentation/utilities/polylinealgorithm)

---

### newDirectionFinder()

Creates a new DirectionFinder object.

#### Return

`DirectionFinder` — A new direction finder object.

---

### newElevationSampler()

Creates an ElevationSampler object.

#### Return

`ElevationSampler` — A new elevation sampler object.

---

### newGeocoder()

Creates a new Geocoder object.

#### Return

`Geocoder` — A new geocoder object.

---

### newStaticMap()

Creates a new StaticMap object.

#### Return

`StaticMap` — A new static map object.

---

### resetAuthenticationApiKey()

Resets the authentication credentials to use the default quota allowances. This method works when you are using API key to authenticate requests. This method can be used to revert back to the default quota allowances if you want to use the `Maps` methods without providing authentication credentials.

```
Maps.resetAuthenticationApiKey();
```

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if `~~setAuthentication(clientId, signingKey)~~` is being used for authentication.

---

### setAuthenticationByApiKey(apiKey)

Enables the use of an API key to authenticate requests to leverage additional quotas.

This method is used to set an API key which is used to authenticate requests. When this method is called, quota consumption and billing are charged to the Google Cloud project associated with the provided API key according to the [pricing sheet](https://developers.google.com/maps/billing-and-pricing). You are able to use the `Maps` methods with the default quota allowances without providing authentication credentials. If you are using StaticMap, please use `setAuthenticationByApiKey(apiKey, signingKey)` method instead.

```
Maps.setAuthenticationByApiKey('BBdgJpSbLtAtmkBFjgLt310qT6iekggfDdVqLC0');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `apiKey` | `String` | An API key which can be obtained from the Google Cloud Console by following steps mentioned in the [quickstart guide](https://developers.google.com/maps/get-started#quickstart). |

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the `apiKey` is `null`, or if `~~setAuthentication(clientId, signingKey)~~` is already being used for authentication

---

### setAuthenticationByApiKey(apiKey, signingKey)

Enables the use of an API key and Signing Key to authenticate requests to leverage additional quotas in StaticMap. While the `signingKey` is required for requests to the Static Map API, this method can also be used to authenticate other Maps services. In those cases, the `signingKey` parameter is ignored.

This method is used to set an API key and Signing Key which is used to authenticate requests. Signing Key is required for StaticMap, it accepts a small number of requests without signature for testing purposes, but they start failing once it hits the threshold in your production. More details can be found [here](https://developers.google.com/maps/premium/migrate-client-id#signing_secret_for_imagery_apis).

```
Maps.setAuthenticationByApiKey('BBdgJpSbLtAtmkBFjgLt310qT6iekggfDdVqLC0',
'7_pry-Skg0PKxds-7nvdl91mB5=');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `apiKey` | `String` | An API key which can be obtained from the Google Cloud Console by following steps mentioned in the [quickstart guide](https://developers.google.com/maps/get-started#quickstart). |
| `signingKey` | `String` | A signing key which can be obtained from the Google Cloud Console by following steps mentioned in the [guide for digital signature](https://developers.google.com/maps/documentation/maps-static/digital-signature#get-secret). This is required for StaticMap and ignored for other Maps services. |

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the `apiKey` is `null`, or if `~~setAuthentication(clientId, signingKey)~~` is already being used for authentication

#### See also

- `setAuthenticationByApiKey(apiKey)`

## Deprecated methods

### setAuthentication(clientId, signingKey)

**Deprecated.** Instead, use `setAuthenticationByApiKey(apiKey)` which uses API key for authentication.

Enables the use of an externally established [Google Maps APIs Premium Plan](https://developers.google.com/maps/premium/) account, to leverage additional [quota allowances](https://developers.google.com/maps/premium/usage-limits). Your client ID and signing key can be obtained from [the Maps section of the Google Cloud Console](https://console.cloud.google.com/google/maps-apis/credentials). Set these values to `null` to go back to using the default quota allowances.

```
Maps.setAuthentication('gme-123456789', 'VhSEZvOXVSdnlxTnpJcUE');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `clientId` | `String` | A client identifier. |
| `signingKey` | `String` | A private signing key. |

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if `setAuthenticationByApiKey(apiKey)` is already being used for the authentication
