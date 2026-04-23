---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters/addPermissions
root: workspace
fetched_at: 2026-04-23T15:32:08.073Z
---

# Method: matters.addPermissions

Adds an account as a matter collaborator.

### HTTP request

`POST https://vault.googleapis.com/v1/matters/{matterId}:addPermissions`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>matterId</code></td><td><p><code>string</code></p><p>The matter ID.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "matterPermission": {
    
  },
  "sendEmails": boolean,
  "ccMe": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>matterPermission</code></td><td><p>The account and its role to add.</p></td></tr><tr><td><code>sendEmails</code></td><td><p><code>boolean</code></p><p>To send a notification email to the added account, set to <strong>true</strong>. To not send a notification email, set to <strong>false</strong>.</p></td></tr><tr><td><code>ccMe</code></td><td><p><code>boolean</code></p><p>Only relevant if <strong>sendEmails</strong> is <strong>true</strong>. To CC the requestor in the email message, set to <strong>true</strong>. To not CC requestor, set to <strong>false</strong>.</p></td></tr></tbody></table>

### Response body

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/ediscovery`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
