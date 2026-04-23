---
source: https://developers.google.com/apps-script/advanced/doubleclick-bidmanager
root: apps-script
fetched_at: 2026-04-23T15:18:04.020Z
---

# DoubleClick Bid Manager Service

## Page Summary

- The DoubleClick Bid Manager service in Apps Script allows programmatic access to DBM Reporting using the DV360 Bid Manager API.
- This is an advanced service that requires prior enablement before use.
- The service utilizes the same objects, methods, and parameters as the public DBM Reporting API.
- Sample code is provided for tasks like listing queries, creating and running queries, and fetching the most recent report.

Apps Script using the DoubleClick Bid Manager service.

The DoubleClick Bid Manager service lets you use the [DV360 Bid Manager API](https://developers.google.com/bid-manager) in Google Apps Script. This API provides programmatic access to DoubleClick Bid Manager (DBM) Reporting.

This is an advanced service that must be [enabled before use](https://developers.google.com/apps-script/guides/services/advanced).

## Reference

For detailed information on this service, see the [reference documentation](https://developers.google.com/bid-manager/reference/rest) for the DBM Reporting API. Like all advanced services in Apps Script, the DoubleClick Bid Manager service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](https://developers.google.com/apps-script/guides/services/advanced#how_method_signatures_are_determined).

To report issues and find other support, see the [DBM Reporting and Trafficking support guide](https://developers.google.com/bid-manager/support).

## Sample code

The following sample code uses [version 2](https://developers.google.com/bid-manager/reference/rest) of the API.

### Get a list of queries

This sample logs all of the queries available in the account.

```
/**
 * Logs all of the queries available in the account.
 */
function listQueries() {
  // Retrieve the list of available queries
  try {
    const queries = DoubleClickBidManager.Queries.list();

    if (queries.queries) {
      // Print out the ID and name of each
      for (let i = 0; i < queries.queries.length; i++) {
        const query = queries.queries[i];
        console.log(
          'Found query with ID %s and name "%s".',
          query.queryId,
          query.metadata.title,
        );
      }
    }
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log("Failed with error: %s", e.error);
  }
}
```

### Create and run a query

This sample creates and runs a new DBM query.

```
/**
 * Create and run a new DBM Query
 */
function createAndRunQuery() {
  let result;
  let execution;
  //We leave the default date range blank for the report run to
  //use the value defined during query creation
  const defaultDateRange = {};
  const partnerId = "1234567"; //Replace with your Partner ID
  const query = {
    metadata: {
      title: "Apps Script Example Report",
      dataRange: {
        range: "YEAR_TO_DATE",
      },
      format: "CSV",
    },
    params: {
      type: "STANDARD",
      groupBys: [
        "FILTER_PARTNER",
        "FILTER_PARTNER_NAME",
        "FILTER_ADVERTISER",
        "FILTER_ADVERTISER_NAME",
      ],
      filters: [{ type: "FILTER_PARTNER", value: partnerId }],
      metrics: ["METRIC_IMPRESSIONS"],
    },
    schedule: {
      frequency: "ONE_TIME",
    },
  };

  try {
    result = DoubleClickBidManager.Queries.create(query);
    if (result.queryId) {
      console.log(
        'Created query with ID %s and name "%s".',
        result.queryId,
        result.metadata.title,
      );
      execution = DoubleClickBidManager.Queries.run(
        defaultDateRange,
        result.queryId,
      );
      if (execution.key) {
        console.log(
          'Created query report with query ID %s and report ID "%s".',
          execution.key.queryId,
          execution.key.reportId,
        );
      }
    }
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log(e);
    console.log("Failed with error: %s", e.error);
  }
}
```

### Fetch the most recent report for a DBM query

This sample fetches the most recent report for a DBM query and logs the content.

```
/**
 * Fetches a report file
 */
function fetchReport() {
  const queryId = "1234567"; // Replace with your query ID.
  const orderBy = "key.reportId desc";

  try {
    const report = DoubleClickBidManager.Queries.Reports.list(queryId, {
      orderBy: orderBy,
    });
    if (report.reports) {
      const firstReport = report.reports[0];
      if (firstReport.metadata.status.state === "DONE") {
        const reportFile = UrlFetchApp.fetch(
          firstReport.metadata.googleCloudStoragePath,
        );
        console.log("Printing report content to log...");
        console.log(reportFile.getContentText());
      } else {
        console.log(
          "Report status is %s, and is not available for download",
          firstReport.metadata.status.state,
        );
      }
    }
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log(e);
    console.log("Failed with error: %s", e.error);
  }
}
```
