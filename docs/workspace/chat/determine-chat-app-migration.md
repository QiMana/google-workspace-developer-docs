---
source: https://developers.google.com/workspace/chat/determine-chat-app-migration
root: workspace
fetched_at: 2026-04-23T15:25:23.287Z
---

# Determine if Google Chat apps need to migrate after merging Google Workspace organizations

## Page Summary

- Google Workspace organization or domain mergers may require Chat app migration if functionality is affected due to administrative settings in the new environment.
- Chat app migration may be unnecessary if the app is published on the Marketplace, the developer was initially a member of the destination environment, or it's shared with specific users whose email addresses remain unchanged.
- Access to Chat apps post-merger is limited, and users might lose access depending on the app's sharing settings; migration may be necessary to grant access to the entire new domain or specific groups.
- Administrators should update settings in the merged organization and check if those resolve any functionality issues before migrating the app.

If your Google Workspace organization or domain merges with another one, you might need to migrate your Chat app too. Mergers don't always affect Chat apps, but if your Chat app is no longer behaving as expected, you might need to change how the Chat app is configured.

## Ask your administrator to update settings in the new organization

Before migrating your Chat app, check with your organization's administrator to see if administrative settings are affecting it. Changing an administrative setting might restore full functionality to your Chat app and make migration unnecessary.

Whether or not you have to migrate your Chat app is determined by administrative settings in the merged Google Workspace organization that might cause your Chat app to stop working. For example, the administrator of the merged Google Workspace organization might have to add your Chat app to an allowlist, or might have to let users install th Chat app. For more information, see [Allow users to install Chat apps](https://support.google.com/a/answer/7651360)

## Determine if your Chat app need to migrate

If *any* of the following conditions are true, then your Chat app might remain fully functional with no need to migrate:

- Your Chat app is [published on the Marketplace](https://developers.google.com/workspace/marketplace/how-to-publish).
- You, the Chat app developer, were a member of the destination environment when you first saved your Chat app configuration.
- Your Chat app is only shared with specific users using their email addresses. Users' email addresses remain the same after the organizations are merged.

## Chat apps access after merging organizations

To make sure that your Chat app doesn't respond to users who shouldn't have permission to message it, access to your Chat app remains limited to the domain or organization under which it was created. If you were a member of the destination environment when you first saved your Chat app configuration, then your Chat app continues to work as expected. If you were a member of a source environment when you first saved your Chat app, then whether people retain or lose access to your Chat app is determined by how the Chat app is [shared](https://developers.google.com/workspace/marketplace/how-to-publish#audience):

- If your Chat app is shared with **Everyone in `DOMAIN_NAME`**, then after merging, users who are now part of the destination environment lose access to your Chat app.
- If your Chat app is shared with both specific users and groups, then after merging, the specific users retain access to the Chat app, but the groups lose access. To allow groups or the entire domain to message your Chat app, migrate the Chat app.

## Related topics

- [Migrate your Google Chat app](https://developers.google.com/workspace/chat/migrate-apps)
- [Allow users to install apps](https://support.google.com/a/answer/7651360)
