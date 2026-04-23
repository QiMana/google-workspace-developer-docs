---
source: https://developers.google.com/workspace/drive/activity/v2/reference/rest/v2/activity/comment
root: workspace
fetched_at: 2026-04-23T15:27:29.958Z
---

# Comment

## Post

A regular posted comment.

JSON representation

```
{
  "subtype": enum (Subtype)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>subtype</code></td><td><p><code>enum (<code>Subtype</code>)</code></p><p>The sub-type of this event.</p></td></tr></tbody></table>

## Subtype

More detailed information about the change.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SUBTYPE_UNSPECIFIED</code></td><td>Subtype not available.</td></tr><tr><td><code>ADDED</code></td><td>A post was added.</td></tr><tr><td><code>DELETED</code></td><td>A post was deleted.</td></tr><tr><td><code>REPLY_ADDED</code></td><td>A reply was added.</td></tr><tr><td><code>REPLY_DELETED</code></td><td>A reply was deleted.</td></tr><tr><td><code>RESOLVED</code></td><td>A posted comment was resolved.</td></tr><tr><td><code>REOPENED</code></td><td>A posted comment was reopened.</td></tr></tbody></table>

## Assignment

A comment with an assignment.

JSON representation

```
{
  "subtype": enum (Subtype),
  "assignedUser": {
    object (User)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>subtype</code></td><td><p><code>enum (<code>Subtype</code>)</code></p><p>The sub-type of this event.</p></td></tr><tr><td><code>assignedUser</code></td><td><p><code>object (<code>User</code>)</code></p><p>The user to whom the comment was assigned.</p></td></tr></tbody></table>

## Subtype

More detailed information about the change.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SUBTYPE_UNSPECIFIED</code></td><td>Subtype not available.</td></tr><tr><td><code>ADDED</code></td><td>An assignment was added.</td></tr><tr><td><code>DELETED</code></td><td>An assignment was deleted.</td></tr><tr><td><code>REPLY_ADDED</code></td><td>An assignment reply was added.</td></tr><tr><td><code>REPLY_DELETED</code></td><td>An assignment reply was deleted.</td></tr><tr><td><code>RESOLVED</code></td><td>An assignment was resolved.</td></tr><tr><td><code>REOPENED</code></td><td>A resolved assignment was reopened.</td></tr><tr><td><code>REASSIGNED</code></td><td>An assignment was reassigned.</td></tr></tbody></table>

## Suggestion

A suggestion.

JSON representation

```
{
  "subtype": enum (Subtype)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>subtype</code></td><td><p><code>enum (<code>Subtype</code>)</code></p><p>The sub-type of this event.</p></td></tr></tbody></table>

## Subtype

More detailed information about the change.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SUBTYPE_UNSPECIFIED</code></td><td>Subtype not available.</td></tr><tr><td><code>ADDED</code></td><td>A suggestion was added.</td></tr><tr><td><code>DELETED</code></td><td>A suggestion was deleted.</td></tr><tr><td><code>REPLY_ADDED</code></td><td>A suggestion reply was added.</td></tr><tr><td><code>REPLY_DELETED</code></td><td>A suggestion reply was deleted.</td></tr><tr><td><code>ACCEPTED</code></td><td>A suggestion was accepted.</td></tr><tr><td><code>REJECTED</code></td><td>A suggestion was rejected.</td></tr><tr><td><code>ACCEPT_DELETED</code></td><td>An accepted suggestion was deleted.</td></tr><tr><td><code>REJECT_DELETED</code></td><td>A rejected suggestion was deleted.</td></tr></tbody></table>
