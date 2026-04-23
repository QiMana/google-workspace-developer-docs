---
source: https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl
root: workspace
fetched_at: 2026-04-23T15:26:39.210Z
---

# Acl

Represents all aspects of access permissions for an uploaded document.

The Access Control List (ACL) contains a list of both users and groups that have either read access or denied access to an `Item`. Additionally, the access can be dependent on an "inherit from" parent ACL corresponding to the `Acl.InheritanceType` value. A parent can also have multiple ACLs associated with it as defined by its fragments set in `setInheritFrom(String, String)`.

Instances are immutable.

### Nested Class Summary

<table><tbody><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.Builder">Acl.Builder</a></td><td width="100%">Mutable ACL for creating instances of <code>Acl</code>.</td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.GroupPrincipalParser">Acl.GroupPrincipalParser</a></td><td width="100%">Parser used to extract a group principal of either "google" or "external" type.</td></tr><tr><td>enum</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.InheritanceType">Acl.InheritanceType</a></td><td width="100%">The enum that presents the type of inheritance.</td></tr><tr><td>enum</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.PrincipalType">Acl.PrincipalType</a></td><td width="100%">Represents type of a <code>Principal</code></td></tr><tr><td>class</td><td colspan="2"><a href="https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.UserPrincipalParser">Acl.UserPrincipalParser</a></td><td width="100%">Parser used to extract a user principal of either "google" or "external" type.</td></tr></tbody></table>

### Constant Summary

