---
source: https://developers.google.com/workspace/gmail/postmaster/guides/migration-v2
root: workspace
fetched_at: 2026-04-23T15:29:59.991Z
---

# Migrate to Postmaster Tools API v2

This guide describes the differences between v1 and v2 of the Postmaster Tools API and how to migrate your v1 application to v2.

## Overview

Version 2 of the Postmaster Tools API introduces several new features and consolidates existing functionality for retrieving email statistics. With v2, you can now:

- Retrieve statistics over date ranges instead of per day.
- Query compliance status for Sender Policy Framework (SPF), Domainkeys Identified Mail (DKIM), and Domain-based Message Authentication, Reporting and Conformance (DMARC).
- Retrieve statistics for multiple domains with a single API call.

Key changes include:

- The `trafficStats` resource has been replaced with `domainStats`.
- The `domains.trafficStats.get` and `domains.trafficStats.list` methods have been replaced by a single `domains.domainStats.query` method.
- A new `domains.getComplianceStatus` method is available to retrieve compliance status for SPF, DKIM, and DMARC for a given domain.
- A new `domainStats.batchQuery` method is available to retrieve statistics for multiple domains in a single call.
- The term "metrics" used in v1 has been renamed to "statistics."

## Update to v2

To migrate from v1 to v2, you need to update your client library to the latest version and modify your code to use v2 resources and methods.

1. Update your Postmaster Tools API client library to version 2 or greater.
2. Change all calls from the `trafficStats` resource to the `domainStats` resource.
3. Replace any calls to `domains.trafficStats.get` or `domains.trafficStats.list` with `domains.domainStats.query`, providing `startDate` and `endDate` parameters to specify the date range for the query.

## Retrieve email statistics

In v1, email metrics were retrieved using `domains.trafficStats.get` for a single day or `domains.trafficStats.list` for multiple days. In v2, email statistics are retrieved using `domains.domainStats.query`.

The `domains.domainStats.query` method lets you retrieve statistics over a date range by specifying `startDate` and `endDate`.

### v1: domains.trafficStats.get

### Java

```
String query = String.format("domains/%s/trafficStats/%s", domainName, date);
TrafficStats trafficStats = service.domains().trafficStats().get(query).execute();
```

### Python

```
query = 'domains/%s/trafficStats/%s' %(domain_name,date)
traffic_stats = service.domains().trafficStats().get(name=query).execute();
```

### v2: domains.domainStats.query for a single day

To retrieve statistics for a single day in v2, call `domains.domainStats.query` with the same `startDate` and `endDate`.

### Java

```
Date date = new Date().setYear(2024).setMonth(1).setDay(1);
QueryDomainStatsResponse statsResponse = service.domains().domainStats()
        .query("domains/" + domainName)
        .setStartDate(date)
        .setEndDate(date)
        .execute();
```

### Python

```
date = {'year': 2024, 'month': 1, 'day': 1}
stats = service.domains().domainStats().query(
    parent='domains/' + domain_name,
    startDate=date,
    endDate=date).execute()
```

### v1: domains.trafficStats.list

### Java

```
ListTrafficStatsResponse listTrafficStatsResponse = service.domains().trafficStats().list("domains/" + domainName)
        .execute();
```

### Python

```
query = 'domains/' + domain_name
list_traffic_stats_response = service.domains().trafficStats().list(parent=query).execute();
```

### v2: domains.domainStats.query for a date range

To retrieve statistics for a date range in v2, call `domains.domainStats.query` with a `startDate` and `endDate`.

### Java

```
Date startDate = new Date().setYear(2024).setMonth(1).setDay(1);
Date endDate = new Date().setYear(2024).setMonth(1).setDay(7);
QueryDomainStatsResponse statsResponse = service.domains().domainStats()
        .query("domains/" + domainName)
        .setStartDate(startDate)
        .setEndDate(endDate)
        .execute();
```

### Python

```
stats = service.domains().domainStats().query(
    parent='domains/' + domain_name,
    startDate={'year': 2024, 'month': 1, 'day': 1},
    endDate={'year': 2024, 'month': 1, 'day': 7}).execute()
```

## New v2 features

In addition to consolidating `get` and `list` traffic statistics into `query`, v2 introduces the following features.

### Retrieve compliance status

You can retrieve the compliance status for Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM), and Domain-based Message Authentication, Reporting, and Conformance (DMARC) for a domain using `domains.getComplianceStatus`.

See [Retrieve email statistics](https://developers.google.com/workspace/gmail/postmaster/guides/retrieve-metrics#retrieve_compliance_status_for_a_domain) for sample code.

### Batch query domain statistics

You can retrieve statistics for multiple domains with a single call using `domainStats.batchQuery`.
