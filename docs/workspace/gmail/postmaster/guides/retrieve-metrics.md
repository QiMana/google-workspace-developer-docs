---
source: https://developers.google.com/workspace/gmail/postmaster/guides/retrieve-metrics
root: workspace
fetched_at: 2026-04-23T15:30:00.487Z
---

# Retrieve email statistics

You can retrieve email statistics for a specific date range on a specific domain.

For information on how to improve certain statistics, refer to [Prevent mail to Gmail users from being blocked or sent to spam](https://support.google.com/mail/answer/81126)

## Retrieve statistics for a date range

To retrieve statistics for a specific date range, call [`domains.domainStats.query()`](../reference/rest/v2/domains.domainStats/query.md) with the domain and date range. Following is a code sample showing how to retrieve email statistics for a specific date range:

### Java

```
/**
   * Lists domain statistics for a specific date range.
   *
   * @param service Authorized Gmail PostmasterTools API instance.
   * @param domainName The fully qualified domain name.
   * @param startDate The first day of the date range for which to retrieve statistics.
   * @param endDate The last day of the date range for which to retrieve statistics.
   * @param pageSize The number of DomainStats to get per request.
   * @param pageToken The nextPageToken value returned from a previous List request, if any.
   * @return Response message for query domain stats request.
   * @throws IOException
   */
public static QueryDomainStatsResponse queryDomainStats(PostmasterTools service, String domainName,
                                                      Date startDate, Date endDate, int pageSize,
                                                      String pageToken) throws IOException {
  QueryDomainStatsResponse queryDomainStatsResponse = service.domains().domainStats()
          .query("domains/" + domainName)
          .setStartDate(startDate)
          .setEndDate(endDate)
          .setPageSize(pageSize)
          .setPageToken(pageToken)
          .execute();
  System.out.println(queryDomainStatsResponse.toPrettyString());
  return null;
}
```

### Python

```
"""Queries the domain stats for a domain for a specific date range.

  Args:
  service: Authorized Gmail PostmasterTools API instance.
  domain_name: The fully qualified domain name.
  start_date: The first day of the date range for which to retrieve statistics.
  end_date: The last day of the date range for which to retrieve statistics.
  page_size: The number of DomainStats to get per request.
  page_token: The nextPageToken value returned from a previous List request, if any.

  Returns:
  The domain stats of the domain for this date range.
  """
def query_domain_stats(service, domain_name, start_date, end_date, page_size, page_token):
  """Queries the domain stats for a domain for a specific date range.

    Args:
    service: Authorized Gmail PostmasterTools API instance.
    domain_name: The fully qualified domain name.
  start_date: The first day of the date range for which to retrieve statistics.
    end_date: The last day of the date range for which to retrieve statistics.
    page_size: The number of DomainStats to get per request.
    page_token: The nextPageToken value returned from a previous List request, if any.

    Returns:
    The domain stats of the domain for this date range.
    """
    try:
        query = 'domains/' + domain_name
        query_domain_stats_response = service.domains().domainStats().query(parent=query, startDate=start_date, endDate=endDate, pageSize=page_size, pageToken=page_token).execute();
        print(query_domain_stats_response);
        return query_domain_stats_response;
    except errors.HttpError as err:
        print('An error occurred: %s' % err)

if __name__ == '__main__':
    main()
```

If successful, the response body contains a paginated array of [`DomainStats`](../reference/rest/v2/domains.domainStats.md#DomainStats) with the following structure:

```
{
  "domainStats": [
    {
      object (DomainStats)
    }
  ],
  "nextPageToken": string
}
```

## Retrieve compliance status for a domain

To retrieve the compliance status for a domain, call [`domains.getComplianceStatus()`](../reference/rest/v2/domains/getComplianceStatus.md) with the domain. The compliance status contains compliance information for Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), and Domain-based Message Authentication, Reporting, and Conformance (DMARC). Following is a code sample showing how to retrieve the compliance status for a domain:

### Java

```
/**
   * Gets the compliance status for a domain.
   *
   * @param service Authorized Gmail PostmasterTools API instance.
   * @param domainName The fully qualified domain name.
   * @return The compliance status of the domain.
   * @throws IOException
   */
public static ComplianceStatus getComplianceStatus(PostmasterTools service, String domainName) throws IOException {
  String query = String.format("domains/%s/complianceStatus", domainName);
  ComplianceStatus complianceStatus = service.domains().getComplianceStatus(query).execute();
  System.out.println(complianceStatus.toPrettyString());
  return complianceStatus;
}
```

### Python

```
"""Gets the compliance status for a domain.

  Args:
  service: Authorized Gmail PostmasterTools API instance.
  domain_name: The fully qualified domain name.

  Returns:
  The compliance status of the domain.
  """
def get_compliance_status(service, domain_name):
    """Gets the compliance status for a domain.

  Args:
    service: Authorized Gmail PostmasterTools API instance.
    domain_name: The fully qualified domain name.

  Returns:
    The compliance status of the domain.
    """
    try:
        query = 'domains/%s/complianceStatus' %(domain_name)
        compliance_status = service.domains().getComplianceStatus(name=query).execute();
        print(compliance_status);
        return compliance_status;
    except errors.HttpError as err:
        print('An error occurred: %s' % err)
```

If successful, the response body contains an instance of [`ComplianceStatus`](../reference/rest/v2/domains.md#ComplianceStatus).
