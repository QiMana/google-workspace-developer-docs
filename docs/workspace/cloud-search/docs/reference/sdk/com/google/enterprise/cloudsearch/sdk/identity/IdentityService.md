---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentityService
root: workspace
fetched_at: 2026-04-23T15:26:35.809Z
---

# IdentityService

Known Indirect Subclasses

[IdentityServiceImpl](./IdentityServiceImpl.md)

Access point between the connector developer and Google APIs for syncing identities.

### Inherited Method Summary

From interface com.google.common.util.concurrent.Service

| abstract void | addListener(Service.Listener arg0, Executor arg1) |
| --- | --- |
| abstract void | awaitRunning() |
| abstract void | awaitRunning(long arg0, TimeUnit arg1) |
| abstract void | awaitTerminated(long arg0, TimeUnit arg1) |
| abstract void | awaitTerminated() |
| abstract Throwable | failureCause() |
| abstract boolean | isRunning() |
| abstract Service | startAsync() |
| abstract Service.State | state() |
| abstract Service | stopAsync() |
