---
source: https://developers.google.com/apps-script/samples/automations/youtube-tracker
root: apps-script
fetched_at: 2026-04-23T15:22:27.017Z
---

# Track YouTube video views & comments

## Page Summary

- This solution is a beginner-level automation project that takes 20 minutes to set up and uses a time-driven trigger.
- The project tracks public YouTube video performance (views, likes, comments) in a Google Sheets spreadsheet.
- The script checks for updates daily and sends a Gmail message for videos with new comment activity, enabling user engagement.
- The solution utilizes Spreadsheet, YouTube Data API, and Mail Apps Script services to gather data, retrieve video details and statistics, and send email notifications.

**Coding level**: Beginner  
**Duration**: 20 minutes  
**Project type**: Automation with a [time-driven trigger](https://developers.google.com/apps-script/guides/triggers/installable#time-driven_triggers)

## Objectives

- Understand what the solution does.
- Understand what the Google Apps Script services do within the solution.
- Set up the script.
- Run the script.

## About this solution

This solution tracks the performance of public YouTube videos, including views, likes, and comments, in a Google Sheets spreadsheet. The trigger checks for updated information each day and sends a Gmail message if videos have new comment activity so that you can engage with questions and comments.

![Google Sheet displaying YouTube video tracking data](https://developers.google.com/static/apps-script/samples/images/youtube-tracker.png)

![](https://developers.google.com/static/apps-script/samples/images/youtube-tracker.png)

### How it works

The script uses the advanced YouTube service to get YouTube video details and statistics for the video URLs listed in the **Video Link** column in each sheet. If the number of comments for a listed video has gone up, the script sends an email notification to the email address that the sheet is named after.

### Apps Script services

This solution uses the following services:

- [Spreadsheet service](https://developers.google.com/apps-script/reference/spreadsheet) –Gets the YouTube URL information from the spreadsheet.
- [YouTube Data API advanced service](https://developers.google.com/apps-script/advanced/youtube) –Gets the YouTube video details and statistics for each video URL.
- [Mail service](https://developers.google.com/apps-script/reference/mail) –Creates and sends an email in Gmail with a list of videos that have new comments.

## Prerequisites

To use this sample, you need the following prerequisites:

- A Google Account (Google Workspace accounts might require administrator approval).
- A web browser with access to the internet.

## Set up the script

To set up this script, follow these steps:

### Create the Apps Script project

1. To make a copy of the **Track YouTube video views and comments** spreadsheet, click the following button: [Make a copy](https://docs.google.com/spreadsheets/d/1r_CymH9Y4AYBDm57hlcwqSNR9X4JnBs7ZWlASIz_YAg/copy) The Apps Script project for this solution is attached to the spreadsheet.
2. In your copied spreadsheet, change the name of the **Your\_Email\_Address** sheet to your email address.
3. Add the YouTube video URLs you want to track or use the provided URLs for testing. The URLs must start with the format `www.youtube.com/watch?v=`.
4. Click **Extensions** \> **Apps Script**. If **YouTube** is already listed under **Services**, you can skip to the next 2 steps.
5. Next to **Services**, click Add a service .
6. From the list, select **YouTube Data API** and click **Add**.

### Create a trigger

1. In the Apps Script project, click **Triggers** \> **Add trigger**.
2. For **Choose which function to run**, select **markVideos**.
3. For **Select event source**, select **Time-driven**.
4. For **Select type of time based trigger**, select **Day timer**.
5. For **Select time of day**, choose your preferred time.
6. When prompted, authorize the script. <<../\_snippets/oauth.md>>

## Run the script

The trigger you set up runs the script once daily. You can run the script manually to test it.

1. In the Apps Script project, click **Editor** .
2. In the function drop-down, select **markVideos**.
3. Click **Run**.
4. Switch back to the spreadsheet to review the information the script added to the sheet.
5. Open your email to review the email with the list of videos that have more than zero comments. When the script runs in the future, it only sends an email with videos whose comment count has increased since the last time the script ran.

## Review the code

To review the Apps Script code for this solution, click **View source code**:

#### View source code

### Code.gs

```
// To learn how to use this script, refer to the documentation:
// https://developers.google.com/apps-script/samples/automations/youtube-tracker

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

// Sets preferences for email notification. Choose 'Y' to send emails, 'N' to skip emails.
const EMAIL_ON = "Y";

// Matches column names in Video sheet to variables. If the column names change, update these variables.
const COLUMN_NAME = {
  VIDEO: "Video Link",
  TITLE: "Video Title",
};

/**
 * Gets YouTube video details and statistics for all
 * video URLs listed in 'Video Link' column in each
 * sheet. Sends email summary, based on preferences above,
 * when videos have new comments or replies.
 */
function markVideos() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();

  // Runs through process for each tab in Spreadsheet.
  for (const dataSheet of sheets) {
    const tabName = dataSheet.getName();
    const range = dataSheet.getDataRange();
    const numRows = range.getNumRows();
    const rows = range.getValues();
    const headerRow = rows[0];

    // Finds the column indices.
    const videoColumnIdx = headerRow.indexOf(COLUMN_NAME.VIDEO);
    const titleColumnIdx = headerRow.indexOf(COLUMN_NAME.TITLE);

    // Creates empty array to collect data for email table.
    const emailContent = [];

    // Processes each row in spreadsheet.
    for (let i = 1; i < numRows; ++i) {
      const row = rows[i];
      // Extracts video ID.
      const videoId = extractVideoIdFromUrl(row[videoColumnIdx]);
      // Processes each row that contains a video ID.
      if (!videoId) {
        continue;
      }
      // Calls getVideoDetails function and extracts target data for the video.
      const detailsResponse = getVideoDetails(videoId);
      const title = detailsResponse.items[0].snippet.title;
      const publishDate = detailsResponse.items[0].snippet.publishedAt;
      const publishDateFormatted = new Date(publishDate);
      const views = detailsResponse.items[0].statistics.viewCount;
      const likes = detailsResponse.items[0].statistics.likeCount;
      const comments = detailsResponse.items[0].statistics.commentCount;
      const channel = detailsResponse.items[0].snippet.channelTitle;

      // Collects title, publish date, channel, views, comments, likes details and pastes into tab.
      const detailsRow = [
        title,
        publishDateFormatted,
        channel,
        views,
        comments,
        likes,
      ];
      dataSheet
        .getRange(i + 1, titleColumnIdx + 1, 1, 6)
        .setValues([detailsRow]);

      // Determines if new count of comments/replies is greater than old count of comments/replies.
      const addlCommentCount = comments - row[titleColumnIdx + 4];

      // Adds video title, link, and additional comment count to table if new counts > old counts.
      if (addlCommentCount > 0) {
        const emailRow = [title, row[videoColumnIdx], addlCommentCount];
        emailContent.push(emailRow);
      }
    }
    // Sends notification email if Content is not empty.
    if (emailContent.length > 0 && EMAIL_ON === "Y") {
      sendEmailNotificationTemplate(emailContent, tabName);
    }
  }
}

/**
 * Gets video details for YouTube videos
 * using YouTube advanced service.
 */
function getVideoDetails(videoId) {
  const part = "snippet,statistics";
  const response = YouTube.Videos.list(part, { id: videoId });
  return response;
}

/**
 * Extracts YouTube video ID from url.
 * (h/t https://stackoverflow.com/a/3452617)
 */
function extractVideoIdFromUrl(url) {
  let videoId = url.split("v=")[1];
  const ampersandPosition = videoId.indexOf("&");
  if (ampersandPosition !== -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }
  return videoId;
}

/**
 * Assembles notification email with table of video details.
 * (h/t https://stackoverflow.com/questions/37863392/making-table-in-google-apps-script-from-array)
 */
function sendEmailNotificationTemplate(content, emailAddress) {
  const template = HtmlService.createTemplateFromFile("email");
  template.content = content;
  const msg = template.evaluate();
  MailApp.sendEmail(
    emailAddress,
    "New comments or replies on YouTube",
    msg.getContent(),
    { htmlBody: msg.getContent() },
  );
}
```

### email.html

```
<!--
 Copyright 2022 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<body>
  Hello,<br><br>You have new comments and/or replies on videos: <br><br>
  <table border="1">
    <tr>
      <th>Video Title</th>
      <th>Link</th>
      <th>Number of new replies and comments</th>
    </tr>
    <? for (var i = 0; i < content.length; i++) { ?>
    <tr>
      <? for (var j = 0; j < content[i].length; j++) { ?>
      <td align="center"><?= content[i][j] ?></td>
      <? } ?>
    </tr>
    <? } ?>
  </table>
</body>
```

## Contributors

This sample is maintained by Google with the help of Google Developer Experts.

## Next steps

- [Time-driven triggers](https://developers.google.com/apps-script/guides/triggers/installable#time-driven_triggers)
- [Extend Sheets](https://developers.google.com/apps-script/guides/sheets)
