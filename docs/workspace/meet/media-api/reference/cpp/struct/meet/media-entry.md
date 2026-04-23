---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/media-entry
root: workspace
fetched_at: 2026-04-23T15:30:35.698Z
---

# meet::MediaEntry

## meet::MediaEntry

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>audio_csrc = 0</code></td><td><div><code>uint32_t</code></div><p>The CSRC for any audio stream contributed by this participant.</p></td></tr><tr><td><code>audio_muted = false</code></td><td><div><code>bool</code></div><p>Signals if the audio stream is currently muted by the remote participant.</p></td></tr><tr><td><code>participant</code></td><td><div><code>std::optional< std::string ></code></div><p><a href="https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/participant#structmeet_1_1_participant">Participant</a> resource name, not display name.</p></td></tr><tr><td><code>participant_key</code></td><td><div><code>std::optional< std::string ></code></div><p><a href="https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/participant#structmeet_1_1_participant">Participant</a> key of associated participant.</p></td></tr><tr><td><code>presenter = false</code></td><td><div><code>bool</code></div><p>Signals if the current entry is presenting.</p></td></tr><tr><td><code>screenshare = false</code></td><td><div><code>bool</code></div><p>Signals if the current entry is a screenshare.</p></td></tr><tr><td><code>session</code></td><td><div><code>std::optional< std::string ></code></div><p><a href="https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/participant#structmeet_1_1_participant">Participant</a> session name.</p></td></tr><tr><td><code>session_name</code></td><td><div><code>std::optional< std::string ></code></div><p>The session ID of the media entry.</p></td></tr><tr><td><code>video_csrcs</code></td><td><div><code>std::vector< uint32_t ></code></div><p>The CSRC for any video stream contributed by this participant.</p></td></tr><tr><td><code>video_muted = false</code></td><td><div><code>bool</code></div><p>Signals if the video stream is currently muted by the remote participant.</p></td></tr></tbody></table>

## Public attributes

### audio\_csrc

```
uint32_t meet::MediaEntry::audio_csrc = 0
```

The CSRC for any audio stream contributed by this participant.

Will be zero if no stream is provided.

### audio\_muted

```
bool meet::MediaEntry::audio_muted = false
```

Signals if the audio stream is currently muted by the remote participant.

### participant

```
std::optional< std::string > meet::MediaEntry::participant
```

[Participant](https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/participant#structmeet_1_1_participant) resource name, not display name.

There is a many (participant) to one (media entry) relationship.

**Format:** `conferenceRecords/{conference_record}/participants/{participant}`

Use this to correlate with other media entries produced by the same participant. For example, a participant with multiple devices active in the same conference.

Unused for now.

**See also:** [Meet REST API: conferenceRecords.participants](https://developers.google.com/meet/api/reference/rest/v2/conferenceRecords.participants)

### participant\_key

```
std::optional< std::string > meet::MediaEntry::participant_key
```

[Participant](https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/participant#structmeet_1_1_participant) key of associated participant.

The user must construct the resource name from this field to create a Meet API reference.

**Format:** `participants/{participant}`

You can retrieve the conference record using [this guide](https://developers.google.com/meet/api/guides/conferences) and use the conference record to construct the participant name in the format of `conferenceRecords/{conference_record}/participants/{participant}`

**See also:** [Meet REST API: Work with conferences](https://developers.google.com/meet/api/guides/conferences)

### presenter

```
bool meet::MediaEntry::presenter = false
```

Signals if the current entry is presenting.

### screenshare

```
bool meet::MediaEntry::screenshare = false
```

Signals if the current entry is a screenshare.

### session

```
std::optional< std::string > meet::MediaEntry::session
```

[Participant](https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/participant#structmeet_1_1_participant) session name.

There should be a one to one mapping of session to Media Entry.

**Format:** `conferenceRecords/{conference_record}/participants/{participant}/participantSessions/{participant_session}`

Unused for now.

**See also:** [Meet REST API: conferenceRecords.participants.participantSessions](https://developers.google.com/meet/api/reference/rest/v2/conferenceRecords.participants.participantSessions)

### session\_name

```
std::optional< std::string > meet::MediaEntry::session_name
```

The session ID of the media entry.

The user must construct the session name from this field to create an Meet API reference. This can be done by combining the conference record, participant key, and session ID.

**Format:** `participants/{participant}/participantSessions/{participant_session}`

You can retrieve the conference record using [this guide](https://developers.google.com/meet/api/guides/conferences) and use the conference record to construct the participant name in the format of `conferenceRecords/{conference_record}/participants/{participant}`

**See also:** [Meet REST API: Work with conferences](https://developers.google.com/meet/api/guides/conferences)

### video\_csrcs

```
std::vector< uint32_t > meet::MediaEntry::video_csrcs
```

The CSRC for any video stream contributed by this participant.

Will be empty if no stream is provided.

### video\_muted

```
bool meet::MediaEntry::video_muted = false
```

Signals if the video stream is currently muted by the remote participant.
