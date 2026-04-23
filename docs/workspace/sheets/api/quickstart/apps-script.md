---
source: https://developers.google.com/workspace/sheets/api/quickstart/apps-script
root: workspace
fetched_at: 2026-04-23T15:31:24.431Z
---

# Google Apps Script quickstart

Create a [Google Apps Script](https://developers.google.com/apps-script/overview) that makes requests to the Google Sheets API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](https://developers.google.com/workspace/guides/auth-overview) before [choosing the access credentials](https://developers.google.com/workspace/guides/create-credentials#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

In Apps Script, Google Workspace quickstarts use [Advanced Google services](https://developers.google.com/apps-script/guides/services/advanced) to call Google Workspace APIs and handle some details of the authentication and authorization flow.

## Objectives

- Configure the environment.
- Create and configure the script.
- Run the script.

## Prerequisites

- A Google Account
- Access to Google Drive

## Create the script

1. Create a new script in the Apps Script editor by going to [script.google.com/create](https://script.google.com/create).
2. Replace the contents of the script editor with the following code:

```
/**
 * Creates a Sheets API service object and prints the names and majors of
 * students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @see https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
 */
function logNamesAndMajors() {
  const spreadsheetId = "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms";
  const rangeName = "Class Data!A2:E";
  try {
    // Get the values from the spreadsheet using spreadsheetId and range.
    const values = Sheets.Spreadsheets.Values.get(
      spreadsheetId,
      rangeName,
    ).values;
    //  Print the values from spreadsheet if values are available.
    if (!values) {
      console.log("No data found.");
      return;
    }
    console.log("Name, Major:");
    for (const row in values) {
      // Print columns A and E, which correspond to indices 0 and 4.
      console.log(" - %s, %s", values[row][0], values[row][4]);
    }
  } catch (err) {
    // TODO (developer) - Handle Values.get() exception from Sheet API
    console.log(err.message);
  }
}
```

3. Click Save ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).
4. Click **Untitled project**, type **Quickstart**, and click **Rename**.

## Configure the script

### Enable the Google Sheets API

Open the Apps Script project.

1. Click **Editor** .
2. Next to **Services**, click Add a service .
3. Select Sheets API and click **Add**.

## Run the sample

In the Apps Script editor, click **Run**.

The first time you run the sample, it prompts you to authorize access:

1. Click **Review permissions**.
2. Choose an account.
3. Click **Allow**.

The script's execution log appears at the bottom of the window.

## Next steps

- [Google Apps Script Advanced Services documentation](https://developers.google.com/apps-script/guides/services/advanced)
- [Try the Google Workspace APIs in the APIs explorer](https://developers.google.com/workspace/explore)
- [Troubleshoot authentication and authorization issues](https://developers.google.com/workspace/sheets/api/troubleshoot-authentication-authorization)
- [Sheets API reference documentation](https://developers.google.com/workspace/sheets/api/reference/rest)
