---
source: https://developers.google.com/workspace/drive/api/guides/limits
root: workspace
fetched_at: 2026-04-23T15:27:39.299Z
---

# Usage limits

As the Google Drive API is a shared service, we apply quotas and limitations to make sure it's used fairly by all users and to protect the overall performance of the Google Workspace system.

[Notifications](./push.md) delivered to the address specified when opening a notification channel don't count against your quota limits. However, calls to the [`changes.watch`](../reference/rest/v3/changes/watch.md), [`channels.stop`](../reference/rest/v3/channels/stop.md), and [`files.watch`](../reference/rest/v3/files/watch.md) methods do count against your quota.

If you exceed a quota, you'll receive a [`403: User rate limit exceeded`](./handle-errors.md#resolve_a_403_error_user_rate_limit_exceeded) HTTP status code response. Additional rate limit checks on the Drive backend might also generate a [`429: Too many requests`](./handle-errors.md#resolve_a_429_error_too_many_requests) response. If this happens, you should use an [exponential backoff algorithm](#exponential) and try again later. Provided you stay within the per-minute quotas below, there's no limit to the number of requests you can make per day.

The following table details the query limits:

<table><thead><tr><th colspan="2">Quotas</th></tr></thead><tbody><tr><td>Queries</td><td><table><tbody><tr><td>Per 60 seconds</td><td>12,000</td></tr><tr><td>Per 60 seconds per user</td><td>12,000</td></tr></tbody></table></td></tr></tbody></table>

## Resolve time-based quota errors

For all time-based errors (maximum of N requests per X minutes), we recommend your code catches the exception and uses a *truncated exponential backoff* to make sure your devices don't generate excessive load.

Exponential backoff is a standard error handling strategy for network applications. An exponential backoff algorithm retries requests using exponentially increasing wait times between requests, up to a maximum backoff time. If requests are still unsuccessful, it's important that the delays between requests increase over time until the request is successful.

### Example algorithm

An exponential backoff algorithm retries requests exponentially, increasing the wait time between retries up to a maximum backoff time. For example:

1. Make a request to Google Drive API.
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

All use of the Google Drive API is available at no additional cost. Exceeding the quota request limits doesn't incur extra charges and your account is not billed.

## Request a quota increase

Depending on your project's resource usage, you might want to request a quota adjustment. API calls by a service account are considered to be using a single account. Applying for an adjusted quota doesn't guarantee approval. Quota adjustment requests that would significantly increase the quota value can take longer to be approved.

Not all projects have the same quotas. As you increasingly use Google Cloud over time, your quota values might need to increase. If you expect a notable upcoming increase in usage, you can proactively [request quota adjustments](https://cloud.google.com/docs/quota#requesting_higher_quota) from the [Quotas page](https://console.cloud.google.com/iam-admin/quotas) in the Google Cloud console.

To learn more, see the following resources:

- [About quota adjustments](https://cloud.google.com/docs/quotas/overview#about_increase_requests)
- [View your current quota usage and limits](https://cloud.google.com/docs/quota#viewing_your_quota_console)
- [Request a higher quota limit](https://cloud.google.com/docs/quota#requesting_higher_quota)
