---
source: https://developers.google.com/apps-script/guides/support/best-practices
root: apps-script
fetched_at: 2026-04-23T15:18:26.687Z
---

# Best Practices

## Page Summary

- To improve script performance, minimize calls to external services.
- Using shared drives can make collaborating on script projects easier.
- Batching read and write operations in scripts significantly improves speed.
- For UI-heavy scripts, limit the use of libraries to avoid performance delays.
- Utilize the Cache Service to store data between script executions and reduce fetching time.

This document lists best practices to improve script performance.

## Minimize calls to other services

Using JavaScript operations within your script is faster than calling other services. Anything you accomplish within Google Apps Script itself is faster than fetching data from Google's servers or an external server, such as requests to Sheets, Docs, Sites, Sites, Translate, and UrlFetch. Your scripts will run faster if you minimize service calls.

## Collaborate with shared drives

If you work on a script project with other developers, [collaborate using shared drives](https://developers.google.com/apps-script/guides/collaborating#collaborating_with_shared_drives). Files in a shared drive are owned by the group rather than individuals, making project development and maintenance easier.

## Use batch operations

Scripts commonly read data from a spreadsheet, perform calculations, and write results back. Apps Script uses built-in optimization like look-ahead and write caching.

Maximize built-in caching by minimizing reads and writes. Alternating read and write commands is slow. To speed up a script, read all data into an array with one command, perform operations on the array data, and write the data out with one command.

Avoid alternating reads and writes as shown in this inefficient example:

```
// DO NOT USE THIS CODE. It is an example of SLOW, INEFFICIENT code.
// FOR DEMONSTRATION ONLY
var cell = sheet.getRange('a1');
for (var y = 0; y < 100; y++) {
  xcoord = xmin;
  for (var x = 0; x < 100; x++) {
    var c = getColorFromCoordinates(xcoord, ycoord);
    cell.offset(y, x).setBackgroundColor(c);
    xcoord += xincrement;
  }
  ycoord -= yincrement;
  SpreadsheetApp.flush();
}
```

The script is inefficient because it loops through 10,000 cells with consecutive writes. While the write-back cache helps, batching calls is much more efficient:

```
// OKAY TO USE THIS EXAMPLE or code based on it.
var cell = sheet.getRange('a1');
var colors = new Array(100);
for (var y = 0; y < 100; y++) {
  xcoord = xmin;
  colors[y] = new Array(100);
  for (var x = 0; x < 100; x++) {
    colors[y][x] = getColorFromCoordinates(xcoord, ycoord);
    xcoord += xincrement;
  }
  ycoord -= yincrement;
}
sheet.getRange(1, 1, 100, 100).setBackgrounds(colors);
```

The inefficient code takes about 70 seconds to run, while the efficient code runs in just 1 second.

## Avoid libraries in UI-heavy scripts

[Libraries](https://developers.google.com/apps-script/guides/libraries) are convenient for reusing code but increase script startup time. This delay is noticeable in client-side [HTML Service](https://developers.google.com/apps-script/guides/html) user interfaces that make repeated, short-running [`google.script.run`](https://developers.google.com/apps-script/guides/html/reference/run) calls. Use libraries sparingly in [add-ons](https://developers.google.com/workspace/add-ons/overview) and avoid them in scripts that make many `google.script.run` calls.

## Use the Cache service

Use the [Cache service](https://developers.google.com/apps-script/reference/cache/cache-service) to cache resources between script executions. Caching reduces data fetch frequency. The following example shows how to use the Cache service to speed up access to a slow RSS feed.

```
function getRssFeed() {
  var cache = CacheService.getScriptCache();
  var cached = cache.get("rss-feed-contents");
  if (cached != null) {
    return cached;
  }
  // This fetch takes 20 seconds:
  var result = UrlFetchApp.fetch("http://example.com/my-slow-rss-feed.xml");
  var contents = result.getContentText();
  cache.put("rss-feed-contents", contents, 1500); // cache for 25 minutes
  return contents;
}
```

While you still wait 20 seconds if the item isn't in cache, subsequent accesses are fast until the item expires.

## Large datasets and complex calculations

Google Sheets is a powerful tool, but as datasets grow and calculations become more complex, you may encounter performance issues such as spreadsheet lag, `IMPORTRANGE` errors, and script timeouts.

### When to use a database

If your spreadsheet is approaching the [limit of 10 million cells](https://support.google.com/drive/answer/37603) or if you have many connected forms (e.g., 10 or more) and complex cross-sheet formulas, consider using a dedicated database solution.

- **Google Cloud SQL**: A fully managed relational database service for MySQL, PostgreSQL, and SQL Server. Use the [JDBC service](https://developers.google.com/apps-script/guides/jdbc) to connect to Cloud SQL or other external databases like Oracle or MongoDB (via appropriate bridges).
- **BigQuery**: A serverless, highly scalable data warehouse. You can use [Connected Sheets](https://support.google.com/docs/answer/9602975) to analyze large BigQuery datasets directly in Sheets, or use the [BigQuery service](https://developers.google.com/apps-script/advanced/bigquery) to interact with data from Apps Script.

### Formula performance optimization

Heavy use of certain formulas can slow down your spreadsheet:

- **ARRAYFORMULA**: While useful, large-scale `ARRAYFORMULA` calculations can be expensive.
- **VLOOKUP and OFFSET**: These functions can be slow on large datasets. Consider using `INDEX` and `MATCH` or Apps Script to perform lookups more efficiently in memory.
- **IMPORTRANGE**: Frequent use of `IMPORTRANGE` across many sheets can lead to "Internal Errors" if the source sheets are large or under heavy load. Consolidating data into a centralized source can help.

### Script timeout handling

Apps Script has [execution time limits](https://developers.google.com/apps-script/guides/services/quotas#current_limitations) (typically 6 minutes per execution, or 30 minutes for some Google Workspace accounts). If your script frequently crashes because it's exceeding the execution limit:

1. **Use batch operations**: As mentioned in the [Use batch operations](#use_batch_operations) section, minimize calls to spreadsheets and other services.
2. **Split tasks**: Divide large tasks into smaller chunks that can each complete within the time limit.
3. **Use triggers for continuations**: Set up an [installable time-driven trigger](https://developers.google.com/apps-script/guides/triggers/installable#time-driven_triggers) to resume a long-running process. Your script can store its current state (e.g., the last processed row index) using the [Properties service](https://developers.google.com/apps-script/guides/properties) and continue from that point in the next execution.
