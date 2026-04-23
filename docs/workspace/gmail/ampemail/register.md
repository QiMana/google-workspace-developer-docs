---
source: https://developers.google.com/workspace/gmail/ampemail/register
root: workspace
fetched_at: 2026-04-23T15:28:48.427Z
---

# Register with Google to send dynamic emails

When you are ready to launch your dynamic emails to your users, you must register with Google for each sender email address that you use. You only need to register the email once even if your email content changes or the same sender email address is used for another use case in the future.

To register a sender email, complete the following steps:

1. Make sure that you meet all the [guidelines and requirements](#registration_guidelines) listed below.
2. Send a real, production-ready email coming from your production servers (or a server with similar SPF/DKIM/DMARC/ `From:`/ `Return-Path:` headers) including the dynamic email MIME part to `ampforemail.whitelisting@gmail.com`. We need this in order to check that you comply with all the [guidelines and requirements](#registration_guidelines). As you send this email, do the following:
	1. Make sure that the AMP version of the email is correct prior to sending the email by [testing it in Gmail](https://developers.google.com/workspace/gmail/ampemail/testing-dynamic-email)
		2. Send the email directly instead of forwarding it. Gmail removes AMP MIME parts when forwarding an email.
3. Fill out the [registration form](https://forms.gle/fDqLE1gh4wMB6BeQ6) and await our response. We aim to respond to most requests within 5 working days.

Your participation as a sender of dynamic email is subject to compliance with the [Prevent mail to Gmail users from being blocked or sent to spam](https://support.google.com/mail/answer/81126) guidelines, which are subject to change without notice. You are responsible for ensuring compliance with the current guidelines. Your participation may be revoked at any time if abuse or policy violations are discovered, or at Google's discretion. We may request additional information during the registration process or after registration is complete to verify your compliance.

## Registration guidelines

You must meet the following guidelines in order to successfully register with Google:

- You must send a real, production-quality example email, not a demo or "Hello World" example. Don't put placeholder strings like `{name}` and `{count}` or test strings like `[Test]`, `[Proof mail]` and `[Sample]` in your subject or body.
- Emails must have a similar HTML or text MIME part. There are many instances where this is shown instead, such as when the user has disabled dynamic email.
- The email must have no bugs.
- You must authenticate the emails using SPF, DKIM and DMARC as detailed in the [Security requirements](https://developers.google.com/workspace/gmail/ampemail/security-requirements).
- Ensure that you have reviewed the AMP for Email best practices, and that your email conforms to the suggestions there.
- Registration works on a per-sender-email-address basis. If you want to register more than one sender email address, each address needs to be registered separately and needs to send its own production-quality email.
	This is true even if the separate email addresses have the same domain, as the registration doesn't work on a per-sender-email-domain basis.
- You mustn't allow third parties, such as users or the general public, to directly author and send emails. The emails you send can contain user-generated content, such as posts or comments. Testing tools and "email playgrounds" can't be whitelisted and should instead rely on the steps outlined in [Test your AMP emails in Gmail](https://developers.google.com/workspace/gmail/ampemail/testing-dynamic-email).
- Emails must follow the [Prevent mail to Gmail users from being blocked or sent to spam](https://support.google.com/mail/answer/81126) guidelines.
- A low rate of spam complaints from users.
- The [eTLD+1](https://developer.mozilla.org/en-US/docs/Glossary/eTLD) of the sender email address to be registered must serve or redirect to a valid website (e.g., not a parked domain) that belongs to the sender. For example, if the sender email address is `noreply@mail.example.com`, then `https://example.com` must serve the website. The website must be accessible worldwide without needing an IP filter.
