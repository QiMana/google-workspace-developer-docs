---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/class/meet/media-api-client-observer-interface
root: workspace
fetched_at: 2026-04-23T15:30:35.247Z
---

# meet::MediaApiClientObserverInterface

## meet::MediaApiClientObserverInterface

**This is an abstract class.**

`#include <media_api_client_interface.h>`

Interface for observing client events.

## Summary

Methods are invoked on internal threads, and therefore observer implementations must offload non-trivial work to other threads. Otherwise, they risk blocking the client.

### Inheritance

Inherits from: RefCountInterface

### Constructors and Destructors

`~MediaApiClientObserverInterface()`

<table><tbody><tr><th colspan="2"><h3>Public functions</h3></th></tr><tr><td><code>OnAudioFrame(AudioFrame frame)=0</code></td><td><div><code>virtual void</code></div><p>Callback for receiving audio frames.</p></td></tr><tr><td><code>OnDisconnected(absl::Status status)=0</code></td><td><div><code>virtual void</code></div><p>Invoked when the client disconnects for whatever reason.</p></td></tr><tr><td><code>OnJoined()=0</code></td><td><div><code>virtual void</code></div><div>Invoked when the client has entered the <code>meet::SessionStatus::ConferenceConnectionState::kJoined</code> state.</div></td></tr><tr><td><code>OnResourceUpdate(ResourceUpdate update)=0</code></td><td><div><code>virtual void</code></div><p>Invoked when a resource update is received from Meet servers.</p></td></tr><tr><td><code>OnVideoFrame(VideoFrame frame)=0</code></td><td><div><code>virtual void</code></div><p>Callbacks for receiving video frames.</p></td></tr></tbody></table>

## Public functions

### OnAudioFrame

```
virtual void OnAudioFrame(
  AudioFrame frame
)=0
```

Callback for receiving audio frames.

Audio frames will not be received for muted participants.

This will only be invoked while in the `meet::SessionStatus::ConferenceConnectionState::kJoined` state.

### OnDisconnected

```
virtual void OnDisconnected(
  absl::Status status
)=0
```

Invoked when the client disconnects for whatever reason.

- This will only be called after `MediaApiClientInterface::ConnectActiveConference` is called.
- This will be called once and only once, either before or after `MediaApiClientObserverInterface::OnJoined` is called.
- Once this is invoked, no other callbacks will be invoked.

Disconnections are either graceful or ungraceful. Disconnections are considered graceful if the client receives a `SessionControlChannelToClient` resource update with a session status of `meet::SessionStatus::ConferenceConnectionState::kDisconnected`, or if `MediaApiClientInterface::LeaveConference` is called while the client is joining the conference. All other disconnections are considered ungraceful (`PeerConnection` closed, Meet servers unreachable, etc).

This client implementation passes an OK status for graceful disconnections and an error status for ungraceful disconnections. Graceful disconnections can be analyzed by checking the `SessionControlChannelToClient` resource update received via `MediaApiClientObserverInterface::OnResourceUpdate`.

### OnJoined

```
virtual void OnJoined()=0
```

Invoked when the client has entered the `meet::SessionStatus::ConferenceConnectionState::kJoined` state.

Once this is invoked, the client is fully operational and will remain in this state until `MediaApiClientObserverInterface::OnDisconnected` is invoked.

### OnResourceUpdate

```
virtual void OnResourceUpdate(
  ResourceUpdate update
)=0
```

Invoked when a resource update is received from Meet servers.

This can be in response to a request sent via `MediaApiClientInterface::SendRequest` or a push from Meet servers.

This will only be invoked while in the `meet::SessionStatus::ConferenceConnectionState::kJoined` state.

### OnVideoFrame

```
virtual void OnVideoFrame(
  VideoFrame frame
)=0
```

Callbacks for receiving video frames.

Video frames will not be received for participants with their video disabled (i.e. their video is muted).

This will only be invoked while in the `meet::SessionStatus::ConferenceConnectionState::kJoined` state.

### ~MediaApiClientObserverInterface

```
~MediaApiClientObserverInterface() override=default
```
