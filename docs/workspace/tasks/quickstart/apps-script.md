---
source: https://developers.google.com/workspace/tasks/quickstart/apps-script
root: workspace
fetched_at: 2026-04-23T15:31:57.944Z
---

# Google Apps Script quickstart

Create a [Google Apps Script](https://developers.google.com/apps-script/overview) that makes requests to the Google Tasks API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](https://developers.google.com/workspace/guides/auth-overview) before [choosing the access credentials](https://developers.google.com/workspace/guides/create-credentials#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

In Apps Script, Google Workspace quickstarts use [Advanced Google services](https://developers.google.com/apps-script/guides/services/advanced) to call Google Workspace APIs and handle some details of the authentication and authorization flow.

## Objectives

- Configure the environment.
- Create and configure the script.
- Run the script.

## Prerequisites

- A Google account with Google Tasks enabled.
- Access to Google Drive

## Create the script

1. Create a new script in the Apps Script editor by going to [script.google.com/create](https://script.google.com/create).
2. Replace the contents of the script editor with the following code:

```
/**
 * Lists the user's tasks.
 * @see https://developers.google.com/tasks/reference/rest/v1/tasklists/list
 */
function listTaskLists() {
  const optionalArgs = {
    maxResults: 10,
  };
  try {
    // Returns all the authenticated user's task lists.
    const response = Tasks.Tasklists.list(optionalArgs);
    const taskLists = response.items;
    // Print task list of user if available.
    if (!taskLists || taskLists.length === 0) {
      console.log("No task lists found.");
      return;
    }
    for (const taskList of taskLists) {
      console.log("%s (%s)", taskList.title, taskList.id);
    }
  } catch (err) {
    // TODO (developer) - Handle exception from Task API
    console.log("Failed with error %s", err.message);
  }
}
```

3. Click Save ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).
4. Click **Untitled project**, type **Quickstart**, and click **Rename**.

## Configure the script

### Enable the Google Tasks API

Open the Apps Script project.

1. Click **Editor** .
2. Next to **Services**, click Add a service .
3. Select Tasks API and click **Add**.

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
- [Troubleshoot authentication and authorization issues](https://developers.google.com/workspace/tasks/troubleshoot-authentication-authorization)
- [Tasks API reference documentation](https://developers.google.com/workspace/tasks/v1/reference)
