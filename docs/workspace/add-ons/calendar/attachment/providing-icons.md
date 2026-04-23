---
source: https://developers.google.com/workspace/add-ons/calendar/attachment/providing-icons
root: workspace
fetched_at: 2026-04-23T15:22:31.496Z
---

# Provide attachment icons

## Page Summary

- Calendar add-ons allow developers to add custom attachments with optional icons to Calendar events using the EventAttachmentTrigger.
- Attachment icons must be hosted on Google's infrastructure and be the same icon used for the add-on's Google Workspace Marketplace store listing.
- To obtain the image URL for attachment icons, developers need to upload the icon as an "Application Icon 32x32" in the Google Cloud console's Google Workspace Marketplace SDK Store Listing section and use the resulting URL.

Google Calendar Google Workspace add-ons let developers add custom attachments to Calendar events through the use of the [EventAttachmentTrigger](../../../../apps-script/manifest/calendar-addons.md#eventattachmenttrigger). These custom attachments can optionally specify an image URL which is displayed as the attachment's icon inside of the Calendar event. Since these images are used within Calendar directly, you must host them on Google's infrastructure. Specifically, use the same icon that you use for the add-ons Google Workspace Marketplace [store listing](../../../marketplace/create-listing.md).

To obtain an image URL that can be used as the `attachment.iconUrl`:

1. Open the [Google Cloud console](https://console.cloud.google.com/).
2. If necessary, switch to the project hosting your Google Workspace add-on.
3. At the top-left, click Menu > **APIs & Services**.
4. In the list at the bottom, click **Google Workspace Marketplace SDK**.
5. Select the **Store Listing** tab.
6. In the **Graphics Assets** section, upload the intended attachment icon image as an **Application Icon 32x32**.
7. Copy the resulting image URL and use it as the `attachment.iconUrl`.
