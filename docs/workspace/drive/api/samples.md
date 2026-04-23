---
source: https://developers.google.com/workspace/drive/api/samples
root: workspace
fetched_at: 2026-04-23T15:28:06.646Z
---

# Google Drive API samples

This section provides samples for Google Drive API.

For introductory videos about Drive API, see the [Drive API video library](https://developers.google.com/workspace/drive/api/guides/videos).

Google hosts the following samples on GitHub. You can fork these repositories and use the code as a reference for your own projects.

## Google Picker

The [Google Picker code sample](https://developers.google.com/workspace/drive/picker/guides/sample) shows how to use an image selector or upload page that users can open from a button in a web app.

To view or download the source, visit [Google Picker](https://github.com/googleworkspace/browser-samples/tree/main/drive/picker) on the GitHub repository.

## Open and save files with Quickeditors

This Quickeditors code sample shows how to open and save files with the Drive API.

Each of the Drive platform-specific examples reflects a single sample app: a text editor, called a Quickeditor, capable of editing Drive files with the MIME type `text/*`. The [web version](https://github.com/googleworkspace/drive-quickeditors/tree/main/web) implements two fundamental Drive use cases:

- [Integrate with Drive UI's "New" button](https://developers.google.com/workspace/drive/api/guides/integrate-create)
- [Integrate with Drive UI's "Open with" context menu](https://developers.google.com/workspace/drive/api/guides/integrate-open)

The flow for both use cases is similar. Drive redirects a user to the app after the user selects it from the create menu or the context menu of a file with a registered [MIME type](https://developers.google.com/workspace/drive/api/guides/mime-types).

To view or download the source, visit [Drive Quickeditors](https://github.com/googledrive/web-quickeditor) on the GitHub repository.

## Related topics

- [The Google Picker API](https://developers.google.com/workspace/drive/picker/guides/overview)
- [Drive UI integration overview](https://developers.google.com/workspace/drive/api/guides/about-apps)
