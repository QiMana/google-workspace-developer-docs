---
source: https://developers.google.com/workspace/admin/alertcenter/quickstart/java
root: workspace
fetched_at: 2026-04-23T15:23:21.246Z
---

# Java quickstart

Quickstarts explain how to set up and run an app that calls a Google Workspace API. This quickstart uses a simplified authentication approach that is appropriate for a testing environment. For a production environment, we recommend learning about [authentication and authorization](../../../guides/auth-overview.md) before [choosing the access credentials](../../../guides/create-credentials.md#choose_the_access_credential_that_is_right_for_you) that are appropriate for your app.

As a Google Workspace administrator, you can use the Alert Center API to access alerts for issues affecting your domain.

## Objectives

- Set up your environment.
- Set up and run the sample.

## Prerequisites

- Java 1.8 or greater.
- [A Google Cloud project](../../../guides/create-project.md).
- A Google Account.

## Set up your environment

The following sections describe how to set up your Google Cloud project and service account.

### Turn on the API

To use the Alert Center API, you must enable the API in a Google Cloud project.

Before using Google APIs, you need to turn them on in a Google Cloud project. You can turn on one or more APIs in a single Google Cloud project.
- In the Google Cloud console, turn on the Alert Center API.
	[Turn on the API](https://console.cloud.google.com/flows/enableapi?apiid=alertcenter.googleapis.com)

### Create a service account

A service account is a special kind of account used by an application, rather than a person. You can use a service account to access data or perform actions by the robot account, or to access data on behalf of Google Workspace or Cloud Identity users. For more information, see [Understanding service accounts](https://cloud.google.com/iam/docs/understanding-service-accounts).

### Google Cloud console

1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
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

#### Create credentials for a service account

You need to obtain credentials in the form of a public/private key pair. These credentials are used by your code to authorize service account actions within your app.
1. In the Google Cloud console, go to Menu \> **IAM & Admin** \> **Service Accounts**.
	[Go to Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts)
2. Select your service account.
3. Click **Keys** \> **Add key** \> **Create new key**.
4. Select **JSON**, then click **Create**.
	Your new public/private key pair is generated and downloaded to your machine as a new file. Save the downloaded JSON file as `credentials.json` in your working directory. This file is the only copy of this key. For information about how to store your key securely, see [Managing service account keys](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys).
5. Click **Close**.

## Set up and run the sample

1. Get credentials:

```
InputStream in = AdminSDKAlertCenterQuickstart.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
if (in == null) {
  throw new FileNotFoundException("Resource not found: " + CREDENTIALS_FILE_PATH);
}
GoogleCredentials credentials = ServiceAccountCredentials
    .fromStream(in)
    .createDelegated(delegatedAdminEmail)
    .createScoped(SCOPES);
```

1. Create an instance of the client:

```
NetHttpTransport transport = GoogleNetHttpTransport.newTrustedTransport();
AlertCenter service = new AlertCenter.Builder(transport, JSON_FACTORY,
    new HttpCredentialsAdapter(getCredentials(DELEGATED_ADMIN_EMAIL)))
    .setApplicationName(APPLICATION_NAME)
    .build();
```

1. Display all alerts:

```
String pageToken = null;
do {
  ListAlertsResponse listResponse = service.alerts().list().setPageToken(pageToken)
      .setPageSize(20).execute();
  if (listResponse.getAlerts() != null) {
    for (Alert alert : listResponse.getAlerts()) {
      System.out.println(alert);
    }
  }
  pageToken = listResponse.getNextPageToken();
} while (pageToken != null);
```

1. Provide feedback on a given alert:

```
AlertFeedback newFeedback = new AlertFeedback();
newFeedback.setType("VERY_USEFUL");
AlertFeedback feedback = service.alerts().feedback().create(alertId, newFeedback).execute();
System.out.println(feedback);
```
