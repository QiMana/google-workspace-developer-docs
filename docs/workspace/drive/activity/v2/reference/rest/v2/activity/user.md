---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/user
root: workspace
fetched_at: 2026-04-23T15:27:32.460Z
---

# User

## User

Information about an end user.

JSON representation

```
{

  "knownUser": {
    object (KnownUser)
  },
  "deletedUser": {
    object (DeletedUser)
  },
  "unknownUser": {
    object (UnknownUser)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>type</code>. The type of user, such as known, unknown, and deleted. <code>type</code> can be only one of the following:</td></tr><tr><td><code>knownUser</code></td><td><p><code>object (<code>KnownUser</code>)</code></p><p>A known user.</p></td></tr><tr><td><code>deletedUser</code></td><td><p><code>object (<code>DeletedUser</code>)</code></p><p>A user whose account has since been deleted.</p></td></tr><tr><td><code>unknownUser</code></td><td><p><code>object (<code>UnknownUser</code>)</code></p><p>A user about whom nothing is currently known.</p></td></tr></tbody></table>

## KnownUser

A known user.

JSON representation

```
{
  "personName": string,
  "isCurrentUser": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>personName</code></td><td><p><code>string</code></p><p>The identifier for this user that can be used with the People API to get more information. The format is <code>people/ACCOUNT_ID</code>. See <a href="https://developers.google.com/people/">https://developers.google.com/people/</a>.</p></td></tr><tr><td><code>isCurrentUser</code></td><td><p><code>boolean</code></p><p>True if this is the user making the request.</p></td></tr></tbody></table>

## DeletedUser

This type has no fields.

A user whose account has since been deleted.

## UnknownUser

This type has no fields.

A user about whom nothing is currently known.
