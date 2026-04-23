---
source: https://developers.google.com/apps-script/reference/properties/user-properties
root: apps-script
fetched_at: 2026-04-23T15:20:56.986Z
---

# Class UserProperties

## Page Summary

- This class is deprecated and should not be used in new scripts.
- User Properties are key-value pairs unique to a user.
- User Properties are scoped per user, meaning a script can only access properties for the user running the script.

**Deprecated.** This class is deprecated and should not be used in new scripts.

User Properties are key-value pairs unique to a user. User Properties are scoped per user; any script running under the identity of a user can access User Properties for that user only.

## Deprecated methods

### deleteAllProperties()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Deletes all properties.

```
UserProperties.deleteAllProperties();
```

#### Return

`~~UserProperties~~` — this object, for chaining

#### See also

- `~~deleteProperty(key)~~`

---

### deleteProperty(key)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Deletes the property with the given key.

```
UserProperties.deleteProperty('special');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | key for property to delete |

#### Return

`~~UserProperties~~` — this object, for chaining

#### See also

- `~~deleteAllProperties()~~`

---

### getKeys()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get all of the available keys.

#### Return

`String[]`

---

### getProperties()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get all of the available properties at once.

This gives a copy, not a live view, so changing the properties on the returned object won't update them in storage and vice versa.

```
UserProperties.setProperties({
  "cow"     : "moo",
  "sheep"   : "baa",
  "chicken" : "cluck"
});

// Logs "A cow goes: moo"
Logger.log("A cow goes: %s", UserProperties.getProperty("cow"));

// This makes a copy. Any changes that happen here will not
// be written back to properties.
var animalSounds = UserProperties.getProperties();

// Logs:
// A chicken goes cluck!
// A cow goes moo!
// A sheep goes baa!
for(var kind in animalSounds) {
  Logger.log("A %s goes %s!", kind, animalSounds[kind]);
}
```

#### Return

`Object` — a copy of the properties containing key-value pairs

---

### getProperty(key)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Returns the value associated with the provided key, or `null` if there is no such value.

```
const specialValue = UserProperties.getProperty('special');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | key for the value to retrieve |

#### Return

`String|null` — the value associated with the key

#### See also

- `~~setProperty(key, value)~~`

---

### setProperties(properties)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Bulk-sets all the properties drawn from the given object.

```
UserProperties.setProperties({special: 'sauce', 'meaning': 42});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `properties` | `Object` | an object containing the properties to set. |

#### Return

`~~UserProperties~~` — this object, for chaining

#### See also

- `~~setProperty(key, value)~~`

---

### setProperties(properties, deleteAllOthers)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Bulk-sets all the properties drawn from the given object.

```
// This deletes all other properties
UserProperties.setProperties({special: 'sauce', 'meaning': 42}, true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `properties` | `Object` | an object containing the properties to set. |
| `deleteAllOthers` | `Boolean` | whether to delete all existing properties. |

#### Return

`~~UserProperties~~` — this object, for chaining

#### See also

- `~~setProperty(key, value)~~`

---

### setProperty(key, value)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Persists the specified in value with the provided key. Any existing value associated with this key will be overwritten.

```
UserProperties.setProperty('special', 'sauce');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | key for property |
| `value` | `String` | value to associate with the key |

#### Return

`~~UserProperties~~` — this object, for chaining

#### See also

- `~~getProperty(key)~~`
