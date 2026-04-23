---
source: https://developers.google.com/workspace/classroom/reference/roadmap
root: workspace
fetched_at: 2026-04-23T15:26:05.287Z
---

# Preview features & roadmap

This page contains information on upcoming features for the Classroom API and details on how to participate in developer preview.

## Preview the Classroom API

Previewing Classroom API features provides an opportunity for developers to influence the shape of feature development with feedback and have integrations ready for public use ahead of general availability.

### Preview lifecycle

Developers can opt-in to versions of the API that contain new, backwards-compatible features. These "preview versions" are available publicly for at least 90 days. Subject to feedback, the preview version and its features are then incorporated into the existing v1 API. Preview versions remain available for at least another 90 days before being shut down.

If feedback on a preview version is strong enough to require breaking changes, a new version is created to support the existing capabilities. Both versions are available for at least 90 days to allow developer migration. Join the [Classroom API Developer Preview](https://groups.google.com/g/classroom-developer-preview-external) mailing list to stay informed of preview changes and subscribe to the [announcement list](https://groups.google.com/forum/#!forum/classroom-dev-announce) for more general Classroom API updates.

## Participate in Classroom API previews

To participate, join the Google Workspace [Developer Preview Program](https://developers.google.com/workspace/preview#apply). Available public preview features are listed in the Google Workspace [active developer previews](https://developers.google.com/workspace/preview#active_developer_previews). If you're testing a private preview feature, you may not see that feature listed in any public documentation.

## Upcoming features

This is our roadmap of expected API features and their timelines. It is updated periodically.

The preview version value represents the expected date for the version's initial preview availability. See [Access preview APIs](https://developers.google.com/workspace/classroom/reference/preview) to learn how preview versions are used.

| Feature | Description | Target for Preview | Target for GA | Preview Version |
| --- | --- | --- | --- | --- |
| User capabilities | Check whether a user has access to certain Classroom features. | 2024 Q4 | 2025 H1 | `V1_20240930_PREVIEW` |

## Previous versions

Once new features are validated, the feature is incorporated into the v1 API and the corresponding preview version is shut down. Developers have at least 90 days to migrate before the preview version shuts down.

| Feature | Description | Incorporated into GA | Target preview shutdown date | Preview Version |
| --- | --- | --- | --- | --- |
| [Rubrics CRUD](https://developers.google.com/workspace/classroom/rubrics) | Create, read, update, and delete classroom rubrics on behalf of teachers. | 2024 Dec 05 | 2025 Apr 01 | `V1_20231110_PREVIEW` |
| [Grading Periods](https://developers.google.com/workspace/classroom/grading-periods/manage-grading-periods) | Create, read, update, and delete grading periods on behalf of administrators and teachers. | 2025 Apr 08 | 2025 Aug 01 | `V1_20240401_PREVIEW` |
| [Student groups](https://developers.google.com/workspace/classroom/guides/manage-student-groups) | Manage student groups and its members on behalf of administrators and teachers. | 2026 Jan 26 | 2026 Jun 01 | `V1_20250630_PREVIEW` |

### Migration guidance

Once features from a preview version are incorporated into the v1 API, remove the `previewVersion` argument from related API calls to ensure that your application continues to behave as expected. For example, if you were accessing rubrics creation capabilities introduced in the `V1_20231110_PREVIEW` version, your API calls might have looked as follows:

```
rubric = service.courses().courseWork().rubrics().create(
        courseId=course_id, courseWorkId=coursework_id, body=body,
        # Specify the preview version. Rubrics CRUD capabilities are
        # supported in V1_20231110_PREVIEW and later.
        previewVersion="V1_20231110_PREVIEW"
        ).execute()
```

To migrate to the v1 GA API, remove the `previewVersion` argument:

```
rubric = service.courses().courseWork().rubrics().create(
        courseId=course_id, courseWorkId=coursework_id, body=body,
        ).execute()
```

If you were using a statically generated client library specifically for accessing a given preview version feature, and aren't using other preview API features, transition to the default client library for your language. See [Access preview APIs](https://developers.google.com/workspace/classroom/reference/preview) to learn more.

## Feedback

Share your feedback for preview features through the linked IssueTracker in the [active developer previews](https://developers.google.com/workspace/preview#active_developer_previews) section of the Google Workspace Developer Preview Program overview page.

## Use Classroom API preview features in production

If you'd like to use Classroom API preview features with end users, including any real teachers, administrators, or students, you must agree to a Classroom-specific amendment to the Google Workspace Google Workspace [Developer Preview Program terms](https://developers.google.com/workspace/preview#developer_preview_program_terms) by completing and submitting this form:

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfZB85TbsbWMGCNtefFTd8Kd8VRjEKNkKvPzkrBnJx3vMNJCg/viewform?embedded=true" width="100%" height="1000" frameborder="0">Loading…</iframe>
