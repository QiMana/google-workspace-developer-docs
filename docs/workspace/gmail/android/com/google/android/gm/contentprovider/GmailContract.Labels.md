---
source: https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels
root: workspace
fetched_at: 2026-04-23T15:28:48.394Z
---

# GmailContract.Labels

Table containing label information.

Nested Classes[GmailContract.Labels.LabelCanonicalNames](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.LabelCanonicalNames.html)

Constants[BACKGROUND\_COLOR](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.html#BACKGROUND_COLOR)[CANONICAL\_NAME](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.html#CANONICAL_NAME)[CONTENT\_ITEM\_TYPE](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.html#CONTENT_ITEM_TYPE)[CONTENT\_TYPE](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.html#CONTENT_TYPE)[NAME](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.html#NAME)[NUM\_CONVERSATIONS](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.html#NUM_CONVERSATIONS)[NUM\_UNREAD\_CONVERSATIONS](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.html#NUM_UNREAD_CONVERSATIONS)[TEXT\_COLOR](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.html#TEXT_COLOR)[URI](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.html#URI)

Public Methods[getLabelsUri](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.html#getLabelsUri\(java.lang.String\)) (String *account*)

## Constants

#### public static final String BACKGROUND\_COLOR

This integer value is the label's background color in 32-bit 0xAARRGGBB format.

Type: INTEGER

Constant Value: "background\_color"

#### public static final String CANONICAL\_NAME

This string value is the canonical name of a label. Canonical names are not localized and are not user-facing.

Type: TEXT

Constant Value: "canonicalName"

#### public static final String CONTENT\_ITEM\_TYPE

The MIME-type of a label item.

Constant Value: "vnd.android.cursor.item/vnd.com.google.android.gm.label"

#### public static final String CONTENT\_TYPE

The MIME-type of uri providing a directory of label items.

Constant Value: "vnd.android.cursor.dir/vnd.com.google.android.gm.label"

#### public static final String NAME

This string value is the user-visible name of a label. Names of system labels (Inbox, Sent, Drafts...) are localized.

Type: TEXT

Constant Value: "name"

#### public static final String NUM\_CONVERSATIONS

This integer value is the number of conversations in this label.

Type: INTEGER

Constant Value: "numConversations"

#### public static final String NUM\_UNREAD\_CONVERSATIONS

This integer value is the number of unread conversations in this label.

Type: INTEGER

Constant Value: "numUnreadConversations"

#### public static final String TEXT\_COLOR

This integer value is the label's foreground text color in 32-bit 0xAARRGGBB format.

Type: INTEGER

Constant Value: "text\_color"

#### public static final String URI

This string column value is the uri that can be used in subsequent calls to android.content.ContentProvider#query() to query for information on the single label represented by this row.

Type: TEXT

Constant Value: "labelUri"

## Public Methods

#### public static Uri getLabelsUri (String account)

Returns a URI that, when queried, will return the list of labels for an account.

To use the Labels API, an app must first find the email address of a valid Gmail account to query for label information. The [AccountManager](http://developer.android.com/reference/android/accounts/AccountManager.html) can return this information ([example](https://developers.google.com/workspace/gmail/android)).

##### Parameters

| account | Name of a valid Google account. |
| --- | --- |

##### Returns

- The URL that can be queried to retrieve the the label list.
