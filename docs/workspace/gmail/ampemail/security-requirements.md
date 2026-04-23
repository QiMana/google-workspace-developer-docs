---
source: https://developers.google.com/workspace/gmail/ampemail/security-requirements
root: workspace
fetched_at: 2026-04-23T15:28:48.795Z
---

# Security requirements

To ensure user safety and privacy, dynamic emails are subject to additional security requirements and restrictions.

## Sender Authentication

To ensure the sender of an AMP email is legitimate, emails containing AMP are subject to the following checks:

- The email must pass [Domain Keys Identified Mail (DKIM) authentication](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail).
- The DKIM-authenticated signing domain must be aligned with the domain of the email in the `From` field. See [DKIM Alignment](#dkim_alignment) below.
- The email must pass [Sender Policy Framework (SPF) authentication](https://en.wikipedia.org/wiki/Sender_Policy_Framework).

In addition, it's recommended that email senders use a [Domain-based Message Authentication, Reporting and Conformance (DMARC) policy](https://en.wikipedia.org/wiki/DMARC) with disposition set to either `quarantine` or `reject`. This may be enforced in the future.

DKIM, SPF and DMARC each appear as separate lines within the "Show Original" menu option in Gmail Web. See [Check if your Gmail message is authenticated](https://support.google.com/mail/answer/180707) for more information.

### DKIM Alignment

In order for DKIM authentication to be considered "aligned", the *Organizational Domain* of at least one *DKIM-authenticated signing domain* must be the same as the *Organizational Domain* of the email address in the `From` header. This is equivalent to the relaxed DKIM Identifier Alignment as defined in the DMARC specification, [RFC7489 Section 3.1.1](https://tools.ietf.org/html/rfc7489#section-3.1.1).

*Organizational Domain* is defined in [RFC7489 Section 3.2](https://tools.ietf.org/html/rfc7489#section-3.2) and is also referred to as the "eTLD+1" part of the domain. For example, the domain `foo.bar.example.com` has `example.com` as its *Organizational Domain*.

*DKIM-authenticated signing domain* refers to the value of the `d=` tag of the DKIM signature.

For example, if a validated DKIM signature successfully verifies with `d=foo.example.com`, then `bar@foo.example.com`, `foo@example.com` and `foo@bar.example.com` would all be considered aligned if present in the `From` header while `user@gmail.com` would not, as `gmail.com` doesn't match `example.com`.

## TLS Encryption

To ensure the contents of an AMP email are encrypted in transit, you must [TLS Encrypt](https://en.wikipedia.org/wiki/Transport_Layer_Security) emails containing AMP.

An icon in Gmail indicates whether an email was sent with TLS Encryption. See [Check if a message you received is encrypted](https://support.google.com/mail/answer/6330403) for more information.

## HTTP proxy

All XMLHttpRequests (XHRs) that originate from an AMP email are proxied. This is done to protect the user's privacy.

### CORS Headers

All server endpoints used by `amp-list` and `amp-form` must implement [CORS in AMP for Email](https://amp.dev/documentation/guides-and-tutorials/learn/cors-in-email/?format=email) and correctly set the `AMP-Email-Allow-Sender` HTTP header.

### Restrictions

The following describes additional URL restrictions.

#### Redirects

XHR URLs mustn't use HTTP redirection. Requests that return a status code from the redirection class (`3XX` range) such as `302 Found` or `308 Permanent Redirect` fail, resulting in a browser console warning message.
