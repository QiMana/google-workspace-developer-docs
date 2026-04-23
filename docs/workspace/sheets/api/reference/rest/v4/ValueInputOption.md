---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/ValueInputOption
root: workspace
fetched_at: 2026-04-23T15:31:27.511Z
---

# ValueInputOption

Determines how input data should be interpreted.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>INPUT_VALUE_OPTION_UNSPECIFIED</code></td><td>Default input value. This value must not be used.</td></tr><tr><td><code>RAW</code></td><td>The values the user has entered will not be parsed and will be stored as-is.</td></tr><tr><td><code>USER_ENTERED</code></td><td>The values will be parsed as if the user typed them into the UI. Numbers will stay as numbers, but strings may be converted to numbers, dates, etc. following the same rules that are applied when entering text into a cell via the Google Sheets UI.</td></tr></tbody></table>
