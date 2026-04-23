---
source: https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/student-iframe
root: workspace
fetched_at: 2026-04-23T15:25:42.318Z
---

# Student View iframe

The **Student View iframe** refers to the area on-screen in which your add-on appears to students. Students view content or complete activities in this area.

## iframe overview

Students can see add-on [attachments](../attachments-journey.md) in their assignment view in the Classroom UI. Informational content-type attachments appear with the description following the assignment title and details, and student-activity-type attachments appear in a sidebar along with other attachments that a student may submit.

![View of an assignment](https://developers.google.com/static/workspace/classroom/add-ons/images/student-assignment.png)

**Figure 1.** View of an assignment once posted to a class with both a content attachment ("Analyzing an author's purpose") and activity attachments (in the **Your work** sidebar).

Clicking any of the attachment titles in the Student View or Teacher View opens the attachment in a nearly-full-screen iframe.

![View of the content attachment iframe](https://developers.google.com/static/workspace/classroom/add-ons/images/student-content2.png)

**Figure 2.** View of the content attachment iframe. Your Student View URL loads in the gray area.

![View of the activity attachment iframe](https://developers.google.com/static/workspace/classroom/add-ons/images/student-attachment2.png)

**Figure 3.** View of activity attachment iframe. Your Student View URL loads in the gray area. Note the "Turn in" button at top right of the iframe.

## Student experience in Classroom

This section provides context about the student experience in Classroom add-ons. Note that this is not a comprehensive overview of the Classroom behavior; visit [Getting Started with Google Classroom](https://edu.google.com/intl/ALL_us/teacher-center/products/classroom/) for a more complete discussion of the Classroom user experience.

Note that you can use the [student submissions endpoint](../attachments-journey.md) to retrieve the status of a student's assignment.

### Attachments preview

Attached add-ons appear when a student clicks an assignment title in the Classwork tab. The assignment expands to show relevant information, such as the due date, posting date, and description. Students see one entry for each add-on attached to the assignment.

![Add-on cards in the assignment preview pulldown](https://developers.google.com/static/workspace/classroom/add-ons/images/student-assignment-preview.png)

**Figure 4.** Appearance of add-on attachments in the assignment preview. There are two Google Arts & Culture add-on attachments and one Google Doc attachment for this particular assignment.

### Turn in

Students see an assignment summary view after opening an assignment in Classroom. Students click the **Turn in** button when they have completed an assignment, notifying their teacher the work is ready for review.

The summary view shows cards for all content *and* activity attachments. Activity attachments appear in the **Your work** box. Each attachment can be clicked to open it directly.

![Turn-in button appears when a student opens an assignment](https://developers.google.com/static/workspace/classroom/add-ons/images/student-assignment-view.png)

**Figure 5.** Student assignment summary view with the Turn in button. Note that the two add-on cards are outside of the "Your work" box as they're content attachments.

After clicking the **Turn in** button, students see a confirmation dialog that lists all of the **activity attachments** for the particular assignment. Students can click each item to open the activity attachment. In the case of add-ons, this loads the Student View iframe described previously. Note that add-on attachments only appear in the confirmation dialog if they're activities.

![Add-on attachments listed in the turn-in confirmation dialog](https://developers.google.com/static/workspace/classroom/add-ons/images/student-turn-in-confirmation.png)

**Figure 6.** List of activity attachments in the confirmation dialog. Note that the two Google Arts & Culture attachments don't appear in this list, as they're not activity attachments.

Students must click **Turn in** once more to finish submitting their work.

Note that Classroom doesn't perform any checks that the assigned work has been completed or that the add-on attachment has been accessed.

### Complete work outside of Classroom

It's permissible for an add-on attachment to open a new tab or installed mobile app for students to complete the assigned task or view the assigned content. Note, however, that students *must* return to Classroom to turn in the assignment. You may present the student with interactive controls *so long as none are labelled "Turn in"*. This is explicitly disallowed in [Requirement 5.3](../../requirements.md), and is meant to avoid confusion with the **Turn in** button in Classroom.

![Student view of an activity outside of Classroom](https://developers.google.com/static/workspace/classroom/add-ons/images/student-activity-view-3p.png)

**Figure 7.** View of a student activity outside of Classroom. Note that the student can "Submit" the activity to indicate completion on the outside platform.

Once students have finished interacting with activities on an external site, they should be given instructions to return to the Classroom iframe to turn in the corresponding assignment.

![View of a completed activity instructing students to return to
Classroom](https://developers.google.com/static/workspace/classroom/add-ons/images/student-return-view-3p.png)

**Figure 8.** A completion message on an external site that reminds the user to return to Classroom to turn in the assignment.

### Unsubmit

Students have the option to **unsubmit** an assignment after they've already turned it in. This is intended for students to make corrections in their work before the teacher reviews it. They must turn it in again when ready.

### Returned assignments

An assignment is marked **returned** by the teacher after they have reviewed (and optionally graded) the student's work. This is intended for teachers to indicate to the students that their marks are complete and that the student should review the returned attachments.
