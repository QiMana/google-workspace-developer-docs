---
source: https://developers.google.com/apps-script/reference/properties/properties
root: apps-script
fetched_at: 2026-04-23T15:20:57.524Z
---

# Class Properties

## Page Summary

- The properties object allows access to user, document, or script properties through methods of the `PropertiesService`.
- Properties cannot be shared between different scripts.
- The `Properties` object includes methods for deleting properties, retrieving keys or all properties, and setting individual or multiple properties.

The properties object acts as the interface to access user, document, or script properties. The specific property type depends on which of the three methods of `PropertiesService` the script called: `PropertiesService.getDocumentProperties()`, `PropertiesService.getUserProperties()`, or `PropertiesService.getScriptProperties()`. Properties cannot be shared between scripts. For more information about property types, see the [guide to the Properties service](../../guides/properties.md).

## Detailed documentation

### deleteAllProperties()

Deletes all properties in the current `Properties` store.

```
// Deletes all user properties.
const userProperties = PropertiesService.getUserProperties();
userProperties.deleteAllProperties();
```

#### Return

`Properties` — this `Properties` store, for chaining

---

### deleteProperty(key)

Deletes the property with the given key in the current `Properties` store.

```
// Deletes the user property 'nickname'.
const userProperties = PropertiesService.getUserProperties();
userProperties.deleteProperty('nickname');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | the key for the property to delete |

#### Return

`Properties` — this `Properties` store, for chaining

---

### getKeys()

Gets all keys in the current `Properties` store.

```
// Sets several properties, then logs the value of each key.
const scriptProperties = PropertiesService.getScriptProperties();
scriptProperties.setProperties({
  cow: 'moo',
  sheep: 'baa',
  chicken: 'cluck',
});
const keys = scriptProperties.getKeys();
Logger.log('Animals known:');
for (let i = 0; i < keys.length; i++) {
  Logger.log(keys[i]);
}
```

#### Return

`String[]` — an array of all keys in the current `Properties` store

---

### getProperties()

Gets a copy of all key-value pairs in the current `Properties` store. Note that the returned object is not a live view of the store. Consequently, changing the properties on the returned object will not automatically update them in storage, or vice versa.

```
// Sets several script properties, then retrieves them and logs them.
const scriptProperties = PropertiesService.getScriptProperties();
scriptProperties.setProperties({
  cow: 'moo',
  sheep: 'baa',
  chicken: 'cluck',
});

const animalSounds = scriptProperties.getProperties();

// Logs:
// A chicken goes cluck!
// A cow goes moo!
// A sheep goes baa!
for (const kind in animalSounds) {
  Logger.log('A %s goes %s!', kind, animalSounds[kind]);
}
```

#### Return

`Object` — a copy of all key-value pairs in the current `Properties` store

---

### getProperty(key)

Gets the value associated with the given key in the current `Properties` store, or `null` if no such key exists.

```
// Gets the user property 'nickname'.
const userProperties = PropertiesService.getUserProperties();
const nickname = userProperties.getProperty('nickname');
Logger.log(nickname);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | the key for the property value to retrieve |

#### Return

`String` — the value associated with the given key in the current `Properties` store

---

### setProperties(properties)

Sets all key-value pairs from the given object in the current `Properties` store.

```
// Sets multiple user properties at once.
const userProperties = PropertiesService.getUserProperties();
const newProperties = {
  nickname: 'Bob',
  region: 'US',
  language: 'EN'
};
userProperties.setProperties(newProperties);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `properties` | `Object` | an object containing key-values pairs to set |

#### Return

`Properties` — this `Properties` store, for chaining

---

### setProperties(properties, deleteAllOthers)

Sets all key-value pairs from the given object in the current `Properties` store, optionally deleting all other properties in the store.

```
// Sets multiple user properties at once while deleting all other user
// properties.
const userProperties = PropertiesService.getUserProperties();
const newProperties = {
  nickname: 'Bob',
  region: 'US',
  language: 'EN'
};
userProperties.setProperties(newProperties, true);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `properties` | `Object` | an object containing key-values pairs to set |
| `deleteAllOthers` | `Boolean` | `true` to delete all other key-value pairs in the properties object; `false` to not |

#### Return

`Properties` — this `Properties` store, for chaining

---

### setProperty(key, value)

Sets the given key-value pair in the current `Properties` store.

```
// Sets the user property 'nickname' to 'Bobby'.
const userProperties = PropertiesService.getUserProperties();
userProperties.setProperty('nickname', 'Bobby');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | the key for the property |
| `value` | `String` | the value to associate with the key |

#### Return

`Properties` — this `Properties` store, for chaining
