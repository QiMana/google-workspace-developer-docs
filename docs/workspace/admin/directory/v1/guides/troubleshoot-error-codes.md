---
source: https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes
root: workspace
fetched_at: 2026-04-23T15:23:50.527Z
---

# Troubleshoot error codes

This page describes some common error codes that you might encounter while using the Directory API.

## 503 Service unavailable

While using the `nextPageToken` method to retrieve a large list of users or devices, you might encounter this error if the request takes longer than 60 minutes. This error is due to a limitation of the Directory API.

The following is the full error response:

```
{
  "error": {
    "code": 503,
    "message": "Service unavailable. Please try again",
    "errors": [
      {
        "message": "Service unavailable. Please try again",
        "domain": "global",
        "reason": "backendError"
      }
    ]
  }
}
```

To avoid this error, you can reduce the number of devices or users by querying with filters so that the individual operations don't take over an hour to complete. This approach requires multiple queries. For more information, see [Search for devices](https://developers.google.com/workspace/admin/directory/v1/guides/search-devices).
