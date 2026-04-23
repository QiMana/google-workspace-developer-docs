---
source: https://developers.google.com/workspace/cloud-search/docs/guides/autocomplete
root: workspace
fetched_at: 2026-04-23T15:26:07.586Z
---

# Implement autocomplete

Google Cloud Search autocomplete assists users by suggesting words as they type a search query. For example, suggestions might include words from document titles, search operators, or names from your Google Workspace organization.

Autocomplete extracts phrases from indexed document titles and uses an [n-gram model](https://en.wikipedia.org/wiki/N-gram) to determine suggestions using the Suggest API. By default, autocomplete shows phrases from document titles. You can also mark text and enum schema properties as `is_suggestable` to autocomplete property names and values.

The Suggest API examines search queries for language hints, such as English or Spanish, and prioritizes results. The [`languageCode`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/RequestOptions) field in a request also improves language-specific suggestions.

## Example scenario

Consider a data source containing movie data:

- The data source contains two documents.
- Each document has a title (`ItemMetadata.title`) and two properties: `genre` and `characters`.
- Document 1 title: "Avengers Infinity War"; `genre=science fiction`; `characters=Iron Man, Hulk`.
- Document 2 title: "Harry Potter"; `genre=Adventure, Fantasy`; `characters=Hermione, Harry Potter`.

Figure 1 illustrates how autocomplete extracts suggestions.

![Two documents and resulting n-gram](https://developers.google.com/static/workspace/cloud-search/images/autocomplete.png)

Figure 1. Two documents and resulting n-gram used for autocomplete

From document 1, the model extracts n-grams (up to trigrams) such as "Avengers," "Infinity," "War," "Avengers Infinity," "Infinity War," and "Avengers Infinity War." From document 2, it generates "Harry," "Potter," and "Harry Potter."

If a user types "h" when querying this data source, they might see these suggestions:

- Harry
- Hermione
- Hulk
- Harry Potter

If the user selects "Hermione" and then types "a," autocomplete might show:

- Hermione Adventure
- Hermione Action
- Hermione Avengers

Autocomplete attempts to complete the last word or n-gram typed. In this example, it expands "a" to "adventure," "action," and "avengers" because no indexed text starts with "hermione a." This is a tail suggestion.

Cloud Search autocomplete returns a maximum of five suggestions from document content and two people suggestions.

By default, autocomplete shows phrases from document titles. You must explicitly mark schema properties as `is_suggestable` for the Suggest API to autocomplete property names and values.

## Integrate with the Suggest API

If you use the default search application or the embeddable search widget, Cloud Search natively supports autocomplete. Remember to mark schema properties as `is_suggestable` if you want them autocompleted.

If you are building a custom search application, autocomplete is available by using the `/query/suggest` API endpoints.

## Limitations

Autocomplete has these limitations:

- Restricting autocomplete phrases using [`FilterOptions`](https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/settings.searchapplications#FilterOptions) is not supported, except for built-in filters like `objecttype` and `mimetype`.
- Suggestions based on a user's query history are not supported.
- You can mark a maximum of 20 properties as `is_suggestable`. Contact Cloud Search support to increase this limit.
- Search operator autocomplete is unavailable for properties with `exact_match_with_operator`.
- Autocomplete returns a maximum of five document content suggestions and two people suggestions.
- Autocomplete only suggests phrases from documents the user can access.
