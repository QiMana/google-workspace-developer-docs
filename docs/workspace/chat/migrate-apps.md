---
source: https://developers.google.com/workspace/chat/migrate-apps
root: workspace
fetched_at: 2026-04-23T15:25:29.384Z
---

# Migrate your Google Chat app

## Page Summary

- After a Google Workspace organization merger, Chat apps might need to be migrated to ensure continued functionality; this can often be avoided by adjusting administrative settings like allowlists.
- Migrating a Chat app involves a three-step process: setting up a new Cloud project in the merged organization, redeploying the app from this project, and replacing the original app in Chat spaces with the new one.
- The setup process includes creating a Cloud project, enabling necessary APIs (like the Google Chat API), and potentially configuring the OAuth consent screen for authorization.
- Redeployment involves migrating app logic, potentially including other services like Cloud Functions or Dialogflow agents, and configuring interactive features within the new Cloud project.
- After migration, the new app needs to be shared, added to relevant Chat spaces, and the old app should be removed and turned off to ensure a smooth transition for users.

If you merge Google Workspace organizations, you might need to migrate your Chat app so that it continues working.

Before migrating your Chat app, check with your organization's administrator to see if administrative settings are affecting it. Changing an administrative setting might restore full functionality to your Chat app and make migration unnecessary. For example, your Google Workspace administrator might have to add your Chat app to an allowlist, or might have to let users install Chat apps. For more information, see [Determine if Google Chat apps need to migrate after merging Google Workspace organizations](https://developers.google.com/workspace/chat/determine-chat-app-migration).

After you determine that you need to migrate your Chat app complete the following three-step process:

1. Set up the environment for your Chat app by creating a Google Cloud project in the merged organization, enabling APIs, and potentially configuring the OAuth 2.0 consent screen.
2. Redeploy your Chat app from the new Cloud project.
3. Add the recreated Chat app to Chat spaces or conversations, and turn off the original Chat app.

## Create a Cloud project in the merged organization and enable APIs

Creating a new Cloud project and enabling APIs for the Chat app in the merged Google Workspace organization makes sure that users and groups who you let access the Chat app can do so without error.

### Create a Cloud project

