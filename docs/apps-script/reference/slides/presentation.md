---
source: https://developers.google.com/apps-script/reference/slides/presentation
root: apps-script
fetched_at: 2026-04-23T15:21:12.452Z
---

# Class Presentation

## Page Summary

- You can add and remove editors and viewers to a presentation using various methods.
- Slides can be appended to or inserted into a presentation with different layouts or by copying existing slides.
- Information about the presentation, such as its ID, name, layouts, masters, and page dimensions, can be retrieved using specific methods.
- You can get the current user's selection within an active presentation and find specific page elements or slides by their ID.
- Text within the presentation can be replaced, and the presentation can be saved and closed.

A presentation.

## Detailed documentation

### addEditor(emailAddress)

Adds the given user to the list of editors for the `Presentation`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to add. |

#### Return

`Presentation` — This `Presentation`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### addEditor(user)

Adds the given user to the list of editors for the `Presentation`. If the user was already on the list of viewers, this method promotes the user out of the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to add. |

#### Return

`Presentation` — This `Presentation`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### addEditors(emailAddresses)

Adds the given array of users to the list of editors for the `Presentation`. If any of the users were already on the list of viewers, this method promotes them out of the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddresses` | `String[]` | An array of email addresses of the users to add. |

#### Return

`Presentation` — This `Presentation`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### addViewer(emailAddress)

Adds the given user to the list of viewers for the `Presentation`. If the user was already on the list of editors, this method has no effect.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to add. |

#### Return

`Presentation` — This `Presentation`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### addViewer(user)

Adds the given user to the list of viewers for the `Presentation`. If the user was already on the list of editors, this method has no effect.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to add. |

#### Return

`Presentation` — This `Presentation`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### addViewers(emailAddresses)

Adds the given array of users to the list of viewers for the `Presentation`. If any of the users were already on the list of editors, this method has no effect for them.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddresses` | `String[]` | An array of email addresses of the users to add. |

#### Return

`Presentation` — This `Presentation`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### appendSlide()

Appends a slide to the end of the presentation using the `PredefinedLayout.BLANK` predefined layout based on the current master. The current master is one of the following:

- The master of the current last slide.
- The first master in the presentation, if there is no slide.

#### Return

`Slide` — The new slide that is appended.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### appendSlide(layout)

Appends a slide to the end of the presentation using the specified layout based on the current master. The current master is one of the following:

- The master of the current last slide.
- The first master in the presentation, if there is no slide.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `layout` | `Layout` | The layout to use for the new slide; it should be present in the current master. |

#### Return

`Slide` — The new slide that is appended.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### appendSlide(predefinedLayout)

Appends a slide to the end of the presentation using the specified predefined layout based on the current master. The current master is one of the following:

- The master of the current last slide.
- The first master in the presentation, if there is no slide.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `predefinedLayout` | `PredefinedLayout` | The predefined layout to use for the new slide; it should be present in the current master. |

#### Return

`Slide` — The new slide that is appended.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### appendSlide(slide)

Appends a copy of the provided `Slide` to the end of the presentation.

If the slide being copied is from a different presentation, the parent master and layout pages are copied as well if they do not already exist in this presentation.

