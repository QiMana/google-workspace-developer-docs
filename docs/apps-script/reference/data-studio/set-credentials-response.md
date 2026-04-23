---
source: https://developers.google.com/apps-script/reference/data-studio/set-credentials-response
root: apps-script
fetched_at: 2026-04-23T15:19:32.879Z
---

# Class SetCredentialsResponse

## Page Summary

- The `SetCredentialsResponse` is a builder used to create a response for the `setCredentials()` function in a script project.
- The `build()` method validates the object and returns it in the format required by Data Studio.
- The `printJson()` method prints the JSON representation of the object for debugging.
- The `setIsValid(isValid)` method sets the validity status of the `SetCredentialsResponse`.

Builder to create a `setCredentials()` response for your script project.

```
const communityConnector = DataStudioApp.createCommunityConnector();

function setCredentials(request) {
  const isValid = validateCredentials(request);

  if (isValid) {
    // store the credentials somewhere.
  }

  return communityConnector.newSetCredentialsResponse().setIsValid(isValid).build();
}

function validateCredentials(request) {
  // ...
}
```

## Detailed documentation

### build()

Validates this object and returns it in the format needed by Data Studio.

#### Return

`Object` — The validated `SetCredentialsResponse` object.

---

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`

---

### setIsValid(isValid)

Sets the valid status of this `SetCredentialsResponse`. Set to `true` if the credentials provided in the request were valid, `false`, otherwise.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `isValid` | `Boolean` | The valid status to set. |

#### Return

`SetCredentialsResponse` — This builder, for chaining.
