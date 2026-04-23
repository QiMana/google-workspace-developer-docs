---
source: https://developers.google.com/workspace/classroom/guides/onboarding/prerequisites
root: workspace
fetched_at: 2026-04-23T15:25:49.828Z
---

# Prerequisites

All Google Workspace integrations depend on Google Cloud to configure API access, handle authentication and authorization, and manage applications. You might also need to obtain access to Google Classroom to test your integration. This guide describes how to request and configure these resources.

## Set up a Google Cloud project

Complete the [steps to get started](../../../guides/get-started.md) for Google Workspace developers. These steps are **required** for all Google Workspace integrations.

## Test accounts and domains

**Demo domains** are test accounts for Classroom API integrations. A demo domain represents a fictional school with a Google Workspace for Education subscription you can use for developing and testing integrations without affecting live users.

You can get a test domain to test administrator capabilities or for development with the Classroom API.

### Get an administrative test domain

You can use a prebuilt demo environment if you only need to test administrator permissions of the API. This includes, for example, creating courses on behalf of teachers.

To use the prebuilt environment, join the Google Cloud [Partner Advantage Program](https://www.partneradvantage.goog/GCPPRM/s/partnerselfregistration). Members receive access to the [Google for Education page](https://www.partneradvantage.goog/GCPPRM/s/productgoogleeducation) of Partner Advantage. This page describes how to access our prebuilt Google Workspace for Education demo environment that can be used for customer demos, product troubleshooting, feature testing, and more.

### Get a developer demo domain

To make requests on behalf of teacher and student users, you need to create and manage your own Google Workspace for Education demo domain. Demo domains include a free, permanent Google Workspace for Education Fundamentals [license](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/). More products can be added to the domain as needed.

Complete the following steps to get a developer demo domain.

1. Purchase a domain in the format `gedu.demo.YOUR DOMAIN`. For example, an organization that operates the domain `myedtech.com` should create `gedu.demo.myedtech.com`. Demo domains must follow this format.
2. [Sign up for Google Workspace for Education](https://workspace.google.com/signup/edu/welcome) using the demo domain. This starts a two-week trial period.
3. [Verify](https://support.google.com/a/answer/60216) that you own the demo domain.
4. Fill out this [form](https://docs.google.com/a/google.com/forms/d/e/1FAIpQLScFnnpQCCbqw-Phwv3ZOkFkSRnH7JhpyBgPl15M_oZBbC3FjA/viewform) to notify Google of your domain registration.
5. If you are developing an integration that uses paid Google Classroom features, [request a demo domain upgrade](#request-demo).
6. Sign in to the [Google Admin console](https://admin.google.com/) using the administrator account you specified when signing up for Google Workspace for Education. From here, [create new demo domain users](https://knowledge.workspace.google.com/kb/how-to-create-a-new-user-000007668); we recommend creating at least three additional users: one to act as teacher and two students.
7. Sign in to [Google Classroom](https://classroom.google.com/) using a new teacher account. [Create a new class](https://support.google.com/edu/classroom/answer/6020273) and [add your new student accounts](https://support.google.com/edu/classroom/answer/6020282) to it.

#### Request a demo domain upgrade for premium features

Users must have an appropriate Google Workspace for Education license to use integrations that affect or depend on premium Classroom features. These features include:

- Classroom add-ons
- Grading periods
- Grading scales
- Grade export
- Roster sync
- Rubrics

See the [Google Workspace for Education licenses](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) page for the full list of features available at each subscription level.

If your integration will use any of these features, complete the following steps to request a demo domain upgrade. An upgraded domain will be granted ten free Google Workspace for Education Plus licenses to assign to your test users.

1. Complete the steps to [get a developer demo domain](#get-developer) if you haven't already.
2. Complete and submit the [demo domain upgrade request form](https://docs.google.com/forms/d/e/1FAIpQLSeBARH7nviEOyqFp3OWKVR6m4621UW9ELzUFI_XDu5ENqUUGw/viewform?usp=sf_link). Submitting this form requests that Google upgrade your demo domain to Google Workspace for Education Plus with ten licenses.
3. You will receive an email when the upgrade process is complete.
4. Assign Plus licenses to your test teacher accounts in the upgraded demo domain [Admin console](https://admin.google.com/).
	1. Under **Directory > Users**, create or select your test teacher account(s).
		2. In each teacher's **Licenses**, confirm that Google Workspace for Education Plus is **Assigned**.
