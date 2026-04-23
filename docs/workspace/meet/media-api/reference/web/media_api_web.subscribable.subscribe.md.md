---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.subscribable.subscribe.md
root: workspace
fetched_at: 2026-04-23T15:31:11.678Z
---

# Method signature Subscribable.subscribe

## Method signature Subscribable.subscribe

Allows a callback to be added. This callback will be called whenever the value is updated.

## Signature

```
subscribe(callback: (value: T) => void): () => void;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `callback` | `(value: T) => void` | No |  |

## Returns

`() => void`

An unsubscribe function.
