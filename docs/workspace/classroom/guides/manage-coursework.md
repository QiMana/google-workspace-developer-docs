---
source: https://developers.google.com/workspace/classroom/guides/manage-coursework
root: workspace
fetched_at: 2026-04-23T15:25:48.466Z
---

# Manage CourseWork

The Classroom app supports three types of stream items: [`CourseWork`](../reference/rest/v1/courses.courseWork.md), [`CourseWorkMaterials`](../reference/rest/v1/courses.courseWorkMaterials.md), and [`Announcements`](../reference/rest/v1/courses.announcements.md). This guide describes how to manage `CourseWork`, but the APIs for all the stream items are similar. See [API resources](./key-concepts/api-structure.md#stream_items) to learn more about the stream item types and their differences.

The `CourseWork` resource represents a work item that has been assigned to students in a particular course, including any additional materials and details, like due date or max score. There are four subtypes of `CourseWork`: **assignments**, **quiz assignments**, **short answer questions**, and **multiple-choice questions**. The Classroom API supports three of these subtypes: assignments, short answer questions, and multiple-choice questions. These types are represented by the [`CourseWork.workType`](../reference/rest/v1/CourseWorkType.md) field.

In addition to the `CourseWork` resource, you can manage completed work with the [`StudentSubmission`](../reference/rest/v1/courses.courseWork.studentSubmissions.md) resource.

### Create CourseWork

`CourseWork` can *only* be created on behalf of the course's teacher. Attempting to create `CourseWork` on behalf of a student, or a domain administrator who is not a teacher in the course, results in a `PERMISSION_DENIED` error. See [User types](./key-concepts/user-types.md) to learn more about the different roles in Classroom.

When creating `CourseWork` using the [`courses.courseWork.create`](../reference/rest/v1/courses.courseWork/create.md) method, you can attach links as `materials`, shown in the sample code below:

### Java

```
CourseWork courseWork = null;
try {
  // Create a link to add as a material on course work.
  Link articleLink =
      new Link()
          .setTitle("SR-71 Blackbird")
          .setUrl("https://www.lockheedmartin.com/en-us/news/features/history/blackbird.html");

  // Create a list of Materials to add to course work.
  List<Material> materials = Arrays.asList(new Material().setLink(articleLink));

  /* Create new CourseWork object with the material attached.
  Set workType to \`ASSIGNMENT\`. Possible values of workType can be found here:
  https://developers.google.com/classroom/reference/rest/v1/CourseWorkType
  Set state to \`PUBLISHED\`. Possible values of state can be found here:
  https://developers.google.com/classroom/reference/rest/v1/courses.courseWork#courseworkstate */
  CourseWork content =
      new CourseWork()
          .setTitle("Supersonic aviation")
          .setDescription(
              "Read about how the SR-71 Blackbird, the world’s fastest and "
                  + "highest-flying manned aircraft, was built.")
          .setMaterials(materials)
          .setWorkType("ASSIGNMENT")
          .setState("PUBLISHED");

  courseWork = service.courses().courseWork().create(courseId, content).execute();

  /* Prints the created courseWork. */
  System.out.printf("CourseWork created: %s\n", courseWork.getTitle());
} catch (GoogleJsonResponseException e) {
  // TODO (developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("The courseId does not exist: %s.\n", courseId);
  } else {
    throw e;
  }
  throw e;
} catch (Exception e) {
  throw e;
}
return courseWork;
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def classroom_create_coursework(course_id):
  """
  Creates the coursework the user has access to.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """

  creds, _ = google.auth.default()
  # pylint: disable=maybe-no-member

  try:
    service = build("classroom", "v1", credentials=creds)
    coursework = {
        "title": "Ant colonies",
        "description": """Read the article about ant colonies
                              and complete the quiz.""",
        "materials": [
            {"link": {"url": "http://example.com/ant-colonies"}},
            {"link": {"url": "http://example.com/ant-quiz"}},
        ],
        "workType": "ASSIGNMENT",
        "state": "PUBLISHED",
    }
    coursework = (
        service.courses()
        .courseWork()
        .create(courseId=course_id, body=coursework)
        .execute()
    )
    print(f"Assignment created with ID {coursework.get('id')}")
    return coursework

  except HttpError as error:
    print(f"An error occurred: {error}")
    return error

if __name__ == "__main__":
  # Put the course_id of course whose coursework needs to be created,
  # the user has access to.
  classroom_create_coursework(453686957652)
```

The `title` and `workType` fields are required. All other fields are optional. If `state` is unspecified, the `CourseWork` is created in a draft state.

Use a [Link resource](../reference/rest/v1/Link.md) with a specified target `url` to include linked materials in the `CourseWork`. Classroom automatically fetches the `title` and thumbnail image URL (`thumbnailUrl`). The Classroom API also natively supports Google Drive and YouTube materials, which can be included with a [DriveFile resource](../reference/rest/v1/DriveFile.md) or [YouTubeVideo resource](../reference/rest/v1/YouTubeVideo.md) in a similar way.

To specify a due date, set the `dueDate` and `dueTime` fields to the corresponding UTC time. The due date must be in the future.

The `CourseWork` response includes a server-assigned identifier that can be used to reference the assignment in other API requests.

### Retrieve CourseWork

You can retrieve `CourseWork` on behalf of students and teachers of the corresponding course. You can also retrieve `CourseWork` on behalf of domain administrators, even if they aren't a teacher in the course. To retrieve a specific `CourseWork`, use [`courses.courseWork.get`](../reference/rest/v1/courses.courseWork/get.md). To retrieve all `CourseWork` (optionally matching some criteria), use [`courses.courseWork.list`](../reference/rest/v1/courses.courseWork/list.md).

The required scope depends on the role that the requesting user has in the course. If the user is a student, use one of the following scopes:

- `https://www.googleapis.com/auth/classroom.coursework.me.readonly`
- `https://www.googleapis.com/auth/classroom.coursework.me`

If the user is a teacher or a domain administrator, use one of the following scopes:

- `https://www.googleapis.com/auth/classroom.coursework.students.readonly`
- `https://www.googleapis.com/auth/classroom.coursework.students`

Having permission to retrieve a `CourseWork` does not imply permissions to access materials or material metadata. In practice, this means that an administrator may not see the title of an attached Drive file if they're not a member of the course.

## Manage student responses

A [`StudentSubmission`](../reference/rest/v1/courses.courseWork.studentSubmissions.md) resource represents the work done by a student for a `CourseWork`. The resource includes metadata related to the work, such as the work status and grade. A `StudentSubmission` is implicitly created for each student when a new `CourseWork` is created.

The following sections explain common actions that manage student responses.

### Retrieve student responses

Students can retrieve their own submissions, teachers can retrieve submissions for all students in their courses, and domain administrators can retrieve all submissions for all students in their domain. Each `StudentSubmission` is assigned an identifier. If you know the identifier, use [`courses.courseWork.studentSubmissions.get`](../reference/rest/v1/courses.courseWork.studentSubmissions/get.md) to retrieve the submission.

Use the [`courses.courseWork.studentSubmissions.list`](../reference/rest/v1/courses.courseWork.studentSubmissions/list.md) method to get all `StudentSubmission` resources that match some criteria, as shown in the following sample:

### Java

```
List<StudentSubmission> studentSubmissions = new ArrayList<>();
String pageToken = null;

try {
  do {
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
    System.out.println("No student submission found.");
  } else {
    for (StudentSubmission submission : studentSubmissions) {
      System.out.printf(
          "Student id (%s), student submission id (%s)\n",
          submission.getUserId(), submission.getId());
    }
  }
} catch (GoogleJsonResponseException e) {
  // TODO (developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf(
        "The courseId (%s) or courseWorkId (%s) does not exist.\n", courseId, courseWorkId);
  } else {
    throw e;
  }
} catch (Exception e) {
  throw e;
}
return studentSubmissions;
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def classroom_list_submissions(course_id, coursework_id):
  """
  Creates the courses the user has access to.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """

  creds, _ = google.auth.default()
  # pylint: disable=maybe-no-member
  submissions = []
  page_token = None

  try:
    service = build("classroom", "v1", credentials=creds)
    while True:
      coursework = service.courses().courseWork()
      response = (
          coursework.studentSubmissions()
          .list(
              pageToken=page_token,
              courseId=course_id,
              courseWorkId=coursework_id,
              pageSize=10,
          )
          .execute()
      )
      submissions.extend(response.get("studentSubmissions", []))
      page_token = response.get("nextPageToken", None)
      if not page_token:
        break

    if not submissions:
      print("No student submissions found.")

    print("Student Submissions:")
    for submission in submissions:
      print(
          "Submitted at:"
          f"{(submission.get('id'), submission.get('creationTime'))}"
      )

  except HttpError as error:
    print(f"An error occurred: {error}")
    submissions = None
  return submissions

if __name__ == "__main__":
  # Put the course_id and coursework_id of course whose list needs to be
  # submitted.
  classroom_list_submissions(453686957652, 466086979658)
```

Retrieve `StudentSubmission` resources that belong to a particular student by specifying the `userId` parameter, as shown in the following sample:

### Java

```
List<StudentSubmission> studentSubmissions = new ArrayList<>();
String pageToken = null;

try {
  do {
    // Set the userId as a query parameter on the request.
    ListStudentSubmissionsResponse response =
        service
            .courses()
            .courseWork()
            .studentSubmissions()
            .list(courseId, courseWorkId)
            .setPageToken(pageToken)
            .set("userId", userId)
            .execute();

    /* Ensure that the response is not null before retrieving data from it to avoid errors. */
    if (response.getStudentSubmissions() != null) {
      studentSubmissions.addAll(response.getStudentSubmissions());
      pageToken = response.getNextPageToken();
    }
  } while (pageToken != null);

  if (studentSubmissions.isEmpty()) {
    System.out.println("No student submission found.");
  } else {
    for (StudentSubmission submission : studentSubmissions) {
      System.out.printf("Student submission: %s.\n", submission.getId());
    }
  }
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def classroom_list_student_submissions(course_id, coursework_id, user_id):
  """
  Creates the courses the user has access to.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """

  creds, _ = google.auth.default()
  # pylint: disable=maybe-no-member
  submissions = []
  page_token = None

  try:
    service = build("classroom", "v1", credentials=creds)
    while True:
      coursework = service.courses().courseWork()
      response = (
          coursework.studentSubmissions()
          .list(
              pageToken=page_token,
              courseId=course_id,
              courseWorkId=coursework_id,
              userId=user_id,
          )
          .execute()
      )
      submissions.extend(response.get("studentSubmissions", []))
      page_token = response.get("nextPageToken", None)
      if not page_token:
        break

    if not submissions:
      print("No student submissions found.")

    print("Student Submissions:")
    for submission in submissions:
      print(
          "Submitted at:"
          f"{(submission.get('id'), submission.get('creationTime'))}"
      )

  except HttpError as error:
    print(f"An error occurred: {error}")
  return submissions

if __name__ == "__main__":
  # Put the course_id, coursework_id and user_id of course whose list needs
  # to be submitted.
  classroom_list_student_submissions(453686957652, 466086979658, "me")
```

Students are identified by the unique ID or email address, as represented in the [`Student`](../reference/rest/v1/courses.students.md) resource. The current user may also refer to their own ID using the `"me"` shorthand.

It's also possible to retrieve student submissions for all assignments within a course. To do so, use the literal `"-"` as the `courseWorkId`, as shown in the following sample:

### Java

```
service.courses().courseWork().studentSubmissions()
    .list(courseId, "-")
    .set("userId", userId)
    .execute();
```

### Python

```
service.courses().courseWork().studentSubmissions().list(
    courseId=<course ID or alias>,
    courseWorkId='-',
    userId=<user ID>).execute()
```

The required scope depends on the role that the requesting user has in the course. If the user is a teacher or a domain administrator, use the following scope:

- `https://www.googleapis.com/auth/classroom.coursework.students.readonly`
- `https://www.googleapis.com/auth/classroom.coursework.students`

If the user is a student, use the following scope:

- `https://www.googleapis.com/auth/classroom.coursework.me.readonly`
- `https://www.googleapis.com/auth/classroom.coursework.me`

Having permission to retrieve a `StudentSubmission` does not imply permissions to access attachments or attachment metadata. In practice, this means that an administrator may not see the title of an attached Drive file if they're not a member of the course.

### Add attachments to a student response

You can attach links to a student submission by attaching a [`Link`](../reference/rest/v1/Link.md), [`DriveFile`](../reference/rest/v1/DriveFile.md), or [`YouTubeVideo`](../reference/rest/v1/YouTubeVideo.md) resource. This is done with [`courses.courseWork.studentSubmissions.modifyAttachments`](../reference/rest/v1/courses.courseWork.studentSubmissions/modifyAttachments.md), as shown in the following sample:

### Java

```
StudentSubmission studentSubmission = null;
try {
  // Create ModifyAttachmentRequest object that includes a new attachment with a link.
  Link link = new Link().setUrl("https://en.wikipedia.org/wiki/Irrational_number");
  Attachment attachment = new Attachment().setLink(link);
  ModifyAttachmentsRequest modifyAttachmentsRequest =
      new ModifyAttachmentsRequest().setAddAttachments(Arrays.asList(attachment));

  // The modified studentSubmission object is returned with the new attachment added to it.
  studentSubmission =
      service
          .courses()
          .courseWork()
          .studentSubmissions()
          .modifyAttachments(courseId, courseWorkId, id, modifyAttachmentsRequest)
          .execute();

  /* Prints the modified student submission. */
  System.out.printf(
      "Modified student submission attachments: '%s'.\n",
      studentSubmission.getAssignmentSubmission().getAttachments());
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

### Python

```
def classroom_add_attachment(course_id, coursework_id, submission_id):
  """
  Adds attachment to existing course with specific course_id.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()
  # pylint: disable=maybe-no-member
  request = {
      "addAttachments": [
          {"link": {"url": "http://example.com/quiz-results"}},
          {"link": {"url": "http://example.com/quiz-reading"}},
      ]
  }

  try:
    service = build("classroom", "v1", credentials=creds)
    while True:
      coursework = service.courses().courseWork()
      coursework.studentSubmissions().modifyAttachments(
          courseId=course_id,
          courseWorkId=coursework_id,
          id=submission_id,
          body=request,
      ).execute()

  except HttpError as error:
    print(f"An error occurred: {error}")

if __name__ == "__main__":
  # Put the course_id, coursework_id and submission_id of course in which
  # attachment needs to be added.
  classroom_add_attachment("course_id", "coursework_id", "me")
```

A `Link` attachment is defined by the target `url`; Classroom automatically fetches the `title` and thumbnail image (`thumbnailUrl`). See [`Material`](../reference/rest/v1/Material.md) to learn about materials that can be attached to `StudentSubmissions`.

The `StudentSubmission` can only be modified by a course teacher or by the student that owns it. You can only attach `Materials` if the [`CourseWorkType`](../reference/rest/v1/CourseWorkType.md) of the `StudentSubmission` is `ASSIGNMENT`.

The required scope depends on the role that the requesting user has in the course. If the user is a teacher, use the following scope:

- `https://www.googleapis.com/auth/classroom.coursework.students`

If the user is a student, use the following scope:

- `https://www.googleapis.com/auth/classroom.coursework.me`
