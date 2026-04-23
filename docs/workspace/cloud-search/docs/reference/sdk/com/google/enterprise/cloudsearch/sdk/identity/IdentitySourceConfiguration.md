---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentitySourceConfiguration
root: workspace
fetched_at: 2026-04-23T15:26:35.221Z
---

# IdentitySourceConfiguration

Structure to hold configuration information about identity sources, schemas and group namespace.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/identity/IdentitySourceConfiguration.Builder">IdentitySourceConfiguration.Builder</a></td><td width="100%">Builder for creating an instance of <code>IdentitySourceConfiguration</code></td></tr></tbody></table>

### Public Method Summary

| boolean | [equals](./IdentitySourceConfiguration.md#equals(java.lang.Object)) (Object obj) |
| --- | --- |
| static [IdentitySourceConfiguration](./IdentitySourceConfiguration.md) | [fromConfiguration](./IdentitySourceConfiguration.md#fromConfiguration()) ()  Construct primary `IdentitySourceConfiguration` from Configuration. |
| String | [getGroupNamespace](./IdentitySourceConfiguration.md#getGroupNamespace()) ()  Gets namespace to be used to create `Group` under. |
| String | [getIdentitySourceId](./IdentitySourceConfiguration.md#getIdentitySourceId()) ()  Gets identity source ID under which user and group identities will be mapped. |
| String | [getIdentitySourceSchema](./IdentitySourceConfiguration.md#getIdentitySourceSchema()) ()  Gets schema name to be populated for user identity mapping. |
| String | [getIdentitySourceSchemaAttribute](./IdentitySourceConfiguration.md#getIdentitySourceSchemaAttribute()) ()  Gets schema attribute name to be populated for user identity mapping. |
| static ImmutableMap<String, [IdentitySourceConfiguration](./IdentitySourceConfiguration.md) > | [getReferenceIdentitySourcesFromConfiguration](./IdentitySourceConfiguration.md#getReferenceIdentitySourcesFromConfiguration()) ()  Construct map of reference `IdentitySourceConfiguration` from Configuration. |
| int | [hashCode](./IdentitySourceConfiguration.md#hashCode()) () |

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

## Public Methods

#### public boolean equals (Object obj)

##### Parameters

| obj |  |
| --- | --- |

#### public static IdentitySourceConfiguration fromConfiguration ()

Construct primary `IdentitySourceConfiguration` from Configuration.

##### Returns

- `IdentitySourceConfiguration` as per connector configuration

#### public String getGroupNamespace ()

Gets namespace to be used to create `Group` under.

#### public String getIdentitySourceId ()

Gets identity source ID under which user and group identities will be mapped.

#### public String getIdentitySourceSchema ()

Gets schema name to be populated for user identity mapping.

#### public String getIdentitySourceSchemaAttribute ()

Gets schema attribute name to be populated for user identity mapping.

#### public static ImmutableMap<String, IdentitySourceConfiguration> getReferenceIdentitySourcesFromConfiguration ()

Construct map of reference `IdentitySourceConfiguration` from Configuration. Each referenced identity source is identified by associated identity source name from configuration file.

##### Returns

- `IdentitySourceConfiguration` as per connector configuration
