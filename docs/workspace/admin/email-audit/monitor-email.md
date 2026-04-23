---
source: https://developers.google.com/workspace/admin/email-audit/monitor-email
root: workspace
fetched_at: 2026-04-23T15:23:55.256Z
---

# Monitor emails

To set up email monitoring with the Email Audit API, an administrator sets a date range for the auditor to receive a copy of a particular user's sent and received emails as an attachment. The maximum number of monitor creation and deletion requests per day is 1000 requests. This limit is per domain, and includes all requests made by any administrator during the day.

A monitored email scenario includes three types of users:

- Administrator — Any domain administrator can create, retrieve, update, and delete an email monitor using the monitor resource of the Email Audit API. In addition, an administrator can use the API to download the mailbox. These operations can only be done within the domain over which the administrator exercises control.
- Source user — The source user is the user who receives or sends messages that are being audited by the monitoring destination user. Any domain administrator or account user can be a source user. The source user must be in the same domain as the administrator and destination user.
- Destination user — The destination user is the auditor who receives the audited email messages.
	- Receives blind carbon copies (Bcc) of all incoming and outgoing email messages including inbound and outbound attachments, forwarded messages, and email messages sent from mobile devices.
		- As an option, a domain administrator can enable additional auditing features for the destination user. The optional features include the auditing of saved email drafts, the auditing of archived Google Chat chats with other users who can be in or outside of the domain.
		- Even though the destination user receives a Bcc copy of the message, the Bcc association isn't visible in the message headers accessible in the source user's account.
		- Each audited email message is sent to the destination user as an email attachment. And the domain administrator can configure these messages to be either the full email message or only the message headers.
		- This destination user must have an active email account in the monitored domain. This must be the same domain associated with the administrator and source user.
		- A destination user can be an administrator or a user within the domain. And, this destination user can switch roles to become a source user audited by another destination user who, in turn, receives copies of all audited email messages sent to the first destination user.
		- A domain administrator creates one audited email monitor for one unique 'destination user - source user' pair. In other words, the audit relationship is one destination user to one source user. Each audit is done using an API monitor resource. Using multiple API monitors, a destination user can audit many users in the domain. And, using multiple API monitors, many destination users can audit one source user.
		- If an additional API monitor is created or an existing API monitor is updated for a 'destination user - source user' pair, the monitor which was the last created supersedes any pre-existing monitors for this pair. Basically, this is how you update an API monitor. For more information about updating a monitor, see [Update an email monitor](#uploading_the_public_key).

## Create an email monitor

To create an email monitor, send the following `POST` request with the email monitor resource:

```
POST https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/DOMAIN_NAME/SOURCE_USERNAME
```

Replace the following:

- `DOMAIN_NAME`: the Google Workspace domain name—for example, example.com.
- `SOURCE_USERNAME`: the username that you want to monitor.

The `POST` request contains the following `Content-type` header:

```
Content-type: application/atom+xml
```

For a full list of parameters to use in an email monitor request, see [Resources: `monitor`](https://developers.google.com/workspace/admin/email-audit/reference/monitor).

### Example for creating a new monitor

The example uses the following parameters:

- The user to be audited is `amal@example.com`.
- The `destUserName` is `izumi`.
- The `beginDate` is `June 15, 2022, 00:00 hours`.
- The `endDate` is `June 30, 2022, 23:20 hours`.
- The `incomingEmailMonitorLevel` is `FULL_MESSAGE`.
- The `outgoingEmailMonitorLevel` is `HEADER_ONLY`.
- The `draftMonitorLevel` is `FULL_MESSAGE`.
- The `chatMonitorLevel` is `FULL_MESSAGE`.

### Protocol

```
POST https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal

<atom:entry xmlns:atom='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
   <apps:property name='destUserName' value='izumi'/>
   <apps:property name='beginDate' value='2022-06-15 00:00'/>
   <apps:property name='endDate' value='2022-06-30 23:20'/>
   <apps:property name='incomingEmailMonitorLevel' value='FULL_MESSAGE'/>
   <apps:property name='outgoingEmailMonitorLevel' value='HEADER_ONLY'/>
   <apps:property name='draftMonitorLevel' value='FULL_MESSAGE'/>
   <apps:property name='chatMonitorLevel' value='FULL_MESSAGE'/>
</atom:entry>
```

If successful, the server returns a `201 CREATED` status code and an AtomPub entry with the `entry` element showing new monitor settings:

```
<entry xmlns:atom='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
    <id>https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal/id</id>
    <updated>2022-04-17T15:02:45.646Z</updated/>
    <link rel='self' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal/id'/>
    <link rel='edit' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal/id'/>
    <apps:property name='destUserName' value='izumi'/>
    <apps:property name='beginDate' value='2022-06-15 00:00'/>
    <apps:property name='endDate' value='2022-06-30 23:20'/>
    <apps:property name='incomingEmailMonitorLevel' value='FULL_MESSAGE'/>
    <apps:property name='outgoingEmailMonitorLevel' value='HEADER_ONLY'/>
    <apps:property name='draftMonitorLevel' value='FULL_MESSAGE'/>
    <apps:property name='chatMonitorLevel' value='FULL_MESSAGE'/>
</entry>
```

### Java

```
import java.util.Calendar;
import com.google.gdata.client.appsforyourdomain.audit.AuditService;
import com.google.gdata.data.appsforyourdomain.generic.GenericEntry;
import com.google.gdata.client.appsforyourdomain.audit.MailMonitor;
...

MailMonitor monitor = new MailMonitor();
Calendar beginDate = Calendar.getInstance();
beginDate.set(2022, Calendar.JUNE, 15, 0, 0)
monitor.setBeginDate(beginDate.getTime());
Calendar endDate = Calendar.getInstance();
endDate.set(2022, Calendar.JUNE, 30, 23, 20);
monitor.setEndDate(endDate.getTime());
monitor.setIncomingEmailMonitorLevel("FULL_MESSAGE");
monitor.setOutgoingEmailMonitorLevel("HEADER_ONLY");
monitor.setDraftMonitorLevel("FULL_MESSAGE");
monitor.setChatMonitorLevel("FULL_MESSAGE");
monitor.setDestUserName("izumi");

AuditService service = new AuditService("admin@example.com", "p@55w0rd", "example.com", "example.com-auditapp-v1");
GenericEntry entry = service.createMailMonitor("amal", monitor);
```

### .NET

```
using System;
using Google.GData.Apps;
using Google.GData.Extensions.Apps;
...

MailMonitor monitor = new MailMonitor();
monitor.BeginDate = new DateTime(2022, 6, 15);
monitor.EndDate = new DateTime(2022, 6, 30, 23, 20, 0);
monitor.IncomingEmailMonitorLevel = MonitorLevel.FULL_MESSAGE;
monitor.OutgoingEmailMonitorLevel = MonitorLevel.HEADER_ONLY;
monitor.DraftMonitorLevel = MonitorLevel.FULL_MESSAGE;
monitor.ChatMonitorLevel = MonitorLevel.FULL_MESSAGE;
monitor.DestinationUserName = "izumi";

AuditService service = new AuditService("example.com", "example.com-auditapp-v1");
service.setUserCredentials("admin@example.com", "p@55w0rd");
MailMonitor monitorEntry = service.CreateMailMonitor("amal", monitor);
```

## Update an email monitor

When updating a monitor with the same source user and destination user, the initial monitor's property settings are replaced by the new settings.

To update the audit configuration in an email monitor, send a `POST` request to the monitor feed's URI and include the `Authorization` header:

```
POST https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/DOMAIN_NAME/SOURCE_USERNAME
```

Replace the following:

- `DOMAIN_NAME`: the Google Workspace domain name—for example, example.com.
- `SOURCE_USERNAME`: the username of the email monitor that you want to update.

### Example for updating an email monitor

This example updates the monitor created in the [example for creating an email monitor](#example_for_creating_a_new_monitor) by updating the required property `endDate` and the optional property `chatMonitorLevel`. This example uses the following parameters:

- The new `endDate` is `August 30, 2022, 23:20 hours`.
- The `chatMonitorLevel` is now `HEADER_ONLY`.
- The user to be audited remains `amal@example.com`.
- The `destUserName` remains `izumi`.

The monitor properties that weren't updated revert to their default values. For instance, in this example, the `incomingEmailMonitorLevel` and `outgoingEmailMonitorLevel` properties revert to `FULL_MESSAGE`, and the `draftMonitorLevel` reverts to `NONE`.

### Protocol

```
POST https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal

<atom:entry xmlns:atom='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
    <apps:property name='destUserName' value='izumi'/>
    <apps:property name='endDate' value='2022-08-30 23:20'/>
    <apps:property name='chatMonitorLevel' value='HEADER_ONLY'/>
</atom:entry>
```

If successful, the server returns a `201 CREATED` status code and an AtomPub entry with the updated `entry` elements. The properties that weren't updated and shown in the response revert to their default values.

```
<entry>
<entry xmlns='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
    <id>https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal/izumi</id>
    <updated>2022-08-20T00:28:57.319Z</updated>
    <link rel='self' type='application/atom+xml' href="https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal/izumi" />
    <link rel='edit' type='application/atom+xml' href="https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal/izumi" />
    <apps:property name='chatMonitorLevel' value='HEADER_ONLY' />
    <apps:property name='destUserName' value='izumi' />
    <apps:property name='endDate' value='2022-08-30 23:20' />
</entry>
```

### Java

```
import java.util.Calendar;
import com.google.gdata.client.appsforyourdomain.audit.AuditService;
import com.google.gdata.client.appsforyourdomain.audit.MailMonitor;
import com.google.gdata.data.appsforyourdomain.generic.GenericEntry;
...

MailMonitor monitor = new MailMonitor();
Calendar endDate = Calendar.getInstance();
endDate.set(2022, Calendar.AUGUST, 30, 23, 20);
monitor.setEndDate(endDate.getTime());
monitor.setChatMonitorLevel("HEADER_ONLY");
monitor.setDestUserName("izumi");

AuditService service = new AuditService("admin@example.com", "p@55w0rd", "example.com", "example.com-auditapp-v1");
GenericEntry entry = service.createMailMonitor("amal", monitor);
```

### .NET

```
using System;
using Google.GData.Apps;
using Google.GData.Extensions.Apps;
...

MailMonitor monitor = new MailMonitor();
monitor.EndDate = new DateTime(2022, 8, 30, 23, 20, 0);
monitor.ChatMonitorLevel = MonitorLevel.HEADER_ONLY;
monitor.DestinationUserName = "izumi";

AuditService service = new AuditService("example.com", "example.com-auditapp-v1");
service.setUserCredentials("admin@example.com", "p@55w0rd");
MailMonitor monitorEntry = service.CreateMailMonitor("amal", monitor);
```

## Retrieve all email monitors of a source user

To retrieve all monitors associated with a source user, make an HTTP `GET` request to the monitor feed URI, using the UTC format for the date, and include the `Authorization` header:

```
GET https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/DOMAIN_NAME/SOURCE_USERNAME
```

Replace the following:

- `DOMAIN_NAME`: the Google Workspace domain name—for example, example.com.
- `SOURCE_USERNAME`: the username of the email monitor that you want to retrieve.

This operation has no parameters in the request body, so the XML body is empty.

### Example for retrieving all email monitors

This example retrieves all the monitors created for the user `amal@example.com`:

### Protocol

```
GET https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal
```

If successful, the server returns a `201 CREATED` status code and an AtomPub feed with the `entry` elements for two monitors showing the settings for two destination users (`izumi@example.com,   taylor@example.com`).

```
<feed xmlns:atom='http://www.w3.org/2005/Atom' xmlns:openSearch='http://a9.com/-/spec/opensearchrss/1.0/' xmlns:apps='http://schemas.google.com/apps/2006'>
    <id>https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal</id>
    <updated>2010-03-17T15:29:21.064Z</updated>
    <link rel='http://schemas.google.com/g/2005#feed' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal'/>
    <link rel='http://schemas.google.com/g/2005#post' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal'/>
    <link rel='self' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal'/>
    <openSearch:startIndex>1</openSearch:startIndex>
    <entry>
        <id>https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal/izumi</id>
        <updated>2022-04-17T15:29:21.064Z</updated>
        <link rel='self' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal/izumi&'/>
        <link rel='edit' type='application/atom+xml' href='https://apps-apis.google.com/feeds/compliance/audit/mail/monitor/example.com/amal/izumi&'/>
        <apps:property name='requestId' value='53156'/>
        <apps:property name='destUserName' value='izumi'/>
        <apps:property name='beginDate' value='2022-06-15 00:00'/>
        <apps:property name='endDate' value='2022-06-30 23:20'/>
        <apps:property name='incomingEmailMonitorLevel' value='FULL_MESSAGE'/>
        <apps:property name='outgoingEmailMonitorLevel' value='FULL_MESSAGE'/>
        <apps:property name='draftMonitorLevel' value='FULL_MESSAGE'/>
        <apps:property name='chatMonitorLevel' value='FULL_MESSAGE'/>
   </entry>
   <entry>
        <id>>https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal/taylor</id>
        <updated>2022-05-17T15:29:21.064Z</updated>
        <link rel='self' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal/taylor'/>
        <link rel='edit' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal/taylor'/>
        <apps:property name='requestId' value='22405'/>
        <apps:property name='destUserName' value='taylor'/>
        <apps:property name='beginDate' value='2022-06-20 00:00'/>
        <apps:property name='endDate' value='2022-07-30 23:20'/>
        <apps:property name='incomingEmailMonitorLevel' value='FULL_MESSAGE'/>
        <apps:property name='outgoingEmailMonitorLevel' value='FULL_MESSAGE'/>
        <apps:property name='draftMonitorLevel' value='FULL_MESSAGE'/>
        <apps:property name='chatMonitorLevel' value='FULL_MESSAGE'/>
    </entry>
</feed>
```

### Java

```
import com.google.gdata.client.appsforyourdomain.audit.AuditService;
import com.google.gdata.data.appsforyourdomain.generic.GenericFeed;
...

AuditService service = new AuditService("admin@example.com", "p@55w0rd", "example.com", "example.com-auditapp-v1");
GenericFeed feed = service.retrieveMonitors("amal");
```

### .NET

```
using System;
using System.Collections.Generic;
using Google.GData.Apps;
using Google.GData.Extensions.Apps;
...

AuditService service = new AuditService("example.com", "example.com-auditapp-v1");
service.setUserCredentials("admin@example.com", "p@55w0rd");
GenericFeed<MailMonitor> monitors = service.RetrieveMailMonitors("amal");
```

## Delete an email monitor

To delete an email monitor, make an HTTP `DELETE` request to the monitor feed's delete URI and include the `Authorization` header:

```
DELETE https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/DOMAIN_NAME/SOURCE_USERNAME/DESTINATION_USERNAME
```

Replace the following:

- `DOMAIN_NAME`: the Google Workspace domain name—for example, example.com.
- `SOURCE_USERNAME`: the username of the email monitor that you want to delete.
- `DESTINATION_USERNAME`: the auditor who receives the audited email messages.

### Example for deleting an email monitor

This example deletes the monitors created for the user `amal@example.com` with `destinationUserName` as `izumi`.

### Protocol

```
DELETE https://apps-apis.google.com/a/feeds/compliance/audit/mail/monitor/example.com/amal/izumi
```

### Java

```
import com.google.gdata.client.appsforyourdomain.audit.AuditService;
...

AuditService service = new AuditService("admin@example.com", "p@55w0rd", "example.com", "example.com-auditapp-v1");
service.deleteMonitor("amal", "izumi");
```

### .NET

```
using System;
using Google.GData.Apps;
using Google.GData.Extensions.Apps;
...

AuditService service = new AuditService("example.com", "example.com-auditapp-v1");
service.setUserCredentials("admin@example.com", "p@55w0rd");
service.DeleteMailMonitor("amal", "izumi");
```
