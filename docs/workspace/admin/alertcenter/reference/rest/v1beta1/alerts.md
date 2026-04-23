---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/alerts
root: workspace
fetched_at: 2026-04-23T15:23:27.888Z
---

# REST Resource: alerts

## Resource: Alert

An alert affecting a customer.

JSON representation

```
{
  "customerId": string,
  "alertId": string,
  "createTime": string,
  "startTime": string,
  "endTime": string,
  "type": string,
  "source": string,
  "data": {
    "@type": string,
    field1: ...,
    ...
  },
  "securityInvestigationToolLink": string,
  "deleted": boolean,
  "metadata": {
    object (AlertMetadata)
  },
  "updateTime": string,
  "etag": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Output only. The unique identifier of the Google Workspace account of the customer.</p></td></tr><tr><td><code>alertId</code></td><td><p><code>string</code></p><p>Output only. The unique identifier for the alert.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this alert was created.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Required. The time the event that caused this alert was started or detected.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Optional. The time the event that caused this alert ceased being active. If provided, the end time must not be earlier than the start time. If not provided, it indicates an ongoing alert.</p></td></tr><tr><td><code>type</code></td><td><p><code>string</code></p><p>Required. The type of the alert. This is output only after alert is created. For a list of available alert types see <a href="https://developers.google.com/workspace/admin/alertcenter/reference/alert-types">Google Workspace Alert types</a>.</p></td></tr><tr><td><code>source</code></td><td><p><code>string</code></p><p>Required. A unique identifier for the system that reported the alert. This is output only after alert is created.</p><p>Supported sources are any of the following:</p><ul><li>Google Operations</li><li>Mobile device management</li><li>Gmail phishing</li><li>Data Loss Prevention</li><li>Domain wide takeout</li><li>State sponsored attack</li><li>Google identity</li><li>Apps outage</li></ul></td></tr><tr><td><code>data</code></td><td><p><code>object</code></p><p>Optional. The data associated with this alert, for example <code>google.apps.alertcenter.type.DeviceCompromised</code>.</p></td></tr><tr><td><code>securityInvestigationToolLink</code></td><td><p><code>string</code></p><p>Output only. An optional <a href="https://support.google.com/a/answer/7575955">Security Investigation Tool</a> query for this alert.</p></td></tr><tr><td><code>deleted</code></td><td><p><code>boolean</code></p><p>Output only. <code>True</code> if this alert is marked for deletion.</p></td></tr><tr><td><code>updateTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this alert was last updated.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>Optional. <code>etag</code> is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the <code>etag</code> in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An <code>etag</code> is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert.</p><p>If no <code>etag</code> is provided in the call to update alert, then the existing alert is overwritten blindly.</p></td></tr></tbody></table>

## AlertMetadata

JSON representation

```
{
  "customerId": string,
  "alertId": string,
  "status": string,
  "assignee": string,
  "updateTime": string,
  "severity": string,
  "etag": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>batchDelete</h3></td><td>Performs batch delete operation on alerts.</td></tr><tr><td><h3>batchUndelete</h3></td><td>Performs batch undelete operation on alerts.</td></tr><tr><td><h3>delete</h3></td><td>Marks the specified alert for deletion.</td></tr><tr><td><h3>get</h3></td><td>Gets the specified alert.</td></tr><tr><td><h3>getMetadata</h3></td><td>Returns the metadata of an alert.</td></tr><tr><td><h3>list</h3></td><td>Lists the alerts.</td></tr><tr><td><h3>undelete</h3></td><td>Restores, or "undeletes", an alert that was marked for deletion within the past 30 days.</td></tr></tbody></table>
