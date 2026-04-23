---
source: https://developers.google.com/apps-script/reference/contacts/contact-group
root: apps-script
fetched_at: 2026-04-23T15:19:24.245Z
---

# Class ContactGroup

## Page Summary

- The `ContactGroup` class is deprecated and should be replaced by the People API advanced service.
- A ContactGroup represents a group of contacts.
- The methods associated with ContactGroup, such as adding or removing contacts, deleting groups, and getting group information, are also deprecated.

**Deprecated.** Instead, use the [People API advanced service](https://developers.google.com/apps-script/advanced/people)

A ContactGroup is is a group of contacts.

## Deprecated methods

### addContact(contact)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Adds the given contact to this group

```
// The code below creates a new contact and adds it to the "Work Friends"
// contact group
const contact = ContactsApp.createContact(
    'John',
    'Doe',
    'john.doe@example.com',
);
const group = ContactsApp.getContactGroup('Work Friends');
group.addContact(contact);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contact` |  | the contact to be added to the group |

#### Return

`~~ContactGroup~~` — this contact group

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~removeContact(contact)~~`

---

### deleteGroup()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Deletes this contact group.

Deletes non-system groups only; system groups cannot be deleted.

```
// The code below retrieves a contact group named "Work Friends" and deletes it
const group = ContactsApp.getContactGroup('Work Friends');
group.deleteGroup();
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~isSystemGroup()~~`

---

### getContacts()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets all the contacts in this contact group.

```
// The code below retrieves all the contacts in the group named "Work Friends"
const group = ContactsApp.getContactGroup('Work Friends');
const contacts = group.getContacts();
```

#### Return

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getGroupName()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Returns the name of this group.

#### Return

`String` — the name of this group

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getId()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the id of this contact group.

```
// The code below retrieves a contact group named "Work Friends" and gets its id
const group = ContactsApp.getContactGroup('Work Friends');
const id = group.getId();
```

#### Return

`String` — the id of this group

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getName()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the name of this contact group.

```
// The code below creates a new contact group and then retrieves its name
const group = ContactsApp.createContactGroup('Work Friends');
const name = group.getName();
```

#### Return

`String` — this name of this contact group

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~setName(name)~~`

---

### isSystemGroup()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets a boolean value to determine whether this contact group is a system group (undeletable) or not.

Systems groups are a set of groups that are predefined in Google Contacts, such as "My Contacts", "Family", "Coworkers", etc. The name of a system group usually contains the words "System Group".

```
// The code below retrieves two contact groups, then logs whether or not
// each is a system group.
const myGroup = ContactsApp.getContactGroup('Work Friends');
const systemGroup = ContactsApp.getContactGroup('System Group: Coworkers');
Logger.log(myGroup.isSystemGroup());      // Returns false, if the group exists.
Logger.log(systemGroup.isSystemGroup());  // Returns true.
```

#### Return

`Boolean` — whether or not this contact group is a system group

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### removeContact(contact)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Removes the given contact from this group

```
// The code below retrieves all the contacts named "John Doe' and removes them
// from the "Work Friends" contact group
const contacts = ContactsApp.getContactsByName('John Doe');
const group = ContactsApp.getContactGroup('Work Friends');
for (const i in contacts) {
  group.removeContact(contacts[i]);
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `contact` |  | the contact to be removed from the group |

#### Return

`~~ContactGroup~~` — this contact group

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~addContact(contact)~~`

---

### setGroupName(name)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the name of this group.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | the name to set for this group |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setName(name)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the name of this contact group.

```
// The code below retrieves the contact group named "Work Friends" and renames
// it to "Work Buddies"
const group = ContactsApp.getContactGroup('Work Friends');
group.setName('Work Buddies');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | the new name for the contact group |

#### Return

`~~ContactGroup~~` — this contact group

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

#### See also

- `~~getName()~~`