| String | [GOOGLE\_ACCOUNT\_PREFIX](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#GOOGLE_ACCOUNT_PREFIX) | Configuration value prefix to indicate Google principal |
| --- | --- | --- |
| String | [GROUP\_NAME\_FORMAT](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#GROUP_NAME_FORMAT) | Format to construct external group principal name |
| String | [IDENTITY\_RESOURCE\_NAME\_FORMAT](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#IDENTITY_RESOURCE_NAME_FORMAT) | Format to construct identity source ID |
| String | [IDENTITY\_SOURCES\_PREFIX](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#IDENTITY_SOURCES_PREFIX) | Prefix for identity source ID |
| String | [USER\_RESOURCE\_NAME\_FORMAT](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#USER_RESOURCE_NAME_FORMAT) | Format to construct external user principal name |

### Field Summary

| public static final [Acl.GroupPrincipalParser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.GroupPrincipalParser) | [GROUP\_PARSER](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#GROUP_PARSER) | `Configuration.Parser` to parse string value as external group or Google group principal |
| --- | --- | --- |
| public static final [Acl.UserPrincipalParser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.UserPrincipalParser) | [USER\_PARSER](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#USER_PARSER) | `Configuration.Parser` to parse string value as external user or Google user principal |

### Public Method Summary

| static boolean | [addResourcePrefixGroup](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#addResourcePrefixGroup\(com.google.api.services.cloudsearch.v1.model.Principal,%20java.lang.String\)) (Principal group, String identitySourceId)  Adds resource prefix "identitysources/identitySourceId/groups/" to `setGroupResourceName(String)`. |
| --- | --- |
| static boolean | [addResourcePrefixUser](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#addResourcePrefixUser\(com.google.api.services.cloudsearch.v1.model.Principal,%20java.lang.String\)) (Principal user, String identitySourceId)  Adds resource prefix "identitysources/identitySourceId/users/" to `setUserResourceName(String)`. |
| Item | [applyTo](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#applyTo\(com.google.api.services.cloudsearch.v1.model.Item\)) (Item item)  Applies current ACL information to the passed `Item`. |
| static [Acl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl) | [createAcl](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#createAcl\(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String\)) (String permittedUsers, String permittedGroups, String deniedUsers, String deniedGroups)  Creates an `Acl` from comma delimited strings. |
| Item | [createFragmentItemOf](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#createFragmentItemOf\(java.lang.String,%20java.lang.String\)) (String id, String fragment)  Creates an `Item` from an id and fragment to be used for its ACL. |
| boolean | [equals](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#equals\(java.lang.Object\)) (Object obj) |
| static String | [fragmentId](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#fragmentId\(java.lang.String,%20java.lang.String\)) (String id, String fragment)  Creates a fragment id using the pattern `%s#%s`. |
| static Principal | [getCustomerPrincipal](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getCustomerPrincipal\(\)) ()  Returns a customer principal instance. |
| Set<Principal> | [getDeniedReaders](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getDeniedReaders\(\)) ()  Returns the denied readers. |
| static Principal | [getGoogleGroupPrincipal](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getGoogleGroupPrincipal\(java.lang.String\)) (String groupId)  Returns a Google group principal. |
| static Principal | [getGoogleUserPrincipal](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getGoogleUserPrincipal\(java.lang.String\)) (String userId)  Returns a Google user principal. |
| static Principal | [getGroupPrincipal](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getGroupPrincipal\(java.lang.String,%20java.lang.String\)) (String groupId, String identitySourceId)  Returns an external group principal under specified identity source ID. |
| static Principal | [getGroupPrincipal](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getGroupPrincipal\(java.lang.String\)) (String groupId)  Returns an external group principal. |
| String | [getInheritFrom](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getInheritFrom\(\)) ()  Returns the "inherit from" parent name. |
| String | [getInheritFromFragment](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getInheritFromFragment\(\)) ()  Returns the "inherit from" fragment. |
| [Acl.InheritanceType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.InheritanceType) | [getInheritanceType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getInheritanceType\(\)) ()  Returns the `Acl.InheritanceType`. |
| Set<Principal> | [getOwners](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getOwners\(\)) ()  Returns the owners. |
| static String | [getPrincipalName](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getPrincipalName\(java.lang.String,%20java.lang.String\)) (String name, String namespace)  Creates principal name with pattern `%s:%s`. |
| static [Acl.PrincipalType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl.PrincipalType) | [getPrincipalType](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getPrincipalType\(com.google.api.services.cloudsearch.v1.model.Principal\)) (Principal p)  Returns `Acl.PrincipalType` for given principal |
| Set<Principal> | [getReaders](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getReaders\(\)) ()  Returns the allowed readers. |
| static Principal | [getUserPrincipal](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getUserPrincipal\(java.lang.String\)) (String userId)  Returns an external user principal. |
| static Principal | [getUserPrincipal](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getUserPrincipal\(java.lang.String,%20java.lang.String\)) (String userId, String identitySourceId)  Returns an external user principal under specified identity source ID. |
| int | [hashCode](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#hashCode\(\)) () |
| String | [toString](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#toString\(\)) () |

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

#### public static final String GOOGLE\_ACCOUNT\_PREFIX

Configuration value prefix to indicate Google principal

Constant Value: "google:"

#### public static final String GROUP\_NAME\_FORMAT

Format to construct external group principal name

Constant Value: "identitysources/%s/groups/%s"

#### public static final String IDENTITY\_RESOURCE\_NAME\_FORMAT

Format to construct identity source ID

Constant Value: "identitysources/%s"

#### public static final String IDENTITY\_SOURCES\_PREFIX

Prefix for identity source ID

Constant Value: "identitysources"

#### public static final String USER\_RESOURCE\_NAME\_FORMAT

Format to construct external user principal name

Constant Value: "identitysources/%s/users/%s"

## Fields

#### public static final Acl.GroupPrincipalParser GROUP\_PARSER

`Configuration.Parser` to parse string value as external group or Google group principal

#### public static final Acl.UserPrincipalParser USER\_PARSER

`Configuration.Parser` to parse string value as external user or Google user principal

## Public Methods

#### public static boolean addResourcePrefixGroup (Principal group, String identitySourceId)

Adds resource prefix "identitysources/identitySourceId/groups/" to `setGroupResourceName(String)`. This method assumes that `getGroupResourceName()` is already encoded for escaping unsupported characters.

##### Parameters

| group | principal to add resource prefix for. |
| --- | --- |
| identitySourceId | identity source ID for external group principal. |

##### Returns

- true if resource prefix is added to principal, false otherwise.

#### public static boolean addResourcePrefixUser (Principal user, String identitySourceId)

Adds resource prefix "identitysources/identitySourceId/users/" to `setUserResourceName(String)`.

##### Parameters

| user | principal to add resource prefix for. |
| --- | --- |
| identitySourceId | identity source ID for external user principal. |

##### Returns

- true if resource prefix is added to principal, false otherwise.

#### public Item applyTo (Item item)

Applies current ACL information to the passed `Item`.

##### Parameters

| item | original `Item` to apply ACL information |
| --- | --- |

##### Returns

- the `Item` with the current ACL information applied

#### public static Acl createAcl (String permittedUsers, String permittedGroups, String deniedUsers, String deniedGroups)

Creates an `Acl` from comma delimited strings.

##### Parameters

| permittedUsers | readers |
| --- | --- |
| permittedGroups | permitted groups |
| deniedUsers | denied readers |
| deniedGroups | denied groups |

##### Returns

- fully formed `Acl`

#### public Item createFragmentItemOf (String id, String fragment)

Creates an `Item` from an id and fragment to be used for its ACL.

##### Parameters

| id | parent "id" |
| --- | --- |
| fragment | associated fragment for the parent |

##### Returns

- an `Item` to be used as an ACL parent

#### public boolean equals (Object obj)

##### Parameters

| obj |  |
| --- | --- |

#### public static String fragmentId (String id, String fragment)

Creates a fragment id using the pattern `%s#%s`.

##### Parameters

| id | \- document id |
| --- | --- |
| fragment | \- fragment name |

##### Returns

- created name

#### public static Principal getCustomerPrincipal ()

Returns a customer principal instance.

##### Returns

- `Principal` with kind as Customer

#### public Set<Principal> getDeniedReaders ()

Returns the denied readers.

#### public static Principal getGoogleGroupPrincipal (String groupId)

Returns a Google group principal.

##### Parameters

| groupId | external group ID |
| --- | --- |

##### Returns

- `Principal` with kind set to Google group

#### public static Principal getGoogleUserPrincipal (String userId)

Returns a Google user principal.

##### Parameters

| userId | Google user ID |
| --- | --- |

##### Returns

- `Principal` with kind set to Google user

#### public static Principal getGroupPrincipal (String groupId, String identitySourceId)

Returns an external group principal under specified identity source ID. This method encodes groupId using `encodeGroupId(String)`

##### Parameters

| groupId | external user ID |
| --- | --- |
| identitySourceId | identity source ID for external group principal |

##### Returns

- `Principal` with kind as external group

#### public static Principal getGroupPrincipal (String groupId)

Returns an external group principal. This method encodes groupId using `encodeGroupId(String)`

##### Parameters

| groupId | external user ID |
| --- | --- |

##### Returns

- `Principal` with kind as external group

#### public String getInheritFrom ()

Returns the "inherit from" parent name.
