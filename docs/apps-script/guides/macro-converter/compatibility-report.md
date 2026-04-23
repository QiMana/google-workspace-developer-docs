---
source: https://developers.google.com/apps-script/guides/macro-converter/compatibility-report
root: apps-script
fetched_at: 2026-04-23T15:18:24.044Z
---

# Determine if VBA macros are compatible

## Page Summary

- The Macro Converter's compatibility report helps determine if an Excel file with VBA macros can be converted to Apps Script as-is or requires adjustments.
- The compatibility report assigns statuses like "Supported exactly," "Supported with workarounds," or "Needs more investigation" to files and APIs based on their equivalence in Apps Script.
- Generating a report involves selecting Excel files in Google Drive, running the Macro Converter add-on, and viewing the generated report which provides a summary and detailed analysis.
- The report details help determine the next steps, with "Supported exactly" files ready for conversion, "Supported with workarounds" files requiring code adjustments, and "Needs more investigation" files needing manual review to determine convertibility and necessary code replacements.

An Excel file with Visual Basic for Applications (VBA) macros is considered compatible if all APIs used in the macros have a direct equivalent in Apps Script. If your macros aren't fully compatible, you might be able to apply workarounds or adjust the code to make them work with Apps Script.

Use the Macro Converter's compatibility report to determine if you can automatically convert your files as-is or if you need to make adjustments to your code.

When you generate a compatibility report, one of the following statuses is applied to each of your files and APIs:

| Status | Definition |
| --- | --- |
| **Supported exactly** | These files contain APIs that all have direct equivalents in Apps Script. |
| **Supported with workarounds** | These files contain at least one API that can be supported with a workaround. |
| **Needs more investigation** | These files contain at least one API that you need to review to determine how to proceed. For instance, there might not be an equivalent API, or the Macro Converter might not have determined the API in use. |

## Generate a compatibility report

1. On your computer, open [Google Drive](https://drive.google.com/drive/my-drive).
2. On the right side panel, click the Macro Converter Google Workspace add-on ![Icon representing the Macro Converter add-on](https://developers.google.com/static/apps-script/images/converter-icon.png). If you don't see the side panel, at the bottom right, click Show side panel .
3. Click **Add files and folders**. The Macro Converter only recognizes Excel files.
4. Choose the files or folders you want to analyze and click **Select**. Select fewer than 2,000 files at a time.
5. To change where your compatibility report is saved, click Change destination folder , and select the folder you want. Otherwise, it's saved in your MyDrive folder.
6. Click **Generate report**.
7. When the analysis completes, click **View report**.

## Review the compatibility report

Use the details in the compatibility report to help you decide how to proceed with your file conversion. Your report includes the following sections:

- **Summary**: This sheet gives an aggregated analysis of the compatibility of all submitted files and their APIs.
- **Files - compatibility**: This sheet lists every file submitted to the Macro Converter with the compatibility status and details of each file.
- **Files - detailed analysis**: This sheet gives more information about the APIs within a file and what actions you can take to successfully convert each API. First, from the top dropdown menu, select a file. Then, from the bottom drop-down menu, select a status.

If multiple files have the same name, next to the file names, use the unique identifiers to tell the difference between them. Open the files in Drive and look for the unique identifiers in the URLs: `https://drive.google.com/file/d/<file_identifier>/view`.

You can also review the report on an API-by-API basis using the sheets called **APIs to investigate** and **APIs with workarounds**.

## Determine how to proceed

Here's what we recommend for each status:

| Status | Recommendation |
| --- | --- |
| **Supported exactly** | The same logic from your VBA APIs is replicable in Apps Script. [Proceed with the conversion](https://developers.google.com/apps-script/guides/macro-converter/convert-files). |
| **Supported with workarounds** | You need to write code to replace at least one VBA API with the equivalent Apps Script API. In general, you can proceed with the conversion.  You can manually replace the VBA APIs marked as *Supported with workarounds* either before or after you convert the file. We recommend that you [make your changes beforehand](https://developers.google.com/apps-script/guides/macro-converter/convert-files#modify_incompatible_vba_apis). |
| **Needs more investigation** | At least one API can't be converted. Depending on the importance of that API in your code, you might not be able to convert the file. Someone who understands the original VBA code should do the final evaluation.  If you decide to convert your file, you need to write code to replace at least one VBA API with Apps Script. Manually replace the VBA APIs marked as *Needs investigation* either before or after you convert the file. We recommend that you [make your changes beforehand](https://developers.google.com/apps-script/guides/macro-converter/convert-files#modify_incompatible_vba_apis). |

After you assess your compatibility report, see [Convert VBA macros to Apps Script](https://developers.google.com/apps-script/guides/macro-converter/convert-files).

## Related articles

- [Macro Converter add-on overview](https://developers.google.com/apps-script/guides/macro-converter/overview)
- [Convert VBA macros to Apps Script](https://developers.google.com/apps-script/guides/macro-converter/convert-files)
- [Fix errors in your converted code](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)
- [Address common issues](https://developers.google.com/apps-script/guides/macro-converter/address-conversion-issues)
- [Watch Macro Converter tutorials](https://developers.google.com/apps-script/guides/macro-converter/tutorials)
- [List of compatible VBA APIs](https://developers.google.com/apps-script/guides/macro-converter/compatible-vba-apis)
