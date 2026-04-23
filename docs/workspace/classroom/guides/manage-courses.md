---
source: https://developers.google.com/workspace/classroom/guides/manage-courses
root: workspace
fetched_at: 2026-04-23T15:25:47.638Z
---

# Manage Courses

A [`Course` resource](https://developers.google.com/workspace/classroom/reference/rest/v1/courses) represents a class, such as "MATH 127". It includes fields such as `name`, `ownerId`, and `courseState`. The `Course` resource is the parent resource of many other Classroom API resources.

## Create a course

You can create a course using the [`courses.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/create) method. When you create a course, some fields such as the `name` and `ownerId` are required. You can optionally add metadata such as the `description`, `section`, or `room`.

Each course is assigned a unique ID by Classroom. Courses may also be referenced using an [alias](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.aliases). See the [manage aliases](https://developers.google.com/workspace/classroom/guides/manage-aliases) guide for information on adding project-scoped and domain-scoped aliases to courses.

The following pointers are helpful to keep in mind when creating courses using the Classroom API:

- **Create an alias by setting the course `id` field**:
	- It's recommended that you add an [alias](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.aliases) to the course. When creating a `Course`, you can specify the alias within the `id` field. This automatically creates an alias for the course. You can also add an alias for a course using the [`courses.aliases.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.aliases/create) method.
		- Keep in mind that when reading course data using the [`courses.get()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/get) or [`courses.list()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/list) method, the `id` field returns the Classroom-assigned ID. You can retrieve a list of aliases for a course by making a request to the [`courses.aliases.list()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.aliases/list) method.
- **Only domain administrators can create courses on behalf of other users in their domain**: Any other user receives a `403` error if specifying a user other than themselves in the `ownerId` field.
- **If the `courseState` field isn't specified, it is set to `PROVISIONED` by default**: If the course is in the `PROVISIONED` state, the teacher identified in the `ownerId` field must accept the class in the Classroom UI or the course must be updated through the API to change the `courseState` to `ACTIVE`. `ACTIVE` courses are available to students.
- **Consumer accounts (`*@gmail.com`) cannot create courses in the `ACTIVE` state:** Requests to do so return a `403: PERMISSION_DENIED` error.

The following sample makes a request to the [`courses.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/create) method:

### .NET

```
using Google;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Classroom.v1;
using Google.Apis.Classroom.v1.Data;
using Google.Apis.Services;
using System;

namespace ClassroomSnippets
{   
    // Class to demonstrate the use of Classroom Create Course API
    public class CreateCourse
    {
        /// <summary>
        /// Creates a new course with description.
        /// </summary>
        /// <returns>newly created course</returns>
        public static Course ClassroomCreateCourse()
        {
            try
            {
                /* Load pre-authorized user credentials from the environment.
                 TODO(developer) - See https://developers.google.com/identity for 
                 guides on implementing OAuth2 for your application. */
                GoogleCredential credential = GoogleCredential.GetApplicationDefault()
                    .CreateScoped(ClassroomService.Scope.ClassroomCourses);

                // Create Classroom API service.
                var service = new ClassroomService(new BaseClientService.Initializer
                {
                    HttpClientInitializer = credential,
                    ApplicationName = "Classroom API Snippets"
                });

                // Create a new course with description.
                var course = new Course
                {
                    Name = "10th Grade Biology",
                    Section = "Period 2",
                    DescriptionHeading = "Welcome to 10th Grade Biology",
                    Description = "We'll be learning about about the structure of living creatures "
                                  + "from a combination of textbooks, guest lectures, and lab work. Expect "
                                  + "to be excited!",
                    Room = "301",
                    OwnerId = "me",
                    CourseState = "PROVISIONED"
                };

                course = service.Courses.Create(course).Execute();
                // Prints the new created course Id and name.
                Console.WriteLine("Course created: {0} ({1})", course.Name, course.Id);
                return course;
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
                    Console.WriteLine("OwnerId not specified.");
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

### Apps Script

```
/**
 * Creates 10th Grade Biology Course.
 * @see https://developers.google.com/classroom/reference/rest/v1/courses/create
 * return {string} Id of created course
 */
function createCourse() {
  let course = {
    name: "10th Grade Biology",
    section: "Period 2",
    descriptionHeading: "Welcome to 10th Grade Biology",
    description:
      "We'll be learning about the structure of living creatures from a combination " +
      "of textbooks, guest lectures, and lab work. Expect to be excited!",
    room: "301",
    ownerId: "me",
    courseState: "PROVISIONED",
  };
  try {
    // Create the course using course details.
    course = Classroom.Courses.create(course);
    console.log("Course created: %s (%s)", course.name, course.id);
    return course.id;
  } catch (err) {
    // TODO (developer) - Handle Courses.create() exception
    console.log(
      "Failed to create course %s with an error %s",
      course.name,
      err.message,
    );
  }
}
```

### Go

```
c := &classroom.Course{
    Name:               "10th Grade Biology",
    Section:            "Period 2",
    DescriptionHeading: "Welcome to 10th Grade Biology",
    Description:        "We'll be learning about about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!",
    Room:               "301",
    OwnerId:            "me",
    CourseState:        "PROVISIONED",
}
course, err := srv.Courses.Create(c).Do()
if err != nil {
    log.Fatalf("Course unable to be created %v", err)
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
import com.google.api.services.classroom.model.Course;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;

/* Class to demonstrate the use of Classroom Create Course API */
public class CreateCourse {
  /* Scopes required by this API call. If modifying these scopes, delete your previously saved
  tokens/ folder. */
  static ArrayList<String> SCOPES =
      new ArrayList<>(Arrays.asList(ClassroomScopes.CLASSROOM_COURSES));

  /**
   * Creates a course
   *
   * @return newly created course
   * @throws IOException - if credentials file not found.
   * @throws GeneralSecurityException - if a new instance of NetHttpTransport was not created.
   */
  public static Course createCourse() throws GeneralSecurityException, IOException {

    // Create the classroom API client.
    final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
    Classroom service =
        new Classroom.Builder(
                HTTP_TRANSPORT,
                GsonFactory.getDefaultInstance(),
                ClassroomCredentials.getCredentials(HTTP_TRANSPORT, SCOPES))
            .setApplicationName("Classroom samples")
            .build();

    Course course = null;
    try {
      // Adding a new course with description. Set CourseState to \`ACTIVE\`. Possible values of
      // CourseState can be found here:
      // https://developers.google.com/classroom/reference/rest/v1/courses#coursestate
      course =
          new Course()
              .setName("10th Grade Biology")
              .setSection("Period 2")
              .setDescriptionHeading("Welcome to 10th Grade Biology")
              .setDescription(
                  "We'll be learning about about the structure of living creatures "
                      + "from a combination of textbooks, guest lectures, and lab work. Expect "
                      + "to be excited!")
              .setRoom("301")
              .setOwnerId("me")
              .setCourseState("ACTIVE");
      course = service.courses().create(course).execute();
      // Prints the new created course Id and name
      System.out.printf("Course created: %s (%s)\n", course.getName(), course.getId());
    } catch (GoogleJsonResponseException e) {
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 400) {
        System.err.println("Unable to create course, ownerId not specified.\n");
      } else {
        throw e;
      }
    }
    return course;
  }
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Classroom;
use Google\Service\Classroom\Course;
use Google\Service\Exception;

function createCourse()
{
    /* Load pre-authorized user credentials from the environment.
    TODO(developer) - See https://developers.google.com/identity for
     guides on implementing OAuth2 for your application. */
    $client = new Client();
    $client->useApplicationDefaultCredentials();
    $client->addScope("https://www.googleapis.com/auth/classroom.courses");
    $service = new Classroom($client);
    try {
        $course = new Course([
            'name' => '10th Grade Biology',
            'section' => 'Period 2',
            'descriptionHeading' => 'Welcome to 10th Grade Biology',
            'description' => 'We\'ll be learning about about the structure of living ' .
                'creatures from a combination of textbooks, guest ' .
                'lectures, and lab work. Expect to be excited!',
            'room' => '301',
            'ownerId' => 'me',
            'courseState' => 'PROVISIONED'
        ]);
        $course = $service->courses->create($course);
        printf("Course created: %s (%s)\n", $course->name, $course->id);
        return $course;
    } catch (Exception $e) {
        echo 'Message: ' . $e->getMessage();
    }
}
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def classroom_create_course():
  """
  Creates the courses the user has access to.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """

  creds, _ = google.auth.default()
  # pylint: disable=maybe-no-member

  try:
    service = build("classroom", "v1", credentials=creds)
    course = {
        "name": "10th Grade Mathematics Probability-2",
        "section": "Period 3",
        "descriptionHeading": "Welcome to 10th Grade Mathematics",
        "description": """We'll be learning about about the
                                 polynomials from a
                                 combination of textbooks and guest lectures.
                                 Expect to be excited!""",
        "room": "302",
        "ownerId": "me",
        "courseState": "PROVISIONED",
    }
    # pylint: disable=maybe-no-member
    course = service.courses().create(body=course).execute()
    print(f"Course created:  {(course.get('name'), course.get('id'))}")
    return course

  except HttpError as error:
    print(f"An error occurred: {error}")
    return error

if __name__ == "__main__":
  classroom_create_course()
```

## Retrieve course details

You can retrieve a single course's metadata with the [`courses.get()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/get) method, as shown in the following sample:

### .NET

```
using Google;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Classroom.v1;
using Google.Apis.Classroom.v1.Data;
using Google.Apis.Services;
using System;

namespace ClassroomSnippets
{
    // Class to demonstrate the use of Classroom Get Course API
    public class GetCourse
    {
        /// <summary>
        /// Retrieve a single course's metadata.
        /// </summary>
        /// <param name="courseId">Id of the course.</param>
        /// <returns>a course, null otherwise.</returns>
        public static Course ClassroomGetCourse(string courseId)
        {
            try
            {
                /* Load pre-authorized user credentials from the environment.
                 TODO(developer) - See https://developers.google.com/identity for 
                 guides on implementing OAuth2 for your application. */
                GoogleCredential credential = GoogleCredential.GetApplicationDefault()
                    .CreateScoped(ClassroomService.Scope.ClassroomCourses);

                // Create Classroom API service.
                var service = new ClassroomService(new BaseClientService.Initializer
                {
                    HttpClientInitializer = credential,
                    ApplicationName = "Classroom Snippets"
                });

                // Get the course details using course id
                Course course = service.Courses.Get(courseId).Execute();
                Console.WriteLine("Course '{0}' found.\n", course.Name);
                return course;
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
                    Console.WriteLine("Course does not exist.");
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

### Apps Script

```
/**
 * Retrieves course by id.
 * @param {string} courseId
 * @see https://developers.google.com/classroom/reference/rest/v1/courses/get
 */
function getCourse(courseId) {
  try {
    // Get the course details using course id
    const course = Classroom.Courses.get(courseId);
    console.log('Course "%s" found. ', course.name);
  } catch (err) {
    // TODO (developer) - Handle Courses.get() exception of Handle Classroom API
    console.log(
      "Failed to found course %s with error %s ",
      courseId,
      err.message,
    );
  }
}
```

### Go

```
ctx := context.Background()
srv, err := classroom.NewService(ctx, option.WithHTTPClient(client))
if err != nil {
    log.Fatalf("Unable to create classroom Client %v", err)
}
id := "123456"
course, err := srv.Courses.Get(id).Do()
if err != nil {
    log.Fatalf("Course unable to be retrieved %v", err)
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
import com.google.api.services.classroom.model.Course;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;

/* Class to demonstrate the use of Classroom Get Course API */
public class GetCourse {

  /* Scopes required by this API call. If modifying these scopes, delete your previously saved
  tokens/ folder. */
  static ArrayList<String> SCOPES =
      new ArrayList<>(Arrays.asList(ClassroomScopes.CLASSROOM_COURSES));

  /**
   * Retrieve a single course's metadata.
   *
   * @param courseId - Id of the course to return.
   * @return a course
   * @throws IOException - if credentials file not found.
   * @throws GeneralSecurityException - if a new instance of NetHttpTransport was not created.
   */
  public static Course getCourse(String courseId) throws GeneralSecurityException, IOException {

    // Create the classroom API client.
    final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
    Classroom service =
        new Classroom.Builder(
                HTTP_TRANSPORT,
                GsonFactory.getDefaultInstance(),
                ClassroomCredentials.getCredentials(HTTP_TRANSPORT, SCOPES))
            .setApplicationName("Classroom samples")
            .build();

    Course course = null;
    try {
      course = service.courses().get(courseId).execute();
      System.out.printf("Course '%s' found.\n", course.getName());
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 404) {
        System.out.printf("Course with ID '%s' not found.\n", courseId);
      } else {
        throw e;
      }
    }
    return course;
  }
}
```

### PHP

```
<?php
use Google\Client;
use Google\Service\Classroom;
use Google\Service\Exception;

function getCourse($courseId)
{
    /* Load pre-authorized user credentials from the environment.
    TODO (developer) - See https://developers.google.com/identity for
     guides on implementing OAuth2 for your application. */
    $client = new Client();
    $client->useApplicationDefaultCredentials();
    $client->addScope("https://www.googleapis.com/auth/classroom.courses");
    $service = new Classroom($client);
    try {
        $course = $service->courses->get($courseId);
        printf("Course '%s' found.\n", $course->name);
        return $course;
    } catch (Exception $e) {
        if ($e->getCode() == 404) {
            printf("Course with ID '%s' not found.\n", $courseId);
        } else {
            throw $e;
        }
    }
}
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def classroom_get_course(course_id):
  """
  Prints the name of the with specific course_id.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """

  creds, _ = google.auth.default()
  # pylint: disable=maybe-no-member
  course = None
  try:
    service = build("classroom", "v1", credentials=creds)
    course = service.courses().get(id=course_id).execute()
    print(f"Course found : {course.get('name')}")
  except HttpError as error:
    print(f"An error occurred: {error}")
    print(f"Course not found: {course_id}")
    return error
  return course

if __name__ == "__main__":
  # Put the course_id of course whose information needs to be fetched.
  classroom_get_course("course_id")
```

For a list of courses, use the [`courses.list()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/list), as shown in the following sample:

