---
source: https://developers.google.com/workspace/add-ons/how-tos/testing-workspace-addons
root: workspace
fetched_at: 2026-04-23T15:23:00.385Z
---

# Test and debug Apps Script Google Workspace add-ons

## Page Summary

- Unpublished Google Workspace add-ons can be installed for testing and personal use directly from the Apps Script project.
- Users need editor access to the script project to install and test the unpublished add-on.
- Uninstalling an unpublished add-on removes it from all host applications and requires reinstallation for further use.
- Thorough testing is crucial, including card navigation, data handling, external service integrations, error management, and performance evaluation.

After you publish an add-on, users can install it through the host application or the [Google Workspace Marketplace](https://workspace.google.com/marketplace/). Before you publish, test the add-on within the host applications it extends.

This page describes how to install an add-on that's under development (an *unpublished* or *developer* add-on) for testing or personal use. You can also debug the add-on using the Apps Script [debugger and breakpoints](../../../apps-script/guides/support/troubleshooting.md#use-debugger).

## Prerequisites

- Have editor access to the script project.
- To let others test the add-on, grant them editor access to the project. See [Collaborating with Other Developers](../../../apps-script/guides/collaborating.md).

## Install an unpublished add-on

Install unpublished add-ons from the **Deployments** dialog.

To install an unpublished add-on for testing, follow these steps:

1. Open the script project in the Apps Script editor.
2. Select **Deploy > Test deployments**.
3. Select **Install**.
4. At the bottom, select **Done**.

To let other users test the add-on, share the project with their account (edit access required). Then, have the users follow the same steps.

After you install the add-on, it's immediately available in the host applications it extends. You might need to refresh the host application tab before the add-on appears. Authorize the add-on before you use it. If your project is already authorized, use [ScriptApp.invalidateAuth](../../../apps-script/reference/script/script-app.md#invalidateauth) to invalidate existing authorizations. This lets you test the [granular OAuth](../../../apps-script/concepts/scopes.md#handle-granular) feature.

## Uninstall an unpublished add-on

To uninstall an unpublished add-on, follow these steps:

1. Open the script project in the Apps Script editor.
2. Select **Deploy > Test deployments**.
3. Select **Uninstall**.
4. At the bottom, select **Done**.

These steps remove the deployment and the add-on no longer appears. You can reinstall the deployment at any time.

## Test best practices

When you test the add-on, follow the [Best practices](../guides/workspace-best-practices.md). Also, do the following:

1. Test card navigation flows in all host applications the add-on extends. Verify the behavior as the user moves between contexts and between non-contextual and contextual cards.
2. [Use example test data](../guides/workspace-best-practices.md#_write_tests_and_test_messages) to evaluate your add-on's behavior.
3. If your add-on connects to a third-party API, verify that the service is accessible. Ensure that the add-on handles [authorization and sign-in](../guides/connect-third-party-service.md) correctly.
4. Handle error conditions gracefully. [Use error cards](../guides/workspace-best-practices.md#_use_error_cards) where needed.
5. Monitor the performance of the add-on. If the add-on slows down after a code change, you might need to rework that feature.
