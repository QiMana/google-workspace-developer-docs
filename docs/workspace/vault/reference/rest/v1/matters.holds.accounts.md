---
source: https://developers.google.com/workspace/vault/reference/rest/v1/matters.holds.accounts
root: workspace
fetched_at: 2026-04-23T15:32:07.234Z
---

# REST Resource: matters.holds.accounts

## Resource: HeldAccount

An account covered by a hold. This structure is immutable. It can be an individual account or a Google Group, depending on the service.

To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

JSON representation

```
{
  "accountId": string,
  "holdTime": string,
  "email": string,
  "firstName": string,
  "lastName": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>accountId</code></td><td><p><code>string</code></p><p>The account ID, as provided by the <a href="https://developers.google.com/admin-sdk/">Admin SDK</a>.</p></td></tr><tr><td><code>holdTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. When the account was put on hold.</p><p>Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: <code>"2014-10-02T15:01:23Z"</code>, <code>"2014-10-02T15:01:23.045123456Z"</code> or <code>"2014-10-02T15:01:23+05:30"</code>.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>The primary email address of the account. If used as an input, this takes precedence over <strong>accountId</strong>.</p></td></tr><tr><td><code>firstName</code></td><td><p><code>string</code></p><p>Output only. The first name of the account holder.</p></td></tr><tr><td><code>lastName</code></td><td><p><code>string</code></p><p>Output only. The last name of the account holder.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Adds an account to a hold.</td></tr><tr><td><h3>delete</h3></td><td>Removes an account from a hold.</td></tr><tr><td><h3>list</h3></td><td>Lists the accounts covered by a hold.</td></tr></tbody></table>
