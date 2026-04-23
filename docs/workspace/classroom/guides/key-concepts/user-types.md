---
source: https://developers.google.com/workspace/classroom/guides/key-concepts/user-types
root: workspace
fetched_at: 2026-04-23T15:25:46.374Z
---

# User roles within Google Classroom

In Google Classroom, users can have the following roles:

- Teacher
- Student
- Guardian
- Administrator

The assignment of a role depends on how the user was rostered within a `Course`. There is no guarantee that if a user is a teacher or student within an institution, they will have the same role set within a given Google Classroom `Course`. For example, if a user is a teacher within a school district, they can be either a teacher or student in Classroom depending on what role was chosen for them for.

The easiest way to discover users that are teachers within any given `Course` is by using the [`courses.teachers.list()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers/list) or [`courses.teachers.get()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers/get) endpoints. Similar endpoints exist for students and guardians.

## Teachers

Teachers can create and manage `Courses`, `CourseWork`, `CourseWorkMaterials`, `Announcements`, attachments and grades in Classroom. They can also invite other users to be teachers, students, or guardians within a `Course`.

Only an administrator can use the [`courses.teachers.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers/create) endpoint to directly add a user as a teacher in a `Course`. In all other circumstances, the user must be invited by a teacher in a `Course`. Invitations can be created using the [`invitations.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/invitations/create) endpoint.

There can be multiple co-teachers within a single `Course`, but there can only be a single `Course` owner. Only a `Course` owner can delete the `Course` and change the `Course` owner. This is important if [`Course` ownership must be transferred](https://developers.google.com/workspace/classroom/guides/manage-courses#transfer_course_ownership) between users. `Course` owners can be updated using the [`courses.patch()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/patch) endpoint.

## Students

Students can view `CourseWork`, `CourseWorkMaterials`, `Announcements`, attachments and grades in Classroom. They can create and modify submissions in the Google Classroom UI and use the Classroom API to read metadata about their submission, modify any attachments on the submission, and change the submission state.

Only an administrator can use the [`courses.students.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.students/create) endpoint to directly add a user as a student in a `Course`. A user can directly add themselves as a student in the `Course` if they specify the `enrollmentCode` field. Otherwise, the user must be invited by a teacher in a `Course`. Invitations can be created using the [`invitations.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/invitations/create) endpoint.

## Guardians

Guardians will receive email summaries of their student's work in a `Course`. Depending on the domain's Google Workspace for Education edition, guardians may also be able to preview their student's courses. The Classroom API allows guardians to be invited to a `Course` using the [`guardianInvitations` endpoints](https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardianInvitations). Guardians can be invited by Google Workspace for Education domain administrators and verified teachers depending on how the domain was set up in the Google Admin console. [Verified teachers](https://support.google.com/edu/classroom/answer/6071551#verify&zippy=%2Cverify-teachers) are teachers that have been provided special permissions by administrators. Students can have up to 20 different guardians.

## Administrators

Google Workspace for Education administrators can manage domain settings and permissions. This guide does not include a comprehensive list of all the capabilities of various administrators and administrator roles. For more comprehensive information on Google Workspace for Education administrators, see the [help center administrator section](https://support.google.com/edu/classroom/topic/11987113?ref_topic=11986220&sjid=9648783913918262890-NC). In the context of the Classroom API, administrators can create and manage `Courses`, `Aliases`, teachers, students, and guardians. They can read any `CourseWork`, `CourseWorkMaterials`, `Announcements`, `StudentSubmissions`, or `Topics` within a `Course`.
