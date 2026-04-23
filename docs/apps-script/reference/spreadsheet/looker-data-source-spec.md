---
source: https://developers.google.com/apps-script/reference/spreadsheet/looker-data-source-spec
root: apps-script
fetched_at: 2026-04-23T15:21:42.069Z
---

# Class LookerDataSourceSpec

## Page Summary

- LookerDataSourceSpec is a DataSourceSpec used to access existing Looker data source specifications.
- You can obtain a Looker data source specification from a sheet with a Looker connection using `getDataSources()` and `asLooker()`.
- The `copy()` method creates a DataSourceSpecBuilder based on the current data source settings.
- Methods like `getExploreName()`, `getInstanceUrl()`, and `getModelName()` retrieve specific details about the Looker data source.
- `getParameters()` gets the data source parameters, which is only available for BigQuery data sources, and `getType()` gets the data source type.

A `DataSourceSpec` which is used to access specifically the existing Looker data source specifications. To create a new data source specification, use `SpreadsheetApp.newDataSourceSpec()`.

This example shows how you can get the Looker data source spec from a sheet which has just one Looker connection.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

const lookerDataSourceSpec = ss.getDataSources()[0].getSpec().asLooker();
```

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

### getExploreName()

Gets the name of the Looker explore in the model.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

const lookerDataSourceSpec = ss.getDataSources()[0].getSpec().asLooker();
const exploreName = lookerDataSourceSpec.getExploreName();
Logger.log(exploreName);
```

#### Return

`String` — The name of the Looker explore.

---

### getInstanceUrl()

Gets the URL of the Looker instance.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

const lookerDataSourceSpec = ss.getDataSources()[0].getSpec().asLooker();
const instanceUrl = lookerDataSourceSpec.getInstanceUrl();
Logger.log(instanceUrl);
```

#### Return

`String` — The URL of the Looker instance.

---

### getModelName()

Gets the name of the Looker model in the instance.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc123456/edit',
);

const lookerDataSourceSpec = ss.getDataSources()[0].getSpec().asLooker();
const modelName = lookerDataSourceSpec.getModelName();
Logger.log(modelName);
```

#### Return

`String` — The name of the Looker model.

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
