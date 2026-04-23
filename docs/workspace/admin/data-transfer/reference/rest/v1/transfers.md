---
source: https://developers.google.com/workspace/admin/data-transfer/reference/rest/v1/transfers
root: workspace
fetched_at: 2026-04-23T15:23:32.547Z
---

# REST Resource: transfers

## Resource: DataTransfer

A Transfer resource represents the transfer of the ownership of user data between users.

JSON representation

```
{
  "id": string,
  "oldOwnerUserId": string,
  "newOwnerUserId": string,
  "applicationDataTransfers": [
    {
      object (ApplicationDataTransfer)
    }
  ],
  "overallTransferStatusCode": string,
  "kind": string,
  "etag": string,
  "requestTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Read-only. The transfer's ID.</p></td></tr><tr><td><code>oldOwnerUserId</code></td><td><p><code>string</code></p><p>ID of the user whose data is being transferred.</p></td></tr><tr><td><code>newOwnerUserId</code></td><td><p><code>string</code></p><p>ID of the user to whom the data is being transferred.</p></td></tr><tr><td><code>applicationDataTransfers[]</code></td><td><p><code>object (<code>ApplicationDataTransfer</code>)</code></p><p>The list of per-application data transfer resources. It contains details of the applications associated with this transfer resource, and also specifies the applications for which data transfer has to be done at the time of the transfer resource creation.</p></td></tr><tr><td><code>overallTransferStatusCode</code></td><td><p><code>string</code></p><p>Read-only. Overall transfer status.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies the resource as a DataTransfer request.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>requestTime</code></td><td><p><code>string</code></p><p>Read-only. The time at which the data transfer was requested.</p></td></tr></tbody></table>

## ApplicationDataTransfer

Template to map fields of ApplicationDataTransfer resource.

JSON representation

```
{
  "applicationId": string,
  "applicationTransferParams": [
    {
      object (ApplicationTransferParam)
    }
  ],
  "applicationTransferStatus": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>applicationId</code></td><td><p><code>string (int64 format)</code></p><p>The application's ID.</p></td></tr><tr><td><code>applicationTransferParams[]</code></td><td><p><code>object (<code>ApplicationTransferParam</code>)</code></p><p>The transfer parameters for the application. These parameters are used to select the data which will get transferred in context of this application. For more information about the specific values available for each application, see the <a href="https://developers.google.com/workspace/admin/data-transfer/v1/parameters">Transfer parameters</a> reference.</p></td></tr><tr><td><code>applicationTransferStatus</code></td><td><p><code>string</code></p><p>Read-only. Current status of transfer for this application.</p></td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>get</h3></td><td>Retrieves a data transfer request by its resource ID.</td></tr><tr><td><h3>insert</h3></td><td>Inserts a data transfer request.</td></tr><tr><td><h3>list</h3></td><td>Lists the transfers for a customer by source user, destination user, or status.</td></tr></tbody></table>
