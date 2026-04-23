---
source: https://developers.google.com/workspace/sheets/api/reference/rest/v4/ValueRenderOption
root: workspace
fetched_at: 2026-04-23T15:31:27.421Z
---

# ValueRenderOption

Determines how values should be rendered in the output.

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>FORMATTED_VALUE</code></td><td>Values will be calculated & formatted in the response according to the cell's formatting. Formatting is based on the spreadsheet's locale, not the requesting user's locale. For example, if <code>A1</code> is <code>1.23</code> and <code>A2</code> is <code>=A1</code> and formatted as currency, then <code>A2</code> would return <code>"$1.23"</code>.</td></tr><tr><td><code>UNFORMATTED_VALUE</code></td><td>Values will be calculated, but not formatted in the reply. For example, if <code>A1</code> is <code>1.23</code> and <code>A2</code> is <code>=A1</code> and formatted as currency, then <code>A2</code> would return the number <code>1.23</code>.</td></tr><tr><td><code>FORMULA</code></td><td><p>Values will not be calculated. The reply will include the formulas. For example, if <code>A1</code> is <code>1.23</code> and <code>A2</code> is <code>=A1</code> and formatted as currency, then A2 would return <code>"=A1"</code>.</p><p>Sheets treats date and time values as decimal values. This lets you perform arithmetic on them in formulas. For more information on interpreting date and time values, see <a href="https://developers.google.com/workspace/sheets/api/guides/formats#about_date_time_values">About date & time values</a>.</p></td></tr></tbody></table>
