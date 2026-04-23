---
source: https://developers.google.com/apps-script/samples/automations/bracket-maker
root: apps-script
fetched_at: 2026-04-23T15:22:16.634Z
---

# Create a tournament bracket

## Page Summary

- This solution creates a single-elimination tournament bracket for up to 64 people or teams using Google Sheets and Apps Script.
- The script automatically determines the number of rounds needed, formats the sheet to create the tree diagram, and adds the players' names to the first round.
- It utilizes the Spreadsheet service in Apps Script to interact with the sheet, get player data, and format the bracket.
- To use the solution, you need a Google Account, access to the internet, and you need to make a copy of the provided sample spreadsheet.
- Running the script involves clicking a custom menu item in the spreadsheet and authorizing the script if prompted.

**Coding level**: Beginner **Duration**: 5 minutes **Project type**: Automation with a [custom menu](../../guides/menus.md)

## Objectives

- Understand what the solution does.
- Understand what the Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

Create a tournament bracket for up to 64 people or teams. This solution creates a tree diagram that represents a single-elimination tournament.

![Example of a completed tournament bracket](https://developers.google.com/static/apps-script/samples/images/bracket.png)

![](https://developers.google.com/static/apps-script/samples/images/bracket.png)

### How it works

The script loops through the list of players and determines how many rounds are needed in the bracket. The script formats the **Bracket** sheet to create the tree diagram and adds the players' names to the first round.

### Apps Script services

This solution uses the following service:

- [Spreadsheet service](../../reference/spreadsheet.md): Gets the range of players and creates the tree diagram for the tournament.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

Click the following button to make a copy of the **Create a tournament bracket** sample spreadsheet:

[Make a copy](https://docs.google.com/spreadsheets/d/19AUMQVmtGmNgX1jhs5dBQ4D_Afb3DMa3MNHB4PHD3aI/copy)

## Run the script

1. In your copied spreadsheet, click **Bracket maker** \> **Create bracket**. You might need to refresh the page for this custom menu to appear.
2. When prompted, authorize the script. <<../\_snippets/oauth.md>>
3. Click **Bracket maker** \> **Create bracket** again.
4. Switch to the **Bracket** tab to view the tournament bracket.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/bracket-maker

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

const RANGE_PLAYER1 = "FirstPlayer";
const SHEET_PLAYERS = "Players";
const SHEET_BRACKET = "Bracket";
const CONNECTOR_WIDTH = 15;

/**
 * Adds a custom menu item to run the script.
 */
function onOpen() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.addMenu("Bracket maker", [
    { name: "Create bracket", functionName: "createBracket" },
  ]);
}

/**
 * Creates the brackets based on the data provided on the players.
 */
function createBracket() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let rangePlayers = ss.getRangeByName(RANGE_PLAYER1);
  const sheetControl = ss.getSheetByName(SHEET_PLAYERS);
  const sheetResults = ss.getSheetByName(SHEET_BRACKET);

  // Gets the players from column A.  Assumes the entire column is filled.
  rangePlayers = rangePlayers.offset(
    0,
    0,
    sheetControl.getMaxRows() - rangePlayers.getRowIndex() + 1,
    1,
  );
  let players = rangePlayers.getValues();

  // Figures out how many players there are by skipping the empty cells.
  let numPlayers = 0;
  for (let i = 0; i < players.length; i++) {
    if (!players[i][0] || players[i][0].length === 0) {
      break;
    }
    numPlayers++;
  }
  players = players.slice(0, numPlayers);

  // Provides some error checking in case there are too many or too few players/teams.
  if (numPlayers > 64) {
    Browser.msgBox(
      "Sorry, this script can only create brackets for 64 or fewer players.",
    );
    return; // Early exit
  }

  if (numPlayers < 3) {
    Browser.msgBox("Sorry, you must have at least 3 players.");
    return; // Early exit
  }

  // Clears the 'Bracket' sheet and all formatting.
  sheetResults.clear();

  let upperPower = Math.ceil(Math.log(numPlayers) / Math.log(2));

  // Calculates the number that is a power of 2 and lower than numPlayers.
  const countNodesUpperBound = 2 ** upperPower;

  // Calculates the number that is a power of 2 and higher than numPlayers.
  const countNodesLowerBound = countNodesUpperBound / 2;

  // Determines the number of nodes that will not show in the 1st level.
  const countNodesHidden = numPlayers - countNodesLowerBound;

  // Enters the players for the 1st round.
  const currentPlayer = 0;
  for (let i = 0; i < countNodesLowerBound; i++) {
    if (i < countNodesHidden) {
      // Must be on the first level
      const rng = sheetResults.getRange(i * 4 + 1, 1);
      setBracketItem_(rng, players);
      setBracketItem_(rng.offset(2, 0, 1, 1), players);
      setConnector_(sheetResults, rng.offset(0, 1, 3, 1));
      setBracketItem_(rng.offset(1, 2, 1, 1));
    } else {
      // This player gets a bye.
      setBracketItem_(sheetResults.getRange(i * 4 + 2, 3), players);
    }
  }

  // Fills in the rest of the bracket.
  upperPower--;
  for (let i = 0; i < upperPower; i++) {
    const pow1 = 2 ** (i + 1);
    const pow2 = 2 ** (i + 2);
    const pow3 = 2 ** (i + 3);
    for (let j = 0; j < 2 ** (upperPower - i - 1); j++) {
      setBracketItem_(sheetResults.getRange(j * pow3 + pow2, i * 2 + 5));
      setConnector_(
        sheetResults,
        sheetResults.getRange(j * pow3 + pow1, i * 2 + 4, pow2 + 1, 1),
      );
    }
  }
}

/**
 * Sets the value of an item in the bracket and the color.
 * @param {Range} rng The Spreadsheet Range.
 * @param {string[]} players The list of players.
 */
function setBracketItem_(rng, players) {
  if (players) {
    const rand = Math.ceil(Math.random() * players.length);
    rng.setValue(players.splice(rand - 1, 1)[0][0]);
  }
  rng.setBackgroundColor("yellow");
}

/**
 * Sets the color and width for connector cells.
 * @param {Sheet} sheet The spreadsheet to setup.
 * @param {Range} rng The spreadsheet range.
 */
function setConnector_(sheet, rng) {
  sheet.setColumnWidth(rng.getColumnIndex(), CONNECTOR_WIDTH);
  rng.setBackgroundColor("green");
}
```

```
</section>
```

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Custom menus in Google Workspace](../../guides/menus.md)
- [Extending Google Sheets](../../guides/sheets.md)
