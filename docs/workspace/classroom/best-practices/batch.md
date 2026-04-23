---
source: https://developers.google.com/workspace/classroom/best-practices/batch
root: workspace
fetched_at: 2026-04-23T15:25:43.822Z
---

# Batching Requests

This document shows how to batch API calls together to reduce the number of HTTP connections your client has to make.

This document is specifically about making a batch request by sending an HTTP request. If, instead, you're using a Google client library to make a batch request, see the [client library's documentation](https://developers.google.com/api-client-library/).

## Overview

Each HTTP connection your client makes results in a certain amount of overhead. The Google Classroom API supports batching, to allow your client to put several API calls into a single HTTP request.

Examples of situations when you might want to use batching:

- Retrieving rosters for a large number of courses.
- Creating or updating courses in bulk.
- Adding a large number of course rosters.
- Retrieving course lists for a large number of users.

In each case, instead of sending each call separately, you can group them together into a single HTTP request. All the inner requests must go to the same Google API.

You're limited to 50 calls in a single batch request. If you must make more calls than that, use multiple batch requests.

**Note**: The batch system for the Google Classroom API uses the same syntax as the [OData batch processing](http://www.odata.org/documentation/odata-version-3-0/batch-processing/) system, but the semantics differ.

## Batch details

A batch request consists of multiple API calls combined into one HTTP request, which can be sent to the `batchPath` specified in the [API discovery document](https://developers.google.com/discovery/v1/reference/apis). The default path is `/batch/api_name/api_version`. This section describes the batch syntax in detail; later, there's an [example](#example).

**Note**: A set of n requests batched together counts toward your usage limit as n requests, not as one request. The batch request is separated into a set of requests before processing.

### Format of a batch request

A batch request is a single standard HTTP request containing multiple Google Classroom API calls, using the `multipart/mixed` content type. Within that main HTTP request, each of the parts contains a nested HTTP request.

Each part begins with its own `Content-Type: application/http` HTTP header. It can also have an optional `Content-ID` header. However, the part headers are just there to mark the beginning of the part; they're separate from the nested request. After the server unwraps the batch request into separate requests, the part headers are ignored.

The body of each part is a complete HTTP request, with its own verb, URL, headers, and body. The HTTP request must only contain the path portion of the URL; full URLs are not allowed in batch requests.

The HTTP headers for the outer batch request, except for the `Content-` headers such as `Content-Type`, apply to every request in the batch. If you specify a given HTTP header in both the outer request and an individual call, then the individual call header's value overrides the outer batch request header's value. The headers for an individual call apply only to that call.

For example, if you provide an Authorization header for a specific call, then that header applies only to that call. If you provide an Authorization header for the outer request, then that header applies to all of the individual calls unless they override it with Authorization headers of their own.

When the server receives the batched request, it applies the outer request's query parameters and headers (as appropriate) to each part, and then treats each part as if it were a separate HTTP request.

### Response to a batch request

The server's response is a single standard HTTP response with a `multipart/mixed` content type; each part is the response to one of the requests in the batched request, in the same order as the requests.

Like the parts in the request, each response part contains a complete HTTP response, including a status code, headers, and body. And like the parts in the request, each response part is preceded by a `Content-Type` header that marks the beginning of the part.

If a given part of the request had a `Content-ID` header, then the corresponding part of the response has a matching `Content-ID` header, with the original value preceded by the string `response-`, as shown in the following example.

**Note**: The server might perform your calls in any order. Don't count on their being executed in the order in which you specified them. If you want to ensure that two calls occur in a given order, you can't send them in a single request; instead, send the first one by itself, then wait for the response to the first one before sending the second one.

## Example

The following example shows the use of batching with the Google Classroom API.

### Example batch request

```
POST https://classroom.googleapis.com/batch HTTP/1.1
Authorization: Bearer your_auth_token
Content-Type: multipart/mixed; boundary=batch_foobarbaz
Content-Length: total_content_length

--batch_foobarbaz
Content-Type: application/http
Content-Transfer-Encoding: binary
MIME-Version: 1.0
Content-ID: <item1:12930812@classroom.example.com>

PATCH /v1/courses/134529639?updateMask=name HTTP/1.1
Content-Type: application/json; charset=UTF-8
Authorization: Bearer your_auth_token

{
  "name": "Course 1"
}
--batch_foobarbaz
Content-Type: application/http
Content-Transfer-Encoding: binary
MIME-Version: 1.0
Content-ID: <item2:12930812@classroom.example.com>

PATCH /v1/courses/134529901?updateMask=section HTTP/1.1
Content-Type: application/json; charset=UTF-8
Authorization: Bearer your_auth_token
{
  "section": "Section 2"
}
--batch_foobarbaz--
```

### Example batch response

This is the response to the example request in the previous section.

```
HTTP/1.1 200
Content-Length: response_total_content_length
Content-Type: multipart/mixed; boundary=batch_foobarbaz

--batch_foobarbaz
Content-Type: application/http
Content-ID: <response-item1:12930812@classroom.example.com>

HTTP/1.1 200 OK
Content-Type application/json
Content-Length: response_part_1_content_length

{
  "id": "134529639",
  "name": "Course 1",
  "section": "Section 1",
  "ownerId": "116269102540619633451",
  "creationTime": "2015-06-25T14:23:56.535Z",
  "updateTime": "2015-06-25T14:33:06.583Z",
  "enrollmentCode": "6paeflo",
  "courseState": "PROVISIONED",
  "alternateLink": "http://classroom.google.com/c/MTM0NTI5NjM5"
}
--batch_foobarbaz
Content-Type: application/http
Content-ID: <response-item2:12930812@classroom.example.com>

HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: response_part_2_content_length

{
  "id": "134529901",
  "name": "Course 1",
  "section": "Section 2",
  "ownerId": "116269102540619633451",
  "creationTime": "2015-06-25T14:23:08.761Z",
  "updateTime": "2015-06-25T14:33:06.490Z",
  "enrollmentCode": "so75ha5",
  "courseState": "PROVISIONED",
  "alternateLink": "http://classroom.google.com/c/MTM0NTI5OTAx"
}
--batch_foobarbaz--
```

### Using client libraries

The following code samples demonstrate how to make batch requests using the Google APIs client libraries. See the respective quickstart guides for more information on how to install the libraries and set them up.

### .NET

```
using Google;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Classroom.v1;
using Google.Apis.Classroom.v1.Data;
using Google.Apis.Requests;
using Google.Apis.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ClassroomSnippets
{
    // Class to demonstrate the use of Classroom Batch Add Students API
    public class BatchAddStudents
    {
        /// <summary>
        /// Add multiple students in a specified course.
        /// </summary>
        /// <param name="courseId">Id of the course to add students.</param>
        /// <param name="studentEmails">Email address of the students.</param>
        public static void ClassroomBatchAddStudents(string courseId,
            List<string> studentEmails)
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
                    ApplicationName = "Classroom Snippets"
                });

                var batch = new BatchRequest(service, "https://classroom.googleapis.com/batch");
                BatchRequest.OnResponse<Student> callback = (student, error, i, message) =>
                {
                    if (error != null)
                    {
                        Console.WriteLine("Error adding student to the course: {0}", error.Message);
                    }
                    else
                    {
                        Console.WriteLine("User '{0}' was added as a student to the course.",
                            student.Profile.Name.FullName);
                    }
                };
                foreach (var studentEmail in studentEmails)
                {
                    var student = new Student() {UserId = studentEmail};
                    var request = service.Courses.Students.Create(student, courseId);
                    batch.Queue<Student>(request, callback);
                }

                Task.WaitAll(batch.ExecuteAsync());
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
        }
    }
}
```

### Java

```
import com.google.api.client.googleapis.batch.BatchRequest;
import com.google.api.client.googleapis.batch.json.JsonBatchCallback;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.http.HttpHeaders;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.classroom.Classroom;
import com.google.api.services.classroom.ClassroomScopes;
import com.google.api.services.classroom.model.Student;
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/* Class to demonstrate the use of Classroom Batch Add Students API */
public class BatchAddStudents {

  /* Scopes required by this API call. If modifying these scopes, delete your previously saved
  tokens/ folder. */
  static ArrayList<String> SCOPES =
      new ArrayList<>(Arrays.asList(ClassroomScopes.CLASSROOM_ROSTERS));

  /**
   * Add multiple students in a specified course.
   *
   * @param courseId - Id of the course to add students.
   * @param studentEmails - Email address of the students.
   * @throws IOException - if credentials file not found.
   * @throws GeneralSecurityException - if a new instance of NetHttpTransport was not created.
   */
  public static void batchAddStudents(String courseId, List<String> studentEmails)
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

    BatchRequest batch = service.batch();
    JsonBatchCallback<Student> callback =
        new JsonBatchCallback<>() {
          public void onSuccess(Student student, HttpHeaders responseHeaders) {
            System.out.printf(
                "User '%s' was added as a student to the course.\n",
                student.getProfile().getName().getFullName());
          }

          public void onFailure(GoogleJsonError error, HttpHeaders responseHeaders) {
            System.out.printf("Error adding student to the course: %s\n", error.getMessage());
          }
        };
    for (String studentEmail : studentEmails) {
      Student student = new Student().setUserId(studentEmail);
      service.courses().students().create(courseId, student).queue(batch, callback);
    }
    batch.execute();
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

function batchAddStudents($courseId, $studentEmails)
{
    /* Load pre-authorized user credentials from the environment.
    TODO(developer) - See https://developers.google.com/identity for
     guides on implementing OAuth2 for your application. */
    $client = new Client();
    $client->useApplicationDefaultCredentials();
    $client->addScope("https://www.googleapis.com/auth/classroom.profile.emails");
    $service = new Classroom($client);
    $service->getClient()->setUseBatch(true);
    //create batch
    $batch = $service->createBatch();
    foreach ($studentEmails as $studentEmail) {
        $student = new Student([
            'userId' => $studentEmail
        ]);
        $request = $service->courses_students->create($courseId, $student);
        $requestId = $studentEmail;
        $batch->add($request, $requestId);
    }
    //executing request
    $results = $batch->execute();
    foreach ($results as $responseId => $student) {
        $studentEmail = substr($responseId, strlen('response-') + 1);
        if ($student instanceof Exception) {
            $e = $student;
            printf("Error adding user '%s' to the course: %s\n", $studentEmail,
                $e->getMessage());
        } else {
            printf("User '%s' was added as a student to the course.\n",
                $student->profile->name->fullName, $courseId);
        }
    }
    $service->getClient()->setUseBatch(false);
    return $results;
}
```

### Python

```
course_id = '123456'
student_emails = ['alice@example.edu', 'bob@example.edu']
def callback(request_id, response, exception):
    if exception is not None:
        print 'Error adding user "{0}" to the course course: {1}'.format(
            request_id, exception)
    else:
        print 'User "{0}" added as a student to the course.'.format(
            response.get('profile').get('name').get('fullName'))
batch = service.new_batch_http_request(callback=callback)
for student_email in student_emails:
    student = {
        'userId': student_email
    }
    request = service.courses().students().create(courseId=course_id,
                                                  body=student)
    batch.add(request, request_id=student_email)
batch.execute(http=http)
```
