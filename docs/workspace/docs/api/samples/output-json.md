---
source: https://developers.google.com/workspace/docs/api/samples/output-json
root: workspace
fetched_at: 2026-04-23T15:27:26.499Z
---

# Output document contents as JSON with Docs API

You can use the following Google Docs API sample to dump the contents of a document as formatted JSON.

The resulting dump can help you understand the structure of Google Docs files in general, or help you troubleshoot issues around the structure and content of a particular document.

## Source code

### Java

```
import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.docs.v1.Docs;
import com.google.api.services.docs.v1.DocsScopes;
import com.google.api.services.docs.v1.model.Document;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;

public class OutputJSON {
  private static final String APPLICATION_NAME = "Google Docs API Document Contents";
  private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
  private static final String TOKENS_DIRECTORY_PATH = "tokens";
  private static final String DOCUMENT_ID = "<var>YOUR_DOCUMENT_ID</var>";

  /**
   * Global instance of the scopes required by this sample. If modifying these scopes, delete
   * your previously saved tokens/ folder.
   */
  private static final List<String> SCOPES =
      Collections.singletonList(DocsScopes.DOCUMENTS_READONLY);

  private static final String CREDENTIALS_FILE_PATH = "/credentials.json";

  /**
   * Creates an authorized Credential object.
   *
   * @param HTTP_TRANSPORT The network HTTP Transport.
   * @return An authorized Credential object.
   * @throws IOException If the credentials.json file cannot be found.
   */
  private static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT)
      throws IOException {
    // Load client secrets.
    InputStream in = OutputJSON.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
    GoogleClientSecrets credentials =
        GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

    // Build flow and trigger user authorization request.
    GoogleAuthorizationCodeFlow flow =
        new GoogleAuthorizationCodeFlow.Builder(HTTP_TRANSPORT, JSON_FACTORY, credentials, SCOPES)
            .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
            .setAccessType("offline")
            .build();
    LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
    return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
  }

  public static void main(String... args) throws IOException, GeneralSecurityException {
    // Build a new authorized API client service.
    final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
    Docs docsService =
        new Docs.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
            .setApplicationName(APPLICATION_NAME)
            .build();

    Document response =
        docsService.documents().get(DOCUMENT_ID).setIncludeTabsContent(true).execute();
    Gson gson = new GsonBuilder().setPrettyPrinting().create();
    System.out.println(gson.toJson(response));
  }
}
```

### JavaScript

```
<!DOCTYPE html>
<html>
  <head>
    <title>
      Docs API Extract Body
    </title>
    <meta charset="utf-8"/>
  </head>
  <body>
    <p>
      Docs API Extract Body
    </p>
    <!--Add buttons to initiate auth sequence and sign out-->
    <button id="authorize-button" style="display: none;">Authorize</button>
    <button id="signout-button" style="display: none;">Sign Out</button>
    <pre id="content"></pre>

    <script type="text/javascript">
      // Client ID and API key from the Developer Console
      var CLIENT_ID = '<YOUR_CLIENT_ID>'
      var API_KEY = '<YOUR_API_KEY>';

      // Array of API discovery doc URLs for APIs used by the sample
      var DISCOVERY_DOCS = [
        'https://docs.googleapis.com/$discovery/rest?version=v1'];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/documents.readonly";

      var authorizeButton = document.getElementById('authorize-button');
      var signoutButton = document.getElementById('signout-button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

      // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
        });
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        printDocBody();
        } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
        }
      }

      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        var pre = document.getElementById('content');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      }

      /**
       * Prints the JSON body of a document.
       */
      function printDocBody() {
        gapi.client.docs.documents.get({
        documentId: '<var>DOCUMENT_ID</var>',
        includeTabsContent: true
      }).then(function(response) {
        var doc = response.result;
        appendPre(JSON.stringify(doc.body, null, 4));
      },function(response) {
        appendPre('Error: ' + response.result.error.message);
        });
      }
    </script>
    <script async="" defer="" onload="this.onload=function(){};handleClientLoad()" onreadystatechange="if (this.readyState === 'complete') this.onload()" src="https://apis.google.com/js/api.js"></script>
  </body>
</html>
```

### Python

