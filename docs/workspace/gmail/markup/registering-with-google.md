---
source: https://developers.google.com/workspace/gmail/markup/registering-with-google
root: workspace
fetched_at: 2026-04-23T15:29:59.737Z
---

# Register with Google

We are excited to see how you plan to use schemas in email. You can start testing your own integration today. All schemas you send to yourself (from x@gmail.com to x@gmail.com) will be displayed in Google products. So go ahead and try it out now!

When you are ready to launch your marked up emails to your users, you will need to register with Google. Please follow this process:

- Make sure that you meet all the guidelines and requirements listed below.
- Send a real-life email coming from your production servers (or a server with similar DKIM/SPF/From:/Return-Path: headers) including the markup / schema to [schema.whitelisting+sample@gmail.com](mailto:schema.whitelisting+sample@gmail.com). We need this in order to check that you comply with all the guidelines and requirements listed in [Registration Guidelines](#registration_guidelines).
	- If you send a test/blank email, an email that does not contain schema or if you don't send an email for review your application will be silently discarded.
		- Make sure that the markup is correct prior to sending the email. For more details see [Testing your Schema](https://developers.google.com/workspace/gmail/markup/testing-your-schema). Especially make sure the email passes the [Email markup Tester](https://www.google.com/webmasters/markup-tester/) and that there are no errors, also make sure to include as much data as possible.
		- Gmail removes all markup when forwarding an email. Do not forward the email but send it directly.
- Fill out the [registration form](https://docs.google.com/a/google.com/forms/d/e/1FAIpQLSfT5F1VJXtBjGw2mLxY2aX557ctPTsCrJpURiKJjYeVrugHBQ/viewform?pli=1) and we will get back to you.

## Registration Guidelines

In order for the schema you send to be processed, the following guidelines must be met:

### Email Sender Quality guidelines

- Emails must be [authenticated via DKIM or SPF](https://support.google.com/mail/answer/180707)
- The top-level domain (TLD) of the SPF check or DKIM signature must match the TLD of your `From:` email address.
	- e.g. if you use `From: foo@bar.com` the DKIM or SPF must be for `bar.com` or `sub.bar.com`
		- Gmail only checks the SPF on the domain of your `Return-Path:` email. If you only rely on SPF and not DKIM your `Return-Path:` email must match the TLD of your `From:` email.
		- To quickly check if your SPF or DKIM settings are correct have a look at our [Email Authentication help article](https://support.google.com/mail/answer/180707).
- Emails must come from a static email address, e.g. foo@bar.com
- Emails must follow the [Prevent mail to Gmail users from being blocked or sent to spam](https://support.google.com/mail/answer/81126) guidelines
- Consistent history of sending a high volume of mail from your domain (order of hundred emails a day minimum to Gmail) for a few weeks at least.
- A very very low rate of spam complaints from users.

### Actions / Schema Guidelines

- The highest-fidelity action available should be used. For example, if an interaction can be achieved by an In-App Action (One-Click, RSVP, Review), that must be used. For more complex interactions, Go-To Actions can be used.
- Actions should be used for transactional mail where a high interaction rate is expected. They should not be used on promotional bulk mail.
- Go-To Actions:
	- Must deep link into the specific page on which the action can be performed.
		- Label of button needs to reflect clear action to be taken and must be true to page the user is going to
		- Label of action should not contain punctuation or all caps. Must be short and concise.
		- If an In-App action can be used for your usecase you must use the In-App action and not the Go-To action (e.g. "Verify Email Address" or "Please Review" should use In-App actions).
		- We are currently only approving Go-To actions for very specific high-value usecase with high interaction rate (e.g. Flight Check-in, Shipment tracking links).
- Low failure rate and fast response for services handling Action Requests.
