---
source: https://developers.google.com/workspace/classroom/best-practices/push-notifications
root: workspace
fetched_at: 2026-04-23T15:25:43.544Z
---

# Push notifications in the Classroom API

You can use the methods on the [`Registrations`](https://developers.google.com/workspace/classroom/reference/rest/v1/registrations) collection to receive notifications when data changes in Classroom.

This article provides a conceptual overview along with simple instructions on how to start receiving push notifications.

## Overview of Classroom push notifications

The Classroom API push notifications feature allows applications using the Classroom API to subscribe for notifications when data changes in Classroom. Notifications are delivered to a [Cloud Pub/Sub](https://cloud.google.com/pubsub) topic, usually within a few minutes of the change.

To receive push notifications, you need to [set up a Cloud Pub/Sub topic](#topic-setup) and provide that topic's name when you create a **registration** for the appropriate **feed** of notifications.

Below are definitions of key concepts used in this documentation:

- A **destination** is a place where notifications are sent.
- A **feed** is a type of notifications that a third party application can subscribe to. For example, "roster changes for course 1234".
- A **registration** is an instruction to the Classroom API to deliver notifications from a particular *feed* to a *destination*.

Once you create a registration for a feed, that registration's Cloud Pub/Sub topic receives notifications from that feed until it expires. Your registration lasts a week, but you can extend it at any point before it expires by making an identical request to `registrations.create()`.

Your Cloud Pub/Sub topic only receives notifications about resources that you can view with the credentials you supply when creating a registration. For example, if the user revokes permission from your application or is removed as a teacher, notifications are no longer delivered.

### Types of feeds

The Classroom API offers three types of feed:

- Each domain has a **roster changes for domain** feed, which exposes notifications when students and teachers join and leave courses in that domain.
- Each course has a **roster changes for course** feed, which exposes notifications when students and teachers join and leave courses in that course.
- Each course has a **course work changes for course** feed, which exposes notifications when any course work or student submission objects are created or modified in that course.

## Set up a Cloud Pub/Sub topic

Notifications are delivered to Cloud Pub/Sub topics. From Cloud Pub/Sub, you can receive notifications on a webhook, or by polling a subscription endpoint.

To set up a Cloud Pub/Sub topic, you need to do the following:

1. Make sure you fulfill the [Cloud Pub/Sub Prerequisites](https://cloud.google.com/pubsub/prereqs).
2. [Set up a Cloud Pub/Sub client](https://cloud.google.com/pubsub/configure).
3. Review the [Cloud Pub/Sub pricing](https://cloud.google.com/pubsub/pricing), and enable billing for your Developer Console project.
4. Create a Cloud Pub/Sub topic [in the Developer Console](https://cloud.google.com/pubsub/docs/quickstart-console#create_a_topic) (easiest), [via the command line tool](https://cloud.google.com/pubsub/docs/quickstart-cli#use_the_gcloud_command-line_tool) (for simple programmatic use) or using the [Cloud Pub/Sub API](https://cloud.google.com/pubsub/docs/quickstart-client-libraries#create_a_topic_and_a_subscription). Note that Cloud Pub/Sub [only allows a limited number of topics](https://cloud.google.com/pubsub/quotas), so using one topic to receive all your notifications ensures you do not hit scaling issues if your application becomes popular.
5. [Create a Subscription in Cloud Pub/Sub](https://cloud.google.com/pubsub/docs/subscriber), to tell Cloud Pub/Sub how to deliver your notifications.
6. Finally, before registering for Push Notifications, you need to [grant the Push Notifications service account (`classroom-notifications@system.gserviceaccount.com`) permission](https://cloud.google.com/pubsub/docs/access_control#console) to publish to your topic.

## Register your application for notifications

Once you have a topic that the Classroom API push notifications service account can publish to, you can register for notifications, using the [`registrations.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/registrations/create) method. The `registrations.create()` method validates that the provided Cloud Pub/Sub topic can be reached by the push notifications service account. The method fails if the push notifications service account cannot reach the topic; for example, if the topic does not exist or you have not granted it publish permission on that topic.

### Authorization

Like all calls to the Classroom API, calls to `registrations.create()` [must be authorized](https://developers.google.com/workspace/classroom/guides/auth) with an authorization token. This authentication token must include the Push Notifications scope (`https://www.googleapis.com/auth/classroom.push-notifications`) and whatever scopes are required to view the data about which notifications are being sent.

- For roster change feeds, this means the Rosters scope or (ideally) its read-only variant (`https://www.googleapis.com/auth/classroom.rosters.readonly` or `https://www.googleapis.com/auth/classroom.rosters`).
- For course work change feeds, this means the "students" versions of the course work scope or (ideally) its read-only variant (`https://www.googleapis.com/auth/classroom.coursework.students.readonly` or `https://www.googleapis.com/auth/classroom.coursework.students`).

For notifications to be delivered, the application must retain an OAuth grant from the authorized user with the required scopes. If the user disconnects the application, notifications cease. Note that currently, domain-wide delegation of authority is not supported for this purpose. If you attempt to register for notifications using only domain-wide delegated authority, you will receive a `@MissingGrant` error.

## Receive notifications

Notifications are encoded with JSON, and contain:

- The name of the collection containing the resource that changed. For notifications about roster changes, this is either `courses.students` or `courses.teachers`. For course work changes, this is either `courses.courseWork` or `courses.courseWork.studentSubmissions`.
- Identifiers for the resource that changed, in a map. This map is designed to match the arguments to the `get` method of the appropriate resource. For notifications about roster changes, the `courseId` and `userId` fields will be populated, and can be sent unmodified to [courses.students.get()](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.students/get) or [courses.teachers.get()](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers/get). Similarly, changes to the courses.courseWork collection will have `courseId` and `id` fields that can be sent unmodified to [courses.courseWork.get()](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork/get) and changes to the courses.courseWork.studentSubmissions collection will have `courseId`, `courseWorkId`, and `id` fields that can be sent unmodified to [courses.courseWork.studentSubmissions.get()](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/get).

The following code snippet demonstrates a sample notification:

```
{
  "collection": "courses.students",
  "eventType": "CREATED",
  "resourceId": {
    "courseId": "12345",
    "userId": "45678"
  }
}
```

Notifications also have a `registrationId` message attribute, containing the identifier for the registration that caused the notification, which can be used with [`registrations.delete()`](https://developers.google.com/workspace/classroom/reference/rest/v1/registrations/delete) to unregister from notifications.
