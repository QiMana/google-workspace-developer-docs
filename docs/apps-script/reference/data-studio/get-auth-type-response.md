---
source: https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response
root: apps-script
fetched_at: 2026-04-23T15:19:28.468Z
---

# Class GetAuthTypeResponse

## Page Summary

- GetAuthTypeResponse is a builder used to create a `getAuthType()` response for your script project in Data Studio.
- The builder includes methods such as `build()`, `printJson()`, `setAuthType(authType)`, and `setHelpUrl(helpUrl)` to configure the authentication response.
- The `build()` method validates the object and returns it in the format required by Data Studio.
- The `setAuthType()` method sets the authentication type using an AuthType value, and the `setHelpUrl()` method sets an optional URL for help with authentication setup.

Builder to create a `getAuthType()` response for your script project.

```
function getAuthType() {
  const cc = DataStudioApp.createCommunityConnector();

  return cc.newAuthTypeResponse()
      .setAuthType(cc.AuthType.USER_PASS)
      .setHelpUrl('https://www.example.org/connector-auth-help')
      .build();
}
```

## Detailed documentation

### build()

Validates this object and returns it in the format needed by Data Studio.

#### Return

`Object` — The validated `GetAuthTypeResponse` object.

---

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`

---

### setAuthType(authType)

Sets the `AuthType` of the builder.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `authType` | `AuthType` | The authentication type to set. |

#### Return

`GetAuthTypeResponse` — This builder, for chaining.

---

### setHelpUrl(helpUrl)

Sets the help URL of the builder.

The help URL is an optional URL the user can visit to get help on setting up auth. This is only supported for `USER_PASS`, `KEY`, and `USER_TOKEN` authTypes.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `helpUrl` | `String` | The help URL to set. |

#### Return

`GetAuthTypeResponse` — This builder, for chaining.
