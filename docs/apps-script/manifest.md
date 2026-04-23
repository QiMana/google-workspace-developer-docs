---
source: https://developers.google.com/apps-script/manifest
root: apps-script
fetched_at: 2026-04-23T15:18:27.959Z
---

# Manifest structure

## Page Summary

- An Apps Script project's manifest file defines its function or purpose.
- The manifest uses a JSON data structure with various fields for configuration.
- Fields in the manifest can configure the project as a Google Workspace add-on, Google Chat app, or web app.
- The manifest includes configurations for dependencies, exception logging, authorization scopes, runtime version, and time zone.
- A URL allowlist can be used in the manifest to restrict fetched URL endpoints.

This page describes the top-level of the Google Apps Script manifest file JSON data structure. The manifest defines the Apps Script project function or purpose.

JSON representation

```
{
  "addOns": {
    object (AddOns)
  },
  "chat": {},
  "dependencies": {
    object (Dependencies)
  },
  "exceptionLogging": string,
  "executionApi": {
    object (ExecutionApi)
  },
  "oauthScopes": [
    string
  ],
  "runtimeVersion": string,
  "sheets": {
    object (Sheets)
  },
  "timeZone": string,
  "urlFetchWhitelist": [
    string
  ],
  "webapp": {
    object (Webapp)
  }
}
```

<table><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>addOns</code></td><td><p><code>object (AddOns)</code></p><p>The project resource configuration if deployed as a <a href="https://developers.google.com/apps-script/add-ons/concepts/types">Google Workspace add-on</a>.</p></td></tr><tr><td><code>chat</code></td><td><p><code>object</code></p><p>The project configuration if deployed as a <a href="https://developers.google.com/developers.google.com/workspace/chat/overview">Google Chat app</a>.</p><p>For new Chat apps, use the <a href="https://developers.google.com/apps-script/manifest/addons#AddOns.FIELDS.chat"><code>addOns.chat</code></a> field instead. If you maintain an existing Chat app that uses the <code>chat</code> field, it should be an empty object.</p><p>To configure Chat app details, you must enable the Google Chat API. For details, see <a href="https://developers.google.com/workspace/chat/configure-chat-api">Configure the Google Chat API</a>.</p><p>Apps Script handles authorization at the script level. A Chat app that requires authorization cannot perform actions until the user authorizes it. To post a message before authorization, add an <code>addToSpaceFallbackMessage</code> object to the manifest. If your Chat app requires initialization logic, you might need to duplicate this logic in the <code>onMessage</code> action.</p><p>The following example shows a Chat app that responds with a default welcome message when a user adds it to a Chat space:</p><div><pre><code>"chat": {
  "addToSpaceFallbackMessage": "Thank you for adding me!"
}</code></pre></div></td></tr><tr><td><code>dependencies</code></td><td><p><code>object (Dependencies)</code></p><p>The configuration of <a href="https://developers.google.com/apps-script/guides/services/advanced">advanced services</a> and <a href="https://developers.google.com/apps-script/guides/libraries">libraries</a> enabled for use by the script project.</p></td></tr><tr><td><code>exceptionLogging</code></td><td><p><code>string</code></p><p>The location where exceptions are logged. Valid settings include:</p><ul><li><code>NONE</code>: Exceptions are not logged.</li><li><code>STACKDRIVER</code>: Exceptions are logged in <a href="https://developers.google.com/apps-script/guides/logging#stackdriver_error_reporting">Stackdriver</a>.</li></ul></td></tr><tr><td><code>executionApi</code></td><td><p><code>object (ExecutionApi)</code></p><p>The script project API executable configuration. This is only used if the project is deployed for API execution.</p></td></tr><tr><td><code>oauthScopes[]</code></td><td><p><code>string</code></p><p>The definition of <a href="https://developers.google.com/apps-script/concepts/scopes">authorization scopes</a> used by the script project.</p></td></tr><tr><td><code>runtimeVersion</code></td><td><p><code>string</code></p><p>The <a href="https://developers.google.com/apps-script/guides/v8-runtime">runtime version</a> the script is using. If omitted, the script uses the default runtime (<code>STABLE</code>). Valid options include:</p><ul><li><code>STABLE</code>: Default runtime (currently Rhino).</li><li><code>V8</code>: V8-powered runtime.</li><li><code>DEPRECATED_ES5</code>: Rhino runtime. This value prevents automatic migration to V8.</li></ul></td></tr><tr><td><code>sheets</code></td><td><p><code>object (Sheets)</code></p><p>The resource configuration defining <a href="https://developers.google.com/apps-script/guides/sheets/macros#manifest_structure_for_macros">Sheets macros</a>.</p></td></tr><tr><td><code>timeZone</code></td><td><p><code>string</code></p><p>The <a href="https://developers.google.com/apps-script/reference/base/session#getScriptTimeZone()">script time zone</a> in a <a href="https://docs.oracle.com/javase/8/docs/api/java/time/ZoneId.html">ZoneId</a> value such as "America/Denver".</p></td></tr><tr><td><code>urlFetchWhitelist[]</code></td><td><p><code>string</code></p><p>A list of HTTPS URL prefixes. If present, any URL endpoint fetched must match a prefix in this list. This helps protect user data. This field is optional for test deployments but required for deployments. Learn more about <a href="https://developers.google.com/apps-script/manifest/allowlist-url">allowlisting URLs</a>.</p></td></tr><tr><td><code>webapp</code></td><td><p><code>object (Webapp)</code></p><p>The script project web app configuration, used if the project is deployed as a web app.</p></td></tr></tbody></table>
