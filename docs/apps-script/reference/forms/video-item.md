---
source: https://developers.google.com/apps-script/reference/forms/video-item
root: apps-script
fetched_at: 2026-04-23T15:20:27.479Z
---

# Class VideoItem

## Page Summary

- VideoItem is a layout item in Google Forms that displays a video and can be accessed or created from a Form object.
- You can set the title, help text, video URL (using long URL, short URL, or video ID), alignment, and width of a VideoItem.
- Methods are available to get properties like alignment, help text, ID, index, title, type, and width of a VideoItem.
- You can duplicate a VideoItem, which creates a copy and adds it to the end of the form.

A layout item that displays a video. Items can be accessed or created from a `Form`.

```
// Open a form by ID and add three new video items, using a long URL,
// a short URL, and a video ID.
const form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
form.addVideoItem()
    .setTitle('Video Title')
    .setHelpText('Video Caption')
    .setVideoUrl('www.youtube.com/watch?v=1234abcdxyz');

form.addVideoItem()
    .setTitle('Video Title')
    .setHelpText('Video Caption')
    .setVideoUrl('youtu.be/1234abcdxyz');

form.addVideoItem()
    .setTitle('Video Title')
    .setHelpText('Video Caption')
    .setVideoUrl('1234abcdxyz');
```

## Detailed documentation

### duplicate()

Creates a copy of this item and appends it to the end of the form.

#### Return

`VideoItem` — a duplicate of this `VideoItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getAlignment()

Gets the video's horizontal alignment.

#### Return

`Alignment` — the horizontal alignment

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getHelpText()

Gets the item's help text (sometimes called description text for layout items like `ImageItems`, `PageBreakItems`, and `SectionHeaderItems`).

#### Return

`String` — the item's help text or description text

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getId()

Gets the item's unique identifier.

#### Return

`Integer` — the item's ID

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getIndex()

Gets the index of the item among all the items in the form.

#### Return

`Integer` — the index of the item

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getTitle()

Gets the item's title (sometimes called header text, in the case of a `SectionHeaderItem`).

#### Return

`String` — the item's title or header text

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getType()

Gets the item's type, represented as an `ItemType`.

#### Return

`ItemType` — the item's type

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### getWidth()

Gets the video's width in pixels.

#### Return

`Integer` — the width in pixels

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setAlignment(alignment)

Sets the video's horizontal alignment.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `alignment` | `Alignment` | the horizontal alignment |

#### Return

`VideoItem` — this `VideoItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setHelpText(text)

Sets the item's help text (sometimes called description text for layout items like `ImageItems`, `PageBreakItems`, and `SectionHeaderItems`).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | the new help text |

#### Return

`VideoItem` — this `VideoItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setTitle(title)

Sets the item's title (sometimes called header text, in the case of a `SectionHeaderItem`).

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `title` | `String` | the new title or header text |

#### Return

`VideoItem` — this `VideoItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setVideoUrl(youtubeUrl)

Sets the video itself from a given YouTube URL or YouTube video ID.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `youtubeUrl` | `String` | the YouTube URL or ID |

#### Return

`VideoItem` — this `VideoItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`

---

### setWidth(width)

Sets the video's width in pixels. Only the video's width can be set. Height is set automatically to maintain the video's proportions.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `width` | `Integer` | the width in pixels |

#### Return

`VideoItem` — this `VideoItem`, for chaining

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/forms.currentonly`
- `https://www.googleapis.com/auth/forms`
