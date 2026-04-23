---
source: https://developers.google.com/workspace/admin/directory/v1/guides/manage-chrome-devices.html
root: workspace
fetched_at: 2026-04-23T15:23:48.607Z
---

# Directory API: ChromeOS devices

## Retrieve all ChromeOS devices for an account

To return a list of all ChromeOS devices assigned to an account, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). For readability, this code sample has line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/customer/{my_customer|customerId}/
devices/chromeos?projection={BASIC|FULL}&query=query
&orderBy=orderBy category&sortOrder={ASCENDING|DESCENDING}
&pageToken=token for next results page, if applicable
&maxResults=max number of results per page
```

- The `customerId` is a unique identifier of the customer's Google account.
- As an account administrator, you can also use the string `my_customer` which represents your account's `customerId`. Another way to get the `customerId` value is to use the [Retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) operation. Use your administrator email address or your administrator unique user `id` value in the operation's `userKey` path parameter.

For the query strings, request, and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list).

### Example: Filter devices by user

This example searches for a specific user by using `query=user:help desk`. The response contains a single `chromeosdevice` resource, where the `annotatedUser` is `help desk`:

#### JSON request

```
GET https://admin.googleapis.com/admin/directory/v1/customer/my_customer/devices/
chromeos?projection=FULL&query=user:help desk&orderBy=status
&sortOrder=ASCENDING&maxResults=100
```

#### JSON response

```
{
  "kind": "directory#chromeosdevices",
  "chromeosdevices": [
     {
       "kind": "directory#chromeosdevice",
       "etag": "1234567890"
       "deviceId": "def456",
       "serialNumber": "234567",
       "status": "ACTIVE",
       "lastSync": "2013-03-05T17:30:04.325Z",
       "supportEndDate": "2014-04-05T17:30:04.325Z",
       "annotatedUser": "help desk",
       "annotatedLocation": "Mountain View help desk Chromebook",
       "annotatedAssetId": "1234567890",
       "notes": "Loaned from support",
       "orderNumber": "1234",
       "willAutoRenew": true,
       "osVersion": "Browser Version 18.0",
       "platformVersion": "Platform Version 1415.2.0",
       "firmwareVersion": "Firmware Version 1.2.3.4",
       "bootMode": "validated",
       "lastEnrollmentTime": "2012-04-05T17:30:04.325Z",
       "orgUnitPath": "corp/engineering",
       "recentUsers": [
         {
           "type": "USER_TYPE_MANAGED",
           "email": "user@customer.com"
         }
       ],
       "activeTimeRanges": [
         {
           "date": "2012-04-05",
           "activeTime": "3600000"
         }
       ],
     }
  ],
  "nextPageToken": "abcdefghijkl123"
}
```

### Example: Filter devices by serial number

This example searches for a specific serial number by using `query=id:123456`, where `123456` is the device's serial number. The response shown below contains a single matching reply, where the `serialNumber` property matches the search value.

#### JSON request

```
GET https://admin.googleapis.com/admin/directory/v1/customer/my_customer/devices/
chromeos?projection=FULL&query=id:123456&orderBy=status
&sortOrder=ASCENDING&maxResults=100
```

#### JSON response

```
{
  "kind": "directory#chromeosdevices",
  "chromeosdevices": [
     {
       "kind": "directory#chromeosdevice",
       "deviceId": "abc123",
       "serialNumber": "123456",
       "status": "SHIPPED",
       "supportEndDate": "1404457200000",
       "model": "model_value",
       "meid": "meid_value",
       "macAddress": "mac_address_value",
       "orderNumber": "1234",
       "willAutoRenew": true
     }
  ],
  "nextPageToken": "abcdefghijkl123"
}
```

This response example includes the `model`, `meid`, and `macAddress` properties. If a device does not have these properties, they are not included in the response. For full details, see the [Chromeosdevices resource representation](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices#resource).

### Export a MEID list

The `meid` is Mobile Equipment Identifier (MEID) for the 3G mobile card in a ChromeOS device. A MEID is typically used when adding a device to a wireless carrier's post-pay service plan. To export the MEID list, use the following `GET` request and the `nextPageToken` values to retrieve the full list of MEIDs. For readability, this code sample has line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/customer/{my_customer|customerId}/
devices/chromeos?fields=nextPageToken,chromeosdevices(meid)
```

## Retrieve a ChromeOS device

