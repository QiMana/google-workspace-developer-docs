---
source: https://developers.google.com/apps-script/advanced/adsense
root: apps-script
fetched_at: 2026-04-23T15:17:59.494Z
---

# AdSense Service

## Page Summary

- The AdSense service in Apps Script uses the AdSense Management API to allow users to access account structure information and run performance reports.
- This is an advanced service that requires explicit enabling before it can be used.
- Detailed information about the service, including objects, methods, and parameters, can be found in the reference documentation for the AdSense Management API.
- Sample code is provided for common tasks like listing accounts, ad clients, and ad units, as well as generating reports.

the AdSense Management API and manage your AdSense account and reports.

The AdSense service lets you use the [AdSense Management API](https://developers.google.com/adsense/management) in Google Apps Script. This API gives AdSense customers the ability to get information about the structure of their account and run reports on how it is performing.

This is an advanced service that must be [enabled before use](https://developers.google.com/apps-script/guides/services/advanced).

## Reference

For detailed information on this service, see the [reference documentation](https://developers.google.com/adsense/management/reference/rest) for the AdSense Management API. Like all advanced services in Apps Script, the AdSense service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](https://developers.google.com/apps-script/guides/services/advanced#how_method_signatures_are_determined).

To report issues and find other support, ask on Stack Overflow using the [adsense-api](https://stackoverflow.com/questions/tagged/adsense-api) tag.

## Sample code

The following sample code uses [version 2](https://developers.google.com/adsense/management/reference/rest) of the API.

### List accounts

This sample lists all of the accounts available to the user. The accounts are specified as resource names, for example, `accounts/pub-12345`, that can be used in other methods, such as [listing ad clients](#list_ad_clients). Notice the use of page tokens to access the full list of results.

```
/**
 * Lists available AdSense accounts.
 */
function listAccounts() {
  let pageToken;
  do {
    const response = AdSense.Accounts.list({ pageToken: pageToken });
    if (!response.accounts) {
      console.log("No accounts found.");
      return;
    }
    for (const account of response.accounts) {
      console.log(
        'Found account with resource name "%s" and display name "%s".',
        account.name,
        account.displayName,
      );
    }
    pageToken = response.nextPageToken;
  } while (pageToken);
}
```

### List ad clients

This sample lists all of the ad clients for a given account. Specify the account as a resource name, for example, `accounts/pub-12345`. You can get the account resource name by using the [List accounts](#list_accounts) sample code.

```
/**
 * Logs available Ad clients for an account.
 *
 * @param {string} accountName The resource name of the account that owns the
 *     collection of ad clients.
 */
function listAdClients(accountName) {
  let pageToken;
  do {
    const response = AdSense.Accounts.Adclients.list(accountName, {
      pageToken: pageToken,
    });
    if (!response.adClients) {
      console.log("No ad clients found for this account.");
      return;
    }
    for (const adClient of response.adClients) {
      console.log(
        'Found ad client for product "%s" with resource name "%s".',
        adClient.productCode,
        adClient.name,
      );
      console.log(
        "Reporting dimension ID: %s",
        adClient.reportingDimensionId ?? "None",
      );
    }
    pageToken = response.nextPageToken;
  } while (pageToken);
}
```

### List ad units

This sample lists all of the ad units for a given ad client. Specify the ad client as a resource name, such as `accounts/pub-12345/adclients/ca-pub-12345`. You can get the ad client resource name by using the [List ad clients](#list_ad_clients) sample code.

```
/**
 * Lists ad units.
 * @param {string} adClientName The resource name of the ad client that owns the collection
 *     of ad units.
 */
function listAdUnits(adClientName) {
  let pageToken;
  do {
    const response = AdSense.Accounts.Adclients.Adunits.list(adClientName, {
      pageSize: 50,
      pageToken: pageToken,
    });
    if (!response.adUnits) {
      console.log("No ad units found for this ad client.");
      return;
    }
    for (const adUnit of response.adUnits) {
      console.log(
        'Found ad unit with resource name "%s" and display name "%s".',
        adUnit.name,
        adUnit.displayName,
      );
    }

    pageToken = response.nextPageToken;
  } while (pageToken);
}
```

### Generate a report

This sample generates a report over your AdSense account and outputs the results to a spreadsheet.

```
/**
 * Generates a spreadsheet report for a specific ad client in an account.
 * @param {string} accountName The resource name of the account.
 * @param {string} adClientReportingDimensionId The reporting dimension ID
 *     of the ad client.
 */
function generateReport(accountName, adClientReportingDimensionId) {
  // Prepare report.
  const today = new Date();
  const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  const report = AdSense.Accounts.Reports.generate(accountName, {
    // Specify the desired ad client using a filter.
    filters: [
      \`AD_CLIENT_ID==${escapeFilterParameter(adClientReportingDimensionId)}\`,
    ],
    metrics: [
      "PAGE_VIEWS",
      "AD_REQUESTS",
      "AD_REQUESTS_COVERAGE",
      "CLICKS",
      "AD_REQUESTS_CTR",
      "COST_PER_CLICK",
      "AD_REQUESTS_RPM",
      "ESTIMATED_EARNINGS",
    ],
    dimensions: ["DATE"],
    ...dateToJson("startDate", oneWeekAgo),
    ...dateToJson("endDate", today),
    // Sort by ascending date.
    orderBy: ["+DATE"],
  });

  if (!report.rows) {
    console.log("No rows returned.");
    return;
  }
  const spreadsheet = SpreadsheetApp.create("AdSense Report");
  const sheet = spreadsheet.getActiveSheet();

  // Append the headers.
  sheet.appendRow(report.headers.map((header) => header.name));

  // Append the results.
  sheet
    .getRange(2, 1, report.rows.length, report.headers.length)
    .setValues(report.rows.map((row) => row.cells.map((cell) => cell.value)));

  console.log("Report spreadsheet created: %s", spreadsheet.getUrl());
}

/**
 * Escape special characters for a parameter being used in a filter.
 * @param {string} parameter The parameter to be escaped.
 * @return {string} The escaped parameter.
 */
function escapeFilterParameter(parameter) {
  return parameter.replace("\\", "\\\\").replace(",", "\\,");
}

/**
 * Returns the JSON representation of a Date object (as a google.type.Date).
 *
 * @param {string} paramName the name of the date parameter
 * @param {Date} value the date
 * @return {object} formatted date
 */
function dateToJson(paramName, value) {
  return {
    [\`${paramName}.year\`]: value.getFullYear(),
    [\`${paramName}.month\`]: value.getMonth() + 1,
    [\`${paramName}.day\`]: value.getDate(),
  };
}
```
