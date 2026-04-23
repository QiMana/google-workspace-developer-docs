---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/AutoForwarding
root: workspace
fetched_at: 2026-04-23T15:28:56.596Z
---

# AutoForwarding

Auto-forwarding settings for an account.

JSON representation

```
{
  "enabled": boolean,
  "emailAddress": string,
  "disposition": enum (Disposition)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>enabled</code></td><td><p><code>boolean</code></p><p>Whether all incoming mail is automatically forwarded to another address.</p></td></tr><tr><td><code>emailAddress</code></td><td><p><code>string</code></p><p>Email address to which all incoming messages are forwarded. This email address must be a verified member of the forwarding addresses.</p></td></tr><tr><td><code>disposition</code></td><td><p><code>enum (<code>Disposition</code>)</code></p><p>The state that a message should be left in after it has been forwarded.</p></td></tr></tbody></table>

## Disposition

Specifies what Gmail should do with a message after it has been automatically forwarded.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>dispositionUnspecified</code></td><td>Unspecified disposition.</td></tr><tr><td><code>leaveInInbox</code></td><td>Leave the message in the <code>INBOX</code>.</td></tr><tr><td><code>archive</code></td><td>Archive the message.</td></tr><tr><td><code>trash</code></td><td>Move the message to the <code>TRASH</code>.</td></tr><tr><td><code>markRead</code></td><td>Leave the message in the <code>INBOX</code> and mark it as read.</td></tr></tbody></table>
