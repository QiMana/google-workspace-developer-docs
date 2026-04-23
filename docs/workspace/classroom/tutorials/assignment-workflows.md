---
source: https://developers.google.com/workspace/classroom/tutorials/assignment-workflows
root: workspace
fetched_at: 2026-04-23T15:26:06.281Z
---

# Introduction

Assignments in Classroom are called CourseWork items, which can be found in the Classwork page of any given Classroom course. While there are four Classwork item types, this guide focuses on just the “Assignment” type. If you’d like to learn about how to manage the other Classwork types, read our [Manage Classwork guide](https://developers.google.com/workspace/classroom/guides/manage-classwork).

Google Classroom has two ways to integrate with an assignment workflow: [Classroom share button](https://developers.google.com/workspace/classroom/guides/sharebutton) and [Classroom API](https://developers.google.com/workspace/classroom/reference/rest/). The share button enables users to share content as any stream item through a Classroom popup dialog, whereas the Classroom API enables a beginning-to-end assignment workflow that includes creating assignments, creating and managing student submissions, and grade passback.

Here we will review the key differences between these two developer offerings. More specifically, we will work through the differences in implementation and each phase of the assignment life-cycle: assignment creation, student submissions, and grading/feedback.

## Understanding the assignment life cycle

Before moving onto the differences between the share button and CourseWork API, let’s first define what we consider to be the life cycle of an assignment in the context of Classroom. This will help you understand how teachers and students interact with assignments within Classroom.

There are **five** main steps to keep in mind while integrating with Classroom assignments:

1. Assignment is created.
2. Assignment is shared with students.
3. Student completes the assignment.
4. Student submits assignment to teacher.
5. Teacher reviews & grades assignments.

Integrating with Classroom assignments allows teachers and students to work between Classroom and third-party applications seamlessly. Instead of managing the details of an assignment or student submissions, users can rely on your application to manage these details for them.

![Diagram showing the five steps to an assignment](https://developers.google.com/static/workspace/classroom/images/assignment_life_cycle.png)

## Implementation

The first area of difference between the share button and CourseWork API is **implementation**. From a developer perspective, the share button is an easier method for sharing content onto Classroom as it only requires including the necessary JavaScript resource and adding a share button tag. In its simplest form, your Classroom share button integration can look like the snippet below:

```
<script src="https://apis.google.com/js/platform.js" async defer></script>
<g:sharetoclassroom url="http://url-to-share" size="32"></g:sharetoclassroom>
```

The CourseWork API, on the other hand, is part of the Google Classroom API REST API, which requires setting up and enabling API keys with Google Cloud console and following best practices for integrating with an API. This is less of a concern if your platform is already leveraging other Classroom API functionality, such as [rostering](https://developers.google.com/workspace/classroom/guides/import-rosters).

## Creating & sharing assignments

While both the share button and CourseWork API enable the first two steps of the assignment workflow, creating and sharing the assignment with students, there are some crucial differences you should consider before choosing a solution.

At their core, both solutions enable the ability to post links or files as assignments to Classroom. This serves as a powerful workflow for teachers who would otherwise be forced to engage in a copy and paste workflow between Classroom and the third-party application. While both solutions support the ability to post content as an assignment, you should consider whether your application needs the flexibility of posting this content as other Classwork types, or even an announcement.

Both offerings expose all of the Classroom post types except Quiz Assignments. A summary of all post types and whether they are exposed can be found below.

| Post Type | Share button | CourseWork API |
| --- | --- | --- |
| Assignment | X | X |
| Quiz Assignment |  |  |
| Question: Short Answer | X | X |
| Question: Multiple Choice | X | X |
| Material | X | X |
| Announcement | X | X |

Functionality such as specifying title and description can also be programmatically specified by your application for both solutions. While the share button integration allows users to set fields such as due date, topic, individualized mode, and number of points within the pop-up dialog, they cannot be set programmatically by a third-party app. The API, on the other hand, exposes all of these fields for both read and write access.

### Modifying assignments

Eliminating the need to have users manually sync changing details of their assignments is one of the benefits of integrating with Classroom API. The share button lacks functionality to update or delete assignments programmatically, so any modifications needed would have to be made by the user, through the Classroom UI.

The CourseWork API enables both the ability to modify and delete assignments your application created, as well as the ability to retrieve details of any assignments posted to the user’s courses. It’s important to note, however, that CourseWork items **not** created by the same developer console cannot be modified by that developer console. This permission model extends to the rest of the assignment life cycle, e.g. managing student submissions and grades, cannot be accessed for these CourseWork items.

#### Automatically sync assignments

With Pub/Sub [push notifications](https://developers.google.com/workspace/classroom/guides/push-notifications), your application can subscribe to notifications that trigger an event when there are changes in CourseWork items and its associated student submissions. This allows your application to synchronize assignments easily by eliminating the need for continuous checks to see whether content has been updated on Classroom.

## Completing & submitting assignments

Each assignment is associated with `N` student submissions, where N is the number of students the assignment was assigned to. In other words, for each assignment, there is a student submission associated for each student - which can be accessed with a unique ID. These student submissions are automatically created and can be retrieved by your application with the student submissions GET and LIST endpoints.

Both the share button and CourseWork API support adding links or files to a student's submission for an assignment. The share button allows this through a similar workflow as the teacher assignment creation dialog, and the CourseWork API through the [studentSubmissions.modifyAttachments](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/modifyAttachments) endpoint. Because of API permission restrictions detailed earlier, however, this functionality is limited to CourseWork items that your application created. This same restriction does not hold true for the share button — students can add their work to any assignment they select from Classroom.

### Ending the student workflow

While the CourseWork permission restriction does not serve a use case for platforms that do not support assignment creation, one benefit is that third-party platforms can prevent students from both submitting to the incorrect assignment and forgetting to turn in their work since only the share button is limited from the ability for students to turn in their assignments.

## Reviewing & grading assignments

The last part of the assignment life cycle goes back to the teacher. Once students have successfully turned in their assignment, the teacher can now review the assignment in whatever way makes most sense. In the case of files stored in Drive, they can review directly in the Classroom grader. Third-party applications, however, cannot be accessed in the Classroom grader. The implication of this experience is that teachers must navigate multiple tabs while reviewing and grading assignments.

The share button currently offers no solution for grading and returning assignments. While features such as student submission comments aren’t currently exposed through the API, both grading and returning those grades to students is possible through the [studentSubmissions.patch](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/patch) and [studentSubmissions.return](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/return) endpoints. Grades can be specified for CourseWork stream items only (Assignment and Question types). They are only available in numerical form and can be assigned as either a draft or final grade.

## Summary of differences

To summarize everything reviewed in the previous sections, the table below shows a side-by-side comparison of the share button and CourseWork API for the four categories discussed above: implementation, creating and sharing assignments, completing and submitting assignments, and reviewing and grading assignments.

|  | Share Button | CourseWork API |
| --- | --- | --- |
| Implementation | Only a few lines of JavaScript, making implementation straightforward and quick | Requires setting up API keys, enabling APIs in admin console, and closer monitoring |
| Creating and Sharing Assignments | - Redirects teachers to Classroom share button share dialog - Users can post all but one stream item type - Fewer fields can be specified - One enables assignment createment, no ability to pull or modify assignment data | - No needed share button dialog - Most Classroom assignment fields can be specified - Ability to modify coursework created by your application - Allows your app to pull all assignment data from Classroom |
| Completing and Submitting Assignments | - Redirects students to Classroom share button share dialog - Allows students to attach their submission to any Classroom assignment - One enables submission attachment, no ability to pull or modify submission data - Does not allow students to turn in the assignment | - No needed share button dialog - Only allows students to attach their submission to assignments created by your app - Allows your app to modify student submissions created by your application - Allows students to turn in their assignments |
| Reviewing and Grading Assignments | No support for specifying or returning grades | - Allows your app to pull all student submission data from Classroom on behalf of a teacher - Exposes ability to assign student grades, either as draft or final - Exposes ability to modify student grades - Exposes ability to return grades to students |
