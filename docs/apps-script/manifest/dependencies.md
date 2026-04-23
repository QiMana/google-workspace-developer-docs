---
source: https://developers.google.com/apps-script/manifest/dependencies
root: apps-script
fetched_at: 2026-04-23T15:18:31.970Z
---

# Libraries and advanced services dependencies manifest resource

## Page Summary

- Dependencies in a script manifest configure the libraries and advanced services the script uses.
- The `dependencies` JSON includes `enabledAdvancedServices` and `libraries`.
- `EnabledAdvancedService` configuration includes the service identifier, user symbol, and version.
- `Library` configuration includes development mode, library ID, user symbol, and version.

The set of configurations for [libraries](../guides/libraries.md) and [advanced services](../guides/services/advanced.md) enabled in the Google Apps Script project.

## Dependencies

The top-level of the dependency manifest configuration.

JSON representation

```
{
  "enabledAdvancedServices": [
    {
      object (EnabledAdvancedService)
    }
  ],
  "libraries": [
    {
      object (Library)
    }
  ]
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>enabledAdvancedServices[]</code></td><td><p><code>object (EnabledAdvancedService)</code></p><p>The list of <a href="https://developers.google.com/apps-script/guides/services/advanced">advanced services</a> enabled for the script project.</p></td></tr><tr><td><code>libraries[]</code></td><td><p><code>object (Library)</code></p><p>The list of <a href="https://developers.google.com/apps-script/guides/libraries">libraries</a> used by the script project.</p></td></tr></tbody></table>

### EnabledAdvancedService

The configuration of an enabled [advanced service](../guides/services/advanced.md).

JSON representation

```
{
  "serviceId": string,
  "userSymbol": string,
  "version": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>serviceId</code></td><td><p><code>string</code></p><p>The service identifier shown in the API discovery document (for example, "drive").</p></td></tr><tr><td><code>userSymbol</code></td><td><p><code>string</code></p><p>The identifier used to refer to this service in the Apps Script project code.</p></td></tr><tr><td><code>version</code></td><td><p><code>string</code></p><p>The enabled service version (for example, "v1").</p></td></tr></tbody></table>

### Library

The configuration of an imported [library](../guides/libraries.md).

JSON representation

```
{
  "developmentMode": boolean,
  "libraryId": string,
  "userSymbol": string,
  "version": string
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>developmentMode</code></td><td><p><code>boolean</code></p><p>If <code>true</code>, the script ignores <code>version</code> and uses the current library project code.</p></td></tr><tr><td><code>libraryId</code></td><td><p><code>string</code></p><p>The script ID of the library project. You can find the script ID in the project URL or by selecting <b>File</b> > <b>Project properties</b>.</p></td></tr><tr><td><code>userSymbol</code></td><td><p><code>string</code></p><p>The label used in the script project code to refer to this library.</p></td></tr><tr><td><code>version</code></td><td><p><code>string</code></p><p>The library version used by the script. This is a version number or <code>stable</code>.</p></td></tr></tbody></table>
