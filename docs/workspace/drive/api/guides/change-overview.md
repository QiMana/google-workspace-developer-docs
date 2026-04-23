---
source: https://developers.google.com/workspace/drive/api/guides/change-overview
root: workspace
fetched_at: 2026-04-23T15:27:35.042Z
---

# Changes and revisions overview

Google Drive maintains an automatic history of modifications, which can help users track file changes and content revisions. In the revision history, users can see what edits have been made and can revert to a specific version of a file with specific edits.

The following terms are relevant to the changes and revisions resources of the Google Drive API:

*Access Control List (ACL)*

The list of all permission resources associated with a file, folder, or shared drive.

*Change*

An alteration made to a file's content or metadata of a file or shared drive.

*User change log*

A record of all changes that a user made to every editable file in their My Drive, such as a Google Docs, Sheets, or a Slides. For members of a shared drive, the user change log also includes entries about shared drive membership, user access levels to items in that shared drive, and shared drive name changes.

*Shared drive change log*

A record of all changes to a shared drive, such as additions or removals of users, and all changes to items on that shared drive. A change to an item within a shared drive appears in both the *user change log* and shared drive change log.

*Change log entry*

A record of a change made to a file's content or metadata of a file or shared drive. A change log entry indicates the user who made the change, the timestamp, and an ID. There can only be one entry per file or shared drive in the change log at a time. Each time that file or shared drive changes, a new ID is created for that entry, and it replaces the previous entry.

*Revision*

A version of the file representing a change to the file's contents (not metadata). Each revision can be accessed using the [`revisions`](../reference/rest/v3/revisions.md) resource within the Drive API.

*Head revision*

The most current version of a file. The `headRevisionId` can be accessed using the [`files`](../reference/rest/v3/files.md) resource within the Drive API. The `headRevisionId` is only available for blob files in Drive.

*Blob revision*

A version of an unmodifiable binary file, such as an image, video, or PDF. If the blob revision is the only revision of the binary file, it cannot be deleted. A new blob can be uploaded as a new *revision*, which becomes the new *head revision* of that file.

Any blob file revision, other than the head revision, that's not designated as "Keep Forever" is purgeable. Purgeable revisions are typically preserved for 30 days, but can be purged earlier if a file has 100 revisions that aren't designated as "Keep Forever" and a new revision is uploaded.

For more information on setting blob revisions as "Keep Forever", see [Specify revisions to save from auto delete](./manage-revisions.md#specify-revisions).

*Revision history*

A record of all revisions of a file in chronological order. A change to a Docs, Sheets, or Slides file gets a new revision. Each time the content changes, Drive creates a new revision history entry for that file. However, these editor file revisions may be merged together, so the API response might not show all changes to a file.

## Related topics

- To identify where the change you want to track is recorded, see [Identify which change log to track](./about-changelogs.md).
- To set up change tracking for users and shared drives, see [Track changes for users and shared drives](./about-changes.md).
- To download a blob file content revision or to export a Google Workspace document content revision, see [Download and export files](./manage-downloads.md).
- To publish a revision, see [Manage file revisions](./manage-revisions.md).
- To set up change notifications, see [Notifications for resource changes](./push.md).
