---
source: https://developers.google.com/workspace/sheets/api/guides/metadata
root: workspace
fetched_at: 2026-04-23T15:31:23.283Z
---

# Read, write, and search metadata

The metadata feature lets you associate metadata with various entities and locations in a spreadsheet. You can then query this metadata and use it to find the objects with which it's associated.

You can associate metadata with rows, columns, sheets, or a spreadsheet.

## About metadata

The following describes some key aspects of metadata that you should consider when working with the Sheets API:

1. **Metadata as tags**: One use of developer metadata is a *tag* that names a location in the spreadsheet using only a key and a location. For example, you can associate `headerRow` with a particular row or `totals` with a particular column within a sheet. Tags can be used to semantically bind portions of a spreadsheet to fields in a third-party tool or database, so changes to the spreadsheet won't break your app.
2. **Metadata as properties**: Metadata created by specifying a key, location, and a *value* acts as a key-value pair associated with that location in a sheet. For example, you can associate:
	- `formResponseId = resp123` with a row
		- `lastUpdated = 1477369882` with a column
	This lets you store and access custom named properties associated with particular areas or data in a spreadsheet.
3. **Project versus document visible metadata**: To prevent one developer project from interfering with another's metadata, there are two metadata [`visibility`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.developerMetadata#DeveloperMetadata.FIELDS.visibility) settings: `project` and `document`. Using the Sheets API, `project` metadata is only visible and accessible from the Google Cloud project that created it. The `document` metadata is accessible from any Google Cloud project with access to the document.
	Queries that don't explicitly specify a `visibility` return matching `document` metadata and matching `project` metadata for the Google Cloud project making the request.
