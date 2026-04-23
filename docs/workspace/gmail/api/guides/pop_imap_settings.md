---
source: https://developers.google.com/workspace/gmail/api/guides/pop_imap_settings
root: workspace
fetched_at: 2026-04-23T15:28:51.861Z
---

# Configure POP and IMAP settings with the Gmail API

This document explains how to manage POP and IMAP protocols using the Gmail API.

POP and IMAP are two ways to read your Gmail messages in other email clients. POP is an older technology that can only be used for a single computer. POP-based emails are downloaded and you decide how often you want to download new ones. IMAP can be used across multiple devices and emails are synced in real time.

You can use the [`settings`](../reference/rest/v1/users.settings.md) resource of the Gmail API to configure how Gmail handles POP and IMAP protocols:

- [`settings.getPop`](../reference/rest/v1/users.settings/getPop.md)
- [`settings.updatePop`](../reference/rest/v1/users.settings/updatePop.md)
- [`settings.getImap`](../reference/rest/v1/users.settings/getImap.md)
- [`settings.updateImap`](../reference/rest/v1/users.settings/updateImap.md)

## POP

You can manage POP settings for an account using the [`PopSettings`](../reference/rest/v1/PopSettings.md) object.

### Enable and disable access

Control access with the [`accessWindow`](../reference/rest/v1/PopSettings.md#FIELDS.access_window) field. This field determines whether POP is enabled and which messages the API retrieves.

| Value | Effect |
| --- | --- |
| `disabled` | No messages are accessible through POP |
| `allMail` | All unfetched messages are accessible through POP |
| `fromNowOn` | Only new messages are accessible through POP |

### Message disposition

Configure the disposition of messages that the API retrieves with the [`disposition`](../reference/rest/v1/PopSettings.md#FIELDS.disposition) field.

| Value | Effect |
| --- | --- |
| `archive` | Move messages out of the `INBOX` |
| `leaveInInbox` | Do nothing; leave messages unread in the `INBOX` |
| `markRead` | Leave the message in the `INBOX` and mark it as read |
| `trash` | Move the message to the `TRASH` |

## IMAP

You can manage IMAP settings for an account using the [`ImapSettings`](../reference/rest/v1/ImapSettings.md) object.

### Enable and disable access

Control access with the boolean [`enabled`](../reference/rest/v1/ImapSettings.md#FIELDS.enabled) field. This field determines whether IMAP is enabled for the account.

### Message disposition

Configure the disposition of a message when it is marked as deleted and expunged from the last visible IMAP folder with the [`expungeBehavior`](../reference/rest/v1/ImapSettings.md#FIELDS.expunge_behavior) field.

| Value | Effect |
| --- | --- |
| `archive` | Move messages marked as deleted out of the `INBOX` |
| `deleteForever` | Permanently delete messages marked as deleted |
| `trash` | Move messages marked as deleted to the `TRASH` |

If the boolean [`autoExpunge`](../reference/rest/v1/ImapSettings.md#FIELDS.auto_expunge) field is `true`, Gmail immediately expunges a message when it is marked as deleted in IMAP. Otherwise, messages remain until the IMAP client explicitly requests their removal.

## Related topics

- [IMAP, POP, and SMTP for Gmail IMAP API](../../imap/imap-smtp.md)
- [Choose your IMAP email client settings for Gmail](https://support.google.com/mail/answer/78892)
- [Read Gmail messages on other email clients using POP](https://support.google.com/mail/answer/7104828)
