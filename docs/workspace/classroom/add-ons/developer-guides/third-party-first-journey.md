---
source: https://developers.google.com/workspace/classroom/add-ons/developer-guides/third-party-first-journey
root: workspace
fetched_at: 2026-04-23T15:25:40.745Z
---

# Create attachments outside of Google Classroom

This guide addresses creating add-on attachments in your website or application. The interactions are similar to [creating assignments using the CourseWork API endpoints](../../guides/manage-coursework.md#create_assignments). Implement this journey to allow users to create add-on attachments from your website or application.

## Workflow

At a high level, the attachment creation journey follows this sequence:

1. A teacher user opens your website or app. They select a piece of content to assign to their students.
2. [Check that the user can create add-on attachments](#check-whether).
3. If the user **can't** create add-on attachments, create a CourseWork assignment with the URL to the selected content as a Link Material.
4. If the user **can** create add-on attachments, do the following:
	1. Create an assignment.
		2. Create an add-on attachment that links to the selected content and associate it with the new assignment.
5. Inform the teacher that the assignment has been created successfully.

Each action is described in the following sections.

## Check whether a user can create add-on attachments

You can create add-on attachments on behalf of an eligible user. An eligible user is a user who is a teacher in the course you are trying to create CourseWork assignments in **and** has the Teaching & Learning or Education Plus Google Workspace for Education edition license assigned to them.

Begin by determining whether the user can create add-on attachments. You can do so by issuing a request to the [`userProfiles.checkUserCapability`](../../reference/rest/v1/userProfiles/checkUserCapability.md) endpoint with the `CREATE_ADD_ON_ATTACHMENT` capability parameter. Inspect the boolean `allowed` field in the response; a `true` value indicates that the user is eligible to create add-on attachments.

### Python

```
eligibility_response = (
  classroom_service.userProfiles()
  .checkUserCapability(
    userId="me",
    capability="CREATE_ADD_ON_ATTACHMENT",
    # The previewVersion is necessary while the method is available in the
    # Workspace Developer Preview Program.
    previewVersion="V1_20240930_PREVIEW",
  ).execute()
)
is_create_attachment_eligible = (
  eligibility_response.get('allowed')
)
print('User eligibility for add-on attachment creation: '
      f'{is_create_attachment_eligible}.')
```

## Route the user based on their eligibility

Eligibility determines whether you can create add-on attachments for a user.

### Ineligible user

If the user *can't* create add-on attachments, then create a new [`CourseWork`](../../reference/rest/v1/courses.courseWork.md) assignment with the user-selected content URL as a [`Link`](../../reference/rest/v1/Material.md).

### Python

```
if not is_create_attachment_eligible:
  coursework = {
    'title': 'My CourseWork Assignment with Link Material',
    'description': 'Created using the Classroom CourseWork API.',
    'workType': 'ASSIGNMENT',
    'state': 'DRAFT',  # Set to 'PUBLISHED' to assign to students.
    'maxPoints': 100,
    'materials': [
      {'link': {'url': my_content_url}}
    ]
  }

  assignment = (
    service.courses()
    .courseWork()
    .create(courseId=course_id, body=coursework)
    .execute()
  )

  print(
    f'Link Material assignment created with ID: {assignment.get("id")}'
  )
```

The response contains an assignment in the requested course with the content attached. Users can click the `Link` to open the content in your site in a new tab.

![Draft CourseWork assignment with Link Material](https://developers.google.com/static/workspace/classroom/add-ons/images/create-coursework-with-link.png)

**Figure 1.** Teacher view of a draft CourseWork assignment with Link Material.

### Eligible user

Do the following if the user *can* create add-on attachments.

1. Create a new `CourseWork` assignment without any attachments.
2. Create an add-on attachment.
	- Set the [`AddOnAttachment`](../../reference/rest/v1/courses.courseWork.addOnAttachments.md#resource:-addonattachment) 's `itemId` to the `id` of the newly created assignment.
		- Ensure that you provide URLs to the user-selected content for [each View that you support](../get-started/get-started-overview.md).

### Python

```
if is_create_attachment_eligible:
  coursework = {
    'title': 'My CourseWork Assignment with Add-on Attachment',
    'description': 'Created using the Classroom CourseWork API.',
    'workType': 'ASSIGNMENT',
    'state': 'DRAFT',  # Set to 'PUBLISHED' to assign to students.
    'maxPoints': 100,
  }

  assignment = (
    classroom_service.courses()
    .courseWork()
    .create(courseId=course_id, body=coursework)
    .execute()
  )

  print(
    f'Empty assignment created with ID: {assignment.get("id")}'
  )

  attachment = {
    'teacherViewUri': {'uri': teacher_view_url},
    'studentViewUri': {'uri': student_view_url},
    'studentWorkReviewUri': {'uri': grade_student_work_url},
    'title': f'Test Attachment {test_label}',
  }

  add_on_attachment = (
    service.courses()
    .courseWork()
    .addOnAttachments()
    .create(
      courseId=course_id,
      itemId=assignment.get("id"),  # ID of the new assignment.
      body=attachment,
    )
    .execute()
  )

  print(
    f'Add-on attachment created with ID: {add_on_attachment.get("id")}'
  )
```

The add-on appears as an [attachment card](../get-started/attachments-journey.md) in Classroom. The URLs specified in the request open in the appropriate [iframe for each View](../get-started/get-started-overview.md).
