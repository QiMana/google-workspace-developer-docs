---
source: https://developers.google.com/workspace/drive/api/guides/ref-export-formats
root: workspace
fetched_at: 2026-04-23T15:27:41.844Z
---

# Export MIME types for Google Workspace documents

The following table shows how Google Workspace documents map to export [MIME types](https://www.iana.org/assignments/media-types/media-types.xhtml):

| Document Type | Format | MIME Type | File Extension |
| --- | --- | --- | --- |
| **Documents** | Microsoft Word | application/vnd.openxmlformats-officedocument.wordprocessingml.document | .docx |
|  | OpenDocument | application/vnd.oasis.opendocument.text | .odt |
|  | Rich Text | application/rtf | .rtf |
|  | PDF | application/pdf | .pdf |
|  | Plain Text | text/plain | .txt |
|  | Web Page (HTML) | application/zip | .zip |
|  | EPUB | application/epub+zip | .epub |
|  | Markdown | text/markdown | .md |
| **Spreadsheets** | Microsoft Excel | application/vnd.openxmlformats-officedocument.spreadsheetml.sheet | .xlsx |
|  | OpenDocument | application/vnd.oasis.opendocument.spreadsheet | .ods |
|  | PDF | application/pdf | .pdf |
|  | Web Page (HTML) | application/zip | .zip |
|  | Comma Separated Values (first-sheet only) | text/csv | .csv |
|  | Tab Separated Values (first-sheet only) | text/tab-separated-values | .tsv |
| **Presentations** | Microsoft PowerPoint | application/vnd.openxmlformats-officedocument.presentationml.presentation | .pptx |
|  | ODP | application/vnd.oasis.opendocument.presentation | .odp |
|  | PDF | application/pdf | .pdf |
|  | Plain Text | text/plain | .txt |
|  | JPEG (first-slide only) | image/jpeg | .jpg |
|  | PNG (first-slide only) | image/png | .png |
|  | Scalable Vector Graphics (first-slide only) | image/svg+xml | .svg |
| **Drawings** | PDF | application/pdf | .pdf |
|  | JPEG | image/jpeg | .jpg |
|  | PNG | image/png | .png |
|  | Scalable Vector Graphics | image/svg+xml | .svg |
| **Apps Script** | JSON | application/vnd.google-apps.script+json | .json |
| **Google Vids** | MP4 | video/mp4 | .mp4 |

To view a list of all system supported export formats for a user, use the [`get`](https://developers.google.com/workspace/drive/api/reference/rest/v3/about/get) method on the [`about`](https://developers.google.com/workspace/drive/api/reference/rest/v3/about) resource with the `fields` parameter set to [`exportFormats`](https://developers.google.com/workspace/drive/api/reference/rest/v3/about#About.FIELDS.export_formats).

You can also export Google Workspace documents using Google Apps Script. For more information on supported formats when exporting content in Apps Script, see the reference documentation for [Google Docs](https://developers.google.com/apps-script/reference/document/document#getascontenttype), [Google Sheets](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getascontenttype), and [Google Slides](https://developers.google.com/apps-script/reference/slides/image#getascontenttype).

## Related topics

- [Google Workspace and Google Drive supported MIME types](https://developers.google.com/workspace/drive/api/guides/mime-types)
- [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info)
