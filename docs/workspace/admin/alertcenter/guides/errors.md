---
source: https://developers.google.com/workspace/admin/alertcenter/guides/errors
root: workspace
fetched_at: 2026-04-23T15:23:21.288Z
---

# Error Handling

This page describes the error codes the Alert Center API returns, explains how to interpret them, and provides guidance on how to resolve them. [Learn more](https://developers.google.com/workspace/admin/alertcenter/support).

| **Error code** | **Description** | **Action** |
| --- | --- | --- |
| **400: Bad Request** | The input request is invalid. | Check the request, make the required changes, and try again. |
| **401: Invalid Credentials** | The access token is invalid or expired. | Refresh the access token and try again. |
| **404** | The specified resource was not found. This occurs when the requested alert doesn't exist. | Verify the alert exists (for example, by using the [`alerts.list`](https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/alerts/list) method) and the ID is correct. |
| **409** | The specified resource already exists. | Retrieve the resource and update it if necessary. |
| **500** | An unexpected error occurred while processing the request. | Retry the request with [exponential backoff](https://developers.google.com/api-client-library/java/google-http-java-client/backoff). |
| **503** | Rate limit exceeded. | Retry the request with [exponential backoff](https://developers.google.com/api-client-library/java/google-http-java-client/backoff). |
