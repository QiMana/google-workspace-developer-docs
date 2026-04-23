---
source: https://developers.google.com/workspace/drive/api/guides/publish
root: workspace
fetched_at: 2026-04-23T15:27:42.020Z
---

# Publish your Drive app

Once you've created your Drive app, you can publish it in [Google Workspace Marketplace](https://workspace.google.com/marketplace) for others to use. Domain administrators can install Google Workspace Marketplace apps on behalf of their users. Additionally, individual users can find and install Drive apps in Google Workspace Marketplace or by selecting **New > Connect more apps** in the Drive UI.

When you publish your app, you are asked to register the file types that the app can open. When a user views a file in Drive or opens a Gmail attachment, your application is listed as a suggested app if the file type is one you have registered.

![Suggested applications from Gmail](https://developers.google.com/static/workspace/drive/images/gmail-integration-openwith.png)

To make your app available to others, you must follow a publishing process that creates a listing for your app, registers the file types it can open, and adds the listing to Google Workspace Marketplace. You should only start the publishing process once your app is fully functional and you're ready to let users know about it.

## Before you begin

Before publishing your app to Google Workspace Marketplace, you should decide on a visibility level and identify collaborators and digital assets.

### Pick a visibility level

Drive app *visibility* refers to the availability of your app to users. There are two visibility levels:

- **Public** visibility indicates that anyone can install the app.
- **Private** visibility means only admins or users in your domain can install the app.

### Identify your collaborators

Collaborators are individuals who have access to update your app on Google Workspace Marketplace.

### Identify required assets

Before you can publish your Drive app, you must provide specific digital assets to accompany your app. These assets include information used to build the store listing and assets that define your app's appearance and behavior in the Google Drive UI (if applicable). For a list of assets required to list your app in Google Workspace Marketplace, refer to [Gather your assets](https://developers.google.com/workspace/marketplace/create-listing#gather_your_assets). For instructions on how to integrate with the Drive UI, including assets required, refer to [Configure a Drive UI integration](https://developers.google.com/workspace/drive/api/guides/enable-sdk#configure_your_apps_drive_ui_integration).

## Publish to Google Workspace Marketplace

Once you are ready to publish to Google Workspace Marketplace, refer to [How to publish](https://developers.google.com/workspace/marketplace/how-to-publish).
