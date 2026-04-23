---
source: https://developers.google.com/workspace/classroom/guides/get-started
root: workspace
fetched_at: 2026-04-23T15:25:45.073Z
---

# Overview

The Google Classroom API provides a programming interface for software developers, administrators, and school leaders to manage Google Classroom resources. You can build software that creates, retrieves, and modifies Classroom courses and their content.

Some typical use cases include:

- Managing courses, rosters, and guardians
- Adding assignments, announcements, and course materials
- Assigning grades and modifying grading settings
- Generating data for analysis
- Making content or tools from an outside provider discoverable and accessible within Classroom

## Is the Classroom API the right solution for me?

Google provides several products to help you interact with Classroom. The following are some common scenarios and recommendations for products that might best fit your needs.

### Modify Google Classroom resources

| Scenario | Recommended solutions |
| --- | --- |
| I want to regularly manage a high volume of courses, users, or other Classroom resources. I am comfortable writing code and maintaining software infrastructure. | Write applications that use Classroom API. |
| I want to occasionally manage a small volume of Classroom resources. I am comfortable writing small amounts of code with little overhead. | Use Classroom API with [Google Apps Script](https://developers.google.com/apps-script). |
| I want to occasionally make changes to individual Classroom resources. I am comfortable working with terminal commands. | Use [Google Apps Manager](https://github.com/GAM-team/GAM). |
| I want a large volume of reports with details about events in Classroom. | Use BigQuery [Data Transfer Service](https://cloud.google.com/bigquery/docs/dts-introduction). |
| I want to conduct an investigation into my users' activity. | Generate reports in the [Admin console](https://admin.google.com/ac/reporting/home) or use the [Reports API](https://developers.google.com/admin-sdk/reports/v1/get-start/overview). |

### Integrate with Google Classroom

| Scenario | Recommended solutions |
| --- | --- |
| I want teachers and students to see and launch my content in Classroom. | Build a [Classroom add-on](https://developers.google.com/workspace/classroom/add-ons). |
| I want teachers to click a button on my website or app that embeds my content in Classroom. | Build a [Classroom add-on](https://developers.google.com/workspace/classroom/add-ons) and [create attachments](https://developers.google.com/workspace/classroom/add-ons/developer-guides/third-party-first-journey) programmatically. |
| I want teachers to click a button on my website or app to link to my content in Classroom. | [Create coursework](https://developers.google.com/workspace/classroom/guides/coursework-integration) using Classroom API or embed [Share to Classroom](https://developers.google.com/workspace/classroom/guides/sharebutton) buttons. |
| I want Classroom teachers to sync with or import information from my Student Information System. | Implement [OneRoster for SIS](https://developers.google.com/workspace/classroom/sis-integrations/getting-started) or create and access resources using Classroom API. |

## Getting started

New developers are encouraged to do the following before starting a new project:

- Read our guide on [Classroom API structure](https://developers.google.com/workspace/classroom/guides/key-concepts/api-structure).
- Read about [grades](https://developers.google.com/workspace/classroom/guides/key-concepts/grades), [user types](https://developers.google.com/workspace/classroom/guides/key-concepts/user-types), [user eligibility](https://developers.google.com/workspace/classroom/guides/key-concepts/user-eligibility), and [administrator actions](https://developers.google.com/workspace/classroom/guides/key-concepts/admin-actions). These guides explain concepts unique to Google Classroom and Classroom API.
- Understand [how Classroom API requests work](https://developers.google.com/workspace/classroom/guides/onboarding/how-requests-work).

To begin developing, ensure that you have completed the [prerequisite steps](https://developers.google.com/workspace/classroom/guides/onboarding/prerequisites). Choose the appropriate [Classroom API scopes](https://developers.google.com/workspace/classroom/guides/auth) for your needs, then set up your environment and begin making requests by following one of the quickstarts:

- [Go](https://developers.google.com/workspace/classroom/quickstart/go)
- [Google Apps Script](https://developers.google.com/workspace/classroom/quickstart/apps-script)
- [Java](https://developers.google.com/workspace/classroom/quickstart/java)
- [JavaScript](https://developers.google.com/workspace/classroom/quickstart/js)
- [Node.js](https://developers.google.com/workspace/classroom/quickstart/nodejs)
- [Python](https://developers.google.com/workspace/classroom/quickstart/python)

### Experiment with the Google APIs Explorer

To experiment calling methods on live data, try using the [Google APIs Explorer](https://developers.google.com/workspace/explore?filter=&discoveryUrl=https%3A%2F%2Fclassroom.googleapis.com%2F%24discovery%2Frest%3Fversion%3Dv1&discoveryRef=). You don't have to write any code to get started, but be aware that actions you perform using the APIs Explorer can modify existing data.

One way to start calling the methods is to call the [`courses.list()`](https://developers.google.com/workspace/explore?filter=&discoveryUrl=https%3A%2F%2Fclassroom.googleapis.com%2F%24discovery%2Frest%3Fversion%3Dv1&discoveryRef=resources.courses.methods.list&operationId=classroom.courses.list) method. This method does not require any request parameters and you can retrieve an `id` from the returned list of courses to use as the request parameter for other API calls. If you don't have any courses, you can create one using the [`courses.create()`](https://developers.google.com/workspace/explore?filter=&discoveryUrl=https%3A%2F%2Fclassroom.googleapis.com%2F%24discovery%2Frest%3Fversion%3Dv1&discoveryRef=resources.courses.methods.create&operationId=classroom.courses.create) method.

You can also explore the [Classroom API reference](https://developers.google.com/workspace/classroom/reference/rest).
