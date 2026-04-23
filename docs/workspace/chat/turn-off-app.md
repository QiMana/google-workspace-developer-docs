---
source: https://developers.google.com/workspace/chat/turn-off-app
root: workspace
fetched_at: 2026-04-23T15:25:33.797Z
---

# Turn off or delete a Google Chat app

## Page Summary

- Google Chat apps can be turned off, unpublished from Google Workspace Marketplace, or permanently deleted by removing the associated Cloud project.
- Turning off a Chat app makes it unavailable for new installations and inaccessible to existing users, but keeps it discoverable in the Marketplace.
- Unpublishing a Chat app from Google Workspace Marketplace removes its listing and prevents user access, but maintains accessibility for specified users in the Cloud console configuration.
- Deleting the associated Cloud project permanently removes the Chat app after 30 days, making it unusable and irretrievable.

If you no longer want your Google Chat app to be available to users, you can turn off your Chat app, unpublish your app from Google Workspace Marketplace, or delete the Google Cloud project that's associated with the app.

## Turn off your Chat app

To turn off your Chat app, update the app status in the Google Cloud console. These changes take effect immediately. When a Chat app is turned off, it's no longer available for users in Google Chat to use, but is still discoverable. The Chat app appears offline. The Chat app is still listed in the Google Workspace Marketplace, but new users are unable to install the Chat app.

To turn off a Chat app, do the following:

1. In the Google Cloud console, go to **Menu \> APIs & Services \> Enabled APIs & Services \> Google Chat API \> Configuration**.
	[Go to Configuration](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat)
2. In **App status**, select **Disabled**.
3. Click **Save**.

If you don't want your Chat app to still be discoverable by users, [Unpublish your app from the Google Workspace Marketplace](https://developers.google.com/workspace/marketplace/manage-app-listing#unpublish_your_app_listing).

If you want to turn the Chat app back on, change the status to **Live - available to users**. The users who had previously installed your app regain access.

## Unpublish your app from the Google Workspace Marketplace

If your Chat app was published to the Google Workspace Marketplace and you no longer want it to be publicly listed, available to your domain, or available to Google Workspace administrators, see [Unpublish your app listing](https://developers.google.com/workspace/marketplace/manage-app-listing#unpublish_your_app_listing). After you unpublish, your app listing no longer appears on the Google Workspace Marketplace or in Google Chat, and users who have already installed your app can no longer access it. The app is still accessible to anyone who is listed in the **Visibility** section in the **Configuration** tab of the Google Chat API in the Google Cloud console.

If you republish the app, the users who had previously installed your app regain access.

## Delete the Cloud project

To permanently remove your Chat app, delete the Cloud project that's associated with your app. You don't need to first unpublish your Chat app from the Google Workspace Marketplace or turn off the Chat app. For more information, see [Shutting down (deleting) projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#shutting_down_projects).

The Cloud project and Chat app isn't usable and is permanently deleted after 30 days.

## Related topics

- [Restoring a project](https://cloud.google.com/resource-manager/docs/creating-managing-projects#restoring_a_project)
