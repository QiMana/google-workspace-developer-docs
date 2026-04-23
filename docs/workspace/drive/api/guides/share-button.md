---
source: https://developers.google.com/workspace/drive/api/guides/share-button
root: workspace
fetched_at: 2026-04-23T15:27:44.053Z
---

# Display the sharing dialog

To allow users to share Drive files directly from your app, you can use the Google Drive sharing dialog. This modal dialog is invoked from your app to allow sharing of items on Drive. Figure 1 shows the Google Docs Share button and the resulting sharing dialog.

![Share button and dialog](https://developers.google.com/static/drive/images/share-dialog.png)

Figure 1. Share button and dialog.

To enable the Drive sharing dialog, add the dialog script and a launch button or other launching mechanism to your UI.

### Add the dialog script

To create an instance of the sharing dialog, add the following script to your launching page:

```
<head>
...
<script type="text/javascript" src="https://apis.google.com/js/api.js"></script>
<script type="text/javascript">
    init = function() {
        s = new gapi.drive..ShareClient();
        s.setOAuthToken('<OAUTH_TOKEN>');
        s.setItemIds(['<FILE_ID>']);
    }
    window.onload = function() {
        gapi.load('drive-share', init);
    }
</script>
</head>
```

Where:

- `<OAUTH_TOKEN>` should be replaced with the [authorized user's OAuth2 access token](./api-specific-auth.md).
- `<FILE_ID>` should be replaced with the id of the file to share.

### Add a launch button

In your UI, add a line of code similar to the following:

```
<button onclick="s.showSettingsDialog()">Share</button>
```

This code calls the `showSettingsDialog()` function when the Share button is clicked.
