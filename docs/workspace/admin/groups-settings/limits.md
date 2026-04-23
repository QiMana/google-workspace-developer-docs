---
source: https://developers.google.com/workspace/admin/groups-settings/limits
root: workspace
fetched_at: 2026-04-23T15:23:56.150Z
---

# API usage limits

Limits and quotas protect the Google infrastructure from an automated process that uses the Groups Settings API in an inappropriate way. Excessive requests from an API might result from a harmless typo or an inefficiently designed system that makes needless API calls. Regardless of the cause, the overall health of the Google Workspace system requires blocking traffic from a specific source once it reaches a certain level.

## API request failures

In the unlikely event that your API request fails, your application receives an HTTP status code response. An HTTP status code of `403` has error information indicating which API quotas have been exceeded. The response lets your custom application detect errors and take appropriate action.

## Time sensitive requests

If your requests need to be completed in a fixed period of time, send your requests in parallel or use multiple threads in your Java or C# application. For example, break your requests by month or another time period. In the case of threads, try starting with 10 threads, one thread per request. The thread recommendation has tradeoffs and is not useful for all API situations. If the number of requests gets too high, quota errors occur.

## Time-based errors

For all errors that are time based (maximum of N things for X seconds per thread), especially the `503` status code errors, we recommend that your code catch the exception, and by using an [exponential backoff](http://en.wikipedia.org/wiki/Truncated_binary_exponential_backoff) algorithm, wait for a small delay before retrying the failed call. A Groups Settings API example for one thread is to wait 5 seconds and retry the failed call. If the request is successful, repeat this pattern for the other threads. If the second request is not successful, your application should scale back the frequency of the request until a call is successful. For example, increase the initial 5-second delay to 10 seconds and retry your failed call again. Also, decide on a retry limit. For example, retry a request 5–7 times with different delay times before your application returns an error to the user.

## Quotas

| API quota categories | Quotas |
| --- | --- |
| Queries per day | You can make up to 100,000 queries per day. If you need capacity beyond this limit, you can send a request from the [Quotas](https://console.cloud.google.com/iam-admin/quotas) page in the Google Cloud console. |
| Group description, maximum size | You can enter a group description up to 4,096 characters. |
| Group name, maximum size | A group's name can have up to 60 characters. |
| `defaultMessageDenyNotificationText` | The notification text can be up to 10,000 characters. To learn more about the `defaultMessageDenyNotificationText` property, see the [API reference](./v1/reference.md). |
| `maxMessageBytes` | The default maximum message size is 1 MB. To learn more about the `maxMessageBytes` property, see the [API reference](./v1/reference.md). |

## Limits

| Types of limits | Limitations and guidelines |
| --- | --- |
| Data format, default | The default data format is JSON. The API also supports the Atom format. Both the JSON and Atom data formats support full read-write capabilities. For more information, see [JSON and Atom data formats](./concepts.md#json-and-atom-data-formats). |
| Groups Settings API, enablement | You must turn on the Directory API before making calls to the Groups Settings API. For more information, see [Enable Google Workspace APIs.](../../guides/enable-apis.md) |
