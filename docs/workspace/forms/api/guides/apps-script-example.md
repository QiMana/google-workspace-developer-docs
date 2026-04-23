---
source: https://developers.google.com/workspace/forms/api/guides/apps-script-example
root: workspace
fetched_at: 2026-04-23T15:28:40.166Z
---

# Apps Script sample web app

This page provides an overview of the Apps Script web app example for the Google Forms API.

## Prerequisites

- Enable the Forms API in your Google Cloud project.
- Set up a new Apps Script project as described in the [GitHub README file](https://github.com/googleworkspace/apps-script-samples/blob/main/forms-api/demos/AppsScriptFormsAPIWebApp/README.md) for the sample web app.

## Overview

The Forms API allows any authenticated client to access the API directly using [REST](https://www.codecademy.com/article/what-is-rest).

Because Apps Script provides a way to obtain both a valid [OAuth Access Token](https://oauth.net/2/access-tokens/) and make REST calls, it's possible to integrate Apps Script directly with the Forms API. Apps Script already provides an existing [Forms Service](https://developers.google.com/apps-script/reference/forms), which allows scripts to create, access, and modify Forms. However, if you prefer to use the Forms API directly from Apps Script, set up OAuth access as follows:

1. Get a scoped and authenticated OAuth access token.
	`ScriptApp.getOAuthToken();`
2. Include the OAuth token in the *options* argument provided in any REST calls to the API.
	`UrlFetchApp.fetch(Url, options);`

See [Set up an Apps Script project](https://developers.google.com/workspace/forms/api/guides/forms-apps-script) for an example of this in action. The setup guide details the infrastructure needed to call the API—however, to provide intuitive access to the API for users, you can also try out and modify our sample web app.

## Web app example usage

A complete example web app that calls all of the Forms API methods directly is available in the [`apps-script-samples` GitHub repository](https://github.com/googleworkspace/apps-script-samples/tree/main/forms-api/demos/AppsScriptFormsAPIWebApp).

### Running the web app

Once you've set up your project and deployed it as a Web app, you can try some operations.

1. Create a new form by clicking the **Create Form** button.
	The new form is now visible in the **Form id:** field and you can open it by clicking **Open in Forms**.
2. After opening the new form in a separate window, try adding a few questions manually, then click **Get Form by Id** and you'll see your new questions in the JSON output on the right.

Explore the other methods available in the app and observe the output on the right for each operation.

### Working with Forms watches

Notice also the buttons for forms [watches](https://developers.google.com/workspace/forms/api/reference/rest/v1/forms.watches). These use the Forms API watches feature, and perform operations to create, list, delete, and renew watches. You need to set up a project with [Cloud Pub/Sub](https://cloud.google.com/pubsub) topics to use them.

For more information on Forms API watches and Cloud Pub/Sub, see [Set up and receive push notifications](https://developers.google.com/workspace/forms/api/guides/push-notifications).

## Next steps

Try customizing the example app to suit your needs. Here are a few examples:

- Create a *question bank* in a Google sheet, and then use the Apps Script [SpreadsheetApp](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app) service to fetch questions from a sheet to populate new forms.
- Alternatively, your question bank can reside in a SQL database where you can use the Apps Script [JDBC Service](https://developers.google.com/apps-script/reference/jdbc) to populate forms with questions from the database.
- Generate a quiz and save the scores in a Google sheet grade book.
- Set up your project with Cloud Pub/Sub and use the [watches](https://developers.google.com/workspace/forms/api/guides/push-notifications) feature to generate a real-time student leaderboard to display quiz results.
