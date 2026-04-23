---
source: https://developers.google.com/apps-script/reference/groups
root: apps-script
fetched_at: 2026-04-23T15:20:36.374Z
---

# Groups Service

## Page Summary

- The Google Groups service allows scripts to access information about Google Groups, such as email addresses or member lists.
- The `GroupsApp` class provides access to Google Groups information and methods like `getGroups()` to retrieve the groups a user is a direct member of.
- The `Group` class represents a group object, allowing queries about members and their roles.
- The `Role` class defines the possible roles a user can have within a group, such as owner, manager, or member.

This service allows scripts to access Google Groups. It can be used to query information such as a group's email address, or the list of groups in which the user is a direct member. Here's an example that shows how many groups the current user is a member of:

```
var groups = GroupsApp.getGroups();
Logger.log('You are a member of %s Google Groups.', groups.length);
```
