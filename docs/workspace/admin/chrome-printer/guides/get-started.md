---
source: https://developers.google.com/workspace/admin/chrome-printer/guides/get-started
root: workspace
fetched_at: 2026-04-23T15:23:28.970Z
---

# Get started

To manage printers using the Chrome Printer Management API, you need to follow these steps:

1. Enable the API in a Google Cloud project.
2. Create OAuth 2.0 credentials for a service account.
3. Grant the service account administrator privileges to manage printers.

This guide assumes you have already configured an OAuth consent screen for your app and set up a service account. If not, see [Configure OAuth consent](../../../guides/configure-oauth-consent.md) and [Create a service account](../../../guides/create-credentials.md#create_a_service_account) before proceeding.

Only service accounts can access the Chrome Printer Management API.

A [Chrome administrator](https://knowledge.workspace.google.com/admin/users/administrator-privilege-definitions#chrome_ent) must grant your service account the necessary access to manage printers for their account. Administrators can also block or trust specific printer management apps.

## Enable API and create credentials

1. [Enable the API](../../../guides/enable-apis.md). The API you are enabling is "Admin SDK API."
2. [Create OAuth 2.0 credentials](../../../guides/create-credentials.md#create_credentials_for_a_service_account) for your service account. Store the downloaded JSON file in a secure location.

## Enable service account access

Before you can use the service account to manage a customer's printers or print servers, an administrator for that customer's account must grant the service account the necessary privileges.

### Option 1: Enable domain-wide delegation for the service account

Domain-wide delegation lets the service account impersonate an administrator who has the proper privileges to manage printers and print servers.

[Enable domain-wide delegation](../../../guides/create-credentials.md#optional_set_up_domain-wide_delegation_for_a_service_account)

The OAuth scope you need for this step is `https://www.googleapis.com/auth/admin.chrome.printers`.

### Option 2: Grant administrator role privileges to the service account

If you prefer to limit the service account's privileges on the domain, you can assign it a role with privileges to only manage printers. To learn more about using roles for access control, see [Manage roles](../../directory/v1/guides/manage-roles.md).

1. As an administrator, sign in to the [Admin console](https://admin.google.com/).
2. At the top left of the page, click > **Account** > **Admin roles**.
3. Select an existing role with the privilege following, or create a new role and add this privilege:
	`Services > ChromeOS > Settings > Manage Printers`
4. Assign this role to the service account email address.

## Block or trust a printer management app

Apps are trusted by default, but an administrator can choose to block or trust specific apps for their account.

1. As an administrator, sign in to the [Admin console](https://admin.google.com/).
2. At the top left, click Menu > **Security** \> **Access and data control** \> **API controls**.
3. In the "App access control" section, click **Manage Third-party App Access**.
4. In the "Connected apps" section:
	- If you don't see the app listed, click **Configure new app**. Then, follow the on-screen instructions.
		- If you see the app listed, click the app name. Then, select blocked or trusted under "App Access" and click **Save**.