To retrieve a ChromeOS device's properties, use the following `GET` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). For readability, this code sample has line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/customer/{my_customer|customerId}/
devices/chromeos/deviceId?projection={FULL|BASIC}
```

- The `customerId` is a unique identifier of the customer's Google account.
- As an account administrator, you can also use the string `my_customer` which represents your account's `customerId`. Another way to get the `customerId` value is to use the [Retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) operation. Use your administrator email address or your administrator unique user `id` value in the operation's `userKey` path parameter.
- The `deviceId` is a unique identifier for a device and is found in the response of the [Retrieve all ChromeOS devices](#get_all_chrome_devices) operation.

For the query strings, request, and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/get).

#### JSON request

An example request. For readability, this code sample has line returns:

```
GET https://admin.googleapis.com/admin/directory/v1/customer/my_customer/devices/
chromeos/deviceId?projection=full
```

#### JSON response

A successful request returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the ChromeOS device properties:

```
{
  "kind": "directory#chromeosdevice",
  "deviceId": "device_id_value",
  "serialNumber": "device_serial_number",
  "status": "ACTIVE",
  "lastSync": "2012-04-05T17:30:04.325Z",
  "supportEndDate": "2014-04-05T17:30:04.325Z",
  "annotatedUser": "help desk",
  "annotatedLocation": "Mountain View help desk Chromebook",
  "annotatedAssetId": "12345667890",
  "notes": "Loaned from support",
  "orderNumber": "123456",
  "willAutoRenew": true,
  "osVersion": "Browser Version 18.0",
  "platformVersion": "Platform Version 1415.2.0",
  "firmwareVersion": "Firmware Version 1.2.3.4",
  "bootMode": "validated"
  "lastEnrollmentTime": "2012-04-05T17:30:04.325Z",
  "orgUnitPath": "corp/engineering"
}
```

## Update a ChromeOS device

To update a ChromeOS device, use the following `PUT` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). For readability, this code sample has line returns:

```
PUT https://admin.googleapis.com/admin/directory/v1/customer/{my_customer|customerId}/
devices/chromeos/deviceId?projection={FULL|BASIC}
```

- The `customerId` is a unique identifier of the customer's Google account.
- As an account administrator, you can also use the string `my_customer` which represents your account's `customerId`. Another way to get the `customerId` value is to use the [Retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) operation. Use your administrator email address or your administrator unique user `id` value in the operation's `userKey` path parameter.
- The `deviceId` is a unique identifier for a device and is found in the response of the [Retrieve all ChromeOS devices](#get_all_chrome_devices) operation.

For the query strings, request, and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/update).

#### JSON request

The following example JSON request updates a ChromeOS device's `annotatedUser`, `annotatedLocation`, `annotatedAssetId`, `notes`, and `orgUnitPath` properties. For readability, this code sample has line returns:

```
PUT https://admin.googleapis.com/admin/directory/v1/customer/my_customer/
devices/chromeos/deviceId?projection=full
```

The request body example:

```
{
  "deviceId": "device_id_value",
  "annotatedUser": "help desk",
  "annotatedLocation": "Mountain View help desk Chromebook",
  "annotatedAssetId": "1234567890",
  "notes": "Loaned from support",
  "orgUnitPath": "/corp/sales"
}
```

For an update request, only include the properties with updated values in your request.

A successful request returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns the properties for the updated ChromeOS device.

## Deprovisioning or disabling ChromeOS devices

To deprovision or disable ChromeOS devices, use the following `POST` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). For readability, this code sample has line returns:

```
POST https://admin.googleapis.com/admin/directory/v1/customer/my_customer or customerId/
devices/chromeos:batchChangeStatus
```

- The `customerId` is a unique identifier of the customer's Google account.
- As an account administrator, you can also use the string `my_customer` which represents your account's `customerId`. Another way to get the `customerId` value is to use the [Retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) operation. Use your administrator email address or your administrator unique user `id` value in the operation's `userKey` path parameter.

For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus).

#### JSON request

The following JSON request shows a sample request to deprovision and disable ChromeOS devices:

```
POST https://admin.googleapis.com/admin/directory/v1/customer/my_customer/
devices/chromeos:batchChangeStatus
```

The request body for a sample deprovision is:

```
{
  "deviceIds": ["deviceId_1", "deviceId_2", "deviceId_3"],
  "changeChromeOsDeviceStatusAction": "CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DEPROVISION",
  "deprovisionReason": "DEPROVISION_REASON_RETIRING_DEVICE"
}
```

The request body for disable is:

```
{
  "deviceIds": ["deviceId_1", "deviceId_2", "deviceId_3"],
  "changeChromeOsDeviceStatusAction": "CHANGE_CHROME_OS_DEVICE_STATUS_ACTION_DISABLE",
}
```

A successful request returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes).

## Move ChromeOS devices to Organization Unit

To move up to 50 ChromeOS devices to an Organization Unit, use the following `POST` request and include the authorization described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). For readability, this code sample has line returns:

```
POST https://admin.googleapis.com/admin/directory/v1/customer/my_customer/
devices/chromeos/moveDevicesToOu?orgUnitPath=/SomeOuName
```

- The `customerId` is a unique identifier of the customer's Google account.
- As an account administrator, you can also use the string `my_customer` which represents your account's `customerId`. Another way to get the `customerId` value is to use the [Retrieve a user](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#get_user) operation. Use your administrator email address or your administrator unique user `id` value in the operation's `userKey` path parameter.

For the request and response properties, see the [API Reference](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/action).

#### JSON request

The following JSON request shows a sample request to move 3 ChromeOS devices to an Organization Unit named `/Marketing`:

```
POST https://admin.googleapis.com/admin/directory/v1/customer/my_customer/
devices/chromeos/chromeos/moveDevicesToOu?orgUnitPath=/Marketing
```

The request body for the device move is:

```
{
  "deviceIds": ["deviceId_1", "deviceId_2", "deviceId_3"]
}
```

A successful request returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes).
