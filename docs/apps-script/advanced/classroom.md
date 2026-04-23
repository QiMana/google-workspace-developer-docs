---
source: https://developers.google.com/apps-script/advanced/classroom
root: apps-script
fetched_at: 2026-04-23T15:18:05.325Z
---

# Classroom Service

## Page Summary

- The Classroom service in Apps Script allows you to use the Google Classroom API to manage courses and rosters.
- This is an advanced service that requires enabling before use.
- The Classroom service utilizes the same objects, methods, and parameters as the public Google Classroom API.
- Sample code is provided to demonstrate listing courses using the service.

manage courses and rosters.

The Classroom service lets you use the [Google Classroom API](../../workspace/classroom.md) in Google Apps Script. This API gives admins, teachers, and students the ability to view and manage their courses and rosters.

This is an advanced service that must be [enabled before use](../guides/services/advanced.md). Follow along with the [quickstart](../../workspace/classroom/quickstart/apps-script.md) for step-by-step instructions on how to get started.

## Reference

For detailed information on this service, see the [reference documentation](../../workspace/classroom/reference/rest.md) for the Classroom API. Like all advanced services in Apps Script, the Classroom service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](../guides/services/advanced.md#how_method_signatures_are_determined).

To report issues and find other support, see the [Classroom support guide](../../workspace/classroom/support.md).

## Sample code

The following sample code uses [version 1](../../workspace/classroom/reference/rest.md) of the API.

### List courses

This sample lists the first ten courses the user has access to.

```
/**
 * Lists 10 course names and IDs.
 */
function listCourses() {
  /**
   * @see https://developers.google.com/classroom/reference/rest/v1/courses/list
   */
  const optionalArgs = {
    pageSize: 10,
    // Use other query parameters here if needed.
  };
  try {
    const response = Classroom.Courses.list(optionalArgs);
    const courses = response.courses;
    if (!courses || courses.length === 0) {
      console.log("No courses found.");
      return;
    }
    // Print the course names and IDs of the available courses.
    for (const course in courses) {
      console.log("%s (%s)", courses[course].name, courses[course].id);
    }
  } catch (err) {
    // TODO (developer)- Handle Courses.list() exception from Classroom API
    console.log("Failed with error %s", err.message);
  }
}
```
