---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.GroupPrincipalParser
root: workspace
fetched_at: 2026-04-23T15:26:37.785Z
---

# Acl.GroupPrincipalParser

Parser used to extract a group principal of either "google" or "external" type.

### Public Constructor Summary

[Acl.GroupPrincipalParser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.GroupPrincipalParser#Acl.GroupPrincipalParser\(\)) ()

### Public Method Summary

| Principal | [parse](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.GroupPrincipalParser#parse\(java.lang.String\)) (String group)  Converts `group` value to `Principal` representing external group or Google group. |
| --- | --- |

### Inherited Method Summary

From class java.lang.Object

| boolean | equals(Object arg0) |
| --- | --- |
| final Class<?> | getClass() |
| int | hashCode() |
| final void | notify() |
| final void | notifyAll() |
| String | toString() |
| final void | wait(long arg0, int arg1) |
| final void | wait(long arg0) |
| final void | wait() |

From interface [com.google.enterprise.cloudsearch.sdk.config.Configuration.Parser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser)

| abstract Principal | [parse](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/config/Configuration.Parser#parse\(java.lang.String\)) (String value)  Parses input String to required type. |
| --- | --- |

## Public Constructors

#### public Acl.GroupPrincipalParser ()

## Public Methods

#### public Principal parse (String group)

Converts `group` value to `Principal` representing external group or Google group.

##### Parameters

| group | to parse |
| --- | --- |

##### Returns

- Converted value

##### Throws

| [InvalidConfigurationException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/InvalidConfigurationException) |  |
| --- | --- |
