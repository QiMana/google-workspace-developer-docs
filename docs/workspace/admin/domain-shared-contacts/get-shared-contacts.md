---
source: https://developers.google.com/workspace/admin/domain-shared-contacts/get-shared-contacts
root: workspace
fetched_at: 2026-04-23T15:23:53.400Z
---

# Get shared contacts

Request shared user contacts in the following ways:

- All shared contacts
- A set of contacts matching specified criteria
- A single shared contact
- A photo for a contact

By default, entries in a feed are unordered.

## Get all shared contacts

1. To get all shared contacts, send an HTTP `GET` request to the contacts feed URL:
	```
	GET https://www.google.com/m8/feeds/contacts/DOMAIN/PROJECTION
	```
	Replace the following:
	- `DOMAIN`: Your domain. For example, example.com.
		- `PROJECTION`: The projection value. For supported values, see [Projection values](https://developers.google.com/workspace/admin/domain-shared-contacts/extended-properties-projections#projection_values).
	The server returns an `HTTP 200 OK` status code and an Atom 1.0 feed. The following example shows a contacts feed with one entry:
	```
	<feed xmlns='http://www.w3.org/2005/Atom'
	    xmlns:openSearch='http://a9.com/-/spec/opensearchrss/1.0/'
	    xmlns:gd='http://schemas.google.com/g/2005'
	    xmlns:gContact='http://schemas.google.com/contact/2008'
	    xmlns:batch='http://schemas.google.com/gdata/batch'>
	  <id>https://www.google.com/m8/feeds/contacts/example.com/base</id>
	  <updated>2008-03-05T12:36:38.836Z</updated>
	  <category scheme='http://schemas.google.com/g/2005#kind'
	    term='http://schemas.google.com/contact/2008#contact' />
	  <title type='text'>example.com's Contacts</title>
	  <link rel='http://schemas.google.com/g/2005#feed'
	    type='application/atom+xml'
	    href='https://www.google.com/m8/feeds/contacts/example.com/full' />
	  <link rel='http://schemas.google.com/g/2005#post'
	    type='application/atom+xml'
	    href='https://www.google.com/m8/feeds/contacts/example.com/full' />
	  <link rel='http://schemas.google.com/g/2005#batch'
	    type='application/atom+xml'
	    href='https://www.google.com/m8/feeds/contacts/example.com/full/batch' />
	  <link rel='self' type='application/atom+xml'
	    href='https://www.google.com/m8/feeds/contacts/example.com/full?max-results=25' />
	  <author>
	    <name>example.com</name>
	    <email>example.com</email>
	  </author>
	  <generator version='1.0' uri='https://www.google.com/m8/feeds/contacts'>
	    Contacts
	  </generator>
	  <openSearch:totalResults>1</openSearch:totalResults>
	  <openSearch:startIndex>1</openSearch:startIndex>
	  <openSearch:itemsPerPage>25</openSearch:itemsPerPage>
	  <entry>
	    <id>
	      https://www.google.com/m8/feeds/contacts/example.com/base/c9012de
	    </id>
	    <updated>2008-03-05T12:36:38.835Z</updated>
	    <category scheme='http://schemas.google.com/g/2005#kind'
	      term='http://schemas.google.com/contact/2008#contact' />
	    <title type='text'>Fitzgerald</title>
	    <gd:name>
	      <gd:fullName>Fitzgerald</gd:fullName>
	    </gd:name>
	    <link rel="http://schemas.google.com/contacts/2008/rel#photo" type="image/*"
	      href="http://google.com/m8/feeds/photos/media/example.com/c9012de"/>
	    <link rel='self' type='application/atom+xml'
	      href='https://www.google.com/m8/feeds/contacts/example.com/full/c9012de' />
	    <link rel='edit' type='application/atom+xml'
	      href='https://www.google.com/m8/feeds/contacts/example.com/full/c9012de/1204720598835000' />
	    <gd:phoneNumber rel='http://schemas.google.com/g/2005#home'
	      primary='true'>
	      456
	    </gd:phoneNumber>
	    <gd:extendedProperty name="pet" value="hamster" />
	  </entry>
	</feed>
	```
2. Feeds return a maximum of 10MB in a single response. To get the entire list, repeatedly follow the **Next** link in the returned feed.

## Get shared contacts using query parameters

Request contacts matching specified criteria, such as those updated after a certain date. Full-text queries and email address lookups are not supported. For all query parameters, see the [Domain Shared Contacts API reference guide](https://developers.google.com/workspace/admin/domain-shared-contacts#Parameters).

1. Send an `HTTP GET` request to the contacts feed URL with a parameter:
	```
	GET https://www.google.com/m8/feeds/contacts/DOMAIN/PROJECTION?PARAMETER
	```
	Replace the following:
	- `DOMAIN`: Your domain—for example, example.com.
		- `PROJECTION`: The projection value. For supported values, see [Projection values](https://developers.google.com/workspace/admin/domain-shared-contacts/extended-properties-projections#projection_values).
		- `PARAMETER`: A supported query parameter. See the [Domain Shared Contacts API reference guide](https://developers.google.com/workspace/admin/domain-shared-contacts/contacts-feed).
	For example, to get entries updated after March 16, 2022 for example.com, add the `updated-min` parameter:
	```
	GET https://www.google.com/m8/feeds/contacts/example.com/full?updated-min=2022-03-16T00:00:00
	```
	The server returns an `HTTP 200 OK` status code and a feed with any matches.
2. Feeds return a maximum of 10MB in a single response. To get the entire list, repeatedly follow the **Next** link in the returned feed.

### Track incremental changes

To track changes to a domain shared contact list: 1. Record the value of the feed's `<updated>` element. 1. Request changed contacts by setting `updated-min` to that `<updated>` value and setting `showdeleted` to `true`.

## Get a single shared contact

To get a specific contact, use the contact's self link, which you can find in the shared contacts feed. For more information, see [Get all shared contacts](#get_all_shared_contacts).

1. To get a specific contact, send an `HTTP GET` request to the contact's self link:
	```
	GET https://www.google.com/m8/feeds/contacts/DOMAIN/PROJECTION/SELF_LINK
	```
	Replace the following:
- `DOMAIN`: Your domain—for example, example.com.
- `PROJECTION`: The projection value. For supported values, see [Projection values](https://developers.google.com/workspace/admin/domain-shared-contacts/extended-properties-projections#projection_values).
- `SELF_LINK`: The contact's unique numerical value.

The server returns an `HTTP 200 OK` status code and the contact entry.

For example, to get a contact with the self link `https://www.google.com/m8/feeds/contacts/example.com/full/12345`:

```
GET https://www.google.com/m8/feeds/contacts/example.com/full/12345
```

## Next steps

- [Get a photo for a shared contact](https://developers.google.com/workspace/admin/domain-shared-contacts/get-photo-shared-contacts)
