---
source: https://developers.google.com/workspace/slides/api/samples
root: workspace
fetched_at: 2026-04-23T15:31:55.777Z
---

# Samples

This section presents a set of sample applications and "recipe" examples that demonstrate how to translate an intended Google Slides action into an Google Slides API request.

## Codelabs

![Custom presentation tool for analysis of common software licenses.](https://developers.google.com/static/workspace/slides/api/images/slides_codelab.jpg)

The [Slides codelab](https://codelabs.developers.google.com/codelabs/slides-api) teaches you how to use Google Slides API as a custom presentation tool for an analysis of the most common software licenses.

You'll learn how to query all open source code on GitHub using [BigQuery](https://cloud.google.com/bigquery) and create a slide deck using Slides API to present your results.

## Sample applications

![Generate slide decks from markdown files.](https://developers.google.com/static/workspace/slides/api/images/md2slides-2_5s.gif)

The [Markdown to Slides](https://github.com/googleworkspace/md2googleslides) command-line tool lets you generate slide decks from markdown files.

You can use this to explore the Slides API, or fork the repository and modify the code to provide Slides output to your JavaScript application.

## Recipes

The examples listed in this section demonstrate how to express common actions in Slides as Slides API requests.

These examples are presented as HTTP requests to be language neutral. To learn how to implement Slides API request protocols in a specific language using Google API client libraries, see the following guides:

- [Create a slide](https://developers.google.com/workspace/slides/api/guides/create-slide)
- [Add shapes and text](https://developers.google.com/workspace/slides/api/guides/add-shape)
- [Merge data into a presentation](https://developers.google.com/workspace/slides/api/guides/merge)
- [Add charts to a slide](https://developers.google.com/workspace/slides/api/guides/add-chart)
- [Edit and style text](https://developers.google.com/workspace/slides/api/guides/styling)

Recipes in this section are divided into the following categories:

- [Basic reading](https://developers.google.com/workspace/slides/api/samples/reading) —Recipes that show common ways of reading information from a presentation.
- [Basic writing](https://developers.google.com/workspace/slides/api/samples/writing) —Recipes that show common ways of writing to a presentation.
- [Element operations](https://developers.google.com/workspace/slides/api/samples/elements) —Recipes that show common page element creation and editing tasks.
- [Presentation operations](https://developers.google.com/workspace/slides/api/samples/presentation) —Recipes that show how to create and manipulate a presentation.
- [Slide operations](https://developers.google.com/workspace/slides/api/samples/slides) —Recipes that show how to create, move, and delete slides in a presentation.
- [Table operations](https://developers.google.com/workspace/slides/api/samples/tables) —Recipes that show how to create and edit tables within a slide.
- [Transform operations](https://developers.google.com/workspace/slides/api/samples/transform) —Recipes that show how to alter the size and positioning of elements within a slide.

There's often more than one way to complete a given task with the Slides API. Use the batch method [`presentations.batchUpdate`](https://developers.google.com/workspace/slides/api/reference/rest/v1/presentations/batchUpdate) wherever possible to bundle multiple update requests into a single method call. This reduces client HTTP overhead, reduces the number of queries, minimizes the number of revisions on the presentation, and applies all the changes atomically.

To further improve performance, use [field masks](https://developers.google.com/workspace/slides/api/guides/field-masks) when reading and updating presentations, pages, and page elements.
