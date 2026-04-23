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

- [Search](https://developers.google.com/workspace/chat/search-manage-admin) spaces based on specified criteria
- [List members](https://developers.google.com/workspace/chat/list-members) of a space
- [Add members](https://developers.google.com/workspace/chat/create-members) to and [remove members](https://developers.google.com/workspace/chat/delete-members) from a space
- Get details about a [member](https://developers.google.com/workspace/chat/get-members) and a [space](https://developers.google.com/workspace/chat/get-spaces)
- [Update](https://developers.google.com/workspace/chat/update-spaces) or [delete](https://developers.google.com/workspace/chat/delete-spaces) a space
- [Update a user's membership](https://developers.google.com/workspace/chat/update-members)

## How to authenticate and authorize as a Google Workspace administrator

When using the [Chat API](https://developers.google.com/workspace/chat/api/reference/rest) for management tasks, administrators can authenticate and authorize requests by invoking [administrator privileges](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#admin-privileges) or configuring [domain-wide delegation](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#domain-wide-delegation) of authority for an application's service account.

The following table describes the ways administrators can authenticate when using the Chat API.

| User authentication | Who calls the API method | What users see in Chat |
| --- | --- | --- |
| [Administrator privileges](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#admin-privileges) | Administrator with `useAdminAccess=true` | "The organization's administrator performed \[an action\]."  For example, "The organization's administrator changed Kiran B to space manager."  It does not identify the administrator user's name or user ID or the name of the Chat app. |
| [Domain-wide delegation](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#domain-wide-delegation) | Service account on behalf of a user | "\[User\] performed \[an action\] via \[app name\]."  For example, "Sasha T renamed the space to Release Project Discussion."  The user who is being impersonated by the service is identified as having performed the action. |

## Use the Chat API for your organization

The examples in this section demonstrate how administrators use the Chat API when managing their organization's spaces and members with [administrator privileges](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#admin-privileges).

The following Chat API methods enable administrator privileges with `useAdminAccess=true`.

- [`spaces.delete`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/delete)
- [`spaces.get`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/get)
- [`spaces.patch`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/patch)
- [`spaces.search`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search)
- [`spaces.members.create`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/create)
- [`spaces.members.delete`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete)
- [`spaces.members.get`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get)
- [`spaces.members.list`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list)
- [`spaces.members.patch`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/patch)

### Manage users' space memberships

The following scenarios are ways that you, as a Google Workspace administrator, can manage the space membership of users in your organization with the Chat API.

#### Add users to spaces

Using [`spaces.members.create`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/create), admins can add a user to any space in an organization.

Used in conjunction with [`spaces.search`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search), admins can add a user to a set of spaces determined by their search query. This can be useful when onboarding new employees to an organization; it allows administrators to automate a routine process.

#### Find users and remove them from spaces

Using [`spaces.members.get`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/get), admins can determine if a user (internal or external to the organization) is a member of any space in the organization.

Used in conjunction with [`spaces.search`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search), admins can find all spaces that the user is a member of and then remove them from the spaces with [`spaces.members.delete`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/delete). This can be useful when employees move teams within an organization or offboarding employees who are no longer with the organization; it allows administrators to automate a routine process.

#### Promote users to space manager

Using [`spaces.members.patch`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/patch), admins can change a member's role by updating their [`MembershipRole`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members#Membership.MembershipRole) between the following options:

- `ROLE_MEMBER`: A member of the space. In the Chat UI, this role is called **Member**.
- `ROLE_ASSISTANT_MANAGER`: A space manager. In the Chat UI, this role is called **Manager**.
- `ROLE_MANAGER`: A space owner. In the Chat UI, this role is called **Owner**.

Used in conjunction with [`spaces.search`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search), admins can find spaces that don't have a manager or an owner and then promote an existing member to manager or owner with `spaces.members.patch`.

#### Find external members of a space

Using [`spaces.members.list`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list), admins can retrieve a list of members in a space, retrieve the user profiles from the organization's People API or Directory API, and then filter the results for those who are members of an external domain or organization. For more information, see [How chat identifies users](https://developers.google.com/workspace/chat/identify-reference-users#how-chat-identifies).

### Audit and manage spaces

The following scenarios are ways that you, as a Google Workspace administrator, can audit and manage the spaces in your organization with the Chat API.

#### Find and delete inactive spaces

Unused Chat spaces can take up valuable storage space and create clutter in the user interface. Admins can use [`spaces.search`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search) to find the inactive spaces and then [`spaces.delete`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/delete) to delete them. For further guidance and a code sample, see [Find and delete inactive Chat spaces](https://developers.google.com/workspace/chat/search-manage-admin#find-and-delete-inactive-spaces).

#### Audit spaces in the organization

Using [`spaces.search`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search), admins can retrieve a list of all spaces in an organization with detailed information about each space's settings and metadata such as creation date, last activity date, number of members, status of history setting, and ability to invite external guests.

#### Export a list of spaces based on search criteria

Using [`spaces.search`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search), admins can retrieve a list of spaces that meet criteria specified in the [`query`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search#body.QUERY_PARAMETERS.query) and export the results to a CSV file for analysis.

#### Find members of a space based on search criteria

Using [`spaces.members.list`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list), admins can retrieve a list of members for any space in the organization and analyze the results for specific criteria.

#### Find managers of a space

Using [`spaces.members.list`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members/list), admins can retrieve a list of members for a space that is filtered to `MembershipState=ROLE_MANAGER`.

To find all space managers in your organization, across all spaces, you can use [`spaces.search`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search) to list them all. Then for each space in the list, use `spaces.members.list` to retrieve the managers.

## Related topics

- [Authenticate and authorize using administrator privileges](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#admin-privileges)
- [Search and manage Google Chat spaces with the Google Chat API as a Google Workspace administrator](https://developers.google.com/workspace/chat/search-manage-admin)
- [`spaces.search` method](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search)
