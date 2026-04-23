---
source: https://developers.google.com/workspace/chat/test-interactive-features
root: workspace
fetched_at: 2026-04-23T15:25:35.208Z
---

# Test interactive features for Google Chat apps

## Page Summary

- This guide explains how to set up a test version of your Google Chat app to try out interactive features before releasing it to users.
- You can add trusted testers within your organization to access and provide feedback on your Chat app before public release.
- To test your app, you need to add it to a space in Google Chat, like a direct message or a group chat, where you can interact with its features.
- Before publishing your Chat app to the Google Workspace Marketplace, ensure it's thoroughly tested and reviewed to meet all requirements for a smooth user experience.
- If you intend to publish your app publicly, it will be subject to a review process by Google to ensure it aligns with Marketplace guidelines.

This page explains how to configure and install a test version of your Google Chat app so that you can try out interactive features—such as [Chat app commands](./commands.md), [direct messaging](./create-messages.md), and [link previews](./preview-links.md) —before releasing them to end users.

By testing your Chat app, you can ensure that it offers a high-quality user experience and functions as expected. If you're publishing your Chat app publicly, testing also helps you make sure that your Chat app meets the [requirements for being listed in the Google Workspace Marketplace](../marketplace/about-app-review.md).

To safely test at each phase of your Chat app's lifecycle, we recommend that you set up separate environments for development, staging, and production. In each environment, you should create and deploy a different Chat app. To learn how to set up environments, see [Create and manage deployments for your Google Chat app](./create-manage-deployments.md).

## Prerequisites

- A Google Chat app that's configured to receive and respond to [interaction events](./receive-respond-interactions.md). To create an interactive Chat app, complete one of the following quickstarts based on the [app architecture](./structure.md) that you want to use:
	- [HTTP service](./quickstart/gcf-app.md) with Google Cloud Functions
		- [Google Apps Script](./quickstart/apps-script-app.md)
		- [Google Cloud Dialogflow CX](./build-dialogflow-chat-app-natural-language.md)
		- [Google Cloud Pub/Sub](./quickstart/pub-sub.md)
- To grant access to your Chat app for testing:
	- You must have the [`chat.owner`](https://cloud.google.com/iam/docs/understanding-roles.md#hangouts-chat-roles) IAM role. You can also have this role as an [editor or owner](https://cloud.google.com/resource-manager/docs/access-control-proj#basic_roles) of the Google Cloud project associated with the Chat app. For details, see [Grant an IAM role by using the Google API Console](https://cloud.google.com/iam/docs/grant-role-console) in the Google Cloud documentation.
		- Anyone who tests the Chat app must belong to the same Google Workspace organization where your Chat app is configured.
- Ensure that you have access to test and install the Chat app in your Google Workspace organization. For details, see [Configure access for Google Workspace organizations](../marketplace/how-to-publish.md#configure-access) in the Google Workspace Marketplace documentation.

## Add trusted testers

For interactive Chat apps, the Chat API lets you share your Chat app with specific people in your Google Workspace organization. The people that you specify can add the Chat app to a space and test its features before you publish it to the Marketplace. To test your own Chat app, you must add yourself as a trusted tester.

To make your test Chat app available to you and others in your organization, update the Chat API **Visibility** setting in Google API Console:

1. In the Google API Console, open the Google Chat API page:
	[Go to Google Chat API page](https://console.developers.google.com/apis/api/chat.googleapis.com)
2. Click the **Configuration** tab.
3. Go to **Interactive features** > **Visibility**, and then select the **Make this Chat app available to specific people and groups in `GOOGLE_WORKSPACE_ORGANIZATION`**, where `GOOGLE_WORKSPACE_ORGANIZATION` is the name of your organization.
4. In the field that appears after selecting the checkbox, enter the email addresses of the people or Google Groups that you want to access your Chat app, separated by commas. To test your own Chat app, enter the email address that you use to access Google Chat.
5. Click **Save**.

## Add your Chat app to spaces

To start testing interactive features, you must add your Chat app to one or more spaces, such as a direct message, group message, or named space. If you haven't added all the members in the space as trusted testers, they might be able to see the Chat app in the space but can't interact directly with it.

Chat apps that haven't been published don't appear in the listing results from the Google Workspace Marketplace. To find unpublished Chat apps in Google Chat, you can search for the Chat app, find it under **Google Workspace tools** while composing a message, or @mention the Chat app in a message.

To add your Chat app to a space, do the following:

1. Open Google Chat using the Google Workspace account that you provided when you added yourself as a trusted tester.
	[Go to Google Chat](https://chat.google.com/)
2. To start a direct message with the Chat app, do the following:
1. Click **New chat**.
	2. In the **Add 1 or more people** field, type the name of your Chat app.
	3. Select your Chat app from the results. A direct message opens.
4. To add the Chat app to an existing space, do to the following:
1. Under **Spaces**, click the name of the space.
	2. In the Chat space's new message field, enter `@` and the name of the Chat app. Select your Chat app from the results
	3. Press `Enter` or click **Send**.
	4. If the **Add to** space name window appears, click **Add to space**. Your message with the @mention is posted to the Chat space. A text also appears that explains that you added the Chat app to the space.

You can now test the Chat app in the space.

When you test your Chat app, you should review all features and then log and fix any errors that you encounter. To understand and address any error messages, see [Troubleshoot and fix Google Chat errors](./troubleshoot-fix-chat-errors.md).

## Review and test your Chat app for the Google Workspace Marketplace

To distribute and share a Chat app to anyone not listed as a trusted tester, you must configure and publish the Chat app to the Google Workspace Marketplace. For details, see [Publish apps to the Google Workspace Marketplace](../marketplace/how-to-publish.md).

If you want to publish your Chat app publicly on the Google Workspace Marketplace, you must submit your Chat app for a review. Google reviews your Chat app to make sure that it meets all Marketplace requirements. To learn about the process and requirements, see [App review process and requirements for the Google Workspace Marketplace](../marketplace/about-app-review.md).

## Related topics

- [Create and manage deployments for your Google Chat app](./create-manage-deployments.md)
- [Troubleshoot and fix Google Chat errors](./troubleshoot-fix-chat-errors.md)
- [Query error logs for Google Chat apps](./query-logs.md)
- [Publish apps to the Google Workspace Marketplace](../marketplace/how-to-publish.md)
