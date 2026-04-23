---
source: https://developers.google.com/workspace/classroom/guides/classroom-api/manage-grades
root: workspace
fetched_at: 2026-04-23T15:25:45.777Z
---

# Set & update grades

This guide provides grading-related code examples for the Classroom API. The focus of this document is on the core Classroom grading journey: managing [`StudentSubmission`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions) states and grades.

Read the [Grades guide](https://developers.google.com/workspace/classroom/guides/key-concepts/grades) to familiarize yourself with grading concepts in Classroom.

## Manage StudentSubmission states

[`StudentSubmission`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions) may be unsubmitted, turned in, or returned. The `state` field indicates the current state. Grading is typically done after the `StudentSubmission` is in the `TURNED_IN` state.

To change the state using the Classroom API, call one of the following methods:

- [`courses.courseWork.studentSubmissions.turnIn`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/turnIn): Only the student that owns a `StudentSubmission` may turn it in.
- [`courses.courseWork.studentSubmissions.reclaim`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/reclaim): Only the student that owns a `StudentSubmission` may reclaim it. The submission can only be reclaimed if it has already been turned in.
- [`courses.courseWork.studentSubmissions.return`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/return): Only teachers in the course can return a `StudentSubmission`. The submission can only be returned if it has already been turned in by the student.

All of these methods accept an empty `body` parameter, shown in the following example:

### Python

```
service.courses().courseWork().studentSubmission().turnIn(
    courseId=course_id,
    courseWorkId=coursework_id,
    id=studentsubmission_id,
    body={}).execute()
```

### Java

```
try {
  service
      .courses()
      .courseWork()
      .studentSubmissions()
      .classroomReturn(courseId, courseWorkId, id, null)
      .execute();
} catch (GoogleJsonResponseException e) {
  // TODO (developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf(
        "The courseId (%s), courseWorkId (%s), or studentSubmissionId (%s) does "
            + "not exist.\n",
        courseId, courseWorkId, id);
  } else {
    throw e;
  }
} catch (Exception e) {
  throw e;
}
```

## Set grades for student submissions

The [`StudentSubmission`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions) resource has two fields to store the overall grade for graded [`CourseWork`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork) work:

- `draftGrade` is a tentative grade visible only to teachers.
- `assignedGrade` is the grade reported to students.

These fields are updated using [`courses.courseWork.studentSubmissions.patch`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/patch), as demonstrated in the following example:

### Python

```
studentSubmission = {
  'assignedGrade': 99,
  'draftGrade': 80
}

service.courses().courseWork().studentSubmissions().patch(
    courseId=course_id,
    courseWorkId=coursework_id,
    id=studentsubmission_id,
    updateMask='assignedGrade,draftGrade',
    body=studentSubmission).execute()
```

### Java

```
StudentSubmission studentSubmission = null;
try {
  // Updating the draftGrade and assignedGrade fields for the specific student submission.
  StudentSubmission content =
      service
          .courses()
          .courseWork()
          .studentSubmissions()
          .get(courseId, courseWorkId, id)
          .execute();
  content.setAssignedGrade(90.00);
  content.setDraftGrade(80.00);

  // The updated studentSubmission object is returned with the new draftGrade and assignedGrade.
  studentSubmission =
      service
          .courses()
          .courseWork()
          .studentSubmissions()
          .patch(courseId, courseWorkId, id, content)
          .set("updateMask", "draftGrade,assignedGrade")
          .execute();

  /* Prints the updated student submission. */
  System.out.printf(
      "Updated student submission draft grade (%s) and assigned grade (%s).\n",
      studentSubmission.getDraftGrade(), studentSubmission.getAssignedGrade());
} catch (GoogleJsonResponseException e) {
  // TODO (developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf(
        "The courseId (%s), courseWorkId (%s), or studentSubmissionId (%s) does "
            + "not exist.\n",
        courseId, courseWorkId, id);
  } else {
    throw e;
  }
} catch (Exception e) {
  throw e;
}
return studentSubmission;
```

When working with the Classroom UI, teachers can't set an `assignedGrade` until they have first saved a `draftGrade`. The `assignedGrade` can then be returned to a student. Your application can grade a student's assignment in one of two ways:

- Assign just the `draftGrade`. This is useful, for example, to let the teacher manually review grades before finalizing them. Students cannot see draft grades.
- Assign both the `draftGrade` and `assignedGrade` to fully grade an assignment.

Use the `updateMask` argument to configure which field to set.

See [Add attachments to a student response](https://developers.google.com/workspace/classroom/guides/manage-coursework#add_attachments_to_a_student_response) to understand scopes and permissions required to modify `StudentSubmissions`.

## Read assigned grades

You can access all grades for a particular `CourseWork` by using the [`courses.courseWork.studentSubmissions.list`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions/list) method to retrieve all corresponding `StudentSubmissions` and inspecting the appropriate `assignedGrade` and `draftGrade` fields:

### Python

```
response = coursework.studentSubmissions().list(
    courseId=course_id,
    courseWorkId=coursework_id,
    # optionally include \`pageSize\` to restrict the number of student
    # submissions included in the response.
    pageSize=10
).execute()
submissions.extend(response.get('studentSubmissions', []))

if not submissions:
    print('No student submissions found.')

print('Student Submissions:')

for submission in submissions:
    print(f"Submitted at:"
          f"{(submission.get('userId'), submission.get('assignedGrade'))}")
```

### Java

```
ListStudentSubmissionsResponse response =
      service
          .courses()
          .courseWork()
          .studentSubmissions()
          .list(courseId, courseWorkId)
          .setPageToken(pageToken)
          .execute();

  /* Ensure that the response is not null before retrieving data from it to avoid errors. */
  if (response.getStudentSubmissions() != null) {
    studentSubmissions.addAll(response.getStudentSubmissions());
    pageToken = response.getNextPageToken();
  }
} while (pageToken != null);

if (studentSubmissions.isEmpty()) {
  System.out.println("No student submissions found.");
} else {
  for (StudentSubmission submission : studentSubmissions) {
    System.out.printf(
        "User ID %s, Assigned grade: %s\n",
        submission.getUserId(), submission.getAssignedGrade());
  }
}
```

See [Retrieve student responses](https://developers.google.com/workspace/classroom/guides/manage-coursework#retrieve_student_responses) to understand scopes and permissions required to read `StudentSubmissions`.

### Determine overall course grades

The Classroom API doesn't allow developers to read or write the overall course grade, but you can calculate it programmatically. If you'd like to calculate the overall grade, read through the [Grades guide](https://developers.google.com/workspace/classroom/guides/key-concepts/grades) to understand important concepts like excused `CourseWork`, grading periods, and the different grading systems.

## Grade add-on attachments

If you're a Classroom add-ons developer, you can set grades for individual add-on attachments and configure the grade to be visible to teachers when they review student work. See the [Activity-type attachments](https://developers.google.com/workspace/classroom/add-ons/walkthroughs/activity-attachments) and [Grade passback](https://developers.google.com/workspace/classroom/add-ons/walkthroughs/grade-passback) walkthroughs for more information.

## Rubrics grades

`StudentSubmissions` have fields that represent scores given based on [`Rubrics`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics):

- `draftRubricGrade` is a tentative set of [`Criterion`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics#Criterion) scores visible only to teachers.
- `assignedRubricGrade` is the set of [`Criterion`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics#Criterion) scores reported to students.

Rubric scores can't be set using the Google Classroom API, but can be read. See the [Rubrics guide](https://developers.google.com/workspace/classroom/rubrics/getting-started) and [limitations](https://developers.google.com/workspace/classroom/rubrics/limitations) to learn more.
