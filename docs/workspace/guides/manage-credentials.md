---
source: https://developers.google.com/workspace/guides/manage-credentials
root: workspace
fetched_at: 2026-04-23T15:30:07.534Z
---

# Manage credentials for Google Workspace APIs

## Page Summary

- Google Workspace credentials, including OAuth 2.0 and service accounts, are used to obtain access tokens for your app to interact with Google Workspace APIs.
- You can manage your Google Workspace credentials—view, edit, reset client secrets, turn off service accounts, and delete credentials—in the Google Cloud console.
- Deleting credentials permanently removes application access to Google Cloud resources through that credential and cannot be undone.
- For security, the client secret of an OAuth 2.0 Client ID should only be known by the application and the authorization server.

Credentials are used to obtain an access token from Google's authorization servers so your app can call Google Workspace APIs. For Google Workspace APIs, you can manage OAuth 2.0 and service account credentials.

## View credentials

To see a list of credentials enabled for all Google Workspace APIs or an individual Google Workspace API, do the following:

1. In the Google Cloud console, click **Menu** \> the **View all products** tile \> **Google Workspace** \> **Credentials**.
	[Go to Credentials](https://console.cloud.google.com/workspace-api/credentials)
2. To select an individual Google Workspace API, click **All Google Workspace APIs**, then select an API.

## Edit credentials

After you create credentials, you can edit some aspects of a credential. For example, for OAuth 2.0 client IDs, you can edit the name that is shown in the Google Cloud console or reset the client secret. For service accounts, you can edit the name and description.

1. In the Google Cloud console, click **Menu** \> the **View all products** tile \> **Google Workspace** \> **Credentials**.
	[Go to Credentials](https://console.cloud.google.com/workspace-api/credentials)
2. To edit a credential, click Edit .
3. Make your changes and then click **Save**.

## Reset client secret

The client secret should only be known to the application and the authorization server.

1. In the Google Cloud console, click **Menu** \> the **View all products** tile \> **Google Workspace** \> **Credentials**.
	[Go to Credentials](https://console.cloud.google.com/workspace-api/credentials)
2. Next to an OAuth 2.0 Client ID, click Edit .
3. Click **Reset Secret**.
4. Copy the secret and update the application with this value.

## Turn off a service account

When you turn off a service account, applications no longer have access to the Google Cloud resources through that service account. If you turn off a service account, you can turn it back on later.

1. In the Google Cloud console, click **Menu** \> the **View all products** tile \> **Google Workspace** \> **Credentials**.
	[Go to Credentials](https://console.cloud.google.com/workspace-api/credentials)
2. Next to a service account, click Edit .
3. Click **Disable service account** and then click **Disable.**

## Delete a client ID or service account

When you delete a client ID or a service account, applications no longer have access to the Google Cloud resources through that client ID or service account. If you delete a client ID or service account, this deletion is permanent and the credentials can't be restored.

1. In the Google Cloud console, click **Menu** \> the **View all products** tile \> **Google Workspace** \> **Credentials**.
	[Go to Credentials](https://console.cloud.google.com/workspace-api/credentials)
2. Next to a credential, click Delete and then click **Delete**.

## Next steps

- [Learn about authentication & authorization](https://developers.google.com/workspace/guides/auth-overview).
- [Create access credentials](https://developers.google.com/workspace/guides/create-credentials).
