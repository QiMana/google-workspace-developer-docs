---
source: https://developers.google.com/workspace/docs/api/how-tos/tables
root: workspace
fetched_at: 2026-04-23T15:27:07.471Z
---

# Working with tables

The Google Docs API allows you to edit table contents. The operations you can perform include the following:

- Insert and delete rows, columns, or entire tables.
- Insert content into table cells.
- Read content from table cells.
- Modify column properties and the style of rows.

Tables in Google Docs are represented as a type of [StructuralElement](../reference/rest/v1/documents.md#structuralelement) in the document. Each [table](../reference/rest/v1/documents.md#table) contains a list of [table rows](../reference/rest/v1/documents.md#tablerow) where each row contains a list of [table cells](../reference/rest/v1/documents.md#tablecell). As with all structural elements, the table has [start and end indexes](../concepts/structure.md#start_and_end_index), indicating the table's position in the document. See the [structure](../concepts/structure.md) for more information on indexing. Table properties include many style elements such as column widths and padding.

The following JSON fragment shows a simple 2x2 table with most of the detail removed:

```
"table": {
    "columns": 2,
    "rows": 2,
    "tableRows": [
        { "tableCells": [
                {
                    "content": [ { "paragraph": { ...  }, } ],
                },
                {
                    "content": [ { "paragraph": { ... }, } ],
                }
            ],
        },
        {
            "tableCells": [
                {
                    "content": [ { "paragraph": { ... }, } ],
                },
                {
                    "content": [ { "paragraph": { ... }, } ],
                }
            ],
        }
    ]
}
```

## Inserting and deleting tables

To add a new table to a document, use the [InsertTableRequest](../reference/rest/v1/documents/request.md#inserttablerequest). You must specify the following when inserting a table:

- The table dimensions in rows and columns.
- The location to insert the new table: this can be an index within a [segment](../concepts/structure.md#start_and_end_index), or it can be the end of a segment. Either one should include the ID of the specified tab.

There is no explicit method for deleting tables. To delete a table from a document, treat it as you would any other content: use the [DeleteContentRangeRequest](../reference/rest/v1/documents/request.md#DeleteContentRangeRequest), specifying a range that covers the entire table.

The following example inserts a 3x3 table at the end of an empty document:

### Java

```
// Insert a table at the end of the body.
// (An empty or unspecified segmentId field indicates the document's body.)

List<Request> requests = new ArrayList<>();
requests.add(
    new Request()
        .setInsertTable(
            new InsertTableRequest()
                .setEndOfSegmentLocation(
                    new EndOfSegmentLocation().setTabId(<var>TAB_ID</var>))
                .setRows(3)
                .setColumns(3)));

BatchUpdateDocumentRequest body =
    new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response =
    docsService.documents().batchUpdate(<var>DOCUMENT_ID</var>, body).execute();
```

### Python

```
# Insert a table at the end of the body.
# (An empty or unspecified segmentId field indicates the document's body.)

requests = [{
    'insertTable': {
        'rows': 3,
        'columns': 3,
        'endOfSegmentLocation': {
          'segmentId': '',
          'tabId': <var>TAB_ID</var>
        }
    },
}
]

result = service.documents().batchUpdate(documentId=<var>DOCUMENT_ID</var>, body={'requests': requests}).execute()
```

This corresponding example shows how to delete the table previously inserted:

### Java

```
// Delete a table that was inserted at the start of the body of the first tab.
// (The table is the second element in the body:
//  documentTab.getBody().getContent().get(2).)

Document document = docsService.documents().get(<var>DOCUMENT_ID</var>).setIncludeTabsContent(true).execute();
String tabId = document.getTabs()[0].getTabProperties().getTabId();
DocumentTab documentTab = document.getTabs()[0].getDocumentTab();
StructuralElement table = documentTab.getBody().getContent().get(2);

List<Request> requests = new ArrayList<>();
requests.add(
    new Request()
        .setDeleteContentRange(
            new DeleteContentRangeRequest()
                .setRange(
                    new Range()
                        .setStartIndex(table.getStartIndex())
                        .setEndIndex(table.getEndIndex())
                        .setTabId(tabId))));

BatchUpdateDocumentRequest body =
    new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response =
    docsService.documents().batchUpdate(<var>DOCUMENT_ID</var>, body).execute();
```

### Python

```
# Delete a table that was inserted at the start of the body of the first tab.
# (The table is the second element in the body: ['body']['content'][2].)

document = service.documents().get(documentId=DOCUMENT_ID, includeTabsContent=True).execute()
tab_id = document['tabs'][0]['tabProperties']['tabId']
document_tab = document['tabs'][0]['documentTab']
table = document_tab['body']['content'][2]

requests = [{
    'deleteContentRange': {
      'range': {
        'segmentId': '',
        'startIndex': table['startIndex'],
        'endIndex':   table['endIndex'],
        'tabId': tab_id
      }
    },
}
]

result = service.documents().batchUpdate(documentId=<var>DOCUMENT_ID</var>, body={'requests': requests}).execute()
```

Because you delete a table as ordinary content—by specifying start and end indexes—you need to get these indexes from somewhere. The example shows one way to extract these indexes from the document content.

## Inserting and deleting rows

If your document already contains a table, the Google Docs API allows you to insert and delete table rows. Use the [InsertTableRowRequest](../reference/rest/v1/documents/batchUpdate.md#inserttablerowrequest) to insert rows above or below a specified table cell and the [DeleteTableRowRequest](../reference/rest/v1/documents/batchUpdate.md#deletetablerowrequest) to remove a row that spans the specified cell location.

The following example inserts text into the first table cell of a table and adds a table row.

### Java

```
List<Request> requests = new ArrayList<>();
requests.add(new Request().setInsertText(new InsertTextRequest()
        .setText("Hello")
        .setLocation(new Location().setIndex(5).setTabId(<var>TAB_ID</var>))));
requests.add(new Request().setInsertTableRow(new InsertTableRowRequest()
        .setTableCellLocation(new TableCellLocation()
                .setTableStartLocation(new Location()
                        .setIndex(2).setTabId(<var>TAB_ID</var>))
                .setRowIndex(1)
                .setColumnIndex(1))
        .setInsertBelow(true)));

BatchUpdateDocumentRequest body =
    new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response = docsService.documents()
        .batchUpdate(<var>DOCUMENT_ID</var>, body).execute();
```

### Python

```
requests = [{
      'insertText': {
        'location': {
          'index': 5,
          'tabId': <var>TAB_ID</var>
        },
        'text': 'Hello'
    }
  },
  {
    'insertTableRow': {
        'tableCellLocation': {
            'tableStartLocation': {
                'index': 2,
                'tabId': <var>TAB_ID</var>
            },
            'rowIndex': 1,
            'columnIndex': 1
        },
        'insertBelow': 'true'
    }
  }
]

result = service.documents().batchUpdate(documentId=<var>DOCUMENT_ID</var>, body={'requests': requests}).execute()
```

## Inserting and deleting columns

To insert a column into an existing table, use the [InsertTableColumnRequest](../reference/rest/v1/documents/request.md#inserttablecolumnrequest). You must specify the following:

- A cell next to which you want a new column inserted.
- Which side (left or right) to insert the new column.

The following example shows how you can insert a column into the [2x2 table](#simple2x2table) shown earlier:

### Java

```
List<Request> requests = new ArrayList<>();
requests.add(
    new Request()
        .setInsertTableColumn(
            new InsertTableColumnRequest()
                .setTableCellLocation(
                    new TableCellLocation()
                        .setTableStartLocation(
                            new Location().setIndex(2).setTabId(<var>TAB_ID</var>))
                        .setRowIndex(0)
                        .setColumnIndex(0))
                .setInsertRight(true)));

BatchUpdateDocumentRequest body =
    new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response =
    docsService.documents().batchUpdate(<var>DOCUMENT_ID</var>, body).execute();
```

### Python

```
requests = [{
    'insertTableColumn': {
      'tableCellLocation': {
        'tableStartLocation': {
          'segmentId': '',
          'index': 2,
          'tabId': <var>TAB_ID</var>
        },
        'rowIndex': 0,
        'columnIndex': 0
      },
      'insertRight': True
    },
}
]

result = service.documents().batchUpdate(documentId=<var>DOCUMENT_ID</var>, body={'requests': requests}).execute()
```

To delete a column, use the [DeleteTableColumnRequest](../reference/rest/v1/documents/request.md#deletetablecolumnrequest). You specify the cell location within a target column just as shown previously for inserting a column.

## Reading content from table cells

A table cell contains a list of [structural elements](../reference/rest/v1/documents.md#StructuralElement); each of these structural elements can be a paragraph with text or another type of structure—even another table. To read table contents, you can recursively inspect each element, as shown in [Extract Text](../samples/extract-text.md).

## Inserting content into table cells

To write to a table cell, use an [InsertTextRequest](../reference/rest/v1/documents/batchUpdate.md#inserttextrequest) to an index within the cell you want to update. The table indexes adjust to account for the updated text. The same applies for deleting cell text with the [DeleteContentRangeRequest](../reference/rest/v1/documents/request.md#deletecontentrangerequest).

## Modifying column properties

The [UpdateTableColumnPropertiesRequest](../reference/rest/v1/documents/request.md#updatetablecolumnpropertiesrequest) lets you modify the properties of one or more of the columns in a table.

You must provide the starting index of the table, along with a [TableColumnProperties](../reference/rest/v1/documents.md#TableRowStyle) object. To modify selected columns only, include a list of column numbers in the request; to modify all columns in the table, provide an empty list.

The following example updates the column widths of a table, setting all columns to 100pts wide, then the width of the first column to 200pt:

### Java

```
List<Request> requests = new ArrayList<>();
requests.add(
    new Request()
        .setUpdateTableColumnProperties(
            new UpdateTableColumnPropertiesRequest()
                .setTableStartLocation(
                    new Location()
                        .setIndex(2)
                        .setTabId(<var>TAB_ID</var>))
                .setColumnIndices(null)
                .setTableColumnProperties(
                    new TableColumnProperties()
                        .setWidthType("FIXED_WIDTH")
                        .setWidth(
                            new Dimension().setMagnitude(100d).setUnit("PT")))
                .setFields("*")));

List<Integer> columnIndices = new ArrayList<>();
columnIndices.add(0);
requests.add(
    new Request()
        .setUpdateTableColumnProperties(
            new UpdateTableColumnPropertiesRequest()
                .setTableStartLocation(
                    new Location()
                        .setIndex(2)
                        .setTabId(<var>TAB_ID</var>))
                .setColumnIndices(columnIndices)
                .setTableColumnProperties(
                    new TableColumnProperties()
                        .setWidthType("FIXED_WIDTH")
                        .setWidth(
                            new Dimension().setMagnitude(200d).setUnit("PT")))
                .setFields("*")));

BatchUpdateDocumentRequest body =
    new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response =
    docsService.documents().batchUpdate(<var>DOCUMENT_ID</var>, body).execute();
```

### Python

```
requests = [{
  'updateTableColumnProperties': {
    'tableStartLocation': {'index': 2, 'tabId': <var>TAB_ID</var>},
    'columnIndices': [],
    'tableColumnProperties': {
      'widthType': 'FIXED_WIDTH',
      'width': {
        'magnitude': 100,
        'unit': 'PT'
      }
    },
    'fields': '*'
  },
  'updateTableColumnProperties': {
    'tableStartLocation': {'index': 2, 'tabId': <var>TAB_ID</var>},
    'columnIndices': [0],
    'tableColumnProperties': {
      'widthType': 'FIXED_WIDTH',
      'width': {
        'magnitude': 200,
        'unit': 'PT'
      }
    },
    'fields': '*'
  },
}
]

result = service.documents().batchUpdate(documentId=<var>DOCUMENT_ID</var>, body={'requests': requests}).execute()
```

## Modifying row styles

The [UpdateTableRowsStyleRequest](../reference/rest/v1/documents/request.md#updatetablerowstylerequest) lets you modify the style of one or more of the rows in a table.

You must provide the starting index of the table, along with a [TableRowStyle](../reference/rest/v1/documents.md#TableRowStyle) object. To modify selected rows only, include a list of row numbers in the request; to modify all rows in the table, provide an empty list.

The following example sets the minimum height of row 3 of a table:

### Java

```
List<Integer> rowIndices = new ArrayList<>();
rowIndices.add(3);

List<Request> requests = new ArrayList<>();
requests.add(
    new Request()
        .setUpdateTableRowStyle(
            new UpdateTableRowStyleRequest()
                .setTableStartLocation(
                    new Location()
                        .setIndex(2)
                        .setTabId(<var>TAB_ID</var>))
                .setRowIndices(rowIndices)
                .setTableRowStyle(
                    new TableRowStyle()
                        .setMinRowHeight(
                            new Dimension().setMagnitude(18d).setUnit("PT")))
                .setFields("*")));

BatchUpdateDocumentRequest body =
    new BatchUpdateDocumentRequest().setRequests(requests);
BatchUpdateDocumentResponse response =
    docsService.documents().batchUpdate(<var>DOCUMENT_ID</var>, body).execute();
```

### Python

```
requests = [{
    'updateTableRowStyle': {
        'tableStartLocation': {'index': 2, 'tabId': <var>TAB_ID</var>},
        'rowIndices': [3],
        'tableRowStyle': {
            'minRowHeight': {
              'magnitude': 18,
              'unit': 'PT'
            }
        },
        'fields': '*'
    },
}
]

result = service.documents().batchUpdate(documentId=<var>DOCUMENT_ID</var>, body={'requests': requests}).execute()
```
