---
source: https://developers.google.com/workspace/classroom/add-ons/walkthroughs/external-attachments
root: workspace
fetched_at: 2026-04-23T15:25:42.525Z
---

# External attachments & turn-in

This is the **seventh** walkthrough in the Classroom add-ons walkthrough series.

In this walkthrough, you add behavior to a web application to **create add-on attachments from outside of Google Classroom**. Use this behavior to let your users create add-on attachments from your existing product or website. This is also a great addition to a `CourseWork` integration because you direct existing traffic to the improved user experience offered by your add-on without changing their flow. The suggested process is presented in our [Create attachments outside of Classroom](https://developers.google.com/workspace/classroom/add-ons/developer-guides/third-party-first-journey) guide page.

You also add behavior to your add-on to **modify an assignment with add-on attachments programmatically**. You can modify any assignment that has one of your add-on attachments, regardless of who created the assignment. This is especially useful to turn in assignments after a student has completed an activity, signalling to the teacher that the assigned tasks are complete and the student's work is ready for review.

You extend the final version of your add-on that supports [content-type](https://developers.google.com/workspace/classroom/add-ons/walkthroughs/content-attachments) or [activity-type attachments](https://developers.google.com/workspace/classroom/add-ons/walkthroughs/activity-attachments). The content-type attachment is used in this guide.

## Add the assignment management OAuth scope

Make sure that your application requests the following scopes:

- `https://www.googleapis.com/auth/classroom.addons.teacher`
- `https://www.googleapis.com/auth/classroom.addons.student`
- **`https://www.googleapis.com/auth/classroom.coursework.students`**

The `classroom.coursework.students` scope has not been needed previously, and is used to create or modify `CourseWork` assignments. Add this scope to the lists of scopes in your Cloud project's [Google Workspace Marketplace SDK](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk), [OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent), and your server code.

### Python

```
SCOPES = [
  "https://www.googleapis.com/auth/classroom.addons.teacher",
  "https://www.googleapis.com/auth/classroom.addons.student",
  "https://www.googleapis.com/auth/classroom.coursework.students",
]
```

## Create an assignment in Classroom

### Add buttons to a non-iframed web page

The flow described in this walkthrough allows a user to create Google Classroom assignments and attachments from a non-Google product. In practice this is likely your existing website or application. For this example, you need to create a mock web page to act as an external site. You need a button or link that, when clicked, *opens a new route* that performs the [suggested `CourseWork` flow](https://developers.google.com/workspace/classroom/add-ons/developer-guides/third-party-first-journey) to create a new assignment.

You'll also need to *add a button or link to allow the user to sign in* if you don't have one already. You will need user credentials to make the subsequent API requests, so they must complete the OAuth 2.0 handshake. See the [sign-in walkthrough](https://developers.google.com/workspace/classroom/add-ons/walkthroughs/sign-in) for specific guidance.

### Python

The provided Python example modifies the `/index` route that was introduced in the [first walkthrough step](https://developers.google.com/workspace/classroom/add-ons/walkthroughs/create-an-add-on#build_a_basic_web_app).

```
<!-- /webapp/templates/index.html -->
<a href="clear-credentials.html">Logout</a>
<a href="start-auth-flow.html">Login</a>

<br>

<a href="create-coursework-assignment.html">Create a CourseWork Assignment</a>
```

Add an HTML template to represent a destination in your website. This page will represent the content that will be attached to your `CourseWork` assignment.

```
<!-- /webapp/templates/example-coursework-assignment.html -->
<h1>CourseWork assignment loaded!</h1>
<p>You've loaded a CourseWork assignment! It was created from an external web page.</p>
```

Create a new Python module file to handle the CourseWork-related routes. This is `coursework_routes.py` in our provided example. Add the following three routes; note that you'll fill in some of the contents later.

```
# /webapp/coursework_routes.py
@app.route("/create-coursework-assignment")
def create_coursework_assignment():
  """
  Completes the assignment creation flow.
  """

  # Check that the user is signed in. If not, perform the OAuth 2.0
  # authorization flow.
  credentials = get_credentials()

  if not credentials:
    return start_auth_flow("coursework_assignment_callback")

  # Construct the Google Classroom service.
  classroom_service = get_classroom_service()

  pass  # To be completed later.

@app.route("/example-coursework-assignment/<assignment_type>")
def example_coursework_assignment(assignment_type):
  """
  Renders the "example-coursework-assignment.html" template.
  """
  return flask.render_template(
      "example-coursework-assignment.html", assignment_type=assignment_type
  )

@app.route("/coursework-assignment-callback")
def coursework_assignment_callback():
  """
  Completes the OAuth 2.0 handshake and stores credentials in the session.
  This is identical to the callback introduced in the sign-in walkthrough,
  but redirects the user to the index page instead of the attachment
  discovery page.
  """
  flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file(
      CLIENT_SECRETS_FILE,
      scopes=SCOPES,
      state=flask.session["state"],
      redirect_uri=flask.url_for("coursework_assignment_callback", _external=True),
  )

  flow.fetch_token(authorization_response=flask.request.url)

  credentials = flow.credentials
  flask.session["credentials"] = session_credentials_to_dict(
      credentials
  )

  # Close the current window and redirect the user to the index page.
  return flask.render_template("close-me.html", redirect_destination="index")
```

### Check a user's attachment creation eligibility

There are several prerequisites that a user must meet before you can create add-on attachments on their behalf. For convenience, Google provides the [`userProfiles.checkUserCapability`](https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles/checkUserCapability) method to determine whether a user meets these prerequisites. A user that meets the prerequisites is referred to as an **eligible** user.

Add the eligibility check to the `CourseWork` creation route implementation. Then test the `allowed` field in the response. For eligible users, follow the logic to create an [assignment with add-on attachment](#create-assignment-eligible-user). Otherwise, create a [Link Material](#create-link-material). You'll need to know the ID of the course in which the user wants to create an assignment. Ordinarily, you'll prompt the user to specify which course to use. For simplicity, we use a hard-coded value in this example.

### Python

```
# /webapp/coursework_routes.py
@app.route("/create-coursework-assignment")
def create_coursework_assignment():
  """
  Completes the assignment creation flow.
  """
  # ... Check that the user is signed in and get the Classroom service ...

  # Check whether the user can create add-on attachments.
  eligibility_response = (
      classroom_service.userProfiles()
      .checkUserCapability(
        userId="me",
        capability="CREATE_ADD_ON_ATTACHMENT",
        # The previewVersion is necessary while the method is available in the
        # Workspace Developer Preview Program.
        previewVersion="V1_20240930_PREVIEW",
      ).execute()
  )
  is_create_attachment_eligible = eligibility_response.get("allowed")

  if is_create_attachment_eligible:
    # See the "Create an assignment with add-on attachment for eligible users" section for implementation.
  if not is_create_attachment_eligible:
    # See the "Create a Link Material" section for implementation.
```

### Create an assignment with add-on attachment for eligible users

If the user is eligible to create add-on attachments, do the following:

1. Send an API request to create a `courseWork` assignment in Google Classroom with *no attachments*.
2. Extract the `id` of the newly created assignment.
3. Construct a new [CourseWork `AddOnAttachment`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.addOnAttachments#resource:-addonattachment).
4. Send a request to create an add-on attachment on the newly created assignment in Google Classroom.

### Python

```
# The ID of the course to which the assignment will be added.
course_id = 1234567890  # TODO(developer) Replace with an actual course ID.

# /webapp/coursework_routes.py
if is_create_attachment_eligible:
  # Create an assignment.
  coursework = {
      "title": "My CourseWork Assignment with Add-on Attachment",
      "description": "Created using the Classroom CourseWork API.",
      "workType": "ASSIGNMENT",
      "state": "DRAFT",  # Set to 'PUBLISHED' to assign to students.
  }

  # Issue a request to create the assignment.
  create_assignment_response = (
      classroom_service.courses()
      .courseWork()
      .create(courseId=course_id, body=coursework)
      .execute()
  )

  # Create an add-on attachment that links to the selected content and
  # associate it with the new assignment.
  content_url = flask.url_for(
      "example_coursework_assignment",
      assignment_type="add-on-attachment",
      _scheme="https",
      _external=True,
  )

  # Construct an AddOnAttachment instance.
  attachment = {
      "teacherViewUri": {"uri": content_url},
      "studentViewUri": {"uri": content_url},
      "title": f'Test Attachment for Assignment {create_assignment_response.get("id")}',
  }

  # Issue a request to create the attachment.
  add_on_attachment_response = (
      classroom_service.courses()
      .courseWork()
      .addOnAttachments()
      .create(
          courseId=course_id,
          itemId=create_assignment_response.get("id"),  # ID of the new assignment.
          body=attachment,
      )
      .execute()
  )
```

### Create a Link Material

If the user is *not eligible* to create add-on attachments, create a Link Material instead by doing the following:

### Python

```
# The ID of the course to which the assignment will be added.
course_id = 1234567890  # TODO(developer) Replace with an actual course ID.

if not is_create_attachment_eligible:
    coursework = {
        "title": "My CourseWork Assignment with Link Material",
        "description": "Created using the Classroom CourseWork API.",
        "workType": "ASSIGNMENT",
        "state": "DRAFT",  # Set to 'PUBLISHED' to assign to students.
        # Specify the URL for your content as a Link Material.
        "materials": [
            {
                "link": {
                    "url": flask.url_for(
                        "example_coursework_assignment",
                        assignment_type="link-material",
                        _scheme="https",
                        _external=True,
                    )
                }
            }
        ],
    }

    # Issue a request to create the assignment.
    assignment_response = (
        classroom_service.courses()
        .courseWork()
        .create(courseId=course_id, body=coursework)
        .execute()
    )
```

## Modify an already-created assignment

You can access, modify, turn in, reclaim, or return any Google Classroom stream item that has at least one of your add-on attachments, regardless of who created the stream item. Stream items are any `Announcement`, `CourseWork` assignment, or `CourseWorkMaterial`.

To demonstrate this, you'll add a route to modify a given stream item. Use this method to verify that you can access and modify stream items created by you using the API *and* created by a teacher through the Google Classroom UI.

Add one more link or button to the web page you [first edited](#add-buttons) in this walkthrough. It should open a new route to modify a `CourseWork` assignment.

### Python

The provided Python example modifies the `/index` route that was modified [earlier in this walkthrough](#add-buttons).

```
<!-- /webapp/templates/index.html -->
<a href="modify-coursework-assignment.html">Create a CourseWork Assignment</a>
```

Create a new route to handle the CourseWork-related routes. This is in the `coursework_routes.py` file in our provided example.

```
# Check that the user is signed in.
credentials = get_credentials()

if not credentials:
  return start_auth_flow("coursework_assignment_callback")

# Get the Google Classroom service.
classroom_service = get_classroom_service()

# The ID of the course to which the assignment will be added.
# Ordinarily, you'll prompt the user to specify which course to use. For
# simplicity, we use a hard-coded value in this example.
course_id = 1234567890  # TODO(developer) Replace with an actual course ID.
assignment_id = 1234567890  # TODO(developer) Replace with an actual assignment ID.

# Retrieve details about the CourseWork assignment.
get_coursework_response = (
    classroom_service.courses()
    .courseWork()
    .get(courseId=course_id, id=assignment_id)
    .execute()
)

# Alter the current title.
assignment_title = f"{get_coursework_response.get('title')} (Modified by API request)"

# Issue a request to modify the assignment.
modify_coursework_response = (
    classroom_service.courses()
    .courseWork()
    .patch(
        courseId=course_id,
        id=assignment_id,
        updateMask="title",
        body={"title": assignment_title},
    )
    .execute()
)
```

## Test the add-on

To keep things simple, the provided examples use hard-coded course and assignment identifiers. You can get these identifiers by making requests with teacher credentials to the `get` and `list` methods of the [`courses`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses) and [`courseWork`](https://developers.google.com/workspace/classroom/reference/rest/v1/courseWork) resources. They're also returned in the response when creating `courseWork` assignments.

### Test Link Material creation

Run your server, then navigate to your index page and sign in as a teacher user *without a Google Workspace for Education Teaching & Learning or Plus license*. You can [toggle a user's license status](https://support.google.com/a/answer/1727173#zippy=%2Cmanually-assign-and-remove-licenses-on-the-users-page) from your test domain's Admin console.Click the **Create a CourseWork Assignment** button, then open the Google Classroom UI and verify that an assignment with a Link Material attachment was created. The attachment should show the title of the linked web page and a URL.

### Test add-on attachment creation

Return to the index page and sign in as a teacher user *with a Google Workspace for Education Teaching & Learning or Plus license*. Click the **Create a CourseWork Assignment** button, then open the Google Classroom UI and verify that an assignment with an add-on attachment was created. The attachment should show the name of your add-on application and the title specified in your code.

### Test assignment modification

Return to the index page and ensure that you are signed in as a teacher user with a Teaching & Learning or Plus license. Click the **Modify a CourseWork Assignment** button, then return to the Google Classroom UI and verify that the assignment title has been altered.

Congratulations! You've completed the walkthrough series.
