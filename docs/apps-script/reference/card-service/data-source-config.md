---
source: https://developers.google.com/apps-script/reference/card-service/data-source-config
root: apps-script
fetched_at: 2026-04-23T15:19:04.697Z
---

# Class DataSourceConfig

A configuration object that helps configure the data sources for a widget.

Sample usage:

```
const dataSourceConfig = CardService.newDataSourceConfig()
     .setPlatformDataSource(CardService.newPlatformDataSource()
     .setWorkflowDataSource(CardService.WorkflowDataSourceType.USER));
```

## Detailed documentation

### setMaxCharactersToDisable(maxCharactersToDisable)

Sets the maximum number of characters the user can enter before this data provider is disabled. Results are not shown if the input exceeds this length.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `maxCharactersToDisable` | `Integer` | The maximum number of characters required. A value of 0 means no limit, always enabled. |

#### Return

`DataSourceConfig` — This object, for chaining.

---

### setMaxResults(maxResults)

Sets the maximum number of results to return.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `maxResults` | `Integer` | The maximum number of results to return. |

#### Return

`DataSourceConfig` — This object, for chaining.

---

### setMinCharactersToTrigger(minCharactersToTrigger)

Sets the minimum number of characters the user must enter before this data provider is triggered to return results.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `minCharactersToTrigger` | `Integer` | The minimum number of characters required. |

#### Return

`DataSourceConfig` — This object, for chaining.

---

### setPlatformDataSource(platformDataSource)

Sets the data source to a platform data source.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `platformDataSource` | `PlatformDataSource` | A data source that is shared by all Google Workspace applications. |

#### Return

`DataSourceConfig` — This object, for chaining.

---

### setRemoteDataSource(action)

Sets the data source to a remote data provider.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `action` | `Action` | An action that returns data. |

#### Return

`DataSourceConfig` — This object, for chaining.
