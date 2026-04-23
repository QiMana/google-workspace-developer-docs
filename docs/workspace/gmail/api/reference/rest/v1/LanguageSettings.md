---
source: https://developers.google.com/workspace/gmail/api/reference/rest/v1/LanguageSettings
root: workspace
fetched_at: 2026-04-23T15:28:56.931Z
---

# LanguageSettings

Language settings for an account. These settings correspond to the ["Language settings"](https://support.google.com/mail/answer/17091) feature in the web interface.

JSON representation

```
{
  "displayLanguage": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>displayLanguage</code></td><td><p><code>string</code></p><p>The language to display Gmail in, formatted as an <a href="https://www.w3.org/International/articles/language-tags/">RFC 3066 Language Tag</a> (for example <code>en-GB</code>, <code>fr</code> or <code>ja</code> for British English, French, or Japanese respectively).</p><p>The set of languages supported by Gmail evolves over time, so please refer to the "Language" dropdown in the <a href="https://mail.google.com/mail/u/0/#settings/general">Gmail settings</a> for all available options, as described in the <a href="https://support.google.com/mail/answer/17091">language settings help article</a>. For a table of sample values, see <a href="https://developers.google.com/workspace/gmail/api/guides/language-settings">Manage language settings</a>.</p><p>Not all Gmail clients can display the same set of languages. In the case that a user's display language is not available for use on a particular client, said client automatically chooses to display in the closest supported variant (or a reasonable default).</p></td></tr></tbody></table>
