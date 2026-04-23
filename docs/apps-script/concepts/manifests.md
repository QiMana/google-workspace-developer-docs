---
source: https://developers.google.com/apps-script/concepts/manifests
root: apps-script
fetched_at: 2026-04-23T15:18:14.633Z
---

# Manifests

## Page Summary

- An Apps Script project manifest is a JSON file containing basic project information for the script to run successfully.
- Apps Script usually creates and updates the manifest automatically, so direct editing is often unnecessary.
- You can make the hidden manifest file visible in the Apps Script editor by selecting "Show 'appsscript.json' manifest file in editor" in Project Settings.
- Exercise caution when editing the manifest as incorrect changes can affect script operation or prevent deployments and publication.

A Google Apps Script project *manifest* is a special JSON file that specifies basic project information that Apps Script needs to run the script successfully.

Apps Script automatically creates and updates the project manifest as you create your script project and make changes in the Apps Script editor. In most cases, you don't need to view or edit the manifest directly.

The manifest file structure and its JSON fields are described in the [Manifest structure](https://developers.google.com/apps-script/manifest) reference guide.

## Editing a manifest

The Apps Script editor hides manifest files by default in order to protect your Apps Script project settings. Follow these steps to make a hidden project manifest visible in the Apps Script editor:

1. Open the script project in the Apps Script editor.
2. Click **Project Settings** .
3. Select the **Show "appsscript.json" manifest file in editor** checkbox.

The manifest file appears as a project file named `appsscript.json`. You can edit this file directly in the editor and save any changes you make. To hide the manifest file after you make your changes, repeat the previous steps and clear the **Show "appsscript.json" manifest file in editor** checkbox.
