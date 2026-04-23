---
source: https://developers.google.com/apps-script/advanced/groups
root: apps-script
fetched_at: 2026-04-23T15:18:03.189Z
---

# Advanced Cloud Identity Groups Service

## Page Summary

- The advanced Cloud Identity Groups (CIG) service in Apps Script allows interaction with the CIG API.
- This is an advanced service that needs to be enabled before use.
- Sample code is provided for creating groups, searching for groups, and managing group memberships.

access the CIG API in Apps Script.

The advanced Cloud Identity Groups (CIG) service lets you use the [CIG API](https://cloud.google.com/identity/docs/groups) in Google Apps Script.

This is an advanced service that must be [enabled before use](../guides/services/advanced.md).

## Reference

For detailed information on this service, see the [reference documentation](https://cloud.google.com/identity/docs/groups) for the CIG API. Like all advanced services in Apps Script, the advanced CIG service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](../guides/services/advanced.md#how_method_signatures_are_determined).

## Sample Code

The following helper functions use [version v1](https://cloud.google.com/identity/docs/reference/rest#rest-resource:-v1.groups.memberships) of the API.

### Create a Group

To create a Google Group, call [`groups.create`](https://cloud.google.com/identity/docs/reference/rest/v1/groups/create) with an instance of the new group resource. The group instance must include a `groupKey`, `parent`, and `label` set to `cloudidentity.googleapis.com/groups.discussion_forum`. You also need to set the `initialGroupConfig` parameter, which defines the initial owner of the group. You can use the following values for this parameter:

`WITH_INITIAL_OWNER`: Makes the person sending the request the owner of the group.

`EMPTY`: Creates a group with no initial owners. You can only use this value if you're a Google Workspace Super Admin or Google Groups Admin. For more information about Google Workspace roles, see prebuilt administrator roles.

The following example shows how to create a group such that the user is the owner of the group:

```
const groups = CloudIdentityGroups.Groups;

function createGroup(groupId, parentId, displayName) {
  const groupKey = { id: groupId };
  const group = {
    parent: "customerId/" + parentId,
    displayName: displayName,
    groupKey: groupKey,
    // Set the label to specify creation of a Google Group.
    labels: { "cloudidentity.googleapis.com/groups.discussion_forum": "" },
  };
  const optionalArgs = { initialGroupConfig: "WITH_INITIAL_OWNER" };

  try {
    const response = groups.create(group, optionalArgs);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

### Search for a Group

To search for a Google Group, call [`groups.search`](https://cloud.google.com/identity/docs/reference/rest/v1/groups/search) with a query string. To search for all groups, provide the `label` `cloudidentity.googleapis.com/groups.discussion_forum`.

```
const groups = CloudIdentityGroups.Groups;

function searchGroup(customer_id) {
  const search_query = \`parent=='customerId/${customer_id}' && 'cloudidentity.googleapis.com/groups.discussion_forum' in labels\`;
  const search_group_request = groups.search({ query: search_query });
  console.log(JSON.stringify(search_group_request));
}
```

### Add a Membership to a Group

After a group exists, you can create memberships for it. This method requires a [`membership` resource](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships#resource:-membership) and the parent's resource `name` string. The former value can be obtained by by looking up the group through the [`lookup`](https://cloud.google.com/identity/docs/reference/rest/v1/groups/lookup) method.

The following helper method shows an example of adding a membership to a group. `expiryDetail` is an optional field that can be added to set an expiration for the membership. The value of `preferredMemberKey` is the member's email address.

```
const groups = CloudIdentityGroups.Groups;

function createMembership(namespace, groupId, memberKey) {
  try {
    // Given a group ID and namespace, retrieve the ID for parent group
    const groupLookupResponse = groups.lookup({
      'groupKey.id': groupId,
      'groupKey.namespace': namespace
    });
    const groupName = groupLookupResponse.name;

    // Create a membership object with a memberKey and a single role of type MEMBER
    const membership = {
      preferredMemberKey: { id: memberKey },
      roles: [
        {
          name: "MEMBER",
          expiryDetail: {
            expireTime: "2025-10-02T15:01:23Z",
          },
        },
      ],
    };

    // Create a membership using the ID for the parent group and a membership object
    const response = groups.Memberships.create(membership, groupName);
    console.log(JSON.stringify(response));
  } catch (e) {
    console.error(e);
  }
}
```

### Get Memberships from Member

Use the [`groups.memberships.searchDirectGroups`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/searchDirectGroups) method to search for immediate parents of a member.

The following helper method shows an example of iterating through a given member's direct memberships.

```
const groups = CloudIdentityGroups.Groups;

 function searchMemberMemberships(memberId, pageSize) {
  try {
    let memberships = [];
    let nextPageToken = '';
    const withinParent = 'groups/-';  // This parameter sets the scope as "all groups"

    do {
      // Get page of memberships
      const queryParams = {
        query: \`member_key_id == \'${memberId}\'\`,
        page_size: pageSize,
        page_token: nextPageToken,
      };
      const response = groups.Memberships.searchDirectGroups(withinParent, queryParams);
      memberships = memberships.concat(response.memberships);

      // Set up next page
      nextPageToken = response.nextPageToken;
    } while (nextPageToken);

    return memberships;
  } catch(e) {
    console.error(e);
  }
}
```

### Get Memberships from a Group

Use the [`groups.memberships.list`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/list) method to list the members of a group.

`groupId`: The numeric ID of the group that you want to list members for. To find the ID of a single group, use the [`groups.lookup`](https://cloud.google.com/identity/docs/reference/rest/v1/groups/lookup) method. To see all group IDs under a customer or namespace, use the [`groups.list`](https://cloud.google.com/identity/docs/reference/rest/v1/groups/list) method.

```
const groups = CloudIdentityGroups.Groups;

function listGroupMemberships(groupId, pageSize) {
  try {
    let membershipList = [];
    let nextPageToken = '';

    // Get group name
    const groupName = groups.lookup({'groupKey.id': groupId}).name;

    do {
      // Get page of memberships
      const queryParams = {
        pageSize: pageSize,
        pageToken: nextPageToken
      }
      const response = groups.Memberships.list(groupName, queryParams);
      membershipList = membershipList.concat(response.memberships);

      // Set up next page
      nextPageToken = response.nextPageToken;
    } while(nextPageToken);

    return membershipList;
  } catch (error) {
    console.error(error);
  }
}
```