```
import json

from apiclient import discovery
from httplib2 import Http
from oauth2client import client, file, tools

# Set doc ID, as found at \`https://docs.google.com/document/d/YOUR_DOC_ID/edit\`
DOCUMENT_ID = "YOUR_DOC_ID"

# Set the scopes and discovery info
SCOPES = "https://www.googleapis.com/auth/documents.readonly"
DISCOVERY_DOC = "https://docs.googleapis.com/$discovery/rest?version=v1"

# Initialize credentials and instantiate Docs API service
store = file.Storage("token.json")
creds = store.get()
if not creds or creds.invalid:
  flow = client.flow_from_clientsecrets("credentials.json", SCOPES)
  creds = tools.run_flow(flow, store)
service = discovery.build(
    "docs",
    "v1",
    http=creds.authorize(Http()),
    discoveryServiceUrl=DISCOVERY_DOC,
)

# Do a document "get" request and print the results as formatted JSON
result = service.documents().get(documentId=DOCUMENT_ID, includeTabsContent=True).execute()
print(json.dumps(result, indent=4, sort_keys=True))
```

## Example document dump

This section presents a simple document and its equivalent JSON output using the code above. The source document looks like this:

![](https://developers.google.com/static/workspace/docs/api/images/sampledoc.png)

Running the above code with this document outputs JSON similar to the following:

```
{
  "title": "Test mule",
  "revisionId": "np_INheZiecEMA",
  "suggestionsViewMode": "SUGGESTIONS_INLINE",
  "documentId": "18AI89WMd4eI6TFI4VrbmD_srVWJYH2avsXpC_amtLZs",
  "tabs": [{
    "tabProperties": {
      "tabId": "t.0",
      "title": "Tab 1",
      "index": 0
    },
    "documentTab": {
      "body": {
        "content": [{
          "endIndex": 1,
          "sectionBreak": {
            "sectionStyle": {
              "columnSeparatorStyle": "NONE",
              "contentDirection": "LEFT_TO_RIGHT",
              "sectionType": "CONTINUOUS"
            }
          }
        }, {
          "startIndex": 1,
          "endIndex": 75,
          "paragraph": {
            "elements": [{
              "startIndex": 1,
              "endIndex": 75,
              "textRun": {
                "content": "This is an ordinary paragraph. It is the first paragraph of the document.\n",
                "textStyle": {
                }
              }
            }],
            "paragraphStyle": {
              "namedStyleType": "NORMAL_TEXT",
              "direction": "LEFT_TO_RIGHT"
            }
          }
        }, {
          "startIndex": 75,
          "endIndex": 102,
          "paragraph": {
            "elements": [{
              "startIndex": 75,
              "endIndex": 102,
              "textRun": {
                "content": "Here\u0027s a level one heading\n",
                "textStyle": {
                }
              }
            }],
            "paragraphStyle": {
              "headingId": "h.tzrthsds4pvi",
              "namedStyleType": "HEADING_1",
              "direction": "LEFT_TO_RIGHT"
            }
          }
        }, {
          "startIndex": 102,
          "endIndex": 219,
          "paragraph": {
            "elements": [{
              "startIndex": 102,
              "endIndex": 171,
              "textRun": {
                "content": "This is another paragraph. Formatting within this paragraph includes ",
                "textStyle": {
                }
              }
            }, {
              "startIndex": 171,
              "endIndex": 190,
              "textRun": {
                "content": "these words in bold",
                "textStyle": {
                  "bold": true
                }
              }
            }, {
              "startIndex": 190,
              "endIndex": 207,
              "textRun": {
                "content": " and these words ",
                "textStyle": {
                }
              }
            }, {
              "startIndex": 207,
              "endIndex": 217,
              "textRun": {
                "content": "in italics",
                "textStyle": {
                  "italic": true
                }
              }
            }, {
              "startIndex": 217,
              "endIndex": 219,
              "textRun": {
                "content": ".\n",
                "textStyle": {
                }
              }
            }],
            "paragraphStyle": {
              "namedStyleType": "NORMAL_TEXT",
              "direction": "LEFT_TO_RIGHT"
            }
          }
        }, {
          "startIndex": 219,
          "endIndex": 248,
          "paragraph": {
            "elements": [{
              "startIndex": 219,
              "endIndex": 248,
              "textRun": {
                "content": "This is a bulleted list item\n",
                "textStyle": {
                }
              }
            }],
            "paragraphStyle": {
              "namedStyleType": "NORMAL_TEXT",
              "direction": "LEFT_TO_RIGHT",
              "indentFirstLine": {
                "magnitude": 18.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 36.0,
                "unit": "PT"
              }
            },
            "bullet": {
              "listId": "kix.v1x94gs10mnc",
              "textStyle": {
                "underline": false
              }
            }
          }
        }, {
          "startIndex": 248,
          "endIndex": 308,
          "paragraph": {
            "elements": [{
              "startIndex": 248,
              "endIndex": 308,
              "textRun": {
                "content": "And this is another one, which has a numbered list under it\n",
                "textStyle": {
                }
              }
            }],
            "paragraphStyle": {
              "namedStyleType": "NORMAL_TEXT",
              "direction": "LEFT_TO_RIGHT",
              "indentFirstLine": {
                "magnitude": 18.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 36.0,
                "unit": "PT"
              }
            },
            "bullet": {
              "listId": "kix.v1x94gs10mnc",
              "textStyle": {
                "underline": false
              }
            }
          }
        }, {
          "startIndex": 308,
          "endIndex": 346,
          "paragraph": {
            "elements": [{
              "startIndex": 308,
              "endIndex": 346,
              "textRun": {
                "content": "This is the first numbered list item.\n",
                "textStyle": {
                }
              }
            }],
            "paragraphStyle": {
              "namedStyleType": "NORMAL_TEXT",
              "direction": "LEFT_TO_RIGHT",
              "indentFirstLine": {
                "magnitude": 54.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 72.0,
                "unit": "PT"
              }
            },
            "bullet": {
              "listId": "kix.2iaql7na7gwi",
              "textStyle": {
                "underline": false
              }
            }
          }
        }, {
          "startIndex": 346,
          "endIndex": 385,
          "paragraph": {
            "elements": [{
              "startIndex": 346,
              "endIndex": 385,
              "textRun": {
                "content": "This is the second numbered list item.\n",
                "textStyle": {
                }
              }
            }],
            "paragraphStyle": {
              "namedStyleType": "NORMAL_TEXT",
              "direction": "LEFT_TO_RIGHT",
              "indentFirstLine": {
                "magnitude": 54.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 72.0,
                "unit": "PT"
              }
            },
            "bullet": {
              "listId": "kix.2iaql7na7gwi",
              "textStyle": {
                "underline": false
              }
            }
          }
        }, {
          "startIndex": 385,
          "endIndex": 460,
          "paragraph": {
            "elements": [{
              "startIndex": 385,
              "endIndex": 433,
              "textRun": {
                "content": "This is the third numbered list item, which has ",
                "textStyle": {
                }
              }
            }, {
              "startIndex": 433,
              "endIndex": 450,
              "textRun": {
                "content": "these three words",
                "textStyle": {
                  "bold": true
                }
              }
            }, {
              "startIndex": 450,
              "endIndex": 460,
              "textRun": {
                "content": " in bold.\n",
                "textStyle": {
                }
              }
            }],
            "paragraphStyle": {
              "namedStyleType": "NORMAL_TEXT",
              "direction": "LEFT_TO_RIGHT",
              "indentFirstLine": {
                "magnitude": 54.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 72.0,
                "unit": "PT"
              }
            },
            "bullet": {
              "listId": "kix.2iaql7na7gwi",
              "textStyle": {
                "underline": false
              }
            }
          }
        }, {
          "startIndex": 460,
          "endIndex": 496,
          "paragraph": {
            "elements": [{
              "startIndex": 460,
              "endIndex": 496,
              "textRun": {
                "content": "And a final list item with a bullet\n",
                "textStyle": {
                }
              }
            }],
            "paragraphStyle": {
              "namedStyleType": "NORMAL_TEXT",
              "direction": "LEFT_TO_RIGHT",
              "indentFirstLine": {
                "magnitude": 18.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 36.0,
                "unit": "PT"
              }
            },
            "bullet": {
              "listId": "kix.ussavk43dhsk",
              "textStyle": {
                "underline": false
              }
            }
          }
        }, {
          "startIndex": 496,
          "endIndex": 497,
          "paragraph": {
            "elements": [{
              "startIndex": 496,
              "endIndex": 497,
              "textRun": {
                "content": "\n",
                "textStyle": {
                }
              }
            }],
            "paragraphStyle": {
              "namedStyleType": "NORMAL_TEXT",
              "direction": "LEFT_TO_RIGHT"
            }
          }
        }, {
          "startIndex": 497,
          "endIndex": 565,
          "table": {
            "rows": 2,
            "columns": 2,
            "tableRows": [{
              "startIndex": 498,
              "endIndex": 531,
              "tableCells": [{
                "startIndex": 499,
                "endIndex": 515,
                "content": [{
                  "startIndex": 500,
                  "endIndex": 515,
                  "paragraph": {
                    "elements": [{
                      "startIndex": 500,
                      "endIndex": 515,
                      "textRun": {
                        "content": "Northwest cell\n",
                        "textStyle": {
                        }
                      }
                    }],
                    "paragraphStyle": {
                      "namedStyleType": "NORMAL_TEXT",
                      "direction": "LEFT_TO_RIGHT"
                    }
                  }
                }],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {
                  },
                  "paddingLeft": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "paddingRight": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "paddingTop": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "paddingBottom": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
                }
              }, {
                "startIndex": 515,
                "endIndex": 531,
                "content": [{
                  "startIndex": 516,
                  "endIndex": 531,
                  "paragraph": {
                    "elements": [{
                      "startIndex": 516,
                      "endIndex": 531,
                      "textRun": {
                        "content": "Northeast cell\n",
                        "textStyle": {
                        }
                      }
                    }],
                    "paragraphStyle": {
                      "namedStyleType": "NORMAL_TEXT",
                      "direction": "LEFT_TO_RIGHT"
                    }
                  }
                }],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {
                  },
                  "paddingLeft": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "paddingRight": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "paddingTop": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "paddingBottom": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
                }
              }],
              "tableRowStyle": {
                "minRowHeight": {
                  "unit": "PT"
                }
              }
            }, {
              "startIndex": 531,
              "endIndex": 564,
              "tableCells": [{
                "startIndex": 532,
                "endIndex": 548,
                "content": [{
                  "startIndex": 533,
                  "endIndex": 548,
                  "paragraph": {
                    "elements": [{
                      "startIndex": 533,
                      "endIndex": 548,
                      "textRun": {
                        "content": "Southwest cell\n",
                        "textStyle": {
                        }
                      }
                    }],
                    "paragraphStyle": {
                      "namedStyleType": "NORMAL_TEXT",
                      "direction": "LEFT_TO_RIGHT"
                    }
                  }
                }],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {
                  },
                  "paddingLeft": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "paddingRight": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "paddingTop": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "paddingBottom": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
                }
              }, {
                "startIndex": 548,
                "endIndex": 564,
                "content": [{
                  "startIndex": 549,
                  "endIndex": 564,
                  "paragraph": {
                    "elements": [{
                      "startIndex": 549,
                      "endIndex": 564,
                      "textRun": {
                        "content": "Southeast cell\n",
                        "textStyle": {
                        }
                      }
                    }],
                    "paragraphStyle": {
                      "namedStyleType": "NORMAL_TEXT",
                      "direction": "LEFT_TO_RIGHT"
                    }
                  }
                }],
                "tableCellStyle": {
                  "rowSpan": 1,
                  "columnSpan": 1,
                  "backgroundColor": {
                  },
                  "paddingLeft": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "paddingRight": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "paddingTop": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "paddingBottom": {
                    "magnitude": 5.0,
                    "unit": "PT"
                  },
                  "contentAlignment": "TOP"
                }
              }],
              "tableRowStyle": {
                "minRowHeight": {
                  "unit": "PT"
                }
              }
            }],
            "tableStyle": {
              "tableColumnProperties": [{
                "widthType": "EVENLY_DISTRIBUTED"
              }, {
                "widthType": "EVENLY_DISTRIBUTED"
              }],
              "contentDirection": "LEFT_TO_RIGHT"
            }
          }
        }, {
          "startIndex": 565,
          "endIndex": 589,
          "paragraph": {
            "elements": [{
              "startIndex": 565,
              "endIndex": 589,
              "textRun": {
                "content": "And a level two heading\n",
                "textStyle": {
                }
              }
            }],
            "paragraphStyle": {
              "headingId": "h.dp3ko4q27ips",
              "namedStyleType": "HEADING_2",
              "direction": "LEFT_TO_RIGHT"
            }
          }
        }, {
          "startIndex": 589,
          "endIndex": 649,
          "paragraph": {
            "elements": [{
              "startIndex": 589,
              "endIndex": 649,
              "textRun": {
                "content": "And this is a paragraph that follows the level two heading.\n",
                "textStyle": {
                }
              }
            }],
            "paragraphStyle": {
              "namedStyleType": "NORMAL_TEXT",
              "direction": "LEFT_TO_RIGHT"
            }
          }
        }]
      },
      "documentStyle": {
        "background": {
          "color": {
          }
        },
        "pageNumberStart": 1,
        "marginTop": {
          "magnitude": 72.0,
          "unit": "PT"
        },
        "marginBottom": {
          "magnitude": 72.0,
          "unit": "PT"
        },
        "marginRight": {
          "magnitude": 72.0,
          "unit": "PT"
        },
        "marginLeft": {
          "magnitude": 72.0,
          "unit": "PT"
        },
        "pageSize": {
          "height": {
            "magnitude": 792.0,
            "unit": "PT"
          },
          "width": {
            "magnitude": 612.0,
            "unit": "PT"
          }
        },
        "marginHeader": {
          "magnitude": 36.0,
          "unit": "PT"
        },
        "marginFooter": {
          "magnitude": 36.0,
          "unit": "PT"
        },
        "useCustomHeaderFooterMargins": true
      },
      "namedStyles": {
        "styles": [{
          "namedStyleType": "NORMAL_TEXT",
          "textStyle": {
            "bold": false,
            "italic": false,
            "underline": false,
            "strikethrough": false,
            "smallCaps": false,
            "backgroundColor": {
            },
            "foregroundColor": {
              "color": {
                "rgbColor": {
                }
              }
            },
            "fontSize": {
              "magnitude": 11.0,
              "unit": "PT"
            },
            "weightedFontFamily": {
              "fontFamily": "Arial",
              "weight": 400
            },
            "baselineOffset": "NONE"
          },
          "paragraphStyle": {
            "namedStyleType": "NORMAL_TEXT",
            "alignment": "START",
            "lineSpacing": 115.0,
            "direction": "LEFT_TO_RIGHT",
            "spacingMode": "COLLAPSE_LISTS",
            "spaceAbove": {
              "unit": "PT"
            },
            "spaceBelow": {
              "unit": "PT"
            },
            "borderBetween": {
              "color": {
              },
              "width": {
                "unit": "PT"
              },
              "padding": {
                "unit": "PT"
              },
              "dashStyle": "SOLID"
            },
            "borderTop": {
              "color": {
              },
              "width": {
                "unit": "PT"
              },
              "padding": {
                "unit": "PT"
              },
              "dashStyle": "SOLID"
            },
            "borderBottom": {
              "color": {
              },
              "width": {
                "unit": "PT"
              },
              "padding": {
                "unit": "PT"
              },
              "dashStyle": "SOLID"
            },
            "borderLeft": {
              "color": {
              },
              "width": {
                "unit": "PT"
              },
              "padding": {
                "unit": "PT"
              },
              "dashStyle": "SOLID"
            },
            "borderRight": {
              "color": {
              },
              "width": {
                "unit": "PT"
              },
              "padding": {
                "unit": "PT"
              },
              "dashStyle": "SOLID"
            },
            "indentFirstLine": {
              "unit": "PT"
            },
            "indentStart": {
              "unit": "PT"
            },
            "indentEnd": {
              "unit": "PT"
            },
            "keepLinesTogether": false,
            "keepWithNext": false,
            "avoidWidowAndOrphan": true,
            "shading": {
              "backgroundColor": {
              }
            },
            "pageBreakBefore": false
          }
        }, {
          "namedStyleType": "HEADING_1",
          "textStyle": {
            "fontSize": {
              "magnitude": 20.0,
              "unit": "PT"
            }
          },
          "paragraphStyle": {
            "namedStyleType": "NORMAL_TEXT",
            "direction": "LEFT_TO_RIGHT",
            "spaceAbove": {
              "magnitude": 20.0,
              "unit": "PT"
            },
            "spaceBelow": {
              "magnitude": 6.0,
              "unit": "PT"
            },
            "keepLinesTogether": true,
            "keepWithNext": true,
            "pageBreakBefore": false
          }
        }, {
          "namedStyleType": "HEADING_2",
          "textStyle": {
            "bold": false,
            "fontSize": {
              "magnitude": 16.0,
              "unit": "PT"
            }
          },
          "paragraphStyle": {
            "namedStyleType": "NORMAL_TEXT",
            "direction": "LEFT_TO_RIGHT",
            "spaceAbove": {
              "magnitude": 18.0,
              "unit": "PT"
            },
            "spaceBelow": {
              "magnitude": 6.0,
              "unit": "PT"
            },
            "keepLinesTogether": true,
            "keepWithNext": true,
            "pageBreakBefore": false
          }
        }, {
          "namedStyleType": "HEADING_3",
          "textStyle": {
            "bold": false,
            "foregroundColor": {
              "color": {
                "rgbColor": {
                  "red": 0.2627451,
                  "green": 0.2627451,
                  "blue": 0.2627451
                }
              }
            },
            "fontSize": {
              "magnitude": 14.0,
              "unit": "PT"
            }
          },
          "paragraphStyle": {
            "namedStyleType": "NORMAL_TEXT",
            "direction": "LEFT_TO_RIGHT",
            "spaceAbove": {
              "magnitude": 16.0,
              "unit": "PT"
            },
            "spaceBelow": {
              "magnitude": 4.0,
              "unit": "PT"
            },
            "keepLinesTogether": true,
            "keepWithNext": true,
            "pageBreakBefore": false
          }
        }, {
          "namedStyleType": "HEADING_4",
          "textStyle": {
            "foregroundColor": {
              "color": {
                "rgbColor": {
                  "red": 0.4,
                  "green": 0.4,
                  "blue": 0.4
                }
              }
            },
            "fontSize": {
              "magnitude": 12.0,
              "unit": "PT"
            }
          },
          "paragraphStyle": {
            "namedStyleType": "NORMAL_TEXT",
            "direction": "LEFT_TO_RIGHT",
            "spaceAbove": {
              "magnitude": 14.0,
              "unit": "PT"
            },
            "spaceBelow": {
              "magnitude": 4.0,
              "unit": "PT"
            },
            "keepLinesTogether": true,
            "keepWithNext": true,
            "pageBreakBefore": false
          }
        }, {
          "namedStyleType": "HEADING_5",
          "textStyle": {
            "foregroundColor": {
              "color": {
                "rgbColor": {
                  "red": 0.4,
                  "green": 0.4,
                  "blue": 0.4
                }
              }
            },
            "fontSize": {
              "magnitude": 11.0,
              "unit": "PT"
            }
          },
          "paragraphStyle": {
            "namedStyleType": "NORMAL_TEXT",
            "direction": "LEFT_TO_RIGHT",
            "spaceAbove": {
              "magnitude": 12.0,
              "unit": "PT"
            },
            "spaceBelow": {
              "magnitude": 4.0,
              "unit": "PT"
            },
            "keepLinesTogether": true,
            "keepWithNext": true,
            "pageBreakBefore": false
          }
        }, {
          "namedStyleType": "HEADING_6",
          "textStyle": {
            "italic": true,
            "foregroundColor": {
              "color": {
                "rgbColor": {
                  "red": 0.4,
                  "green": 0.4,
                  "blue": 0.4
                }
              }
            },
            "fontSize": {
              "magnitude": 11.0,
              "unit": "PT"
            }
          },
          "paragraphStyle": {
            "namedStyleType": "NORMAL_TEXT",
            "direction": "LEFT_TO_RIGHT",
            "spaceAbove": {
              "magnitude": 12.0,
              "unit": "PT"
            },
            "spaceBelow": {
              "magnitude": 4.0,
              "unit": "PT"
            },
            "keepLinesTogether": true,
            "keepWithNext": true,
            "pageBreakBefore": false
          }
        }, {
          "namedStyleType": "TITLE",
          "textStyle": {
            "fontSize": {
              "magnitude": 26.0,
              "unit": "PT"
            }
          },
          "paragraphStyle": {
            "namedStyleType": "NORMAL_TEXT",
            "direction": "LEFT_TO_RIGHT",
            "spaceAbove": {
              "unit": "PT"
            },
            "spaceBelow": {
              "magnitude": 3.0,
              "unit": "PT"
            },
            "keepLinesTogether": true,
            "keepWithNext": true,
            "pageBreakBefore": false
          }
        }, {
          "namedStyleType": "SUBTITLE",
          "textStyle": {
            "italic": false,
            "foregroundColor": {
              "color": {
                "rgbColor": {
                  "red": 0.4,
                  "green": 0.4,
                  "blue": 0.4
                }
              }
            },
            "fontSize": {
              "magnitude": 15.0,
              "unit": "PT"
            },
            "weightedFontFamily": {
              "fontFamily": "Arial",
              "weight": 400
            }
          },
          "paragraphStyle": {
            "namedStyleType": "NORMAL_TEXT",
            "direction": "LEFT_TO_RIGHT",
            "spaceAbove": {
              "unit": "PT"
            },
            "spaceBelow": {
              "magnitude": 16.0,
              "unit": "PT"
            },
            "keepLinesTogether": true,
            "keepWithNext": true,
            "pageBreakBefore": false
          }
        }]
      },
      "lists": {
        "kix.2iaql7na7gwi": {
          "listProperties": {
            "nestingLevels": [{
              "bulletAlignment": "START",
              "glyphType": "ALPHA",
              "glyphFormat": "%0.",
              "indentFirstLine": {
                "magnitude": 54.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 72.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "END",
              "glyphType": "ROMAN",
              "glyphFormat": "%1.",
              "indentFirstLine": {
                "magnitude": 90.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 108.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphType": "DECIMAL",
              "glyphFormat": "%2.",
              "indentFirstLine": {
                "magnitude": 126.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 144.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphType": "ALPHA",
              "glyphFormat": "%3.",
              "indentFirstLine": {
                "magnitude": 162.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 180.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "END",
              "glyphType": "ROMAN",
              "glyphFormat": "%4.",
              "indentFirstLine": {
                "magnitude": 198.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 216.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphType": "DECIMAL",
              "glyphFormat": "%5.",
              "indentFirstLine": {
                "magnitude": 234.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 252.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphType": "ALPHA",
              "glyphFormat": "%6.",
              "indentFirstLine": {
                "magnitude": 270.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 288.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "END",
              "glyphType": "ROMAN",
              "glyphFormat": "%7.",
              "indentFirstLine": {
                "magnitude": 306.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 324.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphType": "DECIMAL",
              "glyphFormat": "%8.",
              "indentFirstLine": {
                "magnitude": 342.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 360.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }]
          }
        },
        "kix.ussavk43dhsk": {
          "listProperties": {
            "nestingLevels": [{
              "bulletAlignment": "START",
              "glyphSymbol": "●",
              "glyphFormat": "%0",
              "indentFirstLine": {
                "magnitude": 18.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 36.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "○",
              "glyphFormat": "%1",
              "indentFirstLine": {
                "magnitude": 54.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 72.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "■",
              "glyphFormat": "%2",
              "indentFirstLine": {
                "magnitude": 90.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 108.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "●",
              "glyphFormat": "%3",
              "indentFirstLine": {
                "magnitude": 126.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 144.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "○",
              "glyphFormat": "%4",
              "indentFirstLine": {
                "magnitude": 162.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 180.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "■",
              "glyphFormat": "%5",
              "indentFirstLine": {
                "magnitude": 198.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 216.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "●",
              "glyphFormat": "%6",
              "indentFirstLine": {
                "magnitude": 234.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 252.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "○",
              "glyphFormat": "%7",
              "indentFirstLine": {
                "magnitude": 270.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 288.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "■",
              "glyphFormat": "%8",
              "indentFirstLine": {
                "magnitude": 306.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 324.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }]
          }
        },
        "kix.v1x94gs10mnc": {
          "listProperties": {
            "nestingLevels": [{
              "bulletAlignment": "START",
              "glyphSymbol": "●",
              "glyphFormat": "%0",
              "indentFirstLine": {
                "magnitude": 18.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 36.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "○",
              "glyphFormat": "%1",
              "indentFirstLine": {
                "magnitude": 54.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 72.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "■",
              "glyphFormat": "%2",
              "indentFirstLine": {
                "magnitude": 90.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 108.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "●",
              "glyphFormat": "%3",
              "indentFirstLine": {
                "magnitude": 126.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 144.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "○",
              "glyphFormat": "%4",
              "indentFirstLine": {
                "magnitude": 162.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 180.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "■",
              "glyphFormat": "%5",
              "indentFirstLine": {
                "magnitude": 198.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 216.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "●",
              "glyphFormat": "%6",
              "indentFirstLine": {
                "magnitude": 234.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 252.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "○",
              "glyphFormat": "%7",
              "indentFirstLine": {
                "magnitude": 270.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 288.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }, {
              "bulletAlignment": "START",
              "glyphSymbol": "■",
              "glyphFormat": "%8",
              "indentFirstLine": {
                "magnitude": 306.0,
                "unit": "PT"
              },
              "indentStart": {
                "magnitude": 324.0,
                "unit": "PT"
              },
              "textStyle": {
                "underline": false
              },
              "startNumber": 1
            }]
          }
        }
      }
    }
  }]
}
```
