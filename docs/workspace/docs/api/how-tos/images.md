---
source: https://developers.google.com/workspace/docs/api/how-tos/images
root: workspace
fetched_at: 2026-04-23T15:27:05.751Z
---

# Insert inline images

You can insert an image into a document using the [`InsertInlineImageRequest`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#insertinlineimagerequest) method. You can optionally use the `objectSize` field to resize the image.

### Java

```
List requests = new ArrayList<>();
requests.add(new Request().setInsertInlineImage(new InsertInlineImageRequest()
        .setUri("https://fonts.gstatic.com/s/i/productlogos/docs_2020q4/v6/web-64dp/logo_docs_2020q4_color_1x_web_64dp.png")
        .setLocation(new Location().setIndex(1).setTabId(TAB_ID))
        .setObjectSize(new Size()
                .setHeight(new Dimension()
                        .setMagnitude(50.0)
                        .setUnit("PT"))
                .setWidth(new Dimension()
                        .setMagnitude(50.0)
                        .setUnit("PT")))));

BatchUpdateDocumentRequest body = new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response = docsService.documents()
        .batchUpdate(DOCUMENT_ID, body).execute();
```

### PHP

```
$requests = array();
$requests[] = new Google_Service_Docs_Request(array(
    'insertInlineImage' => array(
        'uri' => 'https://fonts.gstatic.com/s/i/productlogos/docs_2020q4/v6/web-64dp/logo_docs_2020q4_color_1x_web_64dp.png',
        'location' => array(
            'index' => 1,
            'tabId' => TAB_ID,
        ),
        'objectSize' => array(
            'height' => array(
                'magnitude' => 50,
                'unit' => 'PT',
            ),
            'width' => array(
                'magnitude' => 50,
                'unit' => 'PT',
            ),
        )
    )
));

// Execute the requests.
$batchUpdateRequest = new Google_Service_Docs_BatchUpdateDocumentRequest(array(
    'requests' => $requests
));
$response =
    $docsService->documents->batchUpdate(DOCUMENT_ID, $batchUpdateRequest);
```

### Python

```
requests = [{
    'insertInlineImage': {
        'location': {
            'index': 1,
            'tabId': TAB_ID
        },
        'uri':
            'https://fonts.gstatic.com/s/i/productlogos/docs_2020q4/v6/web-64dp/logo_docs_2020q4_color_1x_web_64dp.png',
        'objectSize': {
            'height': {
                'magnitude': 50,
                'unit': 'PT'
            },
            'width': {
                'magnitude': 50,
                'unit': 'PT'
            }
        }
    }
}]

# Execute the request.
body = {'requests': requests}
response = service.documents().batchUpdate(
    documentId=DOCUMENT_ID, body=body).execute()
insert_inline_image_response = response.get('replies')[0].get(
    'insertInlineImage')
print('Inserted image with object ID: {0}'.format(
    insert_inline_image_response.get('objectId')))
```

The method inserts the image as a new [`ParagraphElement`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#paragraphelement) with an [`InlineObjectElement`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#InlineObjectElement) of length 1, where the `startIndex` is the request's location.
