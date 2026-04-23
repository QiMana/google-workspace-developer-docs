---
source: https://developers.google.com/workspace/admin/domain-shared-contacts/contacts-feed
root: workspace
fetched_at: 2026-04-23T15:23:53.763Z
---

# Contacts feed

The Domain Shared Contacts API feed is a private read/write feed that an administrator can use to view and manage a domain's shared contacts. Because the feeds are private, you can access them only by using an authenticated request. The request must contain an authentication token for a domain administrator. For more information about authenticating, see [Learn about authentication and authorization](https://developers.google.com/workspace/guides/auth-overview).

Projection values indicate what data is included in the representation of a contact. For a list of values, see [Projection values](https://developers.google.com/workspace/admin/domain-shared-contacts#Projections).

The URL for a contact feed has the following form:

```
https://www.google.com/m8/feeds/contacts/DOMAIN/PROJECTION
```

Replace the following:

- `DOMAIN`: The URL for your domain—for example, example.com.
- `PROJECTION`: The projection value that specifies the `gd:extendedProperty` elements. For a list of supported values, see [Projection values](https://developers.google.com/workspace/admin/domain-shared-contacts/extended-properties-projections#projection_values).
