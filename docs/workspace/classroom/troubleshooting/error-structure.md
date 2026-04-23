---
source: https://developers.google.com/workspace/classroom/troubleshooting/error-structure
root: workspace
fetched_at: 2026-04-23T15:26:06.404Z
---

# Google Classroom API error structure

The Classroom API returns error information that can help developers debug issues and provide helpful, actionable information to end users. This guide explains how to parse error information returned from the API.

The Classroom API returns two levels of error information:

- HTTP error code in the header.
- An object in the response body with additional details.

## Error message structure

Errors returned in the response body include the following fields:

- `code`: The numerical HTTP error code. For example, `403`.
- `message`: Additional details about the error. When available, the error message is prepended with `@` and a specific error type. For example, `@ClassroomApiDisabled`.
- `status`: The HTTP request status. For example, `PERMISSION_DENIED` or `NOT_FOUND`.

If a request failed with a [`ClassroomApiDisabled`](https://developers.google.com/workspace/classroom/troubleshooting/common-errors#classroom-api-disabled) error, the response would be:

```
{
  "error": {
    "code": 403,
    "message": "@ClassroomApiDisabled The user is not permitted to access the Classroom API.",
    "status": "PERMISSION_DENIED"
  }
}
```

You can use the response body to help you debug the cause of the error and provide helpful information to users. Include a trailing space when checking for a specific error message to avoid matching other values that start with the same string. In the provided error example, you can check if the message field begins with `"@ClassroomApiDisabled "` to present appropriate information to users.

Reference the [Common errors](https://developers.google.com/workspace/classroom/troubleshooting/common-errors) page for information on some errors that can be returned by the Classroom API.
