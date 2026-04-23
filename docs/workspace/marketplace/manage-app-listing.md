---
source: https://developers.google.com/workspace/marketplace/manage-app-listing
root: workspace
fetched_at: 2026-04-23T15:30:10.316Z
---

# Update or unpublish an app listing

## Page Summary

- This guide explains how to update, unpublish, or make changes to your app's listing on the Google Workspace Marketplace.
- You can update your app's configuration details, store listing information, and manage OAuth scopes through the Google Cloud console.
- Draft functionality allows you to preview and test changes before publishing them to the live marketplace.
- If you move your app's Google Cloud project to a different organization, you'll need to replicate the app in the new organization's project for them to access it.
- To change ownership, modify the Google Cloud project's owners or contact your organization's administrator if you don't have the necessary permissions.

This page describes how to update or unpublish your app's listing in Google Workspace Marketplace. Make sure you're using the Google Cloud project for your app.

## Update your app listing

To update the configuration or details of your app listing, follow these steps:

1. In the Google Cloud console, go to Menu \> **APIs & Services** \> **Google Workspace Marketplace SDK** \> **App Configuration**.
	[Go to App Configuration](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk)
2. On the **App Configuration** tab, update your configuration details, and then click **Save**.
3. On the **Store Listing** tab, make your changes, and then click **Publish**.

### Add OAuth scopes

If you add OAuth scopes, you might need to file a new request for OAuth verification. If you update your listing to use the new scopes before they're approved, users are shown the unverified app screen. Quota limits are applied until the new OAuth verification request is approved. To learn more, see [Unverified apps](https://support.google.com/cloud/answer/7454865).

### Move your listing to a different organization

If you move the Google Cloud project of a private, published app from its original organization to a different organization, the app remains associated with and accessible by the original organization.

To give the new organization access to the app, you need to replicate the app and its listing in a new Google Cloud project using an account that belongs to the new organization.

### Change ownership of your listing

To change the ownership of your listing, you must modify the owners of your listing's Google Cloud project.

If you're a Cloud project owner, you can add or change owners for your Google Cloud project directly. For steps about modifying owners of a Cloud project, visit [Manage access to projects, folders, and organizations](https://cloud.google.com/iam/docs/granting-changing-revoking-access#using_the_console_name_short).

If you're not a Cloud project owner or cannot modify access to the Cloud project, contact an administrator for your organization to request that they modify or transfer ownership. [Learn how to find your administrator](https://support.google.com/a/answer/6208960).

## Update your app listing with drafts

You can make changes to your app listing and save them as a draft. This lets you preview and test the changes before publishing them. While your changes are under review, the original app listing remains available on the Google Workspace Marketplace.

To update the configuration or details of your app listing, follow these steps:

1. In the Google Cloud console, go to Menu \> **APIs & Services** \> **Google Workspace Marketplace SDK** \> **App Configuration**.
	[Go to App Configuration](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk)
2. Update your configuration details, and then click **Save Draft**. This creates a draft visible only to you.
	If the app was previously published, a dialog appears stating the draft was saved along with a link to the **Store Listing** tab.
3. On the **Store Listing** tab, make your changes, and then click **Save Draft**.
	The **Store Listing** tab displays the message **You're viewing a draft**.
