---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/batchUpdate
root: workspace
fetched_at: 2026-04-23T15:31:32.478Z
---

# Method: spreadsheets.batchUpdate

Applies one or more updates to the spreadsheet.

Each `request` is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied.

Some requests have `replies` to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order.

Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.

### HTTP request

`POST https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}:batchUpdate`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The spreadsheet to apply the updates to.</p></td></tr></tbody></table>

### Request body

The request body contains data with the following structure:

JSON representation

```
{
  "requests": [
    {
      object (Request)
    }
  ],
  "includeSpreadsheetInResponse": boolean,
  "responseRanges": [
    string
  ],
  "responseIncludeGridData": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requests[]</code></td><td><p><code>object (<code>Request</code>)</code></p><p>A list of updates to apply to the spreadsheet. Requests will be applied in the order they are specified. If any request is not valid, no requests will be applied.</p></td></tr><tr><td><code>includeSpreadsheetInResponse</code></td><td><p><code>boolean</code></p><p>Determines if the update response should include the spreadsheet resource.</p></td></tr><tr><td><code>responseRanges[]</code></td><td><p><code>string</code></p><p>Limits the ranges included in the response spreadsheet. Meaningful only if <code>includeSpreadsheetInResponse</code> is 'true'.</p></td></tr><tr><td><code>responseIncludeGridData</code></td><td><p><code>boolean</code></p><p>True if grid data should be returned. Meaningful only if <code>includeSpreadsheetInResponse</code> is 'true'. This parameter is ignored if a field mask was set in the request.</p></td></tr></tbody></table>

### Response body

The reply for batch updating a spreadsheet.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "spreadsheetId": string,
  "replies": [
    {
      object (Response)
    }
  ],
  "updatedSpreadsheet": {
    
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>spreadsheetId</code></td><td><p><code>string</code></p><p>The spreadsheet the updates were applied to.</p></td></tr><tr><td><code>replies[]</code></td><td><p><code>object (<code>Response</code>)</code></p><p>The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.</p></td></tr><tr><td><code>updatedSpreadsheet</code></td><td><p>The spreadsheet after updates were applied. This is only set if <code>BatchUpdateSpreadsheetRequest.include_spreadsheet_in_response</code> is <code>true</code>.</p></td></tr></tbody></table>

### Authorization scopes

Requires one of the following OAuth scopes:

- `https://www.googleapis.com/auth/drive`
- `https://www.googleapis.com/auth/drive.file`
- `https://www.googleapis.com/auth/spreadsheets`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).
