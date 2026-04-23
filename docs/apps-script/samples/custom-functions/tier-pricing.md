---
source: https://developers.google.com/apps-script/samples/custom-functions/tier-pricing
root: apps-script
fetched_at: 2026-04-23T15:22:26.514Z
---

# Calculate a tiered pricing discount

## Page Summary

- This solution uses a custom function to calculate tiered pricing discounts in Google Sheets, which is simpler and more flexible than the built-in `SUMPRODUCT` function for this purpose.
- The script works by iterating through defined price tiers and applying the associated discount percentage to the portion of the total price that falls within each tier.
- This beginner-level project uses the Google Apps Script Spreadsheet service and requires a Google Account to set up and run.
- The provided sample demonstrates calculating discounts for a SaaS product and includes instructions on how to use the `tierPrice()` custom function in a Google Sheet.
- You can optionally add a checkbox to manually refresh the results of the custom function due to caching optimizations in Google Sheets.

**Coding level**: Beginner  
**Duration**: 10 minutes  
**Project type**: [Custom function](../../guides/sheets/functions.md)

## Objectives

- Understand what the solution does.
- Understand what the Google Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

If you offer a tiered pricing system for your customers, this custom function makes it easier to calculate the discount amounts for your prices in Google Sheets.

Though you could use the built-in function `SUMPRODUCT` to make a tiered pricing calculation, using `SUMPRODUCT` is more complex and less flexible than this solution's custom function.

![Google Sheet showing a tiered pricing calculation.](https://developers.google.com/static/apps-script/samples/images/tier-pricing.png)

![](https://developers.google.com/static/apps-script/samples/images/tier-pricing.png)

### How it works

A tiered pricing model means that the cost of goods or services goes down based on the quantity purchased.

For example, imagine you have two tiers, one that ranges from $0-$500 and is discounted by 10% and one that ranges from $501-$1,000 and is discounted by 20%. If the total price you need to calculate a discount for is $700, the script multiplies the first $500 by 10% and the remaining $200 by 20%, for a total discount of $90.

For a given total price, the script loops through the specified tiers in the tier pricing table. For each portion of the total price that falls within a tier, that portion is multiplied by the tier's associated percent value. The result is the sum of each tier's calculation.

### Apps Script services

This solution uses the following service:

- [Spreadsheet service](../../reference/spreadsheet.md): Takes the given value and calculates what portion of the value to multiply by each tier's percent discount.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

To make a copy of the **Tier pricing custom function** spreadsheet, click the following button:

[Make a copy](https://docs.google.com/spreadsheets/d/13X-3pz8P_sfAyNqUJrGe0HdgzKARIMxC6Y6xZDAF7M0/copy)

The Apps Script project for this solution is attached to the spreadsheet.

## Run the script

1. In your copied spreadsheet, the table at row 16 shows a sample price calculation for a Software as a Service (SaaS) product.
2. To calculate the discount amount, in cell `C20`, enter `=tierPrice(C19,$B$3:$D$6)`. The final price updates in cell `C21`. If you're in a location that uses decimal commas, you might need to enter `=tierPrice(C19;$B$3:$D$6)` instead.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/custom-functions/tier-pricing

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
 * Calculates the tiered pricing discount.
 *
 * You must provide a value to calculate its discount. The value can be a string or a reference
 * to a cell that contains a string.
 * You must provide a data table range, for example, $B$4:$D$7, that includes the
 * tier start, end, and percent columns. If your table has headers, don't include
 * the headers in the range.
 *
 * @param {string} value The value to calculate the discount for, which can be a string or a
 * reference to a cell that contains a string.
 * @param {string} table The tier table data range using A1 notation.
 * @return number The total discount amount for the value.
 * @customfunction
 *
 */
function tierPrice(value, table) {
  let total = 0;
  // Creates an array for each row of the table and loops through each array.
  for (const [start, end, percent] of table) {
    // Checks if the value is less than the starting value of the tier. If it is less, the loop stops.
    if (value < start) {
      break;
    }
    // Calculates the portion of the value to be multiplied by the tier's percent value.
    const amount = Math.min(value, end) - start;
    // Multiplies the amount by the tier's percent value and adds the product to the total.
    total += amount * percent;
  }
  return total;
}
```

## Modifications

You can edit the custom function as much as you'd like to fit your needs. To see an optional addition to manually refresh custom function results, click **Refresh cached results**:

#### Refresh cached results

Unlike built-in functions, Google caches custom functions to optimize performance. Therefore, if you change something within your custom function, such as a value that's being calculated, it might not immediately force an update. To refresh the function result manually, take the following steps:

1. Add a checkbox to an empty cell by clicking **Insert** \> **Checkbox**.
2. Add the cell that has the checkbox as an extra parameter of the custom function. For example, if you add a checkbox to cell `D20`, update the `tierPrice()` function in cell `C20` to `=tierPrice(C19,$B$3:$D$6,D20)`.
3. Check or uncheck the checkbox to refresh the custom function results.

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Custom functions in Sheets](../../guides/sheets/functions.md)
- [Extending Sheets](../../guides/sheets.md)
