---
source: https://developers.google.com/workspace/drive/api/guides/search-shareddrives
root: workspace
fetched_at: 2026-04-23T15:27:43.734Z
---

# Search for shared drives

To search for a specific set of shared drives, use the query string `q` field with [`drives.list`](https://developers.google.com/workspace/drive/api/reference/rest/v3/drives/list) to filter the drives to return by combining one or more search terms.

A query string contains the following three parts:

*`query_term operator values`*

Where:

- *`query_term`* is the query term or field to search upon.
- *`operator`* specifies the condition for the query term.
- *`values`* are the specific values you want to use to filter your search results.

To view the query terms and operators that you can use to filter shared drives, see [Search query terms and operators](https://developers.google.com/workspace/drive/api/guides/ref-search-terms#drive-properties).

For example, the following query string filters the search to only return shared drives with the name "Google Drive API resources."

```
q: name = 'Google Drive API resources' & useDomainAdminAccess=false
```

## Query string examples

The following table lists examples of some basic query strings for shared drives. The actual code differs depending on the client library you use for your search.

You must also escape special characters in your file names to make sure the query works correctly. For example, if a filename contains both an apostrophe (`'`) and a backslash (`"\"`) character, use a backslash to escape them: `name contains 'quinn\'s paper\\essay'`.

| What you want to query | Example | `useDomainAdminAccess` setting |
| --- | --- | --- |
| Shared drives created after June 1, 2017 | `createdTime > '2017-06-01T12:00:00'` | `true` |
| Shared drives visible in the default view | `hidden = false` | `false` |
| Shared drives with more than one member | `memberCount > 1` | `true` |
| Shared drives with the word 'confidential' in the title and 20 or more members | `name contains 'confidential' and memberCount >= 20` | `true` |
| Shared drives with the word 'confidential' in the title among all shared drives of the organization | `name contains 'confidential' and orgUnitId = 'C03az79cb'` | `true` |
| Shared drives with the word 'confidential' in the title among all shared drives that the user is a member of | `name contains 'confidential'` | `false` |
| Shared drives with no assigned organizer | `organizerCount = 0` | `true` |
| Shared drives that don't contain the organizational unit ID | `orgUnitId != 'C03az79cb'` | `true` |

## Query multiple terms with parentheses

You can use parentheses to group multiple query terms together. For example, to search for shared drives created after a specific date and that either have more than five organizers or more than 20 members, use this query:

```
createdTime > '2019-01-01T12:00:00' and (organizerCount > 5 or
memberCount > 20)
```

This search returns all shared drives created after January 1st, 2019 and that have more than five organizers or more than 20 members.

The Drive API evaluates `and` and `or` operators from left to right, so the same search without parentheses would return:

- Only shared drives with more than five organizers that were created after January 1st, 2019.
- All shared drives with more than 20 members, even those created before January 1st, 2019.

## Related topics

- [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files)
- [Search query terms and operators](https://developers.google.com/workspace/drive/api/guides/ref-search-terms)
