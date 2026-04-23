---
source: https://developers.google.com/apps-script/samples/automations/aggregate-document-content
root: apps-script
fetched_at: 2026-04-23T15:22:16.362Z
---

# Aggregate content from multiple documents

## Page Summary

- This solution automates the import of content from multiple documents into one main document to save time and reduce errors.
- The script creates a folder for source documents, a template document, and sample documents for demonstration.
- When triggered, the script iterates through documents in the designated folder, identifies specific summary text based on a string and heading style, copies it, and pastes it into the main document, changing the text color of the identifier string to prevent duplication.
- The solution utilizes the Document, Drive, Utilities, and Base Apps Script services.
- Prerequisites include a Google Account and internet access via a web browser.

**Coding level**: Beginner  
**Duration**: 15 minutes  
**Project type**: Automation with a [custom menu](../../guides/menus.md)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

To save time and reduce errors from manually copying and pasting, you can automatically import content from multiple documents into one main Google Docs document. This solution focuses on aggregating project status reports, but you can edit it to fit your needs.

![Example of aggregated project status reports within a Google Doc.](https://developers.google.com/static/apps-script/samples/images/aggregate-document-content.png)

![](https://developers.google.com/static/apps-script/samples/images/aggregate-document-content.png)

### How it works

The script creates a folder to store the documents from which you want to import content and a template document to start importing from. The script also includes functions that create sample documents to demo this solution.

When a user selects **Import summaries** from the custom menu, the script gets all the Docs files in the folder and iterates through each. The script looks for a specific string and heading type to identify the summary text it needs to copy. After the text is copied, the script changes the text color of the identifier string to mitigate duplication. The script pastes the summaries into the main document, each in its own single-cell table.

### Apps Script services

This solution uses the following services:

- [Document service](../../reference/document.md): Creates the template and sample source documents. Iterates through each source document looking for new project summaries to import. Imports the summaries to the main document. Updates the source documents to prevent summaries from being imported more than once.
- [Google Drive service](../../reference/drive.md): Creates a folder to store the source documents. Adds the template document and sample source documents to the folder.
- [Utilities service](../../reference/utilities.md): Formats the date that the script adds to the main document each time the script imports summaries from the source documents.
- [Base service](../../reference/base.md): Uses the `Session` class to get the script's time zone. The script uses the time zone when adding the date of the import to the main document.

## Prerequisites

To use this sample, you must have the following prerequisites:

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

Click the following button to make a copy of the **Aggregate content** document:

[Make a copy](https://docs.google.com/document/d/1pJsIrRtEdDMJ1sfc_ssbhnjXtMpvnFWxL327ACaoM2M/copy?usp=sharing)

## Run the script

Follow these steps to run the script and see how it works.

### Run a demo with sample documents

1. Click **Import summaries** \> **Configure** \> **Run demo setup with sample documents**. You might need to refresh the page for this custom menu to appear.
2. When prompted, authorize the script. <<../\_snippets/oauth.md>>
3. Click **Import summaries** \> **Configure** \> **Run demo setup with sample documents** again.
4. When prompted, copy the URL of the Drive folder for use in a later step.
5. Click **OK**.
6. Click **Import summaries** \> **Import summaries**.
7. When prompted, click **OK**.
8. Review the project summaries that were imported from the sample documents.

### Add & import a summary

1. In a new browser tab, paste the folder URL to open the **Project status** folder.
2. Open the **Project ABC** file.
3. Create a new summary to import by adding the following content to the end of the document:
	1. Type `Summary` and set the text style to **Heading 3**.
		2. Directly underneath `Summary`, insert a 1x1 table. Make sure there are no blank lines in between `Summary` and the table.
		3. In the table, type `Hello world!`.
4. Switch back to the main document and click **Import summaries** \> **Import summaries**.
5. When prompted, click **OK**.
6. View your latest import at the end of the document.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/aggregate-document-content

/*
Copyright 2022 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * This file containts the main application functions that import data from
 * summary documents into the body of the main document.
 */

// Application constants
const APP_TITLE = "Document summary importer"; // Application name
const PROJECT_FOLDER_NAME = "Project statuses"; // Drive folder for the source files.

// Below are the parameters used to identify which content to import from the source documents
// and which content has already been imported.
const FIND_TEXT_KEYWORDS = "Summary"; // String that must be found in the heading above the table (case insensitive).
const APP_STYLE = DocumentApp.ParagraphHeading.HEADING3; // Style that must be applied to heading above the table.
const TEXT_COLOR = "#2e7d32"; // Color applied to heading after import to avoid duplication.

/**
 * Updates the main document, importing content from the source files.
 * Uses the above parameters to locate content to be imported.
 *
 * Called from menu option.
 */
function performImport() {
  // Gets the folder in Drive associated with this application.
  const folder = getFolderByName_(PROJECT_FOLDER_NAME);
  // Gets the Google Docs files found in the folder.
  const files = getFiles(folder);

  // Warns the user if the folder is empty.
  const ui = DocumentApp.getUi();
  if (files.length === 0) {
    const msg = \`No files found in the folder '${PROJECT_FOLDER_NAME}'.
      Run '${MENU.SETUP}' | '${MENU.SAMPLES}' from the menu
      if you'd like to create samples files.\`;
    ui.alert(APP_TITLE, msg, ui.ButtonSet.OK);
    return;
  }

  /** Processes main document */
  // Gets the active document and body section.
  const docTarget = DocumentApp.getActiveDocument();
  const docTargetBody = docTarget.getBody();

  // Appends import summary section to the end of the target document.
  // Adds a horizontal line and a header with today's date and a title string.
  docTargetBody.appendHorizontalRule();
  const dateString = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "MMMM dd, yyyy",
  );
  const headingText = \`Imported: ${dateString}\`;
  docTargetBody.appendParagraph(headingText).setHeading(APP_STYLE);
  // Appends a blank paragraph for spacing.
  docTargetBody.appendParagraph(" ");

  /** Process source documents */
  // Iterates through each source document in the folder.
  // Copies and pastes new updates to the main document.
  const noContentList = [];
  let numUpdates = 0;
  for (const id of files) {
    // Opens source document; get info and body.
    const docOpen = DocumentApp.openById(id);
    const docName = docOpen.getName();
    const docHtml = docOpen.getUrl();
    const docBody = docOpen.getBody();

    // Gets summary content from document and returns as object {content:content}
    const content = getContent(docBody);

    // Logs if document doesn't contain content to be imported.
    if (!content) {
      noContentList.push(docName);
      continue;
    }
    numUpdates++;
    // Inserts content into the main document.
    // Appends a title/url reference link back to source document.
    docTargetBody
      .appendParagraph("")
      .appendText(\`${docName}\`)
      .setLinkUrl(docHtml);
    // Appends a single-cell table and pastes the content.
    docTargetBody.appendTable(content);
    docOpen.saveAndClose();
  }
  /** Provides an import summary */
  docTarget.saveAndClose();
  let msg = \`Number of documents updated: ${numUpdates}\`;
  if (noContentList.length !== 0) {
    msg += "\n\nThe following documents had no updates:";
    for (const file of noContentList) {
      msg += \`\n ${file}\`;
    }
  }
  ui.alert(APP_TITLE, msg, ui.ButtonSet.OK);
}

/**
 * Updates the main document drawing content from source files.
 * Uses the parameters at the top of this file to locate content to import.
 *
 * Called from performImport().
 */
function getContent(body) {
  // Finds the heading paragraph with matching style, keywords and !color.
  let parValidHeading;
  const searchType = DocumentApp.ElementType.PARAGRAPH;
  const searchHeading = APP_STYLE;
  let searchResult = null;

  // Gets and loops through all paragraphs that match the style of APP_STYLE.
  while (true) {
    searchResult = body.findElement(searchType, searchResult);
    if (!searchResult) {
      break;
    }

    const par = searchResult.getElement().asParagraph();
    if (par.getHeading() === searchHeading) {
      // If heading style matches, searches for text string (case insensitive).
      const findPos = par.findText(\`(?i)${FIND_TEXT_KEYWORDS}\`);
      if (findPos !== null) {
        // If text color is green, then the paragraph isn't a new summary to copy.
        if (par.editAsText().getForegroundColor() !== TEXT_COLOR) {
          parValidHeading = par;
        }
      }
    }
  }

  if (!parValidHeading) {
    return;
  }
  // Updates the heading color to indicate that the summary has been imported.
  const style = {};
  style[DocumentApp.Attribute.FOREGROUND_COLOR] = TEXT_COLOR;
  parValidHeading.setAttributes(style);
  parValidHeading.appendText(" [Exported]");

  // Gets the content from the table following the valid heading.
  const elemObj = parValidHeading.getNextSibling().asTable();
  const content = elemObj.copy();

  return content;
}

/**
 * Gets the IDs of the Docs files within the folder that contains source files.
 *
 * Called from function performImport().
 */
function getFiles(folder) {
  // Only gets Docs files.
  const files = folder.getFilesByType(MimeType.GOOGLE_DOCS);
  const docIDs = [];
  while (files.hasNext()) {
    const file = files.next();
    docIDs.push(file.getId());
  }
  return docIDs;
}
```

```
</section>
<section>
  <h3>Menu.gs</h3>
```

```
/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This file contains the functions that build the custom menu.
 */
// Menu constants for easy access to update.
const MENU = {
  NAME: "Import summaries",
  IMPORT: "Import summaries",
  SETUP: "Configure",
  NEW_INSTANCE: "Setup new instance",
  TEMPLATE: "Create starter template",
  SAMPLES: "Run demo setup with sample documents",
};

/**
 * Creates custom menu when the document is opened.
 */
function onOpen() {
  const ui = DocumentApp.getUi();
  ui.createMenu(MENU.NAME)
    .addItem(MENU.IMPORT, "performImport")
    .addSeparator()
    .addSubMenu(
      ui
        .createMenu(MENU.SETUP)
        .addItem(MENU.NEW_INSTANCE, "setupConfig")
        .addItem(MENU.TEMPLATE, "createSampleFile")
        .addSeparator()
        .addItem(MENU.SAMPLES, "setupWithSamples"),
    )
    .addItem("About", "aboutApp")
    .addToUi();
}

/**
 * About box for context and contact.
 * TODO: Personalize
 */
function aboutApp() {
  const msg = \`
  ${APP_TITLE}
  Version: 1.0
  Contact: <Developer Email goes here>\`;

  const ui = DocumentApp.getUi();
  ui.alert("About this application", msg, ui.ButtonSet.OK);
}
```

```
</section>
<section>
  <h3>Setup.gs</h3>
```

```
/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This file contains functions that create the template and sample documents.
 */

/**
 * Runs full setup configuration, with option to include samples.
 *
 * Called from menu & setupWithSamples()
 *
 * @param {boolean} includeSamples - Optional, if true creates samples files. *
 */
function setupConfig(includeSamples) {
  // Gets folder to store documents in.
  const folder = getFolderByName_(PROJECT_FOLDER_NAME);

  let msg = \`\nDrive Folder for Documents: '${PROJECT_FOLDER_NAME}'
   \nURL: \n${folder.getUrl()}\`;

  // Creates sample documents for testing.
  // Remove sample document creation and add your own process as needed.
  if (includeSamples) {
    let filesCreated = 0;
    for (const doc of samples.documents) {
      filesCreated += createGoogleDoc(doc, folder, true);
    }
    msg += \`\n\nFiles Created: ${filesCreated}\`;
  }
  const ui = DocumentApp.getUi();
  ui.alert(\`${APP_TITLE} [Setup]\`, msg, ui.ButtonSet.OK);
}

/**
 * Creates a single document instance in the application folder.
 * Includes import settings already created [Heading | Keywords | Table]
 *
 * Called from menu.
 */
function createSampleFile() {
  // Creates a new Google Docs document.
  const templateName = \`[Template] ${APP_TITLE}\`;
  const doc = DocumentApp.create(templateName);
  const docId = doc.getId();

  const msg = \`\nDocument created: '${templateName}'
  \nURL: \n${doc.getUrl()}\`;

  // Adds template content to the body.
  const body = doc.getBody();

  body.setText(templateName);
  body.getParagraphs()[0].setHeading(DocumentApp.ParagraphHeading.TITLE);
  body
    .appendParagraph("Description")
    .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph("");

  const dateString = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "MMMM dd, yyyy",
  );
  body
    .appendParagraph(\`${FIND_TEXT_KEYWORDS} - ${dateString}\`)
    .setHeading(APP_STYLE);
  body.appendTable().appendTableRow().appendTableCell("TL;DR");
  body.appendParagraph("");

  // Gets folder to store documents in.
  const folder = getFolderByName_(PROJECT_FOLDER_NAME);

  // Moves document to application folder.
  DriveApp.getFileById(docId).moveTo(folder);

  const ui = DocumentApp.getUi();
  ui.alert(\`${APP_TITLE} [Template]\`, msg, ui.ButtonSet.OK);
}

/**
 * Configures application for demonstration by setting it up with sample documents.
 *
 * Called from menu | Calls setupConfig with option set to true.
 */
function setupWithSamples() {
  setupConfig(true);
}

/**
 * Sample document names and demo content.
 * {object} samples[]
 */
const samples = {
  documents: [
    {
      name: "Project GHI",
      description: "Google Workspace Add-on inventory review.",
      content:
        "Reviewed all of the currently in-use and proposed Google Workspace Add-ons. Will perform an assessment on how we can reduce overlap, reduce licensing costs, and limit security exposures. \n\nNext week's goal is to report findings back to the Corp Ops team.",
    },
    {
      name: "Project DEF",
      description: "Improve IT networks within the main corporate building.",
      content:
        "Primarily focused on 2nd thru 5th floors in the main corporate building evaluating the network infrastructure. Benchmarking tests were performed and results are being analyzed. \n\nWill submit all findings, analysis, and recommendations next week for committee review.",
    },
    {
      name: "Project ABC",
      description:
        "Assess existing Google Chromebook inventory and recommend upgrades where necessary.",
      content:
        "Concluded a pilot program with the Customer Service department to perform inventory and update inventory records with Chromebook hardware, Chrome OS versions, and installed apps. \n\nScheduling a work plan and seeking necessary go-forward approvals for next week.",
    },
  ],
  common:
    'This sample document is configured to work with the Import summaries custom menu. For the import to work, the source documents used must contain a specific keyword (currently set to "Summary"). The keyword must reside in a paragraph with a set style (currently set to "Heading 3") that is directly followed by a single-cell table. The table contains the contents to be imported into the primary document.\n\nWhile those rules might seem precise, it\'s how the application programmatically determines what content is meant to be imported and what can be ignored. Once a summary has been imported, the script updates the heading font to a new color (currently set to Green, hex \'#2e7d32\') to ensure the app ignores it in future imports. You can change these settings in the Apps Script code.',
};

/**
 * Creates a sample document in application folder.
 * Includes import settings already created [Heading | Keywords | Table].
 * Inserts demo data from samples[].
 *
 * Called from menu.
 */
function createGoogleDoc(document, folder, duplicate) {
  // Checks for duplicates.
  if (!duplicate) {
    // Doesn't create file of same name if one already exists.
    if (folder.getFilesByName(document.name).hasNext()) {
      return 0; // File not created.
    }
  }

  // Creates a new Google Docs document.
  const doc = DocumentApp.create(document.name).setName(document.name);
  const docId = doc.getId();

  // Adds boilerplate content to the body.
  const body = doc.getBody();

  body.setText(document.name);
  body.getParagraphs()[0].setHeading(DocumentApp.ParagraphHeading.TITLE);
  body
    .appendParagraph("Description")
    .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph(document.description);
  body
    .appendParagraph("Usage Instructions")
    .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph(samples.common);

  const dateString = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    "MMMM dd, yyyy",
  );
  body
    .appendParagraph(\`${FIND_TEXT_KEYWORDS} - ${dateString}\`)
    .setHeading(APP_STYLE);
  body.appendTable().appendTableRow().appendTableCell(document.content);
  body.appendParagraph("");

  // Moves document to application folder.
  DriveApp.getFileById(docId).moveTo(folder);

  // Returns if successfully created.
  return 1;
}
```

```
</section>
<section>
  <h3>Utilities.gs</h3>
```

```
/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This file contains common utility functions.
 */

/**
 * Returns a Drive folder located in same folder that the application document is located.
 * Checks if the folder exists and returns that folder, or creates new one if not found.
 *
 * @param {string} folderName - Name of the Drive folder.
 * @return {object} Google Drive folder
 */
function getFolderByName_(folderName) {
  // Gets the Drive folder where the current document is located.
  const docId = DocumentApp.getActiveDocument().getId();
  const parentFolder = DriveApp.getFileById(docId).getParents().next();

  // Iterates subfolders to check if folder already exists.
  const subFolders = parentFolder.getFolders();
  while (subFolders.hasNext()) {
    const folder = subFolders.next();

    // Returns the existing folder if found.
    if (folder.getName() === folderName) {
      return folder;
    }
  }
  // Creates a new folder if one doesn't already exist.
  return parentFolder
    .createFolder(folderName)
    .setDescription(
      \`Created by ${APP_TITLE} application to store documents to process\`,
    );
}

/**
 * Test function to run getFolderByName_.
 * @logs details of created Google Drive folder.
 */
function test_getFolderByName() {
  // Gets the folder in Drive associated with this application.
  const folder = getFolderByName_(PROJECT_FOLDER_NAME);

  console.log(
    \`Name: ${folder.getName()}\rID: ${folder.getId()}\rURL:${folder.getUrl()}\rDescription: ${folder.getDescription()}\`,
  );
  // Uncomment the following to automatically delete the test folder.
  // folder.setTrashed(true);
}
```

```
</section>
```

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Custom menus in Google Workspace](../../guides/menus.md)
- [Extending Google Docs](../../guides/docs.md)
