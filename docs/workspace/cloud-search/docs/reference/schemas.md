---
source: https://developers.google.com/workspace/cloud-search/docs/reference/schemas
root: workspace
fetched_at: 2026-04-23T15:26:20.584Z
---

# Well-known schemas

In addition to custom schemas, the following well-known schemas are defined for your use.

## Dictionary Entries

Items of type `_dictionaryEntry` can have the following properties:

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| `_term` | string | The term to define. Recommended values are unhyphenated words or phrases without punctuation. | Required |
| `_synonym` | string (repeated) | Alternate terms to be included in queries matching the string defined in `_term`. | Required |
| `_onlyApplicableForAttachedSearchApplications` | boolean | Allows you to group synonyms by data source and search application. For further information, see [Define data source-specific synonyms](https://developers.google.com/workspace/cloud-search/docs/guides/synonyms#specific). | Optional |
