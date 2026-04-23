---
source: https://developers.google.com/apps-script/reference/contacts/phone-field
root: apps-script
fetched_at: 2026-04-23T15:19:26.285Z
---

# Class PhoneField

## Page Summary

- PhoneField is deprecated and the People API advanced service should be used instead.
- A PhoneField represents a phone number field within a Contact.
- Methods like getLabel(), isPrimary(), setAsPrimary(), and setLabel() are available for managing PhoneField properties.
- Deprecated methods such as deletePhoneField(), getPhoneNumber(), and setPhoneNumber() should not be used in new scripts.
- All methods require authorization with the `https://www.google.com/m8/feeds` scope.

**Deprecated.** Instead, use the [People API advanced service](https://developers.google.com/apps-script/advanced/people)

A phone number field in a Contact.

## Detailed documentation

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

`~~PhoneField~~` — this FieldValue for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

`~~PhoneField~~` — this FieldValue for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

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

`~~PhoneField~~` — this field, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

## Deprecated methods

### deletePhoneField()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Deletes this phone number field.

```
// Retrieves and deletes the work phone number field for contact 'John
// Doe'
const contacts = ContactsApp.getContactsByName('John Doe');
const phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
phoneFields[0].deletePhoneField();
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getPhoneNumber()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get the phone number for this field.

```
// Logs the work phone number for contact 'John Doe'
const contacts = ContactsApp.getContactsByName('John Doe');
const phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
Logger.log(phoneFields[0].getPhoneNumber());
```

#### Return

`String` — the number as a string

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setPhoneNumber(number)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the phone number for this field.

```
// Sets the work phone number for contact 'John Doe'
const contacts = ContactsApp.getContactsByName('John Doe');
const phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
phoneFields[0].setPhoneNumber('212-555-1234');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `number` | `String` | the new number |

#### Return

`~~PhoneField~~` — this field, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`
