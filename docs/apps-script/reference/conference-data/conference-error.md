---
source: https://developers.google.com/apps-script/reference/conference-data/conference-error
root: apps-script
fetched_at: 2026-04-23T15:19:21.267Z
---

# Class ConferenceError

## Page Summary

- ConferenceError represents an error that occurred in a conferencing add-on.
- You can set the error type of a ConferenceError using `setConferenceErrorType()`.
- If the error type is AUTHENTICATION, you can set an authentication URL using `setAuthenticationUrl()`.

Error that occurred in a conferencing add-on. Example usage:

```
const conferenceError =
    ConferenceDataService.newConferenceError().setConferenceErrorType(
        ConferenceDataService.ConferenceErrorType.PERMANENT,
    );
```

Example with authentication:

```
const state = ScriptApp.newStateToken()
                  .withMethod('myLoginCallbackFunction')
                  .withTimeout(3600)
                  .createToken();

const authenticationUrl = \`https://script.google.com/a/google.com/d/${
    ScriptApp.getScriptId()}/usercallback?state=${state}\`;

const conferenceError =
    ConferenceDataService.newConferenceError()
        .setConferenceErrorType(
            ConferenceDataService.ConferenceErrorType.AUTHENTICATION,
            )
        .setAuthenticationUrl(authenticationUrl);
```

## Detailed documentation

### setAuthenticationUrl(authenticationUrl)

If the error type is `AUTHENTICATION`, the add-on must provide a URL calling back into the add-on to allow users to log in. The maximum length for this field is 1800 characters.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `authenticationUrl` | `String` | The authentication URL to set. |

#### Return

`ConferenceError` — this object, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided URL is not a valid http/https URL or is too long.

---

### setConferenceErrorType(conferenceErrorType)

Sets the error type of this `ConferenceError`.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `conferenceErrorType` | `ConferenceErrorType` | The type of error to set. |

#### Return

`ConferenceError` — this object, for chaining