### Google Cloud console

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Create a Project**.
	[Go to Create a Project](https://console.cloud.google.com/projectcreate)
2. In the **Project Name** field, enter a descriptive name for your project.
	Optional: To edit the **Project ID**, click **Edit**. The project ID can't be changed after the project is created, so choose an ID that meets your needs for the lifetime of the project.
3. In the **Location** field, click **Browse** to display potential locations for your project. Then, click **Select**.
4. Click **Create**. The Google Cloud console navigates to the Dashboard page and your project is created within a few minutes.

### gcloud CLI

In one of the following development environments, access the Google Cloud CLI (`gcloud`):

- **Cloud Shell**: To use an online terminal with the gcloud CLI already set up, activate Cloud Shell.  
	[Activate Cloud Shell](https://console.cloud.google.com/?cloudshell=true)
- **Local Shell**: To use a local development environment, [install](https://cloud.google.com/sdk/docs/install) and [initialize](https://cloud.google.com/sdk/docs/initializing) the gcloud CLI.  
	To create a Cloud project, use the `gcloud projects create` command:
	```
	gcloud projects create PROJECT_ID
	```
	Replace PROJECT\_ID by setting the ID for the project you want to create.

### Enable APIs

All Chat apps are required to have the Google Chat API enabled. Depending on how your Chat app is built, you might need to enable other APIs. For example, if you [built your Chat app using Google Cloud Functions](https://developers.google.com/workspace/chat/migrate-apps), enable the Cloud Build API, Cloud Functions API, Pub/Sub API, Cloud Logging API, Artifact Registry API, and Cloud Run API. As a best practice, to ensure that the migrated app works, enable the same APIs in the new Cloud project that are enabled in the old Cloud project.

To enable an API, do the following:

### Google Cloud console

1. In the Google Cloud console, go to Menu \> **APIs & Services** \> **Library** \> **Google Workspace**.
	[Go to API Library](https://console.cloud.google.com/apis/library/browse?filter=category:gsuite)
2. Click the API that you want to turn on.
3. Click **Enable**.
4. To enable more APIs, repeat these steps.

### Google Cloud CLI

1. Install or open the [Google Cloud Command Line Interface (CLI)](https://cloud.google.com/cli).
2. Run the [`services enable`](https://cloud.google.com/sdk/gcloud/reference/services) command, specifying which API service to enable.
	```
	gcloud services enable API_SERVICE_ID
	```

### Configure the Chat API

In your new Cloud project, you must use the Chat API to specify your Chat app's name, description, and icon. To configure these details, see [Configure the Chat API](https://developers.google.com/workspace/chat/configure-chat-api)

### Configure the OAuth consent screen

It might be necessary to configure the OAuth consent screen for your Cloud project. If you previously used OAuth 2.0 for authorization, use the same authorization scopes of access.

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Branding**.
	[Go to Branding](https://console.developers.google.com/auth/branding)
2. If you have already configured the Google Auth platform, you can configure the following OAuth Consent Screen settings in [Branding](https://console.developers.google.com/auth/branding), [Audience](https://console.developers.google.com/auth/audience), and [Data Access](https://console.developers.google.com/auth/scopes). If you see a message that says **Google Auth platform not configured yet**, click **Get Started**:
1. Under **App Information**, in **App name**, enter an **App name**.
	2. In **User support email**, choose a support email address where users can contact you if they have questions about their consent.
	3. Click **Next**.
	4. Under **Audience**, select the user type for your app.
	5. Click **Next**.
	6. Under **Contact Information**, enter an **Email address** where you can be notified about any changes to your project.
	7. Click **Next**.
	8. Under **Finish**, review the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy) and if you agree, select **I agree to the Google API Services: User Data Policy**.
	9. Click **Continue**.
	10. Click **Create**.
	11. If you selected **External** for user type, add test users:
	1. Click **Audience**.
			2. Under **Test users**, click **Add users**.
			3. Enter your email address and any other authorized test users, then click **Save**.
4. If you're creating an app for use outside of your Google Workspace organization, click **Data Access** **\>** **Add or Remove Scopes**. We recommend the following best practices when selecting scopes:
	- Select the scopes that provide the minimum level of access required by your app. For a list of available scopes, see [OAuth 2.0 Scopes for Google APIs](https://developers.google.com/identity/protocols/oauth2/scopes).
		- Review the scopes listed in each of the three sections: non-sensitive scopes, sensitive scopes, and restricted scopes. For any scopes listed in the "Your sensitive scopes" or "Your restricted scopes" sections, try to identify alternative non-sensitive scopes to avoid unnecessary additional reviews.
		- Some scopes require additional reviews by Google. For apps used only internally by your Google Workspace organization, scopes aren't listed on the consent screen and use of restricted or sensitive scopes doesn't require further review by Google. For more information, see [Scope categories](https://developers.google.com/workspace/guides/configure-oauth-consent#scope_categories).
5. After selecting the scopes required by your app, click **Save**.

For more information about configuring OAuth consent, see [Get started with the Google Auth platform](https://support.google.com/cloud/answer/15544987).

## Redeploy your Chat app to the new Cloud project

Depending on whether your Chat app is built with Apps Script, AppSheet, or another connection type, like Python or Java, redeploying your Chat app differs a little. In either case, you don't need to recreate all of your code, but you do need to make some changes.

### Migrate the Chat app logic

Depending on the [architecture of your Chat app](https://developers.google.com/workspace/chat/structure#architecture_styles), you might need to migrate other services to the new Cloud project:

- For HTTP apps, you also need to migrate the rest of the app logic that was built using Cloud Run functions, Cloud Run, or App Engine.
- For conversational Chat apps that use natural language, you also need to migrate the Dialogflow agents.
- For Chat apps that are built behind a firewall, you also need to migrate the Pub/Sub topics.

### Configure interactive features in the new Cloud project

To redeploy your Chat app that's built with a language like Python or Java, configure the Chat app in your new Cloud project.

To configure interactive features, see [Receive and respond to user interactions](https://developers.google.com/workspace/chat/receive-respond-interactions).

### Redeploy an Apps Script Chat app

To redeploy your Chat app that's built with Apps Script, change the Cloud project number that the Apps Script project is associated with to the project number that belongs to your new Cloud project. Then, copy your Apps Script deployment ID and paste it into the Chat app configuration page in the Google API Console.

#### Copy your Cloud project number

1. In the Google API Console, go to Menu \> **IAM & Admin** \> **Settings**.
	[Go to IAM & Admin Settings](https://console.developers.google.com/iam-admin/settings)
2. In the **Project number** field, copy the value.

#### Set your Google Cloud project number in your Apps Script project

1. Go to Apps Script.
	[Go to Apps Script](https://script.google.com/)
2. In the Chat app Apps Script project, click **Project Settings** .
3. Under **Google Cloud Platform (GCP) Project**, click **Change project**.
4. In **GCP project number**, paste the Google Cloud project number.
5. Click **Set project**.

#### Copy your Apps Script project's deployment ID

1. In the top-right of Apps Script, click **Deploy > Manage deployments**.
2. Under **Deployment ID**, click **Copy**.
3. Click **Done**.

#### Reconfigure and redeploy your Chat app

1. In the Google API Console, search for "Google Chat API" and click **Google Chat API**, then click **Manage**.
	[Go to Chat API](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Click the **Configuration** tab, and enter the following required information:
	- **App name**: The name that people use when interacting with your Chat app.
		- **Avatar URL**: An HTTPS URL pointing to a square graphics image (for example, PNG or JPEG), at least 128x128, that appears as the avatar for your Chat app.
		- **Description**: A description of the Chat app's intended purpose which appears below your Chat app's name.
3. To turn on interactive features, click the **Enable interactive features** toggle that let users interact with your Chat app:
4. Under Connection settings, select **Apps Script project**.
5. In the **Deployment ID** field, paste the deployment ID that you previously copied.
6. To complete the rest of the configuration, see the table in the [Configure the Chat app in the new Cloud project](#configure-chat-app-new-project)
7. Click **Save**.

### Redeploy an AppSheet Chat app

To redeploy your Chat app that's built with AppSheet in your new Cloud project, [copy the app to the new Cloud project](https://support.google.com/appsheet/answer/12491039?sjid=7979440955017621437-NC).

### Update the service account

If your Chat app authenticates as an app and uses a service account to make calls to Google APIs, update the Chat app's service account details. For more information, see [Authenticate as a Chat app](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).

### Share your Chat app

Before your Chat app becomes available to users in the new organization, your administrator might have to manually allow access to the Chat app. For more information, refer to [Configure access for Google Workspace organizations](https://developers.google.com/workspace/marketplace/how-to-publish#configure-access) in the Google Workspace Marketplace documentation.

## Switch to the new Chat app

Now that the Chat app is migrated to the new organization, it's time to publicize it. Add it into Chat spaces or direct messages, and then remove the old Chat app from them so that people only message the migrated Chat app.

### Add the new Chat app to Chat spaces

1. Go to Chat.
	[Go to Chat](https://chat.google.com/)
2. Click a direct message or space.
3. Click the drop-down next to the name of the space or person, and then select **Apps & integrations**.
4. Click **Add apps**.
5. Enter the name of the app, select the app from the list, and then click **Add**.
6. Repeat these steps for every space or direct message that you want to add the Chat app to.

### Remove the old Chat app from Chat spaces

1. Go to Chat.
	[Go to Chat](https://chat.google.com/)
2. Click a direct message or space.
3. Click the drop-down next to the name of the space or person, and then select **Apps & integrations**.
4. Next to the old, un-migrated Chat app, click **More options** , and then click **Remove from space**.
5. Repeat these steps for every space or direct message that you want to remove the old Chat app from.

### Turn off the old Chat app

To prevent users from using the old Chat app and to encourage them to use the new Chat app, [turn off the old Chat app and unpublish it from Google Workspace Marketplace](https://developers.google.com/workspace/chat/turn-off-app).
