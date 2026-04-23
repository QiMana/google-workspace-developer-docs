---
source: https://developers.google.com/workspace/classroom/reference/rest/v1/courses.aliases
root: workspace
fetched_at: 2026-04-23T15:25:52.927Z
---

# REST Resource: courses.aliases

## Resource: CourseAlias

Alternative identifier for a course.

An alias uniquely identifies a course. It must be unique within one of the following scopes:

- domain: A domain-scoped alias is visible to all users within the alias creator's domain and can be created only by a domain admin. A domain-scoped alias is often used when a course has an identifier external to Classroom.
- project: A project-scoped alias is visible to any request from an application using the Developer Console project ID that created the alias and can be created by any project. A project-scoped alias is often used when an application has alternative identifiers. A random value can also be used to avoid duplicate courses in the event of transmission failures, as retrying a request will return `ALREADY_EXISTS` if a previous one has succeeded.

JSON representation

```
{
  "alias": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>alias</code></td><td><p><code>string</code></p><p>Alias string. The format of the string indicates the desired alias scoping.</p><ul><li><code>d:<name></code> indicates a domain-scoped alias. Example: <code>d:math_101</code></li><li><code>p:<name></code> indicates a project-scoped alias. Example: <code>p:abc123</code></li></ul><p>This field has a maximum length of 256 characters.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates an alias for a course.</td></tr><tr><td><h3>delete</h3></td><td>Deletes an alias of a course.</td></tr><tr><td><h3>list</h3></td><td>Returns a list of aliases for a course.</td></tr></tbody></table>
