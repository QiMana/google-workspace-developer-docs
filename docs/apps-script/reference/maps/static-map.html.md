---
source: https://developers.google.com/apps-script/reference/maps/static-map.html
root: apps-script
fetched_at: 2026-04-23T15:20:54.881Z
---

# Class StaticMap

## Page Summary

- The `StaticMap` class allows for the creation and decoration of static map images.
- You can set the size, center, markers, and paths of the static map.
- Markers and visible locations can be added using either latitude/longitude coordinates or addresses.
- Paths can be defined by adding addresses or points, or by providing an encoded polyline.
- The URL of the generated static map image can be retrieved using `getMapUrl()`, but requires an API key.

Allows for the creation and decoration of static map images.

The example below shows how you can use this class to create a map of New York City's Theatre District, including nearby train stations, and display it in a simple web app.

```
// Create a map centered on Times Square.
const map = Maps.newStaticMap().setSize(600, 600).setCenter(
    'Times Square, New York, NY');

// Add markers for the nearbye train stations.
map.setMarkerStyle(
    Maps.StaticMap.MarkerSize.MID,
    Maps.StaticMap.Color.RED,
    'T',
);
map.addMarker('Grand Central Station, New York, NY');
map.addMarker('Penn Station, New York, NY');

// Show the boundaries of the Theatre District.
const corners = [
  '8th Ave & 53rd St, New York, NY',
  '6th Ave & 53rd St, New York, NY',
  '6th Ave & 40th St, New York, NY',
  '8th Ave & 40th St, New York, NY',
];
map.setPathStyle(4, Maps.StaticMap.Color.BLACK, Maps.StaticMap.Color.BLUE);
map.beginPath();
for (let i = 0; i < corners.length; i++) {
  map.addAddress(corners[i]);
}
// All static map URLs require an API key.
const url = \`${map.getMapUrl()}&key=YOUR_API_KEY\`;
```

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps)

## Detailed documentation

### addAddress(address)

Adds a new address to the current path definition.

```
// Creates a map and adds a path from New York to Boston.
const map = Maps.newStaticMap()
                .beginPath()
                .addAddress('New York, NY')
                .addAddress('Boston, MA')
                .endPath();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `address` | `String` | An address to add. |

#### Return

`StaticMap` — This map instance, for chaining.

---

### addMarker(latitude, longitude)

Adds a marker to the map using a point (lat/lng).

```
// Creates a map and adds a marker at the specified coordinates.
const map = Maps.newStaticMap().addMarker(40.741799, -74.004207);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `latitude` | `Number` | The latitude of the new marker. |
| `longitude` | `Number` | The longitude of the new marker. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#MarkerLocations)

---

### addMarker(address)

Adds a marker to the map using an address.

```
// Creates a map and adds a marker at the specified address.
const map = Maps.newStaticMap().addMarker('76 9th Ave, New York NY');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `address` | `String` | The address at which to place the new marker. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#MarkerLocations)

---

### addPath(points)

Adds a path to the map using an array of points.

```
// Creates a map and adds a path from New York to Boston.
const map = Maps.newStaticMap().addPath([
  40.714353,
  -74.005973,
  42.358431,
  -71.059773,
]);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `points` | `Number[]` | An array of latitude/longitude pairs that define the path. |

#### Return

`StaticMap` — This map instance, for chaining.

---

### addPath(polyline)

Adds a path to the map using an encoded polyline.

```
// Creates a map and adds a path from New York to Boston.
const polyline = Maps.encodePolyline([
  40.714353,
  -74.005973,
  42.358431,
  -71.059773,
]);
const map = Maps.newStaticMap().addPath(polyline);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `polyline` | `String` | An encoded polyline. |

#### Return

`StaticMap` — This map instance, for chaining.

---

### addPoint(latitude, longitude)

Adds a new point (lat/lng) to the current path definition.

```
// Creates a map and adds a path from New York to Boston.
const map = Maps.newStaticMap()
                .beginPath()
                .addPoint(40.714353, -74.005973)
                .addPoint(42.358431, -71.059773)
                .endPath();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `latitude` | `Number` | The latitude of the point. |
| `longitude` | `Number` | The longitude of the point. |

#### Return

