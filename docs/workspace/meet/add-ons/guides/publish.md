---
source: https://developers.google.com/workspace/meet/add-ons/guides/publish
root: workspace
fetched_at: 2026-04-23T15:30:12.637Z
---

# Publish your Meet add-on

This page explains how you can prepare your Google Meet add-on to publish to the [Google Workspace Marketplace](https://workspace.google.com/marketplace) so that you can share your app with select people or groups, everyone in your Google Workspace organization, or any Google Meet user.

## How users discover and use Meet add-ons

To discover a Meet add-on, users can do any of the following:

- Search and install a Meet add-on from Meet or the [Marketplace](https://workspace.google.com/marketplace?host=meet).
- Interact with a Meet add-on that's being used in a Meet meeting or through the meeting tools ![The meeting tools icon.](https://developers.google.com/static/workspace/meet/add-ons/images/apps.png) panel.
- Install a Meet add-on using a direct link shared by another user.

For more information on how meeting participants use add-ons, see [Use a Meet add-on](./use-add-on.md).

## Prepare your Meet add-on for publication

This section explains how to prepare and plan for publishing your Meet add-on to the Marketplace.

### Determine your audience

If you want other users to be able to install your Meet add-on, or if you want to test the screenshare entry flow, your Meet add-on needs to be published. You can choose to publish your add-on either privately or publicly.

When you [publish privately](#private), your add-on is limited to users within your Google Workspace organization. When you publish your add-on privately to your domain, the Google team doesn't review your add-on before it's published.

When you [publish publicly](#public), your add-on is listed on the Marketplace for any user to find and install. When you publish your add-on publicly, the Google team reviews your add-on before it's published live on the Marketplace.

### Review the add-on publication requirements

Review the add-on publication requirements and verify that your Meet add-on satisfies all of them. To make sure your add-on is ready for review, see [App review process and requirements for the Google Workspace Marketplace](../../../marketplace/about-app-review.md).

Even if you plan to publish privately to your domain, make sure your add-on meets the publishing requirements. It's important to provide an optimal experience for your users.

### Test your add-on

Make sure your Meet add-on is fully functional and not a work in progress. Thoroughly test your add-on within your environment.

## Configure and publish your Meet add-on to the Marketplace

When you're ready to publish your Meet add-on, you must enable and configure the Google Workspace Marketplace SDK. To get started, follow the steps in [Publish apps to the Google Workspace Marketplace](../../../marketplace/how-to-publish.md).

### Publish a Meet add-on privately

When you publish privately, your add-on is limited to users within your domain.

You have control over whether users can discover it using the Marketplace or whether they need a direct link. If the add-on is configured to be discoverable, users within your domain can find it in the [Internal Apps](https://workspace.google.com/marketplace/mydomainapps) section of the Marketplace.

### Publish a Meet add-on publicly

When you publish publicly, you make it available for any user to find, install, and use. Your add-on is listed on the [Marketplace](https://workspace.google.com/marketplace?host=meet).

To publish an app publicly to the Marketplace, Google reviews your app and its listing to make sure they meet Google's design, content, and style guidelines.

Before you submit your app for review, make sure it meets all requirements by following the steps in these checklists:

1. [Requirements for all apps](../../../marketplace/about-app-review.md#reqs_all)
2. [Requirements for specific app integrations](../../../marketplace/about-app-review.md#add_reqs)
	1. Select **Google Workspace add-on** from the **App integration** list.
		2. Make sure your app meets the generic, non-product specific requirements. This includes the following:
		1. The top checkbox under `Functionality`.
				2. The top six checkboxes under `User experience`.
		3. Make sure your app meets all the **Meet add-ons** requirements under `Functionality`, `User experience`, and `Graphics`.

#### Publish a new Meet add-on

If you're publishing a new add-on, follow the steps in [Create a store listing](../../../marketplace/create-listing.md).

#### Add Meet features to a published add-on

If you're adding Meet add-on features to an already-approved Google Workspace add-on, you must fill out the [Meet add-on Review Request form](https://docs.google.com/forms/d/e/1FAIpQLSeic-ep9bm2R1tkBJYaMhd3PHeU5jhCm85GHFCVUe5qTnOSzA/viewform?usp=sf_link).

## Related topics

- [Publish apps to the Google Workspace Marketplace](../../../marketplace/how-to-publish.md)
- [Update or unpublish an app listing in the Google Workspace Marketplace](../../../marketplace/manage-app-listing.md)
