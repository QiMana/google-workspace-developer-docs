---
source: https://developers.google.com/workspace/sheets/api/guides/migration
root: workspace
fetched_at: 2026-04-23T15:31:23.816Z
---

# Migrate from Sheets API v3

If you have existing apps based on the Google Sheets API v3, you can migrate to Google Sheets API v4. The v4 version is JSON-based, has an easier-to-use interface, and adds a substantial amount of functionality that is not possible in the v3 version.

This page provides a mapping between the older Sheets API v3 commands and their equivalent operations in Sheets API v4. The mapping focuses largely on the [spreadsheets.values](../reference/rest/v4/spreadsheets.values.md) collection, which provides direct cell read and write functionality. Other aspects, such as adding sheets or updating sheet properties are handled by the [spreadsheets](../reference/rest/v4/spreadsheets.md) collection. Note that the v4 API's JSON structures are not backward-compatible with the XML structures used in v3.

For more information about the resources available in the Sheets v4 API, see the [API Reference](../reference/rest.md).

### Notation and terms

The v3 API refers to sheets within a particular spreadsheet as "worksheets". This is synonymous with the term "sheets" that the v4 API uses.

The APIs often require you to specify a [spreadsheet ID](./concepts.md#spreadsheet_id) of the spreadsheet you are working with. They also often require the ID of the sheet being manipulated. These values appear either as part of the API endpoint URL, as query parameters, or as part of a request body. In this page, the placeholders spreadsheetId and sheetId refer to the spreadsheet and sheet IDs, respectively. When using the methods described on this page, substitute in the actual IDs in these locations.

The v3 API also assigns an ID to rows retrieved using its [list feed](./migration.md#retrieve_row_data); this is represented in this page by the rowId placeholder.

### Authorize requests

When your app runs, it asks users to grant certain permissions; the scopes that you specify in your application determine which permissions it asks for.

### v3 API

The Sheets API v3 operates with a single authorization scope:

```
https://spreadsheets.google.com/feeds
```

which is an alias for

```
https://www.googleapis.com/auth/spreadsheets
```

Either scope format can be used.

### v4 API

The Sheets API v4 uses one or more of the following set of scopes:

```
https://www.googleapis.com/auth/spreadsheets.readonly
https://www.googleapis.com/auth/spreadsheets
https://www.googleapis.com/auth/drive.readonly
https://www.googleapis.com/auth/drive
```

Use read-only scopes if the your application does not need to make edits to a user's sheets or sheet properties. Use spreadsheets scopes instead of Drive scopes if the application does not need general Drive access.

### Visibility

In older versions of the API, the term *visibility* is used to refer to the availability of a given spreadsheet.

### v3 API

The Sheets API v3 expresses visibility directly in its endpoints. A `public` spreadsheet has been "Published to the Web" and thus can be accessed by the API without authorization, while a `private` spreadsheet does require authentication. Visibility is specified in the endpoint after the spreadsheet ID:

```
https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full
```

### v4 API

In the new Sheets API v4, there is no explicit declaration of visibility. API calls are made using spreadsheet IDs. If the application does not have permission to access specified spreadsheet, an error is returned. Otherwise the call proceeds.

### Projection

The term *projection* is used by the Sheets API v3 to refer to the set of data that is returned by a given API call—either all of it, or a fixed subset defined within the API. The Sheets API v4 does not use projection; rather, it allows you more control over what data is returned.

### v3 API

There are only two possible projection settings in the Sheets API v3. `full` projection returns all the available information, whereas `basic` returns a smaller, fixed subset of data (for the worksheets, list, and cells feeds). Like visibility, the projection must be specified in the API endpoint (after the visibility setting):

```
https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/public/basic
```

The smaller subset of data provided by the `basic` projection is valuable for making code more efficient, but cannot be customized.

### v4 API

While the Sheets API v4 can return a full data set, it does not define fixed subsets analogous to the `basic` visibility setting the Sheets API v3. Methods in the [spreadsheet](../reference/rest/v4/spreadsheets.md) collection restrict the amount of data they return through the use of a [fields](./concepts.md#partial_responses) query parameter.

For example, the following query only returns the titles of all the sheets in a particular spreadsheet:

```
GET https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId?fields=sheets.properties.title
```

### Create a spreadsheet

### v3 API

The Sheets API v3 does not provide a means to create new spreadsheets; instead, the [Drive API Files.create](../../../drive/api/reference/rest/v3/files/create.md) method can be used to create new spreadsheet files. This requires the application to declare the `https://www.googleapis.com/auth/drive` scope.

### v4 API

The [Drive API Files.create](../../../drive/api/reference/rest/v3/files/create.md) method can also be used with the Sheets API v4, but requires the application to provide the `https://www.googleapis.com/auth/drive` scope.

As an equivalent alternative, the Sheets API v4 provides a [spreadsheets.create](../reference/rest/v4/spreadsheets/create.md) method, which can also optionally add sheets, set the spreadsheet and sheet properties, and add named ranges. For example, the following creates a new spreadsheet and gives it the name "NewTitle":

```
POST https://sheets.googleapis.com/v4/spreadsheets
```

```
{
 "properties": {"title": "NewTitle"}
}
```

### List spreadsheets for the authenticated user

### v3 API

The Sheets API v3 feed allows an application to retrieve a list of all the spreadsheets accessible by the authenticated user. The spreadsheet feed endpoint is:

```
GET https://spreadsheets.google.com/feeds/spreadsheets/private/full
```

### v4 API

The Sheets API v4 does not provide this specific operation. We recommend migrating your app to use the drive.file scope in combination with the Google Picker for spreadsheet selection.

In the cases where listing spreadsheets is required, it can be replicated via the [Drive API Files.list](../../../drive/api/reference/rest/v3/files/list.md) method, using a `mimeType` query:

```
GET https://www.googleapis.com/drive/v3/files
             ?q=mimeType='application/vnd.google-apps.spreadsheet'
```

Using the Drive API files.list method to list all of a user’s spreadsheets requires a [restricted](../../../drive/api/guides/api-specific-auth.md#OAuth2Authorizing) scope.

### Retrieve sheet metadata

The Sheets API v3 provides a feed to access the sheet metadata contained within a given spreadsheet (row and cell data is accessed through a separate feed). The metadata includes information such as sheet titles and size information.

The Sheets API v4 [spreadsheets.get](../reference/rest/v4/spreadsheets/get.md) method provides access to this information, and much more.

### v3 API

The worksheet feed is accessible from this API endpoint (using an appropriate authorization header):

```
GET https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full
```

The response to this request has a structure similar to this, with each sheet's data contained in a separate `<entry>`:

```
<feed xmlns="http://www.w3.org/2005/Atom"
    xmlns:openSearch="http://a9.com/-/spec/opensearch/1.1/"
    xmlns:gs="http://schemas.google.com/spreadsheets/2006"
    xmlns:gd="http://schemas.google.com/g/2005"
    gd:etag='W/"D0cERnk-eip7ImA9WBBXGEg."'>
  <id>https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full</id>
  <updated>2006-11-17T18:23:45.173Z</updated>
  <title type="text">Groceries R Us</title>
  <link rel="alternate" type="text/html"
      href="https://spreadsheets.google.com/ccc?key=spreadsheetId"/>
  <link rel="http://schemas.google.com/g/2005#feed"
      type="application/atom+xml"
      href="https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full"/>
  <link rel="self" type="application/atom+xml"
      href="https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full"/>
  <link rel="http://schemas.google.com/g/2005#post" type="application/atom+xml"
      href="https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full"/>
  <>
    <name>Fitzwilliam Darcy</name>
    <email>fitz@example.com</email>
  </>
  <openSearch:totalResults>1</openSearch:totalResults>
  <openSearch:startIndex>1</openSearch:startIndex>
  <openSearch:itemsPerPage>1</openSearch:itemsPerPage>
  <entry gd:etag='"YDwqeyI."'>
    <id>https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId</id>
    <updated>2006-11-17T18:23:45.173Z</updated>
    <title type="text">Sheet1</title>
    <content type="text">Sheet1</content>
    <link rel="http://schemas.google.com/spreadsheets/2006#listfeed"
        type="application/atom+xml"
        href="https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full"/>
    <link rel="http://schemas.google.com/spreadsheets/2006#cellsfeed"
        type="application/atom+xml"
        href="https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full"/>
    <link rel="self" type="application/atom+xml"
        href="https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId"/>
    <link rel="edit" type="application/atom+xml"
        href="https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId/version"/>
    <gs:rowCount>100</gs:rowCount>
    <gs:colCount>20</gs:colCount>
  </entry>
</feed>
```

### v4 API

The [spreadsheets.get](../reference/rest/v4/spreadsheets/get.md) method can be used to acquire sheet properties and other metadata—much more than what is available using the Sheets API v3. If you only want to read the sheet properties, set the `includeGridData` query parameter to `false` to prevent the inclusion of the spreadsheet cell data:

```
GET https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId?includeGridData=false
```

The [`Spreadsheet`](../reference/rest/v4/spreadsheets.md#resource-spreadsheet) response contains an array of [`Sheet`](../reference/rest/v4/spreadsheets.md#sheet) objects; the sheet titles and size information specifically can be found under the [`SheetProperties`](../reference/rest/v4/spreadsheets.md#sheetproperties) element of these objects. For example:

```
{
  "spreadsheetId": spreadsheetId,
  "sheets": [
      {"properties": {
          "sheetId": sheetId,
          "title": "Sheet1",
          "index": 0,
          "gridProperties": {
              "rowCount": 100,
              "columnCount": 20,
              "frozenRowCount": 1,
              "frozenColumnCount": 0,
              "hideGridlines": false
          },
          ...
       },
       ...
      },
      ...
  ],
  ...
}
```

### Add a sheet to a spreadsheet

Both APIs allow you to add new sheets to an existing spreadsheet.

### v3 API

The Sheets API v3 can add new worksheets to a spreadsheet by making the following (authenticated) `POST` request. You can specify the size of the new sheet:

```
POST https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full
```

```
<entry xmlns="http://www.w3.org/2005/Atom"
    xmlns:gs="http://schemas.google.com/spreadsheets/2006">
  <title>Expenses</title>
  <gs:rowCount>50</gs:rowCount>
  <gs:colCount>10</gs:colCount>
</entry>
```

### v4 API

You can add new sheets by making an [AddSheet](../reference/rest/v4/spreadsheets/request.md#addsheetrequest) request in the [spreadsheets.batchUpdate](../reference/rest/v4/spreadsheets/batchUpdate.md) method. As part of request body, you can specify the sheet properties for the new sheet; all properties are optional. It is an error to provide a title that is used for an existing sheet.

```
POST https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId:batchUpdate
```

```
{
  "requests": [{
      "addSheet": {
          "properties": {
            "title": "Expenses",
            "sheetType": "GRID",
            "gridProperties": {
              "rowCount": 50,
              "columnCount": 10
            }
          }
      }
  }],
}
```

### Change a sheet title and size

The Sheets API v3 lets you update sheet titles and size; the Sheets API v4 allows this as well, but can also be used to update other sheet properties. Note that reducing a sheet's size may cause data in the cropped cells to be deleted without warning.

### v3 API

To change the title or size of a worksheet, begin by retrieving the [worksheet feed](./migration.md#retrieve_sheet_metadata) and finding the desired worksheet entry, which contains an `edit` URL. Update the worksheet's metadata and send it as the body of a `PUT` request to the edit URL. For example:

```
PUT https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId/version
```

```
<entry>
  <id>
    https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId
  </id>
  <updated>2007-07-30T18:51:30.666Z</updated>
  <category scheme="http://schemas.google.com/spreadsheets/2006"
    term="http://schemas.google.com/spreadsheets/2006#worksheet"/>
  <title type="text">Expenses</title>
  <content type="text">Expenses</content>
  <link rel="http://schemas.google.com/spreadsheets/2006#listfeed"
    type="application/atom+xml" href="https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full"/>
  <link rel="http://schemas.google.com/spreadsheets/2006#cellsfeed"
    type="application/atom+xml" href="https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full"/>
  <link rel="self" type="application/atom+xml"
    href="https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId"/>
  <link rel="edit" type="application/atom+xml"
    href="https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId/version"/>
  <gs:rowCount>45</gs:rowCount>
  <gs:colCount>15</gs:colCount>
</entry>
```

### v4 API

To update the size, title, and other sheet properties, make an [updateSheetProperties](../reference/rest/v4/spreadsheets/request.md#updatespreadsheetpropertiesrequest) request in the [spreadsheets.batchUpdate](../reference/rest/v4/spreadsheets/batchUpdate.md) method. The `POST` request body should contain the properties to be changed, and the `fields` parameter should explicitly list those properties (if you want to update all properties, use `fields:"*"` as a shorthand for listing them all). For example, the following specifies that the sheet title and size properties should be updated for the sheet with the given ID:

```
POST https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId:batchUpdate
```

```
{
  "requests": [
    {
      "updateSheetProperties": {
          "properties": {
            "sheetId": sheetId,
            "title": "Expenses",
            "gridProperties": {
              "rowCount": 45,
              "columnCount": 15,
            }
          },
          "fields": "title,gridProperties(rowCount,columnCount)"
     }
   }
  ],
}
```

To retrieve a sheet's sheetId, use the spreadsheet [spreadsheets.get](../reference/rest/v4/spreadsheets/get.md) method.

### Delete a sheet

Either API can remove sheets from a given spreadsheet.

### v3 API

To delete a worksheet, begin by retrieving the [worksheet feed](./migration.md#retrieve_sheet_metadata), then send a `DELETE` request on the `edit` URL of the target worksheet entry.

```
DELETE https://spreadsheets.google.com/feeds/worksheets/spreadsheetId/private/full/sheetId/version
```

### v4 API

To delete a sheet, make a [DeleteSheet](../reference/rest/v4/spreadsheets/request.md#deletesheetrequest) request in the [spreadsheets.batchUpdate](../reference/rest/v4/spreadsheets/batchUpdate.md) method. The `POST` request body should only contain the sheetId for the sheet to be deleted. For example:

```
POST https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId:batchUpdate
```

```
{
  "requests": [
    {
      "deleteSheet": {
        "sheetId": sheetId
      }
    }
  ],
}
```

To retrieve an individual sheet's sheetId, use the spreadsheet [spreadsheets.get](../reference/rest/v4/spreadsheets/get.md) method.

### Retrieve row data

The *list rows feed* is one of the two methods the Sheets API v3 provides to access data within a spreadsheet's cells (the other being the *cells feed*). The rows feed is meant to support common spreadsheet operations (reading row by row, appending rows, sorting), but makes certain assumptions that make it unsuitable for some tasks. Specifically, the list feed assumes that blank rows are feed terminations, and that mandatory headers are present in the first row of a sheet.

In contrast, the Sheets API v4 does not use access methods that are row-specific. Instead, sheet cell data is accessed by referencing the specific ranges required using [A1 notation](./concepts.md#a1_notation). The ranges can be blocks of cells, entire rows, entire columns, or entire sheets. The API can also access disjoint sets of cells.

### v3 API

To determine the URL of a list-based feed for a given worksheet, retrieve the [worksheet feed](./migration.md#retrieve_sheet_metadata) and find the list feed URL in the worksheet entry of interest.

To retrieve a list-based feed, send a `GET` request to the list feed URL, using an appropriate authorization header. For example:

```
GET https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full
```

The response to this request contain, among other things, entries corresponding to specific rows. Individual cells are referenced by the names provided in the (mandatory) sheet header row. For example, here is a single row entry:

```
<entry gd:etag='"S0wCTlpIIip7ImA0X0QI"'>
  <id>rowId</id>
  <updated>2006-11-17T18:23:45.173Z</updated>
  <category scheme="http://schemas.google.com/spreadsheets/2006"
      term="http://schemas.google.com/spreadsheets/2006#list"/>
  <title type="text">Bingley</title>
  <content type="text">Hours: 10, Items: 2, IPM: 0.0033</content>
  <link rel="self" type="application/atom+xml"
      href="https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full/rowId"/>
  <link rel="edit" type="application/atom+xml"
      href="https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full/rowId/version"/>
  <gsx:name>Bingley</gsx:name>
  <gsx:hours>10</gsx:hours>
  <gsx:items>2</gsx:items>
  <gsx:ipm>0.0033</gsx:ipm>
</entry>
```

By default the rows returned in the list feed are returned in row order. The Sheets API v3 provides query parameters to change that order.

Reverse order:

```
GET https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full?reverse=true
```

Order by a specific column:

```
GET https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full
             ?orderby=column:lastname
```

The Sheets API v3 also allows filtering of specific rows via a structured query (referenced by column headers):

```
GET https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full
             ?sq=age>25%20and%20height<175
```

### v4 API

With the Sheets API v4, rows can be retrieved by range using the [spreadsheets.values.get](../reference/rest/v4/spreadsheets.values/get.md) or [spreadsheets.values.batchGet](../reference/rest/v4/spreadsheets.values/batchGet.md) methods. For example, the following returns all rows in "Sheet1":

```
GET https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet1
```

The response to this request has a structure similar to:

```
{
  "range": "Sheet1",
  "majorDimension": "ROWS",
  "values": [["Name", "Hours", "Items", "IPM"],
             ["Bingley", "10", "2", "0.0033"],
             ["Darcy", "14", "6", "0.0071"]]
}
```

Trailing empty cells are not included in the response when retrieving entire rows, columns, or sheets.

The Sheets API v4 does not have equivalents for the row-order query parameters provided by the Sheets API v3. Reverse-order is trivial; simply process the returned `values` array in reverse order. Order by column is not supported for reads, but it is possible to sort the data in the sheet (using a [SortRange](../reference/rest/v4/spreadsheets/request.md#sortrangerequest)) request and then read it.

The Sheets API v4 does not currently have a direct equivalent for the Sheets API v3 structured queries. However, you can retrieve the relevant data and sort through it as needed in your application.

### Add a new row of data

You can add a new row of data to a sheet using either API.

### v3 API

To determine the URL of a list-based feed for a given worksheet, retrieve the [worksheet feed](./migration.md#retrieve_sheet_metadata) and find the post URL in the worksheet entry of interest.

To add a row of data, send a `POST` request to the post URL, using an appropriate authorization header. For example:

```
POST https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full
```

The body of the `POST` request should contain an entry for the row data to add, with individual cells referenced by column headers:

```
<entry xmlns="http://www.w3.org/2005/Atom"
       xmlns:gsx="http://schemas.google.com/spreadsheets/2006/extended">
  <gsx:hours>2</gsx:hours>
  <gsx:ipm>0.5</gsx:ipm>
  <gsx:items>60</gsx:items>
  <gsx:name>Elizabeth</gsx:name>
</entry>
```

New rows are appended to the end of the specified sheet.

### v4 API

With the Sheets API v4, you can append rows using the [spreadsheets.values.append](../reference/rest/v4/spreadsheets.values/append.md) method. The following example writes a new row of data below the last table in "Sheet1" of a spreadsheet.

```
POST https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/append/Sheet1
```

```
{
   "values": [["Elizabeth", "2", "0.5", "60"]]
}
```

Additionally, the Sheets API v4 also lets you append cells with specific properties and formatting using the [AppendCells](../reference/rest/v4/spreadsheets/batchUpdate.md#appendcellsrequest) requests in a [spreadsheets.batchUpdate](../reference/rest/v4/spreadsheets/batchUpdate.md).

### Edit a row with new data

Both APIs allow row data to be updated with new values.

### v3 API

To edit a row of data, examine the [list feed](./migration.md#retrieve_row_data) to locate the entry for the row you wish to update. Update the contents of that entry as needed. Be sure that the ID value in the entry you use exactly matches the ID of the existing entry.

Once the entry has been updated, send a `PUT` request with the entry as the request body to the `edit` URL provided in that row entry, using an appropriate authorization header. For example:

```
PUT https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full/rowId/version
```

```
<entry gd:etag='"S0wCTlpIIip7ImA0X0QI"'>
  <id>rowId</id>
  <updated>2006-11-17T18:23:45.173Z</updated>
  <category scheme="http://schemas.google.com/spreadsheets/2006"
    term="http://schemas.google.com/spreadsheets/2006#list"/>
  <title type="text">Bingley</title>
  <content type="text">Hours: 10, Items: 2, IPM: 0.0033</content>
  <link rel="self" type="application/atom+xml"
    href="https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full/rowId"/>
  <link rel="edit" type="application/atom+xml"
    href="https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full/rowId/version"/>
  <gsx:name>Bingley</gsx:name>
  <gsx:hours>20</gsx:hours>
  <gsx:items>4</gsx:items>
  <gsx:ipm>0.0033</gsx:ipm>
</entry>
```

### v4 API

With Sheets API v4, you can edit a row using the [A1 notation](./concepts.md#a1_notation) of the row you wish to edit and issuing a [spreadsheets.values.update](../reference/rest/v4/spreadsheets.values/update.md) request to overwrite that row. The range specified need only refer to the first cell in the row; the API infers the cells to update based on the values provided with the request. If you instead specify a multi-cell range, the values you provide must fit within that range; if not the API returns an error.

The following example request and request body adds data to the fourth row of "Sheet1":

```
PUT https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet1!A4
```

```
{
   "values": [["Elizabeth", "2", "0.5", "60"]]
}
```

You can also update row data from the [spreadsheet.values.batchUpdate](../reference/rest/v4/spreadsheets.values/batchUpdate.md) method; it is more efficient to use this method if you are making multiple row or cell updates.

Additionally, the Sheets API v4 also lets you edit the cell properties and formatting of cells using the [UpdateCells](../reference/rest/v4/spreadsheets/batchUpdate.md#updatecellsrequest) or [RepeatCell](../reference/rest/v4/spreadsheets/batchUpdate.md#repeatcellrequest) requests in a [spreadsheets.batchUpdate](../reference/rest/v4/spreadsheets/batchUpdate.md).

### Delete a row

Both APIs support the deletion of rows. A deleted row is removed from the spreadsheet, and rows below it are pushed up one.

### v3 API

To delete a row, first retrieve the row to delete from the [list feed](./migration.md#retrieve_row_data), then send a `DELETE` request to the `edit` URL provided in the row's entry. This is the same URL used to update the row.

```
DELETE https://spreadsheets.google.com/feeds/list/spreadsheetId/sheetId/private/full/rowId/version
```

If you want to make sure that you don't delete a row that has been changed by another client since you retrieved it, include an HTTP If-Match header that contains the original row's ETag value. You can determine the original row's ETag value by examining the entry element's gd:etag attribute.

If you want to delete the row regardless of whether someone else has updated it since you retrieved it, then use If-Match: \* and don't include the ETag. (In this case, you don't need to retrieve the row before deleting it.)

### v4 API

Deleting rows with the Sheets API v4 is handled by a [spreadsheet.batchUpdate](../reference/rest/v4/spreadsheets/batchUpdate.md) method call, using a [DeleteDimension](../reference/rest/v4/spreadsheets/batchUpdate.md#deletedimensionrequest) request. This request can also be used to remove columns, and developers and choose to only remove part of a row or column. For example, the following removes the 6th row of a sheet with the given ID (the row indices are zero-based, with the startIndex inclusive and endIndex exclusive):

```
POST https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId:batchUpdate
```

```
{
  "requests": [
    {
      "deleteDimension": {
        "range": {
          "sheetId": sheetId,
          "dimension": "ROWS",
          "startIndex": 5,
          "endIndex": 6
        }
      }
    }
  ],
}
```

A sheet's sheetId can be retrieved using the [spreadsheet.get](../reference/rest/v4/spreadsheets/get.md) method.

### Retrieve cell data

The Sheets API v3 provides a cell feed for basic access to all data stored in a spreadsheet. For read access, the cell feed can provide the entire sheet content or a range of the sheet's cells defined by a set of query parameters, but only as a single block—disjoint ranges have to be retrieved separately using additional `GET` requests.

The Sheets API v4 can retrieve any set of cell data from a sheet (including multiple disjoint ranges). The Sheets API v3 can only return cell contents as input values (as would be entered by a user at a keyboard) and/or the outputs of formula (if numeric); the Sheets API v4 grants full access to values, formulas, formatting, hyperlinks, data validation, and other properties.

### v3 API

To determine the URL of a cell-based feed for a given worksheet, examine the [worksheet feed](./migration.md#retrieve_sheet_metadata) and find the cell feed URL in the worksheet entry of interest.

To retrieve a cell-based feed, send a `GET` request to the cell feed URL, using an appropriate authorization header. For example:

```
GET https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full
```

Cells are referenced using row and column number. Fetching a single specific range can be done by using `max-row`, `min-row`, `max-col` and `min-col` query parameters. For example, the following retrieves all cells in column 4 (D), starting with row 2:

```
GET https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full
             ?min-row=2&min-col=4&max-col=4
```

The Sheets API v3 returns the `inputValue` of retrieved cells—the value that a user would otherwise type into the Google Sheets user interface to manipulate the cell. The `inputValue` can be a literal value or a formula. The API also sometimes returns a `numericValue`; for example, when a formula results in a number. For example, a response may include cell entries similar in structure to the following:

```
<entry gd:etag='"ImB5CBYSRCp7"'>
  <id>https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/R9C4</id>
  <updated>2006-11-17T18:27:32.543Z</updated>
  <category scheme="http://schemas.google.com/spreadsheets/2006"
    term="http://schemas.google.com/spreadsheets/2006#cell"/>
  <title type="text">D4</title>
  <content type="text">5</content>
  <link rel="self" type="application/atom+xml"
    href="https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/R9C4"/>
  <link rel="edit" type="application/atom+xml"
    href="https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/R9C4/srevc"/>
  <gs:cell row="4" col="4" inputValue="=FLOOR(C4/(B4*60),.0001)"
    numericValue="5.0">5</gs:cell>
</entry>
```

### v4 API

Retrieve cell data by calling a [spreadsheets.values.get](../reference/rest/v4/spreadsheets.values/get.md) or [spreadsheets.values.batchGet](../reference/rest/v4/spreadsheets.values/batchGet.md) method for the range or ranges of interest, respectively. For example, the following returns the cells in column D of "Sheet2", starting with row 2, in column-major order and returning formulas as entered (trailing empty cells are omitted):

```
GET https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet2!D2:D?majorDimension=COLUMNS&valueRenderOption=FORMULA
```

The response to this request is similar in structure to:

```
{
  "spreadsheetId": spreadsheetId,
  "valueRanges": [
      {"range": "Sheet2!D2:D",
       "majorDimension": "COLUMNS",
       "values": [["Widget", 234, "=FLOOR(C4/(B4*60),.0001)", "=D4\*1000"]]
      }]
}
```

It is more efficient to use [spreadsheet.values.batchGet](../reference/rest/v4/spreadsheets.values/batchGet.md) if you intend to retrieve multiple ranges of cell data. If you want to access cell properties such as formatting, the [spreadsheet.get](../reference/rest/v4/spreadsheets/get.md) method is required.

### Edit a cell

The Sheets API v3 lets you edit cell content by issuing a `PUT` command to the cell feed with the modified cell entry as the request body.

The Sheets API v4, in contrast, provides [spreadsheets.values.update](../reference/rest/v4/spreadsheets.values/update.md) and [spreadsheets.values.batchUpdate](../reference/rest/v4/spreadsheets.values/batchUpdate.md) methods for changing cell content.

### v3 API

To edit a single cell's content, first find the cell's entry in the [cell feed](./migration.md#retrieve_cell_data). The entry contains an edit URL. Update the entry to reflect the contents you want the cell to have, and then issue a `PUT` request to the edit url with the updated cell entry as the body of the request. For example, the following updates cell D2 (R2C4) to contain a `SUM` formula:

```
PUT https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full//R2C4/srevc
<entry xmlns="http://www.w3.org/2005/Atom"
    xmlns:gs="http://schemas.google.com/spreadsheets/2006">
  <id>https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/R2C4</id>
  <link rel="edit" type="application/atom+xml"
    href="https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/R2C4"/>
  <gs:cell row="2" col="4" inputValue="=SUM(A1:B6)"/>
</entry>
```

### v4 API

Single cell editing in the Sheets API v4 can be done with the [spreadsheets.values.update](../reference/rest/v4/spreadsheets.values/update.md) method. This method requires a `ValueInputOption` query parameter, which specifies whether the input data is treated as if entered into the Sheets UI (`USER_ENTERED`), or left unparsed and taken as is (`RAW`). For example, the following updates cell D2 with a formula:

```
PUT https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/D2?valueInputOption=USER_ENTERED
```

```
{"values": [["=SUM(A1:B6)"]]}
```

If you are making multiple cell edits, use the [spreadsheets.values.batchUpdate](../reference/rest/v4/spreadsheets.values/batchUpdate.md) method to issue them in one request.

### Edit multiple cells via batch request

Both APIs provide the means to make changes to the content of multiple cells with a single (batch) request. The cells referred to by a batch request are not required to be in a contiguous range.

In the case where one or more of the cell edits in the batch fail, the Sheets API v3 allows others to succeed. However, the Sheets API v4 returns an error if any of the batched updates fail, and does not apply any of them in that case.

### v3 API

To edit multiple cells, first retrieve a [cell feed](./migration.md#retrieve_cell_data) for the worksheet. The entry contains a batch URL. Send a `POST` request to this URL, along with a request body describing the cells you wish to update and the new cell content. The `POST` request and request body have a structure similar to the following:

```
POST https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/batch
```

```
<feed xmlns="http://www.w3.org/2005/Atom"
      xmlns:batch="http://schemas.google.com/gdata/batch"
      xmlns:gs="http://schemas.google.com/spreadsheets/2006">
  <id>https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full</id>
  <entry>
    <batch:id>request1</batch:id>
    <batch:operation type="update"/>
    <id>https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/R2C4</id>
    <link rel="edit" type="application/atom+xml"
      href="https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/R2C4/version"/>
    <gs:cell row="2" col="4" inputValue="newData"/>
  </entry>
  ...
  <entry>
    <batch:id>request2</batch:id>
    <batch:operation type="update"/>
    <id>https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/R2C5</id>
    <link rel="edit" type="application/atom+xml"
      href="https://spreadsheets.google.com/feeds/cells/spreadsheetId/sheetId/private/full/R2C5/version"/>
    <gs:cell row="5" col="2" inputValue="moreInfo"/>
  </entry>
</feed>
```

The `batch:id` field should uniquely identify the request within the batch. The `batch:operation` field should be `update` for cell edits. `gs:cell` identifies the cell by row and column number and provides the new data to insert there. `id` contains the full URL to the cell to be updated. `link` must have a `href` attribute that contains the full path to the cell's ID. All of these fields are required for each entry.

### v4 API

The Sheets API v4 provides batch editing of cell values through the [spreadsheets.values.batchUpdate](../reference/rest/v4/spreadsheets.values/batchUpdate.md) method.

Editing multiple cells can be done by issuing a `POST` request with the data changes specified in the request body. For example:

```
POST https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values:batchUpdate
```

```
{
  "valueInputOption": "USER_ENTERED"
  "data": [
       {"range": "D4",
        "majorDimension": "ROWS",
        "values": [["newData"]]
       },
       {"range": "B5",
        "majorDimension": "ROWS",
        "values": [["moreInfo"]]
       }
  ]
}
```

If you specified a single cell as the range, all values provided are written to the sheet starting with that cell as the upper-left coordinate. If you instead specify a multi-cell range, the values you provide must fit that range exactly; if not the API returns an error.
