---
source: https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/GmailMessageInfo
root: workspace
fetched_at: 2026-04-23T15:23:23.419Z
---

# GmailMessageInfo

Details of a message in phishing spike alert.

JSON representation

```
{
  "messageId": string,
  "md5HashMessageBody": string,
  "messageBodySnippet": string,
  "md5HashSubject": string,
  "subjectText": string,
  "attachmentsSha256Hash": [
    string
  ],
  "recipient": string,
  "date": string,
  "sentTime": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>messageId</code></td><td><p><code>string</code></p><p>The message ID.</p></td></tr><tr><td><code>md5HashMessageBody</code></td><td><p><code>string</code></p><p>The hash of the message body text.</p></td></tr><tr><td><code>messageBodySnippet</code></td><td><p><code>string</code></p><p>The snippet of the message body text (only available for reported emails).</p></td></tr><tr><td><code>md5HashSubject</code></td><td><p><code>string</code></p><p>The MD5 Hash of email's subject (only available for reported emails).</p></td></tr><tr><td><code>subjectText</code></td><td><p><code>string</code></p><p>The email subject text (only available for reported emails).</p></td></tr><tr><td><code>attachmentsSha256Hash[]</code></td><td><p><code>string</code></p><p>The <code>SHA256</code> hash of email's attachment and all MIME parts.</p></td></tr><tr><td><code>recipient</code></td><td><p><code>string</code></p><p>The recipient of this email.</p></td></tr><tr><td><code>date</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The date of the event related to this email.</p></td></tr><tr><td><code>sentTime</code></td><td><p><code>string (<code>Timestamp</code> format)</code></p><p>The sent time of the email.</p></td></tr></tbody></table>
