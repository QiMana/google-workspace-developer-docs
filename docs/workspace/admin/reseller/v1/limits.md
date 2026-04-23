---
source: https://developers.google.com/workspace/admin/reseller/v1/limits
root: workspace
fetched_at: 2026-04-23T15:24:45.200Z
---

# Usage limits and quotas

Limits and quotas protect Google infrastructure from automated processes that use the Reseller API inappropriately. Excessive requests might result from a typo or an inefficient system design. To help ensure the health of the Google Workspace system, Google blocks traffic from specific sources when it reaches certain levels. This ensures that one developer's actions don't negatively impact the community.

## API request failures

If an API request fails, your application receives an HTTP status code. A `403` status code indicates incorrect input, and a `503` status code indicates that API quotas have been exceeded. Use these responses to detect errors and take action.

## Time-based errors

For time-based errors, especially `503` status codes, use an [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) algorithm. Wait for a small delay before retrying the failed call. For example, wait 5 seconds and retry. If successful, repeat the pattern for other threads. If the second request fails, scale back the frequency of requests until a call succeeds. Deciding on a retry limit, such as 5 to 7 times, is also recommended.

## Limits

| API limit categories | Limits |
| --- | --- |
| Subscription `purchaseOrderId` | This property accepts up to 80 plain text characters. |
| Subscription `maxResults` | The `maxResults` query string can be 1–100 results. The default is 20 results. |
| Transfer token (`customerAuthToken`) | A customer's transfer token is valid for 30 days after generation. |
| Maximum users for a customer | Depending on your contract, the maximum number of users can be 50,000 or the maximum defined in your reseller contract. |
| Unauthorized requests | Google doesn't allow unauthorized requests to the Reseller API. A request is unauthorized if no authorization token is provided. For more information, see [Learn about authentication & authorization](https://developers.google.com/workspace/guides/auth-overview). |

## Other types of limits

| Other types of limits | Limitations and guidelines |
| --- | --- |
| Data format | The data format is JavaScript Object Notation ([JSON](https://wikipedia.org/wiki/JSON)).      JSON is a common internet format for representing arbitrary data structures. It is a language-independent text format that uses conventions familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, and Python. |
| Time format | Dates and times use the [Epoch converter](https://www.epochconverter.com/) in milliseconds. This format applies to subscription creation time, plan commitment start and end times, and free trial end times. |
