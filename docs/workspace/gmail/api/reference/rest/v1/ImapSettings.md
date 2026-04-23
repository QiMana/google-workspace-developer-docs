---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/ImapSettings
root: workspace
fetched_at: 2026-04-23T15:28:56.873Z
---

# ImapSettings

IMAP settings for an account.

JSON representation

```
{
  "enabled": boolean,
  "autoExpunge": boolean,
  "expungeBehavior": enum (ExpungeBehavior),
  "maxFolderSize": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>enabled</code></td><td><p><code>boolean</code></p><p>Whether IMAP is enabled for the account.</p></td></tr><tr><td><code>autoExpunge</code></td><td><p><code>boolean</code></p><p>If this value is true, Gmail will immediately expunge a message when it is marked as deleted in IMAP. Otherwise, Gmail will wait for an update from the client before expunging messages marked as deleted.</p></td></tr><tr><td><code>expungeBehavior</code></td><td><p><code>enum (<code>ExpungeBehavior</code>)</code></p><p>The action that will be executed on a message when it is marked as deleted and expunged from the last visible IMAP folder.</p></td></tr><tr><td><code>maxFolderSize</code></td><td><p><code>integer</code></p><p>An optional limit on the number of messages that an IMAP folder may contain. Legal values are 0, 1000, 2000, 5000 or 10000. A value of zero is interpreted to mean that there is no limit.</p></td></tr></tbody></table>

## ExpungeBehavior

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>expungeBehaviorUnspecified</code></td><td>Unspecified behavior.</td></tr><tr><td><code>archive</code></td><td>Archive messages marked as deleted.</td></tr><tr><td><code>trash</code></td><td>Move messages marked as deleted to the trash.</td></tr><tr><td><code>deleteForever</code></td><td>Immediately and permanently delete messages marked as deleted. The expunged messages cannot be recovered.</td></tr></tbody></table>
