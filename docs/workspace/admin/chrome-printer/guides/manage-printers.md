---
source: https://developers.google.com/workspace/admin/chrome-printer/guides/manage-printers
root: workspace
fetched_at: 2026-04-23T15:23:28.651Z
---

# Create and manage printers

The sample requests on this page illustrate how to manage printers with the Chrome Printer Management API.

All sample requests use the following variables:

- `TOKEN`: Your application's [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) token.
- `CUSTOMER_ID`: The unique [customer ID](https://support.google.com/a/answer/10070793) of the enterprise account, prepended with "C". (Example: `C123abc4`) You can also enter `my_customer` to denote your own account's customer ID.

## List printer models

This sample requests a list of all supported printer models.

#### Request

```
curl -X GET \
  --header "Authorization: Bearer TOKEN" \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printers:listPrinterModels"
```

#### Response

```
{
  "printerModels": [
    {
      "manufacturer": "Anitech",
      "displayName": "Anitech M24",
      "makeAndModel": "anitech m24"
    },
    {
      "manufacturer": "Apollo",
      "displayName": "Apollo P-2100",
      "makeAndModel": "apollo apollo 2100"
    },
    //...
    {
      "manufacturer": "Brother",
      "displayName": "Brother DCP-7025",
      "makeAndModel": "brother dcp-7025"
    },
    //...
  ],
  "nextPageToken": "CGQQAQ=="
}
```

## List or search for printers

This sample requests a list of all printers that are visible in Organizational Unit ID `04fatzly26exj7b` and contain the word `Lobby` in the printer display name or description. Printers added in a parent organizational unit are visible to child organizational units, so the response might include printers that aren't in organizational unit `04fatzly26exj7b`.

#### Request

```
curl -X GET \
  --header "Authorization: Bearer TOKEN" \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printers?orgUnitId=04fatzly26exj7b&filter=Lobby"
```

#### Response

```
{
  "printers": [
     {
      "name": "customers/C0202nabg/chrome/printers/0gjdgxs2zla0y7",
      "id": "0gjdgxs2zla0y7",
      "displayName": "Jupiter",
      "description": "Guest printer in lobby Building C.",
      "makeAndModel": "xerox able 1406",
      "uri": "ipp://192.168.10.13",
      "createTime": "2021-03-11T21:41:34.779587Z",
      "orgUnitId": "04fatzly26exj7b"
    },
    {
      "name": "customers/C0202nabg/chrome/printers/0gjdgxs1eqkb60",
      "id": "0gjdgxs1eqkb60",
      "displayName": "Mars",
      "description": "Printer in Lobby Building A",
      "uri": "ipp://192.168.10.11",
      "createTime": "2021-03-11T22:02:06.048469Z",
      "orgUnitId": "04fatzly4jbjho9",
      "useDriverlessConfig": true
    }
  ]
}
```

## Get a particular printer

This sample requests details for a printer with the ID `0gjdgxs2zla0y7`.

#### Request

```
curl -X GET \
  --header "Authorization: Bearer TOKEN" \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printers/0gjdgxs2zla0y7"
```

#### Response

```
{
  "name": "customers/C0202nabg/chrome/printers/0gjdgxs2zla0y7",
  "id": "0gjdgxs2zla0y7",
  "displayName": "Jupiter",
  "description": "Guest printer in lobby Building C.",
  "makeAndModel": "xerox able 1406",
  "uri": "ipp://192.168.10.13",
  "createTime": "2021-03-11T21:41:34.779587Z",
  "orgUnitId": "04fatzly26exj7b"
}
```

## Create a printer

This sample adds a new printer in organizational unit ID `04fatzly26exj7b`.

#### Request

```
curl -X POST \
  -H "Content-Type: application/json" \
  --header "Authorization: Bearer TOKEN" \
  -d '{
    "displayName": "Mercury",
    "description": "Printer in the kitchen",
    "makeAndModel": "xerox able 1406",
    "uri": "ipp://192.168.10.14",
    "orgUnitId": "04fatzly26exj7b"
  }' \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printers"
```

#### Response

A successful response includes the ID of the newly created printer:

```
{
  "name": "customers/C0202nabg/chrome/printers/0gjdgxs0o422uq",
  "id": "0gjdgxs0o422uq",
  "displayName": "Mercury",
  "description": "Printer in the kitchen",
  "makeAndModel": "xerox able 1406",
  "uri": "ipp://192.168.10.14",
  "createTime": "2021-03-11T23:19:27.180846Z",
  "orgUnitId": "04fatzly26exj7b"
}
```

## Update a printer

This sample updates the description of printer ID `0gjdgxs0o422uq`.

#### Request

```
curl -X PATCH \
  -H "Content-Type: application/json" \
  --header "Authorization: Bearer TOKEN" \
  -d '{
    "description": "Printer in the office"
  }' \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printers/0gjdgxs0o422uq?updateMask=description"
```

#### Response

```
{
  "name": "customers/C0202nabg/chrome/printers/0gjdgxs0o422uq",
  "id": "0gjdgxs0o422uq",
  "displayName": "Mercury",
  "description": "Printer in the office",
  "makeAndModel": "xerox able 1406",
  "uri": "ipp://192.168.10.14",
  "createTime": "2021-03-11T23:19:27.180846Z",
  "orgUnitId": "04fatzly26exj7b"
}
```

## Delete a printer

This sample deletes printer printer ID `0gjdgxs0o422uq`.

#### Request

```
curl -X DELETE \
  --header "Authorization: Bearer TOKEN" \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printers/0gjdgxs0o422uq"
```

#### Response

A successful response is empty. `{}`

## Create multiple printers in one request

This sample creates multiple printers in a single request, using the [`batchCreatePrinters`](../reference/rest/v1/admin.directory.v1.customers.chrome.printers/batchCreatePrinters.md) method.

#### Request

```
curl -X POST \
  -H "Content-Type: application/json" \
  --header "Authorization: Bearer TOKEN" \
  -d '{
    "requests": [
      {
        "parent": "customers/CUSTOMER_ID",
        "printer": {
          "displayName": "Earth",
          "description": "Color printer",
          "useDriverlessConfig": true,
          "uri": "ipp://192.168.10.15",
          "orgUnitId": "04fatzly26exj7b"
        }
    },
    {
        "parent": "customers/CUSTOMER_ID",
        "printer": {
          "displayName": "Saturn",
          "description": "Color printer",
          "useDriverlessConfig": true,
          "uri": "ipp://192.168.10.16",
          "orgUnitId": "04fatzly26exj7b"
        }
    }
  ]
  }' \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printers:batchCreatePrinters"
```

#### Response

```
{
  "printers": [
    {
      "name": "customers/C0202nabg/chrome/printers/0gjdgxs0sbbh87",
      "id": "0gjdgxs0sbbh87",
      "displayName": "Saturn",
      "description": "Color printer",
      "uri": "ipp://192.168.10.16",
      "createTime": "2021-03-12T01:10:32.957084Z",
      "orgUnitId": "04fatzly26exj7b",
      "useDriverlessConfig": true
    },
    {
      "name": "customers/C0202nabg/chrome/printers/0gjdgxs2d6170e",
      "id": "0gjdgxs2d6170e",
      "displayName": "Earth",
      "description": "Color printer",
      "uri": "ipp://192.168.10.15",
      "createTime": "2021-03-12T01:10:32.956735Z",
      "orgUnitId": "04fatzly26exj7b",
      "useDriverlessConfig": true
    }
  ]
}
```

## Delete multiple printers in one request

This sample deletes multiple printers in a single request, using the [`batchDeletePrinters`](../reference/rest/v1/admin.directory.v1.customers.chrome.printers/batchDeletePrinters.md) method.

#### Request

```
curl -X POST \
  -H "Content-Type: application/json" \
  --header "Authorization: Bearer TOKEN" \
  -d '{
    "printerIds": ["0gjdgxs0sbbh87", "0gjdgxs2d6170e"]
  }' \
  "https://admin.googleapis.com/admin/directory/v1/customers/CUSTOMER_ID/chrome/printers:batchDeletePrinters"
```

#### Response

A successful response includes the IDs of the print servers that were deleted:

```
{
  "printerIds": [
    "0gjdgxs2d6170e",
    "0gjdgxs0sbbh87"
  ]
}
```
