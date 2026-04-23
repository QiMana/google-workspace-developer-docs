---
source: https://developers.google.com/workspace/admin/reseller/v1/support/reseller_api_common_errors
root: workspace
fetched_at: 2026-04-23T15:24:46.920Z
---

# Troubleshoot Reseller API issues

This page describes some common issues that you might encounter involving the Reseller API.

## 400:badRequest

This error occurs when the subscription is either suspended or cancelled. For more information, see [Activate a subscription](../how-tos/change-subscription-status.md#activate_a_subscription).

## 400:invalid

This error can occur for a number of different reasons.

If you're using the `customers.insert` method, one of the following customer object parameters are invalid:

- Invalid `postalAddress.postalCode`.
- Ineligible `postalAddress.countryCode` for reselling Google Workspace.
- `alternateEmail` can't be at the same domain as `customerDomain`

To resolve this issue, verify that required parameters are present and valid for the customer.

If you're using the `subscriptions.changeSeats` method, one of the following issues might have caused this error:

- You can't reduce seats for annual plan types. Consider [changing the renewal settings](../../reference/rest/v1/subscriptions/changeRenewalSettings.md). for the subscription to automatically set (at time of renewal) seats equal to the amount of active users on the account.
- The seat amount that you requested is less than the current users on the account. Message customer that they must remove a user before they can decrease their seat count.
- You increased the incorrect seat parameter. For the `FLEX` plan, increase the `maximumNumberOfSeats` parameter and for the `ANNUAL` plan, increase the `numberOfSeats` parameter.
- You attempted to change the `licensedNumberOfSeats` parameter, which is a read-only parameter.
- During the trial period, customers have a maximum seat limit of 10. [Start a paid service from a free trial subscription](../how-tos/manage_subscriptions.md#start_paid_service_from_a_free_trial_subscription) to immediately end the trial period, start billing, and remove the 10 seat maximum limit.

## 403:forbidden

This error occurs when you don't own the customer or your customer has disabled reseller access to their Admin console.

## 403:usageLimits.dailyLimitExceeded

This error occurs when you've reached the daily quota for calls to this API. To resolve this issue, implement a backoff delay. For more information, see [Usage limits and quotas](../limits.md).

If you're attempting to retrieve many subscriptions, consider using the `subscriptions.list` method without specifying the `customerId` or `subscriptionId` parameters. You can return a maximum of 100 subscriptions per call. Use the `pageToken` parameter to continue retrieving all subscriptions under a reseller account.

## 403:usageLimits.accessNotConfigured

This error occurs when the API isn't enabled in the Google Cloud project. To resolve this issue, go to the Google Cloud console, and enable the API. For more information, see [Enable Google Workspace APIs](../../../../guides/enable-apis.md).

## 404:notFound

When using the `customers.get` method, this error means that the customer or domain doesn't exist for any Google Workspace account and that the domain is available.

## 412:conditionNotMet

This error is caused by a number of different issues.

If you encounter this error when using the `subscriptions.changeRenewalSettings` method, make sure that you're only calling this method on the following commitment payment plans:

- `ANNUAL_MONTHLY_PAY`
- `ANNUAL_YEARLY_PAY`

If you encounter this error when using the `subscriptions.delete` method, it means that there's no administrator user present on the Google Workspace account. To resolve this issue, add a temporary administrator user and try again.

If you encounter this error when using the `subscriptions.insert` method, it means that you either can't resell the selected SKU or to the emerging market customer. To resolve this issue, accept the applicable terms of service.

## 429:usageLimits.quotaExceeded

This error occurs when you've surpassed the queries per second limit. To resolve this issue, implement a backoff retry strategy or cache results to make fewer API calls. For more information, see [Usage limits and quotas](../limits.md).

If you're attempting to retrieve many subscriptions, consider using the `subscriptions.list` method without specifying the `customerId` or `subscriptionId` parameters. You can return a maximum of 100 subscriptions per call. Use the `pageToken` parameter to continue retrieving all subscriptions under a reseller account.
