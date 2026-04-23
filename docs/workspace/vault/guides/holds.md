---
source: https://developers.google.com/workspace/vault/guides/holds
root: workspace
fetched_at: 2026-04-23T15:32:02.586Z
---

# Manage holds

Holds preserve data indefinitely to meet legal or preservation obligations. Usually, holds are placed on one or more users to ensure that data relevant to a matter cannot be deleted until that matter is no longer active.

If a user subject to a hold deletes held data, the data is removed from the user's view, but it is preserved in Google Vault. As long as the hold is in place, a Vault administrator can search and export that data.

Holds have the following components:

- **A service.** The application responsible for the data to be held. The service can be set to mail, Drive, or Groups.
- **A scope.** The entities covered by the hold. The scope can be set to one or more user accounts, or to an organizational unit (OU).
- **Additional options (optional).** The specific details (search queries or configuration options) used to narrow down the data to be held within the defined scope. Options include:
	- mail, Groups: search query to narrow down the hold
		- Drive: include shared drives in the hold

To work with Vault resources, an account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, an account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege. A [matter](./matters.md) must exist before you can create a hold.

## Create a hold for mail on specific user accounts with a search query

The following example shows how a hold named "My First mail Accounts Hold" is created for:

- Service: mail
- Entity: user accounts "user1" and "user2"
- Additional options: search query "to:ceo@company.com"

Retrieve user account IDs from the [Directory API](../../admin/directory/v1/guides.md). The `HeldAccount` can take an account ID or email. If both are given, the email is used and the account ID is ignored.

### Java

```
HeldMailQuery mailQuery = new HeldMailQuery().setTerms("to:ceo@company.com");
List accounts = Lists.newArrayList();
accounts.add(new HeldAccount().setAccountId(user1accountId));
accounts.add(new HeldAccount().setEmail(user2Email));
Hold hold = new Hold()
    .setName("My First mail Accounts Hold")
    .setCorpus("MAIL");
    .setQuery(new CorpusQuery().setMailQuery(mailQuery))
    .setAccounts(accounts);
Hold createdHold = client.matters().holds().create(matterId, hold).execute();
```

### Python

```
def create_hold_mail_accounts(service, matter_id, account_id):
    mail_query = {'terms': 'to:ceo@company.com'}
    accounts = [
        {'accountId': user1_account_id},
        {'email': user2_email}
    ]
    wanted_hold = {
        'name': 'My First mail Accounts Hold',
        'corpus': 'MAIL',
        'query': {
            'mailQuery': mail_query
        },
        'accounts': accounts
    }
    return service.matters().holds().create(
        matterId=matter_id, body=wanted_hold).execute()
```

## Create a hold for Drive on an OU and include shared drive content

The following example shows how a hold named "My First Drive OU Hold" is created for the following:

- Service: Drive
- Entity: org unit "Finance" (OU ID is captured in orgUnitId)
- Additional options: include shared drives that users in this org unit are members of

Retrieve organizational unit IDs from the [Directory API](../../admin/directory/v1/guides.md).

### Java

```
HeldOrgUnit orgUnit = new HeldOrgUnit().setOrgUnitId(orgUnitId);
// Include shared drives content.
HeldDriveQuery driveQuery = new HeldDriveQuery().setIncludeSharedDriveFiles(true);
// Create the hold.
Hold hold = new Hold()
    .setName("My First Drive OU Hold")
    .setCorpus("DRIVE")
    .setQuery(new CorpusQuery().setDriveQuery(driveQuery))
    .setOrgUnit(orgUnit);
Hold createdHold = client.matters().holds().create(matterId, hold).execute();
return createdHold;
```

### Python

```
def create_hold_drive_org(service, matter_id, org_unit_id):
    drive_query = {'includeSharedDriveFiles': True}
    org_unit = {'orgUnitId': org_unit_id}
    wanted_hold = {
        'name': 'My First Drive OU Hold',
        'corpus': 'DRIVE',
        'orgUnit': org_unit,
        'query': {
            'driveQuery': drive_query
        }
    }
    return service.matters().holds().create(
        matterId=matter_id, body=wanted_hold).execute()
```

## Create a hold for Groups on specific group accounts with a date range

The following example shows how a hold named "My First Group Hold" is created for the following:

- Service: Groups
- Entity: group accounts "group1" and "group2"
- Additional options: hold only messages with sent dates between "startTime" and "endTime"

Retrieve group account IDs from the [Directory API](../../admin/directory/v1/guides.md).

### Java

