---
source: https://developers.google.com/workspace/marketplace/example-calls-marketplace-api
root: workspace
fetched_at: 2026-04-23T15:30:09.939Z
---

# Get app installation and licensing details

## Page Summary

- This guide demonstrates how to retrieve Google Workspace Marketplace app installation and licensing information using the Google Workspace Marketplace API.
- It provides example requests and responses for scenarios like individual user installations, admin installations for entire organizations or specific OUs, and application deletions.
- You can use the `licenseNotification.list`, `userLicense.get`, and `customerLicense.get` methods to obtain detailed licensing and installation data.
- By examining the response fields like `enabled`, `state`, `seatCount`, and `provisions`, you can determine the licensing status and access permissions of users and domains.

By providing example requests to and responses from the [Google Workspace Marketplace API](https://developers.google.com/workspace/marketplace/reference/rest "Google Workspace Marketplace API"), this document shows how to get Google Workspace Marketplace app installation and licensing details.

## The application is installed by an administrator

The administrator of cymbalgroup.com installed the application for everyone in the organization.

### userLicense.get request

This request calls the [`userLicense.get`](https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense/get "Method: userLicense.get") method to get the licensing status of user1@cymbalgroup.com to determine if they have permission to use the application.

`GET /appsmarket/v2/userLicense/{applicationId}/{userId}`

```
curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/userLicense/APPLICATION_ID/user1@cymbalgroup.com
```

### Response body

Since cymbalgroup.com has installed the application, the response returns the [`userLicense`](https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense "UserLicense") resource for user1@cymbalgroup.com. The `userLicense` resource has the [`enabled`](https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense#UserLicense.FIELDS.enabled) field set to `true`, indicating that the domain administrator for cymbalgroup.com has activated the application for this domain, and the [`state`](https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense#UserLicense.FIELDS.state) field set to `ACTIVE`, indicating that user1@cymbalgroup.com has a valid license and should be permitted to use the application.

```
{
  "kind": "appsmarket#userLicense",
  "enabled": true,
  "state": "ACTIVE",
  "editionId": "default_edition",
  "customerId": "user1@cymbalgroup.com",
  "applicationId": "APPLICATION_ID",
  "id": "USER_LICENSE_ID",
  "userId": "user1@cymbalgroup.com"
}
```

### customerLicense.get request

This request calls the [`customerLicense.get`](https://developers.google.com/workspace/marketplace/reference/rest/v2/customerLicense/get "Method: customerLicense.get") method to get the licensing status of cymbalgroup.com to determine if they have access to the application.

`GET /appsmarket/v2/customerLicense/{applicationId}/{customerId}`

```
curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/customerLicense/APPLICATION_ID/cymbalgroup.com
```

### Response body

The response returns the [`customerLicense`](https://developers.google.com/workspace/marketplace/reference/rest/v2/customerLicense "CustomerLicense") resource for cymbalgroup.com where the [`state`](https://developers.google.com/workspace/marketplace/reference/rest/v2/customerLicense#CustomerLicense.FIELDS.state) field is set to `ACTIVE`, indicating that the customer has a valid license.

```
{
  "kind": "appsmarket#customerLicense",
  "id": "CUSTOMER_LICENSE_ID",
  "applicationId": "APPLICATION_ID",
  "customerId": "cymbalgroup.com",
  "state": "ACTIVE",
  "editions": [
    {
      "editionId": "default_edition",
      "seatCount": -1
    }
  ]
}
```

## The application is only administrator installed for a specific user's organizational unit

The application is now only administrator installed for user2@cymbalgroup.com's organizational unit (OU). It's no longer administrator installed for everyone in the organization.

### userLicense.get request

This request calls the [`userLicense.get`](https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense/get "Method: userLicense.get") method to get the licensing status of user3@cymbalgroup.com to determine if they have permission to use the application.

`GET /appsmarket/v2/userLicense/{applicationId}/{userId}`

```
curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/userLicense/APPLICATION_ID/user3@cymbalgroup.com
```

### Response body

Since the application is only administrator installed for user2@cymbalgroup.com, the response returns a [`userLicense`](https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense "UserLicense") resource for user3@cymbalgroup.com that has the `enabled` field set to `false`, indicating that the domain administrator for cymbalgroup.com has not activated the application for this domain, and the `state` field set to `ACTIVE`, indicating that the user has a valid license and should be permitted to use the application.

```
{
  "kind": "appsmarket#userLicense",
  "enabled": false,
  "state": "ACTIVE",
  "editionId": "default_edition",
  "customerId": "cymbalgroup.com",
  "applicationId": "APPLICATION_ID",
  "id": "USER_LICENSE_ID",
  "userId": "user3@cymbalgroup.com"
}
```

### userLicense.get request

This request calls the [`userLicense.get`](https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense/get "Method: userLicense.get") method to get the licensing status of user2@cymbalgroup.com to determine if they have permission to use the application.

`GET /appsmarket/v2/userLicense/{applicationId}/{userId}`

```
curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/userLicense/APPLICATION_ID/user2@cymbalgroup.com
```

### Response body

Since the application is only administrator installed for user2@cymbalgroup.com, the response returns a [`userLicense`](https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense "UserLicense") resource for user2@cymbalgroup.com that has the `enabled` field set to `true` and the `state` field set to `ACTIVE`.

```
{
  "kind": "appsmarket#userLicense",
  "enabled": true,
  "state": "ACTIVE",
  "editionId": "default_edition",
  "customerId": "cymbalgroup.com",
  "applicationId": "APPLICATION_ID",
  "id": "USER_LICENSE_ID",
  "userId": "user2@cymbalgroup.com"
}
```

## The application is deleted for everyone in the organization

Even though the application was deleted for everyone in the organization, user1@cymbalgroup.com still has access because they previously installed it individually.

### userLicense.get request

This request calls the [`userLicense.get`](https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense/get "Method: userLicense.get") method to get the licensing status of user2@cymbalgroup.com to determine if they have permission to use the application.

`GET /appsmarket/v2/userLicense/{applicationId}/{userId}`

```
curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/userLicense/APPLICATION_ID/user2@cymbalgroup.com
```

### Response body

Since the application was deleted for everyone in the organization, the response returns a [`userLicense`](https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense "UserLicense") resource for user2@cymbalgroup.com that has the `enabled` field set to `false` and the `state` field set to `UNLICENSED`, indicating that the administrator of this user's domain didn't assign a seat for the application to this user.

```
{
  "kind": "appsmarket#userLicense",
  "enabled": false,
  "state": "UNLICENSED",
  "applicationId": "APPLICATION_ID",
  "id": "USER_LICENSE_ID",
  "userId": "user2@cymbalgroup.com"
}
```

### userLicense.get request

This request calls the [`userLicense.get`](https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense/get "Method: userLicense.get") method to get the licensing status of user1@cymbalgroup.com to determine if they have permission to use the application.

`GET /appsmarket/v2/userLicense/{applicationId}/{userId}`

```
curl -H "Authorization: Bearer {TOKEN}" https://appsmarket.googleapis.com/appsmarket/v2/userLicense/APPLICATION_ID/user1@cymbalgroup.com
```

### Response body

Since user1@cymbalgroup.com previously installed the application individually, they still have permission to use it. The response returns a [`userLicense`](https://developers.google.com/workspace/marketplace/reference/rest/v2/userLicense "UserLicense") resource that has the `enabled` field set to `true` and the `state` field set to `ACTIVE`.

```
{
  "kind": "appsmarket#userLicense",
  "enabled": true,
  "state": "ACTIVE",
  "editionId": "default_edition",
  "customerId": "user1@cymbalgroup.com",
  "applicationId": "APPLICATION_ID",
  "id": "USER_LICENSE_ID",
  "userId": "user1@cymbalgroup.com"
}
```
