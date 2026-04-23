---
source: https://developers.google.com/apps-script/advanced/admin-sdk-reseller
root: apps-script
fetched_at: 2026-04-23T15:18:01.419Z
---

# Admin SDK Google Workspace Reseller Service

## Page Summary

- The Admin SDK Google Workspace Reseller service in Apps Script allows authorized reseller admins to manage Google Workspace subscriptions.
- This is an advanced service that must be enabled before use.
- The service uses the same objects, methods, and parameters as the public Admin SDK Reseller API.
- Sample code is provided to demonstrate getting a list of subscriptions.

in Apps Script to manage customer orders and Google Workspace subscriptions.

The Admin SDK Google Workspace Reseller service lets you use the [Admin SDK Reseller API](../../workspace/admin/reseller/v1/how-tos/concepts.md) in Google Apps Script. This API allows authorized reseller admins to place customer orders and manage Google Workspace monthly post-pay subscriptions.

This is an advanced service that must be [enabled before use](../guides/services/advanced.md).

## Reference

For detailed information on this service, see the [reference documentation](../../workspace/admin/reseller/reference/rest.md) for the Admin SDK Google Workspace Reseller API. Like all advanced services in Apps Script, the Admin SDK Google Workspace Reseller service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](../guides/services/advanced.md#how_method_signatures_are_determined).

To report issues and find other support, see the [Admin SDK Reseller support guide](../../workspace/admin/support.md).

## Sample code

The following sample code uses [version 1](../../workspace/admin/reseller/reference/rest.md) of the API.

### Get a list of subscriptions

This sample logs the list of subscriptions, including the customer ID, date created, plan name, and the SKU ID. Notice the use of page tokens to access the full list of results.

```
/**
 * Logs the list of subscriptions, including the customer ID, date created, plan
 * name, and the sku ID. Notice the use of page tokens to access the full list
 * of results.
 * @see https://developers.google.com/admin-sdk/reseller/reference/rest/v1/subscriptions/list
 */
function getSubscriptions() {
  let result;
  let pageToken;
  do {
    result = AdminReseller.Subscriptions.list({
      pageToken: pageToken,
    });
    for (const sub of result.subscriptions) {
      const creationDate = new Date();
      creationDate.setUTCSeconds(sub.creationTime);
      console.log(
        "customer ID: %s, date created: %s, plan name: %s, sku id: %s",
        sub.customerId,
        creationDate.toDateString(),
        sub.plan.planName,
        sub.skuId,
      );
    }
    pageToken = result.nextPageToken;
  } while (pageToken);
}
```
