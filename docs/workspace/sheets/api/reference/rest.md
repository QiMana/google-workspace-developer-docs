---
source: https://developers.google.com/workspace/sheets/api/reference/rest
root: workspace
fetched_at: 2026-04-23T15:31:28.326Z
---

# Google Sheets API

Reads and writes Google Sheets.

## Service: sheets.googleapis.com

To call this service, we recommend that you use the Google-provided [client libraries](https://cloud.google.com/apis/docs/client-libraries-explained). If your application needs to use your own libraries to call this service, use the following information when you make the API requests.

### Discovery document

A [Discovery Document](https://developers.google.com/discovery/v1/reference/apis) is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:

- [https://sheets.googleapis.com/$discovery/rest?version=v4](https://sheets.googleapis.com/$discovery/rest?version=v4)

### Service endpoint

A [service endpoint](https://cloud.google.com/apis/design/glossary#api_service_endpoint) is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:

- `https://sheets.googleapis.com`

## REST Resource: v4.spreadsheets

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>batchUpdate</code></td><td><code>POST /v4/spreadsheets/{spreadsheetId}:batchUpdate</code><br>Applies one or more updates to the spreadsheet.</td></tr><tr><td><code>create</code></td><td><code>POST /v4/spreadsheets</code><br>Creates a spreadsheet, returning the newly created spreadsheet.</td></tr><tr><td><code>get</code></td><td><code>GET /v4/spreadsheets/{spreadsheetId}</code><br>Returns the spreadsheet at the given ID.</td></tr><tr><td><code>getByDataFilter</code></td><td><code>POST /v4/spreadsheets/{spreadsheetId}:getByDataFilter</code><br>Returns the spreadsheet at the given ID.</td></tr></tbody></table>

## REST Resource: v4.spreadsheets.sheets

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>copyTo</code></td><td><code>POST /v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo</code><br>Copies a single sheet from a spreadsheet to another spreadsheet.</td></tr></tbody></table>

## REST Resource: v4.spreadsheets.values

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Methods</th></tr></thead><tbody><tr><td><code>append</code></td><td><code>POST /v4/spreadsheets/{spreadsheetId}/values/{range}:append</code><br>Appends values to a spreadsheet.</td></tr><tr><td><code>batchClear</code></td><td><code>POST /v4/spreadsheets/{spreadsheetId}/values:batchClear</code><br>Clears one or more ranges of values from a spreadsheet.</td></tr><tr><td><code>batchClearByDataFilter</code></td><td><code>POST /v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter</code><br>Clears one or more ranges of values from a spreadsheet.</td></tr><tr><td><code>batchGet</code></td><td><code>GET /v4/spreadsheets/{spreadsheetId}/values:batchGet</code><br>Returns one or more ranges of values from a spreadsheet.</td></tr><tr><td><code>batchGetByDataFilter</code></td><td><code>POST /v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter</code><br>Returns one or more ranges of values that match the specified data filters.</td></tr><tr><td><code>batchUpdate</code></td><td><code>POST /v4/spreadsheets/{spreadsheetId}/values:batchUpdate</code><br>Sets values in one or more ranges of a spreadsheet.</td></tr><tr><td><code>batchUpdateByDataFilter</code></td><td><code>POST /v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter</code><br>Sets values in one or more ranges of a spreadsheet.</td></tr><tr><td><code>clear</code></td><td><code>POST /v4/spreadsheets/{spreadsheetId}/values/{range}:clear</code><br>Clears values from a spreadsheet.</td></tr><tr><td><code>get</code></td><td><code>GET /v4/spreadsheets/{spreadsheetId}/values/{range}</code><br>Returns a range of values from a spreadsheet.</td></tr><tr><td><code>update</code></td><td><code>PUT /v4/spreadsheets/{spreadsheetId}/values/{range}</code><br>Sets values in a range of a spreadsheet.</td></tr></tbody></table>
