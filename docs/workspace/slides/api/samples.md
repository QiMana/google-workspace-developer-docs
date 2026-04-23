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

- [Create a slide](./guides/create-slide.md)
- [Add shapes and text](./guides/add-shape.md)
- [Merge data into a presentation](./guides/merge.md)
- [Add charts to a slide](./guides/add-chart.md)
- [Edit and style text](./guides/styling.md)

Recipes in this section are divided into the following categories:

- [Basic reading](./samples/reading.md) —Recipes that show common ways of reading information from a presentation.
- [Basic writing](./samples/writing.md) —Recipes that show common ways of writing to a presentation.
- [Element operations](./samples/elements.md) —Recipes that show common page element creation and editing tasks.
- [Presentation operations](./samples/presentation.md) —Recipes that show how to create and manipulate a presentation.
- [Slide operations](./samples/slides.md) —Recipes that show how to create, move, and delete slides in a presentation.
- [Table operations](./samples/tables.md) —Recipes that show how to create and edit tables within a slide.
- [Transform operations](./samples/transform.md) —Recipes that show how to alter the size and positioning of elements within a slide.

There's often more than one way to complete a given task with the Slides API. Use the batch method [`presentations.batchUpdate`](./reference/rest/v1/presentations/batchUpdate.md) wherever possible to bundle multiple update requests into a single method call. This reduces client HTTP overhead, reduces the number of queries, minimizes the number of revisions on the presentation, and applies all the changes atomically.

To further improve performance, use [field masks](./guides/field-masks.md) when reading and updating presentations, pages, and page elements.
