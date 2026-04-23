---
source: https://developers.google.com/workspace/admin/domain-shared-contacts/shared-contacts-elements
root: workspace
fetched_at: 2026-04-23T15:23:53.470Z
---

# Shared contacts elements

The Domain Shared Contacts API uses the [standard Google Data API elements](https://developers.google.com/gdata/docs/2.0/elements) and elements that are specific for shared contacts.

A contact entry takes the form of an extended [Contact kind](https://developers.google.com/gdata/docs/2.0/elements#gdContactKind), representing a person, a venue—such as a club or a restaurant—or an organization. The contact kind appears in XML as an `<atom:entry>` element that contains various extension elements from the Google Data namespace.

The `category` element indicating that the entry is a contact looks like the following:

```
<atom:category scheme="http://schemas.google.com/g/2005#kind"
  term="http://schemas.google.com/contact/2008#contact"/>
```

In the Domain Shared Contacts API, several elements are slightly more restrictive than the contact kind. For the following elements, you supply either a `rel` attribute or a `label` attribute, but not both:

- `gd:email`
- `gd:im`
- `gd:organization`
- `gd:phoneNumber`
- `gd:structuredPostalAddress`

When you create or update a shared contact, if you supply both `rel` and `label`, or neither, for any of those elements, then the server rejects the entry.

## Photos support

Together with standard properties' values like self or edit, you can use `rel` values for `atom:link` elements. When using photo links, authorization token in the HTTP header has to be specified. For more information, see [Learn about authentication and authorization](../../guides/auth-overview.md).

- With a `GET` command, `rel="http://schemas.google.com/contacts/2008/rel#photo"` adds the capability of reading the photo associated with the contact. You can use the URL specified in `href` to read the latest version of the photo associated with the contact. The link isn't shown if there is no picture for the contact.

Example:

```
<atom:link rel="http://schemas.google.com/contacts/2008/rel#photo"
           href="https://www.google.com/m8/feeds/photos/media/jo%40example.com/1234" type="image/*" />
```

- With a `PUT` or `DELETE` command, `rel="http://schemas.google.com/contacts/2008/rel#edit-photo"` adds the capability of updating or deleting a local photo that is associated with the contact.

Example:

```
<atom:link rel="http://schemas.google.com/contacts/2008/rel#edit-photo"
           href="https://www.google.com/m8/feeds/photos/media/jo%40example.com/1234/photo4524" />
```

## gContact namespace

The XML namespace URL for `gContact` is `http://schemas.google.com/contact/2008`.

In this namespace, an element is defined that represents a group to which the contact belongs.

### gContact:groupMembershipInfo properties

| Property | Description |
| --- | --- |
| `href` | Identifies the group to which the contact belongs or belonged. The group is referenced by its ID. |
| `deleted="true"` | Means that the group membership was removed for the contact. This attribute is only included if `showdeleted` is specified as a query parameter, otherwise `groupMembershipInfo` for groups that a contact doesn't belong to anymore isn't returned. |
