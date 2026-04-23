---
source: https://developers.google.com/workspace/gmail/postmaster
root: workspace
fetched_at: 2026-04-23T15:30:00.832Z
---

# Postmaster Tools API overview

The Postmaster Tools API lets you gather statistics on bulk emails sent to Gmail users and import data into, or merge that data with, other systems. Statistics include the percentage of your email marked as spam by the user and delivery errors. For a full explanation of the statistics provided by the Postmaster Tools API, refer to Dashboards section of the [Postmaster Tools help center article](https://support.google.com/mail/answer/6227174).

## High-level implementation steps

Follow these high-level steps to use this API:

1. Set up an authentication domain, either the DKIM (d=) or SPF domain (Return-Path domain) that is used to authenticate your email.
2. Set up the API:
	1. Create a project.
		2. Turn on the Postmaster Tools API.
		3. Set up credentials for the API.
		4. Create an OAuth2 token.
3. Use the OAuth2 token and credentials to make API calls including verifying domains and retrieving statistics and compliance status.

## Next steps

To set up the authentication domain, proceed to [Set up authentication domain](https://developers.google.com/workspace/gmail/postmaster/guides/domain).
