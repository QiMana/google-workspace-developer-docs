---
source: https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract.Labels.html
root: workspace
fetched_at: 2026-04-23T15:28:48.947Z
---

# GmailContract.Labels

Table containing label information.

Nested Classes[GmailContract.Labels.LabelCanonicalNames](./GmailContract.Labels.LabelCanonicalNames.html.md)

Constants[BACKGROUND\_COLOR](./GmailContract.Labels.html.md#BACKGROUND_COLOR)[CANONICAL\_NAME](./GmailContract.Labels.html.md#CANONICAL_NAME)[CONTENT\_ITEM\_TYPE](./GmailContract.Labels.html.md#CONTENT_ITEM_TYPE)[CONTENT\_TYPE](./GmailContract.Labels.html.md#CONTENT_TYPE)[NAME](./GmailContract.Labels.html.md#NAME)[NUM\_CONVERSATIONS](./GmailContract.Labels.html.md#NUM_CONVERSATIONS)[NUM\_UNREAD\_CONVERSATIONS](./GmailContract.Labels.html.md#NUM_UNREAD_CONVERSATIONS)[TEXT\_COLOR](./GmailContract.Labels.html.md#TEXT_COLOR)[URI](./GmailContract.Labels.html.md#URI)

Public Methods[getLabelsUri](./GmailContract.Labels.html.md#getLabelsUri(java.lang.String)) (String *account*)

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

To use the Labels API, an app must first find the email address of a valid Gmail account to query for label information. The [AccountManager](http://developer.android.com/reference/android/accounts/AccountManager.html) can return this information ([example](../../../../../../android.md)).

##### Parameters

| account | Name of a valid Google account. |
| --- | --- |

##### Returns

- The URL that can be queried to retrieve the the label list.
