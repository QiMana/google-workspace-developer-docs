---
source: https://developers.google.com/workspace/admin/domain-shared-contacts/perform-batch-operations
root: workspace
fetched_at: 2026-04-23T15:23:53.683Z
---

# Perform batch operations

Batch requests allow the server to perform multiple operations with a single HTTP request, which can improve application responsiveness. To perform a batch operation, create a contacts feed and add an entry for each operation.

Batch requests are limited to 100 operations. For more information, see [Batch Processing in the Google Data Protocol](https://developers.google.com/gdata/docs/batch). Changes can take up to 24 hours to reflect in auto-complete and the contact manager.

The following code sample shows a batch request that creates 2 shared contacts. Batch requests can also query, update, and delete contacts. Update and delete entries require an edit link for [optimistic concurrency](https://developers.google.com/gdata/docs/1.0/reference#Optimistic-concurrency).

```
<?xml version='1.0' encoding='UTF-8'?>
<feed xmlns='http://www.w3.org/2005/Atom'
      xmlns:gContact='http://schemas.google.com/contact/2008'
      xmlns:gd='http://schemas.google.com/g/2005'
      xmlns:batch='http://schemas.google.com/gdata/batch'>
  <category scheme='http://schemas.google.com/g/2005#kind'
      term='http://schemas.google.com/g/2008#contact' />
  <entry>
    <batch:id>1</batch:id>
    <batch:operation type='insert' />
    <category scheme='http://schemas.google.com/g/2005#kind'
      term='http://schemas.google.com/g/2008#contact'/>
    <gd:name>
      <gd:givenName>FIRST_NAME</gd:fullName>
      <gd:familyName>LAST_NAME</gd:fullName>
    </gd:name>
    <gd:email rel='http://schemas.google.com/g/2005#home'
      address='EMAIL_ADDRESS' primary='true'/>
  </entry>
  <entry>
    <batch:id>2</batch:id>
    <batch:operation type='insert' />
    <category scheme='http://schemas.google.com/g/2005#kind'
      term='http://schemas.google.com/g/2008#contact'/>
    <gd:name>
      <gd:givenName>FIRST_NAME</gd:fullName>
      <gd:familyName>LAST_NAME</gd:fullName>
    </gd:name>
    <gd:email rel='http://schemas.google.com/g/2005#home'
      address='EMAIL_ADDRESS'
      primary='true'/>
  </entry>
</feed>
```

Replace the following:

- `FIRST_NAME`: First name of the contact.
- `LAST_NAME`: Last name of the contact.
- `EMAIL_ADDRESS`: Preferred email address.
