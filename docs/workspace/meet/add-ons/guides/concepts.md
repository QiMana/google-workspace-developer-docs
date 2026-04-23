---
source: https://developers.google.com/workspace/meet/add-ons/guides/concepts
root: workspace
fetched_at: 2026-04-23T15:30:11.053Z
---

# Meet add-on concepts

Google Meet add-ons are used to build experiences directly into Google Meet. To create add-ons, you must understand how a Google Workspace add-on is developed and eventually published in the Google Workspace Marketplace.

## Architecture

The following sequence diagram shows the architecture of how a Google Meet add-on uses Google Workspace resources.

![Architecture of how a Google Meet add-on uses Google Workspace resources.](https://developers.google.com/static/workspace/meet/add-ons/images/how-a-google-meet-add-on-uses-google-workspace-resources.svg)

Figure 1. Architecture of how a Google Meet add-on uses Google Workspace resources.

Using a Google Meet add-on in a meeting works like this:

1. **Load add-on panel**: The user clicks the meeting tools button ![The meeting tools icon.](https://developers.google.com/static/workspace/meet/add-ons/images/apps.png) in Meet to load the list of [installed add-ons](https://developers.google.com/workspace/meet/add-ons/guides/overview#installed-add-ons) into the add-on panel.
2. **Select add-on**: A user selects an add-on in the add-on panel.
3. **Load add-on iframe**: Meet loads the add-on side panel iframe URL that the developer specified in the manifest.
4. **Create AddonSession**: The add-on creates an [`AddonSession`](https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.addonsession). This indicates to Meet that the add-on is loaded and is ready for use.
5. **Add-on initialized**: The add-on is ready for use.
6. **(Optional) Request token with One Tap**: The selected add-on uses [Google One Tap](https://developers.google.com/identity/gsi/web/guides/display-google-one-tap) to request a token with the sign-in information and user-approved scopes if there's an active Google session.
7. **(Optional) Google returns ID token**: The ID token contains the user identity information.

## Google Workspace add-ons in the Marketplace

Google Workspace add-ons are customized apps that integrate with Google Workspace applications, such as Gmail, Google Docs, and Google Sheets. They allow developers to create customized user interfaces that are directly integrated into Google Workspace. Add-ons help users work more efficiently with less context switching.

The [Google Workspace Marketplace](https://workspace.google.com/marketplace/) offers users and administrators a way to find and install third-party enterprise apps that are integrated with Google Workspace. The Marketplace is also the central place for managing published Google Workspace add-ons. Users can install and uninstall published add-ons. Admins can restrict the add-ons users can install.

## Types of add-ons

In general, there are two types of add-ons you can build: [Google Workspace add-ons](https://developers.google.com/apps-script/add-ons/concepts/types#google-workspace-add-ons) and [Editor add-ons](https://developers.google.com/apps-script/add-ons/concepts/types#editor-add-ons).

For the Meet add-ons SDK, you must build your add-ons using Google Workspace add-ons.

With a Google Workspace add-on, you can extend multiple Google Workspace apps such as Gmail, Google Calendar, and Google Drive. You specify which app the add-on is targeting, along with other details, in the [add-on manifest file](https://developers.google.com/apps-script/add-ons/concepts/workspace-manifests). For the Meet add-ons SDK, you must declare a `meet` object within the `addOns` section of the manifest file. For more information, see [Create a deployment](https://developers.google.com/workspace/meet/add-ons/guides/deploy-add-on#create-deployment).

A Google Workspace add-on can be developed in two different ways: either in Google Apps Script, or as a self-hosted add-on using your preferred tech stack. Each of these add-ons contains a manifest, which is made up of different sections. The Meet section of the manifest contains information specific to how your add-on is loaded from Google Meet and is unrelated to whether the rest of your add-on is self-hosted or uses Apps Script. Add-ons for Meet are loaded in an iframe and must reference web pages rather than [Card-based interfaces](https://developers.google.com/apps-script/add-ons/concepts/card-interfaces).

For example, a manifest for a Google Workspace add-on might have a section for Gmail that uses [`ComposeTrigger`](https://developers.google.com/apps-script/manifest/gmail-addons#composetrigger) and [`ContextualTrigger`](https://developers.google.com/apps-script/manifest/gmail-addons#contextualtrigger) objects to return card interfaces, and a section for Meet that uses web, iOS, and Android objects to point to your web page and mobile app.

![An example manifest with Meet and Gmail sections.](https://developers.google.com/static/workspace/meet/add-ons/images/meet-manifest-file-diagram-2.svg)

Figure 2. An example manifest with Meet and Gmail sections.

## Publish an add-on

When you publish your Google Workspace add-on, you make it available for others to find, install, and use.

For more information, see [Publish your Meet add-on](https://developers.google.com/workspace/meet/add-ons/guides/publish).

## Related topics

- [Deploy a Meet add-on](https://developers.google.com/workspace/meet/add-ons/guides/deploy-add-on)
- [Best practices](https://developers.google.com/workspace/meet/add-ons/guides/best-practices)
- [Add-ons types](https://developers.google.com/apps-script/add-ons/concepts/types)
- [Gmail manifest resource](https://developers.google.com/apps-script/manifest/gmail-addons)
