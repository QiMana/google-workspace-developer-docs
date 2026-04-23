---
source: https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder
root: apps-script
fetched_at: 2026-04-23T15:21:28.516Z
---

# Class DataSourceSpecBuilder

## Page Summary

- DataSourceSpecBuilder is used to create a specification for data sources connected to a database.
- To start building a specification, use SpreadsheetApp.newDataSourceSpec().
- Specific database types like BigQuery and Looker have dedicated builder methods like asBigQuery() and asLooker().
- The build() method is used to finalize the specification from the builder's settings.

The builder for . To create a specification for certain type, use `as...()` method. To create a new builder, use `SpreadsheetApp.newDataSourceSpec()`. To use the specification, see `DataSourceTable`.

**Only use this class with data that's connected to a database.**

This example shows how to build a BigQuery data source specification.

```
const spec = SpreadsheetApp.newDataSourceSpec()
                 .asBigQuery()
                 .setProjectId('big_query_project')
                 .setRawQuery('select @FIELD from table limit @LIMIT')
                 .setParameterFromCell('FIELD', 'Sheet1!A1')
                 .setParameterFromCell('LIMIT', 'namedRangeCell')
                 .build();
```

This example shows how to build a Looker data source specification. It returns a `LookerDataSourceSpec` object after using `build()`.

```
const spec = SpreadsheetApp.newDataSourceSpec()
                 .asLooker()
                 .setInstanceUrl('https://looker_instance_url.com')
                 .setModelName('model_name')
                 .setExploreName('explore_name')
                 .build();
```

## Detailed documentation

### asBigQuery()

Gets the builder for BigQuery data source.

#### Return

`BigQueryDataSourceSpecBuilder` — The BigQuery data source specification builder.

---

### asLooker()

Gets the builder for Looker data source.

```
const spec = SpreadsheetApp.newDataSourceSpec()
                 .asLooker()
                 .setInstanceUrl('https://looker_instance_url.com')
                 .setModelName('model_name')
                 .setExploreName('explore_name')
                 .build();
```

#### Return

`LookerDataSourceSpecBuilder` — The Looker data source specification builder.

---

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

---

### removeAllParameters()

Removes all the parameters.

```
const specBuilder = SpreadsheetApp.newDataSourceSpec();
specBuilder.removeAllParameters();
```

#### Return

`DataSourceSpecBuilder` — The builder, for chaining.

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

`DataSourceSpecBuilder` — The builder, for chaining.

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

`DataSourceSpecBuilder` — The builder, for chaining.
