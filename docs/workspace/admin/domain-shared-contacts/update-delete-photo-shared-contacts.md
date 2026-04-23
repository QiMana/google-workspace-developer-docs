---
source: https://developers.google.com/workspace/admin/domain-shared-contacts/update-delete-photo-shared-contacts
root: workspace
fetched_at: 2026-04-23T15:23:53.952Z
---

# Update or delete a photo for a shared contact

Updating a photo for a shared contact is slightly different than updating a shared contact's information. For information about working with a shared contact's information, see [Update or delete a shared contact](https://developers.google.com/workspace/admin/domain-shared-contacts/update-delete-shared-contacts). When using photo links, you must specify the authorization token in the HTTP header. For more information, see [Learn about authentication and authorization](https://developers.google.com/workspace/guides/auth-overview).

## Update a photo for a shared contact

Every shared contact has a photo link element. The photo link element appears whether the contact has an associated photo or not. If the contact does have a photo, then the element contains a `gd:etag` attribute that specifies an `ETag` HTTP header for the photo. An `ETag` lets you refer to a specific version of a particular entry. In this case, it lets you refer to a specific version of a photo. If the contact has no photo, then there's no `gd:etag` attribute, and the `href` attribute provides the URL to use to add a photo to the contact.

- To add or update a photo, send a new photo:
	```
	PUT https://www.google.com/m8/feeds/photos/media/USER_ID%40DOMAIN/PHOTO_LINK
	```
	Replace the following:
	- `USER_ID`: The username of the user—for example, Alex.
		- `DOMAIN`: The URL for your domain—for example, example.com.
		- `PHOTO_LINK`: A unique numerical value that represents the photo link for the shared contact—for example, c9012de.
	The following is an example of a photo link element:
	```
	<link rel="http://schemas.google.com/contacts/2008/rel#photo"
	type="image/*" href="https://www.google.com/m8/feeds/photos/media/Alex%40example.com/c9012de">
	```

## Delete a photo for a shared contact

To delete a photo, you must use the HTTP `DELETE` method.

When updating or deleting a photo, send the photo's `ETag` in the `If-Match` header of the HTTP request. If you don't have the latest version of the photo use `If-Match: *` to override the versioning system and delete the photo.

For more information about `ETags`, see the [Google Data APIs protocol reference](https://developers.google.com/gdata/docs/2.0/reference#ResourceVersioning).
