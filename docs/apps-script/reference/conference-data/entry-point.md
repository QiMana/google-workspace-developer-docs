---
source: https://developers.google.com/apps-script/reference/conference-data/entry-point
root: apps-script
fetched_at: 2026-04-23T15:19:21.866Z
---

# Class EntryPoint

## Page Summary

- EntryPoint defines a specific way to join a conference, with examples shown for video, phone, SIP, and more.
- The EntryPoint object provides methods to set various properties like the type, URI, and access codes for the conference.
- You can add features to an entry point, such as specifying if a phone entry point is toll or toll-free.
- The documentation details parameters, return types, and potential errors for each EntryPoint method.

Definition of a specific way to join a conference. Example usage:

```
const videoEntryPoint =
    ConferenceDataService.newEntryPoint()
        .setEntryPointType(ConferenceDataService.EntryPointType.VIDEO)
        .setUri('https://example.com/myroom')
        .setPasscode('12345');

const phoneEntryPoint =
    ConferenceDataService.newEntryPoint()
        .setEntryPointType(ConferenceDataService.EntryPointType.PHONE)
        .setUri('tel:+11234567890,,,112233445;9687')
        .addFeature(ConferenceDataService.EntryPointFeature.TOLL)
        .setPin('9687');

const sipEntryPoint =
    ConferenceDataService.newEntryPoint()
        .setEntryPointType(ConferenceDataService.EntryPointType.SIP)
        .setUri('sip:joe@example.com')
        .setAccessCode('1234567');

const moreEntryPoint =
    ConferenceDataService.newEntryPoint()
        .setEntryPointType(ConferenceDataService.EntryPointType.MORE)
        .setUri('https://example.com/moreJoiningInfo');
```

## Detailed documentation

### addFeature(feature)

Adds the feature of the entry point, such as being toll or toll-free.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `feature` | `EntryPointFeature` | The feature to set. |

#### Return

`EntryPoint` — this object, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the feature isn't applicable to this entry point.

---

### setAccessCode(accessCode)

An access code for accessing the conference. Maximum length 128 characters. Optional.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `accessCode` | `String` | The access code to set. |

#### Return

`EntryPoint` — this object, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided access code is too long.

---

### setEntryPointType(entryPointType)

Sets the type of this entry point. Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `entryPointType` | `EntryPointType` | The entry point type to set. |

#### Return

`EntryPoint` — this object, for chaining

---

### setMeetingCode(meetingCode)

A meeting code for accessing the conference. Maximum length 128 characters. Optional.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `meetingCode` | `String` | The meeting code to set. |

#### Return

`EntryPoint` — this object, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided meeting code is too long.

---

### setPasscode(passcode)

A passcode for accessing the conference. Maximum length 128 characters. Optional.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `passcode` | `String` | The passcode to set. |

#### Return

`EntryPoint` — this object, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided passcode is too long.

---

### setPassword(password)

A password code for accessing the conference. Maximum length 128 characters. Optional.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `password` | `String` | The password to set. |

#### Return

`EntryPoint` — this object, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided password is too long.

---

### setPin(pin)

A PIN code for accessing the conference. Maximum length 128 characters. Optional.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `pin` | `String` | The PIN code to set. |

#### Return

`EntryPoint` — this object, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided PIN code is too long.

---

### setRegionCode(regionCode)

The CLDR/ISO 3166 region code for the country associated with this entry point. Applicable only to phone entry point types. Optional.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `regionCode` | `String` | The regionCode to set. |

#### Return

`EntryPoint` — this object, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided regionCode is too long.

---

### setUri(uri)

Sets the URI for joining the conference through this entry point. For `PHONE` entry points, the prefix `tel:` is required. For `SIP` entry points, the prefix `sip:` is required. For `VIDEO` and `MORE` entry points, the prefixes `http:` or `https:` are required. Maximum length 1300 characters. Required.

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `uri` | `String` | The URI to set. |

#### Return

`EntryPoint` — this object, for chaining

#### Throws

[`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) — if the provided URI is malformed.
