---
source: https://developers.google.com/apps-script/reference/contacts/contact
root: apps-script
fetched_at: 2026-04-23T15:19:23.547Z
---

# Class Contact

## Page Summary

- All methods described, including those for getting and setting various contact details like names, addresses, phone numbers, URLs, and user-defined fields, are marked as deprecated and should not be used in new scripts.
- These deprecated methods require authorization with the `https://www.google.com/m8/feeds` scope to function.

**Deprecated.** Instead, use the [People API advanced service](https://developers.google.com/apps-script/advanced/people)

A Contact contains the name, address, and various contact details of a contact.

## Deprecated methods

### addAddress(label, address)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Adds an address to the contact with either a standard or custom label.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and adds the address
// "123 Main St, Some City, NY 10011" with the ContactsApp.Field.WORK_ADDRESS
// label.
const contacts = ContactsApp.getContactsByName('John Doe');
const address = contacts[0].addAddress(
    ContactsApp.Field.WORK_ADDRESS,
    '123 Main St, Some City, NY 10011',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label of the new address, either from ContactsApp.Field or a custom string |
| `address` | `String` | the new address |

#### Return

`~~AddressField~~` — the newly created field

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getAddresses()~~`

---

### addCompany(company, title)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Adds a company to the contact.

```
// The code below retrieves a contact named "John Doe" and adds the company
// "Google" and the job title "Product Manager".
const contacts = ContactsApp.getContactsByName('John Doe');
const url = contacts[0].addCompany('Google', 'Product Manager');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `company` | `String` | the name of the company to add to this contact |
| `title` | `String` | the job title associated with this contact for this company |

#### Return

`~~CompanyField~~` — the newly created field

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getCompanies()~~`

---

### addCustomField(label, content)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Adds a custom field to the contact with either an extended or custom label.

The label can be either from ContactsApp.ExtendedField or a custom label string.

```
// The code below retrieves a contact named "John Doe" and adds the custom field
// ContactsApp.ExtendedField.HOBBY with the value "hiking".
// Note that ContactsApp.ExtendedField.HOBBY is not the same as a custom field
// named 'HOBBY'.
const contacts = ContactsApp.getContactsByName('John Doe');
contacts[0].addCustomField(ContactsApp.ExtendedField.HOBBY, 'hiking');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label of the new address, either from ContactsApp.ExtendedField or a custom string |
| `content` | `Object` | the value to store in the custom field |

#### Return

`~~CustomField~~` — the newly created field

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getCustomFields()~~`

---

### addDate(label, month, day, year)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Adds a date to the contact with either an standard or custom label.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and adds a
// ContactsApp.ExtendedField.BIRTHDAY with the value "April 19, 1950".
const contacts = ContactsApp.getContactsByName('John Doe');
const birthday = contacts[0].addDate(
    ContactsApp.Field.BIRTHDAY,
    ContactsApp.Month.APRIL,
    19,
    1950,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label of the new date, either from ContactsApp.Field or a custom string |
| `month` | `Month` | the month, from ContactApps.Month |
| `day` | `Integer` | the day |
| `year` | `Integer` | the year |

#### Return

`~~DateField~~` — the newly created date

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getDates()~~`

---

### addEmail(label, address)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Add an email address with a standard label (home, work, etc.) or a custom label

```
// The code below retrieves a contact named "John Doe" and adds the email
// address "j.doe@example.com" to the ContactsApp.Field.HOME_EMAIL label.
const contacts = ContactsApp.getContactsByName('John Doe');
const emailField = contacts[0].addEmail(
    ContactsApp.Field.HOME_EMAIL,
    'j.doe@example.com',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label of the new email, either from ContactsApp.Field or a custom string |
| `address` | `String` | the new email address |

#### Return

`~~EmailField~~` — the newly added field

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### addIM(label, address)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Adds an IM address to the contact with either a standard or custom label.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and adds the IM address
// "ChatWithJohn" with the ContactsApp.Field.AIM label.
const contacts = ContactsApp.getContactsByName('John Doe');
const email = contacts[0].addIM(ContactsApp.Field.AIM, 'ChatWithJohn');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label of the new IM address, either from ContactsApp.Field or a custom string |
| `address` | `String` | the new IM address |

#### Return

`~~IMField~~` — the newly created field

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getIMs()~~`

---

### addPhone(label, number)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Adds a phone number to the contact with either a standard or custom label.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and adds the phone number
// "212-555-1234" with the ContactsApp.Field.WORK_PHONE label.
const contacts = ContactsApp.getContactsByName('John Doe');
const phone = contacts[0].addPhone(
    ContactsApp.Field.WORK_PHONE,
    '212-555-1234',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label of the new phone number, either from ContactsApp.Field or a custom string |
| `number` | `String` | the new phone number |

#### Return

`~~PhoneField~~` — the newly created field

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getPhones()~~`

---

### addToGroup(group)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Adds this contact to the given contact group.

```
// The code below creates a new contact and then adds it to the contact group
// named "Work Friends"
let contact = ContactsApp.createContact('John', 'Doe', 'john.doe@example.com');
const group = ContactsApp.getContactGroup('Work Friends');
contact = contact.addToGroup(group);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `group` | `~~ContactGroup~~` | the contact group to add this contact to |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~removeFromGroup(group)~~`

---

### addUrl(label, url)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Adds a URL to the contact with either a standard or custom label.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and adds the URL
// "http://www.example.com" with the ContactsApp.Field.WORK_WEBSITE label.
const contacts = ContactsApp.getContactsByName('John Doe');
const url = contacts[0].addUrl(
    ContactsApp.Field.WORK_WEBSITE,
    'http://www.example.com',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label of the new address, either from ContactsApp.Field or a custom string |
| `url` | `String` | the new URL |

#### Return

`~~UrlField~~` — the newly created field

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getUrls()~~`

---

### deleteContact()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Deletes this contact.

```
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  contacts[i].deleteContact();
}
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getAddresses()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the addresses for this contact.

```
// The code below logs the addresses of all the contacts whose names contain
// "John Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  Logger.log(contacts[i].getAddresses());
}
```

#### Return

`~~AddressField[]~~` — a list of addresses

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addAddress(label, address)~~`

---

### getAddresses(label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the addresses for this contact matching a particular field.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the addresses
// associated with that contact that are in the ContactsApp.Field.WORK_ADDRESS
// label.
const contacts = ContactsApp.getContactsByName('John Doe');
const addresses = contacts[0].getAddresses(ContactsApp.Field.WORK_ADDRESS);
for (const i in addresses) {
  Logger.log(addresses[i].getAddress());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label to match, either from ContactsApp.Field or a custom string |

#### Return

`~~AddressField[]~~` — a list of addresses

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addAddress(label, address)~~`

---

### getCompanies()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the companies for this contact.

```
// The code below logs the company names of all the contacts whose names contain
// "John Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  const companies = contacts[i].getCompanies();
  for (const j in companies) {
    Logger.log(companies[j].getCompanyName());
  }
}
```

#### Return

`~~CompanyField[]~~` — a list of companies

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addCompany(company, title)~~`

---

### getContactGroups()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the contact groups that contain this contact.

```
// The code below gets a contact named "John Doe" and retrieves all the contact
// groups that the contact belongs to
const contacts = ContactsApp.getContactsByName('John Doe');
const groups = contacts[0].getContactGroups();
```

#### Return

`~~ContactGroup[]~~` — the groups containing this contact

#### See also

- `~~addToGroup(group)~~`

---

### getCustomFields()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the custom fields for this contact.

```
// The code below retrieves a contact named "John Doe" and logs the custom
// fields associated with that contact
const contacts = ContactsApp.getContactsByName('John Doe');
const fields = contacts[0].getCustomFields();
for (const i in fields) {
  Logger.log(fields[i].getValue());
}
```

#### Return

`~~CustomField[]~~` — a list of custom fields

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addCustomField(label, content)~~`

---

### getCustomFields(label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the custom fields for this contact matching a particular field.

The label can be either a standard label from ContactsApp.ExtendedField or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the custom
// fields associated with that contact that are in the
// ContactsApp.ExtendedField.HOBBY label.
const contacts = ContactsApp.getContactsByName('John Doe');
const hobbies = contacts[0].getCustomFields(ContactsApp.ExtendedField.HOBBY);
for (const i in hobbies) {
  Logger.log(hobbies[i].getValue());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label to match, either from ContactsApp.ExtendedField or a custom string |

#### Return

`~~CustomField[]~~` — a list of custom fields

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addCustomField(label, content)~~`

---

### getDates()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the dates for this contact.

```
// The code below retrieves a contact named "John Doe" and logs the label of the
// date associated with that contact
const contacts = ContactsApp.getContactsByName('John Doe');
const dates = contacts[0].getDates();
for (const i in dates) {
  Logger.log(dates[i].getLabel());
}
```

#### Return

`~~DateField[]~~` — a list of dates

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addDate(label, month, day, year)~~`

---

### getDates(label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the dates for this contact matching a particular field.

The label can be either a standard label from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the day of the
// month associated with that contact that are in the ContactsApp.Field.BIRTHDAY
// label.
const contacts = ContactsApp.getContactsByName('John Doe');
const birthdays = contacts[0].getDates(ContactsApp.Field.BIRTHDAY);
for (const i in birthdays) {
  Logger.log(birthdays[i].getDay());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label to match, either from ContactsApp.Field or a custom string |

#### Return

`~~DateField[]~~` — a list of dates

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addDate(label, month, day, year)~~`

---

### getEmailAddresses()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets a list of the email addresses available for this Contact.

#### Return

`String[]` — a list of email addresses available for this Contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getEmails()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the email addresses of this contact.

```
// The code below retrieves a contact named "John Doe" and logs the email
// addresses associated with that contact
const contacts = ContactsApp.getContactsByName('John Doe');
const emails = contacts[0].getEmails();
for (const i in emails) {
  Logger.log(emails[i].getAddress());
}
```

#### Return

`~~EmailField[]~~` — the list of email addresses for the contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addEmail(label, address)~~`

---

### getEmails(label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the email addresses for this contact matching a particular field.

The label can be either a standard label from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the email
// addresses associated with that contact that are in the
// ContactsApp.Field.HOME_EMAIL label.
const contacts = ContactsApp.getContactsByName('John Doe');
const emails = contacts[0].getEmails(ContactsApp.Field.HOME_EMAIL);
for (const i in emails) {
  Logger.log(emails[i].getAddress());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label to match, either from ContactsApp.Field or a custom string |

#### Return

`~~EmailField[]~~` — the list of email addresses for the contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addEmail(label, address)~~`

---

### getFamilyName()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the family name (last name) of the contact as a string.

```
// The code below logs the family name of all the contacts whose names contain
// "John"
const contacts = ContactsApp.getContactsByName('John');
for (const i in contacts) {
  Logger.log(contacts[i].getFamilyName());
}
```

#### Return

`String` — the family name of the contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~setFamilyName(familyName)~~`

---

### getFullName()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the full name (given name and last name) of the contact as a string.

```
// The code below logs the full name of all the contacts whose names contain
// "John"
const contacts = ContactsApp.getContactsByName('John');
for (const i in contacts) {
  Logger.log(contacts[i].getFullName());
}
```

#### Return

`String` — the full name of the contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~setFullName(fullName)~~`

---

### getGivenName()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the given name (first name) of the contact as a string.

```
// The code below logs the given name of all the contacts whose names contain
// "Smith"
const contacts = ContactsApp.getContactsByName('Smith');
for (const i in contacts) {
  Logger.log(contacts[i].getGivenName());
}
```

#### Return

`String` — the given name of the contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~setGivenName(givenName)~~`

---

### getHomeAddress()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the home address of this Contact, or empty string if none exists.

#### Return

`String` — the home address of this Contact, or empty string if none exists

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getHomeFax()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the home fax number of this Contact or empty string if none exists.

#### Return

`String` — the home fax number of this Contact or empty string if none exists

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getHomePhone()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the home phone number of this Contact or empty string if none exists.

#### Return

`String` — the home phone number of this Contact or empty string if none exists

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getIMs()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the IM addresses for this contact.

```
// The code below logs the IM addresses of all the contacts whose names contain
// "John Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  Logger.log(contacts[i].getIMs());
}
```

#### Return

`~~IMField[]~~` — a list of IM addresses

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addIM(label, address)~~`

---

### getIMs(label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the IM addresses for this contact matching a particular field.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the IM addresses
// associated with that contact that are in the ContactsApp.Field.GOOGLE_TALK
// label.
const contacts = ContactsApp.getContactsByName('John Doe');
const imAddresses = contacts[0].getIMs(ContactsApp.Field.GOOGLE_TALK);
for (const i in imAddresses) {
  Logger.log(imAddresses[i].getAddress());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label to match, either from ContactsApp.Field or a custom string |

#### Return

`~~IMField[]~~` — a list of IM addresses

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addIM(label, address)~~`

---

### getId()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Returns the unique id of this contact.

```
const contact = ContactsApp.createContact(
    'John',
    'Doe',
    'john.doe@example.com',
);
const id = contact.getId();
```

#### Return

`String` — the id of this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getInitials()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the contact's initials.

```
// The code below logs the initials of all the contacts whose names contain
// "John Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  Logger.log(contacts[i].getInitials());
}
```

#### Return

`String` — the initials of the contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~setInitials(initials)~~`

---

### getLastUpdated()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the date this contact was last updated.

```
// The code below logs the last updated date of all the contacts whose names
// contain "John Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  Logger.log(contacts[i].getLastUpdated());
}
```

#### Return

`Date` — the date this contact was last updated

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getMaidenName()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the maiden name of the contact as a string.

```
// The code below logs the maiden name of all the contacts whose names contain
// "Jane"
const contacts = ContactsApp.getContactsByName('Jane');
for (const i in contacts) {
  Logger.log(contacts[i].getMaidenName());
}
```

#### Return

`String` — the maiden name of the contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~setMaidenName(maidenName)~~`

---

### getMiddleName()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the middle name of the contact as a string.

```
// The code below logs the middle name of all the contacts whose names contain
// "Smith"
const contacts = ContactsApp.getContactsByName('Smith');
for (const i in contacts) {
  Logger.log(contacts[i].getMiddleName());
}
```

#### Return

`String` — the middle name of the contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~setMiddleName(middleName)~~`

---

### getMobilePhone()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the mobile phone number of this Contact or empty string if none exists.

#### Return

`String` — the mobile phone number of this Contact or empty string if none exists

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getNickname()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the nickname of the contact as a string.

```
// The code below logs the nickname of all the contacts whose names contain
// "John Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  Logger.log(contacts[i].getNickname());
}
```

#### Return

`String` — the nickname of the contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~setNickname(nickname)~~`

---

### getNotes()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the notes associated with this contact, or an empty string if there are no notes.

```
// The code below logs the notes of all the contacts whose names contain "John
// Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  Logger.log(contacts[i].getNotes());
}
```

#### Return

`String` — the notes associated with this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~setNotes(notes)~~`

