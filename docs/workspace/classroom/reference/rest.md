---
source: https://developers.google.com/workspace/classroom/reference/rest
root: workspace
fetched_at: 2026-04-23T15:25:52.318Z
---

# Google Classroom API

Manages classes, rosters, and invitations in Google Classroom.

## Service: classroom.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://classroom.googleapis.com/$discovery/rest?version=v1](https://classroom.googleapis.com/$discovery/rest?version=v1)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://classroom.googleapis.com`

## REST Resource: v1.courses

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>checkAddOnCreationEligibility <br><b>(deprecated)</b></code></td><td><code>GET /v1/courses/{courseId}:checkAddOnCreationEligibility</code><br>Returns whether a user is eligible to create add-on attachments in a given course.</td></tr><tr><td><code>checkGradingPeriodsSetupEligibility <br><b>(deprecated)</b></code></td><td><code>GET /v1/courses/{courseId}:checkGradingPeriodsSetupEligibility</code><br>Returns whether a user is eligible to update GradingPeriodSettings in a given course.</td></tr><tr><td><code>create</code></td><td><code>POST /v1/courses</code><br>Creates a course.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{id}</code><br>Deletes a course.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/courses/{id}</code><br>Returns a course.</td></tr><tr><td><code>getGradingPeriodSettings</code></td><td><code>GET /v1/courses/{courseId}/gradingPeriodSettings</code><br>Returns the grading period settings in a course.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses</code><br>Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{id}</code><br>Updates one or more fields in a course.</td></tr><tr><td><code>update</code></td><td><code>PUT /v1/courses/{id}</code><br>Updates a course.</td></tr><tr><td><code>updateGradingPeriodSettings</code></td><td><code>PATCH /v1/courses/{courseId}/gradingPeriodSettings</code><br>Updates grading period settings of a course.</td></tr></tbody></table>

## REST Resource: v1.courses.aliases

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/aliases</code><br>Creates an alias for a course.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/aliases/{alias}</code><br>Deletes an alias of a course.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/aliases</code><br>Returns a list of aliases for a course.</td></tr></tbody></table>

## REST Resource: v1.courses.announcements

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/announcements</code><br>Creates an announcement.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/announcements/{id}</code><br>Deletes an announcement.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/announcements/{id}</code><br>Returns an announcement.</td></tr><tr><td><code>getAddOnContext</code></td><td><code>GET /v1/courses/{courseId}/announcements/{itemId}/addOnContext</code><br>Gets metadata for Classroom add-ons in the context of a specific post.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/announcements</code><br>Returns a list of announcements that the requester is permitted to view.</td></tr><tr><td><code>modifyAssignees</code></td><td><code>POST /v1/courses/{courseId}/announcements/{id}:modifyAssignees</code><br>Modifies assignee mode and options of an announcement.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/announcements/{id}</code><br>Updates one or more fields of an announcement.</td></tr></tbody></table>

## REST Resource: v1.courses.announcements.addOnAttachments

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/announcements/{itemId}/addOnAttachments</code><br>Creates an add-on attachment under a post.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/announcements/{itemId}/addOnAttachments/{attachmentId}</code><br>Deletes an add-on attachment.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/announcements/{itemId}/addOnAttachments/{attachmentId}</code><br>Returns an add-on attachment.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/announcements/{itemId}/addOnAttachments</code><br>Returns all attachments created by an add-on under the post.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/announcements/{itemId}/addOnAttachments/{attachmentId}</code><br>Updates an add-on attachment.</td></tr></tbody></table>

## REST Resource: v1.courses.courseWork

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/courseWork</code><br>Creates course work.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/courseWork/{id}</code><br>Deletes a course work.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/courseWork/{id}</code><br>Returns course work.</td></tr><tr><td><code>getAddOnContext</code></td><td><code>GET /v1/courses/{courseId}/courseWork/{itemId}/addOnContext</code><br>Gets metadata for Classroom add-ons in the context of a specific post.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/courseWork</code><br>Returns a list of course work that the requester is permitted to view.</td></tr><tr><td><code>modifyAssignees</code></td><td><code>POST /v1/courses/{courseId}/courseWork/{id}:modifyAssignees</code><br>Modifies assignee mode and options of a coursework.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/courseWork/{id}</code><br>Updates one or more fields of a course work.</td></tr></tbody></table>

## REST Resource: v1.courses.courseWork.addOnAttachments

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments</code><br>Creates an add-on attachment under a post.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}</code><br>Deletes an add-on attachment.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}</code><br>Returns an add-on attachment.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments</code><br>Returns all attachments created by an add-on under the post.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}</code><br>Updates an add-on attachment.</td></tr></tbody></table>

## REST Resource: v1.courses.courseWork.addOnAttachments.studentSubmissions

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}</code><br>Returns a student submission for an add-on attachment.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}</code><br>Updates data associated with an add-on attachment submission.</td></tr></tbody></table>

## REST Resource: v1.courses.courseWork.rubrics

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics</code><br>Creates a rubric.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}</code><br>Deletes a rubric.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}</code><br>Returns a rubric.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics</code><br>Returns a list of rubrics that the requester is permitted to view.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}</code><br>Updates a rubric.</td></tr></tbody></table>

