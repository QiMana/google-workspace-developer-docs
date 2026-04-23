---
source: https://developers.google.com/workspace/gmail/gmail_inbox_feed
root: workspace
fetched_at: 2026-04-23T15:29:06.695Z
---

# Gmail inbox feed

This document explains how to use the Gmail inbox feed.

You can access the read-only Gmail inbox feed to receive new message alerts.

## About Atom

Atom is a syndication format that lets you receive regular updates from news websites, blogs, and Gmail. Use Atom with an aggregator to receive new message alerts. This feed is only available for Gmail accounts on Google Workspace domains.

## Use the inbox feed

The Gmail inbox feed outputs your inbox as an XML document. You can use an aggregator to view the feed or consume a Gmail inbox on a Google Workspace domain with your own app.

[OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) is the preferred authentication method. Use the scope `https://mail.google.com/mail/feed/atom` and fetch the feed with the following request:

`GET https://mail.google.com/mail/feed/atom`
