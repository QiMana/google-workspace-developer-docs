---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.courseWork.rubrics
root: workspace
fetched_at: 2026-04-23T15:25:56.045Z
---

# REST Resource: courses.courseWork.rubrics

## Resource: Rubric

The rubric of the course work. A rubric is a scoring guide used to evaluate student work and give feedback.

For further details, see [Rubrics structure and known limitations](https://developers.google.com/classroom/rubrics/limitations).

JSON representation

```
{
  "courseId": string,
  "courseWorkId": string,
  "id": string,
  "creationTime": string,
  "updateTime": string,
  "criteria": [
    {
      object (Criterion)
    }
  ],
  "previewVersion": enum (PreviewVersion),

  "sourceSpreadsheetId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>courseId</code></td><td><p><code>string</code></p><p>Identifier of the course.</p><p>Read-only.</p></td></tr><tr><td><code>courseWorkId</code></td><td><p><code>string</code></p><p>Identifier for the course work this corresponds to.</p><p>Read-only.</p></td></tr><tr><td><code>id</code></td><td><p><code>string</code></p><p>Classroom-assigned identifier for the rubric. This is unique among rubrics for the relevant course work.</p><p>Read-only.</p></td></tr><tr><td><code>creationTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp when this rubric was created.</p><p>Read-only.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. Timestamp of the most recent change to this rubric.</p><p>Read-only.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>criteria[]</code></td><td><p><code>object (<code>Criterion</code>)</code></p><p>List of criteria. Each criterion is a dimension on which performance is rated.</p></td></tr><tr><td><code>previewVersion</code></td><td><p><code>enum (<code>PreviewVersion</code>)</code></p><p>Output only. The preview version of the API used to retrieve this resource.</p></td></tr><tr><td colspan="2">Union field <code>rubric_source</code>. Options to create a rubric from an existing source. <code>rubric_source</code> can be only one of the following:</td></tr><tr><td><code>sourceSpreadsheetId</code></td><td><p><code>string</code></p><p>Input only. Immutable. Google Sheets ID of the spreadsheet. This spreadsheet must contain formatted rubric settings. See <a href="https://support.google.com/edu/classroom/answer/9335069">Create or reuse a rubric for an assignment</a>. Use of this field requires the <code>https://www.googleapis.com/auth/spreadsheets.readonly</code> or <code>https://www.googleapis.com/auth/spreadsheets</code> scope.</p></td></tr></tbody></table>

## Criterion

A rubric criterion. Each criterion is a dimension on which performance is rated.

JSON representation

```
{
  "id": string,
  "title": string,
  "description": string,
  "levels": [
    {
      object (Level)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The criterion ID.</p><p>On creation, an ID is assigned.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the criterion.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description of the criterion.</p></td></tr><tr><td><code>levels[]</code></td><td><p><code>object (<code>Level</code>)</code></p><p>The list of levels within this criterion.</p></td></tr></tbody></table>

## Level

A level of the criterion.

JSON representation

```
{
  "id": string,
  "title": string,
  "description": string,
  "points": number
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The level ID.</p><p>On creation, an ID is assigned.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title of the level.</p><p>If the level has no points set, title must be set.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description of the level.</p></td></tr><tr><td><code>points</code></td><td><p><code>number</code></p><p>Optional points associated with this level. If set, all levels within the rubric must specify points and the value must be distinct across all levels within a single criterion. 0 is distinct from no points.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a rubric.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a rubric.</td></tr><tr><td><h3>get</h3></td><td>Returns a rubric.</td></tr><tr><td><h3>list</h3></td><td>Returns a list of rubrics that the requester is permitted to view.</td></tr><tr><td><h3>patch</h3></td><td>Updates a rubric.</td></tr></tbody></table>
