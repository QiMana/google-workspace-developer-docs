---
source: https://developers.google.com/apps-script/advanced/youtube-analytics
root: apps-script
fetched_at: 2026-04-23T15:18:05.717Z
---

# YouTube Analytics Service

## Page Summary

- The YouTube Analytics service in Apps Script allows you to use the YouTube Analytics API to retrieve viewing statistics, popularity metrics, and demographic information for YouTube videos and channels.
- This is an advanced service that must be enabled before use.
- The service uses the same objects, methods, and parameters as the public YouTube Analytics API.
- A sample code is provided to create a spreadsheet with daily view counts, watch-time, and subscriber data using version 2 of the YouTube Analytics API and version 3 of the YouTube Data API.

viewing statistics, popularity metrics, and demographic information for YouTube videos and channels.

The YouTube Analytics service lets you use the [YouTube Analytics API](https://developers.google.com/youtube/analytics) in Google Apps Script. This API gives users the ability to retrieve viewing statistics, popularity metrics, and demographic information for YouTube videos and channels.

This is an advanced service that must be [enabled before use](https://developers.google.com/apps-script/guides/services/advanced).

## Reference

For detailed information on this service, see the [reference documentation](https://developers.google.com/youtube/analytics/reference) for the YouTube Analytics API. Like all advanced services in Apps Script, the YouTube Analytics service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](https://developers.google.com/apps-script/guides/services/advanced#how_method_signatures_are_determined).

## Sample code

The following sample code uses [version 2](https://developers.google.com/youtube/analytics/reference) of the YouTube Analytics API, as well as [version 3](https://developers.google.com/youtube/v3/docs) of the YouTube Data API, which you can access through the [YouTube service](https://developers.google.com/apps-script/advanced/youtube) in Apps Script.

To report issues and find other support, see the [YouTube API support guide](https://developers.google.com/youtube/v3/support).

### Create report

This function creates a spreadsheet containing daily view counts, watch-time metrics, and new-subscriber counts for a channel's videos.

```
/**
 * Creates a spreadsheet containing daily view counts, watch-time metrics,
 * and new-subscriber counts for a channel's videos.
 */
function createReport() {
  // Retrieve info about the user's YouTube channel.
  const channels = YouTube.Channels.list("id,contentDetails", {
    mine: true,
  });
  const channelId = channels.items[0].id;

  // Retrieve analytics report for the channel.
  const oneMonthInMillis = 1000 * 60 * 60 * 24 * 30;
  const today = new Date();
  const lastMonth = new Date(today.getTime() - oneMonthInMillis);

  const metrics = [
    "views",
    "estimatedMinutesWatched",
    "averageViewDuration",
    "subscribersGained",
  ];
  const result = YouTubeAnalytics.Reports.query({
    ids: \`channel==${channelId}\`,
    startDate: formatDateString(lastMonth),
    endDate: formatDateString(today),
    metrics: metrics.join(","),
    dimensions: "day",
    sort: "day",
  });

  if (!result.rows) {
    console.log("No rows returned.");
    return;
  }
  const spreadsheet = SpreadsheetApp.create("YouTube Analytics Report");
  const sheet = spreadsheet.getActiveSheet();

  // Append the headers.
  const headers = result.columnHeaders.map((columnHeader) => {
    return formatColumnName(columnHeader.name);
  });
  sheet.appendRow(headers);

  // Append the results.
  sheet
    .getRange(2, 1, result.rows.length, headers.length)
    .setValues(result.rows);

  console.log("Report spreadsheet created: %s", spreadsheet.getUrl());
}

/**
 * Converts a Date object into a YYYY-MM-DD string.
 * @param {Date} date The date to convert to a string.
 * @return {string} The formatted date.
 */
function formatDateString(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy-MM-dd");
}

/**
 * Formats a column name into a more human-friendly name.
 * @param {string} columnName The unprocessed name of the column.
 * @return {string} The formatted column name.
 * @example "averageViewPercentage" becomes "Average View Percentage".
 */
function formatColumnName(columnName) {
  let name = columnName.replace(/([a-z])([A-Z])/g, "$1 $2");
  name = name.slice(0, 1).toUpperCase() + name.slice(1);
  return name;
}
```
