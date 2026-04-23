---
source: https://developers.google.com/apps-script/quickstart/library
root: apps-script
fetched_at: 2026-04-23T15:18:34.943Z
---

# Library quickstart

## Page Summary

- Learn how to build and use an Apps Script library to remove duplicate rows in Google Sheets.
- Set up the script by creating a new Apps Script project, adding the provided code, and deploying it as a library.
- Run the script in a Google Sheet by adding the library to your project, calling the `removeDuplicates` function, and executing the script.
- Understand the code that retrieves data from the sheet, identifies unique rows, clears the sheet content, and inserts the unique data back into the sheet.
- Modify the script to remove duplicates based on specific columns instead of entire rows.

Build an [Google Apps Script library](https://developers.google.com/apps-script/guides/libraries) that you can use to remove duplicate rows in spreadsheet data.

## Objectives

- Set up the script.
- Run the script.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

To build the library, do the following:

1. Sign in to your Google Account.
2. To open the script editor, go to [script.google.com](https://script.google.com/home).
3. At the top left, click **New project**.
4. Delete any code in the script editor and paste in the following code.
	```
	/**
	 * Removes duplicate rows from the current sheet.
	 */
	function removeDuplicates() {
	  const sheet = SpreadsheetApp.getActiveSheet();
	  const data = sheet.getDataRange().getValues();
	  const uniqueData = {};
	  for (const row of data) {
	    const key = row.join();
	    uniqueData[key] = uniqueData[key] || row;
	  }
	  sheet.clearContents();
	  const newData = Object.values(uniqueData);
	  sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
	}
	```
5. Click **Save** ![The icon to save the project](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/save/default/24px.svg).
6. At the top left, click **Untitled project**.
7. Name your script **Remove duplicate rows** and click **Rename**.
8. Click **Deploy** \> **New deployment**.
9. Next to **Select type** click **Enable deployment types** ![The icon for enable deployment types](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg) \> **Library**.
10. Enter a description of the library, such as **Remove duplicate rows**. Anyone with access to the library can view this description.
11. Click **Deploy**.
12. At the left, click **Project settings** ![The icon for project settings](https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/settings/default/24px.svg).
13. Under **IDs**, copy the script ID for use in a later step.

## Run the script

To use a library, you must have at least view permissions for its Apps Script project. Since you created the library, you have the required permissions to use it. If you want to let others use the library, give them view permission for the Apps Script project.

To use the library, do the following:

1. Open a Google Sheets spreadsheet that has data with duplicate rows. To use a sample spreadsheet, [make a copy of the **Sample duplicate rows** spreadsheet](https://docs.google.com/spreadsheets/d/1_Tcb0kokQIYCEz_nWnxUHZp8nwTysjjxucMmVZ0DeSg/copy?usp=sharing).
2. Click **Extensions** \> **Apps Script**.
3. Next to **Libraries**, click **Add a library** .
4. In the **Script ID** section, paste the script ID from the library Apps Script project you copied in the previous section.
5. Click **Look up**.
6. In the **Version** section, select **1**.
7. Click **Add**.
8. Delete any code in the script editor and paste in the following code.
	```
	function runLibrary() {
	 Removeduplicaterows.removeDuplicates();
	}
	```
9. In the function dropdown, select **runLibrary**.
10. Click **Run**.
11. Return to the spreadsheet to view the updated data without duplicate rows.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View the source code

First, the script makes a single call to the spreadsheet to retrieve all the data. You can choose to read the sheet row by row, but JavaScript operations are considerably faster than talking to other services like Spreadsheet. The fewer calls you make, the faster it goes. This is important because each script execution has a maximum run time of 6 minutes.

```
const sheet = SpreadsheetApp.getActiveSheet();
const data = sheet.getDataRange().getValues();
```

The variable `data` is a JavaScript 2-dimensional array that contains all the values in the sheet. `newData` is an empty array where the script puts all the non-duplicate rows.

```
const newData = Object.values(uniqueData);
```

The first `for` loop iterates over each row in the `data` 2-dimensional array. For each row, the second loop tests if another row with matching data already exists in the `newData` array. If it's not a duplicate, the row is pushed into the `newData` array.

```
uniqueData[key] = uniqueData[key] || row;
```

Finally, the script deletes the existing content of the sheet and inserts the content of the `newData` array.

```
sheet.clearContents();
const newData = Object.values(uniqueData);
sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
```

## Modifications

You can edit the library as much as you'd like to fit your needs. The following section contains an optional modification.

#### Remove rows with matching data in some columns

Instead of removing rows that match entirely, you might want to remove rows with matching data in just one or two of the columns. To do that, you can change the conditional statement.

In the sample code, update the following line:

```
if(row.join() == newData[j].join()){
  duplicate = true;
}
```

Replace the line with the following code:

```
if(row[0] == newData[j][0] && row[1] == newData[j][1]){
  duplicate = true;
}
```

The preceding conditional statement finds duplicates each time two rows have the same data in the first and second columns of the sheet.

## Contributors

This sample was created by Romain Vialard, a Google Developer Expert. Follow Romain on Twitter [@romain\_vialard](https://twitter.com/romain_vialard).

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Libraries](https://developers.google.com/apps-script/guides/libraries)
- [Create and manage deployments](https://developers.google.com/apps-script/concepts/deployments)
