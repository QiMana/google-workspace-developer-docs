---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder
root: workspace
fetched_at: 2026-04-23T15:26:38.138Z
---

# Acl.Builder

### Public Constructor Summary

|  | [Acl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder#Acl.Builder\(\)) ()  Creates new empty builder. |
| --- | --- |
|  | [Acl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder#Acl.Builder\(com.google.enterprise.cloudsearch.sdk.indexing.Acl\)) ([Acl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl) acl)  Creates and initializes the builder with ACL information provided in `acl`. |

### Public Method Summary

|  | [build](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder#build\(\)) () |
| --- | --- |
| [Acl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder) | [setDeniedReaders](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder#setDeniedReaders\(java.util.Collection%3Ccom.google.api.services.cloudsearch.v1.model.Principal%3E\)) (Collection<Principal> deniedReaders)  Replaces existing deniedReaders. |
| [Acl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder) | [setInheritFrom](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder#setInheritFrom\(java.lang.String\)) (String inheritFrom)  Sets the parent to inherit ACLs from. |
| [Acl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder) | [setInheritFrom](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder#setInheritFrom\(java.lang.String,%20java.lang.String\)) (String inheritFrom, String fragment)  Sets the parent to inherit ACLs from. |
| [Acl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder) | [setInheritanceType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder#setInheritanceType\(com.google.enterprise.cloudsearch.sdk.indexing.Acl.InheritanceType\)) ([Acl.InheritanceType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.InheritanceType) inheritType)  Sets the type of Acl inheritance relationship between this id and any children. |
| [Acl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder) | [setOwners](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder#setOwners\(java.util.Collection%3Ccom.google.api.services.cloudsearch.v1.model.Principal%3E\)) (Collection<Principal> owners)  Replaces existing owners. |
| [Acl.Builder](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder) | [setReaders](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder#setReaders\(java.util.Collection%3Ccom.google.api.services.cloudsearch.v1.model.Principal%3E\)) (Collection<Principal> readers)  Replaces existing readers. |

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

## Public Constructors

#### public Acl.Builder ()

Creates new empty builder.

All sets are empty, inheritFrom is `null`, and inheritType is `CHILD_OVERRIDE`.

#### public Acl.Builder

Creates and initializes the builder with ACL information provided in `acl`.

##### Parameters

| acl | acl |
| --- | --- |

## Public Methods

#### build ()

#### public Acl.Builder setDeniedReaders (Collection<Principal> deniedReaders)

Replaces existing deniedReaders.

##### Parameters

| deniedReaders | deniedReaders |
| --- | --- |

##### Returns

- the same instance of the builder, for chaining calls

##### Throws

| NullPointerException | if the collection is `null` or contains `null` |
| --- | --- |
| IllegalArgumentException | if the collection contains `""` or a value that has leading or trailing whitespace |

#### public Acl.Builder setInheritFrom (String inheritFrom)

Sets the parent to inherit ACLs from.

Note that the parent's `InheritanceType` determines how to combine results with this ACL.

##### Parameters

| inheritFrom | inherit from parent "id" |
| --- | --- |

##### Returns

- the same instance of the builder, for chaining calls
