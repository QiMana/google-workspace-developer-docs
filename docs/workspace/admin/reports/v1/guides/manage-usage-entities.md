---
source: https://developers.google.com/workspace/admin/reports/v1/guides/manage-usage-entities
root: workspace
fetched_at: 2026-04-23T15:24:37.653Z
---

# Reports API: Entities Usage Report

The entities usage report returns Google Workspace service activities related to entities used by your account's users. These reports can be customized and filtered for specific usage information. Data is available for the past 30 days.

The entities usage report may be used only for lawful purposes in accordance with your Customer Agreement. These reports also apply to Google Workspace and Education.

## Retrieve all entities usage activities

The only entity type supported by this API is Google+ communities. To retrieve a report of all activities related to app entities in your account, use the following `GET` HTTP request and include the authorization token described in the [authorization documentation](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing). For readability, the following example is formatted with line returns:

```
GET https://admin.googleapis.com/admin/reports/v1/usage/gplus_communities/all/dates/date
?parameters=applicationParameters
&filters=parameterFilters
&maxResults=maxResults
```

The date value is the date the usage occurred and the timestamp is in the [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601), yyyy-mm-dd. We recommend you use your account's time zone for this. For more information about the query string parameters and response properties, see the [API Reference](https://developers.google.com/workspace/admin/reports/v1/reference/entityUsageReports/get). For information about the entities usage report parameters, see the [Entities Usage Parameters reference](https://developers.google.com/workspace/admin/reports/v1/reference/usage-ref-appendix-a/entities).

applicationParameters is a comma-separated list of parameters you want to retrieve. Each parameter is formatted as `application:parameter_name`, for example, `gplus:community_name`. The available parameters are documented in the [Entities Usage Parameters reference](https://developers.google.com/workspace/admin/reports/v1/reference/usage-ref-appendix-a/entities). If no parameters are specified, all are returned.

parameterFilters is a comma-separated list of filters to apply to the results. Each filter is formatted as `application:parameter_name[relational_operator]parameter_value`. For example, the filter `gplus:num_total_members>100` filters the results to contain only results where the `gplus:num_total_members` parameter has a value greater than 100.

maxResults is the maximum number of results to return in a single fetch. If the total number of results is greater than this, the response will be truncated and a `nextPageToken` will be included (see the [JSON response example](#example_response) below).

### Examples

The following example gets a report containing all parameters for all `gplus_communities` entities.

```
GET https://admin.googleapis.com/admin/reports/v1/usage/gplus_communities/all
/dates/2017-12-11
```

The following example gets a report containing the `community_name` parameter for all `gplus_communities` entities.

```
GET https://admin.googleapis.com/admin/reports/v1/usage/gplus_communities/all
/dates/2017-12-11?parameters=gplus:community_name
```

The following example gets a report of `community_name` and `num_total_members` for each `gplus_communities` entity, filtered by communities with more than 100 members. For an example of an API response, see the [JSON response example](#example_response).

```
GET https://admin.googleapis.com/admin/reports/v1/usage/gplus_communities/all/dates/2017-12-11
?parameters=gplus:community_name,gplus:num_total_members&filters=gplus:num_total_members>100
```

## Retrieve a report for a specific entity

To retrieve a report for a specific entity, use the following `GET` HTTP request and include the authorization token described in the [authorization documentation](https://developers.google.com/workspace/admin/reports/v1/guides/authorizing). For readability, the following example is formatted with line returns.

```
GET https://admin.googleapis.com/admin/reports/v1/gplus_communities/entityKey/dates/date
?parameters=applicationParameters
&filters=parameterFilters
&maxResults=maxResults
```

The entityKey is an entity identifier which is specific to the application where the entity lives. See the [API Reference](https://developers.google.com/workspace/admin/reports/v1/reference/userUsageReport/get) for details on how to obtain the entityKey for the particular entity you are interested in. The other parameters are documented earlier in the section [Retrieve all entities usage activities](#get_all_entities_usage).

For more information about the query string parameters and response properties, see the [API Reference](https://developers.google.com/workspace/admin/reports/v1/reference/userUsageReport/get). For information about the entities usage report parameters, see the [Entities Usage Parameters reference](https://developers.google.com/workspace/admin/reports/v1/reference/usage-ref-appendix-a/users).

### Examples

The following example gets the entity report for a `gplus_community` entity with the entityKey "1234".

```
https://admin.googleapis.com/admin/reports/v1/usage/gplus_communities/1234/dates/2017-12-11
```

## Usage report example JSON response

A successful response returns an [HTTP 200 status code](http://wikipedia.org/wiki/List_of_HTTP_status_codes). Along with the status code, the response returns a report. Some of the parameters in the response have been omitted for readability.

#### Example JSON response for entities report

```
{
 "kind": "reports#usageReports",
 "nextPageToken": "NjQ1OTgwODk0MzkxNDAwNjQ0OA",
 "usageReports": [
 {
   "kind": "admin#reports#usageReport",
   "date": "2017-12-11",
   "entity": {
    "type": "OBJECT",
    "customerId": "C03az79cb",
    "objectType": "GPLUS_COMMUNITY",
    "objectId": "1234",
   },
   "parameters": [
    {
      "name": "gplus:community_name",
      "stringValue": "My Community"
    },
    {
     "name": "gplus:num_total_members",
     "intValue": 37
    },
    {
     "name": "gplus:num_7day_active_members",
     "intValue": 12
    },
    {
     "name": "gplus:num_30day_active_members",
     "intValue": 17
    },
   ]
  }
 ]
}
```

#### Example JSON response for entities report with warnings

One or more warnings may be returned in the response if the request cannot be fulfilled. In this example, the report is not available at the time the request is made.

```
{
 "kind": "reports#usageReports",
 "warnings": [
    {
      "code": "PARTIAL_DATA_AVAILABLE"
      "message": "Data for date 2017-12-11 for application gplus is not available right now, please try again after a few hours."
      "data": [
        {
          "key": "date"
          "value": "2017-12-11"
        }
      ]
    }
  ],
 "usageReports": [],
}
```

Each entry in the `warnings` array has the following parameters:
- `code`: machine-readable warning code
- `message`: human-readable warning message
- `data`: list of key-value pairs which give detailed warning information
