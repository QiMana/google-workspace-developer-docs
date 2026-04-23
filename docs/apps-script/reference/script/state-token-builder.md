---
source: https://developers.google.com/apps-script/reference/script/state-token-builder
root: apps-script
fetched_at: 2026-04-23T15:20:58.061Z
---

# Class StateTokenBuilder

## Page Summary

- StateTokenBuilder allows scripts to create state tokens for use in callback APIs like OAuth flows.
- The `getCallbackURL` function demonstrates how to generate a callback URL programmatically using a state token.
- Methods available include `createToken()`, `withArgument()`, `withMethod()`, and `withTimeout()` to configure the state token.
- `createToken()` generates the encrypted string representation of the token.
- `withTimeout()` sets the token's validity duration in seconds, with a maximum of 3600 seconds.

Allows scripts to create state tokens that can be used in callback APIs (like OAuth flows).

```
// Reusable function to generate a callback URL, assuming the script has been
// published as a web app (necessary to obtain the URL programmatically). If the
// script has not been published as a web app, set \`var url\` in the first line
// to the URL of your script project (which cannot be obtained
// programmatically).
function getCallbackURL(callbackFunction) {
  let url = ScriptApp.getService().getUrl();  // Ends in /exec (for a web app)
  url = \`${
      url.slice(0, -4)}usercallback?state=\`;  // Change /exec to /usercallback
  const stateToken = ScriptApp.newStateToken()
                         .withMethod(callbackFunction)
                         .withTimeout(120)
                         .createToken();
  return url + stateToken;
}
```

## Detailed documentation

### createToken()

Constructs an encrypted string representation of the state token.

```
const stateToken = ScriptApp.newStateToken().createToken();
```

#### Return

`String` — An encrypted string representing the token.

---

### withArgument(name, value)

Adds an argument to the token. This method can be called multiple times.

```
const stateToken =
    ScriptApp.newStateToken().withArgument('myField', 'myValue').createToken();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `name` | `String` | The name of the argument. |
| `value` | `String` | The value of the argument. |

#### Return

`StateTokenBuilder` — The state token builder, for chaining.

---

### withMethod(method)

Sets a callback function. The default is a function named `callback()`.

```
const stateToken =
    ScriptApp.newStateToken().withMethod('myCallback').createToken();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `method` | `String` | The name of the callback function, represented as a string without parentheses or arguments. You can use functions from included libraries, such as `     Library.libFunction1`. |

#### Return

`StateTokenBuilder` — The state token builder, for chaining.

---

### withTimeout(seconds)

Sets the duration (in seconds) for which the token is valid. The defaults is 60 seconds; the maximum duration is 3600 seconds (1 hour).

```
const stateToken = ScriptApp.newStateToken().withTimeout(60).createToken();
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `seconds` | `Integer` | The duration for which the token is valid; the maximum value is `3600`. |

#### Return

`StateTokenBuilder` — The state token builder, for chaining.
