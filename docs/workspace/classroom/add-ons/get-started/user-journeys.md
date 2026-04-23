---
source: https://developers.google.com/workspace/classroom/add-ons/get-started/user-journeys
root: workspace
fetched_at: 2026-04-23T15:25:41.631Z
---

# User journeys

This section provides details about key user views and interactions when using Classroom add-ons. You should familiarize yourself with each topic before building an add-on.

## Views

Users see your add-on's content in iframes. Each iframe loads a URL that you specify. When opened, Google Classroom will append query parameters to each URL with identifiers or authentication tokens. See the [iframe and query parameter details](../developer-guides/iframes.md) page for technical information.

**Teachers** can access the following views:

- [Attachment Discovery iframe](./iframes/attachment-discovery-iframe.md), to find and select an attachment
- [Teacher View iframe](./iframes/teacher-iframe.md), to preview an attachment
- [Student Work Review iframe](./iframes/grader-iframe.md), for teacher to review and grade the student's work
- [Link Upgrade iframe](./iframes/link-upgrade-iframe.md), when upgrading a [`Link`](../../reference/rest/v1/Link.md) attachment to an add-on attachment

**Students** can access the following view:

- [Student View iframe](./iframes/student-iframe.md), to view or complete the attachment

## Interactions

The following pages discuss required add-on user interactions. Review each before designing your add-ons user experience.

- [Add-on listing](./add-on-listing.md), for teachers and administrators to discover and install your add-on
- [Sign in](./sign-in-journey.md), to authorize your application
- [Attachments](./attachments-journey.md), the resource add-ons create on assignments, announcements, or materials
- [Mobile experience](./mobile-journey.md)
- [User support and feedback](./iframes/support-and-feedback.md), so users can reach your support resources through the add-on
