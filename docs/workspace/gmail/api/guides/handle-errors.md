---
source: https://developers.google.com/workspace/gmail/api/guides/handle-errors
root: workspace
fetched_at: 2026-04-23T15:28:51.159Z
---

# Resolve errors

The Gmail API returns two levels of error information:

- HTTP error codes and messages in the header.
- A JSON object in the response body with additional details that can help you determine how to handle the error.

Your Gmail app should catch and handle all errors that might be encountered when using the REST API. This guide provides instructions on how to resolve specific Gmail API errors.

## HTTP status code summary

| Error code | Description |
| --- | --- |
| `200 - OK` | The request is successful (this is the standard response for successful HTTP requests). |
| `400 - Bad Request` | The request cannot be fulfilled due to a client error in the request. |
| `401 - Unauthorized` | The request contains invalid credentials. |
| `403 - Forbidden` | The request was received and understood, but the user doesn't have permission to perform the request. |
| `404 - Not Found` | The requested page couldn't be found. |
| `429 - Too Many Requests` | Too many requests to the API. |
| `500, 502, 503, 504 - Server Errors` | Unexpected error arises while processing the request. |

## 400 errors

These errors mean that the request has an error, often due to a missing required parameter.

### badRequest

This error can occur from any one of the following issues in your code:

- A required field or parameter hasn't been provided.
- The value supplied or a combination of provided fields is invalid.
- The attachment is invalid.

The following JSON sample is a representation of this error:

```
{
  "error": {
    "code": 400,
    "errors": [
      {
        "domain": "global",
        "location": "orderBy",
        "locationType": "parameter",
        "message": "Sorting is not supported for queries with fullText terms. Results are always in descending relevance order.",
        "reason": "badRequest"
      }
    ],
    "message": "Sorting is not supported for queries with fullText terms. Results are always in descending relevance order."
  }
}
```

To fix this error, check the `message` field and adjust your code accordingly.

## 401 errors

These errors mean the request doesn't contain a valid access token.

### authError

This error occurs when the access token you're using is either expired or invalid. This error can also be caused by missing authorization for the requested scopes. The following JSON sample is a representation of this error:

```
{
  "error": {
    "errors": [
      {
        "domain": "global",
        "reason": "authError",
        "message": "Invalid Credentials",
        "locationType": "header",
        "location": "Authorization",
      }
    ],
    "code": 401,
    "message": "Invalid Credentials"
  }
}
```

To fix this error, refresh the access token using the long-lived refresh token. If you're using a client library, it automatically handles token refresh. If this fails, direct the user through the OAuth flow, as described in [Learn about authentication and authorization](../../../guides/auth-overview.md).

For additional information on Gmail limits, see [Usage limits](../reference/quota.md).

## 403 errors

These errors occur when you exceed a usage limit or the user doesn't have the correct privileges. To determine the cause, evaluate the `reason` field of the returned JSON. This error occurs in the following situations:

- Your app can't be used within the authenticated user's domain.
- The daily limit was exceeded.
- The user rate limit was exceeded.
- The project rate limit was exceeded.

For more information, see [Usage limits](../reference/quota.md).

### dailyLimitExceeded

This error occurs when the API limit for your project was reached. The following JSON sample is a representation of this error:

```
{
  "error": {
    "errors": [
      {
        "domain": "usageLimits",
        "reason": "dailyLimitExceeded",
        "message": "Daily Limit Exceeded"
      }
    ],
    "code": 403,
    "message": "Daily Limit Exceeded"
  }
}
```

This error appears when the application's owner has set a quota limit to cap usage of a particular resource. To fix this error, raise the quota in the Google Cloud project. For more information, see [Manage quota limits](#manage-quotas).

### domainPolicy

This error occurs when the policy for the user's domain doesn't allow access to Gmail by your app. The following JSON is the representation of this error:

```
{
  "error": {
    "errors": [
      {
        "domain": "global",
        "reason": "domainPolicy",
        "message": "The domain administrators have disabled Gmail apps."
      }
    ],
    "code": 403,
    "message": "The domain administrators have disabled Gmail apps."
  }
}
```

To fix this error, try the following:

1. Inform the user that the domain doesn't allow your app to access Gmail.
2. Instruct the user to contact their domain administrator to request access for your app.

### rateLimitExceeded

This error indicates that the user has reached Gmail API's maximum request rate. This limit varies depending on the request type. The following JSON sample is a representation of this error:

```
{
  "error": {
  "errors": [
    {
    "domain": "usageLimits",
    "message": "Rate Limit Exceeded",
    "reason": "rateLimitExceeded",
    }
  ],
  "code": 403,
  "message": "Rate Limit Exceeded"
  }
}
```

To fix this error, try the following:

