---
source: https://developers.google.com/workspace/admin/alertcenter/guides/query-filters
root: workspace
fetched_at: 2026-04-23T15:23:21.377Z
---

# Query filters

book\_path: /workspace/admin/\_book.yaml project\_path: /workspace/admin/\_project.yaml page\_type: reference

Use the following query filters in API requests that support filtering. The filter string must be specified as an expression or list of expressions.

## Simple expressions

Filters must be specified using the following grammar:

An expression has the general form:

| `<expr>` | `  ::=  ` | `<field> <operator> <value>` |
| --- | --- | --- |

- `<field>` is a `string`. If the field name contains a space or a colon, it must be enclosed by double quotes.
- `<operator>` can be an equality or relational operator:
	- The equality operator `=` is defined only for string fields.
		- The prefix match operator `:` is defined only for string fields.
		- The relational operators `"<" | ">" | "<=" | ">="` are defined only for timestamp fields.
- The `<value>` supplied must be a `string` that can be in [`Timestamp`](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Timestamp) format depending on the `<field>`. If the value contains a space or a colon, it must be enclosed in double quotes.

## Expression lists

Expressions can be joined to form a more complex query. The BNF specification is:

| `<exprList>` | `  ::=  ` | `<expr> \|         <exprList> <conjunction> <expr> \|         <negation> <expr>` |
| --- | --- | --- | --- | --- |
| `<conjunction>` | `  ::=  ` | `"AND" \| "OR" \| ""` |
| `<negation>` | `  ::=  ` | `"NOT"` |

Using the empty string as a conjunction acts as an implicit AND. The precedence of joining operations, from highest to lowest, is NOT, AND, OR.

## Examples

The following are example filters. Supported fields might vary by API version. For filter fields available in `v1beta1`, see [available filter fields](https://developers.google.com/workspace/admin/alertcenter/reference/filter-fields).

- To query for all alerts created on or after April 5, 2018:
	`createTime >= "2018-04-05T00:00:00Z"`
- To query for all alerts from the source "Gmail phishing":
	`source="Gmail phishing"`
- To query for all alerts from a source which starts with "Gmail":
	`source:"Gmail"`
- To query for all alerts which started in 2017:
	`startTime >= "2017-01-01T00:00:00Z" AND startTime < "2018-01-01T00:00:00Z"`
- To query for all user reported phishing alerts from the source "Gmail phishing":
	`type="User reported phishing" source="Gmail phishing"`
