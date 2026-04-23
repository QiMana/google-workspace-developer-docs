---
source: https://developers.google.com/apps-script/reference/contacts/company-field
root: apps-script
fetched_at: 2026-04-23T15:19:23.880Z
---

# Class CompanyField

## Page Summary

- The `CompanyField` functionality is deprecated and should not be used in new scripts.
- The People API advanced service is recommended as a replacement for `CompanyField`.
- Deprecated methods for `CompanyField` include deleting, getting, and setting company name and job title, as well as managing the primary company.

**Deprecated.** Instead, use the [People API advanced service](../../advanced/people.md)

Company field in a Contact.

## Deprecated methods

### deleteCompanyField()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Deletes this company field.

```
// Deletes the first company associated with contact 'John Doe'
const contacts = ContactsApp.getContactsByName('John Doe');
const company = contacts[0].getCompanies()[0];
company.deleteCompanyField();
```

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getCompanyName()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the company name.

```
// Logs company name for all companies associated with contact 'John Doe'
const contacts = ContactsApp.getContactsByName('John Doe');
const companies = contacts[0].getCompanies();
for (const i in companies) {
  Logger.log(companies[i].getCompanyName());
}
```

#### Return

`String` — the name of the company

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### getJobTitle()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets the job title.

```
// Logs job title for all companies associated with contact 'John Doe'
const contacts = ContactsApp.getContactsByName('John Doe');
const companies = contacts[0].getCompanies();
for (const i in companies) {
  Logger.log(companies[i].getJobTitle());
}
```

#### Return

`String` — the job title

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### isPrimary()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Gets whether this is the primary company.

```
// Logs true or false depending on whether each company is the primary
// company for contact 'John Doe'
const contacts = ContactsApp.getContactsByName('John Doe');
const companies = contacts[0].getCompanies();
for (const i in companies) {
  Logger.log(companies[i].isPrimary());
}
```

#### Return

`Boolean` — whether this is primary

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setAsPrimary()

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets this company as the primary company, and unsets whatever company was previously primary.

```
// Sets the first company associated with contact 'John Doe' as primary
const contacts = ContactsApp.getContactsByName('John Doe');
const company = contacts[0].getCompanies()[0];
company.setAsPrimary();
```

#### Return

`~~CompanyField~~` — this company field, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setCompanyName(company)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the company name.

```
// Sets the company name for the first company associated with contact 'John
// Doe'
const contacts = ContactsApp.getContactsByName('John Doe');
const company = contacts[0].getCompanies()[0];
company.setCompanyName('ACME Corp');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `company` | `String` | the new name for the company |

#### Return

`~~CompanyField~~` — this company field, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`

---

### setJobTitle(title)

**Deprecated.** This function is deprecated and should not be used in new scripts.

Sets the job title.

```
// Sets the job title for the first company associated with contact 'John Doe'
const contacts = ContactsApp.getContactsByName('John Doe');
const company = contacts[0].getCompanies()[0];
company.setJobTitle('Manager');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | the new job title for the contact at this company |

#### Return

`~~CompanyField~~` — this company field, useful for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](../../concepts/scopes.md#setting_explicit_scopes):

- `https://www.google.com/m8/feeds`
