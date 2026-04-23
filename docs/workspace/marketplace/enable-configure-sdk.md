---
source: https://developers.google.com/workspace/marketplace/enable-configure-sdk
root: workspace
fetched_at: 2026-04-23T15:30:09.813Z
---

# Configure your app in the Google Workspace Marketplace SDK

## Page Summary

- The Google Workspace Marketplace SDK enables developers to manage app configuration and availability on the Google Workspace Marketplace, including visibility, installation settings, and integrations.
- App visibility, once set as public or private, is permanent and cannot be changed.
- Developers must provide accurate contact and app details, including trader status for EEA users, for a trustworthy store listing.
- Google Workspace administrators have control over app visibility and installation within their organizations.
- App usage analytics can be tracked by linking the app to a Google Analytics account.

This page explains how to use the Google Workspace Marketplace SDK to configure and manage your app on the [Google Workspace Marketplace](https://workspace.google.com/marketplace/).

To make your app available for use, you need to set it up in the Marketplace SDK. The Marketplace SDK is a toolkit that lets you create and control your app on the Marketplace. You use the Marketplace SDK to manage Marketplace settings, such as the following:

- Whether your app is available for a specific Google Workspace organization (a *private* app), or for all Marketplace users (a *public* app)
- The types of Marketplace users who can install your app
- Which Google Workspace application(s) your app integrates with
- The OAuth scopes that your app requires
- Information about who built and maintains the app

Regardless of whether you're publishing your app privately or publicly, you must use the Marketplace SDK to manage your app on the Marketplace.

## Enable the Marketplace SDK

If you haven't already done so, in your Google Cloud project, enable the [Marketplace SDK](https://console.cloud.google.com/apis/library/appsmarket-component.googleapis.com).

### Open your Cloud project in the Google Cloud console

If it's not open already, open the Cloud project that you intend to use for this sample:

1. In the Google Cloud console, go to the **Select a project** page.
	[Select a Cloud project](https://console.cloud.google.com/projectselector2)
2. Select the Google Cloud project you want to use. Or, click **Create project** and follow the on-screen instructions. If you create a Google Cloud project, you might need to [turn on billing for the project](https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project).

### Turn on the Marketplace SDK

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, enable the Google Workspace Marketplace SDK.
	[Enable the SDK](https://console.cloud.google.com/flows/enableapi?apiid=appsmarket-component.googleapis.com)

## Determine the configuration settings for your app

The following reference describes the settings available on the **App Configuration** page of the Marketplace SDK.

### Choose who can view and install your app

When you configure your app, you specify the users who can access your app using the following settings:

- [**App visibility**](#app-visibility): If you're publishing an app within a Google Workspace organization, whether your app listing is unlisted, visible to all users in your organization, or anyone who uses Google Workspace.
- [**Installation settings**](#installation-settings): Whether the app can only be installed by Google Workspace administrators.

Regardless of the settings you specify in your app listing, users that belong to a Google Workspace organization might not be able to discover, install, or use your app based on settings set by their administrators. Administrators can impact your app's availability in the following ways:

- Control whether their users can view apps on the Marketplace, and install apps on behalf of their users.
- Use an allowlist to manage and curate apps for their organization. If you're developing an app for an organization that uses allowlists, check with an administrator about adding the app to the allowlist.
- Turn off certain Google Workspace applications, such as removing access to Google Chat, Google Chat apps, or both. In these cases, users won't be able to install your app from the Marketplace.

To learn how administrators manage access to Marketplace, see the [Marketplace Admin Help documentation](https://support.google.com/a/topic/27380).

#### App visibility settings

You see the **App Visibility** option if you're using a Google Workspace account (an account created by your work or school organization). If you're using a consumer account (an account ending with "@gmail.com"), you can only publish publicly.

- **Public**: The app can be found and installed by people outside your domain. If you choose public visibility, Google reviews and approves your app listing before it's published.
- **Private**: Only people within your domain can find and install your app.

If you choose to publish as **Unlisted**, the app listing doesn't show in browse or search results. Users can only access the app's store page with the direct URL.

If you want to limit which countries and regions your app is available in, you set that up in the **Distribution** section when you [create the store listing](https://developers.google.com/workspace/marketplace/create-listing#publish_an_app).

#### App installation settings

The **Installation Settings** option determines if users or Google Workspace admins can install your app from your [store listing page](https://developers.google.com/workspace/marketplace/create-listing) on the Marketplace.

- **Individual + Admin Install (default)**: The app can be installed by individual users or by admins for their domain, organizational unit, or a group of users. A user's domain policies might prevent them from installing an app even if individual installs are enabled.
- **Admin Only Install**: The app can only be installed by admins for their domain, organizational unit, or a group of users. Your app only shows up in Google Workspace Marketplace search results for admins and people who aren't logged in to their Google Account. Choose this option if your app requires domain installation.

#### Common installation and visibility settings

The following table summarizes some of the common app configurations options for installation and visibility:

<table><tbody><tr><th>Intended app users</th><th><strong>App visibility</strong> setting</th><th><strong>App installation</strong> setting</th><th>Who can install my app?</th><th>Who can use my app?</th></tr><tr><td><b>For apps built for a Google Workspace organization</b></td><td colspan="5"></td></tr><tr><td>Specific users in your organization</td><td><strong>Private</strong> and <strong>Unlisted</strong></td><td><strong>Individual + Admin Install</strong></td><td>If permitted, anyone in your organization who has the app listing URL.</td><td>If permitted, anyone in your organization who has the app listing URL.</td></tr><tr><td>Your organization</td><td><strong>Private</strong></td><td><strong>Individual + Admin Install</strong></td><td>If permitted, anyone in your organization.</td><td>If permitted, anyone in your organization.</td></tr><tr><td>Your organization</td><td><strong>Private</strong></td><td><strong>Admin only</strong></td><td>Administrators</td><td>Users who have the app installed by their administrator.</td></tr><tr><td><b>For apps available to users outside a specific Google Workspace organization</b></td><td colspan="5"></td></tr><tr><td>Users in Google Workspace organizations</td><td><strong>Public</strong></td><td><strong>Admin only</strong></td><td>Administrators</td><td>Users who have the app installed by their administrator.</td></tr><tr><td>All Google Workspace users</td><td><strong>Public</strong></td><td><strong>Individual + Admin Install</strong></td><td><ul><li>Anyone who uses Google Workspace applications for personal use.</li><li>If permitted, users in Google Workspace organizations.</li></ul></td><td><ul><li>Anyone who uses Google Workspace applications for personal use.</li><li>If permitted, users in Google Workspace organizations.</li></ul></td></tr></tbody></table>

### Identify how your app integrates with Google Workspace applications

Choose the Google Workspace services your app or add-on is designed to work with, such as a Google Workspace add-on or a Google Chat app. You must choose at least one option. In some cases, you can include multiple app integrations in your app listing. See [List app integrations together](https://developers.google.com/workspace/marketplace/list-multiple-app-integrations).

Depending on which app integrations you choose, you might need to provide more information and enable relevant APIs in your Google Cloud project. The following table describes the additional setup needed for each:

### Google Workspace add-on

To publish a Google Workspace add-on, you must provide the add-on's deployment ID.

To find the deployment ID in Apps Script, follow these steps:

1. Open your Google Workspace add-on in the Apps Script editor.
2. Click **Deploy \> Manage deployments**.
3. Under the deployment ID, click **Copy**.

To find the deployment ID for an HTTP add-on, follow these steps:

1. On the App Configuration page under "Google Workspace add-on," click **HTTP or other deployments \> Select Deployment**.
2. Select the deployment you want to publish.
3. Click **Select**.

### Editor add-on (Docs, Sheets, Slides, Forms)

To publish an Editor add-on, you must provide the *project script ID* and *version* you want to publish.

To find the project script ID, follow these steps:

1. Open the add-on in the Apps Script editor.
2. At the left, click **Project settings** .
3. Under "IDs," copy the script ID.

To find the version, follow these steps:

1. Open the add-on in the Apps Script editor.
2. At the top right, click **Deploy \> Manage deployments**.
3. The version number is under "Configuration."

### Google Chat app

To publish an [interactive Google Chat app](https://developers.google.com/workspace/chat/interact-users-overview), see the following documentation:

- If you built your Chat app as a add-on, you must configure add-on settings in the Chat API. For steps, see [Configure a Chat app](https://developers.google.com/workspace/add-ons/chat/configure) in the Google Workspace add-on documentation.
- If you built your Chat app using interaction events, you must configure interaction event settings in the Chat API. For steps, see [Receive and respond to interaction events](https://developers.google.com/workspace/chat/receive-respond-interactions#configure) in the Chat API documentation.
- If you built your Chat app with AppSheet's automatic configuration, publish your Chat app using the steps described in the AppSheet documentation, [Share your Chat app using automatic configuration](https://support.google.com/appsheet/answer/12857667#publish-automatic).

### Drive app

To publish a Drive app, you must enable and configure the [Google Drive API](https://console.cloud.google.com/apis/library/drive.googleapis.com).

### Web app

To publish a web app, you must provide its *universal nav URL*, the URL that points to the web app from the Google apps menu . Your web app must be in production and fully functional.

When you fill out the Store Listing page, you must provide additional icons sized to 96x96 and 48x48 pixels.

If you built your web app in Apps Script, follow these steps to get the universal nav URL:

1. Open your Google Workspace add-on in the Apps Script editor.
2. Click **Deploy \> New deployment**.
3. Under "Select type," click **Web app**.
4. Fill out the options and click **Deploy**.
5. Click **Copy**.

### Specify the level of access that your app requires

Under **OAuth Scopes**, provide a complete list of the OAuth 2.0 scopes your app requires. The OAuth scopes you enter here should match what you display in your [OAuth consent screen](https://developers.google.com/workspace/marketplace/configure-oauth-consent-screen#oauth-consent-screen) and if applicable, Apps Script manifest.

If you include more than one app integration, make sure you add the scopes from each one to the Marketplace SDK App Configuration page and your OAuth consent screen.

Always use the narrowest scopes possible (for example, don't include a full Drive scope if you only need a read-only scope).

For Apps Script projects, see [Authorization scopes](https://developers.google.com/apps-script/concepts/scopes) for more details.

### Provide information about the app developer

Under **Developer Information**, fill out contact information and other details. These fields appear on your app's [store listing](https://developers.google.com/workspace/marketplace/create-listing) page.

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><b>Trader status</b></td><td><p>Due to consumer protection laws, consumers based in the European Economic Area (EEA) must be informed whether a merchant on the Marketplace is a <i>trader</i> or a <i>non-trader</i>:</p><ul><li><b>Trader</b>: A trader is a person who acts for purposes relating to a trade, business, craft, or profession; or in the name of or on behalf of a trader.</li><li><b>Non-trader</b>: A non-trader (consumer) is a person who acts for non-professional purposes.</li></ul><p>If unspecified, "Trader status unspecified" appears on your app's <a href="https://developers.google.com/workspace/marketplace/create-listing">store listing</a> page.</p></td></tr><tr><td><b>Developer name</b></td><td>The name to display as the author of the app. If you are a trader, provide your trading name or legal name.</td></tr><tr><td><b>Developer mailing address</b></td><td><p>Required for traders. Not collected for non-traders.</p><p>The location of your business. Enter a valid mailing address where you can be contacted.</p></td></tr><tr><td><b>Developer website URL</b></td><td>The website describing you (or your organization) as the developer.</td></tr><tr><td><b>Developer email</b></td><td><p>The email address to use as a point of contact. It's not included in your app listing. Make sure this email address is kept up to date as it's used:</p><ul><li>If Google needs to contact the developer—for example, during the app review process.</li><li>To send feedback from Editor add-ons if a Report Issue URL isn't provided on the Store Listing page.</li></ul></td></tr><tr><td><b>Application website URL</b></td><td>Optional. The website that further describes your app.</td></tr></tbody></table>

## Save your app configuration settings in the Marketplace SDK

Using the information from the [previous section](#app-configuration-settings), save your app configuration in the Marketplace SDK:

1. In the Google Cloud console, go to the Marketplace SDK **App Configuration** page:
	[Go to Marketplace SDK Configuration page](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk)
2. Fill out each section based on what you determined in the [previous section](#app-configuration-settings).
3. Click **Save Draft**.
4. (Optional) You can [get analytics on app usage](https://developers.google.com/workspace/marketplace/use-analytics) in [Google Analytics](https://analytics.google.com/). To do so, add a [Google Analytics ID](https://support.google.com/analytics/answer/9304153) in the Marketplace SDK.
	1. Go to the **Analytics** tab.
		2. Enter your Google Analytics ID.
		3. Click **Save**.

## Troubleshoot

This section describes common problems you might encounter.

### Required permissions are missing when publishing apps to the Marketplace

You're not able to publish apps on the Marketplace as attempts to configure the application on the App Configuration page of the Marketplace SDK fail with the following error message:

```
You are missing at least one of the following required permissions: Project workspacemarketplace.appconfiguration.view / workspacemarketplace.appconfiguration.update
```

This error occurs when the Marketplace SDK API is enabled and when using an IAM role other than `Editor` or `Owner`.

To resolve the error, implement one of the following solutions:

- Ask the project owner to assign the `roles/appmetadata.workspaceMarketplaceAppConfigurationAdmin` role to the account with the missing permissions to allow them to configure and manage the app in the [Marketplace SDK](https://developers.google.com/workspace/marketplace/enable-configure-sdk).
- Ask the project owner to add missing permissions to a custom role through the [**IAM & Admin** > **Roles**](https://console.cloud.google.com/iam-admin/roles) page in the Google Cloud console. Then, assign the custom role to the account with the missing permissions.
- Primitive `roles/editor` or `roles/owner` can be used for publishing apps. However, the [Use IAM securely](https://cloud.google.com/iam/docs/using-iam-securely) documentation considers this bad practice as one cannot easily restrict edit access to other resources in the project.
