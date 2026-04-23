---
source: https://developers.google.com/apps-script/guides/macro-converter/convert-files
root: apps-script
fetched_at: 2026-04-23T15:18:23.560Z
---

# Convert VBA macros to Apps Script

## Page Summary

- Update incompatible APIs in your VBA code before converting files, especially for those with "Supported with workaround" or "Needs investigation" status.
- For APIs with the status "Needs investigation" and containing specific critical operations like connecting to a database, converting the files might not be recommended.
- Use the Macro Converter add-on in Google Drive to convert your Excel files to Apps Script files.
- After converting, test your Apps Script code, including triggers, and review any generated ReadMe files for conversion issues.
- If you encounter errors or unexpected results during testing, refer to the provided resources to fix the issues and retest your files.

Use the Macro Converter add-on to automatically convert your Excel files with Visual Basic for Applications (VBA) code to Sheets and Apps Script.

## Before you begin

You might want to update incompatible APIs in your VBA code before you convert your files. For files that have the status *Supported exactly*, you can proceed to [Step 1: Convert your files](https://developers.google.com/apps-script/guides/macro-converter/convert-files#step_1_convert_your_files).

### Modify incompatible VBA APIs

For files that have the status *Supported with workaround* or *Needs investigation*, you can apply your workarounds and fixes after the conversion in Apps Script, but we recommend that you modify the VBA code that you're familiar with first, before you convert your files.

For each API marked as *Supported with workaround* or *Needs investigation* in the compatibility report, we recommend the following:

- If the function performed by the API isn't critical to your VBA macro, remove it from your VBA code. If the function is critical, change your code to implement a similar behavior using [supported VBA APIs](https://developers.google.com/apps-script/guides/macro-converter/compatible-vba-apis).
- For *Supported with workaround* APIs, if you can't find a supported VBA alternative, leave your VBA code as is. After conversion, look for recommended workarounds in the Apps Script code comments.
- If the issue is coming from an [unimplemented language construct](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors#unimplemented_language_constructs), rewrite your code to avoid using those constructs.
- For APIs with the status *Needs investigation*, check if your code contains any of the following APIs:
	- `Adodb.connection`
		- `CreateObject`: This API is often used to connect to database and enterprise resource planning software.
		- `Shell.execute`
		- `OleObject`
	If your macros use these APIs, reconsider converting those files. These APIs typically manage critical functions like database connectivity or local system access that Apps Script cannot easily replicate.

## Step 1: Convert your files

1. On your computer, open [Google Drive](https://drive.google.com/drive/my-drive).
2. On the right side panel, click the Macro Converter add-on ![Icon for the Macro Converter](https://developers.google.com/static/apps-script/images/converter-icon.png). If you don't see the side panel, at the bottom right, click Show side panel .
3. Click **Add files and folders**. The Macro Converter only recognizes Excel files.
4. Choose the files or folders you want to convert and click **Select**. Select fewer than 2,000 files at a time.
5. To change where your converted files are saved, click Change destination folder , and select the folder you want. Otherwise, the files are saved in your MyDrive folder.
6. Click **Convert**.
7. When the conversion completes, click **View results**.

## Step 2: Test your converted files

After you convert your files, test them to make sure they function as expected.

### Run your Apps Script code

After you convert your files, test the Apps Script functions. Test the converted files with the data you normally use with your Excel files. If possible, compare the output of your converted Google Sheets files with the output of your original Excel files.

### Test your triggers

If your files contain triggers like `onOpen()`, `onEdit()`, or `onClick()`, test your triggers, too. Some VBA triggers won't convert automatically and need to be addressed in Apps Script. See [Address common issues](https://developers.google.com/apps-script/guides/macro-converter/address-conversion-issues).

### Review ReadMe files

If a ReadMe file was generated with your converted file, review the conversion issues listed within the ReadMe file.

- If the issues might be problematic for cases you haven't tested, apply the recommended changes to your code.
- If you've tested all possible scenarios and everything works as intended, you probably don't need to make changes.

## Step 3: Fix errors

If you run into errors while testing your files, see [Fix errors in your converted code](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors).

If the code runs without errors, but the result isn't what you expected, open the file's ReadMe file. Review each section to help determine what's causing the issue and apply the recommended fix.

After you fix errors, test the file again to make sure everything works as intended.

## Related articles

- [Macro Converter add-on overview](https://developers.google.com/apps-script/guides/macro-converter/overview)
- [Determine if VBA macros are compatible](https://developers.google.com/apps-script/guides/macro-converter/compatibility-report)
- [Fix errors in your converted code](https://developers.google.com/apps-script/guides/macro-converter/fix-conversion-errors)
- [Address common issues](https://developers.google.com/apps-script/guides/macro-converter/address-conversion-issues)
- [Watch Macro Converter tutorials](https://developers.google.com/apps-script/guides/macro-converter/tutorials)
- [List of compatible VBA APIs](https://developers.google.com/apps-script/guides/macro-converter/compatible-vba-apis)
