---
source: https://developers.google.com/workspace/admin/reports/reference/rest/v1/activities/list
root: workspace
fetched_at: 2026-04-23T15:24:00.980Z
---

# Method: activities.list

Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for [administrator](https://developers.google.com/admin-sdk/reports/v1/guides/manage-audit-admin) and [Google Drive](https://developers.google.com/admin-sdk/reports/v1/guides/manage-audit-drive) activity reports. For more information about the activity report's parameters, see the [activity parameters](https://developers.google.com/admin-sdk/reports/v1/reference/activity-ref-appendix-a/admin-event-names) reference guides.

### HTTP request

`GET https://admin.googleapis.com/admin/reports/v1/activity/users/{userKey or all}/applications/{applicationName}`

The URL uses [gRPC Transcoding](https://google.aip.dev/127) syntax.

### Path parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>userKey or all</code></td><td><p><code>string</code></p><p>Represents the profile ID or the user email for which the data should be filtered. Can be <code>all</code> for all information, or <code>userKey</code> for a user's unique Google Workspace profile ID or their primary email address. Must not be a deleted user. For a deleted user, call <code>users.list</code> in Directory API with <a href="https://developers.google.com/workspace/admin/directory/reference/rest/v1/users/list#body.QUERY_PARAMETERS.show_deleted"><code>showDeleted=true</code></a>, then use the returned <code>ID</code> as the <code>userKey</code>.</p></td></tr><tr><td><code>applicationName</code></td><td><p><code>enum (<code>ApplicationName</code>)</code></p><p>Application name for which the events are to be retrieved.</p></td></tr></tbody></table>

### Query parameters

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Parameters</th></tr></thead><tbody><tr><td><code>actorIpAddress</code></td><td><p><code>string</code></p><p>The Internet Protocol (IP) Address of host where the event was performed. This is an additional way to filter a report's summary using the IP address of the user whose activity is being reported. This IP address may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. This parameter supports both <a href="http://wikipedia.org/wiki/IPv4">IPv4</a> and <a href="http://wikipedia.org/wiki/IPv6_address">IPv6</a> address versions.</p></td></tr><tr><td><code>customerId</code></td><td><p><code>string</code></p><p>The unique ID of the customer to retrieve data for.</p></td></tr><tr><td><code>endTime</code></td><td><p><code>string</code></p><p>Sets the end of the range of time shown in the report. The date is in the <a href="http://www.ietf.org/rfc/rfc3339.txt">RFC 3339 format</a>, for example 2010-10-28T10:26:35.000Z. The default value is the approximate time of the API request. An API report has three basic time concepts:</p><ul><li><strong>Date of the API's request for a report</strong>: When the API created and retrieved the report.</li><li><strong>Report's start time</strong>: The beginning of the timespan shown in the report. The <code>startTime</code> must be before the <code>endTime</code> (if specified) and the current time when the request is made, or the API returns an error.</li><li><strong>Report's end time</strong>: The end of the timespan shown in the report. For example, the timespan of events summarized in a report can start in April and end in May. The report itself can be requested in August.</li></ul>If the <code>endTime</code> is not specified, the report returns all activities from the <code>startTime</code> until the current time or the most recent 180 days if the <code>startTime</code> is more than 180 days in the past.<br><br>For Gmail requests, <code>startTime</code> and <code>endTime</code> must be provided and the difference must not be greater than 30 days.</td></tr><tr><td><code>eventName</code></td><td><p><code>string</code></p><p>The name of the event being queried by the API. Each <code>eventName</code> is related to a specific Google Workspace service or feature which the API organizes into types of events. An example is the Google Calendar events in the Admin console application's reports. The Calendar Settings <code>type</code> structure has all of the Calendar <code>eventName</code> activities reported by the API. When an administrator changes a Calendar setting, the API reports this activity in the Calendar Settings <code>type</code> and <code>eventName</code> parameters. For more information about <code>eventName</code> query strings and parameters, see the list of event names for various applications above in <code>applicationName</code>.</p></td></tr><tr><td><code>filters</code></td><td><p><code>string</code></p><p>The <code>filters</code> query string is a comma-separated list composed of event parameters manipulated by relational operators. Event parameters are in the form <code>{parameter1 name}{relational operator}{parameter1 value},{parameter2
                  name}{relational operator}{parameter2 value},...</code></p><p>These event parameters are associated with a specific <code>eventName</code>. An empty report is returned if the request's parameter doesn't belong to the <code>eventName</code>. For more information about the available <code>eventName</code> fields for each application and their associated parameters, go to the <a href="#applicationname">ApplicationName</a> table, then click through to the Activity Events page in the Appendix for the application you want.</p><p>In the following Drive activity examples, the returned list consists of all <code>edit</code> events where the <code>doc_id</code> parameter value matches the conditions defined by the relational operator. In the first example, the request returns all edited documents with a <code>doc_id</code> value equal to <code>12345</code>. In the second example, the report returns any edited documents where the <code>doc_id</code> value is not equal to <code>98765</code>. The <code><></code> operator is URL-encoded in the request's query string (<code>%3C%3E</code>):</p><div><pre><code>GET...&eventName=edit&filters=doc_id==12345
GET...&eventName=edit&filters=doc_id%3C%3E98765</code></pre></div><p>A <code>filters</code> query supports these relational operators:</p><ul><li><code>==</code> —'equal to'.</li><li><code><></code> —'not equal to'. Must be URL-encoded (%3C%3E).</li><li><code><</code> —'less than'. Must be URL-encoded (%3C).</li><li><code><=</code> —'less than or equal to'. Must be URL-encoded (%3C=).</li><li><code>></code> —'greater than'. Must be URL-encoded (%3E).</li><li><code>>=</code> —'greater than or equal to'. Must be URL-encoded (%3E=).</li></ul><p><strong>Note:</strong> The API doesn't accept multiple values of the same parameter. If a parameter is supplied more than once in the API request, the API only accepts the last value of that parameter. In addition, if an invalid parameter is supplied in the API request, the API ignores that parameter and returns the response corresponding to the remaining valid parameters. If no parameters are requested, all parameters are returned.</p></td></tr><tr><td><code>maxResults</code></td><td><p><code>integer</code></p><p>Determines how many activity records are shown on each response page. For example, if the request sets <code>maxResults=1</code> and the report has two activities, the report has two pages. The response's <code>nextPageToken</code> property has the token to the second page. The <code>maxResults</code> query string is optional in the request. The default value is 1000.</p></td></tr><tr><td><code>orgUnitID</code></td><td><p><code>string</code></p><p>ID of the <a href="https://developers.google.com/admin-sdk/directory/v1/guides/manage-org-units">organizational unit</a> to report on. Activity records will be shown only for users who belong to the specified organizational unit.</p></td></tr><tr><td><code>pageToken</code></td><td><p><code>string</code></p><p>The token to specify next page. A report with multiple pages has a <code>nextPageToken</code> property in the response. In your follow-on request getting the next page of the report, enter the <code>nextPageToken</code> value in the <code>pageToken</code> query string.</p></td></tr><tr><td><code>startTime</code></td><td><p><code>string</code></p><p>Sets the beginning of the range of time shown in the report. The date is in the <a href="http://www.ietf.org/rfc/rfc3339.txt">RFC 3339 format</a>, for example 2010-10-28T10:26:35.000Z. The report returns all activities from <code>startTime</code> until <code>endTime</code>. The <code>startTime</code> must be before the <code>endTime</code> (if specified) and the current time when the request is made, or the API returns an error.<br><br>For Gmail requests, <code>startTime</code> and <code>endTime</code> must be provided and the difference must not be greater than 30 days.</p></td></tr><tr><td><code>groupIdFilter</code></td><td><p><code>string</code></p><p>Comma separated group ids (obfuscated) on which user activities are filtered, i.e. the response will contain activities for only those users that are a part of at least one of the group ids mentioned here. Format: "id:abc123,id:xyz456"</p></td></tr><tr><td><code>resourceDetailsFilter</code></td><td><p><code>string</code></p><p>Optional. The <code>resourceDetailsFilter</code> query string is an AND separated list composed of <a href="#resourcedetails">Resource Details</a> fields manipulated by relational operators.</p><p>Resource Details Filters are in the form <code>{resourceDetails.field1}{relational operator}{field1 value} AND
                  {resourceDetails.field2}{relational operator}{field2 value}...</code></p><p>All the inner fields are traversed using the <code>.</code> operator, as shown in the following example:</p><div><pre><code>resourceDetails.id = "resourceId" AND resourceDetails.appliedLabels.id =
"appliedLabelId" AND resourceDetails.appliedLabels.fieldValue.id =
"fieldValueId"</code></pre></div><p><code>resourceDetailsFilter</code> query supports these relational operators:</p><ul><li><code>=</code> —'equal to'.</li><li><code>!=</code> —'not equal to'.</li><li><code>:</code>—'exists'. This is used for filtering on repeated fields.</li></ul><p><a href="#fieldvalue"><code>FieldValue</code></a> types that are repeated in nature uses <code>exists</code> operator for filtering.<br>The following <a href="#fieldvalue"><code>FieldValue</code></a> types are repeated:</p><ul><li><a href="#textlistvalue"><code>TextListValue</code></a></li><li><a href="#selectionlistvalue"><code>SelectionListValue</code></a></li><li><a href="#userlistvalue"><code>UserListValue</code></a></li></ul><p>For example, in the following filter, <a href="#selectionlistvalue"><code>SelectionListValue</code></a>, is a repeated field. The filter checks whether <a href="#selectionlistvalue"><code>SelectionListValue</code></a> contains <code>selection_id</code>:</p><div><pre><code>resourceDetails.id = "resourceId" AND resourceDetails.appliedLabels.id =
"appliedLabelId" AND resourceDetails.appliedLabels.fieldValue.id =
"fieldValueId" AND resourceDetails.appliedLabels.fieldValue.type =
"SELECTION_LIST_VALUE" AND
resourceDetails.appliedLabels.fieldValue.selectionListValue.id: "id"</code></pre></div><p><strong>Usage</strong></p><div><pre><code>GET...&resourceDetailsFilter=resourceDetails.id = "resourceId" AND
resourceDetails.appliedLabels.id = "appliedLabelId"
GET...&resourceDetailsFilter=resourceDetails.id=%22resourceId%22%20AND%20resourceDetails.appliedLabels.id=%22appliedLabelId%22</code></pre></div><p><strong>Note the following</strong>:</p><ul><li><p>You must URL encode the query string before sending the request.</p></li><li><p>The API supports a maximum of 5 fields separated by the AND operator.</p></li></ul><ul><li><p>When filtering on deeper levels (e.g., <a href="#appliedlabel"><code>AppliedLabel</code></a>, <a href="#fieldvalue"><code>FieldValue</code></a>), the IDs of all preceding levels in the hierarchy must be included in the filter. For example: Filtering on <a href="#fieldvalue"><code>FieldValue</code></a> requires <a href="#appliedlabel"><code>AppliedLabel</code></a> ID and resourceDetails ID to be present.<br><strong>Sample Query</strong>:</p><p><code>
   resourceDetails.id = "resourceId" AND resourceDetails.appliedLabels.id =
   "appliedLabelId" AND resourceDetails.appliedLabels.fieldValue.id =
   "fieldValueId"
</code></p></li></ul><ul><li><p>Filtering on inner <a href="#fieldvalue"><code>FieldValue</code></a> types like <code>longTextValue</code> and <code>textValue</code> requires <code>resourceDetails.appliedLabels.fieldValue.type</code> to be present.</p></li><li><p>Only Filtering on a single <a href="#appliedlabel"><code>AppliedLabel</code></a> id and <a href="#fieldvalue"><code>FieldValue</code></a> id is supported.</p></li></ul></td></tr><tr><td><code>networkInfoFilter</code></td><td><p><code>string</code></p><p>Optional. Used to filter on the <code>regionCode</code> field present in <a href="#networkinfo"><code>NetworkInfo</code></a> message.</p><p><strong>Usage</strong></p><div><pre><code>GET...&networkInfoFilter=regionCode="IN"
GET...&networkInfoFilter=regionCode=%22IN%22</code></pre></div></td></tr><tr><td><code>statusFilter</code></td><td><p><code>string</code></p><p>Optional. Used to filter on the <code>statusCode</code> field present in <a href="#status"><code>Status</code></a> message.</p><p><strong>Usage</strong></p><div><pre><code>GET...&statusFilter=statusCode="200"
GET...&statusFilter=statusCode=%22200%22</code></pre></div></td></tr><tr><td><code>applicationInfoFilter</code></td><td><p><code>string</code></p><p>Optional. Used to filter on the <code>oAuthClientId</code> field present in <a href="#applicationinfo"><code>ApplicationInfo</code></a> message.</p><p><strong>Usage</strong></p><div><pre><code>GET...&applicationInfoFilter=oAuthClientId="clientId"
GET...&applicationInfoFilter=oAuthClientId=%22clientId%22</code></pre></div></td></tr><tr><td><code>includeSensitiveData</code></td><td><p><code>boolean</code></p><p>Optional. When set to <code>true</code>, this field allows sensitive user-generated content to be included in the returned audit logs. This parameter is supported only for Rules (DLP) and Chat applications; using it with any other application will result in a permission error.</p></td></tr></tbody></table>

### Request body

The request body must be empty.

### Response body

JSON template for a collection of activities.

If successful, the response body contains data with the following structure:

JSON representation

```
{
  "kind": string,
  "etag": string,
  "items": [
    {
      object (Activity)
    }
  ],
  "nextPageToken": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of API resource. For an activity report, the value is <code>reports#activities</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the resource.</p></td></tr><tr><td><code>items[]</code></td><td><p><code>object (<code>Activity</code>)</code></p><p>Each activity record in the response.</p></td></tr><tr><td><code>nextPageToken</code></td><td><p><code>string</code></p><p>Token for retrieving the follow-on next page of the report. The <code>nextPageToken</code> value is used in the request's <code>pageToken</code> query string.</p></td></tr></tbody></table>

### Authorization scopes

Requires the following OAuth scope:

- `https://www.googleapis.com/auth/admin.reports.audit.readonly`

For more information, see the [Authorization guide](https://developers.google.com/workspace/guides/configure-oauth-consent).

## ApplicationName

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Enums</th></tr></thead><tbody><tr><td><code>access_transparency</code></td><td><p>The Google Workspace Access Transparency activity reports return information about different types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/access-transparency">Access Transparency activity events</a>.</p></td></tr><tr><td><code>admin</code></td><td><p>The Admin console application's activity reports return account information about different types of <a href="https://developers.google.com/admin-sdk/reports/v1/reference/activity-ref-appendix-a/admin-event-names">administrator activity events</a>.</p></td></tr><tr><td><code>calendar</code></td><td><p>The Google Calendar application's activity reports return information about various <a href="https://developers.google.com/admin-sdk/reports/v1/reference/activity-ref-appendix-a/calendar-event-names">Calendar activity events</a>.</p></td></tr><tr><td><code>chat</code></td><td>The Chat activity reports return information about various <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/chat">Chat activity events</a>.</td></tr><tr><td><code>drive</code></td><td><p>The Google Drive application's activity reports return information about various <a href="https://developers.google.com/admin-sdk/reports/v1/reference/activity-ref-appendix-a/drive-event-names">Google Drive activity events</a>. The Drive activity report is only available for Google Workspace Business and Enterprise customers.</p></td></tr><tr><td><code>gcp</code></td><td>The Google Cloud Platform application's activity reports return information about various <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/gcp">GCP activity events</a>.</td></tr><tr><td><code>gmail</code></td><td>The Gmail application's activity reports return information about various <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/gmail">Gmail activity events</a>.</td></tr><tr><td><code>gplus</code></td><td>The Google+ application's activity reports return information about various <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/gplus">Google+ activity events</a>.</td></tr><tr><td><code>groups</code></td><td><p>The Google Groups application's activity reports return information about various <a href="https://developers.google.com/admin-sdk/reports/v1/reference/activity-ref-appendix-a/groups-event-names">Groups activity events</a>.</p></td></tr><tr><td><code>groups_enterprise</code></td><td><p>The Enterprise Groups activity reports return information about various <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/groups-enterprise">Enterprise group activity events</a>.</p></td></tr><tr><td><code>jamboard</code></td><td>The Jamboard activity reports return information about various <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/jamboard">Jamboard activity events</a>.</td></tr><tr><td><code>login</code></td><td><p>The Login application's activity reports return account information about different types of <a href="https://developers.google.com/admin-sdk/reports/v1/reference/activity-ref-appendix-/login-event-names">Login activity events</a>.</p></td></tr><tr><td><code>meet</code></td><td>The Meet Audit activity report returns information about different types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/meet">Meet Audit activity events</a>.</td></tr><tr><td><code>mobile</code></td><td>The Device Audit activity report returns information about different types of <a href="https://developers.google.com/admin-sdk/reports/v1/reference/appendix/mobile">Device Audit activity events</a>.</td></tr><tr><td><code>rules</code></td><td><p>The Rules activity report returns information about different types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/rules">Rules activity events</a>.</p></td></tr><tr><td><code>saml</code></td><td><p>The SAML activity report returns information about different types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/saml">SAML activity events</a>.</p></td></tr><tr><td><code>token</code></td><td><p>The Token application's activity reports return account information about different types of <a href="https://developers.google.com/admin-sdk/reports/v1/reference/activity-ref-appendix-a/token-event-names">Token activity events</a>.</p></td></tr><tr><td><code>user_accounts</code></td><td><p>The User Accounts application's activity reports return account information about different types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/user_accounts">User Accounts activity events</a>.</p></td></tr><tr><td><code>context_aware_access</code></td><td><p>The Context-aware access activity reports return information about users' access denied events due to <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/context-aware-access">Context-aware access rules</a>.</p></td></tr><tr><td><code>chrome</code></td><td><p>The Chrome activity reports return information about <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/chrome">Chrome browser and Chrome OS events</a>.</p></td></tr><tr><td><code>data_studio</code></td><td>The Data Studio activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/data-studio">Data Studio activity events</a>.</td></tr><tr><td><code>keep</code></td><td>The Keep application's activity reports return information about various <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/keep">Google Keep activity events</a>. The Keep activity report is only available for Google Workspace Business and Enterprise customers.</td></tr><tr><td><code>vault</code></td><td>The Vault activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/vault">Vault activity events</a>.</td></tr><tr><td><code>gemini_in_workspace_apps</code></td><td><p>The Gemini for Workspace activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/gemini-in-workspace-apps">Gemini activity events</a> performed by users within a Workspace application.</p></td></tr><tr><td><code>classroom</code></td><td>The Classroom activity reports return information about different types of <a href="https://developers.google.com/workspace/admin/reports/v1/appendix/activity/classroom">Classroom activity events</a>.</td></tr><tr><td><code>assignments</code></td><td>The assignments application's activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/assignments">assignments activity events</a>.</td></tr><tr><td><code>tasks</code></td><td>The Tasks application's activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/tasks">Tasks activity events</a>.</td></tr><tr><td><code>data_migration</code></td><td>The Data Migration application's activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/data-migration">data migration activity events</a>.</td></tr><tr><td><code>meet_hardware</code></td><td>The Meet Hardware application's activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/meet-hardware">Meet Hardware activity events</a>.</td></tr><tr><td><code>directory_sync</code></td><td>The Directory Sync application's activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/directory-sync">Directory Sync activity events</a>.</td></tr><tr><td><code>ldap</code></td><td>The ldap application's activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/ldap">ldap activity events</a>.</td></tr><tr><td><code>access_evaluation</code></td><td>The Access Evaluation activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/access-evaluation">Access Evaluation activity events</a>.</td></tr><tr><td><code>admin_data_action</code></td><td>The Admin Data Action application's activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/admin-data-action">Admin Data Action activity events</a>.</td></tr><tr><td><code>contacts</code></td><td>The Contacts application's activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/contacts">Contacts activity events</a>.</td></tr><tr><td><code>takeout</code></td><td>The Takeout application's activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/takeout">Takeout activity events</a>.</td></tr><tr><td><code>graduation</code></td><td>The Graduation application's activity reports return information about various types of <a href="https://developers.google.com/admin-sdk/reports/v1/appendix/activity/graduation">Graduation activity events</a>.</td></tr></tbody></table>

## Activity

JSON template for the activity resource.

JSON representation

```
{
  "kind": string,
  "etag": string,
  "ownerDomain": string,
  "ipAddress": string,
  "events": [
    {
      "type": string,
      "name": string,
      "parameters": [
        {
          "messageValue": {
            "parameter": [
              {
                object (NestedParameter)
              }
            ]
          },
          "name": string,
          "value": string,
          "multiValue": [
            string
          ],
          "intValue": string,
          "multiIntValue": [
            string
          ],
          "boolValue": boolean,
          "multiMessageValue": [
            {
              "parameter": [
                {
                  object (NestedParameter)
                }
              ]
            }
          ]
        }
      ],
      "sensitiveParameters": [
        {
          "messageValue": {
            "parameter": [
              {
                object (NestedParameter)
              }
            ]
          },
          "name": string,
          "value": string,
          "multiValue": [
            string
          ],
          "intValue": string,
          "multiIntValue": [
            string
          ],
          "boolValue": boolean,
          "multiMessageValue": [
            {
              "parameter": [
                {
                  object (NestedParameter)
                }
              ]
            }
          ]
        }
      ],
      "resourceIds": [
        string
      ],
      "status": {
        object (Status)
      }
    }
  ],
  "id": {
    "time": string,
    "uniqueQualifier": string,
    "applicationName": string,
    "customerId": string
  },
  "actor": {
    "profileId": string,
    "email": string,
    "callerType": string,
    "key": string,
    "applicationInfo": {
      "oauthClientId": string,
      "applicationName": string,
      "impersonation": boolean
    }
  },
  "networkInfo": {
    object (NetworkInfo)
  },
  "resourceDetails": [
    {
      object (ResourceDetails)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>kind</code></td><td><p><code>string</code></p><p>The type of API resource. For an activity report, the value is <code>audit#activity</code>.</p></td></tr><tr><td><code>etag</code></td><td><p><code>string</code></p><p>ETag of the entry.</p></td></tr><tr><td><code>ownerDomain</code></td><td><p><code>string</code></p><p>This is the domain that is affected by the report's event. For example domain of Admin console or the Drive application's document owner.</p></td></tr><tr><td><code>ipAddress</code></td><td><p><code>string</code></p><p>IP address of the user doing the action. This is the Internet Protocol (IP) address of the user when logging into Google Workspace, which may or may not reflect the user's physical location. For example, the IP address can be the user's proxy server's address or a virtual private network (VPN) address. The API supports <a href="http://wikipedia.org/wiki/IPv4">IPv4</a> and <a href="http://wikipedia.org/wiki/IPv6_address">IPv6</a>.</p></td></tr><tr><td><code>events[]</code></td><td><p><code>object</code></p><p>Activity events in the report.</p></td></tr><tr><td><code>events[].type</code></td><td><p><code>string</code></p><p>Type of event. The Google Workspace service or feature that an administrator changes is identified in the <code>type</code> property which identifies an event using the <code>eventName</code> property. For a full list of the API's <code>type</code> categories, see the list of event names for various applications above in <code>applicationName</code>.</p></td></tr><tr><td><code>events[].name</code></td><td><p><code>string</code></p><p>Name of the event. This is the specific name of the activity reported by the API. And each <code>eventName</code> is related to a specific Google Workspace service or feature which the API organizes into types of events.<br>For <code>eventName</code> request parameters in general:</p><ul><li>If no <code>eventName</code> is given, the report returns all possible instances of an <code>eventName</code>.</li><li>When you request an <code>eventName</code>, the API's response returns all activities which contain that <code>eventName</code>.</li></ul><br>For more information about <code>eventName</code> properties, see the list of event names for various applications above in <code>applicationName</code>.</td></tr><tr><td><code>events[].parameters[]</code></td><td><p><code>object</code></p><p>Parameter value pairs for various applications. For more information about <code>eventName</code> parameters, see the list of event names for various applications above in <code>applicationName</code>.</p></td></tr><tr><td><code>events[].parameters[].messageValue</code></td><td><p><code>object</code></p><p>Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as <code>[{parameter: [{name: city, value: abc}]}]</code></p></td></tr><tr><td><code>events[].parameters[].messageValue.parameter[]</code></td><td><p><code>object (<code>NestedParameter</code>)</code></p><p>Parameter values</p></td></tr><tr><td><code>events[].parameters[].name</code></td><td><p><code>string</code></p><p>The name of the parameter.</p></td></tr><tr><td><code>events[].parameters[].value</code></td><td><p><code>string</code></p><p>String value of the parameter.</p></td></tr><tr><td><code>events[].parameters[].multiValue[]</code></td><td><p><code>string</code></p><p>String values of the parameter.</p></td></tr><tr><td><code>events[].parameters[].intValue</code></td><td><p><code>string (int64 format)</code></p><p>Integer value of the parameter.</p></td></tr><tr><td><code>events[].parameters[].multiIntValue[]</code></td><td><p><code>string (int64 format)</code></p><p>Integer values of the parameter.</p></td></tr><tr><td><code>events[].parameters[].boolValue</code></td><td><p><code>boolean</code></p><p>Boolean value of the parameter.</p></td></tr><tr><td><code>events[].parameters[].multiMessageValue[]</code></td><td><p><code>object</code></p><p>activities.list of <code>messageValue</code> objects.</p></td></tr><tr><td><code>events[].parameters[].multiMessageValue[].parameter[]</code></td><td><p><code>object (<code>NestedParameter</code>)</code></p><p>Parameter values</p></td></tr><tr><td><code>events[].sensitiveParameters[]</code></td><td><p><code>object</code></p><p>Includes sensitive parameter value pairs for various applications.</p></td></tr><tr><td><code>events[].sensitiveParameters[].messageValue</code></td><td><p><code>object</code></p><p>Nested parameter value pairs associated with this parameter. Complex value type for a parameter are returned as a list of parameter values. For example, the address parameter may have a value as <code>[{parameter: [{name: city, value: abc}]}]</code></p></td></tr><tr><td><code>events[].sensitiveParameters[].messageValue.parameter[]</code></td><td><p><code>object (<code>NestedParameter</code>)</code></p><p>Parameter values</p></td></tr><tr><td><code>events[].sensitiveParameters[].name</code></td><td><p><code>string</code></p><p>The name of the parameter.</p></td></tr><tr><td><code>events[].sensitiveParameters[].value</code></td><td><p><code>string</code></p><p>String value of the parameter.</p></td></tr><tr><td><code>events[].sensitiveParameters[].multiValue[]</code></td><td><p><code>string</code></p><p>String values of the parameter.</p></td></tr><tr><td><code>events[].sensitiveParameters[].intValue</code></td><td><p><code>string (int64 format)</code></p><p>Integer value of the parameter.</p></td></tr><tr><td><code>events[].sensitiveParameters[].multiIntValue[]</code></td><td><p><code>string (int64 format)</code></p><p>Integer values of the parameter.</p></td></tr><tr><td><code>events[].sensitiveParameters[].boolValue</code></td><td><p><code>boolean</code></p><p>Boolean value of the parameter.</p></td></tr><tr><td><code>events[].sensitiveParameters[].multiMessageValue[]</code></td><td><p><code>object</code></p><p>activities.list of <code>messageValue</code> objects.</p></td></tr><tr><td><code>events[].sensitiveParameters[].multiMessageValue[].parameter[]</code></td><td><p><code>object (<code>NestedParameter</code>)</code></p><p>Parameter values</p></td></tr><tr><td><code>events[].resourceIds[]</code></td><td><p><code>string</code></p><p>Resource ids associated with the event.</p></td></tr><tr><td><code>events[].status</code></td><td><p><code>object (<code>Status</code>)</code></p><p>Status of the event. Note: Not all events have status.</p></td></tr><tr><td><code>id</code></td><td><p><code>object</code></p><p>Unique identifier for each activity record.</p></td></tr><tr><td><code>id.time</code></td><td><p><code>string</code></p><p>Time of occurrence of the activity. This is in UNIX epoch time in seconds.</p></td></tr><tr><td><code>id.uniqueQualifier</code></td><td><p><code>string (int64 format)</code></p><p>Unique qualifier if multiple events have the same time.</p></td></tr><tr><td><code>id.applicationName</code></td><td><p><code>string</code></p><p>Application name to which the event belongs. For possible values see the list of applications above in <code>applicationName</code>.</p></td></tr><tr><td><code>id.customerId</code></td><td><p><code>string</code></p><p>The unique identifier for a Google Workspace account.</p></td></tr><tr><td><code>actor</code></td><td><p><code>object</code></p><p>User doing the action.</p></td></tr><tr><td><code>actor.profileId</code></td><td><p><code>string</code></p><p>The unique Google Workspace profile ID of the actor. This value might be absent if the actor is not a Google Workspace user, or may be the number 105250506097979753968 which acts as a placeholder ID.</p></td></tr><tr><td><code>actor.email</code></td><td><p><code>string</code></p><p>The primary email address of the actor. May be absent if there is no email address associated with the actor.</p></td></tr><tr><td><code>actor.callerType</code></td><td><p><code>string</code></p><p>The type of actor.</p></td></tr><tr><td><code>actor.key</code></td><td><p><code>string</code></p><p>Only present when <code>callerType</code> is <code>KEY</code>. Can be the <code>consumer_key</code> of the requestor for OAuth 2LO API requests or an identifier for robot accounts.</p></td></tr><tr><td><code>actor.applicationInfo</code></td><td><p><code>object</code></p><p>Details of the application that was the actor for the activity.</p></td></tr><tr><td><code>actor.applicationInfo.oauthClientId</code></td><td><p><code>string</code></p><p>OAuth client id of the third party application used to perform the action.</p></td></tr><tr><td><code>actor.applicationInfo.applicationName</code></td><td><p><code>string</code></p><p>Name of the application used to perform the action.</p></td></tr><tr><td><code>actor.applicationInfo.impersonation</code></td><td><p><code>boolean</code></p><p>Whether the application was impersonating a user.</p></td></tr><tr><td><code>networkInfo</code></td><td><p><code>object (<code>NetworkInfo</code>)</code></p><p>Network information of the user doing the action.</p></td></tr><tr><td><code>resourceDetails[]</code></td><td><p><code>object (<code>ResourceDetails</code>)</code></p><p>Details of the resource on which the action was performed.</p></td></tr></tbody></table>

## NetworkInfo

Network information of the user doing the action.

JSON representation

```
{
  "ipAsn": [
    integer
  ],
  "regionCode": string,
  "subdivisionCode": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>ipAsn[]</code></td><td><p><code>integer</code></p><p>IP Address of the user doing the action.</p></td></tr><tr><td><code>regionCode</code></td><td><p><code>string</code></p><p>ISO 3166-1 alpha-2 region code of the user doing the action.</p></td></tr><tr><td><code>subdivisionCode</code></td><td><p><code>string</code></p><p>ISO 3166-2 region code (states and provinces) for countries of the user doing the action.</p></td></tr></tbody></table>

## ResourceDetails

Details of the resource on which the action was performed.

JSON representation

```
{
  "id": string,
  "title": string,
  "type": string,
  "appliedLabels": [
    {
      object (AppliedLabel)
    }
  ],
  "relation": string,
  "ownerDetails": {
    object (OwnerDetails)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the resource, such as a doc_id for a Drive document, a conference_id for a Meet conference, or a "gaia_id/rfc2822_message_id" for an email.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Title of the resource. For instance, in case of a drive document, this would be the title of the document. In case of an email, this would be the subject.</p></td></tr><tr><td><code>type</code></td><td><p><code>string</code></p><p>Type of the resource - document, email, chat message</p></td></tr><tr><td><code>appliedLabels[]</code></td><td><p><code>object (<code>AppliedLabel</code>)</code></p><p>activities.list of labels applied on the resource</p></td></tr><tr><td><code>relation</code></td><td><p><code>string</code></p><p>Defines relationship of the resource to the events</p></td></tr><tr><td><code>ownerDetails</code></td><td><p><code>object (<code>OwnerDetails</code>)</code></p><p>Owner details of the resource.</p></td></tr></tbody></table>

## AppliedLabel

Details of the label applied on the resource.

JSON representation

```
{
  "id": string,
  "title": string,
  "fieldValues": [
    {
      object (FieldValue)
    }
  ],
  "reason": {
    object (Reason)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the label - Only the label id, not the full OnePlatform resource name.</p></td></tr><tr><td><code>title</code></td><td><p><code>string</code></p><p>Title of the label</p></td></tr><tr><td><code>fieldValues[]</code></td><td><p><code>object (<code>FieldValue</code>)</code></p><p>activities.list of fields which are part of the label and have been set by the user. If label has a field which was not set by the user, it would not be present in this list.</p></td></tr><tr><td><code>reason</code></td><td><p><code>object (<code>Reason</code>)</code></p><p>The reason why the label was applied on the resource.</p></td></tr></tbody></table>

## FieldValue

Details of the field value set by the user for the particular label.

JSON representation

```
{
  "id": string,
  "displayName": string,
  "type": string,
  "reason": {
    object (Reason)
  },

  "unsetValue": boolean,
  "longTextValue": string,
  "textValue": string,
  "textListValue": {
    object (TextListValue)
  },
  "selectionValue": {
    object (SelectionValue)
  },
  "selectionListValue": {
    object (SelectionListValue)
  },
  "integerValue": string,
  "userValue": {
    object (UserValue)
  },
  "userListValue": {
    object (UserListValue)
  },
  "dateValue": {
    object (Date)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the field</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Display name of the field</p></td></tr><tr><td><code>type</code></td><td><p><code>string</code></p><p>Type of the field</p></td></tr><tr><td><code>reason</code></td><td><p><code>object (<code>Reason</code>)</code></p><p>The reason why the field was applied to the label.</p></td></tr><tr><td colspan="2">Union field <code>value</code>. Stores the values stored in the field <code>value</code> can be only one of the following:</td></tr><tr><td><code>unsetValue</code></td><td><p><code>boolean</code></p><p>If the field is unset, this will be true.</p></td></tr><tr><td><code>longTextValue</code></td><td><p><code>string</code></p><p>Setting a long text value.</p></td></tr><tr><td><code>textValue</code></td><td><p><code>string</code></p><p>Setting a text value.</p></td></tr><tr><td><code>textListValue</code></td><td><p><code>object (<code>TextListValue</code>)</code></p><p>Setting a text list value.</p></td></tr><tr><td><code>selectionValue</code></td><td><p><code>object (<code>SelectionValue</code>)</code></p><p>Setting a selection value by selecting a single value from a dropdown.</p></td></tr><tr><td><code>selectionListValue</code></td><td><p><code>object (<code>SelectionListValue</code>)</code></p><p>Setting a selection list value by selecting multiple values from a dropdown.</p></td></tr><tr><td><code>integerValue</code></td><td><p><code>string (int64 format)</code></p><p>Setting an integer value.</p></td></tr><tr><td><code>userValue</code></td><td><p><code>object (<code>UserValue</code>)</code></p><p>Setting a user value by selecting a single user.</p></td></tr><tr><td><code>userListValue</code></td><td><p><code>object (<code>UserListValue</code>)</code></p><p>Setting a user list value by selecting multiple users.</p></td></tr><tr><td><code>dateValue</code></td><td><p><code>object (<code>Date</code>)</code></p><p>Setting a date value.</p></td></tr></tbody></table>

## TextListValue

Setting a text list value.

JSON representation

```
{
  "values": [
    string
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>string</code></p><p>activities.list of text values.</p></td></tr></tbody></table>

## SelectionValue

Setting a selection value by selecting a single value from a dropdown.

JSON representation

```
{
  "id": string,
  "displayName": string,
  "badged": boolean
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Identifier of the selection.</p></td></tr><tr><td><code>displayName</code></td><td><p><code>string</code></p><p>Display name of the selection.</p></td></tr><tr><td><code>badged</code></td><td><p><code>boolean</code></p><p>Whether the selection is badged.</p></td></tr></tbody></table>

## SelectionListValue

Setting a selection list value by selecting multiple values from a dropdown.

JSON representation

```
{
  "values": [
    {
      object (SelectionValue)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>object (<code>SelectionValue</code>)</code></p><p>activities.list of selections.</p></td></tr></tbody></table>

## UserValue

Setting a user value by selecting a single user.

JSON representation

```
{
  "email": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>email</code></td><td><p><code>string</code></p><p>Email of the user.</p></td></tr></tbody></table>

## UserListValue

Setting a user list value by selecting multiple users.

JSON representation

```
{
  "values": [
    {
      object (UserValue)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>values[]</code></td><td><p><code>object (<code>UserValue</code>)</code></p><p>activities.list of users.</p></td></tr></tbody></table>

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:

- A full date, with non-zero year, month, and day values.
- A month and day, with a zero year (for example, an anniversary).
- A year on its own, with a zero month and a zero day.
- A year and month, with a zero day (for example, a credit card expiration date).

Related types:

- `google.type.TimeOfDay`
- `google.type.DateTime`
- `google.protobuf.Timestamp`

JSON representation

```
{
  "year": integer,
  "month": integer,
  "day": integer
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>year</code></td><td><p><code>integer</code></p><p>Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.</p></td></tr><tr><td><code>month</code></td><td><p><code>integer</code></p><p>Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.</p></td></tr><tr><td><code>day</code></td><td><p><code>integer</code></p><p>Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.</p></td></tr></tbody></table>

## Reason

The reason why the label/field was applied.

JSON representation

```
{
  "reasonType": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>reasonType</code></td><td><p><code>string</code></p><p>The type of the reason.</p></td></tr></tbody></table>

## OwnerDetails

Details of the owner of the resource.

JSON representation

```
{
  "ownerType": string,
  "ownerIdentity": [
    {
      object (OwnerIdentity)
    }
  ]
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>ownerType</code></td><td><p><code>string</code></p><p>Type of the owner of the resource.</p></td></tr><tr><td><code>ownerIdentity[]</code></td><td><p><code>object (<code>OwnerIdentity</code>)</code></p><p>Identity details of the owner(s) of the resource.</p></td></tr></tbody></table>

## OwnerIdentity

Identity details of the owner of the resource.

JSON representation

```
{

  "customerIdentity": {
    object (CustomerIdentity)
  },
  "userIdentity": {
    object (UserIdentity)
  },
  "groupIdentity": {
    object (GroupIdentity)
  }
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td colspan="2">Union field <code>identity</code>. This is a oneof field and only one of the following fields can be set. <code>identity</code> can be only one of the following:</td></tr><tr><td><code>customerIdentity</code></td><td><p><code>object (<code>CustomerIdentity</code>)</code></p><p>Identity of the Google Workspace customer who owns the resource.</p></td></tr><tr><td><code>userIdentity</code></td><td><p><code>object (<code>UserIdentity</code>)</code></p><p>Identity of the user who owns the resource.</p></td></tr><tr><td><code>groupIdentity</code></td><td><p><code>object (<code>GroupIdentity</code>)</code></p><p>Identity of the group who owns the resource.</p></td></tr></tbody></table>

## CustomerIdentity

Identity of the Google Workspace customer who owns the resource.

JSON representation

```
{
  "id": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Customer id.</p></td></tr></tbody></table>

## UserIdentity

Identity of the user who owns the resource.

JSON representation

```
{
  "id": string,
  "userEmail": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>User gaia id.</p></td></tr><tr><td><code>userEmail</code></td><td><p><code>string</code></p><p>User email.</p></td></tr></tbody></table>

## GroupIdentity

Identity of the group who owns the resource.

JSON representation

```
{
  "id": string,
  "groupEmail": string
}
```

<table><colgroup><col width="25%"> <col></colgroup><thead><tr><th colspan="2">Fields</th></tr></thead><tbody><tr><td><code>id</code></td><td><p><code>string</code></p><p>Group gaia id.</p></td></tr><tr><td><code>groupEmail</code></td><td><p><code>string</code></p><p>Group email.</p></td></tr></tbody></table>
