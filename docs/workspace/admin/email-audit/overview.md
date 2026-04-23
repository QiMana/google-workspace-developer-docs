---
source: https://developers.google.com/workspace/admin/email-audit/overview
root: workspace
fetched_at: 2026-04-23T15:23:55.337Z
---

# Email Audit API overview

The Email Audit API lets Google Workspace administrators audit a user's email, email drafts, and archived Google Chat chats. In addition, a domain administrator can download a user's mailbox. You can use the Email Audit API only for lawful purposes in accordance with your Customer Agreement. The Email Audit API only applies to Google Workspace, Education, and ISPs accounts. You can't use it with a Google Workspace or Gmail account that isn't hosted by the Google Workspace products.

The Email Audit API supports the [the Google Data APIs](https://developers.google.com/gdata) protocol. The Google Data API conforms to the Atom Publishing Protocol (AtomPub) publishing and editing model. The AtomPub HTTP requests use the Representational Set Transfer (RESTful) design approach to web services. For more information, see the [the Google Data API as developer overview](https://developers.google.com/gdata/docs/developers-guide).

## Audience

This document is intended for programmers who want to write client applications that, for lawful auditing purposes, can audit a Google Workspace user's mailbox.

This document assumes that you're a Google Workspace domain administrator and that you understand the general ideas behind the [the Google Data APIs protocol](https://developers.google.com/gdata/docs/2.0/basics), and that you're familiar with your Google Workspace Admin console.
