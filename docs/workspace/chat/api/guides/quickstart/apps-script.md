---
source: https://developers.google.com/workspace/chat/api/guides/quickstart/apps-script
root: workspace
fetched_at: 2026-04-23T15:24:59.731Z
---

# Google Apps Script quickstart

## Page Summary

- This quickstart demonstrates how to set up and run a Google Apps Script that interacts with the Google Chat API to list spaces.
- Before running the script, you need to configure your Google Cloud project, enable the Chat API, and set up OAuth consent.
- The script utilizes the Google Chat API client libraries for authentication and authorization and provides a simplified approach suitable for testing environments.
- You need a Google Workspace account and a Google Cloud project to complete the steps outlined in the guide.
- To run the script, you will need to copy your Cloud project number, link it to the Apps Script project, enable the Google Chat API, and authorize access.

Create a [Google Apps Script](https://developers.google.com/apps-script/overview) that makes requests to the Google Chat API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](https://developers.google.com/workspace/guides/auth-overview) before [choosing the access credentials](https://developers.google.com/workspace/guides/create-credentials#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

In Apps Script, Google Workspace quickstarts use [Advanced Google services](https://developers.google.com/apps-script/guides/services/advanced) to call Google Workspace APIs and handle some details of the authentication and authorization flow.

## Objectives

- Configure the environment.
- Create and configure the script.
- Run the script.

## Prerequisites

- [A Google Cloud project](https://developers.google.com/workspace/guides/create-project).
- A Business or Enterprise [Google Workspace](https://support.google.com/a/answer/6043576) account with access to [Google Chat](https://workspace.google.com/products/chat/).

## Configure your Cloud project

If you're using a new Google Cloud project to complete this quickstart, you need to configure it and add yourself as a test user. If you've already completed these steps for your Cloud project, skip to the next section.

### Open your Cloud project in the Google Cloud console

If it's not open already, open the Cloud project that you intend to use for this sample:

1. In the Google Cloud console, go to the **Select a project** page.
	[Select a Cloud project](https://console.cloud.google.com/projectselector2)
2. Select the Google Cloud project you want to use. Or, click **Create project** and follow the on-screen instructions. If you create a Google Cloud project, you might need to [turn on billing for the project](https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project).

### Turn on the Chat API

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Chat API.
	[Enable the API](https://console.cloud.google.com/flows/enableapi?apiid=chat.googleapis.com)

### Configure the OAuth consent screen

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
4. For now, you can skip adding scopes. In the future, when you create an app for use outside of your Google Workspace organization, you must change the **User type** to **External**. Then add the authorization scopes that your app requires. To learn more, see the full [Configure OAuth consent](https://developers.google.com/workspace/guides/configure-oauth-consent) guide.

### Configure the Google Chat app

To call the Google Chat API, you must configure a Google Chat app. For any write requests, Google Chat attributes the Google Chat app in the UI using the following information.

1. In the Google API Console, go to the Chat API **Configuration** page:
	[Go to Chat API Configuration page](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Under **Application info**, enter the following information:
	1. In the **App name** field, enter `Chat API quickstart app`.
		2. In the **Avatar URL** field, enter `https://developers.google.com/chat/images/quickstart-app-avatar.png`.
		3. In the **Description** field, enter `Quickstart for calling the Chat API`.
3. Under **Interactive features**, click the **Enable interactive features** toggle to the off position to disable interactive features for the Chat app.
4. Click **Save**.

## Create the script

1. Create a new script in the Apps Script editor by going to [script.google.com/create](https://script.google.com/create).
2. Replace the contents of the script editor with the following code:

```
/**
 * This quickstart sample shows how to list spaces with user credential
 *
 * It relies on the OAuth2 scope 'https://www.googleapis.com/auth/chat.spaces.readonly'
 * referenced in the manifest file (appsscript.json).
 */
function listSpaces() {
  // Initialize request argument(s)
  // Filter spaces by space type (SPACE or GROUP_CHAT or DIRECT_MESSAGE)
  const filter = 'space_type = "SPACE"';

  // Iterate through the response pages using page tokens
  let responsePage;
  let pageToken = null;
  do {
    // Request response pages
    responsePage = Chat.Spaces.list({
      filter: filter,
      pageToken: pageToken,
    });
    // Handle response pages
    if (responsePage.spaces) {
      for (const space of responsePage.spaces) {
        console.log(space);
      }
    }
    // Update the page token to the next one
    pageToken = responsePage.nextPageToken;
  } while (pageToken);
}
```

3. Click Save ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).
4. Click **Untitled project**, type **Quickstart**, and click **Rename**.

## Configure the script

### Copy the Cloud project number

1. In the Google API Console, go to Menu \> **IAM & Admin** \> **Settings**.
	[Go to IAM & Admin Settings](https://console.developers.google.com/iam-admin/settings)
2. In the **Project number** field, copy the value.

### Link your Google Cloud project

1. Open the Apps Script project.
2. Click **Project Settings** .
3. Under **Google Cloud Platform (GCP) Project**, click **Change project**.
4. In **GCP project number**, paste the Google Cloud project number.
5. Click **Set project**.

### Enable the Google Chat API

Open the Apps Script project.

1. Click **Project Settings** .
2. Under **General settings**, enable **Show "appsscript.json" manifest file in editor**.
3. Click **Editor** , select the file `appscript.json`, and replace the contents with the following code:

```
{
  "timeZone": "America/New_York",
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "oauthScopes": ["https://www.googleapis.com/auth/chat.spaces.readonly"],
  "chat": {},
  "dependencies": {
    "enabledAdvancedServices": [
      {
        "userSymbol": "Chat",
        "version": "v1",
        "serviceId": "chat"
      }
    ]
  }
}
```

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
