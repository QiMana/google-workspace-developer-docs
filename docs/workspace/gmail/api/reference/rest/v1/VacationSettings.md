---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/VacationSettings
root: workspace
fetched_at: 2026-04-23T15:28:57.199Z
---

# VacationSettings

Vacation auto-reply settings for an account. These settings correspond to the ["Vacation responder"](https://support.google.com/mail/answer/25922) feature in the web interface.

JSON representation

```
{
  "enableAutoReply": boolean,
  "responseSubject": string,
  "responseBodyPlainText": string,
  "responseBodyHtml": string,
  "restrictToContacts": boolean,
  "restrictToDomain": boolean,
  "startTime": string,
  "endTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>enableAutoReply</code></td><td><p><code>boolean</code></p><p>Flag that controls whether Gmail automatically replies to messages.</p></td></tr><tr><td><code>responseSubject</code></td><td><p><code>string</code></p><p>Optional text to prepend to the subject line in vacation responses. In order to enable auto-replies, either the response subject or the response body must be nonempty.</p></td></tr><tr><td><code>responseBodyPlainText</code></td><td><p><code>string</code></p><p>Response body in plain text format. If both <code>responseBodyPlainText</code> and <code>responseBodyHtml</code> are specified, <code>responseBodyHtml</code> will be used.</p></td></tr><tr><td><code>responseBodyHtml</code></td><td><p><code>string</code></p><p>Response body in HTML format. Gmail will sanitize the HTML before storing it. If both <code>responseBodyPlainText</code> and <code>responseBodyHtml</code> are specified, <code>responseBodyHtml</code> will be used.</p></td></tr><tr><td><code>restrictToContacts</code></td><td><p><code>boolean</code></p><p>Flag that determines whether responses are sent to recipients who are not in the user's list of contacts.</p></td></tr><tr><td><code>restrictToDomain</code></td><td><p><code>boolean</code></p><p>Flag that determines whether responses are sent to recipients who are outside of the user's domain. This feature is only available for Google Workspace users.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string (int64 format)</code></p><p>An optional start time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives after the start time. If both <code>startTime</code> and <code>endTime</code> are specified, <code>startTime</code> must precede <code>endTime</code>.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string (int64 format)</code></p><p>An optional end time for sending auto-replies (epoch ms). When this is specified, Gmail will automatically reply only to messages that it receives before the end time. If both <code>startTime</code> and <code>endTime</code> are specified, <code>startTime</code> must precede <code>endTime</code>.</p></td></tr></tbody></table>
