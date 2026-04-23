---
source: https://developers.google.com/apps-script/reference/contacts/contacts-app
root: apps-script
fetched_at: 2026-04-23T15:19:25.502Z
---

# Class ContactsApp

## Page Summary

- ContactsApp is a deprecated class for accessing and managing Google Contacts.
- Users can create, remove, and update their contacts using this class.
- The recommended alternative is the People API advanced service.
- Deprecated properties and methods are listed for reference.

**Deprecated.** Instead, use the [People API advanced service](https://developers.google.com/apps-script/advanced/people)

This class allows users to access their own Google Contacts and create, remove, and update contacts listed therein.

## Deprecated methods

### createContact(givenName, familyName, email)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Creates a new contact.

```
// The code below creates a new contact with the name "John Doe" and the email
// address "john.doe@example.com".
const contact = ContactsApp.createContact(
    'John',
    'Doe',
    'john.doe@example.com',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `givenName` | `String` | the first name of the contact |
| `familyName` | `String` | the last name of the contact |
| `email` | `String` | the email address of the contact |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~deleteContact(contact)~~`

---

### createContactGroup(name)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Creates a contact group with the given name

```
// The code below creates a new contact group named "Work Friends"
const group = ContactsApp.createContactGroup('Work Friends');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | the name of the new contact group |

#### Return

`~~ContactGroup~~` — the newly created contact group

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~deleteContactGroup(group)~~`

---

### deleteContact(contact)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Deletes the contact.

```
// The code below retrieves a contact with the email address
// "john.doe@example.com" and then deletes that contact.
const contact = ContactsApp.getContact('john.doe@example.com');
ContactsApp.deleteContact(contact);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contact` |  | the contact to be deleted |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~createContact(givenName, familyName, email)~~`

---

### deleteContactGroup(group)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Deletes the contact group

```
// The code below creates deletes the contact group named "Work Friends"
const group = ContactsApp.getContactGroup('Work Friends');
ContactsApp.deleteContactGroup(group);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `group` | `~~ContactGroup~~` | the contact group to delete |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~createContactGroup(name)~~`

---

### findByEmailAddress(email)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Finds a Contact with the given email address.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `email` | `String` | the email address of the contact to be found |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### findContactGroup(name)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Finds a contact group of the given name.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | the name of the contact group to find |

#### Return

`~~ContactGroup~~` — the contact group matching the given name

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getAllContacts()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get all the contacts belonging to this user.

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getContact(emailAddress)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets a contact by the email address.

If multiple contacts share the same email address, the method favors those contacts who have marked the email address as primary; if none of the contacts had the email address marked as primary or multiple contacts had the email address marked as primary, then it returns the first result in the sorted contacts order.

```
// The code below retrieves a contact with the email address
// "john.doe@example.com".
const contact = ContactsApp.getContact('john.doe@example.com');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | the email address of the contact |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContacts()~~`
- `~~getContactById(id)~~`

---

### getContactById(id)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the contact with this id.

```
// The code below retrieves the contact with the id
// "http://www.google.com/m8/feeds/contacts/john.doe%40example.com/base/7c86afde08d34ca5"
const id =
    'http://www.google.com/m8/feeds/contacts/john.doe%40example.com/base/7c86afde08d34c';
const contact = ContactsApp.getContactById(id);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | the id of the contact to retrieve |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactGroup(name)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets a contact group with the given name, or returns null if no such contact group is found.

```
// The code below returns the contact group with the name "Work Friends"
const group = ContactsApp.getContactGroup('Work Friends');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | the name of the contact group to match |

#### Return

`~~ContactGroup~~` — the matching contact group or null if no matching contact group is found

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContactGroups()~~`

---

### getContactGroupById(id)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets a contact group with the given id, or returns null if no such contact group is found.

```
// The code below returns the contact group with the id
// "http://www.google.com/m8/feeds/groups/john.doe%40example.com/base/54eefbb093fdecb"
const id =
    'http://www.google.com/m8/feeds/groups/john.doe%40example.com/base/54eefbb093fdecb';
const group = ContactsApp.getContactGroupById(id);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | the id of the contact group to match |

#### Return

`~~ContactGroup~~` — the matching contact group or null if no matching contact group is found

#### See also

- `~~getContactGroups()~~`

---

### getContactGroups()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the complete list of the user's contact groups.

A user can have a list of Contacts, and potentially a list of Contact Groups also. Each Contact Group can contain Contacts. This method returns a list of all the Contact Groups.

```
// The retrieves all the contract groups for the user and then logs the group
// name of each contact group.
const groups = ContactsApp.getContactGroups();
for (let i = 0; i < groups.length; i++) {
  Logger.log(groups[i].getName());
}
```

#### Return

`~~ContactGroup[]~~` — an array of the user's contact groups

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContactGroup(name)~~`

---

### getContacts()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all of the user's contacts.

```
// The code below will retrieve all the user's contacts
const contacts = ContactsApp.getContacts();
```

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByAddress(query)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching an address.

```
// The code below returns an array of contacts where the contact's address
// contains "San Francisco'.
const contacts = ContactsApp.getContactsByAddress('San Francisco');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's addresses |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByAddress(query, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching an address, limited to a specific field.

```
// The code below returns an array of contacts where the contact's address
// contains "San Francisco" in the Home address field.
const contacts = ContactsApp.getContactsByAddress(
    'San Francisco',
    ContactsApp.Field.HOME_ADDRESS,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's addresses |
| `label` | `~~Field~~` | the field to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByAddress(query, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching an address, limited to the specified custom address label.

```
// The code below returns an array of contacts where the contact's address
// contains "San Francisco" in a custom address label (created by the user)
// called "vacation".
const contacts = ContactsApp.getContactsByAddress('San Francisco', 'vacation');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's addresses with the specified custom address label |
| `label` | `String` | the custom address label to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByCompany(query)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching the company field.

```
// The code below returns an array of contacts where the contact's company field
// contains "Google".
const contacts = ContactsApp.getContactsByCompany('Google');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's company field |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByCustomField(query, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a given value in a custom field.

The custom field can be specified by a String or as one of the ContactsApp.ExtendedField values.

```
// The code below returns an array of contacts where the contact's custom field
// named "Favorite Sport" contains "tennis".
const contacts = ContactsApp.getContactsByCustomField(
    'tennis',
    'Favorite Sport',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `Object` | the string to search for in contact's custom field |
| `label` | `~~ExtendedField~~` | the custom field to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByDate(month, day, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a given month and day for a particular standard field.

```
// The code below returns an array of contacts where the contact's "Birthday"
// field contains April for the month and 19 for the day.
const contacts = ContactsApp.getContactsByDate(
    ContactsApp.Month.APRIL,
    19,
    ContactsApp.Field.BIRTHDAY,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `month` | `Month` | the month to match, as one of the values from ContactsApp.Month |
| `day` | `Integer` | the day to match |
| `label` | `~~Field~~` | the field to search within, from ContactsApp.Field |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByDate(month, day, year, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a given month, day, and year for a particular standard field.

```
// The code below returns an array of contacts where the contact's "Birthday"
// field contains April for the month, 19 for the day, and 1950 for the year.
const contacts = ContactsApp.getContactsByDate(
    ContactsApp.Month.APRIL,
    19,
    1950,
    ContactsApp.Field.BIRTHDAY,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `month` | `Month` | the month to match, as one of the values from ContactsApp.Month |
| `day` | `Integer` | the day to match |
| `year` | `Integer` | the year to match, can be null |
| `label` | `~~Field~~` | the field to search within, from ContactsApp.Field |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByDate(month, day, year, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a given month, day, and year for a particular custom field.

```
// The code below returns an array of contacts where the contact's custom "Start
// Date" field contains April for the month, 19 for the day, and 2011 for the
// year.
const contacts = ContactsApp.getContactsByDate(
    ContactsApp.Month.APRIL,
    19,
    2011,
    'Start Date',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `month` | `Month` | the month to match, as one of the values from ContactsApp.Month |
| `day` | `Integer` | the day to match |
| `year` | `Integer` | the year to match, can be null |
| `label` | `String` | the custom field to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByDate(month, day, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a given month and day for a particular custom field.

```
// The code below returns an array of contacts where the contact's custom "Start
// Date" field contains April for the month and 19 for the day.
const contacts = ContactsApp.getContactsByDate(
    ContactsApp.Month.APRIL,
    19,
    'Start Date',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `month` | `Month` | the month to match, as one of the values from ContactsApp.Month |
| `day` | `Integer` | the day to match |
| `label` | `String` | the custom field to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByEmailAddress(query)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching an email address.

```
// The code below returns an array of contacts where the contact's email address
// contains "john.doe@example.com'.
const contacts = ContactsApp.getContactsByEmailAddress('john.doe@example.com');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact email addresses |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByEmailAddress(query, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching an email address, limited to a specific field.

```
// The code below returns an array of contacts where the contact's email address
// contains "john.doe@example.com" in the Home email field.
const contacts = ContactsApp.getContactsByEmailAddress(
    'john.doe@example.com',
    ContactsApp.Field.HOME_EMAIL,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact email addresses |
| `label` | `~~Field~~` | the field to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByEmailAddress(query, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching an email address, limited to the specified custom email address label.

```
// The code below returns an array of contacts where the contact's email address
// contains "john.doe@example.com" in a custom email address label (created by
// the user) called "alternate".
const contacts = ContactsApp.getContactsByEmailAddress(
    'john.doe@example.com',
    'alternate',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact email addresses with the specified custom email address label |
| `label` | `String` | the custom email address label to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByGroup(group)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get the contacts in a given ContactGroup.

```
// The code below returns an array of contacts in the ContactGroup with the name
// "Work Friends".
const group = ContactsApp.getContactGroup('Work Friends');
const contacts = ContactsApp.getContactsByGroup(group);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `group` | `~~ContactGroup~~` | the group of contacts |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByIM(query)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching an instant messaging address.

```
// The code below returns an array of contacts where the contact's instant
// messaging address contains "ChatWithJohnDoe" in any instant messaging field.
const contacts = ContactsApp.getContactsByIM('ChatWithJohnDoe');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's instant messaging addresses |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByIM(query, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching an instant messaging address, limited to a specific field.

```
// The code below returns an array of contacts where the contact's instant
// messaging address contains "ChatWithJohnDoe" in the AIM instant messaging
// field.
const contacts = ContactsApp.getContactsByIM(
    'ChatWithJohnDoe',
    ContactsApp.Field.AIM,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's instant messaging addresses |
| `label` | `~~Field~~` | the field to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByIM(query, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching an instant messaging address, limited to the specified custom instant messaging label.

```
// The code below returns an array of contacts where the contact's instant
// messaging address contains "ChatWithJohnDoe" in a custom instant messaging
// label (created by the user) called "eBuddy".
const contacts = ContactsApp.getContactsByIM('ChatWithJohnDoe', 'eBuddy');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's instant messaging addresses with the specified custom instant messaging label |
| `label` | `String` | the custom instant messaging label to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByJobTitle(query)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching the job title field.

```
// The code below returns an array of contacts where the contact's job title
// field contains "Product Manager".
const contacts = ContactsApp.getContactsByJobTitle('Product Manager');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's job title field |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByName(query)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a name.

```
// The code below returns an array of contacts where the contact name contains
// "John"
const contacts = ContactsApp.getContactsByName('John');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact names |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByName(query, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a name, limited to a specific field.

```
// The code below returns an array of contacts where the contact name contains
// "John" in the Given Name field.
const contacts = ContactsApp.getContactsByName(
    'John',
    ContactsApp.Field.GIVEN_NAME,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact names |
| `label` | `~~Field~~` | the field to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByNotes(query)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching the notes field.

```
// The code below returns an array of contacts where the contact's notes field
// contains "sent birthday card".
const contacts = ContactsApp.getContactsByNotes('sent birthday card');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's notes field |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByPhone(query)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a phone number.

This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate contact.

```
// The code below returns an array of contacts where the contact's phone number
// contains "212-555-1234' in any phone number field.
const contacts = ContactsApp.getContactsByPhone('212-555-1234');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's phone numbers |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByPhone(query, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a phone number, limited to a specific field.

This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate contact.

```
// The code below returns an array of contacts where the contact's phone number
// contains "212-555-1234" in the Home phone number field.
const contacts = ContactsApp.getContactsByPhone(
    '212-555-1234',
    ContactsApp.Field.HOME_PHONE,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's phone numbers |
| `label` | `~~Field~~` | the field to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByPhone(query, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a phone number, limited to the specified custom phone number label.

This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate contact.

```
// The code below returns an array of contacts where the contact's phone number
// contains "212-555-1234" in a custom phone number label (created by the user)
// called "alternate".
const contacts = ContactsApp.getContactsByPhone('212-555-1234', 'alternate');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's phone numbers with the specified custom phone number label |
| `label` | `String` | the custom phone number label to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByUrl(query)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a URL.

```
// The code below returns an array of contacts where the contact's URL contains
// "www.example.com' in any URL field.
const contacts = ContactsApp.getContactsByUrl('www.example.com');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's URLs |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByUrl(query, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a URL, limited to a specific field.

```
// The code below returns an array of contacts where the contact's URL contains
// "www.example.com" in the Work URL field.
const contacts = ContactsApp.getContactsByUrl(
    'www.example.com',
    ContactsApp.Field.WORK_WEBSITE,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's URLs |
| `label` | `~~Field~~` | the field to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`

---

### getContactsByUrl(query, label)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Get contacts matching a URL, limited to the specified custom URL label.

```
// The code below returns an array of contacts where the contact's URL contains
// "www.example.com" in a custom URL label (created by the user) called
// "alternate work".
const contacts = ContactsApp.getContactsByUrl(
    'www.example.com',
    'alternate work',
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | the string to search for in contact's URLs with the specified custom URL label |
| `label` | `String` | the custom URL label to search within |

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getContact(emailAddress)~~`
