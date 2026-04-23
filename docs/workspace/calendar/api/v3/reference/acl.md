---
source: https://developers.google.com/workspace/calendar/api/v3/reference/acl
root: workspace
fetched_at: 2026-04-23T15:24:51.581Z
---

# Acl

For a list of [methods](#methods) for this resource, see the end of this page.

## Resource representations

```
{
  "kind": "calendar#aclRule",
  "etag": etag,
  "id": string,
  "scope": {
    "type": string,
    "value": string
  },
  "role": string
}
```

| Property name | Value | Description | Notes |
| --- | --- | --- | --- |
| `etag` | `etag` | ETag of the resource. |  |
| `id` | `string` | Identifier of the Access Control List (ACL) rule. See [Sharing calendars](../../concepts/sharing.md#sharing_calendars). |  |
| `kind` | `string` | Type of the resource (" `calendar#aclRule` "). |  |
| `role` | `string` | The role assigned to the scope. Possible values are: - " `none` " - Provides no access. - " `freeBusyReader` " - Provides read access to free/busy information. - " `reader` " - Provides read access to the calendar. Private events will appear to users with reader access, but event details will be hidden. - " `writer` " - Provides read and write access to the calendar. Private events will appear to users with writer access, and event details will be visible. Provides read access to the calendar's ACLs. - " `owner` " - Provides manager access to the calendar. This role has all of the permissions of the writer role with the additional ability to modify access levels of other users. | writable |
| `scope` | `object` | The extent to which [calendar access](../../concepts/sharing.md#sharing_calendars) is granted by this ACL rule. |  |
| `scope.type` | `string` | The type of the scope. Possible values are: - " `default` " - The public scope. This is the default value. - " `user` " - Limits the scope to a single user. - " `group` " - Limits the scope to a group. - " `domain` " - Limits the scope to a domain. Note: The permissions granted to the " `default` ", or public, scope apply to any user, authenticated or not. |  |
| `scope.value` | `string` | The email address of a user or group, or the name of a domain, depending on the scope type. Omitted for type " `default` ". | writable |

## Methods

[delete](./acl/delete.md)

Deletes an access control rule.

[get](./acl/get.md)

Returns an access control rule.

[insert](./acl/insert.md)

Creates an access control rule.

[list](./acl/list.md)

Returns the rules in the access control list for the calendar.

[patch](./acl/patch.md)

Updates an access control rule. This method supports patch semantics. Note that each patch request consumes three quota units; prefer using a `get` followed by an `update`. The field values you specify replace the existing values. Fields that you don't specify in the request remain unchanged. Array fields, if specified, overwrite the existing arrays; this discards any previous array elements.

[update](./acl/update.md)

Updates an access control rule.

[watch](./acl/watch.md)

Watch for changes to ACL resources.
