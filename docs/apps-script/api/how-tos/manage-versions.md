---
source: https://developers.google.com/apps-script/api/how-tos/manage-versions
root: apps-script
fetched_at: 2026-04-23T15:18:10.545Z
---

# Manage versions

## Page Summary

- This section describes Apps Script API methods for managing script project versions.
- You can use methods to create, list, and read project code versions.
- API methods return `Version` objects containing configuration details like version number and description.
- To read the code of a specific version, use a `projects.getContent` request.

This section provides an overview of the Google Apps Script API methods you can use to create a new project code [version](https://developers.google.com/apps-script/guides/versions), read version information, or list all existing versions.

<table><tbody><tr><th colspan="2"><strong>API method overview</strong></th></tr><tr><td><strong>Create a version</strong></td><td><p><a href="https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create">projects.versions.create</a></p><p><strong>Results</strong>: Create a new, immutable version of a script project's code. The project's current saved code is used for the version. This creates a code "snapshot" you can read later or use in a specific <a href="https://developers.google.com/apps-script/concepts/deployments">deployment</a>. Returns a <a href="https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions#Version"><code>Version</code></a> object, containing the version configuration details.</p></td></tr><tr><td><strong>List a project's versions</strong></td><td><p><a href="https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list">projects.versions.list</a></p><p><strong>Results</strong>: Returns an array of <a href="https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions#Version"><code>Version</code></a> objects, each representing one of the versions of the script project.</p></td></tr><tr><td><strong>Read a version</strong></td><td><p><a href="https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get">projects.versions.get</a></p><p><strong>Results</strong>: Returns a <a href="https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions#Version"><code>Version</code></a> that represents a specific version of a script project.</p></td></tr></tbody></table>
