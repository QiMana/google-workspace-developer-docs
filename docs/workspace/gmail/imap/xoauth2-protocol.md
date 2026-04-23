---
source: https://developers.google.com/workspace/gmail/imap/xoauth2-protocol
root: workspace
fetched_at: 2026-04-23T15:29:07.294Z
---

# OAuth 2.0 Mechanism

This document defines the SASL XOAUTH2 mechanism for use with the IMAP `AUTHENTICATE`, POP `AUTH`, and SMTP `AUTH` commands. This mechanism allows the use of OAuth 2.0 Access Tokens to authenticate to a user's Gmail account.

## Using OAuth 2.0

Start by familiarizing yourself with [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/OAuth2). That document explains how OAuth 2.0 works, and the steps required to write a client.

You may also want to browse the [sample XOAUTH2 code](https://developers.google.com/workspace/gmail/imap/xoauth2-libraries) for working examples.

### OAuth 2.0 Scopes

The scope for IMAP, POP, and SMTP access is `https://mail.google.com/`. If you request access to the full mail scope for your IMAP, POP or SMTP app, it must be in compliance with our [Google API Services: User Data Policy](https://developers.google.com/terms/api-services-user-data-policy).

- To be approved, your app must show full utilization of `https://mail.google.com/`.
- If your app doesn’t require `https://mail.google.com/`, migrate to the Gmail API and use more granular [restricted scopes](https://support.google.com/cloud/answer/9110914#restricted-scopes).

#### Domain-wide delegation for Google Workspace

If you intend to use [Google Workspace domain-wide delegation](https://developers.google.com/workspace/admin/directory/v1/guides/delegation) using [Service Accounts](https://developers.google.com/identity/protocols/OAuth2ServiceAccount) to access Google Workspace users' mailboxes via IMAP, you can authorize your client using the scope `https://www.googleapis.com/auth/gmail.imap_admin` instead.

When authorized with this scope, IMAP connections behave differently:

- All labels are shown via IMAP, even if users disabled "Show in IMAP" for the label in the Gmail settings.
- All messages are shown via IMAP, regardless of what the user set in "Folder Size Limits" in the Gmail settings.

## The SASL XOAUTH2 Mechanism

The XOAUTH2 mechanism allows clients to send OAuth 2.0 [access tokens](https://developers.google.com/identity/protocols/oauth2#2.-obtain-an-access-token-from-the-google-authorization-server.) to the server. The protocol uses encoded values shown in the following sections.

### Initial Client Response

The SASL XOAUTH2 initial client response has the following format:

```
base64("user=" {User} "^Aauth=Bearer " {Access Token} "^A^A")
```

Use the base64 encoding mechanism defined in [RFC 4648](https://tools.ietf.org/html/rfc4648). `^A` represents a Control+A (\\001).

For example, before base64-encoding, the initial client response might look like this:

```
user=someuser@example.com^Aauth=Bearer ya29.vF9dft4qmTc2Nvb3RlckBhdHRhdmlzdGEuY29tCg^A^A
```

After base64-encoding, this becomes (line breaks inserted for clarity):

```
dXNlcj1zb21ldXNlckBleGFtcGxlLmNvbQFhdXRoPUJlYXJlciB5YTI5LnZGOWRmdDRxbVRjMk52
YjNSbGNrQmhkSFJoZG1semRHRXVZMjl0Q2cBAQ==
```

### Error Response

An initial client response causing an error results in the server sending a challenge containing an error message in the following format:

```
base64({JSON-Body})
```

The JSON-Body contains three values: `status`, `schemes`, and `scope`. For example:

```
eyJzdGF0dXMiOiI0MDEiLCJzY2hlbWVzIjoiYmVhcmVyIG1hYyIsInNjb3BlIjoiaHR0cHM6Ly9t
YWlsLmdvb2dsZS5jb20vIn0K
```

After base64-decoding, this becomes (formatted for clarity):

```
{
  "status":"401",
  "schemes":"bearer",
  "scope":"https://mail.google.com/"
}
```

The SASL protocol requires clients to send an empty response to this challenge.

## IMAP Protocol Exchange

This section explains how to use SASL XOAUTH2 with the Gmail IMAP server.

### Initial Client Response

To log in with the SASL XOAUTH2 mechanism, the client invokes the `AUTHENTICATE` command with the mechanism parameter of `XOAUTH2`, and the initial client response as constructed above. For example:

```
[connection begins]
C: C01 CAPABILITY
S: * CAPABILITY IMAP4rev1 UNSELECT IDLE NAMESPACE QUOTA XLIST
CHILDREN XYZZY SASL-IR AUTH=XOAUTH2 AUTH=XOAUTH
S: C01 OK Completed
C: A01 AUTHENTICATE XOAUTH2 dXNlcj1zb21ldXNlckBleGFtcGxlLmNvb
QFhdXRoPUJlYXJlciB5YTI5LnZGOWRmdDRxbVRjMk52YjNSbGNrQmhkSFJoZG
1semRHRXVZMjl0Q2cBAQ==
S: A01 OK Success
[connection continues...]
```

Things to note about the IMAP protocol exchange:

- The IMAP `AUTHENTICATE` command is documented in [RFC 3501](https://datatracker.ietf.org/doc/html/rfc3501).
- The SASL-IR capability allows for sending the initial client response in the first line of the `AUTHENTICATE` command, so that only one round trip is required for authentication. SASL-IR is documented in [RFC 4959](https://tools.ietf.org/html/rfc4959).
- The AUTH=XOAUTH2 capability declares that the server supports the SASL mechanism defined by this document, and this mechanism is activated by specifying XOAUTH2 as the first argument to the `AUTHENTICATE` command.
- The line breaks in the `AUTHENTICATE` and `CAPABILITY` commands are for clarity and would not be present in the actual command data. The entire base64 argument should be one continuous string, with no embedded whitespace, so that the entire `AUTHENTICATE` command consists of a single line of text.

### Error Response

Authentication failures are also returned via the IMAP `AUTHENTICATE` command:

```
[connection begins]
S: * CAPABILITY IMAP4rev1 UNSELECT IDLE NAMESPACE QUOTA XLIST
CHILDREN XYZZY SASL-IR AUTH=XOAUTH2
S: C01 OK Completed
C: A01 AUTHENTICATE XOAUTH2 dXNlcj1zb21ldXNlckBleGFtcGxlLmNvbQ
FhdXRoPUJlYXJlciB5YTI5LnZGOWRmdDRxbVRjMk52YjNSbGNrQmhkSFJoZG1s
emRHRXVZMjl0Q2cBAQ==
S: + eyJzdGF0dXMiOiI0MDEiLCJzY2hlbWVzIjoiYmVhcmVyIG1hYyIsInNjb
3BlIjoiaHR0cHM6Ly9tYWlsLmdvb2dsZS5jb20vIn0K
C:
S: A01 NO SASL authentication failed
```

Things to note about the IMAP protocol exchange:

- The client sends an empty response ("\\r\\n") to the challenge containing the error message.

## POP Protocol Exchange

This section explains how to use SASL XOAUTH2 with the Gmail POP server.

### Initial Client Response

To log in with the SASL XOAUTH2 mechanism, the client invokes the `AUTH` command with the mechanism parameter of `XOAUTH2`, and the initial client response as constructed above. For example:

```
[connection begins]
C: AUTH XOAUTH2 dXNlcj1zb21ldXNlckBleGFtcGxlLmNvbQFhdXRoPUJlYX
JlciB5YTI5LnZGOWRmdDRxbVRjMk52YjNSbGNrQmhkSFJoZG1semRHRXVZMjl0
Q2cBAQ==
S: +OK Welcome.
[connection continues...]
```

Things to note about the POP protocol exchange:

- The POP `AUTH` command is documented in [RFC 1734](https://tools.ietf.org/html/rfc1734).
- The line breaks in the `AUTH` command are for clarity and would not be present in the actual command data. The entire base64 argument should be one continuous string, with no embedded whitespace, so that the entire `AUTH` command consists of a single line of text.

### Error Response

Authentication failures are also returned via the POP `AUTH` command:

```
[connection begins]
C: AUTH XOAUTH2 dXNlcj1zb21ldXNlckBleGFtcGxlLmNvbQFhdXRoPUJlY
XJlciB5YTI5LnZGOWRmdDRxbVRjMk52YjNSbGNrQmhkSFJoZG1semRHRXVZMj
l0Q2cBAQ==
S: + eyJzdGF0dXMiOiI0MDAiLCJzY2hlbWVzIjoiQmVhcmVyIiwic2NvcGUi
OiJodHRwczovL21haWwuZ29vZ2xlLmNvbS8ifQ==
```

## SMTP Protocol Exchange

This section explains how to use SASL XOAUTH2 with the Gmail SMTP server.

### Initial Client Response

To log in with the XOAUTH2 mechanism, the client invokes the `AUTH` command with the mechanism parameter of `XOAUTH2`, and the initial client response as constructed above. For example:

```
[connection begins]
S: 220 mx.google.com ESMTP 12sm2095603fks.9
C: EHLO sender.example.com
S: 250-mx.google.com at your service, [172.31.135.47]
S: 250-SIZE 35651584
S: 250-8BITMIME
S: 250-AUTH LOGIN PLAIN XOAUTH XOAUTH2
S: 250-ENHANCEDSTATUSCODES
S: 250 PIPELINING
C: AUTH XOAUTH2 dXNlcj1zb21ldXNlckBleGFtcGxlLmNvbQFhdXRoPUJlY
XJlciB5YTI5LnZGOWRmdDRxbVRjMk52YjNSbGNrQmhkSFJoZG1semRHRXVZMj
l0Q2cBAQ==
S: 235 2.7.0 Accepted
[connection continues...]
```

Things to note about the SMTP protocol exchange:

- The SMTP `AUTH` command is documented in [RFC 4954](https://tools.ietf.org/html/rfc4954).
- The line breaks in the `AUTH` command are for clarity and would not be present in the actual command data. The entire base64 argument should be one continuous string, with no embedded whitespace, so that the entire `AUTH` command consists of a single line of text.

### Error Response

Authentication failures are also returned via the SMTP `AUTH` command:

```
[connection begins]
S: 220 mx.google.com ESMTP 12sm2095603fks.9
C: EHLO sender.example.com
S: 250-mx.google.com at your service, [172.31.135.47]
S: 250-SIZE 35651584
S: 250-8BITMIME
S: 250-AUTH LOGIN PLAIN XOAUTH XOAUTH2
S: 250-ENHANCEDSTATUSCODES
S: 250 PIPELINING
C: AUTH XOAUTH2 dXNlcj1zb21ldXNlckBleGFtcGxlLmNvbQFhdXRoPUJlYXJl
ciB5YTI5LnZGOWRmdDRxbVRjMk52YjNSbGNrQmhkSFJoZG1semRHRXVZMjl0Q2cB
AQ==
S: 334 eyJzdGF0dXMiOiI0MDEiLCJzY2hlbWVzIjoiYmVhcmVyIG1hYyIsInNjb
3BlIjoiaHR0cHM6Ly9tYWlsLmdvb2dsZS5jb20vIn0K
C:
S: 535-5.7.1 Username and Password not accepted. Learn more at
S: 535 5.7.1 https://support.google.com/mail/?p=BadCredentials hx9sm5317360pbc.68
[connection continues...]
```

Things to note about the SMTP protocol exchange:

- The client sends an empty response ("\\r\\n") to the challenge containing the error message.

## References

- OAUTH2: [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/OAuth2)
- SMTP: [RFC 2821: Simple Mail Transfer Protocol](https://tools.ietf.org/html/rfc2821)
- IMAP: [RFC 3501: INTERNET MESSAGE ACCESS PROTOCOL - VERSION 4rev1](https://datatracker.ietf.org/doc/html/rfc3501)
- POP: [RFC 1081: Post Office Protocol - Version 3](https://tools.ietf.org/html/rfc1081)
- SASL: [RFC 4422: Simple Authentication and Security Layer (SASL)](https://tools.ietf.org/html/rfc4422)
- JSON: [RFC 4627: The application/json Media Type for JavaScript Object Notation](https://tools.ietf.org/html/rfc4627)
- BASE64: [RFC 4648: The Base16, Base32, and Base64 Data Encodings](https://tools.ietf.org/html/rfc4648)
- SASL-IR: [RFC 4959: IMAP Extension for Simple Authentication and Security Layer (SASL) Initial Client Response](https://tools.ietf.org/html/rfc4959)
- SMTP-AUTH: [RFC 4954: SMTP Service Extension for Authentication](https://tools.ietf.org/html/rfc4954)
