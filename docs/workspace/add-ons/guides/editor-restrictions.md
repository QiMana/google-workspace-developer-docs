---
source: https://developers.google.com/workspace/add-ons/guides/editor-restrictions
root: workspace
fetched_at: 2026-04-23T15:22:56.902Z
---

# Restrictions

## Page Summary

- Google Workspace add-ons enhance existing features but cannot modify or restrict core functionalities or the sharing model.
- Add-ons cannot directly charge users for installation or contain ads, though external payment integrations are permitted.
- While add-ons can respond to specific triggers, they generally cannot detect user actions outside the add-on's scope.
- Editor add-ons are limited to desktop environments and utilize HTML/CSS for UI design instead of the Card service.

There are a few restrictions on what add-ons can do. Improve your users' overall experience by avoiding these pitfalls.

## General restrictions

The following restrictions apply to all add-ons. Don't do the following:

### Change features in Google Workspace

The add-ons framework is designed to enhance Google Workspace applications—not to add limits. Consequently, you can't alter existing features or lock down the Google Workspace document sharing model.

### Charge users to install

We don't provide a way to charge users for installing add-ons, and add-ons [can't include ads](../../../apps-script/terms.md). However, you can roll your own payment system or call into an existing billing database. Your add-on can connect to non-Google services that bill users.

### Detect many events

Except for [certain triggers](../concepts/workspace-triggers.md), add-ons can't tell what a user does outside the add-on itself. For example, you can't detect when the user clicks on the host application toolbar. It is possible to poll for changes in a file's contents from a sidebar's client-side code, although you'll always have a slight delay.

## Editor add-ons

The following restrictions only apply to Editor add-ons. Don't do the following:

### Define UIs with the Card service

Editor add-ons can currently only define a UI using HTML and CSS, not the [Card service](../../../apps-script/reference/card-service/card-service.md).

### Use Editor add-ons on mobile

Editor add-ons are only available on desktop clients, not the mobile apps for the editors.
