---
source: https://developers.google.com/apps-script/reference/contacts/custom-field
root: apps-script
fetched_at: 2026-04-23T15:19:24.019Z
---

# Class CustomField

## Page Summary

- The `CustomField` class is deprecated and users should use the People API advanced service instead.
- Custom fields represent a custom data entry for a contact.
- While some methods like `getLabel()` and `setLabel(label)` are still available, many methods for managing custom fields are deprecated.
- Deprecated methods for `CustomField` include `deleteCustomField()`, `getValue()`, `setLabel(field)`, and `setValue(value)`.

**Deprecated.** Instead, use the [People API advanced service](https://developers.google.com/apps-script/advanced/people)

A custom field in a Contact.

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

`~~CustomField~~` — this field, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

## Deprecated methods

### deleteCustomField()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Deletes this field.

```
const contacts = ContactsApp.getContactsByName('John Doe');
const fields = contacts[0].getCustomFields();
for (let i = 0; i < fields.length; i++) {
  if (fields[i].getLabel() === 'foo') {
    fields[i].deleteCustomField();
  }
}
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getValue()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the value of the field.

```
// Logs the value of all the custom fields for contact 'John Doe'
const contacts = ContactsApp.getContactsByName('John Doe');
const fields = contacts[0].getCustomFields();
for (const i in fields) {
  Logger.log(fields[i].getValue());
}
```

#### Return

`Object` — the value stored in the field

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setLabel(field)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the label of this field.

```
// Sets the first custom field associated with contact 'John Doe' to use 'Mail
// application' as a label, with 'Gmail' as the value.
const contacts = ContactsApp.getContactsByName('John Doe');
const field = contacts[0].getCustomFields()[0];
field.setLabel('Mail application');
field.setValue('Gmail');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `field` | `~~ExtendedField~~` | the new standard label |

#### Return

`~~CustomField~~` — this field, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setValue(value)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the value of this field.

```
// Sets the first custom field associated with contact 'John Doe' to use 'Mail
// application' as a label, with 'Gmail' as the value.
const contacts = ContactsApp.getContactsByName('John Doe');
const field = contacts[0].getCustomFields()[0];
field.setLabel('Mail application');
field.setValue('Gmail');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `Object` | the new value |

#### Return

`~~CustomField~~` — this field, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`
