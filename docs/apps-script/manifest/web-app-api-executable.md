---
source: https://developers.google.com/apps-script/manifest/web-app-api-executable
root: apps-script
fetched_at: 2026-04-23T15:18:30.681Z
---

# Web apps and API executables manifest resource

## Page Summary

- This document describes the resource configurations for web apps and API executables.
- The web app configuration, used when a project is deployed as a web app, defines access permissions and the execution identity.
- The API executable configuration, used when a project is deployed for API execution, defines access permissions.
- Both web app and API executable configurations use a string field named `access` to specify permission levels for running the script.
- The web app configuration includes an additional string field `executeAs` to determine the identity under which the web app runs.

The resource configurations used to define web apps and API executables.

## Webapp

The script project web app configuration, used only if the project is deployed as a web app.

JSON representation

```
{
  "access": string,
  "executeAs": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>access</code></td><td><p><code>string</code></p><p>Web app execution permission levels. Valid settings include:</p><ul><li><code>MYSELF</code>: Only the deploying user can run the app.</li><li><code>DOMAIN</code>: Only users in the same domain as the deployer can run it.</li><li><code>ANYONE</code>: Any logged-in user.</li><li><code>ANYONE_ANONYMOUS</code>: Any user, even if not logged in.</li></ul></td></tr><tr><td><code>executeAs</code></td><td><p><code>string</code></p><p>The identity under which the web app executes. Valid settings include:</p><ul><li><code>USER_ACCESSING</code>: The web app runs as the user accessing it.</li><li><code>USER_DEPLOYING</code>: The web app runs as the user who deployed it.</li></ul></td></tr></tbody></table>

## ExecutionApi

The script project API executable configuration, used only if the project is deployed for API execution.

JSON representation

```
{
  "access": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>access</code></td><td><p><code>string</code></p><p>Determines who has permission to run the script from the API. Valid settings include:</p><ul><li><code>MYSELF</code>: Only the deploying user can run the script.</li><li><code>DOMAIN</code>: Only users in the same domain as the deployer can run it.</li><li><code>ANYONE</code>: Any logged-in user.</li><li><code>ANYONE_ANONYMOUS</code>: Any user, even if not logged in.</li></ul></td></tr></tbody></table>
