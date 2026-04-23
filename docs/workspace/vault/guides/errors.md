---
source: https://developers.google.com/workspace/vault/guides/errors
root: workspace
fetched_at: 2026-04-23T15:32:03.652Z
---

# Error handling

This page describes the error codes you might get when using the Google Vault API, how to interpret them, and what to do when you get them. If you need more help with an error, review the [support resources](../support.md).

| **Error code** | **Description** | **Action** |
| --- | --- | --- |
| 400: Bad Request | This error code is returned when there is an error in the input request. | Check the request, make required changes to the request, and try again. |
| 401: Invalid Credentials | The access token is invalid or expired. | Refresh the access token and try again. |
| 404 | The specified resource was not found. This error code is returned when the request has a matter, hold, or account that doesn't exist. | None. |
| 409 | The specified resource already exists. | Try to get the resource again, and, if needed, perform an update. |
| 429 | The request exceeds a Vault API quota. | Review the [Vault API usage limits](../limits.md) and use an exponential backoff algorithm as described on that page. |
| 500 | An unexpected error happened while processing the request. | Retry with exponential backoff. |
