---
source: https://developers.google.com/workspace/classroom/add-ons/get-started/attachments-journey
root: workspace
fetched_at: 2026-04-23T15:25:40.813Z
---

# Attachments

**Attachments** are the pieces of content that users view and interact with. This guide provides a brief overview of attachments in Google Classroom and defines some important attachment-related terminology.

At a very high level, *an add-on's role is to create and manage attachments*. Add-ons provide an opportunity for students to access your content directly within Google Classroom. Unlike assignments created using the [CourseWork API](../../reference/rest/v1/courses.courseWork.md), add-on attachments support your customized and interactive experiences without requiring the user to leave Google Classroom.

Teachers add attachments to **assignments**. An assignment can have up to ten attachments, though only eight of any single type. Examples of attachments include YouTube videos, Google Docs, or external links. You can also attach files from Google Drive or uploaded from your computer.

![View of the assignment creation dialog with attachment cards](https://developers.google.com/static/workspace/classroom/add-ons/images/assignment-creation-attachment-mock.png)

**Figure 1.** Attachments appear as cards when creating, viewing, or completing an assignment.

## Attachment types

There are two types of add-on attachments: **activity** and **content**. Activity-type attachments are any that require a student submission or turn-in action, such as a quiz or written response. Content-type attachments are view-only materials that don't require a student submission, such as videos or news articles.

Attachment-related API interactions differ slightly depending on the attachment type. For details regarding interactions with attachments through the add-ons API, visit the [Interacting with attachments](../developer-guides/attachment-interactions.md) guide page.

## Automatically graded attachments

You can **pass grades back to Google Classroom** for activity-type attachments. Doing so populates the grade field for a particular assignment with a draft grade. The grade can be any decimal number zero or greater. See our [Interacting with attachments](../developer-guides/attachment-interactions.md) guide page for implementation details.

Note that *this is a heavily requested feature by teachers*; our user experience research has shown that many teachers assume that add-on activity grades are automatically be returned to Google Classroom.

## Create attachments from a third-party site

You can create add-on attachments programmatically from outside of Google Classroom. The interactions are similar to [creating assignments using the CourseWork API endpoints](../../guides/manage-coursework.md#create_assignments). See the dedicated [Create attachments outside of Google Classroom](../developer-guides/third-party-first-journey.md) guide for implementation details.
