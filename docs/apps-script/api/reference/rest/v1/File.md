---
source: https://developers.google.com/apps-script/api/reference/rest/v1/File
root: apps-script
fetched_at: 2026-04-23T15:18:12.003Z
---

# File

## Page Summary

- A file within a script project is third-party source code created by developers, which can be server-side JS, HTML, or a configuration file.
- Each file has properties including its name, type, source content, last modifying user, creation time, update time, and a set of defined functions.
- Files can be of different types, such as server-side Javascript, HTML, or JSON for the project's manifest.
- A FunctionSet represents a unique collection of functions within a script file.
- A Function object represents a function in a script project with a name and an ordered list of parameter names.

An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.

JSON representation

```
{
  "name": string,
  "type": enum (FileType),
  "source": string,
  "lastModifyUser": {
    object (User)
  },
  "createTime": string,
  "updateTime": string,
  "functionSet": {
    object (FunctionSet)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The name of the file. The file extension is not part of the file name, which can be identified from the type field.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>FileType</code>)</code></p><p>The type of the file.</p></td></tr><tr><td><code>source</code></td><td><p><code>string</code></p><p>The file content.</p></td></tr><tr><td><code>lastModifyUser</code></td><td><p><code>object (<code>User</code>)</code></p><p>The user who modified the file most recently. The details visible in this object are controlled by the profile visibility settings of the last modifying user.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Creation date timestamp.</p><p>A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: <code>"2014-10-02T15:01:23Z"</code> and <code>"2014-10-02T15:01:23.045123456Z"</code>.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Last modified date timestamp.</p><p>A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: <code>"2014-10-02T15:01:23Z"</code> and <code>"2014-10-02T15:01:23.045123456Z"</code>.</p></td></tr><tr><td><code>functionSet</code></td><td><p><code>object (<code>FunctionSet</code>)</code></p><p>The defined set of functions in the script file, if any.</p></td></tr></tbody></table>

## FileType

An enumeration of different types of files.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ENUM_TYPE_UNSPECIFIED</code></td><td>Undetermined file type; never actually used.</td></tr><tr><td><code>SERVER_JS</code></td><td>An Apps Script server-side code file.</td></tr><tr><td><code>HTML</code></td><td>A file containing client-side HTML.</td></tr><tr><td><code>JSON</code></td><td>A file in JSON format. This type is only used for the script project's manifest. The manifest file content must match the structure of a valid <a href="https://developers.google.com/apps-script/concepts/manifests">ScriptManifest</a></td></tr></tbody></table>

## FunctionSet

A set of functions. No duplicates are permitted.

JSON representation

```
{
  "values": [
    {
      object (Function)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>object (<code>Function</code>)</code></p><p>A list of functions composing the set.</p></td></tr></tbody></table>

## Function

Represents a function in a script project.

JSON representation

```
{
  "name": string,
  "parameters": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>The function name in the script project.</p></td></tr><tr><td><code>parameters[]</code></td><td><p><code>string</code></p><p>The ordered list of parameter names of the function in the script project.</p></td></tr></tbody></table>