4. **Uniqueness**: Metadata keys don't have to be unique, but the [`metadataId`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.developerMetadata#DeveloperMetadata.FIELDS.metadata_id) must be distinct. If you create metadata and leave its ID field unspecified, the API assigns one. This ID can be used to identify the metadata, while keys and other attributes can be used to identify sets of metadata.
5. **Return metadata through API requests**: A [`DataFilter`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/DataFilter) object is part of an API call that describes the data to be selected or returned from an API request.
	A single `DataFilter` object can only specify one type of filter criteria to locate data:
	- [`developerMetadataLookup`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/DataFilter#FIELDS.developer_metadata_lookup): Selects data associated with the specified developer metadata matching the criteria.
		- [`a1Range`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/DataFilter#FIELDS.a1_range): Selects data that matches the specified [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1-notation) range. For example, `Sheet1!A1:B10`.
		- [`gridRange`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/DataFilter#FIELDS.grid_range): Selects data that matches the specified grid range using zero-based indexes. For example, `Sheet1!A3:B4 == sheetId: 123456, startRowIndex: 2, endRowIndex: 4, startColumnIndex: 0, endColumnIndex: 2`.
	To filter across multiple locations or criteria, you can use multiple `DataFilter` objects in a single API request. Provide an array or list of `DataFilter` objects to a batch request like the [`spreadsheets.values.batchGetByDataFilter`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchGetByDataFilter) method. Any range that matches any of the data filters in the request will be returned or modified.
	For more information, see [Read and write values associated with metadata](#read-write-associated-metadata).

## Use cases

The following are some example use cases for managing metadata:

- **Associate arbitrary data with various entities and locations in a spreadsheet**: For example, associate `totals` with column D, or `responseId = 1234` with row 7.
- **Find all locations and data associated with a particular metadata key or attribute**: For example, given the key `totals` associated with column D or given the `responseId`, return all rows with the `responseId` metadata and the metadata value associated with them.
- **Find all data associated with a particular entity or location**: For example, given column D, return all metadata associated with that location.
- **Retrieve values in a location by specifying associated metadata**: For example, given the `totals` return a representation of the values contained in the associated column or row or given a `summary` return a representation of the associated Sheet resource.
- **Update values in a location by specifying associated metadata**: For example, instead of updating the values in a row through [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#a1-notation), update values by indicating a metadata ID.

## Read and write metadata

The [`spreadsheets.developerMetadata`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.developerMetadata) resource provides access to metadata associated with a location or object in a spreadsheet. Developer metadata can be used to associate arbitrary data with various parts of a spreadsheet. The metadata remains associated at those locations as the spreadsheet is edited.

### Create metadata

To create metadata, use the [`batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) method on the [`spreadsheets`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets) resource, and supply a [`CreateDeveloperMetadataRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#createdevelopermetadatarequest) with `metadataKey`, `location`, and `visibility` values from the `spreadsheets.developerMetadata` resource. You can optionally specify a `metadataValue` or an explicit `metadataId`.

If you specify an ID that's already in use, the request will be unsuccessful. If you don't supply an ID, the API assigns one.

In this example, we provide a key, value, and a row in the request. The response returns these developer metadata values, plus the assigned metadata ID.

**Request**

```
{
  "requests": [
    {
      "createDeveloperMetadata": {
        "developerMetadata": {
          "location": {
            "dimensionRange": {
              "sheetId": SHEET_ID,
              "dimension": "ROWS",
              "startIndex": 6,
              "endIndex": 7
            }
          },
          "visibility": "DOCUMENT",
          "metadataKey": "Sales",
          "metadataValue": "2022"
        }
      }
    }
  ]
}
```

**Response**

```
{
  "spreadsheetId": SPREADSHEET_ID,
  "replies": [
    {
      "createDeveloperMetadata": {
        "developerMetadata": {
          "metadataId": METADATA_ID,
          "metadataKey": "Sales",
          "metadataValue": "2022",
          "location": {
            "locationType": "ROW",
            "dimensionRange": {
              "sheetId": SHEET_ID,
              "dimension": "ROWS",
              "startIndex": 6,
              "endIndex": 7
            }
          },
          "visibility": "DOCUMENT"
        }
      }
    }
  ]
}
```

### Read a single metadata item

To retrieve a single, distinct developer metadata, use the [`spreadsheets.developerMetadata.get`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.developerMetadata/get) method, specifying the `spreadsheetId` containing the metadata and the developer metadata's unique `metadataId`.

**Request**

In this example, we provide the spreadsheet ID and metadata ID in the request. The response returns the developer metadata values for the metadata ID.

```
GET https://sheets.googleapis.com/v4/spreadsheets/SPREADSHEET_ID/developerMetadata/METADATA_ID
```

**Response**

```
{
  "metadataId": METADATA_ID,
  "metadataKey": "Sales",
  "metadataValue": "2022",
  "location": {
    "locationType": "ROW",
    "dimensionRange": {
      "sheetId": SHEET_ID,
      "dimension": "ROWS",
      "startIndex": 6,
      "endIndex": 7
    }
  },
  "visibility": "DOCUMENT"
}
```

### Read multiple metadata items

To retrieve multiple items of developer metadata, use the [`spreadsheets.developerMetadata.search`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.developerMetadata/search) method. You must specify a [`DataFilter`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/DataFilter) that matches any existing metadata on any combination of properties such as key, value, location, or visibility.

In this example, we provide multiple metadata IDs in the request. The response returns the developer metadata values for each metadata ID.

**Request**

```
{
  "dataFilters": [
    {
      "developerMetadataLookup": {
        "metadataId": METADATA_ID
      }
    },
    {
      "developerMetadataLookup": {
        "metadataId": METADATA_ID
      }
    }
  ]
}
```

**Response**

```
{
  "matchedDeveloperMetadata": [
    {
      "developerMetadata": {
        "metadataId": METADATA_ID,
        "metadataKey": "Revenue",
        "metadataValue": "2022",
        "location": {
          "locationType": "SHEET",
          "sheetId": SHEET_ID
        },
        "visibility": "DOCUMENT"
      },
      "dataFilters": [
        {
          "developerMetadataLookup": {
            "metadataId": METADATA_ID
          }
        }
      ]
    },
    {
      "developerMetadata": {
        "metadataId": METADATA_ID,
        "metadataKey": "Sales",
        "metadataValue": "2022",
        "location": {
          "locationType": "SHEET",
          "sheetId": SHEET_ID
        },
        "visibility": "DOCUMENT"
      },
      "dataFilters": [
        {
          "developerMetadataLookup": {
            "metadataId": METADATA_ID
          }
        }
      ]
    }
  ]
}
```

### Update metadata

To update developer metadata, use the [`spreadsheets.batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) method and supply an [`UpdateDeveloperMetadataRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#updatedevelopermetadatarequest). You must specify a [`DataFilter`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/DataFilter) that targets the metadata to be updated, a [`spreadsheets.developerMetadata`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.developerMetadata) resource with the new values, and a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) describing the fields to be updated.

In this example, we provide the metadata ID, sheet ID, and a new metadata key in the request. The response returns these developer metadata values, plus the updated metadata key.

**Request**

```
{
  "requests": [
    {
      "updateDeveloperMetadata": {
        "dataFilters": [
          {
            "developerMetadataLookup": {
              "metadataId": METADATA_ID
            }
          }
        ],
        "developerMetadata": {
          "location": {
            "sheetId": SHEET_ID
          },
          "metadataKey": "SalesUpdated"
        },
        "fields": "location,metadataKey"
      }
    }
  ]
}
```

**Response**

```
{
  "spreadsheetId": SPREADSHEET_ID,
  "replies": [
    {
      "updateDeveloperMetadata": {
        "developerMetadata": [
          {
            "metadataId": METADATA_ID,
            "metadataKey": "SalesUpdated",
            "metadataValue": "2022",
            "location": {
              "locationType": "SHEET",
              "sheetId": SHEET_ID
            },
            "visibility": "DOCUMENT"
          }
        ]
      }
    }
  ]
}
```

### Delete metadata

To delete developer metadata, use the [`batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate) method, and supply a [`DeleteDeveloperMetadataRequest`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/request#deletedevelopermetadatarequest). You must specify a [`DataFilter`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/DataFilter) to select the metadata you want to delete.

In this example, we provide the metadata ID in the request. The response returns the developer metadata values for the metadata ID.

To confirm the developer metadata is removed, use the [`spreadsheets.developerMetadata.get`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.developerMetadata/get) method, specifying the deleted metadata ID. You should receive a `404: Not Found` HTTP status code response, with a message stating "No developer metadata with ID METADATA\_ID.

**Request**

```
{
  "requests": [
    {
      "deleteDeveloperMetadata": {
        "dataFilter": {
          "developerMetadataLookup": {
            "metadataId": METADATA_ID
          }
        }
      }
    }
  ]
}
```

**Response**

```
{
  "spreadsheetId": SPREADSHEET_ID,
  "replies": [
    {
      "deleteDeveloperMetadata": {
        "deletedDeveloperMetadata": [
          {
            "metadataId": METADATA_ID,
            "metadataKey": "SalesUpdated",
            "metadataValue": "2022",
            "location": {
              "locationType": "SHEET",
              "sheetId": SHEET_ID
            },
            "visibility": "DOCUMENT"
          }
        ]
      }
    }
  ]
}
```

## Read and write values associated with metadata

You can also retrieve and update cell values in rows and columns by specifying the associated developer metadata and the values you want to update. To do this, use one of the following methods with a matching [`DataFilter`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/DataFilter).

### Get cell values by metadata

To get cell values by metadata, use the [`spreadsheets.values.batchGetByDataFilter`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchGetByDataFilter) method. You must specify the spreadsheet ID and one or more data filters that match the metadata.

In this example, we provide the metadata ID in the request. The response returns the row cell values (model number, monthly sales) for the metadata ID.

**Request**

```
{
  "dataFilters": [
    {
      "developerMetadataLookup": {
        "metadataId": METADATA_ID
      }
    }
  ],
  "majorDimension": "ROWS"
}
```

**Response**

```
{
  "spreadsheetId": SPREADSHEET_ID,
  "valueRanges": [
    {
      "valueRange": {
        "range": "Sheet7!A7:Z7",
        "majorDimension": "ROWS",
        "values": [
          [
            "W-24",
            "74"
          ]
        ]
      },
      "dataFilters": [
        {
          "developerMetadataLookup": {
            "metadataId": METADATA_ID
          }
        }
      ]
    }
  ]
}
```

### Get spreadsheet by metadata

When retrieving a spreadsheet, you can return a subset of data by using the [`spreadsheets.getByDataFilter`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/getByDataFilter) method. You must specify the spreadsheet ID and one or more data filters that match the metadata.

This request functions as a regular "spreadsheet GET" request except the list of metadata matched by the specified data filters determines what sheets, grid data, and other object resources with metadata are returned. If [`includeGridData`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/getByDataFilter#body.request_body.FIELDS.include_grid_data) is set to `true`, grid data intersecting the specified grid ranges is also returned for the sheet. The `includeGridData` field is ignored if a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) is set in the request.

In this example, we provide the metadata ID and set `includeGridData` to `false` in the request. The response returns both the spreadsheet and sheet properties.

**Request**

```
{
  "dataFilters": [
    {
      "developerMetadataLookup": {
        "metadataId": METADATA_ID
      }
    }
  ],
  "includeGridData": false
}
```

**Response**

```
{
  "spreadsheetId": SPREADSHEET_ID,
  "properties": {
    "title": "Sales Sheet",
    "locale": "en_US",
    "autoRecalc": "ON_CHANGE",
    "timeZone": "America/Los_Angeles",
    "defaultFormat": {
      "backgroundColor": {
        "red": 1,
        "green": 1,
        "blue": 1
      },
      "padding": {
        "top": 2,
        "right": 3,
        "bottom": 2,
        "left": 3
      },
      "verticalAlignment": "BOTTOM",
      "wrapStrategy": "OVERFLOW_CELL",
      "textFormat": {
        "foregroundColor": {},
        "fontFamily": "arial,sans,sans-serif",
        "fontSize": 10,
        "bold": false,
        "italic": false,
        "strikethrough": false,
        "underline": false,
        "foregroundColorStyle": {
          "rgbColor": {}
        }
      },
      "backgroundColorStyle": {
        "rgbColor": {
          "red": 1,
          "green": 1,
          "blue": 1
        }
      }
    },
    "spreadsheetTheme": {
      "primaryFontFamily": "Arial",
      "themeColors": [
        {
          "colorType": "TEXT",
          "color": {
            "rgbColor": {}
          }
        },
        {
          "colorType": "BACKGROUND",
          "color": {
            "rgbColor": {
              "red": 1,
              "green": 1,
              "blue": 1
            }
          }
        },
        {
          "colorType": "ACCENT1",
          "color": {
            "rgbColor": {
              "red": 0.25882354,
              "green": 0.52156866,
              "blue": 0.95686275
            }
          }
        },
        {
          "colorType": "ACCENT2",
          "color": {
            "rgbColor": {
              "red": 0.91764706,
              "green": 0.2627451,
              "blue": 0.20784314
            }
          }
        },
        {
          "colorType": "ACCENT3",
          "color": {
            "rgbColor": {
              "red": 0.9843137,
              "green": 0.7372549,
              "blue": 0.015686275
            }
          }
        },
        {
          "colorType": "ACCENT4",
          "color": {
            "rgbColor": {
              "red": 0.20392157,
              "green": 0.65882355,
              "blue": 0.3254902
            }
          }
        },
        {
          "colorType": "ACCENT5",
          "color": {
            "rgbColor": {
              "red": 1,
              "green": 0.42745098,
              "blue": 0.003921569
            }
          }
        },
        {
          "colorType": "ACCENT6",
          "color": {
            "rgbColor": {
              "red": 0.27450982,
              "green": 0.7411765,
              "blue": 0.7764706
            }
          }
        },
        {
          "colorType": "LINK",
          "color": {
            "rgbColor": {
              "red": 0.06666667,
              "green": 0.33333334,
              "blue": 0.8
            }
          }
        }
      ]
    }
  },
  "sheets": [
    {
      "properties": {
        "sheetId": SHEET_ID,
        "title": "Sheet7",
        "index": 7,
        "sheetType": "GRID",
        "gridProperties": {
          "rowCount": 1000,
          "columnCount": 26
        }
      }
    }
  ],
  "spreadsheetUrl": SPREADSHEET_URL
}
```

### Update values by metadata

To update cell values matching specific metadata, use the [`spreadsheets.values.batchUpdateByDataFilter`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdateByDataFilter) method. You must specify the spreadsheet ID, [`valueInputOption`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/ValueInputOption), and one or more [`DataFilterValueRange`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdateByDataFilter#datafiltervaluerange) values that match the metadata.

In this example, we provide the metadata ID and updated row values in the request. The response returns both the updated properties and data for the metadata ID.

**Request**

```
{
  "data": [
    {
      "dataFilter": {
        "developerMetadataLookup": {
          "metadataId": METADATA_ID
        }
      },
      "majorDimension": "ROWS",
      "values": [
        [
          "W-24",
          "84"
        ]
      ]
    }
  ],
  "includeValuesInResponse": true,
  "valueInputOption": "USER_ENTERED"
}
```

**Response**

```
{
  "spreadsheetId": SPREADSHEET_ID,
  "totalUpdatedRows": 1,
  "totalUpdatedColumns": 2,
  "totalUpdatedCells": 2,
  "totalUpdatedSheets": 1,
  "responses": [
    {
      "updatedRange": "Sheet7!A7:B7",
      "updatedRows": 1,
      "updatedColumns": 2,
      "updatedCells": 2,
      "dataFilter": {
        "developerMetadataLookup": {
          "metadataId": METADATA_ID
        }
      },
      "updatedData": {
        "range": "Sheet7!A7:Z7",
        "majorDimension": "ROWS",
        "values": [
          [
            "W-24",
            "84"
          ]
        ]
      }
    }
  ]
}
```

### Clear values by metadata

To clear cell values matching specific metadata, use the [`spreadsheets.values.batchClearByDataFilter`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchClearByDataFilter) method. You must specify a data filter to select the metadata you want to clear.

**Request**

In this example, we provide the metadata ID in the request. The response returns the spreadsheet ID and the cleared ranges.

```
{
  "dataFilters": [
    {
      "developerMetadataLookup": {
        "metadataId": METADATA_ID
      }
    }
  ]
}
```

**Response**

```
{
  "spreadsheetId": SPREADSHEET_ID,
  "clearedRanges": [
    "Sheet7!A7:Z7"
  ]
}
```

## Metadata storage limits

There's a limit on the total amount of metadata you can store in a spreadsheet. This limit is measured in characters and is made up of two components:

| Item | Storage limit allocation |
| --- | --- |
| Spreadsheet | 30,000 characters |
| Each sheet within a spreadsheet | 30,000 characters |

You can store up to 30,000 characters for the spreadsheet. In addition, you can store 30,000 characters for each sheet within a spreadsheet (30,000 for sheet one, 30,000 for sheet two, and so forth). So a spreadsheet with three sheets could contain up to 120,000 characters of metadata.

Each character in the `metadataKey` and `metadataValue` fields of the [`spreadsheets.developerMetadata`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.developerMetadata) resource count toward this limit.

## Related topics

- [Apply filters to your Google Sheets data](https://developers.google.com/workspace/sheets/api/guides/filters-overview)
- [Manage data visibility with filters](https://developers.google.com/workspace/sheets/api/guides/filters)
- [Usage limits](https://developers.google.com/workspace/sheets/api/limits)
