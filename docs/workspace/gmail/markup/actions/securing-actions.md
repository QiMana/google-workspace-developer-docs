---
source: https://developers.google.com/workspace/gmail/markup/actions/securing-actions
root: workspace
fetched_at: 2026-04-23T15:29:07.390Z
---

# Securing Actions

This page document how Gmail secures the delivery and execution of actions.

## Security Measures enforced by Google

The following conditions must hold for schemas embedded in email:

- **Registration**: Sender must [Register with Google](https://developers.google.com/workspace/gmail/markup/registering-with-google).
- **SPF** or **DKIM**: Emails with schema markup **must** arrive from [SPF or DKIM authenticated domains](https://support.google.com/mail/answer/180707)

## Additional Measures required for In-Line Actions

Extra security measures are required or encouraged to secure inline actions:

- **HTTPS**: All actions **must** be handled via HTTPS URLs. Hosts must have valid SSL server certificates installed.
- **Access Tokens**: It is **encouraged** that senders using actions embed [Limited-Use Access Tokens](https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens) in the action URLs, to protected themselves against [Replay Attacks](http://en.wikipedia.org/wiki/Replay_attack). This is a generally good practice for any URL embedded in webpages or emails that might have any side-effects when invoked.
- **Bearer Authorization**: It is **encouraged** that services handling action requests verify the Http "Authorization" header in the HTTPS request. That header will contain a "Bearer Token" string, proving that the source of the request is google.com, and that the request is intended for the specified service. Services should use the Google-provided open source library to [Verify the Bearer Token](https://developers.google.com/workspace/gmail/markup/actions/verifying-bearer-tokens).

## Securing Edge-Case Email Access Patterns

There are various variants of email forwarding and access patterns that Gmail handles in order to secure actions in emails. These following measurements are performed **IN ADDITION** to the measures above:

| Access Pattern | Additional Security Measures |
| --- | --- |
| **Manual Forwarding** - User opens an email and forwards it to more recipients | Such forwarding always breaks DKIM signatures, and the sender is no longer registered with the service. Actions in the email are **rejected**. |
| **Auto Forwarding to Gmail** - User creates a forwarding rule on mailbox user@acme.com to her gmail mailbox. | Gmail verifies that the user can send as user@acme.com (user sets this up manually). Actions in the email are **accepted**. |
| **Gmail POP fetching** - User gives Gmail the password for user@acme.com and Gmail fetchers all emails there via POP to the Gmail inbox. | DKIM signatures and content integrity is preserved. User has proven access to user@acme.com. Actions in the email are **accepted**. |
| **Accessing Gmail emails with 3rd party applications** - Gmail user uses a 3rd party application (e.g. Outlook or Thunderbird) to access Gmail emails, or forwards her Gmail emails to another email provider. | 3rd party application or service may use embedded information. However, it won't be able to produce bearer authentication tokens that match Google's, giving senders the opportunity to reject such action requests. Senders may choose whether they reject or accept actions without bearer tokens, depending on the sensitivity of the action. Note that the bearer authorization token is created using standard open source technologies making it possible to all mail providers and apps to produce them using their own keys. |
