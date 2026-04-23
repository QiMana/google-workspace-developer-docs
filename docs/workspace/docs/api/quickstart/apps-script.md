---
source: https://developers.google.com/workspace/docs/api/quickstart/apps-script
root: workspace
fetched_at: 2026-04-23T15:27:07.696Z
---

# Google Apps Script quickstart

Create a [Google Apps Script](../../../../apps-script/overview.md) that makes requests to the Google Docs API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](../../../guides/auth-overview.md) before [choosing the access credentials](../../../guides/create-credentials.md#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

In Apps Script, Google Workspace quickstarts use [Advanced Google services](../../../../apps-script/guides/services/advanced.md) to call Google Workspace APIs and handle some details of the authentication and authorization flow.

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
 * Prints the title of the sample document:
 * https://docs.google.com/document/d/195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE/edit
 * @see https://developers.google.com/docs/api/reference/rest/v1/documents/get
 */
function printDocTitle() {
  const documentId = "195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE";
  const doc = Docs.Documents.get(documentId, { includeTabsContent: true });
  console.log(\`The title of the doc is: ${doc.title}\`);
}
```

3. Click Save ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).
4. Click **Untitled project**, type **Quickstart**, and click **Rename**.

## Configure the script

### Enable the Google Docs API

Open the Apps Script project.

1. Click **Editor** .
2. Next to **Services**, click Add a service .
3. Select Google Docs API and click **Add**.

## Run the sample

In the Apps Script editor, click **Run**.

The first time you run the sample, it prompts you to authorize access:

1. Click **Review permissions**.
2. Choose an account.
3. Click **Allow**.

The script's execution log appears at the bottom of the window.

## Next steps

- [Google Apps Script Advanced Services documentation](../../../../apps-script/guides/services/advanced.md)
- [Try the Google Workspace APIs in the APIs explorer](../../../explore.md)
- [Troubleshoot authentication and authorization issues](../troubleshoot-authentication-authorization.md)
- [Docs API reference documentation](../reference/rest.md)
