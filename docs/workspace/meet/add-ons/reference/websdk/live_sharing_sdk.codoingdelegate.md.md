---
source: https://developers.google.com/workspace/meet/add-ons/reference/websdk/live_sharing_sdk.codoingdelegate.md
root: workspace
fetched_at: 2026-04-23T15:30:21.008Z
---

# Interface CoDoingDelegate

## Interface CoDoingDelegate

Host-provided set of callbacks required to operate a CoDoing experience.

## Signature

```
interface CoDoingDelegate extends CoActivityDelegate
```

## Heritage

| Extends | `CoActivityDelegate` |
| --- | --- |

## Property signatures

| Name | Description |
| --- | --- |
| [`activityTitle`](./live_sharing_sdk.coactivitydelegate.activitytitle.md.md) | User-suitable string describing the CoActivity.   *(Inherited from [`CoActivityDelegate`](./live_sharing_sdk.coactivitydelegate.md.md))* |

## Method signatures

| Name | Description |
| --- | --- |
| [`onCoDoingStateChanged(newState)`](./live_sharing_sdk.codoingdelegate.oncodoingstatechanged.md.md) | Callback for state updates broadcast by other participants in the meeting. |
