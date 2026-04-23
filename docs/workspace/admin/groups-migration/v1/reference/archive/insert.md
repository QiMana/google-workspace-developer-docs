---
source: https://developers.google.com/workspace/admin/groups-migration/v1/reference/archive/insert
root: workspace
fetched_at: 2026-04-23T15:23:56.214Z
---

# Archive: insert

Migrates an email message into the archive of the Google group using media upload.

This method supports an `/upload` URI and accepts uploaded media with the following characteristics:

- **Maximum file size:** The maximum mail message size is 25MB. This limit includes the message's metadata headers, body, and any attachments.
- **Accepted Media MIME types:** `message/rfc822`

The project limit for the Groups Migration API is 10 queries per second (QPS) per account. The maximum API requests per day is 500,000. For more information about the RFC822 format, see the [RFC822 standard format](http://www.faqs.org/rfcs/rfc822.html).

## Request

### HTTP request

```
POST https://www.googleapis.com/upload/groups/v1/groups/groupId/archive?uploadType=media
```

### Parameters

<table><thead><tr><th>Parameter name</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td colspan="3"><b>Path parameters</b></td></tr><tr><td><code>groupId</code></td><td><code>string</code></td><td>The email address of the group where the migrated email is archived. This email address is a variable in the request's URL path. If a group owner changes the group's email address either using the Admin console or the Directory API, you must use the new email address in the <code>groupId</code> variable.</td></tr><tr><td colspan="3"><b>Required query parameters</b></td></tr><tr><td><code>uploadType</code></td><td><code>string</code></td><td><p>The type of upload request to the <code>/upload</code> URI with one of the following values:</p><ul><li><code>media</code> - Simple upload that uploads the media data.</li><li><code>resumable</code> - Resumable upload that uploads the file in a resumable fashion, using a series of at least two requests.</li></ul></td></tr></tbody></table>

### Authorization

This request requires authorization with the following scope:

Scope`https://www.googleapis.com/auth/apps.groups.migration`

For more information, see the [authentication and authorization](../../../../../guides/auth-overview.md) page.

### Request body

Don't supply a request body with this method.

## Response

If successful, this method returns a response body with the following structure:

```
{
  "kind": "groupsmigration#groups",
  "responseCode": string
}
```

| Property name | Value | Description |
| --- | --- | --- |
| `kind` | `string` | The kind of insert resource this is. Value: `groupsmigration#groups` |
| `responseCode` | `string` | An API response’s status code for a migration request accompanied by the [HTTP status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). The `responseCode` status values include the following:  `AUTHORIZATION FAILURE` — The administrator's authorization credentials are invalid. A `401` HTTP status code is returned.  `BACKEND FAILURE` — The server has a problem or is busy. A `503` HTTP status code is returned. Using an [exponential backoff](http://wikipedia.org/wiki/Truncated_binary_exponential_backoff) algorithm, wait for a small delay before retrying the failed call.  `INVALID MESSAGE FAILURE` — The email message is in an invalid format. If a message is rejected as malformed, you receive a `400 Bad Request` HTTP status code. Invalid format examples include the following:  - The message could have missing `From`, `To`, and `Date` fields. - An error occurs if a line in the [message](http://www.faqs.org/rfcs/rfc822.html) isn't terminated by a CR+LF (that is, `"\r\n"`) style newline. - The email message is empty. - The migration's target group doesn't exist or is in 'read-only' mode. For more information about the read-only sharing mode, see the Google Groups for Business [sharing options](http://www.google.com/support/a/bin/answer.py?answer=167097).  `SUCCESS` — The mail has been successfully archived in the account's group archive. A `200` HTTP status code is returned.  `UNSUPPORTED_PARALLEL_OPERATION` — The Groups Migration API doesn't support parallel message insertions into the same group archive. Also, the Groups Migration API doesn't support batch requests. But the Groups Migration API supports parallel requests for email insertions into different group archives. A `400` HTTP status code is returned. |
