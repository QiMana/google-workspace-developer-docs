---
source: https://developers.google.com/workspace/docs/api/samples/extract-text
root: workspace
fetched_at: 2026-04-23T15:27:14.001Z
---

# Extract the text from a document with Docs API

You might find it useful to extract only the text from a document. This is helpful if you're passing the text to another API service. All the text in a document is contained across its [tabs](../how-tos/tabs.md) in [text runs](../concepts/structure.md#text-runs) of [paragraph elements](../reference/rest/v1/documents.md#paragraphelement).

Extracting all the text in a document involves traversing the tabs tree hierarchy and calling the [`get`](../reference/rest/v1/documents/get.md) method of the [`documents`](../reference/rest/v1/documents.md) resource. The `get` method includes the [`includeTabsContent`](../reference/rest/v1/documents/get.md#body.QUERY_PARAMETERS.include_tabs_content) query parameter to configure whether [`DocumentTab`](../reference/rest/v1/documents.md#documenttab) contents are provided in the response. For more information, see [Work with Tabs](../how-tos/tabs.md).

Text can appear in three types of the document tab's [structural elements](../reference/rest/v1/documents.md#structuralelement):

- Paragraph
- Table of Contents
- Tables

Tables can be nested inside another table. Therefore, to extract all the text in a document, you must visit each nested structural element.

For a full description of the document body, see [Structure of a Google Docs document](../concepts/structure.md).

## Extract text code sample

The following Google Docs API code sample shows how to use recursion to visit each structural element in all tabs of a document and prints the text.

### Java

```
// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
import com.google.api.services.docs.v1.model.DocumentTab;
import com.google.api.services.docs.v1.model.ParagraphElement;
import com.google.api.services.docs.v1.model.StructuralElement;
import com.google.api.services.docs.v1.model.Tab;
import com.google.api.services.docs.v1.model.TableCell;
import com.google.api.services.docs.v1.model.TableRow;
import com.google.api.services.docs.v1.model.TextRun;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ExtractText {
  private static final String APPLICATION_NAME = "Google Docs API Extract Guide";
  private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
  private static final String TOKENS_DIRECTORY_PATH = "tokens";
  private static final String DOCUMENT_ID = "YOUR_DOCUMENT_ID";

  /**
   * Global instance of the scopes required by this quickstart. If modifying these scopes, delete
   * your previously saved tokens/ folder.
   */
  private static final List SCOPES =
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
    InputStream in = ExtractText.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
    GoogleClientSecrets clientSecrets =
        GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

    // Build flow and trigger user authorization request.
    GoogleAuthorizationCodeFlow flow =
        new GoogleAuthorizationCodeFlow.Builder(HTTP_TRANSPORT, JSON_FACTORY, clientSecrets, SCOPES)
            .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
            .setAccessType("offline")
            .build();
    LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
    return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
  }

  /**
   * Adds the provided tab to the list of all tabs, and recurses through and
   * adds all child tabs.
   */
  private void addCurrentAndChildTabs(Tab tab, List allTabs) {
    allTabs.add(tab);
    for (Tab tab: tab.getChildTabs()) {
      addCurrentAndChildTabs(tab, allTabs);
    }
  }

  /**
   * Returns a flat list of all tabs in the document in the order they would
   * appear in the UI (top-down ordering). Includes all child tabs.
   */
  private List getAllTabs(Document doc) {
    List allTabs = new ArrayList<>();
    // Iterate over all tabs and recursively add any child tabs to generate a
    // flat list of Tabs.
    for (Tab tab: doc.getTabs()) {
      addCurrentAndChildTabs(tab, allTabs);
    }
    return allTabs;
  }

  /**
   * Returns the text in the given ParagraphElement.
   *
   * @param element a ParagraphElement from a Google Doc
   */
  private static String readParagraphElement(ParagraphElement element) {
    TextRun run = element.getTextRun();
    if (run == null || run.getContent() == null) {
      // The TextRun can be null if there is an inline object.
      return "";
    }
    return run.getContent();
  }

  /**
   * Recurses through a list of Structural Elements to read a document's text where text may be in
   * nested elements.
   *
   * @param elements a list of Structural Elements
   */
  private static String readStructuralElements(List elements) {
    StringBuilder sb = new StringBuilder();
    for (StructuralElement element : elements) {
      if (element.getParagraph() != null) {
        for (ParagraphElement paragraphElement : element.getParagraph().getElements()) {
          sb.append(readParagraphElement(paragraphElement));
        }
      } else if (element.getTable() != null) {
        // The text in table cells are in nested Structural Elements and tables may be
        // nested.
        for (TableRow row : element.getTable().getTableRows()) {
          for (TableCell cell : row.getTableCells()) {
            sb.append(readStructuralElements(cell.getContent()));
          }
        }
      } else if (element.getTableOfContents() != null) {
        // The text in the TOC is also in a Structural Element.
        sb.append(readStructuralElements(element.getTableOfContents().getContent()));
      }
    }
    return sb.toString();
  }

  public static void main(String... args) throws IOException, GeneralSecurityException {
    // Build a new authorized API client service.
    final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
    Docs service =
        new Docs.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
            .setApplicationName(APPLICATION_NAME)
            .build();

    // Fetch the document with all of the tabs populated, including any nested
    // child tabs.
    Document doc =
        service.documents().get(DOCUMENT_ID).setIncludeTabsContent(true).execute();
    List allTabs = getAllTabs(doc);

    // Print the text from each tab in the document.
    for (Tab tab: allTabs) {
      // Get the DocumentTab from the generic Tab.
      DocumentTab documentTab = tab.getDocumentTab();
      System.out.println(
          readStructuralElements(documentTab.getBody().getContent()));
    }
  }
}
```

### Python

```
# Copyright 2026 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""
Recursively extracts the text from a Google Doc.
"""
import os.path

import googleapiclient.discovery as discovery
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.errors import HttpError

# If modifying these scopes, delete the file token.json.
SCOPES = 'https://www.googleapis.com/auth/documents.readonly'
DISCOVERY_DOC = 'https://docs.googleapis.com/$discovery/rest?version=v1'
DOCUMENT_ID = 'YOUR_DOCUMENT_ID'

def get_credentials():
  """Gets valid user credentials from storage.

  If nothing has been stored, or if the stored credentials are invalid,
  the OAuth 2.0 flow is completed to obtain the new credentials.

  Returns:
      Credentials, the obtained credential.
  """
  creds = None
  # The file token.json stores the user's access and refresh tokens, and is
  # created automatically when the authorization flow completes for the first
  # time.
  if os.path.exists('token.json'):
    creds = Credentials.from_authorized_user_file('token.json', SCOPES)
  # If there are no (valid) credentials available, let the user log in.
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          'credentials.json', SCOPES
      )
      creds = flow.run_local_server(port=0)
    # Save the credentials for the next run
    with open('token.json', 'w') as token:
      token.write(creds.to_json())
  return creds

def add_current_and_child_tabs(tab, all_tabs):
  """Adds the provided tab to the list of all tabs, and recurses through and
  adds all child tabs.

  Args:
      tab: a Tab from a Google Doc.
      all_tabs: a list of all tabs in the document.
  """
  all_tabs.append(tab)
  for tab in tab.get('childTabs'):
    add_current_and_child_tabs(tab, all_tabs)

def get_all_tabs(doc):
  """Returns a flat list of all tabs in the document in the order they would
  appear in the UI (top-down ordering). Includes all child tabs.

  Args:
      doc: a document.
  """
  all_tabs = []
  # Iterate over all tabs and recursively add any child tabs to generate a
  # flat list of Tabs.
  for tab in doc.get('tabs'):
    add_current_and_child_tabs(tab, all_tabs)
  return all_tabs

def read_paragraph_element(element):
  """Returns the text in the given ParagraphElement.

  Args:
      element: a ParagraphElement from a Google Doc.
  """
  text_run = element.get('textRun')
  if not text_run:
    return ''
  return text_run.get('content')

def read_structural_elements(elements):
  """Recurses through a list of Structural Elements to read a document's text
  where text may be in nested elements.

  Args:
      elements: a list of Structural Elements.
  """
  text = ''
  for value in elements:
    if 'paragraph' in value:
      elements = value.get('paragraph').get('elements')
      for elem in elements:
        text += read_paragraph_element(elem)
    elif 'table' in value:
      # The text in table cells are in nested Structural Elements and tables may
      # be nested.
      table = value.get('table')
      for row in table.get('tableRows'):
        cells = row.get('tableCells')
        for cell in cells:
          text += read_structural_elements(cell.get('content'))
    elif 'tableOfContents' in value:
      # The text in the TOC is also in a Structural Element.
      toc = value.get('tableOfContents')
      text += read_structural_elements(toc.get('content'))
  return text

def main():
  """Uses the Docs API to print out the text of a document."""
  creds = get_credentials()

  try:
    docs_service = discovery.build(
        'docs', 'v1', credentials=creds, discoveryServiceUrl=DISCOVERY_DOC
    )
    # Fetch the document with all of the tabs populated, including any nested
    # child tabs.
    doc = (
        docs_service.documents()
        .get(documentId=DOCUMENT_ID, includeTabsContent=True)
        .execute()
    )
    all_tabs = get_all_tabs(doc)

    # Print the text from each tab in the document.
    for tab in all_tabs:
      # Get the DocumentTab from the generic Tab.
      document_tab = tab.get('documentTab')
      doc_content = document_tab.get('body').get('content')
      print(read_structural_elements(doc_content))
  except HttpError as error:
    # TODO(developer) - Handle errors from docs API.
    print(f'An error occurred: {error}')

if __name__ == '__main__':
  main()
```
