---
source: https://developers.google.com/workspace/gmail/api/guides/filtering
root: workspace
fetched_at: 2026-04-23T15:28:51.027Z
---

# Search and filter messages

This document explains how to query and find messages using the Gmail API.

You can search or filter files using the [`messages.list`](../reference/rest/v1/users.messages/list.md) and [`threads.list`](../reference/rest/v1/users.threads/list.md) methods. These methods accept the `q` query parameter, which supports most of the same [advanced search syntax](https://support.google.com/mail/answer/7190) as the Gmail web interface. For a list of search and filter differences between the Gmail UI and Gmail API, see [Differences from the Gmail UI](#differences).

This advanced search syntax lets you use queries to filter messages by properties such as the sender, date, or label. For example, the following `messages.list` method query retrieves all messages sent by the user in January 2014:

```
GET https://www.googleapis.com/gmail/v1/users/me/messages?q=in:sent after:2014/01/01 before:2014/02/01
```

In addition to search queries, you can also filter messages and threads by label with the `labelIds[]` parameter. This lets you search for messages and threads with the specified system or user labels applied. For more information, see the `messages.list` and `threads.list` methods. For more information on labels, see [Manage labels](./labels.md).

## Differences from the Gmail UI

While the Gmail API supports most of the advanced search syntax used in the Gmail UI, there are a few differences:

- The Gmail UI performs *alias expansion*, which allows it to infer an account alias from a Google Workspace account. For example, suppose you have an account of `myprimary@cymbalgroup.com` and your administrator sets up an alias for that account of `myalias@cymbalgroup.com`. If `myalias@cymbalgroup.com` sends an email, but you search for " `from: myprimary@cymbalgroup.com` " the email sent by `myalias@cymbalgroup.com` appears in search results in the Gmail UI, but not in the API response.
- The Gmail UI allows users to perform thread-wide searches, but the API doesn't.

## Related topics

- [List Gmail messages](./list-messages.md)
