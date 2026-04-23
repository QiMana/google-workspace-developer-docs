---
source: https://developers.google.com/workspace/sheets/api/samples
root: workspace
fetched_at: 2026-04-23T15:31:37.791Z
---

# Samples

This section presents a [codelab](https://codelabs.developers.google.com/codelabs/sheets-api/) you can use to become familiar with the Google Sheets API. Also provided are a set of "recipe" examples that demonstrate how to translate an intended Google Sheets action into an API request.

Often there's more than one way to complete a given task with the API. When you're deciding on how to approach a task, keep the following in mind:

- If you need to read or write cell values, the [`spreadsheets.values`](./reference/rest/v4/spreadsheets.values.md) collection is a better choice than the [`spreadsheets`](./reference/rest/v4/spreadsheets.md) collection. The former's interface is easier to use for simple read/write operations.
- Wherever possible, use the batch methods ([`spreadsheet.batchUpdate`](./reference/rest/v4/spreadsheets/batchUpdate.md), [`spreadsheet.values.batchGet`](./reference/rest/v4/spreadsheets.values/batchGet.md), and [`spreadsheet.values.batchUpdate`](./reference/rest/v4/spreadsheets.values/batchUpdate.md)) to bundle multiple requests into a single method call. Using these batch methods improves efficiency as they:
	- Reduce client HTTP overhead.
		- Reduce the number of queries made.
		- Reduce the number of revisions on the doc.
		- Ensure atomicity of all the changes in the batch.

## Recipes

The examples listed in this section demonstrate how to express common actions in Sheets as Sheets API v4 requests.

These examples are presented in the form of HTTP requests to be language neutral. To learn how to implement Sheets API request protocols in a specific language using Google API client libraries, see the [Read & write cell values](./guides/values.md) and [Update spreadsheets](./guides/batchupdate.md) guides.

Recipes in this section are divided into the following categories:

- [Basic reading](./samples/reading.md) —Recipes that show how to read values from a sheet.
- [Basic writing](./samples/writing.md) —Recipes that show how to write values to a sheet.
- [Basic formatting](./samples/formatting.md) —Recipes that show how to change the appearance of sheets and cells.
- [Charts](./samples/charts.md) —Recipes that show how to create and alter charts in a sheet.
- [Conditional formatting](./samples/conditional-formatting.md) — Recipes that show how to alter cell appearance based on conditions.
- [Data operations](./samples/data.md) —Recipes that show how to create, move, and manipulate data in a spreadsheet.
- [Named & protected ranges](./samples/ranges.md) —Recipes that show how to create, update, and remove named and protected ranges in a spreadsheet.
- [Pivot tables](./samples/pivot-tables.md) —Recipes that show how to create pivot tables in a sheet.
- [Row & column operations](./samples/rowcolumn.md) —Recipes that show how to add, remove, and move rows and columns, and update their properties.
- [Sheet operations](./samples/sheet.md) —Recipes that show how to create, clear, copy, and delete sheets, and also control their properties.
