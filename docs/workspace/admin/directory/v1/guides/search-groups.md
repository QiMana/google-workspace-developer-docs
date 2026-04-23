---
source: https://developers.google.com/workspace/admin/directory/v1/guides/search-groups
root: workspace
fetched_at: 2026-04-23T15:23:49.178Z
---

# Search for groups

You can search for groups matching certain attributes with the [`groups.list`](https://developers.google.com/workspace/admin/directory/v1/reference/groups/list) method of the Directory API. This method accepts the `query` parameter which is a search query combining one or more search clauses. Each search clause is made up of three parts:

Field

Group attribute that is searched. For example, `name`.

Operator

Test that is performed on the data to provide a match. For example, the `=` operator tests if a text attribute *matches* a value.

Value

The content of the attribute that is tested. For example, `groupName`.

Multiple clauses are separated by whitespace and are implicitly joined by an `AND` operator.

## Fields

| Field | Value Type | Operators | Description |
| --- | --- | --- | --- |
| `email` | string | `=`, `:{PREFIX}*` | The group's email address. Note: This cannot be used with the `memberKey` parameter in the same query. |
| `name` | string | `=`, `:{PREFIX}*` | The group's display name. Note: This cannot be used with `memberKey` parameter in the same query. |
| `memberKey` | string | `=`, | The `memberKey` query parameter returns all groups for which a user or group has a membership. This value can be any of the user's primary or alias email address, a group's primary or alias email address, or a user's unique ID. Note: This cannot be used along with the `email` or `name` parameters in the same query. |

## Value Types

| Value Type | Notes |
| --- | --- |
| string | Surround with single quotes `'` if the query contains whitespace. Escape single quotes in queries with `\'`, for example `'Valentine\'s Day'`. |

## Operators

| Operator | Supported Value Types | Notes |
| --- | --- | --- |
| `=` | string, boolean, number, date | The field and the value match exactly. For example, `name=contact` matches all groups with the `name` attribute `"contact"`, but not `"contactgroup"`. Supported on most string fields ([see above](#fields)). |
| `:{PREFIX}*` | string | The field starts with the value. For example, a query with `email:support*` matches groups with `email` values of `"supportgroup@"`, and `"support@"` but not `"contactsupport"`. Only supported on a limited set of string fields ([see above](#fields)). |

## Examples

All queries use the [`groups.list`](https://developers.google.com/workspace/admin/directory/v1/reference/groups/list) method, which has an HTTP request similar to the following (line breaks included for readability):

```
GET https://admin.googleapis.com/admin/directory/v1/groups
?domain=primary domain
&query=query parameters
```

The `query` parameters must be URL encoded. For example, the query `query=email:support*` is URL encoded as `query=email%3Asupport*`. All examples on this page show unencoded `query` parameters. Client libraries handle this URL encoding automatically.

Search for a group by display name

```
name='contact'
```

Search for groups matching an email prefix

```
email:admin*
```

Search for all groups of a user

```
memberKey=user@company.com
```

Search for groups with name and email starting with contact

```
name:contact* email:contact*
```
