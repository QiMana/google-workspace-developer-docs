---
source: https://developers.google.com/workspace/classroom/guides/manage-users
root: workspace
fetched_at: 2026-04-23T15:25:49.503Z
---

# Create and manage teachers and students

The [student and teacher roles](./key-concepts/user-types.md) in Google Classroom represent a user's role in a course. A user can be assigned as a teacher in one course and a student in another. The designation "student" or "teacher" represents a set of permissions for a particular user in a particular course.

Students

A `Student` resource represents a user who is enrolled as a student

in a specific course. Students are permitted to view the course details and teachers for that course.

Teachers

A `Teacher` resource represents a user who teaches a specific course. Teachers are permitted to view and change the course details, view teachers and students, and manage additional teachers and students. Each course has a primary teacher, or course owner, who is a teacher that can manage settings like course ownership transfer.

Students and teachers are identified by the unique ID or email address of the user, as returned by the [Directory API](../../admin/directory/v1/guides/manage-users.md). The current user may also refer to their own ID using the `"me"` shorthand.

## Direct management permissions using the Classroom API

Administrators, students, and teachers have different permissions when directly adding or removing users from courses using the Classroom API.

### Administrators

Domain administrators are permitted to bypass the invitation flow and directly add students and teachers to a course if the following conditions are met:

- The user being added is part of the administrator's domain.
- The primary teacher of the course, or course owner, is part of the administrator's domain.

For users or courses outside the domain of an administrator, applications must obtain the user's consent by sending an invitation with the [`invitations.create`](../reference/rest/v1/invitations/create.md) method.

### Students

Students can add themselves to a course by calling [`students.create`](../reference/rest/v1/courses.students/create.md) and specifying the `enrollmentCode` of the course. The `enrollmentCode` is a unique identifier for the course that is included on the `Course` resource. In the Classroom web application, the `enrollmentCode` is available in the stream tab and the course details page.

### Teachers

Teachers can't directly add users to a course and must use the [`invitations.create`](../reference/rest/v1/invitations/create.md) method to invite students and other teachers to the course.

The following table describes which user is permitted to make requests to the `create` and `delete` methods for the `Teacher` and `Student` resources.

|  | Administrator | Teacher | Student |
| --- | --- | --- | --- |
| `CreateTeacher` | ✔️ | ✖️ | ✖️ |
| `DeleteTeacher` | ✔️ | ✔️ | ✖️ |
| `CreateStudent` | ✔️ | ✖️ | ✔️ [^1] |
| `DeleteStudent` | ✔️ | ✔️ | ✔️ [^2] |

## Manage teachers

Domain administrators can directly add teachers within their domain to courses with [`teachers.create`](../reference/rest/v1/courses.teachers/create.md), as shown in the following sample:

### .NET

```
using Google.Apis.Auth.OAuth2;
using Google.Apis.Classroom.v1;
using Google.Apis.Classroom.v1.Data;
using Google.Apis.Services;
using System;
using System.Net;
using Google;

namespace ClassroomSnippets
{
    // Class to demonstrate the use of Classroom Create Teacher API
    public class AddTeacher
    {
       /// <summary>
       /// Add teacher to the Course
       /// </summary>
       /// <param name="courseId"></param>
       /// <param name="teacherEmail"></param>
       /// <returns></returns>
        public static Teacher ClassroomAddTeacher( string courseId,
                 string teacherEmail)
         {
             try 
             {
                 /* Load pre-authorized user credentials from the environment.
                  TODO(developer) - See https://developers.google.com/identity for 
                  guides on implementing OAuth2 for your application. */
                 GoogleCredential credential = GoogleCredential.GetApplicationDefault()
                     .CreateScoped(ClassroomService.Scope.ClassroomRosters);

                 // Create Classroom API service.
                 var service = new ClassroomService(new BaseClientService.Initializer
                 {
                     HttpClientInitializer = credential,
                     ApplicationName = "Classroom API Snippet"
                 });

                 var teacher = new Teacher
                 {
                     UserId = teacherEmail
                 };
                 // Add the teacher to the course.
                 teacher = service.Courses.Teachers.Create(teacher, courseId).Execute();
                     Console.WriteLine(
                         "User '{0}' was added as a teacher to the course with ID '{1}'.\n",
                         teacher.Profile.Name.FullName, courseId);
                     return teacher;
             }
             catch (Exception e)
             {
                 // TODO(developer) - handle error appropriately
                 if (e is AggregateException)
                 {
                     Console.WriteLine("Credential Not found");
                 }
                 else if (e is GoogleApiException)
                 {
                     Console.WriteLine("Failed to Add the teacher. Error message: {0}", e.Message);
                 }
                 else
                 {
                     throw;
                 }
             }

             return null;
         }

    }

}
```

