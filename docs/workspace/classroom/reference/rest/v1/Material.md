---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/Material
root: workspace
fetched_at: 2026-04-23T15:25:53.260Z
---

# Material

Material attached to course work.

When creating attachments, setting the `form`, `gem`, or `notebook` field is not supported.

JSON representation

```
{

  "driveFile": {
    object (SharedDriveFile)
  },
  "youtubeVideo": {
    object (YouTubeVideo)
  },
  "link": {
    object (Link)
  },
  "form": {
    object (Form)
  },
  "gem": {
    object (GeminiGem)
  },
  "notebook": {
    object (NotebookLmNotebook)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>material</code>. Material content. <code>material</code> can be only one of the following:</td></tr><tr><td><code>driveFile</code></td><td><p><code>object (<code>SharedDriveFile</code>)</code></p><p>Google Drive file material.</p></td></tr><tr><td><code>youtubeVideo</code></td><td><p><code>object (<code>YouTubeVideo</code>)</code></p><p>YouTube video material.</p></td></tr><tr><td><code>link</code></td><td><p><code>object (<code>Link</code>)</code></p><p>Link material. On creation, this is upgraded to a more appropriate type if possible, and this is reflected in the response.</p></td></tr><tr><td><code>form</code></td><td><p><code>object (<code>Form</code>)</code></p><p>Google Forms material. Read-only.</p></td></tr><tr><td><code>gem</code></td><td><p><code>object (<code>GeminiGem</code>)</code></p><p>Gemini Gem material. Read-only.</p></td></tr><tr><td><code>notebook</code></td><td><p><code>object (<code>NotebookLmNotebook</code>)</code></p><p>NotebookLM Notebook material. Read-only.</p></td></tr></tbody></table>

## SharedDriveFile

Drive file that is used as material for course work.

JSON representation

```
{
  "driveFile": {
    object (DriveFile)
  },
  "shareMode": enum (ShareMode)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>driveFile</code></td><td><p><code>object (<code>DriveFile</code>)</code></p><p>Drive file details.</p></td></tr><tr><td><code>shareMode</code></td><td><p><code>enum (<code>ShareMode</code>)</code></p><p>Mechanism by which students access the Drive item.</p></td></tr></tbody></table>

## ShareMode

Possible sharing options. Defaults to VIEW if left unspecified, and other values may only be specified within a course work object of type ASSIGNMENT.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNKNOWN_SHARE_MODE</code></td><td>No sharing mode specified. This should never be returned.</td></tr><tr><td><code>VIEW</code></td><td>Students can view the shared file.</td></tr><tr><td><code>EDIT</code></td><td>Students can edit the shared file.</td></tr><tr><td><code>STUDENT_COPY</code></td><td>Students have a personal copy of the shared file.</td></tr></tbody></table>

## GeminiGem

Gemini Gem link.

JSON representation

```
{
  "id": string,
  "title": string,
  "url": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Gems resource id.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Title of the Gem.</p></td></tr><tr><td><code>url</code></td><td><p><code>string</code></p><p>URL that can be used to access the Gem.</p></td></tr></tbody></table>

## NotebookLmNotebook

NotebookLM Notebook link.

JSON representation

```
{
  "id": string,
  "title": string,
  "url": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Notebook resource id.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Title of the Notebook.</p></td></tr><tr><td><code>url</code></td><td><p><code>string</code></p><p>URL that can be used to access the Notebook.</p></td></tr></tbody></table>
