---
source: https://developers.google.com/workspace/forms/api/reference/rest/v1beta/forms/create
root: workspace
fetched_at: 2026-04-23T15:28:47.142Z
---

# Method: forms.create

Create a new form using the title given in the provided form message in the request.

**Important:** Only the `form.info.title` and `form.info.document_title` fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call `forms.create` to create an empty form with a title and (optional) document title, and then call `forms.update` to add the items.

### HTTP request

`POST https://forms.googleapis.com/v1beta/forms`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

The request body contains an instance of `Form`.

### Response body

If successful, the response body contains a newly created instance of `Form`.

### Authorization Scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `           https://www.googleapis.com/auth/drive.file`
- `           https://www.googleapis.com/auth/forms.body`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
