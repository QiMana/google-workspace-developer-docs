---
source: https://developers.google.com/workspace/classroom/reference/limits
root: workspace
fetched_at: 2026-04-23T15:25:50.810Z
---

# Usage Limits

Quota is checked on a **60-second moving average**, which **allows for spikes in usage**. By default, the Classroom API is subject to the limits in the following table:

| Limit | Quota Standard |
| --- | --- |
| Queries per day per client | 4,000,000 (Avg. 46 QPS) |
| Queries per minute per client | 3,000 (50 QPS) |
| Queries per minute per user | 1,200 (20 QPS) |

The permitted QPS may be increased or decreased depending on a number of operational factors.

If you need to make more requests than the limits applied to your project:

1. First, ensure that you respond to retryable errors (such as the `RESOURCE_EXHAUSTED` error that is returned when a request exceeds your limits) by retrying the request, preferably using exponential backoff.
2. If you are polling for changes on an endpoint where this is offered, consider using [push notifications](../best-practices/push-notifications.md) instead.
3. If you still need to make more requests than the limits assigned to your project, see below for instructions on requesting higher limits.

To view or change usage limits for your project, or to request an increase to your quota, do the following:

1. If you don't already have a [billing account](https://cloud.google.com/billing/docs/how-to/manage-billing-account) for your project, then create one.
2. [Visit the Enabled APIs page of the API library](https://console.cloud.google.com/apis/enabled) in the API Console, and select an API from the list.
3. To view and change quota-related settings, select **Quotas**. To view usage statistics, select **Usage**.
