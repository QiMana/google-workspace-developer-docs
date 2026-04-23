---
source: https://developers.google.com/workspace/admin/data-transfer/v1/limits
root: workspace
fetched_at: 2026-04-23T15:23:32.826Z
---

# Usage limits and quotas

Limits and quotas protect the Google infrastructure from an automated process that uses the Data Transfer API in an inappropriate way. Excessive requests from an API might result from a harmless typo, or might result from an inefficiently designed system that makes needless API calls. Regardless of the cause, blocking traffic from a specific source when it reaches a certain level is necessary for the overall health of the Google Workspace system. It ensures that one developer's actions can't negatively impact the larger community.

## API request failures

In the unlikely event that your API request fails, your application receives an HTTP status code response. A status code of `403` has error information about incorrect input, and an HTTP status code of `503` has error information indicating which API quotas have been exceeded. These responses let your custom application detect these errors and take appropriate action.

## Complete requests in a fixed time period

If your requests need to be completed in a fixed period of time, send your requests in parallel or use multiple threads in your Java or C# application. For example, break your requests by month or another time period. In the case of threads, try starting with 10 threads, one thread per request. The thread recommendation has trade-offs and isn't useful for all API situations. If the number of requests gets too high, quota errors will occur.

## Time-based errors

For all errors that are time based (maximum of N things for X seconds per thread), especially the `503` status code errors, we recommend that your code catch the exception and by using an [exponential backoff](http://wikipedia.org/wiki/Truncated_binary_exponential_backoff) algorithm, wait for a small delay before retrying the failed call. A Data Transfer API example for one thread is to wait 5 seconds and retry the failed call. If the request is successful, repeat this pattern for the other threads. If the second request is not successful, your application should scale back on the frequency of the request until a call is successful. For example, increase the initial 5 second delay to 10 seconds and retry your failed call again. Also, decide on a retry limit. For example retry a request 5 to 7 times with different delay times before your application returns an error to the user.

## Limits

| API limit categories | Limits |
| --- | --- |
| Queries per second (QPS) | The developer project limit is 10 queries per second (QPS) per account. |

## Quotas

| API quota categories | Quotas |
| --- | --- |
| Maximum API requests per day | The maximum API requests per day is 500,000. |
| Archive, expiration of messages | Group archives don't expire. Messages remain in an archive until the group is deleted. The email retention policy doesn't affect messages in a group's archive. |
| Mail message size | The maximum mail message size is 25MB. This limit includes the message's metadata headers, body, and any attachments. |

## Other types of limits

| Other types of limits | Limitations and guidelines |
| --- | --- |
| Content-Type header formats | An email message must be in the standard [RFC 822 text format](http://www.w3.org/Protocols/rfc822/). A request's `Content-Type` header format for uploading migrated emails use the `Content-type: message/rfc822` header. |
| Data format in API responses | The response's data format is Javascript Object Notation ([JSON](http://json.org/)). |
| Data location policies | The Data Transfer API doesn't support data location policies requiring data be stored in specific geographic or political boundaries for contractual reasons. Don't use the Data Transfer API if data location is required for your account. |
| Parallel message insertions | The Data Transfer API supports parallel requests for email insertions into different group archives. But the Data Transfer API doesn't support parallel message insertions into the same group archive. Nor are batch requests supported in this version of the API. |
| Unauthorized requests | The Data Transfer API doesn't accept any unauthorized requests. A request is considered unauthorized if no authorization token is provided. |
