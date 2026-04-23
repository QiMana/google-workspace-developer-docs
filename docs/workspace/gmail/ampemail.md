---
source: https://developers.google.com/workspace/gmail/ampemail
root: workspace
fetched_at: 2026-04-23T15:28:47.702Z
---

# AMP for Gmail

[*AMP for Email*](https://amp.dev/about/email.html) allows senders to include AMP components inside rich engaging emails, making modern app functionality available within email. This *dynamic* email format provides a subset of AMPHTML components for use in email messages, that allows recipients of AMP emails to interact dynamically with content directly in the message.

In order to use AMP for Email within Gmail, you must do the following:

1. Build the emails to include AMP components. See the [AMP developer documentation](https://amp.dev/about/email.html). When building your email, you must make sure to [handle authentication requests appropriately](./ampemail/authenticating-requests.md).
2. [Test your emails](./ampemail/testing-dynamic-email.md) to ensure they have the required appearance and behavior.
3. When you are ready to start sending dynamic mail to your recipients, you must [register with Google](./ampemail/register.md).
