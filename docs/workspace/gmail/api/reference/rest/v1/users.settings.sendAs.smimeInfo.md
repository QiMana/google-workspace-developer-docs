---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.sendAs.smimeInfo
root: workspace
fetched_at: 2026-04-23T15:29:03.175Z
---

# REST Resource: users.settings.sendAs.smimeInfo

## Resource: SmimeInfo

An S/MIME email config.

JSON representation

```
{
  "id": string,
  "issuerCn": string,
  "isDefault": boolean,
  "expiration": string,
  "encryptedKeyPassword": string,

  "pem": string,
  "pkcs12": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>The immutable ID for the SmimeInfo.</p></td></tr><tr><td><code>issuerCn</code></td><td><p><code>string</code></p><p>The S/MIME certificate issuer's common name.</p></td></tr><tr><td><code>isDefault</code></td><td><p><code>boolean</code></p><p>Whether this SmimeInfo is the default one for this user's send-as address.</p></td></tr><tr><td><code>expiration</code></td><td><p><code>string (int64 format)</code></p><p>When the certificate expires (in milliseconds since epoch).</p></td></tr><tr><td><code>encryptedKeyPassword</code></td><td><p><code>string</code></p><p>Encrypted key password, when key is encrypted.</p></td></tr><tr><td colspan="2">Union field <code>key</code>. The S/MIME "key", which may consist of various combinations of the public key, private key, and certificate chain depending on the format expected and used. <code>key</code> can be only one of the following:</td></tr><tr><td><code>pem</code></td><td><p><code>string</code></p><p>PEM formatted X509 concatenated certificate string (standard base64 encoding). Format used for returning key, which includes public key as well as certificate chain (not private key).</p></td></tr><tr><td><code>pkcs12</code></td><td><p><code>string (bytes format)</code></p><p>PKCS#12 format containing a single private/public key pair and certificate chain. This format is only accepted from client for creating a new SmimeInfo and is never returned, because the private key is not intended to be exported. PKCS#12 may be encrypted, in which case encryptedKeyPassword should be set appropriately.</p><p>A base64-encoded string.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>delete</h3></td><td>Deletes the specified S/MIME config for the specified send-as alias.</td></tr><tr><td><h3>get</h3></td><td>Gets the specified S/MIME config for the specified send-as alias.</td></tr><tr><td><h3>insert</h3></td><td>Insert (upload) the given S/MIME config for the specified send-as alias.</td></tr><tr><td><h3>list</h3></td><td>Lists S/MIME configs for the specified send-as alias.</td></tr><tr><td><h3>setDefault</h3></td><td>Sets the default S/MIME config for the specified send-as alias.</td></tr></tbody></table>
