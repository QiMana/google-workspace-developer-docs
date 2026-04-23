---
source: https://developers.google.com/workspace/classroom/reference/release-notes
root: workspace
fetched_at: 2026-04-23T15:25:51.470Z
---

# Release Notes

This page contains release notes for the Classroom API. Subscribe to the [announcement list](https://groups.google.com/forum/#!forum/classroom-dev-announce) to get email updates.

#### 13 November 2023: Developer Preview: Rubrics CRUD

[Rubrics CRUD](../rubrics/getting-started.md) is available as part of the [Google Workspace Developer Preview Program](../../preview.md), which grants early access to certain features. This feature allows developers to manage Classroom [rubrics](https://support.google.com/edu/classroom/answer/9335069?co=GENIE.Platform%3DDesktop) on behalf of teachers. See the [roadmap](./roadmap.md) to learn more about participating in preview features.

#### 26 June 2023: Non-breaking error code change for Invited Users

The following endpoints now return a 404 error for requests from Invited Users (a teacher or student that has been [invited](../guides/manage-invitations.md) to a course but has not yet accepted). Previously these endpoints returned a 403:

- `courses.courseWork.create`
- `courses.courseWork.delete`
- `courses.courseWork.get`
- `courses.courseWork.patch`
- `courses.courseWorkMaterials.create`
- `courses.courseWorkMaterials.delete`
- `courses.courseWorkMaterials.get`
- `courses.courseWorkMaterials.patch`
- `courses.announcements.create`
- `courses.announcements.delete`
- `courses.announcements.get`
- `courses.announcements.patch`

The following related endpoints are unaffected:

- `courses.courseWork.list`
- `courses.courseWork.modifyAssignees`
- `courses.courseWorkMaterials.list`
- `courses.announcements.list`
- `courses.announcements.modifyAssignees`

#### 8 August 2022: Grade category and gradebook settings

It is now possible to retrieve the [grade category](./rest/v1/GradeCategory.md) for coursework and [gradebook settings](./rest/v1/courses.md#gradebooksettings) for courses using the API.

#### 21 September 2020: Classroom Materials

Developers can now read, write, and modify CourseWork Material items in Classroom:

- [Create CourseWorkMaterials](./rest/v1/courses.courseWorkMaterials/create.md)
- Retrieve [one](./rest/v1/courses.courseWorkMaterials/get.md) or [all CourseWorkMaterials](./rest/v1/courses.courseWorkMaterials/list.md)
- [Update CourseWorkMaterials](./rest/v1/courses.courseWorkMaterials/patch.md)
- [Modify attachments for CourseWorkMaterials](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWorkMaterials/modifyAttachments)
- [Delete CourseWorkMaterials](./rest/v1/courses.courseWorkMaterials/delete.md)

#### 18 November 2019: New Share Button URL Parameters

- Set [share tag attributes](../guides/sharebutton.md#share_tag_attributes) for course ID and material type when sharing content to Classroom.

#### 2 April 2019: Topics in Classrooom

- [Retrieve](./rest/v1/courses.topics/list.md), [create](./rest/v1/courses.topics/create.md), [edit](./rest/v1/courses.topics/patch.md), and [delete](./rest/v1/courses.topics/delete.md) Topics in Classroom - now you can organize and retrieve Classwork items in Classroom through the API.

#### 7 August 2018: Push notifications for course work and student submissions

- Get [real-time notifications](../best-practices/push-notifications.md) of changes to course work and student submissions - now you can listen for new assignments being posted, students turning in their submissions, teachers grading submissions, and more

#### 26 September 2017: Push notifications, announcements, and individualized posts

- Get [real-time notifications](../best-practices/push-notifications.md) of roster changes - instead of polling Classroom API endpoints for changes, you can use [Google Cloud Pub/Sub](https://cloud.google.com/pubsub/) to get roster updates for a class or a domain
- Create and update [announcements](./rest/v1/courses.announcements.md) - in addition to coursework, applications can now create and update announcements in the class stream
- Create and update [individualized posts](./rest/v1/courses.courseWork.md) - applications now have the option to post announcements or coursework to individual students, instead of the whole class

#### 1 August 2017: Transfer course ownership and submission history

- [Update](./rest/v1/courses.md) the primary owner of a course (ownerId) with admin credentials, or initiate an [invitation](./rest/v1/invitations.md#courserole) for a teacher to become the course owner
- Access [submission history](./rest/v1/courses.courseWork.studentSubmissions.md) for a student submission

#### 19 June 2017: Schedule coursework, calendar, and verified teachers

Updates to the Classroom API

- [Schedule coursework](./rest/v1/courses.courseWork.md) to post at a later date/time by setting the scheduledTime field of coursework
- Access the [calendarId](./rest/v1/courses.md) of a course
- Identify if a given user is a [verified teacher](./rest/v1/userProfiles.md)

#### 11 January 2017: Coursework updates

Updates to the [coursework](../guides/manage-coursework.md) endpoints lets applications:

- Create and update questions
- Modify and delete coursework
- Add Drive items and YouTube videos to coursework and student submissions

#### 17 August 2016: Guardians in the Classroom API

Google Classroom generates email summaries of student activities for guardians. The Classroom API has support for [guardians](../guides/manage-guardians.md). Developers can

- Invite individuals to become guardians
- Retrieve a student's invited and active guardians
- Manage active guardians
- G Suite for Education admins should confirm their [Classroom Data access settings](https://admin.google.com/ac/managedsettings/397451267717/DataAccessSettings) are correct.
- The Classroom API is now available in Google Apps Script. Try out the [QuickStart](../quickstart/apps-script.md).

#### 18 May 2016: Coursework added to the Classroom API

The Classroom API now includes coursework - the assignments, questions, student responses, and grades. See the [Coursework guide](../guides/manage-coursework.md) to get started.

#### 08 August 2015: Classroom API now generally available

The Classroom API is now available to all developers and G Suite for Education domains. You no longer need to request access to begin using the API.

- G Suite for Education admins should confirm their [Classroom Data access settings](https://admin.google.com/ac/managedsettings/397451267717/DataAccessSettings) are correct.
- The Classroom API is now available in Google Apps Script. Try out the [QuickStart](../quickstart/apps-script.md).

#### 29 June 2015: Classroom API now available developer preview

The Classroom API is now available for developer preview. You can sign up now for early [access and test accounts](../guides/onboarding/prerequisites.md).

- ~~G Suite for Education admins who want to give users in their domain early access to the API can [sign up for the domains whitelist](https://support.google.com/code/contact/classroom_api_admin_preview).~~
- ~~Developers can [apply for early access](https://docs.google.com/a/google.com/forms/d/1hY4Lk3imYBSOanQHZSqw1AYt9AswVGiltV-Jp7_5QpI/viewform) to code with the API.~~

For the full announcement, see the [Google for Education blog](https://googleforeducation.blogspot.com/2015/06/new-ways-to-integrate-with-Google-Classroom.html).
