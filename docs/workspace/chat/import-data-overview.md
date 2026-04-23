---
source: https://developers.google.com/workspace/chat/import-data-overview
root: workspace
fetched_at: 2026-04-23T15:25:27.182Z
---

# Migrate your Google Workspace organization to Google Chat

## Page Summary

- Google Chat apps can import messaging data (messages, attachments, reactions, memberships, spaces) from other platforms to Google Chat for Google Workspace users.
- Importing data preserves historical context and provides a better user experience during migration.
- Import mode spaces are used for data import and are hidden from end-users until the import is complete to prevent interference.
- Chat apps have 90 days to import data into an import mode space before it's automatically deleted.
- Google recommends using Google Drive API for uploading attachments during import to avoid hitting Google Chat's internal limits.

This page provides an overview about Google Chat apps that help Google Workspace organizations migrate to Google Chat from other messaging platforms.

As a Google Workspace administrator, you can create a Chat app that imports messaging data from other messaging platforms. To import data, the Chat app creates [Chat API resources](./api/reference/rest.md) based on existing messages, attachments, reactions, memberships, and spaces in your organization.

## Why import data when migrating to Chat

Importing data to Chat provides a better experience for users in your organization because they can preserve history and context from existing messaging platforms that they use. In comparison to copying source data into regular spaces, the use of import mode spaces have the following advantages:

- Preservation of resource creation timestamps. You can set a historical time for the creation times of space and message resources, letting Chat apps retain historical context during user adoption of Google Chat. For more information, see .
- End users can't view or access spaces in import mode. To prevent user interference of a space undergoing data import, or to avoid possible user confusion as a result of viewing an in-progress data import, spaces in import mode are hidden from end users. After a space has completed import mode, you can add users to the space.
- Chat turns off notifications during import mode, so that users can avoid unnecessary alerts about the migration.

## Google Chat API resources that you can create to import messaging data

To import messaging data, you create Chat API resources based on data from another messaging platform. You create these resources in *import mode* Chat spaces. You can only use import mode spaces during the import process.

You can create the following Chat API resources in import mode spaces:

- [Messages](./api/reference/rest/v1/spaces.messages.md)
- [Attachments](./api/reference/rest/v1/spaces.messages.attachments.md) with the following considerations:
	- Attachments can be uploaded to import mode spaces with Google Chat API, **however we highly recommend using [Google Drive API](../drive/api/reference/rest/v3.md) to upload files and link the file URIs to the respective messages in the import mode spaces instead to avoid hitting Google Chat internal limit for attachment upload.**
- [Reactions](./api/reference/rest/v1/spaces.messages.reactions.md)
- [Memberships](./api/reference/rest/v1/spaces.members.md) with the following considerations:
	- [Historical memberships](./import-data.md#historical_memberships) must be imported when a space is in import mode. You can't import historical memberships after the space completes import mode.
		- Other existing memberships from the source messaging platform must be created after a space completes import mode.
		- Members must be users within the same domain.
- [Spaces](./api/reference/rest/v1/spaces.md). Only `SpaceType.SPACE` and `SpaceType.GROUP_CHAT` are supported.

## Map source data to Google Chat resources

When importing data from source messaging platforms into Google Chat, review the supported resources that you can create in Chat. Then, determine the source entities that you want to import and map each one to a Chat resource. After you've planned the resource mappings, read the entities from the source messaging platform, and write them into import mode spaces.

## Related topics

- To learn how to authenticate with Chat API when using import mode spaces, see [Authorize Google Chat apps](./authorize-import.md).
- To learn how to start importing resources using import mode spaces, see .
