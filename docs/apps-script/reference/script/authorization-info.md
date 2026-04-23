---
source: https://developers.google.com/apps-script/reference/script/authorization-info
root: apps-script
fetched_at: 2026-04-23T15:20:57.164Z
---

# Class AuthorizationInfo

## Page Summary

- AuthorizationInfo checks if a user has granted authorization for required script scopes and provides an authorization URL to grant those permissions.
- The AuthorizationInfo object allows you to control access to code sections requiring certain scopes and request authorization for subsequent executions.
- AuthorizationInfo is returned by `ScriptApp.getAuthorizationInfo(authMode)`, with `ScriptApp.AuthMode.FULL` being the generally recommended authorization mode.
- Key methods of AuthorizationInfo include `getAuthorizationStatus()`, `getAuthorizationUrl()`, and `getAuthorizedScopes()`.

An object that checks if the user has granted authorization for the required scopes of the script. The object also provides an authorization URL for users to grant those permissions.

Some script executions can start without a user's consent to all required scopes used by the script. The information in this object lets you control access to sections of code that require certain scopes and request authorization of those scopes for subsequent executions.

This object is returned by `ScriptApp.getAuthorizationInfo(authMode)`. In almost all cases, scripts should call `ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL)`, since no other authorization mode requires that users grant authorization.

## Detailed documentation

### getAuthorizationStatus()

Gets a value that indicates whether the user needs to authorize this script to use one or more services (for example, `ScriptApp.AuthorizationStatus.REQUIRED`).

```
// Log the authorization status (REQUIRED or NOT_REQUIRED).
const authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
Logger.log(authInfo.getAuthorizationStatus());
```

#### Return

`AuthorizationStatus` — The authorization status.

---

### getAuthorizationUrl()

Gets the authorization URL that can be used to grant access to the script. This method returns `null` if no authorization is required. The page at the URL closes automatically if it is accessed and the script does not require any authorization.

```
// Log the URL used to grant access to the script.
const authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
Logger.log(authInfo.getAuthorizationUrl());
```

#### Return

`String|null` — A URL that can be used to authorize the script.

---

### getAuthorizedScopes()

Gets a list of authorized scopes for the script. If authorization information is requested for a specified list of scopes, returns the authorized scopes from the specified list.

```
// Logs which scopes in the specified list have been authorized for the script.
const authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL, [
  'https: //www.googleapis.com/auth/documents',
  'https: //www.googleapis.com/auth/spreadsheets',
]);
Logger.log(authInfo.getAuthorizedScopes());
```

#### Return

`String[]|null` — The list of authorized scopes.
