---
source: https://developers.google.com/workspace/cloud-search/docs/guides/audit-logging-manual
root: workspace
fetched_at: 2026-04-23T15:26:08.990Z
---

# Audit logging

This page describes the audit logs Cloud Search creates as part of [Cloud Audit Logs](https://cloud.google.com/logging/docs/audit/).

## Overview

Google Cloud services write audit logs to help you answer "Who did what, where, and when" within your resources. Your Cloud projects contain audit logs only for resources directly within the project. Other entities, such as folders, organizations, and Cloud Billing accounts, contain their own audit logs.

For a general overview, see [Cloud Audit Logs](https://cloud.google.com/logging/docs/audit/). For more detail, see [Understanding audit logs](https://cloud.google.com/logging/docs/audit/understanding-audit-logs).

Cloud Audit Logs provides the following logs for each Cloud project, folder, and organization:

- Admin Activity audit logs: entries for methods performing Admin write operations.
- Data Access audit logs: entries for methods performing Admin read, Data write, and Data read operations.
- System Event audit logs
- Policy Denied audit logs

Cloud Search writes Admin Activity audit logs to record operations that modify resource configuration or metadata. You can't disable Admin Activity audit logs.

Cloud Search writes Data Access audit logs only if you [explicitly enable](#enable) them. These logs contain API calls that read resource configuration or metadata, and user-driven API calls that create, modify, or read user-provided resource data.

Cloud Search doesn't write System Event or Policy Denied audit logs.

## Audited operations

The following table summarizes which API operations correspond to each audit log type in Cloud Search:

| Audit logs category | Cloud Search operations |
| --- | --- |
| Admin Activity: Admin write | indexing.datasources.updateSchema   indexing.datasources.deleteSchema   settings.datasources.create   settings.datasources.delete   settings.datasources.update   settings.searchapplications.create   settings.searchapplications.delete   settings.searchapplications.reset   settings.searchapplications.update   settings.updateCustomer   cloudsearch.IdentitySourceService.create   cloudsearch.IdentitySourceService.update   cloudsearch.IdentitySourceService.delete |
| Data Access: Admin read | indexing.datasources.getSchema   settings.datasources.get   settings.datasources.list   settings.searchapplications.get   settings.searchapplications.list   settings.getCustomer   cloudsearch.IdentitySourceService.get   cloudsearch.IdentitySourceService.list |
| Data Access: Data write | indexing.datasources.items.delete   indexing.datasources.items.deleteQueueItems   indexing.datasources.items.index   indexing.datasources.items.poll   indexing.datasources.items.push   indexing.datasources.items.unreserve   indexing.datasources.items.upload   media.upload |
| Data Access: Data read | indexing.datasources.items.get   indexing.datasources.items.list   operations.get   operations.list   debug.datasources.items.checkAccess   debug.datasources.items.searchByViewUrl   stats.getIndex   stats.getQuery   stats.getSession   stats.getUser   stats.index.datasources.get   stats.query.searchapplications.get   stats.session.searchapplications.get   stats.user.search applications.get   debug.identitysources.items.listForunmappedidentity   debug.identitysources.unmappedids.list   debug.datasources.items.unmappedids.list   query.sources.list   query.suggest   query.search   stats.getSearchapplication |

## Audit log format

Audit log entries include the following objects. You can view them in Cloud Logging using the Logs Explorer, the Cloud Logging API, or the gcloud command-line tool.

The log entry itself is a [`LogEntry`](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry) object. Useful fields include:

- `logName`: the resource ID and audit log type.
- `resource`: the target of the audited operation.
- `timeStamp`: the time of the audited operation.
- `protoPayload`: the audited information.

The audit logging data is an [AuditLog](https://cloud.google.com/logging/docs/reference/audit/auditlog/rest/Shared.Types/AuditLog) object in the `protoPayload` field.

Optional service-specific audit information is a service-specific object. For earlier integrations, this object is in the `serviceData` field of the `AuditLog` object; later integrations use the `metadata` field.

For more information, see [Understanding audit logs](https://cloud.google.com/logging/docs/audit/understanding-audit-logs).

### Log name

Cloud Audit Logs resource names indicate the project or other Google Cloud entity that owns the logs, and the audit log type. For example:

```
projects/PROJECT_ID/logs/cloudaudit.googleapis.com%2Factivity
organizations/ORGANIZATION_ID/logs/cloudaudit.googleapis.com%2Fdata_access
```

### Service name

Cloud Search audit logs use the service name `cloudsearch.googleapis.com`.

### Resource types

Cloud Search audit logs use the resource type `audited_resource` for all logs. For more resource types, see [Monitored resource types](https://cloud.google.com/monitoring/api/resources).

## Enable audit logging

By default, audit logging is disabled for the Cloud Search API. To enable audit logging for Cloud Search:

1. (Optional) If you haven't created a Google Cloud project to store logs, see [Configure access to the Cloud Search API](./project-setup.md).
2. Obtain the project ID for the Google Cloud project where you want to store logs. See [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects).
3. Determine the log category to enable for a specific API. See [Audited operations](#operations).
4. Use the [`updateCustomer()`](../reference/rest/v1/settings/updateCustomer.md) REST API method to update the `auditLogSettings` with the categories:
	1. Obtain an OAuth 2.0 access token. See [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2). Use one of these scopes:
		- `https://www.googleapis.com/auth/cloud_search.settings.indexing`
				- `https://www.googleapis.com/auth/cloud_search.settings`
				- `https://www.googleapis.com/auth/cloud_search`
		2. Run this curl command: `bash curl --request PATCH \ 'https://cloudsearch.googleapis.com/v1/settings/customer?updateMask=auditLoggingSettings&key=[YOUR_API_KEY]' \ --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \ --header 'Content-Type: application/json' \ --data '{"auditLoggingSettings": { "project": "projects/PROJECT_ID", "CATEGORY1": "true", "CATEGORY2": "true" } }'` Replace `YOUR_ACCESS_TOKEN`, `PROJECT_ID`, and the categories (`logAdminReadActions`, `logDataWriteActions`, or `logDataReadActions`). Admin write actions are enabled by default. To log query methods, enable the Data read category.
		Subsequent requests to the Cloud Search API generate logs in the specified project.
5. Audit logging for query methods requires the Data read category. To enable logging for `query.sources.list`, `query.suggest`, and `query.search`:
	1. Retrieve the name for each search application, in the form `searchapplications/<search_application_id>`.
		2. Call `settings.searchapplications.update` with `enableAuditLog` set to `true`.
6. To enable audit logging for calls from `cloudsearch.google.com`, ensure the Data read category is enabled and update `searchapplications/default`.

View logs in the Logs Explorer of the Google Cloud console. Use this filter for Cloud Search audit logs:

`protoPayload.serviceName="cloudsearch.googleapis.com"`

For more information, see [Logs explorer overview](https://cloud.google.com/logging/docs/view/logs-viewer-preview).

## Audit log permissions

Identity and Access Management (IAM) permissions determine which logs you can view or export. For more information, see [Understanding roles](https://cloud.google.com/iam/docs/understanding-roles).

To view Admin Activity audit logs, you must have one of these IAM roles:

- Project Owner, Editor, or Viewer.
- The Logging [Logs Viewer](https://cloud.google.com/logging/docs/access-control#permissions_and_roles) role.
- A [custom IAM role](https://cloud.google.com/iam/docs/creating-custom-roles) with the `logging.logEntries.list` permission.

To view Data Access audit logs, you must have one of these roles:

- [Project Owner](https://cloud.google.com/iam/docs/roles-overview#basic).
- Logging's [Private Logs Viewer](https://cloud.google.com/logging/docs/access-control#permissions_and_roles) role.
- A [custom IAM role](https://cloud.google.com/iam/docs/creating-custom-roles) with the `logging.privateLogEntries.list` IAM permission

If you are using audit logs from a non-project entity, such as an organization, then change the Cloud project roles to suitable organization roles.

## View logs

To view logs, you need the identifier of the Cloud project, folder, or organization. You can specify other [`LogEntry`](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry) fields, like `resource.type`. See [Build queries in the Logs Explorer](https://cloud.google.com/logging/docs/view/building-queries).

Audit log names follow this format:

```
projects/PROJECT_ID/logs/cloudaudit.googleapis.com%2Factivity
   projects/PROJECT_ID/logs/cloudaudit.googleapis.com%2Fdata_access
   projects/PROJECT_ID/logs/cloudaudit.googleapis.com%2Fsystem_event
   projects/PROJECT_ID/logs/cloudaudit.googleapis.com%2Fpolicy

folders/FOLDER_ID/logs/cloudaudit.googleapis.com%2Factivity
   folders/FOLDER_ID/logs/cloudaudit.googleapis.com%2Fdata_access
   folders/FOLDER_ID/logs/cloudaudit.googleapis.com%2Fsystem_event
   folders/FOLDER_ID/logs/cloudaudit.googleapis.com%2Fpolicy

organizations/ORGANIZATION_ID/logs/cloudaudit.googleapis.com%2Factivity
   organizations/ORGANIZATION_ID/logs/cloudaudit.googleapis.com%2Fdata_access
   organizations/ORGANIZATION_ID/logs/cloudaudit.googleapis.com%2Fsystem_event
   organizations/ORGANIZATION_ID/logs/cloudaudit.googleapis.com%2Fpolicy
```

You have several options for viewing your audit log entries.

### Console

1. Go to the **Logging > Logs Explorer** page in the Google Cloud console. [Go to Logs Explorer](https://console.cloud.google.com/logs/query)
2. Select your project.
3. In the **Query builder** pane, select the resource and log type. For more details about querying using the new Logs Explorer, see [Build queries in the Logs Explorer](https://docs.cloud.google.com/logging/docs/view/building-queries).

### gcloud

Run this command for project-level logs:

```
gcloud logging read "logName : projects/PROJECT_ID/logs/cloudaudit.googleapis.com" 

  --project=PROJECT_ID
```

### API

1. Go to the **Try this API** section for the [`entries.list`](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/entries/list) method.
2. Use this request body, replacing `PROJECT_ID` with your chosen project ID:
	```
	{
	"resourceNames": ["projects/PROJECT_ID"],
	"pageSize": 5,
	"filter": "logName : projects/PROJECT_ID/logs/cloudaudit.googleapis.com"
	}
	```
3. Click **Execute**.

For more details about querying, see [Logging query language](https://cloud.google.com/logging/docs/view/logging-query-language).

For a sample audit log entry and how to find the most important information in it, see [Understanding audit logs](https://cloud.google.com/logging/docs/audit/understanding-audit-logs).

## Export audit logs

You can export audit logs like other logs. See [Exporting logs](https://cloud.google.com/logging/docs/export).

- Export to Cloud Storage, BigQuery, or Pub/Sub for longer retention or advanced search.
- Use [aggregated sinks](https://cloud.google.com/logging/docs/export/aggregated_sinks) to manage logs across an organization.
- Exclude Data Access logs to manage log allotments. See [Excluding logs](https://cloud.google.com/logging/docs/exclusions).

## Pricing and retention

Cloud Logging doesn't charge for Admin Activity audit logs. Cloud Logging charges for Data Access audit logs. See [Google Cloud's operations suite pricing](https://cloud.google.com/stackdriver/pricing).

Retention periods for Cloud Search audit logs:

- Admin Activity logs: 400 days.
- Data Access logs: 30 days.

## Current limitations

Cloud Search audit logging limitations:

- Log entry size must be less than 512 KB. If an entry exceeds 512 KB, the `response` field is removed. If it still exceeds 512 KB, the `request` field is removed. If it still exceeds 512 KB, the entire entry is dropped.
- Response bodies aren't logged for `list()`, `get()`, and `suggest()` methods.
- Only query calls from `cloudsearch.google.com` and customer search applications are logged.
- For `search()` calls, only `Query`, `RequestOptions`, and `DataSourceRestriction` are logged in the request. The response only audits the URL and metadata.
- Backend calls for data export aren't audited.