```
String APRIL_2_2017_GMT = "2017-04-02T00:00:00Z"; // See below for format*.
 
List accounts = Lists.newArrayList();
accounts.add(new HeldAccount().setAccountId(accountId));
accounts.add(new HeldAccount().setAccountId(accountId2));
HeldGroupsQuery groupQuery = new HeldGroupsQuery();
// Restrict by sent date.
groupQuery.setStartTime(APRIL_2_2017_GMT);
groupQuery.setEndTime(APRIL_2_2017_GMT);
// create the hold
Hold hold = new Hold()
    .setName("My First Group Hold")
    .setCorpus("GROUPS")
    .setQuery(new CorpusQuery().setGroupsQuery(groupQuery));
    hold.setAccounts(accounts);
Hold createdHold = client.matters().holds().create(matterId, hold).execute();
```

### Python

```
def create_hold_groups_date_range(service, matter_id, group_account_id):
    groups_query = {
        'startTime': '2017-04-02T00:00:00Z', # See below for format*
        'endTime': '2017-04-02T00:00:00Z'
    }
    accounts = [{'accountId': group_account_id}]
    wanted_hold = {
        'name': 'My First Group Hold',
        'corpus': 'GROUPS',
        'query': {
            'groupsQuery': groups_query
        },
        'accounts': accounts
    }
    return service.matters().holds().create(
        matterId=matter_id, body=wanted_hold).execute()
```

- [Timestamp format](https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto#L99). Additionally, `start/endTimes` are converted to GMT and rounded down to the start of the given date.

## Query and modify existing holds

The following example shows how to list all accounts included in a hold.

### Java

```
client.matters().holds().accounts().list(matterId, holdId).execute().getAccounts();
```

### Python

```
# If no accounts are on hold, ['accounts'] will raise an error.
def list_held_accounts(service, matter_id, hold_id):
    return service.matters().holds().accounts().list(
        matterId=matter_id, holdId=hold_id).execute()['accounts']
```

The following example shows how to add and remove an account from a hold.

### Java

```
// Add an account by ID.
client
        .matters()
        .holds()
        .accounts()
        .create(matterId, holdId, new HeldAccount().setAccountId(accountId))
        .execute();
// Remove an account by ID.
client.matters().holds().accounts().delete(matterId, holdId, accountId).execute();

String email = "email@email.com";
// Add an account by email.
client
        .matters()
        .holds()
        .accounts()
        .create(matterId, holdId, new HeldAccount().setEmail(email))
        .execute();
```

### Python

```
def add_held_account(service, matter_id, hold_id, account_id):
    held_account = {'accountId': account_id}
    return service.matters().holds().accounts().create(
        matterId=matter_id, holdId=hold_id, body=held_account).execute()

def remove_held_account(service, matter_id, hold_id, account_id):
    return service.matters().holds().accounts().delete(
        matterId=matter_id, holdId=hold_id, accountId=account_id).execute()

def add_held_account(service, matter_id, hold_id, email):
    held_account = {'email': email}
    return service.matters().holds().accounts().create(
        matterId=matter_id, holdId=hold_id, body=held_account).execute()
```

The following example shows how to modify the organizational unit on an existing hold.

### Java

```
Hold hold = client.matters().holds().get(matterId, holdId).execute();
hold.getOrgUnit().setOrgUnitId(newOrgUnitId);
Hold modifiedHold = client.matters().holds().update(matterId, holdId, hold).execute();
return modifiedHold;
```

### Python

```
def update_hold_ou(service, matter_id, hold_id, org_unit_id):
    current_hold = get_hold(matter_id, hold_id)
    current_hold['orgUnit'] = {'orgUnitId': org_unit_id}
    return service.matters().holds().update(
        matterId=matter_id, holdId=hold_id, body=current_hold).execute()
```

The following example shows how to list all holds for a matter.

### Java

```
String matterId = "Matter Id";

// List all holds.
List holdsList =
    client.matters().holds().list(matterId).execute().getHolds();

// Paginate on holds.
ListHoldsResponse response = client
        .matters()
        .holds()
        .list(matterId)
        .setPageSize(10)
        .execute();

String nextPageToken = response.getNextPageToken();
if (nextPageToken != null) {
    client
        .matters()
        .holds()
        .list(matterId)
        .setPageSize(10)
        .setPageToken(nextPageToken)
        .execute();
}
```

### Python

```
# This can paginate in the same manner as with matters.
def list_holds(service, matter_id):
    return service.matters().holds().list(matterId=matter_id).execute()
```
