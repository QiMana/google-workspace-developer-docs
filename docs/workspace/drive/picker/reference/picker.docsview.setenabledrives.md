---
source: https://developers.google.com/workspace/drive/picker/reference/picker.docsview.setenabledrives
root: workspace
fetched_at: 2026-04-23T15:28:21.116Z
---

# Method DocsView.setEnableDrives

Shows shared drives and the files they contain. Before enabling, refer to [GoogleDrive API documentation for enabling shared drives](https://developers.google.com/workspace/drive/v3/web/enable-shareddrives).

If `true`, only shared drives are included in the view.

Don't combine this setting with `setParent` or `setFileIds`. Calls to this function override previous calls to `setParent` or `setFileIds`.

Don't combine this setting with `setOwnedByMe`. When `setEnableDrives(true)` and `setOwnedByMe(true)` are set, there are no results.

Don't combine this setting with `setStarred`. When `setEnableDrives(true)` is set, `setStarred` is ignored.

## Signature

```
setEnableDrives(enabled: boolean): DocsView;
```

## Details

| Optional | No |
| --- | --- |
| Final | No |
| Protected | No |
| Static | No |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | No |  |
