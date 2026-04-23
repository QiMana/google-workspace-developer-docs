---
source: https://developers.google.com/workspace/cloud-search/docs/guides/identity-mapping
root: workspace
fetched_at: 2026-04-23T15:26:09.567Z
---

# Sync different identity systems

Access control in Google Cloud Search is based on the user's Google Account. When indexing content, all item ACLs must resolve to valid Google user or group IDs (email addresses).

In many cases, a repository doesn't have direct knowledge of Google Accounts. Instead, local accounts represent users, or users use federated sign-in with an identity provider. This identification, other than the email address, is called the *external ID*.

Created using the Admin console, *identity sources* bridge the gap between identity systems by:

- Defining a [custom user field](https://developers.google.com/workspace/admin/directory/v1/guides/manage-schemas) to store external IDs. This field resolves external IDs to a Google Account.
- Defining a [namespace for security groups](https://cloud.google.com/identity/docs/overview#concepts) managed by a repository or identity provider.

Use identity sources when:

- The repository doesn't know the user's primary email address in Google Workspace or Google Cloud Directory.
- The repository defines access control groups that don't correspond to email-based groups in Google Workspace.

Identity sources improve efficiency by decoupling indexing from identity mapping. This lets you defer user lookup when creating ACLs and indexing items.

### Example deployment

Figure 1 shows an enterprise using both on-premises and cloud repositories. Each uses a different type of external ID.

![Example enterprise deployment with different identity types](https://developers.google.com/static/cloud-search/images/identity-arch.png)

Figure 1. Example enterprise deployment with different identity types.

Repository 1 identifies users by email address using SAML. Since it knows the primary email address in Google Workspace or Cloud Directory, it doesn't need an identity source.

Repository 2 integrates with an on-premises directory and identifies users by `sAMAccountName`. Because it uses this attribute as an external ID, it requires an identity source.

## Create an identity source

If you require an identity source, see [Map user identities in Cloud Search](https://support.google.com/a/answer/9039510).

Create the identity source before creating a content connector; you need its ID to create ACLs and index data. Creating an identity source also creates a [custom user property](https://developers.google.com/admin-sdk/directory/v1/guides/manage-schemas) in Cloud Directory to store external IDs. The property name uses the convention `IDENTITY_SOURCE_ID_identity`.

This table shows two identity sources: one for SAM account names and one for user IDs (uid).

| Identity source | User property | External ID |
| --- | --- | --- |
| `id1` | `id1_identity` | `sAMAccountName` |
| `id2` | `id2_identity` | `uid` |

Create an identity source for each type of external ID used in your enterprise.

This table shows how a user with a Google Account and two external IDs appears in Cloud Directory:

| User | Email | `id1_identity` | `id2_identity` |
| --- | --- | --- | --- |
| Ann | `ann@example.com` | `example\ann` | `1001` |

You can reference the same user using any of these IDs when forming ACLs for indexing.

### Write user ACLs

Use [`getUserPrincipal()`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getUserPrincipal\(java.lang.String\)) or [`getGroupPrincipal()`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getGroupPrincipal\(java.lang.String\)) to create principals using external IDs.

This example retrieves file permissions, including users with access:

```
/**
 * Sample for mapping permissions from a source repository to Cloud Search
 * ACLs. In this example, POSIX file permissions are used a the source
 * permissions.
 *
 * @return Acl
 * @throws IOException if unable to read file permissions
 */
static Acl mapPosixFilePermissionToCloudSearchAcl(Path pathToFile) throws IOException {
  // Id of the identity source for external user/group IDs. Shown here,
  // but may be omitted in the SDK as it is automatically applied
  // based on the \`api.identitySourceId\` configuration parameter.
  String identitySourceId = "abcdef12345";

  // Retrieve the file system permissions for the item being indexed.
  PosixFileAttributeView attributeView = Files.getFileAttributeView(
      pathToFile,
      PosixFileAttributeView.class,
      LinkOption.NOFOLLOW_LINKS);

  if (attributeView == null) {
    // Can't read, return empty ACl
    return new Acl.Builder().build();
  }

  PosixFileAttributes attrs = attributeView.readAttributes();
  // ...
}
```

This snippet creates principals for owners using the `externalUserName` attribute:

```
// Owner, for search quality.
// Note that for principals the name is not the primary
// email address in Cloud Directory, but the local ID defined
// by the OS. Users and groups must be referred to by their
// external ID and mapped via an identity source.
List<Principal> owners = Collections.singletonList(
    Acl.getUserPrincipal(attrs.owner().getName(), identitySourceId)
);
```

This snippet creates principals for readers:

```
// List of users to grant access to
List<Principal> readers = new ArrayList<>();

// Add owner, group, others to readers list if permissions
// exist. For this example, other is mapped to everyone
// in the organization.
Set<PosixFilePermission> permissions = attrs.permissions();
if (permissions.contains(PosixFilePermission.OWNER_READ)) {
  readers.add(Acl.getUserPrincipal(attrs.owner().getName(), identitySourceId));
}
if (permissions.contains(PosixFilePermission.GROUP_READ)) {
  String externalGroupName = attrs.group().getName();
  Principal group = Acl.getGroupPrincipal(externalGroupName, identitySourceId);
  readers.add(group);
}
if (permissions.contains(PosixFilePermission.OTHERS_READ)) {
  Principal everyone = Acl.getCustomerPrincipal();
  readers.add(everyone);
}
```

Once you have readers and owners, create the ACL:

```
// Build the Cloud Search ACL. Note that inheritance of permissions
// from parents is omitted. See \`setInheritFrom()\` and \`setInheritanceType()\`
// methods on the builder if required by your implementation.
Acl acl = new Acl.Builder()
    .setReaders(readers)
    .setOwners(owners)
    .build();
```

The REST API uses the pattern `identitysources/IDENTITY_SOURCE_ID/users/EXTERNAL_ID`. Ann's `id1_identity` resolves to `identitysources/id1_identity/users/example/ann`. This is the user's *intermediate ID*.

## Map groups

Identity sources also serve as a namespace for ACL groups. Use this to create and map groups used only for security or local to a repository.

Use the [Cloud Identity Groups API](https://cloud.google.com/identity/docs/) to create groups and manage memberships. Associate the group with an identity source by using the identity source name as the namespace.

This snippet creates a group:

```
String namespace = "identitysources/" + idSource;
Group group = new Group()
    .setGroupKey(new EntityKey().setNamespace(namespace).setId(groupId))
    .setDescription("Demo group")
    .setDisplayName(groupName)
    .setLabels(Collections.singletonMap("system/groups/external", ""))
    .setParent(namespace);
try {
  CloudIdentity service = Utils.buildCloudIdentityService();
  Operation createOperation = service.groups().create(group).execute();

  if (createOperation.getDone()) {
    // Note: The response contains the data for a Group object, but as
    // individual fields. To convert to a Group instance, either populate
    // the fields individually or serialize & deserialize to/from JSON.
    //
    // Example:
    // String json = service.getJsonFactory().toString(response);
    // Group createdGroup =  service.getObjectParser()
    //     .parseAndClose(new StringReader(json), Group.class);
    System.out.printf("Group: %s\n",
        createOperation.getResponse().toString());
  } else {
    // Handle case where operation not yet complete, poll for
    // completion. API is currently synchronous and all operations return
    // as completed.
    // ...
  }
} catch (Exception e) {
  System.err.printf("Unable to create group: %s", e.getMessage());
  e.printStackTrace(System.err);
}
```

### Create a group ACL

Use [`getGroupPrincipal()`](https://developers.google.com/workspace/cloud-search/docs/reference/sdk/com/google/enterprise/cloudsearch/sdk/indexing/Acl#getGroupPrincipal\(java.lang.String\)) to create a group principal with an external ID, then build the ACL:

```
if (permissions.contains(PosixFilePermission.GROUP_READ)) {
  String externalGroupName = attrs.group().getName();
  Principal group = Acl.getGroupPrincipal(externalGroupName, identitySourceId);
  readers.add(group);
}
```

## Identity connectors

Users can't see items in search results until their external IDs resolve to a Google ID in Cloud Directory. You can ensure this in three ways:

- Manually update user profiles in the [Admin console](https://admin.google.com/) (recommended only for testing).
- Map IDs using the [Directory API](https://developers.google.com/workspace/admin/directory).
- [Create an identity connector](https://developers.google.com/workspace/cloud-search/docs/guides/identity-connector) using the Identity Connector SDK.

Identity connectors map external IDs from enterprise identities to internal Google identities. If you create an identity source, you must also create an identity connector.

[Google Cloud Directory Sync (GCDS)](https://tools.google.com/dlpage/dirsync/) is an example of an identity connector. It maps user and group information from Active Directory to Cloud Directory.

## Sync identities using the REST API

Use the [`update`](https://developers.google.com/workspace/admin/directory/v1/reference/users/update) method to sync identities.

## Remap identities

After remapping an identity, you must reindex items for the change to take effect.

- If you remove or change a user mapping, the original mapping remains until reindexing.
- If you delete a mapped group and create a new one with the same `groupKey`, it won't grant access until you reindex.
