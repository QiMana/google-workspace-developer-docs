---
source: https://developers.google.com/workspace/docs/api/how-tos/suggestions
root: workspace
fetched_at: 2026-04-23T15:27:08.361Z
---

# Work with suggestions

Google Docs lets collaborators make [suggestions](https://support.google.com/docs/answer/6033474) that are effectively deferred edits waiting for approval.

You can use the API to view suggestions, but not programmatically accept, reject, or create them.

When you use the [`documents.get`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/get) method to fetch document content, the content might include unresolved suggestions. To control how `documents.get` represents suggestions, use the optional [`SuggestionsViewMode`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#SuggestionsViewMode) parameter. The following filter conditions are available with this parameter:

- Get content with `SUGGESTIONS_INLINE`, so text pending either deletion or insertion appears in the document.
- Get content as a preview with all suggestions accepted.
- Get content as a preview, without suggestions, with all suggestions rejected.

If you don't provide `SuggestionsViewMode`, the Google Docs API uses a default setting appropriate to the current user’s privileges.

## Suggestions & indexes

One reason the `SuggestionsViewMode` is important is that the indexes in the response might vary depending on whether there are suggestions, as shown below.

| Content with suggestions | Content without suggestions |
| --- | --- |
| ``` {  "tabs": [   {    "documentTab": {     "body": {      "content": [       {        "startIndex": 1,        "endIndex": 31,        "paragraph": {         "elements": [          {           "startIndex": 1,           "endIndex": 31,           "textRun": {            "content": "Text preceding the suggestion\n",            "textStyle": {}           }          }         ],         "paragraphStyle": {          "namedStyleType": "NORMAL_TEXT",          "direction": "LEFT_TO_RIGHT"         }        }       },       {        "startIndex": 31,        "endIndex": 51,        "paragraph": {         "elements": [          {           "startIndex": 31,           "endIndex": 50,           "textRun": {            "content": "Suggested insertion",            "suggestedInsertionIds": [             "suggest.vcti8ewm4mww"            ],            "textStyle": {}           }          },          {           "startIndex": 50,           "endIndex": 51,           "textRun": {            "content": "\n",            "textStyle": {}           }          }         ],         "paragraphStyle": {          "namedStyleType": "NORMAL_TEXT",          "direction": "LEFT_TO_RIGHT"         }        }       },       {        "startIndex": 51,        "endIndex": 81,        "paragraph": {         "elements": [          {           "startIndex": 51,           "endIndex": 81,           "textRun": {            "content": "Text following the suggestion\n",            "textStyle": {}           }          }         ],         "paragraphStyle": {          "namedStyleType": "NORMAL_TEXT",          "direction": "LEFT_TO_RIGHT"         }        }       }      ]     }    }   }  ] }, ``` | ``` {  "tabs": [   {    "documentTab": {     "body": {      "content": [       {        "startIndex": 1,        "endIndex": 31,        "paragraph": {         "elements": [          {           "startIndex": 1,           "endIndex": 31,           "textRun": {            "content": "Text preceding the suggestion\n",            "textStyle": {}           }          }         ],         "paragraphStyle": {          "namedStyleType": "NORMAL_TEXT",          "direction": "LEFT_TO_RIGHT"         }        }       },       {        "startIndex": 31,        "endIndex": 32,        "paragraph": {         "elements": [          {           "startIndex": 31,           "endIndex": 32,           "textRun": {            "content": "\n",            "textStyle": {}           }          }         ],         "paragraphStyle": {          "namedStyleType": "NORMAL_TEXT",          "direction": "LEFT_TO_RIGHT"         }        }       },       {        "startIndex": 32,        "endIndex": 62,        "paragraph": {         "elements": [          {           "startIndex": 32,           "endIndex": 62,           "textRun": {            "content": "Text following the suggestion\n",            "textStyle": {}           }          }         ],         "paragraphStyle": {          "namedStyleType": "NORMAL_TEXT",          "direction": "LEFT_TO_RIGHT"         }        }       }      ]     }    }   }  ] }, ``` |

In the response above, the paragraph containing the line "Text following the suggestion" shows the difference when using `SuggestionsViewMode`. With the value set to `SUGGESTIONS_INLINE`, the `startIndex` of the [`ParagraphElement`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#paragraphelement) begins at 51 and the `endIndex` stops at 81. Without suggestions, the `startIndex` and `endIndex` range from 32–62.

## Get content without suggestions

The following partial code sample shows how to get a document as a preview with all suggestions rejected (if there are any) by setting the `SuggestionsViewMode` parameter to `PREVIEW_WITHOUT_SUGGESTIONS`.

### Java

```
final string SUGGEST_MODE = "PREVIEW_WITHOUT_SUGGESTIONS";
Document doc =
    service
        .documents()
        .get(DOCUMENT_ID)
        .setIncludeTabsContent(true)
        .setSuggestionsViewMode(SUGGEST_MODE)
        .execute();
```

### Python

```
SUGGEST_MODE = "PREVIEW_WITHOUT_SUGGESTIONS"
result = (
  service.documents()
  .get(
      documentId=DOCUMENT_ID,
      includeTabsContent=True,
      suggestionsViewMode=SUGGEST_MODE,
  )
  .execute()
)
```

Omitting the `SuggestionsViewMode` parameter is equivalent to providing `DEFAULT_FOR_CURRENT_ACCESS` as the parameter value.

## Style suggestions

Documents can also have *style suggestions*. These are suggested changes to formatting and presentation, rather than changes to content.

Unlike text insertions or deletions, these don't offset the indexes—although they might break up a [`TextRun`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#textrun) into smaller chunks—but just add annotations about the suggested style change.

One such annotation is a [`SuggestedTextStyle`](https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#suggestedtextstyle), which consists of 2 parts:

- The `textStyle`, which describes how the text is styled after the suggested change, but doesn't say what changed.
- The `textStyleSuggestionState`, which indicates how the suggestion alters the fields of the `textStyle`.

You can see this in the following document tab extract, which includes a suggested style change:

```
[01] "paragraph": {
[02]    "elements": [
[03]        {
[04]            "endIndex": 106,
[05]            "startIndex": 82,
[06]            "textRun": {
[07]                "content": "Some text that does not ",
[08]                "textStyle": {}
[09]            }
[10]        },
[11]        {
[12]            "endIndex": 115,
[13]            "startIndex": 106,
[14]            "textRun": {
[15]                "content": "initially",
[16]                "suggestedTextStyleChanges": {
[17]                    "suggest.xymysbs9zldp": {
[18]                        "textStyle": {
[19]                            "backgroundColor": {},
[20]                            "baselineOffset": "NONE",
[21]                            "bold": true,
[22]                            "fontSize": {
[23]                                "magnitude": 11,
[24]                                "unit": "PT"
[25]                            },
[26]                            "foregroundColor": {
[27]                                "color": {
[28]                                    "rgbColor": {}
[29]                                }
[30]                            },
[31]                            "italic": false,
[32]                            "smallCaps": false,
[33]                            "strikethrough": false,
[34]                            "underline": false
[35]                        },
[36]                        "textStyleSuggestionState": {
[37]                            "boldSuggested": true,
[38]                            "weightedFontFamilySuggested": true
[39]                        }
[40]                    }
[41]                },
[42]                "textStyle": {
[43]                    "italic": true
[44]                }
[45]            }
[46]        },
[47]        {
[48]            "endIndex": 143,
[49]            "startIndex": 115,
[50]            "textRun": {
[51]                "content": " contain any boldface text.\n",
[52]                "textStyle": {}
[53]            }
[54]        }
[55]    ],
[56]    "paragraphStyle": {
[57]        "direction": "LEFT_TO_RIGHT",
[58]        "namedStyleType": "NORMAL_TEXT"
[59]    }
[60] }
```

In the sample above, the paragraph consists of 3 text runs, starting at lines 6, 14, and 50. Examine the middle text run:

- Line 16: There's a `suggestedTextStyleChanges` object.
- Line 18: The `textStyle` specifies various formatting.
- Line 36: The `textStyleSuggestionState` tells you that only the bold part of this specification was the suggestion.
- Line 42: The italic styling of this text run is part of the current document (and not affected by the suggestion).

Only the style features set to `true` in the `textStyleSuggestionState` are part of the suggestion.
