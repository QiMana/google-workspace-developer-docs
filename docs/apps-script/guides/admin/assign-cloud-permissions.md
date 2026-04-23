---
source: https://developers.google.com/apps-script/guides/admin/assign-cloud-permissions
root: apps-script
fetched_at: 2026-04-23T15:18:19.541Z
---

# Assign permissions for Google Cloud projects

## Page Summary

- This guide explains how to assign predefined roles to view and manage all Google Cloud projects in an organization.
- To assign permissions, you must be signed in to Google Workspace as a super administrator.
- Steps are provided for assigning view, edit, and delete permissions for all Cloud projects in an organization using the Cloud console.
- Specific Resource Manager roles like Folder Viewer, Project Mover, and Project Deleter are used to grant different levels of access.

To manage add-on projects across your organization, view and manage their associated Google Cloud projects. This guide describes how to assign predefined roles that allow the role to view and manage all Google Cloud projects in an organization. To learn more about available permissions in Google Cloud, refer to [IAM basic and predefined roles reference](https://cloud.google.com/iam/docs/understanding-roles).

## Prerequisites

To assign permissions in Google Cloud, sign in to Google Workspace as a [super administrator](https://support.google.com/a/answer/2405986#super_admin).

## Assign view permission for all Cloud projects in an organization

To give someone view permission for all Cloud projects in your organization as a super administrator, follow these steps:

1. Open the Cloud console at [console.cloud.google.com](https://console.cloud.google.com/).
2. Click Menu \> **IAM & Admin** \> **Manage Resources**.
3. Select your organization.
4. At the right, click **Add Principal**.
5. In **New principals**, add the users or groups to let view projects.
6. In **Select a role**, in the first list, select **Resource Manager**. In the second list, select **Folder Viewer**.
7. Click **Save**.

## Assign edit permission for all Cloud projects in an organization

To give someone edit permission for all Cloud projects in an organization as a super administrator, follow these steps:

1. Open the Cloud console at [console.cloud.google.com](https://console.cloud.google.com/).
2. Click Menu \> **IAM & Admin** \> **Manage Resources**.
3. Select your organization.
4. At the right, click **Add Principal**.
5. In **New principals**, add the users or groups to let edit projects.
6. In **Select a role**, in the first list, select **Resource Manager**. In the second list, select **Folder Viewer**.
7. Click **Add Another Role**.
8. In **Select a role**, in the first list, select **Resource Manager**. In the second list, select **Project Mover**.
9. Optionally, to allow someone to turn APIs on or off in Cloud projects:
	1. Click **Add Another Role**.
		2. In **Select a role**, in the first list select **Service Usage**. In the second list, select **Service Usage Admin**.
10. Click **Save**.

## Assign delete permission for all Cloud projects in an organization

To give someone delete permission for all Cloud projects in an organization as a super administrator, follow these steps:

1. Open the Google Cloud console at [console.cloud.google.com](https://console.cloud.google.com/).
2. Click Menu \> **IAM & Admin** \> **Manage Resources**.
3. Select your organization.
4. At the right, click **Add Principal**.
5. In **New principals**, add the users or groups to let delete projects.
6. In **Select a role**, in the first list, select **Resource Manager**. In the second list, select **Folder Viewer**.
7. Click **Add Another Role**.
8. In **Select a role**, in the first list, select **Resource Manager**. In the second list, select **Project Deleter**.
9. Click **Save**.
