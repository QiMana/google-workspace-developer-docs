---
source: https://developers.google.com/workspace/vault/release-notes
root: workspace
fetched_at: 2026-04-23T15:32:09.903Z
---

# Google Vault API release notes

To get the latest product updates delivered to you, add the URL of this page to your [feed reader](https://wikipedia.org/wiki/Comparison_of_feed_aggregators), or add the feed URL directly: `https://developers.google.com/feeds/vault-release-notes.xml`.

This page contains release notes for features and updates to the Vault API. We recommend that Vault API developers periodically check this list for any new announcements.

## June 01, 2020

Deprecated

All Team Drive-related fields are removed from the Vault API. Although these fields are marked as deprecated and will continue to be available until then, we strongly recommend that you update your apps and your API configuration to reference the new fields as soon as possible. If you do not migrate your apps by June 1, 2020, they might stop functioning.

If you have additional questions or need assistance, please visit our [support page](./support.md).

## June 10, 2019

Change

The "Team Drive" feature of Google Drive has been renamed to "shared drive". Consequently, the Vault API is changing as follows:

- Shared drive-related request and response fields have replaced Team Drive in:
	- [`DriveOptions`](./reference/rest/v1/Query.md#driveoptions)
		- [`HeldDriveQuery`](./reference/rest/v1/matters.holds.md#helddrivequery)
		- [`SearchMethod`](./reference/rest/v1/Query.md#searchmethod)
- [`SharedDriveInfo`](./reference/rest/v1/Query.md#shareddriveinfo) has replaced [`TeamDriveInfo`](./reference/rest/v1/Query.md#teamdriveinfo).

## March 16, 2019

Change

Hangouts Chat and Google Meet together are the next generation of Hangouts. Later this year they will replace the original version (classic Hangouts) in Google Workspace.

Vault admins must take action to prepare for this migration. [Learn More.](https://developers.google.com/vault/guides/chat)
