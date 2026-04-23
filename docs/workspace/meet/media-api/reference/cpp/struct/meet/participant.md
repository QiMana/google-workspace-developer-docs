---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/participant
root: workspace
fetched_at: 2026-04-23T15:30:37.142Z
---

# meet::Participant

## meet::Participant

## Summary

<table><tbody><tr><th colspan="2"><h3>Public types</h3></th></tr><tr><td><code>Type</code></td><td>enum</td></tr></tbody></table>

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>anonymous_user</code></td><td><div><code>std::optional< AnonymousUser ></code></div></td></tr><tr><td><code>name</code></td><td><div><code>std::optional< std::string ></code></div><p><a href="https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/participant#structmeet_1_1_participant">Participant</a> resource name, not display name.</p></td></tr><tr><td><code>participant_id</code></td><td><div><code>int32_t</code></div><p>Numeric ID for the participant.</p></td></tr><tr><td><code>participant_key</code></td><td><div><code>std::optional< std::string ></code></div><p><a href="https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/participant#structmeet_1_1_participant">Participant</a> key of associated participant.</p></td></tr><tr><td><code>phone_user</code></td><td><div><code>std::optional< PhoneUser ></code></div></td></tr><tr><td><code>signed_in_user</code></td><td><div><code>std::optional< SignedInUser ></code></div></td></tr><tr><td><code>type</code></td><td><div><code>Type</code></div><p>The type of participant.</p></td></tr></tbody></table>

## Public types

### Type

```
meet::Participant::Type
```

## Public attributes

### anonymous\_user

```
std::optional< AnonymousUser > meet::Participant::anonymous_user
```

### name

```
std::optional< std::string > meet::Participant::name
```

[Participant](./participant.md#structmeet_1_1_participant) resource name, not display name.

There is a many (participant) to one (media entry) relationship.

**Format:** `conferenceRecords/{conference_record}/participants/{participant}`

Usethis to correlate with other media entries produced by the same participant. For example, a participant with multiple devices active in the same conference.

Unused for now.

**See also:** [Meet REST API: conferenceRecords.participants](../../../../../api/reference/rest/v2/conferenceRecords.participants.md)

### participant\_id

```
int32_t meet::Participant::participant_id
```

Numeric ID for the participant.

Will eventually be deprecated in favor of `name`.

### participant\_key

```
std::optional< std::string > meet::Participant::participant_key
```

[Participant](./participant.md#structmeet_1_1_participant) key of associated participant.

The user must construct the resource name from this field to create a Meet API reference.

**Format:** `participants/{participant}`

You can retrieve the conference record using [this guide](../../../../../api/guides/conferences.md) and use the conference record to construct the participant name in the format of `conferenceRecords/{conference_record}/participants/{participant}`.

**See also:** [Meet REST API: Work with conferences](../../../../../api/guides/conferences.md)

### phone\_user

```
std::optional< PhoneUser > meet::Participant::phone_user
```

### signed\_in\_user

```
std::optional< SignedInUser > meet::Participant::signed_in_user
```

### type

```
Type meet::Participant::type
```

The type of participant.

This is used to determine which of the following fields are populated.
