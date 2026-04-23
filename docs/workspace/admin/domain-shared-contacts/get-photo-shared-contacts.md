---
source: https://developers.google.com/workspace/admin/domain-shared-contacts/get-photo-shared-contacts
root: workspace
fetched_at: 2026-04-23T15:23:53.518Z
---

# Get a photo for a shared contact

- To get a photo for a contact, send an HTTP `GET` request to the photo link of the contact:
	```
	GET https://google.com/m8/feeds/photos/media/DOMAIN/PHOTO_LINK
	```
	Replace the following:
	- `DOMAIN`: The URL for your domain—for example, example.com.
		- `PHOTO_LINK`: A unique numerical value that represents the photo link for the shared contact—for example, c9012de.
	The server returns an HTTP `200 OK` status code and the photo. If a contact doesn't have a photo, then the photo link element doesn't have a `gd:etag` attribute. The `gd:etag` element lets you refer to a specific version of a photo.

For example, to get the latest version of a photo for a contact with the following element:

```
<link rel="http://schemas.google.com/contacts/2008/rel#photo" type="image/*"
        href="https://google.com/m8/feeds/photos/media/example.com/c9012de"/>
```

Send the following HTTP request:

```
GET https://google.com/m8/feeds/photos/media/example.com/c9012de
```
