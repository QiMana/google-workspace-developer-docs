---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/GoogleOperations
root: workspace
fetched_at: 2026-04-23T15:23:25.082Z
---

# GoogleOperations

An incident reported by Google Operations for a Google Workspace application.

JSON representation

```
{
  "title": string,
  "description": string,
  "affectedUserEmails": [
    string
  ],
  "attachmentData": {
    object (Attachment)
  },
  "header": string,
  "domain": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>title</code></td><td><p><code>string</code></p><p>A one-line incident description.</p></td></tr><tr><td><code>description</code></td><td><p><code>string</code></p><p>A detailed, freeform incident description.</p></td></tr><tr><td><code>affectedUserEmails[]</code></td><td><p><code>string</code></p><p>The list of emails which correspond to the users directly affected by the incident.</p></td></tr><tr><td><code>attachmentData</code></td><td><p><code>object (<code>Attachment</code>)</code></p><p>Optional. Application-specific data for an incident, provided when the Google Workspace application which reported the incident cannot be completely restored to a valid state.</p></td></tr><tr><td><code>header</code></td><td><p><code>string</code></p><p>A header to display above the incident message. Typically used to attach a localized notice on the timeline for followup comms translations.</p></td></tr><tr><td><code>domain</code></td><td><p><code>string</code></p><p>Customer domain for email template personalization.</p></td></tr></tbody></table>
