---
source: https://developers.google.com/workspace/classroom/guides/key-concepts/domain-wide-delegation
root: workspace
fetched_at: 2026-04-23T15:25:45.452Z
---

# Domain-wide delegation

Domain-wide delegation allows Google Workspace for Education [super administrators](https://support.google.com/a/answer/2405986) to grant third-party applications permission to access data of users within their domain without requiring a specific user's consent. Domain-wide delegation is performed in the Google Admin console by specifying the client ID of a service account or third-party application.

A **service account** is an account that belongs to a Google Cloud project instead of an individual user. Applications can request access to Google APIs on behalf of the service account rather than on behalf of individual end-users. Service accounts are set up in the Google Cloud console.

An **OAuth client ID** is a public identifier used to identify applications to Google servers.

## Domain-wide delegation set-up

A Google Workspace super administrator can set up the service account or OAuth client ID with domain-wide delegation in the Admin console.

1. In the Admin console, navigate to **Main menu** **\> Security > Access and data control > API Controls**.
2. Under **Domain wide delegation**, select **Manage Domain Wide Delegation**.
3. Click **Add new**.
4. Enter the service account's client ID or the application's OAuth client ID in the **Client ID** field. Enter the list of OAuth scopes that the service account or application should be granted in the **OAuth scopes** field.
5. Click **Authorize**.

If an administrator installs an application for a domain from the Google Workspace Marketplace, service accounts used by that application don't need to be manually set-up. The required permissions are automatically provided during installation.

## Resources

- Domain-wide delegation [best practices](https://support.google.com/a/answer/14437356)
