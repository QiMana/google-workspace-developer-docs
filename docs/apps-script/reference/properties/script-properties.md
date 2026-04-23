---
source: https://developers.google.com/apps-script/reference/properties/script-properties
root: apps-script
fetched_at: 2026-04-23T15:20:56.837Z
---

# Class ScriptProperties

## Page Summary

- The ScriptProperties class is deprecated and should not be used in new scripts.
- Script Properties store key-value pairs persistently for a script, independent of the user running it.
- Deprecated methods include functions to delete, get, and set properties.

**Deprecated.** This class is deprecated and should not be used in new scripts.

Script Properties are key-value pairs stored by a script in a persistent store. Script Properties are scoped per script, regardless of which user runs the script.

## Deprecated methods

### deleteAllProperties()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Deletes all properties.

```
ScriptProperties.deleteAllProperties();
```

#### Return

`~~ScriptProperties~~` — this object, for chaining

#### See also

- `~~deleteProperty(key)~~`

---

### deleteProperty(key)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Deletes the property with the given key.

```
ScriptProperties.deleteProperty('special');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | key for property to delete |

#### Return

`~~ScriptProperties~~` — this object, for chaining

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
ScriptProperties.setProperties({
  "cow"     : "moo",
  "sheep"   : "baa",
  "chicken" : "cluck"
});

// Logs "A cow goes: moo"
Logger.log("A cow goes: %s", ScriptProperties.getProperty("cow"));

// This makes a copy. Any changes that happen here will not
// be written back to properties.
var animalSounds = ScriptProperties.getProperties();

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
const specialValue = ScriptProperties.getProperty('special');
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
ScriptProperties.setProperties({special: 'sauce', 'meaning': 42});
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `properties` | `Object` | an object containing the properties to set. |

#### Return

`~~ScriptProperties~~` — this object, for chaining

#### See also

- `~~setProperty(key, value)~~`

---

### setProperties(properties, deleteAllOthers)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Bulk-sets all the properties drawn from the given object.

```
// This deletes all other properties
ScriptProperties.setProperties({special: 'sauce', 'meaning': 42}, true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `properties` | `Object` | an object containing the properties to set. |
| `deleteAllOthers` | `Boolean` | whether to delete all existing properties. |

#### Return

`~~ScriptProperties~~` — this object, for chaining

#### See also

- `~~setProperty(key, value)~~`

---

### setProperty(key, value)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Persists the specified in value with the provided key. Any existing value associated with this key will be overwritten.

```
ScriptProperties.setProperty('special', 'sauce');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | key for property |
| `value` | `String` | value to associate with the key |

#### Return

`~~ScriptProperties~~` — this object, for chaining

#### See also

- `~~getProperty(key)~~`
