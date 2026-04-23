---
source: https://developers.google.com/workspace/cloud-search/docs/reference/rest/v1/RequestOptions
root: workspace
fetched_at: 2026-04-23T15:26:12.448Z
---

# RequestOptions

Shared request options for all RPC methods.

JSON representation

```
{
  "languageCode": string,
  "debugOptions": {
    object (DebugOptions)
  },
  "timeZone": string,
  "searchApplicationId": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>languageCode</code></td><td><p><code>string</code></p><p>The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see <a href="http://www.unicode.org/reports/tr35/#Unicode_locale_identifier">http://www.unicode.org/reports/tr35/#Unicode_locale_identifier</a>. For translations.</p><p>Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language.</p><p>When specified, the documents in search results are biased towards the specified language.</p><p>The Suggest API uses this field as a hint to make better third-party autocomplete predictions.</p></td></tr><tr><td><code>debugOptions</code></td><td><p><code>object (<code>DebugOptions</code>)</code></p><p>Debug options of the request</p></td></tr><tr><td><code>timeZone</code></td><td><p><code>string</code></p><p>Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by <a href="http://cldr.unicode.org/">Unicode Common Locale data Repository (CLDR)</a> project, and currently available in the file <a href="http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml">timezone.xml</a>. This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.</p></td></tr><tr><td><code>searchApplicationId</code></td><td><p><code>string</code></p><p>The id generated when you create a search application using the <a href="https://support.google.com/a/answer/9043922">admin console</a>.</p></td></tr></tbody></table>
