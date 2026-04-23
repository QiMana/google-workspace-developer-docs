---
source: https://developers.google.com/workspace/admin/domain-shared-contacts/update-delete-shared-contacts
root: workspace
fetched_at: 2026-04-23T15:23:53.624Z
---

# Update or delete a shared contact

Updating and deleting a shared contact are similar because both use the contact's edit URL.

## Update a shared contact

When updating an entry, preserve *all* XML retrieved from the server. Otherwise, ignored elements are deleted. Updates can take up to 24 hours to reflect in autocomplete and the contact manager.

To update an existing shared contact:

1. [Get the entry to update](https://developers.google.com/workspace/admin/domain-shared-contacts/%0Aget-shared-contacts).
2. Edit the entry.
3. Send a `PUT` request with the updated entry to the contact's edit URL. Use the `application/atom+xml` content type and ensure the `<id>` value exactly matches the existing entry. The edit URL ends with a version number to detect conflicts. For more information, see [versioning](https://developers.google.com/gdata/docs/1.0/reference#%0AOptimistic-concurrency).
	Update the entry:
	```
	<entry>
	  <id>https://www.google.com/m8/feeds/contacts/DOMAIN/base/8411573</id>
	  <updated>2008-02-28T18:47:02.303Z</updated>
	  <category scheme='http://schemas.google.com/g/2005#kind'
	    term='http://schemas.google.com/contact/2008#contact' />
	  <title type='text'>TITLE_NAME</title>
	  <gd:name>
	    <gd:fullName>FIRST_NAME LAST_NAME</gd:fullName>
	  </gd:name>
	  <content type='text'>NOTES</content>
	  <link rel='self' type='application/atom+xml'
	    href='https://www.google.com/m8/feeds/contacts/DOMAIN/PROJECTION/8411573' />
	  <link rel='edit' type='application/atom+xml'
	    href='https://www.google.com/m8/feeds/contacts/DOMAIN/PROJECTION/8411573/1204224422303000' />
	  <gd:phoneNumber rel='http://schemas.google.com/g/2005#other'
	    primary='true'>PRIMARY_PHONE_NUMBER</gd:phoneNumber>
	  <gd:extendedProperty name="CUSTOM_PROPERTY" value="CUSTOM_PROPRTY_VALUE" />
	</entry>
	```
	Replace the following:
	- `DOMAIN`: Your domain—for example, example.com.
		- `TITLE_NAME`: A name for the entry—for example, example.com contact list.
		- `FIRST_NAME`: First name of the contact.
		- `LAST_NAME`: Last name of the contact.
		- `PROJECTION`: The projection value. For supported values, see [Projection values](https://developers.google.com/workspace/admin/domain-shared-contacts/extended-properties-projections#projection_values).
		- `PRIMARY_PHONE_NUMBER`: Preferred phone number.
		- `CUSTOM_PROPERTY`: Name for a custom property.
		- `CUSTOM_PROPRTY_VALUE`: Value for a custom property.
		Example updated entry with the edit URL highlighted:
		```
		<entry>
		<id>https://www.google.com/m8/feeds/contacts/example.com/base/8411573</id>
		<updated>2008-02-28T18:47:02.303Z</updated>
		<category scheme='http://schemas.google.com/g/2005#kind'
		  term='http://schemas.google.com/contact/2008#contact' />
		<title type='text'>Fitzgerald</title>
		<gd:name>
		  <gd:fullName>Fitzgerald</gd:fullName>
		</gd:name>
		<content type='text'>Notes</content>
		<link rel='self' type='application/atom+xml'
		  href='https://www.google.com/m8/feeds/contacts/example.com/full/8411573' />
		<link rel='edit' type='application/atom+xml'
		  href='https://www.google.com/m8/feeds/contacts/example.com/full/8411573/1204224422303000' />
		<gd:phoneNumber rel='http://schemas.google.com/g/2005#other'
		  primary='true'>456-123-2133</gd:phoneNumber>
		<gd:extendedProperty name="pet" value="hamster" />
		<gd:extendedProperty name="cuisine">
		  <italian />
		</gd:extendedProperty>
		</entry>
		```

## Delete shared contacts

Deleted contacts can take up to 24 hours to disappear from auto-complete and the contact manager. Don't update contacts by deleting and re-adding them. Instead, see [Updating contacts](#update_a_shared_contact).

- To delete a shared contact, send a `DELETE` request to the contact's edit URL. This is the same URL used to [update contacts](#update_a_shared_contact).

Google retains placeholders for deleted contacts for 30 days. Use the `showdeleted` query parameter to request them.

## Next steps

[Update or delete a photo for a shared contact](https://developers.google.com/workspace/admin/domain-shared-contacts/update-delete-photo-shared-contacts)
