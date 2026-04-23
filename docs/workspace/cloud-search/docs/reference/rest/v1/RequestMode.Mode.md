---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/RequestMode.Mode
root: workspace
fetched_at: 2026-04-23T15:26:12.326Z
---

# RequestMode.Mode

## RequestMode.Mode

Mode determines if the request is processed in real time or is executed at a future time. Cloud Search accepts higher throughput for asynchronous updates, but these updates also have higher latency from acceptance to serving.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>UNSPECIFIED</code></td><td>The priority is not specified in the update request. Leaving priority unspecified results in an update failure.</td></tr><tr><td><code>SYNCHRONOUS</code></td><td>For real-time updates.</td></tr><tr><td><code>ASYNCHRONOUS</code></td><td>For changes that are executed after the response is sent back to the caller.</td></tr></tbody></table>
