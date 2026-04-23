---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/ClientSideEncryptionServiceUnavailable
root: workspace
fetched_at: 2026-04-23T15:23:24.262Z
---

# ClientSideEncryptionServiceUnavailable

Alerts for client-side encryption outages.

JSON representation

```
{
  "keyServiceError": [
    {
      object (KeyServiceError)
    }
  ],
  "idpError": [
    {
      object (IdentityProviderError)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>keyServiceError[]</code></td><td><p><code>object (<code>KeyServiceError</code>)</code></p><p>External key services impacted by an outage or misconfiguration.</p></td></tr><tr><td><code>idpError[]</code></td><td><p><code>object (<code>IdentityProviderError</code>)</code></p><p>Identity providers impacted by an outage or misconfiguration.</p></td></tr></tbody></table>

## KeyServiceError

JSON representation

```
{
  "keyServiceUrl": string,
  "httpResponseCode": string,
  "errorInfo": enum (KeyServiceErrorInfo),
  "errorCount": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>keyServiceUrl</code></td><td><p><code>string</code></p><p>Url of the external key service.</p></td></tr><tr><td><code>httpResponseCode</code></td><td><p><code>string (int64 format)</code></p><p>HTTP response status code from the key service.</p></td></tr><tr><td><code>errorInfo</code></td><td><p><code>enum (<code>KeyServiceErrorInfo</code>)</code></p><p>Info on the key service error.</p></td></tr><tr><td><code>errorCount</code></td><td><p><code>string (int64 format)</code></p><p>Number of similar errors encountered.</p></td></tr></tbody></table>

## IdentityProviderError

JSON representation

```
{
  "authorizationBaseUrl": string,
  "errorInfo": enum (IdentityProviderErrorInfo),
  "errorCount": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>authorizationBaseUrl</code></td><td><p><code>string</code></p><p>Authorization base url of the identity provider.</p></td></tr><tr><td><code>errorInfo</code></td><td><p><code>enum (<code>IdentityProviderErrorInfo</code>)</code></p><p>Info on the identity provider error.</p></td></tr><tr><td><code>errorCount</code></td><td><p><code>string (int64 format)</code></p><p>Number of similar errors encountered.</p></td></tr></tbody></table>
