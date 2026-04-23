---
source: https://developers.google.com/apps-script/reference/data-studio/big-query-config
root: apps-script
fetched_at: 2026-04-23T15:19:29.103Z
---

# Class BigQueryConfig

## Page Summary

- BigQueryConfig is a configuration object for a native BigQuery connector used with Data Studio.
- It is returned from the `getData()` function for Data Studio to query BigQuery.
- Methods available for BigQueryConfig include adding query parameters, building the configuration, printing JSON, setting access token, setting billing project ID, setting the query, and setting the SQL interpretation method.
- The `build()` method validates the object and formats it for Data Studio, while other `set` methods configure specific aspects of the BigQuery connection and query.

A configuration object for a native BigQuery connector. Return this object from `getData()` for Data Studio to query BigQuery for the connector.

```
const cc = DataStudioApp.createCommunityConnector();

const bqConfig =
    cc.newBigQueryConfig()
        .setBillingProjectId('billingProjectId')
        .setQuery('queryString')
        .setUseStandardSql(true)
        .setAccessToken('accessToken')
        .addQueryParameter('dob', cc.BigQueryParameterType.STRING, '01011990')
        .build();
```

## Detailed documentation

### addQueryParameter(name, type, value)

Adds a query parameter to this `BigQueryConfig`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The parameter name. |
| `type` | `BigQueryParameterType` | The parameter type. |
| `value` | `String` | The parameter value. |

#### Return

`BigQueryConfig` — This object, for chaining.

---

### build()

Validates this object and returns it in the format needed by Data Studio.

#### Return

`Object` — The validated `Config` object.

---

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`

---

### setAccessToken(accessToken)

Sets the access token of this `BigQueryConfig`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `accessToken` | `String` | The access token to set. |

#### Return

`BigQueryConfig` — This object, for chaining.

---

### setBillingProjectId(billingProjectId)

Sets the billing project ID of this `BigQueryConfig`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `billingProjectId` | `String` | The billing project ID to set. |

#### Return

`BigQueryConfig` — This object, for chaining.

---

### setQuery(query)

Sets the SQL query of this `BigQueryConfig`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `query` | `String` | The query to set. |

#### Return

`BigQueryConfig` — This object, for chaining.

---

### setUseStandardSql(useStandardSql)

Determines if the query is interpreted as standard or legacy SQL.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `useStandardSql` | `Boolean` | If `true`, the query is interpreted as standard SQL. If `false`, the query is interpreted as legacy SQL. |

#### Return

`BigQueryConfig` — This object, for chaining.
