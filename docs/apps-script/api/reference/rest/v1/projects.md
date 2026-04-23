---
source: https://developers.google.com/apps-script/api/reference/rest/v1/projects
root: apps-script
fetched_at: 2026-04-23T15:18:12.372Z
---

# REST Resource: projects

## Page Summary

- The Project resource represents a script project and includes fields like `scriptId`, `title`, `parentId`, `createTime`, `updateTime`, `creator`, and `lastModifyUser`.
- The User resource provides basic user profile information such as `domain`, `email`, `name`, and `photoUrl`.
- Available methods for managing script projects include `create`, `get`, `getContent`, `getMetrics`, and `updateContent`.

## Resource: Project

The script project resource.

JSON representation

```
{
  "scriptId": string,
  "title": string,
  "parentId": string,
  "createTime": string,
  "updateTime": string,
  "creator": {
    object (User)
  },
  "lastModifyUser": {
    object (User)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>scriptId</code></td><td><p><code>string</code></p><p>The script project's Drive ID.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>The title for the project.</p></td></tr><tr><td><code>parentId</code></td><td><p><code>string</code></p><p>The parent's Drive ID that the script will be attached to. This is usually the ID of a Google Document or Google Sheet. This filed is optional, and if not set, a stand-alone script will be created.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>When the script was created.</p><p>A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: <code>"2014-10-02T15:01:23Z"</code> and <code>"2014-10-02T15:01:23.045123456Z"</code>.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>When the script was last updated.</p><p>A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: <code>"2014-10-02T15:01:23Z"</code> and <code>"2014-10-02T15:01:23.045123456Z"</code>.</p></td></tr><tr><td><code>creator</code></td><td><p><code>object (<code>User</code>)</code></p><p>User who originally created the script.</p></td></tr><tr><td><code>lastModifyUser</code></td><td><p><code>object (<code>User</code>)</code></p><p>User who last modified the script.</p></td></tr></tbody></table>

## User

A simple user profile resource.

JSON representation

```
{
  "domain": string,
  "email": string,
  "name": string,
  "photoUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>domain</code></td><td><p><code>string</code></p><p>The user's domain.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>The user's identifying email address.</p></td></tr><tr><td><code>name</code></td><td><p><code>string</code></p><p>The user's display name.</p></td></tr><tr><td><code>photoUrl</code></td><td><p><code>string</code></p><p>The user's photo.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a new, empty script project with no script files and a base manifest file.</td></tr><tr><td><h3>get</h3></td><td>Gets a script project's metadata.</td></tr><tr><td><h3>getContent</h3></td><td>Gets the content of the script project, including the code source and metadata for each script file.</td></tr><tr><td><h3>getMetrics</h3></td><td>Get metrics data for scripts, such as number of executions and active users.</td></tr><tr><td><h3>updateContent</h3></td><td>Updates the content of the specified script project.</td></tr></tbody></table>
