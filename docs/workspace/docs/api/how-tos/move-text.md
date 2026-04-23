---
source: https://developers.google.com/workspace/docs/api/how-tos/move-text
root: workspace
fetched_at: 2026-04-23T15:27:06.882Z
---

# Insert, delete, and move text

The Google Docs API lets you insert or delete text in a document. Moving text involves both operations, preceded by a `get` of the content.

You can insert or delete text in any of the tab segments within a document (body, header, footer, or footnote). For more information, see [Work with tabs](https://developers.google.com/workspace/docs/api/how-tos/tabs).

## Insert text

To insert text into a document, use the [`documents.batchUpdate`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate) method and include an [`InsertTextRequest`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#inserttextrequest) with the text and location as the payload.

The following code sample shows how you might insert a series of text strings at specified index locations in the body of a document. The example uses three target offsets (25, 50, and 75) and inserts a ten-character string at each location.

### Java

```
List<Request> requests = new ArrayList<>();
requests.add(new Request().setInsertText(new InsertTextRequest()
        .setText(text1)
        .setLocation(new Location().setIndex(25).setTabId(<var>TAB_ID</var>))));

requests.add(new Request().setInsertText(new InsertTextRequest()
        .setText(text2)
        .setLocation(new Location().setIndex(50).setTabId(<var>TAB_ID</var>))));

requests.add(new Request().setInsertText(new InsertTextRequest()
        .setText(text3)
        .setLocation(new Location().setIndex(75).setTabId(<var>TAB_ID</var>))));

BatchUpdateDocumentRequest body = new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response = docsService.documents()
        .batchUpdate(<var>DOCUMENT_ID</var>, body).execute();
```

### PHP

```
$requests = array();

$requests[] = new Google_Service_Docs_Request(array(
    'insertText' => array(
        'text' => $text1,
        'location' => array(
            'index' => 25,
            'tabId' => <var>TAB_ID</var>,
        ),
    ),
));

$requests[] = new Google_Service_Docs_Request(array(
    'insertText' => array(
        'text' => $text2,
        'location' => array(
            'index' => 50,
            'tabId' => <var>TAB_ID</var>,
        ),
    ),
));

$requests[] = new Google_Service_Docs_Request(array(
    'insertText' => array(
        'text' => $text3,
        'location' => array(
            'index' => 75,
            'tabId' => <var>TAB_ID</var>,
        ),
    ),
));

$batchUpdateRequest = new Google_Service_Docs_BatchUpdateDocumentRequest(array(
    'requests' => $requests
));

$response = $service->documents->batchUpdate($<var>DOCUMENT_ID</var>, $batchUpdateRequest);
```

### Python

```
requests = [
        {
        'insertText': {
            'location': {
                'index': 25,
                'tabId': <var>TAB_ID</var>
            },
            'text': text1
        }
    },
                {
        'insertText': {
            'location': {
                'index': 50,
                'tabId': <var>TAB_ID</var>
            },
            'text': text2
        }
    },
                {
        'insertText': {
            'location': {
                'index': 75,
                'tabId': <var>TAB_ID</var>
            },
            'text': text3
        }
    },
]

result = service.documents().batchUpdate(
    documentId=<var>DOCUMENT_ID</var>, body={'requests': requests}).execute()
```

Each insertion increments all the higher-numbered indexes by the size of the inserted text. The example precalculates the result of these index changes so that subsequent insertions happen at the new, corrected offset. Thus to insert at the original target offsets of 25, 50, and 75, the actual insertion indexes are:

- First insertion adds 10 characters at offset 25.
- Second insertion adds 10 characters at offset 50+10=60.
- Third insertion adds 10 characters at offset 75+10+10=95.

## Delete text

To delete text from a document, first construct a [`Range`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#range) that defines the range of text to delete. Then use the `documents.batchUpdate` method and include a [`DeleteContentRangeRequest`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#deletecontentrangerequest).

The following code sample shows how you might delete the text between index 10 and index 24 in the body of a document.

### Java

```
List<Request> requests = new ArrayList<>();
requests.add(new Request().setDeleteContentRange(
        new DeleteContentRangeRequest()
                .setRange(new Range()
                        .setStartIndex(10)
                        .setEndIndex(24)
                        .setTabId(<var>TAB_ID</var>))
    ));

BatchUpdateDocumentRequest body = new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response = docsService.documents()
        .batchUpdate(<var>DOCUMENT_ID</var>, body).execute();
```

### PHP

```
$requests = array();
$requests[] = new Google_Service_Docs_Request(array(
    'deleteContentRange' => array(
        'range' => array(
            'startIndex' => 10,
            'endIndex' => 24,
            'tabId' => <var>TAB_ID</var>
        ),
    ),
));

$batchUpdateRequest = new Google_Service_Docs_BatchUpdateDocumentRequest(array(
    'requests' => $requests
));

$response = $service->documents->batchUpdate(<var>DOCUMENT_ID</var>, $batchUpdateRequest);
```

### Python

```
requests = [
    {
        'deleteContentRange': {
            'range': {
                'startIndex': 10,
                'endIndex': 24,
                'tabId': <var>TAB_ID</var>
            }

        }

    },
]
result = service.documents().batchUpdate(
    documentId=<var>DOCUMENT_ID</var>, body={'requests': requests}).execute()
```

As with insertions, deleting text alters the indexes of all the text that follows in the segment. Again, [writing backwards](#write_backwards) can simplify your handling of indexes.

## Move text

To move text, you delete it in one location and then insert it elsewhere. Deleting content doesn't give you a copy of it (there's no equivalent concept of a clipboard) so you must extract the contents of the range first so you can use in your insert text request.

## Related topics

- [Create and manage documents](https://developers.google.com/workspace/docs/api/how-tos/documents)
- [Merge text into a document](https://developers.google.com/workspace/docs/api/how-tos/merge)
- [Structure of a Google Docs document](https://developers.google.com/workspace/docs/api/concepts/structure)
