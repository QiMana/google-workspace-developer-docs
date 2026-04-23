---
source: https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-tokens
root: workspace
fetched_at: 2026-04-23T15:24:37.498Z
---

# Reports API: Authorization Tokens Activity Report

The authorization token activity report returns information about third party websites and applications your users have granted access for. Each report uses the basic report endpoint request with report-specific parameters such as the third party domain or authorization scopes granted. The maximum time period for each report is the last 180 days.

The OAuth token activity report may be used only for lawful purposes in accordance with your Customer Agreement.

## Retrieve all authorization token events for a domain

To retrieve all authorization events for third party applications, use the following `GET` HTTP request and include the authorization token described in the [authorization documentation](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing.html). For more information about the request query strings and response properties, see the [API Reference](https://developers.google.com/workspace/admin/reports/v1/reference/activity-ref-appendix-a/token-event-names). For readability purposes, the following example is formatted with line returns:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/token?endTime=end date&startTime=start date
&maxResults=maximum number of events returned on a response page
```

The following example gets a report on all of your account's authorization events for the past 180 days. The `maxResults` query parameter has this report return 25 results per page.

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/token?maxResults=25
```

## Retrieve authorization token events by event name

In some instances, you may want to retrieve specific events, such as whether an application's access has been revoked. To do this, use a `GET` HTTP request of the following form:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/token?maxResults=maximum number of events returned on a response page
&eventName=name of the OAuth token event
```

The following example shows how to retrieve all `revoke` events for a domain:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/token?eventName=revoke&maxResults=25
```
