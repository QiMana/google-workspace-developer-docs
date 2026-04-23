---
source: https://developers.google.com/apps-script/reference/data-studio/community-connector
root: apps-script
fetched_at: 2026-04-23T15:19:27.997Z
---

# Class CommunityConnector

## Page Summary

- The `CommunityConnector` class provides builders and utilities for developing Community Connectors for Data Studio.
- You can get references to `Fields`, `FieldType`, and `AggregationType` through the `CommunityConnector` object.
- The `CommunityConnector` class has properties like `AggregationType`, `AuthType`, `BigQueryParameterType`, and `FieldType`.
- Useful methods like `getConfig()`, `getFields()`, `newGetDataResponse()`, and `newGetSchemaResponse()` are available for connector development.

CommunityConnector enables scripts to access builders and utilities to help with development of Community Connectors for Data Studio. Use this class to get a reference to the `Fields` object and the `FieldType` and `AggregationType` enums so they can be used in the construction of `Field` s.

```
const cc = DataStudioApp.createCommunityConnector();

const fields = cc.getFields();

fields.newMetric()
    .setAggregation(cc.AggregationType.AVG)
    .setType(cc.FieldType.CURRENCY_USD);
```

## Detailed documentation

### getConfig()

Returns a `Config` object. Use this object to add configuration entries.

#### Return

`Config` — A `Config` object.

---

### getFields()

Returns a `Fields` object. Use this object to add metric and dimension `Field` s.

#### Return

`Fields` — A `Fields` object.

---

### newAuthTypeResponse()

Returns a new `GetAuthTypeResponse` object. Use this object to create a response for the `getAuthType()` function you implement in your script project.

#### Return

`GetAuthTypeResponse` — A new `GetAuthTypeResponse` object.

---

### newBigQueryConfig()

Returns a new `BigQueryConfig` object. Use this object to create a response for the `getData()` function you implement in your script project.

#### Return

`BigQueryConfig` — A new `BigQueryConfig` object.

---

### newDebugError()

Returns a new `DebugError` object. Use this object to create debug errors.

#### Return

`DebugError` — A new `DebugError` object.

---

### newGetDataResponse()

Returns a new `GetDataResponse` object. Use this object to create a response for the `getData()` function you implement in your script project.

#### Return

`GetDataResponse` — A new `GetDataResponse` object.

---

### newGetSchemaResponse()

Returns a new `GetSchemaResponse` object. Use this object to create a response for the `getSchema()` function you implement in your script project.

#### Return

`GetSchemaResponse` — A new `GetSchemaResponse` object.

---

### newSetCredentialsResponse()

Returns a new `SetCredentialsResponse` object. Use this object to create a response for the `setCredentials()` function you implement in your script project.

#### Return

`SetCredentialsResponse` — A new `SetCredentialsResponse` object.

---

### newUserError()

Returns a new `UserError` object. Use this object to create user errors.

#### Return

`UserError` — A new `UserError` object.
