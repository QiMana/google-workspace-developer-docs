---
source: https://developers.google.com/workspace/admin/directory/v1/guides/manage-mobile-devices
root: workspace
fetched_at: 2026-04-23T15:23:48.429Z
---

# Directory API: Mobile Devices

The Google Workspace Directory API allows you to manage mobile devices within your organization. This page includes examples of how to list your mobile devices, obtain details of a specific device, as well as adding or removing a device.

This document assumes you have successfully completed the [Prerequisites](./prerequisites.md#set_up_mobile). Android devices need to have the [device policy app](http://play.google.com/store/apps/details?id=com.google.android.apps.enterprise.dmagent) installed. iOS devices must be registered with the [Google Mobile Management service](https://support.google.com/a/answer/1734200).

In these examples, the placeholders customerId and resourceId are used to indicate where you would provide those IDs. The customerId can be obtained from the [Users.get](../../reference/rest/v1/users/get.md) method. The resourceId is a unique Google identifier for a device and is found in the response of the [Retrieve all mobile devices](#get_all_mobile_devices) method.

## Retrieve all mobile devices

To retrieve all of an account's mobile devices, use the following `GET` request and include the authorization described in [Authorize requests](./authorizing.md). For readability, this example uses line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/customer/{my_customer|customerId}
  /devices/mobile?projection={BASIC|FULL}&query=query
  &orderBy=orderBy category&sortOrder={ASCENDING|DESCENDING}
  &pageToken=token for next results page
  &maxResults=max number of results per page
```

For the request and response properties, see the [API Reference](../../reference/rest/v1/mobiledevices/list.md).

### JSON response

```
{
   "kind": "directory#mobiledevices",
   "mobiledevices": [
    {
     "kind": "directory#mobiledevice",
     "resourceId": "resourceId",
     "deviceId": "deviceId",
     "name": [
      "Sales"
     ],
     "email": [
      "sales@example.com"
     ],
     "model": "Nexus 4",
     "os": "Android 4.2.2",
     "type": "ANDROID",
     "status": "APPROVED",
     "hardwareId": "1234567890",
     "firstSync": "2013-05-15T17:30:04.325Z",
     "lastSync": "2013-06-05T17:30:04.325Z",
     "userAgent": "Google Apps Device Policy 4.14",
   },
   {
     "kind": "directory#mobiledevice",
     "resourceId": "resourceId",
     "deviceId": "deviceId",
     "name": [
      "Liz"
     ],
     "email": [
      "liz@example.com"
     ],
     "model": "Galaxy Nexus",
     "os": "Android 4.2.2",
     "type": "ANDROID",
     "status": "APPROVED",
     "hardwareId": "9123456780",
     "firstSync": "2013-06-05T17:30:04.325Z",
     "lastSync": "2013-08-12T17:30:04.325Z",
     "userAgent": "Google Apps Device Policy 4.14",
    }
   ],
   "nextPageToken": "next_page_token_value"
  }
```

## Retrieve a mobile device

To retrieve a mobile device's properties, use the following `GET` request and include the authorization described in [Authorize requests](./authorizing.md). For readability, this example uses line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/customer/{my_customer|customerId}
  /devices/mobile/resourceId?projection={FULL|BASIC}
```

For the request and response properties, see the [API Reference](../../reference/rest/v1/mobiledevices/get.md).

### JSON request

An example request for the resourceId is:

```
GET https://admin.googleapis.com/admin/directory/v1/customer/my_customer/devices/
  mobile/resourceId?projection=FULL
```

### JSON response

```
{
   "kind": "directory#mobiledevice",
   "resourceId": "resourceId",
   "deviceId": "deviceId",
   "name": [
    "Sales3"
   ],
   "email": [
    "sales@example.com"
   ],
   "model": "Nexus 4",
   "os": "Android 4.2.2",
   "type": "ANDROID",
   "status": "APPROVED",
   "hardwareId": "1234567890",
   "firstSync": "2010-05-15T17:30:04.325Z",
   "lastSync": "2013-06-05T17:30:04.325Z",
   "userAgent": "Google Apps Device Policy 4.14",
  }
```

## Approve a mobile device

To approve a mobile device, use the following `POST` request and include the authorization described in [Authorize requests](./authorizing.md). For readability, this example uses line returns:

```
POST https://admin.googleapis.com/admin/directory/v1/customer/{my_customer|customerId}
  /devices/mobile/resourceId/action
```

For the request and response properties, see the [API Reference](../../reference/rest/v1/mobiledevices/action.md).

### JSON request

The following JSON request shows a sample request to approve a device:

```
POST https://admin.googleapis.com/admin/directory/v1/customer/my_customer/devices
  /mobile/resourceId/action
```

The request body is:

```
{
    "action": "approve"
}
```

A successful request returns an [HTTP 200 status code](https://wikipedia.org/wiki/List_of_HTTP_status_codes).

## Remove a mobile device

To remove a mobile device, use the following `DELETE` request and include the authorization described in [Authorize requests](./authorizing.md). For readability, this example uses line returns:

```
DELETE https://admin.googleapis.com/admin/directory/v1/customer/{my_customer|customerId}
  /devices/mobile/resourceId
```

For the request and response properties, see the [API Reference](../../reference/rest/v1/mobiledevices/delete.md).

A successful request returns an [HTTP 200 status code](https://wikipedia.org/wiki/List_of_HTTP_status_codes).
