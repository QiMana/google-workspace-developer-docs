---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/SubmissionState
root: workspace
fetched_at: 2026-04-23T15:25:53.686Z
---

# SubmissionState

Possible states of student submissions.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>SUBMISSION_STATE_UNSPECIFIED</code></td><td>No state specified. This should never be returned.</td></tr><tr><td><code>NEW</code></td><td>The student has never accessed this submission. Attachments are not returned and timestamps is not set.</td></tr><tr><td><code>CREATED</code></td><td>Has been created.</td></tr><tr><td><code>TURNED_IN</code></td><td>Has been turned in to the teacher.</td></tr><tr><td><code>RETURNED</code></td><td>Has been returned to the student.</td></tr><tr><td><code>RECLAIMED_BY_STUDENT</code></td><td>Student chose to "unsubmit" the assignment.</td></tr></tbody></table>
