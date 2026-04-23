---
source: https://developers.google.com/workspace/marketplace/how-to-publish
root: workspace
fetched_at: 2026-04-23T15:30:10.242Z
---

# Publish apps to the Google Workspace Marketplace

## Page Summary

- This page outlines the process of publishing apps, both public and private, to the Google Workspace Marketplace.
- Before publishing, developers need to prepare their app by defining its target audience (public or private) and ensuring it meets Google's requirements if intended for public access.
- Publishing involves steps like creating a Google Cloud project, configuring OAuth, testing functionality, enabling the Marketplace SDK, and crafting a store listing.
- Private apps are immediately available within the organization, while public apps undergo a Google review before being listed on the Marketplace.
- App installation settings control whether all users or only administrators can install the app, regardless of its public or private status.

This page explains the steps to publish an app to the [Google Workspace Marketplace](https://workspace.google.com/marketplace/).

## Prepare for the publishing process

This section explains how to prepare and plan for publishing your app to the Marketplace.

### Decide what you want to publish

To be listed on the Google Workspace Marketplace, the app that you build must extend at least one Google Workspace application. To learn about the types of apps you can build and publish, see [App integrations](./overview.md#app-integrations).

### Determine the audience for your app

Google Workspace Marketplace apps can either be *public* or *private*:

- **Private**: If you built your app using a Google Workspace account, you can publish the app privately to your Google Workspace organization. Private apps are only available to users in your organization, and are also listed in the [**Internal Apps**](https://workspace.google.com/marketplace/mydomainapps) section of the Marketplace.
- **Public**: Public apps can be viewed and installed by anyone who uses the Google Workspace Marketplace. Public apps have [additional publishing requirements](#public-requirements) to be listed on the Marketplace.

After you publish your app as either private or public, you can't change this setting. Before you publish your app, make sure you've accurately determined your audience.

#### Configure access for Google Workspace organizations

Some Google Workspace organizations use allowlists to [manage which apps users can install](https://support.google.com/a/answer/172931). If you want to publish an app to an organization that uses an allowlist, contact an administrator to add your app to the allowlist.

Google Workspace organizations can also restrict the use of Chat apps. To manage access, see [Allow users to install Chat apps](https://support.google.com/a/answer/7651360).

#### Public apps: Review additional publishing requirements

To distribute and share your app to users outside of your Google Workspace organization, you must publish it publicly. Public apps require a review from the Marketplace team. Before submitting your app for review, make sure your app meets the following Marketplace requirements:

- Your app must comply with the Marketplace [terms and policies](./terms.md).
- Your app must meet all Marketplace review criteria. To learn more, see [App review process and requirements](./about-app-review.md).

## Publish your app

![Publishing flow for an app](https://developers.google.com/static/workspace/marketplace/images/publish-flow-diagram.png)

Figure 1: The process of publishing an app to the Google Workspace Marketplace.

![](https://developers.google.com/static/workspace/marketplace/images/publish-flow-diagram.png)

After you've built your app, you can publish it by completing the following steps:

1. [Create a Google Cloud project](../guides/create-project.md) to configure and manage your listing on the Google Workspace Marketplace. If you've already created a Cloud project for your app, then you should use this Cloud project for your listing.
2. [Configure OAuth for your app](./configure-oauth-consent-screen.md). For public apps, you might need to submit your app for an OAuth review.
3. Test that your app is working properly. To test public apps, you can use the [review criteria](./about-app-review.md#areas) related to app functionality and user experience. You should also make sure you have a website and logo for your app, because you'll need these assets for your app's listing in the Marketplace.
4. [Enable the Google Workspace Marketplace SDK](./enable-configure-sdk.md) to configure your app for things like its visibility, installation settings, and which Google Workspace applications it extends.
5. [Create a store listing](./create-listing.md) that explains and promotes your app to users.
6. After you configure and save all required settings in the Google Workspace Marketplace SDK, [submit your app to be published](./create-listing.md#publish_an_app). Depending on the audience for your app, your app is published immediately or undergoes a final review:
	- For private apps, your app listing is immediately available to everyone in your Google Workspace organization.
		- For public apps, your app is reviewed by Google. After Google approves your app, your app listing is available to everyone in the Marketplace. To learn about the status of a public app, see [Check your app listing's publication status](./create-listing.md#check_your_app_listings_publication_status).
	For all apps, the [app installation settings](./enable-configure-sdk.md#installation_settings) determine whether all users or only Google Workspace administrators can install the app.

## Related topics

- [Update or unpublish a Google Workspace Marketplace listing](./manage-app-listing.md)
- [App review process and requirements for the Google Workspace Marketplace](./about-app-review.md)
