---
source: https://developers.google.com/workspace/add-ons/guides/editor-best-practices
root: workspace
fetched_at: 2026-04-23T15:22:56.485Z
---

# Best practices

## Page Summary

- Enhance user experience by adhering to add-on design guidelines that focus on ownership, functionality, and security.
- Design add-ons to extend Google Workspace capabilities, rather than duplicating existing features, to ensure successful publication.
- Prioritize security by minimizing the scope of access your add-on requires, requesting only necessary permissions.
- Optimize performance by limiting reliance on external libraries and, if applicable to Editor add-ons, strategically organizing code within dedicated script files.
- For Editor add-ons, thorough testing across various authorization modes is crucial to ensure functionality and user experience.

Improve your users' overall experience by following these guides for add-on design.

## General best practices

You are encouraged to use the following best practices for all add-ons you develop.

### Determine add-on ownership before starting

Add-ons are defined by Apps Script projects, which must be owned by a specific account or else placed in a [shared drive](https://developers.google.com/workspace/drive/v3/web/about-shareddrives). Before coding an add-on, determine what account should own the project, and what account acts as its publisher. Also determine what accounts are to act as collaborators, and make sure those accounts have access to the script project and its associated [Google Cloud project](https://developers.google.com/apps-script/guides/cloud-platform-projects).

### Extend Google Workspace, don't replicate it

Add-ons are meant to provide new capabilities to the Google Workspace applications they extend, or else automate complex tasks. Add-ons that merely replicate functionality already within the application or ones that don't make significant improvements to a workflow aren't likely to pass [add-on review](https://developers.google.com/workspace/marketplace/about-app-review) for publication.

### Keep the scopes narrow

When [defining your scopes explicitly](https://developers.google.com/apps-script/concepts/scopes#set-explicit), always choose the least-permissive set of scopes possible. For example, don't have your add-on request full access to the user's Calendar with the `https://www.googleapis.com/auth/calendar` scope if it only needs read access. For read-only access, use the `https://www.googleapis.com/auth/calendar.readonly` scope.

### Avoid relying too much on libraries

Using Apps Script [libraries](https://developers.google.com/apps-script/guides/libraries) can cause your add-on to [run more slowly](https://developers.google.com/apps-script/guides/support/best-practices#avoid_libraries_in_ui-heavy_scripts) than it would if all the Apps Script code were contained within a single script project. Although Apps Script libraries work in add-ons, you might run into performance reductions if you use them. Avoid including unnecessary libraries in your project, and consider ways to reduce your add-on's reliance on them.

The latency described above only applies to Apps Script projects being used as server-side libraries. You can use client-side JavaScript libraries like jQuery freely without encountering this latency.

## Editor add-on best practices

The following best practices only apply to Editor add-on.

### Place interface HTML and client-side JavaScript in their own script files

You can create multiple script files in an Apps Script project. It's easier to manage a complex add-on if you place the HTML and JavaScript that defines the add-on sidebars and dialogs in script files dedicated to them.

### Test thoroughly in different authorization modes

When [testing your add-on](https://developers.google.com/workspace/add-ons/how-tos/testing-editor-addons), be sure to try configurations that have different files and different [authorization states](https://developers.google.com/workspace/add-ons/concepts/editor-auth-lifecycle#states).
