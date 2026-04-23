---
source: https://developers.google.com/workspace/classroom/guides/key-concepts/api-structure
root: workspace
fetched_at: 2026-04-23T15:25:45.858Z
---

# API resources

This guide provides an overview of the primary components that make up the Google Classroom API. The Google Classroom API consists of *resources* and *services*. Resources represent entities in Google Classroom, like a course or assignment, and services retrieve and manage these resources. Some of these entities have additional properties specific to the API in addition to what exists in Classroom. The primary entity types are:

| Entity | Representation in Classroom |
| --- | --- |
| [Courses](../../reference/rest/v1/courses.md) | A class, like "M. Smith's 4th period math". |
| [Aliases](../../reference/rest/v1/courses.aliases.md) | An alternative ID for a course. |
| [Invitations](../../reference/rest/v1/invitations.md) | A means to add users to a class. |
| [Students](../../reference/rest/v1/courses.students.md) | A student in a class. |
| [Teachers](../../reference/rest/v1/courses.teachers.md) | A teacher in a class. |
| [User profiles](../../reference/rest/v1/userProfiles.md) | A user more generically, outside the context of student or teacher. |
| [CourseWork](../../reference/rest/v1/courses.courseWork.md) | An assignment in a class. |
| [StudentSubmissions](../../reference/rest/v1/courses.courseWork.studentSubmissions.md) | A students work for a given assignment, like answers or worksheets. |
| [CourseWorkMaterials](../../reference/rest/v1/courses.courseWorkMaterials.md) | Materials for students in a class. |
| [Announcements](../../reference/rest/v1/courses.announcements.md) | An announcement to students in a class. |
| [AddOnAttachment](../../reference/rest/v1/courses.courseWork.addOnAttachments.md) | Content or an activity on an assignment or material that is typically displayed as an embedded iframe. |
| [Topics](../../reference/rest/v1/courses.topics.md) | A visual grouping of assignments and materials in a class. |
| [Registrations](../../reference/rest/v1/registrations.md) | An instruction to send notifications to your app for changes in data, like a class roster. |

Most resources have service methods for standard operations like reading, updating, and deleting instances of the resource. Some resources also have custom methods for other operations, such as modifying the list of students assigned a particular assignment.

For detailed information on the API resources and methods, refer to the [Classroom API reference](../../reference/rest.md).

## Resource relationships overview

- The **Course** is the foundational data object in Google Classroom.
- **Aliases** are used as alternative identifiers for `Courses`.
- **Invitations** are used to invite **User profiles** to become **Teachers** or **Students** in a `Course`, but users can also be added directly by Google Workspace for Education domain administrators.
- Teachers create **Stream items** and share them with students in their courses. The possible stream item types are **Coursework**, **CourseWorkMaterials**, and **Announcements**. The `CourseWork` and `CourseWorkMaterials` can be visually organized into **Topics**, and can contain **AddOnAttachments**. Students submit **StudentSubmissions** for their `CourseWork`.
- Developers can create **Registrations** to get notifications when some of this data changes.

