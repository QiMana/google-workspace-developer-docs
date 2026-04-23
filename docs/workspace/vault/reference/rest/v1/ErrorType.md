---
source: https://developers.google.com/workspace/vault/reference/rest/v1/ErrorType
root: workspace
fetched_at: 2026-04-23T15:32:05.365Z
---

# ErrorType

## ErrorType

Error type when querying the account.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ERROR_TYPE_UNSPECIFIED</code></td><td>Default.</td></tr><tr><td><code>WILDCARD_TOO_BROAD</code></td><td>Permanent - prefix terms expanded to too many query terms.</td></tr><tr><td><code>TOO_MANY_TERMS</code></td><td>Permanent - query contains too many terms.</td></tr><tr><td><code>LOCATION_UNAVAILABLE</code></td><td>Transient - data in transit between storage replicas, temporarily unavailable.</td></tr><tr><td><code>UNKNOWN</code></td><td>Unrecognized error.</td></tr><tr><td><code>DEADLINE_EXCEEDED</code></td><td>Deadline exceeded when querying the account.</td></tr></tbody></table>