`StaticMap` — This map instance, for chaining.

---

### addVisible(latitude, longitude)

Adds a point (lat/lng) location that must be visible in the map.

```
// Creates a map where New York and Boston are visible.
const map = Maps.newStaticMap()
                .addVisible(40.714353, -74.005973)
                .addVisible(42.358431, -71.059773);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `latitude` | `Number` | The latitude of the point. |
| `longitude` | `Number` | The longitude of the point. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#Viewports)

---

### addVisible(address)

Adds an address location that must be visible in the map.

```
// Creates a map where New York and Boston are visible.
const map =
    Maps.newStaticMap().addVisible('New York, NY').addVisible('Boston, MA');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `address` | `String` | An address that must be visible in the map. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#Viewports)

---

### beginPath()

Starts a new path definition. Calls to `addAddress()` and `addPoint()` define each new vertex in the path. The path is completed when `endPath()` is called.

```
// Creates a map and adds a path from New York to Boston.
const map = Maps.newStaticMap()
                .beginPath()
                .addAddress('New York, NY')
                .addAddress('Boston, MA')
                .endPath();
```

#### Return

`StaticMap` — This map instance, for chaining.

---

### clearMarkers()

Clears the current set of markers.

```
const map = Maps.newStaticMap();
// ...
// Do something interesting here ...
// ...
// Remove all markers on the map.
map.clearMarkers();
```

#### Return

`StaticMap` — This map instance, for chaining.

---

### clearPaths()

Clear the current set of paths.

```
const map = Maps.newStaticMap();
// ...
// Do something interesting here ...
// ...
// Remove all paths on the map.
map.clearPaths();
```

#### Return

`StaticMap` — This map instance, for chaining.

---

### clearVisibles()

Clears the current set of visible locations.

```
const map = Maps.newStaticMap();
// ...
// Do something interesting here ...
// ...
// Remove all visible locations created with addVisible().
map.clearVisibles();
```

#### Return

`StaticMap` — This map instance, for chaining.

---

### endPath()

Completes a path definition started with beginPath().

```
// Creates a map and adds a path from New York to Boston.
const map = Maps.newStaticMap()
                .beginPath()
                .addAddress('New York, NY')
                .addAddress('Boston, MA')
                .endPath();
```

#### Return

`StaticMap` — This map instance, for chaining.

---

### getAs(contentType)

Return the data inside this object as a blob converted to the specified content type. This method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it assumes that the part of the filename that follows the last period (if any) is an existing extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes "ShoppingList.12.25.pdf".

