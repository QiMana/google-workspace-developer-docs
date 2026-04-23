---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/AbuseDetected
root: workspace
fetched_at: 2026-04-23T15:23:21.862Z
---

# AbuseDetected

A generic alert for abusive user activity occurring with a customer.

JSON representation

```
{
  "subAlertId": string,
  "product": string,
  "additionalDetails": {
    object (EntityList)
  },
  "variationType": enum (AbuseDetectedVariationType)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>subAlertId</code></td><td><p><code>string</code></p><p>Unique identifier of each sub alert that is onboarded.</p></td></tr><tr><td><code>product</code></td><td><p><code>string</code></p><p>Product that the abuse is originating from.</p></td></tr><tr><td><code>additionalDetails</code></td><td><p><code>object (<code>EntityList</code>)</code></p><p>List of abusive users/entities to be displayed in a table in the alert.</p></td></tr><tr><td><code>variationType</code></td><td><p><code>enum (<code>AbuseDetectedVariationType</code>)</code></p><p>Variation of AbuseDetected alerts. The variationType determines the texts displayed the alert details. This differs from subAlertId because each sub alert can have multiple variation_types, representing different stages of the alert.</p></td></tr></tbody></table>

## EntityList

EntityList stores entities in a format that can be translated to a table in the Alert Center UI.

JSON representation

```
{
  "name": string,
  "headers": [
    string
  ],
  "entities": [
    {
      object (Entity)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Name of the key detail used to display this entity list.</p></td></tr><tr><td><code>headers[]</code></td><td><p><code>string</code></p><p>Headers of the values in entities. If no value is defined in Entity, this field should be empty.</p></td></tr><tr><td><code>entities[]</code></td><td><p><code>object (<code>Entity</code>)</code></p><p>List of entities affected by the alert.</p></td></tr></tbody></table>

## Entity

JSON representation

```
{
  "name": string,
  "link": string,
  "values": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Human-readable name of this entity, such as an email address, file ID, or device name.</p></td></tr><tr><td><code>link</code></td><td><p><code>string</code></p><p>Link to a Security Investigation Tool search based on this entity, if available.</p></td></tr><tr><td><code>values[]</code></td><td><p><code>string</code></p><p>Extra values beyond name. The order of values should align with headers in EntityList.</p></td></tr></tbody></table>
