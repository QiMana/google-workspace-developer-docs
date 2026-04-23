---
source: https://developers.google.com/apps-script/reference/card-service/authorization-exception
root: apps-script
fetched_at: 2026-04-23T15:18:59.179Z
---

# Class AuthorizationException

## Page Summary

- AuthorizationException is an error used to trigger an authorization card for the user.
- Key methods include setting the authorization URL and resource display name.
- The exception can be configured with a custom UI callback function.
- Use `throwException()` to trigger the authorization card.

An error that can be returned to trigger an authorization card to be shown to the user.

```
CardService.newAuthorizationException()
    .setAuthorizationUrl('http://auth.com/')
    .setResourceDisplayName('Example Resource')
    .throwException();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`

---

### setAuthorizationUrl(authUrl)

Sets the authorization URL that user is taken to from the authorization prompt. Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `authUrl` | `String` | The authorization URL to set. |

#### Return

`AuthorizationException` — This object, for chaining.

---

### setCustomUiCallback(callback)

The name of a function to call to generate a custom authorization prompt. Optional.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `callback` | `String` | The name of the function that generates a custom authorization prompt. |

#### Return

`AuthorizationException` — This object, for chaining.

---

### setResourceDisplayName(name)

Sets the name that is displayed to the user when asking for authorization. Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The display name. |

#### Return

`AuthorizationException` — This object, for chaining.

---

### throwException()

Triggers this exception to be thrown.
