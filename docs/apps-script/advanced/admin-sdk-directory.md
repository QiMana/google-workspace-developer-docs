---
source: https://developers.google.com/apps-script/advanced/admin-sdk-directory
root: apps-script
fetched_at: 2026-04-23T15:18:00.868Z
---

# Admin SDK Directory Service

## Page Summary

- The Admin SDK Directory service in Apps Script allows administrators of Google Workspace domains to manage devices, groups, users, and other entities.
- This is an advanced service that requires specific enabling steps for both the service in Apps Script and the Admin SDK on your domain.
- Detailed information and reference documentation for this service are available, mirroring the public Admin SDK Directory API.
- Sample code is provided demonstrating various operations like listing users and groups, getting and adding users, creating aliases, and adding group members.

to manage Google Workspace domains, including devices, groups, and users.

The Admin SDK Directory service lets you use the Admin SDK's [Directory API](https://developers.google.com/admin-sdk/directory) in Google Apps Script. This API gives administrators of Google Workspace domains (including resellers) the ability to manage devices, groups, users, and other entities in their domains.

This is an advanced service that must be [enabled before use](https://developers.google.com/apps-script/guides/services/advanced). Additionally, the Admin SDK must be enabled on your domain, as described in the API's [prerequisites documentation](https://developers.google.com/admin-sdk/directory/v1/guides/prerequisites).

## Reference

For detailed information on this service, see the [reference documentation](https://developers.google.com/admin-sdk/directory/v1/reference) for the Admin SDK Directory API. Like all advanced services in Apps Script, the Admin SDK Directory service uses the same objects, methods, and parameters as the public API. For more information, see [How method signatures are determined](https://developers.google.com/apps-script/guides/services/advanced#how_method_signatures_are_determined).

To report issues and find other support, see the [Admin SDK Directory support guide](https://developers.google.com/admin-sdk/directory/support).

## Sample code

The following sample code uses [version 1](https://developers.google.com/admin-sdk/directory/v1/reference) of the API.

### List all users

This sample lists all the users in a domain sorted by first name.

```
/**
 * Lists all the users in a domain sorted by first name.
 * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/list
 */
function listAllUsers() {
  let pageToken;
  let page;
  do {
    page = AdminDirectory.Users.list({
      domain: "example.com",
      orderBy: "givenName",
      maxResults: 100,
      pageToken: pageToken,
    });
    const users = page.users;
    if (!users) {
      console.log("No users found.");
      return;
    }
    // Print the user's full name and email.
    for (const user of users) {
      console.log("%s (%s)", user.name.fullName, user.primaryEmail);
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
}
```

### Get user

This sample gets a user by their email address and logs all of their data as a JSON string.

```
/**
 * Get a user by their email address and logs all of their data as a JSON string.
 * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users/get
 */
function getUser() {
  // TODO (developer) - Replace userEmail value with yours
  const userEmail = "liz@example.com";
  try {
    const user = AdminDirectory.Users.get(userEmail);
    console.log("User data:\n %s", JSON.stringify(user, null, 2));
  } catch (err) {
    // TODO (developer)- Handle exception from the API
    console.log("Failed with error %s", err.message);
  }
}
```

### Add user

This sample adds a new user to the domain, including only the required information. For the full list of user fields, see the API's [reference documentation](https://developers.google.com/admin-sdk/directory/v1/reference/users/insert).

```
/**
 * Adds a new user to the domain, including only the required information. For
 * the full list of user fields, see the API's reference documentation:
 * @see https://developers.google.com/admin-sdk/directory/v1/reference/users/insert
 */
function addUser() {
  let user = {
    // TODO (developer) - Replace primaryEmail value with yours
    primaryEmail: "liz@example.com",
    name: {
      givenName: "Elizabeth",
      familyName: "Smith",
    },
    // Generate a random password string.
    password: Math.random().toString(36),
  };
  try {
    user = AdminDirectory.Users.insert(user);
    console.log("User %s created with ID %s.", user.primaryEmail, user.id);
  } catch (err) {
    // TODO (developer)- Handle exception from the API
    console.log("Failed with error %s", err.message);
  }
}
```

### Create alias

This sample creates an alias (nickname) for a user.

```
/**
 * Creates an alias (nickname) for a user.
 * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users.aliases/insert
 */
function createAlias() {
  // TODO (developer) - Replace userEmail value with yours
  const userEmail = "liz@example.com";
  let alias = {
    alias: "chica@example.com",
  };
  try {
    alias = AdminDirectory.Users.Aliases.insert(alias, userEmail);
    console.log("Created alias %s for user %s.", alias.alias, userEmail);
  } catch (err) {
    // TODO (developer)- Handle exception from the API
    console.log("Failed with error %s", err.message);
  }
}
```

### List all groups

This sample lists all the groups in the domain.

```
/**
 * Lists all the groups in the domain.
 * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/groups/list
 */
function listAllGroups() {
  let pageToken;
  let page;
  do {
    page = AdminDirectory.Groups.list({
      domain: "example.com",
      maxResults: 100,
      pageToken: pageToken,
    });
    const groups = page.groups;
    if (!groups) {
      console.log("No groups found.");
      return;
    }
    // Print group name and email.
    for (const group of groups) {
      console.log("%s (%s)", group.name, group.email);
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
}
```

### Add group member

This sample adds a user to an existing group in the domain.

```
/**
 * Adds a user to an existing group in the domain.
 * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/members/insert
 */
function addGroupMember() {
  // TODO (developer) - Replace userEmail value with yours
  const userEmail = "liz@example.com";
  // TODO (developer) - Replace groupEmail value with yours
  const groupEmail = "bookclub@example.com";
  const member = {
    email: userEmail,
    role: "MEMBER",
  };
  try {
    AdminDirectory.Members.insert(member, groupEmail);
    console.log(
      "User %s added as a member of group %s.",
      userEmail,
      groupEmail,
    );
  } catch (err) {
    // TODO (developer)- Handle exception from the API
    console.log("Failed with error %s", err.message);
  }
}
```
