---
source: https://developers.google.com/workspace/gmail/imap/imap-smtp
root: workspace
fetched_at: 2026-04-23T15:29:07.140Z
---

# IMAP, POP, and SMTP

For non-Gmail clients, Gmail supports the standard IMAP, POP, and SMTP protocols. The Gmail IMAP, POP, and SMTP servers have been extended to support authorization via the industry-standard OAuth 2.0 protocol.

## Protocol

IMAP, POP, and SMTP use the standard [Simple Authentication and Security Layer (SASL)](https://tools.ietf.org/html/rfc4422), using the built-in the native IMAP `AUTHENTICATE`, POP `AUTH`, and SMTP `AUTH` commands, to authenticate users. The SASL XOAUTH2 mechanism enables clients to provide OAuth 2.0 credentials for authentication. The [SASL XOAUTH2 protocol documentation](./xoauth2-protocol.md) describes the SASL XOAUTH2 mechanism in great detail, and [libraries and samples](./xoauth2-libraries.md) which have implemented the protocol are available.

Incoming connections to the IMAP server at `imap.gmail.com:993` and the POP server at `pop.gmail.com:995` require SSL. The outgoing SMTP server, `smtp.gmail.com`, supports TLS. If your client begins with plain text, before issuing the STARTTLS command, use port `465` (for SSL), or port `587` (for TLS).

## Session length limits

Gmail POP sessions are limited to about 7 days. Gmail IMAP sessions are limited to about 24 hours. If the session was authenticated using OAuth credentials, it's limited to about the validity period of the access token used (usually 1 hour). A session in this context is one continuous [TCP connection](https://en.wikipedia.org/wiki/Transmission_Control_Protocol).

When the time elapses and the session expires, Gmail closes the connection with a message saying that the session expired. After that, the client can reconnect, authenticate again, and continue. If using OAuth, make sure that the access token used is valid (if you try to use an access token older than 1 hour, it might be invalid).

## Libraries and Samples

Accessing mail using IMAP or POP and sending mail using SMTP is often done using existing IMAP and SMTP libraries for convenience. As long as these libraries support the [Simple Authentication and Security Layer (SASL)](https://tools.ietf.org/html/rfc4422), they should be compatible with the SASL XOAUTH2 mechanism supported by Gmail.

In addition to the SASL XOAUTH2 [protocol documentation](./xoauth2-protocol.md), you may also want to read [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/OAuth2) for further information on implementing an OAuth 2.0 client.

The [Libraries and Samples](./xoauth2-libraries.md) page provides code samples in a variety of popular languages using the SASL XOAUTH2 mechanism with either IMAP or SMTP.
