---
source: https://developers.google.com/apps-script/samples/automations/feedback-sentiment-analysis
root: apps-script
fetched_at: 2026-04-23T15:22:25.526Z
---

# Analyze feedback sentiment using the Google Cloud Natural Language API

## Page Summary

- This solution allows for large-scale analysis of text data, like feedback, directly within Google Sheets.
- It uses the UrlFetch Service in Apps Script to connect to the Google Cloud Natural Language API for entity and sentiment analysis.
- The script processes text from a spreadsheet, sends it to the Natural Language API, and summarizes the average sentiment score for each identified entity in a pivot table.
- Setting up the environment requires a Google Account, a web browser, a Google Cloud project with billing enabled, and enabling the Google Cloud Natural Language API.
- The solution uses Apps Script's Spreadsheet service to manage data in Google Sheets and the UrlFetch service to interact with the Google Cloud Natural Language API.

**Coding level**: Intermediate  
**Duration**: 20 minutes  
**Project type**: Automation with a [custom menu](../../guides/menus.md)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up your environment.
- Set up the script.
- Run the script.

## About this solution

You can analyze text data, such as open-ended feedback, at scale. To perform entity and sentiment analysis from within Google Sheets, this solution uses the [UrlFetch Service](../../reference/html.md) to connect to the [Google Cloud Natural Language API](https://cloud.google.com/natural-language/docs/).

![illustration of how sentiment analysis works](https://developers.google.com/static/apps-script/samples/images/feedback-sentiment-summaryimage.png)

![](https://developers.google.com/static/apps-script/samples/images/feedback-sentiment-summaryimage.png)

### How it works

The script gathers text from the spreadsheet and connects to the Google Cloud Natural Language API to analyze entities and sentiment present in the string. A pivot table summarizes the average sentiment score for each entity mentioned across all rows of text data.

### Apps Script services

This solution uses the following services:

- [Spreadsheet service](../../reference/spreadsheet.md): Sends the text data to the Google Cloud Natural Language API and marks each row as "Complete" once its sentiment has been analyzed.
- [UrlFetch service](../../reference/html.md): Connects to the Google Cloud Natural Language API to perform entity and sentiment analysis on the text.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.
- A Google Cloud project with an associated billing account. Refer to [Enable billing for a project](https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project).

## Set up your environment

To use this solution, complete the following setup steps.

### Open your Cloud project in the Google Cloud console

If it's not open already, open the Cloud project that you intend to use for this sample:

1. In the Google Cloud console, go to the **Select a project** page.
	[Select a Cloud project](https://console.cloud.google.com/projectselector2)
2. Select the Google Cloud project you want to use. Or, click **Create project** and follow the on-screen instructions. If you create a Google Cloud project, you might need to [turn on billing for the project](https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project).

### Enable the Google Cloud Natural Language API

This solution connects to the Google Cloud Natural Language API. Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.

- In your Cloud project, turn on the Google Cloud Natural Language API.
	[Turn on the API](https://console.cloud.google.com/flows/enableapi?apiid=language.googleapis.com)

### Configure the OAuth consent screen

This solution requires a Cloud project with a configured consent screen. Configuring the OAuth consent screen defines what Google displays to users and registers your app so that you can publish it later.

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
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](../../../workspace/guides/configure-oauth-consent.md) guide.

### Get an API key for the Google Cloud Natural Language API

1. Go to the [Google API Console](https://console.cloud.google.com/). Make sure your billing-enabled project is open.
2. In the Google API Console, go to Menu \> **APIs & Services** \> **Credentials**.
	[Go to Credentials](https://console.cloud.google.com/apis/credentials)
3. Click **Create credentials** \> **API key**.
4. Take note of your API key for use in a later step.

## Set up the script

Complete the following steps to set up the script.

### Create the Apps Script project

1. Click the following button to make a copy of the **Sentiment analysis for feedback** sample spreadsheet. The Apps Script project for this solution is attached to the spreadsheet.
	[Make a copy](https://docs.google.com/spreadsheets/d/1139KRmUqb3Hnf5BDCoOmoLlubZv9XwNxzfyaVxuF-II/copy)
2. Click **Extensions** \> **Apps Script**.
3. Update the following variable in the script file with your API key:
	```
	const myApiKey = 'YOUR_API_KEY'; // Replace with your API key.
	```
4. Click Save ![Save project button in the editor](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).

### Add text data

1. Return to the spreadsheet.
2. Add text data to the **id** and **comments** columns. You can use sample vacation property reviews from [Kaggle](https://www.kaggle.com/airbnb/seattle#reviews.csv) or use your own data. You can add more columns if needed, but to run successfully, the script must have data in the **id** and **comments** columns.

## Run the script

1. At the top of the spreadsheet, click **Sentiment Tools** \> **Mark entities and sentiment**. You might need to refresh the page for this custom menu to appear.
2. When prompted, authorize the script. <<../\_snippets/oauth.md>>
3. Click **Sentiment Tools** \> **Mark entities and sentiment** again.
4. When the script finishes, switch to the **Pivot Table** sheet to see the results.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/feedback-sentiment-analysis

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

// Sets API key for accessing Cloud Natural Language API.
const myApiKey = "YOUR_API_KEY"; // Replace with your API key.

// Matches column names in Review Data sheet to variables.
const COLUMN_NAME = {
  COMMENTS: "comments",
  ENTITY: "entity_sentiment",
  ID: "id",
};

/**
 * Creates a Demo menu in Google Spreadsheets.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Sentiment Tools")
    .addItem("Mark entities and sentiment", "markEntitySentiment")
    .addToUi();
}

/**
 * Analyzes entities and sentiment for each comment in
 * Review Data sheet and copies results into the
 * Entity Sentiment Data sheet.
 */
function markEntitySentiment() {
  // Sets variables for "Review Data" sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const dataSheet = ss.getSheetByName("Review Data");
  const rows = dataSheet.getDataRange();
  const numRows = rows.getNumRows();
  const values = rows.getValues();
  const headerRow = values[0];

  // Checks to see if "Entity Sentiment Data" sheet is present, and
  // if not, creates a new sheet and sets the header row.
  const entitySheet = ss.getSheetByName("Entity Sentiment Data");
  if (entitySheet == null) {
    ss.insertSheet("Entity Sentiment Data");
    const entitySheet = ss.getSheetByName("Entity Sentiment Data");
    const esHeaderRange = entitySheet.getRange(1, 1, 1, 6);
    const esHeader = [
      [
        "Review ID",
        "Entity",
        "Salience",
        "Sentiment Score",
        "Sentiment Magnitude",
        "Number of mentions",
      ],
    ];
    esHeaderRange.setValues(esHeader);
  }

  // Finds the column index for comments, language_detected,
  // and comments_english columns.
  const textColumnIdx = headerRow.indexOf(COLUMN_NAME.COMMENTS);
  const entityColumnIdx = headerRow.indexOf(COLUMN_NAME.ENTITY);
  const idColumnIdx = headerRow.indexOf(COLUMN_NAME.ID);
  if (entityColumnIdx === -1) {
    Browser.msgBox(
      \`Error: Could not find the column named ${COLUMN_NAME.ENTITY}. Please create an empty column with header "entity_sentiment" on the Review Data tab.\`,
    );
    return; // bail
  }

  ss.toast("Analyzing entities and sentiment...");
  for (let i = 0; i < numRows; ++i) {
    const value = values[i];
    const commentEnCellVal = value[textColumnIdx];
    const entityCellVal = value[entityColumnIdx];
    const reviewId = value[idColumnIdx];

    // Calls retrieveEntitySentiment function for each row that has a comment
    // and also an empty entity_sentiment cell value.
    if (commentEnCellVal && !entityCellVal) {
      const nlData = retrieveEntitySentiment(commentEnCellVal);
      // Pastes each entity and sentiment score into Entity Sentiment Data sheet.
      const newValues = [];
      for (let entity in nlData.entities) {
        entity = nlData.entities[entity];
        const row = [
          reviewId,
          entity.name,
          entity.salience,
          entity.sentiment.score,
          entity.sentiment.magnitude,
          entity.mentions.length,
        ];
        newValues.push(row);
      }
      if (newValues.length) {
        entitySheet
          .getRange(
            entitySheet.getLastRow() + 1,
            1,
            newValues.length,
            newValues[0].length,
          )
          .setValues(newValues);
      }
      // Pastes "complete" into entity_sentiment column to denote completion of NL API call.
      dataSheet.getRange(i + 1, entityColumnIdx + 1).setValue("complete");
    }
  }
}

/**
 * Calls the Cloud Natural Language API with a string of text to analyze
 * entities and sentiment present in the string.
 * @param {String} the string for entity sentiment analysis
 * @return {Object} the entities and related sentiment present in the string
 */
function retrieveEntitySentiment(line) {
  const apiKey = myApiKey;
  const apiEndpoint = \`https://language.googleapis.com/v1/documents:analyzeEntitySentiment?key=${apiKey}\`;
  // Creates a JSON request, with text string, language, type and encoding
  const nlData = {
    document: {
      language: "en-us",
      type: "PLAIN_TEXT",
      content: line,
    },
    encodingType: "UTF8",
  };
  // Packages all of the options and the data together for the API call.
  const nlOptions = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(nlData),
  };
  // Makes the API call.
  const response = UrlFetchApp.fetch(apiEndpoint, nlOptions);
  return JSON.parse(response);
}
```

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.
