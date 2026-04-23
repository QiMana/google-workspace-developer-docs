---
source: https://developers.google.com/workspace/meet/media-api/reference/cpp/struct/meet/layout-model
root: workspace
fetched_at: 2026-04-23T15:30:35.545Z
---

# meet::LayoutModel

## meet::LayoutModel

## Summary

<table><tbody><tr><th colspan="2"><h3>Public attributes</h3></th></tr><tr><td><code>canvases</code></td><td><div><code>std::vector< VideoCanvas ></code></div><p>The canvases that videos are assigned to from each virtual SSRC.</p></td></tr><tr><td><code>label</code></td><td><div><code>std::string</code></div><p>A client-specified identifier for this assignment.</p></td></tr></tbody></table>

## Public attributes

### canvases

```
std::vector< VideoCanvas > meet::LayoutModel::canvases
```

The canvases that videos are assigned to from each virtual SSRC.

Providing more canvases than exists virtual streams will result in an error status.

### label

```
std::string meet::LayoutModel::label
```

A client-specified identifier for this assignment.

The identifier will be used to reference a given `LayoutModel` in subsequent `VideoAssignment` resource update pushed from server to client.