- Request a [quota increase](#manage-quotas).
- Use [exponential backoff](#exponential-backoff) to retry the request.

### userRateLimitExceeded

This error occurs when the per-user limit has been reached. The following JSON sample is a representation of this error:

```
{
  "error": {
  "errors": [
    {
    "domain": "usageLimits",
    "reason": "userRateLimitExceeded",
    "message": "User Rate Limit Exceeded"
    }
  ],
  "code": 403,
  "message": "User Rate Limit Exceeded"
  }
}
```

To fix this error, try to optimize your application code to make fewer requests or use [exponential backoff](#exponential-backoff) to retry the request.

## 429 errors

A 429 "Too many requests" error can occur due to daily per-user limits (including mail sending limits), bandwidth limits, or a per-user concurrent request limit. Information about each limit follows. However, each limit can be resolved either by [retrying failed requests](#exponential-backoff) or by splitting processing across multiple Gmail accounts.

Per-user limits cannot be increased for any reason. For more information about limits, see [Usage limits](../reference/quota.md).

### Mail sending limits

The Gmail API enforces the standard daily mail sending limits. These limits differ for paying Google Workspace users and trial gmail.com users. For these limits, refer to [Gmail sending limits in Google Workspace](https://support.google.com/a/answer/166852).

These limits are per-user and are shared by all of the user's clients, whether API clients, built-in or web clients, or SMTP MSA. If these limits are exceeded, an HTTP 429 "Too many requests: User-rate limit exceeded (Mail sending)" error is returned with a time to retry. Daily limits being exceeded might result in these errors for multiple hours before the request is accepted.

The mail sending pipeline is complex: once the user exceeds their quota, there can be a delay of several minutes before the API begins returning 429 error responses. You can't assume that a 200 response means the email was successfully sent.

### Bandwidth limits

The API has per-user upload and download [bandwidth limits](https://support.google.com/a/answer/1071518) that are equal to, but independent of, IMAP. These limits are shared across all Gmail API clients for a user.

These limits are typically only hit in exceptional or abusive situations. If these limits are exceeded, an HTTP 429 "Too many requests: User-rate limit exceeded" error is returned with a time to retry. Daily limits being exceeded might result in these errors for multiple hours before the request is accepted.

### Concurrent requests

The Gmail API enforces a per-user concurrent request limit (in addition to the per-user *rate* limit). This limit is shared by all Gmail API clients accessing a user and ensures that no API client is overloading a Gmail user mailbox or their backend server.

Making many parallel requests for a single user or sending batches with a large number of requests can trigger this error. A large number of independent API clients accessing the Gmail user mailbox simultaneously can also trigger this error. If this limit is exceeded, an HTTP 429 "Too many requests: Too many concurrent requests for user" error is returned.

## 500, 502, 503, 504 errors

These errors occur when an unexpected server error arises while processing the request. Various issues can cause these errors, including a request's timing overlapping with another request or a request for an unsupported action, such as attempting to update permissions for a single page in Google Sites instead of the entire site.

The following is a list of 5xx errors:

- 500 Backend error
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout

### backendError

This error occurs when an unexpected error arises while processing the request. The following JSON sample is a representation of this error:

```
{
  "error": {
  "errors": [
    {
    "domain": "global",
    "reason": "backendError",
    "message": "Backend Error",
    }
  ],
  "code": 500,
  "message": "Backend Error"
  }
}
```

To fix this error, use [exponential backoff](#exponential-backoff) to retry the request.

## Retry failed requests to resolve errors

You can periodically retry a failed request over an increasing amount of time to handle errors related to rate limits, network volume, or response time. For example, you might retry a failed request after one second, then after two seconds, and then after four seconds. This method is called *exponential backoff*, and it's used to improve bandwidth usage and maximize throughput of requests in concurrent environments.

Start retry periods at least one second after the error.

## Manage quota limits

To view or change usage limits for your project, or to request an increase to your quota, do the following:

1. If you don't already have a [billing account](https://cloud.google.com/billing/docs/how-to/manage-billing-account) for your project, then create one.
2. [Visit the Enabled APIs page of the API library](https://console.cloud.google.com/apis/enabled) in the API Console, and select an API from the list.
3. To view and change quota-related settings, select **Quotas**. To view usage statistics, select **Usage**.

For more information, see [View and manage quotas](https://docs.cloud.google.com/docs/quotas/view-manage).

## Batch requests

Using batch requests is encouraged; however, larger batch sizes are likely to trigger rate limiting. Sending batches larger than 50 requests isn't recommended. For information on how to batch requests, refer to [Batch requests](./batch.md).

## Related topics

- [Improve performance](./performance.md)
- [Troubleshoot authentication and authorization issues](../troubleshoot-authentication-authorization.md)
