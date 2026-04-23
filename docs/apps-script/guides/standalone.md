---
source: https://developers.google.com/apps-script/guides/standalone
root: apps-script
fetched_at: 2026-04-23T15:18:26.583Z
---

# Standalone Scripts

## Page Summary

- Standalone scripts are not bound to specific Google Workspace files like Sheets or Docs and are found in Google Drive.
- You can easily create a standalone script by visiting `script.google.com` or through Google Drive.
- Functions within a standalone script can be executed directly from the script editor.
- Standalone scripts are often used as utility scripts or can be deployed as web apps or triggered automatically.
- For larger projects, consider alternative development environments instead of Apps Script standalone scripts.

A standalone script is any script that is not [bound to a Google Sheets, Google Docs, Google Slides, or Google Forms file](./bound.md). These scripts appear among your files in Google Drive.

## Create a standalone script

To create a standalone script, visit [`script.google.com`](https://script.google.com/) and click **New project**.

You can also create standalone scripts from Google Drive. Go to [Google Drive](https://drive.google.com/) and click **New > More > Google Apps Script**.

## Run a standalone script

From the script editor, select the name of the function to execute and click **Run**.

## Use a standalone script

Standalone scripts are often utility scripts, such as a script that [searches Drive for files named "untitled"](../reference/drive/drive-app.md#searchFiles(String)) so you can delete them.

A standalone script can also be deployed as a [web app](./web.md) or set up to run automatically from an [installable trigger](./triggers/installable.md).

Apps Script standalone scripts are suitable for lightweight add-on development for you, your team, or your organization. For larger projects, consider building a Google Workspace add-on on a [different runtime](../../workspace/add-ons/guides/alternate-runtimes.md) environment.
