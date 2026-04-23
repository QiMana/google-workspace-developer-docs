---
source: https://developers.google.com/workspace/drive/api/reference/rest/v3/User
root: workspace
fetched_at: 2026-04-23T15:27:58.074Z
---

# User

Information about a Drive user.

JSON representation

```
{
  "displayName": string,
  "kind": string,
  "me": boolean,
  "permissionId": string,
  "emailAddress": string,
  "photoLink": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Output only. A plain text displayable name for this user.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Output only. Identifies what kind of resource this is. Value: the fixed string <code>drive#user</code>.</p></td></tr><tr><td><code>me</code></td><td><p><code>boolean</code></p><p>Output only. Whether this user is the requesting user.</p></td></tr><tr><td><code>permissionId</code></td><td><p><code>string</code></p><p>Output only. The user's ID as visible in Permission resources.</p></td></tr><tr><td><code>emailAddress</code></td><td><p><code>string</code></p><p>Output only. The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.</p></td></tr><tr><td><code>photoLink</code></td><td><p><code>string</code></p><p>Output only. A link to the user's profile photo, if available.</p></td></tr></tbody></table>
