---
source: https://developers.google.com/workspace/admin/reseller/v1/support/enterprise_license_manager_api_common_errors
root: workspace
fetched_at: 2026-04-23T15:24:46.497Z
---

# Troubleshoot Enterprise License Manager API issues

This page describes some common issues that you might encounter involving the Enterprise License Manager API as a reseller.

## 403:usageLimits.accessNotConfigured

This error occurs when the API isn't enabled in the Google Cloud project. To resolve this issue, go to the Google Cloud console, and enable the API. For more information, see [Enable Google Workspace APIs](../../../../guides/enable-apis.md).

## 403:domainCannotUseApis

This error occurs when your customer has disable reseller access to the Admin SDK API. To resolve this issue, ask your customer to re-enable access to the Admin SDK API. For more information, see [Control API access](https://support.google.com/a/answer/60757).

## 403:forbidden

This error occurs when you don't own the customer or your customer has disabled reseller access to their Admin console.

To resolve this issue, either call the [`customers.get` method](../../reference/rest/v1/customers/get.md) before making calls to verify reseller ownership of customer or ask your customer to re-enable reseller access to their Admin console. For more information, see [Access a customer's Admin console](https://support.google.com/work/reseller/answer/6184379).
