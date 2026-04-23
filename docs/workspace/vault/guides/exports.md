---
source: https://developers.google.com/workspace/vault/guides/exports
root: workspace
fetched_at: 2026-04-23T15:32:03.592Z
---

# Manage exports

The Google Vault API lets you manage Google Vault exports. You can perform the following tasks:

## Before you begin

To set up the required libraries and authentication, work through the quickstart for your programming language.

To work with Vault resources, an account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, an account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

## Create a Gmail export

The following example shows how to create a Gmail export. This request exports all Gmail and classic Hangouts messages that meet the following criteria:

- Messages owned by accounts `email1` and `email2`.
- Excludes draft messages.
- Messages sent to `ceo@solarmora.com`.

These examples use the classic Gmail export system. To export using the [new export system](https://support.google.com/vault/answer/4388708#new_gmail_export), in [MailExportOptions](../reference/rest/v1/matters.exports.md#MailExportOptions), set `useNewExport` to true.

### Java

```
public Export createMailAccountHeldDataExports(Vault client, String matterId) {
  AccountInfo emailsToSearch = new AccountInfo().setEmails(ImmutableList.of("email1", "email2"));
  MailOptions mailQueryOptions = new MailOptions().setExportFormat("PST");
  String queryTerms = "to:ceo@solarmora.com";
  Query mailQuery =
      new Query()
          .setCorpus("MAIL")
          .setDataScope("HELD_DATA")
          .setSearchMethod("ACCOUNT")
          .setAccountInfo(emailsToSearch)
          .setTerms(queryTerms)
          .setMailOptions(mailQueryOptions);
  MailExportOptions mailExportOptions =
      new MailExportOptions()
          .setExportFormat("MBOX")
          .showConfidentialModeContent(true);
  Export wantedExport =
      new Export()
          .setMatterId(matterId)
          .setName("My first mail accounts export")
          .setQuery(mailQuery)
          .setExportOptions(new ExportOptions().setMailOptions(mailExportOptions));
  return client.matters().exports().create(matter, wantedExport).execute();
}
```

### Python

```
def create_mail_account_held_data_export(service, matter_id):
  emails_to_search = ['email1', 'email2']
  mail_query_options = {'excludeDrafts': True}
  query_terms = 'to:ceo@solarmora.com'
  mail_query = {
      'corpus': 'MAIL',
      'dataScope': 'HELD_DATA',
      'searchMethod': 'ACCOUNT',
      'accountInfo': {
          'emails': emails_to_search
      },
      'terms': query_terms,
      'mailOptions': mail_query_options,
  }
  mail_export_options = {
      'exportFormat': 'MBOX',
      'showConfidentialModeContent': True
      }
  wanted_export = {
      'name': 'My first mail accounts export',
      'query': mail_query,
      'exportOptions': {
          'mailOptions': mail_export_options
  }
}
return service.matters().exports().create(
  matterId=matter_id, body=wanted_export).execute()
```

For Gmail exports, `MBOX` format exports process faster than `PST` format exports.

## Create a Drive export

The following example shows how to create a Drive export. This request exports all files, including those in shared drives, that meet the following criteria:

- Belong to the specified organizational unit (obtained with the Admin SDK).
- Were created between the specified [times](https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto#L99).

### Java

```
public Export createDriveOuAllDataExport(Vault client, String matterId) {
  OrgUnitInfo ouToSearch = new OrgUnitInfo().setOrgUnitId("ou id retrieved from admin sdk");
  DriveOptions driveQueryOptions = new DriveOptions().setIncludeSharedDrives(true);
  Query driveQuery =
      new Query()
          .setCorpus("DRIVE")
          .setDataScope("ALL_DATA")
          .setSearchMethod("ORG_UNIT")
          .setOrgUnitInfo(ouToSearch)
          .setDriveOptions(driveQueryOptions)
          .setStartTime("2017-03-16T00:00:00Z")
          .setEndTime("2017-03-16T00:00:00Z")
          .setTimeZone("Etc/GMT+2");
  DriveExportOptions driveExportOptions = new DriveExportOptions().setIncludeAccessInfo(false);
  Export wantedExport =
      new Export()
          .setName("My first drive ou export")
          .setQuery(driveQuery)
          .setExportOptions(new ExportOptions().setDriveOptions(driveExportOptions));
  return client.matters().exports().create(matter, wantedExport).execute();
}
```

### Python

```
def create_drive_ou_all_data_export(service, matter_id):
  ou_to_search = 'ou id retrieved from admin sdk'
  drive_query_options = {'includeSharedDrives': True}
  drive_query = {
    'corpus': 'DRIVE',
    'dataScope': 'ALL_DATA',
    'searchMethod': 'ORG_UNIT',
    'orgUnitInfo': {
        'org_unit_id': ou_to_search
    },
    'driveOptions': drive_query_options,
    'startTime': '2017-03-16T00:00:00Z',
    'endTime': '2017-09-23T00:00:00Z',
    'timeZone': 'Etc/GMT+2'
  }
  drive_export_options = {'includeAccessInfo': False}
  wanted_export = {
    'name': 'My first drive ou export',
    'query': drive_query,
    'exportOptions': {
        'driveOptions': drive_export_options
    }
  }
return service.matters().exports().create(
  matterId=matter_id, body=wanted_export).execute()
```

## Create a Meet export

The following example shows how to create a Meet export. This request exports files associated with accounts in the specified organizational unit that have a filename that follows the pattern for Meet recordings.

### Python

```
def create_meet_export(service, matter_id, ou_to_search, export_name):
  export = {
    'name': export_name,
    'query': {
        'corpus': 'DRIVE',
        'dataScope': 'ALL_DATA',
        'searchMethod': 'ORG_UNIT',
        'terms': 'title:"...-...-... \\(....-..-.. at ..:.. *\\)"',
        'orgUnitInfo': {
            'orgUnitId': 'id:'+ou_to_search
        },
        'driveOptions': {
            'includeTeamDrives': True,
            'includeSharedDrives': True
        },
        'timeZone': 'Etc/GMT',
        'method': 'ORG_UNIT'
    },
    'exportOptions': {
        'driveOptions': {},
        'region': 'ANY'
    },
  }

  return service.matters().exports().create(
    matterId=matter_id, body=export).execute()
```

## Export from a saved query

The following example shows how to create an export from a saved query.

### Python

```
def create_mail_export_from_saved_query(service, matter_id, saved_query_id, export_name):
  export = {
    'name': export_name,
    'exportOptions': {
      'mailOptions': {
        'exportFormat': 'PST',
        'showConfidentialModeContent': True
      },
    'region': 'ANY'
    }
  }

  export['query'] = service.matters().savedQueries().get(
    savedQueryId=saved_query_id, matterId=matter_id).execute()['query']
  return service.matters().exports().create(
    matterId=matter_id, body=export).execute()
```

## List exports

The following example shows how to retrieve a list of exports associated with a matter.

### Java

```
public class exports {
  public ListExportsResponse listExports(Vault client, String matterId) {
    return client.matters().exports().list(matterId).execute();
}
```

### Python

```
def list_exports(service, matter_id):
 return service.matters().exports().list(matterId=matter_id).execute()
```

## Get information about an export

The following example shows how to get information about a specific export. To download exported files and messages, you use Cloud APIs (in the next example).

### Java

```
public Export getExportById(Vault client, String matterId, String exportId) {
  return client.matters().exports().get(matterId, exportId).execute();
}
```

### Python

```
def get_export_by_id(service, matter_id, export_id):
  return service.matters().exports().get(
    matterId=matter_id, exportId=export_id).execute()
```

## Download an export from Google Cloud

The following example shows how to download all completed exports in a matter from Google Cloud. This request uses Vault and Cloud APIs.

To download an export, an account needs the [Manage Exports privilege](https://support.google.com/vault/answer/2799699) and the matter shared with them.

### Python

```
def download_exports(service, matter_id):
"""Google Cloud storage service is authenticated by running
\`gcloud auth application-default login\` and expects a billing enabled project
in ENV variable \`GOOGLE_CLOUD_PROJECT\` """
gcpClient = storage.Client()
matter_id = os.environ['MATTERID']
  for export in vaultService.matters().exports().list(
      matterId=matter_id).execute()['exports']:
    if 'cloudStorageSink' in export:
      directory = export['name']
      if not os.path.exists(directory):
        os.makedirs(directory)
      print(export['id'])
      for sinkFile in export['cloudStorageSink']['files']:
        filename = '%s/%s' % (directory, sinkFile['objectName'].split('/')[-1])
        objectURI = 'gs://%s/%s' % (sinkFile['bucketName'],
                                    sinkFile['objectName'])
        print('get %s to %s' % (objectURI, filename))
        gcpClient.download_blob_to_file(objectURI, open(filename, 'wb+'))
```

## Delete an export

The following example shows how to delete an export.

### Java

```
public void deleteExportById(Vault client, String matterId, String exportId) {
   client.matters().exports().delete(matterId, exportId).execute();
```

### Python

```
def delete_export_by_id(service, matter_id, export_id):
  return service.matters().exports().delete(
    matterId=matter_id, exportId=export_id).execute()
```

For app-specific information on search and export including search limits, see [Get started with Vault search and export](https://support.google.com/vault/answer/6161352).
