---
source: https://developers.google.com/apps-script/guides/admin/view-cloud-projects
root: apps-script
fetched_at: 2026-04-23T15:18:19.589Z
---

# View or edit Google Cloud projects

## Page Summary

- Every Apps Script project is associated with one of two types of Cloud projects: Default or Standard.
- Default Cloud projects are automatically created and managed by Apps Script.
- Standard Cloud projects are created and managed by users for advanced use cases.
- Viewing or editing Cloud projects in the Cloud console requires specific `resourcemanager` permissions.
- Default Cloud projects are located within specific folders in the Cloud resource hierarchy that should not be deleted.

Every Google Apps Script project is associated with a project in Google Cloud. There are 2 types of Cloud projects for Apps Script:

- **Default Cloud projects**: Apps Script automatically creates and manages a Google Cloud project each time someone creates and runs an Apps Script project. To learn more, refer to [Default Cloud projects](../cloud-platform-projects.md#default_google_cloud_projects).
- **Standard Cloud projects**: Users can create and manage their own Cloud projects for advanced Apps Script use cases. To learn more, see [Standard Cloud projects](../cloud-platform-projects.md#standard_google_cloud_projects).

To view your organization's default and standard Cloud projects in the Cloud console, obtain the `resourcemanager.projects.list` permission for your organization. To view standard and default projects separately, obtain `resourcemanager.folders.list` permission. To set view permissions for projects in your organization, see [Assign view permission for all Cloud projects in an organization](./assign-cloud-permissions.md#assign_view_permission_for_all_cloud_projects_in_an_organization).

To edit your organization's standard and default Cloud projects in the Cloud console, obtain the `resourcemanager.projects.update` permission for your organization. To set edit permissions for projects in your organization, see [Assign edit permission for all Cloud projects in an organization](./assign-cloud-permissions.md#assign_edit_permission_for_all_cloud_projects_in_an_organization).

## View or edit default Cloud projects

Default projects are in the `Organization root > system-gsuite > apps-script` folder in the Cloud resource hierarchy. Don't delete these folders. If you do, Apps Script cannot create default projects and won't execute scripts properly.

To view the `system-gsuite` and `apps-script` folders, obtain `resourcemanager.folders.list` permission. If you only have `resourcemanager.projects.list` permission, standard and default projects show up together in one list. Default project IDs start with `sys-`.

To view or edit the default projects in your organization, follow these steps:

1. Open the Cloud console at [console.cloud.google.com](https://console.cloud.google.com/).
2. Click Menu \> **IAM & Admin** \> **Manage Resources**.
3. Next to your organization, click Expand node .
4. Next to the `system-gsuite` folder, click Expand node .
5. Next to the `apps-script` folder, copy the ID.
6. Click **Filter** \> **Parent ID**.
7. Paste the Apps Script folder ID and press **Enter**.
8. Next to the project you want to view or edit, click More \> **Settings**. The project opens in the Cloud console, where you can modify it.

## View or edit standard Cloud projects

To view or edit the standard projects in your organization, follow these steps:

1. Open the Cloud console at [console.cloud.google.com](https://console.cloud.google.com/).
2. Click Menu \> **IAM & Admin** \> **Manage Resources**.
3. Next to your organization, click Expand node . The list of projects includes all standard Cloud projects whether or not they have Apps Script projects associated with them.
	- If you don't have `resourcemanager.folders.list` permission, default Cloud projects might appear in the same list as standard Cloud projects. To tell the difference, default project IDs start with `sys-`.
4. Next to the project you want to view or edit, click More \> **Settings**. The project opens in the Cloud console, where you can modify it.
