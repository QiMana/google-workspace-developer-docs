---
source: https://developers.google.com/workspace/classroom/troubleshooting/common-errors
root: workspace
fetched_at: 2026-04-23T15:26:07.274Z
---

# Common Google Classroom API error messages

This page describes some common Google Classroom API error messages, issues, and possible actions for the following types of errors:

- [HTTP 400: `FAILED_PRECONDITION`](#failed-precondition)
- [HTTP 403: `PERMISSION_DENIED`](#permission-denied)
- [HTTP 429: `RESOURCE_EXHAUSTED`](#resource-exhausted)
- [HTTP 500: `INTERNAL`](#internal)

## HTTP 400: FAILED\_PRECONDITION

A `FAILED_PRECONDITION` is returned when the user attempts an action that cannot be permitted, either because the user has hit a limit or an application state, such as `CourseNotModifiable`. To fix a `FAILED_PRECONDITION`, instruct the user to take some action and then retry. Or, in some cases, you might use alternative endpoints to fix the state on behalf of the user.

### AttachmentNotVisible

`AttachmentNotVisible` indicates that one or more attachments specified are either not visible to the user, not of the requested type, or don't exist. For example, Drive items that haven't been shared to the user would return this error.

*Possible Action*: Describe the cause of the failure and suggest that the user recheck the identifiers, such as Drive file IDs, they have included. Also, ensure the user has the proper permissions to view the attachment.

### CannotRemoveCourseFolderOwner

`CannotRemoveCourseFolderOwner` indicates that the owner of the course Drive folder may not be removed.

*Possible Action*: Describe the cause of the failure and suggest that the user transfer ownership of the course Drive folder to a different user and try again.

### CannotRemoveCourseOwner

`CannotRemoveCourseOwner` indicates that the course owner may not be removed.

*Possible Action*: Describe the cause of the failure and suggest that the course owner may not be removed. In most cases, the user is trying to remove themselves which is not allowed.

### CannotRemoveCourseOwnerTransferIncomplete

`CannotRemoveCourseOwnerTransferIncomplete` indicates that the course owner may not be removed because the ownership transfer of this class is still in progress.

*Possible Action*: Describe the cause of the failure and suggest that the user wait a few moments for the asynchronous action of transferring ownership of the class to complete, then try again.

### CannotRemoveTeacherWithNoCourseOwner

`CannotRemoveTeacherWithNoCourseOwner` indicates that a teacher may not be removed from a course with no owner.

*Possible Action*: Describe the cause of the failure and suggest that the teacher may not be removed. In most cases, the course owner's user account was deleted, causing an invalid course state.

### CourseMemberLimitReached

`CourseMemberLimitReached` indicates that the attempted action would exceed the maximum allowed number of course members. This code is typically returned by the [`students.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.students/create) For further information, refer to the "Class size limits" section of the [Invite students to your class](https://support.google.com/edu/classroom/answer/6020282) help center article.

*Possible Action*: Describe the cause of the failure and suggest that the user remove unnecessary course members

### CourseNotModifiable

`CourseNotModifiable` indicates that the relevant course is in a state that doesn't allow its properties to be modified (other than the course state itself).

*Possible Action*: Prompt the user to change the course to a [modifiable course state](https://developers.google.com/workspace/classroom/reference/rest/v1/courses#CourseState). To change the state, use [`courses.patch()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/patch). The course state can be changed in a request that changes other properties.

### CourseTeacherLimitReached

`CourseTeacherLimitReached` indicates that the requested action would exceed the maximum allowed number of course teachers. This code is typically returned by the [`teachers.create()`](https://developers.google.com/classroom/reference/rest/v1/courses.teachers/create) method. For further information, refer to the "Class size limitations" section of the [Add a co-teacher to a class](https://support.google.com/edu/classroom/answer/6190760) help center article.

*Possible Action*: Describe the cause of the failure and suggest that the user remove unnecessary course teachers. If applicable to your app, you can use the [`teachers.delete()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers/delete) method to manage teacher rosters on behalf of the user.

### CourseTitleCannotContainUrl

`CourseTitleCannotContainUrl` indicates that the requested action is not permitted because it would introduce a URL into the course title. URL patterns are not supported in course titles.

*Possible Action*: Describe the cause of the failure and suggest that the user remove the URL pattern from the `title` field. URLs *are* permitted in the `description` field.

### CourseTopicLimitReached

`CourseTopicLimitReached` indicates that the requested action would exceed the maximum allowed number of topics in a course. This code is typically returned by the [`courses.topics.create()`](https://developers.google.com/classroom/reference/rest/v1/courses.topics/create) method.

*Possible Action*: Describe the cause of the failure and suggest that the user remove unnecessary topics. If applicable to your app, you can use the [`courses.topics.delete()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.topics/delete) method to manage topics on behalf of the user.

### EmptyAssignees

`EmptyAssignees` indicates that the requested action would remove all assignees from the corresponding coursework. Coursework with no assignees are not supported.

*Possible Action*: Describe the cause of the failure and suggest that the course owner can't remove all assignees.

### InactiveCourseOwner

`InactiveCourseOwner` indicates that the requested action is not permitted because the course owner's account is deleted. The administrator of the course owner needs to restore the course owner's account before taking the requested action.

*Possible Action*: Describe the cause of the failure and suggest that the administrator [restore the course owner's account](https://support.google.com/a/answer/1397578) before retrying the operation.

### IneligibleOwner

`IneligibleOwner` indicates that the user cannot be added as the owner of the course because the user is not a co-teacher.

*Possible Action*: Describe the cause of the failure. If the requesting user is not an administrator, suggest that they first send the user an invitation to be a teacher in the course before updating the owner. If the requesting user is an administrator, suggest that they first add the user as a co-teacher of the course.

### ListCoursesStudentAndTeacherFilter

`ListCoursesStudentAndTeacherFilter` occurs when making a [`courses.list()`](https://developers.google.com/classroom/reference/rest/v1/courses/list) request with *both* `teacherId` and `studentId` fields populated. Only one of these fields can be set in a single request.

You can still obtain a list of courses with specific student and teacher users by making two separate requests. First, retrieve the teacher user's courses by making a `courses.list()` request with the `teacherId` field populated, and then make another `courses.list()` request with the `studentId` field populated. Calculate the intersection of the results to obtain the list of courses that match across both users.

### PendingInvitationExists

`PendingInvitationExists` indicates someone has already been invited to take ownership of the course. This error occurs during course ownership transfer when a transfer was previously started but has not yet been accepted by the new owner.

### UserCannotOwnCourse

`UserCannotOwnCourse` indicates that the user cannot be added as the owner of the course.

*Possible Action*: Describe the cause of the failure and suggest that the course cannot be created with the user as the course owner. A non-administrator requesting user may see this error if they try to create a course with a user other than themselves as the owner. An administrator requesting user may see this error if the user account specified as the owner does not exist or the user is not in their domain.

### UserGroupsMembershipLimitReached

`UserGroupsMembershipLimitReached` indicates that the user is already a member of the maximum allowed number of groups and can't join any courses. This code is typically returned by [`students.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.students/create) or [`teachers.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers/create). For further information, refer to the "Class size limitations" section of the [Invite students to a class](https://support.google.com/edu/classroom/answer/6020282) help center article.

*Possible Action*: Describe the cause of the failure and suggest that the user leave any courses in which they are not participating. The user may consider creating an additional account if they need to participate in more courses. If applicable to your app, you can use [`students.create()`](https://developers.google.com/classroom/reference/rest/v1/courses.students/create) or [`teachers.delete()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers/delete) to manage rosters on behalf of the user.

## HTTP 403: PERMISSION\_DENIED

All Classroom API methods may return a `PERMISSION_DENIED` (HTTP 403) error if an end user does not meet prerequisites for access. The message accompanying the error contains an [error message](https://developers.google.com/workspace/classroom/troubleshooting/error-structure) to help you identify the cause and direct users to take the appropriate action.

The following sections describe common Classroom API error messages.

### CannotDirectAddUser

`CannotDirectAddUser` indicates that a user cannot be directly added to the course. This code happens when a domain administrator tries to add a user to a course and that user either does not have an email address or does not belong to the domain.

*Possible Action*: Describe the cause of the failure and suggest that the domain administrator check that the user account exists and is within the course administrator's domain.

### CannotInviteUserInUntrustedDomain

`CannotInviteUserInUntrustedDomain` indicates that the user being invited or created is not within the same domain as, or a [trusted domain](https://support.google.com/a/answer/6160020) of, the caller. For callers with a [Google Workspace for Education Fundamentals](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) license, untrusted out-of-domain users cannot be directly added or invited to a course.

*Possible Action*: Describe the cause of the failure and suggest that the caller consider one of the following options:

- Include both calling and receiving users' domains in each others [trusted domains](https://support.google.com/a/answer/6160020) list and try again.
- Suggest that the caller manually share a course invite link or a class code. Note that this requires an administrator to configure out-of-domain invites. See [Invite students to your class](https://support.google.com/edu/classroom/answer/6020282?co=GENIE.Platform%3DDesktop#outsidedomain&zippy=%2Cinvite-students-from-outside-the-school-domain) to learn more.
- Suggest that the caller upgrade to paid [Google Workspace for Education](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) license, as the limitation only applies to the Fundamentals license.

### ClassroomApiDisabled

`ClassroomApiDisabled` indicates that the requesting user does not have access to the Classroom API.

*Possible Action*: Direct the user to instructions on [enabling Classroom data access](https://support.google.com/edu/classroom/answer/6250906). Also see [ClassroomDisabled](#classroomdisabled), as the user may be using the wrong account.

### ClassroomDisabled

`ClassroomDisabled` indicates that the requesting user does not have access to Classroom.

*Possible Action*: Direct the user to instructions on [enabling Classroom access](https://support.google.com/edu/classroom/answer/6023715). The user may also be using the wrong account, so you might also provide a link to [using multiple accounts](https://support.google.com/accounts/answer/1721977) so the user can select the correct account.

### ExpiredAddOnToken

`ExpiredAddOnToken` indicates that the add-on token being used to make calls to the API has expired.

*Possible Action*: Prompt the user to refresh the page or sign in to the add-on again so that you may obtain the new [`addOnToken` query parameter](https://developers.google.com/workspace/classroom/add-ons/developer-guides/iframes#attachment-related_parameters) from the request URL.

### InvalidAddOnToken

`InvalidAddOnToken` indicates that the add-on token passed in a request is not authorized to create an add-on attachment on the assignment.

*Possible Action*: This error can be thrown if the user signs in to the add-on with a different account than the account in Classroom. Instruct the user to either sign out of all other accounts in the browser or open Classroom in an incognito Chrome window.

### ProjectPermissionDenied

`ProjectPermissionDenied` indicates that the request attempted to modify a resource associated with a different Developer Console project.

*Possible Action*: Indicate that your application cannot make the intended request. It can only be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) that created the resource.

### UserIneligibleToUpdateGradingPeriodSettings

`UserIneligibleToUpdateGradingPeriodSettings` indicates that the request attempted to modify grading period settings in a course where the requesting user or course owner doesn't have the appropriate Google Workspace for Education license, or the requesting user is not a course teacher or domain administrator.

*Possible Action*: Indicate that your application cannot make the intended request to update grading period settings due to the licensing or course role status. Licenses can be assigned in the Google Admin console.

## HTTP 429: RESOURCE\_EXHAUSTED

The `RESOURCE_EXHAUSTED` is returned when the requested action is not permitted because some resource, such as quota or server capacity, is exhausted. These types of request errors typically occur because your app produced an excessive load.

To avoid triggering these limits and increase the reliability of your application, use retry mechanisms. Valid retry mechanisms include:

- Use truncated exponential backoff to retry the request and maximize throughput of requests in concurrent environments.
- To avoid collisions, consider truncated exponential backoff with jitter. Introducing jitter can help your requests succeed faster by introducing a randomized delay that spreads out spikes in requests.

If your application returns `RESOURCE_EXHAUSTED` errors due to quota limitations, submit a quota increase. For further information, refer to the [Monitor API quotas](https://support.google.com/a/answer/6301355) help center article.

### UserCourseJoinRateLimitReached

`UserCourseJoinRateLimitReached` indicates that the user has already joined the maximum allowed number of courses in one day. For further information, refer to the "Group invitations and size" section of the [Understand Groups policies and limits](https://support.google.com/a/answer/6099642) help center article.

*Possible Action*: Describe the cause of the failure and suggest that the user waits one day before joining the course.

## HTTP 500: INTERNAL

`INTERNAL` indicates that an unexpected error arose while processing the request. `INTERNAL` request errors can also often be solved by using exponential backoff to retry the request. If an `INTERNAL` error persists, it can be reported by filing a bug on the [Classroom API public issue tracker](https://issuetracker.google.com/issues/new?component=191645&template=823907).
