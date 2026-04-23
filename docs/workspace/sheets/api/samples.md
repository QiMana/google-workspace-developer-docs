---
source: https://developers.google.com/workspace/sheets/api/samples
root: workspace
fetched_at: 2026-04-23T15:31:37.791Z
---

# Samples

This section presents a [codelab](https://codelabs.developers.google.com/codelabs/sheets-api/) you can use to become familiar with the Google Sheets API. Also provided are a set of "recipe" examples that demonstrate how to translate an intended Google Sheets action into an API request.

Often there's more than one way to complete a given task with the API. When you're deciding on how to approach a task, keep the following in mind:

- If you need to read or write cell values, the [`spreadsheets.values`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values) collection is a better choice than the [`spreadsheets`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets) collection. The former's interface is easier to use for simple read/write operations.
- Wherever possible, use the batch methods ([`spreadsheet.batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate), [`spreadsheet.values.batchGet`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchGet), and [`spreadsheet.values.batchUpdate`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate)) to bundle multiple requests into a single method call. Using these batch methods improves efficiency as they:
	- Reduce client HTTP overhead.
		- Reduce the number of queries made.
		- Reduce the number of revisions on the doc.
		- Ensure atomicity of all the changes in the batch.

## Recipes

The examples listed in this section demonstrate how to express common actions in Sheets as Sheets API v4 requests.

These examples are presented in the form of HTTP requests to be language neutral. To learn how to implement Sheets API request protocols in a specific language using Google API client libraries, see the [Read & write cell values](https://developers.google.com/workspace/sheets/api/guides/values) and [Update spreadsheets](https://developers.google.com/workspace/sheets/api/guides/batchupdate) guides.

Recipes in this section are divided into the following categories:

- [Basic reading](https://developers.google.com/workspace/sheets/api/samples/reading) —Recipes that show how to read values from a sheet.
- [Basic writing](https://developers.google.com/workspace/sheets/api/samples/writing) —Recipes that show how to write values to a sheet.
- [Basic formatting](https://developers.google.com/workspace/sheets/api/samples/formatting) —Recipes that show how to change the appearance of sheets and cells.
- [Charts](https://developers.google.com/workspace/sheets/api/samples/charts) —Recipes that show how to create and alter charts in a sheet.
- [Conditional formatting](https://developers.google.com/workspace/sheets/api/samples/conditional-formatting) — Recipes that show how to alter cell appearance based on conditions.
- [Data operations](https://developers.google.com/workspace/sheets/api/samples/data) —Recipes that show how to create, move, and manipulate data in a spreadsheet.
- [Named & protected ranges](https://developers.google.com/workspace/sheets/api/samples/ranges) —Recipes that show how to create, update, and remove named and protected ranges in a spreadsheet.
- [Pivot tables](https://developers.google.com/workspace/sheets/api/samples/pivot-tables) —Recipes that show how to create pivot tables in a sheet.
- [Row & column operations](https://developers.google.com/workspace/sheets/api/samples/rowcolumn) —Recipes that show how to add, remove, and move rows and columns, and update their properties.
- [Sheet operations](https://developers.google.com/workspace/sheets/api/samples/sheet) —Recipes that show how to create, clear, copy, and delete sheets, and also control their properties.
