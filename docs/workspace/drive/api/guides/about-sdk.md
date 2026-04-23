---
source: https://developers.google.com/workspace/drive/api/guides/about-sdk
root: workspace
fetched_at: 2026-04-23T15:27:33.067Z
---

# Google Drive API overview

The Google Drive API lets you create apps that use Google Drive cloud storage. You can develop applications that integrate with Drive, and create robust functionality in your application using the Drive API.

This diagram shows the relationship between your Drive app, the Drive API, and Drive:

![Google Drive relationship diagram.](https://developers.google.com/static/workspace/drive/images/drive-intro.svg)

Figure 1. Google Drive relationship diagram.

These terms define the key components shown in Figure 1:

*Google Drive*

Google's cloud file storage service provides users with a personal storage space, called *My Drive*, and the option to access collaborative shared folders, called *shared drives*.

*Google Drive API*

The REST API that lets you use Drive storage from within your app.

*Google Drive app*

An app that uses Drive as its storage solution.

*Google Drive UI*

Google's user interface that manages files stored on Drive. If your app is an editor-type app, such as a spreadsheet or word processor, you can integrate with the Drive UI to create and open files within your app.

*My Drive*

A Drive storage location that a specific user owns. Files stored on My Drive can be shared with other users, but ownership of the content remains specific to an individual user.

*OAuth 2.0*

The authorization protocol that Drive API requires to authenticate your app users. If your application uses [Sign In With Google](https://developers.google.com/identity/gsi/web/guides/overview), it handles the OAuth 2.0 flow and application access tokens.

*Shared drive*

A Drive storage location that owns files that multiple users collaborate on. Any user with access to a shared drive has access to all files it contains. Users can also be granted access to individual files inside the shared drive.

## What can you do with the Drive API?

You can use the Drive API to:

- [Download files](./manage-downloads.md) from Drive and [upload files](./manage-uploads.md) to Drive.
- [Search for files and folders](./search-files.md) stored in Drive. Create complex search queries that return any of the file metadata fields in the [`files`](../reference/rest/v3/files.md) resource.
- Let users [share files, folders, and drives](./manage-sharing.md) to collaborate on content.
- Combine with the [Google Picker API](../../picker/guides/overview.md) to search all files in Drive, then return the filename, URL, last modified date, and user.
- [Create *third-party shortcuts*](./third-party-shortcuts.md) that are external links to data stored outside of Drive, in a different datastore or cloud storage system.
- Create a dedicated Drive folder to [store application-specific data](./appdata.md) so the app cannot access all the user's content stored in Drive.
- Monitor or respond to file activity using [Google Drive events](../../../events/guides/events-drive.md).
- Integrate your Drive-enabled app with the [Drive UI](./about-apps.md) using the *Google Drive UI*. It's Google's standard web UI that you can use to create, organize, discover, and share Drive files.
- Apply [labels](./about-labels.md) to Drive files, set label field values, read label field values on files, and search for files using label metadata terms defined by the custom label taxonomy.

| ![](https://fonts.gstatic.com/s/i/productlogos/youtube/v9/192px.svg) | Want to see the Google Drive API in action?  The Google Workspace Developers channel offers videos about tips, tricks, and the latest features.  [Subscribe now](https://www.youtube.com/channel/UCUcg6az6etU_gRtZVAhBXaw) |
| --- | --- |

## Related topics

- To learn about developing with Google Workspace APIs, including handling authentication and authorization, see [Develop on Google Workspace](../../../guides/get-started.md).
- To learn how to configure and run a Drive API app, read the [Quickstarts](../quickstart/js.md).
