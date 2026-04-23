---
source: https://developers.google.com/workspace/vault/guides/matters
root: workspace
fetched_at: 2026-04-23T15:32:03.122Z
---

# Manage matters

A matter is a container for data related to a specific topic, such as a litigation case or an investigation. A matter includes the following items:

- Saved search queries
- Holds
- Accounts with which the matter is shared
- Export sets
- Audit trail

To work with Google Vault resources, an account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, an account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

A matter has the following states:

| State | Description |
| --- | --- |
| Open | The matter is active, and you can create holds, run searches, and export data within it. |
| Closed | Usually when an investigation is complete, the matter is closed. Closed matters can be reopened at any time. Before closing a matter, delete all holds associated with it. |
| Deleted | A matter can be deleted so that it becomes completely unavailable. A deleted matter remains in Trash for approximately 30 days, during which time it can be restored. After that period, the matter is permanently purged. Only closed matters can be deleted. |

![matters lifecycle](https://developers.google.com/static/vault/images/matters.png)

## Create a matter

The following example creates a new matter with a name and description.

### Java

```
Matter matter = new Matter();
matter.setName("Matter Name");
matter.setDescription("Matter Description");
Matter createdMatter = client.matters().create(matter).execute();
```

### Python

```
def create_matter(service):
  matter_content = {
      'name': 'Matter Name',
      'description': 'Matter Description',
  }
  matter = service.matters().create(body=matter_content).execute()
  return matter
```

## Get a matter

There are two views of a matter: `BASIC` (default) and `FULL`. The `FULL` view adds [matter permissions](#matter_permissions) to the `BASIC` view.

The following example retrieves the specified matter.

### Java

```
client.matters().get(matterId).execute(); // Returns BASIC view.
client.matters().get(matterId).setView("BASIC").execute();
client.matters().get(matterId).setView("FULL").execute();
```

### Python

```
matter_id = getMatterId()
service.matters().get(matterId=matter_id).execute(); // Returns BASIC view.
service.matters().get(matterId=matter_id, view='BASIC').execute();
service.matters().get(matterId=matter_id, view='FULL').execute();
```

## List matters

The following example shows how to list all open, closed, and deleted matters. By default, the API returns up to 100 matters per request.

### Java

```
List mattersList = client.matters().list().execute().getMatters();
```

### Python

```
mattersList = service.matters().list().execute()
```

The following example shows how to list all open, closed, and deleted matters over multiple requests.

### Java

```
ListMattersResponse firstPageResponse = client.matters().list().setPageSize(20).execute();

String nextPageToken = firstPageResponse.getNextPageToken();
if (nextPageToken != null) {
  client.matters().list().setPageToken(nextPageToken).setPageSize(20).execute();
}
```

### Python

```
list_response1 = service.matters().list(
        view='FULL', pageSize=10).execute()
for matter in list_response1['matters']:
    print(matter)

if 'nextPageToken' in list_response1:
    list_response2 = service.matters().list(
        pageSize=10, pageToken=list_response1['nextPageToken']).execute()
    for matter in list_response2['matters']:
      print(matter)
```

The following example shows how to list matters of a specified state.

### Java

```
// Only get open matters.
List openMattersList = client.matters().list().setState("OPEN")
    .execute().getMatters();

// Only get closed matters.
List closedMattersList = client.matters().list().setState("CLOSED")
    .execute().getMatters();

// Only get deleted matters.
List deletedMattersList = client.matters().list().setState("DELETED")
    .execute().getMatters();
```

### Python

```
# Only get open matters.
openMattersList = client.matters().list(
    state='OPEN').execute()

# Only get closed matters.
closedMattersList = client.matters().list(
    state='CLOSED').execute()

# Only get deleted matters.
deletedMattersList = client.matters().list(
    state='DELETED').execute()
```

## Update a matter

The following example updates the name and description of a matter.

### Java

```
String matterId = "matterId";
Matter matter = new Matter().setName("New Name")
    .setDescription("New Description");
client.matters().update(matterId, matter).execute();
```

### Python

```
def update_matter(service, matter_id):
    wanted_matter = {
        'name': 'New Matter Name',
        'description': 'New Description'
    }
    updated_matter = service.matters().update(
        matterId=matter_id, body=wanted_matter).execute()
    return updated_matter
```

## Close a matter

The following example shows how to close a matter.

### Java

```
String matterId = "matterId";
// If the matter still has holds, this operation will fail.
client.matters().close(matterId, new CloseMatterRequest()).execute();
```

### Python

```
def close_matter(service, matter_id):
    close_response = service.matters().close(
        matterId=matter_id, body={}).execute()
    return close_response['matter']
```

## Delete, undelete, or reopen a matter

The following example shows how to delete, undelete, or reopen a matter.

### Java

```
Matter matter = client.matters().get(matterId).execute();

// Delete the matter.
client.matters().delete(matter.getMatterId());
// Undelete the matter.
client.matters().undelete(matter.getMatterId(), new UndeleteRequest());
// Reopen the matter.
client.matters().reopen(matter.getMatterId(), new ReopenMatterRequest());
```

### Python

```
def reopen_matter(service, matter_id):
    reopen_response = service.matters().reopen(
        matterId=matter_id, body={}).execute()
    return reopen_response['matter']

def delete_matter(service, matter_id):
    service.matters().delete(matterId=matter_id).execute()
    return get_matter(matter_id)

def undelete_matter(service, matter_id):
    undeleted_matter = service.matters().undelete(
        matterId=matter_id, body={}).execute()
    return undeleted_matter
```

## Matter permissions

Each matter has a permission set of who can access or edit it. You can view this by getting the `FULL` view of a matter.

### Java

```
String matterId = "Matter Id";
String accountId = "Account Id";

// List permissions for a matter.
Matter matter = client.matters().get(matterId).setView("FULL").execute();
List matterPermissions = matter.getMatterPermissions();

// Add a user to the permission set.
client
    .matters()
    .addPermissions(matterId)
    .setMatterPermissionAccountId(accountId)
    .setMatterPermissionRole("COLLABORATOR")
    .execute();

// Remove a user from the permission set.
client
    .matters()
    .removePermissions(matterId)
    .setAccountId(accountId)
    .execute();
```

### Python

```
def list_matter_permission(service, matter_id):
    matter = service.matters().get(matterId=matter_id, view='FULL').execute()
    return matter['matterPermissions']

def add_matter_permission(service, matter_id, account_id):
    permission = service.matters().addPermissions(
        matterId=matter_id,
        matterPermission_accountId=account_id,
        matterPermission_role='COLLABORATOR',
        sendEmails='False',
        ccMe='False').execute()
    return permission

def remove_matter_permission(service, matter_id, account_id):
    service.matters().removePermissions(
        matterId=matter_id, accountId=account_id).execute()
```
