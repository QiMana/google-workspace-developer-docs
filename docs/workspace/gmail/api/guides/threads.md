---
source: https://developers.google.com/workspace/gmail/api/guides/threads
root: workspace
fetched_at: 2026-04-23T15:28:52.167Z
---

# Manage threads

This document explains how to retrieve thread messages and add messages to threads using the Gmail API.

The Gmail API uses the [`threads`](../reference/rest/v1/users.threads.md) resource to group email replies with their original message into a single conversation or thread. This lets you retrieve all messages in a conversation, in order, which makes it easier to have context for a message or to refine search results.

Like the [`messages`](../reference/rest/v1/users.messages.md) resource, threads can also have labels applied to them. However, unlike messages, threads cannot be created, only deleted. Messages can, however, be inserted into a thread.

## Retrieve threads

Threads provide a way of retrieving messages in a conversation, in order. By listing a set of threads you can choose to group messages by conversation and provide additional context. You can retrieve a list of threads using the [`threads.list`](../reference/rest/v1/users.threads/list.md) method, or retrieve a specific thread with the [`threads.get`](../reference/rest/v1/users.threads/get.md) method.

The following code sample shows how to use the `threads.get` and `threads.list` methods in a sample that retrieves the most chatty threads in your inbox. The `threads.list` method fetches all thread IDs, then `threads.get` grabs all messages in each thread. For messages with three or more replies, we extract the `Subject` line and display the non-empty ones plus the number of messages in the thread.

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def show_chatty_threads():
  """Display threads with long conversations(>= 3 messages)
  Return: None

  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()

  try:
    # create gmail api client
    service = build("gmail", "v1", credentials=creds)

    # pylint: disable=maybe-no-member
    # pylint: disable:R1710
    threads = (
        service.users().threads().list(userId="me").execute().get("threads", [])
    )
    for thread in threads:
      tdata = (
          service.users().threads().get(userId="me", id=thread["id"]).execute()
      )
      nmsgs = len(tdata["messages"])

      # skip if <3 msgs in thread
      if nmsgs > 2:
        msg = tdata["messages"][0]["payload"]
        subject = ""
        for header in msg["headers"]:
          if header["name"] == "Subject":
            subject = header["value"]
            break
        if subject:  # skip if no Subject line
          print(f"- {subject}, {nmsgs}")
    return threads

  except HttpError as error:
    print(f"An error occurred: {error}")

if __name__ == "__main__":
  show_chatty_threads()
```

You can also [filter threads](./filtering.md) using the same query parameters as those used for the [`messages`](../reference/rest/v1/users.messages.md) resource. If any message in a thread matches the query, the thread is returned in the result.

## Add drafts and messages to threads

If you're sending or migrating messages that are a response to another email or part of a conversation, your application should add that message to the related thread. This makes it easier for Gmail users who are participating in the conversation to keep the message in context.

A draft can be added to a thread as part of [creating](../reference/rest/v1/users.drafts/create.md), [updating](../reference/rest/v1/users.drafts/update.md), or [sending](../reference/rest/v1/users.drafts/send.md) a message using the [`drafts`](../reference/rest/v1/users.drafts.md) resource.

You can also add a message to a thread as part of [inserting](../reference/rest/v1/users.messages/insert.md) or [sending](../reference/rest/v1/users.messages/send.md) a message using the [`messages`](../reference/rest/v1/users.messages.md) resource.

To be part of a thread, a draft or message must meet the following criteria:

1. The requested [`threadId`](../reference/rest/v1/users.messages.md#Message.FIELDS.thread_id) must be specified as part of the [`drafts.message`](../reference/rest/v1/users.drafts.md#Draft.FIELDS.message) or `messages` resource you supply with your request.
2. The `References` and `In-Reply-To` headers must be set in compliance with the [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822#appendix-A.2) standard.
3. The `Subject` headers must match.

For code samples of how to use the `threadId`, see [Create drafts](./drafts.md#create-drafts) or [Send messages](./sending.md#send-messages). In both cases, you need to include the target `threadId` within the `messages` resource of your request.

## Related topics

- [Create and send email messages](./sending.md)
- [Troubleshoot authentication & authorization issues](../troubleshoot-authentication-authorization.md)
