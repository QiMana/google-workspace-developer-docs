---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.settings.sendAs
root: workspace
fetched_at: 2026-04-23T15:29:03.499Z
---

# REST Resource: users.settings.sendAs

## Resource: SendAs

Settings associated with a send-as alias, which can be either the primary login address associated with the account or a custom "from" address. Send-as aliases correspond to the ["Send Mail As"](https://support.google.com/mail/answer/22370) feature in the web interface. The send-as alias must be a valid email address.

JSON representation

```
{
  "sendAsEmail": string,
  "displayName": string,
  "replyToAddress": string,
  "signature": string,
  "isPrimary": boolean,
  "isDefault": boolean,
  "treatAsAlias": boolean,
  "smtpMsa": {
    object (SmtpMsa)
  },
  "verificationStatus": enum (VerificationStatus)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>sendAsEmail</code></td><td><p><code>string</code></p><p>The email address that appears in the "From:" header for mail sent using this alias. This is read-only for all operations except create.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>A name that appears in the "From:" header for mail sent using this alias. For custom "from" addresses, when this is empty, Gmail will populate the "From:" header with the name that is used for the primary address associated with the account. If the admin has disabled the ability for users to update their name format, requests to update this field for the primary login will silently fail.</p></td></tr><tr><td><code>replyToAddress</code></td><td><p><code>string</code></p><p>An optional email address that is included in a "Reply-To:" header for mail sent using this alias. If this is empty, Gmail will not generate a "Reply-To:" header.</p></td></tr><tr><td><code>signature</code></td><td><p><code>string</code></p><p>An optional HTML signature that is included in messages composed with this alias in the Gmail web UI. This signature is added to new emails only.</p></td></tr><tr><td><code>isPrimary</code></td><td><p><code>boolean</code></p><p>Whether this address is the primary address used to login to the account. Every Gmail account has exactly one primary address, and it cannot be deleted from the collection of send-as aliases. This field is read-only.</p></td></tr><tr><td><code>isDefault</code></td><td><p><code>boolean</code></p><p>Whether this address is selected as the default "From:" address in situations such as composing a new message or sending a vacation auto-reply. Every Gmail account has exactly one default send-as address, so the only legal value that clients may write to this field is <code>true</code>. Changing this from <code>false</code> to <code>true</code> for an address will result in this field becoming <code>false</code> for the other previous default address.</p></td></tr><tr><td><code>treatAsAlias</code></td><td><p><code>boolean</code></p><p>Whether Gmail should <a href="https://support.google.com/a/answer/1710338">treat this address as an alias</a> for the user's primary email address. This setting only applies to custom "from" aliases.</p></td></tr><tr><td><code>smtpMsa</code></td><td><p><code>object (<code>SmtpMsa</code>)</code></p><p>An optional SMTP service that will be used as an outbound relay for mail sent using this alias. If this is empty, outbound mail will be sent directly from Gmail's servers to the destination SMTP service. This setting only applies to custom "from" aliases.</p></td></tr><tr><td><code>verificationStatus</code></td><td><p><code>enum (<code>VerificationStatus</code>)</code></p><p>Indicates whether this address has been verified for use as a send-as alias. Read-only. This setting only applies to custom "from" aliases.</p></td></tr></tbody></table>

## SmtpMsa

Configuration for communication with an SMTP service.

JSON representation

```
{
  "host": string,
  "port": integer,
  "username": string,
  "password": string,
  "securityMode": enum (SecurityMode)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>host</code></td><td><p><code>string</code></p><p>The hostname of the SMTP service. Required.</p></td></tr><tr><td><code>port</code></td><td><p><code>integer</code></p><p>The port of the SMTP service. Required.</p></td></tr><tr><td><code>username</code></td><td><p><code>string</code></p><p>The username that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.</p></td></tr><tr><td><code>password</code></td><td><p><code>string</code></p><p>The password that will be used for authentication with the SMTP service. This is a write-only field that can be specified in requests to create or update SendAs settings; it is never populated in responses.</p></td></tr><tr><td><code>securityMode</code></td><td><p><code>enum (<code>SecurityMode</code>)</code></p><p>The protocol that will be used to secure communication with the SMTP service. Required.</p></td></tr></tbody></table>

## SecurityMode

A protocol that may be used to secure communication with the SMTP service.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>securityModeUnspecified</code></td><td>Unspecified security mode.</td></tr><tr><td><code>none</code></td><td>Communication with the remote SMTP service is unsecured. Requires port 25.</td></tr><tr><td><code>ssl</code></td><td>Communication with the remote SMTP service is secured using SSL.</td></tr><tr><td><code>starttls</code></td><td>Communication with the remote SMTP service is secured using STARTTLS.</td></tr></tbody></table>

## VerificationStatus

Indicates whether ownership of an address has been verified for its use as a send-as alias.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>verificationStatusUnspecified</code></td><td>Unspecified verification status.</td></tr><tr><td><code>accepted</code></td><td>The address is ready to use as a send-as alias.</td></tr><tr><td><code>pending</code></td><td>The address is awaiting verification by the owner.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates a custom "from" send-as alias.</td></tr><tr><td><h3>delete</h3></td><td>Deletes the specified send-as alias.</td></tr><tr><td><h3>get</h3></td><td>Gets the specified send-as alias.</td></tr><tr><td><h3>list</h3></td><td>Lists the send-as aliases for the specified account.</td></tr><tr><td><h3>patch</h3></td><td>Patch the specified send-as alias.</td></tr><tr><td><h3>update</h3></td><td>Updates a send-as alias.</td></tr><tr><td><h3>verify</h3></td><td>Sends a verification email to the specified send-as alias address.</td></tr></tbody></table>
