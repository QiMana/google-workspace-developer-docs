---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/registrations/create
root: workspace
fetched_at: 2026-04-23T15:26:03.667Z
---

# Method: registrations.create

Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`.

Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiryTime` and `id` filled in.

Note that any value specified for the `expiryTime` or `id` fields will be ignored.

While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it.

This method may return the following error codes:

- `PERMISSION_DENIED` if:
	- the authenticated user does not have permission to receive notifications from the requested field; or
		- the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a \[Request Errors\]\[`@MissingGrant` error\] is returned.
		- another [access error](https://developers.google.com/workspace/classroom/reference/Access.Errors) is encountered.
- `INVALID_ARGUMENT` if:
	- no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or
		- no `feed` is specified, or the specified `feed` is not valid.
- `NOT_FOUND` if:
	- the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or
		- the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.

### HTTP request

`POST https://classroom.googleapis.com/v1/registrations`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Request body

### Response body

If successful, the response body contains a newly created instance of .

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/classroom.push-notifications`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
