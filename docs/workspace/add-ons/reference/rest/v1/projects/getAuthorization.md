---
source: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects/getAuthorization
root: workspace
fetched_at: 2026-04-23T15:23:02.389Z
---

# Method: projects.getAuthorization

## Page Summary

- Retrieves Google Workspace Add-on authorization details for a specific project.
- Requires project name as a path parameter and an empty request body.
- Response includes authorization name, service account email, and OAuth client ID.
- Needs `https://www.googleapis.com/auth/cloud-platform` OAuth scope for authorization.

Gets the authorization information for deployments in a given project.

### HTTP request

`GET https://gsuiteaddons.googleapis.com/v1/{name=projects/*/authorization}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. Name of the project for which to get the Google Workspace add-on authorization information.</p><p>Example: <code>projects/my_project/authorization</code>.</p><p>Authorization requires the following <a href="https://cloud.google.com/iam/docs/">IAM</a> permission on the specified resource <code>name</code>:</p><ul><li><code>gsuiteaddons.authorizations.get</code></li></ul></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

The authorization information used when invoking deployment endpoints.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "name": string,
  "serviceAccountEmail": string,
  "oauthClientId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The canonical full name of this resource. Example: <code>projects/123/authorization</code></p></td></tr><tr><td><code>serviceAccountEmail</code></td><td><p><code>string</code></p><p>The email address of the service account used to authenticate requests to add-on callback endpoints.</p></td></tr><tr><td><code>oauthClientId</code></td><td><p><code>string</code></p><p>The OAuth client ID used to obtain OAuth access tokens for a user on the add-on's behalf.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/cloud-platform`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
