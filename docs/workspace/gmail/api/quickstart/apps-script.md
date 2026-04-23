---
source: https://developers.google.com/workspace/gmail/api/quickstart/apps-script
root: workspace
fetched_at: 2026-04-23T15:28:52.936Z
---

# Google Apps Script quickstart

Create a [Google Apps Script](https://developers.google.com/apps-script/overview) that makes requests to the Gmail API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](https://developers.google.com/workspace/guides/auth-overview) before [choosing the access credentials](https://developers.google.com/workspace/guides/create-credentials#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

In Apps Script, Google Workspace quickstarts use [Advanced Google services](https://developers.google.com/apps-script/guides/services/advanced) to call Google Workspace APIs and handle some details of the authentication and authorization flow.

## Objectives

- Configure the environment.
- Create and configure the script.
- Run the script.

## Prerequisites

- A Google account with Gmail enabled.
- Access to Google Drive

## Create the script

1. Create a new script in the Apps Script editor by going to [script.google.com/create](https://script.google.com/create).
2. Replace the contents of the script editor with the following code:

```
/**
 * Lists all labels in the user's mailbox
 * @see https://developers.google.com/gmail/api/reference/rest/v1/users.labels/list
 */
function listLabels() {
  try {
    // Gmail.Users.Labels.list() API returns the list of all Labels in user's mailbox
    const response = Gmail.Users.Labels.list("me");
    if (!response || response.labels.length === 0) {
      // TODO (developer) - No labels are returned from the response
      console.log("No labels found.");
      return;
    }
    // Print the Labels that are available.
    console.log("Labels:");
    for (const label of response.labels) {
      console.log("- %s", label.name);
    }
  } catch (err) {
    // TODO (developer) - Handle exception on Labels.list() API
    console.log("Labels.list() API failed with error %s", err.toString());
  }
}
```

3. Click Save ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).
4. Click **Untitled project**, type **Quickstart**, and click **Rename**.

## Configure the script

### Enable the Gmail API

Open the Apps Script project.

1. Click **Editor** .
2. Next to **Services**, click Add a service .
3. Select Gmail API and click **Add**.

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
- [Troubleshoot authentication and authorization issues](https://developers.google.com/workspace/gmail/api/troubleshoot-authentication-authorization)
- [Gmail API reference documentation](https://developers.google.com/workspace/gmail/api/reference/rest)
