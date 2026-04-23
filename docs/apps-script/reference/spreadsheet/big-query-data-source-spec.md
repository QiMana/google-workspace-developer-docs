---
source: https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec
root: apps-script
fetched_at: 2026-04-23T15:21:25.972Z
---

# Class BigQueryDataSourceSpec

## Page Summary

- BigQueryDataSourceSpec allows access to existing BigQuery data source specifications within SpreadsheetApp.
- You can create a new data source specification using SpreadsheetApp.newDataSourceSpec().
- The methods available include retrieving dataset ID, parameters, project ID, raw query, table ID, table project ID, and data source type.
- The copy() method creates a DataSourceSpecBuilder based on the existing data source's settings.

Access the existing BigQuery data source specification. To create a new data source specification, use `SpreadsheetApp.newDataSourceSpec()`.

## Detailed documentation

### copy()

Creates a `DataSourceSpecBuilder` based on this data source's settings.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);
const spec = ss.getDataSources()[0].getSpec();

const newSpec = spec.copy();
```

#### Return

`DataSourceSpecBuilder` — The builder.

---

### getDatasetId()

Gets the BigQuery dataset ID.

#### Return

`String` — The dataset ID, or an empty string if the data source spec is defined by a raw query.

---

### getParameters()

Gets the parameters of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);
const spec = ss.getDataSources()[0].getSpec();
const parameters = spec.getParameters();
```

This method is only available for BigQuery data sources.

#### Return

`DataSourceParameter[]` — The parameter list.

---

### getProjectId()

Gets the billing project ID.

#### Return

`String` — The project ID.

---

### getRawQuery()

Gets the raw query string.

#### Return

`String` — The raw query string.

---

### getTableId()

Gets the BigQuery table ID.

#### Return

`String` — The table ID, or an empty string if the data source spec is defined by a raw query.

---

### getTableProjectId()

Gets the BigQuery project ID for the table.

#### Return

`String` — The table project ID, or an empty string if the data source spec is defined by a raw query.

---

### getType()

Gets the type of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);
const spec = ss.getDataSources()[0].getSpec();
const type = spec.getType();
```

#### Return

`DataSourceType` — The data source type.
