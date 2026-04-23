---
source: https://developers.google.com/workspace/drive/api/guides/enable-shareddrives
root: workspace
fetched_at: 2026-04-23T15:27:35.600Z
---

# Implement shared drive support

Shared drives follow different organization, sharing, and ownership models from My Drive. If your app is going to create and manage files on shared drives, you must implement shared drive support in your app. The complexity of your implementation depends on the functionality of your app.

To begin, you must include the `supportsAllDrives=true` query parameter in your requests when your app performs the following operations:

### Drive API v3

- `files.get`
- `files.list`
- `files.create`
- `files.update`
- `files.copy`
- `files.delete`
- `changes.list`
- `changes.getStartPageToken`
- `permissions.list`
- `permissions.get`
- `permissions.create`
- `permissions.update`
- `permissions.delete`

### Drive API v2

- `files.get`
- `files.list`
- `files.insert`
- `files.update`
- `files.patch`
- `files.copy`
- `files.trash`
- `files.untrash`
- `files.delete`
- `files.touch`
- `children.insert`
- `parents.insert`
- `changes.list`
- `changes.getStartPageToken`
- `changes.get`
- `permissions.list`
- `permissions.get`
- `permissions.insert`
- `permissions.update`
- `permissions.patch`
- `permissions.delete`

The `supportsAllDrives=true` parameter informs Google Drive that your application is designed to handle files on shared drives.

Applications that read or modify permissions, track changes, or search across multiple corpora require additional shared drive capabilities. The remainder of this document highlights additional changes required to perform these tasks.

## Search for content on a shared drive

Use the [`list`](../reference/rest/v3/files/list.md) method on the [`files`](../reference/rest/v3/files.md) resource to find user files in shared drives. To search for a shared drive, see [Search for shared drives](./search-shareddrives.md).

The `list` method contains the following shared drive-specific query parameters:

- `driveId`: ID of the shared drive to search.
- `corpora`: Bodies of items (files or documents) to which the query applies. Supported bodies are `user`, `domain`, `drive`, and `allDrives`. Prefer `user` or `drive` to `allDrives` for efficiency. By default, corpora is set to `user`.
- `includeItemsFromAllDrives`: Whether both My Drive and shared drive items should be included in results. If not present or set to false, then shared drive items are not returned.
- `supportsAllDrives`: Whether the requesting application supports both My Drive and shared drive. If false, shared drive items are not included in the response.

The following query modes are specific to shared drives:

| `includeItemsFromAllDrives` | `corpora` | Query description |
| --- | --- | --- |
| `true` | `user` | Queries files that the user has accessed, including both shared drive and My Drive files. |
| `true` | `domain` | Queries files that are shared to the domain, including both shared drive and My Drive files. |
| `true` | `drive` | Queries all items in the specified shared drive. The `driveId` must be specified in the request. |
| `true` | `allDrives` | Queries files that the user has accessed and all shared drives in which they're a member. Note that the response might include `incompleteSearch:true`, indicating that some corpora were not searched for this request. |

## Track changes on a shared drive

Use the [`list`](../reference/rest/v3/changes/list.md) method on the [`changes`](../reference/rest/v3/changes.md) resource to track changes on a shared drive. For more information, see [Track changes for users and shared drives](./about-changes.md).

The `list` method contains the following shared drive-specific query parameters:

- `driveId`: The shared drive from which changes are returned. If specified, the change IDs refer to changes to items within the shared drive providing the current state of a file. To refer to a specific shared drive change, both the shared drive ID and change ID must be used as an identifier.
- `includeItemsFromAllDrives`: Whether shared drive files or changes should be included in the list of changes.
- `supportsAllDrives`: Whether the requesting application supports shared drives. If false, then shared drive items, including both shared drives and files within a shared drive, aren't returned.

The following query modes are specific to shared drives:

| `includeItemsFromAllDrives` | `driveId` | Query description |
| --- | --- | --- |
| `true` | No | Changes are reflective of changes to files inside or outside of shared drives that the user has accessed, as well as changes to shared drives in which the user is a member. |
| `true` | Yes | Changes are reflective of changes to the particular shared drive that was specified and items inside that shared drive. |

For additional details about change log behavior, see [Track changes for users and shared drives](./about-changes.md).

## Enable shared drive support in the Drive UI

To access shared drive content using the Drive UI, make sure you have checked the **Shared drives support** box on the **Drive UI integration** tab of the Google Drive API in the [Google Cloud console](https://console.cloud.google.com/apis/dashboard). For more information, see [Configure a Drive UI integration](./enable-sdk.md).

## Use the Google Picker with shared drives

The [Google Picker](./picker.md) supports selecting items in shared drives. For details about enabling shared drive support and adding shared drives views in the picker, see the [Google Picker API](../../picker/reference/picker.md).

## Related topics

- [Manage shared drives](./manage-shareddrives.md)
