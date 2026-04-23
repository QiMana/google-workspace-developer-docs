---
source: https://developers.google.com/workspace/slides/api/guides/notes
root: workspace
fetched_at: 2026-04-23T15:31:45.971Z
---

# Work with speaker notes

This guide explains how to read and edit speaker notes using the Google Slides API.

## Notes pages and notes masters

A notes page is a kind of page used for generating handouts for slides in a presentation. Each slide has one notes page. The first `BODY` placeholder shape on a slide's notes page contains the text of a slide's speaker notes. Only the text content of this notes shape is editable in Slides API. Its other properties and the rest of the notes page contents are read-only.

The presentation's notes master is a page that defines the default elements and text styles used on notes pages. A presentation only has one notes master. Notes masters are read-only in the Slides API.

## Read and write speaker notes

To find a slide's speaker note shape, find the slide's notes [`presentations.pages`](../reference/rest/v1/presentations.pages.md) object in its [`SlideProperties`](../reference/rest/v1/presentations.pages.md#slideproperties) message. The shape containing the speaker notes text is identified by the `speakerNotesObjectId` field in the notes page's [`NotesProperties`](../reference/rest/v1/presentations.pages.md#notesproperties) message.

To read a slide's speaker notes, find an object with this ID on the notes page and read its [text](../concepts/text.md). In rare cases, this object might not exist which means the slides have no speaker notes.

You can use [`batchUpdate`](./styling.md) text requests to modify the text inside the speaker notes shape. In the rare case where the speaker notes shape doesn't exist, the Slides API creates it automatically when it receives a valid text operation using a `speakerNotesObjectId`.
