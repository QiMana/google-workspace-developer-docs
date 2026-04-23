---
source: https://developers.google.com/workspace/cloud-search/docs/guides/improve-search-quality
root: workspace
fetched_at: 2026-04-23T15:26:09.364Z
---

# Improve search quality

*Search quality* refers to the quality of search results in terms of ranking and recall as perceived by the user.

*Ranking* is the order of items, and *recall* is the number of relevant items retrieved. An *item* (or document) is any piece of digital content Google Cloud Search can index, such as Microsoft Office documents, PDF files, database rows, or unique URLs. An item consists of:

- Structured metadata
- Indexable content
- ACLs

Cloud Search uses various signals to retrieve and rank results. You can influence these signals through settings in the schema, item content and metadata, and the search application. This document helps you improve search quality by modifying these signal influencers.

For a summary of settings, see the [Summary of search quality settings](#summary).

## Influence topicality score

*Topicality* is the relevance of a search result to the query terms. Cloud Search calculates topicality based on:

- The importance of each query term.
- The number of hits (how often a query term appears in content or metadata).
- The match types between query terms and indexed items.

To influence a text property's topicality score, define the [`RetrievalImportance`](../reference/rest/v1/Schema.md#RetrievalImportance) in your schema. A match on a property with high `RetrievalImportance` results in a higher score.

For example, if you store software bug history, users likely query by bug name. Set the `RetrievalImportance` for the name to `HIGHEST`. For descriptions, use `DEFAULT`.

```
{
  "objectDefinitions": [
    {
      "name": "issues",
      "propertyDefinitions": [
        {
          "name": "summary",
          "textPropertyOptions": {
            "retrievalImportance": { "importance": "HIGHEST" }
          }
        },
        {
          "name": "description",
          "textPropertyOptions": {
            "retrievalImportance": { "importance": "DEFAULT" }
          }
        }
      ]
    }
  ]
}
```

For HTML documents, tags like `<title>` and `<h1>` help determine term importance. If [`ContentFormat`](../reference/rest/v1/indexing.datasources.items.md#ContentFormat) is `TEXT`, [`ItemContent`](../reference/rest/v1/indexing.datasources.items.md#ItemContent) uses `DEFAULT` importance. If it is `HTML`, importance depends on HTML properties.

## Influence freshness

*Freshness* measures how recently an item was modified, using `createTime` and `updateTime` in [`ItemMetadata`](../reference/rest/v1/indexing.datasources.items.md#ItemMetadata). Older items rank lower.

You can influence freshness by adjusting `freshnessProperty` and `freshnessDuration` in [`FreshnessOptions`](../reference/rest/v1/Schema.md#FreshnessOptions). The `freshnessProperty` lets you use a custom date or timestamp instead of `updateTime`. For bugs, you might use a due date so items with dates closest to now rank higher.

```
{
  "objectDefinitions": [
    {
      "name": "issues",
      "options": {
        "freshnessOptions": { "freshnessProperty": "duedate" }
      }
    }
  ]
}
```

Use `freshnessDuration` to specify when an item is considered out-of-date. A high value, like 100 years, nullifies the freshness effect. This is useful for static data like employee profiles. For news, use a small value like three days.

## Influence quality

*Quality* measures an item's accuracy and usefulness. Specify a value between 0 and 1 using [`SearchQualityMetadata`](../reference/rest/v1/indexing.datasources.items.md#SearchQualityMetadata). Higher values boost ranking. For example, you might boost benefits documents authored by HR.

```
{
  "metadata": {
    "searchQualityMetadata": { "quality": 1.0 }
  }
}
```

## Influence using field type

You can influence ranking based on enum or integer properties using [`OrderedRanking`](../reference/rest/v1/Schema.md#OrderedRanking):

- `NO_ORDER` (default): No effect on ranking.
- `ASCENDING`: Higher values boost ranking.
- `DESCENDING`: Lower values boost ranking.

For bug priority, use `DESCENDING` if `HIGH` is 1 and `LOW` is 3. For a `votes` property, use `ASCENDING`.

## Influence ranking through query expansion

*Query expansion* uses synonyms and spelling to improve results.

### Use synonyms

Cloud Search uses public web content for synonyms. You can also define custom synonyms for organization-specific terminology. See [Define synonyms](./synonyms.md).

### Use spelling

Cloud Search provides spelling suggestions in [`SpellResult`](../reference/rest/v1/query/search.md#SpellResult). It also uses spell corrections as synonyms to find documents.

## Influence ranking through Search Application settings

A Search Application provides contextual information. You can influence ranking using the following settings.

### Adjust the scoring configuration

Specify a [`ScoringConfig`](../reference/rest/v1/settings.searchapplications.md#ScoringConfig) to disable [freshness](#freshness) or [personalization](#personalization). Disabling personalization removes [owner](#owner) and [interaction](#interaction) boosts. See [Customize the search experience](https://support.google.com/a/answer/9043922).

### Adjust the source configuration

Specify data source-level settings:

- **Source importance**: Items from a `HIGH` importance source rank higher.
- **Crowding**: Limits results from a single source (default is 3) to ensure diversity.

## Personalization

Personalization prioritizes results based on the user:

- **Item ownership**: Boosts items owned by the user.
- **User clicks**: Boosts items the user previously clicked. Don't modify the result URL, as it is used to collect this data.

## Query interpretation

The *query interpretation* feature converts user queries into structured, operator-based queries using schema definitions. This provides precise results even with minimal keywords. See [Structure a schema for optimal query interpretation](./query-interpretation.md).

### Item language

Cloud Search demotes items whose language doesn't match the query language. Set `languageCode` in [`RequestOptions`](../reference/rest/v1/RequestOptions.md) to the user's preference.

### Item context

Use [`contextAttributes`](../reference/rest/v1/indexing.datasources.items.md#ContextAttribute) to increase ranking for items relevant to the query context, such as location or department.

## Item popularity

Cloud Search boosts items that users frequently click in recent queries. Don't modify search result URLs, as they are used to track these clicks.

## Summary of search quality settings

The following tables provide a summary of search quality settings:

### Schema settings

| Setting | Location | Recommendation | Details |
| --- | --- | --- | --- |
| `ItemContent` | [`ItemContent`](../reference/rest/v1/indexing.datasources.items.md#ItemContent) | Recommended | [Topicality](#topicality) |
| `RetrievalImportance` | [`RetrievalImportance`](../reference/rest/v1/Schema.md#RetrievalImportance) | Recommended | [Topicality](#topicality) |
| `FreshnessOptions` | [`FreshnessOptions`](../reference/rest/v1/Schema.md#FreshnessOptions) | Optional | [Freshness](#freshness) |

### Indexing settings

| Setting | Location | Recommendation | Details |
| --- | --- | --- | --- |
| `createTime` / `updateTime` | [`ItemMetadata`](../reference/rest/v1/indexing.datasources.items.md#ItemMetadata) | Recommended | [Freshness](#freshness) |
| `contentLanguage` | [`ItemMetadata`](../reference/rest/v1/indexing.datasources.items.md#ItemMetadata) | Recommended | [Item language](#language) |
| `owners` | [`ItemAcl`](../reference/rest/v1/indexing.datasources.items.md#ItemAcl) | Recommended | [Item ownership](#owner) |
| Custom synonyms | [`_dictionaryEntry`](../reference/schemas.md) | Recommended | [Use synonyms](#synonyms) |
| `quality` | [`SearchQualityMetadata`](../reference/rest/v1/indexing.datasources.items.md#SearchQualityMetadata) | Optional | [Influence quality](#quality) |
| Interaction data | [`interaction`](../reference/rest/v1/indexing.datasources.items.md#interaction) | Optional | [Item interaction](#interaction) |
| `OrderedRanking` | [`OrderedRanking`](../reference/rest/v1/Schema.md#OrderedRanking) | Optional | [Field type](#field-type) |

### Search application settings

| Setting | Location | Recommendation | Details |
| --- | --- | --- | --- |
| Disable personalization | [`ScoringConfig`](../reference/rest/v1/settings.searchapplications.md#ScoringConfig) | Recommended | [Personalization](#personalization) |
| Source importance | [`SourceCrowdingConfig`](../reference/rest/v1/settings.searchapplications.md#sourcecrowdingconfig) | Optional | [Source configuration](#source-configuration) |
| Crowding | [`SourceCrowdingConfig`](../reference/rest/v1/settings.searchapplications.md#sourcecrowdingconfig) | Optional | [Source configuration](#source-configuration) |

## Next Steps

1. [Structure a schema for optimal query interpretation](./query-interpretation.md).
2. [Define synonyms](./synonyms.md).
