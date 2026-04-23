---
source: https://developers.google.com/apps-script/reference/spreadsheet
root: apps-script
fetched_at: 2026-04-23T15:21:22.214Z
---

# Spreadsheet Service

## Page Summary

- The Google Sheets service in Apps Script allows creation, access, and modification of Google Sheets files with performance bundling.
- Numerous classes are available to interact with various spreadsheet aspects, including formatting, data sources, structure, and content.
- Specific classes are provided for managing conditional formatting, data validation, pivot tables, named ranges, and protection.
- Chart builders offer extensive methods for creating and customizing different types of embedded charts within sheets.
- Classes like `DeveloperMetadata` and `TextFinder` enable advanced interactions such as managing custom metadata and finding/replacing text.

This service allows scripts to create, access, and modify Google Sheets files. See also the [guide to storing data in spreadsheets](../guides/sheets.md).

Sometimes, spreadsheet operations are bundled together to improve performance, such as when doing multiple calls to a method. If you want to make sure that all pending changes are made right away, for instance to show users information as a script is executing, call [`SpreadsheetApp.flush()`](./spreadsheet/spreadsheet-app.md#flush).
