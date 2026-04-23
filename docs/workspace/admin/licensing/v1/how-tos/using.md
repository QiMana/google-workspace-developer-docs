---
source: https://developers.google.com/workspace/admin/licensing/v1/how-tos/using
root: workspace
fetched_at: 2026-04-23T15:23:59.345Z
---

# Enterprise License Manager API Developer's Guide

This document describes how account-level and reseller administrators can use the Enterprise License Manager API to manage user license assignments. After your account's product SKU licenses are enabled and your users are created, use the Enterprise License Manager API to assign, update, retrieve, and delete licenses for your account's users.

The Enterprise License Manager API is used by account and reseller administrators. Delegated administrators with the `License Management` privilege can also use the API.

**Note:** The Enterprise License Manager API is used by a Google customer. For information about how third-party application developers manage licenses, see the [Google Workspace Marketplace API](../../../../marketplace/reference/rest.md).

The Enterprise License Manager API is based on the [Representational State Transfer](https://en.wikipedia.org/wiki/Representational_state_transfer) (RESTful) design approach to web services.

## Manage licenses

This section describes how to manage user licenses with the Enterprise License Manager API.

### Assign a license

Before this operation, the customer or reseller must order Google product licenses and create the user. To assign one of these product licenses to the user, use the following `POST` HTTP request. Include the `Authorization` header as described in [Authorizing requests](./authorizing.md). For product and SKU IDs, see the [Products and SKUs](./products.md):

```
POST https://www.googleapis.com/apps/licensing/v1/product/productId/sku/skuId/user
```

**Note:** A user can have licenses for different Google products. But a user is assigned only one SKU license per product at a time. By using the API, a user's SKU license can be reassigned to a different SKU license within the product.

This example assigns the Google-Drive-storage-20GB SKU to the user whose primary email address is alex@example.com:

```
POST https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-20GB/user
```

The JSON request body:

```
{
  "userId" : "alex@example.com",
}
```

A successful response returns a `200` [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). For possible error codes, see [Error codes](#errors). If successful, the response returns the licensing assignment status in JSON data format.

**JSON Response**

```
{
  "kind": "licensing#licenseAssignment",
  "etags": "etag value",
  "selfLink": "https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-20GB/user/alex@example.com",
  "userId": "alex@example.com",
  "productId": "Google-Drive-storage",
  "skuId": "Google-Drive-storage-20GB",
  "skuName": "Google Drive storage 20 GB",
  "productName": "Google Drive storage"
}
```

For more information, see the licenseAssignments [insert method](../../reference/rest/v1/licenseAssignments/insert.md) reference page.

### Reassign a user's product SKU with a different SKU in the same product

To reassign a user's license to a new license SKU within the same product, use the following `PUT` HTTP request. The API also supports the [patch syntax](../../../directory/v1/guides/performance.md#patch). Include the `Authorization` header as described in [Authorizing requests](./authorizing.md). For product and SKU IDs, see the [Products and SKUs](./products.md):

```
PUT https://www.googleapis.com/apps/licensing/v1/product/productId/sku/the current skuId/user/user's email
```

This example updates the present Google-Drive-storage-20GB SKU with the Google-Drive-storage-50GB SKU. The present license SKU is in the request's URI and the new license SKU is in the request's body:

```
PUT https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-20GB/user/alex@example.com
```

The JSON request body:

```
{
  "kind": "licensing#licenseAssignment",
  "etags": "etag value",
  "selfLink": "https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-50GB/user/alex@example.com",
  "userId": "alex@example.com",
  "productId": "Google-Drive-storage",
  "skuId": "Google-Drive-storage-50GB",
  "skuName": "Google Drive storage 50 GB",
  "productName": "Google Drive storage"
}
```

A successful response returns a `200` [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). For possible error codes, see [Error codes](#errors). If successful, the response returns the license assignment status in JSON format.

**JSON Response**

```
{
  "kind": "licensing#licenseAssignment",
  "etags": "etag value",
  "selfLink": "https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-50GB/user/alex@example.com",
  "userId": "alex@example.com",
  "productId": "Google-Drive-storage",
  "skuId": "Google-Drive-storage-50GB",
  "skuName": "Google Drive storage 50 GB",
  "productName": "Google Drive storage"
}
```

For more information, see the licenseAssignments [update method](../../reference/rest/v1/licenseAssignments/update.md) and [patch method](../../reference/rest/v1/licenseAssignments/patch.md) reference pages.

### Retrieve all users assigned licenses for a specific product

To get all user licenses for a specific product, use the following `GET` HTTP request. Include the `Authorization` header as described in [Authorizing requests](./authorizing.md). The `customerId` query string is the customer's primary domain name. The `maxResults` query string determines how many user license entries are returned in the response:

```
GET https://www.googleapis.com/apps/licensing/v1/product/productId/users?customerId=primary domain name&maxResults=max results per page
```

For product and SKU IDs, see the [Products and SKUs](./products.md).

This example lists the first page of results for all users in the example.com domain assigned licenses for the Google-Drive-storage product:

```
GET https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/users?customerId=example.com&maxResults=2
```

A successful response returns a `200` [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). For possible error codes, see [Error codes](#errors). If successful, the response returns the licensing list in JSON format.

**JSON Response**

```
{
  "kind" : "licensing#licenseAssignmentList",
  "etag": "etag value",
  "nextPageToken" : "the next page token value",
  "items": [
  {
    "kind": "licensing#licenseAssignment",
    "etags": "etag value",
    "selfLink": "https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-50GB/user/alex@example.com",
    "userId": "alex@example.com",
    "productId": "Google-Drive-storage",
    "skuId": "Google-Drive-storage-50GB",
    "skuName": "Google Drive storage 50 GB",
    "productName": "Google Drive storage"
  },
  {
    "kind": "licensing#licenseAssignment",
    "etags": "etag value",
    "selfLink": "https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-200GB/user/keshav@example.com",
    "userId": "keshav@example.com",
    "productId": "Google-Drive-storage",
    "skuId": "Google-Drive-storage-200GB",
    "skuName": "Google Drive storage 200 GB",
    "productName": "Google Drive storage"
  },
  ...
}
```

For more information, see the licenseAssignments [listForProduct method](../../reference/rest/v1/licenseAssignments/listForProduct.md) reference page.

### Retrieve all users assigned licenses for a specific product SKU

To get a list of all users with licenses for a specific product SKU, use the following `GET` HTTP request. Include the `Authorization` header as described in [Authorizing requests](./authorizing.md). The `customerId` query string is the customer's primary domain name. The `maxResults` query string determines how many user entries are returned in the response:

```
GET https://www.googleapis.com/apps/licensing/v1/product/productId/sku/skuId/users?customerId=primary domain name&maxResults=max results per response page
```

For product and SKU IDs, see the [Products and SKUs](./products.md).

This example returns the first page of all users in the example.com domain assigned a license for the Google-Drive-storage-200GB SKU. The response lists two user entries per page:

```
GET https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-200GB/users?customerId=example.com&maxResults=2
```

A successful response returns a `200` [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). For possible error codes, see [Error codes](#errors). If successful, the response returns the licensing list in JSON format.

**JSON Response**

```
{
  "kind" : "licensing#licenseAssignmentList",
   "etag": "etag value",
   "nextPageToken" : "next page token's value",
   "items": [
    {
     "kind": "licensing#licenseAssignment",
     "etags": "etag value",
     "selfLink": "https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-200GB/user/alex@example.com",
     "userId": "alex@example.com",
     "productId": "Google-Drive-storage",
     "skuId": "Google-Drive-storage-200GB",
     "skuName": "Google Drive storage 200 GB",
     "productName": "Google Drive storage"
    },
    {
     "kind": "licensing#licenseAssignment",
     "etags": "etag value",
     "selfLink": "https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-200GB/user/mary@example.com",
     "userId": "mary@example.com",
     "productId": "Google-Drive-storage",
     "skuId": "Google-Drive-storage-200GB",
     "skuName": "Google Drive storage 200 GB",
     "productName": "Google Drive storage"
    },
    ...
  }
```

For more information, see the licenseAssignments [listForProductAndSku method](../../reference/rest/v1/licenseAssignments/listForProductAndSku.md) reference page.

### Retrieve a specific user's license by product SKU

To get a specific user's license by product SKU, use the following `GET` HTTP request. Include the `Authorization` header as described in [Authorizing requests](./authorizing.md). For product and SKU IDs, see the [Products and SKUs](./products.md):

```
GET https://www.googleapis.com/apps/licensing/v1/product/productId/sku/skuId/user/userId
```

This example gets the Google Drive storage 50GB product SKU for the user whose `userId` is alex@example.com:

```
GET https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-50GB/user/alex@example.com
```

If the user has this license, the response returns a `200` [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). For possible error codes, see [Error codes](#errors). If successful, the response returns the user's license in JSON format.

**JSON Response**

```
{
  "kind": "licensing#licenseAssignment",
  "etag": "etag value",
  "selfLink": "https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-50GB/user/alex@example.com",
  "userId": "keshav@example.com",
  "productId": "Google-Drive-storage",
  "skuId": "Google-Drive-storage-50GB",
  "skuName": "Google Drive storage 50 GB",
  "productName": "Google Drive storage"
}
```

For more information, see the licenseAssignments [get method](../../reference/rest/v1/licenseAssignments/get.md) reference page.

### Delete a license

To unassign a license from a user, use the following `DELETE` HTTP request. Include the `Authorization` header as described in [Authorizing requests](./authorizing.md). For product and SKU IDs, see the [Products and SKUs](./products.md):

```
DELETE https://www.googleapis.com/apps/licensing/v1/product/productId/sku/skuId/user/userId
```

This example unassigns the Google-Drive-storage-50GB license from the user whose `userId` is alex@example.com:

```
DELETE https://www.googleapis.com/apps/licensing/v1/product/Google-Drive-storage/sku/Google-Drive-storage-50GB/user/alex@example.com
```

A successful response returns a `200` [HTTP status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). For possible error codes, see [Error codes](#errors).

For more information, see the licenseAssignments [delete method](../../reference/rest/v1/licenseAssignments/delete.md) reference page.

### Error codes

If the request is unsuccessful, the response has a brief explanation of the error:

| Error code | Description |
| --- | --- |
| 400 | Bad Request - User email not valid. |
| 400 | Bad Request - SKU or product does not exist. |
| 401 | Actor doesn't have credentials to call this API. |
| 404 | If the user does not have this license, the response has a "not found" error code. |
| 412 | A precondition has not been met. For details, check the `message` field. For example: - `Auto License switching is not allowed.` - `Auto License un-assignment is not allowed.` - `For reassign operations, the new SKU should be different           from the old SKU: *sku*` - `Reassign operation can't be performed on different           products: *product1, product2*` - `Reassign operation can't be performed on different users:           *user1, user2*` - `There aren't enough available licenses for the specified           product-SKU pair` - `User already has a license for the specified product and           SKU` - `User already has a license of the product, but with a           different SKU. To reassign a new SKU for this product, use the           "update" operation.` |
| 503 | The License Manager service is not available. |
