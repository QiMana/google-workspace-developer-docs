---
source: https://developers.google.com/workspace/classroom/guides/manage-student-groups
root: workspace
fetched_at: 2026-04-23T15:25:49.652Z
---

# Create and manage student groups

You can use student groups to organize students into specific groups for enhanced teaching experiences, like targeted assignments and collaborative activities. Use the Classroom API to create, modify, and read student groups within a course on behalf of administrators and teachers.

You can create, update, delete, and read student groups using the following methods:

- [`CreateStudentGroup`](../reference/rest/v1/courses.studentGroups/create.md)
- [`PatchStudentGroup`](../reference/rest/v1/courses.studentGroups/patch.md)
- [`DeleteStudentGroup`](../reference/rest/v1/courses.studentGroups/delete.md)
- [`ListStudentGroups`](../reference/rest/v1/courses.studentGroups/list.md)

You can also add, remove, and read members within a student group using the following methods:

- [`CreateStudentGroupMember`](../reference/rest/v1/courses.studentGroups.studentGroupMembers/create.md)
- [`DeleteStudentGroupMember`](../reference/rest/v1/courses.studentGroups.studentGroupMembers/delete.md)
- [`ListStudentGroupMembers`](../reference/rest/v1/courses.studentGroups.studentGroupMembers/list.md)

## Licensing and eligibility requirements

To create, modify or delete student groups in a course and add or remove members from student groups, the following conditions must be met:

- The user making the request must be a teacher in the course or an administrator of the domain.
- The user making the request must have a [Google Workspace for Education Plus](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) license assigned to them.
- The course owner must have a [Google Workspace for Education Plus](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) license assigned to them.

### Reading student groups and its members

Administrators and teachers of a course can *read* student group data regardless of what license they are assigned. This means that requests to the `ListStudentGroups` and `ListStudentGroupMembers` endpoints are permitted on behalf of any administrator or teacher in a course.

## Code example prerequisites

This guide provides code examples in Python, and assumes that you have the following:

- A Google Cloud project. You can set one up following the instructions in the [Python quickstart](../quickstart/python.md).
- Added the following scopes to your project's OAuth consent screen:
	- `https://www.googleapis.com/auth/classroom.rosters`
		- `https://www.googleapis.com/auth/classroom.rosters.readonly` for read-only endpoints.
- An ID of a course in which student groups should be managed. The course owner must have a [Google Workspace for Education Plus](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) license.
- Access to a teacher's or administrator's credentials with a [Google Workspace for Education Plus](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) license.

## Check user eligibility

The Classroom API provides the [`userProfiles.checkUserCapability`](../reference/rest/v1/userProfiles/checkUserCapability.md) endpoint to help you proactively determine whether a user is able to create and modify student groups and its members. The method is available through the [Developer Preview Program](../../preview.md). If you followed the [Python quickstart](../quickstart/python.md) as a starting point, set up a new Classroom service that can access preview methods:

### Python

```
classroom_service_with_capability_endpoint = googleapiclient.discovery.build(
    serviceName='classroom',
    version='v1',
    credentials=creds,
    static_discovery=False,
    discoveryServiceUrl='https://classroom.googleapis.com/$discovery/rest?labels=DEVELOPER_PREVIEW&key=API_KEY')
```

The `userProfiles.checkUserCapability` endpoint only evaluates whether a user is eligible to use a certain capability, such as modifying student groups. It doesn't offer any information about the course role. For example, even if a user has the `CREATE_STUDENT_GROUP` capability, if they are a student in the course, a request to the `CreateStudentGroup` endpoint won't succeed.

### Python

```
def check_student_groups_update_capability():
    """Checks whether a user is eligible to create and modify student groups."""
    capability = classroom_service_with_capability_endpoint.userProfiles().checkUserCapability(
        userId="me", # Can also be set to a different user's email address or ID
        capability="CREATE_STUDENT_GROUP",
        previewVersion="V1_20240930_PREVIEW" # Required while the method is in the DPP.
    ).execute()

    if capability.get("allowed"): # Retrieve the \`allowed\` boolean from the response.
        print("User is eligible to create and modify student groups.")
    else:
        print("User is not eligible to create and modify student groups.")
```

## Manage student groups

Student groups can be created using the [`CreateStudentGroup`](../reference/rest/v1/courses.studentGroups/create.md) endpoint.

### Python

```
def create_student_group(classroom_service, course_id):
    body = {
        "title": "Team Blue"
    }

    response = classroom_service.courses().studentGroups().create(
        courseId=course_id,
        body=body
    ).execute()

    print(response)
```

The response contains the `id` of the newly created student group, the `courseId`, and the student group `title`.

The student group `id` can be used to update or delete the individual student group.

### Python

```
def update_student_group(classroom_service, course_id, student_group_id):
    body = {
        "title": "Team Green"
    }

    response = classroom_service.courses().studentGroups().patch(
        courseId=course_id,
        id=student_group_id,
        body=body,
        updateMask="title"
    ).execute()

    print(response)
```

```
def delete_student_group(classroom_service, course_id, student_group_id):
    response = classroom_service.courses().studentGroups().delete(
        courseId=course_id,
        id=student_group_id
    ).execute()

    print(response)
```

You can retrieve the student groups within a course using the [`ListStudentGroups`](../reference/rest/v1/courses.studentGroups/list.md) endpoint:

### Python

```
def list_student_groups(classroom_service, course_id):
    results = classroom_service.courses().studentGroups().list(
        courseId=course_id
    ).execute()

    studentGroups = results.get("studentGroups")
```

## Manage student group members

Once the student group has successfully been created, you can add members to it.

### Python

```
def add_student_group_member(classroom_service, course_id, student_group_id):
    body = {
        "userId": "student@schooldomain.com"
    }

    response = classroom_service.courses().studentGroups().studentGroupMembers().create(
        courseId=course_id,
        studentGroupId=student_group_id,
        body=body
    ).execute()

    print(response)
```

If you'd like to remove a member from a student group, make a request like the following:

### Python

```
def delete_student_group_member(classroom_service, course_id, student_group_id):
    response = classroom_service.courses().studentGroups().studentGroupMembers().delete(
        courseId=course_id,
        studentGroupId=student_group_id,
        userId="student@schooldomain.com"
    ).execute()
    print(response)
```

You can read the members within a group by making the following request:

### Python

```
def list_student_group_members(classroom_service, course_id, student_group_id):
    results = classroom_service.courses().studentGroups().studentGroupMembers().list(
        courseId=course_id,
        studentGroupId=student_group_id
    ).execute()

    print(results.get("studentGroupMembers"))
```

Each `StudentGroupMember` resource includes the `courseId`, `studentGroupId`, and `userId` of the group member.
