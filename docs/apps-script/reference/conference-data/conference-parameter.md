---
source: https://developers.google.com/apps-script/reference/conference-data/conference-parameter
root: apps-script
fetched_at: 2026-04-23T15:19:21.660Z
---

# Class ConferenceParameter

## Page Summary

- A ConferenceParameter is a solution-specific parameter for add-ons that is persisted with conference data.
- ConferenceParameters can be updated or deleted and are passed to the add-on for these operations.
- The setKey method sets the key of the ConferenceParameter, with a maximum length of 50 characters.
- The setValue method sets the value of the ConferenceParameter, with a maximum length of 1024 characters.
- Both setKey and setValue methods return the ConferenceParameter object for chaining.

Solution-specific parameter available fo the add-on's use. This parameter is persisted with the conference data and, if an update or delete is needed, is passed to the add-on. Example usage:

```
const conferenceParameter = ConferenceDataService.newConferenceParameter()
                                .setKey('meetingId')
                                .setValue('123456');
```

## Detailed documentation

### setKey(key)

Sets the key of this `ConferenceParameter`. The maximum length for this field is 50 characters. Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `key` | `String` | The key to set. |

#### Return

`ConferenceParameter` — this object, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided key is too long.

---

### setValue(value)

Sets the value of this `ConferenceParameter`. The maximum length for this field is 1024 characters. Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `value` | `String` | The value to set. |

#### Return

`ConferenceParameter` — this object, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided value is too long.
