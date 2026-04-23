---
source: https://developers.google.com/workspace/classroom/guides/auth
root: workspace
fetched_at: 2026-04-23T15:25:44.954Z
---

# Choose Google Classroom API scopes

This document contains Google Classroom API-specific authorization and authentication information. Before reading this document, be sure to read the Google Workspace's general authentication and authorization information at [Learn about authentication and authorization](https://developers.google.com/workspace/guides/auth-overview).

## Configure OAuth 2.0 for authorization

[Configure the OAuth consent screen and choose scopes](https://developers.google.com/workspace/guides/configure-oauth-consent) to define what information is displayed to users and app reviewers, and register your app so that you can publish it later.

## Classroom API scopes

To define the level of access granted to your app, you need to identify and declare *authorization scopes*. An authorization scope is an OAuth 2.0 URI string that contains the Google Workspace app name, what kind of data it accesses, and the level of access. Scopes are your app's requests to work with Google Workspace data, including users' Google Account data.

When your app is installed, a user is asked to validate the scopes used by the app. Generally, you should choose the most narrowly focused scope possible and avoid requesting scopes that your app doesn't require. Users more readily grant access to limited, clearly described scopes.

The Classroom API supports the following scopes:

| Scopes | Meaning |
| --- | --- |
| `  https://www.googleapis.com/auth/classroom.addons.teacher  ` | See, create, and update the requesting Google Cloud project's attachments to stream items in classes you teach in Google Classroom. |
| `  https://www.googleapis.com/auth/classroom.addons.student  ` | See and update the requesting Google Cloud project's attachments to stream items in Google Classroom. |
| `  https://www.googleapis.com/auth/classroom.announcements  ` | View and manage announcements in Google Classroom. |
| `  https://www.googleapis.com/auth/classroom.announcements.readonly  ` | View announcements in Google Classroom. |
| `  https://www.googleapis.com/auth/classroom.courses  ` | See, edit, create, and permanently delete your Google Classroom classes. |
| `  https://www.googleapis.com/auth/classroom.courses.readonly  ` | View your Google Classroom classes. |
| `  https://www.googleapis.com/auth/classroom.coursework.me  ` | See, create and edit coursework items including assignments, questions, and grades. |
| `  https://www.googleapis.com/auth/classroom.coursework.me.readonly  ` | View your coursework and grades in Google Classroom. |
| `  https://www.googleapis.com/auth/classroom.coursework.students  ` | Manage coursework and grades for students in the Google Classroom classes you teach and view the coursework and grades for classes you administer. |
| `  https://www.googleapis.com/auth/classroom.coursework.students.readonly  ` | View coursework and grades for students in the Google Classroom classes you teach or administer. |
| `  https://www.googleapis.com/auth/classroom.courseworkmaterials  ` | See, edit, and create classwork materials in Google Classroom. |
| `  https://www.googleapis.com/auth/classroom.courseworkmaterials.readonly  ` | See all classwork materials for your Google Classroom classes. |
| `  https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly  ` | View your Google Classroom guardians. |
| `  https://www.googleapis.com/auth/classroom.guardianlinks.students  ` | View and manage guardians for students in your Google Classroom classes. |
| `  https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly  ` | View guardians for students in your Google Classroom classes. |
| `  https://www.googleapis.com/auth/classroom.profile.emails  ` | View the email addresses of people in your classes. |
| `  https://www.googleapis.com/auth/classroom.profile.photos  ` | View the profile photos of people in your classes. |
| `  https://www.googleapis.com/auth/classroom.push-notifications  ` | Receive notifications about your Google Classroom data. |
| `  https://www.googleapis.com/auth/classroom.rosters  ` | Manage your Google Classroom class rosters. |
| `  https://www.googleapis.com/auth/classroom.rosters.readonly  ` | View your Google Classroom class rosters. |
| `  https://www.googleapis.com/auth/classroom.student-submissions.me.readonly  ` | View your coursework and grades in Google Classroom. |
| `  https://www.googleapis.com/auth/classroom.student-submissions.students.readonly  ` | View coursework and grades for students in the Google Classroom classes you teach or administer. |
| `  https://www.googleapis.com/auth/classroom.topics  ` | See, create, and edit topics in Google Classroom. |
| `  https://www.googleapis.com/auth/classroom.topics.readonly  ` | View topics in Google Classroom. |
