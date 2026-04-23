---
source: https://developers.google.com/workspace/classroom/guides/manage-aliases
root: workspace
fetched_at: 2026-04-23T15:25:46.269Z
---

# Manage course aliases

You can reference courses by a different name using a [course alias](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.aliases). Course aliases can serve as a mapping between Google Classroom course identifiers and external course identifiers. For example, you can set a course alias to match the course ID from a Student Information System (SIS).

The course alias has two forms: domain-wide and project-wide.

- **Domain-wide aliases** use the prefix of `d:` and can be seen by anyone using the Classroom API. The domain namespace is useful for creating aliases that all users need access to, but that are not specific to any one program. For example, alternate listings for a course, such as MATH 127 and COMSCI 127, should be created in the domain namespace. Aliases in the domain namespace may only be created by domain administrators, but are visible to all users in a domain.
- **Project-wide aliases** use a prefix of `p:` and can only be seen and used by the Google Cloud project that created them. The developer project namespace is useful for managing aliases specific to an application. For example, an application that uses alternate identifiers for courses can create aliases to map its identifier to Classroom courses. Aliases created in this namespace are tied to a specific Google Cloud project. Any user of an application can create and view aliases in the namespace for that application's developer project.

A course alias can be used in place of the Classroom course ID for any Classroom API endpoint. This means that the alias can be used to read and modify courses and roster information.

## Use an alias for synchronization with Student Information Systems

The SIS internal identifier for a course can be registered as a domain-wide alias for the course. That way, any developer who integrates with both the SIS and Classroom can use the SIS identifier to interact with Classroom data.

**If you create a course from a SIS or link a course to a SIS, it's recommended that the SIS's course ID is used as the course alias.** When creating a course using the [`courses.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/create) method, you can specify the alias in the `id` field of the request. If the alias already exists, course creation fails with a `409 ALREADY_EXISTS` error. This prevents the creation of duplicate courses if there is an issue in the sync program.

For example, if we assume the SIS name is `school` and the internal identifier used by the SIS for a particular course is `math_101`, you can create an alias as `d:school_math_101`.

## Add an alias for a new course

To add an alias for a new course, set `course.id` to an alias when making the [`courses.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses/create) request.

### Apps Script

```
/**
 * Creates Course with an alias specified
 */
function createAlias() {
  let course = {
    id: "p:bio_101",
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

### Java

```
Course course = null;

/* Create a new Course with the alias set as the id field. Project-wide aliases use a prefix
of "p:" and can only be seen and used by the application that created them. */
Course content =
    new Course()
        .setId("p:history_4_2022")
        .setName("9th Grade History")
        .setSection("Period 4")
        .setDescriptionHeading("Welcome to 9th Grade History.")
        .setOwnerId("me")
        .setCourseState("PROVISIONED");

try {
  course = service.courses().create(content).execute();
  // Prints the new created course id and name
  System.out.printf("Course created: %s (%s)\n", course.getName(), course.getId());
} catch (GoogleJsonResponseException e) {
  // TODO (developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 409) {
    System.out.printf("The course alias already exists: %s.\n", content.getId());
  } else {
    throw e;
  }
} catch (Exception e) {
  throw e;
}
return course;
```

### Python

```
SCOPES = ["https://www.googleapis.com/auth/classroom.courses"]

def classroom_add_alias_new():
  """
  Creates a course with alias specification the user has access to.
  The file token.json stores the user's access and refresh tokens, and is
  created automatically when the authorization flow completes for
  the first time.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity for
   guides on implementing OAuth2 for the application.
  """
  # pylint: disable=maybe-no-member
  creds = None
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

  alias = "d:school_physics_333"
  course = {
      "id": alias,
      "name": "English",
      "section": "Period 2",
      "description": "Course Description",
      "room": "301",
      "ownerId": "me",
  }
  try:
    print("-------------")
    service = build("classroom", "v1", credentials=creds)
    course = service.courses().create(body=course).execute()
    print("====================================")

  except HttpError as error:
    print(f"An error occurred: {error}")
  return course

if __name__ == "__main__":
  # pylint: disable=too-many-arguments
  # Put the course_id of course whose alias needs to be created.
  classroom_add_alias_new()
```

## Add an alias for an existing course

To add the alias on an **existing** course, you can set the `alias` field and use the [`courses.aliases.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.aliases/create) method.

### Apps Script

```
/**
 * Updates the section and room of Google Classroom.
 * @param {string} course_id
 * @see https://developers.google.com/classroom/reference/rest/v1/courses.aliases/create
 */
function addAlias(course_id) {
  const alias = {
    alias: "p:bio_101",
  };
  try {
    const course_alias = Classroom.Courses.Aliases.create(alias, course_id);
    console.log("%s successfully added as an alias!", course_alias.alias);
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log(
      "Request to add alias %s failed with error %s.",
      alias.alias,
      err.message,
    );
  }
}
```

