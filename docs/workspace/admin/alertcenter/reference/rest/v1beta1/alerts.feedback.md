---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/alerts.feedback
root: workspace
fetched_at: 2026-04-23T15:23:28.191Z
---

# REST Resource: alerts.feedback

## REST Resource: alerts.feedback

## Resource: AlertFeedback

A customer feedback about an alert.

JSON representation

```
{
  "customerId": string,
  "alertId": string,
  "feedbackId": string,
  "createTime": string,
  "type": enum (AlertFeedbackType),
  "email": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>Output only. The unique identifier of the Google Workspace account of the customer.</p></td></tr><tr><td><code>alertId</code></td><td><p><code>string</code></p><p>Output only. The alert identifier.</p></td></tr><tr><td><code>feedbackId</code></td><td><p><code>string</code></p><p>Output only. The unique identifier for the feedback.</p></td></tr><tr><td><code>createTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>Output only. The time this feedback was created.</p></td></tr><tr><td><code>type</code></td><td><p><code>enum (<code>AlertFeedbackType</code>)</code></p><p>Required. The type of the feedback.</p></td></tr><tr><td><code>email</code></td><td><p><code>string</code></p><p>Output only. The email of the user that provided the feedback.</p></td></tr></tbody></table>

## AlertFeedbackType

The type of alert feedback.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>ALERT_FEEDBACK_TYPE_UNSPECIFIED</code></td><td>The feedback type is not specified.</td></tr><tr><td><code>NOT_USEFUL</code></td><td>The alert report is not useful.</td></tr><tr><td><code>SOMEWHAT_USEFUL</code></td><td>The alert report is somewhat useful.</td></tr><tr><td><code>VERY_USEFUL</code></td><td>The alert report is very useful.</td></tr></tbody></table>

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2"><h2>Methods</h2></th></tr></thead><tbody><tr><td><h3>create</h3></td><td>Creates new feedback for an alert.</td></tr><tr><td><h3>list</h3></td><td>Lists all the feedback for an alert.</td></tr></tbody></table>
