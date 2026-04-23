---
source: https://developers.google.com/workspace/admin/groups-settings/concepts
root: workspace
fetched_at: 2026-04-23T15:23:56.250Z
---

# Groups Settings API overview

The Groups Settings API updates and retrieves settings for an existing [Google Groups](https://support.google.com/a/topic/25838?&ref_topic=9197). Through the API, you can do the following:

- Modify a group's settings for internal and external group access.
- Edit the group's notifications.
- Configure discussion archiving and message moderation.
- Customize your account's user groups.

For more ways to work with Google Groups, or manage other types of groups, see the [Cloud Identity documentation](https://cloud.google.com/identity/docs).

### Groups Settings API data model

The Groups Settings API operates on a `Groups` resource which represents how users within an account communicate and collaborate with groups of other people. Each group is identified by the group's email address.

The API data model is based on the `Groups` collection of the account's groups. Each group has a unique set of configuration settings.

### Groups Settings API operations

You can call group settings methods in the Groups Settings API, as described in the following table:

| Operation | Description | REST HTTP mappings |
| --- | --- | --- |
| `get` | Gets a group's settings for a customer's account. All get operations must be authorized by an [authenticated](../../guides/auth-overview.md) user. | `GET` on a group URI. |
| `update` | Updates a group's settings for a customer's account. All update operations must be authorized by an [authenticated](../../guides/auth-overview.md) user. | `PUT` on a group URI. |

## JSON and Atom data formats

By default, the Groups Settings API returns data in JSON format. The Atom notation is an alternate data format. Both the JSON and Atom data formats support full read-write capabilities.

JSON is a common internet format that provides a method of representing arbitrary data structures. According to [json.org](http://www.json.org/), JSON is a text format that is completely language-independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, and Python.

You can change the API's data format by including the `alt` query string in your request's URI. For example:

### JSON

```
GET https://www.googleapis.com/groups/v1/groups/salesgroup@example.com?alt=json
```

### Atom

```
GET https://www.googleapis.com/groups/v1/groups/salesgroup@example.com?alt=atom
```
