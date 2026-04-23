---
source: https://developers.google.com/workspace/drive/api/reference/rest/v2/User
root: workspace
fetched_at: 2026-04-23T15:27:47.934Z
---

# User

Information about a Drive user.

JSON representation

```
{
  "displayName": string,
  "kind": string,
  "isAuthenticatedUser": boolean,
  "permissionId": string,
  "emailAddress": string,
  "picture": {
    "url": string
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Output only. A plain text displayable name for this user.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. Identifies what kind of resource this is. Value: the fixed string <code>drive#user</code>.</p></td></tr><tr><td><code>isAuthenticatedUser</code></td><td><p><code>boolean</code></p><p>Output only. Whether this user is the same as the authenticated user for whom the request was made.</p></td></tr><tr><td><code>permissionId</code></td><td><p><code>string</code></p><p>Output only. The user's ID as visible in Permission resources.</p></td></tr><tr><td><code>emailAddress</code></td><td><p><code>string</code></p><p>Output only. The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.</p></td></tr><tr><td><code>picture</code></td><td><p><code>object</code></p><p>Output only. The user's profile picture.</p></td></tr><tr><td><code>picture.url</code></td><td><p><code>string</code></p><p>Output only. A URL that points to a profile picture of this user.</p></td></tr></tbody></table>
