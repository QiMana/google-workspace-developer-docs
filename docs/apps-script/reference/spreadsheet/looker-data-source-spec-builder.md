---
source: https://developers.google.com/apps-script/reference/spreadsheet/looker-data-source-spec-builder
root: apps-script
fetched_at: 2026-04-23T15:21:40.047Z
---

# Class LookerDataSourceSpecBuilder

## Page Summary

- LookerDataSourceSpecBuilder is used to create a new Looker Data Source Spec builder in Apps Script.
- You can build a data source specification from the builder's settings using the `build()` method.
- The builder provides methods to get and set the Looker explore name, instance URL, and model name.
- You can manage parameters using methods like `getParameters()`, `removeAllParameters()`, and `removeParameter()`.

The builder for `LookerDataSourceSpecBuilder`.

This example shows how to create a new Looker Data Source Spec builder.

```
const lookerDataSourceSpecBuilder =
    SpreadsheetApp.newDataSourceSpec().asLooker();
```

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

---

### removeAllParameters()

Removes all the parameters.

```
const specBuilder = SpreadsheetApp.newDataSourceSpec();
specBuilder.removeAllParameters();
```

#### Return

`LookerDataSourceSpecBuilder` — The builder, for chaining.

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

`LookerDataSourceSpecBuilder` — The builder, for chaining.

---

### setExploreName(exploreName)

Sets the explore name in the Looker model.

```
const lookerDataSourceSpecBuilder =
    SpreadsheetApp.newDataSourceSpec().asLooker();
// TODO(developer): replace explore name with your own
lookerDataSourceSpecBuilder.setExploreName('my explore name');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `exploreName` | `String` | The explore name in the selected Looker model. |

#### Return

`LookerDataSourceSpecBuilder` — This builder, for chaining.

---

### setInstanceUrl(instanceUrl)

Sets the instance URL for Looker.

```
const lookerDataSourceSpecBuilder =
    SpreadsheetApp.newDataSourceSpec().asLooker();
// TODO(developer): replace instance url with your own
lookerDataSourceSpecBuilder.setInstanceUrl('my instance url');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `instanceUrl` | `String` | The URL of the Looker instance. |

#### Return

`LookerDataSourceSpecBuilder` — The builder, for chaining.

---

### setModelName(modelName)

Sets the Looker model name in the Looker instance.

```
const lookerDataSourceSpecBuilder =
    SpreadsheetApp.newDataSourceSpec().asLooker();
// TODO(developer): replace model name with your own
lookerDataSourceSpecBuilder.setModelName('my model name');
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `modelName` | `String` | The model name in the Looker instance. |

#### Return

`LookerDataSourceSpecBuilder` — The builder, for chaining.

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

`LookerDataSourceSpecBuilder` — The builder, for chaining.
