---
source: https://developers.google.com/workspace/classroom/quickstart/apps-script
root: workspace
fetched_at: 2026-04-23T15:25:50.963Z
---

# Google Apps Script quickstart

Create a [Google Apps Script](../../../apps-script/overview.md) that makes requests to the Google Classroom API.

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](../../guides/auth-overview.md) before [choosing the access credentials](../../guides/create-credentials.md#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

In Apps Script, Google Workspace quickstarts use [Advanced Google services](../../../apps-script/guides/services/advanced.md) to call Google Workspace APIs and handle some details of the authentication and authorization flow.

## Objectives

- Configure the environment.
- Create and configure the script.
- Run the script.

## Prerequisites

- A Google for Education account with Google Classroom enabled.
- Access to Google Drive

## Create the script

1. Create a new script in the Apps Script editor by going to [script.google.com/create](https://script.google.com/create).
2. Replace the contents of the script editor with the following code:

```
/**
 * Lists 10 course names and ids.
 */
function listCourses() {
  /**  here pass pageSize Query parameter as argument to get maximum number of result
   * @see https://developers.google.com/classroom/reference/rest/v1/courses/list
   */
  const optionalArgs = {
    pageSize: 10,
    // Use other parameter here if needed
  };
  try {
    // call courses.list() method to list the courses in classroom
    const response = Classroom.Courses.list(optionalArgs);
    const courses = response.courses;
    if (!courses || courses.length === 0) {
      console.log("No courses found.");
      return;
    }
    // Print the course names and IDs of the courses
    for (const course of courses) {
      console.log("%s (%s)", course.name, course.id);
    }
  } catch (err) {
    // TODO (developer)- Handle Courses.list() exception from Classroom API
    // get errors like PERMISSION_DENIED/INVALID_ARGUMENT/NOT_FOUND
    console.log("Failed with error %s", err.message);
  }
}
```

3. Click Save ![](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).
4. Click **Untitled project**, type **Quickstart**, and click **Rename**.

## Configure the script

### Enable the Google Classroom API

Open the Apps Script project.

1. Click **Editor** .
2. Next to **Services**, click Add a service .
3. Select Google Classroom API and click **Add**.

## Run the sample

In the Apps Script editor, click **Run**.

The first time you run the sample, it prompts you to authorize access:

1. Click **Review permissions**.
2. Choose an account.
3. Click **Allow**.

The script's execution log appears at the bottom of the window.

## Next steps

- [Google Apps Script Advanced Services documentation](../../../apps-script/guides/services/advanced.md)
- [Try the Google Workspace APIs in the APIs explorer](../../explore.md)
- [Troubleshoot authentication and authorization issues](https://developers.google.com/workspace/classroom/troubleshoot-authentication-authorization)
- [Classroom API reference documentation](../reference/rest.md)
