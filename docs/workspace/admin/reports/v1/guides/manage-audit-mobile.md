---
source: https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-mobile
root: workspace
fetched_at: 2026-04-23T15:24:37.584Z
---

# Reports API: Device Audit Activity Report

The device audit activity report returns information on activities by all devices under [Google endpoint management](https://support.google.com/a/answer/1734200). Each report uses the basic report endpoint request with report-specific parameters such as a user's email. The maximum time period for each report is the last 180 days.

The device audit activity report may be used only for lawful purposes in accordance with your Customer Agreement. See [Compare Google Workspace editions](https://support.google.com/a/answer/6043385#reports) to find which editions include these reports.

## Retrieve device audit events for a domain

To retrieve all device audit events for all users within your domain, use the following `GET` HTTP request and include the authorization token described in the [authorization documentation](../../../../guides/configure-oauth-consent.md). For more information about the request query strings and response properties, see [Device Audit Activity Events](../appendix/activity/mobile.md). For readability purposes, the following example is formatted with line returns:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/mobile?endTime=end date&startTime=start date
&maxResults=maximum number of events returned on a response page
```

The following example gets a report on all of your account's device audit events for the past 180 days. The `maxResults` query parameter returns 25 results per page.

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/mobile?maxResults=25
```

The following example gets a report on all device audit events for the past 180 days. The `customerId` specifies which customer's report is retrieved.

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/mobile?customerId=C03az79cb
```

## Retrieve device audit events by event name

In some instances, you may want to retrieve specific [events](../appendix/activity/mobile.md), such as suspicious activity events. To do this, use a `GET` HTTP request in the following form:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/mobile?maxResults=maximum number of events returned on a response page
&eventName=name of the event
&filters=event parameter relational operator parameter value
```

The following example shows how to retrieve all suspicious activity events for Android users within the domain:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/mobile?eventName=SUSPICIOUS_ACTIVITY_EVENT&filters=DEVICE_TYPE==ANDROID&maxResults=25
```
