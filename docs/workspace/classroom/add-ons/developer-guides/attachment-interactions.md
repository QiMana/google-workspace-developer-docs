---
source: https://developers.google.com/workspace/classroom/add-ons/developer-guides/attachment-interactions
root: workspace
fetched_at: 2026-04-23T15:25:40.027Z
---

# Interact with attachments

This page discusses implementation details for creating an attachment, recommended actions when users open attachments, and working with student submissions. Note that you may need to supply [attachment-related parameters](./iframes.md#attachment_related_parameters) when making making these requests.

## Create an attachment

Create an attachment by issuing a `CREATE` request to the appropriate `courses.*.addOnAttachments.create` endpoint. Your request must include an instance of `AddOnAttachment` in the request body.

The following fields are required when creating an attachment:

- `title`: the string name of the attachment.
- `teacherViewUri`: the URI for the Teacher View of the attachment.
- `studentViewUri`: the URI for the Student View of the attachment.
- `studentWorkReviewUri`: the URI for the teacher to see the student's work on the attachment. This field is only required for activity-type attachments.

You may want to include some of the following optional fields:

- `dueDate` and `dueTime` if specifying when the attachment is due.
- `maxPoints`: the maximum grade for the attachment. Must be a non-zero value if you want to support grade passback. Applies to activity-type attachments only.

See the `AddOnAttachment` resource reference for more details on these fields.

## Validate user credentials and role

The [Student View iframe](../get-started/iframes/student-iframe.md), [Student Work Review iframe](../get-started/iframes/grader-iframe.md), and [Teacher View iframe](../get-started/iframes/teacher-iframe.md) are all intended to present content to the user rather than modifying a Classroom assignment. Consider doing the following when one of these views open:

- Obtain OAuth credentials for the user.
- Make a [`courseWork.getAddOnContext`](../../reference/rest/v1/courses.courseWork/getAddOnContext.md), [`courseWorkMaterials.getAddOnContext`](../../reference/rest/v1/courses.courseWorkMaterials/getAddOnContext.md) or [`announcements.getAddOnContext`](../../reference/rest/v1/courses.announcements/getAddOnContext.md) request based on the `itemType` to validate user role.
- Inspect the response to see if `TeacherContext` or `StudentContext` are present. Only one can be returned, corresponding to the user's role in the course.
- If the current user is a student and the `itemType` is `courseWork`, record the `submissionId` from the response with the student's work. The `submissionIds` match across add-on iframes, and are required for passing back grades and for showing student work to teachers in the grading tool.
- If the `attachmentId` is already known to the add-on, show the appropriate attachment UI.
- Otherwise, this attachment must have been copied from another stream item or course. See the [Handling copied content](./copy-content.md) guide for recommendations about this scenario.

## Student submission details

A typical submission workflow follows these steps:

1. A student launches the `studentViewUri` to complete an activity.
2. The add-on retrieves a `submissionId` from the `getAddOnContext` method using student credentials.
3. The **`submissionId`** and **`attachmentId`** are stored by the add-on developer as the unique identifier of the student's work. In the event that a teacher copies an assignment in Classroom, you can use the composite key of these two parameters to display a new attachment in the copied assignment. See our page on [copied content](./copy-content.md) for more details.
4. A teacher interested in reviewing student work launches the `studentWorkReviewUri`. The request includes the following query parameters: `courseId`, `itemId`, `itemType`, `attachmentId`, and `submissionId`.
5. The add-on developer uses these four IDs to retrieve the student work. Use the [`courses.courseWork.addOnAttachments.studentSubmissions`](../../reference/rest/v1/courses.courseWork.addOnAttachments.studentSubmissions.md) endpoint to retrieve or modify information about a student submission.

### Detect submission state

Issue a `GET` request to the [`courses.courseWork.addOnAttachments.studentSubmissions`](../../reference/rest/v1/courses.courseWork.addOnAttachments.studentSubmissions.md) endpoint to get details about a specific `submissionId`. You receive an `AddOnAttachmentStudentSubmission` object, which contains the submission's grade (`pointsEarned`) and current state (`postSubmissionState`). The submission state can be one of the following values:

- `NEW`, if the student has never accessed the submission.
- `CREATED`, if the student has created a submission but not yet submitted it.
- `TURNED_IN`, if the student has submitted their work to the teacher.
- `RETURNED`, if the teacher has returned the submission to the student.
- `RECLAIMED_BY_STUDENT`, if the student has "unsubmitted" their work.

Use this endpoint to detect the state of the student's work in your add-on. You might then adjust the views or options provided to the student depending on the state returned. This might include features such as:

- Displaying the turn-in status of assignments within your add-on. This may help students avoid potential confusion and ensure they don't mistakenly fail to turn in an assignment.
- Restricting submission edit privileges. If the assignment has status `CREATED` or `RECLAIMED_BY_STUDENT`, the student might be allowed to edit their submission. If the assignment has status `TURNED_IN` or `RETURNED`, the student might not be allowed to edit their submission.

### Grades and multiple attachments

*Only one add-on attachment can be used to set the grade for a single assignment*. If a teacher creates more than one activity-type attachment that provides a `maxPoints` value, only the first such attachment can set the assignment grade. Either leave the `maxPoints` value unset or set it to zero to disable grade passback for an attachment.

### Set a submission's grade

You can modify a student submission by sending a `PATCH` request to the [`courses.courseWork.addOnAttachments.studentSubmissions`](../../reference/rest/v1/courses.courseWork.addOnAttachments.studentSubmissions.md) endpoint. The request body must include an instance of `AddOnAttachmentStudentSubmission` with the modified values. Set the `pointsEarned` field to modify a submission's grade. The value passed in `pointsEarned` becomes a **draft grade** visible to the teacher in the Classroom UI. Teachers can modify the draft grade before returning the assignment to students. See [Overview of grading in the Classroom UI](../get-started/iframes/grader-iframe.md#overview_of_grading_in_the_classroom_ui) for details on how grades are presented to teachers.

Note that you can set the grade with `pointsEarned` only if the following are true:

- The attachment must have a positive `maxPoints` value.
- The add-on must have been the original creator of the attachment.

Note also that you can modify an already-created `AddOnAttachment` 's `maxPoints` value by issuing a `PATCH` request to the `addOnAttachments` endpoint.

### When to set a grade

You have some choice over when a grade is passed back to Google Classroom. The critical distinction is whether you choose to store teacher's credentials, as only the teacher can modify a grade.

There are **two add-on moments** at which you might pass a grade to Google Classroom: when the student completes their work or when the teacher opens the student's work in the Student Work Review iframe.

If you want to set grades when the student completes the work, you must store a teacher's offline credentials, then retrieve and use them to modify the grade when the student completes the work. This method provides some potential benefits:

- Provide seamless grade updates. Teachers don't need to take any special action to cause grades to populate in the Classroom UI.
- Provide real-time insight into a class's progression through an assignment. By setting grades as students complete attachments, teachers can get a sense of their students' understanding without opening every submission.

Note that this approach also allows for an **asynchronous approach** to grade sync. You might periodically poll the `AddOnAttachmentStudentSubmission` endpoint to detect when a student has submitted their work. When it has been submitted, set the submission's grade using the stored credentials.

If you don't want to load the teacher's credentials during a student session, you can use the active teacher's credentials when they load the student's submission in the [Student Work Review iframe](../get-started/iframes/grader-iframe.md). However, this may not provide an especially smooth user experience as grades in the Classroom UI don't update in real time and teachers would be required to open every submission's Student Work Review iframe.

### Detect changes in assignment grades

it's possible for teachers to edit the grade settings in Classroom after an assignment has been created. Such edits might include:

- Changing the assigned points value.
- Changing an assignment's `maxPoints` value.
- Changing whether the assignment should be graded at all.

To see the current grading settings of an assignment, we recommend that you send a `GET` request to the [`courses.courseWork`](../../reference/rest/v1/courses.courseWork.md#CourseWork) endpoint. The response includes the current `maxPoints` value. An ungraded assignment has a null or zero `maxPoints` value.

If you have passed a grade back to Classroom, use the `courses.courseWork.addOnAttachments.studentSubmissions` endpoint to fetch or alter the grade for an add-on attachment. The grade value is set using the `pointsEarned` field. Consider checking and, if necessary, updating this value if your product allows teachers to edit a student's score for a particular activity.
