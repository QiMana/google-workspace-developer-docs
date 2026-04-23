---
source: https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/grader-iframe
root: workspace
fetched_at: 2026-04-23T15:25:40.928Z
---

# Student Work Review iframe

The **Student Work Review iframe** enables teachers to grade and review student submissions within Classroom. This guide discusses a teacher's user experience in Classroom when grading student work and the spaces where your add-on content appears. You must provide a `studentWorkReviewUri` [when creating an add-on attachment](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.addOnAttachments) if your add-on provides [activity-type attachments](https://developers.google.com/workspace/classroom/add-ons/get-started/attachments-journey#attachment_types); this resource is loaded when the teacher opens an add-on attachment for a specific student.

## Grading in the Classroom UI

In this view, teachers are able to view all students who have been assigned the assignment, grade student submissions, and return work to students (Figure 1).

In the sidebar, teachers may sort students by first name, last name, and assignment status (for example, assigned, turned in, and graded). Teachers can edit an individual grade next to the name of a student in the sidebar.

Within the sidebar, teachers can select students and click **Return** to return assignments to selected students, or click the envelope icon to email selected students. Teachers also have the option to change the point value of the assignment by clicking the drop-down.

The main section of the page displays a numbered breakdown of assignment status. If the assignment contains an attachment, a preview of the attachment is visible.

![Teacher view of Student list](https://developers.google.com/static/workspace/classroom/add-ons/images/student-list.png) **Figure 1.** The student list page in the teacher UI showing all students and previews of all students' attachments.

## View an individual student's work

Teachers click a student's attachment preview to see an individual student's submission in the grading tool. The **Student Work Review iframe** refers to the gray area in the grading tool (Figure 2). Teachers use the grading tool to grade activity attachments on a per-student basis. Activity attachments provide a URI for teachers to see student work.

Note that the Student Work Review iframe and the "Files" section of the sidebar are the only places where your content appears. All other sections of the page are managed by Classroom and can't be edited.

![Grading tool](https://developers.google.com/static/workspace/classroom/add-ons/images/grader-view.png)

**Figure 2.** Grading UI including the specific student's work in the **Student Work Review iframe** and options to view attachments, set a grade, and add comments.

Teachers use the Student Work Review iframe to view and grade student work. This work includes student submissions related to add-on attachments. At minimum, a student's submission or a graded record of the submission *must render within the Student Work Review iframe* for the teacher to review.

You might consider allowing the teacher to take some of the following actions within the Student Work Review iframe or by navigating to your website using a link provided in the iframe:

- Manually mark, comment on, or score the student submission.
- View additional details about the student submission.
- View assignment relevant information, such as annotations or an answer key.
- View assignment level insights such as class averages or common incorrect answers.

Teachers can return an assignment to an individual student by clicking **Return** from the grading UI or return an assignment to multiple students by clicking the icon to select more than one student.

It's important to remember that one assignment may have multiple attachments that teachers can grade. In the grading UI view, teachers use the sidebar to navigate between attachments. There are also sections in the sidebar to assign grades, change point totals for the assignment, and add private comments to a student.

### Sync grades back to Classroom

Add-ons can enable grades to sync to Classroom using [API calls to individual attachments](https://developers.google.com/workspace/classroom/add-ons/developer-guides/attachment-interactions#set_a_submissions_grade). The synced grade surfaces on the sidebar of the Classroom grading UI. You might optionally display buttons in the Student Work Review iframe to allow teachers to sync grades.