### .NET

```
using Google.Apis.Auth.OAuth2;
using Google.Apis.Classroom.v1;
using Google.Apis.Classroom.v1.Data;
using Google.Apis.Services;
using System;
using System.Collections.Generic;

namespace ClassroomSnippets
{
    // Class to demonstrate the use of Classroom List Course API
    public class ListCourses
    {
        /// <summary>
        /// Retrieves all courses with metadata.
        /// </summary>
        /// <returns>list of courses with its metadata, null otherwise.</returns>
        public static List<Course> ClassroomListCourses()
        {
            try
            {
                /* Load pre-authorized user credentials from the environment.
                 TODO(developer) - See https://developers.google.com/identity for 
                 guides on implementing OAuth2 for your application. */
                GoogleCredential credential = GoogleCredential.GetApplicationDefault()
                    .CreateScoped(ClassroomService.Scope.ClassroomCourses);

                // Create Classroom API service.
                var service = new ClassroomService(new BaseClientService.Initializer
                {
                    HttpClientInitializer = credential,
                    ApplicationName = "Classroom Snippets"
                });

                string pageToken = null;
                var courses = new List<Course>();

                do
                {
                    var request = service.Courses.List();
                    request.PageSize = 100;
                    request.PageToken = pageToken;
                    var response = request.Execute();
                    courses.AddRange(response.Courses);
                    pageToken = response.NextPageToken;
                } while (pageToken != null);

                Console.WriteLine("Courses:");
                foreach (var course in courses)
                {
                    // Print the courses available in classroom
                    Console.WriteLine("{0} ({1})", course.Name, course.Id);
                } 
                return courses;
            }
            catch (Exception e)
            {
                // TODO(developer) - handle error appropriately
                if (e is AggregateException)
                {
                    Console.WriteLine("Credential Not found");
                }
                else if (e is ArgumentNullException)
                {
                    Console.WriteLine("No courses found.");
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

### Apps Script

```
/**
 * Lists all course names and ids.
 * @see https://developers.google.com/classroom/reference/rest/v1/courses/list
 */
