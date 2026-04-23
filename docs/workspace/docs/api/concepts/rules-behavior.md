---
source: https://developers.google.com/workspace/docs/api/concepts/rules-behavior
root: workspace
fetched_at: 2026-04-23T15:27:05.680Z
---

# Structural edit rules and behavior

This section describes behaviors and limitations that you must understand when you edit documents using the Google Docs API.

In general, you cannot execute edits that cause the invalid structure of elements within a document. Review each [`documents.batchUpdate`](../reference/rest/v1/documents/batchUpdate.md) request method for constraints and rules that apply to those [requests](../reference/rest/v1/documents/request.md).

The following sections summarize the key rules across these methods.

## Insert text

- Inserting a newline character implicitly creates a [`Paragraph`](../reference/rest/v1/documents.md#paragraph) at that index. The paragraph style of the new paragraph is copied from the paragraph at the current insertion index, including lists and bullets.
- Text must be inserted within the bounds of an existing `Paragraph`. For example, text cannot be inserted at a table's start index. The text must be inserted in the preceding paragraph.
- The API may implicitly adjust the location to prevent insertions within Unicode grapheme clusters. When this happens, the text is inserted immediately after the grapheme cluster.
- Text styles for inserted text are determined automatically, generally preserving the styling of neighboring text. Typically, the text style for the inserted text matches the text immediately before the insertion index.
- Some control characters (`U+0000-U+0008, U+000C-U+001F`) and characters from the Unicode Basic Multilingual Plane Private Use Area (`U+E000-U+F8FF`) are stripped out of inserted text.
- For more information, see [Insert, delete, and move text](../how-tos/move-text.md).

## Insert inline images

- Image must be less than 50 MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF formats.
- The provided URI must be publicly accessible and at most 2 KB in length.
- Image must be inserted within the bounds of an existing `Paragraph`. For example, text cannot be inserted at a table's start index.
- Images can't be inserted inside a footnote or equation.
- For more information, see [Insert inline images](../how-tos/images.md).

## Format text

- When you apply paragraph-level formatting to a range, the formatting is applied to any paragraph that's partially or completely overlapped by that range.
- The range might be extended to include adjacent newlines.
- If the range fully contains a paragraph belonging to a list, the paragraph's bullet is also updated with the matching text style.
- For more information, see [Format text](../how-tos/format-text.md).

## Create paragraph bullets

- Creates bullets for all paragraphs that overlap with the given range.
- The nesting level of each paragraph is determined by the number of leading tabs before each paragraph.
- The leading tabs are removed when creating the bullets, which might change the indexes of parts of the text.
- If you add paragraph bullets that match those of a list immediately before the target paragraph, the paragraph is joined to the list.
- For more information, see [Work with lists](../how-tos/lists.md).

## Delete text

- Deleting text that crosses a paragraph boundary might cause changes to paragraph styles, lists, positioned objects, and bookmarks as the two paragraphs are merged.
- Deletions that cause an invalid document structure are not permitted. Some examples of invalid delete requests include:
	- Deleting one code unit of a surrogate pair.
		- Deleting the last newline character of a [`Body`](../reference/rest/v1/documents.md#body), [`Header`](../reference/rest/v1/documents.md#header), [`Footer`](../reference/rest/v1/documents.md#footer), [`Footnote`](../reference/rest/v1/documents.md#footnote), [`TableCell`](../reference/rest/v1/documents.md#tablecell), or [`TableOfContents`](../reference/rest/v1/documents.md#tableofcontents).
		- Deleting the start or end of a [`Table`](../reference/rest/v1/documents.md#table), `TableOfContents`, or [`Equation`](../reference/rest/v1/documents.md#equation) without deleting the entire element.
		- Deleting the newline character before a `Table`, `TableOfContents`, or [`SectionBreak`](../reference/rest/v1/documents.md#sectionbreak) without deleting the element.
		- Deleting individual rows or cells of a table. Deleting the content in a table cell is allowed.
- For more information, see [Insert, delete, and move text](../how-tos/move-text.md).

## Related topics

- [Structure of a Google Docs document](./structure.md)
- [Requests and responses](./request-response.md)
