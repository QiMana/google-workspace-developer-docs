---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/class/meet/media-api-client-factory-interface
root: workspace
fetched_at: 2026-04-23T15:30:34.956Z
---

# meet::MediaApiClientFactoryInterface

## meet::MediaApiClientFactoryInterface

**This is an abstract class.**

`#include <media_api_client_factory_interface.h>`

Interface for instantiating `MediaApiClientInterface`.

## Summary

### Constructors and Destructors

`~MediaApiClientFactoryInterface()`

<table><tbody><tr><th colspan="2"><h3>Public functions</h3></th></tr><tr><td><code>CreateMediaApiClient(const MediaApiClientConfiguration & api_config, rtc::scoped_refptr< MediaApiClientObserverInterface > api_session_observer)=0</code></td><td><div><code>virtual absl::StatusOr< std::unique_ptr< MediaApiClientInterface > ></code></div><div>Creates a <code>MediaApiClientInterface</code> instance.</div></td></tr></tbody></table>

## Public functions

### CreateMediaApiClient

```
virtual absl::StatusOr< std::unique_ptr< MediaApiClientInterface > > CreateMediaApiClient(
  const MediaApiClientConfiguration & api_config,
  rtc::scoped_refptr< MediaApiClientObserverInterface > api_session_observer
)=0
```

Creates a `MediaApiClientInterface` instance.

### ~MediaApiClientFactoryInterface

```
virtual  ~MediaApiClientFactoryInterface()=default
```
