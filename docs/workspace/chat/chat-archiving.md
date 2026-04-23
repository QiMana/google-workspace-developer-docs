---
source: https://developers.google.com/workspace/chat/chat-archiving
root: workspace
fetched_at: 2026-04-23T15:25:18.801Z
---

# Archive Chat messages

## Page Summary

- Google Workspace admins can archive Google Chat messages and content to a designated email address.
- Archived content includes messages, edits, deletions, reactions, attachments, and Google Meet links.
- Archived messages are sent as emails from `chat-archiving+noreply@google.com` with details like space ID and participants.
- Admins can customize email headers with additional metadata for better tracking and organization.
- Certain interactions, like Chat app card selections and external tasks viewed in spaces, are not archived.

Google Workspace administrators can set up a third-party archiving service to archive Google Chat messages and other content. Chat archiving works by logging messages to an email address that's specified in the Google Admin console. This page describes the format of these archived email messages.

## Prerequisites

- Prepare a destination email address for archiving.
- [Specify an email address in the Google Admin console to send archived Chat messages to](https://support.google.com/a/answer/10095268).
- [Turn Chat history on](https://support.google.com/a/answer/7664184).

## Archived types

The following content types are archived in Chat messages:

- [Message header metadata](#message_header_metadata_and_email_format)
- [Membership state changed](#membership_state_changed)
- [Message was created](#message_was_created)
- [Message was edited](#message_was_edited)
- [Message was deleted](#message_was_deleted)
- [User reacted or removed a reaction](#user_reacted_or_removed_a_reaction)
- [Google Meet link was added](#google_meet_link_was_added)
- [File attachment was added](#file_attachment_was_added)
- [Link to Google Drive file was added](#link_to_google_drive_file_was_added)
- Any other activity that writes to the Chat stream, such as a Google Chat app message

The following content isn't archived:

- Interactions that don't write to the Chat stream, such as Chat apps that display a [card](./create-messages.md#create) to users to select an action.
- Interactions outside of Chat that are displayed in Chat spaces but don't write to the Chat stream, such as viewing a task in the Google Tasks tab.

## Archive formats

This section describes the format of archived Chat information and gives examples of each type.

### Message header metadata and email format

Following is the header format of archive messages. In these examples, the archive address is set to `mike@example.com`.

- From: `chat-archiving+noreply@google.com`
- Subject: Google Chat activity from *DM* or *Space* `space ID` with `users`
	- DM: If the message is a direct message or group direct message.
		- Space: If the message is in a Chat space.
		- ID: Google Chat space ID (used by the [Google Chat API](./api/reference/rest.md)).
		- With: Email addresses associated with the message. If there are fewer than 5 email addresses included, the usernames are listed. If there are more than 5 email addresses included then the count of email addresses are listed.
- To: email addresses of all users, plus the archive address.

The following is an example of Chat activity that is archived in an email:

```
From: <chat-archiving+noreply@google.com>
Date: Tue, Jan 28, 2020 at 10:13 AM
Subject: Google Chat activity from DM 8at_0gAAAAE with rose, mike
To: <rose@example.com>, <mike@example.com>

From: <chat-archiving+noreply@google.com>
Date: Tue, Jan 28, 2020 at 10:15 AM
Subject: Google Chat activity from Chat space g2-uKgAAAAE with 6 members
To: <blanche@example.com>, <mike@example.com>, <tansit@example.com>, <audrey@example.com>, <edward@example.com>, <ritwik@example.com>
```

In addition, Google Workspace Admins can add custom headers by [enabling the optional header metadata](https://support.google.com/a/answer/10095268) in the Google Admin console. The following is an example of optional custom headers:

```
X-ArchivalProvider-MsgType: Google_Chat
Message-ID: <000000000000ccad6a0598574e66@google.com>
Date: Wed, 27 Nov 2019 17:27:15 +0000
Subject: Chat activity from DM 8at_0gAAAAE
From: chat-archiving+noreply@google.com
To: mike@example.com, edward@example.com
```

The rest of this page gives examples of each type of archived data.

### Membership state changed

When a user joins a Chat space:

```
[2019-09-23T16:47:17.773827Z] mike marsden (mike@example.com) MEMBERSHIP STATE BECAME JOINED
```

When a user leaves a Chat space:

```
[2019-11-27T16:39:05.750194Z] Brian Zhao (brianx@example.com) MEMBERSHIP STATE BECAME NOT A MEMBER
```

### Message was created

```
[2019-09-23T17:36:57.710319Z] Edward Deng (edward@example.com) POSTED VEiF-WPTkJU:PezyhNYvFzk Good morning!
```

### Message was edited

```
[2019-09-23T17:37:08.137734Z] Edward Deng (edward@example.com) EDITED VEiF-WPTkJU:PezyhNYvFzk Very good morning!
```

### Message was deleted

```
[2019-09-23T17:37:14.212127Z] DELETED VEiF-WPTkJU:mn4aIBqVYzs MESSAGE DELETED
```

### Message was pinned

```
[2019-09-23T17:37:14.212127Z] Edward Deng (edward@example.com) MESSAGE PINNED VEiF-WPTkJU:mn4aIBqVYzs
```

### Message was unpinned

```
[2019-09-23T17:37:14.212127Z] Edward Deng (edward@example.com) MESSAGE UNPINNED VEiF-WPTkJU:mn4aIBqVYzs
```

### User reacted or removed a reaction

```
[2019-11-27T18:17:58.479409Z] Donna Lee (donna@example.com) REACTED TO fTi4iKLrveQ:fTi4iKLrveQ =F0=9F=99=82

[2019-11-27T18:18:08.730463Z] Donna Lee (donna@example.com) REMOVED REACTION TO fTi4iKLrveQ:fTi4iKLrveQ =F0=9F=99=82
```

### Google Meet link was added

```
[2019-12-13T19:45:54.168271Z] Natraj Verma (natraj@example.com) UPLOADED
Google Meet: https://meet.google.com/vzf-pjqg-czj POSTED 7-NYOcR7gqQ:7-NYOcR7gqQ let's talk over video
```

### File attachment was added

```
[2019-12-13T19:50:29.899503Z] Edward Deng (edward@example.com) UPLOADED application/pdf: "kitchen.pdf" POSTED n8dcClo_dWw:gq-ItEhSZvQ wdyt?
```

The file attachment is added to the email archive if the file is smaller than the maximum file size.

### Link to Google Drive file was added

```
[2020-01-28T17:13:38.332367Z] Edward Deng (edward@example.com) ADDED Google Drive File https://drive.google.com/open?id=11r0l3zuwjgY8k9kw-MWwYq6srSKZTuuLhkr1md2Sl-Y application/vnd.google-apps.presentation: "Test Slides" POSTED _YdFA9wEVVo:_YdFA9wEVVo
```

### Chat Board Resource Pinned

```
[2020-01-28T17:13:38.332367Z] Edward Deng (edward@example.com) RESOURCE PINNED chat board resource ID: fTi4iKLrveQ in chat board: =F0=9F=99=82 with chat board resource: id { group_id { space_id { space_id: "=F0=9F=99=82" } } entity_id: "fTi4iKLrveQ" } entity_type: KEY_RESOURCE payload { key_resource_payload { drive_metadata { id: "1pXqxsZdTZUWNHbcm3YP2FfTi4iKLrveQ" title: "Test doc" external_mimetype: "image/jpeg" } } } sort_order: 0 actor_id { id: "109714730719818745939" } create_time { }
```

### Chat Board Resource Unpinned

```
[2020-01-28T17:13:38.332367Z] Edward Deng (edward@example.com) RESOURCE UNPINNED chat board resource ID: fTi4iKLrveQ in chat board: =F0=9F=99=82
```
