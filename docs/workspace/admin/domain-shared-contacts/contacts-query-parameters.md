---
source: https://developers.google.com/workspace/admin/domain-shared-contacts/contacts-query-parameters
root: workspace
fetched_at: 2026-04-23T15:23:53.922Z
---

# Contacts query parameters

## Contacts query parameters

The Domain Shared Contacts API supports the following standard Google Data API query parameters:

| Name | Description |
| --- | --- |
| `alt` | The type of feed to return, such as `atom` (default), `rss`, or `json`. |
| `max-results` | The maximum number of entries to return. If you want to receive every contact, rather than only the default maximum, you can specify a large number for `max-results`. |
| `start-index       ` | The 1-based index of the first result to retrieve (for paging). |
| `updated-min` | The lower bound for entry update dates. |

For more information about the standard parameters, see [Google Data APIs protocol reference](https://developers.google.com/gdata/docs/2.0/reference).

In addition to the standard query parameters, the Domain Shared Contacts API supports the following parameters:

| Name | Description |
| --- | --- |
| `orderby` | Sorting criteria. The only supported value is `lastmodified`. |
| `showdeleted` | Include deleted contacts in the returned contacts feed. Valid values are `true` or `false`. Deleted shared contacts are shown as entries that contain nothing but an `<atom:id>` element and a `<gd:deleted>` element.  Google retains placeholders for deleted shared contacts for 30 days after deletion. During that time, you can request the placeholders using the `showdeleted` query parameter. |
| `sortorder` | Sorting order direction. Can be either `ascending` or `descending`. |
