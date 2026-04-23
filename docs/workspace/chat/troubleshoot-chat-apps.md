---
source: https://developers.google.com/workspace/chat/troubleshoot-chat-apps
root: workspace
fetched_at: 2026-04-23T15:25:33.973Z
---

# Troubleshoot and fix Google Chat app errors

## Page Summary

- This guide addresses common problems encountered while building and testing Google Chat apps, such as cards not rendering, apps not responding, and user access issues.
- Troubleshooting steps include verifying the Chat app's configuration in the Google Cloud console, ensuring the app is live and interactive features are enabled.
- Users encountering access issues should check if the Chat app is allowed by their organization's administrator and has the necessary OAuth authorization scopes.
- For Cloud Function-based apps, detailed guidance on checking logs, identifying errors, and fixing common Cloud Function errors like naming conflicts and permission issues is provided.
- Users may be excluded from spaces due to conflicting Chat history settings between user-level and space-level configurations.

This section describes common issues that you can encounter while building and testing Chat apps.

## A card message, dialog, or link preview doesn't render or work as expected

For help troubleshooting card errors, see [Troubleshoot and fix cards](https://developers.google.com/workspace/chat/troubleshoot-cards).

## App is not responding

If you message the Chat app and it responds "App is not responding," verify the Chat app's configuration:

1. In the Google API Console, click **Menu** \> **APIs & Services** \> **Enabled APIs & Services** \> **Google Chat API** \> **Configuration**.
	[Go to Chat API configuration](https://console.developers.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. Under **App status**, make sure that you selected **Live - available to users**.
3. Under **Interactive features**, make sure that settings are appropriate for your app's functionality. If your Chat app interacts with users, make sure you turn on **Enable interactive features**:
	1. By default, apps can respond to direct messages from users.
		2. If your app responds to messages in spaces and group chats, select **Join spaces and group conversations**.
		3. Under **Connection settings**, make sure the **HTTP endpoint URL**, Apps Script project **Deployment ID**, Cloud Pub/Sub **Topic Name**, or Dialogflow agent is set correctly and that it is deployed.
		4. Under **Visibility**, make sure the appropriate users have access to the app with email address or a group in the Google Workspace domain. If the app is deployed with [Google Workspace Marketplace SDK](https://developers.google.com/workspace/marketplace/overview), visibility settings aren't necessary because Google Workspace Marketplace settings take precedence.
4. If the app is published with [Google Workspace Marketplace SDK](https://developers.google.com/workspace/marketplace/overview), review Google Workspace Marketplace settings.
5. Click **Save**.
6. Try messaging the app again.

## Google Chat API is only available to Google Workspace users

When configuring the Chat app, you might receive the error `Google Chat API is only available to Google Workspace users`. This message means that the Google Account that you've used to configure the Chat API isn't part of a Google Workspace organization. To build a Chat app or use the Chat API, you must use a [Google Workspace account](https://workspace.google.com/features/).

Note that Google Chat users can use Chat apps without a Google Workspace account. To learn more about how users discover and install Chat apps, see [Build interactive Google Chat apps](https://developers.google.com/workspace/chat/interact-users-overview).

## Users can be excluded from spaces

If a Google Workspace administrator [disallows users to turn Chat history on or off](https://support.google.com/a/answer/7664184), then there might be times when users can't join or stay in a space due to a conflict between a user-level setting that forces chat history on or off and a space that inherits the organization-level forced setting.

For example, if a user has a Chat history setting forced "on" and a space has a Chat history setting forced "off", then that user might not be able to join the space. Additionally, that user might be removed from the space if they joined prior to the conflict and then they post a message in the space after the conflict.

In this scenario, and other scenarios where there are conflicts between history settings, Chat API might not be able to create a membership, or creating a message with user authentication might remove the authenticated user with a conflicting Chat history setting from the space.

To learn more, see [Users can be excluded from spaces](https://support.google.com/a/answer/9948515#zippy=%2Cmy-top-level-setting-is-chat-preferred) in the Google Workspace Admin Help center.

## Troubleshoot the Advanced Chat service in Google Apps Script

See the Apps Script page about the [Advanced Chat Service](https://developers.google.com/apps-script/advanced/chat#troubleshoot).

## Users are unable to add a Chat app to a space

If users encounter the error message `This organization's administrator must allow users to install this Chat app` when trying to add a Chat app to a space, this error might be caused by one of the following reasons:

- The organization has disabled Chat apps.
- The organization hasn't added this specific Chat app to the organization's allowlist.

If a user encounters this error message when trying to interact with a Chat app, it might be caused by the organization granting access to a sub-organizational unit, without enabling it for the parent organizational unit.

For information about how to resolve this issue, see [Allow users to install Chat apps](https://support.google.com/a/answer/7651360).

## The administrator must grant the app the required OAuth authorization scope for this action

When [authenticating as a Chat app](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), you might receive the following error:

```
<HttpError 403 when requesting https://chat.googleapis.com/v1/spaces/{space}?alt=json returned "The administrator must grant the app the required OAuth authorization scope for this action.". Details: "The administrator must grant the app the required OAuth authorization scope for this action.">
```

This error message means that a Google Workspace administrator hasn't yet granted one-time approval to the Chat app to use authorization scopes that begin with the name `https://www.googleapis.com/auth/chat.app.*`.

To resolve the error:

- Ask the Google Workspace administrator to [grant approval to your Chat app](https://support.google.com/a?p=chat-app-auth). When handling this error in your Chat app logic, consider [sending a message](https://developers.google.com/workspace/chat/create-messages) announcing that the Chat app needs administrator approval to perform the requested action, perhaps: `To perform this action, I need approval. <https://support.google.com/a?p=chat-app-auth|Learn more>.`
- If the Chat API method supports the `https://www.googleapis.com/auth/chat.bot` authorization scope, which doesn't require administrator approval, consider using it instead. To check which authorization scopes a method supports, see the [Authenticate and authorize Google Chat apps and Google Chat API requests](https://developers.google.com/workspace/chat/authenticate-authorize#asynchronous-chat-calls).

## Troubleshoot Cloud Function errors

If the Chat app is implemented with Cloud Functions and it isn't working, the following sections help troubleshoot and fix the issue.

### Check Cloud Function logs

As a first step, check the Cloud Functions logs for errors.

1. In the Google API Console, go to the Cloud Functions page:
	[Go to Cloud Functions](https://console.developers.google.com/functions)
2. To open the logs, find your Chat app's Cloud Function, then click **Show actions** \> **View logs**.

The Logs Explorer opens and runs a query showing Cloud Function logs, including errors.

If the default information logged is not enough to debug your app, you can add additional logging from your Cloud Function code. See [View and write Cloud Function logs](https://cloud.google.com/functions/docs/monitoring/logging).

### Check Cloud Function errors

Apart from the logs, Cloud Function might also report errors encountered while running.

1. In the Google API Console, go to the Cloud Functions page:
	[Go to Cloud Functions](https://console.developers.google.com/functions)
2. Click your Chat app's Cloud Function.
3. On the Function details page, errors are listed under **Errors**.
4. To further troubleshoot an error, click it.

### Fix common Cloud Function errors

The following errors are sometimes encountered when building a Chat app with Cloud Functions.

#### Function ChatApp in region REGION\_NAME in project PROJECT\_NAME already exists

When deploying a Cloud Function, you might receive the error `Function ChatApp in region REGION_NAME in project PROJECT_NAME already exists`. This message means that another Cloud Function has the same name as the one you're deploying. Change the name, and deploy the function again. Verify that the Chat app uses the Trigger URL for your Cloud Function, not the Trigger URL of the preexisting Cloud Function.

#### One or more users named in the policy do not belong to a permitted customer

When deploying a Cloud Function, you might receive the error `The operation cannot be completed on the function: "One or more users named in the policy do not belong to a permitted customer."` If you get this error and then message the Chat app, you get an error saying that the app isn't responding because Google Chat can't reach the server hosting the Cloud Function. This message means that a user named "allUsers" doesn't have permission to call the Cloud Function. Giving "allUsers" the "Cloud Functions Invoker" role means that the Cloud Function that powers the app is publicly available and accessible without authentication. To learn how to assign a role, see [Grant a single role](https://cloud.google.com/iam/docs/granting-changing-revoking-access#grant-single-role).

This error might mean that the Google Cloud project is domain restricted. For more information about domain restriction constraints, refer to [Restricting identities by domain](https://cloud.google.com/resource-manager/docs/organization-policy/restricting-domains#console_1).

To resolve this issue, verify that your Cloud Function allows unauthenticated invocations. To learn how to allow unauthenticated invocations for an existing Cloud Function, refer to [Allowing public (unauthenticated) access](https://cloud.google.com/run/docs/authenticating/public).