### Java

```
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.classroom.Classroom;
import com.google.api.services.classroom.ClassroomScopes;
import com.google.api.services.classroom.model.Teacher;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;

/* Class to demonstrate the use of Classroom Add Teacher API */
public class AddTeacher {

  /* Scopes required by this API call. If modifying these scopes, delete your previously saved
  tokens/ folder. */
  static ArrayList<String> SCOPES =
      new ArrayList<>(Arrays.asList(ClassroomScopes.CLASSROOM_ROSTERS));

  /**
   * Add teacher to a specific course.
   *
   * @param courseId - Id of the course.
   * @param teacherEmail - Email address of the teacher.
   * @return newly created teacher
   * @throws IOException - if credentials file not found.
   * @throws GeneralSecurityException - if a new instance of NetHttpTransport was not created.
   */
  public static Teacher addTeacher(String courseId, String teacherEmail)
      throws GeneralSecurityException, IOException {

    // Create the classroom API client.
    final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
    Classroom service =
        new Classroom.Builder(
                HTTP_TRANSPORT,
                GsonFactory.getDefaultInstance(),
                ClassroomCredentials.getCredentials(HTTP_TRANSPORT, SCOPES))
            .setApplicationName("Classroom samples")
            .build();

    Teacher teacher = new Teacher().setUserId(teacherEmail);
    try {
      // Add a teacher to a specified course
      teacher = service.courses().teachers().create(courseId, teacher).execute();
      // Prints the course id with the teacher name
      System.out.printf(
          "User '%s' was added as a teacher to the course with ID '%s'.\n",
          teacher.getProfile().getName().getFullName(), courseId);
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 409) {
        System.out.printf("User '%s' is already a member of this course.\n", teacherEmail);
      } else if (error.getCode() == 403) {
        System.out.println("The caller does not have permission.\n");
      } else {
        throw e;
      }
    }
    return teacher;
  }
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Classroom;
use Google\Service\Classroom\Teacher;
use Google\service\Exception;

function addTeacher($courseId, $teacherEmail)
{
    /* Load pre-authorized user credentials from the environment.
    TODO (developer) - See https://developers.google.com/identity for
     guides on implementing OAuth2 for your application. */
    $client = new Client();
    $client->useApplicationDefaultCredentials();
    $client->addScope("https://www.googleapis.com/auth/classroom.profile.photos");
    $service = new Classroom($client);
    $teacher = new Teacher([
        'userId' => $teacherEmail
    ]);
    try {
        //  calling create teacher
        $teacher = $service->courses_teachers->create($courseId, $teacher);
        printf("User '%s' was added as a teacher to the course with ID '%s'.\n",
            $teacher->profile->name->fullName, $courseId);
    } catch (Exception $e) {
        if ($e->getCode() == 409) {
            printf("User '%s' is already a member of this course.\n", $teacherEmail);
        } else {
            throw $e;
        }
    }
    return $teacher;
}
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def classroom_add_teacher(course_id):
  """
  Adds a teacher to a course with specific course_id.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()
  # pylint: disable=maybe-no-member
  service = build("classroom", "v1", credentials=creds)

  teacher_email = "gduser1@workspacesamples.dev"
  teacher = {"userId": teacher_email}

  try:
    teachers = service.courses().teachers()
    teacher = teachers.create(courseId=course_id, body=teacher).execute()
    print(
        "User %s was added as a teacher to the course with ID %s"
        % (teacher.get("profile").get("name").get("fullName"), course_id)
    )
  except HttpError as error:
    print('User "{%s}" is already a member of this course.' % teacher_email)
    return error
  return teachers

if __name__ == "__main__":
  # Put the course_id of course for which Teacher needs to be added.
  classroom_add_teacher(453686957652)
```

