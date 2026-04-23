---
source: https://developers.google.com/workspace/admin/domain-shared-contacts/create-shared-contacts
root: workspace
fetched_at: 2026-04-23T15:23:53.815Z
---

# Create shared contacts

After [setting up authentication](https://developers.google.com/workspace/guides/auth-overview), use the Domain Shared Contacts API to publish new shared contact entries to a Google Workspace domain. Shared contacts can take up to 24 hours to appear in autocomplete and the contact manager.

1. Create an XML representation of the shared contact to publish as an Atom `<entry>` element of the [Contact kind](https://developers.google.com/gdata/docs/2.0/elements#gdContactKind):
	```
	<atom:entry xmlns:atom='http://www.w3.org/2005/Atom'
	    xmlns:gd='http://schemas.google.com/g/2005'>
	  <atom:category scheme='http://schemas.google.com/g/2005#kind'
	    term='http://schemas.google.com/contact/2008#contact' />
	  <gd:name>
	     <gd:givenName>FIRST_NAME</gd:givenName>
	     <gd:familyName>LAST_NAME</gd:familyName>
	     <gd:fullName>FIRST_NAME LAST_NAME</gd:fullName>
	  </gd:name>
	  <atom:content type='text'>NOTES</atom:content>
	  <gd:email rel='http://schemas.google.com/g/2005#work'
	    primary='true'
	    address='PRIMARY_EMAIL_ADDRESS' displayName='PREFERRED_NAME' />
	  <gd:email rel='http://schemas.google.com/g/2005#home'
	    address='SECONDARY_EMAIL_ADDRESS' />
	  <gd:phoneNumber rel='http://schemas.google.com/g/2005#work'
	    primary='true'>
	    PRIMARY_PHONE_NUMBER
	  </gd:phoneNumber>
	  <gd:phoneNumber rel='http://schemas.google.com/g/2005#home'>
	    SECONDARY_PHONE_NUMBER
	  </gd:phoneNumber>
	  <gd:im address='INSTANT_MESSAGING_ADDRESS'
	    protocol='http://schemas.google.com/g/2005#GOOGLE_TALK'
	    primary='true'
	    rel='http://schemas.google.com/g/2005#home' />
	  <gd:structuredPostalAddress
	      rel='http://schemas.google.com/g/2005#work'
	      primary='true'>
	    <gd:city>CITY_NAME</gd:city>
	    <gd:street>ADDRESS</gd:street>
	    <gd:region>REGION_NAME</gd:region>
	    <gd:postcode>POST_CODE</gd:postcode>
	    <gd:country>COUNTRY_NAME</gd:country>
	    <gd:formattedAddress>
	      FORMATTED_ADDRESS
	    </gd:formattedAddress>
	  </gd:structuredPostalAddress>
	</atom:entry>
	```
	Replace the following:
	- `FIRST_NAME`: First name of the contact, such as Dana.
		- `LAST_NAME`: Last name of the contact, such as A.
		- `PRIMARY_EMAIL_ADDRESS`: Preferred email address, such as dana@example.com.
		- `PREFERRED_NAME`: Display name for the user, such as Dana A.
		- `SECONDARY_EMAIL_ADDRESS`: Secondary email, such as da@example.com.
		- `PRIMARY_PHONE_NUMBER`: Preferred phone number, such as 800-555-0100.
		- `SECONDARY_PHONE_NUMBER`: Secondary phone number, such as 800-555-0101.
		- `INSTANT_MESSAGING_ADDRESS`: Instant messaging email address, such as dana@example.com.
		- `CITY_NAME`: City name, such as Mountain View.
		- `ADDRESS`: Street address, such as 1800 Amphibious Blvd.
		- `REGION_NAME`: State or province, such as CA.
		- `POST_CODE`: ZIP or postal code, such as 94045.
		- `COUNTRY_NAME`: Country, such as USA.
		- `FORMATTED_ADDRESS`: Address formatted using local conventions, such as 1800 Amphibious Blvd., Mountain View, CA 94045, USA.
2. To publish this entry, send it to the contact-list feed URL:
	1. Place the Atom `<entry>` element in the body of a new `POST` request using the `application/atom+xml` content type.
		2. Send the `POST` request to the feed URL.
	For example, to add a contact to the example.com list, send the `POST` request to the following URL:
	```
	https://www.google.com/m8/feeds/contacts/example.com/full
	```
	The server creates the contact and returns an `HTTP 201 CREATED` status code, along with the new contact entry. The returned entry includes server-generated elements such as `<id>`.
	If the request fails, the server returns a different status code. See the [Google Data API protocol reference](https://developers.google.com/gdata/docs/2.0/reference).

## Next steps

- [Update or delete a photo for a shared contact](https://developers.google.com/workspace/admin/domain-shared-contacts/update-delete-photo-shared-contacts)