## REST Resource: v1.courses.courseWork.studentSubmissions

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}</code><br>Returns a student submission.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions</code><br>Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request.</td></tr><tr><td><code>modifyAttachments</code></td><td><code>POST /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:modifyAttachments</code><br>Modifies attachments of student submission.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}</code><br>Updates one or more fields of a student submission.</td></tr><tr><td><code>reclaim</code></td><td><code>POST /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:reclaim</code><br>Reclaims a student submission on behalf of the student that owns it.</td></tr><tr><td><code>return</code></td><td><code>POST /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:return</code><br>Returns a student submission.</td></tr><tr><td><code>turnIn</code></td><td><code>POST /v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:turnIn</code><br>Turns in a student submission.</td></tr></tbody></table>

## REST Resource: v1.courses.courseWorkMaterials

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/courseWorkMaterials</code><br>Creates a course work material.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/courseWorkMaterials/{id}</code><br>Deletes a course work material.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/courseWorkMaterials/{id}</code><br>Returns a course work material.</td></tr><tr><td><code>getAddOnContext</code></td><td><code>GET /v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnContext</code><br>Gets metadata for Classroom add-ons in the context of a specific post.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/courseWorkMaterials</code><br>Returns a list of course work material that the requester is permitted to view.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/courseWorkMaterials/{id}</code><br>Updates one or more fields of a course work material.</td></tr></tbody></table>

## REST Resource: v1.courses.courseWorkMaterials.addOnAttachments

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments</code><br>Creates an add-on attachment under a post.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments/{attachmentId}</code><br>Deletes an add-on attachment.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments/{attachmentId}</code><br>Returns an add-on attachment.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments</code><br>Returns all attachments created by an add-on under the post.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments/{attachmentId}</code><br>Updates an add-on attachment.</td></tr></tbody></table>

## REST Resource: v1.courses.posts

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>getAddOnContext</code></td><td><code>GET /v1/courses/{courseId}/posts/{postId}/addOnContext</code><br>Gets metadata for Classroom add-ons in the context of a specific post.</td></tr></tbody></table>

## REST Resource: v1.courses.posts.addOnAttachments

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/posts/{postId}/addOnAttachments</code><br>Creates an add-on attachment under a post.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}</code><br>Deletes an add-on attachment.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}</code><br>Returns an add-on attachment.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/posts/{postId}/addOnAttachments</code><br>Returns all attachments created by an add-on under the post.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}</code><br>Updates an add-on attachment.</td></tr></tbody></table>

## REST Resource: v1.courses.posts.addOnAttachments.studentSubmissions

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}</code><br>Returns a student submission for an add-on attachment.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}</code><br>Updates data associated with an add-on attachment submission.</td></tr></tbody></table>

## REST Resource: v1.courses.studentGroups

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/studentGroups</code><br>Creates a student group for a course.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/studentGroups/{id}</code><br>Deletes a student group.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/studentGroups</code><br>Returns a list of groups in a course.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/studentGroups/{id}</code><br>Updates one or more fields in a student group.</td></tr></tbody></table>

## REST Resource: v1.courses.studentGroups.studentGroupMembers

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/studentGroups/{studentGroupId}/studentGroupMembers</code><br>Creates a student group member for a student group.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/studentGroups/{studentGroupId}/studentGroupMembers/{userId}</code><br>Deletes a student group member.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/studentGroups/{studentGroupId}/studentGroupMembers</code><br>Returns a list of students in a group.</td></tr></tbody></table>

## REST Resource: v1.courses.students

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/students</code><br>Adds a user as a student of a course.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/students/{userId}</code><br>Deletes a student of a course.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/students/{userId}</code><br>Returns a student of a course.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/students</code><br>Returns a list of students of this course that the requester is permitted to view.</td></tr></tbody></table>

## REST Resource: v1.courses.teachers

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/teachers</code><br>Creates a teacher of a course.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/teachers/{userId}</code><br>Removes the specified teacher from the specified course.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/teachers/{userId}</code><br>Returns a teacher of a course.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/teachers</code><br>Returns a list of teachers of this course that the requester is permitted to view.</td></tr></tbody></table>

## REST Resource: v1.courses.topics

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/courses/{courseId}/topics</code><br>Creates a topic.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/courses/{courseId}/topics/{id}</code><br>Deletes a topic.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/courses/{courseId}/topics/{id}</code><br>Returns a topic.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/courses/{courseId}/topics</code><br>Returns the list of topics that the requester is permitted to view.</td></tr><tr><td><code>patch</code></td><td><code>PATCH /v1/courses/{courseId}/topics/{id}</code><br>Updates one or more fields of a topic.</td></tr></tbody></table>

## REST Resource: v1.invitations

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>accept</code></td><td><code>POST /v1/invitations/{id}:accept</code><br>Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course.</td></tr><tr><td><code>create</code></td><td><code>POST /v1/invitations</code><br>Creates an invitation.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/invitations/{id}</code><br>Deletes an invitation.</td></tr><tr><td><code>get</code></td><td><code>GET /v1/invitations/{id}</code><br>Returns an invitation.</td></tr><tr><td><code>list</code></td><td><code>GET /v1/invitations</code><br>Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request.</td></tr></tbody></table>

## REST Resource: v1.registrations

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>create</code></td><td><code>POST /v1/registrations</code><br>Creates a <code>Registration</code>, causing Classroom to start sending notifications from the provided <code>feed</code> to the destination provided in <code>cloudPubSubTopic</code>.</td></tr><tr><td><code>delete</code></td><td><code>DELETE /v1/registrations/{registrationId}</code><br>Deletes a <code>Registration</code>, causing Classroom to stop sending notifications for that <code>Registration</code>.</td></tr></tbody></table>
