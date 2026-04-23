---
source: https://developers.google.com/workspace/keep/api/reference/rest/v1/notes
root: workspace
fetched_at: 2026-04-23T15:30:08.634Z
---

# REST Resource: notes

## Resource: Note

A single note.

JSON representation

```
{
  "name": string,
  "createTime": string,
  "updateTime": string,
  "trashTime": string,
  "trashed": boolean,
  "attachments": [
    {
      object (Attachment)
    }
  ],
  "permissions": [
    {
      object (Permission)
    }
  ],
  "title": string,
  "body": {
    object (Section)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. The resource name of this note. See general note on identifiers in KeepService.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. When this note was created.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. When this note was last modified.</p></td></tr><tr><td><code>trashTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. When this note was trashed. If <code>trashed</code>, the note is eventually deleted. If the note is not trashed, this field is not set (and the trashed field is <code>false</code>).</p></td></tr><tr><td><code>trashed</code></td><td><p><code>boolean</code></p><p>Output only. <code>true</code> if this note has been trashed. If trashed, the note is eventually deleted.</p></td></tr><tr><td><code>attachments[]</code></td><td><p><code>object (<code>Attachment</code>)</code></p><p>Output only. The attachments attached to this note.</p></td></tr><tr><td><code>permissions[]</code></td><td><p><code>object (<code>Permission</code>)</code></p><p>Output only. The list of permissions set on the note. Contains at least one entry for the note owner.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the note. Length must be less than 1,000 characters.</p></td></tr><tr><td><code>body</code></td><td><p><code>object (<code>Section</code>)</code></p><p>The body of the note.</p></td></tr></tbody></table>

## Attachment

An attachment to a note.

JSON representation

```
{
  "name": string,
  "mimeType": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The resource name;</p></td></tr><tr><td><code>mimeType[]</code></td><td><p><code>string</code></p><p>The MIME types (IANA media types) in which the attachment is available.</p></td></tr></tbody></table>

## Permission

A single permission on the note. Associates a `member` with a `role`.

JSON representation

```
{
  "name": string,
  "role": enum (Role),
  "email": string,
  "deleted": boolean,

  "user": {
    object (User)
  },
  "group": {
    object (Group)
  },
  "family": {
    object (Family)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Output only. The resource name.</p></td></tr><tr><td><code>role</code></td><td><p><code>enum (<code>Role</code>)</code></p><p>The role granted by this permission. The role determines the entity’s ability to read, write, and share notes.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>The email associated with the member. If set on create, the <code>email</code> field in the <code>User</code> or <code>Group</code> message must either be empty or match this field. On read, may be unset if the member does not have an associated email.</p></td></tr><tr><td><code>deleted</code></td><td><p><code>boolean</code></p><p>Output only. Whether this member has been deleted. If the member is recovered, this value is set to false and the recovered member retains the role on the note.</p></td></tr><tr><td colspan="2">Union field <code>member</code>. Specifies the identity granted the role. Member is unset if the member has been deleted. <code>member</code> can be only one of the following:</td></tr><tr><td><code>user</code></td><td><p><code>object (<code>User</code>)</code></p><p>Output only. The user to whom this role applies.</p></td></tr><tr><td><code>group</code></td><td><p><code>object (<code>Group</code>)</code></p><p>Output only. The group to which this role applies.</p></td></tr><tr><td><code>family</code></td><td><p><code>object (<code>Family</code>)</code></p><p>Output only. The Google Family to which this role applies.</p></td></tr></tbody></table>

## Role

Defines the various roles an entity can have.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ROLE_UNSPECIFIED</code></td><td>An undefined role.</td></tr><tr><td><code>OWNER</code></td><td>A role granting full access. This role cannot be added or removed. Defined by the creator of the note.</td></tr><tr><td><code>WRITER</code></td><td>A role granting the ability to contribute content and modify note permissions.</td></tr></tbody></table>

## User

Describes a single user.

JSON representation

```
{
  "email": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p><p>The user's email.</p></td></tr></tbody></table>

## Group

Describes a single Group.

JSON representation

```
{
  "email": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p><p>The group email.</p></td></tr></tbody></table>

## Family

This type has no fields.

Describes a single Google Family.

## Section

The content of the note.

JSON representation

```
{

  "text": {
    object (TextContent)
  },
  "list": {
    object (ListContent)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>Content</code>. The section's content must be one of these value types. <code>Content</code> can be only one of the following:</td></tr><tr><td><code>text</code></td><td><p><code>object (<code>TextContent</code>)</code></p><p>Used if this section's content is a block of text. The length of the text content must be less than 20,000 characters.</p></td></tr><tr><td><code>list</code></td><td><p><code>object (<code>ListContent</code>)</code></p><p>Used if this section's content is a list.</p></td></tr></tbody></table>

## TextContent

The block of text for a single text section or list item.

JSON representation

```
{
  "text": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>text</code></td><td><p><code>string</code></p><p>The text of the note. The limits on this vary with the specific field using this type.</p></td></tr></tbody></table>

## ListContent

The list of items for a single list note.

JSON representation

```
{
  "listItems": [
    {
      object (ListItem)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>listItems[]</code></td><td><p><code>object (<code>ListItem</code>)</code></p><p>The items in the list. The number of items must be less than 1,000.</p></td></tr></tbody></table>

## ListItem

A single list item in a note's list.

JSON representation

```
{
  "childListItems": [
    {
      object (ListItem)
    }
  ],
  "text": {
    object (TextContent)
  },
  "checked": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>childListItems[]</code></td><td><p><code>object (<code>ListItem</code>)</code></p><p>If set, list of list items nested under this list item. Only one level of nesting is allowed.</p></td></tr><tr><td><code>text</code></td><td><p><code>object (<code>TextContent</code>)</code></p><p>The text of this item. Length must be less than 1,000 characters.</p></td></tr><tr><td><code>checked</code></td><td><p><code>boolean</code></p><p>Whether this item has been checked off or not.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a new note.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a note.</td></tr><tr><td><h3>get</h3></td><td>Gets a note.</td></tr><tr><td><h3>list</h3></td><td>Lists notes.</td></tr></tbody></table>
