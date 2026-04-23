---
source: https://developers.google.com/workspace/docs/api/how-tos/field-masks
root: workspace
fetched_at: 2026-04-23T15:27:06.484Z
---

# Use field masks

Field masks are a way for API callers to list the fields that a request should return or update. Using a [FieldMask](https://protobuf.dev/reference/protobuf/google.protobuf/#field-mask) allows the API to avoid unnecessary work and improves performance. A field mask is used for both the read and update methods in the Google Docs API.

## Read with a field mask

Documents can be large, and often you don't need every part of the [`Document`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#resource:-document) resource returned by a read request. You can limit what's returned in a Docs API response, using the `fields` URL parameter. For best performance, [explicitly list only the fields you need](https://developers.google.com/workspace/docs/api/how-tos/performance#partial-response) in the reply.

The format of the fields parameter is the same as the [JSON encoding of a FieldMask](https://protobuf.dev/reference/protobuf/google.protobuf/#json-encoding-field-masks). Stated briefly, multiple different fields are comma-separated and subfields are dot-separated. Field names can be specified in **camelCase** or **separated\_by\_underscores**. For convenience, multiple subfields from the same type can be listed within parentheses.

The following [`documents.get`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/get) request example uses a field mask of `title,tabs(documentTab(body.content(paragraph))),revisionId` to fetch the document's `title`, the [`Paragraph`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#paragraph) of a [`Body`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#body) object (from all tabs), and the document's `revisionId` within a document:

```
GET https://docs.googleapis.com/v1/documents/documentId?fields=title,tabs(documentTab(body.content(paragraph))),revisionId
```

The response to this method call is a [`Document`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#resource:-document) object containing the components requested in the field mask:

```
{
  "title": "TITLE",
  "revisionId": "REVISION_ID",
  "tabs": [
    {
      "documentTab": {
        "body": {
          "content": [
            {},
            {
              "paragraph": {
                "elements": [
                  {
                    "startIndex": 1,
                    "endIndex": 59,
                    "textRun": {
                      "content": "CONTENT",
                      "textStyle": {}
                    }
                  }
                ],
                "paragraphStyle": {
                  "namedStyleType": "NORMAL_TEXT",
                  "direction": "LEFT_TO_RIGHT"
                }
              }
            }
          ]
        }
      }
    }
  ]
}
```

## Update with a field mask

Sometimes you need to update only certain fields in an object while leaving the other fields unchanged. Update requests inside a [`documents.batchUpdate`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/batchUpdate) operation use field masks to tell the API which fields are being changed. The update request ignores any fields that aren't specified in the field mask, leaving them with their current values.

You can also unset a field by not specifying it in the updated message, but adding the field to the mask. This clears whatever value the field previously had.

The syntax for update field masks is the same as read field masks.

The following example uses the [`UpdateTextStyleRequest`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/request#UpdateTextStyleRequest) to style the words "Google Docs API" in the document as bold within the `range` 5–20:

```
POST https://docs.googleapis.com/v1/documents/documentId:batchUpdate
```

```
{
  "title": "TITLE",
  "revisionId": "REVISION_ID",
  "suggestionsViewMode": "SUGGESTIONS_INLINE",
  "documentId": "DOCUMENT_ID",
  "tabs": [
    {
      "documentTab": {
        "body": {
          "content": [
            {
              "endIndex": 1,
              "sectionBreak": {
                "sectionStyle": {
                  "columnSeparatorStyle": "NONE",
                  "contentDirection": "LEFT_TO_RIGHT",
                  "sectionType": "CONTINUOUS"
                }
              }
            },
            {
              "startIndex": 1,
              "endIndex": 59,
              "paragraph": {
                "elements": [
                  {
                    "startIndex": 1,
                    "endIndex": 5,
                    "textRun": {
                      "content": "CONTENT",
                      "textStyle": {}
                    }
                  },
                  {
                    "startIndex": 5,
                    "endIndex": 20,
                    "textRun": {
                      "content": "CONTENT",
                      "textStyle": {
                        "bold": true
                      }
                    }
                  },
                  {
                    "startIndex": 20,
                    "endIndex": 59,
                    "textRun": {
                      "content": "CONTENT",
                      "textStyle": {}
                    }
                  }
                ],
                "paragraphStyle": {
                  "namedStyleType": "NORMAL_TEXT",
                  "direction": "LEFT_TO_RIGHT"
                }
              }
            }
          ]
        },
        {
          ... // style details
        },
      }
    }
  ],
}
```
