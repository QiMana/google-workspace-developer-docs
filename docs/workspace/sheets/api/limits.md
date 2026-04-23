---
source: https://developers.google.com/workspace/sheets/api/limits
root: workspace
fetched_at: 2026-04-23T15:31:25.301Z
---

# Usage limits

The Google Sheets API is a shared service, and we apply quotas and limitations to protect the overall performance of the Google Workspace system for all users.

## Quota limits

While Sheets API has no hard size limits for an API request, users might experience limits from different processing components not controlled by Google Sheets. To speed up requests, we recommend a 2 MB maximum payload.

Sheets API has per-minute quotas, and they're refilled every minute. For example, there's a read request limit of 300 per minute per project. If your app sends 350 requests in one minute, the additional 50 requests exceed the quota and generates a `429: Too many requests` HTTP status code response. If this happens, you should use an [exponential backoff algorithm](#exponential). After 1 minute, you can execute requests again.

The following table details the request limits:

<table><thead><tr><th colspan="2">Quotas</th></tr></thead><tbody><tr><td>Read requests</td><td><table><tbody><tr><td>Per minute per project</td><td>300</td></tr><tr><td>Per minute per user per project</td><td>60</td></tr></tbody></table></td></tr><tr><td>Write requests</td><td><table><tbody><tr><td>Per minute per project</td><td>300</td></tr><tr><td>Per minute per user per project</td><td>60</td></tr></tbody></table></td></tr></tbody></table>

For details about file limits, see [Files you can store in Google Drive](https://support.google.com/drive/answer/37603).

## Behavior and limitations

As you work with ((sheets\_api\_short)), note the following behavior and limitations that affect your quotas:

- Read requests are calls to any method that retrieves data from a spreadsheet, such as `get` or `search`. Write requests are calls to any method that changes a spreadsheet, such as `update`, `clear`, or `copyTo`.
- Users can submit multiple requests at the same time, as long as they're within the quota limit. Each [batch request](https://developers.google.com/workspace/sheets/api/guides/batch), including any subrequest, is counted as one API request toward your usage limit.
- All Sheets requests are applied atomically. That is, if any request is not valid then the entire update is unsuccessful and none of the (potentially dependent) changes are applied.
- There's a maximum time limit for processing one API request. When Sheets processes a request for more than 180 seconds, the request returns a timeout error.
- Provided that you stay within the per-minute quotas, there's no limit to the number of requests that you can make per day.

## Resolve time-based quota errors

For all time-based errors (maximum of N requests per X minutes), we recommend your code catches the exception and uses a *truncated exponential backoff* to make sure your devices don't generate excessive load.

Exponential backoff is a standard error handling strategy for network applications. An exponential backoff algorithm retries requests using exponentially increasing wait times between requests, up to a maximum backoff time. If requests are still unsuccessful, it's important that the delays between requests increase over time until the request is successful.

### Example algorithm

An exponential backoff algorithm retries requests exponentially, increasing the wait time between retries up to a maximum backoff time. For example:

1. Make a request to Google Sheets API.
2. If the request fails, wait 1 + `random_number_milliseconds` and retry the request.
3. If the request fails, wait 2 + `random_number_milliseconds` and retry the request.
4. If the request fails, wait 4 + `random_number_milliseconds` and retry the request.
5. And so on, up to a `maximum_backoff` time.
6. Continue waiting and retrying up to some maximum number of retries, but don't increase the wait period between retries.

where:

- The wait time is `min(((2^n)+random_number_milliseconds), maximum_backoff)`, with `n` incremented by 1 for each iteration (request).
- `random_number_milliseconds` is a random number of milliseconds less than or equal to 1,000. This helps to avoid cases in which many clients are synchronized by some situation and all retry at once, sending requests in synchronized waves. The value of `random_number_milliseconds` is recalculated after each retry request.
- `maximum_backoff` is typically 32 or 64 seconds. The appropriate value depends on the use case.

The client can continue retrying after it has reached the `maximum_backoff` time. Retries after this point don't need to continue increasing backoff time. For example, if a client uses a `maximum_backoff` time of 64 seconds, then after reaching this value, the client can retry every 64 seconds. At some point, clients should be prevented from retrying indefinitely.

The wait time between retries and the number of retries depend on your use case and network conditions.

## Pricing

All use of the Google Sheets API is available at no additional cost. Exceeding the quota request limits doesn't incur extra charges and your account is not billed.

## Request a quota increase

Depending on your project's resource usage, you might want to request a quota adjustment. API calls by a service account are considered to be using a single account. Applying for an adjusted quota doesn't guarantee approval. Quota adjustment requests that would significantly increase the quota value can take longer to be approved.

Not all projects have the same quotas. As you increasingly use Google Cloud over time, your quota values might need to increase. If you expect a notable upcoming increase in usage, you can proactively [request quota adjustments](https://cloud.google.com/docs/quota#requesting_higher_quota) from the [Quotas page](https://console.cloud.google.com/iam-admin/quotas) in the Google Cloud console.

To learn more, see the following resources:

- [About quota adjustments](https://cloud.google.com/docs/quotas/overview#about_increase_requests)
- [View your current quota usage and limits](https://cloud.google.com/docs/quota#viewing_your_quota_console)
- [Request a higher quota limit](https://cloud.google.com/docs/quota#requesting_higher_quota)

## Related topics

- [Developer metadata storage limits](https://developers.google.com/workspace/sheets/api/guides/metadata#metadata-limits)
