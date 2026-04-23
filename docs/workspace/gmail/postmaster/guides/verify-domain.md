---
source: https://developers.google.com/workspace/gmail/postmaster/guides/verify-domain
root: workspace
fetched_at: 2026-04-23T15:30:00.609Z
---

# Verify authentication domain

You can verify a specific domain or all authentication domains you have registered with Postmaster.

## Verify a specific domain

To verify a specific domain, call [`domains.get()`](../reference/rest/v2/domains/get.md) with the name of the domain. Following is a code sample showing how to verify a specific domain:

### Java

```
/**
   * Gets a specific domain registered by the client.
   *
   * @param service Authorized Gmail PostmasterTools API instance.
   * @param domainName The fully qualified domain name.
   * @return The domain
   * @throws IOException
   */
public static Domain getDomain(PostmasterTools service, String domainName) throws IOException {
  String query = String.format("domains/%s", domainName);
  Domain domain = service.domains().get(query).execute();
  System.out.println(domain.toPrettyString());
  return domain;
}
```

### Python

```
"""Gets a specific domain registered by the client.

Args:
service: Authorized Gmail PostmasterTools API instance.
domain_name: The fully qualified domain name.

Returns:
The domain.
"""
def get_domain(service, domain_name):
  try:
      query = 'domains/' + domain_name
      domain = service.domains().get(name=query).execute();
      print(domain)
      return domain
  except errors.HttpError as err:
      print('An error occurred: %s' % err)
```

## Verify all domains

To verify all domains, call [`domains.list()`](../reference/rest/v2/domains/list.md). Following is a code sample showing how to verify all domains:

### Java

```
/**
   * Lists the domains that have been registered by the client.
   *
   * @param service Authorized Gmail PostmasterTools API instance.
   * @return Response message for ListDomains.
   * @throws IOException
   */
public static ListDomainsResponse listDomains(PostmasterTools service) throws IOException {
  ListDomainsResponse listDomainsResponse = service.domains().list().execute();
  for (Domain domain : listDomainsResponse.getDomains()) {
    System.out.println(domain.toPrettyString());
  }
    return listDomainsResponse;
}
```

### Python

```
"""Lists the domains that have been registered by the client.

Args:
service: Authorized Gmail PostmasterTools API instance.

Returns:
Response message for ListDomains.
"""
def list_domains(service):
  try:
      domains = service.domains().list().execute()
      if not domains:
          print('No domains found.')
      else:
          print('Domains:')
          for domain in domains['domains']:
              print(domain)
      return domains
  except errors.HttpError as err:
      print('An error occurred: %s' % err)
```
