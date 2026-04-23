---
source: https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-admin
root: workspace
fetched_at: 2026-04-23T15:24:37.379Z
---

# Admin Activity Report

The admin activity report returns information on the Admin console activities of all of your account's administrators. Each report uses the basic report endpoint request with report-specific parameters such as an administrator's name or a specific Admin console event. The maximum time period for each report is the last 180 days.

The admin activity report may be used only for lawful purposes in accordance with your Customer Agreement. And these reports apply to Google Workspace, Education, and ISP accounts.

## Retrieve all administrative activities

To retrieve a report of all administrative activities done for an account, use the following `GET` HTTP request and include the authorization token described in the [authorization documentation](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing). For more information about the request's query strings and the response properties, see the [API Reference](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list). For readability, the following example is formatted with line returns:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/admin?endTime=a date&startTime=a date
&maxResults=number of events listed on each page of the report
```

The following example gets a report on all of your account's administrative activities for the past 180 days which is the maximum time period for a report. And the `maxResults` query string determines this report contains two events per report page. For an example of an API response, see the [JSON response example](#example_response):

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/admin?maxResults=2
```

The following example gets a report on all of a customer's administrative activities for the past 180 days. The `customerId` specifies which customer the report is to be retrieved for.

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/admin?customerId=C03az79cb
```

## Retrieve all activities by administrator

To retrieve a report of all Admin console activities done by a specific administrator, use the following `GET` HTTP request and include the authorization token described in the [authorization documentation](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing). The `userKey` is the primary email address of the administrator in the report. For more information about the request's query strings and the response properties, see the [API Reference](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list). For readability, the following example is formatted with line returns:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/userKey
/applications/admin?endTime=a date&startTime=a date
&maxResults=number of events listed on each page of the report
&filters=event name parameter relational operator parameter value
```

The following example gets a report on all changes to the Admin console application done by `john@example.com`, and the response is filtered to return any activities which have an `OLD_VALUE` equal to `ALLOW_CAMERA`. For an example of an API response, see the [JSON response example](#example_response). And for information about the activities, see the [administrator event names](https://developers.google.com/workspace/admin/reports/v1/reference/activity-ref-appendix-a/admin-event-names):

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/john@example.com
/applications/admin?maxResults=2&filters=OLD_VALUE==ALLOW_CAMERA
```

## Retrieve all activities by event name

To retrieve a report of all activities for a specific event name, use the following `GET` HTTP request and include the authorization token described in the [authorization documentation](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing). For the `eventName` information, see the [administrator event names reference information](https://developers.google.com/workspace/admin/reports/v1/reference/activity-ref-appendix-a/admin-event-names). For more information about the request's query strings and the response properties, see the [API Reference](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list). For readability, the following example is formatted with line returns:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/admin?endTime=a date&startTime=a date
&maxResults=maximum number of events returned on a response page
&eventName=name of the administrative event
```

The following example retrieves a report for all Admin console instances of changing a user's last name. For an example of an API response, see the [JSON response example](#example_response):

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all
/applications/admin?maxResults=1&eventName=CHANGE_LAST_NAME
```

## Retrieve all activities by event and administrator

To retrieve a report of all Admin console changes for a specific event name done by a specific administrator, use the following `GET` HTTP request and include the authorization token described in the [authorization documentation](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing). The `userKey` is the primary email address of the administrator in the report. For the `eventName` information, see the [administrator event names reference information](https://developers.google.com/workspace/admin/reports/v1/reference/activity-ref-appendix-a/admin-event-names). For more information about the request's query strings and the response properties, see the [API Reference](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list). For readability, the following example is formatted with line returns:

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/userKey
/applications/admin?endTime=a date&startTime=a date
&maxResults=maximum number of events returned on a response page
&eventName=name of the administrative event
```

The following example retrieves a report for all Admin console changes to a specific user's last name that were done by `john@example.com`. For an example of an API response, see the [JSON response example](#example_response):

```
GET https://admin.googleapis.com/admin/reports/v1/activity/users/john@example.com
/applications/admin?maxResults=1&eventName=CHANGE_LAST_NAME
```

## Admin activity report example JSON response

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns a report. For the `eventName` information, see the [administrator event names reference information](https://developers.google.com/workspace/admin/reports/v1/reference/activity-ref-appendix-a/admin-event-names). For more information about the request's URL query strings and the response properties, see the [API Reference](https://developers.google.com/workspace/admin/reports/v1/reference/activities/list).

```
{
 "kind": "reports#auditActivities",
 "nextPageToken": "the next page's token",
 "items": [
  {
   "kind": "audit#activity",
   "id": {
    "time": "2011-06-17T15:39:18.460Z",
    "uniqueQualifier": "report's unique ID",
    "applicationName": "admin",
    "customerId": "C03az79cb"
   },
   "actor": {
    "callerType": "USER",
    "email": "liz@example.com",
    "profileId": "user's unique Google Workspace profile ID",
    "key": "consumer key of requester in OAuth 2LO requests"
   },
   "ownerDomain": "example.com",
   "ipAddress": "user's IP address",
   "events": [
    {
     "type": "GROUP_SETTINGS",
     "name": "CHANGE_GROUP_SETTING",
     "parameters": [
      {
        "name": "SETTING_NAME",
        "value": "WHO_CAN_JOIN",
        "intValue": "integer value of parameter",
        "boolValue": "boolean value of parameter"
      }
     ]
    }
   ]
  },
  {
   "kind": "audit#activity",
   "id": {
    "time": "2011-06-17T15:39:18.460Z",
    "uniqueQualifier": "reports unique ID",
    "applicationName": "admin",
    "customerId": "C03az79cb"
   },
   "actor": {
    "callerType": "USER",
    "email": "liz@example.com",
    "profileId": "user's unique Google Workspace profile ID",
    "key": "consumer key of requester in an OAuth 2LO request"
   },
   "ownerDomain": "example.com",
   "ipAddress": "user's IP address",
   "events": [
    {
     "type": "GROUP_SETTINGS",
     "name": "CREATE_GROUP",
     "parameters": [
      {
        "name": "GROUP_EMAIL",
        "value": "helpdesk@example.com",
        "intValue": "",
        "boolValue": ""
       }
      ]
     }
    ]
   }
  ]
 }
```