---

### getPager()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the pager phone number of this Contact or empty string if none exists.

#### Return

`String` — the pager phone number of this Contact or empty string if none exists

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getPhones()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the phone numbers for this contact.

```
// The code below logs the phone numbers of all the contacts whose names contain
// "John Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  Logger.log(contacts[i].getPhones());
}
```

#### Return

`~~PhoneField[]~~` — a list of phone numbers

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addPhone(label, number)~~`

---

### getPhones(label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the phone numbers for this contact matching a particular field.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the phone
// numbers associated with that contact that are in the
// ContactsApp.Field.WORK_PHONE label.
const contacts = ContactsApp.getContactsByName('John Doe');
const phones = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
for (const i in phones) {
  Logger.log(phones[i].getPhoneNumber());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label to match, either from ContactsApp.Field or a custom string |

#### Return

`~~PhoneField[]~~` — a list of phone numbers

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addPhone(label, number)~~`

---

### getPrefix()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the prefix to the contact's name.

```
// The code below logs the prefix of all the contacts whose names contain "John
// Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  Logger.log(contacts[i].getPrefix());
}
```

#### Return

`String` — the prefix of the contact's name

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~setPrefix(prefix)~~`

---

### getPrimaryEmail()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the primary email address of the contact as a string.

```
// The code below logs the primary email address of all the contacts whose names
// contain "John Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  Logger.log(contacts[i].getPrimaryEmail());
}
```

#### Return

`String` — the primary email address of the contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getShortName()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the short name of the contact as a string.

```
// The code below logs the short name of all the contacts whose names contain
// "Johnathan"
const contacts = ContactsApp.getContactsByName('Johnathan');
for (const i in contacts) {
  Logger.log(contacts[i].getShortName());
}
```

#### Return

`String` — the short name of the contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~setShortName(shortName)~~`

