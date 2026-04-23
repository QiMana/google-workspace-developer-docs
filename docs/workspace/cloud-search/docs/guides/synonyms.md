---
source: https://developers.google.com/workspace/cloud-search/docs/guides/synonyms
root: workspace
fetched_at: 2026-04-23T15:26:10.828Z
---

# Define synonyms

Organizations often have unique terminology or multiple ways to refer to the same concept. Defining synonyms establishes term equivalency, helping users find items during searches.

Define synonyms by indexing items with the `_dictionaryEntry` well-known schema.

Items of type `_dictionaryEntry` can have the following properties:

| Property | Type | Description | Required? |
| --- | --- | --- | --- |
| `_term` | string | The term to define. Recommended values are unhyphenated words or phrases without punctuation. | Required |
| `_synonym` | string (repeated) | Alternate terms to be included in queries matching the string defined in `_term`. | Required |
| `_onlyApplicableForAttachedSearchApplications` | boolean | Allows you to group synonyms by data source and search application. For further information, see [Define data source-specific synonyms](./synonyms.md#specific). | Optional |

When a user includes a `_term` value in a query, the *effective* query becomes " *term OR synonyms*." For example, if you define "scifi" with the synonym "science fiction", a query for "scifi" matches items containing either term.

Synonyms aren't bidirectional by default. A query for "science fiction" only matches that exact phrase unless you also define it as a term with "scifi" as a synonym. To make terms interchangeable, define each one separately:

| Term | Synonyms |
| --- | --- |
| scifi | science fiction |
| science fiction | scifi |

Query processing removes hyphenation and punctuation before applying synonyms. A query for "sci-fi" matches the term "sci fi". To support hyphenated terms, normalize the `_term` to use whitespace instead of hyphens.

Interchangeable examples:

| Term | Synonyms |
| --- | --- |
| scifi | science fiction, sci fi |
| sci fi | science fiction, scifi |
| science fiction | scifi, sci fi |

By default, synonyms apply across the entire domain and all search applications. To limit them, see [Define data source-specific synonyms](#specific).

## Define global synonyms using the SDK

Use the Content Connector SDK to define terms and synonyms. See [Create a content connector](./content-connector.md) for details.

This snippet builds a [`RepositoryDoc`](../reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/template/RepositoryDoc.md) from a CSV record:

```
/**
 * Creates a document for indexing.
 *
 * For this connector sample, the created document is domain public
 *  searchable. The content is a simple text string.
 *
 * @param record The current CSV record to convert
 * @return the fully formed document ready for indexing
 */
private ApiOperation buildDocument(CSVRecord record) {
  // Extract term and synonyms from record
  String term = record.get(0);
  List<String> synonyms = StreamSupport.stream(record.spliterator(), false)
      .skip(1) // Skip term
      .collect(Collectors.toList());

  Multimap<String, Object> structuredData = ArrayListMultimap.create();
  structuredData.put("_term", term);
  structuredData.putAll("_synonym", synonyms);

  if (Configuration.getBoolean("dictionary.attachedToSearchApp", false).get()) {
    structuredData.put("_onlyApplicableForAttachedSearchApplications", true);
  }

  String itemName = String.format("dictionary/%s", term);

  // Using the SDK item builder class to create the item
  Item item =
      IndexingItemBuilder.fromConfiguration(itemName)
          .setItemType(IndexingItemBuilder.ItemType.CONTENT_ITEM)
          .setObjectType("_dictionaryEntry")
          .setValues(structuredData)
          .setAcl(DOMAIN_PUBLIC_ACL)
          .build();

  // Create the fully formed document
  return new RepositoryDoc.Builder()
      .setItem(item)
      .build();
}
```

Important considerations:

- Synonym entries must be domain public. For example, you can set the ACL to `DOMAIN_PUBLIC_ACL`.
- Avoid settings in your configuration file that override this, such as `defaultAcl.mode=FALLBACK` or `defaultAcl.public=true`.

## Define search application-specific synonyms

To provide team-specific synonyms (e.g., for engineering versus sales), index each synonym with `_onlyApplicableForAttachedSearchApplications=true`. This restricts the synonyms to search applications that include the specific data source.

Example:

```
structuredData.put("_onlyApplicableForAttachedSearchApplications", true);
```
