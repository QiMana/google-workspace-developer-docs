---
source: https://developers.google.com/workspace/drive/api/guides/android-api-deprecation
root: workspace
fetched_at: 2026-04-23T15:27:34.884Z
---

# Migrate from the Google Drive Android API

**The Drive Android API is deprecated as of December 6, 2018 and will be fully turned down on February 1, 2023**.

## Timeline

| Date | Drive Android API status |
| --- | --- |
| December 6, 2018 | Deprecation is [publicly announced](https://cloud.google.com/blog/products/application-development/sync-google-drive-files-to-apps-using-the-drive-rest-api-bidding-farewell-to-the-drive-android-api). Existing clients will be able to access the API normally, but should immediately commence with migration efforts. New clients must not use the API. |
| October 21, 2019 | The Drive Android API is removed from the Google Play Services SDK distribution. Apps will be unable to build until removing the Drive Android API dependency, but existing builds will be unaffected. The Drive Android API public documentation will no longer be available. |
| March 3, 2022 | The Drive Android API is deprecated and all API calls are non-operational. Clients must migrate by this date. |
| February 1, 2023 | The Drive Android API will be fully turned down and all connection attempts will be unsuccessful. |

## Use the Drive REST API

The Drive REST API offers the same functionality as the Drive Android API, including ways to:

- Share and collaborate as you expect from Drive. You can [manage permissions or prompt the Share dialog](https://developers.google.com/workspace/drive/api/guides/manage-sharing) to users as needed. The REST API also allows for commenting on files, allowing your app to interact with the conversation around a file.
- Search for files using [`files.list`](https://developers.google.com/workspace/drive/api/v3/reference/files/list), based on traditional indexing or [your own customized, indexable text](https://developers.google.com/workspace/drive/api/guides/file).
- Detect changes to files through the [Changes collection](https://developers.google.com/workspace/drive/api/v3/reference/changes) and to any shared with the user through [shared drives](https://developers.google.com/workspace/drive/api/guides/enable-shareddrives).
- Export and convert Google Docs so that your app can easily [open a user’s document](https://developers.google.com/workspace/drive/api/guides/integrate-open#specific).

To ease client migration efforts, a [sample app](https://github.com/googleworkspace/android-samples/tree/master/drive/deprecation) is provided which demonstrates each of the proposed replacements above. It also shows how to create, modify, and query for a user's Drive files using the REST API. If you have any issues, check out the [google-drive-api](https://stackoverflow.com/questions/tagged/google-drive-api?tab=Newest) tag on StackOverflow.

## Migration

Since the Drive Android API is deprecated, and all API calls are non-operational, make sure your app is no longer calling the API. To do this, remove the code that initializes the API: `addApi(Drive.API)`.

If you don't migrate from the Drive Android API, and your app attempts to call the API, the following error message is returned:

`com.google.android.gms.common.api.ApiException: 17: API: Drive.API is not available on this device. Connection failed with: ConnectionResult{statusCode=API_UNAVAILABLE, resolution=null, message=null}`