---

### getSuffix()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the suffix to the contact's name.

```
// The code below logs the suffix of all the contacts whose names contain "John
// Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  Logger.log(contacts[i].getSuffix());
}
```

#### Return

`String` — the suffix of the contact's name

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~setSuffix(suffix)~~`

---

### getUrls()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the URLs for this contact.

```
// The code below logs the URLs of all the contacts whose names contain "John
// Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  Logger.log(contacts[i].getUrls());
}
```

#### Return

`~~UrlField[]~~` — a list of URLs

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addUrl(label, url)~~`

---

### getUrls(label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the URLs for this contact matching a particular field.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the URLs
// associated with that contact that are in the ContactsApp.Field.WORK_WEBSITE
// label.
const contacts = ContactsApp.getContactsByName('John Doe');
const urls = contacts[0].getUrls(ContactsApp.Field.WORK_WEBSITE);
for (const i in urls) {
  Logger.log(urls[i].getAddress());
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `label` | `Object` | the label to match, either from ContactsApp.Field or a custom string |

#### Return

`~~UrlField[]~~` — a list of URLs

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addUrl(label, url)~~`

---

### getUserDefinedField(key)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the user defined value associated with the given key.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | the key can be any basic type (String, int, etc.) |

#### Return

`String` — the user defined content that has been stored with this key

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getUserDefinedFields()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the user defined fields for this Contact and returns them as the properties of a JavaScript Object.

#### Return

`Object` — the user defined fields for this Contact, as properties of a JavaScript Object

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getWorkAddress()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the work address of this Contact, or empty string if none exists.

#### Return

`String` — the work address of this Contact, or empty string if none exists

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getWorkFax()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the work fax number of this Contact or empty string if none exists.

#### Return

`String` — the work fax number of this Contact or empty string if none exists

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getWorkPhone()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the work phone number of this Contact or empty string if none exists.

#### Return

`String` — the work phone number of this Contact or empty string if none exists

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### removeFromGroup(group)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Removes this contact from the given contact group.

```
// The code below gets all the contacts named "John Doe" and then removes each
// of them from the "Work Friends" contact group
const contacts = ContactsApp.getContactsByName('John Doe');
const group = ContactsApp.getContactGroup('Work Friends');
for (const i in contacts) {
  contacts[i] = contacts[i].removeFromGroup(group);
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `group` | `~~ContactGroup~~` | the contact group to remove this contact from |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addToGroup(group)~~`

---

### setFamilyName(familyName)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the family name (last name) of the contact.

```
// The code below changes the family name of all the contacts whose names are
// "John Doe" to "Doe-Smith"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  contacts[i].setFamilyName('Doe-Smith');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `familyName` | `String` | the new family name of the contact |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getFamilyName()~~`

---

### setFullName(fullName)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the full name (given name and last name) of the contact.

```
// The code below changes the full name of all the contacts whose names are
// "John Doe" to "Johnny Doe"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  contacts[i].setFullName('Johnny Doe');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `fullName` | `String` | the new full name of the contact |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getFullName()~~`

---

### setGivenName(givenName)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the given name (first name) of the contact.

```
// The code below changes the given name of all the contacts whose names are
// "John Doe" to "Johnny"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  contacts[i].setGivenName('Johnny');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `givenName` | `String` | the new given name of the contact |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getGivenName()~~`

---

### setHomeAddress(addr)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the home address of this Contact.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `addr` | `String` | the home address to set |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setHomeFax(phone)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the home fax number of this Contact.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `phone` | `String` | the home fax number to set |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setHomePhone(phone)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the home phone number of this Contact.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `phone` | `String` | the home phone number to set |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setInitials(initials)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the contact's initials.

```
// The code below sets the initials of all the contacts whose names are
// "Johnathan Doe" to "JD"
const contacts = ContactsApp.getContactsByName('Johnathan Doe');
for (const i in contacts) {
  contacts[i].setInitials('JD');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `initials` | `String` | the new initials of the contact |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getInitials()~~`

---

### setMaidenName(maidenName)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the maiden name of the contact.

```
// The code below changes the maiden name of all the contacts whose names are
// "Jane Doe" to "Smith"
const contacts = ContactsApp.getContactsByName('Jane Doe');
for (const i in contacts) {
  contacts[i].setMaidenName('Smith');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `maidenName` | `String` | the new maiden name of the contact |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getMaidenName()~~`

---

### setMiddleName(middleName)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the middle name of the contact.

```
// The code below changes the middle name of all the contacts whose names are
// "John Doe" to "Danger"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  contacts[i].setMiddleName('Danger');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `middleName` | `String` | the new middle name of the contact |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getMiddleName()~~`

---

### setMobilePhone(phone)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the mobile phone number of this Contact.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `phone` | `String` | the mobile phone number to set |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setNickname(nickname)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the nickname of the contact.

```
// The code below changes the nickname of all the contacts whose names are "John
// Doe" to "JohnnyD"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  contacts[i].setNickname('JohnnyD');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `nickname` | `String` | the new nickname of the contact |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getNickname()~~`

---

### setNotes(notes)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the notes associated with this contact.

```
// The code below sets the notes of all the contacts whose names are "John Doe"
// to "Met him at the hackathon"
const contacts = ContactsApp.getContactsByName('John Doe');
for (const i in contacts) {
  contacts[i].setNotes('Met him at the hackathon');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `notes` | `String` | the notes to be stored for this contact |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getNotes()~~`

---

### setPager(phone)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the pager number of this Contact.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `phone` | `String` | the pager number to set |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setPrefix(prefix)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the prefix to the contact's name.

```
// The code below sets the prefix of all the contacts whose names are "Johnathan
// Doe" to "Mr"
const contacts = ContactsApp.getContactsByName('Johnathan Doe');
for (const i in contacts) {
  contacts[i].setPrefix('Mr');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `prefix` | `String` | the new prefix of the contact's name |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getPrefix()~~`

---

### setPrimaryEmail(primaryEmail)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the primary email address of this Contact.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `primaryEmail` | `String` | the primary email address to set |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setShortName(shortName)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the short name of the contact.

```
// The code below changes the short name of all the contacts whose names are
// "Johnathan Doe" to "John"
const contacts = ContactsApp.getContactsByName('Johnathan Doe');
for (const i in contacts) {
  contacts[i].setShortName('John');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `shortName` | `String` | the new short name of the contact |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getShortName()~~`

---

### setSuffix(suffix)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the suffix to the contact's name.

```
// The code below sets the suffix of all the contacts whose names are "Johnathan
// Doe" to "Jr"
const contacts = ContactsApp.getContactsByName('Johnathan Doe');
for (const i in contacts) {
  contacts[i].setSuffix('Jr');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `suffix` | `String` | the new suffix of the contact's name |

#### Return

`~~Contact~~` — this contact

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getSuffix()~~`

---

### setUserDefinedField(key, value)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets a single user defined field for this Contact, to be stored with a given key.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | the key can be any basic type (String, int, etc.) |
| `value` | `String` | the value can be any basic type (String, int, etc.) |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setUserDefinedFields(o)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the user defined fields for this Contact with the properties of the given Object.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `o` | `Object` | an Object with one or more properties in the form {key: value} |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setWorkAddress(addr)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the work address of this Contact.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `addr` | `String` | the work address to set |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setWorkFax(phone)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the work fax number of this Contact.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `phone` | `String` | the work fax number to set |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setWorkPhone(phone)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the work phone number of this Contact.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `phone` | `String` | the work phone number to set |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`
