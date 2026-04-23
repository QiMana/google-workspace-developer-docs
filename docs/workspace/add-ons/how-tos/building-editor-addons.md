---
source: https://developers.google.com/workspace/add-ons/how-tos/building-editor-addons
root: workspace
fetched_at: 2026-04-23T15:22:58.116Z
---

# Build Editor add-ons

## Page Summary

- Editor add-ons are built using Apps Script, requiring a standalone Apps Script project and code for the add-on's functionality and user interface.
- Thorough testing is crucial before publishing using a dedicated test configuration and sample documents, ensuring the add-on functions as intended.
- Collaboration involves shared ownership and access, recommending the use of shared drives and adding collaborators to the Cloud Platform project for sustained accessibility.
- Publishing makes the add-on accessible to others, either publicly or within a domain, involving a review process for public listings on the Google Workspace Marketplace.
- The add-on's appearance and behavior are defined using Apps Script's HTML service, allowing for custom menus, dialogs, and sidebars constructed with HTML and CSS.

Before building your Editor add-on, review the [Apps Script quotas and limitations](../../../apps-script/guides/services/quotas.md) to align your project design with these guidelines. Familiarize yourself with these limits early to prevent issues. Apps Script is ideal for lightweight add-on development for yourself, your team, or your organization. However, if you build a large-scale add-on that needs to handle many users, requires low latency, or demands full control over your infrastructure, consider a [different runtime](../guides/alternate-runtimes.md).

Follow these steps to build an Editor add-on:

1. Create an Apps Script project.
2. Code the add-on appearance and behavior using the Apps Script [HTML service](../../../apps-script/reference/html.md).
3. Test the add-on.
4. Publish the add-on.

## Create a script project

An Editor add-on is a [standalone](../../../apps-script/guides/standalone.md) Apps Script project. The standalone script guide describes how to [create new projects](../../../apps-script/guides/standalone.md#creating_a_standalone_script). Alternatively, [open a new script](https://script.google.com/create). The application places the project file (initially named `Untitled project`) in your root Drive folder.

### Collaboration

When you collaborate on an add-on, a single user account owns the project. When you publish the add-on, a single user account is the publisher. The publishing account must have edit access to the script project, but it doesn't need to be the project owner.

**Avoid losing access to code or settings if the owner of the project leaves your organization.**

To prevent losing access to code, use [shared drives](../../../apps-script/guides/collaborating.md#collaborating_with_shared_drives) when you collaborate. Placing your script file in a shared drive ensures that no single account is the sole owner.

Add collaborators to the [script project's Google Cloud (GCP)](../../../apps-script/guides/cloud-platform-projects.md#adding_additional_owners_to_a_standard_gcp_project). This ensures that your team can always access the add-on's Cloud settings.

## Code the add-on

After you create a script project, write code to define the add-on appearance and behavior. Use the Apps Script [HtmlService](../../../apps-script/reference/html.md) to construct the user interface— [dialogs and sidebars](../concepts/dialogs.md) —using conventional HTML and CSS. Editor add-ons can define custom [menu items](../concepts/menus.md).

As you code, refer to the [Editor add-on style guide](../guides/editor-style.md) to create a seamless user experience that extends the editor in a natural way. When building interfaces, use the [add-ons CSS package](../guides/css.md) and refer to the style guide for recommendations on text, menus, controls, branding, and accessibility. Also, understand and program for the different [authorization lifecycle states](../concepts/editor-auth-lifecycle.md) your add-on might encounter.

## Test the add-on

Test Editor add-ons before you publish them to ensure they behave as expected. Testing requires a [test configuration](./testing-editor-addons.md#create_a_test_configuration) and a testing document, spreadsheet, form, or presentation.

See [Test an Editor add-on](./testing-editor-addons.md).

## Publish the add-on

Publishing makes your add-on available to others—either publicly to all users, or privately to users in a specific domain. Before you publish, review the [publication overview](./publish-add-on-overview.md).

Editor add-ons are published to the [Google Workspace Marketplace](https://workspace.google.com/marketplace/). Publicly available add-ons require [app review](../../marketplace/about-app-review.md) before they are published.

See [Publishing an Editor add-on](./publish-add-on-overview.md).
