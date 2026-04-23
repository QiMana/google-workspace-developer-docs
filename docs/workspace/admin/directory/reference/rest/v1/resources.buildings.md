---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/resources.buildings
root: workspace
fetched_at: 2026-04-23T15:23:40.923Z
---

# REST Resource: resources.buildings

## Resource: Building

Public API: Resources.buildings

JSON representation

```
{
  "buildingId": string,
  "buildingName": string,
  "description": string,
  "coordinates": {
    object (BuildingCoordinates)
  },
  "kind": string,
  "etags": string,
  "floorNames": [
    string
  ],
  "address": {
    object (BuildingAddress)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>buildingId</code></td><td><p><code>string</code></p><p>Unique identifier for the building. The maximum length is 100 characters.</p></td></tr><tr><td><code>buildingName</code></td><td><p><code>string</code></p><p>The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>A brief description of the building. For example, "Chelsea Market".</p></td></tr><tr><td><code>coordinates</code></td><td><p><code>object (<code>BuildingCoordinates</code>)</code></p><p>The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Kind of resource this is.</p></td></tr><tr><td><code>etags</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>floorNames[]</code></td><td><p><code>string</code></p><p>The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.</p></td></tr><tr><td><code>address</code></td><td><p><code>object (<code>BuildingAddress</code>)</code></p><p>The postal address of the building. See <a href="https://developers.google.com/my-business/reference/rest/v4/PostalAddress"><code>PostalAddress</code></a> for details. Note that only a single address line and region code are required.</p></td></tr></tbody></table>

## BuildingCoordinates

Public API: Resources.buildings

JSON representation

```
{
  "latitude": number,
  "longitude": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>latitude</code></td><td><p><code>number</code></p><p>Latitude in decimal degrees.</p></td></tr><tr><td><code>longitude</code></td><td><p><code>number</code></p><p>Longitude in decimal degrees.</p></td></tr></tbody></table>

## BuildingAddress

Public API: Resources.buildings

JSON representation

```
{
  "regionCode": string,
  "languageCode": string,
  "postalCode": string,
  "administrativeArea": string,
  "locality": string,
  "sublocality": string,
  "addressLines": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>regionCode</code></td><td><p><code>string</code></p><p>Required. CLDR region code of the country/region of the address.</p></td></tr><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>Optional. BCP-47 language code of the contents of this address (if known).</p></td></tr><tr><td><code>postalCode</code></td><td><p><code>string</code></p><p>Optional. Postal code of the address.</p></td></tr><tr><td><code>administrativeArea</code></td><td><p><code>string</code></p><p>Optional. Highest administrative subdivision which is used for postal addresses of a country or region.</p></td></tr><tr><td><code>locality</code></td><td><p><code>string</code></p><p>Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.</p></td></tr><tr><td><code>sublocality</code></td><td><p><code>string</code></p><p>Optional. Sublocality of the address.</p></td></tr><tr><td><code>addressLines[]</code></td><td><p><code>string</code></p><p>Unstructured address lines describing the lower levels of an address.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes a building.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a building.</td></tr><tr><td><h3>insert</h3></td><td>Inserts a building.</td></tr><tr><td><h3>list</h3></td><td>Retrieves a list of buildings for an account.</td></tr><tr><td><h3>patch</h3></td><td>Patches a building.</td></tr><tr><td><h3>update</h3></td><td>Updates a building.</td></tr></tbody></table>
