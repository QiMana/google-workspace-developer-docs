---
source: https://developers.google.com/workspace/classroom/grading-periods/manage-grading-periods
root: workspace
fetched_at: 2026-04-23T15:25:44.903Z
---

# Manage grading periods using the Classroom API

This guide explains how to use the grading periods endpoints in the Google Classroom API.

## Overview

[Grading periods](https://support.google.com/edu/classroom/answer/13138449) are created to organize homework, quizzes, and projects into specific date ranges. The Classroom API allows developers to create, modify, and read grading periods in Classroom on behalf of administrators and teachers. You can also use the Classroom API to set grading periods on CourseWork.

The Classroom API offers two endpoints to read and write grading period information in a course:

- [`GetGradingPeriodSettings`](../reference/rest/v1/courses/getGradingPeriodSettings.md): Lets you read the grading period settings in a course.
- [`UpdateGradingPeriodSettings`](../reference/rest/v1/courses/updateGradingPeriodSettings.md): Lets you manage grading period settings in a course by adding, modifying, and deleting grading periods, and applying the configured grading periods to all existing CourseWork.

## Licensing and eligibility requirements

### Modify grading period settings in a course

In order to create, modify, or delete grading periods in a course using the `UpdateGradingPeriodSettings` endpoint, the following conditions must be met:

- The user making the request must be a teacher in the course or an administrator.
- The user making the request has a [Google Workspace for Education Plus](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) license assigned to them.
- The course owner of the course has a [Google Workspace for Education Plus](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) license assigned to them.

### Read grading period settings in a course

Domain administrators and teachers of a course can *read* grading period settings regardless of what license they are assigned. This means that requests to the `GetGradingPeriodSettings` endpoint are permitted on behalf of any domain administrator or teacher.

### Set a grading period ID on CourseWork

Teachers of a course can include the `gradingPeriodId` when creating or updating CourseWork using the API regardless of what license they are assigned.

### Check the eligibility of a user to set up grading periods

Requests to the [`userProfiles.checkUserCapability`](../reference/rest/v1/userProfiles/checkUserCapability.md) endpoint are permitted on behalf of any administrator or teacher. Use this to determine whether the user can modify grading periods.

## Prerequisites

This guide provides code examples in Python, and assumes you have:

- A Google Cloud project. You can set one up following the instructions in the [Python quickstart](../quickstart/python.md).
- Added the following scopes to your project's OAuth consent screen:
	- `https://www.googleapis.com/auth/classroom.courses`
		- `https://www.googleapis.com/auth/classroom.coursework.students`
- An ID of a course in which grading periods should be modified. The course owner must have a [Google Workspace for Education Plus](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) license.
- Access to a teacher's or administrator's credentials with a [Google Workspace for Education Plus](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) license. You will need a teacher's credentials to create or modify CourseWork. Administrators cannot create or modify CourseWork if they are not a teacher in the course.

## Manage the GradingPeriodSettings resource

The `GradingPeriodSettings` resource includes a list of individual `GradingPeriods` and a boolean field called `applyToExistingCoursework`.

Ensure that each individual `GradingPeriods` in the list meets the following requirements:

- **Title, start date, and end date:** Each grading period must have a title, start date, and end date.
- **Unique title:** Each grading period must have a unique title that does not match any other grading periods in the course.
- **Non-overlapping dates:** Each grading period must not have start or end dates that overlap with any other grading periods in the course.
- **Chronological order:** Grading periods must be listed in chronological order based on the start and end dates.

Each grading period will be assigned a Classroom API-assigned identifier upon creation.

The `applyToExistingCoursework` boolean is a persisted setting that lets you organize previously created CourseWork into grading periods without having to make a separate API call to modify the `gradingPeriodId` for each CourseWork. If it is set to `True`, Classroom will automatically set the `gradingPeriodId` on all existing CourseWork if the `courseWork.dueDate` falls within an existing grading period's start and end dates. If no due date was set on the CourseWork, Classroom will use the `courseWork.scheduledTime`. If neither field is present or there is no match within an existing grading period's start and end dates, the CourseWork won't be associated with any grading period.

### Determine if a user can modify grading period settings in a course

The Classroom API provides the `userProfiles.checkUserCapability` endpoint to help you proactively determine whether a user is able to make requests to the `UpdateGradingPeriodSettings` endpoint.

### Python

```
def check_grading_periods_update_capability(classroom_service, course_id):
    """Checks whether a user is able to create and modify grading periods in a course."""
    try:
        capability = classroom_service.userProfiles().checkUserCapability(
          userId="me",
          capability="UPDATE_GRADING_PERIOD_SETTINGS",
           # Required while the checkUserCapability method is available in the Developer Preview Program.
          previewVersion="V1_20240930_PREVIEW"
        ).execute()

        # Retrieve the \`allowed\` boolean from the response.
        if capability.get("allowed"):
          print("User is allowed to update grading period settings in the course.")
        else:
          print("User is not allowed to update grading period settings in the course.")
    except HttpError as error:
        # Handle errors as appropriate for your application.
        print(f"An error occurred: {error}")
        return error
```

### Add grading periods

Now that you are certain the user is eligible to modify grading period settings in a course, you can begin issuing requests to the `UpdateGradingPeriodSettings` endpoint. Any modifications to the `GradingPeriodSettings` resource are performed using the `UpdateGradingPeriodSettings` endpoint whether you are adding individual grading periods, modifying existing grading periods, or deleting a grading period.

### Python

In the following example, the `gradingPeriodSettings` resource is modified to include two grading periods. The `applyToExistingCoursework` boolean is set to `True` which will modify the `gradingPeriodId` on any existing CourseWork that falls between one grading period's start and end date. Note that the `updateMask` includes both fields. Save the IDs for the individual grading periods once they are returned in the response. You'll need to use these IDs to update the grading periods if necessary.

```
def create_grading_periods(classroom_service, course_id):
    """
    Create grading periods in a course and apply the grading periods
    to existing courseWork.
    """
    try:
        body = {
          "gradingPeriods": [
            {
              "title": "First Semester",
              "start_date": {
                "day": 1,
                "month": 9,
                "year": 2023
              },
              "end_date": {
                "day": 15,
                "month": 12,
                "year": 2023
              }
            },
            {
              "title": "Second Semester",
              "start_date": {
                "day": 15,
                "month": 1,
                "year": 2024
              },
              "end_date": {
                "day": 31,
                "month": 5,
                "year": 2024
              }
            }
          ],
          "applyToExistingCoursework": True
        }
        gradingPeriodSettingsResponse = classroom_service.courses().updateGradingPeriodSettings(
          courseId=course_id,
          updateMask='gradingPeriods,applyToExistingCoursework',
          body=body
        ).execute();

        print(f"Grading period settings updated.")
        return gradingPeriodSettingsResponse

    except HttpError as error:
        # Handle errors as appropriate for your application.
        print(f"An error occurred: {error}")
        return error
```

### Read grading period settings

`GradingPeriodSettings` are read using the `GetGradingPeriodSettings` endpoint. Any user, regardless of license, can read grading periods settings in a course.

### Python

```
def get_grading_period_settings(classroom_service, course_id):
    """Read grading periods settings in a course."""
    try:
        gradingPeriodSettings = classroom_service.courses().getGradingPeriodSettings(
          courseId=course_id).execute()
        return gradingPeriodSettings
    except HttpError as error:
        # Handle errors as appropriate for your application.
        print(f"An error occurred: {error}")
        return error
```

### Add an individual grading period to the list

Updates to an individual grading period must be done following a read-modify-write pattern. This means you should:

1. Read the grading periods list within the `GradingPeriodSettings` resource using the `GetGradingPeriodSettings` endpoint.
2. Make the chosen modifications to the grading periods list.
3. Send the new grading periods list in a request to `UpdateGradingPeriodSettings`.

This pattern will help you ensure that individual grading period titles in a course are distinct and there is no overlap between start and end dates of grading periods.

Keep in mind the following rules about updating the grading periods list:

1. Grading periods **added to the list without an ID** are considered **additions**.
2. Grading periods **missing** in the list are considered **deletions**.
3. Grading periods **with an existing ID** but modified data are considered **edits**. Unmodified properties are left as is.
4. Grading periods with **new or unknown IDs** are considered **errors**.

### Python

The following code will build on the example in this guide. A new grading period is created with the title, "Summer". The `applyToExistingCoursework` boolean is set to `False` in the request body.

To do this, the current `GradingPeriodSettings` is read, a new grading period is added to the list, and the `applyToExistingCoursework` boolean is set to `False`. Note that any grading periods that have already been applied to existing CourseWork won't be removed. In the previous example, "Semester 1" and "Semester 2" grading periods were already applied to existing CourseWork and won't be removed from CourseWork if `applyToExistingCoursework` is set to False in subsequent requests.

```
def add_grading_period(classroom_service, course_id):
    """
    A new grading period is added to the list, but it is not applied to existing courseWork.
    """
    try:
        # Use the \`GetGradingPeriodSettings\` endpoint to retrieve the existing
        # grading period IDs. You will need to include these IDs in the request
        # body to make sure existing grading periods aren't deleted.
        body = {
          "gradingPeriods": [
            {
              # Specify the ID to make sure the grading period is not deleted.
              "id": "FIRST_SEMESTER_GRADING_PERIOD_ID",
              "title": "First Semester",
              "start_date": {
                "day": 1,
                "month": 9,
                "year": 2023
              },
              "end_date": {
                "day": 15,
                "month": 12,
                "year": 2023
              }
            },
            {
              # Specify the ID to make sure the grading period is not deleted.
              "id": "SECOND_SEMESTER_GRADING_PERIOD_ID",
              "title": "Second Semester",
              "start_date": {
                "day": 15,
                "month": 1,
                "year": 2024
              },
              "end_date": {
                "day": 31,
                "month": 5,
                "year": 2024
              }
            },
            {
              # Does not include an ID because this grading period is an addition.
              "title": "Summer",
              "start_date": {
                "day": 1,
                "month": 6,
                "year": 2024
              },
              "end_date": {
                "day": 31,
                "month": 8,
                "year": 2024
              }
            }
          ],
          "applyToExistingCoursework": False
        }

        gradingPeriodSettings = classroom_service.courses().updateGradingPeriodSettings(
          courseId=course_id, body=body, updateMask='gradingPeriods,applyToExistingCoursework').execute()
        return gradingPeriodSettings

    except HttpError as error:
        # Handle errors as appropriate for your application.
        print(f"An error occurred: {error}")
        return error
```

### Helpful pointers about the applyToExistingCoursework boolean field

It's important to remember that the `applyToExistingCoursework` boolean is **persisted** meaning that if the boolean was set to `True` in a previous API call and not changed, subsequent updates to grading periods will be applied to existing CourseWork.

Note that if you change this boolean value from `True` to `False` in a request to `UpdateGradingPeriodSettings`, only the new changes you are making to `GradingPeriodSettings` won't be applied to existing CourseWork. Any grading period information applied to CourseWork in previous API calls when the boolean was set to `True` won't be removed. A helpful way to think about this boolean setting is that it supports associating existing CourseWork with your configured grading periods, but it doesn't support removing existing associations between CourseWork and configured grading periods.

If you delete or change the title of a grading period, those changes will be propagated through all existing CourseWork, regardless of the setting of the `applyToExistingCoursework` boolean.

### Update an individual grading period in the list

To modify some data associated with an existing grading period, include the ID of the existing grading period in the list with the modified data.

### Python

In this example, the "Summer" grading period end date will be modified. The `applyToExistingCoursework` field will be set to `True`. Note that setting this boolean to `True` will apply all configured grading periods on existing CourseWork. In the previous API request, the boolean was set to `False` so that the "Summer" grading period was not applied to existing CourseWork. Now that this boolean field is set to `True`, the "Summer" grading period will be applied to all existing CourseWork that match.

```
def update_existing_grading_period(classroom_service, course_id):
    """
    An existing grading period is updated.
    """
    try:
        # Use the \`GetGradingPeriodSettings\` endpoint to retrieve the existing
        # grading period IDs. You will need to include these IDs in the request
        # body to make sure existing grading periods aren't deleted.
        body = {
          "gradingPeriods": [
            {
              "id": "FIRST_SEMESTER_GRADING_PERIOD_ID",
              "title": "First Semester",
              "start_date": {
                "day": 1,
                "month": 9,
                "year": 2023
              },
              "end_date": {
                "day": 15,
                "month": 12,
                "year": 2023
              }
            },
            {
              "id": "SECOND_SEMESTER_GRADING_PERIOD_ID",
              "title": "Second Semester",
              "start_date": {
                "day": 15,
                "month": 1,
                "year": 2024
              },
              "end_date": {
                "day": 31,
                "month": 5,
                "year": 2024
              }
            },
            {
              # The end date for this grading period will be modified from August 31, 2024 to September 10, 2024.
              # Include the grading period ID in the request along with the new data.
              "id": "SUMMER_GRADING_PERIOD_ID",
              "title": "Summer",
              "start_date": {
                "day": 1,
                "month": 6,
                "year": 2024
              },
              "end_date": {
                "day": 10,
                "month": 9,
                "year": 2024
              }
            }
          ],
          "applyToExistingCoursework": True
        }

        gradingPeriodSettings = classroom_service.courses().updateGradingPeriodSettings(
          courseId=course_id, body=body, updateMask='gradingPeriods,applyToExistingCoursework').execute()
        return gradingPeriodSettings

    except HttpError as error:
        # Handle errors as appropriate for your application.
        print(f"An error occurred: {error}")
        return error
```

### Delete an individual grading period

To delete a grading period, omit the grading period from the list. Note that if a grading period is deleted, any reference to the grading period on CourseWork will also be deleted regardless of the `applyToExistingCoursework` setting.

### Python

To continue the example in this guide, omit the grading period, "Summer", to delete it.

```
def delete_grading_period(classroom_service, course_id):
    """
    An existing grading period is deleted.
    """
    try:
        body = {
          "gradingPeriods": [
            {
              "id": "FIRST_SEMESTER_GRADING_PERIOD_ID",
              "title": "First Semester",
              "start_date": {
                "day": 1,
                "month": 9,
                "year": 2023
              },
              "end_date": {
                "day": 15,
                "month": 12,
                "year": 2023
              }
            },
            {
              "id": "SECOND_SEMESTER_GRADING_PERIOD_ID",
              "title": "Second Semester",
              "start_date": {
                "day": 15,
                "month": 1,
                "year": 2024
              },
              "end_date": {
                "day": 31,
                "month": 5,
                "year": 2024
              }
            }
          ]
        }

        gradingPeriodSettings = classroom_service.courses().updateGradingPeriodSettings(
          courseId=course_id, body=body, updateMask='gradingPeriods').execute()
        return gradingPeriodSettings

    except HttpError as error:
        # Handle errors as appropriate for your application.
        print(f"An error occurred: {error}")
        return error
```

## Manage the gradingPeriodId field on CourseWork

The CourseWork resource includes a `gradingPeriodId` field. You can use CourseWork endpoints to read and write the grading period associated with a CourseWork. There are three ways to manage this association:

- automatic date-based grading period association
- custom associated grading period
- no grading period association

#### 1\. Date-based grading period association

When creating CourseWork, you can allow Classroom to handle the grading period association for you. To do this, omit the `gradingPeriodId` field from the CourseWork request. Then, specify the `dueDate` or `scheduledTime` fields in the CourseWork request. If the `dueDate` falls into an existing grading period date range, Classroom will set that grading period ID on the CourseWork. If the `dueDate` field is not specified, Classroom will determine the `gradingPeriodId` based on the `scheduledTime` field. If neither field is specified, or if there is no grading period date range match, no `gradingPeriodId` will be set on the CourseWork.

#### 2\. Custom associated grading period

If you would like to associate the CourseWork with a different grading period than the one that aligns with the `dueDate` or `scheduledTime`, you can manually set the `gradingPeriodId` field when creating or updating CourseWork. If you manually set the `gradingPeriodId`, Classroom won't perform the automatic date-based grading period association.

#### 3\. No grading period association

If you don't want the CourseWork to be associated with any grading period at all, set the `gradingPeriodId` field in the CourseWork request to an empty string (`gradingPeriodId`: `""`).

If you are using the Go programming language and would like to set no grading period, you should also include the `ForceSendFields` field in the request body. With the Go client library, default values are omitted from API requests because of the presence of the `omitempty` field tag on all fields. The `ForceSendFields` field bypasses this and sends the empty string to indicate that you don't want any grading period set for that CourseWork. See the [Google APIs Go client library documentation](https://pkg.go.dev/google.golang.org/api#hdr-ForceSendFields) for more information.

### Go

```
courseWork := &classroom.CourseWork{
  Title: "Homework questions",
  WorkType: "ASSIGNMENT",
  State: "DRAFT",
  // ...other CourseWork fields...
  GradingPeriodId: "",
  ForceSendFields: []string{"GradingPeriodId"},
}
```

#### What happens to the grading period ID if the due date is updated?

If you are updating the CourseWork `dueDate` field and you want to preserve a custom or no grading period association, you should include the `dueDate` and the `gradingPeriodId` in the updateMask and request body. This will tell Classroom not to override the `gradingPeriodId` with the grading period that matches the new `dueDate`.

### Python

```
body = {
  "dueDate": {
    "month": 6,
    "day": 10,
    "year": 2024
  },
  "dueTime": {
    "hours": 7
  },
  "gradingPeriodId": "<INSERT-GRADING-PERIOD-ID-OR-EMPTY-STRING>"
}
courseWork = classroom_service.courses().courseWork().patch(
  courseId=course_id, id=coursework_id, body=body,
  updateMask='dueDate,dueTime,gradingPeriodId') # include the gradingPeriodId field in the updateMask
.execute()
```
