---
source: https://developers.google.com/workspace/marketplace/configure-oauth-consent-screen
root: workspace
fetched_at: 2026-04-23T15:30:09.577Z
---

# Configure OAuth

## Page Summary

- When publishing your app, you must complete four main tasks related to authentication and authorization: fill out the OAuth consent screen, create your OAuth 2.0 credential, configure all necessary scopes, and submit your app for OAuth verification (if applicable).
- Scopes define the level of access your app has to user data and must be configured in the OAuth consent screen, Google Workspace Marketplace SDK, and the manifest (if applicable).
- OAuth verification, a separate process from app review and required for public apps using sensitive or restricted scopes, ensures your app's consent screen and data usage are appropriate.
- Before publishing your app, ensure billing is enabled in your Google Cloud project, the app is built and tested, you understand authentication & authorization concepts, and your Google Cloud project is updated for Apps Script projects (if applicable).
- During the OAuth verification process, you might be required to provide a demo video and undergo a security assessment depending on the scopes used by your application.

When you publish your app, there are three main tasks to complete for authentication and authorization:

## Understand OAuth scopes

To define the level of access granted to your app, you need to identify and declare *authorization scopes*. An authorization scope is an OAuth 2.0 URI string that contains the Google Workspace app name, what kind of data it accesses, and the level of access. Scopes are your app's requests to work with Google Workspace data, including users' Google Account data.

When your app is installed, a user is asked to validate the scopes used by the app. Generally, you should choose the most narrowly focused scope possible and avoid requesting scopes that your app doesn't require. Users more readily grant access to limited, clearly described scopes.

Provide the complete list of OAuth scopes that your app requires. The scopes you add to each location must match and are used in the following ways:

- Scopes added to the OAuth consent screen are used for OAuth verification.
- Scopes added to the [Google Workspace Marketplace SDK](./enable-configure-sdk.md#oauth-scopes) are used for domain-wide and individual installs to authorize your app when it's installed from the Google Workspace Marketplace.
- Scopes added to the manifest are necessary for your app to function properly.

For example, if you publish an app that includes a Google Sheets add-on and a Google Docs add-on, each add-on's Google Apps Script manifest only includes the scopes specific to that add-on. In your Google Cloud project, the OAuth consent screen and the Marketplace SDK include the scopes for both add-ons.

### Fix unverified OAuth scopes

If you have a new app, a saved draft, or published public app with unverified sensitive or restricted scopes, you see the following error message when editing the app in the Marketplace SDK:

`OAuth verification is required for sensitive or restricted scopes. You can still save your app as a draft, but you're not able to publish your draft app listing.`

For more information, see [Specify the level of access that your app requires](./enable-configure-sdk.md#oauth-scopes).

To work around this error, you can do the following:

- Make changes to an app listing with unverified sensitive or restricted scopes and save the listing as a draft.
- Publish the app when no new unverified sensitive or restricted scopes are added.
- Publish the app when only removing unverified sensitive or restricted scopes.

For some workarounds users might be shown the "unverified app" screen. For more information, see [Unverified apps](https://support.google.com/cloud/answer/7454865).

To fix this error, submit your app for [OAuth verification](#oauth-verification).

## Prerequisites

- In a Cloud project, [enable billing](https://cloud.google.com/billing/docs/how-to/modify-project#enable_billing_for_a_project).
- Build and test an app.
- [Learn about authentication and authorization](../guides/auth-overview.md).
- If you built your app in Apps Script, update your Cloud project for [Apps Script projects](../../apps-script/guides/cloud-platform-projects.md#standard_properties).

## 1\. Fill out the OAuth consent screen

The *OAuth consent screen* is a prompt that tells users who's requesting access to their data and what kind of data users are allowing your app to access.

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
		- Some scopes require additional reviews by Google. For apps used only internally by your Google Workspace organization, scopes aren't listed on the consent screen and use of restricted or sensitive scopes doesn't require further review by Google. For more information, see [Scope categories](../guides/configure-oauth-consent.md#scope_categories).
5. After selecting the scopes required by your app, click **Save**.

For more information about configuring OAuth consent, see [Get started with the Google Auth platform](https://support.google.com/cloud/answer/15544987).

## 2\. Create your OAuth 2.0 credential

Depending on how you built your app, there are two different ways to create your OAuth 2.0 credentials.

### If you built your app in Apps Script

Switch your Apps Script project from its default Cloud project to your new, standard project. For more information, see [Switch to a different standard Cloud project](../../apps-script/guides/cloud-platform-projects.md#switch_to_a_different_standard).

After you associate your Apps Script project with the Cloud project, your OAuth 2.0 credential is automatically created.

### If you didn't use Apps Script to build your app

To create your OAuth 2.0 credential, see [OAuth client ID credentials](../guides/create-credentials.md#oauth-client-id).

## 3\. Submit for OAuth verification (public apps only)

If your app uses Google APIs to access Google user data, it might be subject to the verification process before you publish your app.

### Before you submit

While you should be able to complete steps one and two on this page, you might not be able to submit your app for OAuth verification until you complete some additional Marketplace publication steps that take place concurrently with this process.

For example, to create a Google Classroom add-on you must create a draft app listing in the Marketplace SDK using the steps on [Configure your app in the Google Workspace Marketplace SDK](./enable-configure-sdk.md#enable-marketplace-sdk) . You can then use the draft app listing to create the demo video required for OAuth verification. Once verification is achieved, you can then submit your draft app listing for app review.

For an overview of the submission steps. see [Publish your app](./how-to-publish.md#publish-steps)

### OAuth verification review

If your app uses sensitive or restricted scopes, then it must undergo an OAuth verification review process.

- For OAuth verification, you must submit a demo video demonstrating the journey or flow that explains the use of the requested scopes or data to users. For more information, see [Demo video](https://support.google.com/cloud/answer/13804565).
- If your app uses restricted scopes, it might also need to go through a [security assessment](https://support.google.com/cloud/answer/13465431).
- For more information, see [OAuth App Verification Help Center](https://support.google.com/cloud/answer/13463073).

To submit for verification, follow these steps:

1. In the Google API Console, go to Menu \> **APIs & Services** \> **OAuth consent screen**.
	[Go to OAuth consent screen](https://console.developers.google.com/apis/credentials/consent)
2. Click **Project selector**, and select your project.
3. Click **Edit app**
4. Enter the required information, and click **Submit for verification**.
5. In the **Verification required** dialog, enter the appropriate justifications, and then click **Submit** to start the verification process.

If you update your app to use different scopes that are sensitive or restrictive, you must submit your app for OAuth verification again. You don't need to send it for app review again.

## How OAuth verification differs from app review

OAuth verification is a separate process from app review. It focuses on making sure that your consent screen accurately represents your app's identity and intent, and makes sure your app doesn't misuse user data. Your app listing cannot be approved until your app's OAuth verification is complete. For more information about OAuth verification, see [OAuth FAQ](https://support.google.com/cloud/answer/13463817).

App review focuses on the information that you provide in the [Google Workspace Marketplace SDK](./enable-configure-sdk.md), and the features and usability of your app. To learn more about the app review criteria, see [App review process and requirements for the Google Workspace Marketplace](./about-app-review.md).

## Related topics

- [Configure the OAuth consent screen and choose scopes](../guides/configure-oauth-consent.md)
- [Common reasons an app doesn't pass review](./about-app-review.md#reasons)