function listCourses() {
  let courses = [];
  const pageToken = null;
  const optionalArgs = {
    pageToken: pageToken,
    pageSize: 100,
  };
  try {
    const response = Classroom.Courses.list(optionalArgs);
    courses = response.courses;
    if (courses.length === 0) {
      console.log("No courses found.");
      return;
    }
    // Print the courses available in classroom
    console.log("Courses:");
    for (const course in courses) {
      console.log("%s (%s)", courses[course].name, courses[course].id);
    }
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log("Failed with error %s", err.message);
  }
}
```

### Java

```
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.classroom.Classroom;
import com.google.api.services.classroom.ClassroomScopes;
import com.google.api.services.classroom.model.Course;
import com.google.api.services.classroom.model.ListCoursesResponse;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/* Class to demonstrate the use of Classroom List Course API */
public class ListCourses {

  /* Scopes required by this API call. If modifying these scopes, delete your previously saved
  tokens/ folder. */
  static ArrayList<String> SCOPES =
      new ArrayList<>(Arrays.asList(ClassroomScopes.CLASSROOM_COURSES));

  /**
   * Retrieves all courses with metadata
   *
   * @return list of courses with its metadata
   * @throws IOException - if credentials file not found.
   * @throws GeneralSecurityException - if a new instance of NetHttpTransport was not created.
   */
  public static List<Course> listCourses() throws GeneralSecurityException, IOException {

    // Create the classroom API client.
    final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
    Classroom service =
        new Classroom.Builder(
                HTTP_TRANSPORT,
                GsonFactory.getDefaultInstance(),
                ClassroomCredentials.getCredentials(HTTP_TRANSPORT, SCOPES))
            .setApplicationName("Classroom samples")
            .build();

    String pageToken = null;
    List<Course> courses = new ArrayList<>();

    try {
      do {
        ListCoursesResponse response =
            service.courses().list().setPageSize(100).setPageToken(pageToken).execute();
        courses.addAll(response.getCourses());
        pageToken = response.getNextPageToken();
      } while (pageToken != null);

      if (courses.isEmpty()) {
        System.out.println("No courses found.");
      } else {
        System.out.println("Courses:");
        for (Course course : courses) {
          System.out.printf("%s (%s)\n", course.getName(), course.getId());
        }
      }
    } catch (NullPointerException ne) {
      // TODO(developer) - handle error appropriately
      System.err.println("No courses found.\n");
    }
    return courses;
  }
}
```

### PHP

```
<?php
use Google\Service\Classroom;
use Google\Client;

