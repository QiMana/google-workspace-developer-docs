---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/AccessApproval
root: workspace
fetched_at: 2026-04-23T15:23:22.497Z
---

# AccessApproval

Alert that is triggered when Google support requests to access customer data.

JSON representation

```
{
  "requestId": string,
  "scope": string,
  "tickets": [
    {
      object (SupportTicket)
    }
  ],
  "officeLocation": string,
  "justificationReason": [
    enum (Justification)
  ],
  "products": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>requestId</code></td><td><p><code>string</code></p><p>ID of the Access Approvals request. This is a helpful field when requesting support from Google.</p></td></tr><tr><td><code>scope</code></td><td><p><code>string</code></p><p>Scope of access, also known as a resource. This is further narrowed down by the product field.</p></td></tr><tr><td><code>tickets[]</code></td><td><p><code>object (<code>SupportTicket</code>)</code></p><p>Support tickets related to this Access Approvals request. Populated if there is an associated case number.</p></td></tr><tr><td><code>officeLocation</code></td><td><p><code>string</code></p><p>Office location of Google staff requesting access such as "US".</p></td></tr><tr><td><code>justificationReason[]</code></td><td><p><code>enum (<code>Justification</code>)</code></p><p>Justification for data access based on justification enums.</p></td></tr><tr><td><code>products[]</code></td><td><p><code>string</code></p><p>Products within scope of the Access Approvals request.</p></td></tr></tbody></table>

## SupportTicket

JSON representation

```
{
  "ticketId": string,
  "ticketUrl": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>ticketId</code></td><td><p><code>string</code></p><p>Support ticket ID</p></td></tr><tr><td><code>ticketUrl</code></td><td><p><code>string</code></p><p>Link to support ticket</p></td></tr></tbody></table>
