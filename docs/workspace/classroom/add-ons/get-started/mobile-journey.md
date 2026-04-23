---
source: https://developers.google.com/workspace/classroom/add-ons/get-started/mobile-journey
root: workspace
fetched_at: 2026-04-23T15:25:42.063Z
---

# Mobile experience

This page describes the user experience expectations when browsing attachment content from the Google Classroom app on an iOS or Android device.

In the mobile experience, attachment content should open by either **deep linking** to an installed mobile app or **opening a page on your mobile site** in an external browser.

## Device compatibility

If a user is on an unsupported device and therefore can't open the attachment, *you must alert them that their device is not supported*. Additionally, you must list devices that *are* supported, such as a desktop or laptop computer.

## Teacher user flows

In the mobile Classroom app, teachers can complete the following actions:

- Create assignments.
- See student submissions in the [Student Work Review iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/grader-iframe) by clicking the add-ons attachment chip.
- View and grade attachments by opening attachments in your mobile app or your mobile site.
- Add private comments and grade points.

In the mobile Classroom app, teachers *can't* complete the following actions:

- Open the add-on [Discovery UI flow](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/attachment-discovery-iframe) to access Classroom add-ons.
- Include add-ons attachments to assignments (attachments appear on assignments created on web).

![Teacher assignment grading flow](https://developers.google.com/static/workspace/classroom/add-ons/images/teacher-grading-flow.png)

**Figure 1.** Teacher assignment grading flow.

## Student user flow

Many students rely on mobile devices to access and complete their assignments. Students can view assignments from their mobile devices. A content attachment shows as an attachment to the instructions, while an activity attachment appears on the **Your work** drawer as seen in Figure 2. One assignment may contain multiple attachments that students must complete. When a student opens an attachment, it should open in your mobile app or a new browser window. Students must return to Classroom to turn in the assignment.

![Student assignment flow](https://developers.google.com/static/workspace/classroom/add-ons/images/student-assignment-flow.png)

**Figure 2.** Student assignment flow.
