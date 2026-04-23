---
source: https://developers.google.com/workspace/classroom/add-ons/get-started/user-journeys
root: workspace
fetched_at: 2026-04-23T15:25:41.631Z
---

# User journeys

This section provides details about key user views and interactions when using Classroom add-ons. You should familiarize yourself with each topic before building an add-on.

## Views

Users see your add-on's content in iframes. Each iframe loads a URL that you specify. When opened, Google Classroom will append query parameters to each URL with identifiers or authentication tokens. See the [iframe and query parameter details](https://developers.google.com/workspace/classroom/add-ons/developer-guides/iframes) page for technical information.

**Teachers** can access the following views:

- [Attachment Discovery iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/attachment-discovery-iframe), to find and select an attachment
- [Teacher View iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/teacher-iframe), to preview an attachment
- [Student Work Review iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/grader-iframe), for teacher to review and grade the student's work
- [Link Upgrade iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/link-upgrade-iframe), when upgrading a [`Link`](https://developers.google.com/workspace/classroom/reference/rest/v1/Link) attachment to an add-on attachment

**Students** can access the following view:

- [Student View iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/student-iframe), to view or complete the attachment

## Interactions

The following pages discuss required add-on user interactions. Review each before designing your add-ons user experience.

- [Add-on listing](https://developers.google.com/workspace/classroom/add-ons/get-started/add-on-listing), for teachers and administrators to discover and install your add-on
- [Sign in](https://developers.google.com/workspace/classroom/add-ons/get-started/sign-in-journey), to authorize your application
- [Attachments](https://developers.google.com/workspace/classroom/add-ons/get-started/attachments-journey), the resource add-ons create on assignments, announcements, or materials
- [Mobile experience](https://developers.google.com/workspace/classroom/add-ons/get-started/mobile-journey)
- [User support and feedback](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/support-and-feedback), so users can reach your support resources through the add-on
