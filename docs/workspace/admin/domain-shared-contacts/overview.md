---
source: https://developers.google.com/workspace/admin/domain-shared-contacts/overview
root: workspace
fetched_at: 2026-04-23T15:23:53.332Z
---

# Domain Shared Contacts API overview

The Domain Shared Contacts API lets applications get and update external contacts shared with all users in a Google Workspace domain. Shared contacts are visible to all users of a Google Workspace domain and all Google services have access to the contact list.

Use the Domain Shared Contacts API to create, edit, or delete shared contacts, and query for contacts matching specific criteria.

The Domain Shared Contacts API is only available to Google Workspace accounts. To use the API, [enable the Domain Shared Contacts API in the Admin console](https://support.google.com/a/answer/60757). Changes can take up to 24 hours to reflect in auto-complete and the contact manager.

This document background on the Domain Shared Contacts API and examples for managing contacts using XML and HTTP. To learn more, see the [client libraries](https://developers.google.com/api-client-library).

## Audience

This document is for developers writing client applications that manipulate Google contact lists using HTTP and XML. It assumes knowledge of the [Google Data APIs protocol](https://developers.google.com/gdata/docs/2.0/basics).

Linux and macOS users can try the examples in this document using [curl](https://curl.haxx.se/) or [wget](https://www.gnu.org/software/wget/). See [Use curl with Google Data APIs](https://developers.google.com/gdata/articles/using_cURL).

## Principles

The Domain Shared Contacts API follows the principles of the [Google Data APIs](https://developers.google.com/gdata/docs/developers-guide). Google Data APIs are based on Atom 1.0, RSS 2.0, and the Atom Publishing Protocol.

## Specify a version

All requests sent using the Domain Shared Contacts API should specify version 3.0:

```
GData-Version: 3.0
```

If you can't set HTTP headers, specify `v=3.0` as a query parameter. The HTTP header method is recommended.
