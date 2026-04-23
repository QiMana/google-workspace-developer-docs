---
source: https://developers.google.com/workspace/drive/api/guides/about-apps
root: workspace
fetched_at: 2026-04-23T15:27:33.026Z
---

# Drive UI integration overview

The [*Google Drive user interface (UI)*](https://drive.google.com/drive/my-drive) is a Google-provided application where Drive users can create, organize, discover, and share content stored on Google Drive. You can integrate your Drive-enabled app with the Drive UI to take advantage of these features. There are two integrations that you can perform:

- Using the [Drive UI's "New" button](#new).
- Using the [Drive UI's "Open with" menu item](#open).

## Drive UI's "New" button

If you want Drive UI users to call your app to create a file, integrate your app with the Drive UI's "New" button.

The "New" button lets users open your application or other editor-style apps, such as Google Docs and Google Sheets, to create a new document.

![Google Drive UI's new button.](https://developers.google.com/static/workspace/drive/images/create-new-2015.png)

Figure 1. Using Drive UI's "New" button.

## Drive UI's "Open with" menu item

If you want Drive UI users to open documents with your app, integrate your app with the Drive UI's "Open with" menu item.

When a user right-clicks on a file in the Drive UI, a context menu opens. The right-click menu contains an "Open with" item letting the user select an application to open the file.

![Google Drive UI's open with menu item](https://developers.google.com/static/workspace/drive/images/open-with-2015.png)

Figure 2. Using Drive UI's "Open with" menu item.

## Related topics

For instructions on how to begin your integration, continue to [Configure a Drive UI integration](https://developers.google.com/workspace/drive/api/guides/enable-sdk).
