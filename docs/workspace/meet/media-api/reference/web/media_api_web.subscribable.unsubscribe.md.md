---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.subscribable.unsubscribe.md
root: workspace
fetched_at: 2026-04-23T15:31:11.437Z
---

# Method signature Subscribable.unsubscribe

Removes the callback from the list of subscribers. The original callback instance must be passed in as an argument.

## Signature

```
unsubscribe(callback: (value: T) => void): boolean;
```

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `callback` | `(value: T) => void` | No |  |

## Returns

`boolean`

True if the callback was removed, false if it was not found.
