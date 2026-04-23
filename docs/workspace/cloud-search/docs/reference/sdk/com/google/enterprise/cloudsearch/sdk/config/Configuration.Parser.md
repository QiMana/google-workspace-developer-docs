---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser
root: workspace
fetched_at: 2026-04-23T15:26:32.048Z
---

# Configuration.Parser

Known Indirect Subclasses

[Acl.GroupPrincipalParser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.GroupPrincipalParser), [Acl.UserPrincipalParser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.UserPrincipalParser)

General purpose `ConfigValue` parser.

### Public Method Summary

| abstract T | [parse](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser#parse\(java.lang.String\)) (String value)  Parses input String to required type. |
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

| [InvalidConfigurationException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/InvalidConfigurationException) | if parsing fails |
| --- | --- |
