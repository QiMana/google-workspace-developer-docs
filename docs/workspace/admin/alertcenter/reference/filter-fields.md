---
source: https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields
root: workspace
fetched_at: 2026-04-23T15:23:21.105Z
---

# Supported query filter fields

See [Query filters](../guides/query-filters.md) for reference on filter syntax, and review the following filter examples.

## Fields supported by alerts.list

<table><thead><tr><th colspan="2">Filter fields</th></tr></thead><tbody><tr><td><code>alertId</code></td><td><p>Filters alerts by alert ID.</p><p>Value must be a <code>string</code>.</p></td></tr><tr><td><code>type</code></td><td><p>Filters alerts by alert type.</p><p>Value must be a <code>string</code>. For possible values, see the <a href="https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/alerts#alert-types"><code>Alert.type</code> field description</a>.</p></td></tr><tr><td><code>source</code></td><td><p>Filters alerts by alert source.</p><p>Value must be a <code>string</code>. For possible values, see the <a href="https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/alerts#alert-types"><code>Alert.type</code> field description</a>.</p></td></tr><tr><td><code>createTime</code></td><td><p>Filters alerts by alert creation time.</p><p>Value must be a <code>string</code> in <code>Timestamp</code> format. Use an <a href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> date-time string (for example, <code>"2018-01-01T00:00:00Z"</code>).</p></td></tr><tr><td><code>startTime</code></td><td><p>Filters alerts by alert start time.</p><p>Value must be a <code>string</code> in <code>Timestamp</code> format. Use an <a href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> date-time string (for example, <code>"2018-01-01T00:00:00Z"</code>).</p></td></tr><tr><td><code>endTime</code></td><td><p>Filters alerts by alert end time.</p><p>Value must be a <code>string</code> in <code>Timestamp</code> format. Use an <a href="https://tools.ietf.org/html/rfc3339">RFC 3339</a> date-time string (for example, <code>"2018-01-01T00:00:00Z"</code>).</p></td></tr></tbody></table>

### List query examples

- To query for all alerts created on or after April 5, 2018:
	`createTime >= "2018-04-05T00:00:00Z"`
- To query for all alerts from the source "Gmail phishing":
	`source:"Gmail phishing"`
- To query for all alerts that started in 2017:
	`startTime >= "2017-01-01T00:00:00Z" AND startTime < "2018-01-01T00:00:00Z"`
- To query for all user-reported phishing alerts from the source "Gmail phishing":
	`type:"User reported phishing" source:"Gmail phishing"`

## Fields supported by alerts.feedback.list

### Feedback list query examples

- To query feedback for alerts with IDs `alertId01` or `alertId02`:
	`alertId = alertId01 OR alertId = alertId02`
- To query feedback for an alert `alertId01` with feedback ID `feedbackId01`:
	`alertId = alertId01 AND feedbackId = feedbackId01`
