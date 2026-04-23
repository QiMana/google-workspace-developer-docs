---
source: https://developers.google.com/apps-script/reference/groups/group
root: apps-script
fetched_at: 2026-04-23T15:20:37.873Z
---

# Class Group

## Page Summary

- A Group object allows querying its members and their roles within the group.
- You can retrieve a group's email address, its direct child groups, and direct members.
- You can check if a specific user or group is a direct member of the group.
- You can get the role of a user or a list of users within the group.

A group object whose members and those members' roles within the group can be queried.

Here's an example which shows the members of a group. Before running it, replace the email address of the group with that of one on your domain.

```
function listGroupMembers() {
  const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
  console.log(\`${group.getEmail()}:\`);
  const users = group.getUsers();
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user.getEmail());
  }
}
```

## Detailed documentation

### getEmail()

Gets this group's email address.

This example lists the email address of all the groups the user belongs to.

```
function listMyGroupEmails() {
  const groups = GroupsApp.getGroups();
  for (let i = 0; i < groups.length; i++) {
    console.log(groups[i].getEmail());
  }
}
```

#### Return

`String` — The group's email address.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/groups`

---

### getGroups()

Retrieves the direct child groups of the group. Throws an exception if you do not have permission to view the group's member list.

In addition to this method, you can use the [Admin SDK Directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory) advanced service to retrieve group members in a domain.

```
function listGroupMembers() {
  const GROUP_EMAIL = 'example@googlegroups.com';
  const group = GroupsApp.getGroupByEmail(GROUP_EMAIL);
  const childGroups = group.getGroups();
  console.log(\`Group ${GROUP_EMAIL} has ${childGroups.length} groups:\`);
  for (let i = 0; i < childGroups.length; i++) {
    const childGroup = childGroups[i];
    console.log(childGroup.getEmail());
  }
}
```

#### Return

`Group[]` — All the direct child groups of the group.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/groups`

---

### getRole(email)

Retrieves a user's role in the context of the group. A user who is a direct member of a group has exactly one role within that group. Throws an exception if the user is not a member of the group or if you do not have permission to view the group's member list.

This example lists the owners of a group:

```
const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
const users = group.getUsers();
console.log('These are the group owners:');
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  if (group.getRole(user.getEmail()) === GroupsApp.Role.OWNER) {
    console.log(user.getEmail());
  }
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `email` | `String` | A user's email address. |

#### Return

`Role` — That user's role within the group.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/groups`

---

### getRole(user)

Retrieves a user's role in the context of the group. A user who is a direct member of a group has exactly one role within that group. Throws an exception if the user is not a member of the group or if you do not have permission to view the group's member list.

This example lists the owners of a group:

```
const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
const users = group.getUsers();
console.log('These are the group owners:');
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  if (group.getRole(user) === GroupsApp.Role.OWNER) {
    console.log(user.getEmail());
  }
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | The user whose role to retrieve. |

#### Return

`Role` — That user's role within the group.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/groups`

#### See also

- `getRole(email)`

---

### getRoles(users)

Retrieves users' roles in the context of the group. A user who is a direct member of a group has exactly one role within that group. Throws an exception if any user is not a member of the group or if you do not have permission to view the group's member list.

This example lists the owners of a group:

```
const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
const users = group.getUsers();
const roles = group.getRoles(users);
console.log('These are the group owners:');
for (let i = 0; i < users.length; i++) {
  if (roles[i] === GroupsApp.Role.OWNER) {
    console.log(users[i].getEmail());
  }
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `users` | `User[]` | The users whose roles are requested. |

#### Return

`Role[]` — The roles of those users within the group.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/groups`

---

### getUsers()

Gets the direct members and banned members of the group that have a known corresponding Google account. Throws an exception if you don't have permission to view the group's member list or the member emails.

Note: if you are a member of a group B which is itself a member of another group A then you are *indirectly* subscribed to group A. Although you receive copies of messages sent to it, you are not actually subscribed to the parent group A.

Here's an example which shows the members of a group. Before running it, replace the email address of the group with that of one on your domain.

```
function listGroupMembers() {
  const GROUP_EMAIL = 'example@googlegroups.com';
  const group = GroupsApp.getGroupByEmail(GROUP_EMAIL);
  const users = group.getUsers();
  console.log(\`Group ${GROUP_EMAIL} has ${users.length} members:\`);
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(user.getEmail());
  }
}
```

In addition to this method, you can use the [Admin SDK Directory](https://developers.google.com/apps-script/advanced/admin-sdk-directory) advanced service to retrieve group members in a domain.

#### Return

`User[]` — All the direct members of the group.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/groups`

---

### hasGroup(group)

Tests if a group is a direct member of this group. The method does not return `true` if the tested group is nested more than one level below this group. Throws an exception if you do not have permission to view the group's member list.

```
const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
const childGroup = GroupsApp.getGroupByEmail('childgroup@googlegroups.com');
if (group.hasGroup(childGroup)) {
  console.log('childgroup@googlegroups.com is a child group');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `group` | `Group` | The group whose membership to test. |

#### Return

`Boolean` — `true` if that group is a child group of this group; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/groups`

---

### hasGroup(email)

Tests if a group is a direct member of this group. The method does not return `true` if the tested group is nested more than one level below this group. Throws an exception if you do not have permission to view the group's member list.

```
const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
if (group.hasGroup('childgroup@googlegroups.com')) {
  console.log('childgroup@googlegroups.com is a child group');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `email` | `String` | A group's email address. |

#### Return

`Boolean` — `true` if that group is a child group of this group; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/groups`

---

### hasUser(email)

Tests if a user is a direct member of the group. Throws an exception if you do not have permission to view the group's member list.

Here's an example which checks if the current user is a member of a group:

```
const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
const currentUser = Session.getActiveUser();
if (group.hasUser(currentUser.getEmail())) {
  console.log('You are a member');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `email` | `String` | A user's email address. |

#### Return

`Boolean` — `true` if that user is a member of the group; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/groups`

---

### hasUser(user)

Tests if a user is a direct member of the group. Throws an exception if you do not have permission to view the group's member list.

Here's an example which checks if the current user is a member of a group:

```
const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
const currentUser = Session.getActiveUser();
if (group.hasUser(currentUser)) {
  console.log('You are a member');
}
```

#### Parameters

| Name | Type | Description |
| --- | --- | --- |
| `user` | `User` | The user whose membership to test. |

#### Return

`Boolean` — `true` if that user is a member of the group; `false` otherwise.

#### Authorization

Scripts that use this method require authorization with one or more of the following [scopes](https://developers.google.com/apps-script/concepts/scopes#setting_explicit_scopes):

- `https://www.googleapis.com/auth/groups`
