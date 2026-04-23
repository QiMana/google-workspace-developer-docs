---
source: https://developers.google.com/apps-script/advanced/admin-sdk-license-manager
root: apps-script
fetched_at: 2026-04-23T15:17:59.840Z
---

# Admin SDK Enterprise License Manager Service

## Page Summary

- The Admin SDK Enterprise License Manager service in Apps Script allows domain admins to manage user licenses using the Admin SDK Enterprise License Manager API.
- This is an advanced service that requires explicit enablement before it can be used.
- Reference documentation and support information are available for detailed information and issue reporting.
- Sample code is provided to demonstrate common tasks such as listing and inserting license assignments.

in Apps Script to assign, update, retrieve, and delete user licenses.

The Admin SDK Enterprise License Manager service lets you use the [Admin SDK Enterprise License Manager API](https://developers.google.com/admin-sdk/licensing) in Google Apps Script. This API lets domain admins assign, update, retrieve, and delete user licenses.

This is an advanced service that must be [enabled before use](https://developers.google.com/apps-script/guides/services/advanced).

## Reference

For detailed information on this service, see the [reference documentation](https://developers.google.com/admin-sdk/licensing/v1/reference) for the Admin SDK Enterprise License Manager API. Like all advanced services in Apps Script, the Admin SDK Enterprise License Manager service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](https://developers.google.com/apps-script/guides/services/advanced#how_method_signatures_are_determined).

To report issues and find other support, see the [Admin SDK Enterprise License Manager support guide](https://developers.google.com/admin-sdk/licensing/support).

## Sample code

The following sample code uses [version 1](https://developers.google.com/admin-sdk/licensing/v1/reference) of the API.

### Get a list of license assignments for the domain

This sample logs the license assignments, including the product ID and the sku ID, for the users in the domain. Notice the use of page tokens to access the full list of results.

```
/**
 * Logs the license assignments, including the product ID and the sku ID, for
 * the users in the domain. Notice the use of page tokens to access the full
 * list of results.
 */
function getLicenseAssignments() {
  const productId = "Google-Apps";
  const customerId = "example.com";
  let assignments = [];
  let pageToken = null;
  do {
    const response = AdminLicenseManager.LicenseAssignments.listForProduct(
      productId,
      customerId,
      {
        maxResults: 500,
        pageToken: pageToken,
      },
    );
    assignments = assignments.concat(response.items);
    pageToken = response.nextPageToken;
  } while (pageToken);
  // Print the productId and skuId
  for (const assignment of assignments) {
    console.log(
      "userId: %s, productId: %s, skuId: %s",
      assignment.userId,
      assignment.productId,
      assignment.skuId,
    );
  }
}
```

### Insert a license assignment for a user

This sample demonstrates how to insert a license assignment for a user, for a given product ID and sku ID combination.

```
/**
 * Insert a license assignment for a user, for a given product ID and sku ID
 * combination.
 * For more details follow the link
 * https://developers.google.com/admin-sdk/licensing/reference/rest/v1/licenseAssignments/insert
 */
function insertLicenseAssignment() {
  const productId = "Google-Apps";
  const skuId = "Google-Vault";
  const userId = "marty@hoverboard.net";
  try {
    const results = AdminLicenseManager.LicenseAssignments.insert(
      { userId: userId },
      productId,
      skuId,
    );
    console.log(results);
  } catch (e) {
    // TODO (developer) - Handle exception.
    console.log("Failed with an error %s ", e.message);
  }
}
```
