---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/registrations
root: workspace
fetched_at: 2026-04-23T15:26:03.622Z
---

# REST Resource: registrations

## Resource: Registration

An instruction to Classroom to send notifications from the `feed` to the provided destination.

JSON representation

```
{
  "registrationId": string,
  "feed": {
    object (Feed)
  },
  "expiryTime": string,

  "cloudPubsubTopic": {
    object (CloudPubsubTopic)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>registrationId</code></td><td><p><code>string</code></p><p>A server-generated unique identifier for this <code>Registration</code>.</p><p>Read-only.</p></td></tr><tr><td><code>feed</code></td><td><p><code>object (<code>Feed</code>)</code></p><p>Specification for the class of notifications that Classroom should deliver to the destination.</p></td></tr><tr><td><code>expiryTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The time until which the <code>Registration</code> is effective.</p><p>This is a read-only field assigned by the server.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td colspan="2">Union field <code>destination</code>. Where notifications should be sent. <code>destination</code> can be only one of the following:</td></tr><tr><td><code>cloudPubsubTopic</code></td><td><p><code>object (<code>CloudPubsubTopic</code>)</code></p><p>The Cloud Pub/Sub topic that notifications are to be sent to.</p></td></tr></tbody></table>

A class of notifications that an application can register to receive. For example: "all roster changes for a domain".

JSON representation

```
{
  "feedType": enum (FeedType),

  "courseRosterChangesInfo": {
    object (CourseRosterChangesInfo)
  },
  "courseWorkChangesInfo": {
    object (CourseWorkChangesInfo)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>feedType</code></td><td><p><code>enum (<code>FeedType</code>)</code></p><p>The type of feed.</p></td></tr><tr><td colspan="2">Union field <code>info</code>. Additional parameters about the feed. <code>info</code> can be only one of the following:</td></tr><tr><td><code>courseRosterChangesInfo</code></td><td><p><code>object (<code>CourseRosterChangesInfo</code>)</code></p><p>Information about a <code>Feed</code> with a <code>feedType</code> of <code>COURSE_ROSTER_CHANGES</code>. This field must be specified if <code>feedType</code> is <code>COURSE_ROSTER_CHANGES</code>.</p></td></tr><tr><td><code>courseWorkChangesInfo</code></td><td><p><code>object (<code>CourseWorkChangesInfo</code>)</code></p><p>Information about a <code>Feed</code> with a <code>feedType</code> of <code>COURSE_WORK_CHANGES</code>. This field must be specified if <code>feedType</code> is <code>COURSE_WORK_CHANGES</code>.</p></td></tr></tbody></table>

## FeedType

A type of feed that an application can register for notifications from.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>FEED_TYPE_UNSPECIFIED</code></td><td>Should never be returned or provided.</td></tr><tr><td><code>DOMAIN_ROSTER_CHANGES</code></td><td><p>All roster changes for a particular domain.</p><p>Notifications will be generated whenever a user joins or leaves a course.</p><p>No notifications will be generated when an invitation is created or deleted, but notifications will be generated when a user joins a course by accepting an invitation.</p></td></tr><tr><td><code>COURSE_ROSTER_CHANGES</code></td><td><p>All roster changes for a particular course.</p><p>Notifications will be generated whenever a user joins or leaves a course.</p><p>No notifications will be generated when an invitation is created or deleted, but notifications will be generated when a user joins a course by accepting an invitation.</p></td></tr><tr><td><code>COURSE_WORK_CHANGES</code></td><td><p>All course work activity for a particular course.</p><p>Notifications will be generated when a CourseWork or StudentSubmission object is created or modified. No notification will be generated when a StudentSubmission object is created in connection with the creation or modification of its parent CourseWork object (but a notification will be generated for that CourseWork object's creation or modification).</p></td></tr></tbody></table>

## CourseRosterChangesInfo

Information about a `Feed` with a `feedType` of `COURSE_ROSTER_CHANGES`.

JSON representation

```
{
  "courseId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>The <code>courseId</code> of the course to subscribe to roster changes for.</p></td></tr></tbody></table>

## CourseWorkChangesInfo

Information about a `Feed` with a `feedType` of `COURSE_WORK_CHANGES`.

JSON representation

```
{
  "courseId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>The <code>courseId</code> of the course to subscribe to work changes for.</p></td></tr></tbody></table>

## CloudPubsubTopic

A reference to a Cloud Pub/Sub topic.

To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.

JSON representation

```
{
  "topicName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>topicName</code></td><td><p><code>string</code></p><p>The <code>name</code> field of a Cloud Pub/Sub <a href="https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic">Topic</a>.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a <code>Registration</code>, causing Classroom to start sending notifications from the provided <code>feed</code> to the destination provided in <code>cloudPubSubTopic</code>.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a <code>Registration</code>, causing Classroom to stop sending notifications for that <code>Registration</code>.</td></tr></tbody></table>
