---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.forwardingAddresses
root: workspace
fetched_at: 2026-04-23T15:29:02.918Z
---

# REST Resource: users.settings.forwardingAddresses

## Resource: ForwardingAddress

Settings for a forwarding address.

JSON representation

```
{
  "forwardingEmail": string,
  "verificationStatus": enum (VerificationStatus)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>forwardingEmail</code></td><td><p><code>string</code></p><p>An email address to which messages can be forwarded.</p></td></tr><tr><td><code>verificationStatus</code></td><td><p><code>enum (<code>VerificationStatus</code>)</code></p><p>Indicates whether this address has been verified and is usable for forwarding. Read-only.</p></td></tr></tbody></table>

## VerificationStatus

Indicates whether ownership of an email address has been verified for forwarding use.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>verificationStatusUnspecified</code></td><td>Unspecified verification status.</td></tr><tr><td><code>accepted</code></td><td>The address is ready to use for forwarding.</td></tr><tr><td><code>pending</code></td><td>The address is awaiting verification by the owner.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a forwarding address.</td></tr><tr><td><h3>delete</h3></td><td>Deletes the specified forwarding address and revokes any verification that may have been required.</td></tr><tr><td><h3>get</h3></td><td>Gets the specified forwarding address.</td></tr><tr><td><h3>list</h3></td><td>Lists the forwarding addresses for the specified account.</td></tr></tbody></table>
