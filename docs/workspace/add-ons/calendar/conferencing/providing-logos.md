---
source: https://developers.google.com/workspace/add-ons/calendar/conferencing/providing-logos
root: workspace
fetched_at: 2026-04-23T15:22:33.177Z
---

# Provide conference solution logos

## Page Summary

- Conference solution logos within Google Calendar utilize the same icon as your add-on's Google Workspace Marketplace store listing.
- These logos must be hosted on Google's infrastructure, requiring you to upload your icon through the Google Cloud console and Google Workspace Marketplace SDK.
- This feature, originally for conference providers as calendar conferencing add-ons, lets you specify a distinct logo for each conference solution defined in your add-on manifest.

In your [Google Workspace add-on manifest](../../concepts/workspace-manifests.md#manifest_structure_for_g_suite_add-ons), you can specify a distinct `conferenceSolution[].logoUrl` for each conference solution your add-on defines. These `conferenceSolution[].logoUrl` images are used in the Google Calendar user interface to identify the conference solution.

Since these `logoUrl` images are used within Calendar directly, the images must be present on Google's infrastructure. Specifically, use the same icon that you use for the add-on's Google Workspace Marketplace [store listing](../../../marketplace/create-listing.md).

To obtain an image URL that can be used as the `conferenceSolution[].logoUrl`:

1. Open the [Google Cloud console](https://console.cloud.google.com/).
2. If necessary, switch to the project hosting your add-on.
3. At the top-left, click Menu > **APIs & Services**.
4. In the list at the bottom, click **Google Workspace Marketplace SDK**.
5. Select the **Store Listing** tab.
6. In the **Graphics Assets** section, upload the intended attachment icon image as an **Application Icon 32x32**.
7. Copy the resulting image URL and use it as the `attachment.iconUrl`.
