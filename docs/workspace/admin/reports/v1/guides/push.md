---
source: https://developers.google.com/workspace/admin/reports/v1/guides/push
root: workspace
fetched_at: 2026-04-23T15:24:38.369Z
---

# Push notifications

This document describes how to use push notifications that inform your application when a resource changes.

## Overview

The Admin SDK API provides push notifications that let you monitor changes in resources. You can use this feature to improve the performance of your application. It lets you eliminate the extra network and compute costs involved with polling resources to determine if they have changed. Whenever a watched resource changes, the Admin SDK API notifies your application.

To use push notifications, you must do two things:

- Set up your receiving URL or "webhook" callback receiver.
	This is an HTTPS server that handles the API notification messages that are triggered when a resource changes.
- Set up a ([notification channel](https://cloud.google.com/monitoring/support/notification-options)) for each resource endpoint you want to watch.
	A channel specifies routing information for notification messages. As part of the channel setup, you must identify the specific URL where you want to receive notifications. Whenever a channel's resource changes, the Admin SDK API sends a notification message as a `POST` request to that URL.

Currently, the Admin SDK API supports notifications for changes to the [Activities](../../reference/rest/v1/activities/watch.md) resource.

## Create notification channels

To request push notifications, you must set up a notification channel for each resource you want to monitor. After your notification channels are set up, the Admin SDK API informs your application when any watched resource changes.

### Make watch requests

Each watchable Admin SDK API resource has an associated `watch` method at a URI of the following form:

```
https://www.googleapis.com/API_NAME/API_VERSION/RESOURCE_PATH/watch
```

To set up a notification channel for messages about changes to a particular resource, send a `POST` request to the `watch` method for the resource.

Each notification channel is associated both with a particular user and a particular resource (or set of resources). A `watch` request won't be successful unless the current user or service account owns or has permission to access this resource.

#### Examples

All watch requests for the Activities resource have the general form:

```
POST https://admin.googleapis.com/admin/reports/v1/activity/users/userKey or all/applications/applicationName/watch
Authorization: Bearer auth_token_for_current_user
Content-Type: application/json

{
  "id": "01234567-89ab-cdef-0123456789ab",
  "type": "web_hook",
  "address": "https://mydomain.com/notifications",
  ...
  "token": "target=myApp-myFilesChannelDest",
  "payload": true,
  "expiration": 3600
}
```

The request body has the following properties:

- `id`: A UUID or similar unique string that identifies this channel.
- `type`: The type of delivery mechanism. The value for this field must be `web_hook`.
- `address`: The URL where notifications are sent.
- `token`: An arbitrary string delivered to the target address with each notification, for the purpose of verifying that the notification comes from a trusted source.
- `payload`: A boolean flag indicating whether the payload should be included in the notification.
- `expiration`: The time-to-live in seconds for the notification channel.

You can use the userKey, applicationName, `eventName`, and `filters` parameters to only receive notifications for specific events, users, or applications.

**Note:** The following examples omit the request body for clarity.

Watch for all admin activities:

```
POST https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/admin/watch
```

Watch for all docs activities:

```
POST https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/docs/watch
```

Watch for a specific user's admin activity:

```
POST https://admin.googleapis.com/admin/reports/v1/activity/users/liz@example.com/applications/admin/watch
```

Watch for a specific event, such as changing a user's password:

```
POST https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/admin/watch?eventName=CHANGE_PASSWORD
```

Watch for changes to a specific document:

```
POST https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/docs/watch?eventName=EDIT&filters==doc_id=123456abcdef
```

#### Required properties

With each `watch` request, you must provide these fields:

- An `id` property string that uniquely identifies this new notification channel within your project. We recommend using a universally unique identifier ([UUID](http://en.wikipedia.org/wiki/UUID)) or any similar unique string. Maximum length: 64 characters.
	The ID value you set is echoed back in the `X-Goog-Channel-Id` HTTP header of every notification message that you receive for this channel.
- A `type` property string set to the value `web_hook`.
- An `address` property string set to the URL that listens and responds to notifications for this notification channel. This is your webhook callback URL, and it must use HTTPS.
	Note that the Admin SDK API is able to send notifications to this HTTPS address only if there's a valid SSL certificate installed on your web server. Invalid certificates include:
	- Self-signed certificates.
		- Certificates signed by an untrusted source.
		- Certificates that have been revoked.
		- Certificates that have a subject that doesn't match the target hostname.

#### Optional properties

You can also specify these optional fields with your `watch` request:

- A `token` property that specifies an arbitrary string value to use as a channel token. You can use notification channel tokens for various purposes. For example, you can use the token to verify that each incoming message is for a channel that your application created—to ensure that the notification is not being spoofed—or to route the message to the right destination within your application based on the purpose of this channel. Maximum length: 256 characters.
	The token is included in the `X-Goog-Channel-Token` HTTP header in every notification message that your application receives for this channel.
	If you use notification channel tokens, we recommend that you:
	- Use an extensible encoding format, such as URL query parameters. Example: `forwardTo=hr&createdBy=mobile`
		- Don't include sensitive data such as OAuth tokens.
- An `expiration` property string set to a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time) (in milliseconds) of the date and time when you want the Admin SDK API to stop sending messages for this notification channel.
	If a channel has an expiration time, it's included as the value of the `X-Goog-Channel-Expiration` HTTP header (in human-readable format) in every notification message that your application receives for this channel.

For more details on the request, refer to the `watch` method for the [Activities](../../reference/rest/v1/activities/watch.md) resource in the API Reference.

#### Watch response

If the `watch` request successfully creates a notification channel, it returns an HTTP `200 OK` status code.

The message body of the watch response provides information about the notification channel you just created, as shown in the example below.

```
{
  "kind": "api#channel",
  "id": "reportsApiId",
  "resourceId": "o3hgv1538sdjfh",
  "resourceUri": "https://admin.googleapis.com/admin/reports/v1/activity/userKey/applications/applicationName",
  "token": "target=myApp-myFilesChannelDest",
  "expiration": 3600
}
```

In addition to the properties you sent as part of your request, the returned information also includes the `resourceId` and `resourceUri` to identify the resource being watched on this notification channel.

You can pass the returned information to other notification channel operations, such as when you want to [stop receiving notifications](#stopping).

For more details on the response, refer to the `watch` method for the [Activities](../../reference/rest/v1/activities/watch.md) resource in the API Reference.

#### Sync message

After creating a notification channel to watch a resource, the Admin SDK API sends a `sync` message to indicate that notifications are starting. The `X-Goog-Resource-State` HTTP header value for these messages is `sync`. Due to network timing issues, it's possible to receive the `sync` message even before you receive the `watch` method response.

It's safe to ignore the `sync` notification, but you can also use it. For example, if you decide you don't want to keep the channel, you can use the `X-Goog-Channel-ID` and `X-Goog-Resource-ID` values in a call to [stop receiving notifications](#stopping). You can also use the `sync` notification to do some initialization to prepare for later events.

The format of `sync` messages the Admin SDK API sends to your receiving URL is shown below.

```
POST https://mydomain.com/notifications // Your receiving URL.
X-Goog-Channel-ID: channel-ID-value
X-Goog-Channel-Token: channel-token-value
X-Goog-Channel-Expiration: expiration-date-and-time // In human-readable format. Present only if the channel expires.
X-Goog-Resource-ID: identifier-for-the-watched-resource
X-Goog-Resource-URI: version-specific-URI-of-the-watched-resource
X-Goog-Resource-State: sync
X-Goog-Message-Number: 1
```

Sync messages always have an `X-Goog-Message-Number` HTTP header value of `1`. Each subsequent notification for this channel has a message number that's larger than the previous one, though the message numbers will not be sequential.

### Renew notification channels

A notification channel can have an expiration time, with a value determined either by your request or by any Admin SDK API internal limits or defaults (the more restrictive value is used). The channel's expiration time, if it has one, is included as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time) (in milliseconds) in the information returned by the `watch` method. In addition, the expiration date and time is included (in human-readable format) in every notification message your application receives for this channel in the `X-Goog-Channel-Expiration` HTTP header.

Currently, there's no automatic way to renew a notification channel. When a channel is close to its expiration, you must replace it with a new one by calling the `watch` method. As always, you must use a unique value for the `id` property of the new channel. Note that there's likely to be an "overlap" period of time when the two notification channels for the same resource are active.

## Receive notifications

Whenever a watched resource changes, your application receives a notification message describing the change. The Admin SDK API sends these messages as HTTPS `POST` requests to the URL you specified as the [`address` property](#address_prop) for this notification channel.

### Interpret the notification message format

All notification messages include a set of HTTP headers that have `X-Goog-` prefixes. Some types of notifications can also include a message body.

#### Headers

Notification messages posted by the Admin SDK API to your receiving URL include the following HTTP headers:

<table><tbody><tr><th>Header</th><th>Description</th></tr><tr><td colspan="2"><b>Always present</b></td></tr><tr><td><code><nobr>X-Goog-Channel-ID</nobr></code></td><td>UUID or other unique string you provided to identify this notification channel.</td></tr><tr><td><code><nobr>X-Goog-Message-Number</nobr></code></td><td>Integer that identifies this message for this notification channel. Value is always <code>1</code> for <code>sync</code> messages. Message numbers increase for each subsequent message on the channel, but they're not sequential.</td></tr><tr><td><code><nobr>X-Goog-Resource-ID</nobr></code></td><td>An opaque value identifying the watched resource. This ID is stable across API versions.</td></tr><tr><td><code><nobr>X-Goog-Resource-State</nobr></code></td><td>The new resource state that triggered the notification. Possible values: <code>sync</code> or an <a href="#api-events">event name</a>.</td></tr><tr><td><code><nobr>X-Goog-Resource-URI</nobr></code></td><td>An API-version-specific identifier for the watched resource.</td></tr><tr><td colspan="2"><b>Sometimes present</b></td></tr><tr><td><code><nobr>X-Goog-Channel-Expiration</nobr></code></td><td>Date and time of notification channel expiration, expressed in human-readable format. Only present if defined.</td></tr><tr><td><code><nobr>X-Goog-Channel-Token</nobr></code></td><td>Notification channel token that was set by your application, and that you can use to verify the notification source. Only present if defined.</td></tr></tbody></table>

Notification messages for Activities contain the following information in the request body:

| Property | Description |
| --- | --- |
| `kind` | Identifies this as an Activity resource. Value: the fixed string " `admin#reports#activity` ". |
| `id` | Unique identifier the activity record. |
| `id.time` | Time of occurrence of the activity. The value is in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) date and time format. The time is the complete date plus hours, minutes, and seconds in the form YYYY-MM-DDThh:mm:ssTZD. For example, 2010-04-05T17:30:04+01:00. |
| `id.uniqueQualifier` | Unique qualifier if multiple events have the same time. |
| `id.applicationName` | Application name to which the event belongs. The possible values include: - [admin](../appendix/activity/admin-event-names.md) - [calendar](../appendix/activity/calendar.md) - [drive](../appendix/activity/drive.md) - [groups](../appendix/activity/groups.md) - [groups\_enterprise](../appendix/activity/groups-enterprise.md) - [login](../appendix/activity/login.md) - [mobile](../appendix/activity/mobile.md) - [saml](../appendix/activity/saml.md) - [token](../appendix/activity/token.md) - [user\_accounts](../appendix/activity/user-accounts.md) |
| `id.customerId` | The unique identifier for a Google Workspace account. |
| `actor` | User doing the action. |
| `actor.callerType` | The type of author who performed the activity listed in the report. In this version of the API, the `callerType` is the `USER` or OAuth 2LO entity request who performed the action listed in the report. |
| `actor.email` | The primary email address of the user whose activities are being reported. |
| `actor.profileId` | The user's unique Google Workspace profile ID. |
| `ownerDomain` | Domain of the Admin console or the Docs application's document owner. This is the domain that is affected by the report's event. |
| `ipAddress` | IP address of the user doing the action. This is the Internet Protocol (IP) address of the user when logging into Google Workspace which may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. The API supports [IPv4](http://wikipedia.org/wiki/IPv4) and [IPv6](http://wikipedia.org/wiki/IPv6_address). |
| `events[]` | Activity events in the report. |
| `events[].type` | Type of event. The Google Workspace service or feature that an administrator changes is identified in the `type` property which identifies an event using the `eventName` property. |
| `events[].name` | Name of the event. This is the specific name of the activity reported by the API. And each `eventName` is related to a specific Google Workspace service or feature which the API organizes into types of events.   For `eventName` request parameters in general: - If no `eventName` is given, the report returns all possible instances of an `eventName`. - When you request an `eventName`, the API's response returns all activities which contain that `eventName`. It is possible that the returned activities will have other `eventName` properties in addition to the one requested. |
| `events[].parameters[]` | Parameter value pairs for various applications. |
| `events[].parameters[].name` | The name of the parameter. |
| `events[].parameters[].value` | String value of the parameter. |
| `events[].parameters[].intValue` | Integer value of the parameter. |
| `events[].parameters[].boolValue` | Boolean value of the parameter. |

#### Examples

Notification messages for Activity resource events have the general form:

```
POST https://mydomain.com/notifications
Content-Type: application/json; utf-8
Content-Length: 0
X-Goog-Channel-ID: reportsApiId
X-Goog-Channel-Token: 398348u3tu83ut8uu38
X-Goog-Channel-Expiration: Tue, 29 Oct 2013 20:32:02 GMT
X-Goog-Resource-ID:  ret08u3rv24htgh289g
X-Goog-Resource-URI: https://admin.googleapis.com/admin/reports/v1/activity/userKey/applications/applicationName
X-Goog-Resource-State:  eventName
X-Goog-Message-Number: 10

{
  "kind": "admin#reports#activity",
  "id": {
    "time": datetime,
    "uniqueQualifier": long,
    "applicationName": string,
    "customerId": string
  },
  "actor": {
    "callerType": string,
    "email": string,
    "profileId": long
  },
  "ownerDomain": string,
  "ipAddress": string,
  "events": [
    {
      "type": string,
      "name": string,
      "parameters": [
        {
          "name": string,
          "value": string,
          "intValue": long,
          "boolValue": boolean
        }
      ]
    }
  ]
}
```

An example of an admin activity event:

```
POST https://mydomain.com/notifications
Content-Type: application/json; utf-8
Content-Length: 596
X-Goog-Channel-ID: reportsApiId
X-Goog-Channel-Token: 245t1234tt83trrt333
X-Goog-Channel-Expiration: Tue, 29 Oct 2013 20:32:02 GMT
X-Goog-Resource-ID:  ret987df98743md8g
X-Goog-Resource-URI: https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/admin?alt=json
X-Goog-Resource-State:  CREATE_USER
X-Goog-Message-Number: 23

{
  "kind": "admin#reports#activity",
  "id": {
    "time": "2013-09-10T18:23:35.808Z",
    "uniqueQualifier": "-0987654321",
    "applicationName": "admin",
    "customerId": "ABCD012345"
  },
  "actor": {
    "callerType": "USER",
    "email": "admin@example.com",
    "profileId": "0123456789987654321"
  },
  "ownerDomain": "apps-reporting.example.com",
  "ipAddress": "192.0.2.0",
  "events": [
    {
      "type": "USER_SETTINGS",
      "name": "CREATE_USER",
      "parameters": [
        {
          "name": "USER_EMAIL",
          "value": "liz@example.com"
        }
      ]
    }
  ]
}
```

### Respond to notifications

To indicate success, you can return any of the following status codes: `200`, `201`, `202`, `204`, or `102`.

If your service uses [Google's API client library](../../../directory/v1/libraries.md) and returns `500`,`502`, `503`, or `504`, the Admin SDK API retries with [exponential backoff](https://www.google.com/search?q=define%3Aexponential+backoff&oq=define%3Aexponential+backoff). Every other return status code is considered to be a message failure.

### Understand Admin SDK API notification events

This section provides details on the notification messages you can receive when using push notifications with the Admin SDK API.

Reports API push notifications contain two types of messages: [sync](#sync) messages and event notifications. The message type is indicated in the `X-Goog-Resource-State` HTTP header. Possible values for event notifications are the same as for the [`activities.list`](../../reference/rest/v1/activities/list.md) method. Each application has unique events:

- [admin](../appendix/activity/admin-event-names.md)
- [calendar](../appendix/activity/calendar.md)
- [drive](../appendix/activity/drive.md)
- [groups](../appendix/activity/groups.md)
- [login](../appendix/activity/login.md)
- [mobile](../appendix/activity/mobile.md)
- [saml](../appendix/activity/saml.md)
- [token](../appendix/activity/token.md)
- [user\_accounts](../appendix/activity/user-accounts.md)

## Stop notifications

The `expiration` property controls when the notifications stop automatically. You can choose to stop receiving notifications for a particular channel before it expires by calling the `stop` method at the following URI:

```
https://www.googleapis.com/admin/reports_v1/channels/stop
```

This method requires that you provide at least the channel's `id` and the `resourceId` properties, as shown in the example below. Note that if the Admin SDK API has several types of resources that have `watch` methods, there's only one `stop` method.

Only users with the right permission can stop a channel. In particular:

- If the channel was created by a regular user account, only the same user from the same client (as identified by the OAuth 2.0 client IDs from the auth tokens) who created the channel can stop the channel.
- If the channel was created by a service account, any user from the same client can stop the channel.

The following code sample shows how to stop receiving notifications:

```
POST https://www.googleapis.com/admin/reports_v1/channels/stop
  
Authorization: Bearer CURRENT_USER_AUTH_TOKEN
Content-Type: application/json

{
  "id": "4ba78bf0-6a47-11e2-bcfd-0800200c9a66",
  "resourceId": "ret08u3rv24htgh289g"
}
```
