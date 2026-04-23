---
source: https://developers.google.com/workspace/gmail/api/guides/labels
root: workspace
fetched_at: 2026-04-23T15:28:51.248Z
---

# Manage labels

This document explains how to manage labels on threads and messages using the Gmail API.

You can use labels to tag, organize, and categorize messages and threads in Gmail. A label has a many-to-many relationship with messages and threads: you can apply multiple labels to a single message or thread, and apply a single label to multiple messages or threads.

For information on how to [create](../reference/rest/v1/users.labels/create.md), [get](../reference/rest/v1/users.labels/get.md), [list](../reference/rest/v1/users.labels/list.md), [update](../reference/rest/v1/users.labels/update.md), or [delete](../reference/rest/v1/users.labels/delete.md) labels, see the [`labels`](../reference/rest/v1/users.labels.md) resource.

To manage labels, you must use the `https://www.googleapis.com/auth/gmail.labels` non-sensitive scope. For more information about scopes, see [Choose Gmail API scopes](../auth/scopes.md).

## Types of labels

Labels come in two varieties: reserved `SYSTEM` labels and custom `USER` labels.

System labels typically correspond to predefined elements in the Gmail web interface such as `INBOX`. System label names are reserved; no `USER` label can be created with the same name as any `SYSTEM` label. The following table lists several of the most common Gmail system labels:

| Name | Can be manually applied | Notes |
| --- | --- | --- |
| `INBOX` | yes |  |
| `SPAM` | yes |  |
| `TRASH` | yes |  |
| `UNREAD` | yes |  |
| `STARRED` | yes |  |
| `IMPORTANT` | yes |  |
| `SENT` | no | Applied automatically to messages that are: - sent with [`drafts.send`](../reference/rest/v1/users.drafts/send.md) or [`messages.send`](../reference/rest/v1/users.messages/send.md). - inserted with [`messages.insert`](../reference/rest/v1/users.messages/insert.md) and the user's email in the `From` header. - sent by the user through the web interface. |
| `DRAFT` | no | Automatically applied to all [`draft`](../reference/rest/v1/users.drafts.md) messages created with the Gmail API or Gmail interface. |
| `CATEGORY_PERSONAL` | yes | Corresponds to messages that are displayed in the Personal tab of the Gmail interface. |
| `CATEGORY_SOCIAL` | yes | Corresponds to messages that are displayed in the Social tab of the Gmail interface. |
| `CATEGORY_PROMOTIONS` | yes | Corresponds to messages that are displayed in the Promotions tab of the Gmail interface. |
| `CATEGORY_UPDATES` | yes | Corresponds to messages that are displayed in the Updates tab of the Gmail interface. |
| `CATEGORY_FORUMS` | yes | Corresponds to messages that are displayed in the Forums tab of the Gmail interface. |

## Manage labels on threads and messages

Labels only exist on messages. If you retrieve a list of labels on a thread, you get a list of labels that exist on any message within the thread. A label might not exist on every message within a thread.

You can't apply labels to draft messages.

### Add or remove labels on threads

When you add or remove a label on a thread, you add or remove the specified label on all existing messages in the thread.

If messages are added to a thread after you add a label, the new messages don't inherit the existing label associated with the thread. To add the label to those messages, add the label to the thread again.

To add or remove the labels associated with a thread, use [`threads.modify`](../reference/rest/v1/users.threads/modify.md).

### Add or remove labels on messages

When you add a label to a message, the label is added to that message and becomes associated with the thread to which the message belongs. The label isn't added to other messages within the thread.

If you remove a label from a message and it was the only message in the thread with that label, the label is also removed from the thread.

To add or remove the labels applied to a message, use [`messages.modify`](../reference/rest/v1/users.messages/modify.md).
