---
source: https://developers.google.com/workspace/classroom/reference/changelog
root: workspace
fetched_at: 2026-04-23T15:25:51.009Z
---

# Documentation changelog

This page contains information about any additions or updates to the Classroom API documentation.

#### 24 June 2024: New documentation for managing grading periods

Added guides on how to [access and use the grading periods endpoints](../grading-periods/manage-grading-periods.md) in the Developer Preview Program. Added [grading periods endpoints reference documentation](./rest.md#rest-resource:-v1.courses).

#### 20 June 2024: Updates for add-ons general availability for developers

Removed references to "closed" state across many [add-ons guide pages](../add-ons.md). Updated the Cloud project [configuration guide](../add-ons/developer-guides/project-configuration.md) to incorporate use of the Google Workspace Marketplace SDK Draft state.

#### 30 April 2024: Updated third-party cookie guidance

Update the guide for [navigating third-party cookie deprecation](../add-ons/developer-guides/third-party-cookies.md) in Classroom add-ons to reflect [recent cookie deprecation timeline changes](https://privacysandbox.com/intl/en_us/news/update-on-the-plan-for-phase-out-of-third-party-cookies-on-chrome/).

#### 1 February 2024: Third-party cookie guidance

Created a guide for [navigating third-party cookie deprecation](../add-ons/developer-guides/third-party-cookies.md) in Classroom add-ons.

#### 25 January 2024: Updated add-on attachment access to stream items

Added a new [question in the FAQ](../support/faq.md#can_an_add-on_attachment_see_or_modify_the_stream_item_it_is_attached_to) about add-on attachment ability to see, modify, or turn in the Announcement, Assignment, or Material that it is attached to. Expanded coverage of stream items in the [Classroom concepts](../guides/key-concepts/api-structure.md#stream_item) guide.

#### 13 November 2023: API preview usage

Added documentation on [how to use Classroom API features in public preview](./preview.md) and guidance for using the [Rubrics CRUD API](../rubrics/getting-started.md).

#### 7 November 2023: Create custom administrator roles

Created a guide that highlights how administrators can [set up custom roles](../tutorials/create-custom-admin-roles.md) for users in their domain by using Google APIs. These roles can give users access to features such as Classroom analytics and temporary class access.

#### 22 September 2023: SIS gradebook sync partnership

Added documentation to enable Student Information Systems to set up [gradebook sync](https://developers.google.com/workspace/classroom/sis-integrations/gradebook-sync).

#### 20 September 2023: API preview roadmap

Created the [Roadmap page](./roadmap.md) highlighting upcoming API features and how developers can participate in public previews.

#### 19 July 2023: The add-ons "Posts" resource has been deprecated

Documentation has been updated to reflect the deprecation of "posts" and the addition of add-on specific methods to the Announcements, CourseWork and CourseWorkMaterials resources.

#### 15 May 2023: Upgrade pasted links to add-on attachments

Published a guide on how to configure your add-on to allow teachers to [upgrade pasted links to add-on attachments](../add-ons/developer-guides/upgrade-links-to-addons.md) in assignments. Added information on the Link Upgrade iframe in the [iframe implementation details page](../add-ons/developer-guides/iframes.md#link_upgrade_iframe).

#### 13 March 2023: New Manage invitations guide with Java code snippets

Created the [Manage invitations guide](../guides/manage-invitations.md) with Java code snippets that live in a GitHub repository accessible from the guide.

#### 23 January 2023: New Java code snippets in the Manage guardians guide

Updated the [Manage guardians guide](../guides/manage-guardians.md) to include code examples in Java. The code lives in a GitHub repository that is accessible from the guide.

#### 13 January 2023: Additional scope information to retrieve UserProfile fields

Updated the [`UserProfile`](./rest/v1/userProfiles.md#resource:-userprofile) resource page to highlight the scopes required to return the `photoUrl` and `emailAddress` fields in a response body.

#### 10 January 2023: @UserCannotOwnCourse error message

Documented the [`@UserCannotOwnCourse`](../troubleshooting/common-errors.md#usercannotowncourse) error message in the Request Errors page.

#### 5 January 2023: Customization of Classroom Share Button

Added additional clarity around [customization guidelines for the Classroom Share button](../guides/sharebutton.md#customization).

#### 3 January 2023: New Java code snippets in Manage coursework and grades guide

- Updated the [Manage coursework and grades guide](../guides/manage-coursework.md) to include code examples in Java. The code lives in a GitHub repository that is accessible from the guide.
- Included a new section that shows how to [list all grades](../guides/manage-coursework.md#list_assigned_grades) for a particular coursework item in Java and Python.

#### 21 December 2022: Comprehensive test plan

- Published a new [comprehensive add-ons test plan](https://developers.google.com/static/workspace/classroom/add-ons/classroom_add_ons_test_plan.pdf). These are a series of tests to evaluate your complete Classroom add-on experience and to evaluate your add-on against the Classroom add-on [requirements](../add-ons/requirements.md). The plan describes edge cases, testing procedures, and suggestions to resolve outstanding issues with your add-ons implementation.
- Published our new [Service Level Objectives (SLOs)](https://developers.google.com/workspace/classroom/add-ons/support/slos) for Classroom add-ons issues. The linked document describes how Google handles issues with our Classroom add-ons EAP partners. We greatly appreciate your input in developing this policy.
- Split the [review process](../add-ons/developer-guides/review-process-overview.md) into several smaller pages. Each applies to a specific moment in the development cycle.

#### 19 December 2022: New Java code snippets in Manage aliases and Manage topics guides

Updated the [Manage aliases guide](../guides/manage-aliases.md) and [Manage topics guide](../guides/manage-topics.md) to include code examples in Java. The code lives in a GitHub repository that is accessible from the guides.

#### 15 December 2022: @IneligibleOwner error message

Documented the [`@IneligibleOwner`](../troubleshooting/common-errors.md#ineligibleowner) error message in the Request Errors page.

#### 21 November 2022: Course ownership transfer steps

Updated the [Manage courses guide](../guides/manage-courses.md) to include the [steps to transfer course ownership](../guides/manage-courses.md#transfer_course_ownership) using Classroom API methods.

#### 14 November 2022: Course copy guide

Added a new guide page regarding how to [handle copied add-on attachments](../add-ons/developer-guides/copy-content.md). Consult this guide to confirm that your add-on is compliant with recent [requirements](../add-ons/requirements.md) changes.

#### 19 October 2022: Java walkthrough updates

The second and third steps of our [add-ons walkthrough series](../add-ons/walkthroughs/walkthroughs-overview.md) now include sample code in Java.

#### 8 August 2022: Grade category and gradebook settings

Documented the [grade category](./rest/v1/GradeCategory.md) and [gradebook settings](./rest/v1/courses.md#gradebooksettings) resources.

#### 21 March 2022: @InactiveCourseOwner error message

Documented the [`@InactiveCourseOwner`](../troubleshooting/common-errors.md#inactivecourseowner) error message in the Request Errors page.