```
// Copy a slide from another presentation and appends it.
const otherPresentation = SlidesApp.openById('presentationId');
const currentPresentation = SlidesApp.getActivePresentation();
const slide = otherPresentation.getSlides()[0];
currentPresentation.appendSlide(slide);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `slide` | `Slide` | The slide to be copied and appended. |

#### Return

`Slide` — The new slide that is appended.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### appendSlide(slide, linkingMode)

Appends a copy of the provided `Slide` from the source presentation to the end of the current presentation, and sets the slide link as specified by the `SlideLinkingMode`.

If the slide being copied is from a different presentation, the parent master and layout pages are copied as well if they do not already exist in the current presentation.

If the link mode is `SlideLinkingMode.LINKED`, the appended slide can be updated to match the provided source slide when `Slide.refreshSlide()` is called. Other collaborators can see the link to the source slide. `SlideLinkingMode.LINKED` cannot be used with source slides from the current presentation.

```
// Copy a slide from another presentation, then append and link it.
const sourcePresentation = SlidesApp.openById('presentationId');
const currentPresentation = SlidesApp.getActivePresentation();
const slide = sourcePresentation.getSlides()[0];
const appendedSlide = currentPresentation.appendSlide(
    slide,
    SlidesApp.SlideLinkingMode.LINKED,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `slide` | `Slide` | The slide to be copied, appended, and linked. |
| `linkingMode` | `SlideLinkingMode` | The link mode to use. |

#### Return

`Slide` — The new slide.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getEditors()

Gets the list of editors for this `Presentation`.

#### Return

`User[]` — An array of users with edit permission.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getId()

Gets the presentation's unique identifier. The presentation ID is used with `SlidesApp.openById()` to open a specific presentation instance.

#### Return

`String` — The ID of this presentation.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getLayouts()

Gets the layouts in the presentation.

#### Return

`Layout[]` — The list of layouts in this presentation.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getMasters()

Gets the masters in the presentation.

#### Return

`Master[]` — The list of masters in this presentation.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getName()

Gets the name or title of the presentation.

#### Return

`String` — The title of this presentation.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getNotesMaster()

Gets the notes master of the presentation.

#### Return

`NotesMaster` — The notes master of the presentation.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getNotesPageHeight()

Gets the page height of the notes master and notes pages in the presentation in points. They all have the same page height.

#### Return

`Number` — The notes page height in points.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getNotesPageWidth()

Gets the page width of the notes master and notes pages in the presentation in points. They all have the same page width.

#### Return

`Number` — The notes page width in points.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getPageElementById(id)

Returns the `PageElement` with the given ID, or `null` if none exists.

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

### getPageHeight()

Gets the page height of the slides, layouts, and masters in the presentation in points. They all have the same page height.

#### Return

`Number` — The page height in points.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getPageWidth()

Gets the page width of the slides, layouts, and masters in the presentation in points. They all have the same page width.

#### Return

`Number` — The page width in points.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSelection()

Gets the user’s selection in the active presentation. A script can only access the selection of the user who is running the script, and only if the script is [bound](https://developers.google.com/apps-script/scripts_containers) to the presentation.

Note that the selection returned is the current effective selection. As the script performs various changes to the presentation, the selection is transformed to take them into account. For example if two shapes A and B are selected, and then the script removes shape B, the returned selection object is implicitly updated such that only shape A is selected.

```
// Gets the current active page that is selected in the active presentation.
const selection = SlidesApp.getActivePresentation().getSelection();
const currentPage = selection.getCurrentPage();
```

#### Return

`Selection|null` — A representation of the user's selection, or `null` if the script is not bound to the presentation or if there is no valid user selection.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSlideById(id)

Returns the `Slide` with the given ID, or `null` if none exists.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `id` | `String` | The ID of the slide that is being retrieved. |

#### Return

`Slide|null` — The slide with the given ID.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getSlides()

Gets the slides in the presentation.

#### Return

`Slide[]` — The list of slides in this presentation.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getUrl()

Retrieves the URL to access this presentation.

```
const presentation = SlidesApp.getActivePresentation();

// Send out the link to open the presentation.
MailApp.sendEmail(
    '<email-address>',
    presentation.getName(),
    presentation.getUrl(),
);
```

#### Return

`String` — The URL to access the current presentation.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### getViewers()

Gets the list of viewers and commenters for this `Presentation`.

#### Return

`User[]` — An array of users with view or comment permission.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### insertSlide(insertionIndex)

Inserts a slide at the specified index in the presentation using the `PredefinedLayout.BLANK` predefined layout based on the current master. The current master is one of the following:

- The master of the previous slide.
- The master of the first slide, if the insertionIndex is zero.
- The first master in the presentation, if there is no slide.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `insertionIndex` | `Integer` | The zero-based index indicating where to insert the slide. |

#### Return

`Slide` — The new slide that is inserted.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### insertSlide(insertionIndex, layout)

Inserts a slide at the specified index in the presentation using the specified layout based on the current master. The current master is one of the following:

- The master of the previous slide.
- The master of the first slide, if the insertionIndex is zero.
- The first master in the presentation, if there is no slide.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `insertionIndex` | `Integer` | The zero-based index indicating where to insert the slide. |
| `layout` | `Layout` | The layout to use for the new slide; it should be present in the current master. |

#### Return

`Slide` — The new slide that is inserted.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### insertSlide(insertionIndex, predefinedLayout)

Inserts a slide at the specified index in the presentation using the specified predefined layout based on the current master. The current master is one of the following:

- The master of the previous slide.
- The master of the first slide, if the insertionIndex is zero.
- The first master in the presentation, if there is no slide.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `insertionIndex` | `Integer` | The zero-based index indicating where to insert the slide. |
| `predefinedLayout` | `PredefinedLayout` | The predefined layout to use for the new slide; it should be present in the current master. |

#### Return

`Slide` — The new slide that is inserted.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### insertSlide(insertionIndex, slide)

Inserts a copy of the provided `Slide` at the specified index in the presentation.

If the slide being copied is from a different presentation, the parent master and layout pages are copied as well if they do not already exist in this presentation.

```
// Copy a slide from another presentation and inserts it.
const otherPresentation = SlidesApp.openById('presentationId');
const currentPresentation = SlidesApp.getActivePresentation();
const slide = otherPresentation.getSlides()[0];
const insertionIndex = 1;
currentPresentation.insertSlide(insertionIndex, slide);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `insertionIndex` | `Integer` | The zero-based index indicating where to insert the slide. |
| `slide` | `Slide` | The slide to be copied and inserted. |

#### Return

`Slide` — The new slide that is inserted.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### insertSlide(insertionIndex, slide, linkingMode)

Inserts a copy of the provided `Slide` from the source presentation into the specified index in the current presentation, and sets the slide link as specified by the `SlideLinkingMode`.

If the slide being copied is from a different presentation, the parent master and layout pages are copied as well if they do not already exist in the current presentation.

If the link mode is `SlideLinkingMode.LINKED`, the inserted slide can be updated to match the provided source slide when `Slide.refreshSlide()` is called. Other collaborators can see the link to the source slide. `SlideLinkingMode.LINKED` cannot be used with source slides from the current presentation.

```
// Copy a slide from another presentation, then insert and link it.
const sourcePresentation = SlidesApp.openById('presentationId');
const currentPresentation = SlidesApp.getActivePresentation();
const slide = sourcePresentation.getSlides()[0];
const insertionIndex = 1;
const insertedSlide = currentPresentation.insertSlide(
    insertionIndex,
    slide,
    SlidesApp.SlideLinkingMode.LINKED,
);
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `insertionIndex` | `Integer` | The zero-based index indicating where to insert the slide. |
| `slide` | `Slide` | The slide to be copied and inserted. |
| `linkingMode` | `SlideLinkingMode` | The link mode to use. |

#### Return

`Slide` — The new slide.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### removeEditor(emailAddress)

Removes the given user from the list of editors for the `Presentation`. This method doesn't block users from accessing the `Presentation` if they belong to a class of users who have general access—for example, if the `Presentation` is shared with the user's entire domain, or if the `Presentation` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to remove. |

#### Return

`Presentation` — This `Presentation`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### removeEditor(user)

Removes the given user from the list of editors for the `Presentation`. This method doesn't block users from accessing the `Presentation` if they belong to a class of users who have general access—for example, if the `Presentation` is shared with the user's entire domain, or if the `Presentation` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to remove. |

#### Return

`Presentation` — This `Presentation`, for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### removeViewer(emailAddress)

Removes the given user from the list of viewers and commenters for the `Presentation`. This method has no effect if the user is an editor, not a viewer or commenter. This method also doesn't block users from accessing the `Presentation` if they belong to a class of users who have general access—for example, if the `Presentation` is shared with the user's entire domain, or if the `Presentation` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `emailAddress` | `String` | The email address of the user to remove. |

#### Return

`Presentation` — This `Presentation` for chaining.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### removeViewer(user)

Removes the given user from the list of viewers and commenters for the `Presentation`. This method has no effect if the user is an editor, not a viewer. This method also doesn't block users from accessing the `Presentation` if they belong to a class of users who have general access—for example, if the `Presentation` is shared with the user's entire domain, or if the `Presentation` is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | A representation of the user to remove. |

#### Return

`Presentation` — This `Presentation` for chaining.

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

---

### saveAndClose()

Saves the current `Presentation`. Causes pending updates to be flushed and applied.

The `saveAndClose()` method is automatically invoked at the end of script execution for each open `Presentation`, even if the script execution terminated with an error.

A closed `Presentation` cannot be edited. Use one of the open methods on `SlidesApp` to reopen a given presentation for editing.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`

---

### setName(name)

Sets the name or title of the presentation.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name to set for this presentation. |

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/presentations.currentonly`
- `https://www.googleapis.com/auth/presentations`
