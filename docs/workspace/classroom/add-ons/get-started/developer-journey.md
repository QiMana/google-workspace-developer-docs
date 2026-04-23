---
source: https://developers.google.com/workspace/classroom/add-ons/get-started/developer-journey
root: workspace
fetched_at: 2026-04-23T15:25:40.889Z
---

# Developer journey

The following is a quick overview of steps when developing a Classroom add-on.

## Onboarding

1. You will need test users with the Teaching & Learning or Plus [editions of Google Workspace for Education](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/). If you don't have administrator access to a Google Workspace for Education domain with either of these licenses, complete the steps to [get a developer test domain](../../guides/onboarding/prerequisites.md#get_a_developer_test_domain) and then submit our [domain upgrade request form](https://docs.google.com/forms/d/e/1FAIpQLSeBARH7nviEOyqFp3OWKVR6m4621UW9ELzUFI_XDu5ENqUUGw/viewform?usp=sf_link). The domain will be provisioned with 10 Google Workspace for Education Plus licenses.
2. Configure your test domain to [allow users to install all Marketplace applications](https://support.google.com/a/answer/172931) so that you can install and test your app before it's published. If you want to test the app installation process with more restrictive domain settings, you can change this setting after publishing your app.
3. [Create teacher and student accounts](../developer-guides/project-configuration.md#test_accounts) for testing. Once the license is approved for your demo domain, [assign seats to each of your test accounts](https://support.google.com/a/answer/1727173).
4. [Create a Google Cloud project](../developer-guides/project-configuration.md#project-creation). You'll use it configure your add-on, make API requests, and authenticate and authorize users. You can use also an existing Cloud project.
5. [Configure OAuth](../developer-guides/project-configuration.md#oauth) for your project.
6. [Create a Google Workspace Marketplace listing](../developer-guides/project-configuration.md#workspace_marketplace_name-listing) for the demo project.
	- If you set the App Visibility to **public**, add the email addresses of *all* test users to the list of **Draft testers**. Choose **SAVE DRAFT** when finished.
7. Sign in to your demo domain as a test user. Install your add-on from the **App URL** in your Google Workspace Marketplace listing configuration.

## Development

7. Develop the add-on and test it with your test users.

## Publishing

8. In the [Google Cloud project you want to publish](../developer-guides/project-configuration.md#create_a_public_gcp_project), ensure the following:
	1. OAuth consent screen:
		1. User Type: **External**
				2. Publish Status: **In Production**
				3. Scopes: [Configure **all** scopes](../developer-guides/project-configuration.md#required_classroom_add-ons_scopes) requested by the web app.
		2. Google Workspace Marketplace SDK App Configuration Screen:
		1. App Visibility: **Public**
				2. Listing Type: **Unlisted**
				3. Scopes: [Configure **all** scopes](../developer-guides/project-configuration.md#required_classroom_add-ons_scopes) requested by the web app.
9. [Create a Google Workspace Marketplace listing](../developer-guides/project-configuration.md#google_workspace_marketplace_listing) for the public project. Add your test user accounts as Marketplace SDK Draft testers. Save your changes **as a Draft**.
10. Update the public project with your add-on code.
11. As one of the Draft testers, install the add-on by visiting its [Marketplace listing URL](https://console.cloud.google.com/apis/api/appsmarket-component.googleapis.com/googleapps_sdk_publish).
12. Submit an [OAuth verification request](../developer-guides/review-process-overview.md#complete_oauth_verification) for your public project. You will need to record a short video demonstrating the use of the add-ons scopes using one of the Draft tester accounts.
13. [Publish the public add-on](../developer-guides/review-process-overview.md#complete-review) for Marketplace review.
14. Upon approval, change the Marketplace SDK Listing status to **listed**.

## Required integrations

The following are required to build a Classroom add-on.

1. Google Single Sign-On
	- [Google Identity Platform](https://developers.google.com/identity/choose-auth). Google offers a variety of authentication options.
		- [Integration case studies](https://developers.google.com/identity/sign-in/case-studies).
	See the [frictionless sign-in page](../developer-guides/frictionless-signin.md) for information about how to implement sign-in following best practices.
2. Submission to Google Workspace Marketplace as a Classroom add-on
3. iframe implementations
	- [Attachment Discovery](./iframes/attachment-discovery-iframe.md)
		- [Teacher View](./iframes/teacher-iframe.md)
		- [Student View](./iframes/student-iframe.md)
		- [Student Work Review](./iframes/grader-iframe.md). The Student Work Review iframe is only required if the attachment provides an activity-type attachment.

## Google Workspace Marketplace

The [Google Workspace Marketplace](https://developers.google.com/marketplace) showcases enterprise applications that can be added to an entire domain or to individual Google Workspace accounts. The Marketplace is integrated with the [Google Admin console](https://admin.google.com/) so that domain administrators can quickly find, install, and authorize apps for targeted users.

Some key concepts to be familiar with are:

- [OAuth](../developer-guides/project-configuration.md#oauth) behavior and requirements.
- The [Google Workspace Marketplace developer documentation](../../../index.md).
- The [education section](https://workspace.google.com/marketplace/category/education) of Google Workspace Marketplace.
