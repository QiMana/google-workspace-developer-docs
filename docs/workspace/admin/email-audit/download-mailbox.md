---
source: https://developers.google.com/workspace/admin/email-audit/download-mailbox
root: workspace
fetched_at: 2026-04-23T15:23:54.809Z
---

# Download a mailbox

As an administrator, you can download mailbox accounts within your domain for audit purposes. To prepare a mailbox for export, the Email Audit API creates an encrypted copy of a user's mailbox. The system returns the URLs for the encrypted mailbox files which, when downloaded and decrypted, are available in [mbox](https://www.wikipedia.org/wiki/Mbox) format.

The maximum mailbox export creation requests per day is a total of 100 requests from all domain administrators. The mailbox creation process can be time consuming and might take several days depending upon the mailbox size.

Google retains the encrypted mailbox files for 3 weeks so make sure that you download these mailbox files within this time period. After that time, they are deleted. To delete these mailbox files before the time period has expired, see [Delete an encrypted mailbox](#delete_an_encrypted_mailbox).

To download a mailbox, do the following:

- [Generate and upload a public key](../../guides/create-credentials.md#api-key) — Creat a public encryption key for downloading mailboxes. This step only needs to be done once. If you've already created a public key, you don't need to complete this step for every mailbox export.
- [Create an export version of a user's mailbox](#create_a_copy_of_a_mailbox_for_export) — The mailbox export process starts when you request the creation of a copy of a user's mailbox. The Email Audit API authenticates and authorizes the your credentials and returns a unique request id. The mailbox creation process can be time consuming and might take several days depending upon the mailbox size.
- [Retrieve the mailbox download status](#retrieve_the_export_status_of_a_mailbox) — Use the mailbox export request ID to get the status of the pending request. After the mailbox is copied and prepared for export, the response returns a status of `COMPLETED` along with the list of encrypted mailbox files as HTTP URLs. Use this set of URLs to download the mailbox files.
- Obtain the downloaded mailbox files — After downloading the encrypted files, decrypt the mailbox files using the domain's private key. Once decrypted, the files are viewed in mbox format.

## Generate a public key

Before you can download the mailbox, you need to upload an OpenPGP public encryption key for the domain. This step is done once when setting up the [mailbox download](./overview.md#downloading_mailbox). You can generate the public/private key pair by using any OpenPGP-compatible software, such as [GNU Privacy Guard (GPG)](https://www.gnupg.org/). This public encryption key should be a PGP format ASCII-encoded RSA key.

To generate a key with GNU Privacy Guard, follow these steps:

1. [Install GnuPG 1.4](https://www.gnupg.org/download/index.html).
2. Generate a new key:
	```
	gpg --gen-key --expert
	```
3. To set your own capabilities, select option `8` and toggle the sign capability.
4. To complete the key generation process, accept all default options. This key should have the encrypt action enabled. You can turn off the sign action because it's not used.
5. Only export the key for the user ID that corresponds to your Google Workspace:
	- If this is your first time using GPG to generate a key, export the single key that you just generated:
		```
		gpg --armor --export
		```
		- If you've already used GPG to generate other keys, you have multiple keys in your keyring. Get a list of keys:
		```
		gpg --list-keys
		```
		If there are multiple keys listed, specify the `uid` of the key that you want to export:
		```
		gpg --armor --export KEY_UID
		```
6. Encode the key with base64 encoding with [Motobit](https://www.motobit.com/util/base64-decoder-encoder.asp) or another tool. Make sure to copy all lines, including the header, and don't add any extra lines. The public key file should be read with the charset [US-ASCII](https://en.wikipedia.org/wiki/ASCII), ([IANA](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority) preferred charset name for ASCII).

### Example

The following example shows how to convert a public key into a base64 encoded string.

The following example is the public key before conversion:

```
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v1.4.10 (GNU/Linux)

mQENBErWaD4BCACt2ngfs6/+QOGYbxNbc3gLnXHtqp7NTTXNW4SJo+/A1oUZoGxA
Qx6zFXhQ/8MXW66+8STS1YqNJOARFtjbIKPwjrdcukdPzYVKGZre0RaxCnMyCV+6
F4YNQD1UegHTu2wCGR1uiYOfLxUa7/do6s31WRTH8vbtiPY9/6obEIxDjDzKIqYO
rvRDWqALBYklOkJ3Hbgfyl42EsnLiAhS+dMs2PCDi2X0ZJCPZ8eTjLsdAtqVZJ+R
WC1J3UDuFfmcpsDYRtUL9w6YMtlapC+9mmJ3ABEBAAG0V0Rhc2hlciBUZXN0IChU
dGVyMkBkYXNoZXItaHlkLXRlc3QuY29tPokBOAQTAQIAIgUCStZoPgIbDQYLCQgH
k19QckTpwBdskEYumFvmWve5UX2SVV7fzOC0nZtgFxtZGlJhGmjsA3rxFTlb+Ira
WZayXCWYiCzd7m9z5/KyGD2GFTK/94mdm25N6GXh/b35pIFZXBI/rZjrYrhYRBFu
GtzGFIw9AAnFyUzEUUVfPWUtBe5yHMW54C60nHk5xYIa6qFhiLp4PYqZCrYX1iIs
fRROFA==
=STHr
-----END PGP PUBLIC KEY BLOCK-----
```

The following example is the public key after conversion:

```
LS0tLS1CRUdJTiBQR1AgUFVCTElDIEtFWSBCTE9DSy0tLS0tDQpWZXJzaW9uOiBHbn
VQRyB2MS40LjEwIChHTlUvTGludXgpDQoNCm1RRU5CRXJXYUQ0QkNBQ3QybmdmczYv

K1FPR1lieE5iYzNnTG5YSHRxcDdOVFRYTlc0U0pvKy9BMW9VWm9HeEENClF4NnpGWG
hRLzhNWFc2Nis4U1RTMVlxTkpPQVJGdGpiSUtQd2pyZGN1a2RQellWS0dacmUwUmF4
Q25NeUNWKzYNCkY0WU5RRDFVZWdIVHUyd0NHUjF1aVlPZkx4VWE3L2RvNnMzMVdSVE
g4dmJ0aVBZOS82b2JFSXhEakR6S0lxWU8NCnJ2UkRXcUFMQllrbE9rSjNIYmdmeWw0
MkVzbkxpQWhTK2RNczJQQ0RpMlgwWkpDUFo4ZVRqTHNkQXRxVlpKK1INCldDMUozVU
R1RmZtY3BzRFlSdFVMOXc2WU10bGFwQys5bW1KM0FCRUJBQUcwVjBSaGMyaGxjaUJV
WlhOMElDaFUNCmRHVnlNa0JrWVhOb1pYSXRhSGxrTFhSbGMzUXVZMjl0UG9rQk9BUV
RBUUlBSWdVQ1N0Wm9QZ0liRFFZTENRZ0gNCmsxOVFja1Rwd0Jkc2tFWXVtRnZtV3Zl
NVVYMlNWVjdmek9DMG5adGdGeHRaR2xKaEdtanNBM3J4RlRsYitJcmENCldaYXlYQ1
dZaUN6ZDdtOXo1L0t5R0QyR0ZUSy85NG1kbTI1TjZHWGgvYjM1cElGWlhCSS9yWmpy
WXJoWVJCRnUNCkd0ekdGSXc5QUFuRnlVekVVVVZmUFdVdEJlNXlITVc1NEM2MG5Iaz
V4WUlhNnFGaGlMcDRQWXFaQ3JZWDFpSXMNCmZSUk9GQT09DQo9U1RIcg0KLS0tLS1F
TkQgUEdQIFBVQkxJQyBLRVkgQkxPQ0stLS0tLQ==
```

## Upload the public key

1. To upload the public key, create an XML entry with the base64-encoded public key:
	```
	<atom:entry xmlns:atom='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
	<apps:property name="publicKey" value="ENCODED_KEY"/>
	</atom:entry>
	```
2. Send an HTTP `POST` request to the `publickey` feed URI in your Google Workspace domain:
	```
	POST https://apps-apis.google.com/a/feeds/compliance/audit/publickey/DOMAIN_NAME
	```
	If successful, the server returns a `201 CREATED status code` and a response similar to this example:
	```
	<entry xmlns:atom='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
	<id>https://apps-apis.google.com/a/feeds/compliance/audit/publickey/DOMAIN_NAME/id>/id>
	<updated>2009-04-17T15:02:45.646Z</updated>
	<link rel='self' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/publickey/DOMAIN_NAME/id'/>
	<link rel='edit' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/publickey/DOMAIN_NAME/id'/>
	<apps:property name='publicKey' value='ENCODED_KEY'/>
	</entry>
	```

## Create a copy of a mailbox for export

To prepare a copy of a user's mailbox for export and downloading, use the export feed of the Email Audit API.

Send a `POST` request to the export feed's URI and include the `Authorization` header:

```
POST https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/DOMAIN_NAME/SOURCE_USERNAME
```

Replace the following:

- `DOMAIN_NAME`: the Google Workspace domain name—for example, example.com.
- `SOURCE_USERNAME`: the username of the mailbox that you want to download.

The request contains the following `Content-type` header:

```
Content-type: application/atom+xml
```

For a full list of parameters to use in a mailbox export request, see [Resources: `export`](./reference/export.md).

### Example for creating a mailbox for export

The example uses the following parameters:

- The user to export the mailbox for is `quinn@example.com`.
- The `beginDate` is `July 1, 2022, 04:30 hours`.
- The `endDate` is `August 30, 2022, 20:00 hours`.
- `includeDeleted` is `false`.
- `searchQuery` is `in:chat`.
- The `packageContent` is `FULL_MESSAGE`.

### Protocol

```
POST https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/example.com/quinn

<atom:entry xmlns:atom='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
   <apps:property name='beginDate' value='2022-07-01 04:30'/>
   <apps:property name='endDate' value='2022-08-30 20:00'/>
   <apps:property name='includeDeleted' value='false'/>
   <apps:property name='searchQuery' value='in:chat'/>
   <apps:property name='packageContent' value='FULL_MESSAGE'/>
</atom:entry>
```

If successful, the server returns a `201 CREATED` status code and an AtomPub entry.

```
<entry xmlns:atom='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
    <id>https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/example.com/quinn/53156>/id>
    <updated>2022-10-17T15:02:45.646Z</updated>
    <link rel='self' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/example.com/quinn/53156'/>
    <link rel='edit' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/example.com/quinn/53156'/>
    <apps:property name='status' value='PENDING'/>
    <apps:property name='packageContent' value='FULL_MESSAGE'/>
    <apps:property name='includeDeleted' value='false'/>
    <apps:property name='searchQuery' value='in:chat'/>
    <apps:property name='completedDate' value='2022-09-18 10:13'/>
    <apps:property name='adminEmailAddress' value='admin1@example.com'/>
    <apps:property name='requestId' value='53156'/>
    <apps:property name='userEmailAddress' value='quinn@example.com'/>
    <apps:property name='endDate' value='2022-08-30 20:00'/>
    <apps:property name='requestDate' value='2022-09-17 12:51'/>
    <apps:property name='beginDate' value='2022-07-01 04:30'/>
</entry>
```

In this example, the processing of this mailbox has completed. The `status` property is `COMPLETED` and the `numberOfFiles` returned for export is two.

### Java

```
import java.util.Calendar;
import com.google.gdata.client.appsforyourdomain.audit.AuditService;
import com.google.gdata.client.appsforyourdomain.audit.MailBoxDumpRequest;
import com.google.gdata.data.appsforyourdomain.generic.GenericEntry;
...

MailBoxDumpRequest request = new MailBoxDumpRequest();
request.setAdminEmailAddress("admin@example.com");
request.setUserEmailAddress("quinn@example.com");

Calendar beginDate = Calendar.getInstance();
beginDate.set(2022, Calendar.JULY, 1, 4, 30);
request.setBeginDate(beginDate.getTime());

Calendar endDate = Calendar.getInstance();
endDate.set(2022, Calendar.AUGUST, 30, 20, 0);
request.setEndDate(endDate.getTime());

request.setIncludeDeleted(false);
request.setSearchQuery("in:chat");
request.setPackageContent("FULL_MESSAGE");

AuditService service = new AuditService("admin@example.com", "p@55w0rd", "example.com", "example.com-auditapp-v1");
GenericEntry mailboxDumpEntry = service.createMailboxDumpRequest(request);

String requestId = mailboxDumpEntry.getRequestId();
String status = mailboxDumpEntry.getStatus();
String numberOfFiles = mailboxDumpEntry.getNumberOfFiles();
```

### .NET

```
using System;
using Google.GData.Apps;
using Google.GData.Extensions.Apps;
...

MailboxDumpRequest mailboxDumpRequest = new MailboxDumpRequest();
mailboxDumpRequest.BeginDate = new DateTime(2022, 7, 1, 4, 30, 0);
mailboxDumpRequest.EndDate = new DateTime(2022, 8, 30, 20, 0, 0);
mailboxDumpRequest.IncludeDeleted = false;
mailboxDumpRequest.SearchQuery = "in:chat";
mailboxDumpRequest.PackageContent = MonitorLevel.FULL_MESSAGE;

AuditService service = new AuditService("example.com", "example.com-auditapp-v1");
service.setUserCredentials("admin@example.com", "p@55w0rd");
MailboxDumpRequest dumpRequest = service.CreateMailboxDumpRequest("quinn", mailboxDumpRequest);
```

## Retrieve the export status of a mailbox

Because a mailbox export preparation is an asynchronous process, use this retrieval request to see if the encrypted mailbox processing was completed.

To retrieve status details for a mailbox prepared for export, send an HTTP `GET` request with the mailbox's `requestId` to the export feed's URI and include the `Authorization` header:

```
GET https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/DOMAIN_NAME/SOURCE_USERNAME/MAILBOX_REQUESTID
```

Replace the following:

- `DOMAIN_NAME`: the Google Workspace domain name—for example, example.com.
- `SOURCE_USERNAME`: the username of the mailbox that you want to download.
- `MAILBOX_REQUESTID`: the `requestID` is a unique identifier for the mailbox export request that is returned when the export is initially requested.

This request returns an AtomPub entry including the current status of the mailbox export. The possible values for the current status are as follows:

`PENDING`

The request is being processed.

`ERROR`

The request failed due to some error. An example of a possible error is that a wrong API public key was uploaded for the domain.

`COMPLETED`

The request has been processed completely and the encrypted mailbox files are ready for download.

`MARKED_DELETE`

The request is marked for deletion the next time the Google cleanup job runs. For more information aout this cleanup job, see [Delete an encrypted mailbox](#delete_an_encrypted_mailbox).

`DELETED`

The mailbox files were successfully deleted by using the [Delete an encrypted mailbox](#deleting_an_encrypted_mailbox) operation.

`EXPIRED`

The mailbox files were deleted by Google after the 3 week retention limit.

### Example for retrieving the export status of a mailbox

This example retrieves the mailbox status corresponding to the `requestIds` `53156` and `34201` for the user `quinn@example.com`.

### Protocol

```
GET https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/example.com/quinn/53156
```

If successful, the server returns a `201 CREATED` status code.

As you can see from the following response, the status is an `ERROR` and, therefore, the encrypted mailbox files were never created.

```
<entry xmlns:atom='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
    <id>https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/example.com/quinn/53156</id>
    <updated>2022-10-17T15:02:45.646Z</updated>
    <link rel='self' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/example.com/quinn/53156'/>
    <link rel='edit' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/example.com/quinn/53156'/>
    <apps:property name='status' value='ERROR'/>
    <apps:property name='packageContent' value='FULL_MESSAGE'/>
    <apps:property name='includeDeleted' value='false'/>
    <apps:property name='searchQuery' value='in:chat'/>
    <apps:property name='completedDate' value='2022-09-18 10:13'/>
    <apps:property name='adminEmailAddress' value='admin1@example.com'/>
    <apps:property name='numberOfFiles' value='0'/>
    <apps:property name='requestId' value='53156'/>
    <apps:property name='userEmailAddress' value='quinn@example.com'/>
    <apps:property name='endDate' value='2022-08-30 20:00'/>
    <apps:property name='requestDate' value='2022-09-17 12:51'/>
    <apps:property name='beginDate' value='2022-07-01 04:30'/>
</entry>
```

This example retrieves the mailbox status corresponding to the `requestId` `34201`:

```
GET https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/example.com/quinn/34201
```

This second example is successful with a `COMPLETED` status. It returns two mailbox file URLs containing the encrypted mailbox files, which can be downloaded using the URLs in the `fileUrl` elements.

```
<entry>...
    ...
    <apps:property name='status' value='COMPLETED'/>
    <apps:property name='packageContent' value='FULL_MESSAGE'/>
    <apps:property name='completedDate' value='2022-09-18 10:13'/>
    <apps:property name='adminEmailAddress' value='admin2@example.com'/>
    <apps:property name='numberOfFiles' value='2'/>
    <apps:property name='requestId' value='34201'/>
    <apps:property name='userEmailAddress' value='namrata@example.com'/>
    <apps:property name='requestDate' value='2022-09-17 12:51'/>
    <apps:property name='fileUrl0'  value='https://apps-apis.google.com/a/data/compliance/audit/OQAAABW3Z2OlwkDFR0H5n_6lnYAzv-pWlkAlbTyAzvJEV0MC4c7lBDW' />
    <apps:property name='fileUrl1'  value='https://apps-apis.google.com/a/data/compliance/audit/OQAAABW3Z2OlwkD55nLv-pWlkAlbTyAzvJEVPnVYW45C4cC34gtyVCC' />
</entry>
```

### Java

```
import com.google.gdata.client.appsforyourdomain.audit.AuditService;
import com.google.gdata.data.appsforyourdomain.generic.GenericEntry;
...

AuditService service = new AuditService("admin@example.com", "p@55w0rd", "example.com", "example.com-auditapp-v1");
GenericEntry mailboxDumpEntry1 = service.retrieveMailboxDumpRequest("quinn", "53156");
String status = mailboxDumpEntry1.getProperty("status"); // Status is "ERROR" if the mailbox for this request isn't created

GenericEntry mailboxDumpEntry2 = service.retrieveMailboxDumpRequest("quinn", "34201");
String status = mailboxDumpEntry2.getProperty("status");
```

### .NET

```
using System;
using Google.GData.Apps;
using Google.GData.Extensions.Apps;
...

AuditService service = new AuditService("example.com", "example.com-auditapp-v1");
service.setUserCredentials("admin@example.com", "p@55w0rd");
MailboxDumpRequest mailboxDumpEntry1 = service.RetrieveMailboxDumpRequest("quinn", "53156");
RequestStatus status1 = mailboxDumpEntry1.Status; // Status is "ERROR" if the mailbox for this request isn't created

MailboxDumpRequest mailboxDumpEntry2 = service.RetrieveMailboxDumpRequest("quinn", "34201");
RequestStatus status2 = mailboxDumpEntry2.Status;
```

## Retrieve all mailbox status requests

To retrieve all mailbox requests for a domain starting on a particular date, make an HTTP `GET` request to the export feed URI and include the `Authorization` header:

```
GET https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/DOMAIN_NAME?fromDate=FROM_DATE
```

Replace the following:

- `DOMAIN_NAME`: the Google Workspace domain name—for example, example.com.
- `FROM_DATE`: the URL-encoded date of an encrypted mailbox request in Coordinated Universal Time (UTC) format. If no `fromDate` is specified in this `GET` request, all requests in the past three weeks are retrieved.

For a large response, each page of results returns a maximum of 100 entries, and includes a URI in a `<link rel='next'...>` tag pointing to the next page of results. When developing your client application, your code needs to manage these additional results.

### Example for retrieving all mailbox status requests

This example retrieves all mailbox status requests for the domain `example.com` made on or after `9 PM, August 30, 2022`:

### Protocol

```
<feed xmlns:atom='http://www.w3.org/2005/Atom'
xmlns:openSearch='http://a9.com/-/spec/opensearchrss/1.0/'
xmlns:apps='http://schemas.google.com/apps/2006'>
    <id>https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/domain</id>
    <updated>2010-03-17T15:29:21.064Z</updated>
    <link rel='next' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/tapoloka.com?fromDate=2022-08-30%2021:00'/>
    <link rel='http://schemas.google.com/g/2005#feed' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/tapoloka.com'/>
    <link rel='http://schemas.google.com/g/2005#post' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/tapoloka.com'/>
    <link rel='self' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/tapoloka.com?fromDate=2022-08-30%2021:00'/>
    <openSearch:startIndex>1</openSearch:startIndex>
    <entry>
        <atom:id>https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/domain/request ID</atom:id>
        <atom:updated>2022-04-17T15:29:21.064Z</atom:updated>
        <atom:link rel='self' type='application/atom+xml' href='https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/domain/request ID'/>
        <atom:link rel='edit' type='application/atom+xml' href='https://apps-apis.google.com/feeds/compliance/audit/mail/export/domain/request ID'/>
        <apps:property name='status' value='ERROR'/>
        <apps:property name='packageContent' value='FULL_MESSAGE'/>
        <apps:property name='includeDeleted' value='false'/>
        <apps:property name='searchQuery' value='in:chat'/>
        <apps:property name='completedDate' value='2022-09-18 10:13'/>
        <apps:property name='adminEmailAddress' value='admin1@example.com'/>
        <apps:property name='numberOfFiles' value='0'/>
        <apps:property name='requestId' value='the mailbox ID for this request'/>
   </entry>
   <entry>
        <id>>https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/domain/second request ID</id>
        ...
        <apps:property name='status' value='COMPLETED'/>
        <apps:property name='packageContent' value='FULL_MESSAGE'/>
        <apps:property name='includeDeleted' value='false'/>
        <apps:property name='completedDate' value='2022-09-18 10:13'/>
        <apps:property name='adminEmailAddress' value='admin1@example.com'/>
        <apps:property name='numberOfFiles' value='0'/>
        <apps:property name='requestId' value='the mailbox ID for this request'/>
        <apps:property name='userEmailAddress' value='quinn@example.com'/>
        <apps:property name='endDate' value='2022-08-30 20:00'/>
        <apps:property name='requestDate' value='2022-09-17 12:51'/>
        <apps:property name='beginDate' value='2022-07-01 04:30'/>
   </entry>
</feed>
```

### Java

```
import java.util.Calendar;
import java.util.List;
import com.google.gdata.client.appsforyourdomain.audit.AuditService;
import com.google.gdata.client.appsforyourdomain.audit.MailBoxDumpRequest;
import com.google.gdata.data.appsforyourdomain.generic.GenericEntry;
...

AuditService service = new AuditService("admin@example.com", "p@55w0rd", "example.com", "example.com-auditapp-v1");
Calendar fromDate = Calendar.getInstance();
fromDate.set(2022, Calendar.AUGUST, 30, 21, 0);
List<GenericEntry> mailboxDumpRequestEntries = service.retrieveAllMailboxDumpRequests(fromDate.getTime());
for (GenericEntry entry : mailboxDumpRequestEntries) {
  MailBoxDumpRequest request = new MailBoxDumpRequest(entry);
  String status = request.getStatus();
}
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
GenericFeed<MailboxDumpRequest> dumpRequests = service.RetrieveAllMailboxDumpRequests(new DateTime(2022, 8, 30, 21, 0, 0);
```

## Delete an encrypted mailbox

To delete the encrypted mailbox files with a status of `COMPLETED` or `MARKED_DELETED`, make an HTTP `DELETE` request to the export feed's URI including the `requestId` of the mailbox and the `Authorization` header.

```
DELETE https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/DOMAIN_NAME/SOURCE_USERNAME/MAILBOX_REQUESTID
```

Replace the following:

- `DOMAIN_NAME`: the Google Workspace domain name—for example, example.com.
- `SOURCE_USERNAME`: the username of the mailbox that you downloaded.
- `MAILBOX_REQUESTID`: the `requestID` is a unique identifier for the mailbox export request that is returned when the export is initially requested.

If any errors are encountered during the deletion process, the status of `MARKED_DELETE` status is returned. This request will be automatically deleted by a Google cleanup job within 24 hours. However for a request with status `MARKED_DELETE`, some (or all) mailbox files might still be available for download. If you want to make sure that the files are deleted, run this operation again until the `DELETED` status is returned. If the status of `MARKED_DELETE` is returned consistently, then retry after exponential time back offs.

### Example for deleting an encrypted mailbox

This example deletes the mailbox for the user `quinn@example.com` associated with the `requestId` of `34201`:

### Protocol

```
DELETE https://apps-apis.google.com/a/feeds/compliance/audit/mail/export/example.com/quinn/34201
```

### Java

```
import com.google.gdata.client.appsforyourdomain.audit.AuditService;
...

AuditService service = new AuditService("admin@example.com", "p@55w0rd", "example.com", "example.com-auditapp-v1");
service.deleteMailboxDumpRequest("quinn", "34201");
```

### .Net

```
using System;
using Google.GData.Apps;
using Google.GData.Extensions.Apps;
...

AuditService service = new AuditService("example.com", "example.com-auditapp-v1");
service.setUserCredentials("admin@example.com", "p@55w0rd");
service.DeleteMailboxDumpRequest("quinn", "34201");
```
