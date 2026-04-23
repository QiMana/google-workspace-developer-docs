---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/PopSettings
root: workspace
fetched_at: 2026-04-23T15:28:57.132Z
---

# PopSettings

POP settings for an account.

JSON representation

```
{
  "accessWindow": enum (AccessWindow),
  "disposition": enum (Disposition)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>accessWindow</code></td><td><p><code>enum (<code>AccessWindow</code>)</code></p><p>The range of messages which are accessible via POP.</p></td></tr><tr><td><code>disposition</code></td><td><p><code>enum (<code>Disposition</code>)</code></p><p>The action that will be executed on a message after it has been fetched via POP.</p></td></tr></tbody></table>

## AccessWindow

A range of messages that are accessible via POP.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>accessWindowUnspecified</code></td><td>Unspecified range.</td></tr><tr><td><code>disabled</code></td><td>Indicates that no messages are accessible via POP.</td></tr><tr><td><code>fromNowOn</code></td><td>Indicates that unfetched messages received after some past point in time are accessible via POP.</td></tr><tr><td><code>allMail</code></td><td>Indicates that all unfetched messages are accessible via POP.</td></tr></tbody></table>

## Disposition

Specifies what Gmail should do with a message after it has been fetched via POP.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>dispositionUnspecified</code></td><td>Unspecified disposition.</td></tr><tr><td><code>leaveInInbox</code></td><td>Leave the message in the <code>INBOX</code>.</td></tr><tr><td><code>archive</code></td><td>Archive the message.</td></tr><tr><td><code>trash</code></td><td>Move the message to the <code>TRASH</code>.</td></tr><tr><td><code>markRead</code></td><td>Leave the message in the <code>INBOX</code> and mark it as read.</td></tr></tbody></table>
