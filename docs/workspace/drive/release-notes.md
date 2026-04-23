---
source: https://developers.google.com/workspace/drive/release-notes
root: workspace
fetched_at: 2026-04-23T15:28:35.069Z
---

# Google Drive API release notes

To get the latest product updates delivered to you, add the URL of this page to your [feed reader](https://wikipedia.org/wiki/Comparison_of_feed_aggregators), or add the feed URL directly: `https://developers.google.com/feeds/drive-release-notes.xml`.

This page contains release notes for features and updates to the Drive API. We recommend that Drive API developers periodically check this list for any new announcements.

## April 22, 2026

Feature

**[Developer Preview](../preview.md)**: The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server for Google Drive is now available in developer preview. MCP is an open protocol that enables seamless integration between AI applications and your Drive files. By configuring the Drive MCP server, you enable AI agents to securely search your files and take actions, such as reading content or creating files.

For example, you can ask your AI agent: *"Summarize the file 'Marketing Plan'."*

To get started with the Drive MCP server, see the following documentation:

- [Set up the Drive MCP server](./api/guides/configure-mcp-server.md)
- [Drive MCP tool reference](./api/reference/mcp.md)

To find more available MCP servers, see [Model Context Protocol (MCP) servers in Google Workspace](../guides/configure-mcp-servers.md).

## April 21, 2026

Feature

**Generally Available**: The Google Drive API now lets you start and manage approvals on Drive files through the [`approvals`](./api/reference/rest/v3/approvals.md) resource. The following API methods have been added:

- [`approvals.start`](./api/reference/rest/v3/approvals/start.md)
- [`approvals.approve`](./api/reference/rest/v3/approvals/approve.md)
- [`approvals.decline`](./api/reference/rest/v3/approvals/decline.md)
- [`approvals.reassign`](./api/reference/rest/v3/approvals/reassign.md)
- [`approvals.cancel`](./api/reference/rest/v3/approvals/cancel.md)
- [`approvals.comment`](./api/reference/rest/v3/approvals/comment.md)

You can still retrieve and list the status of your approvals using either the [`approvals.get`](./api/reference/rest/v3/approvals/get.md) or the [`approvals.list`](./api/reference/rest/v3/approvals/list.md) method.

For details, see [Manage approvals](./api/guides/approvals.md).

## February 25, 2026

Deprecated

**Generally Available**: The `enforceExpansiveAccess` query parameter is now deprecated for all methods in the [`permissions`](./api/reference/rest/v3/permissions.md) resource (v2 and v3). To restrict item access, use the [folders with limited access](./api/guides/limited-expansive-access.md) setting instead.

## December 17, 2025

Feature

**Generally Available**: The Google Drive API now supports the reading of content approvals on Drive files through the [`approvals`](./api/reference/rest/v3/approvals.md) resource. To retrieve approvals on a file, you can use either the [`get`](./api/reference/rest/v3/approvals/get.md) or [`list`](./api/reference/rest/v3/approvals/list.md) method.

For details, see [Manage approvals](./api/guides/approvals.md).

Feature

**(Developer Preview)**: You can now get [`approval`](./api/reference/rest/v3/approvals.md) events in Google Drive. The following event types are supported:

- An approval is created, cancelled, reset, or completed on a file.
- An approval reviewer is changed on a file.
- An approval reviewer responded to an approval on a file.

For details, see [Subscribe to Google Drive events](../events/guides/events-drive.md) in the Google Workspace Events API documentation. For information on how to receive Google Drive events from Google Cloud Pub/Sub, see [Work with events from Google Drive](./api/guides/events-overview.md).

## November 11, 2025

Feature

**(Developer Preview)**: You can now get `comment` and `reply` events in Google Drive. The following event types are supported:

- A user posts a comment in a Google Docs, Sheets, or Slides file.
- A user replies to a comment.

For details, see [Subscribe to Google Drive events](../events/guides/events-drive.md) in the Google Workspace Events API documentation. For information on how to receive Google Drive events from Google Cloud Pub/Sub, see [Work with events from Google Drive](./api/guides/events-overview.md).

## July 16, 2025

Change

The Drive API has changed how download, print, and copy restrictions are applied.

Users with the role of `owner` or `organizer` can apply restrictions to other users with `writer` roles, in addition to `reader` roles. Users can directly apply restrictions on files using the `itemDownloadRestriction` field within the [`DownloadRestrictionsMetadata`](./api/reference/rest/v3/files.md#downloadrestrictionsmetadata) object. Determination of whether file restrictions can be changed is controlled by the new `capabilities.canChangeItemDownloadRestriction` field.

Similarly, users with the role of shared drive `organizer` can directly apply restrictions on shared drives using the `downloadRestriction` field within the [`Restrictions`](./api/reference/rest/v3/drives.md#Drive.FIELDS.restrictions) object. Determination of whether shared drive restrictions can be changed is also controlled by the `capabilities.canChangeDownloadRestriction` field.

While the previous field (`copyRequiresWriterPermission`) that controlled download, print, and copy restrictions is still available, the functionality is different for both reading from and writing to the field. We recommend that you use the new `DownloadRestriction` object to enforce how users can download, print, and copy files.

For more information about how download, print, and copy restrictions are now applied for My Drive and shared drive files, see:

- [Protect file content](./api/guides/content-restrictions.md#download-print-copy)
- [Manage shared drives](./api/guides/manage-shareddrives.md#download-print-copy)

## July 07, 2025

Feature

**(Developer Preview)**: You can now subscribe to events in Google Drive. The following event types are supported:

- A file is added to a folder or shared drive.
- A file is moved to a folder or shared drive.
- A file is edited or a new revision is uploaded.
- A file is trashed or removed from the trash.
- An access proposal is created or resolved on a file.

For details, see [Subscribe to Google Drive events](../events/guides/events-drive.md) in the Google Workspace Events API documentation. For information on how to receive Google Drive events from Google Cloud Pub/Sub, see [Work with events from Google Drive](./api/guides/events-overview.md).

## February 19, 2025

Feature

**Generally Available**: The Google Drive API now supports folders with limited access which allow you to restrict folders to specific users. Folders with limited access broadens the expansive access model from shared drives to My Drive.

To limit access to a folder, developers can set the boolean `inheritedPermissionsDisabled` field on the [`files`](./api/reference/rest/v3/files.md) resource to `true`. Developers can also opt in to expansive access API behavior in My Drive ahead of any future mandatory enforcement by setting the `enforceExpansiveAccess` request parameter to `true` on the [`permissions.delete()`](./api/reference/rest/v3/permissions/delete.md) and [`permissions.update()`](./api/reference/rest/v3/permissions/update.md) methods.

To learn more, see [Manage folders with limited and expansive access](./api/guides/limited-expansive-access.md).

## September 13, 2024

Feature

The Google Drive API returns a long-running operation (LRO) every time you call the [`files.download`](./api/reference/rest/v3/files/download.md) method to download blob file content or export Google Workspace document content either through the Drive API or its client libraries.

The `files.download` method returns an [`Operation`](https://cloud.google.com/service-infrastructure/docs/service-management/reference/rpc/google.longrunning#operation) resource to the client. You can use the `Operation` interface to asynchronously retrieve the status of the API method by polling the operation through the [`GetOperationRequest`](https://cloud.google.com/service-infrastructure/docs/service-management/reference/rpc/google.longrunning#getoperationrequest) method.

The `files.download` method is the only way to download Google Vids files in MP4 format and is typically best suited to downloading most video files.

To learn more, see [Manage long-running operations](./api/guides/long-running-operations.md).

## July 11, 2024

Feature

The Google Drive API now supports the `drive.meet.readonly` scope. This restricted scope lets you view Drive files created or edited by Google Meet.

For details, see [Choose Google Drive API scopes](./api/guides/api-specific-auth.md).

## January 26, 2024

Change

You can now get a list of the user's installed apps in v3, with information about each app's supported MIME types, file extensions, and other details.

The [`apps`](./api/reference/rest/v3/apps.md) resource represents a user's list of installed apps and it supports the following methods:

- [Get](./api/reference/rest/v3/apps/get.md) a specific installed app.
- [List](./api/reference/rest/v3/apps/list.md) all the installed apps.

## January 24, 2024

Change

Each user can have up to [500 million items](./api/guides/folder.md#user-limit) that were created by that account, no matter where those items reside. Previously, users could create an unlimited number of items in Drive.

## November 21, 2023

Change

A user's My Drive can't contain more than [100 levels of nested folders](./api/guides/folder.md#depth-limit). Previously, folders in My Drive could be at an unlimited depth.

## July 24, 2023

Feature

A new content restriction parameter that only the file owner can modify (`ownerRestricted`) was added.

In addition, three capabilities were added:

- `capabilities.canModifyEditorContentRestriction`
- `capabilities.canModifyOwnerContentRestriction`
- `capabilities.canRemoveContentRestriction`

For details, see [Protect file content](./api/guides/content-restrictions.md).

Deprecated

The `capabilities.canModifyContentRestriction` parameter was deprecated.

## March 10, 2013

Announcement

The Google Drive API is now generally available.
