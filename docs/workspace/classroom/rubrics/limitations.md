---
source: https://developers.google.com/workspace/classroom/rubrics/limitations
root: workspace
fetched_at: 2026-04-23T15:26:06.222Z
---

# Rubrics structure and known limitations

If unfamiliar with Classroom Rubrics, see these Help Center articles to learn about the [general structure](https://support.google.com/edu/classroom/answer/9335069?co=GENIEPlatform%3DDesktop#zippy=%2Cdelete-an-assignments-rubric%2Cedit-an-assignments-rubric%2Cshare-rubrics-with-export-and-import%2Csee-an-assignments-rubric%2Cadd-a-rubric-to-an-existing-assignment%2Creuse-a-rubric%2Ccreate-a-rubric%2Crubric-overview) of a rubric and how [rubric grading](https://support.google.com/edu/classroom/answer/9335428?ref_topic=11599451&sjid=7396534141168895349-NA) is done in the Classroom UI.

## Rubrics structure

There are some important concepts that may be worth highlighting when using the API to interact with rubrics:

- There is (at most) a single [rubric](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics) associated with a [`CourseWork`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork) and that rubric is unique to that `CourseWork` (it is not shareable across `CourseWork` resources).
- The rubric consists of [criteria](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics#criterion), which consist of [levels](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics#level). A rubric must always have at least one criteria, and a criterion must always have at least one level.
- Levels can be scored (have points) or unscored (no points). Levels must be entirely scored or entirely unscored in a rubric.
	- If the levels are scored, all levels in a criterion must have a unique points value set. Points can be integers (like 10) or floating point values (like 9.99). This can include 0. Null values are not accepted. Additionally, a rubric can't have a single criteria with a single level that is 0 points.
		- If the levels are unscored, the points field should be omitted; null values are not accepted.
- The order for criteria and levels is meaningful and reflects the order they are represented in the Classroom UI.
	- Scored levels in particular must always be sorted by points in either increasing or decreasing order.
- There can be up to 50 criteria per rubric and up to 10 performance levels per criterion.

## Related student submission fields

[`StudentSubmission`](https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.studentSubmissions) objects support rubrics-related fields:

- In addition to the existing `draftGrade` and `assignedGrade` properties, a student submission graded with a rubric has `draftRubricGrades` and `assignedRubricGrades` properties. These represent the rubric grades (levels selected and point values) the student receives during grading from the rubric, in the draft and assigned states, respectively.
- For now, these properties are read-only. This means that *the API can't be used to grade submissions*, but you can read submissions graded in the Classroom UI.

## Rubrics behaviors

The API aims to mirror the Classroom UI whenever possible for consistency, but this can lead to behaviour that may be unintuitive for developers and is worth mentioning:

- Rubrics are intended to *guide* grading without constraining teachers. As a result, a teacher can do the following when grading a submission with a rubric:
	- Completely ignore the rubric when grading.
		- Override the points for a criterion, irrespective of the points available in the criterion's levels.
		- Select levels for only a subset of criteria.
		- Assign points for a criteria without selecting a corresponding level.
		- Override the assignment's total points, irrespective of the points that would come from the rubric.

Additionally, the API doesn't support behavior the Classroom UI doesn't already have. For example, the API doesn't enable enforcing rubrics usage on assignments or overriding a teacher's ability to edit rubrics and submissions as they can today.

## Limitations during grading

Similarly, there are some additional limitations place on editing rubrics once a teacher has started grading with it. Only the following edits are possible after grading as started:

- Text edits are allowed for criterion and level titles and descriptions.
- Level ordering can change within criteria.

## Additional scopes

Rubrics can be manually [exported](https://support.google.com/edu/classroom/answer/9335069?co=GENIE.Platform%3DDesktop#zippy=%2Cshare-rubrics-with-export-and-import) to Google Spreadsheets for re-use by teachers.

If you create or update a rubric from these spreadsheets (see an [example in the guide](https://developers.google.com/workspace/classroom/rubrics/getting-started#export-and-import-rubrics)), your application needs to request the `https://www.googleapis.com/auth/spreadsheets.readonly` or `https://www.googleapis.com/auth/spreadsheets` scope. Be aware that the `spreadsheets` scopes are considered sensitive and may require your application to be [verified](https://support.google.com/cloud/answer/9110914).

## Third-party coursework

Rubrics can only be created by the Google Cloud project that created the parent `CourseWork` item. This is a broader design pattern in the Classroom API which prevents different applications from impacting resources that aren't thiers.

This extends to resources created by users in the Classroom app. For example, It's not possible for an application to manage rubrics for a coursework that a teacher created in the Classroom UI, even if the same teacher owns the application. If this significantly limits your use case, share feedback in the [public issue tracker](https://issuetracker.google.com/issues/new?component=191645&template=823907).

## License requirements

A user can only create, update, and delete rubrics with the Classroom API if the following conditions are met:

- The user making the request has a [Google Workspace for Education Plus](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) license assigned to them.
- The course owner of the corresponding course has a [Google Workspace for Education Plus](https://edu.google.com/intl/ALL_us/workspace-for-education/editions/compare-editions/) license assigned to them.

See [user eligibility](https://developers.google.com/workspace/classroom/guides/key-concepts/user-eligibility) to learn more about how API capabilities are exposed to users and Classroom API [prerequisites](https://developers.google.com/workspace/classroom/guides/onboarding/prerequisites) to become familiar with, and request, a demo account for development.
