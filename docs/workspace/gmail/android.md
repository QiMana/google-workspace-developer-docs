---
source: https://developers.google.com/workspace/gmail/android
root: workspace
fetched_at: 2026-04-23T15:28:49.028Z
---

# Android content provider for Gmail

The Android Gmail app includes a [content provider](https://developer.android.com/guide/topics/providers/content-providers) that third party developers can use to retrieve label information like name and unread count, and stay updated as that information changes. For example, an app or widget could display the unread count of a specific account's inbox.

Before using this content provider, call the [`GmailContract.canReadLabels(Context)`](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract#public-static-boolean-canreadlabels-context-c) method to determine whether the user's version of the Gmail app supports these queries.

## Find a valid Gmail account to query

An app must first find the email address of a valid Gmail account to query for label information. With the [`GET_ACCOUNTS`](http://developer.android.com/reference/android/Manifest.permission.html#GET_ACCOUNTS) permission, the [`AccountManager`](http://developer.android.com/reference/android/accounts/AccountManager.html) can return this information:

```
// Get the account list, and pick the first one
final String ACCOUNT_TYPE_GOOGLE = "com.google";
final String[] FEATURES_MAIL = {
        "service_mail"
};
AccountManager.get(this).getAccountsByTypeAndFeatures(ACCOUNT_TYPE_GOOGLE, FEATURES_MAIL,
        new AccountManagerCallback() {
            @Override
            public void run(AccountManagerFuture future) {
                Account[] accounts = null;
                try {
                    accounts = future.getResult();
                    if (accounts != null &amp;&amp; accounts.length &gt; 0) {
                        String selectedAccount = accounts[0].name;
                        queryLabels(selectedAccount);
                    }

                } catch (OperationCanceledException oce) {
                    // TODO: handle exception
                } catch (IOException ioe) {
                    // TODO: handle exception
                } catch (AuthenticatorException ae) {
                    // TODO: handle exception
                }
            }
        }, null /* handler */);
```

## Query the content provider

With an email address selected, you can then obtain a [`ContentProvider`](http://developer.android.com/guide/topics/providers/content-provider-basics.html) URI to query against. We've provided a simple class called [`GmailContract.java`](https://developers.google.com/workspace/gmail/android/com/google/android/gm/contentprovider/GmailContract) to construct the URI and define the columns returned.

An app can query this URI directly — or better yet, use a [`CursorLoader`](http://developer.android.com/reference/android/content/CursorLoader.html) — to obtain a Cursor with information for all labels on an account:

```
Cursor labelsCursor = getContentResolver().query(GmailContract.Labels.getLabelsUri(selectedAccount), null, null, null, null);
```

With the data in this cursor, you can then persist the URI value in the `GmailContract.Labels.URI` column to query and watch for changes on a single label.

The `NAME` value for pre-defined labels can vary by locale, so don't use `GmailContract.Labels.NAME`. Instead, you can programmatically identify pre-defined labels like Inbox, Sent or Drafts using the String value in the `GmailContract.Labels.CANONICAL_NAME` column:

```
// loop through the cursor and find the Inbox
if (labelsCursor != null) {
    final String inboxCanonicalName = GmailContract.Labels.LabelCanonicalName.CANONICAL_NAME_INBOX;
    final int canonicalNameIndex = labelsCursor.getColumnIndexOrThrow(GmailContract.Labels.CANONICAL_NAME);
    while (labelsCursor.moveToNext()) {
        if (inboxCanonicalName.equals(labelsCursor.getString(canonicalNameIndex))) {
            // this row corresponds to the Inbox
        }
    }
}
```

For more help, read [Content provider basics](https://developer.android.com/guide/topics/providers/content-provider-basics.html)

## Review an example

To see an example of this content provider in action, [download a sample app](https://developers.google.com/static/workspace/gmail/android/android-gmail-api-sample.tar.gz).
