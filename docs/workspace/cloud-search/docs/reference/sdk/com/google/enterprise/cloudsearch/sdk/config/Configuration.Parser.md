---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser
root: workspace
fetched_at: 2026-04-23T15:26:32.048Z
---

# Configuration.Parser

Known Indirect Subclasses

[Acl.GroupPrincipalParser](../indexing/Acl.GroupPrincipalParser.md), [Acl.UserPrincipalParser](../indexing/Acl.UserPrincipalParser.md)

General purpose `ConfigValue` parser.

### Public Method Summary

| abstract T | [parse](./Configuration.Parser.md#parse(java.lang.String)) (String value)  Parses input String to required type. |
| --- | --- |

## Public Methods

#### public abstract T parse (String value)

Parses input String to required type.

##### Parameters

| value | to parse |
| --- | --- |

##### Returns

- Converted value

##### Throws

| [InvalidConfigurationException](../InvalidConfigurationException.md) | if parsing fails |
| --- | --- |
