---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/GradingPeriodSettings
root: workspace
fetched_at: 2026-04-23T15:25:52.582Z
---

# GradingPeriodSettings

Grading period settings that include all the individual grading periods in a course.

JSON representation

```
{
  "gradingPeriods": [
    {
      object (GradingPeriod)
    }
  ],
  "applyToExistingCoursework": boolean,
  "previewVersion": enum (PreviewVersion)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>gradingPeriods[]</code></td><td><p><code>object (<code>GradingPeriod</code>)</code></p><p>The list of grading periods in a specific course. Grading periods must not have overlapping date ranges and must be listed in chronological order. Each grading period must have a unique title within a course.</p></td></tr><tr><td><code>applyToExistingCoursework</code></td><td><p><code>boolean</code></p><p>Supports toggling the application of grading periods on existing stream items. Once set, this value is persisted meaning that it does not need to be set in every request to update <code>GradingPeriodSettings</code>. If not previously set, the default is False.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Output only. The preview version of the API used to retrieve this resource.</p></td></tr></tbody></table>

## GradingPeriod

An individual grading period.

Grading periods must not have overlapping date ranges and must be listed in chronological order. For example, if the endDate of a grading period is 2024-01-25, then the startDate of the next grading period must be 2024-01-26 or later. Each grading period must have a unique title within a course.

JSON representation

```
{
  "id": string,
  "title": string,
  "startDate": {
    object (Date)
  },
  "endDate": {
    object (Date)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Output only. System generated grading period ID.</p><p>Read-only.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Required. Title of the grading period. For example, “Semester 1”.</p></td></tr><tr><td><code>startDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Required. Start date, in UTC, of the grading period. Inclusive.</p></td></tr><tr><td><code>endDate</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Required. End date, in UTC, of the grading period. Inclusive.</p></td></tr></tbody></table>
