---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.delegates
root: workspace
fetched_at: 2026-04-23T15:29:01.237Z
---

# REST Resource: users.settings.delegates

## Resource: Delegate

Settings for a delegate. Delegates can read, send, and delete messages, as well as view and add contacts, for the delegator's account. See ["Set up mail delegation"](https://support.google.com/mail/answer/138350) for more information about delegates.

JSON representation

```
{
  "delegateEmail": string,
  "verificationStatus": enum (VerificationStatus)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>delegateEmail</code></td><td><p><code>string</code></p><p>The email address of the delegate.</p></td></tr><tr><td><code>verificationStatus</code></td><td><p><code>enum (<code>VerificationStatus</code>)</code></p><p>Indicates whether this address has been verified and can act as a delegate for the account. Read-only.</p></td></tr></tbody></table>

## VerificationStatus

Indicates whether ownership of an email address has been verified for delegation use.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>verificationStatusUnspecified</code></td><td>Unspecified verification status.</td></tr><tr><td><code>accepted</code></td><td>The address can act a delegate for the account.</td></tr><tr><td><code>pending</code></td><td>A verification request was mailed to the address, and the owner has not yet accepted it.</td></tr><tr><td><code>rejected</code></td><td>A verification request was mailed to the address, and the owner rejected it.</td></tr><tr><td><code>expired</code></td><td>A verification request was mailed to the address, and it expired without verification.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Adds a delegate with its verification status set directly to <code>accepted</code>, without sending any verification email.</td></tr><tr><td><h3>delete</h3></td><td>Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it.</td></tr><tr><td><h3>get</h3></td><td>Gets the specified delegate.</td></tr><tr><td><h3>list</h3></td><td>Lists the delegates for the specified account.</td></tr></tbody></table>
