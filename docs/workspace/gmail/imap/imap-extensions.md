---
source: https://developers.google.com/workspace/gmail/imap/imap-extensions
root: workspace
fetched_at: 2026-04-23T15:29:07.093Z
---

# IMAP Extensions

This document describes the IMAP extensions provided by Gmail and how they may be used by developers. This document assumes familiarity with the [IMAP protocol](https://datatracker.ietf.org/doc/html/rfc3501).

## Overview

Gmail provides a set of IMAP extensions to allow authors of IMAP clients provide a more Gmail-like experience through IMAP. Developers integrating Gmail features into their web or mobile apps may instead want to use the RESTful [Gmail API](https://developers.google.com/workspace/gmail/api).

The extensions may be used when accessing Gmail through the standard IMAP protocol or when connecting via [OAuth](https://developers.google.com/workspace/gmail/imap/xoauth2-protocol).

## Checking for the presence of extensions

Gmail advertises its extension support in its response to the `CAPABILITY` command. The support of extensions in this document are indicated by the presence of `X-GM-EXT-1` in the list of supported capabilities.

Clients are strongly recommended to announce themselves with the IMAP ID command ([RFC 2971](https://tools.ietf.org/html/rfc2971)), and include a contact address as a fallback in case changes to these extensions are required.

The following is an example handshake and use of the `CAPABILITY` command on the Gmail IMAP endpoint:

```
* OK Gimap ready for requests from 127.0.0.1 k2if6111336rvb.0
a001 LOGIN username@gmail.com password
a001 OK username@gmail.com authenticated (Success)
a001 OK Login successful
a002 CAPABILITY
* CAPABILITY IMAP4rev1 UNSELECT LITERAL+ IDLE NAMESPACE QUOTA ID XLIST CHILDREN X-GM-EXT-1
a002 OK Success
a003 ID ("name" "clientname" "version" "1.2.3" "vendor" "companyname" "contact" "foo@example.com")
* ID ("name" "GImap" "vendor" "Google, Inc." "support-url" "http://mail.google.com/support" "remote-host" "127.0.0.1")
a003 OK Success
```

## Special-Use Extension of the LIST command

Gmail supports the [IMAP LIST Extension for Special-Use Mailboxes](https://tools.ietf.org/html/rfc6154), which provides new attributes for special folders. These attributes let the client know which folders are special (eg. `\All`). The current list of special folders consists of: Starred, Important, Sent Items, Drafts, Spam, All Mail, and Trash. All `LIST` responses contain these Special-Use attributes; this is not a new `CAPABILITY` or something that needs to be `ENABLEd` by clients.

The following is an example transcript of a call to `LIST`:

```
a004 LIST "" "*"
* LIST (\HasNoChildren) "/" "INBOX"
* LIST (\Noselect \HasChildren) "/" "[Gmail]"
* LIST (\HasNoChildren \All) "/" "[Gmail]/All Mail"
* LIST (\HasNoChildren \Drafts) "/" "[Gmail]/Drafts"
* LIST (\HasNoChildren \Important) "/" "[Gmail]/Important"
* LIST (\HasNoChildren \Sent) "/" "[Gmail]/Sent Mail"
* LIST (\HasNoChildren \Junk) "/" "[Gmail]/Spam"
* LIST (\HasNoChildren \Flagged) "/" "[Gmail]/Starred"
* LIST (\HasNoChildren \Trash) "/" "[Gmail]/Trash"
a004 OK Success
```

The response follows the Special-Use standard with an additional `\Important` attribute added for Gmail's Priority Inbox (i.e. `"[Gmail]/Important"`).

## XLIST is deprecated

The Gmail-specific `XLIST` command was deprecated in 2013 in favor of the [IMAP Special-Use List Standard](https://tools.ietf.org/html/rfc6154). Clients are strongly encouraged to migrate from `XLIST` to the Special-Use industry standard as soon as possible. Note that the Special-Use standard attribute names are similar but not identical to the legacy `XLIST` attribute names.

## Extension of the SEARCH command: X-GM-RAW

To provide access to the full Gmail search syntax, Gmail provides the `X-GM-RAW` search attribute. Arguments passed along with the `X-GM-RAW` attribute when executing the `SEARCH` or `UID SEARCH` commands will be interpreted in the same manner as in the Gmail web interface.

The following is an example transcript of a call to `SEARCH` using the `X-GM-RAW` attribute:

```
a005 SEARCH X-GM-RAW "has:attachment in:unread"
* SEARCH 123 12344 5992
a005 OK SEARCH (Success)
```

## Access to the Gmail unique message ID: X-GM-MSGID

Gmail provides a unique message ID for each email so that a unique message may be identified across multiple folders. Retrieval of this message ID is supported via the `X-GM-MSGID` attribute on the `FETCH` command. The message ID is a 64-bit unsigned integer and is the decimal equivalent for the ID hex string used in the web interface and the [Gmail API](https://developers.google.com/workspace/gmail/api).

The following is an example transcript of a call to retrieve the `X-GM-MSGID` of a message with the `FETCH` command:

```
a006 FETCH 1 (X-GM-MSGID)
* 1 FETCH (X-GM-MSGID 1278455344230334865)
a006 OK FETCH (Success)
```

The `X-GM-MSGID` attribute may also be used in the `SEARCH` or `UID SEARCH` commands to find the sequence numbers or `UID` of a message given Gmail's message ID. The following is an example transcript of a call to retrieve the `UID` of a message using the `UID SEARCH` command:

```
a007 UID SEARCH X-GM-MSGID 1278455344230334865
* SEARCH 1
a007 OK SEARCH (Success)
```

## Access to the Gmail thread ID: X-GM-THRID

Gmail provides a thread ID to associate groups of messages in the same manner as in the Gmail web interface. Retrieval of this thread ID is supported via the `X-GM-THRID` attribute on the `FETCH` command. The thread ID is a 64-bit unsigned integer and is the decimal equivalent for the ID hex string used in the web interface and the [Gmail API](https://developers.google.com/workspace/gmail/api).

The following is an example transcript of a call to retrieve the `X-GM-THRID` of several messages (in two threads) with the `FETCH` command:

```
a008 FETCH 1:4 (X-GM-THRID)
* 1 FETCH (X-GM-THRID 1278455344230334865)
* 2 FETCH (X-GM-THRID 1266894439832287888)
* 3 FETCH (X-GM-THRID 1266894439832287888)
* 4 FETCH (X-GM-THRID 1266894439832287888)
a008 OK FETCH (Success)
```

The `X-GM-THRID` attribute may also be used in the `SEARCH` or `UID SEARCH` commands to find the sequence numbers or `UID` s of messages in a given thread. The following is an example transcript of a call to retrieve the `UID` s of several messages using the `UID SEARCH` command:

```
a009 UID SEARCH X-GM-THRID 1266894439832287888
* SEARCH 2 3 4
a009 OK Search (Success)
```

## Access to Gmail labels: X-GM-LABELS

Gmail treats labels as folders for the purposes of IMAP. As such, labels can be modified using the standard IMAP commands, `CREATE`, `RENAME`, and `DELETE`, that act on folders. System labels, which are labels created by Gmail, are reserved and prefixed by "\[Gmail\]" or "\[GoogleMail\]" in the list of labels. Use the `XLIST` command to get the entire list of labels for a mailbox.

The labels for a given message may be retrieved by using the `X-GM-LABELS` attribute with the `FETCH` command. The attribute is returned as a list of `ASTRING` s, encoded in UTF-7 as appropriate. An `ASTRING` is an [atom](https://datatracker.ietf.org/doc/html/rfc3501#section-4.1) or a [string](https://datatracker.ietf.org/doc/html/rfc3501#section-4.3) as defined by the RFC.

The following is an example transcript of a call to retrieve the `X-GM-LABELS` of several messages with the `FETCH` command:

```
a010 FETCH 1:4 (X-GM-LABELS)
* 1 FETCH (X-GM-LABELS (\Inbox \Sent Important "Muy Importante"))
* 2 FETCH (X-GM-LABELS (foo))
* 3 FETCH (X-GM-LABELS ())
* 4 FETCH (X-GM-LABELS (\Drafts))
a010 OK FETCH (Success)
```

Labels may be added to a message using the `STORE` command in conjunction with the `X-GM-LABELS` attribute. The following is an example transcript demonstrating the addition of a label to a message:

```
a011 STORE 1 +X-GM-LABELS (foo)
* 1 FETCH (X-GM-LABELS (\Inbox \Sent Important "Muy Importante" foo))
a011 OK STORE (Success)
```

The `X-GM-LABELS` attribute may also be used in the `SEARCH` or `UID SEARCH` commands to find the sequence numbers or `UID` s of all messages in the folder with a given label. The following is an example transcript of a call to retrieve the sequence numbers of several messages using the `SEARCH` command:

```
a012 SEARCH X-GM-LABELS foo
* SEARCH 1 2
a012 OK SEARCH (Success)
```
