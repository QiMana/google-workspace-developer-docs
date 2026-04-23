---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/resources.calendars
root: workspace
fetched_at: 2026-04-23T15:23:42.002Z
---

# REST Resource: resources.calendars

## Resource: CalendarResource

Public API: Resources.calendars

JSON representation

```
{
  "kind": string,
  "etags": string,
  "resourceName": string,
  "resourceDescription": string,
  "resourceType": string,
  "resourceEmail": string,
  "resourceCategory": string,
  "userVisibleDescription": string,
  "generatedResourceName": string,
  "featureInstances": value,
  "resourceId": string,
  "capacity": integer,
  "floorName": string,
  "buildingId": string,
  "floorSection": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of the resource. For calendar resources, the value is <code>admin#directory#resources#calendars#CalendarResource</code>.</p></td></tr><tr><td><code>etags</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>resourceName</code></td><td><p><code>string</code></p><p>The name of the calendar resource. For example, "Training Room 1A".</p></td></tr><tr><td><code>resourceDescription</code></td><td><p><code>string</code></p><p>Description of the resource, visible only to admins.</p></td></tr><tr><td><code>resourceType</code></td><td><p><code>string</code></p><p>The type of the calendar resource, intended for non-room resources.</p></td></tr><tr><td><code>resourceEmail</code></td><td><p><code>string</code></p><p>The read-only email for the calendar resource. Generated as part of creating a new calendar resource.</p></td></tr><tr><td><code>resourceCategory</code></td><td><p><code>string</code></p><p>The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.</p></td></tr><tr><td><code>userVisibleDescription</code></td><td><p><code>string</code></p><p>Description of the resource, visible to users and admins.</p></td></tr><tr><td><code>generatedResourceName</code></td><td><p><code>string</code></p><p>The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".</p></td></tr><tr><td><code>featureInstances</code></td><td><p><code>value (<code>Value</code> format)</code></p><p>Instances of features for the calendar resource.</p></td></tr><tr><td><code>resourceId</code></td><td><p><code>string</code></p><p>The unique ID for the calendar resource.</p></td></tr><tr><td><code>capacity</code></td><td><p><code>integer</code></p><p>Capacity of a resource, number of seats in a room.</p></td></tr><tr><td><code>floorName</code></td><td><p><code>string</code></p><p>Name of the floor a resource is located on.</p></td></tr><tr><td><code>buildingId</code></td><td><p><code>string</code></p><p>Unique ID for the building a resource is located in.</p></td></tr><tr><td><code>floorSection</code></td><td><p><code>string</code></p><p>Name of the section within a floor a resource is located in.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes a calendar resource.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a calendar resource.</td></tr><tr><td><h3>insert</h3></td><td>Inserts a calendar resource.</td></tr><tr><td><h3>list</h3></td><td>Retrieves a list of calendar resources for an account.</td></tr><tr><td><h3>patch</h3></td><td>Patches a calendar resource.</td></tr><tr><td><h3>update</h3></td><td>Updates a calendar resource.</td></tr></tbody></table>
