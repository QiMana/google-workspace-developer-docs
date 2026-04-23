---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v2beta/AggregationGranularity
root: workspace
fetched_at: 2026-04-23T15:30:03.411Z
---

# AggregationGranularity

Defines the desired aggregation granularity for the statistics.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>AGGREGATION_GRANULARITY_UNSPECIFIED</code></td><td>Unspecified granularity. Defaults to DAILY.</td></tr><tr><td><code>DAILY</code></td><td>Statistics are aggregated on a daily basis. Each DomainStats entry in the response will correspond to a single day.</td></tr><tr><td><code>OVERALL</code></td><td>Statistics are aggregated over the entire requested time period. Each DomainStats entry in the response will represent the total for the period.</td></tr></tbody></table>
