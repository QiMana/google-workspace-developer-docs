---
source: https://developers.google.com/workspace/admin/chrome-printer/guides/manage-print-servers
root: workspace
fetched_at: 2026-04-23T15:23:29.115Z
---

# Create and manage print servers

The sample requests on this page illustrate how to manage print servers with the Chrome Printer Management API.

All sample requests use the following variables:

- `TOKEN`: Your application's [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) token.
- `CUSTOMER_ID`: The unique [customer ID](https://support.google.com/a/answer/10070793) of the enterprise account, prepended with "C". (Example: `C123abc4`) You can also enter `my_customer` to denote your own organization's customer ID.

## List or search for print servers

This sample requests a list of all print servers that are visible in the organization.

#### Request

```
curl -X GET \
  --header "Authorization: Bearer TOKEN" \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printServers"
```

#### Response

```
{
  "printServers": [
     {
      "name": "customers/C0202nabg/chrome/printServers/0gjdgxs2zla0y7",
      "id": "0gjdgxs2zla0y7",
      "displayName": "Marketing Print Server",
      "description": "Queue for corp marketing oversize jobs",
      "uri": "ipp://192.168.10.13",
      "createTime": "2021-03-11T21:41:34.779587Z",
      "orgUnitId": "04fatzly26exj7b"
    },
    {
      "name": "customers/C0202nabg/chrome/printServers/0gjdgxs1eqkb32",
      "id": "0gjdgxs1eqkb32",
      "displayName": "Production",
      "description": "Production print server for user manuals",
      "uri": "ipp://192.168.10.11",
      "createTime": "2021-03-11T22:02:06.048469Z",
      "orgUnitId": "04fatzly4jbjho9"
    }
  ]
}
```

## Get a particular print server

This sample requests details for a print server with the ID `0gjdgxs2zla0y7`.

#### Request

```
curl -X GET \
  --header "Authorization: Bearer TOKEN" \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printServers/0gjdgxs2zla0y7"
```

#### Response

```
{
  "name": "customers/C0234nab1/chrome/printServers/0gjdgxs2zla0y7",
  "id": "0gjdgxs2zla0y7",
  "displayName": "Marketing Print Server",
  "description": "Queue for corp marketing oversize jobs",
  "uri": "ipp://192.168.10.13",
  "createTime": "2021-03-11T21:41:34.779587Z",
  "orgUnitId": "04fatzly26exj7b"
}
```

## Create a print server

This sample adds a new print server in an organizational unit that has ID `04fatzly26exj7b`.

#### Request

```
curl -X POST \
  -H "Content-Type: application/json" \
  --header "Authorization: Bearer TOKEN" \
  -d '{
    "displayName": "hr-dept",
    "description": "HR queue for sensitive documents",
    "uri": "ipp://192.168.10.14",
    "orgUnitId": "04fatzly26exj7b"
  }' \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printServers"
```

#### Response

A successful response includes the ID of the newly created print server:

```
{
  "name": "customers/C0234nab1/chrome/printServers/0gjdgxs0o422uq",
  "id": "0gjdgxs0o422uq",
  "displayName": "hr-dept",
  "description": "HR queue for sensitive documents",
  "uri": "ipp://192.168.10.14",
  "orgUnitId": "04fatzly26exj7b",
  "createTime": "2021-03-11T23:19:27.180846Z",
  "orgUnitId": "04fatzly26exj7b"
}
```

## Update a print server

This sample updates the description of print server ID `0gjdgxs0o422uq`.

#### Request

```
curl -X PATCH \
  -H "Content-Type: application/json" \
  --header "Authorization: Bearer TOKEN" \
  -d '{
    "description": "General HR dept print server",
  }' \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printServers/0gjdgxs0o422uq?updateMask=description"
```

#### Response

```
{
  "name": "customers/C0234nab1/chrome/printServers/0gjdgxs0o422uq",
  "id": "0gjdgxs0o422uq",
  "displayName": "hr-dept",
  "description": "General HR dept print server",
  "uri": "ipp://192.168.10.14",
  "createTime": "2021-03-11T23:19:27.180846Z",
  "orgUnitId": "04fatzly26exj7b"
}
```

## Delete a print server

This sample deletes the print server with ID `0gjdgxs0o422uq`.

#### Request

```
curl -X DELETE \
  --header "Authorization: Bearer TOKEN" \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printServers/0gjdgxs0o422uq"
```

#### Response

A successful response is empty.

## Create multiple print servers in one request

This sample creates multiple print servers, using the [`batchCreatePrintServers`](https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printServers/batchCreatePrintServers) method.

#### Request

```
curl -X POST \
  -H "Content-Type: application/json" \
  --header "Authorization: Bearer TOKEN" \
  -d '{
    "requests": [
      {
        "parent": "customers/CUSTOMER_ID",
        "printServer": {
          "displayName": "General print server",
          "description": "Org-wide print queue",
          "uri": "ipp://192.168.10.15",
          "orgUnitId": "04fatzly26exj7b"
        }
    },
    {
        "parent": "customers/CUSTOMER_ID",
        "printServer": {
          "displayName": "Engineering print server",
          "description": "Print server for Engineering use only",
          "uri": "ipp://192.168.10.16",
          "orgUnitId": "04fatzly26exj7b"
        }
    }
  ]
  }' \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printServers:batchCreatePrintServers"
```

#### Response

```
{
  "printServers": [
    {
      "name": "customers/C0234nab1/chrome/printServers/0gjdgxs0sbbh87",
      "id": "0gjdgxs0sbbh87",
      "displayName": "General print server",
      "description": "Org-wide print queue",
      "uri": "ipp://192.168.10.15",
      "createTime": "2021-03-12T01:10:32.957084Z",
      "orgUnitId": "04fatzly26exj7b"
    },
    {
      "name": "customers/C0234nab1/chrome/printServers/0gjdgxs2d6170e",
      "id": "0gjdgxs2d6170e",
      "displayName": "Engineering print server",
      "description": "Print server for Engineering use only",
      "uri": "ipp://192.168.10.16",
      "createTime": "2021-03-12T01:10:32.956735Z",
      "orgUnitId": "04fatzly26exj7b"
    }
  ]
}
```

## Delete multiple print servers in one request

This sample deletes multiple print servers in a single request, using the [`batchDeletePrintServers`](https://developers.google.com/workspace/admin/chrome-printer/reference/rest/v1/admin.directory.v1.customers.chrome.printServers/batchDeletePrintServers) method.

#### Request

```
curl -X POST \
  -H "Content-Type: application/json" \
  --header "Authorization: Bearer TOKEN" \
  -d '{
    "printServerIds": ["0gjdgxs0sbbh87", "0gjdgxs2d6170e"]
  }' \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printServers:batchDeletePrintServers"
```

#### Response

A successful response includes the IDs of the print servers that were deleted:

```
{
  "printServerIds": [
    "0gjdgxs2d6170e",
    "0gjdgxs0sbbh87"
  ]
}
```
