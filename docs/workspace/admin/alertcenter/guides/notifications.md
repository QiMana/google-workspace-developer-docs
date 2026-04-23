---
source: https://developers.google.com/workspace/admin/alertcenter/guides/notifications
root: workspace
fetched_at: 2026-04-23T15:23:21.695Z
---

# Notifications

The Alert Center API can send notifications when alerts are updated. To receive notifications, you must configure your notification settings.

## Pub/Sub notifications

The Alert Center API can publish notifications to a Pub/Sub topic. After you create a topic and grant `alerts-api-push-notifications@system.gserviceaccount.com` publish permission, use the Alert Center API [update settings API](https://developers.google.com/workspace/admin/alertcenter/reference/rest/v1beta1/TopLevel/updateSettings) to set that topic as a notification destination. Once configured, the Alert Center API publishes a message to that topic for each update, such as when a new alert arrives.

### Pub/Sub message attributes

The following sections describe the attributes included in the Pub/Sub messages.

#### Common attributes

- `alertcenter_resource_type`: The type of the resource. The supported value is `"ALERT"`.
- `alertcenter_resource_status`: The status of the resource. Supported values are `"CREATED"`, `"DELETED"`, `"UNDELETED"`, and `"MODIFIED"`.
- `alertcenter_payload_format`: The format of the payload. The supported value is `"JSON"`.

#### Alert attributes

- `alertcenter_start_time`: The time the event that caused this alert was started or detected.
- `alertcenter_end_time`: The time the event that caused this alert ceased being active.
- `alertcenter_type`: The type of the alert. For a list of available alert types, see [Google Workspace Alert types](https://developers.google.com/workspace/admin/alertcenter/reference/alert-types).
- `alertcenter_source`: A unique identifier for the system that reported the alert.
- `alertcenter_create_time`: The time this alert was created.
- `alertcenter_update_time`: The last time this alert was updated.

### Message payload

The payload of the message depends on `alertcenter_resource_type`. When the resource type is `"ALERT"`, the payload is one of the Alert Center API [alert types](https://developers.google.com/workspace/admin/alertcenter/reference/alert-types). The format of the payload depends on `alertcenter_payload_format`. When the format is `"JSON"`, the payload is a [base64-encoded](https://en.wikipedia.org/wiki/Base64) [JSON](https://en.wikipedia.org/wiki/JSON) object.
