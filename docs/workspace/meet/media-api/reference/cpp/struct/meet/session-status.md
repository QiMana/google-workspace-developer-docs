---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/session-status
root: workspace
fetched_at: 2026-04-23T15:30:37.451Z
---

# meet::SessionStatus

## meet::SessionStatus

`#include <session_control_resource.h>`

This is a singleton resource containing the status of the media session.

## Summary

<table><tbody><tr><th colspan="2"><h3>Public types</h3></th></tr><tr><td><code>ConferenceConnectionState{<br>&nbsp;&nbsp;kWaiting,<br>&nbsp;&nbsp;kJoined,<br>&nbsp;&nbsp;kDisconnected<br>}</code></td><td>enum</td></tr><tr><td><code>MeetingDisconnectReason{<br>&nbsp;&nbsp;kClientLeft,<br>&nbsp;&nbsp;kUserStopped,<br>&nbsp;&nbsp;kConferenceEnded,<br>&nbsp;&nbsp;kSessionUnhealthy<br>}</code></td><td>enum</td></tr></tbody></table>

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>connection_state =
      ConferenceConnectionState::kUnknown</code></td><td><div><code>ConferenceConnectionState</code></div></td></tr><tr><td><code>disconnect_reason = std::nullopt</code></td><td><div><code>std::optional< MeetingDisconnectReason ></code></div></td></tr></tbody></table>

## Public types

### ConferenceConnectionState

```
meet::SessionStatus::ConferenceConnectionState
```

<table><tbody><tr><th colspan="2">Properties</th></tr><tr><td><code>kDisconnected</code></td><td><p>Session is not connected to the conference.</p><p>This will be sent from the server when the client is no longer connected to the conference. This can occur for a variety of reasons, including the client being kicked from the conference, the client not being admitted into the conference, or the conference ending.</p></td></tr><tr><td><code>kJoined</code></td><td><p>Session has fully joined the conference.</p></td></tr><tr><td><code>kWaiting</code></td><td><p>Session is waiting to be admitted into the conference.</p><p>The client may never observe this state if it was admitted or rejected quickly.</p></td></tr></tbody></table>

### MeetingDisconnectReason

```
meet::SessionStatus::MeetingDisconnectReason
```

<table><tbody><tr><th colspan="2">Properties</th></tr><tr><td><code>kClientLeft</code></td><td><p>The Media API client sent a leave request.</p></td></tr><tr><td><code>kConferenceEnded</code></td><td><p>The conference ended.</p></td></tr><tr><td><code>kSessionUnhealthy</code></td><td><p>Something else went wrong with the session.</p></td></tr><tr><td><code>kUserStopped</code></td><td><p>A conference participant explicitly stopped the Media API session.</p></td></tr></tbody></table>

## Public attributes

### connection\_state

```
ConferenceConnectionState meet::SessionStatus::connection_state =
      ConferenceConnectionState::kUnknown
```

### disconnect\_reason

```
std::optional< MeetingDisconnectReason > meet::SessionStatus::disconnect_reason = std::nullopt
```
