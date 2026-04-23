---
source: https://developers.google.com/workspace/admin/groups-migration/v1/guides/overview
root: workspace
fetched_at: 2026-04-23T15:23:55.597Z
---

# Groups Migration API overview

The Groups Migration API manages the migration of shared emails from public folders and distribution lists to Google Groups's discussion archives. The Groups Migration API lets you store group email messages in the cloud and make them available in the group's archive. All group members who have access to the group's archive can view the migrated messages, but the emails aren't delivered to individual group members.

The Groups Migration API is for the migration of shared emails to Google Groups. For information about migrating or syncing emails from a specific custom application to Gmail, see the [Gmail API](../../../../gmail/api/guides.md). For specific information for custom application migration to Google Workspace, see the [Google Workspace migration tools product matrix](https://support.google.com/a/answer/9413033).

If a group is suspended, hasn't been created, or has read-only access, the Groups Migration API returns an error. For more information about how to identify and fix these errors, see the [Directory API](../../../directory/v1/guides/manage-groups.md), the [Groups Settings API](../../../groups-settings/concepts.md), and [Ways to create groups](https://support.google.com/a/answer/33343).
