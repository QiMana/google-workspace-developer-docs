---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/MaliciousEntity
root: workspace
fetched_at: 2026-04-23T15:23:24.782Z
---

# MaliciousEntity

Entity whose actions triggered a Gmail phishing alert.

JSON representation

```
{
  "entity": {
    object (User)
  },

  "fromHeader": string,
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>entity</code></td><td><p><code>object (<code>User</code>)</code></p><p>The actor who triggered a gmail phishing alert.</p></td></tr><tr><td colspan="2">Union field <code>entity_type</code>. Every malicious entity could only belongs to one entity type. <code>entity_type</code> can be only one of the following:</td></tr><tr><td><code>fromHeader</code></td><td><p><code>string</code></p><p>The sender email address.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>The header from display name.</p></td></tr></tbody></table>

## User

A user.

JSON representation

```
{
  "emailAddress": string,
  "displayName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>emailAddress</code></td><td><p><code>string</code></p><p>Email address of the user.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Display name of the user.</p></td></tr></tbody></table>
