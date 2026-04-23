---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/Format
root: workspace
fetched_at: 2026-04-23T15:28:56.516Z
---

# Format

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>minimal</code></td><td>Returns only email message ID and labels; does not return the email headers, body, or payload.</td></tr><tr><td><code>full</code></td><td>Returns the full email message data with body content parsed in the <code>payload</code> field; the <code>raw</code> field is not used. Format cannot be used when accessing the api using the gmail.metadata scope.</td></tr><tr><td><code>raw</code></td><td>Returns the full email message data with body content in the <code>raw</code> field as a base64url encoded string; the <code>payload</code> field is not used. Format cannot be used when accessing the api using the gmail.metadata scope.</td></tr></tbody></table>
