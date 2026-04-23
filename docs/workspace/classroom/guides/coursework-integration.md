---
source: https://developers.google.com/workspace/classroom/guides/coursework-integration
root: workspace
fetched_at: 2026-04-23T15:25:45.417Z
---

# CourseWork integration

Developers can use Google Classroom API to interact with coursework in Google Classroom. An application that uses the API in this way is referred to as a *`CourseWork` integration*.

This integration path is commonly used to create and grade assignments with links to resources outside of Classroom. It provides more developer access to coursework management as compared to [Classroom Share buttons](https://developers.google.com/workspace/classroom/guides/sharebutton).

## How it works

The core feature of a `CourseWork` integration is the creation and management of assignments, announcements, and course materials using Classroom API.

One example of a common user journey enabled by a `CourseWork` integration is to allow teachers to discover, assign, and grade content from within your website or application:

1. A teacher user signs in to your website.
2. The teacher finds or creates content that they want to share with their class. The teacher clicks a button on your website to send this content to Google Classroom.
3. Your application issues a request to [`courses.courseWork.create`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork/create). The request contains a `CourseWork` object in its body that contains:
	- The destination course ID.
		- The title of the assignment.
		- The text description for the assignment.
		- A `link` [`Material`](https://developers.google.com/workspace/classroom/reference/rest/v1/Material) with the URL to the content selected by the teacher.
		- Optionally, the maximum score attainable for the selected content.
4. A new assignment appears in Classroom with a link attachment. The link refers to the URL specified in the `create` request. See Figure 1 for an example.
5. A new column for the assignment also appears in the Classroom gradebook, including the maximum score if provided.
6. Students receive the assignment and click the `link Material` to open the provided URL in a new tab and view or complete the content on your website. Optionally, provide controls for the student to [turn in the assignment](https://developers.google.com/workspace/classroom/guides/manage-coursework#manage_student_response_state).
7. Optionally, issue a request to [`courses.courseWork.studentSubmissions.modifyAttachments`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/modifyAttachments) to add attachments to a student submission, such as a Google Drive file or `link Material` that points to the student's work on your website.
8. Optionally, issue a request to [`courses.courseWork.studentSubmissions.patch`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/patch) to set the student's grade for the assignment.

![Edit a CourseWork assignment with link material attachment](https://developers.google.com/static/workspace/classroom/add-ons/images/create-coursework-with-link.png)

**Figure 1.** Teacher view when editing an assignment with `link Material` created by a `CourseWork` integration.

Alternatively, you could call [`courses.announcements.create`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.announcements/create) or [`courses.courseWorkMaterials.create`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWorkMaterials/create) to create an announcement or course material instead of an assignment. See the [Create & manage coursework](https://developers.google.com/workspace/classroom/guides/manage-coursework) and [Set & update grades](https://developers.google.com/workspace/classroom/guides/classroom-api/manage-grades) pages for detailed descriptions of the relevant Classroom API actions.

## Considerations

Keep the following in mind before deciding if a `CourseWork` integration is the right choice for your product needs.

- You need to authorize the user and prompt for their consent. You're making API requests *on the user's behalf*. This means, for example, that you can't create coursework in *any* Google Classroom course; you can only create coursework in courses that the authorized user teaches.
- You need a way for the user to select a course to receive the content. Consider using [`courses.list`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/list) to get a list of the courses taught by the user, then allow the user to select one or more of the courses from the list.
- When a user clicks a `link Material` in Classroom, the link opens in a new tab. Your server won't receive any information from Classroom when the URL opens.
- A teacher can modify or delete the coursework independently of the developer. This means that a developer's knowledge of the coursework might become out of date. If you need to be aware of changes in coursework, consider setting up [push notifications](https://developers.google.com/workspace/classroom/best-practices/push-notifications) for coursework changes.
- A teacher can create coursework in the Classroom UI with pasted links to URLs on your website. Coursework created in this manner are solely owned by the teacher, so you won't be able to view, modify, or set submission grades using the Classroom API.
