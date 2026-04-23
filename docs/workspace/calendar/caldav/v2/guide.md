---
source: https://developers.google.com/workspace/calendar/caldav/v2/guide
root: workspace
fetched_at: 2026-04-23T15:24:57.098Z
---

# CalDAV API Developer's Guide

CalDAV is an extension of WebDAV that provides a standard for clients to access calendar information on a remote server.

Google provides a CalDAV interface that you can use to view and manage calendars using the CalDAV protocol.

## Specifications

For each of the relevant specifications, Google's CalDAV support is as follows:

- [rfc4918: HTTP Extensions for Web Distributed Authoring and Versioning (WebDAV)](http://tools.ietf.org/html/rfc4918)
	- Supports the HTTP methods `GET`, `PUT`, `HEAD`, `DELETE`, `POST`, `OPTIONS`, `PROPFIND` and `PROPPATCH`.
		- Does not support the HTTP methods `LOCK`, `UNLOCK`, `COPY`, `MOVE`, or `MKCOL`, or the `If*` header (except for `If-Match`).
		- Does not support arbitrary (user-defined) WebDAV properties.
		- Does not support WebDAV Access Control (rfc3744).
- [rfc4791: Calendaring Extensions to WebDAV (CalDAV)](http://tools.ietf.org/html/rfc4791)
	- Supports the HTTP method `REPORT`. All reports except free-busy-query are implemented.
		- Does not support the HTTP method `MKCALENDAR`.
		- Does not support the `AUDIO` action.
- [rfc5545: iCalendar](http://tools.ietf.org/html/rfc5545)
	- Data exposed in the CalDAV interface is formatted according to the iCalendar specification.
		- Does not currently support `VTODO` or `VJOURNAL` data.
		- Does not support the Apple iCal® extension to allow user-settable URL properties.
- [rfc6578: Collection Synchronization for WebDAV](http://tools.ietf.org/html/rfc6578)
	- Client applications must switch to this mode of operation after the initial sync.
- [rfc6638: Scheduling Extensions to CalDAV](http://tools.ietf.org/html/rfc6638)
	- Supports a trivial "inbox," which is always empty.
		- Invitations you receive are automatically delivered into your "events" collection rather than being placed into your "inbox."
		- Does not support free-busy lookup.
- [caldav-ctag-02: Calendar Collection Entity Tag (CTag) in CalDAV](https://trac.calendarserver.org/browser/CalendarServer/trunk/doc/Extensions/caldav-ctag.txt)
	- The calendar `ctag` is like a resource `etag`; it changes when anything in the calendar has changed. This allows the client application to quickly determine that it does not need to synchronize any changed events.
- [calendar-proxy: Calendar User Proxy Functionality in CalDAV](https://github.com/apple/ccs-calendarserver/blob/master/doc/Extensions/caldav-proxy.txt)
	- To improve the performance of calendar syncing from iOS devices, which don't support delegation, using the `calendar-proxy-read-for` or `calendar-proxy-write-for` properties with an iOS UserAgent will fail.

We have not yet provided a full implementation of all of the relevant specifications. However, for many clients such as Apple's Calendar app the CalDAV protocol should interoperate correctly.

Note: For account security and to prevent abuse, Google might set cookies on client applications that access data via CalDAV.

## Creating your client ID

To use the CalDAV API you need to have a [Google Account](https://www.google.com/accounts/NewAccount). If you already have an account you can use, then you're all set.

Before you can send requests to the CalDAV API, you must register your client with the [Google API Console](https://console.cloud.google.com/) by creating a project.

Go to the [Google API Console](https://console.cloud.google.com/project). Click **Create project**, enter a name, and click **Create**.

The next step is to activate **CalDAV API**.

To enable an API for your project, do the following:

1. [Open the API Library](https://console.cloud.google.com/apis/library) in the Google API Console. If prompted, select a project or create a new one. The API Library lists all available APIs, grouped by product family and popularity.
2. If the API you want to enable isn't visible in the list, use search to find it.
3. Select the API you want to enable, then click the **Enable** button.
4. If prompted, enable billing.
5. If prompted, accept the API's Terms of Service.
To perform **CalDAV API** requests you will need **Client ID** and **Client Secret**.

To find your project's client ID and client secret, do the following:

1. Select an existing OAuth 2.0 credential or open the [Credentials page](https://console.cloud.google.com/apis/credentials).
2. If you haven't done so already, create your project's OAuth 2.0 credentials by clicking **Create credentials > OAuth client ID**, and providing the information needed to create the credentials.
3. Look for the **Client ID** in the **OAuth 2.0 client IDs** section. For details, click the client ID.

## Connecting to Google's CalDAV server

To use the CalDAV interface, a client program initially connects with the calendar server at one of two starting points. In either case, the connection must be made over HTTPS and must use the [OAuth 2.0](https://developers.google.com/workspace/calendar/auth) authentication scheme. The CalDAV server will refuse to authenticate a request unless it arrives over HTTPS with OAuth 2.0 authentication of a Google account. Attempting to connect over HTTP or using Basic Authentication results in an HTTP `401 Unauthorized` status code.

If the client program (such as Apple's Calendar app) requires a principal collection as the starting point, the URI to connect to is:

```
https://apidata.googleusercontent.com/caldav/v2/valid/user
```

Where `valid` should be replaced by the "calendar ID" of the calendar to be accessed. This can be found through the Google Calendar web interface as follows: in the pull-down menu next to the calendar name, select **Calendar Settings**. On the resulting page the calendar ID is shown in a section labeled **Calendar Address**. The calendar ID for a user's primary calendar is the same as that user's email address.

If a client program (such as [Mozilla Sunbird](http://www.mozilla.org/projects/calendar/sunbird/)) requires a calendar collection as the starting point, the URI to connect to is:

```
https://apidata.googleusercontent.com/caldav/v2/valid/events
```

The old endpoint **https://www.google.com/calendar/dav** is deprecated and no longer supported; use it at your own risk. We recommend you transition to the new endpoint format described above.

iCal® is a trademark of Apple Inc.
