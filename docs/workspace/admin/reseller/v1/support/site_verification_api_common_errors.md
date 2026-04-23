---
source: https://developers.google.com/workspace/admin/reseller/v1/support/site_verification_api_common_errors
root: workspace
fetched_at: 2026-04-23T15:24:47.295Z
---

# Troubleshoot Site Verification API issues

This page describes some common issues that you might encounter involving the Site Verification API as a reseller.

## 400:badRequest

This error occurs when Google can't find the verification token. To resolve this issue, verify that token has been successfully placed in the destination and continue to call this method with backoff delay until you receive a `200` response.

## 400:invalidParameter

This error occurs when the verification token is invalid. Call the `webResource.getToken` method to get a valid token.

## 403:usageLimits.dailyLimitExceeded

This error occurs when you've reached the daily quota for calls to this API. To resolve this issue, implement a backoff delay. For more information, see [Usage limits and quotas](../limits.md).
