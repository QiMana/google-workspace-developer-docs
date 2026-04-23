---
source: https://developers.google.com/workspace/gmail/ampemail/testing-dynamic-email
root: workspace
fetched_at: 2026-04-23T15:28:48.525Z
---

# Test your AMP emails in Gmail

Before you send a AMP-powered dynamic email, you can test it to verify its contents and behavior.

There are two options for testing your dynamic emails in Gmail:

1. Use Gmail’s [AMP for Email Playground](https://amp.gmail.dev/playground/) to draft AMP emails, see a live preview, and have your emails sent to your own Gmail account for testing.
2. Navigate to Gmail **Settings > General > Dynamic email** and click **Developer settings**. This opens a dialog where you can whitelist an email address that can send you dynamic emails for testing purposes. The AMP version of emails sent from the listed address to your account are rendered, even if the email address is not registered with Google. This lets you test your dynamic emails on your own accounts before registering to ensure they are working as expected.

## Delivery requirements

For your AMP email to be delivered to any account, the email must meet the following conditions:

- The [AMP for Email security requirements](https://developers.google.com/workspace/gmail/ampemail/security-requirements) must be met.
- The email must contain a fallback HTML version (`text/html`) or plain text version (`text/plain`) in addition to the AMP MIME part (`text/x-amp-html`). This fallback version is displayed in situations where the AMP MIME part cannot be displayed, such as when the mail client is offline or 30+ days after the email was received by Gmail.
- The AMP MIME part must contain a [valid AMP document](https://amp.dev/documentation/guides-and-tutorials/learn/validation-workflow/validate_emails/?format=email).
- The email should include the AMP MIME part before the HTML MIME part.
- The `From` and `To` header fields of the email must contain different email addresses.
