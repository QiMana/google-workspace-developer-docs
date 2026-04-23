---
source: https://developers.google.com/workspace/sheets/api/guides/filters-overview
root: workspace
fetched_at: 2026-04-23T15:31:21.944Z
---

# Apply filters to your Google Sheets data

This document explains the differences between a basic filter, filter view, and a data filter in a [spreadsheet](./concepts.md#spreadsheet).

## Filter comparison

Sheets filters all serve different purposes with the distinction in how the data is presented. The basic filter and the filter view are features that hide rows for users while a data filter is part of an API call that describes the data to be selected or returned from an API request.

The following table explains the differences between the filters:

| Type | Primary purpose | Who sees it? | Persists in Sheets? |
| --- | --- | --- | --- |
| **Basic filter** | Default filter for quick analysis. Might temporarily hide rows or sort columns. | Everyone (global) | Yes (until cleared) |
| **Filter view** | Saved reports with pre-sorted and pre-filtered views. | Only those using the view | Yes (saved as named view) |
| **Data filter** | Returns selected data through API requests | Only those making the request | No (it's part of a request) |

For more information on these filters, see the following:

- [Read, write, and search metadata](./metadata.md)

## Use cases

The following are some example use cases for each filter type:

- **Basic filter**: You want to set the main view of the sheet for everyone. For example, reset a dashboard to show only active projects.
- **Filter views**: You want to provide links that open a spreadsheet to pre-filtered data sets without disrupting other users. For example, you're building a dashboard app or you want to send a link to a client showing only their data.
- **Data filter**: You want your script to update a specific row, but you're unsure if the user has inserted a new row changing the [A1 notation](./concepts.md#a1-notation) coordinates. A data filter finds the table regardless of the location.
