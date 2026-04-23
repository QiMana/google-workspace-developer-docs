---
source: https://developers.google.com/apps-script/reference/spreadsheet/big-query-data-source-spec-builder
root: apps-script
fetched_at: 2026-04-23T15:21:25.683Z
---

# Class BigQueryDataSourceSpecBuilder

## Page Summary

- BigQueryDataSourceSpecBuilder is used to build a data source specification for BigQuery.
- It provides methods to get and set the dataset ID, project ID, table ID, and raw query.
- You can manage parameters for the data source, including adding, removing, and setting them from a cell reference.
- The `build()` method finalizes the configuration and returns a DataSourceSpec object.

The builder for `BigQueryDataSourceSpecBuilder`.

## Detailed documentation

### build()

Builds a data source specification from the settings in this builder. Must use `as...()` to specify a data source type before building.

The following code sample builds a BigQuery DataSource Spec.

```
const bigQueryDataSourceSpec = SpreadsheetApp.newDataSourceSpec().asBigQuery();
// TODO(developer): Replace with the required dataset, project and table IDs.
bigQueryDataSourceSpec.setDatasetId('my data set id');
bigQueryDataSourceSpec.setProjectId('my project id');
bigQueryDataSourceSpec.setTableId('my table id');

bigQueryDataSourceSpec.build();
```

The following code sample builds a Looker DataSource Spec.

```
const lookerDataSourceSpecBuilder =
    SpreadsheetApp.newDataSourceSpec().asLooker();
const lookerSpec = lookerDataSourceSpecBuilder.setExploreName('my explore name')
                       .setInstanceUrl('my instance url')
                       .setModelName('my model name')
                       .build();
```

#### Return

`DataSourceSpec` — The data source specification.

---

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

---

### removeAllParameters()

Removes all the parameters.

```
const specBuilder = SpreadsheetApp.newDataSourceSpec();
specBuilder.removeAllParameters();
```

#### Return

`BigQueryDataSourceSpecBuilder` — The builder, for chaining.

---

### removeParameter(parameterName)

Removes the specified parameter.

```
const specBuilder = SpreadsheetApp.newDataSourceSpec();
specBuilder.removeParameter('x');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterName` | `String` | The name of the parameter to remove. |

#### Return

`BigQueryDataSourceSpecBuilder` — The builder, for chaining.

---

### setDatasetId(datasetId)

Sets the BigQuery dataset ID.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `datasetId` | `String` | The ID of the dataset. |

#### Return

`BigQueryDataSourceSpecBuilder` — This builder, for chaining.

---

### setParameterFromCell(parameterName, sourceCell)

Adds a parameter, or if the parameter with the name exists, updates its source cell for data source spec builders of type `DataSourceType.BIGQUERY`.

This method is only available for BigQuery data sources.

```
const specBuilder = SpreadsheetApp.newDataSourceSpec().asBigQuery();
specBuilder.setParameterFromCell('x', 'A1');
const bigQuerySpec = specBuilder.build();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `parameterName` | `String` | The parameter name. |
| `sourceCell` | `String` | The source cell, as specified in A1 notation. |

#### Return

`BigQueryDataSourceSpecBuilder` — The builder, for chaining.

---

### setProjectId(projectId)

Sets the billing BigQuery project ID.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `projectId` | `String` | The ID of the billing project. |

#### Return

`BigQueryDataSourceSpecBuilder` — The builder, for chaining.

---

### setRawQuery(rawQuery)

Sets the raw query string.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `rawQuery` | `String` | The raw query string. |

#### Return

`BigQueryDataSourceSpecBuilder` — The builder, for chaining.

---

### setTableId(tableId)

Sets the BigQuery table ID.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `tableId` | `String` | The ID of the table. |

#### Return

`BigQueryDataSourceSpecBuilder` — This builder, for chaining.

---

### setTableProjectId(projectId)

Sets the BigQuery project ID for the table.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `projectId` | `String` | The project ID of the BigQuery table. |

#### Return

`BigQueryDataSourceSpecBuilder` — The builder, for chaining.
