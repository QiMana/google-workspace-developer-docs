---
source: https://developers.google.com/workspace/gmail/markup/apps-script-tutorial
root: workspace
fetched_at: 2026-04-23T15:29:07.830Z
---

# Apps Script Quickstart

This article shows you how to use [Apps Script](https://developers.google.com/apps-script) to send yourself an email with schemas in order to test email markup.

## Creating the project

Visit [script.google.com](https://script.google.com/). If this is the first time you've been to `script.google.com`, you'll be redirected to an information page. Click **Start Scripting** to proceed to the script editor. In the script editor, create a script for a **Blank Project**.

Replace the code in `Code.gs` with the following:

```
/**
 * Send an email with schemas in order to test email markup.
 */
function testSchemas() {
  try {
    const htmlBody =
      HtmlService.createHtmlOutputFromFile("mail_template").getContent();

    MailApp.sendEmail({
      to: Session.getActiveUser().getEmail(),
      subject: \`Test Email markup - ${new Date()}\`,
      htmlBody: htmlBody,
    });
  } catch (err) {
    console.log(err.message);
  }
}
```

Select **File > New > Html file** to create a new HTML file. Name the file `mail_template` to match the parameter in the JavaScript above. Replace the content of the HTML file with the following:

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

<html>
  <head>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "EmailMessage",
      "description": "Check this out",
      "potentialAction": {
        "@type": "ViewAction",
        "target": "https://www.youtube.com/watch?v=eH8KwfdkSqU"
      }
    }
    </script>
  </head>
  <body>
    <p>
      This a test for a Go-To action in Gmail.
    </p>
  </body>
</html>
```

## Testing the script

To test the script:

1. Save the project.
2. Select the tab for `Code.gs`.
3. Make sure the function `testSchemas` is selected in the `Select function` dropdown menu.
4. Click `Run` in the Apps Script development environment.

The first time you run the script you'll be asked to grant authorization, after which you should re-run it. After the script runs, check your inbox for an email sent from yourself with a [Go-To Action](https://developers.google.com/workspace/gmail/markup/reference/one-click-action) button, as in the following screenshot:

![Apps Script Tutorial](https://developers.google.com/static/workspace/gmail/markup/images/apps-script-tutorial.png)

## How does the script work?

The `testSchemas` function reads the HTML content from the file named `mail_template.html` and sends that content as an email to the currently authenticated user. As explained in [Registering with Google](https://developers.google.com/workspace/gmail/markup/registering-with-google), all schemas you send to yourself will be displayed in Gmail, so the email sent by the script can be used to ignore the registration requirements for testing purposes.
