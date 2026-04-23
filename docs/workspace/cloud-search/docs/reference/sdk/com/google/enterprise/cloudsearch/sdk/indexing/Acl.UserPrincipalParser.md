---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.UserPrincipalParser
root: workspace
fetched_at: 2026-04-23T15:26:38.756Z
---

# Acl.UserPrincipalParser

Parser used to extract a user principal of either "google" or "external" type.

### Public Constructor Summary

[Acl.UserPrincipalParser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.UserPrincipalParser#Acl.UserPrincipalParser\(\)) ()

### Public Method Summary

| Principal | [parse](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.UserPrincipalParser#parse\(java.lang.String\)) (String user)  Converts `user` value to `Principal` representing external user or Google user. |
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

#### public Acl.UserPrincipalParser ()

## Public Methods

#### public Principal parse (String user)

Converts `user` value to `Principal` representing external user or Google user.

##### Parameters

| user | to parse |
| --- | --- |

##### Returns

- Converted value

##### Throws

| [InvalidConfigurationException](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/InvalidConfigurationException) |  |
| --- | --- |