To view the daily quotas for conversions, see [Quotas for Google Services](../../guides/services/quotas.md). Newly created Google Workspace domains might be temporarily subject to stricter quotas.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contentType` | `String` | The MIME type to convert to. For most blobs, `'application/pdf'` is the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of `'image/bmp'`, `'image/gif'`, `'image/jpeg'`, or `'image/png'` are also valid. For a Google Docs document, `'text/markdown'` is also valid. |

#### Return

`Blob` — The data as a blob.

---

### getBlob()

Gets the image data as a `Blob`.

```
// Creates a map centered on Times Square and saves it to Google Drive.
const map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
DriveApp.createFile(map);  // You can call map.getBlob() explicitly or use it
// implicitly by passing the map where a blob is expected.
```

#### Return

`Blob` — An image of the map in the selected image format.

---

### getMapImage()

Gets the raw image data as a byte array.

In general, prefer using `getBlob()` which allows for simpler interactions with other services.

```
// Creates a map centered on Times Square and saves it to Google Drive.
const map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
DriveApp.createFile(
    Utilities.newBlob(map.getMapImage(), 'image/png', 'map.png'),
);
```

#### Return

`Byte[]` — An image of the map in the selected image format.

---

### getMapUrl()

Gets the URL of the map image.

```
// Creates a map centered on Times Square and gets the URL.
const map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
// All static map URLs require an API key.
Logger.log(\`${map.getMapUrl()}&key=YOUR_API_KEY\`);
```

#### Return

`String` — URL The map image URL.

---

### setCenter(latitude, longitude)

Sets the center of the map using a point (lat/lng).

```
// Creates a map centered on Times Square, using its coordinates.
const map = Maps.newStaticMap().setCenter(40.759011, -73.984472);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `latitude` | `Number` | The latitude of the center. |
| `longitude` | `Number` | The longitude of the center. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#Latlons)

---

### setCenter(address)

Sets the center of the map using an address.

```
// Creates a map centered on Times Square, using its address.
const map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `address` | `String` | The address of the center. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#Addresses)

---

### setCustomMarkerStyle(imageUrl, useShadow)

Sets the custom marker image to use when creating new markers. Markers that have already been added are not affected.

```
// Creates a map with markers set to be medium sized, black, and labeled with
// the number "1".
const map = Maps.newStaticMap().setCustomMarkerStyle(
    'http://www.example.com/marker.png',
    false,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `imageUrl` | `String` | Specifies a URL to use as the marker's custom icon. Images may be in PNG, JPEG or GIF formats, though PNG is recommended. |
| `useShadow` | `Boolean` | Indicates that the marker should have a shadow generated, based on the image's visible region and its opacity/transparency. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#CustomIcons)

---

### setFormat(format)

Sets the format of the map image.

```
// Creates a map with the image format set to PNG.
const map = Maps.newStaticMap().setFormat(Maps.StaticMap.Format.PNG);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `format` | `String` | A constant value from `Format`. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#ImageFormats)

---

### setLanguage(language)

Sets the language to be used for text on the map (where available).

```
// Creates a map with the language set to French.
const map = Maps.newStaticMap().setLanguage('fr');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `language` | `String` | A BCP-47 language identifier. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Language Support in Google Maps APIs](https://developers.google.com/maps/faq#languagesupport)

---

### setMapType(mapType)

Sets the type of map to be shown.

```
// Creates a satellite map.
const map = Maps.newStaticMap().setMapType(Maps.StaticMap.Type.SATELLITE);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `mapType` | `String` | A constant value from `Type`. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#MapTypes)

---

### setMarkerStyle(size, color, label)

Sets the marker style to use when creating new markers. Markers that have already been added are not affected.

```
// Creates a map with markers set to be medium sized, black, and labeled with
// the number "1".
const map = Maps.newStaticMap().setMarkerStyle(
    Maps.StaticMap.MarkerSize.MID,
    Maps.StaticMap.Color.BLACK,
    '1',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `size` | `String` | A constant value from `MarkerSize`. |
| `color` | `String` | A string in the format "0xrrggbb" or a constant value from `Color`. |
| `label` | `String` | A string containing a single character A-Z or 0-9. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#MarkerStyles)

---

### setMobile(useMobileTiles)

Sets whether or not to use specialized tile sets for mobile devices.

```
// Creates a map that uses mobile-friendly tiles.
const map = Maps.newStaticMap().setMobile(true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `useMobileTiles` | `Boolean` | Whether or not to use mobile tiles. |

#### Return

`StaticMap` — This map instance, for chaining.

---

### setPathStyle(weight, color, fillColor)

Sets the path style to use when creating new paths. Paths that have already been added are not affected.

```
// Creates a map with paths set to be 1 pixel wide with a black line and a white
// fill.
const map = Maps.newStaticMap().setPathStyle(
    1,
    Maps.StaticMap.Color.BLACK,
    'red',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `weight` | `Integer` | The width of lines in pixels. |
| `color` | `String` | The line color, as a string in the format "0xrrggbb" or a constant value from `Color`. |
| `fillColor` | `String` | The fill color, a string in the format "0xrrggbb" or a constant value from `Color`. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#PathStyles)

---

### setSize(width, height)

Sets the width and height of the map image in pixels.

```
// Creates a map 400px wide by 300px high.
const map = Maps.newStaticMap().setSize(400, 300);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | `Integer` | The width of the image in pixels. |
| `height` | `Integer` | The height of the image in pixels. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#Imagesizes)

---

### setZoom(zoom)

Sets the zoom factor, or magnification level, used for the map.

```
// Creates a map with a zoom factor of 10.
const map = Maps.newStaticMap().setZoom(10);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `zoom` | `Integer` | A value from zero to 21, inclusive. |

#### Return

`StaticMap` — This map instance, for chaining.

#### See also

- [Google Static Maps API](https://developers.google.com/maps/documentation/staticmaps#Zoomlevels)
