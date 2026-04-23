---
source: https://developers.google.com/workspace/sheets/api/guides/chips
root: workspace
fetched_at: 2026-04-23T15:31:14.522Z
---

# Smart chips

This guide describes how and why to use the Google Sheets API to add and manage smart chips in your spreadsheets.

## What is a smart chip?

With smart chips, you can bring rich, interactive data from other Google Workspace applications directly into Sheets. Smart chips provide users with quick access to information and actions, transforming a cell link into a dynamic object. To learn more, see [Insert smart chips in your Google Sheets](https://support.google.com/docs/answer/12319513).

## Add a smart chip

Chips are represented as chip runs, which are part of [CellData](../reference/rest/v4/spreadsheets/cells.md#CellData), so you can insert a chip using the existing [`spreadsheets.batchUpdate`](../reference/rest/v4/spreadsheets/batchUpdate.md) method by supplying an [`UpdateCellsRequest`](../reference/rest/v4/spreadsheets/request.md#UpdateCellsRequest) or [`AppendCellsRequest`](../reference/rest/v4/spreadsheets/request.md#AppendCellsRequest).

The request must include the `chipRuns` field. A chip run describes a chip's properties and where it is located within the cell's text.

When writing `chipRuns`, you must also provide a `userEnteredValue` that contains placeholder characters (`@`) for each chip you intend to add. Each run in the `chipRuns` array will correspond to one of the placeholders. Non-chipped runs can be omitted on write.

The following example shows how to write a file chip, a people chip, and plain text into a single cell, A1. \* {JSON}

```
{
  "updateCells": {
    "rows": [
      {
        "values": [
          {
            "userEnteredValue": {
              "stringValue": "@ is the owner of @."
            },
            "chipRuns": [
              {
                "chip": {
                  "personProperties": {
                    "email": "johndoe@gmail.com",
                    "displayFormat": "DEFAULT"
                  }
                }
              },
              {
                "startIndex": 18,
                "chip": {
                  "richLinkProperties": {
                    "uri": "https://docs.google.com/document/d/YOUR_DOCUMENT_ID/edit"
                  }
                }
              }
            ]
          }
        ]
      }
    ],
    "fields": "userEnteredValue,chipRuns",
    "range": {
      "startRowIndex": 0,
      "startColumnIndex": 0
    }
  }
}
```

### Configure chip properties

A chip object can have one of the following property types:

#### personProperties

Use this to create a person chip.

- `email`: (Required) The email address of the person to link.
- `displayFormat`: (Optional) The preferred display format for the person's name. Can be one of the following:
	- `DEFAULT`: Standard "First Name Last Name" format.
		- `LAST_NAME_COMMA_FIRST_NAME`: "Last Name, First Name" format.
		- `EMAIL`: The person's email address.

#### richLinkProperties

Use this to create a rich link chip. While the API can read links to various Google services (like YouTube or Calendar), only links to Google Drive files can be written as chips.

- `uri`: (Required) The URI of the resource. For writing, this must be a Google Drive file link. URIs cannot exceed 2000 bytes.

## Read a smart chip

To read a smart chip's data, use the [`spreadsheets.get`](../reference/rest/v4/spreadsheets/get.md) method and include `sheets.data.rowData.values(chipRuns)` in the fields parameter.

The `chipRuns` array in the response will contain objects for all subsections of the cell's text.

- Chipped runs: These sections will have a populated `chip` object containing either `personProperties` or `richLinkProperties`.
- Non-chipped runs: Plain text sections will also have a run object, but its `chip` field will be empty.

To get the display text of a chip, add `formattedValue` as a field.

## Update a smart chip

To update or replace a smart chip, you have to overwrite the cell's contents. Use the same [`UpdateCellsRequest`](../reference/rest/v4/spreadsheets/request.md#UpdateCellsRequest) or [`AppendCellsRequest`](../reference/rest/v4/spreadsheets/request.md#AppendCellsRequest) as you would for adding a chip, providing a new `userEnteredValue` and `chipRun`. This will replace the existing chip in the cell.

## Use smart chips with other Sheets features

[Tables](./tables.md): Smart chips can be used as a table column type to track project owners (People chip), or related documents (File chip).

[Filters](./filters.md): You can filter ranges based on the text value of the smart chips within them.
