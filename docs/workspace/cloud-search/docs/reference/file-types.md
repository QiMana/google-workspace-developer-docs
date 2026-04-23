---
source: https://developers.google.com/workspace/cloud-search/docs/reference/file-types
root: workspace
fetched_at: 2026-04-23T15:26:11.355Z
---

# Supported file types for text extraction

Cloud Search indexes all items that are sent, regardless of file type (MIME or content-type). Indexing is performed on a file's metadata data and, if supported, its content. Following is a list of file types for which content indexing *is* supported.

- Microsoft Word (DOC)
- Microsoft Word (DOCX)
- Microsoft Excel (XLS)
- Microsoft Excel (XLSX)
- Microsoft Powerpoint (PPT)
- Microsoft Powerpoint (PPTX)
- Adobe’s Portable Document Format (PDF)
- Rich Text Format (RTF)
- Text Format (TXT)
- Hypertext Markup Language (HTML)
- Extensible Markup Language (XML)

In addition to these file types, Cloud Search supports indexing of content within any plain text file.

## Optical Character Recognition (OCR) file types and characteristics

Google Cloud Search also uses OCR to extract text from the following file types:

| File type | Maximum size |
| --- | --- |
| Joint Photographic Experts Group (JPG) | 10 MB |
| Graphic Interchange Format (GIF) | 10 MB |
| Tagged Image File Format (TIFF) | 10 MB |
| Scalable Vector Graphics (SVG) | 10 MB |
| PostScript Image Format (PS) | 10 MB |
| Portable Document Format (PDF) | 30 MB |

OCR also works on files with these characteristics:

- Hand-written documents. Documents in Latin script, Japanese, and Korean yield the best results.
- Vertically-written documents, such as those in Japanese.
- Right-to-left-written documents, such as Hebrew.
