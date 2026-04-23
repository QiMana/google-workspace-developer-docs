---
source: https://developers.google.com/workspace/admin/licensing/v1/limits
root: workspace
fetched_at: 2026-04-23T15:23:59.373Z
---

# Limits and Quotas

Limits and quotas protect the Google infrastructure from automated processes that use the Enterprise License Manager API inappropriately. Excessive requests might result from a typo or an inefficiently designed system. Blocking traffic from a specific source once it reaches a certain level is necessary for the overall health of the Google Workspace system. It ensures that one developer's actions don't negatively impact the larger community.

If your API request fails, you receive an HTTP status code response. A status code of 403 has error information about incorrect input, and an HTTP status code of 503 indicates which API quotas were exceeded. These responses allow your custom application to detect these errors and take appropriate action.

If your requests must be completed in a fixed period of time, send your requests [batched together](./how-tos/batch.md). Depending upon your API's purpose and if the number of requests gets too high, quota errors occur.

If you aren't able to use the recommended API batched requests feature, use the exponential backoff algorithm. For all errors that are time-based, especially the 503 status code errors, we recommend your code catch the exception and, using an [exponential backoff](http://wikipedia.org/wiki/Truncated_binary_exponential_backoff) algorithm, wait for a small delay before retrying the failed call. For example, wait 5 seconds and retry the failed call. If the request is successful, repeat this pattern for other threads. If the request isn't successful, scale back on the frequency of the request until a call is successful. For example, increase the initial 5-second delay to 10 seconds and retry your failed call again. Decide on a retry limit, such as 5–7 times, before returning an error to the user.

| API quota categories | Quotas |
| --- | --- |
| Queries per second (QPS) | The QPS quota is 1. |

| API limit categories | Limits |
| --- | --- |
| maxResults query string | The maximum size of a maxResults is 100. |

| Other types of limits | Limitations and guidelines |
| --- | --- |
| Batch requests | The API supports sending \[batch requests\](/workspace/admin/licensing/v1/how-tos/batch.html). |
| Data format in API responses | The response's data format is JavaScript Object Notation (\[JSON\](http://json.org/)). |
| Enabling the Enterprise License Manager API | The Directory API must be enabled before making calls to the Enterprise License Manager API. In the Google Admin console, enable the Directory API. In addition, the Google Groups service must be enabled and activated. |
| Unauthorized requests | The API doesn't accept unauthorized requests. A request is considered unauthorized if no authorization token is provided. For more information, see \[Authorizing Requests\](/workspace/admin/licensing/v1/how-tos/authorizing.html). |
