---
source: https://developers.google.com/apps-script/samples/automations/tax-loss-harvest-alerts
root: apps-script
fetched_at: 2026-04-23T15:22:20.623Z
---

# Get stock price drop alerts

## Page Summary

- This solution helps identify potential tax loss harvest opportunities by tracking stock prices in a Google Sheet.
- The Google Finance function in Sheets gets current stock prices, and an Apps Script compares them to your purchase prices.
- You receive email alerts for stocks that have dropped below their purchase price, which can be set to run automatically.
- The setup involves copying a sample spreadsheet and running the attached Apps Script.
- The Apps Script uses the Spreadsheet service to read data and the Gmail service to send alerts.

**Coding level**: Beginner  
**Duration**: 5 minutes  
**Project type**: Automation with a [time-driven trigger](https://developers.google.com/apps-script/guides/triggers/installable#time-driven_triggers)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

If you purchase a stock and the value drops, you can sell that stock, purchase another, and claim a tax deduction. Doing so is known as a tax loss harvest. List your stocks in a Google Sheets spreadsheet and get email alerts if a stock price drops below its purchase price.

![Google Sheet with stock prices and a Gmail email alert.](https://developers.google.com/static/apps-script/samples/images/stock-alerts.png)

![](https://developers.google.com/static/apps-script/samples/images/stock-alerts.png)

### How it works

The spreadsheet uses the [Google Finance built-in function](https://support.google.com/docs/answer/3093281) in Sheets to get the current prices of stocks. The script compares the purchase price of each listed stock with its current price. Then, it emails you a list of stocks that have fallen below their purchase price. You can set the script to run as often as you want.

### Apps Script services

This solution uses the following services:

- [Spreadsheet service](https://developers.google.com/apps-script/reference/spreadsheet): Loops through each listed stock and compares the stock price to the purchase price.
- [Gmail service](https://developers.google.com/apps-script/reference/gmail): Creates and sends an email of the stocks that have fallen below their purchase price.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

1. Click the following button to make a copy of the **Tax loss harvest alerts** sample spreadsheet. The Apps Script project for this solution is attached to the spreadsheet.
	[Make a copy](https://docs.google.com/spreadsheets/d/1hYxWe9zku7XcY0JO3KCOABqkk03K9L0xDytnSm4v71Y/copy)
2. In your copied spreadsheet, update the sheet with your own stock information, or use the provided test data.

## Run the script

1. In your copied spreadsheet, select **Extensions** \> **Apps Script**.
2. In the function drop-down, select **checkLosses**.
3. Click **Run**.
4. When prompted, authorize the script. <<../\_snippets/oauth.md>>
5. Check your email for a list of stocks that fell below their purchase price. If you didn't receive an email, check to see if any of the stock prices in your list are lower than their purchase price.

### Create a time-driven trigger

1. Return to the script project.
2. At the left, click **Triggers** .
3. At the bottom-right, click **Add trigger**.
4. For **Choose which function to run**, make sure **checkLosses** is selected.
5. For **Select event source**, select **Time-driven**.
6. Configure how often you want the script to run and click **Save**.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/tax-loss-harvest-alerts

/*
Copyright 2022 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Checks for losses in the sheet.
 */
function checkLosses() {
  // Pulls data from the spreadsheet
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Calculations");
  const source = sheet.getRange("A:G");
  const data = source.getValues();

  //Prepares the email alert content
  let message = "Stocks: <br><br>";

  let send_message = false;

  console.log("starting loop");

  //Loops through the cells in the spreadsheet to find cells where the stock fell below purchase price
  let n = 0;
  for (const i in data) {
    //Skips the first row
    if (n++ === 0) continue;

    //Loads the current row
    const row = data[i];

    console.log(row[1]);
    console.log(row[6]);

    //Once at the end of the list, exits the loop
    if (row[1] === "") break;

    //If value is below purchase price, adds stock ticker and difference to list of tax loss opportunities
    if (row[6] < 0) {
      message += \`${row[1]}: ${(Number.parseFloat(row[6].toString()) * 100).toFixed(2).toString()}%<br>\`;
      send_message = true;
    }
  }
  if (!send_message) return;

  MailApp.sendEmail({
    to: SpreadsheetApp.getActiveSpreadsheet().getOwner().getEmail(),
    subject: "Tax-loss harvest",
    htmlBody: message,
  });
}
```

## Contributors

This sample was created by Jeremy Glassenberg, Product Management and Platform Strategy Consultant. Find Jeremy on Twitter [@jglassenberg](https://twitter.com/jglassenberg).

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Time-driven triggers](https://developers.google.com/apps-script/guides/triggers/installable#time-driven_triggers)
- [Extend Sheets](https://developers.google.com/apps-script/guides/sheets)
