---
source: https://developers.google.com/apps-script/advanced/analyticsdata
root: apps-script
fetched_at: 2026-04-23T15:17:59.674Z
---

# Analytics Data Service

## Page Summary

- The Analytics Data service allows Google Analytics users to programmatically access Google Analytics 4 (GA4) report data through the Google Analytics Data API v1 in Apps Script.
- This is an advanced service that requires enabling before use in Apps Script.
- The AnalyticsData service utilizes the same objects, methods, and parameters as the public API.
- Detailed information and support for this service can be found in the Google Analytics Data API v1 reference documentation and support page.

Apps Script using the Analytics Data API v1.

The Analytics Data service lets you use the [Google Analytics Data API v1](https://developers.google.com/analytics/devguides/reporting/data/v1) in Google Apps Script. This API gives Google Analytics users programmatic access to Google Analytics 4 (GA4) report data.

This is an advanced service that must be [enabled before use](../guides/services/advanced.md).

## Reference

For detailed information on this service, see the [Google Analytics Data API v1 reference documentation](https://developers.google.com/analytics/devguides/reporting/data/v1/rest).

Like all advanced services in Apps Script, the AnalyticsData service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](../guides/services/advanced.md#how_method_signatures_are_determined).

To report issues and find other support, see the [Google Analytics Data API v1 support page](https://developers.google.com/analytics/devguides/reporting/data/v1/help).

## Sample code

### Run a report

The sample runs a report to retrieve the active users count by city and stores the results in a new spreadsheet.

```
/**
 * Runs a report of a Google Analytics 4 property ID. Creates a sheet with the
 * report.
 */
function runReport() {
  /**
   * TODO(developer): Uncomment this variable and replace with your
   *   Google Analytics 4 property ID before running the sample.
   */
  const propertyId = "YOUR-GA4-PROPERTY-ID";

  try {
    const metric = AnalyticsData.newMetric();
    metric.name = "activeUsers";

    const dimension = AnalyticsData.newDimension();
    dimension.name = "city";

    const dateRange = AnalyticsData.newDateRange();
    dateRange.startDate = "2020-03-31";
    dateRange.endDate = "today";

    const request = AnalyticsData.newRunReportRequest();
    request.dimensions = [dimension];
    request.metrics = [metric];
    request.dateRanges = dateRange;

    const report = AnalyticsData.Properties.runReport(
      request,
      \`properties/${propertyId}\`,
    );
    if (!report.rows) {
      console.log("No rows returned.");
      return;
    }

    const spreadsheet = SpreadsheetApp.create("Google Analytics Report");
    const sheet = spreadsheet.getActiveSheet();

    // Append the headers.
    const dimensionHeaders = report.dimensionHeaders.map((dimensionHeader) => {
      return dimensionHeader.name;
    });
    const metricHeaders = report.metricHeaders.map((metricHeader) => {
      return metricHeader.name;
    });
    const headers = [...dimensionHeaders, ...metricHeaders];

    sheet.appendRow(headers);

    // Append the results.
    const rows = report.rows.map((row) => {
      const dimensionValues = row.dimensionValues.map((dimensionValue) => {
        return dimensionValue.value;
      });
      const metricValues = row.metricValues.map((metricValues) => {
        return metricValues.value;
      });
      return [...dimensionValues, ...metricValues];
    });

    sheet.getRange(2, 1, report.rows.length, headers.length).setValues(rows);

    console.log("Report spreadsheet created: %s", spreadsheet.getUrl());
  } catch (e) {
    // TODO (Developer) - Handle exception
    console.log("Failed with error: %s", e.error);
  }
}
```