function listCourses(): array
{
    /* Load pre-authorized user credentials from the environment.
    TODO (developer) - See https://developers.google.com/identity for
     guides on implementing OAuth2 for your application. */
    $client = new Client();
    $client->useApplicationDefaultCredentials();
    $client->addScope("https://www.googleapis.com/auth/classroom.courses");
    $service = new Classroom($client);
    $courses = [];
    $pageToken = '';

    do {
        $params = [
            'pageSize' => 100,
            'pageToken' => $pageToken
        ];
        $response = $service->courses->listCourses($params);
        $courses = array_merge($courses, $response->courses);
        $pageToken = $response->nextPageToken;
    } while (!empty($pageToken));

    if (count($courses) == 0) {
        print "No courses found.\n";
    } else {
        print "Courses:\n";
        foreach ($courses as $course) {
            printf("%s (%s)\n", $course->name, $course->id);
        }
    }
    return $courses;
}
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def classroom_list_courses():
  """
  Prints the list of the courses the user has access to.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """

  creds, _ = google.auth.default()
  try:
    service = build("classroom", "v1", credentials=creds)
    courses = []
    page_token = None

    while True:
      # pylint: disable=maybe-no-member
      response = (
          service.courses().list(pageToken=page_token, pageSize=100).execute()
      )
      courses.extend(response.get("courses", []))
      page_token = response.get("nextPageToken", None)
      if not page_token:
        break

    if not courses:
      print("No courses found.")
      return
    print("Courses:")
    for course in courses:
      print(f"{course.get('name'), course.get('id')}")
    return courses
  except HttpError as error:
    print(f"An error occurred: {error}")
    return error

