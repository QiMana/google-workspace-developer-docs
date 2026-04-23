---
source: https://developers.google.com/apps-script/reference/conference-data/conference-data-builder
root: apps-script
fetched_at: 2026-04-23T15:19:21.491Z
---

# Class ConferenceDataBuilder

## Page Summary

- The `ConferenceDataBuilder` is used to create `ConferenceData` objects.
- Methods are available to add conference parameters and entry points, set conference ID and solution ID, set errors, and add notes.
- The `build()` method is used to finalize and validate the `ConferenceData` object.

## Detailed documentation

### addConferenceParameter(conferenceParameter)

Adds a `ConferenceParameter` to this . The maximum number of parameters per is 300.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `conferenceParameter` | `ConferenceParameter` | The parameter to add. |

#### Return

`ConferenceDataBuilder` — This builder, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided conference parameter is invalid or if too many conference parameters were added.

---

### addEntryPoint(entryPoint)

Adds an `EntryPoint` to this . The maximum number of entry points per is 300.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `entryPoint` | `EntryPoint` | The entry point to add. |

#### Return

`ConferenceDataBuilder` — This builder, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided entry point is invalid or if too many entry points were added.

---

### build()

#### Return

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the constructed conference data is not valid.

---

### setConferenceId(conferenceId)

Sets the conference ID of this . The maximum length for this field is 512 characters.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `conferenceId` | `String` | The ID to set. |

#### Return

`ConferenceDataBuilder` — This builder, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided conference ID is too long.

---

### setConferenceSolutionId(conferenceSolutionId)

Sets the conference solution ID defined in the addon's manifest. The value must be specified and populates conference's name and iconUrl values.

Note that the field is required for GSuite add-ons whereas it's ignored for Conferencing add-ons

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `conferenceSolutionId` | `String` | The ID matching the manifest. |

#### Return

`ConferenceDataBuilder` — This builder, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided conference solution id is too long. The maximum length for this field is 512 characters.

---

### setError(conferenceError)

Sets the `ConferenceError` of this , indicating that the conference was not successfully created.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `conferenceError` | `ConferenceError` | The error to set. |

#### Return

`ConferenceDataBuilder` — This builder, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided error is invalid.

---

### setNotes(notes)

Sets the additional notes of this , such as instructions from the administrator or legal notices. Can contain HTML. The maximum length for this field is 2048 characters.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `notes` | `String` | The additional notes to set. |

#### Return

`ConferenceDataBuilder` — This builder, for chaining.

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided notes are too long.
