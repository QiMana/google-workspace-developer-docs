---
source: https://developers.google.com/workspace/chat/api/reference/rest/v1/User
root: workspace
fetched_at: 2026-04-23T15:25:01.593Z
---

# User

## Page Summary

- The `User` resource represents a Google Chat user, which can be a human or a Chat app.
- A user's resource name is formatted as `users/{user}`, with various identifiers like email or People API ID usable for `{user}`.
- When a Chat app authenticates as a user, the API response for the `User` resource only includes the `name` and `type` fields.
- The `type` field indicates whether the user is `HUMAN` or `BOT`, while `isAnonymous` signifies a deleted or invisible profile.
- The `displayName` and `domainId` provide additional user information but might not be populated in all contexts.

A user in Google Chat. When returned as an output from a request, if your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the output for a `User` resource only populates the user's `name` and `type`.

JSON representation

```
{
  "name": string,
  "displayName": string,
  "domainId": string,
  "type": enum (Type),
  "isAnonymous": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Resource name for a Google Chat <code>user</code>.</p><p>Format: <code>users/{user}</code>. <code>users/app</code> can be used as an alias for the calling app <code>bot</code> user.</p><p>For <code>human users</code>, <code>{user}</code> is the same user identifier as:</p><ul><li><p>the <code>id</code> for the <a href="https://developers.google.com/people/api/rest/v1/people">Person</a> in the People API. For example, <code>users/123456789</code> in Chat API represents the same person as the <code>123456789</code> Person profile ID in People API.</p></li><li><p>the <code>id</code> for a <a href="https://developers.google.com/admin-sdk/directory/reference/rest/v1/users">user</a> in the Admin SDK Directory API.</p></li><li><p>the user's email address can be used as an alias for <code>{user}</code> in API requests. For example, if the People API Person profile ID for <code>user@example.com</code> is <code>123456789</code>, you can use <code>users/user@example.com</code> as an alias to reference <code>users/123456789</code>. Only the canonical resource name (for example <code>users/123456789</code>) will be returned from the API.</p></li></ul></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Output only. The user's display name.</p></td></tr><tr><td><code>domainId</code></td><td><p><code>string</code></p><p>Unique identifier of the user's Google Workspace domain.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>Type</code>)</code></p><p>User type.</p></td></tr><tr><td><code>isAnonymous</code></td><td><p><code>boolean</code></p><p>Output only. When <code>true</code>, the user is deleted or their profile is not visible.</p></td></tr></tbody></table>

## Type

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>TYPE_UNSPECIFIED</code></td><td>Default value for the enum. DO NOT USE.</td></tr><tr><td><code>HUMAN</code></td><td>Human user.</td></tr><tr><td><code>BOT</code></td><td>Chat app user.</td></tr></tbody></table>
