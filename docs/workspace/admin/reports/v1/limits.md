---
source: https://developers.google.com/workspace/admin/reports/v1/limits
root: workspace
fetched_at: 2026-04-23T15:24:38.026Z
---

# Limits and Quotas

Limits and quotas protect the Google infrastructure from an automated process that uses the Reports API in an inappropriate way. Excessive requests from an API might result from a harmless typo, or might result from an inefficiently designed system that makes needless API calls. Regardless of the cause, blocking traffic from a specific source once it reaches a certain level is necessary for the overall health of the Google Workspace system. It ensures that one developer's actions cannot negatively impact the larger community.

In the unlikely event that your API request fails, you'll receive an HTTP status code response. A status code of 403 has error information about incorrect input and an HTTP status code of 503 has error information indicating which API quotas have been exceeded. These responses allow your custom application to detect these errors and take appropriate action.

If your requests need to be completed in a fixed period of time, send your requests in parallel or use multiple threads in your Java or C# application. An example of parallel requests is requesting small batches of emails from different users rather than adding or removing lots of emails from one user simultaneously. In the case of threads, try starting with 10 threads, one thread per user email. Note, the thread recommendation has trade-offs and is not useful for all API situations. If the number of requests gets too high, quota errors will occur.

For all errors that are time based (maximum of N things for N seconds per thread), especially the 503 status code errors, we recommend your code catch the exception and, using an [exponential backoff](http://wikipedia.org/wiki/Truncated_binary_exponential_backoff) algorithm, wait for a small delay before retrying the failed call. A Reports API example for one thread is to wait 5 seconds and retry the failed call. If the request is successful, repeat this pattern for the other threads. If the second request is not successful, your application should scale back on the frequency of the request until a call is successful. For example, increase the initial 5 second delay to 10 seconds and retry your failed call again. Also, decide on a retry limit. For example retry a request 5 to 7 times with different delay times before your application returns an error to the user.

## Limits

| API Limit Categories | Limits |
| --- | --- |
| Report QPS and QPD rates | The API limits the number of requests for your Google Cloud project. The default value set in the Google Cloud console is 2,400 queries per minute per user per Google Cloud project. You can increase this limit from the [Admin SDK API Quotas page](https://console.cloud.google.com/apis/api/admin.googleapis.com/quotas) of your Google Cloud project.  If these limits are exceeded, the server returns an HTTP 503 status code. Use the [exponential backoff](http://wikipedia.org/wiki/Truncated_binary_exponential_backoff) algorithm when retrying your requests. |
| Additional limits for [`activities.list`](../reference/rest/v1/activities/list.md) | The `activities.list` API has an additional limit of 250 filter queries per minute (15,000 filter queries per hour). A filter query is an API request that contains at least one of the following query parameters: - `userKey` - `actorIpAddress` - `eventName` - `filters` - `orgUnitID` - `groupIdFilter` |
| API Quota Categories | Quotas |
| maxResults | The number of records listed in each page of an API's response is from 0 to 1000 records. The default is 1000 records. |

## Other Types of Limits

| Other Types of Limits | Limitations and Guidelines |
| --- | --- |
| Data format, default | The default data format is JSON. The API also supports the Atom format. |
| Unauthorized requests | Google does not allow unauthorized requests to the API. A request is considered unauthorized if no authorization token is provided. For more information, see [Authorizing requests](../../../guides/configure-oauth-consent.md). |
| Warning messages | - Data not available: The data for this application and for this date is not available and won't be available in the future. - Partial data available: The data for this application and for this date may be available in the future. For the Reports API's warning syntax, see the API Reference for [customers](../reference/rest/v1/customerUsageReports/get.md) and for [users](../reference/rest/v1/userUsageReport/get.md). |

## Best practices for activities.list

The [activities.list](../reference/rest/v1/activities/list.md) method is expected to be used for audit investigations. For the best performance, your **request should include a time range** using the `startTime` and `endTime` parameters. Narrower time ranges result in significantly faster response times. This method isn't intended for high-volume retrieval of audit logs. If you are regularly exhausting your activities.list filter request quota, then consider the following options:

- Setup [Google workspace logs export to BigQuery](https://support.google.com/a/answer/9079365) and use BigQuery's powerful [query APIs](https://cloud.google.com/bigquery/docs/reference/rest#rest-resource:-v2.jobs) to retrieve and analyze the data you need without any API quota constraints.
- Use non-filter requests with time range and perform client-side filtering (i.e. do the filtering logic in your application), instead of using filter requests. This lets you get over the 250 filter queries per minute limit but you are still subject to the 2,400 queries per minute per user per Google Cloud project limit.
