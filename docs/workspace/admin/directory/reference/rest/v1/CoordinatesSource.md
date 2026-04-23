---
source: https://developers.google.com/workspace/admin/directory/reference/rest/v1/CoordinatesSource
root: workspace
fetched_at: 2026-04-23T15:23:34.841Z
---

# CoordinatesSource

## CoordinatesSource

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>CLIENT_SPECIFIED</code></td><td>Building.coordinates are set to the coordinates included in the request.</td></tr><tr><td><code>RESOLVED_FROM_ADDRESS</code></td><td>Building.coordinates are automatically populated based on the postal address.</td></tr><tr><td><code>SOURCE_UNSPECIFIED</code></td><td>Defaults to <code>RESOLVED_FROM_ADDRESS</code> if postal address is provided. Otherwise, defaults to <code>CLIENT_SPECIFIED</code> if coordinates are provided.</td></tr></tbody></table>
