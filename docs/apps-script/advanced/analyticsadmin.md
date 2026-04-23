---
source: https://developers.google.com/apps-script/advanced/analyticsadmin
root: apps-script
fetched_at: 2026-04-23T15:18:01.857Z
---

# Analytics Admin Service

## Page Summary

- The Analytics Admin service in Apps Script allows programmatic access to Google Analytics 4 configuration data via the Google Analytics Admin API v1.
- This is an advanced service that requires enablement before use and is only compatible with GA4 properties.
- The service uses the same objects, methods, and parameters as the public Google Analytics Admin API v1.
- Sample code demonstrates how to list Google Analytics accounts accessible by a user using the `accounts.list()` method.

programmatically within Google Apps Script using the Analytics Admin service.

The Analytics Admin service lets you use the [Google Analytics Admin API v1](https://developers.google.com/analytics/devguides/config/admin/v1) in Google Apps Script. The Google Analytics Admin API provides programmatic access to the Google Analytics 4 (GA4) configuration data and is only compatible with GA4 properties.

This is an advanced service that must be [enabled before use](https://developers.google.com/apps-script/guides/services/advanced).

## Reference

For detailed information on this service, see the [Google Analytics Admin API v1](https://developers.google.com/analytics/devguides/config/admin/v1/rest).

Like all advanced services in Apps Script, the AnalyticsAdmin service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](https://developers.google.com/apps-script/guides/services/advanced#how_method_signatures_are_determined).

To report issues and find other support, see the [Google Analytics Admin API v1 support page](https://developers.google.com/analytics/devguides/config/admin/v1/help).

## Sample code

### Run a report

The sample lists all the Google Analytics accounts available to a user by calling the [accounts.list()](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/list) method.

```
/**
 * Logs the Google Analytics accounts accessible by the current user.
 */
function listAccounts() {
  try {
    accounts = AnalyticsAdmin.Accounts.list();
    if (!accounts.items || !accounts.items.length) {
      console.log("No accounts found.");
      return;
    }

    for (let i = 0; i < accounts.items.length; i++) {
      const account = accounts.items[i];
      console.log(
        'Account: name "%s", displayName "%s".',
        account.name,
        account.displayName,
      );
    }
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log("Failed with error: %s", e.error);
  }
}
```
