---
source: https://developers.google.com/workspace/admin/data-transfer/v1/transfer-data
root: workspace
fetched_at: 2026-04-23T15:23:32.018Z
---

# Transfer data

To use the Data Transfer API, you define a transfer and then initiate it using the `insert` method. The transfer is defined in terms of one or more applications whose data will be transferred, and can include [application-specific parameters](https://developers.google.com/workspace/admin/data-transfer/v1/parameters).

To transfer data:

1. Determine the applications for which you want to transfer data.
2. Define a [`DataTransfer` resource](https://developers.google.com/workspace/admin/data-transfer/reference/rest/v1/transfers) that specifies the source and destination users and the applications for which to transfer data.
3. Initiate the transfer by using the [`insert()` method](https://developers.google.com/workspace/admin/data-transfer/reference/rest/v1/transfers/insert).

For example, the following JSON request body transfers a Google Calendar from the source user (`SOURCE_USER_ID`) to the destination user (`DESTINATION_USER_ID`). You can retrieve the user IDs for each owner by calling the [`user.get()` method](https://developers.google.com/workspace/admin/directory/reference/rest/v1/users/get) of the Directory API and providing their email address or email alias.

```
{
  "oldOwnerUserId": "SOURCE_USER_ID",
  "newOwnerUserId": "DESTINATION_USER_ID",
  "applicationDataTransfers": [
    {
      "applicationId": "435070579839",
      "applicationTransferParams": [
        {
          "key": "RELEASE_RESOURCES",
          "value": [
            "TRUE"
          ]
        }
      ]
    }
  ]
}
```

## Related topics

The Data Transfer API includes additional methods and resources to help you construct and administer transfers:

- [List](https://developers.google.com/workspace/admin/data-transfer/v1/reference/applications/list) applications available for data transfer.
- [Get](https://developers.google.com/workspace/admin/data-transfer/v1/reference/applications/get) application information by application ID.
- [List](https://developers.google.com/workspace/admin/data-transfer/v1/reference/transfers/list) transfers by source user, destination user, or status.
- [Get](https://developers.google.com/workspace/admin/data-transfer/v1/reference/transfers/get) a transfer request by resource ID.
