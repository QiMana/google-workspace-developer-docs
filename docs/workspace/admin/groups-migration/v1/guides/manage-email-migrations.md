---
source: https://developers.google.com/workspace/admin/groups-migration/v1/guides/manage-email-migrations
root: workspace
fetched_at: 2026-04-23T15:23:55.552Z
---

# Migrate emails

Before migrating an email to Google Groups by using the Groups Migration API, do the following:

- Confirm that the target group exists and the group's email is accurate before migrating an email message to that group's archive. For more information about listing groups and users, see the Directory API.
- If the email's sender has the same domain as the target group, confirm the email sender exists before migrating the email message to the target group's archive.
- The email message format must be in the [RFC 822 standard definition](https://www.w3.org/Protocols/rfc822/). Use the `Content-type: message/rfc822` header. Confirm that the email message's `To:`, `From:`, and `Date:` fields are properly formed. The response is returned in the [JSON](https://www.json.org/) data format.

## Migrate an email message to Google Groups

To migrate an email message to a group's archive, send a `POST` HTTP request, include the `Authorization` header, and replace GROUP\_EMAIL\_ADDRESS with the email address of the group that the messages are intended for:

```
POST https://www.googleapis.com/upload/groups/v1/groups/GROUP_EMAIL_ADDRESS/archive?uploadType=media
```

### Example request

This example migrates email messages to the samplegroup@googlegroups.com archive. The `Content-Length` is limited to 25 MB, which includes the message's metadata, body, and any attachments:

```
POST https://www.googleapis.com/upload/groups/v1/groups/samplegroup@googlegroups.com/archive?uploadType=media
Host: www.googleapis.com
Content-Type: message/rfc822
Content-Length: BYTES
Authorization: Bearer AUTH_TOKEN

METADATA_BODY
```

Replace the following:

- `BYTES`: the number of bytes in the email.
- `AUTH_TOKEN`: the `Authorization` header.
- `METADATA_BODY`: the email's metadata, body, and any attachments.

The following is an example email message in RFC 822 text format that was migrated into the archive of samplegroup@googlegroups.com. The `NNNN@mail.samplegroup.com` is this example's Message-ID. The migrated email's sender is samplesender@example.com and the email is migrated to the archive of the samplegroup@googlegroups.com group:

```
Received: by 10.143.160.15 with HTTP; Mon, 16 Jul 2007 10:12:26 -0700 (PDT)
Message-ID: <NNNN@mail.samplegroup.com>
Date: Mon, 16 Jul 2007 10:12:26 -0700
From: samplesender@example.com
To: samplegroup@googlegroups.com
Subject: SUBJECT
MIME-Version: 1.0
Content-Type: text/plain; charset=ISO-8859-1; format=flowed
Content-Transfer-Encoding: 7bit
Content-Disposition: inline
Delivered-To: samplegroup@samplegroup.com

This is the body of the migrated email message.
```

A successful response returns a `200` HTTP status code and the migration status. For more information about `responseCode` values, see [the Groups Migration API reference](https://developers.google.com/workspace/admin/groups-migration/v1/reference/archive/insert).

```
{
 "kind": "groupsMigration#groups",
 "responseCode": "SUCCESS",
}
```

## View imported messages on the Google Groups interface

On Google Groups, threads' read or unread state is stored separately for each user. When inserting messages and threads using the Groups Migration API, they're treated as if they were sent by the user in the `From:` header. This means that they appear as unread for all users, except for the user whose address is in the `From:` header. For example, after the previous JSON request example, the message titled `SUBJECT` appears as read if `samplesender@example.com` logged in to Google Groups, but appears as unread for all other users.