Co-teachers can remove other teachers from a course with the [`teachers.delete`](../reference/rest/v1/courses.teachers/delete.md) method. This only removes the specified teacher from the course and does not affect their assignment to other courses or their user profile.

### Manage course owners

Domain administrators can transfer ownership of courses between teachers. See the [Update the course owner](./manage-courses.md#update-course-owner) section for important details.

## Manage students

Domain administrators can directly add students within their domain with the [`students.create`](../reference/rest/v1/courses.students/create.md) method. If a student is directly adding themselves to a course, the `enrollmentCode` is required.

### .NET

```
using Google.Apis.Auth.OAuth2;
using Google.Apis.Classroom.v1;
using Google.Apis.Classroom.v1.Data;
using Google.Apis.Services;
using System;
using System.Net;
using Google;

namespace ClassroomSnippets
{
    // Class to demonstrate the use of Classroom Create Student API
    public class AddStudent
    {
        public static Student ClassroomAddStudent(string courseId, string enrollmentCode)
        {
            try
            {
                /* Load pre-authorized user credentials from the environment.
                 TODO(developer) - See https://developers.google.com/identity for 
                 guides on implementing OAuth2 for your application. */
                GoogleCredential credential = GoogleCredential.GetApplicationDefault()
                    .CreateScoped(ClassroomService.Scope.ClassroomRosters);
                var service = new ClassroomService(new BaseClientService.Initializer
                {
                    HttpClientInitializer = credential,
                    ApplicationName = "Classroom API .NET Quickstart"
                });

                var student = new Student
                {
                    UserId = "me"
                };

                var request = service.Courses.Students.Create(student, courseId);
                request.EnrollmentCode = enrollmentCode;
                student = request.Execute();
                Console.WriteLine(
                    "User '{0}' was enrolled  as a student in the course with ID '{1}'.\n",
                    student.Profile.Name.FullName, courseId);
            }
            catch (Exception e)
            {
                // TODO(developer) - handle error appropriately
                if (e is AggregateException)
                {
                    Console.WriteLine("Credential Not found");
                }
                else if (e is GoogleApiException)
                {
                    Console.WriteLine("Failed to Add the Student. Error message: {0}", e.Message);
                }
                else
                {
                    throw;
                }
            }

            return null;
        }
    }

}
```

### Java

```
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.classroom.Classroom;
import com.google.api.services.classroom.ClassroomScopes;
import com.google.api.services.classroom.model.Student;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;

/* Class to demonstrate the use of Classroom Add Student API */
public class AddStudent {

  /* Scopes required by this API call. If modifying these scopes, delete your previously saved
  tokens/ folder. */
  static ArrayList<String> SCOPES =
      new ArrayList<>(Arrays.asList(ClassroomScopes.CLASSROOM_ROSTERS));

  /**
   * Add a student in a specified course.
   *
   * @param courseId - Id of the course.
   * @param enrollmentCode - Code of the course to enroll.
   * @return newly added student
   * @throws IOException - if credentials file not found.
   * @throws GeneralSecurityException - if a new instance of NetHttpTransport was not created.
   */
  public static Student addStudent(String courseId, String enrollmentCode, String studentId)
      throws GeneralSecurityException, IOException {

    // Create the classroom API client.
    final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
    Classroom service =
        new Classroom.Builder(
                HTTP_TRANSPORT,
                GsonFactory.getDefaultInstance(),
                ClassroomCredentials.getCredentials(HTTP_TRANSPORT, SCOPES))
            .setApplicationName("Classroom samples")
            .build();

    Student student = new Student().setUserId(studentId);
    try {
      // Enrolling a student to a specified course
      student =
          service
              .courses()
              .students()
              .create(courseId, student)
              .setEnrollmentCode(enrollmentCode)
              .execute();
      // Prints the course id with the Student name
      System.out.printf(
          "User '%s' was enrolled as a student in the course with ID '%s'.\n",
          student.getProfile().getName().getFullName(), courseId);
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 409) {
        System.out.println("You are already a member of this course.");
      } else if (error.getCode() == 403) {
        System.out.println("The caller does not have permission.\n");
      } else {
        throw e;
      }
    }
    return student;
  }
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Classroom;
use Google\Service\Classroom\Student;
use Google\Service\Exception;

function enrollAsStudent($courseId,$enrollmentCode)
{
    /* Load pre-authorized user credentials from the environment.
    TODO (developer) - See https://developers.google.com/identity for
     guides on implementing OAuth2 for your application. */
    $client = new Client();
    $client->useApplicationDefaultCredentials();
    $client->addScope("https://www.googleapis.com/auth/classroom.profile.emails");
    $service = new Classroom($client);
    $student = new Student([
        'userId' => 'me'
    ]);
    $params = [
        'enrollmentCode' => $enrollmentCode
    ];
    try {
        $student = $service->courses_students->create($courseId, $student, $params);
        printf("User '%s' was enrolled  as a student in the course with ID '%s'.\n",
            $student->profile->name->fullName, $courseId);
    } catch (Exception $e) {
        if ($e->getCode() == 409) {
            print "You are already a member of this course.\n";
        } else {
            throw $e;
        }
    }
    return $student;
}
```

### Python

```
import os

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

SCOPES = ["https://www.googleapis.com/auth/classroom.coursework.students"]

def classroom_add_student_new(course_id):
  """
  Adds a student to a course, the teacher has access to.
  The file token.json stores the user's access and refresh tokens, and is
  created automatically when the authorization flow completes for the first
  time.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity for
   guides on implementing OAuth2 for the application.
  """

  creds = None
  # The file token.json stores the user's access and refresh tokens, and is
  # created automatically when the authorization flow completes for the first
  # time.
  if os.path.exists("token.json"):
    creds = Credentials.from_authorized_user_file("token.json", SCOPES)
  # If there are no (valid) credentials available, let the user log in.
  if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
      creds.refresh(Request())
    else:
      flow = InstalledAppFlow.from_client_secrets_file(
          "credentials.json", SCOPES
      )
      creds = flow.run_local_server(port=0)
    # Save the credentials for the next run
    with open("token.json", "w", encoding="utf8") as token:
      token.write(creds.to_json())

  enrollment_code = "abc-def"
  student = {"userId": "gduser1@workspacesamples.dev"}
  try:
    service = build("classroom", "v1", credentials=creds)
    student = (
        service.courses()
        .students()
        .create(
            courseId=course_id, enrollmentCode=enrollment_code, body=student
        )
        .execute()
    )
    print(
        '''User {%s} was enrolled as a student in
                   the course with ID "{%s}"'''
        % (student.get("profile").get("name").get("fullName"), course_id)
    )
    return student
  except HttpError as error:
    print(error)
    return error

if __name__ == "__main__":
  # Put the course_id of course for which student needs to be added.
  classroom_add_student_new(478800920837)
```

Removing a student from a course using the [`students.delete`](../reference/rest/v1/courses.students/delete.md) method only removes them from the specified course and doesn't affect their enrollment in other courses or their user profile.

## Retrieve a user's courses

To retrieve a list of courses for a student or teacher, call [`courses.list`](../reference/rest/v1/courses/list.md) and supply the corresponding user's `studentId` or `teacherId`.

You can't set both `studentId` and `teacherId` in a single `courses.list()` request. To retrieve a list of courses in which a specific teacher and student are enrolled, make separate `courses.list()` requests for each user. Then, find the intersection of the two sets of results.

## Retrieve a user's profile

To retrieve the profile for a user, including ID and name, call [`userProfiles.get`](../reference/rest/v1/userProfiles/get.md) with the user's ID, email, or "me" for the requesting user. To retrieve the `emailAddress` field, you must include the `classroom.profile.emails` scope.

The `id` returned corresponds to the [Directory API Users resource](../../admin/directory/reference/rest/v1/users.md) containing the matching `studentId` or `teacherId`.

[^1]: A student can only add themselves to a course.

[^2]: A student may only delete themselves from a course.
