---
source: https://developers.google.com/workspace/classroom/guides/manage-guardians
root: workspace
fetched_at: 2026-04-23T15:25:47.969Z
---

# Create and manage guardians

A [`Guardian` resource](https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardians#resource-guardian) represents a user, such as a parent, who receives information about a student's courses and coursework. The guardian, who typically isn't a member of the student's Classroom domain, must be invited using their email address.

Invitations are represented by the [`GuardianInvitation` resource](https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardianInvitations#resource-guardianinvitation). The invited user receives an email prompting them to accept the invitation. If the email address is not associated with a Google Account, the user is prompted to create one before accepting the invitation.

When the user is invited and before they accept the invitation, the `GuardianInvitation` has a state of `PENDING`. Once the user accepts the invitation, the `GuardianInvitation` is marked as `COMPLETED` and a [`Guardian` resource](https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardians#resource-guardian) is created.

A `GuardianInvitation` state might also be changed to `COMPLETED` if it expires or if an authorized user cancels the invitation (for example, using the `PatchGuardianInvitation` method). A guardian relationship may also be broken by a guardian, a Classroom teacher, or an administrator, using either the Classroom web application or the `DeleteGuardian` method.

## Who can manage guardians

The following table describes the actions that can be performed with respect to guardians, according to the type of user that is authenticated:

![Table of guardian-related ACLs by user type](https://developers.google.com/static/workspace/classroom/images/guardian_acls.png)

## Scopes

There are three scopes that allow you to manage guardians:

- `https://www.googleapis.com/auth/classroom.guardianlinks.me.readonly`: view a user's own guardians.
- `https://www.googleapis.com/auth/classroom.guardianlinks.students.readonly`: view guardians and guardian invitations for students that the user teaches or administers.
- `https://www.googleapis.com/auth/classroom.guardianlinks.students`: view and manage guardians and guardian invitations for students that the user teaches or administers.

## Common actions

This section describes some of the common guardian actions that you may want to perform using the Google Classroom API.

### Create a guardian invitation

The following example shows how you can create a guardian invitation using the [`userProfiles.guardianInvitations.create()`](https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardianInvitations/create) method:

### Java

```
GuardianInvitation guardianInvitation = null;

/* Create a GuardianInvitation object with state set to PENDING. See
https://developers.google.com/classroom/reference/rest/v1/userProfiles.guardianInvitations#guardianinvitationstate
for other possible states of guardian invitations. */
GuardianInvitation content =
    new GuardianInvitation()
        .setStudentId(studentId)
        .setInvitedEmailAddress(guardianEmail)
        .setState("PENDING");
try {
  guardianInvitation =
      service.userProfiles().guardianInvitations().create(studentId, content).execute();

  System.out.printf("Invitation created: %s\n", guardianInvitation.getInvitationId());
} catch (GoogleJsonResponseException e) {
  // TODO (developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("There is no record of studentId: %s", studentId);
  } else {
    throw e;
  }
} catch (Exception e) {
  throw e;
}
return guardianInvitation;
```

### Python

```
guardianInvitation = {
  'invitedEmailAddress': 'guardian@gmail.com',
}
guardianInvitation = service.userProfiles().guardianInvitations().create(
                      studentId='student@mydomain.edu',
                          body=guardianInvitation).execute()
print("Invitation created with id: {0}".format(guardianInvitation.get('invitationId')))
```

The response includes a server-assigned identifier that can be used to refer to the `GuardianInvitation`.

### Cancel a guardian invitation

To cancel an invitation, modify the state of the invitation from `PENDING` to `COMPLETE` by calling the [`userProfiles.guardianInvitations.patch()`](https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardianInvitations/patch) method. This is the only way to remove an invitation.

### Java

```
GuardianInvitation guardianInvitation = null;

try {
  /* Change the state of the GuardianInvitation from PENDING to COMPLETE. See
  https://developers.google.com/classroom/reference/rest/v1/userProfiles.guardianInvitations#guardianinvitationstate
  for other possible states of guardian invitations. */
  GuardianInvitation content =
      service.userProfiles().guardianInvitations().get(studentId, invitationId).execute();
  content.setState("COMPLETE");

  guardianInvitation =
      service
          .userProfiles()
          .guardianInvitations()
          .patch(studentId, invitationId, content)
          .set("updateMask", "state")
          .execute();

  System.out.printf(
      "Invitation (%s) state set to %s\n.",
      guardianInvitation.getInvitationId(), guardianInvitation.getState());
} catch (GoogleJsonResponseException e) {
  // TODO (developer) - handle error appropriately
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf(
        "There is no record of studentId (%s) or invitationId (%s).", studentId, invitationId);
  } else {
    throw e;
  }
} catch (Exception e) {
  throw e;
}
return guardianInvitation;
```

### Python

```
guardian_invite = {
     'state': 'COMPLETE'
}
guardianInvitation = service.userProfiles().guardianInvitations().patch(
  studentId='student@mydomain.edu',
  invitationId=1234, # Replace with the invitation ID of the invitation you want to cancel
  updateMask='state',
  body=guardianInvitation).execute()
```

### List invitations for a specific student

You can get a list of all invitations that have been sent for a specific student using the [`userProfiles.guardianInvitations.list()`](https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardianInvitations/list) method. By default, only `PENDING` invitations will be returned. A domain administrator can also retrieve invitations in the `COMPLETED` state by providing a `states` parameter.

### Java

```
List<GuardianInvitation> guardianInvitations = new ArrayList<>();
String pageToken = null;

try {
  do {
    ListGuardianInvitationsResponse response =
        service
            .userProfiles()
            .guardianInvitations()
            .list(studentId)
            .setPageToken(pageToken)
            .execute();

    /* Ensure that the response is not null before retrieving data from it to avoid errors. */
    if (response.getGuardianInvitations() != null) {
      guardianInvitations.addAll(response.getGuardianInvitations());
      pageToken = response.getNextPageToken();
    }
  } while (pageToken != null);

  if (guardianInvitations.isEmpty()) {
    System.out.println("No guardian invitations found.");
  } else {
    for (GuardianInvitation invitation : guardianInvitations) {
      System.out.printf("Guardian invitation id: %s\n", invitation.getInvitationId());
    }
  }
} catch (GoogleJsonResponseException e) {
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("There is no record of studentId (%s).", studentId);
  } else {
    throw e;
  }
} catch (Exception e) {
  throw e;
}
return guardianInvitations;
```

### Python

```
guardian_invites = []
page_token = None

while True:
    response = service.userProfiles().guardianInvitations().list(
                                      studentId='student@mydomain.edu').execute()
    guardian_invites.extend(response.get('guardian_invites', []))
    page_token = response.get('nextPageToken', None)
    if not page_token:
        break

if not courses:
    print('No guardians invited for this {0}.'.format(response.get('studentId')))
else:
    print('Guardian Invite:')
    for guardian in guardian_invites:
        print('An invite was sent to '.format(guardian.get('id'),
                                              guardian.get('guardianId')))
```

### List active guardians

To determine which users are active guardians for a specific student, use the [`userProfiles.guardians.list()`](https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardians/list) method. Active guardians are guardians who have accepted the invitation.

### Java

```
List<Guardian> guardians = new ArrayList<>();
String pageToken = null;

try {
  do {
    ListGuardiansResponse response =
        service.userProfiles().guardians().list(studentId).setPageToken(pageToken).execute();

    /* Ensure that the response is not null before retrieving data from it to avoid errors. */
    if (response.getGuardians() != null) {
      guardians.addAll(response.getGuardians());
      pageToken = response.getNextPageToken();
    }
  } while (pageToken != null);

  if (guardians.isEmpty()) {
    System.out.println("No guardians found.");
  } else {
    for (Guardian guardian : guardians) {
      System.out.printf(
          "Guardian name: %s, guardian id: %s, guardian email: %s\n",
          guardian.getGuardianProfile().getName().getFullName(),
          guardian.getGuardianId(),
          guardian.getInvitedEmailAddress());
    }
  }

} catch (GoogleJsonResponseException e) {
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("There is no record of studentId (%s).", studentId);
  } else {
    throw e;
  }
} catch (Exception e) {
  throw e;
}
return guardians;
```

### Python

```
guardian_invites = []
page_token = None

while True:
    response = service.userProfiles().guardians().list(studentId='student@mydomain.edu').execute()
    guardian_invites.extend(response.get('guardian_invites', []))
    page_token = response.get('nextPageToken', None)
    if not page_token:
        break

if not courses:
    print('No guardians invited for this {0}.'.format(response.get('studentId')))
else:
    print('Guardian Invite:')
    for guardian in guardian_invites:
        print('An invite was sent to '.format(guardian.get('id'),
                                              guardian.get('guardianId')))
```

### Remove guardians

You can also remove a guardian from a student, using the [`userProfiles.guardians.delete()`](https://developers.google.com/workspace/classroom/reference/rest/v1/userProfiles.guardians/delete) method:

### Java

```
try {
  service.userProfiles().guardians().delete(studentId, guardianId).execute();
  System.out.printf("The guardian with id %s was deleted.\n", guardianId);
} catch (GoogleJsonResponseException e) {
  GoogleJsonError error = e.getDetails();
  if (error.getCode() == 404) {
    System.out.printf("There is no record of guardianId (%s).", guardianId);
  }
}
```

### Python

```
service.userProfiles().guardians().delete(studentId='student@mydomain.edu',
                                        guardianId='guardian@gmail.com').execute()
```
