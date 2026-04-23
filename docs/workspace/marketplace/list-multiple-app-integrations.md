---
source: https://developers.google.com/workspace/marketplace/list-multiple-app-integrations
root: workspace
fetched_at: 2026-04-23T15:30:11.123Z
---

# List app integrations together

## Page Summary

- Publishing multiple app integrations within a single app listing streamlines user experience by enabling simultaneous installation and authorization.
- This approach can accelerate user acquisition compared to separate listings for each integration.
- Web apps, Drive apps, and Editor add-ons (Docs, Sheets, Slides, Forms) can often be combined within one listing, with certain compatibility rules outlined in a provided table.
- Before combining integrations, developers should be aware of potential impacts like broader consent screens, scope verification, and user access considerations.
- Detailed instructions are given for adding multiple integrations to both new and existing app listings, emphasizing the use of a shared Google Cloud project.

If you've developed multiple app integrations, you might want to publish them together in one app listing. Doing so lets users install and authorize them at the same time, provides a more seamless user experience, and lets you grow your user count faster because all integrations are installed from one listing.

For example, if your app offers a specific integration with Google Sheets and is available as a web app, instead of creating two app listings for a Sheets add-on and a web app, you can list them together as one app.

To determine if you can list your app integrations together, refer to the next section.

## App integrations you can list together

Use this table to learn which app integrations can be included in a single app listing.

| Can be included with: | Web app | Drive app | Docs add-on | Sheets add-on | Slides add-on | Forms add-on | Google Workspace add-on | Google Chat app |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **[Web app](./enable-configure-sdk.md#web-app)** |  | x | x | x | x | x |  |  |
| **[Drive app](../drive/api/guides/about-sdk.md)** | x |  | x | x | x | x | x |  |
| **[Docs add-on](../add-ons/editors/docs.md)** | x | x |  | x | x | x | x |  |
| **[Sheets add-on](../add-ons/editors/sheets.md)** | x | x | x |  | x | x | x |  |
| **[Slides add-on](../add-ons/editors/slides.md)** | x | x | x | x |  | x | x |  |
| **[Forms add-on](../add-ons/editors/forms.md)** | x | x | x | x | x |  | x |  |
| **[Google Workspace add-on](../add-ons/how-tos/building-workspace-addons.md)** |  | x | x | x | x | x | x\* | x\*\* |
| **[Google Chat app](../add-ons/chat.md) \*\*** |  |  |  |  |  |  | x\*\* |  |

\*You can't list more than one Google Workspace add-on in your app listing, but you can build a single Google Workspace add-on that extends Gmail, Calendar, Chat, Drive, Docs, Sheets, Slides, and Meet.

\*\*Only available for [Google Chat apps built as Google Workspace add-ons](../add-ons/chat.md). Otherwise, Chat apps must be listed separately in the Marketplace.

## Before you add multiple app integrations

Before you include more than one app integration in your app listing, consider the following effects:

- The consent screen lists all scopes required by all app integrations.
- Any new scope is verified (when applicable).
- If you add a new app integration that requires additional scopes to an existing app listing, administrators who have already installed the original app for their domain need to authorize the additional scopes in the Google Admin console. Until they do, users within the domain are individually prompted to authorize.

If you plan to combine existing app listings, there are additional effects to consider. If you move an app integration from its original app listing to another app listing:

- Existing users might lose access and need to install the app listing you moved it to.
- User counts and reviews don't carry over.
- You might need to update the consolidated Google Cloud project's configuration to accommodate the new app integration.
- You must reverify OAuth 2.0 scopes because they were previously approved for a specific Google Cloud project.

## Add multiple app integrations to a new app listing

To add multiple app integrations to a new app listing, do the following:

1. If you haven't created a Google Cloud project yet, [set up a Google Cloud project](../guides/create-project.md). If you built your app integrations in Apps Script, make sure they're all associated with the same Google Cloud project.
2. Enable and configure the Google Workspace Marketplace SDK with the information for all the app integrations. Explain in the description that the app includes multiple app integrations.

## Add app integrations to an existing app listing

To add multiple app integrations to an existing app listing, do the following:

1. Make sure you have edit access to the existing app's Google Cloud project.
2. If the app integration you want to add was built with Apps Script, [set your add-on's Apps Script project to the existing app's Google Cloud project](../../apps-script/guides/cloud-platform-projects.md#switching_to_a_different_standard_gcp_project).
3. In the existing app's Google Cloud project, update the Google Workspace Marketplace SDK.
	1. On the App Configuration page under **App Extension**, select the app integration to add and fill out the relevant fields.
		2. Add information about the new app integration to the App Configuration and Store Listing pages. Make sure you explain in the app description that the app includes multiple app integrations.
