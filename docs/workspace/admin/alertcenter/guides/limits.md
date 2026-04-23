---
source: https://developers.google.com/workspace/admin/alertcenter/guides/limits
root: workspace
fetched_at: 2026-04-23T15:23:21.046Z
---

# Usage limits and quotas

book\_path: /workspace/admin/\_book.yaml project\_path: /workspace/admin/\_project.yaml

Limits and quotas protect the Google infrastructure from an automated process that uses the Alert Center API in an inappropriate way. Excessive requests from an API might result from a harmless typo, or might result from an inefficiently designed system that makes needless API calls. Regardless of the cause, blocking traffic from a specific source once it reaches a certain level is necessary for the overall health of the Google Workspace system. It helps ensure that one developer's actions cannot negatively impact the larger community.

In the unlikely event that your API request fails, you'll receive an HTTP status code response. A status code of `403` has error information about incorrect input and an HTTP status code of `503` has error information indicating which API quotas have been exceeded. These responses allow your custom application to detect these errors and take appropriate action.

If your requests need to be completed in a fixed period of time, send your requests in parallel or use multiple threads in your Java or C# application. An example of parallel requests is requesting small batches of emails from different users rather than adding or removing lots of emails from one user simultaneously. In the case of threads, try starting with 10 threads, one thread per user email. Note, the thread recommendation has trade-offs and is not useful for all API situations. If the number of requests gets too high, quota errors will occur.

For all errors that are time based (maximum of *N* things for *N* seconds per thread), especially the 503 status code errors, we recommend your code catch the exception and, using an [exponential backoff](http://wikipedia.org/wiki/Truncated_binary_exponential_backoff) algorithm, wait for a small delay before retrying the failed call. A Alert Center API example for one thread is to wait 5 seconds and retry the failed call. If the request is successful, repeat this pattern for the other threads. If the second request is not successful, your application should scale back on the frequency of the request until a call is successful. For example, increase the initial 5 second delay to 10 seconds and retry your failed call again. Also, decide on a retry limit. For example retry a request 5 to 7 times with different delay times before your application returns an error to the user.

| API Limit Categories | Limits |
| --- | --- |
| Alert Center QPS and QPD rates | The API limits the number of requests for your Google Cloud project. The API project's maximum number of requests per second (project QPS) is 1000. And, the maximum number of requests per user per second (user QPS) is 150.  If these limits are exceeded, the server returns an HTTP `503` status code. Use the [exponential backoff](http://wikipedia.org/wiki/Truncated_binary_exponential_backoff) algorithm when retrying your requests. |

| Other Types of Limits | Limitations and Guidelines |
| --- | --- |
| Data format, default | The default data format is JSON. |
| Unauthorized requests | Google does not allow unauthorized requests to this API. A request is considered unauthorized if no authorization token is provided. For more information, see [Authorizing requests](https://developers.google.com/workspace/admin/alertcenter/guides/auth). |

## Request a per-project quota increase

Depending on your project's resource usage, you might want to request a quota adjustment. API calls by a service account are considered to be using a single account. Applying for an adjusted quota doesn't guarantee approval. Quota adjustment requests that would significantly increase the quota value can take longer to be approved.

Not all projects have the same quotas. As you increasingly use Google Cloud over time, your quota values might need to increase. If you expect a notable upcoming increase in usage, you can proactively [request quota adjustments](https://cloud.google.com/docs/quota#requesting_higher_quota) from the [Quotas page](https://console.cloud.google.com/iam-admin/quotas) in the Google Cloud console.

To learn more, see the following resources:

- [About quota adjustments](https://cloud.google.com/docs/quotas/overview#about_increase_requests)
- [View your current quota usage and limits](https://cloud.google.com/docs/quota#viewing_your_quota_console)
- [Request a higher quota limit](https://cloud.google.com/docs/quota#requesting_higher_quota)