if __name__ == "__main__":
  print("Courses available are-------")
  classroom_list_courses()
```

You can also list courses filtered for a specific teacher or student. For more information, see [Retrieve courses for a user](https://developers.google.com/workspace/classroom/guides/manage-users#user-courses).

## Update course information

The Classroom API lets you update some course metadata after the course is created. Updating course information can be important when managing deleted users in a domain. For example, if a domain administrator must delete a teacher's account in the Google Admin console, they should transfer ownership of the course before doing so. This minimizes the risk of losing access to the course.

The following fields can be updated any time after the course is created:

- `name`
- `section`
- `descriptionHeading`
- `description`
- `room`
- `courseState`
- `ownerId`

To update all fields in a course, use the [`courses.update()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/update) method, as shown in the following sample:

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
    // Class to demonstrate the use of Classroom Update Course API
    public class UpdateCourse
    {
        /// <summary>
        /// Update one field of course 
        /// </summary>
        /// <param name="courseId"></param>
        /// <returns></returns>
        /// <exception cref="GoogleApiException"></exception>
        public static Course ClassroomUpdateCourse(string courseId)
        {
            try
            {
                /* Load pre-authorized user credentials from the environment.
                 TODO(developer) - See https://developers.google.com/identity for 
                 guides on implementing OAuth2 for your application. */
                GoogleCredential credential = GoogleCredential.GetApplicationDefault()
                    .CreateScoped(ClassroomService.Scope.ClassroomCourses);

                // Create Classroom API service.
                var service = new ClassroomService(new BaseClientService.Initializer
                {
                    HttpClientInitializer = credential,
                    ApplicationName = "Classroom API Snippet"
                });

                Course course = service.Courses.Get(courseId).Execute();
                course.Section = "Period 3";
                course.Room = "302";
                course = service.Courses.Update(course, courseId).Execute();
                Console.WriteLine("Course '{0}' updated.\n", course.Name);
                return course;
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
                    Console.WriteLine("Failed to update the course. Error message: {0}", e.Message);
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

### Apps Script

```
/**
 * Updates the section and room of Google Classroom.
 * @param {string} courseId
 * @see https://developers.google.com/classroom/reference/rest/v1/courses/update
 */
function courseUpdate(courseId) {
  try {
    // Get the course using course ID
    let course = Classroom.Courses.get(courseId);
    course.section = "Period 3";
    course.room = "302";
    // Update the course
    course = Classroom.Courses.update(course, courseId);
    console.log('Course "%s" updated.', course.name);
  } catch (e) {
    // TODO (developer) - Handle exception
    console.log("Failed to update the course with error %s", e.message);
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
import com.google.api.services.classroom.model.Course;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;

/* Class to demonstrate the use of Classroom Update Course API */
public class UpdateCourse {

  /* Scopes required by this API call. If modifying these scopes, delete your previously saved
  tokens/ folder. */
  static ArrayList<String> SCOPES =
      new ArrayList<>(Arrays.asList(ClassroomScopes.CLASSROOM_COURSES));
  /**
   * Updates a course's metadata.
   *
   * @param courseId - Id of the course to update.
   * @return updated course
   * @throws IOException - if credentials file not found.
   * @throws GeneralSecurityException - if a new instance of NetHttpTransport was not created.
   */
  public static Course updateCourse(String courseId) throws GeneralSecurityException, IOException {

    // Create the classroom API client.
    final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
    Classroom service =
        new Classroom.Builder(
                HTTP_TRANSPORT,
                GsonFactory.getDefaultInstance(),
                ClassroomCredentials.getCredentials(HTTP_TRANSPORT, SCOPES))
            .setApplicationName("Classroom samples")
            .build();

    Course course = null;
    try {
      // Updating the section and room in a course
      course = service.courses().get(courseId).execute();
      course.setSection("Period 3");
      course.setRoom("302");
      course = service.courses().update(courseId, course).execute();
      // Prints the updated course
      System.out.printf("Course '%s' updated.\n", course.getName());
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 404) {
        System.err.println("Course does not exist.\n");
      } else {
        throw e;
      }
    }
    return course;
  }
}
```

### PHP

```
<?php

use Google\Client;
use Google\Service\Classroom;

function updateCourse($courseId)
{
    /* Load pre-authorized user credentials from the environment.
    TODO (developer) - See https://developers.google.com/identity for
     guides on implementing OAuth2 for your application. */
    $client = new Client();
    $client->useApplicationDefaultCredentials();
    $client->addScope("https://www.googleapis.com/auth/classroom.courses");
    $service = new Classroom($client);
    $course = $service->courses->get($courseId);
    $course->section = 'Period 3';
    $course->room = '302';
    $course = $service->courses->update($courseId, $course);
    printf("Course '%s' updated.\n", $course->name);
    return $course;
}
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def classroom_update_course(course_id):
  """
  Updates the courses names the user has access to.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  # pylint: disable=maybe-no-member

  creds, _ = google.auth.default()

  try:
    service = build("classroom", "v1", credentials=creds)

    # Updates the section and room of Google Classroom.
    course = service.courses().get(id=course_id).execute()
    course["name"] = "10th Grade Physics - Light"
    course["section"] = "Period 4"
    course["room"] = "410"
    course = service.courses().update(id=course_id, body=course).execute()
    print(f" Updated Course is:  {course.get('name')}")
    return course

  except HttpError as error:
    print(f"An error occurred: {error}")
    return error

if __name__ == "__main__":
  # Put the course_id of course whose course needs to be updated.
  classroom_update_course("course_id")
```

You can also update specific fields using the [`courses.patch()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/patch) method, as shown in the following sample:

### .NET

```
using Google.Apis.Auth.OAuth2;
using Google.Apis.Classroom.v1;
using Google.Apis.Classroom.v1.Data;
using Google.Apis.Services;
using System;
using Google;

namespace ClassroomSnippets
{
    // Class to demonstrate the use of Classroom Patch Course API
    public class PatchUpdate
    {
        /// <summary>
        /// Updates one or more fields in a course.
        /// </summary>
        /// <param name="courseId"></param>
        /// <returns></returns>
        /// <exception cref="GoogleApiException"></exception>
        public static Course ClassroomPatchUpdate(string courseId)
        {
            try
            {
                /* Load pre-authorized user credentials from the environment.
                 TODO(developer) - See https://developers.google.com/identity for 
                 guides on implementing OAuth2 for your application. */
                GoogleCredential credential = GoogleCredential.GetApplicationDefault()
                    .CreateScoped(ClassroomService.Scope.ClassroomCourses);

                // Create Classroom API service.
                var service = new ClassroomService(new BaseClientService.Initializer
                {
                    HttpClientInitializer = credential,
                    ApplicationName = "Classroom API Snippet"
                });

                var course = new Course
                {
                    Section = "Period 3",
                    Room = "302"
                };
                // Updates one or more fields of course.
                var request = service.Courses.Patch(course, courseId);
                request.UpdateMask = "section,room";
                course = request.Execute();
                Console.WriteLine("Course '{0}' updated.\n", course.Name);
                return course;
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
                    Console.WriteLine("Failed to update the course. Error message: {0}", e.Message);
                }
                else
                {
                    throw ;
                }
            }

            return null;

        }
    }
}
```

### Apps Script

```
/**
 * Updates the section and room of Google Classroom.
 * @param {string} courseId
 * @see https://developers.google.com/classroom/reference/rest/v1/courses/patch
 */
function coursePatch(courseId) {
  const course = {
    section: "Period 3",
    room: "302",
  };
  const options = {
    updateMask: "section,room",
  };
  // Update section and room in course.
  const updatedCourse = Classroom.Courses.patch(course, courseId, options);
  console.log(\`Course "${updatedCourse.name}" updated.\`);
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
import com.google.api.services.classroom.model.Course;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;

/* Class to demonstrate the use of Classroom Patch Course API */
public class PatchCourse {

  /* Scopes required by this API call. If modifying these scopes, delete your previously saved
  tokens/ folder. */
  static ArrayList<String> SCOPES =
      new ArrayList<>(Arrays.asList(ClassroomScopes.CLASSROOM_COURSES));

  /**
   * Updates one or more fields in a course.
   *
   * @param courseId - Id of the course to update.
   * @return updated course
   * @throws IOException - if credentials file not found.
   * @throws GeneralSecurityException - if a new instance of NetHttpTransport was not created.
   */
  public static Course patchCourse(String courseId) throws GeneralSecurityException, IOException {

    // Create the classroom API client.
    final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
    Classroom service =
        new Classroom.Builder(
                HTTP_TRANSPORT,
                GsonFactory.getDefaultInstance(),
                ClassroomCredentials.getCredentials(HTTP_TRANSPORT, SCOPES))
            .setApplicationName("Classroom samples")
            .build();

    Course course = null;
    try {
      course = new Course().setSection("Period 3").setRoom("302");
      course = service.courses().patch(courseId, course).setUpdateMask("section,room").execute();
      System.out.printf("Course '%s' updated.\n", course.getName());
    } catch (GoogleJsonResponseException e) {
      // TODO(developer) - handle error appropriately
      GoogleJsonError error = e.getDetails();
      if (error.getCode() == 404) {
        System.err.println("Course does not exist.\n");
      } else {
        throw e;
      }
    }
    return course;
  }
}
```

### PHP

```
<?php
use Google\Service\Classroom;
use Google\Service\Classroom\Course;
use Google\Client;

function patchCourse($courseId)
{
    /* Load pre-authorized user credentials from the environment.
    TODO (developer) - See https://developers.google.com/identity for
     guides on implementing OAuth2 for your application. */
    $client = new Client();
    $client->useApplicationDefaultCredentials();
    $client->addScope("https://www.googleapis.com/auth/classroom.courses");
    $service = new Classroom($client);

    try {
        $course = new Course([
            'section' => 'Period 3',
            'room' => '302'
        ]);
        $params = ['updateMask' => 'section,room'];
        $course = $service->courses->patch($courseId, $course, $params);
        printf("Course '%s' updated.\n", $course->name);
        return $course;
    } catch (Exception $e) {
        echo 'Message: ' . $e->getMessage();
    }
}
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def classroom_patch_course(course_id):
  """
  Patch new course with existing course in the account the user has access to.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  # pylint: disable=maybe-no-member

  creds, _ = google.auth.default()

  try:
    service = build("classroom", "v1", credentials=creds)
    course = {"section": "Period 3", "room": "313"}
    course = (
        service.courses()
        .patch(id=course_id, updateMask="section,room", body=course)
        .execute()
    )
    print(f" Course updated are: {course.get('name')}")
    return course
  except HttpError as error:
    print(f"An error occurred: {error}")

if __name__ == "__main__":
  # Put the course_id of course with whom we need to patch some extra
  # information.
  classroom_patch_course("course_id")
```

### Update the course owner

Domain administrators can use the [`courses.patch()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/patch) method to update the `ownerId` field and transfer ownership of a course to a new teacher within their domain. If the new teacher is not already a co-teacher, make a request to the [`teachers.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.teachers/create) method to add them to the course before updating the `ownerId` field.
