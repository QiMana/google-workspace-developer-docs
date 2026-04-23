---
source: https://developers.google.com/workspace/docs/api/how-tos/format-text
root: workspace
fetched_at: 2026-04-23T15:27:06.023Z
---

# Format Text

This page tells you how to format text using the Google Docs API.

## About formatting

There are two different types of formatting that you can apply to the text content of your document:

- You can change character formatting such as font, color, or underlining.
- You can change paragraph formatting such as indention or line spacing.

## Changing character formatting

Character formatting determines the rendering of text characters in your document.

Any formatting that you apply overrides the default formatting inherited from the underlying paragraph's [TextStyle](../reference/rest/v1/documents.md#paragraphstyle). Conversely, any characters whose formatting you don't set continue to inherit from the paragraph's styles.

To change the character formatting of text, use `batchUpdate` with the [UpdateTextStyleRequest](../reference/rest/v1/documents/request.md#UpdateTextStyleRequest). You need to provide a [Range](../reference/rest/v1/documents/batchUpdate.md#Range) object that includes the following information:

- A `segmentId` that identifies which header, footer, footnote—or, if unspecified, the body—contains the text.
- The `startIndex` and `endIndex` that define the range of text within the segment to be formatted.
- A `tabId` that identifies which tab contains the text.

The following example performs several text styling operations on the text that's contained in the header:

- Sets the font of characters 1-5 to bold italics.
- Sets the color of characters 6-10 to `blue` 14-pt Times New Roman font.
- Hyperlinks characters 11-15 to `www.example.com`.

A straightforward way to do this is by building a list of requests and then using one [batchUpdate](../reference/rest/v1/documents/batchUpdate.md) call:

### Java

```
List requests = new ArrayList<>();
requests.add(new Request().setUpdateTextStyle(new UpdateTextStyleRequest()
        .setTextStyle(new TextStyle()
                .setBold(true)
                .setItalic(true))
        .setRange(new Range()
                .setStartIndex(1)
                .setEndIndex(5)
                .setTabId(TAB_ID))
        .setFields("bold")));

requests.add(new Request()
        .setUpdateTextStyle(new UpdateTextStyleRequest()
                .setRange(new Range()
                        .setStartIndex(6)
                        .setEndIndex(10)
                        .setTabId(TAB_ID))
                .setTextStyle(new TextStyle()
                        .setWeightedFontFamily(new WeightedFontFamily()
                                .setFontFamily("Times New Roman"))
                        .setFontSize(new Dimension()
                                .setMagnitude(14.0)
                                .setUnit("PT"))
                        .setForegroundColor(new OptionalColor()
                                .setColor(new Color().setRgbColor(new RgbColor()
                                        .setBlue(1.0F)
                                        .setGreen(0.0F)
                                        .setRed(0.0F)))))
                .setFields("foregroundColor,weightedFontFamily,fontSize")));

requests.add(new Request()
        .setUpdateTextStyle(new UpdateTextStyleRequest()
                .setRange(new Range()
                        .setStartIndex(11)
                        .setEndIndex(15)
                        .setTabId(TAB_ID))
                .setTextStyle(new TextStyle()
                        .setLink(new Link()
                                .setUrl("www.example.com")))
                .setFields("link")));

BatchUpdateDocumentRequest body = new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response = docsService.documents()
        .batchUpdate("DOCUMENT_ID", body).execute();
```

### Python

```
requests = [
    {
        'updateTextStyle': {
            'range': {
                'startIndex': 1,
                'endIndex': 5,
                'tabId': 'TAB_ID'
            },
            'textStyle': {
                'bold': True,
                'italic': True
            },
            'fields': 'bold,italic'
        }
    },
    {
        'updateTextStyle': {
            'range': {
                'startIndex': 6,
                'endIndex': 10,
                'tabId': 'TAB_ID'
            },
            'textStyle': {
                'weightedFontFamily': {
                    'fontFamily': 'Times New Roman'
                },
                'fontSize': {
                    'magnitude': 14,
                    'unit': 'PT'
                },
                'foregroundColor': {
                    'color': {
                        'rgbColor': {
                            'blue': 1.0,
                            'green': 0.0,
                            'red': 0.0
                        }
                    }
                }
            },
            'fields': 'foregroundColor,weightedFontFamily,fontSize'
        }
    },
    {
        'updateTextStyle': {
            'range': {
                'startIndex': 11,
                'endIndex': 15,
                'tabId': 'TAB_ID'
            },
            'textStyle': {
                'link': {
                    'url': 'www.example.com'
                }
            },
            'fields': 'link'
        }
    }
]

result = service.documents().batchUpdate(
    documentId='DOCUMENT_ID', body={'requests': requests}).execute()
```

## Changing paragraph formatting

The Google Docs API lets you update paragraph formatting, which determines how blocks of text are rendered in your document, including features like alignment and indentation.

Any formatting that you apply overrides the default formatting inherited from the underlying paragraph style. Conversely, any formatting features that you don't set continue to inherit from the paragraph style. For more about paragraph styles and inheritance, see [ParagraphStyle](../reference/rest/v1/documents.md#paragraphstyle).

The example below specifies the following formatting for a paragraph:

- A heading as the named style
- Custom spacing above
- Custom spacing below
- A custom left border

All the rest of the paragraph's formatting features continue to inherit from the underlying named style.

### Java

```
List requests = new ArrayList<>();
requests.add(new Request().setUpdateParagraphStyle(new UpdateParagraphStyleRequest()
        .setRange(new Range()
                .setStartIndex(1)
                .setEndIndex(10)
                .setTabId(TAB_ID))
        .setParagraphStyle(new ParagraphStyle()
                .setNamedStyleType("HEADING_1")
                .setSpaceAbove(new Dimension()
                        .setMagnitude(10.0)
                        .setUnit("PT"))
                .setSpaceBelow(new Dimension()
                        .setMagnitude(10.0)
                        .setUnit("PT")))
        .setFields("namedStyleType,spaceAbove,spaceBelow")
));

requests.add(new Request().setUpdateParagraphStyle(new UpdateParagraphStyleRequest()
        .setRange(new Range()
                .setStartIndex(10)
                .setEndIndex(20)
                .setTabId(TAB_ID))
        .setParagraphStyle(new ParagraphStyle()
                .setBorderLeft(new ParagraphBorder()
                        .setColor(new OptionalColor()
                                .setColor(new Color()
                                        .setRgbColor(new RgbColor()
                                                .setBlue(1.0F)
                                                .setGreen(0.0F)
                                                .setRed(0.0F)
                                        )
                                )
                        )
                        .setDashStyle("DASH")
                        .setPadding(new Dimension()
                                .setMagnitude(20.0)
                                .setUnit("PT"))
                        .setWidth(new Dimension()
                                .setMagnitude(15.0)
                                .setUnit("PT")
                        )
                )
        )
        .setFields("borderLeft")
));

BatchUpdateDocumentRequest body = new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response = docsService.documents()
        .batchUpdate(DOCUMENT_ID, body).execute();
```

### Python

```
requests = [
    {
        'updateParagraphStyle': {
            'range': {
                'startIndex': 1,
                'endIndex':  10,
                'tabId': TAB_ID
            },
            'paragraphStyle': {
                'namedStyleType': 'HEADING_1',
                'spaceAbove': {
                    'magnitude': 10.0,
                    'unit': 'PT'
                },
                'spaceBelow': {
                    'magnitude': 10.0,
                    'unit': 'PT'
                }
            },
            'fields': 'namedStyleType,spaceAbove,spaceBelow'
        }
    },
    {
        'updateParagraphStyle': {
            'range': {
                'startIndex': 10,
                'endIndex':  20,
                'tabId': TAB_ID
            },
            'paragraphStyle': {
                'borderLeft': {
                    'color': {
                        'color': {
                            'rgbColor': {
                                'blue': 1.0,
                                'green': 0.0,
                                'red': 0.0
                            }
                        }
                    },
                    'dashStyle': 'DASH',
                    'padding': {
                        'magnitude': 20.0,
                        'unit': 'PT'
                    },
                    'width': {
                        'magnitude': 15.0,
                        'unit': 'PT'
                    },
                }
            },
            'fields': 'borderLeft'
        }
    }
]

result = service.documents().batchUpdate(
    documentId=DOCUMENT_ID, body={'requests': requests}).execute()
```
