---
source: https://developers.google.com/apps-script/reference/data-studio/user-error
root: apps-script
fetched_at: 2026-04-23T15:19:29.773Z
---

# Class UserError

## Page Summary

- A UserError is an error shown to users of the connector.
- You can set the text of the error shown to users and a different debug text shown only to admins.
- The `throwException()` method is used to trigger the exception.

An error that is shown to users of the connector.

```
const cc = DataStudioApp.createCommunityConnector();

cc.newUserError()
    .setText('This is the debug error text.')
    .setDebugText('This text is only shown to admins.')
    .throwException();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`

---

### setDebugText(text)

Sets the text of the debug error, which is only shown to admins.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The error text. |

#### Return

`UserError` — This object, for chaining.

---

### setText(text)

Sets the text of the user error.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The error text. |

#### Return

`UserError` — This object, for chaining.

---

### throwException()

Triggers this exception to be thrown.
