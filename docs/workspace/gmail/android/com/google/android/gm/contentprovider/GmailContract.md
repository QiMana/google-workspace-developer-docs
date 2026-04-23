---
source: https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract
root: workspace
fetched_at: 2026-04-23T15:28:49.224Z
---

# GmailContract

Contract for use with the Gmail content provider.

Developers can use this content provider to display label information to the user.  
The label information includes:

- Label name
- Total number of conversations
- Number of unread conversations
- Label text color
- Label background color

This content provider is available in Gmail version 2.3.6 or newer for Froyo/Gingerbread and version 4.0.5 and newer for Honeycomb and Ice Cream Sandwich

An application can query the [Content Resolver](http://developer.android.com/reference/android/content/ContentResolver.html) directly (or use a [Loader](http://developer.android.com/guide/topics/fundamentals/loaders.html)) to obtain a Cursor with information for all labels on an account

`Cursor labelsCursor = getContentResolver().query(GmailContract.Labels.getLabelsUri(  selectedAccount), null, null, null, null);`

Nested Classes[GmailContract.Labels](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.html)

Constants[AUTHORITY](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.html#AUTHORITY)[PERMISSION](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.html#PERMISSION)

Public Methods[canReadLabels](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.html#canReadLabels\(Context\)) (Context *c*)

## Constants

#### public static final String AUTHORITY

Authority for the Gmail content provider.

Constant Value: "com.google.android.gm"

#### public static final String PERMISSION

Permission required to access this android.content.ContentProvider

Constant Value: "com.google.android.gm.permission.READ\_CONTENT\_PROVIDER"

## Public Methods

#### public static boolean canReadLabels (Context c)

Check if the installed Gmail app supports querying for label information.

##### Parameters

| c | an application Context |
| --- | --- |

##### Returns

- true if it's safe to make label API queries
