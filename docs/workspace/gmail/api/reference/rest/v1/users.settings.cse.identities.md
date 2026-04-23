---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.cse.identities
root: workspace
fetched_at: 2026-04-23T15:29:00.181Z
---

# REST Resource: users.settings.cse.identities

## Resource: CseIdentity

The client-side encryption (CSE) configuration for the email address of an authenticated user. Gmail uses CSE configurations to save drafts of client-side encrypted email messages, and to sign and send encrypted email messages.

For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope.

For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

JSON representation

```
{
  "emailAddress": string,

  "primaryKeyPairId": string,
  "signAndEncryptKeyPairs": {
    object (SignAndEncryptKeyPairs)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>emailAddress</code></td><td><p><code>string</code></p><p>The email address for the sending identity. The email address must be the primary email address of the authenticated user.</p></td></tr><tr><td colspan="2"><p>Union field <code>key_pair_configuration</code>.</p><p><code>key_pair_configuration</code> can be only one of the following:</p></td></tr><tr><td><code>primaryKeyPairId</code></td><td><p><code>string</code></p><p>If a key pair is associated, the ID of the key pair, <code>CseKeyPair</code>.</p></td></tr><tr><td><code>signAndEncryptKeyPairs</code></td><td><p><code>object (<code>SignAndEncryptKeyPairs</code>)</code></p><p>The configuration of a CSE identity that uses different key pairs for signing and encryption.</p></td></tr></tbody></table>

## SignAndEncryptKeyPairs

The configuration of a CSE identity that uses different key pairs for signing and encryption.

JSON representation

```
{
  "signingKeyPairId": string,
  "encryptionKeyPairId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>signingKeyPairId</code></td><td><p><code>string</code></p><p>The ID of the <code>CseKeyPair</code> that signs outgoing mail.</p></td></tr><tr><td><code>encryptionKeyPairId</code></td><td><p><code>string</code></p><p>The ID of the <code>CseKeyPair</code> that encrypts signed outgoing mail.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates and configures a client-side encryption identity that's authorized to send mail from the user account.</td></tr><tr><td><h3>delete</h3></td><td>Deletes a client-side encryption identity.</td></tr><tr><td><h3>get</h3></td><td>Retrieves a client-side encryption identity configuration.</td></tr><tr><td><h3>list</h3></td><td>Lists the client-side encrypted identities for an authenticated user.</td></tr><tr><td><h3>patch</h3></td><td>Associates a different key pair with an existing client-side encryption identity.</td></tr></tbody></table>
