---
source: https://developers.google.com/workspace/classroom/add-ons/get-started/add-on-listing
root: workspace
fetched_at: 2026-04-23T15:25:40.845Z
---

# Add-on listing

Once published, users can find your add-on in the [Google Workspace Marketplace](https://workspace.google.com/marketplace?host=classroom). The add-on's entry in Marketplace is referred to as the **listing**.

## Listing fields

An add-on listing allows users to preview and install your add-on. You control the information and screenshots in the listing. You can provide titles and descriptions in multiple languages.

![gac-gwm-listing](https://developers.google.com/static/workspace/classroom/add-ons/images/gac_gwm_listing.png)

**Figure 1.** A Classroom add-on listing as viewed by a teacher.

A "Works with Classroom" label is automatically applied to your listing. See [Listing settings](https://developers.google.com/workspace/classroom/add-ons/developer-guides/project-configuration#workspace_marketplace_name-listing) to learn about configuration details for Classroom add-ons.

## Installation

An add-on must be *installed* before users can select it in the Classroom UI. Users can install the add-on by clicking the buttons at the top of the listing.

### Installation options

All add-ons can be installed by an administrator. You can optionally choose to also allow *individual* installation.

#### Individual installation

Individual installation adds the add-on to the user's own account only. This is the only installation type that teachers can perform. The installing user is prompted to consent to the add-on's access scopes.

Administrators can restrict individual installation to approved add-ons only by setting up a Google Workspace Marketplace allowlist. See [Individual installation](https://developers.google.com/workspace/classroom/add-ons/developer-guides/project-configuration#individual_installation) for more information about this user experience and configuration.

#### Administrator installation

Administrator installation adds the add-on to users in specific organizational units or all accounts in the domain. Only domain administrators can perform this type of installation. The administrator can consent to all access scopes on behalf of all users in the domain.

See [Installation settings](https://developers.google.com/workspace/classroom/add-ons/developer-guides/project-configuration#installation-settings) for configuration details.
