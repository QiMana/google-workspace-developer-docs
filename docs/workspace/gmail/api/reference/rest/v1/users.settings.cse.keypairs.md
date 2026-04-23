---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.cse.keypairs
root: workspace
fetched_at: 2026-04-23T15:29:01.821Z
---

# REST Resource: users.settings.cse.keypairs

## Resource: CseKeyPair

A client-side encryption S/MIME key pair, which is comprised of a public key, its certificate chain, and metadata for its paired private key. Gmail uses the key pair to complete the following tasks:

- Sign outgoing client-side encrypted messages.
- Save and reopen drafts of client-side encrypted messages.
- Save and reopen sent messages.
- Decrypt incoming or archived S/MIME messages.

For administrators managing identities and keypairs for users in their organization, requests require authorization with a [service account](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) that has [domain-wide delegation authority](https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority) to impersonate users with the `https://www.googleapis.com/auth/gmail.settings.basic` scope.

For users managing their own identities and keypairs, requests require [hardware key encryption](https://support.google.com/a/answer/14153163) turned on and configured.

JSON representation

```
{
  "keyPairId": string,
  "pkcs7": string,
  "pem": string,
  "subjectEmailAddresses": [
    string
  ],
  "enablementState": enum (EnablementState),
  "disableTime": string,
  "privateKeyMetadata": [
    {
      object (CsePrivateKeyMetadata)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>keyPairId</code></td><td><p><code>string</code></p><p>Output only. The immutable ID for the client-side encryption S/MIME key pair.</p></td></tr><tr><td><code>pkcs7</code></td><td><p><code>string</code></p><p>Input only. The public key and its certificate chain. The chain must be in <a href="https://en.wikipedia.org/wiki/PKCS_7">PKCS#7</a> format and use PEM encoding and ASCII armor.</p></td></tr><tr><td><code>pem</code></td><td><p><code>string</code></p><p>Output only. The public key and its certificate chain, in <a href="https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail">PEM</a> format.</p></td></tr><tr><td><code>subjectEmailAddresses[]</code></td><td><p><code>string</code></p><p>Output only. The email address identities that are specified on the leaf certificate.</p></td></tr><tr><td><code>enablementState</code></td><td><p><code>enum (<code>EnablementState</code>)</code></p><p>Output only. The current state of the key pair.</p></td></tr><tr><td><code>disableTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. If a key pair is set to <code>DISABLED</code>, the time that the key pair's state changed from <code>ENABLED</code> to <code>DISABLED</code>. This field is present only when the key pair is in state <code>DISABLED</code>.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr></tbody></table>

## EnablementState

The enumeration for the current state of the key pair.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>stateUnspecified</code></td><td>The current state of the key pair is not set. The key pair is neither turned on nor turned off.</td></tr><tr><td><code>enabled</code></td><td><p>The key pair is turned on. For any email messages that this key pair encrypts, Gmail decrypts the messages and signs any outgoing mail with the private key.</p><p>To turn on a key pair, use the <code>keypairs.enable</code> method.</p></td></tr><tr><td><code>disabled</code></td><td><p>The key pair is turned off. Authenticated users cannot decrypt email messages nor sign outgoing messages. If a key pair is turned off for more than 30 days, you can permanently delete it.</p><p>To turn off a key pair, use the <code>keypairs.disable</code> method.</p></td></tr></tbody></table>

## CsePrivateKeyMetadata

JSON representation

```
{
  "privateKeyMetadataId": string,

  "kaclsKeyMetadata": {
    object (KaclsKeyMetadata)
  },
  "hardwareKeyMetadata": {
    object (HardwareKeyMetadata)
  }
}
```

## KaclsKeyMetadata

JSON representation

```
{
  "kaclsUri": string,
  "kaclsData": string
}
```

## HardwareKeyMetadata

JSON representation

```
{
  "description": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user.</td></tr><tr><td><h3>disable</h3></td><td>Turns off a client-side encryption key pair.</td></tr><tr><td><h3>enable</h3></td><td>Turns on a client-side encryption key pair that was turned off.</td></tr><tr><td><h3>get</h3></td><td>Retrieves an existing client-side encryption key pair.</td></tr><tr><td><h3>list</h3></td><td>Lists client-side encryption key pairs for an authenticated user.</td></tr><tr><td><h3>obliterate</h3></td><td>Deletes a client-side encryption key pair permanently and immediately.</td></tr></tbody></table>
