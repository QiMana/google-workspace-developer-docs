---
source: https://developers.google.com/workspace/classroom/add-ons
root: workspace
fetched_at: 2026-04-23T15:25:39.929Z
---

# Introduction

Teachers can assign and grade work from anywhere using Classroom add-ons and the [CourseWork API](./reference/rest/v1/courses.courseWork.md). Classroom add-ons allow educators to integrate their favorite EdTech tools within the Google Classroom interface. Teachers can select, assign, and grade third-party content within Google Classroom. The result is a seamless learning experience for teachers and students.

Add-ons complement other Classroom API features. Add-ons let teachers and students experience your content without having to leave Google Classroom. Adopt a variety of integrations to provide user-friendly ways to access your content from more places.

Classroom add-ons are available to all teachers with Teaching & Learning or Plus [Google Workspace for Education licenses](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/).

## Overview

Add-ons allow users to create **attachments** on assignments, announcements, or materials. These attachments open third-party content in **[iframes](./add-ons/get-started/get-started-overview.md)** in Google Classroom. The iframes open separate URLs depending on the user type and Google Classroom context.

Developers create add-on **applications** distributed through [Google Workspace Marketplace](https://workspace.google.com/marketplace/category/works-with-classroom). Teachers can install applications to their own Google Workspace for Education account, or Google Workspace administrators can install applications for their teacher users. Teachers then interact with the application to create attachments.

## Why Classroom add-ons

There are several key benefits to developing a Classroom add-on.

### Discoverability

- Unlike the CourseWork API, Classroom add-ons show up directly in Google Classroom as well on the [Google Workspace Marketplace](https://workspace.google.com/marketplace/category/works-with-classroom) which is the hub for administrators to manage tools across all their Google products.
- Through add-ons, teachers can discover new third party tools and foster discussions with their admins to encourage domain-wide usage.

### Deeper and more streamlined experience

- Our overall goal for Classroom add-ons is to extend the streamlined experience of Google Classroom to the third-party tech ecosystem. Classroom add-ons bring together the experiences of Classroom and the many tools that teachers, students, and admins are using every day.
- By embedding third-party content throughout the Classroom workflow (assignment creation, student work, grading workflow), you enable deeper experiences for users.

### Continued investments in developer experience

Google is investing in the user experience beyond the CourseWork API. Add-ons address core pain points that users have when using third-party learning tools:

- **Centralize student work** - Students experience friction in their ability to balance the complexity of navigating too many systems and locations to do their schoolwork. With add-ons, students can directly access work in one place so that they can focus on their schoolwork instead of the technology.
- **Grading** - Teachers have expressed that grading is time consuming, error prone, and difficult to manage across tools. Add-ons allows teachers to quickly access grades provided by third-party tools and combine those with additional feedback directly within Classroom.
- **Google single sign-on (SSO)** - Teachers and students experience difficulty remembering logins for many different tools in their class. Add-ons simplify this by enabling users to sign in to third-party tools with just one account.
- **Continued investment** - The Classroom add-ons and Classroom API are both strategic areas of investment for Google. Google is committed to their continued development and adoption.

## Next steps

See the following sections for detailed information about the add-ons benefits and development process.

- [Get started](./add-ons/get-started/get-started-overview.md) - Detailed descriptions of the user experience, user journey, and developer journey
- [Developer guides](./add-ons/developer-guides/developer-guides-overview.md) - Design and implementation details
- [Add-on review process](./add-ons/developer-guides/review-process-overview.md) - Procedures for add-ons publication
- [Developer walkthroughs](./add-ons/walkthroughs/walkthroughs-overview.md) - Step-by-step implementation guides with code examples
- [Requirements](./add-ons/requirements.md) - The list of expectations for published add-ons
