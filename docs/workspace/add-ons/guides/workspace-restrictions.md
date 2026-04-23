---
source: https://developers.google.com/workspace/add-ons/guides/workspace-restrictions
root: workspace
fetched_at: 2026-04-23T15:22:58.074Z
---

# Restrictions

## Page Summary

- Google Workspace add-ons enhance, but do not fundamentally change, existing Google Workspace features.
- Add-ons cannot directly charge users for installation or include ads but can integrate with external billing systems.
- Add-on functionality is limited in terms of event detection and contextual triggering within certain Google Workspace apps.
- Google Workspace add-ons use a card-based interface system, rather than traditional HTML, CSS, or client-side scripting.
- While add-ons are largely desktop-focused, some contextual triggering is supported within the Gmail mobile app.

There are a few restrictions on what add-ons can do. Improve your users' overall experience by avoiding these pitfalls.

## General restrictions

The following restrictions apply to all add-ons. Don't do the following:

### Change features in Google Workspace

The add-ons framework is designed to enhance Google Workspace applications—not to add limits. Consequently, you can't alter existing features or lock down the Google Workspace document sharing model.

### Charge users to install

We don't provide a way to charge users for installing add-ons, and add-ons [can't include ads](https://developers.google.com/apps-script/terms). However, you can roll your own payment system or call into an existing billing database. Your add-on can connect to non-Google services that bill users.

### Detect many events

Except for [certain triggers](https://developers.google.com/workspace/add-ons/concepts/workspace-triggers), add-ons can't tell what a user does outside the add-on itself. For example, you can't detect when the user clicks on the host application toolbar. It is possible to poll for changes in a file's contents from a sidebar's client-side code, although you'll always have a slight delay.

## Google Workspace add-ons

The following restrictions only apply to Google Workspace add-ons and the use of the [Card service](https://developers.google.com/apps-script/reference/card-service/card-service). Don't do the following:

### Extend all Google Workspace apps

Google Workspace add-ons can only extend Gmail, Calendar, Drive, Meet, Docs, Sheets, and Slides. Eventually Google Workspace add-ons will be able to extend other Google Workspace applications.

### Document context in editors

Google Workspace add-ons don't yet support the use of document context in editors. That is, you can't use methods such as [`SpreadsheetApp.getActiveSpreadsheet()`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getactivespreadsheet) to acquire the current document.

### Use HTML/CSS or client-side scripting

Google Workspace add-ons must use card-based interfaces. The HTML/CSS interfaces supported by Editor add-ons can't be used. Google Workspace add-ons use a [widget-based](https://developers.google.com/workspace/add-ons/concepts/widgets) approach to building user interfaces. This lets the add-on work well on desktop and mobile platforms without requiring you to build an interface for each.

### Full mobile support

For the time being, Google Workspace add-ons function on desktop web clients. Contextual triggering (that is, Gmail message reading) is also supported from within the Gmail mobile app. Non-contextual homepages are not yet available from the Gmail, Calendar, or Drive mobile apps. Google Workspace add-ons are not available from mobile web browsers.

### Use Apps Script triggers

You can't create or use Apps Script [simple triggers](https://developers.google.com/apps-script/guides/triggers) in a Google Workspace add-on.

### Use SVG Images

You can't currently use SVG images with [Card service](https://developers.google.com/apps-script/reference/card-service/card-service) cards and widgets.

### Have more than 100 widgets

For performance reasons, you can't add more than 100 widgets or 100 card sections to a card.