Google Classroom is available to **domains** that subscribe to Google Workspace for Education. A [domain](https://support.google.com/a/answer/177483) in the Classroom context typically represents a school district. You can create a Google Workspace for Education [test domain](../onboarding/prerequisites.md) for the purposes of development, which gives you control of a production instance of Classroom without affecting real users.

## Courses and Aliases

`Courses` represent a class, such as "M. Smith's 4th period math", and its assigned teachers, student roster, and metadata. Each course is identified by a unique ID assigned by the server. The `Course` resource specifically encapsulates all of the metadata about the course, such as the name, description, location, and time. Course rosters are managed through the [Student](../../reference/rest/v1/courses.students.md), [Teacher](../../reference/rest/v1/courses.teachers.md), and [Invitation](../../reference/rest/v1/invitations.md) resources and their methods.

`Aliases` are alternate identifiers for a class that may be associated with a course and used in place of the unique ID. Each alias exists in a namespace that restricts who can create and view it. Two namespaces are supported:

- **Domain:** The domain namespace is useful for creating aliases that all users need access to, but that are not specific to any one program. For example, alternate listings for a course, such as MATH 127 and COMSCI 127, should be created in the domain namespace. Aliases in the domain namespace may only be created by domain administrators but are visible to all users in a domain.
- **Developer project:** The developer project namespace is useful for managing aliases specific to an application. For example, an application that uses alternate identifiers for courses can create aliases to map its identifier to Classroom courses. Aliases created in this namespace are tied to a specific [Google API Console](https://console.cloud.google.com/). Any user of an application can create and view aliases in the namespace for that application's developer project.

For more information about managing course metadata and aliases, see [Manage Courses](../manage-courses.md).

## Course rosters and users

`Students` and `Teachers` are specific mappings between a user profile and a course, representing that user's role in the course. Designations of student and teacher are not global: a user can be assigned as a teacher for one course and a student in another. The designation "student" or "teacher" represents a set of permissions for a particular user in a particular course. A course may have more than one teacher or zero students. Teachers and students can be added to or removed from a course at any time.

Students

A `Student` resource represents a user who is enrolled as a student in a specific course.

Students are permitted to view the course details and teachers for that course.

Teachers

A `Teacher` resource represents a user who teaches a specific course.

Teachers are permitted to view and change the course details, view teachers and students, and manage additional teachers and students.

`Invitations` and their associated methods provide a convenient way of adding students and teachers to courses. Creating invitations allows users to choose whether or not to join a course, rather than you directly adding them through the teacher and student resources.

`UserProfiles` represent a mapping to a user's domain profile as identified by the unique ID or email address of the user returned by the [Directory API](../../../admin/directory/v1/guides/manage-users.md). The current user may also refer to their own ID using the `"me"` shorthand.

The `UserProfiles` service can also be used to manage and invite `Guardians`, which are a mapping between a student and guardian. Guardians in Classroom have access to some student information, like their assignments.

For more information on managing rosters, see [Manage Teachers and Students](../manage-users.md).

## Stream items

*Stream items* are the pieces of posted content shared with members of a course. Developers and teachers can create three stream item types: `Announcement`, `CourseWork`, and `CourseWorkMaterial`.

Teachers create `Announcements` at the top of the Stream page in the Classroom UI. Teachers create `CourseWork` and `CourseWorkMaterials` by clicking the **Create** button in the Classwork tab. Developers can create all stream item types programmatically through the Classroom API.

The following are true of stream items:

- All stream items can contain supplementary materials, such as Google Drive files, YouTube videos, Google Forms, URL hyperlinks, and Classroom add-on attachments.
- All stream items can be assigned to a subset of the students in the course.
- A `CourseWork` may be graded or ungraded. Teachers may change the grading status of a `CourseWork` assignment at any time.
- A stream item may have more than one attachment.
- A stream item may have attachments of different types. For example, one `CourseWork` assignment might have Google Drive files, YouTube videos, and Classroom add-on attachments simultaneously.
- A stream item might have add-on attachments from more than one developer.
- Developers can get and modify the details about any stream item resource that has one of their add-on attachments.
- Developers can turn in, reclaim, or return a student submission for a `CourseWork` assignment that includes one of their add-on attachments.
- Developers can only finalize grades for individual student submissions in assignments they created.

### Copied stream items

Teachers may copy a stream item by copying a course, reusing an assignment, or publishing a stream item to multiple courses. Any new copies will have distinct identifiers, which may be an important consideration if you are developing a Classroom add-on. Read our guide on [copied content](../../add-ons/developer-guides/copy-content.md) to understand how an add-on can handle these scenarios.

### CourseWork and StudentSubmissions

A `CourseWork` item represents an assignment for a group of students in a course. It's the only stream item type that can accept a student submission. A `CourseWork` resource contains details such as the description, due date, maximum grade, and metadata such as creation time.

Each `CourseWork` resource describes one of the following types of tasks:

- An assignment that students complete by submitting worksheets or other attachments.
- A short answer question or multiple choice question.

Student work for a `CourseWork` item is represented by a `StudentSubmission`. It consists of a response and additional metadata such as a state and assigned grade.

The contents of a `StudentSubmission` depend on the type of the corresponding `CourseWork` item and can include:

- The worksheets and attachments submitted for an assignment, including their title, thumbnail, and URL, as well as identifiers that can be used with the appropriate APIs such as Drive or YouTube.
- The response to a short answer question or multiple choice question.

For more information about managing coursework and student submissions, see [Manage coursework](../manage-coursework.md).

### CourseWorkMaterials and Announcements

Similar to `CourseWork`, `CourseWorkMaterials` represent content assigned to a group of students in a course. Each resource has details like a title and description along with supplementary materials. However, unlike `CourseWork`, `CourseWorkMaterials` don't require students to submit any artifacts. As such, there is no due date, and `StudentSubmissions` don't exist for `CourseWorkMaterials`. Teachers might use `CourseWorkMaterials` to post suggested readings, a syllabus, or classroom rules.

`Announcements` also represent content shared with a group of students, but don't have details like a title, and can't be organized by `Topics` like `CourseWork` or `CourseWorkMaterials`. Teachers might use these to announce reminders or notices to the class.

### Topics

`Topics` are used to visually organize `CourseWork` and `CourseWorkMaterials` within a class. These might be used to group assignments into "optional" and "required", or "unit 1" and "unit 2", for example.

## Classroom add-ons

An **add-on** is a developer-served UI and backend typically displayed in an iframe. Add-ons appear as attachments on a stream item. The stream item can be any [`Announcements`](../../reference/rest/v1/courses.announcements.md), [`CourseWork`](../../reference/rest/v1/courses.courseWork.md), or [`CourseWorkMaterials`](../../reference/rest/v1/courses.courseWorkMaterials.md). Add-on attachments are represented by an `AddOnAttachment`.

Add-on attachments can be an **activity** or **content**.

- Activity attachments require a student to complete and turn-in an individual submission. Examples include quizzes, drawings, or games. An activity submission can optionally be graded.
- Content attachments don't require a student submission. The student doesn't need to turn-in the attachment and it's not graded. Examples include photos, articles and videos.

See the [add-ons development guides](../../add-ons.md) for more information.

## Registrations

Applications can subscribe for notifications when certain data changes in Google Classroom. For example, when the roster of a course is updated. `Registrations` represent an instruction to send these notifications to your application.

See the [push notifications guide](../../best-practices/push-notifications.md) to learn more.
