---
source: https://developers.google.com/apps-script/samples/custom-functions/calculate-driving-distance
root: apps-script
fetched_at: 2026-04-23T15:22:26.171Z
---

# Calculate driving distance & convert meters to miles

## Page Summary

- This solution calculates driving distances between two locations and converts them from meters to miles using custom functions and automation in a Google Sheet.
- The script utilizes Apps Script services like Spreadsheet, Base, Utilities, and Maps to achieve its functionality.
- Setting up the script involves copying a provided spreadsheet, preparing the sheet using a custom menu, and authorizing the script.
- Running the script requires entering custom formulas in cells to calculate distance and optionally generating step-by-step directions via a custom menu.

**Coding level**: Beginner  
**Duration**: 10 minutes  
**Project type**: [Custom function](https://developers.google.com/apps-script/guides/sheets/functions) and automation with a [custom menu](https://developers.google.com/apps-script/guides/menus)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

Using custom functions, you can calculate the driving distance between two locations and convert the distance from meters to miles. An additional automation provides a custom menu that lets you add step-by-step directions from the start address to the end address in a new sheet.

![Google Sheet displaying calculated driving distances and step-by-step directions.](https://developers.google.com/static/apps-script/samples/images/calculate-driving-distance.png)

![](https://developers.google.com/static/apps-script/samples/images/calculate-driving-distance.png)

### How it works

The script uses two custom functions and an automation:

- The `drivingDistance(origin, destination)` function uses the Maps service to calculate the driving directions between two locations and return the distance between the two addresses in meters.
- The `metersToMiles(meters)` function calculates the equivalent number of miles for a given number of meters.
- The automation prompts the user to enter which row of start and end addresses to calculate the driving directions for and adds the step-by-step driving directions to a new sheet.

### Apps Script services

This solution uses the following services:

- [Spreadsheet service](https://developers.google.com/apps-script/reference/spreadsheet) –Adds the custom menu, adds demo data to test this solution, and formats the new sheets when the script adds driving directions.
- [Base service](https://developers.google.com/apps-script/reference/base) –Uses the `Browser` class to prompt the user to enter a row number for directions and alerts the user if an error occurs.
- [Utilities service](https://developers.google.com/apps-script/reference/script) –Updates templated strings with user-specified information.
- [Maps service](https://developers.google.com/apps-script/reference/maps) –Gets step-by-step Google Maps directions from the start address to the end address.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

1. Make a copy of the **Calculate driving distance and convert meters to miles** spreadsheet. The Apps Script project for this solution is attached to the spreadsheet:
	[Make a copy](https://docs.google.com/spreadsheets/d/1EBIkNFtbxcJtTy70-pJhzZIuHsJDcFhF37UC0mGPoK4/copy?usp=sharing)
2. To add headers and demo data to your sheet, click **Directions** \> **Prepare sheet**. You might need to refresh the page for this custom menu to appear.
3. When prompted, authorize the script. <<../\_snippets/oauth.md>>
4. Click **Directions** \> **Prepare sheet** again.

## Run the script

1. In cell `C2`, enter the formula `=DRIVINGDISTANCE(A2,B2)` and press **Enter**. If you're in a location that uses decimal commas, you might need to enter `=DRIVINGDISTANCE(A2;B2)` instead.
2. In cell `D2`, enter the formula `=METERSTOMILES(C2)` and press **Enter**.
3. (Optional) Add additional rows of start and end addresses and copy the formulas in columns `C` and `D` to calculate the driving distances between various places.
4. Click **Directions** \> **Generate step-by-step**.
5. In the dialog, enter the row number of the addresses for which you want to generate directions and click **OK**.
6. Review the driving directions in the new sheet the script creates.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
/**
 * @OnlyCurrentDoc Limits the script to only accessing the current sheet.
 */

/**
 * A special function that runs when the spreadsheet is open, used to add a
 * custom menu to the spreadsheet.
 */
function onOpen() {
  try {
    const spreadsheet = SpreadsheetApp.getActive();
    const menuItems = [
      { name: "Prepare sheet...", functionName: "prepareSheet_" },
      { name: "Generate step-by-step...", functionName: "generateStepByStep_" },
    ];
    spreadsheet.addMenu("Directions", menuItems);
  } catch (e) {
    // TODO (Developer) - Handle Exception
    console.log(\`Failed with error: %s${e.error}\`);
  }
}

/**
 * A custom function that converts meters to miles.
 *
 * @param {Number} meters The distance in meters.
 * @return {Number} The distance in miles.
 */
function metersToMiles(meters) {
  if (typeof meters !== "number") {
    return null;
  }
  return (meters / 1000) * 0.621371;
}

/**
 * A custom function that gets the driving distance between two addresses.
 *
 * @param {String} origin The starting address.
 * @param {String} destination The ending address.
 * @return {Number} The distance in meters.
 */
function drivingDistance(origin, destination) {
  const directions = getDirections_(origin, destination);
  return directions.routes[0].legs[0].distance.value;
}

/**
 * A function that adds headers and some initial data to the spreadsheet.
 */
function prepareSheet_() {
  try {
    const sheet = SpreadsheetApp.getActiveSheet().setName("Settings");
    const headers = [
      "Start Address",
      "End Address",
      "Driving Distance (meters)",
      "Driving Distance (miles)",
    ];
    const initialData = [
      "350 5th Ave, New York, NY 10118",
      "405 Lexington Ave, New York, NY 10174",
    ];
    sheet.getRange("A1:D1").setValues([headers]).setFontWeight("bold");
    sheet.getRange("A2:B2").setValues([initialData]);
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, 4);
  } catch (e) {
    // TODO (Developer) - Handle Exception
    console.log(\`Failed with error: %s${e.error}\`);
  }
}

/**
 * Creates a new sheet containing step-by-step directions between the two
 * addresses on the "Settings" sheet that the user selected.
 */
function generateStepByStep_() {
  try {
    const spreadsheet = SpreadsheetApp.getActive();
    const settingsSheet = spreadsheet.getSheetByName("Settings");
    settingsSheet.activate();

    // Prompt the user for a row number.
    const selectedRow = Browser.inputBox(
      "Generate step-by-step",
      "Please enter the row number of" +
        " the" +
        " addresses to use" +
        ' (for example, "2"):',
      Browser.Buttons.OK_CANCEL,
    );
    if (selectedRow === "cancel") {
      return;
    }
    const rowNumber = Number(selectedRow);
    if (
      Number.isNaN(rowNumber) ||
      rowNumber < 2 ||
      rowNumber > settingsSheet.getLastRow()
    ) {
      Browser.msgBox(
        "Error",
        Utilities.formatString('Row "%s" is not valid.', selectedRow),
        Browser.Buttons.OK,
      );
      return;
    }

    // Retrieve the addresses in that row.
    const row = settingsSheet.getRange(rowNumber, 1, 1, 2);
    const rowValues = row.getValues();
    const origin = rowValues[0][0];
    const destination = rowValues[0][1];
    if (!origin || !destination) {
      Browser.msgBox(
        "Error",
        "Row does not contain two addresses.",
        Browser.Buttons.OK,
      );
      return;
    }

    // Get the raw directions information.
    const directions = getDirections_(origin, destination);

    // Create a new sheet and append the steps in the directions.
    const sheetName = \`Driving Directions for Row ${rowNumber}\`;
    let directionsSheet = spreadsheet.getSheetByName(sheetName);
    if (directionsSheet) {
      directionsSheet.clear();
      directionsSheet.activate();
    } else {
      directionsSheet = spreadsheet.insertSheet(
        sheetName,
        spreadsheet.getNumSheets(),
      );
    }
    const sheetTitle = Utilities.formatString(
      "Driving Directions from %s to %s",
      origin,
      destination,
    );
    const headers = [
      [sheetTitle, "", ""],
      ["Step", "Distance (Meters)", "Distance (Miles)"],
    ];
    const newRows = [];
    for (const step of directions.routes[0].legs[0].steps) {
      // Remove HTML tags from the instructions.
      const instructions = step.html_instructions
        .replace(/<br>|<div.*?>/g, "\n")
        .replace(/<.*?>/g, "");
      newRows.push([instructions, step.distance.value]);
    }
    directionsSheet.getRange(1, 1, headers.length, 3).setValues(headers);
    directionsSheet
      .getRange(headers.length + 1, 1, newRows.length, 2)
      .setValues(newRows);
    directionsSheet
      .getRange(headers.length + 1, 3, newRows.length, 1)
      .setFormulaR1C1("=METERSTOMILES(R[0]C[-1])");

    // Format the new sheet.
    directionsSheet.getRange("A1:C1").merge().setBackground("#ddddee");
    directionsSheet.getRange("A1:2").setFontWeight("bold");
    directionsSheet.setColumnWidth(1, 500);
    directionsSheet.getRange("B2:C").setVerticalAlignment("top");
    directionsSheet.getRange("C2:C").setNumberFormat("0.00");
    const stepsRange = directionsSheet
      .getDataRange()
      .offset(2, 0, directionsSheet.getLastRow() - 2);
    setAlternatingRowBackgroundColors_(stepsRange, "#ffffff", "#eeeeee");
    directionsSheet.setFrozenRows(2);
    SpreadsheetApp.flush();
  } catch (e) {
    // TODO (Developer) - Handle Exception
    console.log(\`Failed with error: %s${e.error}\`);
  }
}

/**
 * Sets the background colors for alternating rows within the range.
 * @param {Range} range The range to change the background colors of.
 * @param {string} oddColor The color to apply to odd rows (relative to the
 *     start of the range).
 * @param {string} evenColor The color to apply to even rows (relative to the
 *     start of the range).
 */
function setAlternatingRowBackgroundColors_(range, oddColor, evenColor) {
  const backgrounds = [];
  for (let row = 1; row <= range.getNumRows(); row++) {
    const rowBackgrounds = [];
    for (let column = 1; column <= range.getNumColumns(); column++) {
      if (row % 2 === 0) {
        rowBackgrounds.push(evenColor);
      } else {
        rowBackgrounds.push(oddColor);
      }
    }
    backgrounds.push(rowBackgrounds);
  }
  range.setBackgrounds(backgrounds);
}

/**
 * A shared helper function used to obtain the full set of directions
 * information between two addresses. Uses the Apps Script Maps Service.
 *
 * @param {String} origin The starting address.
 * @param {String} destination The ending address.
 * @return {Object} The directions response object.
 */
function getDirections_(origin, destination) {
  const directionFinder = Maps.newDirectionFinder();
  directionFinder.setOrigin(origin);
  directionFinder.setDestination(destination);
  const directions = directionFinder.getDirections();
  if (directions.status !== "OK") {
    throw directions.error_message;
  }
  return directions;
}
```

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Custom functions in Google Sheets](https://developers.google.com/apps-script/guides/sheets/functions)
- [Custom menus in Google Workspace](https://developers.google.com/apps-script/guides/menus)
