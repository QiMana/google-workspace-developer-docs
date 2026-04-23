---
source: https://developers.google.com/apps-script/reference/slides/notes-page
root: apps-script
fetched_at: 2026-04-23T15:21:07.859Z
---

# Class NotesPage

## Page Summary

- Notes pages in a presentation contain content for handouts, including a shape for speaker notes.
- Each slide in a presentation has a corresponding notes page.
- Only the text within the speaker notes shape on a notes page can be modified.
- Notes pages provide methods to retrieve various page elements like groups, images, lines, shapes, charts, tables, videos, and word art.
- You can find a specific page element by its ID or retrieve placeholder elements by type and index on a notes page.
- Text on a notes page can be replaced using the `replaceAllText` method, with an option for case-sensitive matching.

A notes page in a presentation.

These pages contain the content for presentation handouts, including a a shape that contains the slide's speaker notes. Each slide has one corresponding notes page. Only the text in the speaker notes shape can be modified.

## Detailed documentation

### getGroups()

Returns the list of `Group` objects on the page.

#### Return

`Group[]`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getImages()

Returns the list of `Image` objects on the page.

#### Return

`Image[]`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getLines()

Returns the list of `Line` objects on the page.

#### Return

`Line[]`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getObjectId()

Gets the unique ID for the page. Object IDs used by pages and page elements share the same namespace.

#### Return

`String`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getPageElementById(id)

Returns the `PageElement` on the page with the given ID, or `null` if none exists.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID of the page element that is being retrieved. |

#### Return

`PageElement|null` — The page element with the given ID.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getPageElements()

Returns the list of `PageElement` objects rendered on the page.

#### Return

`PageElement[]`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getPlaceholder(placeholderType)

Returns the placeholder `PageElement` object for a specified `PlaceholderType` or `null` if a matching placeholder is not present.

If there are multiple placeholders with the same type, it returns the one with minimal placeholder index. If there are multiple matching placeholders with the same index, it returns the first placeholder from the page's page elements collection.

```
const slide = SlidesApp.getActivePresentation().getSlides()[0];
const placeholder = slide.getPlaceholder(
    SlidesApp.PlaceholderType.CENTERED_TITLE,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `placeholderType` | `PlaceholderType` | The placeholder type to match. |

#### Return

`PageElement|null` — The placeholder page element, or `null` if none is found.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getPlaceholder(placeholderType, placeholderIndex)

Returns the placeholder `PageElement` object for a specified `PlaceholderType` and a placeholder index, or `null` if the placeholder is not present.

If there are multiple placeholders with the same type and index, it returns the first placeholder from the page's page elements collection.

```
const slide = SlidesApp.getActivePresentation().getSlides()[0];
const placeholder = slide.getPlaceholder(
    SlidesApp.PlaceholderType.CENTERED_TITLE,
    0,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `placeholderType` | `PlaceholderType` | The placeholder type to match. |
| `placeholderIndex` | `Integer` | The placeholder index to match. |

#### Return

`PageElement|null` — The placeholder page element, or `null` if none is found.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getPlaceholders()

Returns the list of placeholder `PageElement` objects in the page.

```
const master = SlidesApp.getActivePresentation().getMasters()[0];
Logger.log(
    \`Number of placeholders in the master: ${master.getPlaceholders().length}\`,
);
```

#### Return

`PageElement[]`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getShapes()

Returns the list of `Shape` objects on the page.

#### Return

`Shape[]`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSheetsCharts()

Returns the list of `SheetsChart` objects on the page.

#### Return

`SheetsChart[]`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSpeakerNotesShape()

Gets the shape containing the speaker notes on the page.

#### Return

`Shape`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getTables()

Returns the list of `Table` objects on the page.

#### Return

`Table[]`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getVideos()

Returns the list of `Video` objects on the page.

#### Return

`Video[]`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getWordArts()

Returns the list of `WordArt` objects on the page.

#### Return

`WordArt[]`

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### replaceAllText(findText, replaceText)

Replaces all instances of text matching find text with replace text. The search is case insensitive.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `findText` | `String` | The text to find. |
| `replaceText` | `String` | The text to replace the matched text. |

#### Return

`Integer` — The number of occurrences changed.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### replaceAllText(findText, replaceText, matchCase)

Replaces all instances of text matching find text with replace text.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `findText` | `String` | The text to find. |
| `replaceText` | `String` | The text to replace the matched text. |
| `matchCase` | `Boolean` | If `true`, the search is case sensitive; if `false`, the search is case insensitive. |

#### Return

`Integer` — The number of occurrences changed.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
