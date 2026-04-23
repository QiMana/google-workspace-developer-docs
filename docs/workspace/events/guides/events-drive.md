---
source: https://developers.google.com/workspace/events/guides/events-drive
root: workspace
fetched_at: 2026-04-23T15:28:36.155Z
---

# Subscribe to Google Drive events

This page describes the Google Drive events that your app can subscribe to using the Google Workspace Events API. After you decide which types of events you need, [create a subscription](https://developers.google.com/workspace/events/guides/create-subscription) to start receiving events from Drive.

To learn more about developing apps for Drive, see the [Google Drive API overview](https://developers.google.com/workspace/drive/api/guides/about-sdk).

## Supported Drive events

Google Workspace subscriptions let you receive events about the following types of changes in Drive:

- An [access proposal](https://developers.google.com/workspace/drive/api/reference/rest/v3/accessproposals) is created or resolved on a file.
- An [approval](https://developers.google.com/workspace/drive/api/reference/rest/v3/approvals) is created, cancelled, reset, or completed on a file. An approval reviewer is changed on a file. An approval reviewer responded to an approval on a file.
- A [comment](https://developers.google.com/workspace/drive/api/reference/rest/v3/comments) is created, edited, resolved, reopened, or deleted on a file or a file within a shared drive.
- A [file](https://developers.google.com/workspace/drive/api/reference/rest/v3/files) is:
	- Added to a folder or shared drive.
		- Moved to a folder or shared drive.
		- Edited or a new revision is uploaded.
		- Trashed or removed from the trash.
		- Renamed (the title of a file or folder is changed).
- [Permissions](https://developers.google.com/workspace/drive/api/reference/rest/v3/permissions) are created, edited, or deleted on a file.
- A [reply](https://developers.google.com/workspace/drive/api/reference/rest/v3/replies) is created, edited, or deleted on a comment thread in a file or a file within a shared drive.

### Resources that you can monitor for events

To receive events, specify a Drive resource to monitor, which is called the *target resource* of the subscription.

The Google Workspace Events API supports the following target resources for Drive:

| **Target resource** | **Format** | **Limitations (if applicable)** |
| --- | --- | --- |
| File | `//drive.googleapis.com/files/FILE`  where FILE is the ID in the [resource name](https://developers.google.com/workspace/drive/api/reference/rest/v3/files#File.FIELDS.drive_id) of the Drive API `files` resource. You can obtain the ID from the file's URL or by using the [`files.list`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/list) method. | The user that authorizes the subscription must have permission on the file within the subscription relative to the subscribe to event. |
| Shared drive | `//drive.googleapis.com/drives/DRIVE`  where DRIVE is the ID in the [resource name](https://developers.google.com/workspace/drive/api/reference/rest/v3/drives#Drive.FIELDS.id) of the Drive API `drives` resource. You can obtain the ID from the drive's URL or by using the [`drives.list`](https://developers.google.com/workspace/drive/api/reference/rest/v3/drives/list) method. | The subscription only receives events for items in the shared drive where the user is a member through their Google Workspace Account or Google Account. |

### Event types for creating subscriptions

When you create a subscription to a Drive resource, you use the [`eventTypes[]`](https://developers.google.com/workspace/events/reference/rest/v1/subscriptions#Subscription.FIELDS.event_types) field to specify which types of events you want to receive. Event types are formatted according to the [CloudEvents](https://cloudevents.io/) specification, such as `google.workspace.APPLICATION.RESOURCE.VERSION.ACTION`.

For example, to receive events about a file being created in a folder or shared drive, specify the file as the target resource, and the event type as `google.workspace.drive.file.v3.created`. To receive events about an access proposal being created on a file, specify the access proposal as the target resource, and the event type as `google.workspace.drive.accessproposal.v3.created`. To learn more about how events work, see [Structure of Google Workspace events](https://developers.google.com/workspace/events#structure).

The following table displays which event types are supported for subscriptions to Drive resources:

<table><thead><tr><th><strong>Event type</strong></th><th><strong>Format</strong></th><th><strong>Resource data</strong></th></tr></thead><tbody><tr><td><b>Subscriptions to files and shared drives</b></td><td colspan="4"></td></tr><tr><td>An access proposal is created on a file.</td><td><p><code>google.workspace.drive.accessproposal.v3.created</code></p></td><td><p><code>accessproposal</code></p></td></tr><tr><td>An access proposal is resolved on a file.</td><td><p><code>google.workspace.drive.accessproposal.v3.resolved</code></p></td><td><p><code>accessproposal</code></p></td></tr><tr><td>An approval is created on a file.</td><td><p><code>google.workspace.drive.approval.v3.created</code></p></td><td><p><code>approval</code></p></td></tr><tr><td>An approval is cancelled on a file.</td><td><p><code>google.workspace.drive.approval.v3.cancelled</code></p></td><td><p><code>approval</code></p></td></tr><tr><td>An approval is reset on a file.</td><td><p><code>google.workspace.drive.approval.v3.reset</code></p></td><td><p><code>approval</code></p></td></tr><tr><td>An approval is completed on a file.</td><td><p><code>google.workspace.drive.approval.v3.completed</code></p></td><td><p><code>approval</code></p></td></tr><tr><td>An approval reviewer is changed on a file.</td><td><p><code>google.workspace.drive.approval.v3.reviewersChanged</code></p></td><td><p><code>approval</code></p></td></tr><tr><td>An approval reviewer responded to an approval on a file.</td><td><p><code>google.workspace.drive.approval.v3.responded</code></p></td><td><p><code>approval</code></p></td></tr></tbody></table>
