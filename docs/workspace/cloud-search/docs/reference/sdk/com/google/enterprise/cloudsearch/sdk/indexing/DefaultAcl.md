---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl
root: workspace
fetched_at: 2026-04-23T15:26:41.555Z
---

# DefaultAcl

Common default ACL object that can be used for an entire data repository.

The common ACL can be designated 'entire domain accessible' or can define specific readers that will be used for the entire repository. It is considered a configuration error to specify both 'entire domain accessible' while also specifying a specific set of readers, etc.

Optional configuration parameters:

- `defaultAcl.mode` - Specifies the default ACL mode (`DefaultAcl.DefaultAclMode`).
- `defaultAcl.public` - Specifies (`true` / `false`), that the common ACL used for the entire repository has "public" access.
- `defaultAcl.readers.users` - Specifies the common ACL readers in a comma delimited list (only used when "public" is `false`).
- `defaultAcl.readers.groups` - Specifies the common ACL group readers in a comma delimited list (only used when "public" is `false`).
- `defaultAcl.denied.users` - Specifies the common ACL denied readers in a comma delimited list (only used when "public" is `false`).
- `defaultAcl.denied.groups` - Specifies the common ACL denied group readers in a comma delimited list (only used when "public" is `false`).
- `defaultAcl.name` - Specifies the virtual container name of the default ACL item. Set this parameter especially if multiple connectors may be used on the same data source in parallel to prevent them from interfering with each other. This item's queue is always designated as `DEFAULT_ACL_VIRTUAL_CONTAINER_QUEUE`. Default: `DEFAULT_ACL_VIRTUAL_CONTAINER`

Sample usage from the connector initialization (`init(ConnectorContext)`):

```
IndexingService myIndexingServiceInstance = context.getIndexingService();

 // one time creation of the default ACL based on configuration parameters (see above)
 DefaultAcl defaultAcl = DefautAcl.fromConfiguration(myIndexingServiceInstance);
```

And then later during iteration through the repository data:

```
// while looping through the repository data
 ...
 Item item = ... // create the Item for uploading
 defaultAcl.applyToIfEnabled(item); // will update the item's ACL depending on the mode
 // upload the item
 ...
```

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.Builder">DefaultAcl.Builder</a></td><td width="100%">Builder object for constructing a <code>DefaultAcl</code> object.</td></tr><tr><td>enum</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/DefaultAcl.DefaultAclMode">DefaultAcl.DefaultAclMode</a></td><td width="100%">Mode setting used to set a default ACL on an <code>Item</code>.</td></tr></tbody></table>

### Constant Summary

| String | [DEFAULT\_ACL\_DENIED\_GROUPS](./DefaultAcl.md#DEFAULT_ACL_DENIED_GROUPS) |  |
| --- | --- | --- |
| String | [DEFAULT\_ACL\_DENIED\_USERS](./DefaultAcl.md#DEFAULT_ACL_DENIED_USERS) |  |
| String | [DEFAULT\_ACL\_MODE](./DefaultAcl.md#DEFAULT_ACL_MODE) |  |
| String | [DEFAULT\_ACL\_NAME](./DefaultAcl.md#DEFAULT_ACL_NAME) |  |
| String | [DEFAULT\_ACL\_NAME\_DEFAULT](./DefaultAcl.md#DEFAULT_ACL_NAME_DEFAULT) |  |
| String | [DEFAULT\_ACL\_PUBLIC](./DefaultAcl.md#DEFAULT_ACL_PUBLIC) |  |
| String | [DEFAULT\_ACL\_QUEUE](./DefaultAcl.md#DEFAULT_ACL_QUEUE) |  |
| String | [DEFAULT\_ACL\_READERS\_GROUPS](./DefaultAcl.md#DEFAULT_ACL_READERS_GROUPS) |  |
| String | [DEFAULT\_ACL\_READERS\_USERS](./DefaultAcl.md#DEFAULT_ACL_READERS_USERS) |  |

### Field Summary

| public static final [Parser](../config/Configuration.Parser.md) < [DefaultAcl.DefaultAclMode](./DefaultAcl.DefaultAclMode.md) > | [DEFAULT\_ACL\_MODE\_PARSER](./DefaultAcl.md#DEFAULT_ACL_MODE_PARSER) | Configuration parser for `DefaultAcl.DefaultAclMode`. |
| --- | --- | --- |

### Public Method Summary

| boolean | [applyToIfEnabled](./DefaultAcl.md#applyToIfEnabled(com.google.api.services.cloudsearch.v1.model.Item)) (Item item)  Applies a common default ACL to the passed `Item`. |
| --- | --- |
| static [DefaultAcl](./DefaultAcl.md) | [fromConfiguration](./DefaultAcl.md#fromConfiguration(com.google.enterprise.cloudsearch.sdk.indexing.IndexingService)) ([IndexingService](./IndexingService.md) indexingService)  Creates an instance of a `DefaultAcl` from the `Configuration`. |
| [DefaultAcl.DefaultAclMode](./DefaultAcl.DefaultAclMode.md) | [getDefaultAclMode](./DefaultAcl.md#getDefaultAclMode()) ()  Returns DefaultAclMode. |

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

## Constants

#### public static final String DEFAULT\_ACL\_DENIED\_GROUPS

Constant Value: "defaultAcl.denied.groups"

#### public static final String DEFAULT\_ACL\_DENIED\_USERS

Constant Value: "defaultAcl.denied.users"

#### public static final String DEFAULT\_ACL\_MODE

Constant Value: "defaultAcl.mode"

#### public static final String DEFAULT\_ACL\_NAME

Constant Value: "defaultAcl.name"

#### public static final String DEFAULT\_ACL\_NAME\_DEFAULT

Constant Value: "DEFAULT\_ACL\_VIRTUAL\_CONTAINER"

#### public static final String DEFAULT\_ACL\_PUBLIC

Constant Value: "defaultAcl.public"

#### public static final String DEFAULT\_ACL\_QUEUE

Constant Value: "DEFAULT\_ACL\_VIRTUAL\_CONTAINER\_QUEUE"

#### public static final String DEFAULT\_ACL\_READERS\_GROUPS

Constant Value: "defaultAcl.readers.groups"

#### public static final String DEFAULT\_ACL\_READERS\_USERS

Constant Value: "defaultAcl.readers.users"

## Fields

#### public static final Parser<DefaultAcl.DefaultAclMode> DEFAULT\_ACL\_MODE\_PARSER

Configuration parser for `DefaultAcl.DefaultAclMode`.

## Public Methods

#### public boolean applyToIfEnabled (Item item)

Applies a common default ACL to the passed `Item`.

The mode defines how default ACLs are applied:

- `NONE` - Default ACL is not being used.
- `FALLBACK` - Default ACL is only used if none are already present.
- `APPEND` - Default ACL is added to the existing ACL.
- `OVERRIDE` - Default ACL replaces any existing ACL.

##### Parameters

| item | the object to apply the default ACL |
| --- | --- |

##### Returns

- `true` if the common ACL was applied to this `Item`

#### public static DefaultAcl fromConfiguration (IndexingService indexingService)

Creates an instance of a `DefaultAcl` from the `Configuration`.

##### Parameters

| indexingService | connector's indexing service instance for uploading default ACL to Cloud Search |
| --- | --- |

##### Returns

- an instance of a `DefaultAcl`

#### public DefaultAcl.DefaultAclMode getDefaultAclMode ()

Returns DefaultAclMode.
