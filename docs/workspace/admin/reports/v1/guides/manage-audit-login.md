---
source: https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login
root: workspace
fetched_at: 2026-04-23T15:24:37.815Z
---

# Reports API: Login Activity Report

The login activity report returns information on the login activities of all of your account's users. Each report uses the basic report endpoint request with report-specific parameters such as a user's email. The maximum time period for each report is the last 180 days.

The login activity report may be used only for lawful purposes in accordance with your Customer Agreement.

## Retrieve Google Workspace login events for a domain

To retrieve all logins for all of your domain's services, use the following `GET` HTTP request and include the authorization token described in the [authorization documentation](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing.html). For more information about the request query strings and response properties, see the [API Reference](https://developers.google.com/workspace/admin/reports/v1/reference/activity-ref-appendix-a/login-event-names). For readability purposes, the following example is formatted with line returns:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/login?endTime=end date&startTime=start date
&maxResults=maximum number of events returned on a response page
```

The following example gets a report on all of your account's login events for the past 180 days. The `maxResults` query parameter has this report return 25 results per page.

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/login?maxResults=25
```

The following example gets a report on all of a customer's login events for the past 180 days. The `customerId` specifies which customer the report is to be retrieved for.

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/login?customerId=C03az79cb
```

## Retrieve Google Workspace login events by event name

In some instances, you may want to retrieve specific [events](https://developers.google.com/workspace/admin/reports/v1/reference/activity-ref-appendix-a/login-event-names), such as suspicious successful logins. To do this, use a `GET` HTTP request of the following form:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/login?maxResults=maximum number of events returned on a response page
&eventName=name of the login event
&filters=event parameter relational operator parameter value
```

The following example shows how to retrieve all suspicious successful logins for a domain:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/login?eventName=login_success&filters=is_suspicious==true&maxResults=25
```
