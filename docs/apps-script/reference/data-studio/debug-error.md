---
source: https://developers.google.com/apps-script/reference/data-studio/debug-error
root: apps-script
fetched_at: 2026-04-23T15:19:28.702Z
---

# Class DebugError

## Page Summary

- DebugError is an error only visible to connector admins.
- The `setText()` method is used to set the error text which is only shown to admins.
- The `throwException()` method triggers the debug error to be thrown.

An error that is only visible to admins of the connector.

```
const cc = DataStudioApp.createCommunityConnector();

cc.newDebugError().setText('This is the debug error text.').throwException();
```

## Detailed documentation

### printJson()

Prints the JSON representation of this object. This is for debugging only.

#### Return

`String`

---

### setText(text)

Sets the text of the debug error, which is only shown to admins.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `text` | `String` | The error text. |

#### Return

`DebugError` — This object, for chaining.

---

### throwException()

Triggers this exception to be thrown.
