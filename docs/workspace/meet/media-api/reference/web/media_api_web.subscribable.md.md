---
source: https://developers.google.com/workspace/meet/media-api/reference/web/media_api_web.subscribable.md
root: workspace
fetched_at: 2026-04-23T15:31:10.872Z
---

# Interface Subscribable

A helper class that can be used to get and subscribe to updates on a value.

## Signature

```
interface Subscribable<T>
```

## Type parameters

| Name | Optional | Constraint | Default |
| --- | --- | --- | --- |
| `T` | No |  |  |

## Method signatures

| Name | Description |
| --- | --- |
| [`get()`](./media_api_web.subscribable.get.md.md) |  |
| [`subscribe(callback)`](./media_api_web.subscribable.subscribe.md.md) | Allows a callback to be added. This callback will be called whenever the value is updated. |
| [`unsubscribe(callback)`](./media_api_web.subscribable.unsubscribe.md.md) | Removes the callback from the list of subscribers. The original callback instance must be passed in as an argument. |
