---
source: https://developers.google.com/workspace/chat/admin-overview
root: workspace
fetched_at: 2026-04-23T15:25:00.133Z
---

# Manage Google Chat spaces as a Google Workspace administrator

## Page Summary

- Google Workspace admins can manage Chat spaces using the Admin console Space Management Tool or the Google Chat API.
- The Chat API enables admins to automate tasks like adding/removing space members, updating spaces, and searching for spaces.
- Admins can authenticate using administrator privileges or domain-wide delegation when using the Chat API for management.
- Use cases include onboarding/offboarding employees, promoting space managers, and auditing inactive spaces.
- Detailed API methods and scenarios are provided to help admins effectively manage Google Chat spaces within their organization.

This page provides an overview of how Google Workspace administrators can use the Google Chat API to manage Google Chat spaces across their organization.

To manage Chat spaces, Google Workspace administrators can use the [Space Management Tool](https://support.google.com/a/answer/13979728?sjid=5354357030206378629-NC) in the Google Admin console or call the Google Chat API. By using the Chat API, administrators can create Google Chat apps that manage spaces at scale and automate their common or repeatable tasks.

## What administrators can do with the Chat API

An administrator can perform management tasks based on their [assigned administrator roles](https://support.google.com/a/answer/9807615).

As a Google Workspace administrator, you can perform a number of management tasks with the Chat API, such as the following:

- [Search](./search-manage-admin.md) spaces based on specified criteria
- [List members](./list-members.md) of a space
- [Add members](./create-members.md) to and [remove members](./delete-members.md) from a space
- Get details about a [member](./get-members.md) and a [space](./get-spaces.md)
- [Update](./update-spaces.md) or [delete](./delete-spaces.md) a space
- [Update a user's membership](./update-members.md)

## How to authenticate and authorize as a Google Workspace administrator

When using the [Chat API](./api/reference/rest.md) for management tasks, administrators can authenticate and authorize requests by invoking [administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges) or configuring [domain-wide delegation](./authenticate-authorize-chat-user.md#domain-wide-delegation) of authority for an application's service account.

The following table describes the ways administrators can authenticate when using the Chat API.

| User authentication | Who calls the API method | What users see in Chat |
| --- | --- | --- |
| [Administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges) | Administrator with `useAdminAccess=true` | "The organization's administrator performed \[an action\]."  For example, "The organization's administrator changed Kiran B to space manager."  It does not identify the administrator user's name or user ID or the name of the Chat app. |
| [Domain-wide delegation](./authenticate-authorize-chat-user.md#domain-wide-delegation) | Service account on behalf of a user | "\[User\] performed \[an action\] via \[app name\]."  For example, "Sasha T renamed the space to Release Project Discussion."  The user who is being impersonated by the service is identified as having performed the action. |

## Use the Chat API for your organization

The examples in this section demonstrate how administrators use the Chat API when managing their organization's spaces and members with [administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges).

The following Chat API methods enable administrator privileges with `useAdminAccess=true`.

- [`spaces.delete`](./api/reference/rest/v1/spaces/delete.md)
- [`spaces.get`](./api/reference/rest/v1/spaces/get.md)
- [`spaces.patch`](./api/reference/rest/v1/spaces/patch.md)
- [`spaces.search`](./api/reference/rest/v1/spaces/search.md)
- [`spaces.members.create`](./api/reference/rest/v1/spaces.members/create.md)
- [`spaces.members.delete`](./api/reference/rest/v1/spaces.members/delete.md)
- [`spaces.members.get`](./api/reference/rest/v1/spaces.members/get.md)
- [`spaces.members.list`](./api/reference/rest/v1/spaces.members/list.md)
- [`spaces.members.patch`](./api/reference/rest/v1/spaces.members/patch.md)

### Manage users' space memberships

The following scenarios are ways that you, as a Google Workspace administrator, can manage the space membership of users in your organization with the Chat API.

#### Add users to spaces

Using [`spaces.members.create`](./api/reference/rest/v1/spaces.members/create.md), admins can add a user to any space in an organization.

Used in conjunction with [`spaces.search`](./api/reference/rest/v1/spaces/search.md), admins can add a user to a set of spaces determined by their search query. This can be useful when onboarding new employees to an organization; it allows administrators to automate a routine process.

#### Find users and remove them from spaces

Using [`spaces.members.get`](./api/reference/rest/v1/spaces.members/get.md), admins can determine if a user (internal or external to the organization) is a member of any space in the organization.

Used in conjunction with [`spaces.search`](./api/reference/rest/v1/spaces/search.md), admins can find all spaces that the user is a member of and then remove them from the spaces with [`spaces.members.delete`](./api/reference/rest/v1/spaces.members/delete.md). This can be useful when employees move teams within an organization or offboarding employees who are no longer with the organization; it allows administrators to automate a routine process.

#### Promote users to space manager

Using [`spaces.members.patch`](./api/reference/rest/v1/spaces.members/patch.md), admins can change a member's role by updating their [`MembershipRole`](./api/reference/rest/v1/spaces.members.md#Membership.MembershipRole) between the following options:

- `ROLE_MEMBER`: A member of the space. In the Chat UI, this role is called **Member**.
- `ROLE_ASSISTANT_MANAGER`: A space manager. In the Chat UI, this role is called **Manager**.
- `ROLE_MANAGER`: A space owner. In the Chat UI, this role is called **Owner**.

Used in conjunction with [`spaces.search`](./api/reference/rest/v1/spaces/search.md), admins can find spaces that don't have a manager or an owner and then promote an existing member to manager or owner with `spaces.members.patch`.

#### Find external members of a space

Using [`spaces.members.list`](./api/reference/rest/v1/spaces.members/list.md), admins can retrieve a list of members in a space, retrieve the user profiles from the organization's People API or Directory API, and then filter the results for those who are members of an external domain or organization. For more information, see [How chat identifies users](./identify-reference-users.md#how-chat-identifies).

### Audit and manage spaces

The following scenarios are ways that you, as a Google Workspace administrator, can audit and manage the spaces in your organization with the Chat API.

#### Find and delete inactive spaces

Unused Chat spaces can take up valuable storage space and create clutter in the user interface. Admins can use [`spaces.search`](./api/reference/rest/v1/spaces/search.md) to find the inactive spaces and then [`spaces.delete`](./api/reference/rest/v1/spaces/delete.md) to delete them. For further guidance and a code sample, see [Find and delete inactive Chat spaces](./search-manage-admin.md#find-and-delete-inactive-spaces).

#### Audit spaces in the organization

Using [`spaces.search`](./api/reference/rest/v1/spaces/search.md), admins can retrieve a list of all spaces in an organization with detailed information about each space's settings and metadata such as creation date, last activity date, number of members, status of history setting, and ability to invite external guests.

#### Export a list of spaces based on search criteria

Using [`spaces.search`](./api/reference/rest/v1/spaces/search.md), admins can retrieve a list of spaces that meet criteria specified in the [`query`](./api/reference/rest/v1/spaces/search.md#body.QUERY_PARAMETERS.query) and export the results to a CSV file for analysis.

#### Find members of a space based on search criteria

Using [`spaces.members.list`](./api/reference/rest/v1/spaces.members/list.md), admins can retrieve a list of members for any space in the organization and analyze the results for specific criteria.

#### Find managers of a space

Using [`spaces.members.list`](./api/reference/rest/v1/spaces.members/list.md), admins can retrieve a list of members for a space that is filtered to `MembershipState=ROLE_MANAGER`.

To find all space managers in your organization, across all spaces, you can use [`spaces.search`](./api/reference/rest/v1/spaces/search.md) to list them all. Then for each space in the list, use `spaces.members.list` to retrieve the managers.

## Related topics

- [Authenticate and authorize using administrator privileges](./authenticate-authorize-chat-user.md#admin-privileges)
- [Search and manage Google Chat spaces with the Google Chat API as a Google Workspace administrator](./search-manage-admin.md)
- [`spaces.search` method](./api/reference/rest/v1/spaces/search.md)
