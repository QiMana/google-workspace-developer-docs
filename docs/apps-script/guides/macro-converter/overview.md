---
source: https://developers.google.com/apps-script/guides/macro-converter/overview
root: apps-script
fetched_at: 2026-04-23T15:18:23.718Z
---

# Macro Converter add-on overview

## Page Summary

- The Macro Converter add-on helps convert Excel files with VBA code to Google Sheets files and Apps Script.
- To use the Macro Converter, you need a Google Workspace Enterprise Plus or Education Plus account and some proficiency with scripting languages.
- The conversion process involves generating a compatibility report, updating VBA code based on the report, and then converting and fixing errors in the resulting Apps Script code.

The Macro Converter is an add-on that makes it easier to convert Excel files that have Visual Basic for Applications (VBA) code to Sheets files and Apps Script. Use the Macro Converter add-on to determine the compatibility of your files and automatically convert them.

Only use the Macro Converter add-on with Excel files. We support file formats from Excel 97 and later.

## Before you begin

To use the Macro Converter:

- You must have a Google Workspace Enterprise Plus account or a Google Workspace for Education Plus account.
- You should have some proficiency with Excel or Sheets and scripting languages (VBA or Apps Script).
- You should be able to read and understand basic scripts.

## Install the Macro Converter add-on

1. On your computer, go to the [Macro Converter add-on on Google Workspace Marketplace](https://gsuite.google.com/marketplace/app/converter_alpha/383201976440).
2. At the top right, click **Install** > **Continue** > **Allow**.
3. Installation might take several seconds. Once the add-on is installed, click **Done**.

If you're a Google Workspace administrator, install the Macro Converter add-on in your organization's domain and choose who can use the app. See [Install Google Workspace Marketplace apps in your domain](https://support.google.com/a/answer/172482).

Once installed, find the Macro Converter add-on in [Google Drive](https://drive.google.com/drive/my-drive), on the right side panel. If you don't see the side panel, at the bottom right, click Show side panel .

## How to use the Macro Converter

1. **Generate a compatibility report for the files you want to convert**. See [Determine if VBA macros are compatible with Apps Script](https://developers.google.com/apps-script/guides/macro-converter/compatibility-report).
2. **Update your VBA code using the information from your compatibility report**.
	1. If your code is fully compatible, you might not need to make changes.
		2. If your VBA code has APIs that won't convert to Apps Script code, the report offers workarounds in Apps Script. Implement the Apps Script workarounds after you convert your files, but if you're more familiar with VBA you might want to create and implement VBA workarounds before you convert your files.
3. **After you make changes to your VBA code, run the compatibility report again**. This step helps confirm the increased compatibility of your files and flags any additional updates that should be made.
4. **Repeat steps 2 and 3 as needed**. These steps maximize the compatibility of your files to reduce the amount of work needed after you convert them. You can proceed to the next step if you plan to finish applying your workarounds after you convert your files.
5. [**Convert your files**](https://developers.google.com/apps-script/guides/macro-converter/convert-files).
6. [**Fix errors**](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors). You might need to make adjustments to your new Apps Script code to make sure your code works as intended.
7. [**Address common issues**](https://developers.google.com/apps-script/guides/macro-converter/address-conversion-issues). You might need to manually create items, like VBA UserForms, in Apps Script.

## Related articles

- [Determine if VBA macros are compatible](https://developers.google.com/apps-script/guides/macro-converter/compatibility-report)
- [Convert VBA macros to Apps Script](https://developers.google.com/apps-script/guides/macro-converter/convert-files)
- [Fix errors in your converted code](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)
- [Address common issues](https://developers.google.com/apps-script/guides/macro-converter/address-conversion-issues)
- [Watch Macro Converter tutorials](https://developers.google.com/apps-script/guides/macro-converter/tutorials)
- [List of compatible VBA APIs](https://developers.google.com/apps-script/guides/macro-converter/compatible-vba-apis)
