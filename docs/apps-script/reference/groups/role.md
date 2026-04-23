---
source: https://developers.google.com/apps-script/reference/groups/role
root: apps-script
fetched_at: 2026-04-23T15:20:31.747Z
---

# Enum Role

## Page Summary

- A user has exactly one role within a group they are subscribed to.
- Roles in a group can be OWNER, MANAGER, MEMBER, INVITED, PENDING, or BANNED.
- To call an enum representing a role, use the format `GroupsApp.Role.ROLE_NAME`.

Possible roles of a user within a group, such as owner or ordinary member. Users subscribed to a group have exactly one role within the context of that group.

To call an enum, you call its parent class, name, and property. For example, ` GroupsApp.Role.OWNER`.

#### See also

- `Group.getRole(email)`
