---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/SubscriptionChannel
root: workspace
fetched_at: 2026-04-23T15:23:34.065Z
---

# SubscriptionChannel

An notification channel used to watch for resource changes.

JSON representation

```
{
  "id": string,
  "token": string,
  "expiration": string,
  "type": string,
  "address": string,
  "payload": boolean,
  "params": {
    string: string,
    ...
  },
  "resourceId": string,
  "resourceUri": string,
  "kind": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>A UUID or similar unique string that identifies this channel.</p></td></tr><tr><td><code>token</code></td><td><p><code>string</code></p><p>An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.</p></td></tr><tr><td><code>expiration</code></td><td><p><code>string (int64 format)</code></p><p>Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.</p></td></tr><tr><td><code>type</code></td><td><p><code>string</code></p><p>The type of delivery mechanism used for this channel.</p></td></tr><tr><td><code>address</code></td><td><p><code>string</code></p><p>The address where notifications are delivered for this channel.</p></td></tr><tr><td><code>payload</code></td><td><p><code>boolean</code></p><p>A Boolean value to indicate whether payload is wanted. Optional.</p></td></tr><tr><td><code>params</code></td><td><p><code>map (key: string, value: string)</code></p><p>Additional parameters controlling delivery channel behavior. Optional. For example, <code>params.ttl</code> specifies the time-to-live in seconds for the notification channel, where the default is 2 hours and the maximum TTL is 2 days.</p><p>An object containing a list of <code>"key": value</code> pairs. Example: <code>{ "name": "wrench", "mass": "1.3kg", "count": "3" }</code>.</p></td></tr><tr><td><code>resourceId</code></td><td><p><code>string</code></p><p>An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.</p></td></tr><tr><td><code>resourceUri</code></td><td><p><code>string</code></p><p>A version-specific identifier for the watched resource.</p></td></tr><tr><td><code>kind</code></td><td><p><code>string</code></p><p>Identifies this as a notification channel used to watch for changes to a resource, which is <code>api#channel</code>.</p></td></tr></tbody></table>
