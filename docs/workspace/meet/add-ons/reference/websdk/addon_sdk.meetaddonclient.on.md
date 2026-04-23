---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/addon_sdk.meetaddonclient.on
root: workspace
fetched_at: 2026-04-23T15:30:17.426Z
---

# Method signature MeetAddonClient.on

## Method signature MeetAddonClient.on

Provides access to the [`AddonCallbacks`](./addon_sdk.addoncallbacks.md.md) that the add-on can utilize.

## Signature

```
on<T extends keyof AddonCallbacks>(
    eventId: T,
    eventHandler: AddonCallbacks[T],
  ): void;
```

## Type parameters

| Name | Optional | Constraint | Default |
| --- | --- | --- | --- |
| `T` | No | `keyof AddonCallbacks` |  |

## Details

| Optional | No |
| --- | --- |

## Parameters

| Name | Type | Optional | Description |
| --- | --- | --- | --- |
| `eventId` | `T` | No |  |
| `eventHandler` | `AddonCallbacks[T]` | No |  |

## Returns

`void`
