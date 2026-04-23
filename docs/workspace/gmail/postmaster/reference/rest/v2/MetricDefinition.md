---
source: https://developers.google.com/workspace/gmail/postmaster/reference/rest/v2/MetricDefinition
root: workspace
fetched_at: 2026-04-23T15:30:02.564Z
---

# MetricDefinition

Defines a specific metric to query, including a user-defined name, the base metric type, and optional filters.

JSON representation

```
{
  "name": string,
  "baseMetric": {
    object (BaseMetric)
  },
  "filter": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>name</code></td><td><p><code>string</code></p><p>Required. The user-defined name for this metric. This name will be used as the key for this metric's value in the response.</p></td></tr><tr><td><code>baseMetric</code></td><td><p><code>object (<code>BaseMetric</code>)</code></p><p>Required. The underlying metric to query.</p></td></tr><tr><td><code>filter</code></td><td><p><code>string</code></p><p>Optional. Optional filters to apply to the metric.</p></td></tr></tbody></table>

## BaseMetric

Specifies the base metric to query, which can be a predefined standard metric or a user-defined custom metric (if supported in the future).

JSON representation

```
{

  "standardMetric": enum (StandardMetric)
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>metric</code>. The specific metric to query. <code>metric</code> can be only one of the following:</td></tr><tr><td><code>standardMetric</code></td><td><p><code>enum (<code>StandardMetric</code>)</code></p><p>A predefined standard metric.</p></td></tr></tbody></table>

## StandardMetric

Enumerates the predefined standard metrics that can be queried.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>STANDARD_METRIC_UNSPECIFIED</code></td><td>Unspecified standard metric. This value should not be used directly.</td></tr><tr><td><code>SPAM_RATE</code></td><td>Predefined metric for spam rate.</td></tr><tr><td><code>AUTH_SUCCESS_RATE</code></td><td>The success rate of authentication mechanisms (DKIM, SPF, DMARC). Filter must be of type auth_type = " <type>" where <type>is one of: [spf, dkim, dmarc]</type></type></td></tr><tr><td><code>TLS_ENCRYPTION_MESSAGE_COUNT</code></td><td>The rate of messages that were TLS encrypted in transit Filter must be of type traffic_direction = " <type>" where <type>is one of: [inbound, outbound]</type></type></td></tr><tr><td><code>TLS_ENCRYPTION_RATE</code></td><td>The rate of messages that were TLS encrypted in transit Filter must be of type traffic_direction = " <type>" where <type>is one of: [inbound, outbound]</type></type></td></tr><tr><td><code>DELIVERY_ERROR_COUNT</code></td><td><p>The total count of delivery errors encountered (temporary or permanent rejects). The <code>filter</code> field supports a limited syntax. Supported formats are:</p><ul><li>Empty: No filter is applied.</li><li><code>error_type</code> = " <type>"</type></li><li><code>error_type</code> = " <type>" AND <code>error_reason</code> = " <reason>"</reason></type></li></ul><p>If an empty filter is provided, the metric will be aggregated across all error types and reasons. If only <code>error_type</code> is specified, the metric will be aggregated across all reasons for that type.</p><p>Supported <type>values:</type></p><ul><li>reject</li><li>temp_fail</li></ul><p>Supported <reason>values depend on the <type>:</type></reason></p><ul><li>For 'reject': [bad_attachment, bad_or_missing_ptr_record, ip_in_rbls, low_domain_reputation, low_ip_reputation, spammy_content, stamp_policy_error, other]</li><li>For 'temp_fail': [anomalous_traffic_pattern, other]</li></ul></td></tr><tr><td><code>DELIVERY_ERROR_RATE</code></td><td><p>Delivery error rate for the specified delivery error type. The <code>filter</code> field supports a limited syntax. Supported formats are:</p><ul><li>Empty: No filter is applied.</li><li><code>error_type</code> = " <type>"</type></li><li><code>error_type</code> = " <type>" AND <code>error_reason</code> = " <reason>"</reason></type></li></ul><p>If an empty filter is provided, the metric will be aggregated across all error types and reasons. If only <code>error_type</code> is specified, the metric will be aggregated across all reasons for that type.</p><p>Supported <type>values:</type></p><ul><li>reject</li><li>temp_fail</li></ul><p>Supported <reason>values depend on the <type>:</type></reason></p><ul><li>For 'reject': [bad_attachment, bad_or_missing_ptr_record, ip_in_rbls, low_domain_reputation, low_ip_reputation, spammy_content, stamp_policy_error, other]</li><li>For 'temp_fail': [anomalous_traffic_pattern, other]</li></ul></td></tr></tbody></table>
