---
source: https://developers.google.com/workspace/admin/directory/v1/guides
root: workspace
fetched_at: 2026-04-23T15:23:47.299Z
---

# Directory API Overview

The Directory API is part of the RESTful Admin SDK API that you can use to programmatically create and manage admin-controlled resources owned by a Google Workspace account. Some use cases include:

- Creating and managing users and adding administrators.
- Creating and managing groups and group memberships.
- Monitoring devices connected to your domain and taking action on lost devices.
- Managing your org chart and organization structures.
- Auditing applications your users have granted access to and revoking unauthorized apps.

Following is a list of common terms used in the Directory API:

*Customer*

The entity that owns the Google Workspace account, represented by the [Customer](../reference/rest/v1/customers.md) resource.

*Domain*

If applicable, the DNS domain associated with a Google Workspace account, represented by the [Domain](../reference/rest/v1/domains.md) resource. Not all accounts have an associated domain.

*Organizational unit (OU)*

A sub-unit of a Google Workspace account's organizational tree, used to group and sort users for the purpose of applying policies and granting authorizations. An OU is represented by the [OrgUnit](../reference/rest/v1/orgunits.md) resource.

*Privilege*

The ability of a user to perform an action on a Google Workspace resource. Applies primarily to admins. A privilege is represented by the [Privilege](../reference/rest/v1/privileges/list.md#Privilege) resource.

*Role*

A defined collection of privileges that can be assigned to a user or set of users, represented by the [Role](../reference/rest/v1/roles.md) resource.

*Role assignment*

A record indicating which user is granted what roles, and over what scope. A role assignment is represented by the [RoleAssignment](../reference/rest/v1/roleAssignments.md) resource.

*Schema*

A JSON object that defines custom user attributes for your organization, represented by the [Schema](../reference/rest/v1/schemas.md) resource.

*User*

An individual user account with access to Google Workspace apps and resources, represented by the [User](../reference/rest/v1/users.md) resource.

## Next steps

- To learn about developing with Google Workspace APIs, including handling authentication and authorization, refer to [Get started as a Workspace developer](../../../guides/get-started.md).
- To learn how to configure and run a Directory API app, try the [JavaScript quickstart](./quickstart/js.md).
