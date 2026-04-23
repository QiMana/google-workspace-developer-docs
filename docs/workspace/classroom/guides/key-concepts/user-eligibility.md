---
source: https://developers.google.com/workspace/classroom/guides/key-concepts/user-eligibility
root: workspace
fetched_at: 2026-04-23T15:25:46.323Z
---

# User eligibility

While any developer can make requests to the Google Classroom API, some Google Classroom features are only available to certain users. Each feature can have different requirements, such as having a certain Google Workspace for Education license type. For a detailed breakdown of features at each Google Workspace for Education license level, see the [editions comparison page](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/).

## Features with eligibility requirements

The following Classroom API features are only available to eligible users:

- Creating and modifying [Classroom add-on](../../add-ons.md) attachments.
- Modifying [grading period settings](../../grading-periods/manage-grading-periods.md#licensing_requirements).
- Creating, modifying, and deleting [rubrics](../../rubrics/limitations.md#license-requirements).

## Determine user capabilities

Requests to Classroom API are made on behalf of individual users. Therefore, you should check whether a user has the appropriate capabilities before issuing API requests with eligibility requirements.

To determine whether a user has a particular capability, make an API request to the [`checkUserCapability`](../../reference/rest/v1/userProfiles/checkUserCapability.md) method. Include the appropriate [`Capability`](../../reference/rest/v1/userProfiles/checkUserCapability.md#capability) type for the Classroom feature you intend to use. Specify the appropriate `Capability` for each feature:

| To see if the user... | `Capability` |
| --- | --- |
| Can [create](../../reference/rest/v1/courses.courseWork.addOnAttachments/create.md) or [modify](../../reference/rest/v1/courses.courseWork.addOnAttachments/patch.md) a Classroom add-on attachment associated with the Google Cloud project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request | `CREATE_ADD_ON_ATTACHMENT` |
| Can [modify](../../reference/rest/v1/courses/updateGradingPeriodSettings.md) grading period settings | `UPDATE_GRADING_PERIOD_SETTINGS` |
| Can [create](../../reference/rest/v1/courses.courseWork.rubrics/create.md), [modify](../../reference/rest/v1/courses.courseWork.rubrics/patch.md), or [delete](../../reference/rest/v1/courses.courseWork.rubrics/delete.md) a rubric | `CREATE_RUBRIC` |

Next, check the `allowed` field in the response. If `allowed` is `true`, then the user has access to the chosen `Capability`. You can then make API requests related the `Capability` on behalf of the user.
