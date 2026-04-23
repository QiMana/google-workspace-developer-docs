---
source: https://developers.google.com/workspace/classroom/sis-integrations/validate-your-SIS
root: workspace
fetched_at: 2026-04-23T15:26:05.414Z
---

# OneRoster for Student Information Systems

Google Classroom supports gradebook sync and roster import for a number of OneRoster-compliant Student Information Systems (SIS). Google partners with SIS platforms that meet Google-specified OneRoster requirements.

Partnering with Classroom provides administrators the ability to connect their Classroom classes with your SIS.

![](https://developers.google.com/static/workspace/classroom/images/connect-your-SIS.png)

**Figure 1.** When Student Information Systems (SIS) partner with Classroom, administrators can choose the SIS in the drop-down.

## SIS partner development journey

If you are interested in partnering with Classroom, fill out the [interest form](https://docs.google.com/forms/d/e/1FAIpQLSfHEy9dkwuDpvWghYWaVmgrPS58CL5YXO5f6jB_5dOO-_eotg/viewform).

The Classroom team has created a set of [conformance tests](https://github.com/googleworkspace/oneroster-integration-conformance-tests) that interested SIS partners can use to familiarize themselves with Google's requirements. You have the option of running the conformance tests before reaching out to the Classroom team to determine how closely your product meets Google's requirements.

### Obtain a developer demo domain

You may want access to a live Google Classroom instance to build and validate an integration. Eligible test users need the [Plus edition of Google Workspace for Education](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/). If you don't have administrator access to a Google Workspace for Education domain with these licenses, complete the steps to [get a developer test domain](https://developers.google.com/workspace/classroom/guides/onboarding/prerequisites#get-developer) and [request a demo domain upgrade](https://developers.google.com/workspace/classroom/guides/onboarding/prerequisites#request-demo). Your domain will be provisioned with 10 Google Workspace for Education Plus licenses.

### Access and run the tests

In order to run the tests, you need the following:

- Token URL to retrieve OAuth 2.0 credentials
- One Roster URL ending in `/ims/oneroster/v1p1`
- Client ID
- Client secret
- A teacher email address

You can run the tests by using [Google Colab](https://colab.research.google.com/) or [Jupyter notebook](https://docs.jupyter.org/en/latest/running.html). Both Colab and Jupyter notebook let you run all tests at once. This helps you generate the test results to [share with the Google Classroom team](#share-test-results).

## SIS requirements and expected behavior

The Google-defined tests exist to provide interested SIS partners a way to determine whether their product meets Google's OneRoster consumption requirements and to minimize errors that users might experience when utilizing SIS integrations in Classroom. Read through the following pointers on the tests. In GitHub, each test has a title that is referenced in the pointers. Keep in mind that the pointers can help clarify questions, but it's not a comprehensive list of the tests. Ensure you have run all the tests provided in GitHub.

| Test | Pointers |
| --- | --- |
| Teachers: GetAllTeachers | The `GET /teachers` endpoint is called with a `limit` query parameter. In subsequent tests, this parameter is used to ensure that your product can support a page size of 10,000. |
| Teachers: GetAllTeachers with email filter | The `GET /teachers` endpoint is called with a `filter` query parameter used to filter based on a teacher email address. This will use the teacher email address you provided in the Credentials section of the tests. |
| Classes: GetClassesForTeacher | The `/teachers/{teacher_sourced_id}/classes` endpoint is called with a `filter` query parameter used to filter based on active classes. |
| Students: GetStudentsForClass | The `GET /classes/{class_sourced_id}/students` endpoint is called. The student email must be returned in the response. |
| GetGradingPeriodsForTerm | Grading periods support is tested using the `term_sourced_id`. This `term_sourced_id` is used to retrieve the grading periods in the term by calling the `GET terms/{term_sourced_id}/gradingPeriods` endpoint. |
| LineItem: Create | Grading periods aren't required when calling `PUT /lineItems/{line_item_sourced_id}`. |
| LineItem: Edit | The API call shouldn't return an error if a long assignment title length is included. The test includes an assignment title length of 100+ characters. |
| Result: Edit | It should be possible to set the `score` to a value greater than the `resultValueMax` to represent extra credit. |
| Result: Delete | The `DELETE /results/{result_sourced_id}` endpoint is required. |
| LineItem (Optional / Cleanup): Delete and Get | The `DELETE /lineItems/{line_item_sourced_id}` endpoint is not required. It is optional and used for data clean-up. The subsequent `GET /classes/{class_sourced_id}/lineItems` endpoint is also optional, and tests that the line item was deleted. |

## Share the test results with the Google Classroom team

After you run the tests, a full report with the results of each test is generated. These tests are used to determine whether your product meets Google's OneRoster 1.2 consumption requirements. Download or take a screenshot of the generated report to share with the Google Classroom team.

## Get support

Email [classroom-sis-external@google.com](mailto:classroom-sis-external@google.com) with any questions.

## Links

- [Conformance tests on GitHub](https://github.com/googleworkspace/oneroster-integration-conformance-tests)
