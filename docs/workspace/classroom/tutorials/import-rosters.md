---
source: https://developers.google.com/workspace/classroom/tutorials/import-rosters
root: workspace
fetched_at: 2026-04-23T15:26:07.325Z
---

# Introduction

Teachers that leverage both Classroom and third-party tools face the challenge of setting up their courses and rosters across multiple platforms. This might be done manually, either through the use of CSV uploads or entering emails one-by-one. With the Classroom API, however, third-party tools can reduce their teacher's workloads by integrating with the API's most common use case: **roster import**.

Roster importing allows third-party platforms to retrieve a course's metadata, teachers, and students on a course-by-course basis with **either teacher or admin permissions**. Teachers can retrieve details of the courses they teach, whereas admins have access to details for **all courses across an entire domain**. This flexibility allows developers to seamlessly onboard Classroom rosters onto their platform both on an individual-teacher level or across an entire domain by using admin credentials.

Before diving into the technical details of what a roster import integration might look like, let's first review an example workflow:

1. In the third-party application, a teacher chooses the option to import a Classroom [Course](https://developers.google.com/workspace/classroom/reference/rest/v1/courses).
2. The third-party application calls the [`courses.list`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/list) method through the Classroom API, which will return a response JSON with all the teacher's courses.
3. From the json response, the third-party application displays the titles of the teacher's courses for them to select one. The application will need to keep track of the course IDs to continue onto the next step.
4. With the selected course ID, the third-party application calls the [`students.list`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.students/list) and [`teachers.list`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers/list) methods and displays all names on its website for teachers to confirm for import.
5. Using the emails returned in the `students.list` and `teachers.list` response jsons, the third-party application invites the users to join the newly imported course on their platform.

For each of the methods mentioned in the workflow, you can use the API Explorer to see exactly how each method behaves. We also recommend the following pre-reads before finishing this guide:

1. [Manage Courses with the Classroom API](https://developers.google.com/workspace/classroom/guides/manage-courses)
2. [Manage Students and Teachers](https://developers.google.com/workspace/classroom/guides/manage-users)

![Diagram summarizing the roster import workflow detailed above.](https://developers.google.com/static/workspace/classroom/images/roster_import.png)

## Getting Started

Before implementing the specifics of your Classroom roster import, you'll need to determine what course and user information you'll need to retrieve via the API. You can see what Course metadata is available in the [Reference documentation](https://developers.google.com/workspace/classroom/reference/rest/v1/courses), but some required or common fields needed can be summarized below:

| Field | Use |
| --- | --- |
| id | Required for API requests retrieving student or teachers |
| name | Recommended for ease of use for the user, i.e. displaying on your website |
| ownerId | Required when importing on a domain-wide basis to correctly identify the main teacher of a course |

This course information is retrieved at the `courses.list` step of the workflow above. In this request you can specify certain request parameters. While none are *required* for this method, some recommended parameters are:

| Parameter | Use |
| --- | --- |
| courseState | Left unspecified, the API will return courses of all six [course states](https://developers.google.com/workspace/classroom/reference/rest/v1/courses#CourseState). We recommend specifying `ACTIVE` to retrieve the courses teachers are currently using. |
| pageSize | For teachers who are importing their own courses, we recommend specifying a small (less than 10) pageSize to decrease the API call's response time. |
| pageToken | Required if you're using paged requests. |
| teacherId | Recommended since domain admins often teach courses. Left unspecified, the request will return courses for teachers across the entire domain. |
| fields | Recommended to decrease the API call's response time. |

Using the course IDs retrieved earlier, your application can now retrieve the list of students and co-teachers for that course or courses. This course ID is the only required query parameter for `teachers.list` and `students.list`, but you might similarly want to consider specifying the `pageSize` and `fields` parameters to decrease the response time of your API calls.

All available fields for the [student](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.students) and [teacher](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers) resources can be found in their respective documentation. The two mostly commonly used and typically required needed fields are in the `profile` field: `profile.name` and `profile.emailAddress`.

| Field | Use |
| --- | --- |
| profile.name | Recommended for ease of use for the user, i.e. displaying on your website |
| profile.emailAddress | Required for applications looking to uniquely identify students |

To retrieve and use any of these course or roster details from Classroom, your application will need to request [authorization](https://developers.google.com/workspace/classroom/guides/auth) from users. There are three (3) required scopes to implement this workflow:

- **https://www.googleapis.com/auth/classroom.courses.readonly**
	- Provides Read-Only access to Google Classroom *Courses*
- **https://www.googleapis.com/auth/classroom.rosters.readonly**
	- Provides Read-Only access to the *rosters* of Google Classroom Courses (teachers and students)
- **https://www.googleapis.com/auth/classroom.profile.emails**
	- Provides Read access to the *email* property of teachers and students

## Sync Rosters with Pub/Sub Notifications

As the school year progresses, rosters might change as students drop or add courses. Adding [Pub/Sub notifications](https://developers.google.com/workspace/classroom/guides/push-notifications) will allow you to keep your third-party application in sync with Classroom rosters. To receive notifications, you set up a Google Cloud Pub/Sub topic and then register the topic with the Classroom API. This registration is a request for Classroom to send data from the given feed to the given topic. This feed will be the event triggers for re-syncing with a teacher's Classroom roster.

Utilizing push notifications will require one additional scope, which does not have to be submitted for verification:

- **https://www.googleapis.com/auth/classroom.push-notifications**
	- Allows your app to register for any push notification activity

![Diagram summarizing the roster import workflow with push notifications](https://developers.google.com/static/workspace/classroom/images/roster_import_notifs.png)

For more details on how to integrate with Classroom push notifications, see our [Manage Push Notifications guide](https://developers.google.com/workspace/classroom/guides/push-notifications).
