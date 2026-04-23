---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/class/meet/media-api-client-interface
root: workspace
fetched_at: 2026-04-23T15:30:35.134Z
---

# meet::MediaApiClientInterface

## meet::MediaApiClientInterface

**This is an abstract class.**

`#include <media_api_client_interface.h>`

Interface for the Meet Media API client.

## Summary

This client implementation is meant to be used for one connection lifetime and then thrown away; if integrators need a new connection, they should create a new instance of `MediaApiClientInterface`.

### Constructors and Destructors

`~MediaApiClientInterface()`

<table><tbody><tr><th colspan="2"><h3>Public functions</h3></th></tr><tr><td><code>ConnectActiveConference(absl::string_view join_endpoint, absl::string_view conference_id, absl::string_view access_token)=0</code></td><td><div><code>virtual absl::Status</code></div><p>Attempts to connect with Meet servers.</p></td></tr><tr><td><code>LeaveConference(int64_t request_id)=0</code></td><td><div><code>virtual absl::Status</code></div><div>Convenience method for sending a <code>SessionControlChannelFromClient</code> request with a <code>LeaveRequest</code> to Meet servers.</div></td></tr><tr><td><code>SendRequest(const ResourceRequest & request)=0</code></td><td><div><code>virtual absl::Status</code></div><p>Sends a resource request to Meet servers.</p></td></tr></tbody></table>

<table><tbody><tr><th colspan="2"><h3>Public static functions</h3></th></tr><tr><td><code>Create(const MediaApiClientConfiguration & api_config, rtc::scoped_refptr< MediaApiClientObserverInterface > api_session_observer)</code></td><td><div><code>absl::StatusOr< std::unique_ptr< MediaApiClientInterface > ></code></div><div>Creates a new instance of <code>MediaApiClientInterface</code>.</div></td></tr></tbody></table>

## Public functions

### ConnectActiveConference

```
virtual absl::Status ConnectActiveConference(
  absl::string_view join_endpoint,
  absl::string_view conference_id,
  absl::string_view access_token
)=0
```

Attempts to connect with Meet servers.

This process involves communicating the intent to join an active Meet conference. It establishes the signaled SRTP and SCTP connections with the backend.

- If the client successfully joins the conference, `MediaApiClientObserverInterface::OnJoined` will be called.
- If this method returns OK and joining fails, `MediaApiClientObserverInterface::OnDisconnected` method will be called.
- If the client successfully joins, `MediaApiClientObserverInterface::OnDisconnected` will be invoked when the client leaves the conference for whatever reason.

Once fully joined, if audio was enabled, the client will begin receiving any available streams immediately. If video was enabled, the client will not receive any video streams until a `meet::SetVideoAssignmentRequest` is successfully sent to Meet servers and applied.

<table><thead><tr><th colspan="2">Details</th></tr></thead><tbody><tr><td>Parameters</td><td><table><tbody><tr><td><code>join_endpoint</code></td><td><p>Must be a valid URL, including the protocol and host. There aren't very robust checks performed on the provided URL. It is expected that the URL is well-formed.</p></td></tr></tbody></table></td></tr></tbody></table>

### LeaveConference

```
virtual absl::Status LeaveConference(
  int64_t request_id
)=0
```

Convenience method for sending a `SessionControlChannelFromClient` request with a `LeaveRequest` to Meet servers.

This tells the server that the client should be disconnected from the conference. The request will use the provided request ID. See `MediaApiClientInterface::SendRequest` for more information.

If successful, the client will receive a `SessionControlChannelToClient` resource update with the same request ID, a session status of `meet::SessionStatus::ConferenceConnectionState::kDisconnected`, and a `meet::LeaveResponse`.

If this is called before the client is fully joined, the client will immediately transition to the disconnected state, as the Meet servers will not necessarily respond to the request until the client is fully joined.

### SendRequest

```
virtual absl::Status SendRequest(
  const ResourceRequest & request
)=0
```

Sends a resource request to Meet servers.

<table><thead><tr><th colspan="2">Details</th></tr></thead><tbody><tr><td>Parameters</td><td><table><tbody><tr><td><code>request</code></td><td><div>This request must have a non-zero, unique <code>request_id</code>. For example, a <code>SessionControlRequest</code> 's request ID must be non-zero and unique to other requests' IDs. The request ID can be used to associate the request to the response or error in the <code>MediaApiClientObserverInterface</code>.</div></td></tr></tbody></table></td></tr></tbody></table>

### ~MediaApiClientInterface

```
virtual  ~MediaApiClientInterface()=default
```

## Public static functions

### Create

```
absl::StatusOr< std::unique_ptr< MediaApiClientInterface > > Create(
  const MediaApiClientConfiguration & api_config,
  rtc::scoped_refptr< MediaApiClientObserverInterface > api_session_observer
)
```

Creates a new instance of `MediaApiClientInterface`.

It is configured with the required codecs to support streaming media from Meet conferences. Required SCTP data channels will be opened and the proper number of SRTP streams will be signaled with Meet servers.

<table><thead><tr><th colspan="2">Details</th></tr></thead><tbody><tr><td>Parameters</td><td><table><tbody><tr><td><code>api_session_observer</code></td><td><p>This observer will be retained by the client until the client is destroyed.</p></td></tr></tbody></table></td></tr></tbody></table>
