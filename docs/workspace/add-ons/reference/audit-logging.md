---
source: https://developers.google.com/workspace/add-ons/reference/audit-logging
root: workspace
fetched_at: 2026-04-23T15:23:00.838Z
---

# Google Workspace add-on audit logging

## Page Summary

- Google Workspace Add-ons generate audit logs that record administrative and access activities, categorized as either Data Access or Admin Activity based on the permission type required for the method call.
- Audit logs for Google Workspace Add-ons utilize the service name `gsuiteaddons.googleapis.com` and can be filtered using `protoPayload.serviceName="gsuiteaddons.googleapis.com"`.
- Methods requiring `DATA_READ`, `DATA_WRITE`, or `ADMIN_READ` permissions generate Data Access audit logs, while those requiring `ADMIN_WRITE` permissions generate Admin Activity audit logs.
- This document provides a detailed breakdown of each method within `google.cloud.gsuiteaddons.v1.GSuiteAddOns`, specifying the audit log type, required permissions, and filtering criteria.

This document describes audit logging for Google Workspace add-ons. Google Cloud services generate audit logs that record administrative and access activities within your Google Cloud resources. For more information about Cloud Audit Logs, see the following:

- [Types of audit logs](https://cloud.google.com/logging/docs/audit#types)
- [Audit log entry structure](https://cloud.google.com/logging/docs/audit#audit_log_entry_structure)
- [Storing and routing audit logs](https://cloud.google.com/logging/docs/audit#storing_and_routing_audit_logs)
- [Cloud Logging pricing summary](https://cloud.google.com/stackdriver/pricing#logs-pricing-summary)
- [Enable Data Access audit logs](https://cloud.google.com/logging/docs/audit/configure-data-access)

## Service name

Google Workspace add-ons audit logs use the service name `gsuiteaddons.googleapis.com`. Filter for this service:

```
protoPayload.serviceName="gsuiteaddons.googleapis.com"
```

## Methods by permission type

Each IAM permission has a `type` property, whose value is an enum that can be one of four values: `ADMIN_READ`, `ADMIN_WRITE`, `DATA_READ`, or `DATA_WRITE`. When you call a method, Google Workspace add-ons generates an audit log whose category is dependent on the `type` property of the permission required to perform the method. Methods that require an IAM permission with the `type` property value of `DATA_READ`, `DATA_WRITE`, or `ADMIN_READ` generate [Data Access](https://cloud.google.com/logging/docs/audit#data-access) audit logs. Methods that require an IAM permission with the `type` property value of `ADMIN_WRITE` generate [Admin Activity](https://cloud.google.com/logging/docs/audit#admin-activity) audit logs.

| Permission type | Methods |
| --- | --- |
| `ADMIN_READ` | `google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetAuthorization`   `google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetDeployment`   `google.cloud.gsuiteaddons.v1.GSuiteAddOns.ListDeployments`   `google.cloud.gsuiteaddons.v1.GSuiteAddOns.UninstallDeployment` |
| `ADMIN_WRITE` | `google.cloud.gsuiteaddons.v1.GSuiteAddOns.CreateDeployment`   `google.cloud.gsuiteaddons.v1.GSuiteAddOns.DeleteDeployment`   `google.cloud.gsuiteaddons.v1.GSuiteAddOns.InstallDeployment`   `google.cloud.gsuiteaddons.v1.GSuiteAddOns.ReplaceDeployment` |

## API interface audit logs

For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Google Workspace add-ons.

### google.cloud.gsuiteaddons.v1.GSuiteAddOns

The following audit logs are associated with methods belonging to `google.cloud.gsuiteaddons.v1.GSuiteAddOns`.

#### CreateDeployment

- **Method**: `google.cloud.gsuiteaddons.v1.GSuiteAddOns.CreateDeployment`
- **Audit log type**: [Admin activity](https://cloud.google.com/logging/docs/audit#admin-activity)
- **Permissions**:
	- `gsuiteaddons.deployments.create - ADMIN_WRITE`
- **Method is a long-running or streaming operation**: No.
- **Filter for this method**: `      protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.CreateDeployment"    `

#### DeleteDeployment

- **Method**: `google.cloud.gsuiteaddons.v1.GSuiteAddOns.DeleteDeployment`
- **Audit log type**: [Admin activity](https://cloud.google.com/logging/docs/audit#admin-activity)
- **Permissions**:
	- `gsuiteaddons.deployments.delete - ADMIN_WRITE`
- **Method is a long-running or streaming operation**: No.
- **Filter for this method**: `      protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.DeleteDeployment"    `

#### GetAuthorization

- **Method**: `google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetAuthorization`
- **Audit log type**: [Data access](https://cloud.google.com/logging/docs/audit#data-access)
- **Permissions**:
	- `gsuiteaddons.authorizations.get - ADMIN_READ`
- **Method is a long-running or streaming operation**: No.
- **Filter for this method**: `      protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetAuthorization"    `

#### GetDeployment

- **Method**: `google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetDeployment`
- **Audit log type**: [Data access](https://cloud.google.com/logging/docs/audit#data-access)
- **Permissions**:
	- `gsuiteaddons.deployments.get - ADMIN_READ`
- **Method is a long-running or streaming operation**: No.
- **Filter for this method**: `      protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.GetDeployment"    `

#### InstallDeployment

- **Method**: `google.cloud.gsuiteaddons.v1.GSuiteAddOns.InstallDeployment`
- **Audit log type**: [Admin activity](https://cloud.google.com/logging/docs/audit#admin-activity)
- **Permissions**:
	- `gsuiteaddons.deployments.install - ADMIN_WRITE`
- **Method is a long-running or streaming operation**: No.
- **Filter for this method**: `      protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.InstallDeployment"    `

#### ListDeployments

- **Method**: `google.cloud.gsuiteaddons.v1.GSuiteAddOns.ListDeployments`
- **Audit log type**: [Data access](https://cloud.google.com/logging/docs/audit#data-access)
- **Permissions**:
	- `gsuiteaddons.deployments.list - ADMIN_READ`
- **Method is a long-running or streaming operation**: No.
- **Filter for this method**: `      protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.ListDeployments"    `

#### ReplaceDeployment

- **Method**: `google.cloud.gsuiteaddons.v1.GSuiteAddOns.ReplaceDeployment`
- **Audit log type**: [Admin activity](https://cloud.google.com/logging/docs/audit#admin-activity)
- **Permissions**:
	- `gsuiteaddons.deployments.update - ADMIN_WRITE`
- **Method is a long-running or streaming operation**: No.
- **Filter for this method**: `      protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.ReplaceDeployment"    `

#### UninstallDeployment

- **Method**: `google.cloud.gsuiteaddons.v1.GSuiteAddOns.UninstallDeployment`
- **Audit log type**: [Data access](https://cloud.google.com/logging/docs/audit#data-access)
- **Permissions**:
	- `gsuiteaddons.deployments.execute - ADMIN_READ`
- **Method is a long-running or streaming operation**: No.
- **Filter for this method**: `      protoPayload.methodName="google.cloud.gsuiteaddons.v1.GSuiteAddOns.UninstallDeployment"    `
