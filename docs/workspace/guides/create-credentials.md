---
source: https://developers.google.com/workspace/guides/create-credentials
root: workspace
fetched_at: 2026-04-23T15:30:06.366Z
---

# Create access credentials

## Page Summary

- Google Workspace APIs require credentials, which can be API keys, OAuth client IDs, or service accounts, depending on the type of access needed.
- API keys provide anonymous access to public data and are created in the Google Cloud console.
- OAuth client IDs are used for accessing user data with consent and require separate IDs for different platforms.
- Service accounts enable applications to access data or act on behalf of users and require role assignment and secure key management.
- Creating a service account involves assigning roles, generating keys, and optionally configuring domain-wide delegation for accessing user data on behalf of the application.

Credentials are used to obtain an access token from Google's authorization servers so your app can call Google Workspace APIs. This guide describes how to choose and set up the credentials your app needs.

For definitions of terms found on this page, see the [Authentication and authorization overview](https://developers.google.com/workspace/guides/auth-overview).

## Choose the access credential that is right for you

The required credentials depend on the type of data, platform, and access methodology of your app. There are three types of credentials available:

| Use case | Authentication method | About this authentication method |
| --- | --- | --- |
| Access publicly available data anonymously in your app. | [API keys](#api-key) | Check that the API you want to use supports API keys before using this authentication method. |
| Access user data such as their email address or age. | [OAuth client ID](#oauth-client-id) | Requires your app to request and receive consent from the user. |
| Access data that belongs to your own application or access resources on behalf of Google Workspace or Cloud Identity users through [domain-wide delegation.](#optional_set_up_domain-wide_delegation_for_a_service_account) | [Service account](#service-account) | When an app authenticates as a service account, it has access to all resources that the service account has permission to access. |

### API key credentials

An API key is a long string containing upper and lower case letters, numbers, underscores, and hyphens, such as `AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe`. This authentication method is used to anonymously access publicly available data, such as Google Workspace files shared using the "Anyone on the Internet with this link" sharing setting. For more details, see [Using API keys](https://cloud.google.com/docs/authentication/api-keys).

To create an API key:

1. In the Google Cloud console, go to Menu \> **APIs & Services** \> **Credentials**.
	[Go to Credentials](https://console.cloud.google.com/apis/credentials)
2. Click **Create credentials** \> **API key**.
3. Your new API key is displayed.
	- Click Copy to copy your API key for use in your app's code. The API key can also be found in the "API Keys" section of your project's credentials.
		- To prevent unauthorized use, we recommend restricting where and for which APIs the API key can be used. For more details, see [Add API restrictions](https://cloud.google.com/docs/authentication/api-keys#adding-api-restrictions).

### OAuth client ID credentials

To authenticate end users and access user data in your app, you need to create one or more OAuth 2.0 Client IDs. A client ID is used to identify a single app to Google's OAuth servers. If your app runs on multiple platforms, you must create a separate client ID for each platform.

Choose your [application type](https://support.google.com/cloud/answer/6158849#service-web-app&zippy=%2Cweb-applications%2Cnative-applications) for specific instructions about how to create an OAuth client ID:

### Web application

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Web application**.
4. In the **Name** field, type a name for the credential. This name is only shown in the Google API Console.
5. Add authorized URIs related to your app:
	- **Client-side apps (JavaScript)** –Under **Authorized JavaScript origins**, click **Add URI**. Then, enter a URI to use for browser requests. This identifies the domains from which your application can send API requests to the OAuth 2.0 server.
		- **Server-side apps (Java, Python, and more)** –Under **Authorized redirect URIs**, click **Add URI**. Then, enter an endpoint URI to which the OAuth 2.0 server can send responses.
6. Click **Create**.
	The newly created credential appears under **OAuth 2.0 Client IDs**.
	Note the Client ID. Client secrets aren't used for Web applications.

### Android

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Android**.
4. In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
5. In the "Package name" field, enter the package name from your `AndroidManifest.xml` file.
6. In the "SHA-1 certificate fingerprint" field, enter your [generated SHA-1 certificate fingerprint](https://support.google.com/cloud/answer/6158849#installedapplications&android&zippy=%2Cnative-applications%2Candroid).
7. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

### iOS

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **iOS**.
4. In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
5. In the "Bundle ID" field, enter the bundle identifier as listed in the app's `Info.plist` file.
6. Optional: If your app appears in the Apple App Store, enter the App Store ID.
7. Optional: In the "Team ID" field, enter the unique 10-character string that's generated by Apple and assigned to your team.
8. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

### Chrome Extension

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Chrome Extension**.
4. In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
5. In the "Item ID" field, enter your app's unique 32-character ID string. You can find this ID value in your app's Chrome Web Store URL and in the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard).
6. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

### Desktop app

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **Desktop app**.
4. In the **Name** field, type a name for the credential. This name is only shown in the Google API Console.
5. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

### TVs & Limited Input devices

1. In the Google API Console, go to Menu \> **Google Auth platform** \> **Clients**.
	[Go to Clients](https://console.developers.google.com/auth/clients)
2. Click **Create Client**.
3. Click **Application type** \> **TVs & Limited Input devices**.
4. In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
5. Click **Create**.
	The newly created credential appears under "OAuth 2.0 Client IDs."

### Service account credentials

A service account is a special kind of account used by an application, rather than a person. You can use a service account to access data or perform actions by the robot account, or to access data on behalf of Google Workspace or Cloud Identity users. For more information, see [Understanding service accounts](https://cloud.google.com/iam/docs/understanding-service-accounts).

#### Create a service account

### Google API Console

1. In the Google API Console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.developers.google.com/iam-admin/serviceaccounts)
2. Click **Create service account**.
3. Fill in the service account details, then click **Create and continue**.
4. Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to [Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).
5. Click **Continue**.
6. Optional: Enter users or groups that can manage and perform actions with this service account. For more details, refer to [Managing service account impersonation](https://cloud.google.com/iam/docs/impersonating-service-accounts).
7. Click **Done**. Make a note of the email address for the service account.

### gcloud CLI

1. Create the service account:
	```
	gcloud iam service-accounts create SERVICE_ACCOUNT_NAME \
	  --display-name="SERVICE_ACCOUNT_NAME"
	```
2. Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to [Granting, changing, and revoking access to resources](https://cloud.google.com/iam/docs/granting-changing-revoking-access).

#### Assign a role to a service account

You must assign a prebuilt or custom role to a service account by a super administrator account.

1. In the Google Admin console, go to Menu \> **Account** \> **Admin roles**.
	[Go to Admin roles](https://admin.google.com/ac/roles)
2. Point to the role that you want to assign, and then click **Assign admin**.
3. Click **Assign service accounts**.
4. Enter the email address of the service account.
5. Click **Add \> Assign role**.

#### Create credentials for a service account

You need to obtain credentials in the form of a public/private key pair. These credentials are used by your code to authorize service account actions within your app.

To obtain credentials for your service account:

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Select your service account.
3. Click **Keys** \> **Add key** \> **Create new key**.
4. Select **JSON**, then click **Create**.
	Your new public/private key pair is generated and downloaded to your machine as a new file. Save the downloaded JSON file as `credentials.json` in your working directory. This file is the only copy of this key. For information about how to store your key securely, see [Managing service account keys](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys).
5. Click **Close**.

#### Optional: Set up domain-wide delegation for a service account

To call APIs on behalf of users in a Google Workspace organization, your service account needs to be granted domain-wide delegation of authority in the Google Workspace Admin console by a super administrator account. For more information, see [Delegating domain-wide authority to a service account](https://developers.google.com/identity/protocols/oauth2/service-account#delegatingauthority).

To set up domain-wide delegation of authority for a service account:

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Select your service account.
3. Click **Show advanced settings**.
4. Under "Domain-wide delegation," find your service account's "Client ID." Click Copy to copy the client ID value to your clipboard.
5. If you have super administrator access to the relevant Google Workspace account, click **View Google Workspace Admin Console**, then sign in using a super administrator user account and continue following these steps.
	If you don't have super administrator access to the relevant Google Workspace account, contact a super administrator for that account and send them your service account's Client ID and list of OAuth Scopes so they can complete the following steps in the Admin console.
1. In the Google Admin console, go to Menu \> **Security** \> **Access and data control** \> **API controls**.
	[Go to API controls](https://admin.google.com/ac/owl)
	2. Click **Manage Domain Wide Delegation**.
	3. Click **Add new**.
	4. In the "Client ID" field, paste the client ID that you previously copied.
	5. In the "OAuth Scopes" field, enter a comma-delimited list of the scopes required by your application. This is the same set of scopes you defined when configuring the OAuth consent screen.
	6. Click **Authorize**.

## Next step

You're ready to develop on Google Workspace! Review the list of [Google Workspace developer products](https://developers.google.com/workspace/products) and [how to find help](https://developers.google.com/workspace/support).
