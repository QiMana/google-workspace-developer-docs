---
source: https://developers.google.com/apps-script/guides/admin/monitor-use
root: apps-script
fetched_at: 2026-04-23T15:18:19.407Z
---

# Monitor and control Google Apps Script use in your Google Workspace organization

## Page Summary

- Admins can monitor Apps Script project actions and daily usage in the Google Admin console.
- You can view actions taken on Apps Script projects through Drive log events reporting in the Admin console.
- The Admin console allows viewing the daily number of people using Apps Script and the number of projects used per day.
- Admins with specific Google Workspace accounts can control access to external domains for Apps Script.
- Administrators have the ability to turn Apps Script on or off for their organization or disable individual Apps Script projects.

You can monitor the actions people take on Apps Script projects and how many people use Apps Script per day in the [Google Admin console](https://admin.google.com/).

## View Apps Script audit logs

To view the actions people take on Apps Script projects with Drive log events reporting in the Admin console, follow these steps:

1. Open your Admin console at [admin.google.com](https://admin.google.com/).
2. Click Menu \> **Reporting** \> **Audit and investigation** \> **Drive log events**. If **Reporting** doesn't appear, click **Show more**.
3. Click **Filter** \> **Add a filter** \> **Document type**.
4. In the **Document type** section, select **Google Script** and click **Apply**.
5. Click **Search**.

## View how many people use Apps Script

To view the number of people in your organization using Apps Script each day and how many Apps Script projects people use per day, follow these steps:

1. Open your Admin console at [admin.google.com](https://admin.google.com/).
2. Click Menu \> **Reporting** \> **Reports** \> **Apps Reports** \> **Apps Script**. If **Reporting** doesn't appear, click **Show more**.
3. To export the data, click Download ![](https://developers.google.com/static/apps-script/images/icons/download_24px.svg).

The charts show data for the last 6 months and include all script executions, which includes any time a script runs.

## Control access to external domains

Control access to external domains with a Business Plus, Enterprise, Education Standard, Teaching and Learning Upgrade, or Education Plus Google Workspace account.

By default, scripts can send or fetch data using any URL with [URL Fetch Service](../../reference/url-fetch.md). As an administrator, you can control which external domains your users can access through Apps Script. Refer to [Allow only certain external connections for Apps Script and Sheets](https://support.google.com/a/answer/13686736).

## Turn off Apps Script

As an administrator, you can turn Apps Script on or off for people in your organization. For instructions on how to do this, see [Turn Apps Script on or off for users](https://support.google.com/a/answer/15100049).

## Turn off a specific Apps Script project

You can turn off an individual Apps Script project by deleting its associated Cloud project. After you shut down a Cloud project, all executions of the script project stop. For more information, see [Shutting down (deleting) projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#shutting_down_projects).

To delete a Cloud project, obtain delete permissions on the project. To give delete permissions for projects in your organization, refer to [Assign delete permission for all Cloud projects in an organization](./assign-cloud-permissions.md#assign-delete).

## Related resources

- [Drive log events](https://support.google.com/a/answer/4579696)
- [Create and manage reporting rules](https://support.google.com/a/answer/9908423)
- [Reports API: Drive Activity Report](../../../workspace/admin/reports/v1/guides/manage-audit-drive.md)
