---
source: https://developers.google.com/workspace/add-ons/samples/share-macro
root: workspace
fetched_at: 2026-04-23T15:23:10.135Z
---

# Copy macros to other Google Sheets spreadsheets

## Page Summary

- This Google Workspace add-on automates the process of copying Google Sheets macros between spreadsheets, eliminating manual errors.
- It leverages the Apps Script API to duplicate the entire script project, including all container-bound scripts, to a new spreadsheet.
- Users need a Google account, internet access, a Google Cloud project, and an enabled Google Apps Script API to utilize this add-on.
- The add-on requires the source script ID and the target spreadsheet URL as input to execute the macro copying process.
- Detailed setup instructions, code examination links, and further resources are available within the documentation.

**Coding level**: Intermediate  
**Duration**: 30 minutes  
**Project type**: Google Workspace add-on

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the environment.
- Set up the script.
- Run the script.

## About this solution

Manually copying Google Sheets macros from one spreadsheet to another can be time consuming and error-prone. This Google Workspace add-on automatically copies a script project and attaches it to a user-specified spreadsheet. Though this solution focuses on Sheets macros, you can use it to copy and share any container-bound script.

![Screenshot of the Share Macro Google Workspace add-on](https://developers.google.com/static/workspace/add-ons/images/share-macro-ui.png)

![](https://developers.google.com/static/workspace/add-ons/images/share-macro-ui.png)

### How it works

The script copies the Apps Script project that's bound to the original spreadsheet and creates a duplicate Apps Script project bound to the user-specified spreadsheet.

### Apps Script services

This solution uses the following services:

- [URL Fetch service](../../../apps-script/reference/url-fetch.md) –Connects to the Apps Script API to copy the source project and create a copy.
- [Script service](../../../apps-script/reference/script.md) –Authorizes the Apps Script API to avoid a second authorization prompt.
- [Spreadsheet service](../../../apps-script/reference/spreadsheet.md) –Opens the target spreadsheet to add the copied Apps Script project.
- [Card service](../../../apps-script/reference/card-service.md) –Creates the user interface of the add-on.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.
- A [Google Cloud project](../../guides/create-project.md).
- The Google Apps Script API turned on in the [Apps Script dashboard settings](https://script.google.com/home/usersettings).

## Set up your environment

### Open your Cloud project in the Google Cloud console

If it's not open already, open the Cloud project that you intend to use for this sample:

1. In the Google Cloud console, go to the **Select a project** page.
	[Select a Cloud project](https://console.cloud.google.com/projectselector2)
2. Select the Google Cloud project you want to use. Or, click **Create project** and follow the on-screen instructions. If you create a Google Cloud project, you might need to [turn on billing for the project](https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project).

### Turn on the Google Apps Script API

This quickstart uses the Google Apps Script API.

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In your Cloud project, turn on the Google Apps Script API.
	[Turn on the API](https://console.cloud.google.com/apis/enableflow?apiid=script.googleapis.com)

### Configure the OAuth consent screen

Google Workspace add-ons require a consent screen configuration. Configuring your add-on's OAuth consent screen defines what Google displays to users.

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Branding**.
	[Go to Branding](https://console.developers.google.com/auth/branding)
2. If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in [Branding](https://console.developers.google.com/auth/branding), [Audience](https://console.developers.google.com/auth/audience), and [Data Access](https://console.developers.google.com/auth/scopes). If you see a message that says **Google Auth platform not configured yet**, click **Get Started**:
1. Under **App Information**, in **App name**, enter a name for the app.
	2. In **User support email**, choose a support email address where users can contact you if they have questions about their consent.
	3. Click **Next**.
	4. Under **Audience**, select **Internal**.
	5. Click **Next**.
	6. Under **Contact Information**, enter an **Email address** where you can be notified about any changes to your project.
	7. Click **Next**.
	8. Under **Finish**, review the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) and if you agree, select **I agree to the Google API Services: User Data Policy**.
	9. Click **Continue**.
	10. Click **Create**.
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](../../guides/configure-oauth-consent.md) guide.

## Set up the script

### Create the Apps Script project

1. Click the following button to open the **Share a macro** Apps Script project.  
	[Open the project](https://script.google.com/d/1BsbWOAbLADGoLtp5P9oqctZMiqT5EFh_R-CufxAV9y1hvVSAMO35Azu9/edit)
2. Click **Overview** .
3. On the overview page, click Make a copy ![The icon for making a copy](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/file_copy/default/24px.svg).

### Copy the Cloud project number

1. In the Google API Console, go to Menu \> **IAM & Admin** \> **Settings**.
	[Go to IAM & Admin Settings](https://console.developers.google.com/iam-admin/settings)
2. In the **Project number** field, copy the value.

### Set the Apps Script project's Cloud project

1. In your copied Apps Script project, click **Project Settings** ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg).
2. Under **Google Cloud Platform (GCP) Project**, click **Change project**.
3. In **GCP project number**, paste the Google Cloud project number.
4. Click **Set project**.

### Install a test deployment

1. In your copied Apps Script project, click **Editor** .
2. Open the `UI.gs` file and click **Run**. When prompted, authorize the script.
3. Click **Deploy** \> **Test deployments**.
4. Click **Install** \> **Done**.

### Get the macro script and spreadsheet information

1. Open a Sheets spreadsheet that has a macro and that you have permission to edit. To use a sample spreadsheet, [make a copy of the **Sample macro** spreadsheet](https://docs.google.com/spreadsheets/d/1W-jXTUGCbAiDHxaEUFZ7pDwHhrcSEOeFyiI6B3MqfLw/copy).
2. Click **Extensions** \> **Apps Script**.
3. In the Apps Script project, click **Project settings** ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg).
4. Under the script ID, click **Copy**.
5. Set the script ID aside for use in a later step.
6. Open or create a new spreadsheet where you want to add the macro. You must have permission to edit the spreadsheet.
7. Copy the spreadsheet URL and set it aside for use in a later step.

## Run the script

Make sure the Google Apps Script API is turned on in your [dashboard settings](https://script.google.com/home/usersettings). Take the steps in the following sections to run your script.

### Copy the macro

1. In Sheets, on the right sidebar, open the Share Macro add-on ![The icon for making a copy](https://www.gstatic.com/images/branding/product/2x/apps_script_48dp.png).
2. Under **Source macro**, paste the script ID.
3. Under **Target spreadsheet**, paste the spreadsheet URL.
4. Click **Share macro**.
5. Click **Authorize access** and authorize the add-on.
6. Repeat steps 2-4.

### Open the copied macro

1. If it's not open already, open the spreadsheet to which you copied the macro.
2. Click **Extensions** \> **Apps Script**.
3. If you don't see the copied Apps Script project, make sure the Google Apps Script API is turned on in the [dashboard settings](https://script.google.com/home/usersettings) and repeat the steps listed under [Copy the macro](#copy_the_macro).

## Review the code

To review the Apps Script code for this solution, click **View source code** below:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.devsite.corp.google.com/apps-script/add-ons/share-macro

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
 * Uses Apps Script API to copy source Apps Script project
 * to destination Google Spreadsheet container.
 *
 * @param {string} sourceScriptId - Script ID of the source project.
 * @param {string} targetSpreadsheetUrl - URL if the target spreadsheet.
 */
function shareMacro_(sourceScriptId, targetSpreadsheetUrl) {
  // Gets the source project content using the Apps Script API.
  const sourceProject = APPS_SCRIPT_API.get(sourceScriptId);
  const sourceFiles = APPS_SCRIPT_API.getContent(sourceScriptId);

  // Opens the target spreadsheet and gets its ID.
  const parentSSId = SpreadsheetApp.openByUrl(targetSpreadsheetUrl).getId();

  // Creates an Apps Script project that's bound to the target spreadsheet.
  const targetProjectObj = APPS_SCRIPT_API.create(
    sourceProject.title,
    parentSSId,
  );

  // Updates the Apps Script project with the source project content.
  APPS_SCRIPT_API.updateContent(targetProjectObj.scriptId, sourceFiles);
}

/**
 * Function that encapsulates Apps Script API project manipulation.
 */
const APPS_SCRIPT_API = {
  accessToken: ScriptApp.getOAuthToken(),

  /* APPS_SCRIPT_API.get
   * Gets Apps Script source project.
   * @param {string} scriptId - Script ID of the source project.
   * @return {Object} - JSON representation of source project.
   */
  get: function (scriptId) {
    const url = \`https://script.googleapis.com/v1/projects/${scriptId}\`;
    const options = {
      method: "get",
      headers: {
        Authorization: \`Bearer ${this.accessToken}\`,
      },
      muteHttpExceptions: true,
    };
    const res = UrlFetchApp.fetch(url, options);
    if (res.getResponseCode() === 200) {
      return JSON.parse(res);
    }
    console.log("An error occurred gettting the project details");
    console.log(res.getResponseCode());
    console.log(res.getContentText());
    console.log(res);
    return false;
  },

  /* APPS_SCRIPT_API.create
   * Creates new Apps Script project in the target spreadsheet.
   * @param {string} title - Name of Apps Script project.
   * @param {string} parentId - Internal ID of target spreadsheet.
   * @return {Object} - JSON representation completed project creation.
   */
  create: function (title, parentId) {
    const url = "https://script.googleapis.com/v1/projects";
    const options = {
      headers: {
        Authorization: \`Bearer ${this.accessToken}\`,
        "Content-Type": "application/json",
      },
      muteHttpExceptions: true,
      method: "POST",
      payload: { title: title },
    };
    if (parentId) {
      options.payload.parentId = parentId;
    }
    options.payload = JSON.stringify(options.payload);
    let res = UrlFetchApp.fetch(url, options);
    if (res.getResponseCode() === 200) {
      res = JSON.parse(res);
      return res;
    }
    console.log("An error occurred while creating the project");
    console.log(res.getResponseCode());
    console.log(res.getContentText());
    console.log(res);
    return false;
  },
  /* APPS_SCRIPT_API.getContent
   * Gets the content of the source Apps Script project.
   * @param {string} scriptId - Script ID of the source project.
   * @return {Object} - JSON representation of Apps Script project content.
   */
  getContent: function (scriptId) {
    const url = \`https://script.googleapis.com/v1/projects/${scriptId}/content\`;
    const options = {
      method: "get",
      headers: {
        Authorization: \`Bearer ${this.accessToken}\`,
      },
      muteHttpExceptions: true,
    };
    let res = UrlFetchApp.fetch(url, options);
    if (res.getResponseCode() === 200) {
      res = JSON.parse(res);
      return res.files;
    }
    console.log(
      "An error occurred obtaining the content from the source script",
    );
    console.log(res.getResponseCode());
    console.log(res.getContentText());
    console.log(res);
    return false;
  },

  /* APPS_SCRIPT_API.updateContent
   * Updates (copies) content from source to target Apps Script project.
   * @param {string} scriptId - Script ID of the source project.
   * @param {Object} files - JSON representation of Apps Script project content.
   * @return {boolean} - Result status of the function.
   */
  updateContent: function (scriptId, files) {
    const url = \`https://script.googleapis.com/v1/projects/${scriptId}/content\`;
    const options = {
      method: "put",
      headers: {
        Authorization: \`Bearer ${this.accessToken}\`,
      },
      contentType: "application/json",
      payload: JSON.stringify({ files: files }),
      muteHttpExceptions: true,
    };
    const res = UrlFetchApp.fetch(url, options);
    if (res.getResponseCode() === 200) {
      return true;
    }
    console.log(\`An error occurred updating content of script ${scriptId}\`);
    console.log(res.getResponseCode());
    console.log(res.getContentText());
    console.log(res);
    return false;
  },
};
```

### UI.gs

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

// Change application logo here (and in manifest) as desired.
const ADDON_LOGO =
  "https://www.gstatic.com/images/branding/product/2x/apps_script_48dp.png";

/**
 * Callback function for rendering the main card.
 * @return {CardService.Card} The card to show the user.
 */
function onHomepage(e) {
  return createSelectionCard(e);
}

/**
 * Builds the primary card interface used to collect user inputs.
 *
 * @param {Object} e - Add-on event object.
 * @param {string} sourceScriptId - Script ID of the source project.
 * @param {string} targetSpreadsheetUrl - URL of the target spreadsheet.
 * @param {string[]} errors - Array of error messages.
 *
 * @return {CardService.Card} The card to show to the user for inputs.
 */
function createSelectionCard(e, sourceScriptId, targetSpreadsheetUrl, errors) {
  // Configures card header.
  const cardHeader = CardService.newCardHeader()
    .setTitle("Share macros with other spreadheets!")
    .setImageUrl(ADDON_LOGO)
    .setImageStyle(CardService.ImageStyle.SQUARE);

  // If form errors exist, configures section with error messages.
  let showErrors = false;

  if (errors?.length) {
    showErrors = true;
    let msg = errors.reduce((str, err) => \`${str}• ${err}<br>\`, "");
    msg = \`<b>Form submission errors:</b><br><font color="#ba0000">${msg}</font>\`;

    // Builds error message section.
    sectionErrors = CardService.newCardSection().addWidget(
      CardService.newDecoratedText().setText(msg).setWrapText(true),
    );
  }

  // Configures source project section.
  const sectionSource = CardService.newCardSection()
    .addWidget(
      CardService.newDecoratedText().setText(
        "<b>Source macro</b><br>The Apps Script project to copy",
      ),
    )

    .addWidget(
      CardService.newTextInput()
        .setFieldName("sourceScriptId")
        .setValue(sourceScriptId || "")
        .setTitle("Script ID of the source macro")
        .setHint(
          "You must have at least edit permission for the source spreadsheet to access its script project",
        ),
    )

    .addWidget(
      CardService.newTextButton()
        .setText("Find the script ID")
        .setOpenLink(
          CardService.newOpenLink()
            .setUrl(
              "https://developers.google.com/apps-script/api/samples/execute",
            )
            .setOpenAs(CardService.OpenAs.FULL_SIZE)
            .setOnClose(CardService.OnClose.NOTHING),
        ),
    );

  // Configures target spreadsheet section.
  const sectionTarget = CardService.newCardSection()
    .addWidget(
      CardService.newDecoratedText().setText("<b>Target spreadsheet</b>"),
    )

    .addWidget(
      CardService.newTextInput()
        .setFieldName("targetSpreadsheetUrl")
        .setValue(targetSpreadsheetUrl || "")
        .setHint(
          "You must have at least edit permission for the target spreadsheet",
        )
        .setTitle("Target spreadsheet URL"),
    );

  // Configures help section.
  const sectionHelp = CardService.newCardSection()
    .addWidget(
      CardService.newDecoratedText()
        .setText(
          "<b><font color=#c80000>NOTE: </font></b>" +
            "The Apps Script API must be turned on.",
        )
        .setWrapText(true),
    )

    .addWidget(
      CardService.newTextButton()
        .setText("Turn on Apps Script API")
        .setOpenLink(
          CardService.newOpenLink()
            .setUrl("https://script.google.com/home/usersettings")
            .setOpenAs(CardService.OpenAs.FULL_SIZE)
            .setOnClose(CardService.OnClose.NOTHING),
        ),
    );

  // Configures card footer with action to copy the macro.
  const cardFooter = CardService.newFixedFooter().setPrimaryButton(
    CardService.newTextButton()
      .setText("Share macro")
      .setOnClickAction(
        CardService.newAction().setFunctionName("onClickFunction_"),
      ),
  );

  // Begins building the card.
  const builder = CardService.newCardBuilder().setHeader(cardHeader);

  // Adds error section if applicable.
  if (showErrors) {
    builder.addSection(sectionErrors);
  }

  // Adds final sections & footer.
  builder
    .addSection(sectionSource)
    .addSection(sectionTarget)
    .addSection(sectionHelp)
    .setFixedFooter(cardFooter);

  return builder.build();
}

/**
 * Action handler that validates user inputs and calls shareMacro_
 * function to copy Apps Script project to target spreadsheet.
 *
 * @param {Object} e - Add-on event object.
 *
 * @return {CardService.Card} Responds with either a success or error card.
 */
function onClickFunction_(e) {
  const sourceScriptId = e.formInput.sourceScriptId;
  const targetSpreadsheetUrl = e.formInput.targetSpreadsheetUrl;

  // Validates inputs for errors.
  const errors = [];

  // Pushes an error message if the Script ID parameter is missing.
  if (!sourceScriptId) {
    errors.push("Missing script ID");
  } else {
    // Gets the Apps Script project if the Script ID parameter is valid.
    const sourceProject = APPS_SCRIPT_API.get(sourceScriptId);
    if (!sourceProject) {
      // Pushes an error message if the Script ID parameter isn't valid.
      errors.push("Invalid script ID");
    }
  }

  // Pushes an error message if the spreadsheet URL is missing.
  if (!targetSpreadsheetUrl) {
    errors.push("Missing Spreadsheet URL");
  } else
    try {
      // Tests for valid spreadsheet URL to get the spreadsheet ID.
      const ssId = SpreadsheetApp.openByUrl(targetSpreadsheetUrl).getId();
    } catch (err) {
      // Pushes an error message if the spreadsheet URL parameter isn't valid.
      errors.push("Invalid spreadsheet URL");
    }

  if (errors?.length) {
    // Redisplays form if inputs are missing or invalid.
    return createSelectionCard(e, sourceScriptId, targetSpreadsheetUrl, errors);
  }
  // Calls shareMacro function to copy the project.
  shareMacro_(sourceScriptId, targetSpreadsheetUrl);

  // Creates a success card to display to users.
  return buildSuccessCard(e, targetSpreadsheetUrl);
}

/**
 * Builds success card to inform user & let them open the spreadsheet.
 *
 * @param {Object} e - Add-on event object.
 * @param {string} targetSpreadsheetUrl - URL of the target spreadsheet.
 *
 * @return {CardService.Card} Returns success card.
 */ function buildSuccessCard(e, targetSpreadsheetUrl) {
  // Configures card header.
  const cardHeader = CardService.newCardHeader()
    .setTitle("Share macros with other spreadsheets!")
    .setImageUrl(ADDON_LOGO)
    .setImageStyle(CardService.ImageStyle.SQUARE);

  // Configures card body section with success message and open button.
  const sectionBody1 = CardService.newCardSection()
    .addWidget(
      CardService.newTextParagraph().setText("Sharing process is complete!"),
    )
    .addWidget(
      CardService.newTextButton()
        .setText("Open spreadsheet")
        .setOpenLink(
          CardService.newOpenLink()
            .setUrl(targetSpreadsheetUrl)
            .setOpenAs(CardService.OpenAs.FULL_SIZE)
            .setOnClose(CardService.OnClose.RELOAD_ADD_ON),
        ),
    );
  const sectionBody2 = CardService.newCardSection()
    .addWidget(
      CardService.newTextParagraph().setText(
        "If you don't see the copied project in your target spreadsheet," +
          " make sure you turned on the Apps Script API in the Apps Script dashboard.",
      ),
    )
    .addWidget(
      CardService.newTextButton()
        .setText("Check API")
        .setOpenLink(
          CardService.newOpenLink()
            .setUrl("https://script.google.com/home/usersettings")
            .setOpenAs(CardService.OpenAs.FULL_SIZE)
            .setOnClose(CardService.OnClose.RELOAD_ADD_ON),
        ),
    );

  // Configures the card footer with action to start new process.
  const cardFooter = CardService.newFixedFooter().setPrimaryButton(
    CardService.newTextButton()
      .setText("Share another")
      .setOnClickAction(CardService.newAction().setFunctionName("onHomepage")),
  );

  const builder = CardService.newCardBuilder()
    .setHeader(cardHeader)
    .addSection(sectionBody1)
    .addSection(sectionBody2)
    .setFixedFooter(cardFooter);

  return builder.build();
}
```

### appsscript.json

```
{
  "timeZone": "America/Los_Angeles",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/script.external_request",
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/script.projects"
  ],
  "urlFetchWhitelist": ["https://script.googleapis.com/"],
  "addOns": {
    "common": {
      "name": "Share Macro",
      "logoUrl": "https://www.gstatic.com/images/branding/product/2x/apps_script_48dp.png",
      "layoutProperties": {
        "primaryColor": "#188038",
        "secondaryColor": "#34a853"
      },
      "homepageTrigger": {
        "runFunction": "onHomepage"
      }
    },
    "sheets": {}
  }
}
```

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Extend Google Workspace with add-ons](../overview.md)
- [Build Google Workspace add-ons](../how-tos/building-workspace-addons.md)
- [Publish an app](../../marketplace/how-to-publish.md)
