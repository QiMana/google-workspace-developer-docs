---
source: https://developers.google.com/workspace/keep/api/guides/modify-permissions
root: workspace
fetched_at: 2026-04-23T15:30:08.335Z
---

# Add and remove note collaborators with permissions

The creator of a note is the owner. The owner can add collaborators using permissions granted to individual users or groups. Collaborators gain edit access to the note. You can also revoke collaborator permissions using the API. This page shows how to add and delete collaborators using permissions.

## Add permissions to add collaborators

The following sample shows how to use permissions on a user or group to add collaborators to a note:

### REST

Call [notes.permissions.batchCreate()](../reference/rest/v1/notes.permissions/batchCreate.md) with the parent note assigned the permission and `permission`. Note that the member (user, group) can only be assigned the `WRITER` role.

### Java

```
/**
 * Grants write access to a user and to a Google group for the given note.
 *
 * @param note The note whose permissions will be updated.
 * @param userEmail Email address of the user that will be added to the
 *     permissions of the note.
 * @param groupEmail Email address of the Google Groups that will be
 *     added to the permissions of the note.
 * @throws IOException
 * @return The response of the create permissions request.
 */
private BatchCreatePermissionsResponse addPermissions(
    Note note, String userEmail, String groupEmail) throws IOException {
  String noteName = note.getName();
  CreatePermissionRequest userPermission =
      new CreatePermissionRequest()
          .setParent(noteName)
          .setPermission(new Permission().setEmail(userEmail).setRole("WRITER"));

  CreatePermissionRequest groupPermission =
      new CreatePermissionRequest()
          .setParent(noteName)
          .setPermission(new Permission().setEmail(groupEmail).setRole("WRITER"));

  BatchCreatePermissionsRequest batchCreatePermissionsRequest =
      new BatchCreatePermissionsRequest()
          .setRequests(Arrays.asList(userPermission, groupPermission));

  return keepService
      .notes()
      .permissions()
      .batchCreate(noteName, batchCreatePermissionsRequest)
      .execute();
}
```

## Revoke permissions to remove collaborators

The following sample shows how to use permissions to remove all collaborators from a note:

### REST

Call [notes.permissions.batchDelete()](../reference/rest/v1/notes.permissions/batchDelete.md) with the parent note assigned the permission and `permission`.

### Java

```
/**
 * Deletes all permissions of a given note excluding the owner. The owner
 * can't be removed from a note's permissions.
 *
 * @param note The note whose permissions will be deleted.
 * @throws IOException
 */
private void deletePermissions(Note note) throws IOException {
  List<Permission> notePermissions =
      keepService.notes().get(note.getName()).execute().getPermissions();

  // List of users, groups or families that will be deleted from the
  // permissions of the note.
  List<String> permissionsToDelete = new ArrayList<>();

  for (Permission permission : notePermissions) {
    // The note owner can't be removed from the permissions. Trying to
    // remove the owner causes an exception.
    if (!permission.getRole().equals("OWNER")) {
      permissionsToDelete.add(permission.getName());
    }
  }

  keepService
      .notes()
      .permissions()
      .batchDelete(
          note.getName(),
          new BatchDeletePermissionsRequest().setNames(permissionsToDelete))
      .execute();
}
```
