---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions
root: apps-script
fetched_at: 2026-04-23T15:18:13.343Z
---

# REST Resource: projects.versions

## Page Summary

- A Version is a snapshot of a script project, similar to a read-only branched release, used when creating deployments.
- The JSON representation of a Version includes `scriptId`, `versionNumber`, `description`, and `createTime`.
- Key fields include `scriptId` (the project's Drive ID), `versionNumber` (a system-assigned incremental ID), `description`, and `createTime` (when the version was created).
- Available methods for Versions include `create` (to make a new version), `get` (to retrieve a specific version), and `list` (to list project versions).

## Resource: Version

A resource representing a script project version. A version is a "snapshot" of a script project and is similar to a read-only branched release. When creating deployments, the version to use must be specified.

JSON representation

```
{
  "scriptId": string,
  "versionNumber": integer,
  "description": string,
  "createTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr><tr><td><code>versionNumber</code></td><td><p><code>integer</code></p><p>The incremental ID that is created by Apps Script when a version is created. This is system assigned number and is immutable once created.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>The description for this version.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>When the version was created.</p><p>A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: <code>"2014-10-02T15:01:23Z"</code> and <code>"2014-10-02T15:01:23.045123456Z"</code>.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a new immutable version using the current code, with a unique version number.</td></tr><tr><td><h3>get</h3></td><td>Gets a version of a script project.</td></tr><tr><td><h3>list</h3></td><td>List the versions of a script project.</td></tr></tbody></table>
