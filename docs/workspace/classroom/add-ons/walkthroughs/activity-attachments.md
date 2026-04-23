---
source: https://developers.google.com/workspace/classroom/add-ons/walkthroughs/activity-attachments
root: workspace
fetched_at: 2026-04-23T15:25:41.472Z
---

# Activity-type attachments

This is the **fifth** walkthrough in the Classroom add-ons walkthrough series.

In this walkthrough, you modify the example from the previous walkthrough step to produce an **activity-type attachment.** These are any attachments that require a student submission, such as a written response, quiz, or other student-generated artifact.

The distinction between content-type and activity-type attachments is important. Activity-type attachments differ from content-type in the following ways:

- A "Turn In" button appears at the top right of the Student View iframe.
- They provide a unique identifier for student work.
- Their attachment card appears in the Classroom grader UI.
- They can set a grade for the assignment to which they belong.

See the next walkthrough for a discussion about grading. In the course of this walkthrough you complete the following:

- Modify the previous attachment creation requests to the Classroom API to create an activity-type attachment.
- Implement persistent storage for student submissions.
- Modify the previous Student View route to accept student input.
- Provide a route to serve the Student Work Review iframe.

Once finished, you can create activity-type attachments on assignments through the Google Classroom UI when logged in as a teacher. Students in the class can also complete the activity in the iframe and submit a response. The teacher can view the student's submission in the Classroom grading UI.

For the purposes of this example, reuse the attachment template from the previous walkthrough which shows an image of a famous landmark and a caption with the landmark's name. The activity consists of prompting the student to provide the name of the landmark.

## Modify the attachment creation request

