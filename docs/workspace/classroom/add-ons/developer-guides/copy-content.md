---
source: https://developers.google.com/workspace/classroom/add-ons/developer-guides/copy-content
root: workspace
fetched_at: 2026-04-23T15:25:40.077Z
---

# Handle copied content

Teachers can copy stream items in Classroom. Doing so also copies the add-on attachments that are contained within the stream items. This saves teachers a lot of time when creating learning content for multiple sections or for new sections each school year.

When teachers copy stream items in Classroom, the copied stream item has different `courseId`, `itemId`, and `attachmentId` query parameters compared to the original stream item.

## How to copy content

The following sections describe how teachers can copy stream items in Classroom.

### Copy a course

When copying a course, all of the stream items in the course are copied to the new course as drafts. The teacher may then publish the stream items to students enrolled in the new course. A student may be enrolled in the original course *and* the copied course. This can happen if a student is held back or retaking a class.

![](https://developers.google.com/static/workspace/classroom/add-ons/images/course-copy.png) ![](https://developers.google.com/static/workspace/classroom/add-ons/images/course-copy-popup.png)

**Figure 1.** Teachers can copy courses by navigating to the vertical dotted menu in [Classroom](https://classroom.google.com/) and clicking **Copy**. Then, the teacher can specify details about the course in the pop-up and copy it.

### Publish a stream item to multiple courses

A teacher can publish a stream item to more than one course through the stream item creation page. it's possible that a student is enrolled in both courses.

![](https://developers.google.com/static/workspace/classroom/add-ons/images/copy-assignment.png)

**Figure 2.** Teachers can publish a stream item to more than one course by clicking the drop-down in the sidebar on the stream item creation page and selecting multiple course(s).

### Reuse a post

A teacher can reuse a post by navigating to the **Classwork tab** and clicking **Create**. From the drop-down, they can click **Reuse post** to select a class and then select the stream item to reuse.

![](https://developers.google.com/static/workspace/classroom/add-ons/images/reuse-post.png)

**Figure 3.** Teachers can begin the flow of reusing a post from the **Classwork tab** and click **Reuse post**.

![](https://developers.google.com/static/workspace/classroom/add-ons/images/reuse-post-select-class.png) ![](https://developers.google.com/static/workspace/classroom/add-ons/images/reuse-post-select-post.png)

**Figure 4.** After clicking **Reuse post**, teachers can select a class and the stream item they want to reuse.

## Expected behavior

When a course or stream item is copied, the same student may be assigned the same add-on attachment across different courses. Users *must not* see an error in the iframe. The *recommended* behavior for add-ons in the copied stream item is to:

1. Ensure that teachers can still preview the attachment in the `teacherViewUri`.
	- If the teacher should perform additional configuration for a new course, display a user-friendly message informing the teacher about the appropriate course of action.
2. Ensure that students see a *new* add-on attachment in the `studentViewUri`.
	- For [content-type attachments](../get-started/attachments-journey.md#attachment_types), this means displaying the content for the student to see in the `studentViewUri`.
		- For [activity-type attachments](../get-started/attachments-journey.md#attachment_types), this means that the attachment is incomplete and the student shouldn't be able to see any of their responses from another course.
		- If your add-on doesn't allow the same student to complete an attachment twice, display a user-friendly message describing the scenario or a path to resolve the issue.
3. Ensure that teachers see the student submission from the copied stream item in the `studentWorkReviewUri`. The teacher shouldn't be able to see a student's submission for the attachment from another course.

## Teacher View iframe

When a teacher launches the `teacherViewUri`, the `attachmentId` is sent as a query parameter in addition to `courseId`, `itemId`, `itemType`, and `login_hint` (if the user has already authorized your app). The `attachmentId` can be used to display the correct attachment in the iframe.

If you don't have a record of the query parameters on the `teacherViewUri`, you can use the [`CopyHistory`](../../reference/rest/v1/courses.courseWork.addOnAttachments.md#copyhistory) object in the [`AddOnAttachment`](../../reference/rest/v1/courses.courseWork.addOnAttachments.md) resource to identify the original stream item. Then, you can display the correct attachment in the `teacherViewUri`.

## Student View iframe

When a student launches the `studentViewUri`, the `attachmentId` is sent as a query parameter in addition to `courseId`, `itemId`, `itemType`, and `login_hint` (if the user has already authorized your app). In order to render the `studentViewUri` when a stream item or course is copied, use two parameters:

- `attachmentId`, which can be retrieved from the request URL.
- `submissionId`, which can be retrieved by calling the appropriate [`courseWork.getAddOnContext`](../../reference/rest/v1/courses.courseWork/getAddOnContext.md), [`courseWorkMaterials.getAddOnContext`](../../reference/rest/v1/courses.courseWorkMaterials/getAddOnContext.md) or [`announcements.getAddOnContext`](../../reference/rest/v1/courses.announcements/getAddOnContext.md) method based on the `itemType` and reading the [`StudentContext`](../../reference/rest/v1/AddOnContext.md#studentcontext) object.

The `attachmentId` is a unique identifier for the attachment. The `submissionId`, however, is not guaranteed to be unique. Therefore, a copied or reused stream item has a different `attachmentId`, but the `submissionId` may remain the same. When the student launches the `studentViewUri`, you can display the attachment by identifying the student work based on a composite key of the `attachmentId` and `submissionId`.

If the `studentViewUri` is rendered based on the `submissionId` alone, you risk showing the student their submission from another course because the `submissionId` is not guaranteed to be unique.

As mentioned earlier, if you can't identify the `attachmentId`, you can use the [`CopyHistory`](../../reference/rest/v1/courses.courseWork.addOnAttachments.md#copyhistory) object in the [`AddOnAttachment`](../../reference/rest/v1/courses.courseWork.addOnAttachments.md) resource to identify the original stream item and its query parameters.

## Student Work Review iframe

When the teacher launches the `studentWorkReviewUri`, the `attachmentId` and the `submissionId` are sent as query parameters in addition to the `courseId` and `itemId` and `itemType`. You can use these query parameters to retrieve the [`AddOnAttachment`](../../reference/rest/v1/courses.courseWork.addOnAttachments.md) resource or [`CopyHistory`](../../reference/rest/v1/courses.courseWork.addOnAttachments.md#copyhistory) resource if you can't identify the `attachmentId` provided. This lets you to search for the student work using a composite key of the `attachmentId` and `submissionId`.