### Java

```
/* Create a new CourseAlias object with a project-wide alias. Project-wide aliases use a prefix
of "p:" and can only be seen and used by the application that created them. */
CourseAlias content = new CourseAlias().setAlias("p:biology_10");
CourseAlias courseAlias = null;

try {
  courseAlias = service.courses().aliases().create(courseId, content).execute();
  System.out.printf("Course alias created: %s \n", courseAlias.getAlias());
} catch (GoogleJsonResponseException e) {
  // TODO (developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 409) {
    System.out.printf("The course alias already exists: %s.\n", content);
  } else {
    throw e;
  }
} catch (Exception e) {
  throw e;
}
return courseAlias;
```

### Python

```
def classroom_add_alias_existing(course_id):
  """
  Adds alias to existing course with specific course_id.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """
  creds, _ = google.auth.default()
  # pylint: disable=maybe-no-member
  service = build("classroom", "v1", credentials=creds)
  alias = "d:school_math_101"
  course_alias = {"alias": alias}
  try:
    course_alias = (
        service.courses()
        .aliases()
        .create(courseId=course_id, body=course_alias)
        .execute()
    )
    return course_alias
  except HttpError as error:
    print(f"An error occurred: {error}")
    print("Alias Creation Failed")
  return course_alias

if __name__ == "__main__":
  # Put the course_id of course whose alias needs to be added.
  classroom_add_alias_existing(456058313539)
```

## Retrieve course aliases

You can retrieve the aliases for a course using the [`courses.aliases.list()`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.aliases/list) method, as shown in the following sample:

### .NET

```
using System;
using System.Collections.Generic;
using Google;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Classroom.v1;
using Google.Apis.Classroom.v1.Data;
using Google.Apis.Services;

namespace ClassroomSnippets
{
    // Class to demonstrate the use of Classroom List Alias API
    public class ListCourseAliases
    {
        /// <summary>
        /// Retrieve the aliases for a course.
        /// </summary>
        /// <param name="courseId">Id of the course.</param>
        /// <returns>list of course aliases, null otherwise.</returns>
        public static List<CourseAlias> ClassroomListAliases(string courseId)
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
                var courseAliases = new List<CourseAlias>();

                do
                {
                    // List of aliases of specified course
                    var request = service.Courses.Aliases.List(courseId);
                    request.PageSize = 100;
                    request.PageToken = pageToken;
                    var response = request.Execute();
                    courseAliases.AddRange(response.Aliases);
                    pageToken = response.NextPageToken;
                } while (pageToken != null);

                if (courseAliases.Count == 0)
                {
                    Console.WriteLine("No aliases found.");
                }
                else
                {
                    Console.WriteLine("Aliases:");
                    foreach (var courseAlias in courseAliases)
                    {
                        Console.WriteLine(courseAlias.Alias);
                    }
                }
                return courseAliases;
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

### Java

```
String pageToken = null;
List<CourseAlias> courseAliases = new ArrayList<>();

try {
  // List of aliases of specified course
  do {
    ListCourseAliasesResponse response =
        service
            .courses()
            .aliases()
            .list(courseId)
            .setPageSize(100)
            .setPageToken(pageToken)
            .execute();
    courseAliases.addAll(response.getAliases());
    pageToken = response.getNextPageToken();
  } while (pageToken != null);

  if (courseAliases.isEmpty()) {
    System.out.println("No aliases found.");
  } else {
    System.out.println("Aliases:");
    for (CourseAlias courseAlias : courseAliases) {
      System.out.println(courseAlias.getAlias());
    }
  }
} catch (GoogleJsonResponseException e) {
  // TODO(developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.err.println("Course does not exist.\n");
  } else {
    throw e;
  }
}
return courseAliases;
```

### Python

```
import google.auth
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def classroom_list_course_aliases(course_id):
  """
  Prints the list of the aliases of a specified course the user has access to.
  Load pre-authorized user credentials from the environment.
  TODO(developer) - See https://developers.google.com/identity
  for guides on implementing OAuth2 for the application.
  """

  creds, _ = google.auth.default()
  try:
    service = build("classroom", "v1", credentials=creds)
    course_aliases = []
    page_token = None

    while True:
      response = (
          service.courses()
          .aliases()
          .list(pageToken=page_token, courseId=course_id)
          .execute()
      )
      course_aliases.extend(response.get("aliases", []))
      page_token = response.get("nextPageToken", None)
      if not page_token:
        break

    if not course_aliases:
      print("No course aliases found.")

    print("Course aliases:")
    for course_alias in course_aliases:
      print(f"{course_alias.get('alias')}")
    return course_aliases
  except HttpError as error:
    print(f"An error occurred: {error}")
    return error

if __name__ == "__main__":
  classroom_list_course_aliases("course_id")
```
