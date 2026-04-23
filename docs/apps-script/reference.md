---
source: https://developers.google.com/apps-script/reference
root: apps-script
fetched_at: 2026-04-23T15:18:33.266Z
---

# Reference overview

## Page Summary

- The reference documentation details Apps Script services and script project resources.
- Apps Script services allow your script to access data on Google and external systems, including Google services for Google Workspace apps and utility services.
- Advanced services provide access to Google product APIs as thin wrappers.
- Script project resources offer information about your project's manifest, triggers, and quotas to help it run successfully.
- You can use the Apps Script API resources to programmatically manage Apps Script projects.

The reference documentation provided in this section describes the various Google Apps Script services and project resources.

## Apps Script services

Apps Script services provide ways for your script to access data on Google and external systems. These services are built into the Apps Script environment so you don't have to import them or implement authorization controls yourself. Services are expressed as global objects with associated methods, similar to JavaScript objects such as `Math`.

Apps Script includes the following services:

- **Google services** are services that let you access the data of Google Workspace apps, such as Drive, Gmail, and Sheets, and other Google apps such as Maps and Translate.
- **Utility services** are services that aren't connected to a particular Google product. They let you do things like log information, create HTML, compress data, and more.

### Advanced services

Google offers some services as *advanced services*. An advanced service is an Apps Script service that lets you access Google product APIs, including, but not limited to, the Google Workspace product APIs. An advanced Google service is a thin wrapper around an API, and isn't an API itself. For more details, see [Advanced Google services](https://developers.google.com/apps-script/guides/services/advanced).

## Script project resources

Script project resources provide information about your Apps Script project to help it run successfully. Project resources include information about manifest configuration, automation triggers, and quotas.

## Google Workspace add-on resources

Refer to add-on resources if you're building a [Google Workspace add-on](https://developers.google.com/workspace/add-ons/concepts/types#google-workspace-add-ons).

## Apps Script API

Use these resources if you want to programmatically create, modify, or deploy Apps Script projects using the [Apps Script API](https://developers.google.com/apps-script/api/concepts).
