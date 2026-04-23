---
source: https://developers.google.com/workspace/add-ons/how-tos/upgrade-addons
root: workspace
fetched_at: 2026-04-23T15:22:59.293Z
---

# Upgrade legacy Gmail and Calendar add-ons

## Page Summary

- Existing Gmail and Calendar add-ons can be upgraded to Google Workspace add-ons, inheriting existing listings and users.
- Upgrading allows add-ons to utilize new features like homepages and contextual triggers across Google Workspace apps.
- The upgrade process involves copying the Apps Script project, integrating Google Workspace features, updating the manifest, and republishing.
- Editor add-ons require more extensive changes for migration due to UI and service differences.
- While upgrading, add-ons retain the same GCP project, minimizing user re-authorization needs unless new scopes are introduced.

You can't directly upgrade Editor add-ons into Google Workspace add-ons. For more information, see [Can I upgrade my Editor add-on](#can-i-upgrade-my-editor-add-on).

If you've already published an add-on for Gmail or Calendar, you can upgrade it to a Google Workspace add-on. This page describes how to add Google Workspace functionality to your add-on and publish it.

Transfer the new functionality to your original add-on to retain the Google Workspace Marketplace listing, installs, and users. Upgrading also lets you use features like [homepages](https://developers.google.com/workspace/add-ons/concepts/homepages).

If you don't upgrade your Gmail and Calendar add-ons, the application automatically upgrades them to add-ons with a generic homepage. No change to your listing or code is required. The add-on remains available only in its [host application](https://developers.google.com/workspace/add-ons/guides/glossary#host_or_host_application). The Google Workspace Marketplace lists auto-upgraded add-ons in the "works with Gmail" or "works with Calendar" sections. It retains the listing, installs, and users.

## 1\. Copy the Apps Script project

The upgraded add-on uses the same Google Cloud project as your published add-on, but create a copy of the script project first so that you don't affect existing users during testing. Upgrading a copy also ensures you have the original code and can redeploy it if necessary.

1. Open the existing script project.
2. Select **Overview** .
3. Select **Make a copy** .
4. Select **Project Settings > Change project**.
5. Select **GCP Project Number**.
6. Enter the [project number](https://developers.google.com/apps-script/guides/cloud-platform-projects#determining_the_id_and_number_of_a_standard_gcp_project) associated with your published add-on.
7. Select **Set project**.

## 2\. Integrate Google Workspace add-on

Implement the add-on features.

1. Plan what content to show in [homepage cards](https://developers.google.com/workspace/add-ons/concepts/homepages). If you want homepages for multiple hosts, decide whether they can share content or need custom cards.
2. In the copied script project, build homepage cards with [`homepageTrigger`](https://developers.google.com/workspace/add-ons/concepts/homepages#homepage_configuration) functions.
3. Consider adding contextual cards, like for [extending the Gmail interface](https://developers.google.com/workspace/add-ons/gmail/extending-message-ui) or [extending the Calendar interface](https://developers.google.com/workspace/add-ons/calendar/building-calendar-interfaces#extending_the_event_interface).
4. Update any code that accesses [event objects](https://developers.google.com/workspace/add-ons/concepts/event-objects) to use the [new structure](https://developers.google.com/workspace/add-ons/concepts/event-objects#event_object_structure). The new structure contains the same fields, but the original ones are deprecated.

## 3\. Update the manifest

The [manifest structure](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests) for Google Workspace add-ons is significantly different from legacy add-ons. Update the project's manifest fields using the following tables. Move all relevant subproperties to the [`addOns`](https://developers.google.com/apps-script/manifest/addons#addons) property.

Update the [`oauthScopes`](https://developers.google.com/apps-script/manifest#Manifest.FIELDS.oauthScopes) field to reflect the permissions the updated add-on requires.

See [Manifests](https://developers.google.com/workspace/add-ons/concepts/workspace-manifests).

### Gmail add-ons

| Original manifest field | Action required |
| --- | --- |
| `gmail.composeTrigger` | Move to `addOns.gmail.composeTrigger`. |
| `gmail.contextualTriggers[]` | Move the list to `addOns.gmail.contextualTriggers[]`. |
| `gmail.logoUrl` | Move to `addOns.common.logoUrl`. |
| `gmail.name` | Move to `addOns.common.name`. |
| `gmail.openLinkUrlPrefixes[]` | Move the list to `addOns.common.openLinkUrlPrefixes[]`. |
| `gmail.primaryColor` | Move to `addOns.common.layoutProperties.primaryColor`. |
| `gmail.secondaryColor` | Move to `addOns.common.layoutProperties.secondaryColor`. |
| `gmail.universalActions[]` | Move the list to `addOns.common.universalActions[]`. |
| `gmail.universalActions[].text` | Move each `gmail.universalActions[].text` field to a corresponding `addOns.common.universalActions[].label` field. |
| `gmail.useLocalFromApp` | Move to `addOns.common.useLocaleFromApp`. |

### Calendar conferencing add-ons

| Original manifest field | Action required |
| --- | --- |
| `calendar.createSettingsUrlFunction` | Move to `addOns.calendar.createSettingsUrlFunction`. |
| `calendar.conferenceSolution[]` | Move to `addOns.calendar.conferenceSolution[]`. |
| `calendar.logoUrl` | Move to `addOns.common.logoUrl`. |
| `calendar.name` | Move to `addOns.common.name`. |

## 4\. Test the upgraded add-on

To test your upgraded add-on, you need to install it as an unpublished add-on.

1. Open the script project in the Apps Script editor.
2. Select **Deploy > Test deployments**.
3. Select **Install**.
4. At the bottom, select **Done**.

After you install the add-on, it's immediately available in the host applications it extends. You might need to refresh the host application tab before the add-on appears.

When testing, make sure to:

- Test card navigation flows in all host applications.
- Use example test data.
- If your add-on connects to a third-party API, verify that authorization and sign-in work correctly.
- Handle error conditions gracefully.

For more details, see [Test and debug Apps Script Google Workspace add-ons](https://developers.google.com/workspace/add-ons/how-tos/testing-workspace-addons).

## 5\. Request reviews

Approval is required for all add-ons before they're listed in the Google Workspace Marketplace.

To submit for review, follow these steps:

1. Fulfill the [publishing requirements](https://developers.google.com/workspace/marketplace/about-app-review).
2. [Create a versioned deployment](https://developers.google.com/apps-script/concepts/deployments#creating_a_versioned_deployment) using the code to publish. Don't publish using a head deployment.
3. If you added scopes, [request OAuth verification](https://developers.google.com/apps-script/guides/client-verification#steps). Submit them for verification as early as possible. Verify the add-on before you proceed.

## 6\. Make the add-on available

1. Open the Google Workspace Marketplace SDK.
2. Select **Configuration**.
3. Update the description and screenshots.
4. Under **Extensions**, select **Upgrade to Google Workspace add-on**. In the box, enter the **deployment ID**.
5. If you added scopes, add them to the **OAuth 2.0 scopes** section. They must exactly match the manifest.
6. Verify the information and select **Save changes**.

## FAQ

Answers to frequently asked questions about add-on upgrades.

### Can I upgrade my Editor add-on?

Most Editor add-ons can move over to Google Workspace add-ons. However, the upgrade process is more complex than for legacy add-ons.

To migrate an Editor add-on, rewrite the UI as a [card-based interface](https://developers.google.com/workspace/add-ons/concepts/card-interfaces) and use the [Card Service](https://developers.google.com/apps-script/reference/card-service).

Some services might not be available. For example, there's no file picker in the Card Service.

### Can I build a separate Google Workspace add-on and keep my existing one?

You can build add-ons under different brand names, but we don't permit separate add-ons under the same brand name as your Google Workspace add-on. If you want to request an exception, [contact support](https://developers.google.com/workspace/add-ons#support).

### Will users need to re-authorize the add-on?

As long as the add-on uses the same [Cloud project](https://developers.google.com/apps-script/guides/cloud-platform-projects), users don't need to reauthorize previously approved permissions. However, if you add scopes, they must authorize them.

### Can I upgrade a Chrome extension and transfer users?

No. You can't transfer a Chrome extension's users, installs, or reviews. Create a new Google Workspace add-on and direct users to the Google Workspace Marketplace.

### Can I bundle add-ons?

See [List app integrations Together](https://developers.google.com/workspace/marketplace/list-multiple-app-integrations).
