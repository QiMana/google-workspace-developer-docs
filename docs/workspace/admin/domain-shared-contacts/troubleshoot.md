---
source: https://developers.google.com/workspace/admin/domain-shared-contacts/troubleshoot
root: workspace
fetched_at: 2026-04-23T15:23:53.988Z
---

# Troubleshoot

When working with shared contacts, you might encounter the following issues.

## Firewall issues

If your firewall blocks HTTP `PUT` messages, include an `X-HTTP-Method-Override: PUT` header in a `POST` request. For more information, see [Google Data API protocol basics](https://developers.google.com/gdata/docs/2.0/basics).

If your firewall blocks HTTP `DELETE` messages, include an `X-HTTP-Method-Override: DELETE` header in a `POST` request. For more information, see [Google Data API protocol basics](https://developers.google.com/gdata/docs/2.0/basics).

## Limits

The following summarizes the constraints that apply to the Domain Shared Contacts API:

- A single shared contact list can contain up to 200,000 entries.
- A single shared contact can contain up to 2KB of data. The total XML that represents the shared contact can be larger than 2KB.
- A response is truncated if it exceeds 10MB in length.
- One batch request can include up to 100 operations.
- Changes can take up to 24 hours to be reflected in the email address autocomplete and the contact manager.
