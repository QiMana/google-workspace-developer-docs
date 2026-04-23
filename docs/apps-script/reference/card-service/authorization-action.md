---
source: https://developers.google.com/apps-script/reference/card-service/authorization-action
root: apps-script
fetched_at: 2026-04-23T15:18:57.863Z
---

# Class AuthorizationAction

## Page Summary

- The `AuthorizationAction` sends the user to the specified `AuthorizationUrl` when clicked.
- The `setAuthorizationUrl(authorizationUrl)` method is used to define the URL the user will be directed to from the authorization prompt.
- This method requires a `String` parameter for the authorization URL and returns the `AuthorizationAction` object for chaining.

An authorization action that will send the user to the AuthorizationUrl when clicked.

```
CardService.newAuthorizationAction().setAuthorizationUrl('http://google.com/');
```

## Detailed documentation

### setAuthorizationUrl(authorizationUrl)

Sets the authorization URL that user is taken to from the authorization prompt. Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `authorizationUrl` | `String` | The authorization URL to set. |

#### Return

`AuthorizationAction` — This object, for chaining.
