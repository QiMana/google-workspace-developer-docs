---
source: https://developers.google.com/workspace/admin/reports/v1/overview
root: workspace
fetched_at: 2026-04-23T15:24:38.225Z
---

# Reports API Overview

The Reports API is a REST API you can use to access information about the Google Workspace activities of your users. The Reports API is part of the Admin SDK API.

The Reports API provides two types of reports:

- **Activity** reports, which report events for a specific application or service, such as Google Drive or the Admin console.
- **Usage** reports, which list workspace events caused by users.
	- **Customer** usage reports list events for all users in your domain.
		- **User** usage reports list events organized by user.

Following is a list of common terms used in the Reports API:

*Activity reports*

Activity reports list information for activities in a specific Google Workspace application or service. Activity reports include the date, time, user, and type of activity. The [API reference](https://developers.google.com/workspace/admin/reports/v1/reference) contains a complete list of activity reports and the information they include. Here are some example activity reports, listed by application or service:

- [Admin activity reports](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin) show activities done by administrators using the Admin console. For example, you could get a list of all the times administrators changed a user's name using the Admin console.
- [Google Drive activity reports](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-drive) list how your domain's users edit and view their Drive documents. For example, you can get a list of a particular user's activity on Drive.
- [Login activity reports](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login) provide information on when your account's users log in and out of their accounts. You can, for example, get a report of all the logins for your domain over a particular time period.
- [Mobile activity reports](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile) show activities using mobile devices managed by [Google Mobile Management](https://workspace.google.com/products/admin/endpoint/). For example, you can get a notification when users register a new device.
- [OAuth Token activity reports](https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-tokens) list events when your users have given or revoked authorization tokens used by third-party websites and applications. You can use the Reports API to get a list of all third-party access to a user's Google Workspace data.

*Usage reports*

Usage reports provide information about Google Workspace events in your domain. You can use the API to request specific information about users.

- [Customers usage reports](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-customers) list detailed application and service activities in your account. This usage information is organized by application type and contains information specific to that application.
- [Users usage reports](https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-users) show activities by your account's users. These reports can be customized and filtered for specific usage information. This usage information is organized by application type and contains information specific to that application.

*Notifications*

The Reports API provides notifications that let you watch for events, such as changes to resources. When you're watching a resource and that resource changes, the Reports API sends you a notification. For more information on setting up and receiving notifications from the Reports API, see the guide to [Receiving Push Notifications](https://developers.google.com/workspace/admin/reports/v1/guides/push).

## Next steps

- To learn about the Reports API and see it work, use a Quickstart, which are listed by programming language on the left navigation bar. You can also continue through this section to read general information about setting up your account.
- The [authorization](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing) section shows you how to use OAuth 2.0 access tokens to obtain user data from Google Workspace applications and services.
- To find the details of a specific resource type or method, see the [API reference](https://developers.google.com/workspace/admin/reports/v1/reference).
- For more information, see the [Admin SDK API issue tracker](https://issuetracker.google.com/savedsearches/566232), the [Google Workspace Developers blog](https://cloud.google.com/blog/topics/workspace-developers), and the [Google Workspace Admin help center](https://support.google.com/a).
