---
source: https://developers.google.com/workspace/admin/directory/v1/guides/manage-customers
root: workspace
fetched_at: 2026-04-23T15:23:47.847Z
---

# Directory API: Manage Customers

You can use the Directory API to manage your customers programmatically. The methods in this API let you update the contact information on your Google Workspace domain, as well as change the primary domain for your instance.

## Retrieve a Customer

To retrieve an existing customer, use the following `GET` HTTP request and include the authorization token described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `customerKey` can be the unique `customerId`, or `my_customer` to indicate the current customer.

```
GET https://admin.googleapis.com/admin/directory/v1/customers/customerKey
```

A successful response returns an [HTTP 200](https://wikipedia.org/wiki/List_of_HTTP_status_codes) status code. Along with the status code, the JSON response includes the customer's information:

```
{
  "etag": "\"spqlTgq5LGeoin0BH1d0f4rpI98/LnbnRK_ZWu_omowg36CZgTKECrY\"",
  "kind": "admin#directory#customer",
  "alternateEmail": "yuri@example.com",
  "id": "C03xgje4y",
  "customerDomain": "example.com",
  "postalAddress": {
    "organizationName": "Example.com",
    "countryCode": "US"
  },
  "customerCreationTime": "2015-10-21T20:42:35.224Z"
}
```

## Update an existing customer

To update an existing customer, use the following `PUT` request and include the authorization token described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `customerKey` can be the customer's unique `customerId`, or `my_customer` to indicate the current customer.

```
PUT https://admin.googleapis.com/admin/directory/v1/customers/customerKey
```

A successful response returns an [HTTP 200](https://wikipedia.org/wiki/List_of_HTTP_status_codes) status code. Along with the status code, the JSON response includes the newly updated customer information:

```
{
  "etag": "\"spqlTgq5LGeoin0BH1d0f4rpI98/LnbnRK_ZWu_omowg36CZgTKECrY\"",
  "kind": "admin#directory#customer",
  "alternateEmail": "yuri@example.com",
  "id": "C03xgje4y",
  "customerDomain": "example.com",
  "postalAddress": {
    "organizationName": "Example.com",
    "phoneNumber": "+15558675309"
  },
  "customerCreationTime": "2015-10-21T20:42:35.224Z"
}
```

### Change a customer's primary domain name

To change a customer's primary domain, use the following `PUT` request and include the authorization token described in [Authorize requests](https://developers.google.com/workspace/admin/directory/v1/guides/authorizing). The `customerKey` must be the unique `customerId`, or `my_customer`.

```
PUT https://admin.googleapis.com/admin/directory/v1/customers/customerKey
```

The JSON request body must include the new `customerDomain` value:

```
{
  "alternateEmail": "yuri@example.com",
  "customerDomain": "example.com",
  "language": "EN",
  "postalAddress": {
    "organizationName": "Example.com",
    "phoneNumber": "+15558675309"
  }
}
```

A successful response returns an [HTTP 200](https://wikipedia.org/wiki/List_of_HTTP_status_codes) status code. Along with the status code, the JSON response includes the customer's information:

```
{
  "etag": "\"spqlTgq5LGeoin0BH1d0f4rpI98/LnbnRK_ZWu_omowg36CZgTKECrY\"",
  "kind": "admin#directory#customer",
  "alternateEmail": "yuri@example.com",
  "id": "C03xgje4y",
  "customerDomain": "example.com",
  "postalAddress": {
    "organizationName": "Example.com",
    "phoneNumber": "+15558675309"
  },
  "customerCreationTime": "2015-10-21T20:42:35.224Z"
}
```
