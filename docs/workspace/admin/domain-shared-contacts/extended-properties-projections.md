---
source: https://developers.google.com/workspace/admin/domain-shared-contacts/extended-properties-projections
root: workspace
fetched_at: 2026-04-23T15:23:53.723Z
---

# Extended properties and projections

To define custom characteristics for a shared contact, use extended properties and projections.

## Extended properties

You can set additional shared contact related information as an extended property, with arbitrary name-value pairs, for a shared contact entry. It's your responsibility to preserve key uniqueness. The value of an extended property can be stored as a value (arbitrary string) or an XML blob (plain text). Each shared contact can have at most 10 extended properties associated. Each extended property should be reasonably small; don't use a photo or a ringtone.

### Example

The following example shows an extended property with a key and a value:

```
&lt;gd:extendedProperty name="com.google" value="<var>VALUE</var>"/&gt;
```

The following example shows an extended property with key and an XML blob:

```
&lt;gd:extendedProperty name="com.google"&gt;
  &lt;<var>XML_PARAMETER</var>&gt;&lt;/<var>XML_PARAMETER</var>&gt;
&lt;/gd:extendedProperty>
```

## Projection values

To limit extended property visibility, use projections. Setting extended properties (`gd:extendedElement` elements) is allowed only within a `full` or `property-KEY` projection.

The following table describes the supported projection values:

| Projection name | Description |
| --- | --- |
| `thin` | No `gd:extendedProperty` elements are returned or updated. |
| `property-KEY` | `KEY` indicates the key of an extended property (`gd:extendedProperty` element) that's returned (for `GET` requests) or should be updated (for a `PUT` or `POST` request). If the extended property isn't used during update operations, the property is deleted. |
| `full       ` | All `gd:extendedProperty` elements are returned and all elements have to be included during an update. |
