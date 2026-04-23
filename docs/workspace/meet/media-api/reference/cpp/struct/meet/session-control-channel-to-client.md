---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/session-control-channel-to-client
root: workspace
fetched_at: 2026-04-23T15:30:38.014Z
---

# meet::SessionControlChannelToClient

## meet::SessionControlChannelToClient

`#include <session_control_resource.h>`

The top-level transport container for messages sent from server to client in the `session-control` data channel.

## Summary

Any combination of fields may be set, but the message is never empty.

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>resources</code></td><td><div><code>std::vector< SessionControlResourceSnapshot ></code></div></td></tr><tr><td><code>response</code></td><td><div><code>std::optional< SessionControlResponse ></code></div></td></tr></tbody></table>

## Public attributes

### resources

```
std::vector< SessionControlResourceSnapshot > meet::SessionControlChannelToClient::resources
```

### response

```
std::optional< SessionControlResponse > meet::SessionControlChannelToClient::response
```
