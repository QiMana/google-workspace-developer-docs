---
source: https://developers.google.com/workspace/docs/api/how-tos/lists
root: workspace
fetched_at: 2026-04-23T15:27:06.321Z
---

# Work with lists

The Google Docs API supports creating lists in new documents, converting existing plain paragraphs to bulleted lists, and removing bullets from paragraphs.

## Create a numbered list in a new document

The Docs API supports creating a numbered list in a new document by inserting text and then applying a list style to the text in a single batch request.

To create a numbered list in a new document:

1. Use the [`documents.create`](../reference/rest/v1/documents/create.md) method to create a document.
2. Use the [`documents.batchUpdate`](../reference/rest/v1/documents/batchUpdate.md) method and supply an [`InsertTextRequest`](../reference/rest/v1/documents/request.md#inserttextrequest) to add content to the document. Use newline characters (`\n`) to separate the list items.
3. In the same batch update, include a [`CreateParagraphBulletsRequest`](../reference/rest/v1/documents/request.md#createparagraphbulletsrequest), a [`Range`](../reference/rest/v1/documents.md#Range) to specify the range of text, and a [`BulletGlyphPreset`](../reference/rest/v1/documents/request.md#bulletglyphpreset) to set the pattern for the numbering.

The following code sample shows how to create a document and then insert three items as a numbered list. The `BulletGlyphPreset` uses `NUMBERED_DECIMAL_ALPHA_ROMAN` to format the list. This means the first three nesting levels of the numbered list are represented by a decimal number, a lowercase letter, and a lowercase Roman numeral.

### Java

```
Document doc = new Document().setTitle("New List Document");
doc = docsService.documents().create(doc).execute();
String documentId = doc.getDocumentId();

List<Request> requests = new ArrayList<>();
requests.add(new Request().setInsertText(new InsertTextRequest()
        .setText("Item 1\nItem 2\nItem 3\n")
        .setLocation(new Location().setIndex(1).setTabId(<var>TAB_ID</var>))));

requests.add(new Request().setCreateParagraphBullets(
        new CreateParagraphBulletsRequest()
                .setRange(new Range()
                        .setStartIndex(1)
                        .setEndIndex(22)
                        .setTabId(<var>TAB_ID</var>))
                .setBulletPreset("NUMBERED_DECIMAL_ALPHA_ROMAN")));

BatchUpdateDocumentRequest body = new BatchUpdateDocumentRequest().setRequests(requests);
docsService.documents().batchUpdate(documentId, body).execute();

System.out.println("Created document with ID: " + documentId);
```

### Python

```
title = 'New List Document'
body = {'title': title}
doc = service.documents().create(body=body).execute()
document_id = doc.get('documentId')

requests = [
    {
        'insertText': {
            'location': {
                'index': 1,
                'tabId': <var>TAB_ID</var>
            },
            'text': 'Item 1\nItem 2\nItem 3\n'
        }
    },
    {
        'createParagraphBullets': {
            'range': {
                'startIndex': 1,
                'endIndex': 22,
                'tabId': <var>TAB_ID</var>
            },
            'bulletPreset': 'NUMBERED_DECIMAL_ALPHA_ROMAN'
        }
    }
]

result = service.documents().batchUpdate(
    documentId=document_id, body={'requests': requests}).execute()

print(f"Created document with ID: {document_id}")
```

Replace TAB\_ID with the [ID of the tab](../reference/rest/v1/documents.md#TabProperties.FIELDS.tab_id) that contains the list content.

## Convert a paragraph to a list

A common paragraph formatting operation is converting existing paragraphs into a bulleted list.

To create a list, use the [`documents.batchUpdate`](../reference/rest/v1/documents/batchUpdate.md) method and supply a [`CreateParagraphBulletsRequest`](../reference/rest/v1/documents/request.md#createparagraphbulletsrequest). Include a [`Range`](../reference/rest/v1/documents.md#Range) to specify the affected text and a [`BulletGlyphPreset`](../reference/rest/v1/documents/request.md#bulletglyphpreset) to set the pattern for the bullet.

All paragraphs that overlap with the given range are bulleted. If the specified range overlaps with a table, the bullets are applied within the table cells. The nesting level of each paragraph is determined by counting leading tabs in front of each paragraph.

You can't adjust the nesting level of an existing bullet. Instead, you must delete the bullet, set the leading tabs in front of the paragraph, and then create the bullet again. For more information, see [Remove bullets from a list](#remove-list).

You can also use `CreateParagraphBulletsRequest` to change the bullet style for an existing list.

The following code sample shows a batch request that first inserts text at the start of the document, and then it creates a list from the paragraphs spanning the first 50 characters. The `BulletGlyphPreset` uses `BULLET_ARROW_DIAMOND_DISC` which means the first three nesting levels of the bulleted list are represented by an arrow, a diamond, and a disc.

### Java

```
List<Request> requests = new ArrayList<>();
requests.add(new Request().setInsertText(new InsertTextRequest()
        .setText("Item One\n")
        .setLocation(new Location().setIndex(1).setTabId(<var>TAB_ID</var>))));

requests.add(new Request().setCreateParagraphBullets(
        new CreateParagraphBulletsRequest()
                .setRange(new Range()
                        .setStartIndex(1)
                        .setEndIndex(50)
                        .setTabId(<var>TAB_ID</var>))
                .setBulletPreset("BULLET_ARROW_DIAMOND_DISC")));

BatchUpdateDocumentRequest body = new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response = docsService.documents()
        .batchUpdate(<var>DOCUMENT_ID</var>, body).execute();
```

### Python

```
requests = [
        {
        'insertText': {
            'location': {
                'index': 1,
                'tabId': <var>TAB_ID</var>
            },
            'text': 'Item One\n',
        }}, {
        'createParagraphBullets': {
            'range': {
                'startIndex': 1,
                'endIndex':  50,
                'tabId': <var>TAB_ID</var>
            },
            'bulletPreset': 'BULLET_ARROW_DIAMOND_DISC',
        }
    }
]

result = service.documents().batchUpdate(
    documentId=<var>DOCUMENT_ID</var>, body={'requests': requests}).execute()
```

Replace TAB\_ID with the [ID of the tab](../reference/rest/v1/documents.md#TabProperties.FIELDS.tab_id) that contains the list content, or omit it to default to the first tab in the document.

![Convert a paragraph to a list.](https://developers.google.com/static/workspace/docs/api/images/CreateBullets.svg)

Figure 1. Convert a paragraph to a list.

## Remove bullets from a list

To remove bullets from a paragraph list, use the [`documents.batchUpdate`](../reference/rest/v1/documents/batchUpdate.md) method and supply a [`DeleteParagraphBulletsRequest`](../reference/rest/v1/documents/request.md#deleteparagraphbulletsrequest). Include a [`Range`](../reference/rest/v1/documents.md#Range) to specify the affected text.

The method deletes all bullets that overlap with the given range, regardless of nesting level. To visually preserve the nesting level, indentation is added to the start of each corresponding paragraph.

The following code sample shows a batch request that deletes bullets from a paragraph list.

### Java

```
List<Request> requests = new ArrayList<>();
requests.add(new Request().setDeleteParagraphBullets(
        new DeleteParagraphBulletsRequest()
                .setRange(new Range()
                        .setStartIndex(1)
                        .setEndIndex(50)
                        .setTabId(<var>TAB_ID</var>))));

BatchUpdateDocumentRequest body = new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response = docsService.documents()
        .batchUpdate(<var>DOCUMENT_ID</var>, body).execute();
```

### Python

```
requests = [
        {
        'deleteParagraphBullets': {
            'range': {
                'startIndex': 1,
                'endIndex':  50,
                'tabId': <var>TAB_ID</var>
            },
        }
    }
]

result = service.documents().batchUpdate(
    documentId=<var>DOCUMENT_ID</var>, body={'requests': requests}).execute()
```

Replace TAB\_ID with the [ID of the tab](../reference/rest/v1/documents.md#TabProperties.FIELDS.tab_id) that contains the list content, or omit it to default to the first tab in the document.