Navigate to the section of your code in which you created a content-type attachment in the previous walkthrough. The key item here is an instance of an [AddOnAttachment object](../../reference/rest/v1/courses.courseWork.addOnAttachments.md#resource:-addonattachment), in which we previously specified the `teacherViewUri`, `studentViewUri`, and `title` for the attachment.

While all add-on attachments require these three fields, **the presence or absence of a `studentWorkReviewUri` determines whether the attachment is activity-type or content-type.** A `CREATE` request with a populated `studentWorkReviewUri` becomes an activity-type attachment, while a `CREATE` request without a `studentWorkReviewUri` becomes a content-type attachment.

The only modification to make to this request is to populate the `studentWorkReviewUri` field. Add an appropriately-named route here; you implement it in a later step.

### Python

In our provided example, this is in the `create_attachments` method in the `webapp/attachment_routes.py` file.

```
attachment = {
    # Specifies the route for a teacher user.
    "teacherViewUri": {
        "uri":
            flask.url_for(
                "load_activity_attachment",
                _scheme='https',
                _external=True),
    },
    # Specifies the route for a student user.
    "studentViewUri": {
        "uri":
            flask.url_for(
                "load_activity_attachment",
                _scheme='https',
                _external=True)
    },
    # Specifies the route for a teacher user when the attachment is
    # loaded in the Classroom grading view.
    # The presence of this field marks this as an activity-type attachment.
    "studentWorkReviewUri": {
        "uri":
            flask.url_for(
                "view_submission", _scheme='https', _external=True)
    },
    # The title of the attachment.
    "title": f"Attachment {attachment_count}",
}
```

## Add persistent storage for content-type attachments

Record the student's response to our activity. You can look it up later when the teacher views the submission in the Student Work Review iframe.

Set up a database schema for a `Submission`. Our provided example expects students to enter the name of the landmark shown in an image. A `Submission` therefore contains the following attributes:

- `attachment_id`: A unique identifier for an attachment. Assigned by Classroom and returned in the response when creating an attachment.
- `submission_id`: An identifier for a student submission. Assigned by Classroom and returned in the [`getAddOnContext` response](../../reference/rest/v1/courses.courseWork/getAddOnContext.md#response-body) in the Student View.
- `student_response`: The answer provided by the student.

### Python

Extend the SQLite and `flask_sqlalchemy` implementation from previous steps.

Navigate to the file in which you have defined the previous tables (`models.py` if you're following our provided example). Add the following at the bottom of the file.

```
# Database model to represent a student submission.
class Submission(db.Model):
    # The attachmentId is the unique identifier for the attachment.
    submission_id = db.Column(db.String(120), primary_key=True)

    # The unique identifier for the student's submission.
    attachment_id = db.Column(db.String(120), primary_key=True)

    # The student's response to the question prompt.
    student_response = db.Column(db.String(120))
```

Import the new `Submission` class into the server file with your attachment handling routes.

## Modify the Student View route

Next, modify the previous Student View route to show a small form and accept input from the student. You can reuse most of the code from the previous walkthrough.

Locate the server code that provides the route for your Student View. This is the route specified in the `studentViewUri` field when creating an attachment. The first change to make is to extract the `submissionId` from the [`getAddOnContext` response](../../reference/rest/v1/courses.courseWork/getAddOnContext.md#response-body).

### Python

In our provided example, this is in the `load_activity_attachment` method in the `webapp/attachment_routes.py` file.

```
# Issue a request to the courseWork.getAddOnContext endpoint
addon_context_response = classroom_service.courses().courseWork(
).getAddOnContext(
    courseId=flask.session["courseId"],
    itemId=flask.session["itemId"]).execute()

# One of studentContext or teacherContext will be populated.
user_context = "student" if addon_context_response.get(
    "studentContext") else "teacher"

# If the user is a student...
if user_context == "student":
    # Extract the submissionId from the studentContext object.
    # This value is provided by Google Classroom.
    flask.session["submissionId"] = addon_context_response.get(
            "studentContext").get("submissionId")
```

You might also want to issue a request to get the [student submission status](../../reference/rest/v1/courses.courseWork.addOnAttachments.studentSubmissions/get.md). The response contains a [`SubmissionState`](../../reference/rest/v1/SubmissionState.md) value, which indicates states such as whether the student has opened the attachment or turned it in. This may be useful if you want to disallow edits on a turned-in submission, or if you're interested in providing teacher insights into their students' progress:

### Python

In our provided example, this is a continuation of the `load_activity_attachment` method above.

```
# Issue a request to get the status of the student submission.
submission_response = classroom_service.courses().courseWork(
).addOnAttachments().studentSubmissions().get(
    courseId=flask.session["courseId"],
    itemId=flask.session["itemId"],
    attachmentId=flask.session["attachmentId"],
    submissionId=flask.session["submissionId"]).execute()
```

Finally, fetch the attachment information from our database and serve an input form. The form in our provided example consists of a string input field and a submit button. Show the landmark image and prompt the student to enter its name. Once they provide a response, record it in our database.

### Python

In our provided example, this is a continuation of the `load_activity_attachment` method above.

```
# Look up the attachment in the database.
attachment = Attachment.query.get(flask.session["attachmentId"])

message_str = f"I see that you're a {user_context}! "
message_str += (
    f"I've loaded the attachment with ID {attachment.attachment_id}. "
    if user_context == "teacher" else
    "Please complete the activity below.")

form = activity_form_builder()

if form.validate_on_submit():
    # Record the student's response in our database.

    # Check if the student has already submitted a response.
    # If so, update the response stored in the database.
    student_submission = Submission.query.get(flask.session["submissionId"])

    if student_submission is not None:
        student_submission.student_response = form.student_response.data
    else:
        # Store the student's response by the submission ID.
        new_submission = Submission(
            submission_id=flask.session["submissionId"],
            attachment_id=flask.session["attachmentId"],
            student_response=form.student_response.data)
        db.session.add(new_submission)

    db.session.commit()

    return flask.render_template(
        "acknowledge-submission.html",
        message="Your response has been recorded. You can close the " \
            "iframe now.",
        instructions="Please Turn In your assignment if you have " \
            "completed all tasks."
    )

# Show the activity.
return flask.render_template(
    "show-activity-attachment.html",
    message=message_str,
    image_filename=attachment.image_filename,
    image_caption=attachment.image_caption,
    user_context=user_context,
    form=form,
    responses=response_strings)
```

In order to differentiate between users, consider disabling the submit function and instead show the correct answer in the Teacher View.

## Add a route for the Student Work Review iframe

Lastly, add a route to serve the Student Work Review iframe. The name of this route should match the one provided for the `studentWorkReviewUri` when creating an attachment. This route opens when the teacher views the student submission in the Classroom grader UI.

You receive the `submissionId` query parameter when Classroom opens the Student Work Review iframe. Use it to retrieve the student's work from your local database:

### Python

In our provided example, this is in the `webapp/attachment_routes.py` file.

```
@app.route("/view-submission")
def view_submission():
    """
    Render a student submission using the show-student-submission.html template.
    """

    # Save the query parameters passed to the iframe in the session, just as we did
    # in previous routes. Abbreviated here for readability.
    add_iframe_query_parameters_to_session(flask.request.args)

    # For the sake of brevity in this example, we'll skip the conditional logic
    # to see if we need to authorize the user as we have done in previous steps.
    # We can assume that the user that reaches this route is a teacher that has
    # already authorized and created an attachment using the add-on.

    # In production, we recommend fully validating the user's authorization at
    # this stage as well.

    # Look up the student's submission in our database.
    student_submission = Submission.query.get(flask.session["submissionId"])

    # Look up the attachment in the database.
    attachment = Attachment.query.get(student_submission.attachment_id)

    # Render the student's response alongside the correct answer.
    return flask.render_template(
        "show-student-submission.html",
        message=f"Loaded submission {student_submission.submission_id} for "\
            f"attachment {attachment.attachment_id}.",
        student_response=student_submission.student_response,
        correct_answer=attachment.image_caption)
```

## Test the add-on

Repeat the [Test the add-on steps from the previous walkthrough](./content-attachments.md#test_the_add-on). You should have an attachment that can be opened by the student.

Complete the following steps to test the activity attachment:

- Sign in to [Google Classroom](https://classroom.google.com/) as one of your *student* test users in the same class as the teacher test user.
- Navigate to the **Classwork** tab and expand the test **Assignment**.
- Click the **add-on attachment card** to open the Student View and submit a response for the activity.
- Close the iframe after completing the activity. Optionally, click the **Turn In** button.

You shouldn't see anything change in Classroom after completing the activity. Now test the Student Work Review iframe:

- Sign in to Classroom as the *teacher* test user.
- Find the column for your test assignment in the **Grades** tab. Click the name of your test assignment.
- Find the card for the test student user. Click the attachment on the card.

Confirm that the correct submission appears for the student.

Congratulations! You're ready to proceed to the next step: [syncing attachment grades](./grade-passback.md).
