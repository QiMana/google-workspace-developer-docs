---
source: https://developers.google.com/apps-script/reference/contacts/address-field
root: apps-script
fetched_at: 2026-04-23T15:19:22.189Z
---

# Class AddressField

## Page Summary

- The AddressField in a contact is deprecated; use the People API advanced service instead.
- You can get and set the address and label for an AddressField using the provided methods.
- You can check and set if an AddressField is the primary field value.
- The `deleteAddressField()` method is deprecated for removing an address field.

**Deprecated.** Instead, use the [People API advanced service](../../advanced/people.md)

Address field in a contact.

## Detailed documentation

### getAddress()

Get the address for this field.

```
// Logs the address for the 'Home Address' field for contact 'John Doe'.
// Can be used similarly for other fields that contain addresses.
const contacts = ContactsApp.getContactsByName('John Doe');
const homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
Logger.log(homeAddress[0].getAddress());
```

#### Return

`String` — the address as a string

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getLabel()

Gets the label for this field. This may be a Field, ExtendedField, or a String.

```
// Logs the label for all the address fields associated with contact
// 'John Doe'. This method can be similarly called for any field that has
// a label.
const contacts = ContactsApp.getContactsByName('John Doe');
const addressFields = contacts[0].getAddresses();
for (let i = 0; i < addressFields.length; i++) {
  Logger.log(addressFields[i].getLabel());
}
```

#### Return

`Object` — the label for this field

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### isPrimary()

Gets whether this is the primary field value.

```
// Logs whether or not the first address field associated with contact
// 'John Doe' is labeled as primary. This method can be similarly called
// for any field.
const contacts = ContactsApp.getContactsByName('John Doe');
const addressFields = contacts[0].getAddresses();
Logger.log(addressFields[0].isPrimary());
```

#### Return

`Boolean` — whether this is primary

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setAddress(address)

Sets the address of this field.

```
// Sets the address for the 'Home Address' field for contact 'John Doe'.
// Can be used similarly for other fields that contain addresses.
const contacts = ContactsApp.getContactsByName('John Doe');
const homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
homeAddress[0].setAddress('123 Main St, Raleigh, NC, 27601');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `address` | `String` | the new address |

#### Return

`~~AddressField~~` — this field, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setAsPrimary()

Sets this field to primary.

```
// Sets the first address field associated with contact 'John Doe'
// as primary. This method can be similarly called for any field.
const contacts = ContactsApp.getContactsByName('John Doe');
const addressFields = contacts[0].getAddresses();
addressFields[0].setAsPrimary();
```

#### Return

`~~AddressField~~` — this FieldValue for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setLabel(field)

Sets the label of this field.

```
// Sets the label to 'Work' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
const contacts = ContactsApp.getContactsByName('John Doe');
const addressFields = contacts[0].getAddresses();
addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `field` | `~~Field~~` | the new standard label |

#### Return

`~~AddressField~~` — this FieldValue for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setLabel(label)

Sets the label of this field.

```
// Sets the label to 'Apartment' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
const contacts = ContactsApp.getContactsByName('John Doe');
const addressFields = contacts[0].getAddresses();
addressFields[0].setLabel('Apartment');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `String` | the new label for this field |

#### Return

`~~AddressField~~` — this field, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

## Deprecated methods

### deleteAddressField()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Deletes this address field.

```
// The code below deletes the home addresses for a contact named "John Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
const homeAddresses = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
for (const i in homeAddresses) {
  homeAddresses[i].deleteAddressField();
}
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`
