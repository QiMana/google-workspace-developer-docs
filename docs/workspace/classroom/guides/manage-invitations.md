---
source: https://developers.google.com/workspace/classroom/guides/manage-invitations
root: workspace
fetched_at: 2026-04-23T15:25:48.638Z
---

# Manage Course Invitations

An [`Invitation` resource](https://developers.google.com/workspace/classroom/reference/rest/v1/invitations) in Classroom represents an invitation for a user to join a course with a specific [course role](https://developers.google.com/workspace/classroom/reference/rest/v1/invitations#courserole): student, teacher, or owner.

Each `Invitation` resource contains the following fields:

- `id`: Classroom-assigned identifier for the invitation.
- `userId`: The ID of the user that has been invited to the course.
- `courseId`: The course that the user is being invited to.
- `role`: The [course role](https://developers.google.com/workspace/classroom/reference/rest/v1/invitations#courserole) that the invited user will have in the course.

## Create an Invitation

The [`invitations.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/invitations/create) method can be used to invite a user to a course with a specific role. Include the [`Invitation` resource](https://developers.google.com/workspace/classroom/reference/rest/v1/invitations) in the request body and specify the `courseId`, `userId`, and `role`.

### Java

```
Invitation invitation = null;
try {
  /* Set the role the user is invited to have in the course. Possible values of CourseRole can be
  found here: https://developers.google.com/classroom/reference/rest/v1/invitations#courserole.*/
  Invitation content =
      new Invitation().setCourseId(courseId).setUserId(userId).setRole("TEACHER");

  invitation = service.invitations().create(content).execute();

  System.out.printf(
      "User (%s) has been invited to course (%s).\n",
      invitation.getUserId(), invitation.getCourseId());
} catch (GoogleJsonResponseException e) {
  // TODO (developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("The course or user does not exist.\n");
  }
  throw e;
} catch (Exception e) {
  throw e;
}
return invitation;
```

## Retrieve an Invitation

Retrieve a specific invitation by calling the [`invitations.get()`](https://developers.google.com/workspace/classroom/reference/rest/v1/invitations/get) method and specifying the `id` of the invitation.

### Java

```
Invitation invitation = null;
try {
  invitation = service.invitations().get(id).execute();
  System.out.printf(
      "Invitation (%s) for user (%s) in course (%s) retrieved.\n",
      invitation.getId(), invitation.getUserId(), invitation.getCourseId());
} catch (GoogleJsonResponseException e) {
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("The invitation id (%s) does not exist.\n", id);
  }
  throw e;
} catch (Exception e) {
  throw e;
}
return invitation;
```

## Accept an Invitation

Accepting an invitation deletes the invitation and adds the invited user to the course with the role specified in the invitation. Accept an invitation by calling the [`invitations.accept()`](https://developers.google.com/workspace/classroom/reference/rest/v1/invitations/accept) method and specifying the `id` of the invitation.

### Java

```
try {
  service.invitations().accept(id).execute();
  System.out.printf("Invitation (%s) was accepted.\n", id);
} catch (GoogleJsonResponseException e) {
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("The invitation id (%s) does not exist.\n", id);
  }
  throw e;
} catch (Exception e) {
  throw e;
}
```

## Delete an Invitation

The only way to update an invitation is to delete it and create a new invitation. To delete the invitation, call the [`invitations.delete()`](https://developers.google.com/workspace/classroom/reference/rest/v1/invitations/delete) method and specify the `id`.

### Java

```
try {
  service.invitations().delete(id).execute();
  System.out.printf("Invitation (%s) was deleted.\n", id);
} catch (GoogleJsonResponseException e) {
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("The invitation id (%s) does not exist.\n", id);
  }
  throw e;
} catch (Exception e) {
  throw e;
}
```
