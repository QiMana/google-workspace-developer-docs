---
source: https://developers.google.com/workspace/vault/guides/count
root: workspace
fetched_at: 2026-04-23T15:32:02.212Z
---

# Count query results

## Count query results

You can use the `matters.count` method to count the messages from a Gmail or Google Groups query before you create an export. Use this information to refine your query filters and return fewer results.

To work with Google Vault resources, an account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, an account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.

The following example shows how to count the results returned by a query for messages that meet the following criteria:

- Messages owned by accounts `email1` and `email2`.
- Excludes draft messages.
- Messages sent to `ceo@solarmora.com`.

### Java

```
public Long count(Vault client, String matterId) {
  AccountInfo emailsToSearch = new AccountInfo().setEmails(ImmutableList.of("email1", "email2"));
  MailOptions mailQueryOptions = new MailOptions().setExcludeDrafts(true);
  String queryTerms = "to:ceo@solarmora.com";
  Query query =
    new Query()
      .setCorpus("MAIL")
      .setDataScope("ALL_DATA")
      .setSearchMethod("ACCOUNT")
      .setAccountInfo(emailsToSearch)
      .setTerms(queryTerms);
  CountArtifactsRequest request = new CountArtifactsRequest().setQuery(query);
  Operation operation = client.matters().count(matterId, request).execute();

  while(!operation.getDone()) {
    sleep(2000);
    operation = service.operations().get(operation.getName()).execute();
  }
  if(operation.getResponse() != null) {
    return Long.parseLong(operation.getResponse.get("total_count").toString());
  }
  return -1;
}
```

### Python

```
def count(service, matter_id):
  emails_to_search = ['email1', 'email2']
  mail_query_options = {'excludeDrafts': True}
  query_terms = 'to:ceo@solarmora.com'
  mail_query = {
    'corpus': 'MAIL',
    'dataScope': 'ALL_DATA',
    'searchMethod': 'ACCOUNT',
    'accountInfo': {
        'emails': emails_to_search
    },
    'terms': query_terms,
    'mailOptions': mail_query_options,
  }
  request = {
    'query': mail_query
  }
  operation = service.matters().count(matterId=matter_id, body=request).execute()

  while not operation.getDone():
    time.sleep(2)
    operation = service.operations().get(name=operation.getName()).execute()

  if operation.getResponse() is None:
    return -1

  return operation.getResponse()["total_count"]
```
