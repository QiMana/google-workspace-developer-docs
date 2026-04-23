---
source: https://developers.google.com/workspace/drive/api/guides/manage-revisions
root: workspace
fetched_at: 2026-04-23T15:27:38.100Z
---

# Manage file revisions

This guide explains how to use the [`revisions`](../reference/rest/v3/revisions.md) resource to manage file revisions, such as getting a file revision and publishing a Google Workspace revision. The Google Drive API also lets you download revisions. For more details about revision terminology, see [Changes and revisions overview](./change-overview.md).

To access the revision history, a user must have the `role` of `owner`, `organizer`, `fileOrganizer`, or `writer`.

To specify the fields to return in the response, you can set the `fields` [system parameter](https://cloud.google.com/apis/docs/system-parameters#definitions) with any method of the [`revisions`](../reference/rest/v3/revisions.md) resource. If you omit the parameter, the server returns a default set of fields. For example, the `revisions.list` method only returns the `id`, `mimeType`, `kind`, and `modifiedTime` fields. To return different fields, see [Return specific fields](./fields-parameter.md).

## Specify revisions to save from auto delete

Google Drive automatically deletes older revisions that are no longer of interest to the user.

A [blob](./about-files.md#types) file revision can be set to "Keep Forever" meaning the revision cannot be automatically purged. Up to 200 revisions can be set to "Keep Forever" and they count towards your storage limit. The head revision is never auto-purged.

Any blob file revision, other than the head revision, that's not designated as "Keep Forever" is purgeable. Purgeable revisions are typically preserved for 30 days, but can be purged earlier if a file has 100 revisions that aren't designated as "Keep Forever" and a new revision is uploaded.

You can set the boolean `keepForever` field of the [`revisions`](../reference/rest/v3/revisions.md) resource to `true` to mark revisions that you don't want Drive to purge. Once a blob file revision is set to "Keep Forever", it can only be downloaded or deleted. For more information, see [Download a revision](#download-revision) or [Delete a revision](#delete-file-revision).

If you're using the older Drive API v2, use the [`pinned`](../reference/rest/v2/revisions.md#Revision.FIELDS.pinned) field of the [`revisions`](../reference/rest/v2/revisions.md) resource instead of `keepForever`.

## Get a file revision

To get a file revision's metadata or content, use the [`get`](../reference/rest/v3/revisions/get.md) method on the [`revisions`](../reference/rest/v3/revisions.md) resource with the `fileId` and `revisionId` path parameters. If you don't know the revision ID, you can [list all revisions on a file](#list-file-revisions) using the `list` method.

The method returns the revision's metadata as an instance of a `revisions` resource.

To acknowledge the risk of downloading known malware or other [abusive](https://support.google.com/docs/answer/148505) files, set the `acknowledgeAbuse` query parameter to `true`. This field is only applicable when the `alt=media` parameter is set and the user is either the file owner or an organizer of the shared drive in which the file resides.

## List a file's revisions

To list a file's revisions, use the [`list`](../reference/rest/v3/revisions/list.md) method on the [`revisions`](../reference/rest/v3/revisions.md) resource with the `fileId` path parameter. The method returns a list of file revisions.

Pass the following query parameters to customize pagination of, or filter, revisions:

- `pageSize`: The maximum number of revisions to return per page.
- `pageToken`: A page token, received from a previous list call. Provide this token to retrieve the subsequent page.

## Update a file revision

To update a revision on a file, use the [`update`](../reference/rest/v3/revisions/update.md) method on the [`revisions`](../reference/rest/v3/revisions.md) resource with the `fileId` and `revisionId` path parameters.

The method returns an instance of a `revisions` resource.

## Download a revision

You can only download blob file content revisions marked as "Keep Forever". If you want to download a revision, make sure to set it to "Keep Forever" first. For more information, see [Specify revisions to save from auto delete](#specify-revisions).

To download a blob file content revision or to export a Google Workspace document content revision, see [Download and export files](./manage-downloads.md).

## Delete a file revision

To permanently delete a file revision, use the [`delete`](../reference/rest/v3/revisions/delete.md) method on the [`revisions`](../reference/rest/v3/revisions.md) resource with the `fileId` and `revisionId` path parameters.

You can only delete revisions for blob files with binary content in Drive, such as images, videos, and PDFs. You can delete a blob file revision when it's marked as "Keep Forever." Revisions for other files, such as a Google Docs or Sheets, and the last remaining revision of the binary file, can't be deleted.

## Publish a revision

To publish a Google Docs, Google Sheets, and Google Slides revision, set the `published` property for that file in the [`revisions`](../reference/rest/v3/revisions.md) resource. This property can't be set for Google Sites revisions using Drive API.

Published revisions don't reflect changes made to a file unless the `publishAuto` property is set. If the property is set to `true`, newer revisions of a file are automatically published, overwriting the previous ones. Slides and Drawings only support automatic re-publishing and require the `publishAuto` property to be set to `true`. For Sites files, `publishAuto` is always `false`.

If the file is created in a Google Workspace domain, the `publishedOutsideDomain` property indicates whether the revision is accessible by anyone or if it's restricted to users of the domain. For Sites files, this property indicates whether a `type=anyone` permission exists. For more information, see the [`type`](../reference/rest/v3/permissions.md#Permission.FIELDS.type) field on the `permissions` resource.

Automatic publishing is also controlled by the "Automatically republish when changes are made" checkbox in the UI of Docs and Sheets. For more information, see [Make Google Docs, Sheets, Slides & Forms public](https://support.google.com/docs/answer/183965).

## Related topics

- [Download and export files](./manage-downloads.md)
- [Roles and permissions](./ref-roles.md)
