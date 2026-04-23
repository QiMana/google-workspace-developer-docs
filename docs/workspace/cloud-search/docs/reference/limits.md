---
source: https://developers.google.com/workspace/cloud-search/docs/reference/limits
root: workspace
fetched_at: 2026-04-23T15:26:11.596Z
---

# Google Cloud Search limits

This document lists all limits for Google Cloud Search features. The limits are split into four groups: [Indexing](#indexing), [Schema](#schema), [Serving](#serving), and [Synonyms](#synonyms).

## Indexing limits

| Feature | Limit | Notes |
| --- | --- | --- |
| Maximum size of each document field | 1 MB | Only the first 1 MB of content in each field, including `ItemContent.content`, is indexed. |
| Maximum size of the indexable content per document | 10 MB | Cloud Search indexes up to the first 10 MB of a document regardless of whether the document is larger. |
| Maximum document size of document | 50 MB | If your document is larger than this threshold, the indexing API returns an error. |
| Maximum ACL hierarchy depth | 20 levels | If your ACL hierarchy is larger, the indexing API returns an error. |
| Maximum folder hierarchy depth | 32 levels | If your folder hierarchy is larger, the indexing API returns an error. |
| Maximum number of data sources per customer | 50 | This limit can be increased in some cases. Contact support for help. |
| Maximum number of data sources per search application | 10 | This limit can be increased in some cases. Contact support for help. |
| Maximum number of search applications per customer | 25 | This limit can be increased in some cases. Contact support for help. |
| Maximum number of identity sources per customer | 100 | Each identity source is backed by a new custom attribute in the [Directory API user schema](https://developers.google.com/admin-sdk/directory/v1/guides/manage-schemas#create_schema). The Directory API allows 100 custom attributes in the schema. If you’ve set custom attributes for other purposes, the number of identity sources you can create is reduced by the same amount. |
| Maximum number of Google identities that an external identity can map to | 2 | This limit can be increased in some cases. Contact support for help. |
| Maximum number of service accounts allowed per identity source | 5 | This limit can be increased in some cases. Contact support for help. |
| Maximum number of external identities per item | 100 | An external group identity only counts once for the limit. |
| Maximum indexing API calls per second per Google Cloud project | 100 | This limit allows Google Cloud Search to maintain service quality for all customers. |

## Schema limits

| Feature | Limit | Notes |
| --- | --- | --- |
| Maximum number of schemas per data source | 1 | Each data source can only have one schema. |
| Maximum number of sortable fields per object | 10 | This limit can be increased in some cases. Contact support for help. |
| Maximum number of facetable fields per object | 10 | This limit can be increased in some cases. Contact support for help. |
| Maximum number of wildcard fields per schema | 5 |  |
| Maximum number of suggestable fields per schema | 20 |  |
| Maximum operators per schema | 50 | This limit does not include less than or greater than operators. |
| Number of distinct objects | 10 | Maximum number of distinct objects, each representing a logical sub-schema, that are allowed in the schema for a data source. This limit can be increased in some cases\*. |
| Maximum number of properties for a given object, including nested properties. | 1000 |  |
| Maximum property hierarchy depth | 10 | Each object can only have nesting of property definitions up to 10 levels deep. |
| Maximum structured data size | 0.5 MB | The total size of the structured data per item should not exceed 0.5 MB. |
| Maximum item metadata size | 0.5 MB | The total size of the item metadata per item should not exceed 0.5 MB. |

## Search query limits

| Feature | Limit | Notes |
| --- | --- | --- |
| Maximum number of results from each data source for a query | 5000 | This limit is directly derived from the maximum number of distinct ACLs that are evaluated for each data source and whether the data source used uniform ACLs. |
| Maximum number of individually ACLed results for which facet counts are shown | 500 | For data sources with uniform ACLs, this limit doesn't apply. For data sources with per-item ACLs, facet value counts are shown only if total results is less than or equal to 500. To get more accurate counts, create a [VirtualContainer](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemType) for each group of items that share the same ACL and have items [inherit ACLs](https://developers.google.com/workspace/cloud-search/docs/guides/acls#acl_inheritance) from their corresponding container. |
| Number of results for which facet counts are shown | 300000 | For a data source, if the query hits over 300000 results, the facet counts are not shown regardless of the type of ACLed result (per-item or uniform). |
| Maximum number of facet values for each facetable field in a query | 100 | For example, the number distinct authors that are returned for `Author` field. |

## Synonyms limits

| Feature | Limit | Notes |
| --- | --- | --- |
| Maximum number of synonyms per term | Equal to maximum # of values for a property |  |
| Maximum number of terms | Based on your quota as they count toward number of indexed documents |  |
| Max # of terms w/synonyms that could be used in a query | Subject to [query string length limit](#serving) |  |
