---
source: https://developers.google.com/workspace/sheets/api/troubleshoot-api-errors
root: workspace
fetched_at: 2026-04-23T15:31:38.886Z
---

# Troubleshoot API errors

This page describes how to troubleshoot errors with the Sheets API.

## 400 Bad Request

This error indicates that the request was malformed. For troubleshooting these requests, see the [reference documentation](./reference/rest.md) and the [support page](./support.md#questions_advice).

## 500 Internal Server Error

If you are encountering 500 errors when using the Sheets API, it typically indicates that there is an issue with the API itself. File a bug report on the Sheets API [Issue Tracker](./support.md#developer_product_feedback) with the request that caused the error.

## 503 Service Unavailable

The Sheets API returns a 503 error when the service is unavailable or when the complexity of the request or spreadsheet is high. The following are some suggestions to limit the rate of 503 errors by modifying the API requests and the underlying spreadsheet.

### Request

- Use [`batchUpdate`](./guides/batch.md) to combine related updates into a single request. Exercise caution when batching large updates as this might trigger a timeout.
- Limit the number of concurrent requests to the API per spreadsheet to 1 request per second.
- For large spreadsheets, retrieve only the necessary spreadsheet values using [A1 notation](./guides/concepts.md#cell) and limit the use of [`includeGridData`](./reference/rest/v4/spreadsheets/get.md#query-parameters).
- Use [field masks](./guides/performance.md#partial) to limit the amount of data returned by the API.
- Use exponential backoff when retrying requests.

### Spreadsheet

- For frequently updated sheets, rotate to a new spreadsheet periodically to reduce accumulation of versions.
- Limit the use of [`IMPORTRANGE`](https://support.google.com/docs/answer/3093340), [`QUERY`](https://support.google.com/docs/answer/3093343), and other complex formulas.
- Consider splitting large spreadsheets into multiple spreadsheets.
- Limit the use of a single spreadsheet as a source for many [`IMPORTRANGE`](https://support.google.com/docs/answer/3093340) formulas.
- Limit access to the spreadsheet to only those who need it.