4. To preview and test your draft app listing, you must add your email address to the **Draft Tester Email Addresses** field in the **Draft Tester** section on the **Store Listing** tab. You can also add other draft testers. For more information, see [Test your draft](#test-draft).
5. To publish your draft, click **Publish**.
	1. If **Submit for review** is displayed, your changes require a review before publishing. For more information, see [Actions that trigger a review](#trigger-review).
		2. To begin the review process, click **Submit for review**. After you submit changes for review, you can't edit your app listing until the review is complete but you can [cancel the review](#cancel-review) of your app listing.

If the review succeeds, your live app listing is automatically updated with the draft changes.

If the review fails:

- Your existing app listing isn't updated and the **Store Listing** tab displays the message **The draft didn't pass review and wasn't published**.
- Your existing app listing remains unchanged.
- You receive an email message describing what needs improvement.
- You can edit your draft app listing to address the issues and resubmit your changes for review.
- Alternatively, you can use the **More Actions** menu and click **Discard draft** to delete the draft.

### Actions that trigger a review

If you update certain fields or make additions to your existing public app listing, your changes require a manual review before publishing.

Reviews are required when you do the following:

- Add a new extension type by checking additional boxes in the **App Integrations** section on the **App Configuration** tab. For more information, see [Identify how your app integrates with Google Workspace applications](./enable-configure-sdk.md#choose-ws-apps).
- Modify any field in the **App Details** section on the **Store Listing** tab. This includes the **Language**, **Application name**, **Short description**, or **Detailed description** fields. For more information, see [Create a store listing](./create-listing.md).

### Cancel a review

You can cancel an app listing that's been submitted for review. If you cancel the review, your app returns to its draft state. The original app listing remains available on the Google Workspace Marketplace.

To cancel the review of your app listing, follow these steps:

1. In the Google Cloud console, go to Menu \> **APIs & Services** \> **Google Workspace Marketplace SDK** \> **Store Listing**.
	[Go to Store Listing](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk_publish)
2. Click **Cancel Review**.

Submitting your app listing for review after canceling might result in an error. To resolve this error, wait before attempting to submit your request again.

### Status messages

As you create, edit, and publish app listings, the Google Workspace Marketplace presents messages on the **Store Listing** tab that vary depending on the state of your app listing and whether you have a draft. The following table describes the most common status messages:

<table><tbody><tr><th colspan="2">Status message</th></tr><tr><td><strong>You're viewing a draft</strong></td><td><p>You saved changes to the <strong>App Configuration</strong> or <strong>Store Listing</strong> tabs.</p><p>If you're updating a published app listing, the app no longer matches the published app listing. To reset the settings so that they match the published app listing, use the <strong>More Actions</strong> menu and click <strong>Discard draft</strong> to delete the draft.</p></td></tr><tr><td><strong>You're viewing a draft. Changes made in this draft require a review before publishing.</strong></td><td><p>You saved changes to a field in the <strong>App Details</strong> section on the <strong>Store Listing</strong> tab.</p><p>If you're updating a published app listing, the configuration settings no longer match the published app listing. To reset the settings so that they match the published app listing, use the <strong>More Actions</strong> menu and click <strong>Discard draft</strong> to delete the draft.</p></td></tr><tr><td><strong>The draft is in review and can't be edited.</strong></td><td><p>You submitted your public app listing for review.</p><p>Apps must pass a review before being published. While an app is in review, you can't edit it. You can remove the app from the review process by clicking <strong>Cancel Review</strong>. If the app is approved, it will be published automatically.</p></td></tr><tr><td><strong>The draft didn't pass review and wasn't published</strong></td><td><p>Your app requires additional work.</p><p>You'll receive a review document that describes what needs improvement. You can address the issues and resubmit your app for review. <a href="https://developers.google.com/workspace/marketplace/about-app-review#duration">Learn about the review process</a>.</p><p>Alternatively, you can use the <strong>More Actions</strong> menu and click <strong>Discard draft</strong> to delete the draft.</p></td></tr><tr><td><strong>This app is published</strong></td><td><p>You have an app listing that appears in the Google Workspace Marketplace.</p></td></tr><tr><td><strong>The app was unpublished from Google Workspace Marketplace.</strong></td><td><p>This message appears only when Google unpublishes your app listing. It doesn't appear when you unpublish your own app listing. <a href="https://developers.google.com/workspace/marketplace/terms/policies">Learn more about the Google Workspace Marketplace policies</a>.</p></td></tr></tbody></table>

### Test your draft

You can test your draft app listing by adding draft testers. After you designate a specific email address as a draft tester, the person who signs in to the Google Workspace Marketplace with that email address sees the draft version of your app listing instead of any existing app listing.

If you have a draft that can be previewed and tested, the **Draft Tester** section appears in the **Store Listing** tab.

To test your draft, follow these steps:

1. In the Google Cloud console, go to Menu \> **APIs & Services** \> **Google Workspace Marketplace SDK** \> **Store Listing**.
	[Go to Store Listing](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk_publish)
2. On the **Store Listing** tab, add your email address to the **Draft Tester Email Addresses** field in the **Draft Tester** section.
3. If you want to let others test your draft, add their email addresses to the **Draft Tester Email Addresses** field and notify them that they are draft testers.
	- You can add up to 100 email addresses.
		- For public app listings, the email addresses must be Gmail accounts.
		- For private app listings, all email addresses, including yours, must be in the same domain.
		- Draft testers are not automatically notified when you add their email address to the **Draft Tester Email Addresses** field.
4. Add a URL to the **Draft Tester Opt-Out URL** field.
	- The URL must provide a mechanism, such as a web form, that lets testers indicate that they don't want to be draft testers.
		- You must maintain the list of draft testers and remove those who have opted out.

## Unpublish your app listing

To unpublish your app listing, follow these steps:

1. In the Google Cloud console, go to Menu \> **APIs & Services** \> **Google Workspace Marketplace SDK** \> **Store Listing**.
	[Go to Store Listing](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk_publish)
2. On the **Store Listing** tab, click **Unpublish**. To republish, follow the preceding steps and click **Publish**.

After you unpublish, your app listing no longer appears in the Google Workspace Marketplace. Users who have already installed your app can no longer access it. If you republish, the users who had previously installed your app regain access.
